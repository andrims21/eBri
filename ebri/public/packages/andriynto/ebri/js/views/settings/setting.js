define([
    'jquery', 
    'underscore', 
    'backbone', 
    'ebri', 
    //'views/settings/general', 
    'views/settings/branch', 
    //'views/settings/office', 
    //'views/settings/upload'
], function($, _, Backbone, eBri, BranchView) {
    var App = Backbone.View.extend({

    	el: $('#setting-wrapper'),

    	general : function() {

    	},

    	branch : function() {

    	},

    	office : function() {

    	},

    	upload : function() {

    	}

    });

    return App;

});