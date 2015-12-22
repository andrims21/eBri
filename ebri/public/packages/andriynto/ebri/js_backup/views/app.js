define([
    'jquery', 
    'underscore', 
    'backbone', 
    'ebri'
], function(e, _, Backbone, eBri) {
    var App = Backbone.View.extend({
        el: e('#app-wrapper'),

        events: {},

        dashboard: function(path, query) {
            if (typeof path == 'undefined' || path == null) {
                path = '/';
            } else {
                path = '/' + path;
            }

            this.path = path;
            this.query = query;

            var self = this;
            return eBri.renderContentPage(function() {
                self.$el.empty().html( _.template( e('#dashboard-template').html() ) );
                
                eBri.setDOMEventListeners();
            });
        }
    });

    return App;
});