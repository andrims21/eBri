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
    'views/settings', 
    'views/logout'
], function(
    Backbone, 
    SettingsView, 
    LogoutView
){
	if ($('html.lt-ie10').size()) {
        require(['jquery-fu-cors-xdr'], function(corsXdr) {});
    }
    var AppRouter = Backbone.Router.extend({
        routes: {
            'logout': 'doLogout',
            'settings': 'showSettings',
            'settings/branch': 'showBranch',
            'settings/office': 'showBranchOffice',
            'upload' : 'showUpload',
            'upload/*path' : 'showUpladTargetRka',
            
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter;

        appRouter.on('route:doLogout', function() {
            var logoutView = new LogoutView();
            logoutView.render();
            delete logoutView;
        });

        appRouter.on('route:showSettings', function() {
            var settingsView = new SettingsView();
            settingsView.savings();
            delete settingsView;
        });

        appRouter.on('route:showBranch', function() {
            var settingsView = new SettingsView();
            settingsView.branch();
            delete settingsView;
        });

        appRouter.on('route:showUpload', function() {
            var settingsView = new SettingsView();
            settingsView.branch();
            delete settingsView;
        });

        appRouter.on('route:showUpladTargetRka', function(path) {
            var query = {};
            if (path != null) {
                path.replace(new RegExp('\([^=&]+)(=([^&#]*))', 'g'), function($0, $1, $2, $3) { query[$1] = $3; });
                if (!_.isEmpty(query)) {
                    path = null;
                }
            }
            var settingsView = new SettingsView();
            settingsView.uploadTargetRka(path);
            delete settingsView;
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