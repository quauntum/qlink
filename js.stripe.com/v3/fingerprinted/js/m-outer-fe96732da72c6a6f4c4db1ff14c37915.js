! function(n) {
    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    var r = {};
    o.m = n, o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 21)
}({
    21: function(e, t, n) {
        e.exports = n("XQp5")
    },
    XQp5: function() {
        var n = "https://m.stripe.network",
            e = window.location.hash,
            t = /preview=true/.test(e) ? "inner-preview.html" : "inner.html",
            r = document.createElement("iframe");
        r.src = n + "/" + t + e;

        function o(e) {
            if (e.origin === n) {
                var t = window.opener || window.parent || window;
                if (!t) return;
                t.postMessage(e.data, "*")
            } else r.contentWindow.postMessage(e.data, "*")
        }
        window.addEventListener ? window.addEventListener("message", o, !1) : window.attachEvent("onMessage", o), document.body && document.body.appendChild(r)
    }
});