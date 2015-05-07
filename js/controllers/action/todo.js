define([
    'appshaper/utils/check',
    'appshaper/mvc/controller',
    'appshaper/pubsub',
    'collections/todo',
    'models/todo',
    'views/todo',
    'views/stats'
], function (
    Check,
    Controller,
    Pubsub,
    TodoCollection,
    TodoModel,
    TodoView,
    StatsView
) {

    'use strict';

    var toggle = true,
        refreshViews = function () {
            TodoView.render();
            StatsView.render();
        };

    Controller('action.todo', {
        create: function (description) {
            if (!Check.isEmpty(description)) {
                TodoCollection.createTodo(description);
                refreshViews();
                description.value = '';
            }
        },
        edit: function (target) {
            var parent = target.parentNode,
                id = parseInt(parent.querySelector('.view').dataset.id),
                description = target.value.trim();

            TodoCollection.editTodo(id, description);
            TodoView.render();
        },
        remove: function (target) {
            var id = parseInt(target.parentNode.dataset.id);
            TodoCollection.removeTodo(id);
            refreshViews();
        },
        toggle: function (target) {
            var id = parseInt(target.parentNode.dataset.id);
            TodoCollection.toggleTodo(id);

            toggle = false;
            refreshViews();
        },
        toggleAll: function () {
            toggle = toggle === true ? false : true;
            TodoCollection.toggleAllTodos(toggle);
            refreshViews();
        },
        clearCompleted: function () {
            TodoCollection.clearCompletedTodos();
            refreshViews();
        }
    });

});
