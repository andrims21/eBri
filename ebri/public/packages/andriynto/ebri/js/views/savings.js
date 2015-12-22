/*
 * This file is part of the eBri
 *
 * Author: Sulaeman <andriynto.dev@gmail.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 define([
 	'jquery',
 	'underscore',
 	'backbone',
 	'ebri',
 ], function($, _, Backbone, eBri) {
 	var App = Backbone.View.extend({
 		el: $('#savings-wrapper'),

 		overviewSavings: function(){
 			var self = this;

	 		eBri.renderContentPage(function() {
                self.$el.empty().html( _.template( $('#savings-template').html() ) );
                eBri.setDOMEventListeners();
            });
            return this;
 		},

	 	BranchSavings: function() {
	 		var self = this;

	 		eBri.renderContentPage(function() {
                self.$el.empty().html( _.template( $('#savings-template').html() ) );
                eBri.setDOMEventListeners();
            });
            return this;
	 	},

        BranchOfficeSavings: function() {
            var self = this;

            eBri.renderContentPage(function() {
                self.$el.empty().html( _.template( $('#savings-template').html() ) );
                eBri.setDOMEventListeners();
            });
            return this;
        }
 	});

 	return App;
 });