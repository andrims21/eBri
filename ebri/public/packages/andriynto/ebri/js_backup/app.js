/*
 * This file is part of the eBri
 *
 * Author: Andriyanto <andriynto.deve@gmail.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

define([
	'jquery', 
    'underscore', 
    'backbone',
    'ebri', 
    'underscore.string', 
    'bootstrap', 
    'jquery-md5', 
    'json', 
    'jquery-placeholder', 
    'jquery-noty',
    'dfadmin'
], function($,_, Backbone, eBri){
    Backbone.emulateHTTP = true;

    /*  */
    Backbone.pubSub = _.extend({}, Backbone.Events);

    /* Import Underscore.string to separate object, because there are conflict functions (include, reverse, contains) */
    _.str = require('underscore.string');

    /* Mix in non-conflict functions to Underscore namespace */
    _.mixin(_.str.exports());
    
	var initialize = function() {
        $('#sidemenu').sximMenu();
        isSupportSximoSidebar =  eBri.setSximoSidebar();
        isSupportAnimation = eBri.browserSupportsCSSProperty('animation');
    };

    return {
    	initialize: initialize
    };
});