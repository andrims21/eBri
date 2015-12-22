define([
    'backbone', 
    'views/setting', 
    'views/logout'
], function(
    Backbone, 
    SettingView, 
    LogoutView
){
    var AppRouter = Backbone.Router.extend({
    	routes: {
    		'logout': 'doLogout',

			'settings'		        : 'showGeneralSetting',
			'settings/branch'       : 'showBranchSetting',
			'settings/office'       : 'showOfficeSetting',
			'settings/upload'       : 'showUploadSetting',
            'settings/upload/*path' : 'showUploadedRka'
		}
	});

	var initialize = function() {
		var appRouter = new AppRouter;

        appRouter.on('route:doLogout', function() {
            var logoutView = new LogoutView();
            logoutView.render();
            delete logoutView;
        });

        appRouter.on('route:showGeneralSetting', function() {
            var settingView = new SettingView();
            settingView.general();
            delete settingView;
        });

        appRouter.on('route:showBranchSetting', function() {
            var settingView = new SettingView();
            settingView.branch();
            delete settingView;
        });

        appRouter.on('route:showOfficeSetting', function() {
            var settingView = new SettingView();
            settingView.office();
            delete settingView;
        });

        appRouter.on('route:showUploadSetting', function(path) {
            alert('show upload setting');
            var query = {};
            if (path != null) {
                path.replace(new RegExp('\([^=&]+)(=([^&#]*))', 'g'), function($0, $1, $2, $3) { query[$1] = $3; });
                if (!_.isEmpty(query)) {
                    path = null;
                }
            }

            var settingView = new SettingView();
            settingView.upload(path);
            delete settingView;
        });

        appRouter.on('route:showUploadedRka', function(path) {
            var query = {};
            if (path != null) {
                path.replace(new RegExp('\([^=&]+)(=([^&#]*))', 'g'), function($0, $1, $2, $3) { query[$1] = $3; });
                if (!_.isEmpty(query)) {
                    path = null;
                }
            }

            var settingView = new SettingView();
            settingView.uploadedRka(path);
            delete settingView;
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