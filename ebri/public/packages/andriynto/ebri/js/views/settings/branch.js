
define([
    'jquery', 
    'underscore', 
    'backbone', 
    'ebri', 
    'models/settings/branch'
], function($, _, Backbone, eBri, Model) {
    var App = Backbone.View.extend({

        render: function($container) {
            this.el = _.template( $('#branch-template').html(), this.model.toJSON() );
            this.$el = $(this.el);

            $container.append(this.$el);

            var self = this;

            return this;
        }
    });

    return App;
});