/*
 * This file is part of the Kotakin
 *
 * Author: Sulaeman <me@sulaeman.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
define(["jquery", "backbone", "models/user"], function(e, t, n) {
    var r = function() {
        this.at = "", this.cs = "", this.user = null, this.refreshTokensInterval = null
    };
    return r.prototype.renderAccountPage = function(t) {
        e("#account-logo").addClass("hide"), e("#account-loading-gif").addClass("hide"), isSupportAnimation ? e("#account-loading-css").removeClass("hide") : e("#account-loading-gif").removeClass("hide");
        var n = this;
        this.getTokens(function(r) {
            r != null && typeof t != "undefined" && t(), e("#account-logo").removeClass("hide"), e("#account-loading-css").addClass("hide"), e("#account-loading-gif").addClass("hide"), n.refreshTokens()
        })
    }, r.prototype.renderContentPage = function(t) {
        e("#account-loading-gif").addClass("hide"), isSupportAnimation ? e("#content-loading-css").removeClass("hide") : e("#content-loading-gif").removeClass("hide");
        var n = this;
        this.getTokens(function(r) {
            r != null ? (n.getUser(function(n) {
                n != null ? (typeof t != "undefined" && t(n), e("#content-loading-wrapper").addClass("hide")) : window.location.href = "/login"
            }), n.refreshTokens()) : e("#content-loading-wrapper").addClass("hide")
        })
    }, r.prototype.setDOMEventListeners = function() {
        this.setLinkEventListener()
    }, r.prototype.setLinkEventListener = function() {
        e("a.js-act").off("click", this.jsNavLinkAction), e("a.js-act").on("click", this.jsNavLinkAction)
    }, r.prototype.jsNavLinkAction = function(n) {
        t.history.fragment.indexOf("settings") < 0 && (n.preventDefault(), t.history.navigate(e(this).attr("href").replace(baseUrl, ""), {
            trigger: !0
        }))
    }, r.prototype.browserSupportsCSSProperty = function(e) {
        var t = document.createElement("div");
        e = e.toLowerCase();
        if (t.style[e] != undefined) return !0;
        var n = e.charAt(0).toUpperCase() + e.substr(1),
            r = "Webkit Moz ms O".split(" ");
        for (var i = 0; i < r.length; i++)
            if (t.style[r[i] + n] != undefined) return !0;
        return !1
    }, r.prototype.getTokens = function(e) {
        if (this.at != "" && this.cs != "") return typeof e != "undefined" && e({
            at: this.at,
            cs: this.cs
        }), !0;
        this.fetchTokens(e)
    }, r.prototype.refreshTokens = function(e) {
        var t = this;
        clearInterval(t.refreshTokensInterval), t.refreshTokensInterval = setInterval(function() {
            t.fetchTokens()
        }, atTtl)
    }, r.prototype.fetchTokens = function(t) {
        var n = this;
        e.ajax({
            type: "GET",
            url: baseUrl + "/kkat?_token=" + csrfToken,
            error: function(e) {
                e.status > 0 && (typeof e.responseJSON != "undefined" ? noty({
                    text: e.responseJSON.message || e.responseJSON.error.message,
                    type: "error"
                }) : noty({
                    text: errorAJAXMessage + " &raquo; " + e.responseText,
                    type: "error"
                })), typeof t != "undefined" && t(null)
            },
            success: function(e, r, i) {
                var s = i.getResponseHeader("X-Content-MD5");
                s !== "" && (s = s.split("."), n.at = s[0], n.cs = s[1]), delete s, typeof t != "undefined" && t({
                    at: n.at,
                    cs: n.cs
                })
            }
        })
    }, r.prototype.getUser = function(t) {
        if (this.user != null) return typeof t != "undefined" && t(this.user), !0;
        this.user = new n;
        var r = this;
        this.user.fetch({
            headers: {
                Authorization: "Bearer " + this.at
            },
            error: function(e, n) {
                n.status > 0 && (typeof n.responseJSON != "undefined" ? noty({
                    text: n.responseJSON.message || n.responseJSON.error.message,
                    type: "error"
                }) : noty({
                    text: errorAJAXMessage + " &raquo; " + n.responseText,
                    type: "error"
                })), typeof t != "undefined" && t(null)
            },
            success: function(n, i, s) {
                e("#profile-template").length > 0 && (e("#profile-form-wrapper").empty().html(_.template(e("#profile-template").html(), r.user.toJSON())), e("#profile-form").off("submit"), e("#profile-form").on("submit", function(e) {
                    r.updateUser(e, this)
                })), typeof t != "undefined" && t(r.user)
            }
        })
    }, r.prototype.checkUserInterval = function(e) {
        var t = this;
        setInterval(function() {
            t.user.fetch({
                headers: {
                    Authorization: "Bearer " + t.at
                },
                error: function(e, t) {
                    t.status > 0 && (typeof t.responseJSON != "undefined" ? noty({
                        text: t.responseJSON.message || t.responseJSON.error.message,
                        type: "error"
                    }) : noty({
                        text: errorAJAXMessage + " &raquo; " + t.responseText,
                        type: "error"
                    }))
                },
                success: function() {
                    typeof e != "undefined" && e()
                }
            })
        }, 6e4)
    }, r.prototype.updateUser = function(t, n) {
        t.preventDefault();
        var r = e(n);
        e("input, textarea, select", r).parent().removeClass("has-error"), e(".alert-message", r).addClass("hide");
        var i = e('button[type="submit"]', r),
            n = r.serializeArray(),
            s = ["email", "password", "group", "activated"],
            o = {
                id: this.user.get("id"),
                metadata: {}
            };
        e(n).each(function(e) {
            o[this.name] !== undefined ? _.indexOf(s, this.name) > -1 ? (o[this.name].push || (o[this.name] = [o[this.name]]), o[this.name].push(this.value || "")) : (o.metadata[this.name].push || (o.metadata[this.name] = [o.metadata[this.name]]), o.metadata[this.name].push(this.value || "")) : _.indexOf(s, this.name) > -1 ? o[this.name] = this.value || "" : o.metadata[this.name] = this.value || ""
        }), delete s, delete n, i.button("loading"), e("input, textarea, select", r).prop("disabled", !0), this.user.clear(), this.user.set(o), this.user.save(null, {
            headers: {
                Authorization: "Bearer " + this.at,
                "Content-MD5": e.md5(JSON.stringify(this.user.attributes) + this.cs)
            },
            error: function(t, n) {
                n.status == 404 ? typeof n.responseJSON != "undefined" && e(".alert-message", r).text(n.responseJSON.description).removeClass("hide") : n.status > 0 && (typeof n.responseJSON != "undefined" ? noty({
                    text: n.responseJSON.message || n.responseJSON.error.message,
                    type: "error"
                }) : noty({
                    text: errorAJAXMessage + " &raquo; " + n.responseText,
                    type: "error"
                })), i.button("reset"), e("input, textarea, select", r).prop("disabled", !1)
            },
            success: function(t, n) {
                typeof n.errors != "undefined" && (e(".alert-message", r).text(n.message).removeClass("hide"), e.each(n.errors, function(t) {
                    e('input[name="' + t + '"]', r).parent().addClass("has-error")
                })), i.button("reset"), e("input, textarea, select", r).prop("disabled", !1)
            }
        }), delete o
    }, new r
});