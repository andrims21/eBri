define([
    'jquery', 
    'backbone', 
    'ebri', 
    'collections/branch', 
    'views/settings/branch', 
    'models/settings/branches'
], function($, Backbone, eBri, Branches, BranchView, BranchModel) {
    var App = Backbone.View.extend({

    	render: function($container) {

    		Backbone.pubSub.off('branch.fetch');

            Backbone.pubSub.on('branch.fetch', this.fetch, this);
            
            
            $container.empty().html($('#branches-template').html());

            this.$el = $('#setting-wrapper');
            this.el = this.$el.get(0);


            eBri.setDOMEventListeners();

            var self = this;

            Backbone.pubSub.trigger('branch.fetch', {});
            
            return self;
    	},

    	fetch : function() {
    		var self = this;

            this.collection = new Branches();

            this.collection.off('add', this.add, this);
            this.collection.on('add', this.add, this);

            $('#branch-loader').removeClass('hide');

            if (isSupportAnimation) {
                $('#collection-loading-css').removeClass('hide');
            } else {
                $('#collection-loading-gif').removeClass('hide');
            }

            $('#branch-wrapper').empty();

            this.collection.fetch({
                headers: {
                    'Authorization': 'Bearer ' + eBri.at,
                },
                error: function(collection, xhr) {
                    if (xhr.status == 403) {
                        window.location.href = '/login';
                    }

                    $('#branch-loader').addClass('hide');
                },
                success: function(collection, response, options) {
                    $('#branch-loader').addClass('hide');
                }
            });
    	},

        add: function(model) {
            var view = new BranchView({
                model: model
            });

            view.render(this.$el);

            delete view;
        }

    });

    return App;
});