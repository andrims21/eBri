/*
 * This file is part of the eBri
 *
 * Author: Sulaeman <andriynto.dev@gmail.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
 
 define([
 	'underscore',
 	'backbone',
 	'views/app',
 	'views/logout',
 	'dfadmin',
 ], function(
 	_,
 	Backbone,
 	AppView,
 	LogoutView
 	){
 	if ($('html.lt-ie10').size()) {
        require(['jquery-fu-cors-xdr'], function(corsXdr) {});
    }

    var AppRouter	= Backbone.Router.extend({
    	routes: {
    		'logout' 		: 'doLogout',
    		'dashboard'		: 'showDashboard',
    		'dashboard/*path': 'showDashboard',
    		'dashboard(?:queryString)': 'showDashboard',
            'dashboard/*path(?:queryString)': 'showDashboard'
    	}
    });

    var initialize = function() {
    	var appRouter = new AppRouter;
    	appRouter.on('route:doLogout', function() {
    		var LogoutView = new LogoutView();
    		LogoutView.render();
    		delete LogoutView;
    	});

        appRouter.on('route:showDashboard', function(path, querystring) {
            var query = {};

            if (path != null) {
                path.replace(new RegExp('\([^=&]+)(=([^&#]*))', 'g'), function($0, $1, $2, $3) { query[$1] = $3; });
                if (!_.isEmpty(query)) {
                    path = null;
                }

                if (_.isEmpty(query) && querystring != null) {
                    querystring.replace(new RegExp('\([^=&]+)(=([^&#]*))', 'g'), function($0, $1, $2, $3) { query[$1] = $3; });
                }
            }
            
            var appView = new AppView();
            appView.dashboard(path, query);
            delete appView;
        });

        if (typeof history.pushState == 'undefined') {
            Backbone.history.start({
                root: basePath
            });

            if (Backbone.history.fragment != '') {
                Backbone.history.loadUrl('/' + Backbone.history.fragment);
            } else {
                Backbone.history.loadUrl(currentUrlPath);
            }
        } else {
            Backbone.history.start({
                pushState: true,
                root: basePath
            });
        }
    };
    return {
    	initialize: initialize
    }

 });