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

    var view = View({
            templateId: 'stats',
            events: {
                '.clear-completed': {
                    'click': function (e) {
                        Pubsub.fire('action.todo', 'clearCompleted');
                    }
                }
            }
        }),
        exports = {
            render: function () {
                view.setData({
                    remaining: TodoCollection.getAll({completed: false}).length || 0,
                    page: MainRouter.getCurrentPath() || '/',
                    completed: TodoCollection.getAll({completed: true}).length
                });
                view.render('.footer');
            }
        };

    return exports;

});
