define([
    'backbone', 
    'views/savings', 
    'views/logout'
], function(
    Backbone, 
    SavingsView, 
    LogoutView
){
    var AppRouter = Backbone.Router.extend({
    	routes: {
    		'logout': 'doLogout',
			'savings'		        : 'showGeneralSavings',
            
            'savings/products'      : 'showProductsSavings',
            'savings/branch'        : 'showBranchSavings',
            'savings/branchoffice'  : 'showBranchOfficeSavings',

		}
	});

	var initialize = function() {
		var appRouter = new AppRouter;

        var appRouter = new AppRouter;

        appRouter.on('route:doLogout', function() {
            var logoutView = new LogoutView();
            logoutView.render();
            delete logoutView;
        });

        appRouter.on('route:showProductsSavings', function() {
            var savingsView = new SavingsView();
            savingsView.overviewSavings();
            delete savingsView;
        }),

        appRouter.on('route:showBranchSavings', function() {
            var savingsView = new SavingsView();
            savingsView.BranchSavings();
            delete savingsView;
        }),

        appRouter.on('route:showBranchOfficeSavings', function() {
            var savingsView = new SavingsView();
            savingsView.BranchOfficeSavings();
            delete savingsView;
        })

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