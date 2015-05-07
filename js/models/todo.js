define([
    'appshaper/mvc/model'
], function (Model) {

    'use strict';

    return Model('todo', {
        fields: {
            id: 'number',
            description: 'string',
            completed: 'boolean'
        },
        methods: {
            getData: function () {
                return this;
            },
            toggle: function () {
                this.data.completed = this.data.completed === true ? false : true;
            }
        }
    });

});
