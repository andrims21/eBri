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
    'backbone', 
    'ebri', 
    'jquery-base64'
], function($, Backbone, eBri) {
	var App = Backbone.View.extend({

		render: function(){
			var self = this;

			eBri.renderContentPage(function(){
				self._render();
			});
		},	
	});
});