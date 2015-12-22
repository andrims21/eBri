/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
//# sourceMappingURL=backbone.map;
//! moment.js
//! version : 2.5.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
/*
 * This file is part of the Kotakin
 *
 * Author: Sulaeman <me@sulaeman.com>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*
 * jQuery MD5 Plugin 1.2.1
 * https://github.com/blueimp/jQuery-MD5
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://creativecommons.org/licenses/MIT/
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(e, t) {
    function H(e) {
        var t = e.length,
            n = w.type(e);
        return w.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function j(e) {
        var t = B[e] = {};
        return w.each(e.match(S) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function q(e, n, r, i) {
        if (w.acceptData(e)) {
            var s, o, u = w.expando,
                a = e.nodeType,
                f = a ? w.cache : e,
                l = a ? e[u] : e[u] && u;
            if (l && f[l] && (i || f[l].data) || r !== t || "string" != typeof n) return l || (l = a ? e[u] = c.pop() || w.guid++ : u), f[l] || (f[l] = a ? {} : {
                toJSON: w.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n)), o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), "string" == typeof n ? (s = o[n], null == s && (s = o[w.camelCase(n)])) : s = o, s
        }
    }

    function R(e, t, n) {
        if (w.acceptData(e)) {
            var r, i, s = e.nodeType,
                o = s ? w.cache : e,
                u = s ? e[w.expando] : w.expando;
            if (o[u]) {
                if (t && (r = n ? o[u] : o[u].data)) {
                    w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !z(r) : !w.isEmptyObject(r)) return
                }(n || (delete o[u].data, z(o[u]))) && (s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
            }
        }
    }

    function U(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                } catch (s) {}
                w.data(e, n, r)
            } else r = t
        }
        return r
    }

    function z(e) {
        var t;
        for (t in e)
            if (("data" !== t || !w.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ot() {
        try {
            return o.activeElement
        } catch (e) {}
    }

    function ct(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function ht(e, t, n) {
        if (w.isFunction(t)) return w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return w.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ut.test(t)) return w.filter(t, e, n);
            t = w.filter(t, e)
        }
        return w.grep(e, function(e) {
            return w.inArray(e, t) >= 0 !== n
        })
    }

    function pt(e) {
        var t = dt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _t(e) {
        return e.type = (null !== w.find.attr(e, "type")) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (1 === t.nodeType && w.hasData(e)) {
            var n, r, i, s = w._data(e),
                o = w._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; i > r; r++) w.event.add(t, n, u[n][r])
            }
            o.data && (o.data = w.extend({}, o.data))
        }
    }

    function Bt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !w.support.noCloneEvent && t[w.expando]) {
                i = w._data(t);
                for (r in i.events) w.removeEvent(t, r, i.handle);
                t.removeAttribute(w.expando)
            }
            "script" === n && t.text !== e.text ? (_t(t).text = e.text, Dt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && xt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e; null != (s = r[o]); o++) !n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === w.css(e, "display") || !w.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; u > o; o++) r = e[o], r.style && (s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && "none" !== n || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            o = 0;
        for (; 4 > s; s += 2) "margin" === n && (o += w.css(e, n + Zt[s], !0, i)), r ? ("content" === n && (o -= w.css(e, "padding" + Zt[s], !0, i)), "margin" !== n && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), "padding" !== n && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Rt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Jt.test(i)) return i;
            r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = o,
            n = Qt[e];
        return n || (n = fn(e, t), "none" !== n && n || (It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach()), Qt[e] = n), n
    }

    function fn(e, t) {
        var n = w(t.createElement(e)).appendTo(t.body),
            r = w.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (w.isArray(t)) w.each(t, function(t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== w.type(t)) r(e, t);
        else
            for (i in t) vn(e + "[" + i + "]", t[i], n, r)
    }

    function _n(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(S) || [];
            if (w.isFunction(n))
                while (r = s[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, n, r, i) {
        function u(a) {
            var f;
            return s[a] = !0, w.each(e[a] || [], function(e, a) {
                var l = a(n, r, i);
                return "string" != typeof l || o || s[l] ? o ? !(f = l) : t : (n.dataTypes.unshift(l), u(l), !1)
            }), f
        }
        var s = {},
            o = e === An;
        return u(n.dataTypes[0]) || !s["*"] && u("*")
    }

    function Pn(e, n) {
        var r, i, s = w.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes;
        while ("*" === f[0]) f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        return o ? (o !== f[0] && f.unshift(o), r[o]) : t
    }

    function Bn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s) s = a;
                else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o)
                for (i in f)
                    if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + a + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Yn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = w.now()
    }

    function Zn(e, t, n) {
        var r, i = (Gn[t] || []).concat(Gn["*"]),
            s = 0,
            o = i.length;
        for (; o > s; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, s = 0,
            o = Qn.length,
            u = w.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                var t = Xn || Yn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (tr(l, f.opts.specialEasing); o > s; s++)
            if (r = Qn[s].call(f, e, l, f.opts)) return r;
        return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (n in e)
            if (r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r], o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f = this,
            l = {},
            c = e.style,
            h = e.nodeType && nn(e),
            p = w._data(e, "fxshow");
        n.queue || (u = w._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, f.always(function() {
            f.always(function() {
                u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === w.css(e, "display") && "none" === w.css(e, "float") && (w.support.inlineBlockNeedsLayout && "inline" !== an(e.nodeName) ? c.zoom = 1 : c.display = "inline-block")), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function() {
            c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], $n.exec(i)) {
                if (delete t[r], s = s || "toggle" === i, i === (h ? "hide" : "show")) continue;
                l[r] = p && p[r] || w.style(e, r)
            }
        if (!w.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function() {
                w(e).hide()
            }), f.done(function() {
                var t;
                w._removeData(e, "fxshow");
                for (t in l) w.style(e, t, l[t])
            });
            for (r in l) o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return w.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t,
        s = e.location,
        o = e.document,
        u = o.documentElement,
        a = e.jQuery,
        f = e.$,
        l = {},
        c = [],
        h = "1.10.2",
        p = c.concat,
        d = c.push,
        v = c.slice,
        m = c.indexOf,
        g = l.toString,
        y = l.hasOwnProperty,
        b = h.trim,
        w = function(e, t) {
            return new w.fn.init(e, t, r)
        },
        E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        S = /\S+/g,
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^[\],:{}\s]*$/,
        k = /(?:^|:|,)(?:\s*\[)+/g,
        L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        O = /^-ms-/,
        M = /-([\da-z])/gi,
        _ = function(e, t) {
            return t.toUpperCase()
        },
        D = function(e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (P(), w.ready())
        },
        P = function() {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
        };
    w.fn = w.prototype = {
            jquery: h,
            constructor: w,
            init: function(e, n, r) {
                var i, s;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), N.test(i[1]) && w.isPlainObject(n))
                            for (i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (s = o.getElementById(i[2]), s && s.parentNode) {
                        if (s.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = o, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return v.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = w.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return w.each(this, e, t)
            },
            ready: function(e) {
                return w.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(v.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(w.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: d,
            sort: [].sort,
            splice: [].splice
        }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function() {
            var e, n, r, i, s, o, u = arguments[0] || {},
                a = 1,
                f = arguments.length,
                l = !1;
            for ("boolean" == typeof u && (l = u, u = arguments[1] || {}, a = 2), "object" == typeof u || w.isFunction(u) || (u = {}), f === a && (u = this, --a); f > a; a++)
                if (null != (s = arguments[a]))
                    for (i in s) e = u[i], r = s[i], u !== r && (l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r));
            return u
        }, w.extend({
            expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? w.readyWait++ : w.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--w.readyWait : !w.isReady) {
                    if (!o.body) return setTimeout(w.ready);
                    w.isReady = !0, e !== !0 && --w.readyWait > 0 || (n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === w.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === w.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[g.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var n;
                if (!e || "object" !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;
                try {
                    if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (r) {
                    return !1
                }
                if (w.support.ownLast)
                    for (n in e) return y.call(e, n);
                for (n in e);
                return n === t || y.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || o;
                var r = N.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = w.trim(n), n && C.test(n.replace(L, "@").replace(A, "]").replace(k, ""))) ? Function("return " + n)() : (w.error("Invalid JSON: " + n), t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (s) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && w.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(O, "ms-").replace(M, _)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r, i = 0,
                    s = e.length,
                    o = H(e);
                if (n) {
                    if (o) {
                        for (; s > i; i++)
                            if (r = t.apply(e[i], n), r === !1) break
                    } else
                        for (i in e)
                            if (r = t.apply(e[i], n), r === !1) break
                } else if (o) {
                    for (; s > i; i++)
                        if (r = t.call(e[i], i, e[i]), r === !1) break
                } else
                    for (i in e)
                        if (r = t.call(e[i], i, e[i]), r === !1) break; return e
            },
            trim: b && !b.call("﻿ ") ? function(e) {
                return null == e ? "" : b.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(x, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (H(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (m) return m.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    s = 0;
                if ("number" == typeof r)
                    for (; r > s; s++) e[i++] = n[s];
                else
                    while (n[s] !== t) e[i++] = n[s++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    s = 0,
                    o = e.length;
                for (n = !!n; o > s; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                return i
            },
            map: function(e, t, n) {
                var r, i = 0,
                    s = e.length,
                    o = H(e),
                    u = [];
                if (o)
                    for (; s > i; i++) r = t(e[i], i, n), null != r && (u[u.length] = r);
                else
                    for (i in e) r = t(e[i], i, n), null != r && (u[u.length] = r);
                return p.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, s;
                return "string" == typeof n && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(v.call(arguments)))
                }, i.guid = e.guid = e.guid || w.guid++, i) : t
            },
            access: function(e, n, r, i, s, o, u) {
                var a = 0,
                    f = e.length,
                    l = null == r;
                if ("object" === w.type(r)) {
                    s = !0;
                    for (a in r) w.access(e, n, a, r[a], !0, o, u)
                } else if (i !== t && (s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                        return l.call(w(e), n)
                    })), n))
                    for (; f > a; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
                return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var i, s, o = {};
                for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                i = n.apply(e, r || []);
                for (s in t) e.style[s] = o[s];
                return i
            }
        }), w.ready.promise = function(t) {
            if (!n)
                if (n = w.Deferred(), "complete" === o.readyState) setTimeout(w.ready);
                else if (o.addEventListener) o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
            else {
                o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var r = !1;
                try {
                    r = null == e.frameElement && o.documentElement
                } catch (i) {}
                r && r.doScroll && function s() {
                    if (!w.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(s, 50)
                        }
                        P(), w.ready()
                    }
                }()
            }
            return n.promise(t)
        }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            l["[object " + t + "]"] = t.toLowerCase()
        }), r = w(o),
        function(e, t) {
            function ot(e, t, n, i) {
                var s, o, u, a, f, l, p, m, g, w;
                if ((t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (d && !i) {
                    if (s = Z.exec(e))
                        if (u = s[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(u), !o || !o.parentNode) return n;
                                if (o.id === u) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u) return n.push(o), n
                        } else {
                            if (s[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                            if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(u)), n
                        }
                    if (r.qsa && (!v || !v.test(e))) {
                        if (m = p = b, g = t, w = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            l = mt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                            while (f--) l[f] = m + gt(l[f]);
                            g = $.test(e) && t.parentNode || t, w = l.join(",")
                        }
                        if (w) try {
                            return H.apply(n, g.querySelectorAll(w)), n
                        } catch (S) {} finally {
                            p || t.removeAttribute("id")
                        }
                    }
                }
                return Nt(e.replace(W, "$1"), t, n, i)
            }

            function ut() {
                function t(n, r) {
                    return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
                }
                var e = [];
                return t
            }

            function at(e) {
                return e[b] = !0, e
            }

            function ft(e) {
                var t = h.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function lt(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) s.attrHandle[n[r]] = t
            }

            function ct(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || O) - (~e.sourceIndex || O);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ht(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function pt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function dt(e) {
                return at(function(t) {
                    return t = +t, at(function(n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function vt() {}

            function mt(e, t) {
                var n, r, i, o, u, a, f, l = N[e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = s.preFilter;
                while (u) {
                    (!n || (r = X.exec(u))) && (r && (u = u.slice(r[0].length) || u), a.push(i = [])), n = !1, (r = V.exec(u)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), u = u.slice(n.length));
                    for (o in s.filter) !(r = G[o].exec(u)) || f[o] && !(r = f[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), u = u.slice(n.length));
                    if (!n) break
                }
                return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
            }

            function gt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function yt(e, t, n) {
                var r = t.dir,
                    s = n && "parentNode" === r,
                    o = x++;
                return t.first ? function(t, n, i) {
                    while (t = t[r])
                        if (1 === t.nodeType || s) return e(t, n, i)
                } : function(t, n, u) {
                    var a, f, l, c = S + " " + o;
                    if (u) {
                        while (t = t[r])
                            if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || s)
                                if (l = t[b] || (t[b] = {}), (f = l[r]) && f[0] === c) {
                                    if ((a = f[1]) === !0 || a === i) return a === !0
                                } else if (f = l[r] = [c], f[1] = e(t, n, u) || i, f[1] === !0) return !0
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function wt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = null != t;
                for (; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
                return o
            }

            function Et(e, t, n, r, i, s) {
                return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, s)), at(function(s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || Tt(t || "*", u.nodeType ? [u] : u, []),
                        m = !e || !s && t ? v : wt(v, h, e, u, a),
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    if (n && n(m, g, u, a), r) {
                        f = wt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
                })
            }

            function St(e) {
                var t, n, r, i = e.length,
                    o = s.relative[e[0].type],
                    u = o || s.relative[" "],
                    a = o ? 1 : 0,
                    l = yt(function(e) {
                        return e === t
                    }, u, !0),
                    c = yt(function(e) {
                        return j.call(t, e) > -1
                    }, u, !0),
                    h = [function(e, n, r) {
                        return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }];
                for (; i > a; a++)
                    if (n = s.relative[e[a].type]) h = [yt(bt(h), n)];
                    else {
                        if (n = s.filter[e[a].type].apply(null, e[a].matches), n[b]) {
                            for (r = ++a; i > r; r++)
                                if (s.relative[e[r].type]) break;
                            return Et(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(W, "$1"), n, r > a && St(e.slice(a, r)), i > r && St(e = e.slice(r)), i > r && gt(e))
                        }
                        h.push(n)
                    }
                return bt(h)
            }

            function xt(e, t) {
                var n = 0,
                    r = t.length > 0,
                    o = e.length > 0,
                    u = function(u, a, l, c, p) {
                        var d, v, m, g = [],
                            y = 0,
                            b = "0",
                            w = u && [],
                            E = null != p,
                            x = f,
                            T = u || o && s.find.TAG("*", p && a.parentNode || a),
                            N = S += null == x ? 1 : Math.random() || .1;
                        for (E && (f = a !== h && a, i = n); null != (d = T[b]); b++) {
                            if (o && d) {
                                v = 0;
                                while (m = e[v++])
                                    if (m(d, a, l)) {
                                        c.push(d);
                                        break
                                    }
                                E && (S = N, i = ++n)
                            }
                            r && ((d = !m && d) && y--, u && w.push(d))
                        }
                        if (y += b, r && b !== y) {
                            v = 0;
                            while (m = t[v++]) m(w, g, a, l);
                            if (u) {
                                if (y > 0)
                                    while (b--) w[b] || g[b] || (g[b] = D.call(c));
                                g = wt(g)
                            }
                            H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                        }
                        return E && (S = N, f = x), w
                    };
                return r ? at(u) : u
            }

            function Tt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) ot(e, t[r], n);
                return n
            }

            function Nt(e, t, n, i) {
                var o, u, f, l, c, h = mt(e);
                if (!i && 1 === h.length) {
                    if (u = h[0] = h[0].slice(0), u.length > 2 && "ID" === (f = u[0]).type && r.getById && 9 === t.nodeType && d && s.relative[u[1].type]) {
                        if (t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                        e = e.slice(u.shift().value.length)
                    }
                    o = G.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (f = u[o], s.relative[l = f.type]) break;
                        if ((c = s.find[l]) && (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t))) {
                            if (u.splice(o, 1), e = i.length && gt(u), !e) return H.apply(n, i), n;
                            break
                        }
                    }
                }
                return a(e, h)(i, t, !d, n, $.test(e)), n
            }
            var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date),
                E = e.document,
                S = 0,
                x = 0,
                T = ut(),
                N = ut(),
                C = ut(),
                k = !1,
                L = function(e, t) {
                    return e === t ? (k = !0, 0) : 0
                },
                A = typeof t,
                O = 1 << 31,
                M = {}.hasOwnProperty,
                _ = [],
                D = _.pop,
                P = _.push,
                H = _.push,
                B = _.slice,
                j = _.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                I = "[\\x20\\t\\r\\n\\f]",
                q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                R = q.replace("w", "w#"),
                U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]",
                z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)",
                W = RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                X = RegExp("^" + I + "*," + I + "*"),
                V = RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                $ = RegExp(I + "*[+~]"),
                J = RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
                K = RegExp(z),
                Q = RegExp("^" + R + "$"),
                G = {
                    ID: RegExp("^#(" + q + ")"),
                    CLASS: RegExp("^\\.(" + q + ")"),
                    TAG: RegExp("^(" + q.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + U),
                    PSEUDO: RegExp("^" + z),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + F + ")$", "i"),
                    needsContext: RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
                it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
            } catch (st) {
                H = {
                    apply: _.length ? function(e, t) {
                        P.apply(e, B.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }
            u = ot.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, r = ot.support = {}, c = ot.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : E,
                    i = n.defaultView;
                return n !== h && 9 === n.nodeType && n.documentElement ? (h = n, p = n.documentElement, d = !u(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    c()
                }), r.attributes = ft(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = ft(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = ft(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = ft(function(e) {
                    return p.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                }), r.getById ? (s.find.ID = function(e, t) {
                    if (typeof t.getElementById !== A && d) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, s.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete s.find.ID, s.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), s.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = s[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return s
                }, s.find.CLASS = r.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== A && d ? n.getElementsByClassName(e) : t
                }, m = [], v = [], (r.qsa = Y.test(n.querySelectorAll)) && (ft(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                }), ft(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (r.matchesSelector = Y.test(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ft(function(e) {
                    r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
                }), v = v.length && RegExp(v.join("|")), m = m.length && RegExp(m.join("|")), y = Y.test(p.contains) || p.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, L = p.compareDocumentPosition ? function(e, t) {
                    if (e === t) return k = !0, 0;
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || y(E, e) ? -1 : t === n || y(E, t) ? 1 : l ? j.call(l, e) - j.call(l, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        u = [e],
                        a = [t];
                    if (e === t) return k = !0, 0;
                    if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : l ? j.call(l, e) - j.call(l, t) : 0;
                    if (s === o) return ct(e, t);
                    r = e;
                    while (r = r.parentNode) u.unshift(r);
                    r = t;
                    while (r = r.parentNode) a.unshift(r);
                    while (u[i] === a[i]) i++;
                    return i ? ct(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
                }, n) : h
            }, ot.matches = function(e, t) {
                return ot(e, null, null, t)
            }, ot.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']"), !(!r.matchesSelector || !d || m && m.test(t) || v && v.test(t))) try {
                    var n = g.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (i) {}
                return ot(t, h, null, [e]).length > 0
            }, ot.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && c(e), y(e, t)
            }, ot.attr = function(e, n) {
                (e.ownerDocument || e) !== h && c(e);
                var i = s.attrHandle[n.toLowerCase()],
                    o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
                return o === t ? r.attributes || !d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
            }, ot.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, ot.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    s = 0;
                if (k = !r.detectDuplicates, l = !r.sortStable && e.slice(0), e.sort(L), k) {
                    while (t = e[s++]) t === e[s] && (i = n.push(s));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, o = ot.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += o(t);
                return n
            }, s = ot.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ot.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var s = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            u = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, a) {
                            var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                g = u && t.nodeName.toLowerCase(),
                                y = !a && !u;
                            if (m) {
                                if (s) {
                                    while (v) {
                                        c = t;
                                        while (c = c[v])
                                            if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        d = v = "only" === e && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                    l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if (1 === c.nodeType && ++h && c === t) {
                                            l[e] = [S, p, h];
                                            break
                                        }
                                } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S) h = f[1];
                                else
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[b] || (c[b] = {}))[e] = [S, h]), c === t)) break; return h -= i, h === r || 0 === h % r && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: at(function(e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(W, "$1"));
                        return r[b] ? at(function(e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: at(function(e) {
                        return function(t) {
                            return ot(e, t).length > 0
                        }
                    }),
                    contains: at(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: at(function(e) {
                        return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !s.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: dt(function() {
                        return [0]
                    }),
                    last: dt(function(e, t) {
                        return [t - 1]
                    }),
                    eq: dt(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: dt(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: dt(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: dt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: dt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            }, s.pseudos.nth = s.pseudos.eq;
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) s.pseudos[n] = ht(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) s.pseudos[n] = pt(n);
            vt.prototype = s.filters = s.pseudos, s.setFilters = new vt, a = ot.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    s = C[e + " "];
                if (!s) {
                    t || (t = mt(e)), n = t.length;
                    while (n--) s = St(t[n]), s[b] ? r.push(s) : i.push(s);
                    s = C(e, xt(i, r))
                }
                return s
            }, r.sortStable = b.split("").sort(L).join("") === b, r.detectDuplicates = k, c(), r.sortDetached = ft(function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("div"))
            }), ft(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || lt("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), r.attributes && ft(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || lt("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), ft(function(e) {
                return null == e.getAttribute("disabled")
            }) || lt(F, function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
            }), w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
        }(e);
    var B = {};
    w.Callbacks = function(e) {
        e = "string" == typeof e ? B[e] || j(e) : w.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                for (r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0; a && s > o; o++)
                    if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            w.each(t, function(t, n) {
                                var r = w.type(n);
                                "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function() {
                    return a && w.each(arguments, function(e, t) {
                        var r;
                        while ((r = w.inArray(t, a, r)) > -1) a.splice(r, 1), n && (s >= r && s--, o >= r && o--)
                    }), this
                },
                has: function(e) {
                    return e ? w.inArray(e, a) > -1 : !!a && !!a.length
                },
                empty: function() {
                    return a = [], s = 0, this
                },
                disable: function() {
                    return a = f = r = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, r || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return !a || i && !f || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, w.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", w.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return w.Deferred(function(n) {
                            w.each(t, function(t, s) {
                                var o = s[0],
                                    u = w.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = u && u.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, w.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = v.call(arguments),
                r = n.length,
                i = 1 !== r || e && w.isFunction(e.promise) ? r : 0,
                s = 1 === i ? e : w.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1)
                for (u = Array(r), a = Array(r), f = Array(r); r > t; t++) n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            return i || s.resolveWith(f, n), s.promise()
        }
    }), w.support = function(t) {
        var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!o.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = o.createElement("input"), s.setAttribute("value", ""), t.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
                submit: !0,
                change: !0,
                focusin: !0
            }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
        for (h in w(t)) break;
        return t.ownLast = "0" !== h, w(function() {
            var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = o.getElementsByTagName("body")[0];
            a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === s[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === p.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null)
        }), n = u = a = f = r = s = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    w.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
        },
        data: function(e, t, n) {
            return q(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return q(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), w.fn.extend({
        data: function(e, n) {
            var r, i, s = null,
                o = 0,
                u = this[0];
            if (e === t) {
                if (this.length && (s = w.data(u), 1 === u.nodeType && !w._data(u, "parsedAttrs"))) {
                    for (r = u.attributes; r.length > o; o++) i = r[o].name, 0 === i.indexOf("data-") && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                    w._data(u, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                w.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                w.data(this, e, n)
            }) : u ? U(u, e, w.data(u, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                w.removeData(this, e)
            })
        }
    }), w.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = w._data(e, n), r && (!i || w.isArray(r) ? i = w._data(e, n, w.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = w._queueHooks(e, t),
                o = function() {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    w._removeData(e, t + "queue"), w._removeData(e, n)
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? w.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = w.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (u--) r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var W, X, V = /[\t\r\n\f]/g,
        $ = /\r/g,
        J = /^(?:input|select|textarea|button|object)$/i,
        K = /^(?:a|area)$/i,
        Q = /^(?:checked|selected)$/i,
        G = w.support.getSetAttribute,
        Y = w.support.input;
    w.fn.extend({
        attr: function(e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = w.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = "string" == typeof e && e;
            if (w.isFunction(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(S) || []; u > o; o++)
                    if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(V, " ") : " ")) {
                        s = 0;
                        while (i = t[s++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = w.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = 0 === arguments.length || "string" == typeof e && e;
            if (w.isFunction(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(S) || []; u > o; o++)
                    if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(V, " ") : "")) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        s = w(this),
                        o = e.match(S) || [];
                    while (t = o[r++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (arguments.length) return i = w.isFunction(e), this.each(function(n) {
                var s;
                1 === this.nodeType && (s = i ? e.call(this, n, w(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : w.isArray(s) && (s = w.map(s, function(e) {
                    return null == e ? "" : e + ""
                })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, s, "value") !== t || (this.value = s))
            });
            if (s) return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = "select-one" === e.type || 0 > i,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = 0 > i ? u : s ? i : 0;
                    for (; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (w.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && w.nodeName(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        s = w.makeArray(t),
                        o = i.length;
                    while (o--) r = i[o], (r.selected = w.inArray(w(r).val(), s) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        },
        attr: function(e, n, r) {
            var s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? w.prop(e, n, r) : (1 === u && w.isXMLDoc(e) || (n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W)), r === t ? s && "get" in s && null !== (o = s.get(e, n)) ? o : (o = w.find.attr(e, n), null == o ? t : o) : null !== r ? s && "set" in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (w.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(S);
            if (s && 1 === e.nodeType)
                while (n = s[i++]) r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!w.support.radioValue && "radio" === t && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && null !== (i = s.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function(e, n, i) {
            var s = w.expr.attrHandle[n],
                o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return w.expr.attrHandle[n] = s, o
        } : function(e, n, r) {
            return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Y && G || (w.attrHooks.value = {
        set: function(e, n, r) {
            return w.nodeName(e, "input") ? (e.defaultValue = n, t) : W && W.set(e, n, r)
        }
    }), G || (W = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, w.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: W.set
    }, w.attrHooks.contenteditable = {
        set: function(e, t, n) {
            W.set(e, "" === t ? !1 : t, n)
        }
    }, w.each(["width", "height"], function(e, n) {
        w.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), w.support.hrefNormalized || w.each(["href", "src"], function(e, t) {
        w.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), w.support.style || (w.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), w.support.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, n) {
                return w.isArray(n) ? e.checked = w.inArray(w(e).val(), n) >= 0 : t
            }
        }, w.support.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    w.event = {
        global: {},
        add: function(e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
            if (y) {
                r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                    return typeof w === i || e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
                }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
                while (f--) u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), v && (c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (d = a[v]) || (d = a[v] = [], d.delegateCount = 0, c.setup && c.setup.call(e, s, m, h) !== !1 || (e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
            if (m && (l = m.events)) {
                t = (t || "").match(S) || [""], f = t.length;
                while (f--)
                    if (u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                        c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                        while (s--) o = h[s], !i && v !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || w.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) w.event.remove(e, p + t[f], n, r, !0);
                w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, s) {
            var u, a, f, l, c, h, p, d = [i || o],
                v = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (f = h = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(v + w.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = 0 > v.indexOf(":") && "on" + v, n = n[w.expando] ? n : new w.Event(v, "object" == typeof n && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {}, s || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!s && !c.noBubble && !w.isWindow(i)) {
                    for (l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode); f; f = f.parentNode) d.push(f), h = f;
                    h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
                }
                p = 0;
                while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
                if (n.type = v, !s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                    h = i[a], h && (i[a] = null), w.event.triggered = v;
                    try {
                        i[v]()
                    } catch (g) {}
                    w.event.triggered = t, h && (i[a] = h)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = w.event.fix(e);
            var n, r, i, s, o, u = [],
                a = v.call(arguments),
                f = (w._data(this, "events") || {})[e.type] || [],
                l = w.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = w.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, s, o, u = [],
                a = n.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || "click" !== e.type))
                for (; f != this; f = f.parentNode || this)
                    if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
                        for (s = [], o = 0; a > o; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({
                            elem: f,
                            handlers: s
                        })
                    }
            return n.length > a && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u
        },
        fix: function(e) {
            if (e[w.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, s, u = n.button,
                    a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || u === t || (e.which = 1 & u ? 1 : 2 & u ? 3 : 4 & u ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ot() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ot() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return w.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return w.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = o.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, w.Event = function(e, n) {
        return this instanceof w.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, n && w.extend(this, n), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0, t) : new w.Event(e, n)
    }, w.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !w.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.support.submitBubbles || (w.event.special.submit = {
        setup: function() {
            return w.nodeName(this, "form") ? !1 : (w.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), w._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return w.nodeName(this, "form") ? !1 : (w.event.remove(this, "._submit"), t)
        }
    }), w.support.changeBubbles || (w.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (w.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), w.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
            })), !1) : (w.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || w.event.simulate("change", this.parentNode, e, !0)
                }), w._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), w.support.focusinBubbles || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                w.event.simulate(t, e.target, w.event.fix(e), !0)
            };
        w.event.special[t] = {
            setup: function() {
                0 === n++ && o.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }), w.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = st;
            else if (!i) return this;
            return 1 === s && (u = i, i = function(e) {
                return w().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function() {
                w.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = st), this.each(function() {
                w.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? w.event.trigger(e, n, r, !0) : t
        }
    });
    var ut = /^.[^:#\[\.,]*$/,
        at = /^(?:parents|prev(?:Until|All))/,
        ft = w.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (w.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) w.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = w(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (w.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ht(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ht(this, e || [], !1))
        },
        is: function(e) {
            return !!ht(this, "string" == typeof e && ft.test(e) ? w(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || "string" != typeof e ? w(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (o ? o.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        n = s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? w.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w.dir(e, "parentNode", n)
        },
        next: function(e) {
            return ct(e, "nextSibling")
        },
        prev: function(e) {
            return ct(e, "previousSibling")
        },
        nextAll: function(e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w.sibling(e.firstChild)
        },
        contents: function(e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), w.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && 9 !== s.nodeType && (r === t || 1 !== s.nodeType || !w(s).is(r))) 1 === s.nodeType && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        At = pt(o),
        Ot = At.appendChild(o.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
        text: function(e) {
            return w.access(this, function(e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Mt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Mt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? w.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && w.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return w.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(vt, "") : t;
                if (!("string" != typeof e || St.test(e) || !w.support.htmlSerialize && mt.test(e) || !w.support.leadingWhitespace && gt.test(e) || Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = w.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = p.apply([], e);
            var r, i, s, o, u, a, f = 0,
                l = this.length,
                c = this,
                h = l - 1,
                d = e[0],
                v = w.isFunction(d);
            if (v || !(1 >= l || "string" != typeof d || w.support.checkClone) && Tt.test(d)) return this.each(function(r) {
                var i = c.eq(r);
                v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l && (a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, 1 === a.childNodes.length && (a = r), r)) {
                for (o = w.map(jt(a, "script"), _t), s = o.length; l > f; f++) i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, w.map(o, Dt), f = 0; s > f; f++) i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")));
                a = r = null
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                s = w(e),
                o = s.length - 1;
            for (; o >= r; r++) n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    }), w.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
            if (w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild)), !(w.support.noCloneEvent && w.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (r = jt(s), u = jt(e), o = 0; null != (i = u[o]); ++o) r[o] && Bt(i, r[o]);
            if (t)
                if (n)
                    for (u = u || jt(e), r = r || jt(s), o = 0; null != (i = u[o]); o++) Ht(i, r[o]);
                else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; c > d; d++)
                if (s = e[d], s || 0 === s)
                    if ("object" === w.type(s)) w.merge(p, s.nodeType ? [s] : s);
                    else if (Et.test(s)) {
                u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                if (!w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0])), !w.support.tbody) {
                    s = "table" !== a || wt.test(s) ? "<table>" !== l[1] || wt.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                    while (i--) w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                w.merge(p, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = h.lastChild
            } else p.push(t.createTextNode(s));
            u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++])
                if ((!r || -1 === w.inArray(s, r)) && (o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u), n)) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            return u = null, h
        },
        cleanData: function(e, t) {
            var n, r, s, o, u = 0,
                a = w.expando,
                f = w.cache,
                l = w.support.deleteExpando,
                h = w.event.special;
            for (; null != (n = e[u]); u++)
                if ((t || w.acceptData(n)) && (s = n[a], o = s && f[s])) {
                    if (o.events)
                        for (r in o.events) h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                    f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                }
        },
        _evalUrl: function(e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), w.fn.extend({
        wrapAll: function(e) {
            if (w.isFunction(e)) return this.each(function(t) {
                w(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return w.isFunction(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = w.isFunction(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = RegExp("^(" + E + ")(.*)$", "i"),
        Jt = RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
        Kt = RegExp("^([+-])=(" + E + ")", "i"),
        Qt = {
            BODY: "block"
        },
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({
        css: function(e, n) {
            return w.access(this, function(e, n, r) {
                var i, s, o = {},
                    u = 0;
                if (w.isArray(n)) {
                    for (s = qt(e), i = n.length; i > u; u++) o[n[u]] = w.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? w(this).show() : w(this).hide()
            })
        }
    }), w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": w.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, u, a = w.camelCase(n),
                    f = e.style;
                if (n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a], r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                if (o = typeof r, "string" === o && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || w.cssNumber[a] || (r += "px"), w.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (f[n] = "inherit"), u && "set" in u && (r = u.set(e, r, i)) === t))) try {
                    f[n] = r
                } catch (l) {}
            }
        },
        css: function(e, n, r, i) {
            var s, o, u, a = w.camelCase(n);
            return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), "normal" === o && n in Yt && (o = Yt[n]), "" === r || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
        }
    }), e.getComputedStyle ? (qt = function(t) {
        return e.getComputedStyle(t, null)
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && ("" !== a || w.contains(e.ownerDocument, e) || (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : o.documentElement.currentStyle && (qt = function(e) {
        return e.currentStyle
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return null == a && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = "fontSize" === n ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), "" === a ? "auto" : a
    }), w.each(["height", "width"], function(e, n) {
        w.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function() {
                    return un(e, n, i)
                }) : un(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && qt(e);
                return sn(e, t, r ? on(e, n, r, w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), w.support.opacity || (w.cssHooks.opacity = {
        get: function(e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = w.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === w.trim(s.replace(Ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i)
        }
    }), w(function() {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? w.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"]) : t
            }
        }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function(e, n) {
            w.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Rt(e, n), Jt.test(r) ? w(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), w.expr && w.expr.filters && (w.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !w.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || w.css(e, "display"))
    }, w.expr.filters.visible = function(e) {
        return !w.expr.filters.hidden(e)
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    s = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g,
        cn = /\[\]$/,
        hn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : w.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), w.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = w.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, gn, yn = w.now(),
        bn = /\?/,
        wn = /#.*$/,
        En = /([?&])_=[^&]*/,
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kn = w.fn.load,
        Ln = {},
        An = {},
        On = "*/".concat("*");
    try {
        gn = s.href
    } catch (Mn) {
        gn = o.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function(e, n, r) {
        if ("string" != typeof e && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), u.length > 0 && w.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function(e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                2 !== b && (b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l), l ? (c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), 204 === e || "HEAD" === c.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                d = w.Deferred(),
                v = w.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                b = 0,
                E = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || E;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            if (d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], null == c.crossDomain && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x), 2 === b) return x;
            a = c.global, a && 0 === w.active++ && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && 2 !== b) {
                E = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[i](c[i]);
                if (f = Dn(An, c, n, x)) {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, f.send(g, N)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        N(-1, T)
                    }
                } else N(-1, "No Transport");
                return x
            }
            return x.abort()
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return w.get(e, t, n, "script")
        }
    }), w.each(["get", "post"], function(e, n) {
        w[n] = function(e, r, i, s) {
            return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = o.head || w("head")[0] || o.documentElement;
            return {
                send: function(t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jn.pop() || w.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        return a || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || w.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
        }), "script") : t
    });
    var In, qn, Rn = 0,
        Un = e.ActiveXObject && function() {
            var e;
            for (e in In) In[e](t, !0)
        };
    w.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials" in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function(n) {
        if (!n.crossDomain || w.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    if (n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async), n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || 4 === a.readyState))
                                if (r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]), i) 4 !== a.readyState && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), "string" == typeof a.responseText && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }
                                    u || !n.isLocal || n.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404
                                }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? 4 === a.readyState ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Qn = [nr],
        Gn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Jn.exec(t),
                    s = i && i[3] || (w.cssNumber[e] ? "" : "px"),
                    o = (w.cssNumber[e] || "px" !== s && +r) && Jn.exec(w.css(n.elem, e)),
                    u = 1,
                    a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o = +r || 1;
                    do u = u || ".5", o /= u, w.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    w.Animation = w.extend(er, {
        tweener: function(e, t) {
            w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), w.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e),
                s = w.speed(t, n, r),
                o = function() {
                    var t = er(this, w.extend({}, e), s);
                    (i || w._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    s = w.timers,
                    o = w._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = w._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = w.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        return r.duration = w.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function() {
        var e, n = w.timers,
            r = 0;
        for (Xn = w.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || w.fx.stop(), Xn = t
    }, w.fx.timer = function(e) {
        e() && w.timers.push(e) && w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
    }, w.fx.stop = function() {
        clearInterval(Vn), Vn = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }), w.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            w.offset.setOffset(this, e, t)
        });
        var n, r, s = {
                top: 0,
                left: 0
            },
            o = this[0],
            u = o && o.ownerDocument;
        if (u) return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r = w.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = w(e),
                s = i.offset(),
                o = w.css(e, "top"),
                u = w.css(e, "left"),
                a = ("absolute" === r || "fixed" === r) && w.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + c), null != t.left && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, w.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === w.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - w.css(r, "marginTop", !0),
                    left: t.left - n.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || u;
                while (e && !w.nodeName(e, "html") && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || u
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function(i) {
            return w.access(this, function(e, i, s) {
                var o = sr(e);
                return s === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s, t)
            }, e, i, arguments.length, null)
        }
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        w.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            w.fn[i] = function(i, s) {
                var o = arguments.length && (r || "boolean" != typeof i),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return w.access(this, function(n, r, i) {
                    var s;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), w.fn.size = function() {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = w : (e.jQuery = e.$ = w, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    }))
})(window),
function() {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function(e) {
            return e instanceof x ? e : this instanceof x ? void(this._wrapped = e) : new x(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.6.0";
    var T = x.each = x.forEach = function(e, t, r) {
        if (null == e) return e;
        if (c && e.forEach === c) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; s > i; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var o = x.keys(e), i = 0, s = o.length; s > i; i++)
                if (t.call(r, e[o[i]], o[i], e) === n) return; return e
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r.push(t.call(n, e, i, s))
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function(e, s, o) {
                i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        if (T(e, function(u, a, f) {
                a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            return t.call(n, e, i, s) ? (r = e, !0) : void 0
        }), r
    }, x.filter = x.select = function(e, t, n) {
        var r = [];
        return null == e ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call(n, e, i, s) && r.push(e)
        }), r)
    }, x.reject = function(e, t, n) {
        return x.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function(e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return null == e ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            return (i = i && t.call(r, e, s, o)) ? void 0 : n
        }), !!i)
    };
    var C = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            return i || (i = t.call(r, e, s, o)) ? n : void 0
        }), !!i)
    };
    x.contains = x.include = function(e, t) {
        return null == e ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
            return e === t
        })
    }, x.invoke = function(e, t) {
        var n = u.call(arguments, 2),
            r = x.isFunction(t);
        return x.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function(e, t) {
        return x.map(e, x.property(t))
    }, x.where = function(e, t) {
        return x.filter(e, x.matches(t))
    }, x.findWhere = function(e, t) {
        return x.find(e, x.matches(t))
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        var r = -1 / 0,
            i = -1 / 0;
        return T(e, function(e, s, o) {
            var u = t ? t.call(n, e, s, o) : e;
            u > i && (r = e, i = u)
        }), r
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        var r = 1 / 0,
            i = 1 / 0;
        return T(e, function(e, s, o) {
            var u = t ? t.call(n, e, s, o) : e;
            i > u && (r = e, i = u)
        }), r
    }, x.shuffle = function(e) {
        var t, n = 0,
            r = [];
        return T(e, function(e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, x.sample = function(e, t, n) {
        return null == t || n ? (e.length !== +e.length && (e = x.values(e)), e[x.random(e.length - 1)]) : x.shuffle(e).slice(0, Math.max(0, t))
    };
    var k = function(e) {
        return null == e ? x.identity : x.isFunction(e) ? e : x.property(e)
    };
    x.sortBy = function(e, t, n) {
        return t = k(t), x.pluck(x.map(e, function(e, r, i) {
            return {
                value: e,
                index: r,
                criteria: t.call(n, e, r, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (r > n || r === void 0) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var L = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = k(n), T(t, function(s, o) {
                var u = n.call(r, s, o, t);
                e(i, u, s)
            }), i
        }
    };
    x.groupBy = L(function(e, t, n) {
        x.has(e, t) ? e[t].push(n) : e[t] = [n]
    }), x.indexBy = L(function(e, t, n) {
        e[t] = n
    }), x.countBy = L(function(e, t) {
        x.has(e, t) ? e[t] ++ : e[t] = 1
    }), x.sortedIndex = function(e, t, n, r) {
        n = k(n);
        for (var i = n.call(r, t), s = 0, o = e.length; o > s;) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function(e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : u.call(e, 0, t)
    }, x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, x.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function(e, t, n) {
        return u.call(e, null == t || n ? 1 : t)
    }, x.compact = function(e) {
        return x.filter(e, x.identity)
    };
    var A = function(e, t, n) {
        return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function(e) {
            x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n)
    };
    x.flatten = function(e, t) {
        return A(e, t, [])
    }, x.without = function(e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.partition = function(e, t) {
        var n = [],
            r = [];
        return T(e, function(e) {
            (t(e) ? n : r).push(e)
        }), [n, r]
    }, x.uniq = x.unique = function(e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function(n, r) {
            (t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(e[r]))
        }), s
    }, x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.contains(t, e)
            })
        })
    }, x.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function(e) {
            return !x.contains(t, e)
        })
    }, x.zip = function() {
        for (var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = x.pluck(arguments, "" + n);
        return t
    }, x.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++)
            if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;)
            if (e[i] === t) return i;
        return -1
    }, x.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r); r > i;) s[i++] = e, e += n;
        return s
    };
    var O = function() {};
    x.bind = function(e, t) {
        var n, r;
        if (S && e.bind === S) return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return n = u.call(arguments, 2), r = function() {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function(e) {
        var t = u.call(arguments, 1);
        return function() {
            for (var n = 0, r = t.slice(), i = 0, s = r.length; s > i; i++) r[i] === x && (r[i] = arguments[n++]);
            for (; n < arguments.length;) r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }, x.bindAll = function(e) {
        var t = u.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return T(t, function(t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity),
            function() {
                var r = t.apply(this, arguments);
                return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function(e, t, n) {
        var r, i, s, o = null,
            u = 0;
        n || (n = {});
        var a = function() {
            u = n.leading === !1 ? 0 : x.now(), o = null, s = e.apply(r, i), r = i = null
        };
        return function() {
            var f = x.now();
            u || n.leading !== !1 || (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, 0 >= l ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i), r = i = null) : o || n.trailing === !1 || (o = setTimeout(a, l)), s
        }
    }, x.debounce = function(e, t, n) {
        var r, i, s, o, u, a = function() {
            var f = x.now() - o;
            t > f ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), s = i = null))
        };
        return function() {
            s = this, i = arguments, o = x.now();
            var f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
        }
    }, x.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, x.wrap = function(e, t) {
        return x.partial(t, e)
    }, x.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, x.keys = function(e) {
        if (!x.isObject(e)) return [];
        if (E) return E(e);
        var t = [];
        for (var n in e) x.has(e, n) && t.push(n);
        return t
    }, x.values = function(e) {
        for (var t = x.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
        return r
    }, x.pairs = function(e) {
        for (var t = x.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, x.invert = function(e) {
        for (var t = {}, n = x.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
        return t
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function(e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function(e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) e[n] === void 0 && (e[n] = t[n])
        }), e
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
        return t(e), e
    };
    var M = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var s = n.length; s--;)
            if (n[s] == e) return r[s] == t;
        var o = e.constructor,
            u = t.constructor;
        if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
        n.push(e), r.push(t);
        var a = 0,
            l = !0;
        if ("[object Array]" == i) {
            if (a = e.length, l = a == t.length)
                for (; a-- && (l = M(e[a], t[a], n, r)););
        } else {
            for (var c in e)
                if (x.has(e, c) && (a++, !(l = x.has(t, c) && M(e[c], t[c], n, r)))) break;
            if (l) {
                for (c in t)
                    if (x.has(t, c) && !(a--)) break;
                l = !a
            }
        }
        return n.pop(), r.pop(), l
    };
    x.isEqual = function(e, t) {
        return M(e, t, [], [])
    }, x.isEmpty = function(e) {
        if (null == e) return !0;
        if (x.isArray(e) || x.isString(e)) return 0 === e.length;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function(e) {
        return !!e && 1 === e.nodeType
    }, x.isArray = w || function(e) {
        return "[object Array]" == f.call(e)
    }, x.isObject = function(e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        x["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return !!e && !!x.has(e, "callee")
    }), "function" != typeof /./ && (x.isFunction = function(e) {
        return "function" == typeof e
    }), x.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function(e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == f.call(e)
    }, x.isNull = function(e) {
        return null === e
    }, x.isUndefined = function(e) {
        return e === void 0
    }, x.has = function(e, t) {
        return l.call(e, t)
    }, x.noConflict = function() {
        return e._ = t, this
    }, x.identity = function(e) {
        return e
    }, x.constant = function(e) {
        return function() {
            return e
        }
    }, x.property = function(e) {
        return function(t) {
            return t[e]
        }
    }, x.matches = function(e) {
        return function(t) {
            if (t === e) return !0;
            for (var n in e)
                if (e[n] !== t[n]) return !1;
            return !0
        }
    }, x.times = function(e, t, n) {
        for (var r = Array(Math.max(0, e)), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, x.now = Date.now || function() {
        return (new Date).getTime()
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    _.unescape = x.invert(_.escape);
    var D = {
        escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function(e) {
        x[e] = function(t) {
            return null == t ? "" : ("" + t).replace(D[e], function(t) {
                return _[e][t]
            })
        }
    }), x.result = function(e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function(e) {
        T(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function(e) {
        var t = ++P + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "   ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(i, function(t, n, r, i, u) {
            return o += e.slice(s, u).replace(j, function(e) {
                return "\\" + B[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function(e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function(e) {
        return x(e).chain()
    };
    var F = function(e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], F.call(this, n)
        }
    }), T(["concat", "join", "slice"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function() {
        return x
    })
}.call(this),
    function(e, t) {
        if (typeof define == "function" && define.amd) define("backbone", ["underscore", "jquery", "exports"], function(n, r, i) {
            e.Backbone = t(e, i, n, r)
        });
        else if (typeof exports != "undefined") {
            var n = require("underscore");
            t(e, exports, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(this, function(e, t, n, r) {
        var i = e.Backbone,
            s = [],
            o = s.push,
            u = s.slice,
            a = s.splice;
        t.VERSION = "1.1.2", t.$ = r, t.noConflict = function() {
            return e.Backbone = i, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var f = t.Events = {
                on: function(e, t, n) {
                    if (!c(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var r = this._events[e] || (this._events[e] = []);
                    return r.push({
                        callback: t,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(e, t, r) {
                    if (!c(this, "once", e, [t, r]) || !t) return this;
                    var i = this,
                        s = n.once(function() {
                            i.off(e, s), t.apply(this, arguments)
                        });
                    return s._callback = t, this.on(e, s, r)
                },
                off: function(e, t, r) {
                    var i, s, o, u, a, f, l, h;
                    if (!this._events || !c(this, "off", e, [t, r])) return this;
                    if (!e && !t && !r) return this._events = void 0, this;
                    u = e ? [e] : n.keys(this._events);
                    for (a = 0, f = u.length; a < f; a++) {
                        e = u[a];
                        if (o = this._events[e]) {
                            this._events[e] = i = [];
                            if (t || r)
                                for (l = 0, h = o.length; l < h; l++) s = o[l], (t && t !== s.callback && t !== s.callback._callback || r && r !== s.context) && i.push(s);
                            i.length || delete this._events[e]
                        }
                    }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = u.call(arguments, 1);
                    if (!c(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        r = this._events.all;
                    return n && h(n, t), r && h(r, arguments), this
                },
                stopListening: function(e, t, r) {
                    var i = this._listeningTo;
                    if (!i) return this;
                    var s = !t && !r;
                    !r && typeof t == "object" && (r = this), e && ((i = {})[e._listenId] = e);
                    for (var o in i) e = i[o], e.off(t, r, this), (s || n.isEmpty(e._events)) && delete this._listeningTo[o];
                    return this
                }
            },
            l = /\s+/,
            c = function(e, t, n, r) {
                if (!n) return !0;
                if (typeof n == "object") {
                    for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                    return !1
                }
                if (l.test(n)) {
                    var s = n.split(l);
                    for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
                    return !1
                }
                return !0
            },
            h = function(e, t) {
                var n, r = -1,
                    i = e.length,
                    s = t[0],
                    o = t[1],
                    u = t[2];
                switch (t.length) {
                    case 0:
                        while (++r < i)(n = e[r]).callback.call(n.ctx);
                        return;
                    case 1:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, s);
                        return;
                    case 2:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, s, o);
                        return;
                    case 3:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, s, o, u);
                        return;
                    default:
                        while (++r < i)(n = e[r]).callback.apply(n.ctx, t);
                        return
                }
            },
            p = {
                listenTo: "on",
                listenToOnce: "once"
            };
        n.each(p, function(e, t) {
            f[t] = function(t, r, i) {
                var s = this._listeningTo || (this._listeningTo = {}),
                    o = t._listenId || (t._listenId = n.uniqueId("l"));
                return s[o] = t, !i && typeof r == "object" && (i = this), t[e](r, i, this), this
            }
        }), f.bind = f.on, f.unbind = f.off, n.extend(t, f);
        var d = t.Model = function(e, t) {
            var r = e || {};
            t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(d.prototype, f, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return n.escape(this.get(e))
            },
            has: function(e) {
                return this.get(e) != null
            },
            set: function(e, t, r) {
                var i, s, o, u, a, f, l, c;
                if (e == null) return this;
                typeof e == "object" ? (s = e, r = t) : (s = {})[e] = t, r || (r = {});
                if (!this._validate(s, r)) return !1;
                o = r.unset, a = r.silent, u = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
                for (i in s) t = s[i], n.isEqual(c[i], t) || u.push(i), n.isEqual(l[i], t) ? delete this.changed[i] : this.changed[i] = t, o ? delete c[i] : c[i] = t;
                if (!a) {
                    u.length && (this._pending = r);
                    for (var h = 0, p = u.length; h < p; h++) this.trigger("change:" + u[h], this, c[u[h]], r)
                }
                if (f) return this;
                if (!a)
                    while (this._pending) r = this._pending, this._pending = !1, this.trigger("change", this, r);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, n.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var r in this.attributes) t[r] = void 0;
                return this.set(t, n.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return e == null ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                var t, r = !1,
                    i = this._changing ? this._previousAttributes : this.attributes;
                for (var s in e) {
                    if (n.isEqual(i[s], t = e[s])) continue;
                    (r || (r = {}))[s] = t
                }
                return r
            },
            previous: function(e) {
                return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                var t = this,
                    r = e.success;
                return e.success = function(n) {
                    if (!t.set(t.parse(n, e), e)) return !1;
                    r && r(t, n, e), t.trigger("sync", t, n, e)
                }, I(this, e), this.sync("read", this, e)
            },
            save: function(e, t, r) {
                var i, s, o, u = this.attributes;
                e == null || typeof e == "object" ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({
                    validate: !0
                }, r);
                if (i && !r.wait) {
                    if (!this.set(i, r)) return !1
                } else if (!this._validate(i, r)) return !1;
                i && r.wait && (this.attributes = n.extend({}, u, i)), r.parse === void 0 && (r.parse = !0);
                var a = this,
                    f = r.success;
                return r.success = function(e) {
                    a.attributes = u;
                    var t = a.parse(e, r);
                    r.wait && (t = n.extend(i || {}, t));
                    if (n.isObject(t) && !a.set(t, r)) return !1;
                    f && f(a, e, r), a.trigger("sync", a, e, r)
                }, I(this, r), s = this.isNew() ? "create" : r.patch ? "patch" : "update", s === "patch" && (r.attrs = i), o = this.sync(s, this, r), i && r.wait && (this.attributes = u), o
            },
            destroy: function(e) {
                e = e ? n.clone(e) : {};
                var t = this,
                    r = e.success,
                    i = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                e.success = function(n) {
                    (e.wait || t.isNew()) && i(), r && r(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                };
                if (this.isNew()) return e.success(), !1;
                I(this, e);
                var s = this.sync("delete", this, e);
                return e.wait || i(), s
            },
            url: function() {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
                return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(e) {
                return this._validate({}, n.extend(e || {}, {
                    validate: !0
                }))
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = n.extend({}, this.attributes, e);
                var r = this.validationError = this.validate(e, t) || null;
                return r ? (this.trigger("invalid", this, r, n.extend(t, {
                    validationError: r
                })), !1) : !0
            }
        });
        var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(v, function(e) {
            d.prototype[e] = function() {
                var t = u.call(arguments);
                return t.unshift(this.attributes), n[e].apply(n, t)
            }
        });
        var m = t.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                    silent: !0
                }, t))
            },
            g = {
                add: !0,
                remove: !0,
                merge: !0
            },
            y = {
                add: !0,
                remove: !1
            };
        n.extend(m.prototype, f, {
            model: d,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(e, t) {
                return this.set(e, n.extend({
                    merge: !1
                }, t, y))
            },
            remove: function(e, t) {
                var r = !n.isArray(e);
                e = r ? [e] : n.clone(e), t || (t = {});
                var i, s, o, u;
                for (i = 0, s = e.length; i < s; i++) {
                    u = e[i] = this.get(e[i]);
                    if (!u) continue;
                    delete this._byId[u.id], delete this._byId[u.cid], o = this.indexOf(u), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, u.trigger("remove", u, this, t)), this._removeReference(u, t)
                }
                return r ? e[0] : e
            },
            set: function(e, t) {
                t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                var r = !n.isArray(e);
                e = r ? e ? [e] : [] : n.clone(e);
                var i, s, o, u, a, f, l, c = t.at,
                    h = this.model,
                    p = this.comparator && c == null && t.sort !== !1,
                    v = n.isString(this.comparator) ? this.comparator : null,
                    m = [],
                    y = [],
                    b = {},
                    w = t.add,
                    E = t.merge,
                    S = t.remove,
                    x = !p && w && S ? [] : !1;
                for (i = 0, s = e.length; i < s; i++) {
                    a = e[i] || {}, a instanceof d ? o = u = a : o = a[h.prototype.idAttribute || "id"];
                    if (f = this.get(o)) S && (b[f.cid] = !0), E && (a = a === u ? u.attributes : a, t.parse && (a = f.parse(a, t)), f.set(a, t), p && !l && f.hasChanged(v) && (l = !0)), e[i] = f;
                    else if (w) {
                        u = e[i] = this._prepareModel(a, t);
                        if (!u) continue;
                        m.push(u), this._addReference(u, t)
                    }
                    u = f || u, x && (u.isNew() || !b[u.id]) && x.push(u), b[u.id] = !0
                }
                if (S) {
                    for (i = 0, s = this.length; i < s; ++i) b[(u = this.models[i]).cid] || y.push(u);
                    y.length && this.remove(y, t)
                }
                if (m.length || x && x.length) {
                    p && (l = !0), this.length += m.length;
                    if (c != null)
                        for (i = 0, s = m.length; i < s; i++) this.models.splice(c + i, 0, m[i]);
                    else {
                        x && (this.models.length = 0);
                        var T = x || m;
                        for (i = 0, s = T.length; i < s; i++) this.models.push(T[i])
                    }
                }
                l && this.sort({
                    silent: !0
                });
                if (!t.silent) {
                    for (i = 0, s = m.length; i < s; i++)(u = m[i]).trigger("add", u, this, t);
                    (l || x && x.length) && this.trigger("sort", this, t)
                }
                return r ? e[0] : e
            },
            reset: function(e, t) {
                t || (t = {});
                for (var r = 0, i = this.models.length; r < i; r++) this._removeReference(this.models[r], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function(e, t) {
                return this.add(e, n.extend({
                    at: this.length
                }, t))
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return this.add(e, n.extend({
                    at: 0
                }, t))
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function() {
                return u.apply(this.models, arguments)
            },
            get: function(e) {
                return e == null ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e, t) {
                return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function(e) {
                return this.where(e, !0)
            },
            sort: function(e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), n.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return n.invoke(this.models, "get", e)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                var t = e.success,
                    r = this;
                return e.success = function(n) {
                    var i = e.reset ? "reset" : "set";
                    r[i](n, e), t && t(r, n, e), r.trigger("sync", r, n, e)
                }, I(this, e), this.sync("read", this, e)
            },
            create: function(e, t) {
                t = t ? n.clone(t) : {};
                if (!(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var r = this,
                    i = t.success;
                return t.success = function(e, n) {
                    t.wait && r.add(e, t), i && i(e, n, t)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof d) return e;
                t = t ? n.clone(t) : {}, t.collection = this;
                var r = new this.model(e, t);
                return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
            },
            _addReference: function(e, t) {
                this._byId[e.cid] = e, e.id != null && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
            },
            _removeReference: function(e, t) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, r) {
                if ((e === "add" || e === "remove") && n !== this) return;
                e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
            }
        });
        var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(b, function(e) {
            m.prototype[e] = function() {
                var t = u.call(arguments);
                return t.unshift(this.models), n[e].apply(n, t)
            }
        });
        var w = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(w, function(e) {
            m.prototype[e] = function(t, r) {
                var i = n.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return n[e](this.models, i, r)
            }
        });
        var E = t.View = function(e) {
                this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, x)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            S = /^(\S+)\s*(.*)$/,
            x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(E.prototype, f, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (!e && !(e = n.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var r = e[t];
                    n.isFunction(r) || (r = this[e[t]]);
                    if (!r) continue;
                    var i = t.match(S),
                        s = i[1],
                        o = i[2];
                    r = n.bind(r, this), s += ".delegateEvents" + this.cid, o === "" ? this.$el.on(s, r) : this.$el.on(s, o, r)
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (!this.el) {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                    var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                    this.setElement(r, !1)
                } else this.setElement(n.result(this, "el"), !1)
            }
        }), t.sync = function(e, r, i) {
            var s = N[e];
            n.defaults(i || (i = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var o = {
                type: s,
                dataType: "json"
            };
            i.url || (o.url = n.result(r, "url") || F()), i.data == null && r && (e === "create" || e === "update" || e === "patch") && (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                model: o.data
            } : {});
            if (i.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
                o.type = "POST", i.emulateJSON && (o.data._method = s);
                var u = i.beforeSend;
                i.beforeSend = function(e) {
                    e.setRequestHeader("X-HTTP-Method-Override", s);
                    if (u) return u.apply(this, arguments)
                }
            }
            o.type !== "GET" && !i.emulateJSON && (o.processData = !1), o.type === "PATCH" && T && (o.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var a = i.xhr = t.ajax(n.extend(o, i));
            return r.trigger("request", r, a, i), a
        };
        var T = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent),
            N = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var C = t.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            k = /\((.*?)\)/g,
            L = /(\(\?)?:\w+/g,
            A = /\*\w+/g,
            O = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(C.prototype, f, {
            initialize: function() {},
            route: function(e, r, i) {
                n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
                var s = this;
                return t.history.route(e, function(n) {
                    var o = s._extractParameters(e, n);
                    s.execute(i, o), s.trigger.apply(s, ["route:" + r].concat(o)), s.trigger("route", r, o), t.history.trigger("route", s, r, o)
                }), this
            },
            execute: function(e, t) {
                e && e.apply(this, t)
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (!this.routes) return;
                this.routes = n.result(this, "routes");
                var e, t = n.keys(this.routes);
                while ((e = t.pop()) != null) this.route(e, this.routes[e])
            },
            _routeToRegExp: function(e) {
                return e = e.replace(O, "\\$&").replace(k, "(?:$1)?").replace(L, function(e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(A, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(e, t) {
                var r = e.exec(t).slice(1);
                return n.map(r, function(e, t) {
                    return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var M = t.History = function() {
                this.handlers = [], n.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
            },
            _ = /^[#\/]|\s+$/g,
            D = /^\/+|\/+$/g,
            P = /msie [\w.]+/,
            H = /\/$/,
            B = /#.*$/;
        M.started = !1, n.extend(M.prototype, f, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function(e, t) {
                if (e == null)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(H, "");
                        e.indexOf(n) || (e = e.slice(n.length))
                    } else e = this.getHash();
                return e.replace(_, "")
            },
            start: function(e) {
                if (M.started) throw new Error("Backbone.history has already been started");
                M.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var r = this.getFragment(),
                    i = document.documentMode,
                    s = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
                this.root = ("/" + this.root + "/").replace(D, "/");
                if (s && this._wantsHashChange) {
                    var o = t.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = o.hide().appendTo("body")[0].contentWindow, this.navigate(r)
                }
                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
                var u = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && u.hash && (this.fragment = this.getHash().replace(_, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                if (!this.options.silent) return this.loadUrl()
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), M.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                if (t === this.fragment) return !1;
                this.iframe && this.navigate(t), this.loadUrl()
            },
            loadUrl: function(e) {
                return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                    if (t.route.test(e)) return t.callback(e), !0
                })
            },
            navigate: function(e, t) {
                if (!M.started) return !1;
                if (!t || t === !0) t = {
                    trigger: !!t
                };
                var n = this.root + (e = this.getFragment(e || ""));
                e = e.replace(B, "");
                if (this.fragment === e) return;
                this.fragment = e, e === "" && n !== "/" && (n = n.slice(0, -1));
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                if (t.trigger) return this.loadUrl(e)
            },
            _updateHash: function(e, t, n) {
                if (n) {
                    var r = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(r + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new M;
        var j = function(e, t) {
            var r = this,
                i;
            e && n.has(e, "constructor") ? i = e.constructor : i = function() {
                return r.apply(this, arguments)
            }, n.extend(i, r, t);
            var s = function() {
                this.constructor = i
            };
            return s.prototype = r.prototype, i.prototype = new s, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
        };
        d.extend = m.extend = C.extend = E.extend = M.extend = j;
        var F = function() {
                throw new Error('A "url" property or function must be specified')
            },
            I = function(e, t) {
                var n = t.error;
                t.error = function(r) {
                    n && n(e, r, t), e.trigger("error", e, r, t)
                }
            };
        return t
    }),
    function(e) {
        function t() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function n(e, t) {
            return function(n) {
                return l(e.call(this, n), t)
            }
        }

        function r(e, t) {
            return function(n) {
                return this.lang().ordinal(e.call(this, n), t)
            }
        }

        function i() {}

        function s(e) {
            S(e), u(this, e)
        }

        function o(e) {
            var t = m(e),
                n = t.year || 0,
                r = t.month || 0,
                i = t.week || 0,
                s = t.day || 0,
                o = t.hour || 0,
                u = t.minute || 0,
                a = t.second || 0,
                f = t.millisecond || 0;
            this._milliseconds = +f + 1e3 * a + 6e4 * u + 36e5 * o, this._days = +s + 7 * i, this._months = +r + 12 * n, this._data = {}, this._bubble()
        }

        function u(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
        }

        function a(e) {
            var t, n = {};
            for (t in e) e.hasOwnProperty(t) && mt.hasOwnProperty(t) && (n[t] = e[t]);
            return n
        }

        function f(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }

        function l(e, t, n) {
            for (var r = "" + Math.abs(e), i = e >= 0; r.length < t;) r = "0" + r;
            return (i ? n ? "+" : "" : "-") + r
        }

        function c(e, t, n, r) {
            var i, s, o = t._milliseconds,
                u = t._days,
                a = t._months;
            o && e._d.setTime(+e._d + o * n), (u || a) && (i = e.minute(), s = e.hour()), u && e.date(e.date() + u * n), a && e.month(e.month() + a * n), o && !r && rt.updateOffset(e), (u || a) && (e.minute(i), e.hour(s))
        }

        function h(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function p(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
        }

        function d(e, t, n) {
            var r, i = Math.min(e.length, t.length),
                s = Math.abs(e.length - t.length),
                o = 0;
            for (r = 0; i > r; r++)(n && e[r] !== t[r] || !n && y(e[r]) !== y(t[r])) && o++;
            return o + s
        }

        function v(e) {
            if (e) {
                var t = e.toLowerCase().replace(/(.)s$/, "$1");
                e = Xt[e] || Vt[t] || t
            }
            return e
        }

        function m(e) {
            var t, n, r = {};
            for (n in e) e.hasOwnProperty(n) && (t = v(n), t && (r[t] = e[n]));
            return r
        }

        function g(t) {
            var n, r;
            if (0 === t.indexOf("week")) n = 7, r = "day";
            else {
                if (0 !== t.indexOf("month")) return;
                n = 12, r = "month"
            }
            rt[t] = function(i, s) {
                var o, u, a = rt.fn._lang[t],
                    f = [];
                if ("number" == typeof i && (s = i, i = e), u = function(e) {
                        var t = rt().utc().set(r, e);
                        return a.call(rt.fn._lang, t, i || "")
                    }, null != s) return u(s);
                for (o = 0; n > o; o++) f.push(u(o));
                return f
            }
        }

        function y(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
        }

        function b(e, t) {
            return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
        }

        function w(e) {
            return E(e) ? 366 : 365
        }

        function E(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function S(e) {
            var t;
            e._a && -2 === e._pf.overflow && (t = e._a[ft] < 0 || e._a[ft] > 11 ? ft : e._a[lt] < 1 || e._a[lt] > b(e._a[at], e._a[ft]) ? lt : e._a[ct] < 0 || e._a[ct] > 23 ? ct : e._a[ht] < 0 || e._a[ht] > 59 ? ht : e._a[pt] < 0 || e._a[pt] > 59 ? pt : e._a[dt] < 0 || e._a[dt] > 999 ? dt : -1, e._pf._overflowDayOfYear && (at > t || t > lt) && (t = lt), e._pf.overflow = t)
        }

        function x(e) {
            return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid
        }

        function T(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function N(e, t) {
            return t._isUTC ? rt(e).zone(t._offset || 0) : rt(e).local()
        }

        function C(e, t) {
            return t.abbr = e, vt[e] || (vt[e] = new i), vt[e].set(t), vt[e]
        }

        function k(e) {
            delete vt[e]
        }

        function L(e) {
            var t, n, r, i, s = 0,
                o = function(e) {
                    if (!vt[e] && gt) try {
                        require("./lang/" + e)
                    } catch (t) {}
                    return vt[e]
                };
            if (!e) return rt.fn._lang;
            if (!h(e)) {
                if (n = o(e)) return n;
                e = [e]
            }
            for (; s < e.length;) {
                for (i = T(e[s]).split("-"), t = i.length, r = T(e[s + 1]), r = r ? r.split("-") : null; t > 0;) {
                    if (n = o(i.slice(0, t).join("-"))) return n;
                    if (r && r.length >= t && d(i, r, !0) >= t - 1) break;
                    t--
                }
                s++
            }
            return rt.fn._lang
        }

        function A(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function O(e) {
            var t, n, r = e.match(Et);
            for (t = 0, n = r.length; n > t; t++) r[t] = Qt[r[t]] ? Qt[r[t]] : A(r[t]);
            return function(i) {
                var s = "";
                for (t = 0; n > t; t++) s += r[t] instanceof Function ? r[t].call(i, e) : r[t];
                return s
            }
        }

        function M(e, t) {
            return e.isValid() ? (t = _(t, e.lang()), $t[t] || ($t[t] = O(t)), $t[t](e)) : e.lang().invalidDate()
        }

        function _(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var r = 5;
            for (St.lastIndex = 0; r >= 0 && St.test(e);) e = e.replace(St, n), St.lastIndex = 0, r -= 1;
            return e
        }

        function D(e, t) {
            var n, r = t._strict;
            switch (e) {
                case "DDDD":
                    return Pt;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return r ? Ht : Nt;
                case "Y":
                case "G":
                case "g":
                    return jt;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return r ? Bt : Ct;
                case "S":
                    if (r) return _t;
                case "SS":
                    if (r) return Dt;
                case "SSS":
                    if (r) return Pt;
                case "DDD":
                    return Tt;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Lt;
                case "a":
                case "A":
                    return L(t._l)._meridiemParse;
                case "X":
                    return Mt;
                case "Z":
                case "ZZ":
                    return At;
                case "T":
                    return Ot;
                case "SSSS":
                    return kt;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return r ? Dt : xt;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return xt;
                default:
                    return n = new RegExp(R(q(e.replace("\\", "")), "i"))
            }
        }

        function P(e) {
            e = e || "";
            var t = e.match(At) || [],
                n = t[t.length - 1] || [],
                r = (n + "").match(Ut) || ["-", 0, 0],
                i = +(60 * r[1]) + y(r[2]);
            return "+" === r[0] ? -i : i
        }

        function H(e, t, n) {
            var r, i = n._a;
            switch (e) {
                case "M":
                case "MM":
                    null != t && (i[ft] = y(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    r = L(n._l).monthsParse(t), null != r ? i[ft] = r : n._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    null != t && (i[lt] = y(t));
                    break;
                case "DDD":
                case "DDDD":
                    null != t && (n._dayOfYear = y(t));
                    break;
                case "YY":
                    i[at] = y(t) + (y(t) > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    i[at] = y(t);
                    break;
                case "a":
                case "A":
                    n._isPm = L(n._l).isPM(t);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    i[ct] = y(t);
                    break;
                case "m":
                case "mm":
                    i[ht] = y(t);
                    break;
                case "s":
                case "ss":
                    i[pt] = y(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    i[dt] = y(1e3 * ("0." + t));
                    break;
                case "X":
                    n._d = new Date(1e3 * parseFloat(t));
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0, n._tzm = P(t);
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "dd":
                case "ddd":
                case "dddd":
                case "e":
                case "E":
                    e = e.substr(0, 1);
                case "gg":
                case "gggg":
                case "GG":
                case "GGGG":
                case "GGGGG":
                    e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t)
            }
        }

        function B(e) {
            var t, n, r, i, s, o, u, a, f, l, c = [];
            if (!e._d) {
                for (r = F(e), e._w && null == e._a[lt] && null == e._a[ft] && (s = function(t) {
                        var n = parseInt(t, 10);
                        return t ? t.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == e._a[at] ? rt().weekYear() : e._a[at]
                    }, o = e._w, null != o.GG || null != o.W || null != o.E ? u = G(s(o.GG), o.W || 1, o.E, 4, 1) : (a = L(e._l), f = null != o.d ? $(o.d, a) : null != o.e ? parseInt(o.e, 10) + a._week.dow : 0, l = parseInt(o.w, 10) || 1, null != o.d && f < a._week.dow && l++, u = G(s(o.gg), l, f, a._week.doy, a._week.dow)), e._a[at] = u.year, e._dayOfYear = u.dayOfYear), e._dayOfYear && (i = null == e._a[at] ? r[at] : e._a[at], e._dayOfYear > w(i) && (e._pf._overflowDayOfYear = !0), n = V(i, 0, e._dayOfYear), e._a[ft] = n.getUTCMonth(), e._a[lt] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = c[t] = r[t];
                for (; 7 > t; t++) e._a[t] = c[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                c[ct] += y((e._tzm || 0) / 60), c[ht] += y((e._tzm || 0) % 60), e._d = (e._useUTC ? V : X).apply(null, c)
            }
        }

        function j(e) {
            var t;
            e._d || (t = m(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], B(e))
        }

        function F(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function I(e) {
            e._a = [], e._pf.empty = !0;
            var t, n, r, i, s, o = L(e._l),
                u = "" + e._i,
                a = u.length,
                f = 0;
            for (r = _(e._f, o).match(Et) || [], t = 0; t < r.length; t++) i = r[t], n = (u.match(D(i, e)) || [])[0], n && (s = u.substr(0, u.indexOf(n)), s.length > 0 && e._pf.unusedInput.push(s), u = u.slice(u.indexOf(n) + n.length), f += n.length), Qt[i] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(i), H(i, n, e)) : e._strict && !n && e._pf.unusedTokens.push(i);
            e._pf.charsLeftOver = a - f, u.length > 0 && e._pf.unusedInput.push(u), e._isPm && e._a[ct] < 12 && (e._a[ct] += 12), e._isPm === !1 && 12 === e._a[ct] && (e._a[ct] = 0), B(e), S(e)
        }

        function q(e) {
            return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                return t || n || r || i
            })
        }

        function R(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function U(e) {
            var n, r, i, s, o;
            if (0 === e._f.length) return e._pf.invalidFormat = !0, e._d = new Date(0 / 0), void 0;
            for (s = 0; s < e._f.length; s++) o = 0, n = u({}, e), n._pf = t(), n._f = e._f[s], I(n), x(n) && (o += n._pf.charsLeftOver, o += 10 * n._pf.unusedTokens.length, n._pf.score = o, (null == i || i > o) && (i = o, r = n));
            u(e, r || n)
        }

        function z(e) {
            var t, n, r = e._i,
                i = Ft.exec(r);
            if (i) {
                for (e._pf.iso = !0, t = 0, n = qt.length; n > t; t++)
                    if (qt[t][1].exec(r)) {
                        e._f = qt[t][0] + (i[6] || " ");
                        break
                    }
                for (t = 0, n = Rt.length; n > t; t++)
                    if (Rt[t][1].exec(r)) {
                        e._f += Rt[t][0];
                        break
                    }
                r.match(At) && (e._f += "Z"), I(e)
            } else e._d = new Date(r)
        }

        function W(t) {
            var n = t._i,
                r = yt.exec(n);
            n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : "string" == typeof n ? z(t) : h(n) ? (t._a = n.slice(0), B(t)) : p(n) ? t._d = new Date(+n) : "object" == typeof n ? j(t) : t._d = new Date(n)
        }

        function X(e, t, n, r, i, s, o) {
            var u = new Date(e, t, n, r, i, s, o);
            return 1970 > e && u.setFullYear(e), u
        }

        function V(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 1970 > e && t.setUTCFullYear(e), t
        }

        function $(e, t) {
            if ("string" == typeof e)
                if (isNaN(e)) {
                    if (e = t.weekdaysParse(e), "number" != typeof e) return null
                } else e = parseInt(e, 10);
            return e
        }

        function J(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r)
        }

        function K(e, t, n) {
            var r = ut(Math.abs(e) / 1e3),
                i = ut(r / 60),
                s = ut(i / 60),
                o = ut(s / 24),
                u = ut(o / 365),
                a = 45 > r && ["s", r] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === s && ["h"] || 22 > s && ["hh", s] || 1 === o && ["d"] || 25 >= o && ["dd", o] || 45 >= o && ["M"] || 345 > o && ["MM", ut(o / 30)] || 1 === u && ["y"] || ["yy", u];
            return a[2] = t, a[3] = e > 0, a[4] = n, J.apply({}, a)
        }

        function Q(e, t, n) {
            var r, i = n - t,
                s = n - e.day();
            return s > i && (s -= 7), i - 7 > s && (s += 7), r = rt(e).add("d", s), {
                week: Math.ceil(r.dayOfYear() / 7),
                year: r.year()
            }
        }

        function G(e, t, n, r, i) {
            var s, o, u = V(e, 0, 1).getUTCDay();
            return n = null != n ? n : i, s = i - u + (u > r ? 7 : 0) - (i > u ? 7 : 0), o = 7 * (t - 1) + (n - i) + s + 1, {
                year: o > 0 ? e : e - 1,
                dayOfYear: o > 0 ? o : w(e - 1) + o
            }
        }

        function Y(e) {
            var t = e._i,
                n = e._f;
            return null === t ? rt.invalid({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = L().preparse(t)), rt.isMoment(t) ? (e = a(t), e._d = new Date(+t._d)) : n ? h(n) ? U(e) : I(e) : W(e), new s(e))
        }

        function Z(e, t) {
            rt.fn[e] = rt.fn[e + "s"] = function(e) {
                var n = this._isUTC ? "UTC" : "";
                return null != e ? (this._d["set" + n + t](e), rt.updateOffset(this), this) : this._d["get" + n + t]()
            }
        }

        function et(e) {
            rt.duration.fn[e] = function() {
                return this._data[e]
            }
        }

        function tt(e, t) {
            rt.duration.fn["as" + e] = function() {
                return +this / t
            }
        }

        function nt(e) {
            var t = !1,
                n = rt;
            "undefined" == typeof ender && (e ? (ot.moment = function() {
                return !t && console && console.warn && (t = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), n.apply(null, arguments)
            }, u(ot.moment, n)) : ot.moment = rt)
        }
        for (var rt, it, st = "2.5.1", ot = this, ut = Math.round, at = 0, ft = 1, lt = 2, ct = 3, ht = 4, pt = 5, dt = 6, vt = {}, mt = {
                _isAMomentObject: null,
                _i: null,
                _f: null,
                _l: null,
                _strict: null,
                _isUTC: null,
                _offset: null,
                _pf: null,
                _lang: null
            }, gt = "undefined" != typeof module && module.exports && "undefined" != typeof require, yt = /^\/?Date\((\-?\d+)/i, bt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, wt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Et = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, St = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, xt = /\d\d?/, Tt = /\d{1,3}/, Nt = /\d{1,4}/, Ct = /[+\-]?\d{1,6}/, kt = /\d+/, Lt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, At = /Z|[\+\-]\d\d:?\d\d/gi, Ot = /T/i, Mt = /[\+\-]?\d+(\.\d{1,3})?/, _t = /\d/, Dt = /\d\d/, Pt = /\d{3}/, Ht = /\d{4}/, Bt = /[+-]?\d{6}/, jt = /[+-]?\d+/, Ft = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, It = "YYYY-MM-DDTHH:mm:ssZ", qt = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], Rt = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], Ut = /([\+\-]|\d\d)/gi, zt = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Wt = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }, Xt = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, Vt = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, $t = {}, Jt = "DDD w W M D d".split(" "), Kt = "M D H h m s w W".split(" "), Qt = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(e) {
                    return this.lang().monthsShort(this, e)
                },
                MMMM: function(e) {
                    return this.lang().months(this, e)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(e) {
                    return this.lang().weekdaysMin(this, e)
                },
                ddd: function(e) {
                    return this.lang().weekdaysShort(this, e)
                },
                dddd: function(e) {
                    return this.lang().weekdays(this, e)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return l(this.year() % 100, 2)
                },
                YYYY: function() {
                    return l(this.year(), 4)
                },
                YYYYY: function() {
                    return l(this.year(), 5)
                },
                YYYYYY: function() {
                    var e = this.year(),
                        t = e >= 0 ? "+" : "-";
                    return t + l(Math.abs(e), 6)
                },
                gg: function() {
                    return l(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return l(this.weekYear(), 4)
                },
                ggggg: function() {
                    return l(this.weekYear(), 5)
                },
                GG: function() {
                    return l(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return l(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return l(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return y(this.milliseconds() / 100)
                },
                SS: function() {
                    return l(y(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return l(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return l(this.milliseconds(), 3)
                },
                Z: function() {
                    var e = -this.zone(),
                        t = "+";
                    return 0 > e && (e = -e, t = "-"), t + l(y(e / 60), 2) + ":" + l(y(e) % 60, 2)
                },
                ZZ: function() {
                    var e = -this.zone(),
                        t = "+";
                    return 0 > e && (e = -e, t = "-"), t + l(y(e / 60), 2) + l(y(e) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, Gt = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Jt.length;) it = Jt.pop(), Qt[it + "o"] = r(Qt[it], it);
        for (; Kt.length;) it = Kt.pop(), Qt[it + it] = n(Qt[it], 2);
        for (Qt.DDDD = n(Qt.DDD, 3), u(i.prototype, {
                set: function(e) {
                    var t, n;
                    for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t
                },
                _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                months: function(e) {
                    return this._months[e.month()]
                },
                _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsShort: function(e) {
                    return this._monthsShort[e.month()]
                },
                monthsParse: function(e) {
                    var t, n, r;
                    for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
                        if (this._monthsParse[t] || (n = rt.utc([2e3, t]), r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(r.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
                },
                _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdays: function(e) {
                    return this._weekdays[e.day()]
                },
                _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysShort: function(e) {
                    return this._weekdaysShort[e.day()]
                },
                _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                weekdaysMin: function(e) {
                    return this._weekdaysMin[e.day()]
                },
                weekdaysParse: function(e) {
                    var t, n, r;
                    for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                        if (this._weekdaysParse[t] || (n = rt([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
                },
                _longDateFormat: {
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D YYYY",
                    LLL: "MMMM D YYYY LT",
                    LLLL: "dddd, MMMM D YYYY LT"
                },
                longDateFormat: function(e) {
                    var t = this._longDateFormat[e];
                    return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e] = t), t
                },
                isPM: function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                },
                _calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                calendar: function(e, t) {
                    var n = this._calendar[e];
                    return "function" == typeof n ? n.apply(t) : n
                },
                _relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                relativeTime: function(e, t, n, r) {
                    var i = this._relativeTime[n];
                    return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
                },
                pastFuture: function(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
                },
                ordinal: function(e) {
                    return this._ordinal.replace("%d", e)
                },
                _ordinal: "%d",
                preparse: function(e) {
                    return e
                },
                postformat: function(e) {
                    return e
                },
                week: function(e) {
                    return Q(e, this._week.dow, this._week.doy).week
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: "Invalid date",
                invalidDate: function() {
                    return this._invalidDate
                }
            }), rt = function(n, r, i, s) {
                var o;
                return "boolean" == typeof i && (s = i, i = e), o = {}, o._isAMomentObject = !0, o._i = n, o._f = r, o._l = i, o._strict = s, o._isUTC = !1, o._pf = t(), Y(o)
            }, rt.utc = function(n, r, i, s) {
                var o;
                return "boolean" == typeof i && (s = i, i = e), o = {}, o._isAMomentObject = !0, o._useUTC = !0, o._isUTC = !0, o._l = i, o._i = n, o._f = r, o._strict = s, o._pf = t(), Y(o).utc()
            }, rt.unix = function(e) {
                return rt(1e3 * e)
            }, rt.duration = function(e, t) {
                var n, r, i, s = e,
                    u = null;
                return rt.isDuration(e) ? s = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (u = bt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, s = {
                    y: 0,
                    d: y(u[lt]) * n,
                    h: y(u[ct]) * n,
                    m: y(u[ht]) * n,
                    s: y(u[pt]) * n,
                    ms: y(u[dt]) * n
                }) : (u = wt.exec(e)) && (n = "-" === u[1] ? -1 : 1, i = function(e) {
                    var t = e && parseFloat(e.replace(",", "."));
                    return (isNaN(t) ? 0 : t) * n
                }, s = {
                    y: i(u[2]),
                    M: i(u[3]),
                    d: i(u[4]),
                    h: i(u[5]),
                    m: i(u[6]),
                    s: i(u[7]),
                    w: i(u[8])
                }), r = new o(s), rt.isDuration(e) && e.hasOwnProperty("_lang") && (r._lang = e._lang), r
            }, rt.version = st, rt.defaultFormat = It, rt.updateOffset = function() {}, rt.lang = function(e, t) {
                var n;
                return e ? (t ? C(T(e), t) : null === t ? (k(e), e = "en") : vt[e] || L(e), n = rt.duration.fn._lang = rt.fn._lang = L(e), n._abbr) : rt.fn._lang._abbr
            }, rt.langData = function(e) {
                return e && e._lang && e._lang._abbr && (e = e._lang._abbr), L(e)
            }, rt.isMoment = function(e) {
                return e instanceof s || null != e && e.hasOwnProperty("_isAMomentObject")
            }, rt.isDuration = function(e) {
                return e instanceof o
            }, it = Gt.length - 1; it >= 0; --it) g(Gt[it]);
        for (rt.normalizeUnits = function(e) {
                return v(e)
            }, rt.invalid = function(e) {
                var t = rt.utc(0 / 0);
                return null != e ? u(t._pf, e) : t._pf.userInvalidated = !0, t
            }, rt.parseZone = function(e) {
                return rt(e).parseZone()
            }, u(rt.fn = s.prototype, {
                clone: function() {
                    return rt(this)
                },
                valueOf: function() {
                    return +this._d + 6e4 * (this._offset || 0)
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function() {
                    var e = rt(this).utc();
                    return 0 < e.year() && e.year() <= 9999 ? M(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
                },
                isValid: function() {
                    return x(this)
                },
                isDSTShifted: function() {
                    return this._a ? this.isValid() && d(this._a, (this._isUTC ? rt.utc(this._a) : rt(this._a)).toArray()) > 0 : !1
                },
                parsingFlags: function() {
                    return u({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function() {
                    return this.zone(0)
                },
                local: function() {
                    return this.zone(0), this._isUTC = !1, this
                },
                format: function(e) {
                    var t = M(this, e || rt.defaultFormat);
                    return this.lang().postformat(t)
                },
                add: function(e, t) {
                    var n;
                    return n = "string" == typeof e ? rt.duration(+t, e) : rt.duration(e, t), c(this, n, 1), this
                },
                subtract: function(e, t) {
                    var n;
                    return n = "string" == typeof e ? rt.duration(+t, e) : rt.duration(e, t), c(this, n, -1), this
                },
                diff: function(e, t, n) {
                    var r, i, s = N(e, this),
                        o = 6e4 * (this.zone() - s.zone());
                    return t = v(t), "year" === t || "month" === t ? (r = 432e5 * (this.daysInMonth() + s.daysInMonth()), i = 12 * (this.year() - s.year()) + (this.month() - s.month()), i += (this - rt(this).startOf("month") - (s - rt(s).startOf("month"))) / r, i -= 6e4 * (this.zone() - rt(this).startOf("month").zone() - (s.zone() - rt(s).startOf("month").zone())) / r, "year" === t && (i /= 12)) : (r = this - s, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - o) / 864e5 : "week" === t ? (r - o) / 6048e5 : r), n ? i : f(i)
                },
                from: function(e, t) {
                    return rt.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
                },
                fromNow: function(e) {
                    return this.from(rt(), e)
                },
                calendar: function() {
                    var e = N(rt(), this).startOf("day"),
                        t = this.diff(e, "days", !0),
                        n = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
                    return this.format(this.lang().calendar(n, this))
                },
                isLeapYear: function() {
                    return E(this.year())
                },
                isDST: function() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                },
                day: function(e) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = $(e, this.lang()), this.add({
                        d: e - t
                    })) : t
                },
                month: function(e) {
                    var t, n = this._isUTC ? "UTC" : "";
                    return null != e ? "string" == typeof e && (e = this.lang().monthsParse(e), "number" != typeof e) ? this : (t = this.date(), this.date(1), this._d["set" + n + "Month"](e), this.date(Math.min(t, this.daysInMonth())), rt.updateOffset(this), this) : this._d["get" + n + "Month"]()
                },
                startOf: function(e) {
                    switch (e = v(e)) {
                        case "year":
                            this.month(0);
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), this
                },
                endOf: function(e) {
                    return e = v(e), this.startOf(e).add("isoWeek" === e ? "week" : e, 1).subtract("ms", 1)
                },
                isAfter: function(e, t) {
                    return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) > +rt(e).startOf(t)
                },
                isBefore: function(e, t) {
                    return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) < +rt(e).startOf(t)
                },
                isSame: function(e, t) {
                    return t = t || "ms", +this.clone().startOf(t) === +N(e, this).startOf(t)
                },
                min: function(e) {
                    return e = rt.apply(null, arguments), this > e ? this : e
                },
                max: function(e) {
                    return e = rt.apply(null, arguments), e > this ? this : e
                },
                zone: function(e) {
                    var t = this._offset || 0;
                    return null == e ? this._isUTC ? t : this._d.getTimezoneOffset() : ("string" == typeof e && (e = P(e)), Math.abs(e) < 16 && (e = 60 * e), this._offset = e, this._isUTC = !0, t !== e && c(this, rt.duration(t - e, "m"), 1, !0), this)
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
                },
                hasAlignedHourOffset: function(e) {
                    return e = e ? rt(e).zone() : 0, (this.zone() - e) % 60 === 0
                },
                daysInMonth: function() {
                    return b(this.year(), this.month())
                },
                dayOfYear: function(e) {
                    var t = ut((rt(this).startOf("day") - rt(this).startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add("d", e - t)
                },
                quarter: function() {
                    return Math.ceil((this.month() + 1) / 3)
                },
                weekYear: function(e) {
                    var t = Q(this, this.lang()._week.dow, this.lang()._week.doy).year;
                    return null == e ? t : this.add("y", e - t)
                },
                isoWeekYear: function(e) {
                    var t = Q(this, 1, 4).year;
                    return null == e ? t : this.add("y", e - t)
                },
                week: function(e) {
                    var t = this.lang().week(this);
                    return null == e ? t : this.add("d", 7 * (e - t))
                },
                isoWeek: function(e) {
                    var t = Q(this, 1, 4).week;
                    return null == e ? t : this.add("d", 7 * (e - t))
                },
                weekday: function(e) {
                    var t = (this.day() + 7 - this.lang()._week.dow) % 7;
                    return null == e ? t : this.add("d", e - t)
                },
                isoWeekday: function(e) {
                    return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
                },
                get: function(e) {
                    return e = v(e), this[e]()
                },
                set: function(e, t) {
                    return e = v(e), "function" == typeof this[e] && this[e](t), this
                },
                lang: function(t) {
                    return t === e ? this._lang : (this._lang = L(t), this)
                }
            }), it = 0; it < zt.length; it++) Z(zt[it].toLowerCase().replace(/s$/, ""), zt[it]);
        Z("year", "FullYear"), rt.fn.days = rt.fn.day, rt.fn.months = rt.fn.month, rt.fn.weeks = rt.fn.week, rt.fn.isoWeeks = rt.fn.isoWeek, rt.fn.toJSON = rt.fn.toISOString, u(rt.duration.fn = o.prototype, {
            _bubble: function() {
                var e, t, n, r, i = this._milliseconds,
                    s = this._days,
                    o = this._months,
                    u = this._data;
                u.milliseconds = i % 1e3, e = f(i / 1e3), u.seconds = e % 60, t = f(e / 60), u.minutes = t % 60, n = f(t / 60), u.hours = n % 24, s += f(n / 24), u.days = s % 30, o += f(s / 30), u.months = o % 12, r = f(o / 12), u.years = r
            },
            weeks: function() {
                return f(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
            },
            humanize: function(e) {
                var t = +this,
                    n = K(t, !e, this.lang());
                return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
            },
            add: function(e, t) {
                var n = rt.duration(e, t);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            },
            subtract: function(e, t) {
                var n = rt.duration(e, t);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            },
            get: function(e) {
                return e = v(e), this[e.toLowerCase() + "s"]()
            },
            as: function(e) {
                return e = v(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
            },
            lang: rt.fn.lang,
            toIsoString: function() {
                var e = Math.abs(this.years()),
                    t = Math.abs(this.months()),
                    n = Math.abs(this.days()),
                    r = Math.abs(this.hours()),
                    i = Math.abs(this.minutes()),
                    s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
            }
        });
        for (it in Wt) Wt.hasOwnProperty(it) && (tt(it, Wt[it]), et(it.toLowerCase()));
        tt("Weeks", 6048e5), rt.duration.fn.asMonths = function() {
                return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
            }, rt.lang("en", {
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("ar-ma", {
                    months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                    monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                    weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("ar", {
                    months: "يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),
                    monthsShort: "يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("bg", {
                    months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                    weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Днес в] LT",
                        nextDay: "[Утре в] LT",
                        nextWeek: "dddd [в] LT",
                        lastDay: "[Вчера в] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[В изминалата] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[В изминалия] dddd [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "след %s",
                        past: "преди %s",
                        s: "няколко секунди",
                        m: "минута",
                        mm: "%d минути",
                        h: "час",
                        hh: "%d часа",
                        d: "ден",
                        dd: "%d дни",
                        M: "месец",
                        MM: "%d месеца",
                        y: "година",
                        yy: "%d години"
                    },
                    ordinal: function(e) {
                        var t = e % 10,
                            n = e % 100;
                        return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(t) {
                function n(e, t, n) {
                    var r = {
                        mm: "munutenn",
                        MM: "miz",
                        dd: "devezh"
                    };
                    return e + " " + s(r[n], e)
                }

                function r(e) {
                    switch (i(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }

                function i(e) {
                    return e > 9 ? i(e % 10) : e
                }

                function s(e, t) {
                    return 2 === t ? o(e) : e
                }

                function o(t) {
                    var n = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return n[t.charAt(0)] === e ? t : n[t.charAt(0)] + t.substring(1)
                }
                return t.lang("br", {
                    months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                    monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                    weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                    longDateFormat: {
                        LT: "h[e]mm A",
                        L: "DD/MM/YYYY",
                        LL: "D [a viz] MMMM YYYY",
                        LLL: "D [a viz] MMMM YYYY LT",
                        LLLL: "dddd, D [a viz] MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hiziv da] LT",
                        nextDay: "[Warc'hoazh da] LT",
                        nextWeek: "dddd [da] LT",
                        lastDay: "[Dec'h da] LT",
                        lastWeek: "dddd [paset da] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "a-benn %s",
                        past: "%s 'zo",
                        s: "un nebeud segondennoù",
                        m: "ur vunutenn",
                        mm: n,
                        h: "un eur",
                        hh: "%d eur",
                        d: "un devezh",
                        dd: n,
                        M: "ur miz",
                        MM: n,
                        y: "ur bloaz",
                        yy: r
                    },
                    ordinal: function(e) {
                        var t = 1 === e ? "añ" : "vet";
                        return e + t
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n) {
                    var r = e + " ";
                    switch (n) {
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return r += 1 === e ? "dan" : "dana";
                        case "MM":
                            return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                    }
                }
                return e.lang("bs", {
                    months: "januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[prošlu] dddd [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("ca", {
                    months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
                    weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                    weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                    weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextDay: function() {
                            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastDay: function() {
                            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "fa %s",
                        s: "uns segons",
                        m: "un minut",
                        mm: "%d minuts",
                        h: "una hora",
                        hh: "%d hores",
                        d: "un dia",
                        dd: "%d dies",
                        M: "un mes",
                        MM: "%d mesos",
                        y: "un any",
                        yy: "%d anys"
                    },
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e) {
                    return e > 1 && 5 > e && 1 !== ~~(e / 10)
                }

                function n(e, n, r, i) {
                    var s = e + " ";
                    switch (r) {
                        case "s":
                            return n || i ? "pár vteřin" : "pár vteřinami";
                        case "m":
                            return n ? "minuta" : i ? "minutu" : "minutou";
                        case "mm":
                            return n || i ? s + (t(e) ? "minuty" : "minut") : s + "minutami";
                        case "h":
                            return n ? "hodina" : i ? "hodinu" : "hodinou";
                        case "hh":
                            return n || i ? s + (t(e) ? "hodiny" : "hodin") : s + "hodinami";
                        case "d":
                            return n || i ? "den" : "dnem";
                        case "dd":
                            return n || i ? s + (t(e) ? "dny" : "dní") : s + "dny";
                        case "M":
                            return n || i ? "měsíc" : "měsícem";
                        case "MM":
                            return n || i ? s + (t(e) ? "měsíce" : "měsíců") : s + "měsíci";
                        case "y":
                            return n || i ? "rok" : "rokem";
                        case "yy":
                            return n || i ? s + (t(e) ? "roky" : "let") : s + "lety"
                    }
                }
                var r = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                    i = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
                return e.lang("cs", {
                    months: r,
                    monthsShort: i,
                    monthsParse: function(e, t) {
                        var n, r = [];
                        for (n = 0; 12 > n; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                        return r
                    }(r, i),
                    weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                    weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                    weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[zítra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v neděli v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve středu v] LT";
                                case 4:
                                    return "[ve čtvrtek v] LT";
                                case 5:
                                    return "[v pátek v] LT";
                                case 6:
                                    return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[včera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulou neděli v] LT";
                                case 1:
                                case 2:
                                    return "[minulé] dddd [v] LT";
                                case 3:
                                    return "[minulou středu v] LT";
                                case 4:
                                case 5:
                                    return "[minulý] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "před %s",
                        s: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("cv", {
                    months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
                    monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
                    weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
                    weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
                    weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD-MM-YYYY",
                        LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",
                        LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",
                        LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"
                    },
                    calendar: {
                        sameDay: "[Паян] LT [сехетре]",
                        nextDay: "[Ыран] LT [сехетре]",
                        lastDay: "[Ĕнер] LT [сехетре]",
                        nextWeek: "[Çитес] dddd LT [сехетре]",
                        lastWeek: "[Иртнĕ] dddd LT [сехетре]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            var t = /сехет$/i.exec(e) ? "рен" : /çул$/i.exec(e) ? "тан" : "ран";
                            return e + t
                        },
                        past: "%s каялла",
                        s: "пĕр-ик çеккунт",
                        m: "пĕр минут",
                        mm: "%d минут",
                        h: "пĕр сехет",
                        hh: "%d сехет",
                        d: "пĕр кун",
                        dd: "%d кун",
                        M: "пĕр уйăх",
                        MM: "%d уйăх",
                        y: "пĕр çул",
                        yy: "%d çул"
                    },
                    ordinal: "%d-мĕш",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("cy", {
                    months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                    monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                    weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                    weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Heddiw am] LT",
                        nextDay: "[Yfory am] LT",
                        nextWeek: "dddd [am] LT",
                        lastDay: "[Ddoe am] LT",
                        lastWeek: "dddd [diwethaf am] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "mewn %s",
                        past: "%s yn àl",
                        s: "ychydig eiliadau",
                        m: "munud",
                        mm: "%d munud",
                        h: "awr",
                        hh: "%d awr",
                        d: "diwrnod",
                        dd: "%d diwrnod",
                        M: "mis",
                        MM: "%d mis",
                        y: "blwyddyn",
                        yy: "%d flynedd"
                    },
                    ordinal: function(e) {
                        var t = e,
                            n = "",
                            r = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                        return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = r[t]), e + n
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("da", {
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D. MMMM, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[I dag kl.] LT",
                        nextDay: "[I morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[I går kl.] LT",
                        lastWeek: "[sidste] dddd [kl] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "få sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "et år",
                        yy: "%d år"
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n) {
                    var r = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? r[n][0] : r[n][1]
                }
                return e.lang("de", {
                    months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "H:mm [Uhr]",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Heute um] LT",
                        sameElse: "L",
                        nextDay: "[Morgen um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[Gestern um] LT",
                        lastWeek: "[letzten] dddd [um] LT"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("el", {
                    monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                    monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                    months: function(e, t) {
                        return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
                    },
                    monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                    weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                    weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                    weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                    meridiem: function(e, t, n) {
                        return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                    },
                    longDateFormat: {
                        LT: "h:mm A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendarEl: {
                        sameDay: "[Σήμερα {}] LT",
                        nextDay: "[Αύριο {}] LT",
                        nextWeek: "dddd [{}] LT",
                        lastDay: "[Χθες {}] LT",
                        lastWeek: "[την προηγούμενη] dddd [{}] LT",
                        sameElse: "L"
                    },
                    calendar: function(e, t) {
                        var n = this._calendarEl[e],
                            r = t && t.hours();
                        return n.replace("{}", r % 12 === 1 ? "στη" : "στις")
                    },
                    relativeTime: {
                        future: "σε %s",
                        past: "%s πριν",
                        s: "δευτερόλεπτα",
                        m: "ένα λεπτό",
                        mm: "%d λεπτά",
                        h: "μία ώρα",
                        hh: "%d ώρες",
                        d: "μία μέρα",
                        dd: "%d μέρες",
                        M: "ένας μήνας",
                        MM: "%d μήνες",
                        y: "ένας χρόνος",
                        yy: "%d χρόνια"
                    },
                    ordinal: function(e) {
                        return e + "η"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("en-au", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinal: function(e) {
                        var t = e % 10,
                            n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return e + n
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("en-ca", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM, YYYY",
                        LLL: "D MMMM, YYYY LT",
                        LLLL: "dddd, D MMMM, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinal: function(e) {
                        var t = e % 10,
                            n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return e + n
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("en-gb", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinal: function(e) {
                        var t = e % 10,
                            n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return e + n
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("eo", {
                    months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                    weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
                    weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "YYYY-MM-DD",
                        LL: "D[-an de] MMMM, YYYY",
                        LLL: "D[-an de] MMMM, YYYY LT",
                        LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
                    },
                    meridiem: function(e, t, n) {
                        return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                    },
                    calendar: {
                        sameDay: "[Hodiaŭ je] LT",
                        nextDay: "[Morgaŭ je] LT",
                        nextWeek: "dddd [je] LT",
                        lastDay: "[Hieraŭ je] LT",
                        lastWeek: "[pasinta] dddd [je] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "je %s",
                        past: "antaŭ %s",
                        s: "sekundoj",
                        m: "minuto",
                        mm: "%d minutoj",
                        h: "horo",
                        hh: "%d horoj",
                        d: "tago",
                        dd: "%d tagoj",
                        M: "monato",
                        MM: "%d monatoj",
                        y: "jaro",
                        yy: "%d jaroj"
                    },
                    ordinal: "%da",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("es", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n, r) {
                    var i = {
                        s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                        m: ["ühe minuti", "üks minut"],
                        mm: [e + " minuti", e + " minutit"],
                        h: ["ühe tunni", "tund aega", "üks tund"],
                        hh: [e + " tunni", e + " tundi"],
                        d: ["ühe päeva", "üks päev"],
                        M: ["kuu aja", "kuu aega", "üks kuu"],
                        MM: [e + " kuu", e + " kuud"],
                        y: ["ühe aasta", "aasta", "üks aasta"],
                        yy: [e + " aasta", e + " aastat"]
                    };
                    return t ? i[n][2] ? i[n][2] : i[n][1] : r ? i[n][0] : i[n][1]
                }
                return e.lang("et", {
                    months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                    monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                    weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Täna,] LT",
                        nextDay: "[Homme,] LT",
                        nextWeek: "[Järgmine] dddd LT",
                        lastDay: "[Eile,] LT",
                        lastWeek: "[Eelmine] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s pärast",
                        past: "%s tagasi",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: "%d päeva",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("eu", {
                    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "YYYY-MM-DD",
                        LL: "YYYY[ko] MMMM[ren] D[a]",
                        LLL: "YYYY[ko] MMMM[ren] D[a] LT",
                        LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
                        l: "YYYY-M-D",
                        ll: "YYYY[ko] MMM D[a]",
                        lll: "YYYY[ko] MMM D[a] LT",
                        llll: "ddd, YYYY[ko] MMM D[a] LT"
                    },
                    calendar: {
                        sameDay: "[gaur] LT[etan]",
                        nextDay: "[bihar] LT[etan]",
                        nextWeek: "dddd LT[etan]",
                        lastDay: "[atzo] LT[etan]",
                        lastWeek: "[aurreko] dddd LT[etan]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s barru",
                        past: "duela %s",
                        s: "segundo batzuk",
                        m: "minutu bat",
                        mm: "%d minutu",
                        h: "ordu bat",
                        hh: "%d ordu",
                        d: "egun bat",
                        dd: "%d egun",
                        M: "hilabete bat",
                        MM: "%d hilabete",
                        y: "urte bat",
                        yy: "%d urte"
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                var t = {
                        1: "۱",
                        2: "۲",
                        3: "۳",
                        4: "۴",
                        5: "۵",
                        6: "۶",
                        7: "۷",
                        8: "۸",
                        9: "۹",
                        0: "۰"
                    },
                    n = {
                        "۱": "1",
                        "۲": "2",
                        "۳": "3",
                        "۴": "4",
                        "۵": "5",
                        "۶": "6",
                        "۷": "7",
                        "۸": "8",
                        "۹": "9",
                        "۰": "0"
                    };
                return e.lang("fa", {
                    months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    meridiem: function(e) {
                        return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
                    },
                    calendar: {
                        sameDay: "[امروز ساعت] LT",
                        nextDay: "[فردا ساعت] LT",
                        nextWeek: "dddd [ساعت] LT",
                        lastDay: "[دیروز ساعت] LT",
                        lastWeek: "dddd [پیش] [ساعت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "در %s",
                        past: "%s پیش",
                        s: "چندین ثانیه",
                        m: "یک دقیقه",
                        mm: "%d دقیقه",
                        h: "یک ساعت",
                        hh: "%d ساعت",
                        d: "یک روز",
                        dd: "%d روز",
                        M: "یک ماه",
                        MM: "%d ماه",
                        y: "یک سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/[۰-۹]/g, function(e) {
                            return n[e]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    ordinal: "%dم",
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, r, i) {
                    var s = "";
                    switch (r) {
                        case "s":
                            return i ? "muutaman sekunnin" : "muutama sekunti";
                        case "m":
                            return i ? "minuutin" : "minuutti";
                        case "mm":
                            s = i ? "minuutin" : "minuuttia";
                            break;
                        case "h":
                            return i ? "tunnin" : "tunti";
                        case "hh":
                            s = i ? "tunnin" : "tuntia";
                            break;
                        case "d":
                            return i ? "päivän" : "päivä";
                        case "dd":
                            s = i ? "päivän" : "päivää";
                            break;
                        case "M":
                            return i ? "kuukauden" : "kuukausi";
                        case "MM":
                            s = i ? "kuukauden" : "kuukautta";
                            break;
                        case "y":
                            return i ? "vuoden" : "vuosi";
                        case "yy":
                            s = i ? "vuoden" : "vuotta"
                    }
                    return s = n(e, i) + " " + s
                }

                function n(e, t) {
                    return 10 > e ? t ? i[e] : r[e] : e
                }
                var r = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                    i = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", r[7], r[8], r[9]];
                return e.lang("fi", {
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM[ta] YYYY",
                        LLL: "Do MMMM[ta] YYYY, [klo] LT",
                        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                        l: "D.M.YYYY",
                        ll: "Do MMM YYYY",
                        lll: "Do MMM YYYY, [klo] LT",
                        llll: "ddd, Do MMM YYYY, [klo] LT"
                    },
                    calendar: {
                        sameDay: "[tänään] [klo] LT",
                        nextDay: "[huomenna] [klo] LT",
                        nextWeek: "dddd [klo] LT",
                        lastDay: "[eilen] [klo] LT",
                        lastWeek: "[viime] dddd[na] [klo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s päästä",
                        past: "%s sitten",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("fo", {
                    months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                    weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                    weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D. MMMM, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Í dag kl.] LT",
                        nextDay: "[Í morgin kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[Í gjár kl.] LT",
                        lastWeek: "[síðstu] dddd [kl] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "um %s",
                        past: "%s síðani",
                        s: "fá sekund",
                        m: "ein minutt",
                        mm: "%d minuttir",
                        h: "ein tími",
                        hh: "%d tímar",
                        d: "ein dagur",
                        dd: "%d dagar",
                        M: "ein mánaði",
                        MM: "%d mánaðir",
                        y: "eitt ár",
                        yy: "%d ár"
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("fr-ca", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Aujourd'hui à] LT",
                        nextDay: "[Demain à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[Hier à] LT",
                        lastWeek: "dddd [dernier à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinal: function(e) {
                        return e + (1 === e ? "er" : "")
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("fr", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Aujourd'hui à] LT",
                        nextDay: "[Demain à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[Hier à] LT",
                        lastWeek: "dddd [dernier à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinal: function(e) {
                        return e + (1 === e ? "er" : "")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("gl", {
                    months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
                    monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
                    weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
                    weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
                    weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                        },
                        lastDay: function() {
                            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                        },
                        lastWeek: function() {
                            return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return "uns segundos" === e ? "nuns segundos" : "en " + e
                        },
                        past: "hai %s",
                        s: "uns segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "unha hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un ano",
                        yy: "%d anos"
                    },
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("he", {
                    months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                    monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                    weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                    weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                    weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D [ב]MMMM YYYY",
                        LLL: "D [ב]MMMM YYYY LT",
                        LLLL: "dddd, D [ב]MMMM YYYY LT",
                        l: "D/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY LT",
                        llll: "ddd, D MMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[היום ב־]LT",
                        nextDay: "[מחר ב־]LT",
                        nextWeek: "dddd [בשעה] LT",
                        lastDay: "[אתמול ב־]LT",
                        lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "בעוד %s",
                        past: "לפני %s",
                        s: "מספר שניות",
                        m: "דקה",
                        mm: "%d דקות",
                        h: "שעה",
                        hh: function(e) {
                            return 2 === e ? "שעתיים" : e + " שעות"
                        },
                        d: "יום",
                        dd: function(e) {
                            return 2 === e ? "יומיים" : e + " ימים"
                        },
                        M: "חודש",
                        MM: function(e) {
                            return 2 === e ? "חודשיים" : e + " חודשים"
                        },
                        y: "שנה",
                        yy: function(e) {
                            return 2 === e ? "שנתיים" : e + " שנים"
                        }
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    n = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    };
                return e.lang("hi", {
                    months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                    monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                    weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[कल] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[कल] LT",
                        lastWeek: "[पिछले] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s में",
                        past: "%s पहले",
                        s: "कुछ ही क्षण",
                        m: "एक मिनट",
                        mm: "%d मिनट",
                        h: "एक घंटा",
                        hh: "%d घंटे",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महीने",
                        MM: "%d महीने",
                        y: "एक वर्ष",
                        yy: "%d वर्ष"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiem: function(e) {
                        return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n) {
                    var r = e + " ";
                    switch (n) {
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return r += 1 === e ? "dan" : "dana";
                        case "MM":
                            return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                    }
                }
                return e.lang("hr", {
                    months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
                    monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[prošlu] dddd [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n, r) {
                    var i = e;
                    switch (n) {
                        case "s":
                            return r || t ? "néhány másodperc" : "néhány másodperce";
                        case "m":
                            return "egy" + (r || t ? " perc" : " perce");
                        case "mm":
                            return i + (r || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (r || t ? " óra" : " órája");
                        case "hh":
                            return i + (r || t ? " óra" : " órája");
                        case "d":
                            return "egy" + (r || t ? " nap" : " napja");
                        case "dd":
                            return i + (r || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (r || t ? " hónap" : " hónapja");
                        case "MM":
                            return i + (r || t ? " hónap" : " hónapja");
                        case "y":
                            return "egy" + (r || t ? " év" : " éve");
                        case "yy":
                            return i + (r || t ? " év" : " éve")
                    }
                    return ""
                }

                function n(e) {
                    return (e ? "" : "[múlt] ") + "[" + r[this.day()] + "] LT[-kor]"
                }
                var r = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
                return e.lang("hu", {
                    months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                    monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                    weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                    weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D., LT",
                        LLLL: "YYYY. MMMM D., dddd LT"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return n.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return n.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s múlva",
                        past: "%s",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t) {
                    var n = {
                            nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),
                            accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")
                        },
                        r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                    return n[r][e.month()]
                }

                function n(e) {
                    var t = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
                    return t[e.month()]
                }

                function r(e) {
                    var t = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
                    return t[e.day()]
                }
                return e.lang("hy-am", {
                    months: t,
                    monthsShort: n,
                    weekdays: r,
                    weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY թ.",
                        LLL: "D MMMM YYYY թ., LT",
                        LLLL: "dddd, D MMMM YYYY թ., LT"
                    },
                    calendar: {
                        sameDay: "[այսօր] LT",
                        nextDay: "[վաղը] LT",
                        lastDay: "[երեկ] LT",
                        nextWeek: function() {
                            return "dddd [օրը ժամը] LT"
                        },
                        lastWeek: function() {
                            return "[անցած] dddd [օրը ժամը] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s հետո",
                        past: "%s առաջ",
                        s: "մի քանի վայրկյան",
                        m: "րոպե",
                        mm: "%d րոպե",
                        h: "ժամ",
                        hh: "%d ժամ",
                        d: "օր",
                        dd: "%d օր",
                        M: "ամիս",
                        MM: "%d ամիս",
                        y: "տարի",
                        yy: "%d տարի"
                    },
                    meridiem: function(e) {
                        return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան"
                    },
                    ordinal: function(e, t) {
                        switch (t) {
                            case "DDD":
                            case "w":
                            case "W":
                            case "DDDo":
                                return 1 === e ? e + "-ին" : e + "-րդ";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("id", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] LT",
                        LLLL: "dddd, D MMMM YYYY [pukul] LT"
                    },
                    meridiem: function(e) {
                        return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Besok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kemarin pukul] LT",
                        lastWeek: "dddd [lalu pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e) {
                    return e % 100 === 11 ? !0 : e % 10 === 1 ? !1 : !0
                }

                function n(e, n, r, i) {
                    var s = e + " ";
                    switch (r) {
                        case "s":
                            return n || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
                        case "m":
                            return n ? "mínúta" : "mínútu";
                        case "mm":
                            return t(e) ? s + (n || i ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
                        case "hh":
                            return t(e) ? s + (n || i ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                        case "d":
                            return n ? "dagur" : i ? "dag" : "degi";
                        case "dd":
                            return t(e) ? n ? s + "dagar" : s + (i ? "daga" : "dögum") : n ? s + "dagur" : s + (i ? "dag" : "degi");
                        case "M":
                            return n ? "mánuður" : i ? "mánuð" : "mánuði";
                        case "MM":
                            return t(e) ? n ? s + "mánuðir" : s + (i ? "mánuði" : "mánuðum") : n ? s + "mánuður" : s + (i ? "mánuð" : "mánuði");
                        case "y":
                            return n || i ? "ár" : "ári";
                        case "yy":
                            return t(e) ? s + (n || i ? "ár" : "árum") : s + (n || i ? "ár" : "ári")
                    }
                }
                return e.lang("is", {
                    months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                    weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                    weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                    weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD/MM/YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] LT",
                        LLLL: "dddd, D. MMMM YYYY [kl.] LT"
                    },
                    calendar: {
                        sameDay: "[í dag kl.] LT",
                        nextDay: "[á morgun kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[í gær kl.] LT",
                        lastWeek: "[síðasta] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "eftir %s",
                        past: "fyrir %s síðan",
                        s: n,
                        m: n,
                        mm: n,
                        h: "klukkustund",
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("it", {
                    months: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
                    monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
                    weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
                    weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                    weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Oggi alle] LT",
                        nextDay: "[Domani alle] LT",
                        nextWeek: "dddd [alle] LT",
                        lastDay: "[Ieri alle] LT",
                        lastWeek: "[lo scorso] dddd [alle] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                        },
                        past: "%s fa",
                        s: "alcuni secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("ja", {
                    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                    longDateFormat: {
                        LT: "Ah時m分",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日LT",
                        LLLL: "YYYY年M月D日LT dddd"
                    },
                    meridiem: function(e) {
                        return 12 > e ? "午前" : "午後"
                    },
                    calendar: {
                        sameDay: "[今日] LT",
                        nextDay: "[明日] LT",
                        nextWeek: "[来週]dddd LT",
                        lastDay: "[昨日] LT",
                        lastWeek: "[前週]dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "数秒",
                        m: "1分",
                        mm: "%d分",
                        h: "1時間",
                        hh: "%d時間",
                        d: "1日",
                        dd: "%d日",
                        M: "1ヶ月",
                        MM: "%dヶ月",
                        y: "1年",
                        yy: "%d年"
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t) {
                    var n = {
                            nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                            accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                        },
                        r = /D[oD] *MMMM?/.test(t) ? "accusative" : "nominative";
                    return n[r][e.month()]
                }

                function n(e, t) {
                    var n = {
                            nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                            accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
                        },
                        r = /(წინა|შემდეგ)/.test(t) ? "accusative" : "nominative";
                    return n[r][e.day()]
                }
                return e.lang("ka", {
                    months: t,
                    monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                    weekdays: n,
                    weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                    weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[დღეს] LT[-ზე]",
                        nextDay: "[ხვალ] LT[-ზე]",
                        lastDay: "[გუშინ] LT[-ზე]",
                        nextWeek: "[შემდეგ] dddd LT[-ზე]",
                        lastWeek: "[წინა] dddd LT-ზე",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                        },
                        past: function(e) {
                            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                        },
                        s: "რამდენიმე წამი",
                        m: "წუთი",
                        mm: "%d წუთი",
                        h: "საათი",
                        hh: "%d საათი",
                        d: "დღე",
                        dd: "%d დღე",
                        M: "თვე",
                        MM: "%d თვე",
                        y: "წელი",
                        yy: "%d წელი"
                    },
                    ordinal: function(e) {
                        return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("ko", {
                    months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                    weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                    weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                    longDateFormat: {
                        LT: "A h시 mm분",
                        L: "YYYY.MM.DD",
                        LL: "YYYY년 MMMM D일",
                        LLL: "YYYY년 MMMM D일 LT",
                        LLLL: "YYYY년 MMMM D일 dddd LT"
                    },
                    meridiem: function(e) {
                        return 12 > e ? "오전" : "오후"
                    },
                    calendar: {
                        sameDay: "오늘 LT",
                        nextDay: "내일 LT",
                        nextWeek: "dddd LT",
                        lastDay: "어제 LT",
                        lastWeek: "지난주 dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s 후",
                        past: "%s 전",
                        s: "몇초",
                        ss: "%d초",
                        m: "일분",
                        mm: "%d분",
                        h: "한시간",
                        hh: "%d시간",
                        d: "하루",
                        dd: "%d일",
                        M: "한달",
                        MM: "%d달",
                        y: "일년",
                        yy: "%d년"
                    },
                    ordinal: "%d일",
                    meridiemParse: /(오전|오후)/,
                    isPM: function(e) {
                        return "오후" === e
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n) {
                    var r = {
                        m: ["eng Minutt", "enger Minutt"],
                        h: ["eng Stonn", "enger Stonn"],
                        d: ["een Dag", "engem Dag"],
                        dd: [e + " Deeg", e + " Deeg"],
                        M: ["ee Mount", "engem Mount"],
                        MM: [e + " Méint", e + " Méint"],
                        y: ["ee Joer", "engem Joer"],
                        yy: [e + " Joer", e + " Joer"]
                    };
                    return t ? r[n][0] : r[n][1]
                }

                function n(e) {
                    var t = e.substr(0, e.indexOf(" "));
                    return o(t) ? "a " + e : "an " + e
                }

                function r(e) {
                    var t = e.substr(0, e.indexOf(" "));
                    return o(t) ? "viru " + e : "virun " + e
                }

                function i() {
                    var e = this.format("d");
                    return s(e) ? "[Leschte] dddd [um] LT" : "[Leschten] dddd [um] LT"
                }

                function s(e) {
                    switch (e = parseInt(e, 10)) {
                        case 0:
                        case 1:
                        case 3:
                        case 5:
                        case 6:
                            return !0;
                        default:
                            return !1
                    }
                }

                function o(e) {
                    if (e = parseInt(e, 10), isNaN(e)) return !1;
                    if (0 > e) return !0;
                    if (10 > e) return e >= 4 && 7 >= e ? !0 : !1;
                    if (100 > e) {
                        var t = e % 10,
                            n = e / 10;
                        return 0 === t ? o(n) : o(t)
                    }
                    if (1e4 > e) {
                        for (; e >= 10;) e /= 10;
                        return o(e)
                    }
                    return e /= 1e3, o(e)
                }
                return e.lang("lb", {
                    months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                    weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "H:mm [Auer]",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Haut um] LT",
                        sameElse: "L",
                        nextDay: "[Muer um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[Gëschter um] LT",
                        lastWeek: i
                    },
                    relativeTime: {
                        future: n,
                        past: r,
                        s: "e puer Sekonnen",
                        m: t,
                        mm: "%d Minutten",
                        h: t,
                        hh: "%d Stonnen",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n, r) {
                    return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
                }

                function n(e, t, n, r) {
                    return t ? i(n)[0] : r ? i(n)[1] : i(n)[2]
                }

                function r(e) {
                    return e % 10 === 0 || e > 10 && 20 > e
                }

                function i(e) {
                    return u[e].split("_")
                }

                function s(e, t, s, o) {
                    var u = e + " ";
                    return 1 === e ? u + n(e, t, s[0], o) : t ? u + (r(e) ? i(s)[1] : i(s)[0]) : o ? u + i(s)[1] : u + (r(e) ? i(s)[1] : i(s)[2])
                }

                function o(e, t) {
                    var n = -1 === t.indexOf("dddd LT"),
                        r = a[e.weekday()];
                    return n ? r : r.substring(0, r.length - 2) + "į"
                }
                var u = {
                        m: "minutė_minutės_minutę",
                        mm: "minutės_minučių_minutes",
                        h: "valanda_valandos_valandą",
                        hh: "valandos_valandų_valandas",
                        d: "diena_dienos_dieną",
                        dd: "dienos_dienų_dienas",
                        M: "mėnuo_mėnesio_mėnesį",
                        MM: "mėnesiai_mėnesių_mėnesius",
                        y: "metai_metų_metus",
                        yy: "metai_metų_metus"
                    },
                    a = "pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis_sekmadienis".split("_");
                return e.lang("lt", {
                    months: "sausio_vasario_kovo_balandžio_gegužės_biržėlio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: o,
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], LT [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
                    },
                    calendar: {
                        sameDay: "[Šiandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Praėjusį] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prieš %s",
                        s: t,
                        m: n,
                        mm: s,
                        h: n,
                        hh: s,
                        d: n,
                        dd: s,
                        M: n,
                        MM: s,
                        y: n,
                        yy: s
                    },
                    ordinal: function(e) {
                        return e + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n) {
                    var r = e.split("_");
                    return n ? t % 10 === 1 && 11 !== t ? r[2] : r[3] : t % 10 === 1 && 11 !== t ? r[0] : r[1]
                }

                function n(e, n, i) {
                    return e + " " + t(r[i], e, n)
                }
                var r = {
                    mm: "minūti_minūtes_minūte_minūtes",
                    hh: "stundu_stundas_stunda_stundas",
                    dd: "dienu_dienas_diena_dienas",
                    MM: "mēnesi_mēnešus_mēnesis_mēneši",
                    yy: "gadu_gadus_gads_gadi"
                };
                return e.lang("lv", {
                    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD.MM.YYYY",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, LT",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
                    },
                    calendar: {
                        sameDay: "[Šodien pulksten] LT",
                        nextDay: "[Rīt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pagājušā] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s vēlāk",
                        past: "%s agrāk",
                        s: "dažas sekundes",
                        m: "minūti",
                        mm: n,
                        h: "stundu",
                        hh: n,
                        d: "dienu",
                        dd: n,
                        M: "mēnesi",
                        MM: n,
                        y: "gadu",
                        yy: n
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("mk", {
                    months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                    weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                    weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Денес во] LT",
                        nextDay: "[Утре во] LT",
                        nextWeek: "dddd [во] LT",
                        lastDay: "[Вчера во] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[Во изминатата] dddd [во] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[Во изминатиот] dddd [во] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "после %s",
                        past: "пред %s",
                        s: "неколку секунди",
                        m: "минута",
                        mm: "%d минути",
                        h: "час",
                        hh: "%d часа",
                        d: "ден",
                        dd: "%d дена",
                        M: "месец",
                        MM: "%d месеци",
                        y: "година",
                        yy: "%d години"
                    },
                    ordinal: function(e) {
                        var t = e % 10,
                            n = e % 100;
                        return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("ml", {
                    months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                    monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                    weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                    weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                    weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm -നു",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[ഇന്ന്] LT",
                        nextDay: "[നാളെ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ഇന്നലെ] LT",
                        lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s കഴിഞ്ഞ്",
                        past: "%s മുൻപ്",
                        s: "അൽപ നിമിഷങ്ങൾ",
                        m: "ഒരു മിനിറ്റ്",
                        mm: "%d മിനിറ്റ്",
                        h: "ഒരു മണിക്കൂർ",
                        hh: "%d മണിക്കൂർ",
                        d: "ഒരു ദിവസം",
                        dd: "%d ദിവസം",
                        M: "ഒരു മാസം",
                        MM: "%d മാസം",
                        y: "ഒരു വർഷം",
                        yy: "%d വർഷം"
                    },
                    meridiem: function(e) {
                        return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    n = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    };
                return e.lang("mr", {
                    months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm वाजता",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[उद्या] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[मागील] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s नंतर",
                        past: "%s पूर्वी",
                        s: "सेकंद",
                        m: "एक मिनिट",
                        mm: "%d मिनिटे",
                        h: "एक तास",
                        hh: "%d तास",
                        d: "एक दिवस",
                        dd: "%d दिवस",
                        M: "एक महिना",
                        MM: "%d महिने",
                        y: "एक वर्ष",
                        yy: "%d वर्षे"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiem: function(e) {
                        return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("ms-my", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] LT",
                        LLLL: "dddd, D MMMM YYYY [pukul] LT"
                    },
                    meridiem: function(e) {
                        return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("nb", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    longDateFormat: {
                        LT: "H.mm",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] LT",
                        LLLL: "dddd D. MMMM YYYY [kl.] LT"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[i går kl.] LT",
                        lastWeek: "[forrige] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "for %s siden",
                        s: "noen sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "ett år",
                        yy: "%d år"
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    n = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    };
                return e.lang("ne", {
                    months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                    monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                    weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                    weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                    weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
                    longDateFormat: {
                        LT: "Aको h:mm बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiem: function(e) {
                        return 3 > e ? "राती" : 10 > e ? "बिहान" : 15 > e ? "दिउँसो" : 18 > e ? "बेलुका" : 20 > e ? "साँझ" : "राती"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[भोली] LT",
                        nextWeek: "[आउँदो] dddd[,] LT",
                        lastDay: "[हिजो] LT",
                        lastWeek: "[गएको] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमा",
                        past: "%s अगाडी",
                        s: "केही समय",
                        m: "एक मिनेट",
                        mm: "%d मिनेट",
                        h: "एक घण्टा",
                        hh: "%d घण्टा",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महिना",
                        MM: "%d महिना",
                        y: "एक बर्ष",
                        yy: "%d बर्ष"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
                return e.lang("nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, r) {
                        return /-MMM-/.test(r) ? n[e.month()] : t[e.month()]
                    },
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        m: "één minuut",
                        mm: "%d minuten",
                        h: "één uur",
                        hh: "%d uur",
                        d: "één dag",
                        dd: "%d dagen",
                        M: "één maand",
                        MM: "%d maanden",
                        y: "één jaar",
                        yy: "%d jaar"
                    },
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("nn", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                    weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                    weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[I dag klokka] LT",
                        nextDay: "[I morgon klokka] LT",
                        nextWeek: "dddd [klokka] LT",
                        lastDay: "[I går klokka] LT",
                        lastWeek: "[Føregående] dddd [klokka] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "for %s siden",
                        s: "noen sekund",
                        m: "ett minutt",
                        mm: "%d minutt",
                        h: "en time",
                        hh: "%d timar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en månad",
                        MM: "%d månader",
                        y: "ett år",
                        yy: "%d år"
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e) {
                    return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
                }

                function n(e, n, r) {
                    var i = e + " ";
                    switch (r) {
                        case "m":
                            return n ? "minuta" : "minutę";
                        case "mm":
                            return i + (t(e) ? "minuty" : "minut");
                        case "h":
                            return n ? "godzina" : "godzinę";
                        case "hh":
                            return i + (t(e) ? "godziny" : "godzin");
                        case "MM":
                            return i + (t(e) ? "miesiące" : "miesięcy");
                        case "yy":
                            return i + (t(e) ? "lata" : "lat")
                    }
                }
                var r = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                    i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
                return e.lang("pl", {
                    months: function(e, t) {
                        return /D MMMM/.test(t) ? i[e.month()] : r[e.month()]
                    },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                    weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                    weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
                    weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Dziś o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: "[W] dddd [o] LT",
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W zeszłą niedzielę o] LT";
                                case 3:
                                    return "[W zeszłą środę o] LT";
                                case 6:
                                    return "[W zeszłą sobotę o] LT";
                                default:
                                    return "[W zeszły] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: "1 dzień",
                        dd: "%d dni",
                        M: "miesiąc",
                        MM: n,
                        y: "rok",
                        yy: n
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("pt-br", {
                    months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                    monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                    weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                    weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hoje às] LT",
                        nextDay: "[Amanhã às] LT",
                        nextWeek: "dddd [às] LT",
                        lastDay: "[Ontem às] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "%s atrás",
                        s: "segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um mês",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    ordinal: "%dº"
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("pt", {
                    months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                    monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                    weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                    weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hoje às] LT",
                        nextDay: "[Amanhã às] LT",
                        nextWeek: "dddd [às] LT",
                        lastDay: "[Ontem às] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "%s atrás",
                        s: "segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um mês",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n) {
                    var r = {
                            mm: "minute",
                            hh: "ore",
                            dd: "zile",
                            MM: "luni",
                            yy: "ani"
                        },
                        i = " ";
                    return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (i = " de "), e + i + r[n]
                }
                return e.lang("ro", {
                    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                    monthsShort: "ian_feb_mar_apr_mai_iun_iul_aug_sep_oct_noi_dec".split("_"),
                    weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[azi la] LT",
                        nextDay: "[mâine la] LT",
                        nextWeek: "dddd [la] LT",
                        lastDay: "[ieri la] LT",
                        lastWeek: "[fosta] dddd [la] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "%s în urmă",
                        s: "câteva secunde",
                        m: "un minut",
                        mm: t,
                        h: "o oră",
                        hh: t,
                        d: "o zi",
                        dd: t,
                        M: "o lună",
                        MM: t,
                        y: "un an",
                        yy: t
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n) {
                    var r = e + " ";
                    switch (n) {
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return r += 1 === e ? "dan" : "dana";
                        case "MM":
                            return r += 1 === e ? "mesec" : 2 === e || 3 === e || 4 === e ? "meseca" : "meseci";
                        case "yy":
                            return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                    }
                }
                return e.lang("rs", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[prošlu] dddd [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "par sekundi",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t) {
                    var n = e.split("_");
                    return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
                }

                function n(e, n, r) {
                    var i = {
                        mm: "минута_минуты_минут",
                        hh: "час_часа_часов",
                        dd: "день_дня_дней",
                        MM: "месяц_месяца_месяцев",
                        yy: "год_года_лет"
                    };
                    return "m" === r ? n ? "минута" : "минуту" : e + " " + t(i[r], +e)
                }

                function r(e, t) {
                    var n = {
                            nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                            accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
                        },
                        r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                    return n[r][e.month()]
                }

                function i(e, t) {
                    var n = {
                            nominative: "янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                            accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
                        },
                        r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                    return n[r][e.month()]
                }

                function s(e, t) {
                    var n = {
                            nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                            accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
                        },
                        r = /\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
                    return n[r][e.day()]
                }
                return e.lang("ru", {
                    months: r,
                    monthsShort: i,
                    weekdays: s,
                    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., LT",
                        LLLL: "dddd, D MMMM YYYY г., LT"
                    },
                    calendar: {
                        sameDay: "[Сегодня в] LT",
                        nextDay: "[Завтра в] LT",
                        lastDay: "[Вчера в] LT",
                        nextWeek: function() {
                            return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
                        },
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[В прошлое] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[В прошлый] dddd [в] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[В прошлую] dddd [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "через %s",
                        past: "%s назад",
                        s: "несколько секунд",
                        m: n,
                        mm: n,
                        h: "час",
                        hh: n,
                        d: "день",
                        dd: n,
                        M: "месяц",
                        MM: n,
                        y: "год",
                        yy: n
                    },
                    meridiem: function(e) {
                        return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
                    },
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                                return e + "-й";
                            case "D":
                                return e + "-го";
                            case "w":
                            case "W":
                                return e + "-я";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e) {
                    return e > 1 && 5 > e
                }

                function n(e, n, r, i) {
                    var s = e + " ";
                    switch (r) {
                        case "s":
                            return n || i ? "pár sekúnd" : "pár sekundami";
                        case "m":
                            return n ? "minúta" : i ? "minútu" : "minútou";
                        case "mm":
                            return n || i ? s + (t(e) ? "minúty" : "minút") : s + "minútami";
                        case "h":
                            return n ? "hodina" : i ? "hodinu" : "hodinou";
                        case "hh":
                            return n || i ? s + (t(e) ? "hodiny" : "hodín") : s + "hodinami";
                        case "d":
                            return n || i ? "deň" : "dňom";
                        case "dd":
                            return n || i ? s + (t(e) ? "dni" : "dní") : s + "dňami";
                        case "M":
                            return n || i ? "mesiac" : "mesiacom";
                        case "MM":
                            return n || i ? s + (t(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                        case "y":
                            return n || i ? "rok" : "rokom";
                        case "yy":
                            return n || i ? s + (t(e) ? "roky" : "rokov") : s + "rokmi"
                    }
                }
                var r = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                    i = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
                return e.lang("sk", {
                    months: r,
                    monthsShort: i,
                    monthsParse: function(e, t) {
                        var n, r = [];
                        for (n = 0; 12 > n; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                        return r
                    }(r, i),
                    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo štvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[včera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulú nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[minulý] dddd [o] LT";
                                case 3:
                                    return "[minulú stredu o] LT";
                                case 4:
                                case 5:
                                    return "[minulý] dddd [o] LT";
                                case 6:
                                    return "[minulú sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t, n) {
                    var r = e + " ";
                    switch (n) {
                        case "m":
                            return t ? "ena minuta" : "eno minuto";
                        case "mm":
                            return r += 1 === e ? "minuta" : 2 === e ? "minuti" : 3 === e || 4 === e ? "minute" : "minut";
                        case "h":
                            return t ? "ena ura" : "eno uro";
                        case "hh":
                            return r += 1 === e ? "ura" : 2 === e ? "uri" : 3 === e || 4 === e ? "ure" : "ur";
                        case "dd":
                            return r += 1 === e ? "dan" : "dni";
                        case "MM":
                            return r += 1 === e ? "mesec" : 2 === e ? "meseca" : 3 === e || 4 === e ? "mesece" : "mesecev";
                        case "yy":
                            return r += 1 === e ? "leto" : 2 === e ? "leti" : 3 === e || 4 === e ? "leta" : "let"
                    }
                }
                return e.lang("sl", {
                    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                    weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                    weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danes ob] LT",
                        nextDay: "[jutri ob] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v] [nedeljo] [ob] LT";
                                case 3:
                                    return "[v] [sredo] [ob] LT";
                                case 6:
                                    return "[v] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[v] dddd [ob] LT"
                            }
                        },
                        lastDay: "[včeraj ob] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[prejšnja] dddd [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prejšnji] dddd [ob] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "čez %s",
                        past: "%s nazaj",
                        s: "nekaj sekund",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "en dan",
                        dd: t,
                        M: "en mesec",
                        MM: t,
                        y: "eno leto",
                        yy: t
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("sq", {
                    months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                    monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                    weekdays: "E Diel_E Hënë_E Marte_E Mërkure_E Enjte_E Premte_E Shtunë".split("_"),
                    weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                    weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Sot në] LT",
                        nextDay: "[Neser në] LT",
                        nextWeek: "dddd [në] LT",
                        lastDay: "[Dje në] LT",
                        lastWeek: "dddd [e kaluar në] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "në %s",
                        past: "%s me parë",
                        s: "disa sekonda",
                        m: "një minut",
                        mm: "%d minuta",
                        h: "një orë",
                        hh: "%d orë",
                        d: "një ditë",
                        dd: "%d ditë",
                        M: "një muaj",
                        MM: "%d muaj",
                        y: "një vit",
                        yy: "%d vite"
                    },
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("sv", {
                    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                    weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                    weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Idag] LT",
                        nextDay: "[Imorgon] LT",
                        lastDay: "[Igår] LT",
                        nextWeek: "dddd LT",
                        lastWeek: "[Förra] dddd[en] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "för %s sedan",
                        s: "några sekunder",
                        m: "en minut",
                        mm: "%d minuter",
                        h: "en timme",
                        hh: "%d timmar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en månad",
                        MM: "%d månader",
                        y: "ett år",
                        yy: "%d år"
                    },
                    ordinal: function(e) {
                        var t = e % 10,
                            n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : 3 === t ? "e" : "e";
                        return e + n
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("ta", {
                    months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                    weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                    weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[இன்று] LT",
                        nextDay: "[நாளை] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[நேற்று] LT",
                        lastWeek: "[கடந்த வாரம்] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s இல்",
                        past: "%s முன்",
                        s: "ஒரு சில விநாடிகள்",
                        m: "ஒரு நிமிடம்",
                        mm: "%d நிமிடங்கள்",
                        h: "ஒரு மணி நேரம்",
                        hh: "%d மணி நேரம்",
                        d: "ஒரு நாள்",
                        dd: "%d நாட்கள்",
                        M: "ஒரு மாதம்",
                        MM: "%d மாதங்கள்",
                        y: "ஒரு வருடம்",
                        yy: "%d ஆண்டுகள்"
                    },
                    ordinal: function(e) {
                        return e + "வது"
                    },
                    meridiem: function(e) {
                        return e >= 6 && 10 >= e ? " காலை" : e >= 10 && 14 >= e ? " நண்பகல்" : e >= 14 && 18 >= e ? " எற்பாடு" : e >= 18 && 20 >= e ? " மாலை" : e >= 20 && 24 >= e ? " இரவு" : e >= 0 && 6 >= e ? " வைகறை" : void 0
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("th", {
                    months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                    monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
                    weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                    weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                    weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                    longDateFormat: {
                        LT: "H นาฬิกา m นาที",
                        L: "YYYY/MM/DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY เวลา LT",
                        LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
                    },
                    meridiem: function(e) {
                        return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
                    },
                    calendar: {
                        sameDay: "[วันนี้ เวลา] LT",
                        nextDay: "[พรุ่งนี้ เวลา] LT",
                        nextWeek: "dddd[หน้า เวลา] LT",
                        lastDay: "[เมื่อวานนี้ เวลา] LT",
                        lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "อีก %s",
                        past: "%sที่แล้ว",
                        s: "ไม่กี่วินาที",
                        m: "1 นาที",
                        mm: "%d นาที",
                        h: "1 ชั่วโมง",
                        hh: "%d ชั่วโมง",
                        d: "1 วัน",
                        dd: "%d วัน",
                        M: "1 เดือน",
                        MM: "%d เดือน",
                        y: "1 ปี",
                        yy: "%d ปี"
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("tl-ph", {
                    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "MM/D/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY LT",
                        LLLL: "dddd, MMMM DD, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Ngayon sa] LT",
                        nextDay: "[Bukas sa] LT",
                        nextWeek: "dddd [sa] LT",
                        lastDay: "[Kahapon sa] LT",
                        lastWeek: "dddd [huling linggo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "sa loob ng %s",
                        past: "%s ang nakalipas",
                        s: "ilang segundo",
                        m: "isang minuto",
                        mm: "%d minuto",
                        h: "isang oras",
                        hh: "%d oras",
                        d: "isang araw",
                        dd: "%d araw",
                        M: "isang buwan",
                        MM: "%d buwan",
                        y: "isang taon",
                        yy: "%d taon"
                    },
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                var t = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'üncü",
                    4: "'üncü",
                    100: "'üncü",
                    6: "'ncı",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'ıncı",
                    90: "'ıncı"
                };
                return e.lang("tr", {
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[bugün saat] LT",
                        nextDay: "[yarın saat] LT",
                        nextWeek: "[haftaya] dddd [saat] LT",
                        lastDay: "[dün] LT",
                        lastWeek: "[geçen hafta] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s önce",
                        s: "birkaç saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yıl",
                        yy: "%d yıl"
                    },
                    ordinal: function(e) {
                        if (0 === e) return e + "'ıncı";
                        var n = e % 10,
                            r = e % 100 - n,
                            i = e >= 100 ? 100 : null;
                        return e + (t[n] || t[r] || t[i])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("tzm-la", {
                    months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                    monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                    weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[asdkh g] LT",
                        nextDay: "[aska g] LT",
                        nextWeek: "dddd [g] LT",
                        lastDay: "[assant g] LT",
                        lastWeek: "dddd [g] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dadkh s yan %s",
                        past: "yan %s",
                        s: "imik",
                        m: "minuḍ",
                        mm: "%d minuḍ",
                        h: "saɛa",
                        hh: "%d tassaɛin",
                        d: "ass",
                        dd: "%d ossan",
                        M: "ayowr",
                        MM: "%d iyyirn",
                        y: "asgas",
                        yy: "%d isgasn"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("tzm", {
                    months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                    monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                    weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                        nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                        nextWeek: "dddd [ⴴ] LT",
                        lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                        lastWeek: "dddd [ⴴ] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                        past: "ⵢⴰⵏ %s",
                        s: "ⵉⵎⵉⴽ",
                        m: "ⵎⵉⵏⵓⴺ",
                        mm: "%d ⵎⵉⵏⵓⴺ",
                        h: "ⵙⴰⵄⴰ",
                        hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                        d: "ⴰⵙⵙ",
                        dd: "%d oⵙⵙⴰⵏ",
                        M: "ⴰⵢoⵓⵔ",
                        MM: "%d ⵉⵢⵢⵉⵔⵏ",
                        y: "ⴰⵙⴳⴰⵙ",
                        yy: "%d ⵉⵙⴳⴰⵙⵏ"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                function t(e, t) {
                    var n = e.split("_");
                    return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
                }

                function n(e, n, r) {
                    var i = {
                        mm: "хвилина_хвилини_хвилин",
                        hh: "година_години_годин",
                        dd: "день_дні_днів",
                        MM: "місяць_місяці_місяців",
                        yy: "рік_роки_років"
                    };
                    return "m" === r ? n ? "хвилина" : "хвилину" : "h" === r ? n ? "година" : "годину" : e + " " + t(i[r], +e)
                }

                function r(e, t) {
                    var n = {
                            nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
                            accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
                        },
                        r = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
                    return n[r][e.month()]
                }

                function i(e, t) {
                    var n = {
                            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                        },
                        r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
                    return n[r][e.day()]
                }

                function s(e) {
                    return function() {
                        return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                    }
                }
                return e.lang("uk", {
                    months: r,
                    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                    weekdays: i,
                    weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY р.",
                        LLL: "D MMMM YYYY р., LT",
                        LLLL: "dddd, D MMMM YYYY р., LT"
                    },
                    calendar: {
                        sameDay: s("[Сьогодні "),
                        nextDay: s("[Завтра "),
                        lastDay: s("[Вчора "),
                        nextWeek: s("[У] dddd ["),
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return s("[Минулої] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return s("[Минулого] dddd [").call(this)
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "%s тому",
                        s: "декілька секунд",
                        m: n,
                        mm: n,
                        h: "годину",
                        hh: n,
                        d: "день",
                        dd: n,
                        M: "місяць",
                        MM: n,
                        y: "рік",
                        yy: n
                    },
                    meridiem: function(e) {
                        return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
                    },
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e + "-й";
                            case "D":
                                return e + "-го";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("uz", {
                    months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                    weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                    weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "D MMMM YYYY, dddd LT"
                    },
                    calendar: {
                        sameDay: "[Бугун соат] LT [да]",
                        nextDay: "[Эртага] LT [да]",
                        nextWeek: "dddd [куни соат] LT [да]",
                        lastDay: "[Кеча соат] LT [да]",
                        lastWeek: "[Утган] dddd [куни соат] LT [да]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Якин %s ичида",
                        past: "Бир неча %s олдин",
                        s: "фурсат",
                        m: "бир дакика",
                        mm: "%d дакика",
                        h: "бир соат",
                        hh: "%d соат",
                        d: "бир кун",
                        dd: "%d кун",
                        M: "бир ой",
                        MM: "%d ой",
                        y: "бир йил",
                        yy: "%d йил"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("vn", {
                    months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                    weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [năm] YYYY",
                        LLL: "D MMMM [năm] YYYY LT",
                        LLLL: "dddd, D MMMM [năm] YYYY LT",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY LT",
                        llll: "ddd, D MMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hôm nay lúc] LT",
                        nextDay: "[Ngày mai lúc] LT",
                        nextWeek: "dddd [tuần tới lúc] LT",
                        lastDay: "[Hôm qua lúc] LT",
                        lastWeek: "dddd [tuần rồi lúc] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s tới",
                        past: "%s trước",
                        s: "vài giây",
                        m: "một phút",
                        mm: "%d phút",
                        h: "một giờ",
                        hh: "%d giờ",
                        d: "một ngày",
                        dd: "%d ngày",
                        M: "một tháng",
                        MM: "%d tháng",
                        y: "một năm",
                        yy: "%d năm"
                    },
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("zh-cn", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "Ah点mm",
                        L: "YYYY-MM-DD",
                        LL: "YYYY年MMMD日",
                        LLL: "YYYY年MMMD日LT",
                        LLLL: "YYYY年MMMD日ddddLT",
                        l: "YYYY-MM-DD",
                        ll: "YYYY年MMMD日",
                        lll: "YYYY年MMMD日LT",
                        llll: "YYYY年MMMD日ddddLT"
                    },
                    meridiem: function(e, t) {
                        var n = 100 * e + t;
                        return 600 > n ? "凌晨" : 900 > n ? "早上" : 1130 > n ? "上午" : 1230 > n ? "中午" : 1800 > n ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: function() {
                            return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                        },
                        nextDay: function() {
                            return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                        },
                        lastDay: function() {
                            return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                        },
                        nextWeek: function() {
                            var t, n;
                            return t = e().startOf("week"), n = this.unix() - t.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                        },
                        lastWeek: function() {
                            var t, n;
                            return t = e().startOf("week"), n = this.unix() < t.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                        },
                        sameElse: "LL"
                    },
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "周";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s内",
                        past: "%s前",
                        s: "几秒",
                        m: "1分钟",
                        mm: "%d分钟",
                        h: "1小时",
                        hh: "%d小时",
                        d: "1天",
                        dd: "%d天",
                        M: "1个月",
                        MM: "%d个月",
                        y: "1年",
                        yy: "%d年"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(rt)
            }(function(e) {
                return e.lang("zh-tw", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "Ah點mm",
                        L: "YYYY年MMMD日",
                        LL: "YYYY年MMMD日",
                        LLL: "YYYY年MMMD日LT",
                        LLLL: "YYYY年MMMD日ddddLT",
                        l: "YYYY年MMMD日",
                        ll: "YYYY年MMMD日",
                        lll: "YYYY年MMMD日LT",
                        llll: "YYYY年MMMD日ddddLT"
                    },
                    meridiem: function(e, t) {
                        var n = 100 * e + t;
                        return 900 > n ? "早上" : 1130 > n ? "上午" : 1230 > n ? "中午" : 1800 > n ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天]LT",
                        nextDay: "[明天]LT",
                        nextWeek: "[下]ddddLT",
                        lastDay: "[昨天]LT",
                        lastWeek: "[上]ddddLT",
                        sameElse: "L"
                    },
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "週";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s內",
                        past: "%s前",
                        s: "幾秒",
                        m: "一分鐘",
                        mm: "%d分鐘",
                        h: "一小時",
                        hh: "%d小時",
                        d: "一天",
                        dd: "%d天",
                        M: "一個月",
                        MM: "%d個月",
                        y: "一年",
                        yy: "%d年"
                    }
                })
            }), rt.lang("en"), gt ? (module.exports = rt, nt(!0)) : "function" == typeof define && define.amd ? define("moment", ["require", "exports", "module"], function(t, n, r) {
                return r.config && r.config() && r.config().noGlobal !== !0 && nt(r.config().noGlobal === e), rt
            }) : nt()
    }.call(this), define("models/user", ["backbone", "moment"], function(e, t) {
        var n = e.Model.extend({
            url: function() {
                return apiUrl + "/user"
            },
            parse: function(e, n) {
                return e.last_login = t(e.last_login).format("llll"), typeof e.username == "undefined" && (e.username = e.email), typeof e.first_name == "undefined" && (e.first_name = ""), typeof e.last_name == "undefined" && (e.last_name = ""), typeof e.display_name == "undefined" && (e.display_name = e.first_name + " " + e.last_name), typeof e.quota_bytes == "undefined" && (e.quota_bytes = 0), typeof e.quota_used_bytes == "undefined" && (e.quota_used_bytes = 0), typeof e.quota_free_bytes == "undefined" && (e.quota_free_bytes = 0), e.quota_bytes > 0 && (e.quota_percentage = e.quota_used_bytes / e.quota_bytes * 100), e
            }
        });
        return n
    }), 
    

    ! function(e, t) {
        var n = t.prototype.trim,
            r = t.prototype.trimRight,
            i = t.prototype.trimLeft,
            s = function(e) {
                return e * 1 || 0
            },
            o = function(e, t) {
                if (t < 1) return "";
                var n = "";
                while (t > 0) t & 1 && (n += e), t >>= 1, e += e;
                return n
            },
            u = [].slice,
            a = function(e) {
                return e == null ? "\\s" : e.source ? e.source : "[" + p.escapeRegExp(e) + "]"
            },
            f = {
                lt: "<",
                gt: ">",
                quot: '"',
                apos: "'",
                amp: "&"
            },
            l = {};
        for (var c in f) l[f[c]] = c;
        var h = function() {
                function e(e) {
                    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
                }
                var n = o,
                    r = function() {
                        return r.cache.hasOwnProperty(arguments[0]) || (r.cache[arguments[0]] = r.parse(arguments[0])), r.format.call(null, r.cache[arguments[0]], arguments)
                    };
                return r.format = function(r, i) {
                    var s = 1,
                        o = r.length,
                        u = "",
                        a, f = [],
                        l, c, p, d, v, m;
                    for (l = 0; l < o; l++) {
                        u = e(r[l]);
                        if (u === "string") f.push(r[l]);
                        else if (u === "array") {
                            p = r[l];
                            if (p[2]) {
                                a = i[s];
                                for (c = 0; c < p[2].length; c++) {
                                    if (!a.hasOwnProperty(p[2][c])) throw new Error(h('[_.sprintf] property "%s" does not exist', p[2][c]));
                                    a = a[p[2][c]]
                                }
                            } else p[1] ? a = i[p[1]] : a = i[s++];
                            if (/[^s]/.test(p[8]) && e(a) != "number") throw new Error(h("[_.sprintf] expecting number but found %s", e(a)));
                            switch (p[8]) {
                                case "b":
                                    a = a.toString(2);
                                    break;
                                case "c":
                                    a = t.fromCharCode(a);
                                    break;
                                case "d":
                                    a = parseInt(a, 10);
                                    break;
                                case "e":
                                    a = p[7] ? a.toExponential(p[7]) : a.toExponential();
                                    break;
                                case "f":
                                    a = p[7] ? parseFloat(a).toFixed(p[7]) : parseFloat(a);
                                    break;
                                case "o":
                                    a = a.toString(8);
                                    break;
                                case "s":
                                    a = (a = t(a)) && p[7] ? a.substring(0, p[7]) : a;
                                    break;
                                case "u":
                                    a = Math.abs(a);
                                    break;
                                case "x":
                                    a = a.toString(16);
                                    break;
                                case "X":
                                    a = a.toString(16).toUpperCase()
                            }
                            a = /[def]/.test(p[8]) && p[3] && a >= 0 ? "+" + a : a, v = p[4] ? p[4] == "0" ? "0" : p[4].charAt(1) : " ", m = p[6] - t(a).length, d = p[6] ? n(v, m) : "", f.push(p[5] ? a + d : d + a)
                        }
                    }
                    return f.join("")
                }, r.cache = {}, r.parse = function(e) {
                    var t = e,
                        n = [],
                        r = [],
                        i = 0;
                    while (t) {
                        if ((n = /^[^\x25]+/.exec(t)) !== null) r.push(n[0]);
                        else if ((n = /^\x25{2}/.exec(t)) !== null) r.push("%");
                        else {
                            if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)) === null) throw new Error("[_.sprintf] huh?");
                            if (n[2]) {
                                i |= 1;
                                var s = [],
                                    o = n[2],
                                    u = [];
                                if ((u = /^([a-z_][a-z_\d]*)/i.exec(o)) === null) throw new Error("[_.sprintf] huh?");
                                s.push(u[1]);
                                while ((o = o.substring(u[0].length)) !== "")
                                    if ((u = /^\.([a-z_][a-z_\d]*)/i.exec(o)) !== null) s.push(u[1]);
                                    else {
                                        if ((u = /^\[(\d+)\]/.exec(o)) === null) throw new Error("[_.sprintf] huh?");
                                        s.push(u[1])
                                    }
                                n[2] = s
                            } else i |= 2;
                            if (i === 3) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                            r.push(n)
                        }
                        t = t.substring(n[0].length)
                    }
                    return r
                }, r
            }(),
            p = {
                VERSION: "2.3.0",
                isBlank: function(e) {
                    return e == null && (e = ""), /^\s*$/.test(e)
                },
                stripTags: function(e) {
                    return e == null ? "" : t(e).replace(/<\/?[^>]+>/g, "")
                },
                capitalize: function(e) {
                    return e = e == null ? "" : t(e), e.charAt(0).toUpperCase() + e.slice(1)
                },
                chop: function(e, n) {
                    return e == null ? [] : (e = t(e), n = ~~n, n > 0 ? e.match(new RegExp(".{1," + n + "}", "g")) : [e])
                },
                clean: function(e) {
                    return p.strip(e).replace(/\s+/g, " ")
                },
                count: function(e, n) {
                    return e == null || n == null ? 0 : t(e).split(n).length - 1
                },
                chars: function(e) {
                    return e == null ? [] : t(e).split("")
                },
                swapCase: function(e) {
                    return e == null ? "" : t(e).replace(/\S/g, function(e) {
                        return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
                    })
                },
                escapeHTML: function(e) {
                    return e == null ? "" : t(e).replace(/[&<>"']/g, function(e) {
                        return "&" + l[e] + ";"
                    })
                },
                unescapeHTML: function(e) {
                    return e == null ? "" : t(e).replace(/\&([^;]+);/g, function(e, n) {
                        var r;
                        return n in f ? f[n] : (r = n.match(/^#x([\da-fA-F]+)$/)) ? t.fromCharCode(parseInt(r[1], 16)) : (r = n.match(/^#(\d+)$/)) ? t.fromCharCode(~~r[1]) : e
                    })
                },
                escapeRegExp: function(e) {
                    return e == null ? "" : t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
                },
                splice: function(e, t, n, r) {
                    var i = p.chars(e);
                    return i.splice(~~t, ~~n, r), i.join("")
                },
                insert: function(e, t, n) {
                    return p.splice(e, t, 0, n)
                },
                include: function(e, n) {
                    return n === "" ? !0 : e == null ? !1 : t(e).indexOf(n) !== -1
                },
                join: function() {
                    var e = u.call(arguments),
                        t = e.shift();
                    return t == null && (t = ""), e.join(t)
                },
                lines: function(e) {
                    return e == null ? [] : t(e).split("\n")
                },
                reverse: function(e) {
                    return p.chars(e).reverse().join("")
                },
                startsWith: function(e, n) {
                    return n === "" ? !0 : e == null || n == null ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(0, n.length) === n)
                },
                endsWith: function(e, n) {
                    return n === "" ? !0 : e == null || n == null ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(e.length - n.length) === n)
                },
                succ: function(e) {
                    return e == null ? "" : (e = t(e), e.slice(0, -1) + t.fromCharCode(e.charCodeAt(e.length - 1) + 1))
                },
                titleize: function(e) {
                    return e == null ? "" : t(e).replace(/(?:^|\s)\S/g, function(e) {
                        return e.toUpperCase()
                    })
                },
                camelize: function(e) {
                    return p.trim(e).replace(/[-_\s]+(.)?/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                underscored: function(e) {
                    return p.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
                },
                dasherize: function(e) {
                    return p.trim(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
                },
                classify: function(e) {
                    return p.titleize(t(e).replace(/_/g, " ")).replace(/\s/g, "")
                },
                humanize: function(e) {
                    return p.capitalize(p.underscored(e).replace(/_id$/, "").replace(/_/g, " "))
                },
                trim: function(e, r) {
                    return e == null ? "" : !r && n ? n.call(e) : (r = a(r), t(e).replace(new RegExp("^" + r + "+|" + r + "+$", "g"), ""))
                },
                ltrim: function(e, n) {
                    return e == null ? "" : !n && i ? i.call(e) : (n = a(n), t(e).replace(new RegExp("^" + n + "+"), ""))
                },
                rtrim: function(e, n) {
                    return e == null ? "" : !n && r ? r.call(e) : (n = a(n), t(e).replace(new RegExp(n + "+$"), ""))
                },
                truncate: function(e, n, r) {
                    return e == null ? "" : (e = t(e), r = r || "...", n = ~~n, e.length > n ? e.slice(0, n) + r : e)
                },
                prune: function(e, n, r) {
                    if (e == null) return "";
                    e = t(e), n = ~~n, r = r != null ? t(r) : "...";
                    if (e.length <= n) return e;
                    var i = function(e) {
                            return e.toUpperCase() !== e.toLowerCase() ? "A" : " "
                        },
                        s = e.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, i);
                    return s.slice(s.length - 2).match(/\w\w/) ? s = s.replace(/\s*\S+$/, "") : s = p.rtrim(s.slice(0, s.length - 1)), (s + r).length > e.length ? e : e.slice(0, s.length) + r
                },
                words: function(e, t) {
                    return p.isBlank(e) ? [] : p.trim(e, t).split(t || /\s+/)
                },
                pad: function(e, n, r, i) {
                    e = e == null ? "" : t(e), n = ~~n;
                    var s = 0;
                    r ? r.length > 1 && (r = r.charAt(0)) : r = " ";
                    switch (i) {
                        case "right":
                            return s = n - e.length, e + o(r, s);
                        case "both":
                            return s = n - e.length, o(r, Math.ceil(s / 2)) + e + o(r, Math.floor(s / 2));
                        default:
                            return s = n - e.length, o(r, s) + e
                    }
                },
                lpad: function(e, t, n) {
                    return p.pad(e, t, n)
                },
                rpad: function(e, t, n) {
                    return p.pad(e, t, n, "right")
                },
                lrpad: function(e, t, n) {
                    return p.pad(e, t, n, "both")
                },
                sprintf: h,
                vsprintf: function(e, t) {
                    return t.unshift(e), h.apply(null, t)
                },
                toNumber: function(e, n) {
                    if (e == null || e == "") return 0;
                    e = t(e);
                    var r = s(s(e).toFixed(~~n));
                    return r === 0 && !e.match(/^0+$/) ? Number.NaN : r
                },
                numberFormat: function(e, t, n, r) {
                    if (isNaN(e) || e == null) return "";
                    e = e.toFixed(~~t), r = r || ",";
                    var i = e.split("."),
                        s = i[0],
                        o = i[1] ? (n || ".") + i[1] : "";
                    return s.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + r) + o
                },
                strRight: function(e, n) {
                    if (e == null) return "";
                    e = t(e), n = n != null ? t(n) : n;
                    var r = n ? e.indexOf(n) : -1;
                    return ~r ? e.slice(r + n.length, e.length) : e
                },
                strRightBack: function(e, n) {
                    if (e == null) return "";
                    e = t(e), n = n != null ? t(n) : n;
                    var r = n ? e.lastIndexOf(n) : -1;
                    return ~r ? e.slice(r + n.length, e.length) : e
                },
                strLeft: function(e, n) {
                    if (e == null) return "";
                    e = t(e), n = n != null ? t(n) : n;
                    var r = n ? e.indexOf(n) : -1;
                    return ~r ? e.slice(0, r) : e
                },
                strLeftBack: function(e, t) {
                    if (e == null) return "";
                    e += "", t = t != null ? "" + t : t;
                    var n = e.lastIndexOf(t);
                    return ~n ? e.slice(0, n) : e
                },
                toSentence: function(e, t, n, r) {
                    t = t || ", ", n = n || " and ";
                    var i = e.slice(),
                        s = i.pop();
                    return e.length > 2 && r && (n = p.rtrim(t) + n), i.length ? i.join(t) + n + s : s
                },
                toSentenceSerial: function() {
                    var e = u.call(arguments);
                    return e[3] = !0, p.toSentence.apply(p, e)
                },
                slugify: function(e) {
                    if (e == null) return "";
                    var n = "ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź",
                        r = "aaaaaaaaceeeeeiiiilnoooooouuuunczz",
                        i = new RegExp(a(n), "g");
                    return e = t(e).toLowerCase().replace(i, function(e) {
                        var t = n.indexOf(e);
                        return r.charAt(t) || "-"
                    }), p.dasherize(e.replace(/[^\w\s-]/g, ""))
                },
                surround: function(e, t) {
                    return [t, e, t].join("")
                },
                quote: function(e) {
                    return p.surround(e, '"')
                },
                exports: function() {
                    var e = {};
                    for (var t in this) {
                        if (!this.hasOwnProperty(t) || t.match(/^(?:include|contains|reverse)$/)) continue;
                        e[t] = this[t]
                    }
                    return e
                },
                repeat: function(e, n, r) {
                    if (e == null) return "";
                    n = ~~n;
                    if (r == null) return o(t(e), n);
                    for (var i = []; n > 0; i[--n] = e);
                    return i.join(r)
                },
                levenshtein: function(e, n) {
                    if (e == null && n == null) return 0;
                    if (e == null) return t(n).length;
                    if (n == null) return t(e).length;
                    e = t(e), n = t(n);
                    var r = [],
                        i, s;
                    for (var o = 0; o <= n.length; o++)
                        for (var u = 0; u <= e.length; u++) o && u ? e.charAt(u - 1) === n.charAt(o - 1) ? s = i : s = Math.min(r[u], r[u - 1], i) + 1 : s = o + u, i = r[u], r[u] = s;
                    return r.pop()
                }
            };
        p.strip = p.trim, p.lstrip = p.ltrim, p.rstrip = p.rtrim, p.center = p.lrpad, p.rjust = p.lpad, p.ljust = p.rpad, p.contains = p.include, p.q = p.quote, typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (module.exports = p), exports._s = p) : typeof define == "function" && define.amd ? define("underscore.string", [], function() {
            return p
        }) : (e._ = e._ || {}, e._.string = e._.str = p)
    }(this, String);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); + function(e) {
    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            r = this;
        e(this).one(e.support.transition.end, function() {
            n = !0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function() {
        e.support.transition = t()
    })
}(jQuery), + function(e) {
    var t = '[data-dismiss="alert"]',
        n = function(n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function(t) {
        function n() {
            s.trigger("closed.bs.alert").remove()
        }
        var r = e(this),
            i = r.attr("data-target");
        i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e(i);
        t && t.preventDefault(), s.length || (s = r.hasClass("alert") ? r : r.parent()), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.alert");
            i || r.data("bs.alert", i = new n(this)), "string" == typeof t && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery), + function(e) {
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.isLoading = !1
    };
    t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function(t) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            s = r.data();
        t += "Text", s.resetText || r.data("resetText", r[i]()), r[i](s[t] || this.options[t]), setTimeout(e.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, t.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.button"),
                s = "object" == typeof n && n;
            i || r.data("bs.button", i = new t(this, s)), "toggle" == n ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = n, this
    }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(jQuery), + function(e) {
    var t = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, t.prototype.to = function(t) {
        var n = this,
            r = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(t)
        }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(this.$items[t]))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, t.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, t.prototype.slide = function(t, n) {
        var r = this.$element.find(".item.active"),
            i = n || r[t](),
            s = this.interval,
            o = "next" == t ? "left" : "right",
            u = "next" == t ? "first" : "last",
            f = this;
        if (!i.length) {
            if (!this.options.wrap) return;
            i = this.$element.find(".item")[u]()
        }
        if (i.hasClass("active")) return this.sliding = !1;
        var l = e.Event("slide.bs.carousel", {
            relatedTarget: i[0],
            direction: o
        });
        return this.$element.trigger(l), l.isDefaultPrevented() ? void 0 : (this.sliding = !0, s && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var t = e(f.$indicators.children()[f.getActiveIndex()]);
            t && t.addClass("active")
        })), e.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), r.one(e.support.transition.end, function() {
            i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), f.sliding = !1, setTimeout(function() {
                f.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, -1))) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), s && this.cycle(), this)
    };
    var n = e.fn.carousel;
    e.fn.carousel = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.carousel"),
                s = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n),
                o = "string" == typeof n ? n : s.slide;
            i || r.data("bs.carousel", i = new t(this, s)), "number" == typeof n ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = n, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var n, r = e(this),
            i = e(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            s = e.extend({}, i.data(), r.data()),
            o = r.attr("data-slide-to");
        o && (s.interval = !1), i.carousel(s), (o = r.attr("data-slide-to")) && i.data("bs.carousel").to(o), t.preventDefault()
    }), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(jQuery), + function(e) {
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, t.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = e.Event("show.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var r = n.data("bs.collapse");
                    if (r && r.transitioning) return;
                    n.collapse("hide"), r || n.data("bs.collapse", null)
                }
                var i = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition) return s.call(this);
                var o = e.camelCase(["scroll", i].join("-"));
                this.$element.one(e.support.transition.end, e.proxy(s, this)).emulateTransitionEnd(350)[i](this.$element[0][o])
            }
        }
    }, t.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
            }
        }
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = e.fn.collapse;
    e.fn.collapse = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.collapse"),
                s = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
            !i && s.toggle && "show" == n && (n = !n), i || r.data("bs.collapse", i = new t(this, s)), "string" == typeof n && i[n]()
        })
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = n, this
    }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var n, r = e(this),
            i = r.attr("data-target") || t.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            s = e(i),
            o = s.data("bs.collapse"),
            u = o ? "toggle" : r.data(),
            f = r.attr("data-parent"),
            l = f && e(f);
        o && o.transitioning || (l && l.find('[data-toggle=collapse][data-parent="' + f + '"]').not(r).addClass("collapsed"), r[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), s.collapse(u)
    })
}(jQuery), + function(e) {
    function t(t) {
        e(r).remove(), e(i).each(function() {
            var r = n(e(this)),
                i = {
                    relatedTarget: this
                };
            r.hasClass("open") && (r.trigger(t = e.Event("hide.bs.dropdown", i)), t.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        })
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }
    var r = ".dropdown-backdrop",
        i = "[data-toggle=dropdown]",
        s = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    s.prototype.toggle = function(r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var s = n(i),
                o = s.hasClass("open");
            if (t(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var u = {
                    relatedTarget: this
                };
                if (s.trigger(r = e.Event("show.bs.dropdown", u)), r.isDefaultPrevented()) return;
                s.toggleClass("open").trigger("shown.bs.dropdown", u), i.focus()
            }
            return !1
        }
    }, s.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var r = e(this);
            if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
                var s = n(r),
                    o = s.hasClass("open");
                if (!o || o && 27 == t.keyCode) return 27 == t.which && s.find(i).focus(), r.click();
                var u = " li:not(.divider):visible a",
                    f = s.find("[role=menu]" + u + ", [role=listbox]" + u);
                if (f.length) {
                    var l = f.index(f.filter(":focus"));
                    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < f.length - 1 && l++, ~l || (l = 0), f.eq(l).focus()
                }
            }
        }
    };
    var o = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new s(this)), "string" == typeof t && r[t].call(n)
        })
    }, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = o, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, s.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu], [role=listbox]", s.prototype.keydown)
}(jQuery), + function(e) {
    var t = function(t, n) {
        this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function(e) {
        return this[this.isShown ? "hide" : "show"](e)
    }, t.prototype.show = function(t) {
        var n = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var r = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                n.$element.focus().trigger(i)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(i)
        }))
    }, t.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
        }, this))
    }, t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && n;
            if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    };
    var n = e.fn.modal;
    e.fn.modal = function(n, r) {
        return this.each(function() {
            var i = e(this),
                s = i.data("bs.modal"),
                o = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
            s || i.data("bs.modal", s = new t(this, o)), "string" == typeof n ? s[n](r) : o.show && s.show(r)
        })
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = n, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this),
            r = n.attr("href"),
            i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = i.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, i.data(), n.data());
        n.is("a") && t.preventDefault(), i.modal(s, this).one("hide", function() {
            n.is(":visible") && n.focus()
        })
    }), e(document).on("show.bs.modal", ".modal", function() {
        e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        e(document.body).removeClass("modal-open")
    })
}(jQuery), + function(e) {
    var t = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.prototype.init = function(t, n, r) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r);
        for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
            var o = i[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != o) {
                var u = "hover" == o ? "mouseenter" : "focusin",
                    f = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, t.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(t), t.isDefaultPrevented()) return;
            var n = this,
                r = this.tip();
            this.setContent(), this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                o = s.test(i);
            o && (i = i.replace(s, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var u = this.getPosition(),
                f = r[0].offsetWidth,
                l = r[0].offsetHeight;
            if (o) {
                var c = this.$element.parent(),
                    h = i,
                    p = document.documentElement.scrollTop || document.body.scrollTop,
                    d = "body" == this.options.container ? window.innerWidth : c.outerWidth(),
                    v = "body" == this.options.container ? window.innerHeight : c.outerHeight(),
                    m = "body" == this.options.container ? 0 : c.offset().left;
                i = "bottom" == i && u.top + u.height + l - p > v ? "top" : "top" == i && u.top - p - l < 0 ? "bottom" : "right" == i && u.right + f > d ? "left" : "left" == i && u.left - f < m ? "right" : i, r.removeClass(h).addClass(i)
            }
            var g = this.getCalculatedOffset(i, u, f, l);
            this.applyPlacement(g, i), this.hoverState = null;
            var y = function() {
                n.$element.trigger("shown.bs." + n.type)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, y).emulateTransitionEnd(150) : y()
        }
    }, t.prototype.applyPlacement = function(t, n) {
        var r, i = this.tip(),
            s = i[0].offsetWidth,
            o = i[0].offsetHeight,
            u = parseInt(i.css("margin-top"), 10),
            f = parseInt(i.css("margin-left"), 10);
        isNaN(u) && (u = 0), isNaN(f) && (f = 0), t.top = t.top + u, t.left = t.left + f, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        if ("top" == n && c != o && (r = !0, t.top = t.top + o - c), /bottom|top/.test(n)) {
            var h = 0;
            t.left < 0 && (h = -2 * t.left, t.left = 0, i.offset(t), l = i[0].offsetWidth, c = i[0].offsetHeight), this.replaceArrow(h - s + l, l, "left")
        } else this.replaceArrow(c - o, c, "top");
        r && i.offset(t)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function() {
        function t() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            r = this.tip(),
            i = e.Event("hide.bs." + this.type);
        return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function() {
        var t = this.$element[0];
        return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function(e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, t.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tooltip"),
                s = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.tooltip", i = new t(this, s)), "string" == typeof n && i[n]())
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(jQuery), + function(e) {
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.popover"),
                s = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.popover", i = new t(this, s)), "string" == typeof n && i[n]())
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(jQuery), + function(e) {
    function t(n, r) {
        var i, s = e.proxy(this.process, this);
        this.$element = e(e(n).is("body") ? window : n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", s), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || (i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
    }
    t.DEFAULTS = {
        offset: 10
    }, t.prototype.refresh = function() {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]), this.targets = e([]);
        var n = this;
        this.$body.find(this.selector).map(function() {
            var r = e(this),
                i = r.data("target") || r.attr("href"),
                s = /^#./.test(i) && e(i);
            return s && s.length && s.is(":visible") && [
                [s[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            r = n - this.$scrollElement.height(),
            i = this.offsets,
            s = this.targets,
            o = this.activeTarget;
        if (t >= r) return o != (e = s.last()[0]) && this.activate(e);
        if (o && t <= i[0]) return o != (e = s[0]) && this.activate(e);
        for (e = i.length; e--;) o != s[e] && t >= i[e] && (!i[e + 1] || t <= i[e + 1]) && this.activate(s[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.scrollspy"),
                s = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new t(this, s)), "string" == typeof n && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery), + function(e) {
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0],
                s = e.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (t.trigger(s), !s.isDefaultPrevented()) {
                var o = e(r);
                this.activate(t.parent("li"), n), this.activate(o, o.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, t.prototype.activate = function(t, n, r) {
        function i() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
        }
        var s = n.find("> .active"),
            o = r && e.support.transition && s.hasClass("fade");
        o ? s.one(e.support.transition.end, i).emulateTransitionEnd(150) : i(), s.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new t(this)), "string" == typeof n && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = n, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), e(this).tab("show")
    })
}(jQuery), + function(e) {
    var t = function(n, r) {
        this.options = e.extend({}, t.DEFAULTS, r), this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0
    }, t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var e = this.$window.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - e
    }, t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = e(document).height(),
                r = this.$window.scrollTop(),
                i = this.$element.offset(),
                s = this.options.offset,
                o = s.top,
                u = s.bottom;
            "top" == this.affixed && (i.top += r), "object" != typeof s && (u = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof u && (u = s.bottom(this.$element));
            var f = null != this.unpin && r + this.unpin <= i.top ? !1 : null != u && i.top + this.$element.height() >= n - u ? "bottom" : null != o && o >= r ? "top" : !1;
            if (this.affixed !== f) {
                this.unpin && this.$element.css("top", "");
                var l = "affix" + (f ? "-" + f : ""),
                    c = e.Event(l + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = f, this.unpin = "bottom" == f ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(l).trigger(e.Event(l.replace("affix", "affixed"))), "bottom" == f && this.$element.offset({
                    top: n - u - this.$element.height()
                }))
            }
        }
    };
    var n = e.fn.affix;
    e.fn.affix = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.affix"),
                s = "object" == typeof n && n;
            i || r.data("bs.affix", i = new t(this, s)), "string" == typeof n && i[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
        return e.fn.affix = n, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this),
                n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(jQuery), define("bootstrap", function() {}),
    function(e) {
        function t(e, t) {
            var n = (e & 65535) + (t & 65535),
                r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | n & 65535
        }

        function n(e, t) {
            return e << t | e >>> 32 - t
        }

        function r(e, r, i, s, o, u) {
            return t(n(t(t(r, e), t(s, u)), o), i)
        }

        function i(e, t, n, i, s, o, u) {
            return r(t & n | ~t & i, e, t, s, o, u)
        }

        function s(e, t, n, i, s, o, u) {
            return r(t & i | n & ~i, e, t, s, o, u)
        }

        function o(e, t, n, i, s, o, u) {
            return r(t ^ n ^ i, e, t, s, o, u)
        }

        function u(e, t, n, i, s, o, u) {
            return r(n ^ (t | ~i), e, t, s, o, u)
        }

        function a(e, n) {
            e[n >> 5] |= 128 << n % 32, e[(n + 64 >>> 9 << 4) + 14] = n;
            var r, a, f, l, c, h = 1732584193,
                p = -271733879,
                d = -1732584194,
                v = 271733878;
            for (r = 0; r < e.length; r += 16) a = h, f = p, l = d, c = v, h = i(h, p, d, v, e[r], 7, -680876936), v = i(v, h, p, d, e[r + 1], 12, -389564586), d = i(d, v, h, p, e[r + 2], 17, 606105819), p = i(p, d, v, h, e[r + 3], 22, -1044525330), h = i(h, p, d, v, e[r + 4], 7, -176418897), v = i(v, h, p, d, e[r + 5], 12, 1200080426), d = i(d, v, h, p, e[r + 6], 17, -1473231341), p = i(p, d, v, h, e[r + 7], 22, -45705983), h = i(h, p, d, v, e[r + 8], 7, 1770035416), v = i(v, h, p, d, e[r + 9], 12, -1958414417), d = i(d, v, h, p, e[r + 10], 17, -42063), p = i(p, d, v, h, e[r + 11], 22, -1990404162), h = i(h, p, d, v, e[r + 12], 7, 1804603682), v = i(v, h, p, d, e[r + 13], 12, -40341101), d = i(d, v, h, p, e[r + 14], 17, -1502002290), p = i(p, d, v, h, e[r + 15], 22, 1236535329), h = s(h, p, d, v, e[r + 1], 5, -165796510), v = s(v, h, p, d, e[r + 6], 9, -1069501632), d = s(d, v, h, p, e[r + 11], 14, 643717713), p = s(p, d, v, h, e[r], 20, -373897302), h = s(h, p, d, v, e[r + 5], 5, -701558691), v = s(v, h, p, d, e[r + 10], 9, 38016083), d = s(d, v, h, p, e[r + 15], 14, -660478335), p = s(p, d, v, h, e[r + 4], 20, -405537848), h = s(h, p, d, v, e[r + 9], 5, 568446438), v = s(v, h, p, d, e[r + 14], 9, -1019803690), d = s(d, v, h, p, e[r + 3], 14, -187363961), p = s(p, d, v, h, e[r + 8], 20, 1163531501), h = s(h, p, d, v, e[r + 13], 5, -1444681467), v = s(v, h, p, d, e[r + 2], 9, -51403784), d = s(d, v, h, p, e[r + 7], 14, 1735328473), p = s(p, d, v, h, e[r + 12], 20, -1926607734), h = o(h, p, d, v, e[r + 5], 4, -378558), v = o(v, h, p, d, e[r + 8], 11, -2022574463), d = o(d, v, h, p, e[r + 11], 16, 1839030562), p = o(p, d, v, h, e[r + 14], 23, -35309556), h = o(h, p, d, v, e[r + 1], 4, -1530992060), v = o(v, h, p, d, e[r + 4], 11, 1272893353), d = o(d, v, h, p, e[r + 7], 16, -155497632), p = o(p, d, v, h, e[r + 10], 23, -1094730640), h = o(h, p, d, v, e[r + 13], 4, 681279174), v = o(v, h, p, d, e[r], 11, -358537222), d = o(d, v, h, p, e[r + 3], 16, -722521979), p = o(p, d, v, h, e[r + 6], 23, 76029189), h = o(h, p, d, v, e[r + 9], 4, -640364487), v = o(v, h, p, d, e[r + 12], 11, -421815835), d = o(d, v, h, p, e[r + 15], 16, 530742520), p = o(p, d, v, h, e[r + 2], 23, -995338651), h = u(h, p, d, v, e[r], 6, -198630844), v = u(v, h, p, d, e[r + 7], 10, 1126891415), d = u(d, v, h, p, e[r + 14], 15, -1416354905), p = u(p, d, v, h, e[r + 5], 21, -57434055), h = u(h, p, d, v, e[r + 12], 6, 1700485571), v = u(v, h, p, d, e[r + 3], 10, -1894986606), d = u(d, v, h, p, e[r + 10], 15, -1051523), p = u(p, d, v, h, e[r + 1], 21, -2054922799), h = u(h, p, d, v, e[r + 8], 6, 1873313359), v = u(v, h, p, d, e[r + 15], 10, -30611744), d = u(d, v, h, p, e[r + 6], 15, -1560198380), p = u(p, d, v, h, e[r + 13], 21, 1309151649), h = u(h, p, d, v, e[r + 4], 6, -145523070), v = u(v, h, p, d, e[r + 11], 10, -1120210379), d = u(d, v, h, p, e[r + 2], 15, 718787259), p = u(p, d, v, h, e[r + 9], 21, -343485551), h = t(h, a), p = t(p, f), d = t(d, l), v = t(v, c);
            return [h, p, d, v]
        }

        function f(e) {
            var t, n = "";
            for (t = 0; t < e.length * 32; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function l(e) {
            var t, n = [];
            n[(e.length >> 2) - 1] = undefined;
            for (t = 0; t < n.length; t += 1) n[t] = 0;
            for (t = 0; t < e.length * 8; t += 8) n[t >> 5] |= (e.charCodeAt(t / 8) & 255) << t % 32;
            return n
        }

        function c(e) {
            return f(a(l(e), e.length * 8))
        }

        function h(e, t) {
            var n, r = l(e),
                i = [],
                s = [],
                o;
            i[15] = s[15] = undefined, r.length > 16 && (r = a(r, e.length * 8));
            for (n = 0; n < 16; n += 1) i[n] = r[n] ^ 909522486, s[n] = r[n] ^ 1549556828;
            return o = a(i.concat(l(t)), 512 + t.length * 8), f(a(s.concat(o), 640))
        }

        function p(e) {
            var t = "0123456789abcdef",
                n = "",
                r, i;
            for (i = 0; i < e.length; i += 1) r = e.charCodeAt(i), n += t.charAt(r >>> 4 & 15) + t.charAt(r & 15);
            return n
        }

        function d(e) {
            return unescape(encodeURIComponent(e))
        }

        function v(e) {
            return c(d(e))
        }

        function m(e) {
            return p(v(e))
        }

        function g(e, t) {
            return h(d(e), d(t))
        }

        function y(e, t) {
            return p(g(e, t))
        }
        e.md5 = function(e, t, n) {
            return t ? n ? g(t, e) : y(t, e) : n ? v(e) : m(e)
        }
    }(typeof jQuery == "function" ? jQuery : this), define("jquery-md5", function() {}), typeof JSON != "object" && (JSON = {}),
    function() {
        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, s, o = gap,
                u, a = t[e];
            a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
            switch (typeof a) {
                case "string":
                    return quote(a);
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "boolean":
                case "null":
                    return String(a);
                case "object":
                    if (!a) return "null";
                    gap += indent, u = [];
                    if (Object.prototype.toString.apply(a) === "[object Array]") {
                        s = a.length;
                        for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                        return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                    }
                    if (rep && typeof rep == "object") {
                        s = rep.length;
                        for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                    } else
                        for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx, escapable, gap, indent, meta, rep;
        typeof JSON.stringify != "function" && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
            "\b": "\\b",
            "  ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, JSON.stringify = function(e, t, n) {
            var r;
            gap = "", indent = "";
            if (typeof n == "number")
                for (r = 0; r < n; r += 1) indent += " ";
            else typeof n == "string" && (indent = n);
            rep = t;
            if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), typeof JSON.parse != "function" && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && typeof i == "object")
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), define("json", function() {}),
    function(e, t, n) {
        function l(e) {
            var t = {},
                r = /^jQuery\d+$/;
            return n.each(e.attributes, function(e, n) {
                n.specified && !r.test(n.name) && (t[n.name] = n.value)
            }), t
        }

        function c(e, r) {
            var i = this,
                s = n(i);
            if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
                if (s.data("placeholder-password")) {
                    s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                    if (e === !0) return s[0].value = r;
                    s.focus()
                } else i.value = "", s.removeClass("placeholder"), i == t.activeElement && i.select()
        }

        function h() {
            var e, t = this,
                r = n(t),
                i = this.id;
            if (t.value == "") {
                if (t.type == "password") {
                    if (!r.data("placeholder-textinput")) {
                        try {
                            e = r.clone().attr({
                                type: "text"
                            })
                        } catch (s) {
                            e = n("<input>").attr(n.extend(l(this), {
                                type: "text"
                            }))
                        }
                        e.removeAttr("name").data({
                            "placeholder-password": r,
                            "placeholder-id": i
                        }).bind("focus.placeholder", c), r.data({
                            "placeholder-textinput": e,
                            "placeholder-id": i
                        }).before(e)
                    }
                    r = r.removeAttr("id").hide().prev().attr("id", i).show()
                }
                r.addClass("placeholder"), r[0].value = r.attr("placeholder")
            } else r.removeClass("placeholder")
        }
        var r = "placeholder" in t.createElement("input"),
            i = "placeholder" in t.createElement("textarea"),
            s = n.fn,
            o = n.valHooks,
            u = n.propHooks,
            a, f;
        r && i ? (f = s.placeholder = function() {
            return this
        }, f.input = f.textarea = !0) : (f = s.placeholder = function() {
            var e = this;
            return e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": c,
                "blur.placeholder": h
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
        }, f.input = r, f.textarea = i, a = {
            get: function(e) {
                var t = n(e),
                    r = t.data("placeholder-password");
                return r ? r[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, r) {
                var i = n(e),
                    s = i.data("placeholder-password");
                return s ? s[0].value = r : i.data("placeholder-enabled") ? (r == "" ? (e.value = r, e != t.activeElement && h.call(e)) : i.hasClass("placeholder") ? c.call(e, !0, r) || (e.value = r) : e.value = r, i) : e.value = r
            }
        }, r || (o.input = a, u.value = a), i || (o.textarea = a, u.value = a), n(function() {
            n(t).delegate("form", "submit.placeholder", function() {
                var e = n(".placeholder", this).each(c);
                setTimeout(function() {
                    e.each(h)
                }, 10)
            })
        }), n(e).bind("beforeunload.placeholder", function() {
            n(".placeholder").each(function() {
                this.value = ""
            })
        }))
    }(this, document, jQuery), define("jquery-placeholder", function() {}), "function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e) {
        var t = {
            init: function(t) {
                return this.options = e.extend({}, e.noty.defaults, t), this.options.layout = this.options.custom ? e.noty.layouts.inline : e.noty.layouts[this.options.layout], e.noty.themes[this.options.theme] ? this.options.theme = e.noty.themes[this.options.theme] : t.themeClassName = this.options.theme, delete t.layout, delete t.theme, this.options = e.extend({}, this.options, this.options.layout.options), this.options.id = "noty_" + (new Date).getTime() * Math.floor(1e6 * Math.random()), this.options = e.extend({}, this.options, t), this._build(), this
            },
            _build: function() {
                var t = e('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
                if (t.append(this.options.template).find(".noty_text").html(this.options.text), this.$bar = null !== this.options.layout.parent.object ? e(this.options.layout.parent.object).css(this.options.layout.parent.css).append(t) : t, this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type), this.options.buttons) {
                    this.options.closeWith = [], this.options.timeout = !1;
                    var n = e("<div/>").addClass("noty_buttons");
                    null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(n) : this.$bar.append(n);
                    var r = this;
                    e.each(this.options.buttons, function(t, n) {
                        var i = e("<button/>").addClass(n.addClass ? n.addClass : "gray").html(n.text).attr("id", n.id ? n.id : "button-" + t).appendTo(r.$bar.find(".noty_buttons")).bind("click", function() {
                            e.isFunction(n.onClick) && n.onClick.call(i, r)
                        })
                    })
                }
                this.$message = this.$bar.find(".noty_message"), this.$closeButton = this.$bar.find(".noty_close"), this.$buttons = this.$bar.find(".noty_buttons"), e.noty.store[this.options.id] = this
            },
            show: function() {
                var t = this;
                return t.options.custom ? t.options.custom.find(t.options.layout.container.selector).append(t.$bar) : e(t.options.layout.container.selector).append(t.$bar), t.options.theme && t.options.theme.style && t.options.theme.style.apply(t), "function" === e.type(t.options.layout.css) ? this.options.layout.css.apply(t.$bar) : t.$bar.css(this.options.layout.css || {}), t.$bar.addClass(t.options.layout.addClass), t.options.layout.container.style.apply(e(t.options.layout.container.selector)), t.showing = !0, t.options.theme && t.options.theme.style && t.options.theme.callback.onShow.apply(this), e.inArray("click", t.options.closeWith) > -1 && t.$bar.css("cursor", "pointer").one("click", function(e) {
                    t.stopPropagation(e), t.options.callback.onCloseClick && t.options.callback.onCloseClick.apply(t), t.close()
                }), e.inArray("hover", t.options.closeWith) > -1 && t.$bar.one("mouseenter", function() {
                    t.close()
                }), e.inArray("button", t.options.closeWith) > -1 && t.$closeButton.one("click", function(e) {
                    t.stopPropagation(e), t.close()
                }), -1 == e.inArray("button", t.options.closeWith) && t.$closeButton.remove(), t.options.callback.onShow && t.options.callback.onShow.apply(t), t.$bar.animate(t.options.animation.open, t.options.animation.speed, t.options.animation.easing, function() {
                    t.options.callback.afterShow && t.options.callback.afterShow.apply(t), t.showing = !1, t.shown = !0
                }), t.options.timeout && t.$bar.delay(t.options.timeout).promise().done(function() {
                    t.close()
                }), this
            },
            close: function() {
                if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
                    var t = this;
                    if (this.showing) return t.$bar.queue(function() {
                        t.close.apply(t)
                    }), void 0;
                    if (!this.shown && !this.showing) {
                        var n = [];
                        return e.each(e.noty.queue, function(e, r) {
                            r.options.id != t.options.id && n.push(r)
                        }), e.noty.queue = n, void 0
                    }
                    t.$bar.addClass("i-am-closing-now"), t.options.callback.onClose && t.options.callback.onClose.apply(t), t.$bar.clearQueue().stop().animate(t.options.animation.close, t.options.animation.speed, t.options.animation.easing, function() {
                        t.options.callback.afterClose && t.options.callback.afterClose.apply(t)
                    }).promise().done(function() {
                        t.options.modal && (e.notyRenderer.setModalCount(-1), 0 == e.notyRenderer.getModalCount() && e(".noty_modal").fadeOut("fast", function() {
                            e(this).remove()
                        })), e.notyRenderer.setLayoutCountFor(t, -1), 0 == e.notyRenderer.getLayoutCountFor(t) && e(t.options.layout.container.selector).remove(), "undefined" != typeof t.$bar && null !== t.$bar && (t.$bar.remove(), t.$bar = null, t.closed = !0), delete e.noty.store[t.options.id], t.options.theme.callback && t.options.theme.callback.onClose && t.options.theme.callback.onClose.apply(t), t.options.dismissQueue || (e.noty.ontap = !0, e.notyRenderer.render()), t.options.maxVisible > 0 && t.options.dismissQueue && e.notyRenderer.render()
                    })
                }
            },
            setText: function(e) {
                return this.closed || (this.options.text = e, this.$bar.find(".noty_text").html(e)), this
            },
            setType: function(e) {
                return this.closed || (this.options.type = e, this.options.theme.style.apply(this), this.options.theme.callback.onShow.apply(this)), this
            },
            setTimeout: function(e) {
                if (!this.closed) {
                    var t = this;
                    this.options.timeout = e, t.$bar.delay(t.options.timeout).promise().done(function() {
                        t.close()
                    })
                }
                return this
            },
            stopPropagation: function(e) {
                e = e || window.event, "undefined" != typeof e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            },
            closed: !1,
            showing: !1,
            shown: !1
        };
        e.notyRenderer = {}, e.notyRenderer.init = function(n) {
            var r = Object.create(t).init(n);
            return r.options.killer && e.noty.closeAll(), r.options.force ? e.noty.queue.unshift(r) : e.noty.queue.push(r), e.notyRenderer.render(), "object" == e.noty.returns ? r : r.options.id
        }, e.notyRenderer.render = function() {
            var t = e.noty.queue[0];
            "object" === e.type(t) ? t.options.dismissQueue ? t.options.maxVisible > 0 ? e(t.options.layout.container.selector + " li").length < t.options.maxVisible && e.notyRenderer.show(e.noty.queue.shift()) : e.notyRenderer.show(e.noty.queue.shift()) : e.noty.ontap && (e.notyRenderer.show(e.noty.queue.shift()), e.noty.ontap = !1) : e.noty.ontap = !0
        }, e.notyRenderer.show = function(t) {
            t.options.modal && (e.notyRenderer.createModalFor(t), e.notyRenderer.setModalCount(1)), t.options.custom ? 0 == t.options.custom.find(t.options.layout.container.selector).length ? t.options.custom.append(e(t.options.layout.container.object).addClass("i-am-new")) : t.options.custom.find(t.options.layout.container.selector).removeClass("i-am-new") : 0 == e(t.options.layout.container.selector).length ? e("body").append(e(t.options.layout.container.object).addClass("i-am-new")) : e(t.options.layout.container.selector).removeClass("i-am-new"), e.notyRenderer.setLayoutCountFor(t, 1), t.show()
        }, e.notyRenderer.createModalFor = function(t) {
            if (0 == e(".noty_modal").length) {
                var n = e("<div/>").addClass("noty_modal").addClass(t.options.theme).data("noty_modal_count", 0);
                t.options.theme.modal && t.options.theme.modal.css && n.css(t.options.theme.modal.css), n.prependTo(e("body")).fadeIn("fast")
            }
        }, e.notyRenderer.getLayoutCountFor = function(t) {
            return e(t.options.layout.container.selector).data("noty_layout_count") || 0
        }, e.notyRenderer.setLayoutCountFor = function(t, n) {
            return e(t.options.layout.container.selector).data("noty_layout_count", e.notyRenderer.getLayoutCountFor(t) + n)
        }, e.notyRenderer.getModalCount = function() {
            return e(".noty_modal").data("noty_modal_count") || 0
        }, e.notyRenderer.setModalCount = function(t) {
            return e(".noty_modal").data("noty_modal_count", e.notyRenderer.getModalCount() + t)
        }, e.fn.noty = function(t) {
            return t.custom = e(this), e.notyRenderer.init(t)
        }, e.noty = {}, e.noty.queue = [], e.noty.ontap = !0, e.noty.layouts = {}, e.noty.themes = {}, e.noty.returns = "object", e.noty.store = {}, e.noty.get = function(t) {
            return e.noty.store.hasOwnProperty(t) ? e.noty.store[t] : !1
        }, e.noty.close = function(t) {
            return e.noty.get(t) ? e.noty.get(t).close() : !1
        }, e.noty.setText = function(t, n) {
            return e.noty.get(t) ? e.noty.get(t).setText(n) : !1
        }, e.noty.setType = function(t, n) {
            return e.noty.get(t) ? e.noty.get(t).setType(n) : !1
        }, e.noty.clearQueue = function() {
            e.noty.queue = []
        }, e.noty.closeAll = function() {
            e.noty.clearQueue(), e.each(e.noty.store, function(e, t) {
                t.close()
            })
        };
        var n = window.alert;
        e.noty.consumeAlert = function(t) {
            window.alert = function(n) {
                t ? t.text = n : t = {
                    text: n
                }, e.notyRenderer.init(t)
            }
        }, e.noty.stopConsumeAlert = function() {
            window.alert = n
        }, e.noty.defaults = {
            layout: "top",
            theme: "defaultTheme",
            type: "alert",
            text: "",
            dismissQueue: !0,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            animation: {
                open: {
                    height: "toggle"
                },
                close: {
                    height: "toggle"
                },
                easing: "swing",
                speed: 500
            },
            timeout: !1,
            force: !1,
            modal: !1,
            maxVisible: 5,
            killer: !1,
            closeWith: ["click"],
            callback: {
                onShow: function() {},
                afterShow: function() {},
                onClose: function() {},
                afterClose: function() {},
                onCloseClick: function() {}
            },
            buttons: !1
        }, e(window).resize(function() {
            e.each(e.noty.layouts, function(t, n) {
                n.container.style.apply(e(n.container.selector))
            })
        })
    }(jQuery), window.noty = function(e) {
        return jQuery.notyRenderer.init(e)
    },
    function(e) {
        e.noty.layouts.bottom = {
            name: "bottom",
            options: {},
            container: {
                object: '<ul id="noty_bottom_layout_container" />',
                selector: "ul#noty_bottom_layout_container",
                style: function() {
                    e(this).css({
                        bottom: 0,
                        left: "5%",
                        position: "fixed",
                        width: "90%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.bottomCenter = {
            name: "bottomCenter",
            options: {},
            container: {
                object: '<ul id="noty_bottomCenter_layout_container" />',
                selector: "ul#noty_bottomCenter_layout_container",
                style: function() {
                    e(this).css({
                        bottom: 20,
                        left: 0,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), e(this).css({
                        left: (e(window).width() - e(this).outerWidth(!1)) / 2 + "px"
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.bottomLeft = {
            name: "bottomLeft",
            options: {},
            container: {
                object: '<ul id="noty_bottomLeft_layout_container" />',
                selector: "ul#noty_bottomLeft_layout_container",
                style: function() {
                    e(this).css({
                        bottom: 20,
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), window.innerWidth < 600 && e(this).css({
                        left: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.bottomRight = {
            name: "bottomRight",
            options: {},
            container: {
                object: '<ul id="noty_bottomRight_layout_container" />',
                selector: "ul#noty_bottomRight_layout_container",
                style: function() {
                    e(this).css({
                        bottom: 20,
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), window.innerWidth < 600 && e(this).css({
                        right: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.center = {
            name: "center",
            options: {},
            container: {
                object: '<ul id="noty_center_layout_container" />',
                selector: "ul#noty_center_layout_container",
                style: function() {
                    e(this).css({
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var t = e(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    e("body").append(t), t.find(".i-am-closing-now").remove(), t.find("li").css("display", "block");
                    var n = t.height();
                    t.remove(), e(this).hasClass("i-am-new") ? e(this).css({
                        left: (e(window).width() - e(this).outerWidth(!1)) / 2 + "px",
                        top: (e(window).height() - n) / 2 + "px"
                    }) : e(this).animate({
                        left: (e(window).width() - e(this).outerWidth(!1)) / 2 + "px",
                        top: (e(window).height() - n) / 2 + "px"
                    }, 500)
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.centerLeft = {
            name: "centerLeft",
            options: {},
            container: {
                object: '<ul id="noty_centerLeft_layout_container" />',
                selector: "ul#noty_centerLeft_layout_container",
                style: function() {
                    e(this).css({
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var t = e(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    e("body").append(t), t.find(".i-am-closing-now").remove(), t.find("li").css("display", "block");
                    var n = t.height();
                    t.remove(), e(this).hasClass("i-am-new") ? e(this).css({
                        top: (e(window).height() - n) / 2 + "px"
                    }) : e(this).animate({
                        top: (e(window).height() - n) / 2 + "px"
                    }, 500), window.innerWidth < 600 && e(this).css({
                        left: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.centerRight = {
            name: "centerRight",
            options: {},
            container: {
                object: '<ul id="noty_centerRight_layout_container" />',
                selector: "ul#noty_centerRight_layout_container",
                style: function() {
                    e(this).css({
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var t = e(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    e("body").append(t), t.find(".i-am-closing-now").remove(), t.find("li").css("display", "block");
                    var n = t.height();
                    t.remove(), e(this).hasClass("i-am-new") ? e(this).css({
                        top: (e(window).height() - n) / 2 + "px"
                    }) : e(this).animate({
                        top: (e(window).height() - n) / 2 + "px"
                    }, 500), window.innerWidth < 600 && e(this).css({
                        right: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.inline = {
            name: "inline",
            options: {},
            container: {
                object: '<ul class="noty_inline_layout_container" />',
                selector: "ul.noty_inline_layout_container",
                style: function() {
                    e(this).css({
                        width: "100%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.top = {
            name: "top",
            options: {},
            container: {
                object: '<ul id="noty_top_layout_container" />',
                selector: "ul#noty_top_layout_container",
                style: function() {
                    e(this).css({
                        top: 0,
                        left: "5%",
                        position: "fixed",
                        width: "90%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.topCenter = {
            name: "topCenter",
            options: {},
            container: {
                object: '<ul id="noty_topCenter_layout_container" />',
                selector: "ul#noty_topCenter_layout_container",
                style: function() {
                    e(this).css({
                        top: 20,
                        left: 0,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), e(this).css({
                        left: (e(window).width() - e(this).outerWidth(!1)) / 2 + "px"
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.topLeft = {
            name: "topLeft",
            options: {},
            container: {
                object: '<ul id="noty_topLeft_layout_container" />',
                selector: "ul#noty_topLeft_layout_container",
                style: function() {
                    e(this).css({
                        top: 20,
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), window.innerWidth < 600 && e(this).css({
                        left: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.topRight = {
            name: "topRight",
            options: {},
            container: {
                object: '<ul id="noty_topRight_layout_container" />',
                selector: "ul#noty_topRight_layout_container",
                style: function() {
                    e(this).css({
                        top: 20,
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), window.innerWidth < 600 && e(this).css({
                        right: 5
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.themes.defaultTheme = {
            name: "defaultTheme",
            helpers: {
                borderFix: function() {
                    if (this.options.dismissQueue) {
                        var t = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                        switch (this.options.layout.name) {
                            case "top":
                                e(t).css({
                                    borderRadius: "0px 0px 0px 0px"
                                }), e(t).last().css({
                                    borderRadius: "0px 0px 5px 5px"
                                });
                                break;
                            case "topCenter":
                            case "topLeft":
                            case "topRight":
                            case "bottomCenter":
                            case "bottomLeft":
                            case "bottomRight":
                            case "center":
                            case "centerLeft":
                            case "centerRight":
                            case "inline":
                                e(t).css({
                                    borderRadius: "0px 0px 0px 0px"
                                }), e(t).first().css({
                                    "border-top-left-radius": "5px",
                                    "border-top-right-radius": "5px"
                                }), e(t).last().css({
                                    "border-bottom-left-radius": "5px",
                                    "border-bottom-right-radius": "5px"
                                });
                                break;
                            case "bottom":
                                e(t).css({
                                    borderRadius: "0px 0px 0px 0px"
                                }), e(t).first().css({
                                    borderRadius: "5px 5px 0px 0px"
                                })
                        }
                    }
                }
            },
            modal: {
                css: {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    zIndex: 1e4,
                    opacity: .6,
                    display: "none",
                    left: 0,
                    top: 0
                }
            },
            style: function() {
                switch (this.$bar.css({
                    overflow: "hidden",
                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff"
                }), this.$message.css({
                    fontSize: "13px",
                    lineHeight: "16px",
                    textAlign: "center",
                    padding: "8px 10px 9px",
                    width: "auto",
                    position: "relative"
                }), this.$closeButton.css({
                    position: "absolute",
                    top: 4,
                    right: 4,
                    width: 10,
                    height: 10,
                    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",
                    display: "none",
                    cursor: "pointer"
                }), this.$buttons.css({
                    padding: 5,
                    textAlign: "right",
                    borderTop: "1px solid #ccc",
                    backgroundColor: "#fff"
                }), this.$buttons.find("button").css({
                    marginLeft: 5
                }), this.$buttons.find("button:first").css({
                    marginLeft: 0
                }), this.$bar.bind({
                    mouseenter: function() {
                        e(this).find(".noty_close").stop().fadeTo("normal", 1)
                    },
                    mouseleave: function() {
                        e(this).find(".noty_close").stop().fadeTo("normal", 0)
                    }
                }), this.options.layout.name) {
                    case "top":
                        this.$bar.css({
                            borderRadius: "0px 0px 5px 5px",
                            borderBottom: "2px solid #eee",
                            borderLeft: "2px solid #eee",
                            borderRight: "2px solid #eee",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        });
                        break;
                    case "topCenter":
                    case "center":
                    case "bottomCenter":
                    case "inline":
                        this.$bar.css({
                            borderRadius: "5px",
                            border: "1px solid #eee",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        }), this.$message.css({
                            fontSize: "13px",
                            textAlign: "center"
                        });
                        break;
                    case "topLeft":
                    case "topRight":
                    case "bottomLeft":
                    case "bottomRight":
                    case "centerLeft":
                    case "centerRight":
                        this.$bar.css({
                            borderRadius: "5px",
                            border: "1px solid #eee",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        }), this.$message.css({
                            fontSize: "13px",
                            textAlign: "left"
                        });
                        break;
                    case "bottom":
                        this.$bar.css({
                            borderRadius: "5px 5px 0px 0px",
                            borderTop: "2px solid #eee",
                            borderLeft: "2px solid #eee",
                            borderRight: "2px solid #eee",
                            boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                        });
                        break;
                    default:
                        this.$bar.css({
                            border: "2px solid #eee",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        })
                }
                switch (this.options.type) {
                    case "alert":
                    case "notification":
                        this.$bar.css({
                            backgroundColor: "#FFF",
                            borderColor: "#CCC",
                            color: "#444"
                        });
                        break;
                    case "warning":
                        this.$bar.css({
                            backgroundColor: "#FFEAA8",
                            borderColor: "#FFC237",
                            color: "#826200"
                        }), this.$buttons.css({
                            borderTop: "1px solid #FFC237"
                        });
                        break;
                    case "error":
                        this.$bar.css({
                            backgroundColor: "red",
                            borderColor: "darkred",
                            color: "#FFF"
                        }), this.$message.css({
                            fontWeight: "bold"
                        }), this.$buttons.css({
                            borderTop: "1px solid darkred"
                        });
                        break;
                    case "information":
                        this.$bar.css({
                            backgroundColor: "#57B7E2",
                            borderColor: "#0B90C4",
                            color: "#FFF"
                        }), this.$buttons.css({
                            borderTop: "1px solid #0B90C4"
                        });
                        break;
                    case "success":
                        this.$bar.css({
                            backgroundColor: "lightgreen",
                            borderColor: "#50C24E",
                            color: "darkgreen"
                        }), this.$buttons.css({
                            borderTop: "1px solid #50C24E"
                        });
                        break;
                    default:
                        this.$bar.css({
                            backgroundColor: "#FFF",
                            borderColor: "#CCC",
                            color: "#444"
                        })
                }
            },
            callback: {
                onShow: function() {
                    e.noty.themes.defaultTheme.helpers.borderFix.apply(this)
                },
                onClose: function() {
                    e.noty.themes.defaultTheme.helpers.borderFix.apply(this)
                }
            }
        }
    }(jQuery), 
    define("jquery-noty", function() {}),


    /**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.2.0
 *
 * http://wenzhixin.net.cn/p/multiple-select/
 */

(function ($) {

    'use strict';

    // it only does '%s', and return '' when arguments are undefined
    var sprintf = function (str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function () {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    };

    function MultipleSelect($el, options) {
        var that = this,
            name = $el.attr('name') || options.name || '';

        this.options = options;

        // hide select element
        this.$el = $el.hide();

        // label element
        this.$label = this.$el.closest('label') ||
            this.$el.attr('id') && $(sprintf('label[for="%s"]', this.$el.attr('id').replace(/:/g, '\\:')));

        // restore class and title from select element
        this.$parent = $(sprintf(
            '<div class="ms-parent %s" %s/>',
            $el.attr('class') || '',
            sprintf('title="%s"', $el.attr('title'))));

        // add placeholder to choice button
        this.$choice = $(sprintf([
                '<button type="button" class="ms-choice">',
                '<span class="placeholder">%s</span>',
                '<div></div>',
                '</button>'
            ].join(''),
            this.options.placeholder));

        // default position is bottom
        this.$drop = $(sprintf('<div class="ms-drop %s"%s></div>',
            this.options.position,
            sprintf(' style="width: %s"', this.options.dropWidth)));

        this.$el.after(this.$parent);
        this.$parent.append(this.$choice);
        this.$parent.append(this.$drop);

        if (this.$el.prop('disabled')) {
            this.$choice.addClass('disabled');
        }
        this.$parent.css('width',
            this.options.width ||
            this.$el.css('width') ||
            this.$el.outerWidth() + 20);

        this.selectAllName = 'data-name="selectAll' + name + '"';
        this.selectGroupName = 'data-name="selectGroup' + name + '"';
        this.selectItemName = 'data-name="selectItem' + name + '"';

        if (!this.options.keepOpen) {
            $(document).click(function (e) {
                if ($(e.target)[0] === that.$choice[0] ||
                    $(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
                    return;
                }
                if (($(e.target)[0] === that.$drop[0] ||
                    $(e.target).parents('.ms-drop')[0] !== that.$drop[0] && e.target !== $el[0]) &&
                    that.options.isOpen) {
                    that.close();
                }
            });
        }
    }

    MultipleSelect.prototype = {
        constructor: MultipleSelect,

        init: function () {
            var that = this,
                $ul = $('<ul></ul>');

            this.$drop.html('');

            if (this.options.filter) {
                this.$drop.append([
                    '<div class="ms-search">',
                    '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">',
                    '</div>'].join('')
                );
            }

            if (this.options.selectAll && !this.options.single) {
                $ul.append([
                    '<li class="ms-select-all">',
                    '<label>',
                    sprintf('<input type="checkbox" %s/> ', this.selectAllName),
                    this.options.selectAllDelimiter[0],
                    this.options.selectAllText,
                    this.options.selectAllDelimiter[1],
                    '</label>',
                    '</li>'
                ].join(''));
            }

            $.each(this.$el.children(), function (i, elm) {
                $ul.append(that.optionToHtml(i, elm));
            });
            $ul.append(sprintf('<li class="ms-no-results">%s</li>', this.options.noMatchesFound));
            this.$drop.append($ul);

            this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
            this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');

            this.$searchInput = this.$drop.find('.ms-search input');
            this.$selectAll = this.$drop.find('input[' + this.selectAllName + ']');
            this.$selectGroups = this.$drop.find('input[' + this.selectGroupName + ']');
            this.$selectItems = this.$drop.find('input[' + this.selectItemName + ']:enabled');
            this.$disableItems = this.$drop.find('input[' + this.selectItemName + ']:disabled');
            this.$noResults = this.$drop.find('.ms-no-results');

            this.events();
            this.updateSelectAll(true);
            this.update(true);

            if (this.options.isOpen) {
                this.open();
            }
        },

        optionToHtml: function (i, elm, group, groupDisabled) {
            var that = this,
                $elm = $(elm),
                classes = $elm.attr('class') || 'option_pad',
                title = sprintf('title="%s"', $elm.attr('title')),
                multiple = this.options.multiple ? 'multiple' : '',
                disabled,
                type = this.options.single ? 'radio' : 'checkbox';

            if ($elm.is('option')) {
                var value = $elm.val(),
                    text = that.options.textTemplate($elm),
                    selected = $elm.prop('selected'),
                    style = sprintf('style="%s"', this.options.styler(value)),
                    $el;

                disabled = groupDisabled || $elm.prop('disabled');

                $el = $([
                    sprintf('<li class="%s %s" %s %s>', multiple, classes, title, style),
                    sprintf('<label class="%s">', disabled ? 'disabled' : ''),
                    sprintf('<input type="%s" %s%s%s%s>',
                        type, this.selectItemName,
                        selected ? ' checked="checked"' : '',
                        disabled ? ' disabled="disabled"' : '',
                        sprintf(' data-group="%s"', group)),
                    text,
                    '</label>',
                    '</li>'
                ].join(''));
                $el.find('input').val(value);
                return $el;
            }
            if ($elm.is('optgroup')) {
                var label = that.options.labelTemplate($elm),
                    $group = $('<div/>');

                group = 'group_' + i;
                disabled = $elm.prop('disabled');

                $group.append([
                    '<li class="group">',
                    sprintf('<label class="optgroup %s" data-group="%s">', disabled ? 'disabled' : '', group),
                    this.options.hideOptgroupCheckboxes || this.options.single ? '' :
                        sprintf('<input type="checkbox" %s %s>',
                        this.selectGroupName, disabled ? 'disabled="disabled"' : ''),
                    label,
                    '</label>',
                    '</li>'
                ].join(''));

                $.each($elm.children(), function (i, elm) {
                    $group.append(that.optionToHtml(i, elm, group, disabled));
                });
                return $group.html();
            }
        },

        events: function () {
            var that = this,
                toggleOpen = function (e) {
                    e.preventDefault();
                    that[that.options.isOpen ? 'close' : 'open']();
                };

            if (this.$label) {
                this.$label.off('click').on('click', function (e) {
                    if (e.target.nodeName.toLowerCase() !== 'label' || e.target !== this) {
                        return;
                    }
                    toggleOpen(e);
                    if (!that.options.filter || !that.options.isOpen) {
                        that.focus();
                    }
                    e.stopPropagation(); // Causes lost focus otherwise
                });
            }

            this.$choice.off('click').on('click', toggleOpen)
                .off('focus').on('focus', this.options.onFocus)
                .off('blur').on('blur', this.options.onBlur);

            this.$parent.off('keydown').on('keydown', function (e) {
                switch (e.which) {
                    case 27: // esc key
                        that.close();
                        that.$choice.focus();
                        break;
                }
            });

            this.$searchInput.off('keydown').on('keydown',function (e) {
                // Ensure shift-tab causes lost focus from filter as with clicking away
                if (e.keyCode === 9 && e.shiftKey) {
                    that.close();
                }
            }).off('keyup').on('keyup', function (e) {
                // enter or space
                // Avoid selecting/deselecting if no choices made
                if (that.options.filterAcceptOnEnter && (e.which === 13 || e.which == 32) && that.$searchInput.val()) {
                    that.$selectAll.click();
                    that.close();
                    that.focus();
                    return;
                }
                that.filter();
            });

            this.$selectAll.off('click').on('click', function () {
                var checked = $(this).prop('checked'),
                    $items = that.$selectItems.filter(':visible');

                if ($items.length === that.$selectItems.length) {
                    that[checked ? 'checkAll' : 'uncheckAll']();
                } else { // when the filter option is true
                    that.$selectGroups.prop('checked', checked);
                    $items.prop('checked', checked);
                    that.options[checked ? 'onCheckAll' : 'onUncheckAll']();
                    that.update();
                }
            });
            this.$selectGroups.off('click').on('click', function () {
                var group = $(this).parent().attr('data-group'),
                    $items = that.$selectItems.filter(':visible'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group)),
                    checked = $children.length !== $children.filter(':checked').length;

                $children.prop('checked', checked);
                that.updateSelectAll();
                that.update();
                that.options.onOptgroupClick({
                    label: $(this).parent().text(),
                    checked: checked,
                    children: $children.get(),
                    instance: that
                });
            });
            this.$selectItems.off('click').on('click', function () {
                that.updateSelectAll();
                that.update();
                that.updateOptGroupSelect();
                that.options.onClick({
                    label: $(this).parent().text(),
                    value: $(this).val(),
                    checked: $(this).prop('checked'),
                    instance: that
                });

                if (that.options.single && that.options.isOpen && !that.options.keepOpen) {
                    that.close();
                }

                if (that.options.single) {
                    var clickedVal = $(this).val();
                    that.$selectItems.filter(function() {
                        return $(this).val() !== clickedVal;
                    }).each(function() {
                        $(this).prop('checked', false);
                    });
                    that.update();
                }
            });
        },

        open: function () {
            if (this.$choice.hasClass('disabled')) {
                return;
            }
            this.options.isOpen = true;
            this.$choice.find('>div').addClass('open');
            this.$drop[this.animateMethod('show')]();

            // fix filter bug: no results show
            this.$selectAll.parent().show();
            this.$noResults.hide();

            // Fix #77: 'All selected' when no options
            if (!this.$el.children().length) {
                this.$selectAll.parent().hide();
                this.$noResults.show();
            }

            if (this.options.container) {
                var offset = this.$drop.offset();
                this.$drop.appendTo($(this.options.container));
                this.$drop.offset({
                    top: offset.top,
                    left: offset.left
                });
            }

            if (this.options.filter) {
                this.$searchInput.val('');
                this.$searchInput.focus();
                this.filter();
            }
            this.options.onOpen();
        },

        close: function () {
            this.options.isOpen = false;
            this.$choice.find('>div').removeClass('open');
            this.$drop[this.animateMethod('hide')]();
            if (this.options.container) {
                this.$parent.append(this.$drop);
                this.$drop.css({
                    'top': 'auto',
                    'left': 'auto'
                });
            }
            this.options.onClose();
        },

        animateMethod: function (method) {
            var methods = {
                show: {
                    fade: 'fadeIn',
                    slide: 'slideDown'
                },
                hide: {
                    fade: 'fadeOut',
                    slide: 'slideUp'
                }
            };

            return methods[method][this.options.animate] || method;
        },

        update: function (isInit) {
            var selects = this.options.displayValues ? this.getSelects() : this.getSelects('text'),
                $span = this.$choice.find('>span'),
                sl = selects.length;

            if (sl === 0) {
                $span.addClass('placeholder').html(this.options.placeholder);
            } else if (this.options.allSelected && sl === this.$selectItems.length + this.$disableItems.length) {
                $span.removeClass('placeholder').html(this.options.allSelected);
            } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').text(selects.slice(0, this.options.minimumCountSelected)
                    .join(this.options.delimiter) + '...');
            } else if (this.options.countSelected && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').html(this.options.countSelected
                    .replace('#', selects.length)
                    .replace('%', this.$selectItems.length + this.$disableItems.length));
            } else {
                $span.removeClass('placeholder').text(selects.join(this.options.delimiter));
            }

            if (this.options.addTitle) {
                $span.prop('title', this.getSelects('text'));
            }

            // set selects to select
            this.$el.val(this.getSelects()).trigger('change');

            // add selected class to selected li
            this.$drop.find('li').removeClass('selected');
            this.$drop.find(sprintf('input[%s]:checked', this.selectItemName)).each(function () {
                $(this).parents('li').first().addClass('selected');
            });

            // trigger <select> change event
            if (!isInit) {
                this.$el.trigger('change');
            }
        },

        updateSelectAll: function (isInit) {
            var $items = this.$selectItems;

            if (!isInit) {
                $items = $items.filter(':visible');
            }
            this.$selectAll.prop('checked', $items.length &&
                $items.length === $items.filter(':checked').length);
            if (!isInit && this.$selectAll.prop('checked')) {
                this.options.onCheckAll();
            }
        },

        updateOptGroupSelect: function () {
            var $items = this.$selectItems.filter(':visible');
            $.each(this.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group));
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });
        },

        //value or text, default: 'value'
        getSelects: function (type) {
            var that = this,
                texts = [],
                values = [];
            this.$drop.find(sprintf('input[%s]:checked', this.selectItemName)).each(function () {
                texts.push($(this).parents('li').first().text());
                values.push($(this).val());
            });

            if (type === 'text' && this.$selectGroups.length) {
                texts = [];
                this.$selectGroups.each(function () {
                    var html = [],
                        text = $.trim($(this).parent().text()),
                        group = $(this).parent().data('group'),
                        $children = that.$drop.find(sprintf('[%s][data-group="%s"]', that.selectItemName, group)),
                        $selected = $children.filter(':checked');

                    if (!$selected.length) {
                        return;
                    }

                    html.push('[');
                    html.push(text);
                    if ($children.length > $selected.length) {
                        var list = [];
                        $selected.each(function () {
                            list.push($(this).parent().text());
                        });
                        html.push(': ' + list.join(', '));
                    }
                    html.push(']');
                    texts.push(html.join(''));
                });
            }
            return type === 'text' ? texts : values;
        },

        setSelects: function (values) {
            var that = this;
            this.$selectItems.prop('checked', false);
            $.each(values, function (i, value) {
                that.$selectItems.filter(sprintf('[value="%s"]', value)).prop('checked', true);
            });
            this.$selectAll.prop('checked', this.$selectItems.length ===
                this.$selectItems.filter(':checked').length);

            $.each(that.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = that.$selectItems.filter('[data-group="' + group + '"]');
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });

            this.update();
        },

        enable: function () {
            this.$choice.removeClass('disabled');
        },

        disable: function () {
            this.$choice.addClass('disabled');
        },

        checkAll: function () {
            this.$selectItems.prop('checked', true);
            this.$selectGroups.prop('checked', true);
            this.$selectAll.prop('checked', true);
            this.update();
            this.options.onCheckAll();
        },

        uncheckAll: function () {
            this.$selectItems.prop('checked', false);
            this.$selectGroups.prop('checked', false);
            this.$selectAll.prop('checked', false);
            this.update();
            this.options.onUncheckAll();
        },

        focus: function () {
            this.$choice.focus();
            this.options.onFocus();
        },

        blur: function () {
            this.$choice.blur();
            this.options.onBlur();
        },

        refresh: function () {
            this.init();
        },

        filter: function () {
            var that = this,
                text = $.trim(this.$searchInput.val()).toLowerCase();

            if (text.length === 0) {
                this.$selectAll.parent().show();
                this.$selectItems.parent().show();
                this.$disableItems.parent().show();
                this.$selectGroups.parent().show();
                this.$noResults.hide();
            } else {
                this.$selectItems.each(function () {
                    var $parent = $(this).parent();
                    $parent[$parent.text().toLowerCase().indexOf(text) < 0 ? 'hide' : 'show']();
                });
                this.$disableItems.parent().hide();
                this.$selectGroups.each(function () {
                    var $parent = $(this).parent();
                    var group = $parent.attr('data-group'),
                        $items = that.$selectItems.filter(':visible');
                    $parent[$items.filter(sprintf('[data-group="%s"]', group)).length ? 'show' : 'hide']();
                });

                //Check if no matches found
                if (this.$selectItems.parent().filter(':visible').length) {
                    this.$selectAll.parent().show();
                    this.$noResults.hide();
                } else {
                    this.$selectAll.parent().hide();
                    this.$noResults.show();
                }
            }
            this.updateOptGroupSelect();
            this.updateSelectAll();
            this.options.onFilter(text);
        }
    };

    $.fn.multipleSelect = function () {
        var option = arguments[0],
            args = arguments,

            value,
            allowedMethods = [
                'getSelects', 'setSelects',
                'enable', 'disable',
                'open', 'close',
                'checkAll', 'uncheckAll',
                'focus', 'blur',
                'refresh', 'close'
            ];

        this.each(function () {
            var $this = $(this),
                data = $this.data('multipleSelect'),
                options = $.extend({}, $.fn.multipleSelect.defaults,
                    $this.data(), typeof option === 'object' && option);

            if (!data) {
                data = new MultipleSelect($this, options);
                $this.data('multipleSelect', data);
            }

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw 'Unknown method: ' + option;
                }
                value = data[option](args[1]);
            } else {
                data.init();
                if (args[1]) {
                    value = data[args[1]].apply(data, [].slice.call(args, 2));
                }
            }
        });

        return typeof value !== 'undefined' ? value : this;
    };

    $.fn.multipleSelect.defaults = {
        name: '',
        isOpen: false,
        placeholder: '',
        selectAll: true,
        selectAllDelimiter: ['[', ']'],
        minimumCountSelected: 3,
        ellipsis: false,
        multiple: false,
        multipleWidth: 80,
        single: false,
        filter: false,
        width: undefined,
        dropWidth: undefined,
        maxHeight: 250,
        container: null,
        position: 'bottom',
        keepOpen: false,
        animate: 'none', // 'none', 'fade', 'slide'
        displayValues: false,
        delimiter: ', ',
        addTitle: false,
        filterAcceptOnEnter: false,
        hideOptgroupCheckboxes: false,

        selectAllText: 'Select all',
        allSelected: 'All selected',
        countSelected: '# of % selected',
        noMatchesFound: 'No matches found',

        styler: function () {
            return false;
        },
        textTemplate: function ($elm) {
            return $elm.text();
        },
        labelTemplate: function ($elm) {
            return $elm.attr('label');
        },

        onOpen: function () {
            return false;
        },
        onClose: function () {
            return false;
        },
        onCheckAll: function () {
            return false;
        },
        onUncheckAll: function () {
            return false;
        },
        onFocus: function () {
            return false;
        },
        onBlur: function () {
            return false;
        },
        onOptgroupClick: function () {
            return false;
        },
        onClick: function () {
            return false;
        },
        onFilter: function () {
            return false;
        }
    };
})(jQuery),

/* Chosen v1.4.2 | (c) 2011-2015 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),title:a.title?a.title:void 0,children:0,disabled:a.disabled,classes:a.className}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,title:a.title?a.title:void 0,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,group_label:null!=b?this.parsed[b].label:null,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.choice_label=function(a){return this.include_group_label_in_selected&&null!=a.group_label?"<b class='group-name'>"+a.group_label+"</b>"+a.html:a.html},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(c)));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):"":""},AbstractChosen.prototype.result_add_group=function(a){var b,c;return a.search_match||a.group_match?a.active_options>0?(b=[],b.push("group-result"),a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l;for(this.no_results_clear(),d=0,f=this.get_search_text(),a=f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(a,"i"),c=this.get_search_regex(a),l=this.results_data,j=0,k=l.length;k>j;j++)b=l[j],b.search_match=!1,e=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(e=this.results_data[b.group_array_index],0===e.active_options&&e.search_match&&(d+=1),e.active_options+=1),b.search_text=b.group?b.label:b.html,(!b.group||this.group_search)&&(b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(d+=1),b.search_match?(f.length&&(g=b.search_text.search(i),h=b.search_text.substr(0,g+f.length)+"</em>"+b.search_text.substr(g+f.length),b.search_text=h.substr(0,g)+"<em>"+h.substr(g)),null!=e&&(e.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>d&&f.length?(this.update_results_content(""),this.no_results(f)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.get_search_regex=function(a){var b;return b=this.search_contains?"":"^",new RegExp(b+a,"i")},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d instanceof Chosen?d.destroy():d instanceof Chosen||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},Chosen.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("touchstart.chosen",function(b){return a.container_mousedown(b),b.preventDefault()}),this.container.bind("touchend.chosen",function(b){return a.container_mouseup(b),b.preventDefault()}),this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=a.originalEvent.deltaY||-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+this.choice_label(b)+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(this.choice_label(c)),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,a.preventDefault(),this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:this.results_showing&&a.preventDefault();break;case 32:this.disable_search&&a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}).call(this),

    /* Dfadmin builder 
    copyright 2014 . sximo builder com 
*/
jQuery(document).ready(function($){

   $("#select_date_report").multipleSelect({
            selectAll: false
    });

   $("#select_branch_report").multipleSelect({
            selectAll: true
    });

   $("#select_branchOffice_report").multipleSelect({
            selectAll: true
    });

   $("#select_date_report_product").multipleSelect({
            selectAll: false
    });

   $("#select_date_branchOffice_report").multipleSelect({
            selectAll: false
    });

   $("#chosen-select-products").chosen({
            width: "95%"
    });

   $("#chosen-select-products_branchOffice").chosen({
            width: "95%"
    });

   $("#select_branchOffice_report_export").multipleSelect({
            selectAll: true
    });

   //$("[data-toggle='tooltip']").tooltip();

   

  //$('#myModal').modal('show');
    $('.msg').click(function(){
        $(this).remove();                        
    });

    $('input[type="file"]').change(function(){
      var f = this.files[0];  
      var name = f.name;
      
      $(this).closest('.browse-wrap').next('.upload-path').text(name);
      
    });

  // $('[data-toggle="tooltip"]').tooltip();
                                
      /*Return to top*/
      var offset = 220;
      var duration = 500;
      var button = $('<a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>');
      button.appendTo("body");
      
      jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
      });
    
      jQuery('.back-to-top').click(function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
      });

 
    $('.panel-trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.dropdown, .btn-group').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(100);
    });
    $('.dropdown, .btn-group').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(100);
    });
    $('.popup').click(function (e) {
        e.stopPropagation();
    }); 
     window.prettyPrint && prettyPrint();

    $(".checkall").click(function() {
        var cblist = $(".ids");
        if($(this).is(":checked"))
        {               
            cblist.prop("checked", !cblist.is(":checked"));
        } else {    
            cblist.removeAttr("checked");
        }   
    });
    
    $('.nav li ul li.active').parents('li').addClass('active');
    
    $('.navbar-minimalize').click(function () {
      var w = $("body");
      w.toggleClass("minimize-sidemenu");
            
        if( w.hasClass('minimize-sidemenu'))
        {
            $('#sidemenu').removeClass('expanded-menu');
      //$('.status-report-maximize').hide();
      //$('.status-report-minimize').show();
      $('.status-report-maximize').addClass('hide');
      $('.status-report-minimize').removeClass('hide');
            $.cookie("sximo-sidebar",'minimize-sidemenu', {expires: 365, path: '/'});
        } else {
      //$('.status-report-maximize').show();
      //$('.status-report-minimize').hide();
      $('.status-report-minimize').addClass('hide');
      $('.status-report-maximize').removeClass('hide');
            $('#sidemenu').addClass('expanded-menu');
             $.cookie("sximo-sidebar",'maximaze-sidemenu', {expires: 365, path: '/'});  
        }       
    })  
}),

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
    'jquery.cookie',
    'underscore.string', 
    'bootstrap', 
    'jquery-md5', 
    'json', 
    'multiple-select',
    'jquery-placeholder', 
    'jquery-noty',
    'chosen.jquery.min',
    'dfadmin',
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