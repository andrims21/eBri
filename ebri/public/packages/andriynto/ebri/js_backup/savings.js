/*
 * This file is part of the eBri
 *
 * Author: Sulaeman <andriynto.dev@gmail.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

define([
    'backbone', 
    'views/savings', 
    'views/logout'
], function(
    Backbone, 
    SavingsView, 
    LogoutView
){
	if ($('html.lt-ie10').size()) {
        require(['jquery-fu-cors-xdr'], function(corsXdr) {});
    }
    var AppRouter = Backbone.Router.extend({
        routes: {
            'logout': 'doLogout',
            'savings': 'showSavings',
            'savings/retail': 'showRetailSaving',
            'savings/retail/get': 'showRetailSaving'
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter;

        appRouter.on('route:doLogout', function() {
            var logoutView = new LogoutView();
            logoutView.render();
            delete logoutView;
        });

        appRouter.on('route:showSavings', function() {
            var savingsView = new SavingsView();
            savingsView.savings();
            delete savingsView;
        });

        appRouter.on('route:showRetailSaving', function() {
            var savingsView = new SavingsView();
            savingsView.retail();
            delete savingsView;
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
    };
});