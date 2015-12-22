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
            //Ritel Router
			'savings/retail'        : 'showOverviewRetailSavings',
			'savings/retail/products': 'showProductsRetailSavings',
			'savings/retail/branch'  : 'showBranchRetailSavings',
            'savings/retail/branchOffice'  : 'showBranchOfficeRetailSavings',
            'savings/retail/branchOffice/*path/*path'  : 'showBranchOfficeRetailSavings',
            //Mikro Router
            'savings/mikro'        : 'showOverviewMikroSavings',
            'savings/mikro/products': 'showProductsMikroSavings',
            'savings/mikro/branch' : 'showBranchMikroSavings'

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

        //Router for Rirtel
        appRouter.on('route:showOverviewRetailSavings', function() {
            var savingsView = new SavingsView();
            savingsView.overviewRitel();
            delete savingsView;
        })

        appRouter.on('route:showProductsRetailSavings', function() {
            var savingsView = new SavingsView();
            savingsView.RetailProducts();
            delete savingsView;
        });

        appRouter.on('route:showBranchRetailSavings', function() {
            var savingsView = new SavingsView();
            savingsView.RetailBranch();
            delete savingsView;
        });

        appRouter.on('route:showBranchOfficeRetailSavings', function() {
            var savingsView = new SavingsView();
            savingsView.RetailBranchOffice();
            delete savingsView;
        });

        //Route for Mikro
        appRouter.on('route:showOverviewMikroSavings', function() {
            var savingsView = new SavingsView();
            savingsView.overviewMikro();
            delete savingsView;
        });

        appRouter.on('route:showProductsMikroSavings', function() {
            var savingsView = new SavingsView();
            savingsView.MikroProducts();
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