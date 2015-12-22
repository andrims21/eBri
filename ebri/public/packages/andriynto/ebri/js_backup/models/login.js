/*
 * This file is part of the eBri
 *
 * Author: Andriyanto <andriyanto.dev@gmail.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var model = Backbone.Model.extend({
        defaults: {
            isError: false,
            errorMessage: '',
            email: '',
            password: ''
        },

        url: function() {
            return apiUrl + '/authenticate';
        },

        validate: function(attrs, options) {
            this.unset('isError');
            this.unset('errorMessage');

            var errors = [];

            if (!attrs.email) {
                errors.push('email');
            }

            if (!attrs.password) {
                errors.push('password');
            }

            if (errors.length > 0) {
                return errors;
            }

            delete errors;

            this.unset('email');
            this.unset('password');
        }
    });


    return model;
});