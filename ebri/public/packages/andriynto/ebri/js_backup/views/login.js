/*
 * This file is part of the eBri
 *
 * Author: Andriyanto <andriynto.dev@gmail.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 define([
 	'jquery',
 	'underscore',
 	'backbone',
 	'ebri',
 	'models/login',
 	'jquery-base64'
 ], function($, _, Backbone, eBri, Model) {
    var App = Backbone.View.extend({

        el: $('#ebri-user-identify'),

        events: {
            'submit #login-form': 'doLogin'
        },

        render: function() {
            this.model = new Model();

            var self = this;

            eBri.renderAccountPage(function() {
                self._render();
            });

            return this;
        },

        _render: function() {
        	this.$el.empty().html( _.template( $('#login-template').html(), this.model.toJSON() ) );

            eBri.setDOMEventListeners();

            $('input').placeholder();
        },

        doLogin: function(e) {
            e.preventDefault();

            var self = this;

            $('input', this.$el).parent().removeClass('has-error');
            
            var btn = $('button[type="submit"]', this.$el);
            var form = $('form', this.$el).serializeArray();

            var attributes = {};
            $(form).each(function(item) {
                if (attributes[this.name] !== undefined) {
                    if (!attributes[this.name].push) {
                        attributes[this.name] = [attributes[this.name]];
                    }

                    attributes[this.name].push(this.value || '');
                } else {
                    attributes[this.name] = this.value || '';
                }
            });

            delete form;

            btn.button('loading');
            $('input', this.$el).prop('disabled', true);
            
            this.model.set(attributes, {validate: true});
            this.model.set('access_token', eBri.at);

            if (!this.model.isValid()) {
                $.each(this.model.validationError, function() {
                    $('input[name="' + this + '"]', self.$el).parent().addClass('has-error');
                });

                btn.button('reset');
                $('input', this.$el).prop('disabled', false);
            } else {
                
                this.model.save(null, {
                    validate: false,
                    headers: {
                        'Authorization': 'Basic ' + $.base64Encode(attributes['email'] + ':' + attributes['password']),
                        'Content-MD5': $.md5(JSON.stringify(this.model.attributes) + eBri.cs)
                    },
                    error: function(model, xhr) {
                        if (xhr.status == 401) {
                            self.model.set(attributes);
                            self.model.set('isError', true);
                            self.model.set('errorMessage', xhr.responseJSON.message);

                            self._render();

                            if (typeof xhr.responseJSON.errors != 'undefined') {
                                if (xhr.responseJSON.errors.length > 0) {
                                    $.each(xhr.responseJSON.errors, function() {
                                        $('input[name="' + this.field + '"]', self.$el).parent().addClass('has-error');
                                    });
                                }
                            }
                        } else if (xhr.status > 0) {
                            if (typeof xhr.responseJSON != 'undefined') {
                                noty({text: xhr.responseJSON.message || xhr.responseJSON.error.message, type: 'error'});
                            } else {
                                noty({text: errorAJAXMessage + ' &raquo; ' + xhr.responseText, type: 'error'});
                            }
                        }

                        btn.button('reset');
                        $('input', this.$el).prop('disabled', false);
                    },
                    success: function() {
                        window.location.href = baseUrl + '/dashboard';

                        btn.button('reset');
                        $('input', this.$el).prop('disabled', false);
                    }
                });

            }
        }

 	});

 	return App;
 });