define([
	'jquery',
	'backbone',
	'models/user'
], function($, Backbone, UserModel, cookie) {
	var eBri = function() {
        
		this.at   = '';
        this.cs   = '';
        this.user = null;
        this.refreshTokensInterval = null;
	}

	eBri.prototype.renderAccountPage = function(callback) {
		$('#account-logo').addClass('hide');
		$('#account-loading-gif').addClass('hide');

		if(isSupportAnimation) {
			$('#account-loading-css').removeClass('hide');
		}else {
			$('#account-loading-gif').removeClass('hide');
		}

		var self = this;

		this.getTokens(function(token) {
			if(token != null && typeof callback != 'undefined') {
				callback();
			}

			$('#account-logo').removeClass('hide');
            $('#account-loading-css').addClass('hide');
            $('#account-loading-gif').addClass('hide');
            self.refreshTokens();
		});
	};

	eBri.prototype.renderContentPage = function(callback) {
		$('#account-loading-gif').addClass('hide');
        if (isSupportAnimation) {
            $('#content-loading-css').removeClass('hide');
        } else {
            $('#content-loading-gif').removeClass('hide');
        }

        var self = this;
        
        this.getTokens(function(token) {
            if (token != null) {
                self.getUser(function(user) {
                    if (user != null) {
                        if (typeof callback != 'undefined') {
                            callback(user);
                        }
                        
                        $('#content-loading-wrapper').addClass('hide');
                        $('.tab-content').removeClass('hide');
                    } else {
                        window.location.href = '/login';
                    }
                });

                self.refreshTokens();
            } else {
                $('#content-loading-wrapper').addClass('hide');
            }
        });
	};

	eBri.prototype.setDOMEventListeners = function() {
        this.setLinkEventListener();
    };

    eBri.prototype.setLinkEventListener = function() {
        $('a.js-act').off('click', this.jsNavLinkAction);
        $('a.js-act').on('click', this.jsNavLinkAction);
    };

    eBri.prototype.jsNavLinkAction = function(e) {
        if (Backbone.history.fragment.indexOf('settings') < 0) {
            e.preventDefault();
            Backbone.history.navigate($(this).attr('href').replace(baseUrl, ''), {trigger: true});
        }
    };

	eBri.prototype.browserSupportsCSSProperty = function(propertyName) {
		var elm = document.createElement('div');
		propertyName = propertyName.toLowerCase();

		if(elm.style[propertyName] != undefined) {
			return true;
		}

		var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
            domPrefixes = 'Webkit Moz ms O'.split(' ');

        for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined) {
                return true;
            }
        }
        return false;
	};

	eBri.prototype.setSximoSidebar = function(callback) {
		if($.cookie("sxintheme") != '')
		{
			$('#switchTheme').attr('href',$.cookie("sxintheme"));
		} 		
		if($.cookie("sximo-sidebar") =='minimize-sidemenu'){
			$("body").addClass("minimize-sidemenu");
			$('#sidemenu').removeClass('expanded-menu');
		} else {
			$("body").removeClass("minimize-sidemenu");
			$('#sidemenu').addClass('expanded-menu');
		}
		$(window).bind("load resize", function() {
			if ($(this).width() < 769) {
				$('body').addClass('body-small')
			} else {
				$('body').removeClass('body-small')
			}
		})
	};

	eBri.prototype.getTokens = function(callback) {
        if (this.at != '' && this.cs != '') {
            if (typeof callback != 'undefined') {
                callback({
                    at: this.at,
                    cs: this.cs
                });
            }

            return true;
        }

        this.fetchTokens(callback);
    };

	eBri.prototype.refreshTokens = function(callback) {
        var self = this;

        clearInterval(self.refreshTokensInterval);

        self.refreshTokensInterval = setInterval(function() {
            self.fetchTokens();
        }, atTtl);
    };

    eBri.prototype.fetchTokens = function(callback) {
        var self = this;

        $.ajax({
            type: 'GET',
            url: baseUrl + '/ebriat?_token=' + csrfToken,
            error: function(xhr) {
                if (xhr.status > 0) {
                    if (typeof xhr.responseJSON != 'undefined') {
                        noty({text: xhr.responseJSON.message || xhr.responseJSON.error.message, type: 'error'});
                    } else {
                        noty({text: errorAJAXMessage + ' &raquo; ' + xhr.responseText, type: 'error'});
                    }
                }

                if (typeof callback != 'undefined') {
                    callback(null);
                }
            },
            success: function(response, status, xhr) {
                var contentMD5 = xhr.getResponseHeader('X-Content-MD5');

                if (contentMD5 !== '') {
                    contentMD5 = contentMD5.split('.');

                    self.at = contentMD5[0];
                    self.cs = contentMD5[1];
                }

                delete contentMD5;

                if (typeof callback != 'undefined') {
                    callback({
                        at: self.at,
                        cs: self.cs
                    });
                }
            }
        });
    };

	eBri.prototype.getUser = function(callback) {
        if (this.user != null) {
            if (typeof callback != 'undefined') {
                callback(this.user);
            }

            return true;
        }

        this.user = new UserModel();

        var self = this;

        this.user.fetch({
            headers: {
                'Authorization': 'Bearer ' + this.at
            },
            error: function(model, xhr) {
                if (xhr.status > 0) {
                    if (typeof xhr.responseJSON != 'undefined') {
                        noty({text: xhr.responseJSON.message || xhr.responseJSON.error.message, type: 'error'});
                    } else {
                        noty({text: errorAJAXMessage + ' &raquo; ' + xhr.responseText, type: 'error'});
                    }
                }

                if (typeof callback != 'undefined') {
                    callback(null);
                }
            },
            success: function(model, response, options) {
                if ($('#profile-template').length > 0) {
                    $('#profile-form-wrapper').empty().html(_.template( $('#profile-template').html(), self.user.toJSON() ));

                    $('#profile-form').off('submit');
                    $('#profile-form').on('submit', function(e) {
                        self.updateUser(e, this);
                    });
                }

                if (typeof callback != 'undefined') {
                    callback(self.user);
                }
            }
        });
    };

	return new eBri();
});