define([
    'views/app',
    'routers/main',
    'controllers/route',
    'controllers/action/todo'
], function (
    AppView,
    MainRouter
) {

    'use strict';

    return function () {
        AppView.render();
        MainRouter.route();
    };
});
