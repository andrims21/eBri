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
 	//'views/savings/retail',
 	//'views/savings/mikro'
 ], function($, _, Backbone, eBri) {
 	var App = Backbone.View.extend({
 		el: $('#savings-wrapper'),

 		savings: function(){
 			
 		},

	 	retail: function() {
	 		var self = this;

	 		eBri.renderContentPage(function() {
                self.$el.empty().html( _.template( $('#savings-retail-template').html() ) );
                
                eBri.setDOMEventListeners();
            });
            return this;
	 	}
 	});

 	return App;
 });