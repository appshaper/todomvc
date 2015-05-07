/**
 *  Main Router Module (Example implementation)
 *  @module MainRouter
 *  @desc Imports the client or server router and defines the application routes
 *  @author Jeroen Reurings
 *
 *  @copyright Copyright © 2015 Jeroen Reurings, all rights reserved.
 *  @license Licensed under the Apache License, Version 2.0 (the "License");
 *  You may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *  or see the LICENSE file in the root of the project.
 *  @see https://github.com/appshaper/appshaper
 */

define([
    'appshaper/router',
    'appshaper/pubsub'
], function (
    Router,
    Pubsub
) {

    'use strict';

    var router = Router({
            mode: 'hash'
        }),
        routeToPubsub = function (data) {
            Pubsub.fire('route', {
                page: data.path,
                refreshType: data.refreshType
            });
        };

    // Add application routes
    router.addRoutes({
        '/': function (data) {
            data.path = 'all';
            routeToPubsub(data);
        },
        '/all': function (data) {
            routeToPubsub(data);
        },
        '/active': function (data) {
            routeToPubsub(data);
        },
        '/completed': function (data) {
            routeToPubsub(data);
        }
    });

    // Return the created router instance
    return router;
});
