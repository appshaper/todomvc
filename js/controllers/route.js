define([
    'appshaper/mvc/controller',
    'views/todo',
    'views/stats'
], function (
    Controller,
    TodoView,
    StatsView
) {

    'use strict';

    Controller('route', {
        default: function (data) {
            TodoView.render();
            StatsView.render();
        }
    });

});
