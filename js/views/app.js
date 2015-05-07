define([
    'appshaper/mvc/view',
    'appshaper/pubsub'
], function (
    View,
    Pubsub
) {

    'use strict';

    return View({
        templateId: 'app',
        data: {
            header: {
                placeholder: 'What needs to be done?'
            },
            footer: {
                description: 'Double-click to edit a todo',
                author: {
                    name: 'Jeroen Reurings',
                    url: 'http://appshaper.dynamicjavascript.com'
                }
            }
        },
        events: {
            '.new-todo': {
                'keydown': function (e) {
                    if (e.keyCode === 13) {
                        Pubsub.fire('action.todo', 'create', e.target);
                    }
                }
            },
            '.toggle-all': {
                'click': function (e) {
                    Pubsub.fire('action.todo', 'toggleAll');
                }
            }
        }
    });
});
