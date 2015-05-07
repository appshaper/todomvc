define([
    'appshaper/mvc/collection',
    'models/todo'
], function (
    Collection,
    TodoModel
) {

    'use strict';

    return Collection('todo', {
        useStorage: true,
        model: TodoModel,
        methods: {
            getNextId: function () {
                var maxId = 0;

                this.getFlatData().forEach(function (todo) {
                    if (todo.id > maxId) {
                        maxId = todo.id;
                    }
                });
                return maxId + 1;
            },
            createTodo: function (description) {
                this.add(
                    TodoModel({
                        id: this.getNextId(),
                        description: description.value.trim(),
                        completed: false
                    })
                );
            },
            editTodo: function (id, description) {
                this.get({id: id}).set('description', description);
                this.save();
            },
            removeTodo: function (id) {
                this.remove(this.get({id: id}));
            },
            toggleTodo: function (id) {
                this.get({id: id}).toggle();
                this.save();
            },
            toggleAllTodos: function (value) {
                this.data.forEach(function (todo) {
                    todo.set('completed', value);
                });
                this.save();
            },
            clearCompletedTodos: function () {
                var completedTodos = this.getAll({completed: true}),
                    self = this;

                completedTodos.forEach(function (completedTodo) {
                    self.remove(completedTodo);
                });
            }
        }
    })();

});
