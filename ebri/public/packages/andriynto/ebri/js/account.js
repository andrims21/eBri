/*
 * This file is part of the eBri
 *
 * Author: Andriynto <andriynto.dev@gmail.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 define([
 	'backbone',
 	'views/login'
 ], function(
 	Backbone,
 	LoginView
 	){
 	var AppRouter	= Backbone.Router.extend({
 		routes : {
 			'login'		: 'showLogin',
	 		'register'	: 'showRegister',
	 		'activate/:code'	: 'showActivation'
 		}
 	});

 	var initialize = function() {
 		var appRouter = new AppRouter;
        
        appRouter.on('route:showLogin', function() {
            var loginView = new LoginView();
            loginView.render();
            delete loginView;
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
