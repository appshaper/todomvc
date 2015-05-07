define([
    'appshaper/mvc/view',
    'appshaper/pubsub',
    'collections/todo',
    'routers/main'
], function (
    View,
    Pubsub,
    TodoCollection,
    MainRouter
) {

    'use strict';

    /*

        Appshaper strives to reach just the right balance between what you expect the library modules to do for you and what you can achieve for yourself,
        where to provide syntactic sugar, and where native JavaScript suffices.

        Set data directly in view instead of using setData?

        Make the models with a single constructor.

        Not everything should be build into a framework but instead we should use a couple of best practices.


        Flow:

        A router instance should be a singleton so everyone can ask for the current path and base their logic upon it.

        A controller will listen to pubsub event within its namespace. A controller named route will listen to route events.

        A page controller can listen to route events and fires the relevant application logic. The path send with the route event
        directly fires a controller method with the same name (toLowerCase).

        An action controller listens automatically to action events in it's namespace. f.e. If you create an action controller with the name
        "todo" and create a method in it called "create", this method will be called automatically when the "action.todo.create" is fired.

        A model can be constructed with a definition. It contains two properties: fields:where you can define the fields and value types for this model,
        methods: where you can define the methods the model uses. You can automatically access the data fields from the methods using this.fieldName.
        Usually a module contains utility methods which make it easier to set the fields. A model has a create method which can be used to create
        a new instance of the model. The instance automatically contains default methods: get, set, getData, setData, getDefinition, checkDefintion.
        If you override one of these methods by using the same method name in the definition, the default method will be overwritten.

        You can subscribe (model uses pubsub internally) to field update events.

        A Collection is a list of models. You can construct a collection with an array of models or use the add method to add new models to the collection.
        So a collection can also be constructed with an object with two properties: models and methods. The methods are custom methods to manipulate collection data.
        Like with models, collections also have default methods which can be overwritten: add, remove, save, get, getAll, getData(flat), getLength

        If you overwrite a method in a model or a collection, you can still access the default method using this.parent from within the custom method.
        In this way you can extend the default method with your own custom logic.

        You can subscribe (collection uses pubsub internally) to collection update events.

    */

    var view = View({
            templateId: 'item',
            events: {
                '.toggle': {
                    'change': function (e) {
                        Pubsub.fire('action.todo', 'toggle', e.target);
                    }
                },
                '.destroy': {
                    'click': function (e) {
                        Pubsub.fire('action.todo', 'remove', e.target);
                    }
                },
                'label': {
                    'dblclick': function (e) {
                        var parentNode = e.target.parentNode.parentNode;
                        parentNode.className = 'editing';
                        parentNode.querySelector('.edit').focus();
                    }
                },
                '.edit': {
                    'blur': function (e) {
                        if (e.target.parentNode.className === 'editing') {
                            edit(e);
                        }
                    },
                    'keydown': function (e) {
                        if (e.keyCode === 13) {
                            edit(e);
                        }
                    }
                }
            }
        }),
        edit = function (e) {
            Pubsub.fire('action.todo', 'edit', e.target);
        },
        toggleElementVisibility = function (id, visibility) {
            var element = document.getElementById(id);
            if (id !== null) {
                element.style.display = visibility === true ? 'block' : 'none';
            }
        },
        exports = {
            render: function () {
                var data,
                    allData = TodoCollection.getFlatData(),
                    activeData = TodoCollection.getAll({completed: false}, true),
                    currentPath = MainRouter.getCurrentPath();

                if (currentPath === '/' || currentPath === 'all') {
                    data = allData;
                } else if (currentPath === 'active') {
                    data = activeData;
                } else if (currentPath === 'completed') {
                    data = TodoCollection.getAll({completed: true}, true);
                }
                if (allData.length === 0) {
                    toggleElementVisibility('main', false);
                    toggleElementVisibility('footer', false);
                } else {
                    toggleElementVisibility('main', true);
                    toggleElementVisibility('footer', true);
                }
                document.querySelector('#toggle-all').checked = (activeData.length > 0) ? false : true;
                view.setData({
                    todos: data
                });

                // use default?
                view.render('.todo-list');
            }
        };

    return exports;

});
