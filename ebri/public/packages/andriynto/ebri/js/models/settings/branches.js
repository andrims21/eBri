/*
 * This file is part of the Kotakin
 *
 * Author: Sulaeman <me@sulaeman.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

define(['backbone', 'moment'], function(Backbone, Moment){
    var model = Backbone.Model.extend({
        url: function() {
            return apiUrl + '/branch';
        },

        parse: function(resp, option) {
            //resp.last_login = Moment(resp.last_login).format('llll');

            if (typeof resp.id == 'undefined') {
                resp.id = resp.email;
            }
            
            if (typeof resp.first_name == 'undefined') {
                resp.first_name = '';
            }

            if (typeof resp.last_name == 'undefined') {
                resp.last_name = '';
            }

            if (typeof resp.display_name == 'undefined') {
                resp.display_name = resp.first_name + ' ' + resp.last_name;
            }

            return resp;
        }
    });


    return model;
});