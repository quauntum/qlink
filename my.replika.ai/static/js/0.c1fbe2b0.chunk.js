/*! For license information please see 0.c1fbe2b0.chunk.js.LICENSE.txt */
(this.webpackJsonpweb = this.webpackJsonpweb || []).push([
    [0], {
        298: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(301),
                i = n(300);
            e.Factory = {
                addGetterSetter: function(t, e, n, r, i) {
                    this.addGetter(t, e, n), this.addSetter(t, e, r, i), this.addOverloadedGetterSetter(t, e)
                },
                addGetter: function(t, e, n) {
                    var i = "get" + r.Util._capitalize(e);
                    t.prototype[i] = t.prototype[i] || function() {
                        var t = this.attrs[e];
                        return void 0 === t ? n : t
                    }
                },
                addSetter: function(t, n, i, o) {
                    var a = "set" + r.Util._capitalize(n);
                    t.prototype[a] || e.Factory.overWriteSetter(t, n, i, o)
                },
                overWriteSetter: function(t, e, n, i) {
                    var o = "set" + r.Util._capitalize(e);
                    t.prototype[o] = function(t) {
                        return n && void 0 !== t && null !== t && (t = n.call(this, t, e)), this._setAttr(e, t), i && i.call(this), this
                    }
                },
                addComponentsGetterSetter: function(t, e, n, o, a) {
                    var s, l, u = n.length,
                        c = r.Util._capitalize,
                        h = "get" + c(e),
                        d = "set" + c(e);
                    t.prototype[h] = function() {
                        var t = {};
                        for (s = 0; s < u; s++) t[l = n[s]] = this.getAttr(e + c(l));
                        return t
                    };
                    var f = i.getComponentValidator(n);
                    t.prototype[d] = function(t) {
                        var n, r = this.attrs[e];
                        for (n in o && (t = o.call(this, t)), f && f.call(this, t, e), t) t.hasOwnProperty(n) && this._setAttr(e + c(n), t[n]);
                        return this._fireChangeEvent(e, r, t), a && a.call(this), this
                    }, this.addOverloadedGetterSetter(t, e)
                },
                addOverloadedGetterSetter: function(t, e) {
                    var n = r.Util._capitalize(e),
                        i = "set" + n,
                        o = "get" + n;
                    t.prototype[e] = function() {
                        return arguments.length ? (this[i](arguments[0]), this) : this[o]()
                    }
                },
                addDeprecatedGetterSetter: function(t, e, n, i) {
                    r.Util.error("Adding deprecated " + e);
                    var o = "get" + r.Util._capitalize(e),
                        a = e + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
                    t.prototype[o] = function() {
                        r.Util.error(a);
                        var t = this.attrs[e];
                        return void 0 === t ? n : t
                    }, this.addSetter(t, e, i, (function() {
                        r.Util.error(a)
                    })), this.addOverloadedGetterSetter(t, e)
                },
                backCompat: function(t, e) {
                    r.Util.each(e, (function(e, n) {
                        var i = t.prototype[n],
                            o = "get" + r.Util._capitalize(e),
                            a = "set" + r.Util._capitalize(e);

                        function s() {
                            i.apply(this, arguments), r.Util.error('"' + e + '" method is deprecated and will be removed soon. Use ""' + n + '" instead.')
                        }
                        t.prototype[e] = s, t.prototype[o] = s, t.prototype[a] = s
                    }))
                },
                afterSetFilter: function() {
                    this._filterUpToDate = !1
                }
            }
        },
        299: function(t, e, n) {
            "use strict";
            (function(t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = Math.PI / 180;
                var r = function(t) {
                    var e = t.indexOf("msie ");
                    if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                    if (t.indexOf("trident/") > 0) {
                        var n = t.indexOf("rv:");
                        return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10)
                    }
                    var r = t.indexOf("edge/");
                    return r > 0 && parseInt(t.substring(r + 5, t.indexOf(".", r)), 10)
                };
                e._parseUA = function(t) {
                    var e = t.toLowerCase(),
                        n = /(chrome)[ /]([\w.]+)/.exec(e) || /(webkit)[ /]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                        i = !!t.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
                        o = !!t.match(/IEMobile/i);
                    return {
                        browser: n[1] || "",
                        version: n[2] || "0",
                        isIE: r(e),
                        mobile: i,
                        ieMobile: o
                    }
                }, e.glob = "undefined" !== typeof t ? t : "undefined" !== typeof window ? window : "undefined" !== typeof WorkerGlobalScope ? self : {}, e.Konva = {
                    _global: e.glob,
                    version: "4.1.6",
                    isBrowser: "undefined" !== typeof window && ("[object Window]" === {}.toString.call(window) || "[object global]" === {}.toString.call(window)),
                    isUnminified: /param/.test(function(t) {}.toString()),
                    dblClickWindow: 400,
                    getAngle: function(t) {
                        return e.Konva.angleDeg ? t * n : t
                    },
                    enableTrace: !1,
                    _pointerEventsEnabled: !1,
                    hitOnDragEnabled: !1,
                    captureTouchEventsEnabled: !1,
                    listenClickTap: !1,
                    inDblClickWindow: !1,
                    pixelRatio: void 0,
                    dragDistance: 3,
                    angleDeg: !0,
                    showWarnings: !0,
                    dragButtons: [0, 1],
                    isDragging: function() {
                        return e.Konva.DD.isDragging
                    },
                    isDragReady: function() {
                        return !!e.Konva.DD.node
                    },
                    UA: e._parseUA(e.glob.navigator && e.glob.navigator.userAgent || ""),
                    document: e.glob.document,
                    _injectGlobal: function(t) {
                        e.glob.Konva = t
                    },
                    _parseUA: e._parseUA
                }, e._NODES_REGISTRY = {}, e._registerNode = function(t) {
                    e._NODES_REGISTRY[t.prototype.getClassName()] = t, e.Konva[t.prototype.getClassName()] = t
                }
            }).call(this, n(21))
        },
        300: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(299),
                i = n(301);

            function o(t) {
                return i.Util._isString(t) ? '"' + t + '"' : "[object Number]" === Object.prototype.toString.call(t) || i.Util._isBoolean(t) ? t : Object.prototype.toString.call(t)
            }
            e.RGBComponent = function(t) {
                return t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            }, e.alphaComponent = function(t) {
                return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t
            }, e.getNumberValidator = function() {
                if (r.Konva.isUnminified) return function(t, e) {
                    return i.Util._isNumber(t) || i.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t
                }
            }, e.getNumberOrAutoValidator = function() {
                if (r.Konva.isUnminified) return function(t, e) {
                    return i.Util._isNumber(t) || "auto" === t || i.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), t
                }
            }, e.getStringValidator = function() {
                if (r.Konva.isUnminified) return function(t, e) {
                    return i.Util._isString(t) || i.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t
                }
            }, e.getFunctionValidator = function() {
                if (r.Konva.isUnminified) return function(t, e) {
                    return i.Util._isFunction(t) || i.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), t
                }
            }, e.getNumberArrayValidator = function() {
                if (r.Konva.isUnminified) return function(t, e) {
                    return i.Util._isArray(t) ? t.forEach((function(t) {
                        i.Util._isNumber(t) || i.Util.warn('"' + e + '" attribute has non numeric element ' + t + ". Make sure that all elements are numbers.")
                    })) : i.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.'), t
                }
            }, e.getBooleanValidator = function() {
                if (r.Konva.isUnminified) return function(t, e) {
                    return !0 === t || !1 === t || i.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t
                }
            }, e.getComponentValidator = function(t) {
                if (r.Konva.isUnminified) return function(e, n) {
                    return i.Util.isObject(e) || i.Util.warn(o(e) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + t), e
                }
            }
        },
        301: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(299),
                i = function() {
                    function t() {}
                    return t.toCollection = function(e) {
                        var n, r = new t,
                            i = e.length;
                        for (n = 0; n < i; n++) r.push(e[n]);
                        return r
                    }, t._mapMethod = function(e) {
                        t.prototype[e] = function() {
                            var t, n = this.length,
                                r = [].slice.call(arguments);
                            for (t = 0; t < n; t++) this[t][e].apply(this[t], r);
                            return this
                        }
                    }, t.mapMethods = function(e) {
                        var n = e.prototype;
                        for (var r in n) t._mapMethod(r)
                    }, t
                }();
            e.Collection = i, i.prototype = [], i.prototype.each = function(t) {
                for (var e = 0; e < this.length; e++) t(this[e], e)
            }, i.prototype.toArray = function() {
                var t, e = [],
                    n = this.length;
                for (t = 0; t < n; t++) e.push(this[t]);
                return e
            };
            var o = function() {
                function t(t) {
                    void 0 === t && (t = [1, 0, 0, 1, 0, 0]), this.m = t && t.slice() || [1, 0, 0, 1, 0, 0]
                }
                return t.prototype.copy = function() {
                    return new t(this.m)
                }, t.prototype.point = function(t) {
                    var e = this.m;
                    return {
                        x: e[0] * t.x + e[2] * t.y + e[4],
                        y: e[1] * t.x + e[3] * t.y + e[5]
                    }
                }, t.prototype.translate = function(t, e) {
                    return this.m[4] += this.m[0] * t + this.m[2] * e, this.m[5] += this.m[1] * t + this.m[3] * e, this
                }, t.prototype.scale = function(t, e) {
                    return this.m[0] *= t, this.m[1] *= t, this.m[2] *= e, this.m[3] *= e, this
                }, t.prototype.rotate = function(t) {
                    var e = Math.cos(t),
                        n = Math.sin(t),
                        r = this.m[0] * e + this.m[2] * n,
                        i = this.m[1] * e + this.m[3] * n,
                        o = this.m[0] * -n + this.m[2] * e,
                        a = this.m[1] * -n + this.m[3] * e;
                    return this.m[0] = r, this.m[1] = i, this.m[2] = o, this.m[3] = a, this
                }, t.prototype.getTranslation = function() {
                    return {
                        x: this.m[4],
                        y: this.m[5]
                    }
                }, t.prototype.skew = function(t, e) {
                    var n = this.m[0] + this.m[2] * e,
                        r = this.m[1] + this.m[3] * e,
                        i = this.m[2] + this.m[0] * t,
                        o = this.m[3] + this.m[1] * t;
                    return this.m[0] = n, this.m[1] = r, this.m[2] = i, this.m[3] = o, this
                }, t.prototype.multiply = function(t) {
                    var e = this.m[0] * t.m[0] + this.m[2] * t.m[1],
                        n = this.m[1] * t.m[0] + this.m[3] * t.m[1],
                        r = this.m[0] * t.m[2] + this.m[2] * t.m[3],
                        i = this.m[1] * t.m[2] + this.m[3] * t.m[3],
                        o = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
                        a = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
                    return this.m[0] = e, this.m[1] = n, this.m[2] = r, this.m[3] = i, this.m[4] = o, this.m[5] = a, this
                }, t.prototype.invert = function() {
                    var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
                        e = this.m[3] * t,
                        n = -this.m[1] * t,
                        r = -this.m[2] * t,
                        i = this.m[0] * t,
                        o = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                        a = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
                    return this.m[0] = e, this.m[1] = n, this.m[2] = r, this.m[3] = i, this.m[4] = o, this.m[5] = a, this
                }, t.prototype.getMatrix = function() {
                    return this.m
                }, t.prototype.setAbsolutePosition = function(t, e) {
                    var n = this.m[0],
                        r = this.m[1],
                        i = this.m[2],
                        o = this.m[3],
                        a = this.m[4],
                        s = (n * (e - this.m[5]) - r * (t - a)) / (n * o - r * i),
                        l = (t - a - i * s) / n;
                    return this.translate(l, s)
                }, t
            }();
            e.Transform = o;
            var a = Math.PI / 180,
                s = 180 / Math.PI,
                l = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 132, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 255, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 203],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [119, 128, 144],
                    slategrey: [119, 128, 144],
                    snow: [255, 255, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    transparent: [255, 255, 255, 0],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 5]
                },
                u = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
                c = [];
            e.Util = {
                _isElement: function(t) {
                    return !(!t || 1 != t.nodeType)
                },
                _isFunction: function(t) {
                    return !!(t && t.constructor && t.call && t.apply)
                },
                _isPlainObject: function(t) {
                    return !!t && t.constructor === Object
                },
                _isArray: function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                _isNumber: function(t) {
                    return "[object Number]" === Object.prototype.toString.call(t) && !isNaN(t) && isFinite(t)
                },
                _isString: function(t) {
                    return "[object String]" === Object.prototype.toString.call(t)
                },
                _isBoolean: function(t) {
                    return "[object Boolean]" === Object.prototype.toString.call(t)
                },
                isObject: function(t) {
                    return t instanceof Object
                },
                isValidSelector: function(t) {
                    if ("string" !== typeof t) return !1;
                    var e = t[0];
                    return "#" === e || "." === e || e === e.toUpperCase()
                },
                _sign: function(t) {
                    return 0 === t ? 0 : t > 0 ? 1 : -1
                },
                requestAnimFrame: function(t) {
                    c.push(t), 1 === c.length && requestAnimationFrame((function() {
                        var t = c;
                        c = [], t.forEach((function(t) {
                            t()
                        }))
                    }))
                },
                createCanvasElement: function() {
                    var t = document.createElement("canvas");
                    try {
                        t.style = t.style || {}
                    } catch (e) {}
                    return t
                },
                createImageElement: function() {
                    return document.createElement("img")
                },
                _isInDocument: function(t) {
                    for (; t = t.parentNode;)
                        if (t == document) return !0;
                    return !1
                },
                _simplifyArray: function(t) {
                    var n, r, i = [],
                        o = t.length,
                        a = e.Util;
                    for (n = 0; n < o; n++) r = t[n], a._isNumber(r) ? r = Math.round(1e3 * r) / 1e3 : a._isString(r) || (r = r.toString()), i.push(r);
                    return i
                },
                _urlToImage: function(t, e) {
                    var n = new r.glob.Image;
                    n.onload = function() {
                        e(n)
                    }, n.src = t
                },
                _rgbToHex: function(t, e, n) {
                    return ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1)
                },
                _hexToRgb: function(t) {
                    t = t.replace("#", "");
                    var e = parseInt(t, 16);
                    return {
                        r: e >> 16 & 255,
                        g: e >> 8 & 255,
                        b: 255 & e
                    }
                },
                getRandomColor: function() {
                    for (var t = (16777215 * Math.random() << 0).toString(16); t.length < 6;) t = "0" + t;
                    return "#" + t
                },
                get: function(t, e) {
                    return void 0 === t ? e : t
                },
                getRGB: function(t) {
                    var e;
                    return t in l ? {
                        r: (e = l[t])[0],
                        g: e[1],
                        b: e[2]
                    } : "#" === t[0] ? this._hexToRgb(t.substring(1)) : "rgb(" === t.substr(0, 4) ? (e = u.exec(t.replace(/ /g, "")), {
                        r: parseInt(e[1], 10),
                        g: parseInt(e[2], 10),
                        b: parseInt(e[3], 10)
                    }) : {
                        r: 0,
                        g: 0,
                        b: 0
                    }
                },
                colorToRGBA: function(t) {
                    return t = t || "black", e.Util._namedColorToRBA(t) || e.Util._hex3ColorToRGBA(t) || e.Util._hex6ColorToRGBA(t) || e.Util._rgbColorToRGBA(t) || e.Util._rgbaColorToRGBA(t) || e.Util._hslColorToRGBA(t)
                },
                _namedColorToRBA: function(t) {
                    var e = l[t.toLowerCase()];
                    return e ? {
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: 1
                    } : null
                },
                _rgbColorToRGBA: function(t) {
                    if (0 === t.indexOf("rgb(")) {
                        var e = (t = t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                        return {
                            r: e[0],
                            g: e[1],
                            b: e[2],
                            a: 1
                        }
                    }
                },
                _rgbaColorToRGBA: function(t) {
                    if (0 === t.indexOf("rgba(")) {
                        var e = (t = t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                        return {
                            r: e[0],
                            g: e[1],
                            b: e[2],
                            a: e[3]
                        }
                    }
                },
                _hex6ColorToRGBA: function(t) {
                    if ("#" === t[0] && 7 === t.length) return {
                        r: parseInt(t.slice(1, 3), 16),
                        g: parseInt(t.slice(3, 5), 16),
                        b: parseInt(t.slice(5, 7), 16),
                        a: 1
                    }
                },
                _hex3ColorToRGBA: function(t) {
                    if ("#" === t[0] && 4 === t.length) return {
                        r: parseInt(t[1] + t[1], 16),
                        g: parseInt(t[2] + t[2], 16),
                        b: parseInt(t[3] + t[3], 16),
                        a: 1
                    }
                },
                _hslColorToRGBA: function(t) {
                    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)) {
                        var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),
                            n = (e[0], e.slice(1)),
                            r = Number(n[0]) / 360,
                            i = Number(n[1]) / 100,
                            o = Number(n[2]) / 100,
                            a = void 0,
                            s = void 0,
                            l = void 0;
                        if (0 === i) return l = 255 * o, {
                            r: Math.round(l),
                            g: Math.round(l),
                            b: Math.round(l),
                            a: 1
                        };
                        for (var u = 2 * o - (a = o < .5 ? o * (1 + i) : o + i - o * i), c = [0, 0, 0], h = 0; h < 3; h++)(s = r + 1 / 3 * -(h - 1)) < 0 && s++, s > 1 && s--, l = 6 * s < 1 ? u + 6 * (a - u) * s : 2 * s < 1 ? a : 3 * s < 2 ? u + (a - u) * (2 / 3 - s) * 6 : u, c[h] = 255 * l;
                        return {
                            r: Math.round(c[0]),
                            g: Math.round(c[1]),
                            b: Math.round(c[2]),
                            a: 1
                        }
                    }
                },
                haveIntersection: function(t, e) {
                    return !(e.x > t.x + t.width || e.x + e.width < t.x || e.y > t.y + t.height || e.y + e.height < t.y)
                },
                cloneObject: function(t) {
                    var e = {};
                    for (var n in t) this._isPlainObject(t[n]) ? e[n] = this.cloneObject(t[n]) : this._isArray(t[n]) ? e[n] = this.cloneArray(t[n]) : e[n] = t[n];
                    return e
                },
                cloneArray: function(t) {
                    return t.slice(0)
                },
                _degToRad: function(t) {
                    return t * a
                },
                _radToDeg: function(t) {
                    return t * s
                },
                _capitalize: function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                throw: function(t) {
                    throw new Error("Konva error: " + t)
                },
                error: function(t) {
                    console.error("Konva error: " + t)
                },
                warn: function(t) {
                    r.Konva.showWarnings && console.warn("Konva warning: " + t)
                },
                extend: function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    n.prototype = e.prototype;
                    var r = t.prototype;
                    for (var i in t.prototype = new n, r) r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
                    t.__super__ = e.prototype, t.super = e
                },
                _getControlPoints: function(t, e, n, r, i, o, a) {
                    var s = Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - e, 2)),
                        l = Math.sqrt(Math.pow(i - n, 2) + Math.pow(o - r, 2)),
                        u = a * s / (s + l),
                        c = a * l / (s + l);
                    return [n - u * (i - t), r - u * (o - e), n + c * (i - t), r + c * (o - e)]
                },
                _expandPoints: function(t, n) {
                    var r, i, o = t.length,
                        a = [];
                    for (r = 2; r < o - 2; r += 2) i = e.Util._getControlPoints(t[r - 2], t[r - 1], t[r], t[r + 1], t[r + 2], t[r + 3], n), a.push(i[0]), a.push(i[1]), a.push(t[r]), a.push(t[r + 1]), a.push(i[2]), a.push(i[3]);
                    return a
                },
                each: function(t, e) {
                    for (var n in t) e(n, t[n])
                },
                _inRange: function(t, e, n) {
                    return e <= t && t < n
                },
                _getProjectionToSegment: function(t, e, n, r, i, o) {
                    var a, s, l, u = (t - n) * (t - n) + (e - r) * (e - r);
                    if (0 == u) a = t, s = e, l = (i - n) * (i - n) + (o - r) * (o - r);
                    else {
                        var c = ((i - t) * (n - t) + (o - e) * (r - e)) / u;
                        c < 0 ? (a = t, s = e, l = (t - i) * (t - i) + (e - o) * (e - o)) : c > 1 ? (a = n, s = r, l = (n - i) * (n - i) + (r - o) * (r - o)) : l = ((a = t + c * (n - t)) - i) * (a - i) + ((s = e + c * (r - e)) - o) * (s - o)
                    }
                    return [a, s, l]
                },
                _getProjectionToLine: function(t, n, r) {
                    var i = e.Util.cloneObject(t),
                        o = Number.MAX_VALUE;
                    return n.forEach((function(a, s) {
                        if (r || s !== n.length - 1) {
                            var l = n[(s + 1) % n.length],
                                u = e.Util._getProjectionToSegment(a.x, a.y, l.x, l.y, t.x, t.y),
                                c = u[0],
                                h = u[1],
                                d = u[2];
                            d < o && (i.x = c, i.y = h, o = d)
                        }
                    })), i
                },
                _prepareArrayForTween: function(t, n, r) {
                    var i, o = [],
                        a = [];
                    if (t.length > n.length) {
                        var s = n;
                        n = t, t = s
                    }
                    for (i = 0; i < t.length; i += 2) o.push({
                        x: t[i],
                        y: t[i + 1]
                    });
                    for (i = 0; i < n.length; i += 2) a.push({
                        x: n[i],
                        y: n[i + 1]
                    });
                    var l = [];
                    return a.forEach((function(t) {
                        var n = e.Util._getProjectionToLine(t, o, r);
                        l.push(n.x), l.push(n.y)
                    })), l
                },
                _prepareToStringify: function(t) {
                    var n;
                    for (var r in t.visitedByCircularReferenceRemoval = !0, t)
                        if (t.hasOwnProperty(r) && t[r] && "object" == typeof t[r])
                            if (n = Object.getOwnPropertyDescriptor(t, r), t[r].visitedByCircularReferenceRemoval || e.Util._isElement(t[r])) {
                                if (!n.configurable) return null;
                                delete t[r]
                            } else if (null === e.Util._prepareToStringify(t[r])) {
                        if (!n.configurable) return null;
                        delete t[r]
                    }
                    return delete t.visitedByCircularReferenceRemoval, t
                },
                _assign: function(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                },
                _getFirstPointerId: function(t) {
                    return t.touches ? t.changedTouches[0].identifier : 999
                }
            }
        },
        302: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(301),
                i = n(298),
                o = n(348),
                a = n(299),
                s = n(360),
                l = n(300);
            e.ids = {}, e.names = {};
            e._removeId = function(t, n) {
                t && e.ids[t] === n && delete e.ids[t]
            }, e._addName = function(t, n) {
                n && (e.names[n] || (e.names[n] = []), e.names[n].push(t))
            }, e._removeName = function(t, n) {
                if (t) {
                    var r = e.names[t];
                    if (r) {
                        for (var i = 0; i < r.length; i++) {
                            r[i]._id === n && r.splice(i, 1)
                        }
                        0 === r.length && delete e.names[t]
                    }
                }
            };
            var u = ["xChange.konva", "yChange.konva", "scaleXChange.konva", "scaleYChange.konva", "skewXChange.konva", "skewYChange.konva", "rotationChange.konva", "offsetXChange.konva", "offsetYChange.konva", "transformsEnabledChange.konva"].join(" "),
                c = ["scaleXChange.konva", "scaleYChange.konva"].join(" "),
                h = new r.Collection,
                d = 1,
                f = function() {
                    function t(t) {
                        var e = this;
                        this._id = d++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this.parent = null, this._cache = new Map, this._lastPos = null, this._filterUpToDate = !1, this._isUnderCache = !1, this.children = h, this._dragEventId = null, this.setAttrs(t), this.on(u, (function() {
                            e._clearCache("transform"), e._clearSelfAndDescendantCache("absoluteTransform")
                        })), this.on(c, (function() {
                            e._clearSelfAndDescendantCache("absoluteScale")
                        })), this.on("visibleChange.konva", (function() {
                            e._clearSelfAndDescendantCache("visible")
                        })), this.on("listeningChange.konva", (function() {
                            e._clearSelfAndDescendantCache("listening")
                        })), this.on("opacityChange.konva", (function() {
                            e._clearSelfAndDescendantCache("absoluteOpacity")
                        }))
                    }
                    return t.prototype.hasChildren = function() {
                        return !1
                    }, t.prototype.getChildren = function() {
                        return h
                    }, t.prototype._clearCache = function(t) {
                        t ? this._cache.delete(t) : this._cache.clear()
                    }, t.prototype._getCache = function(t, e) {
                        var n = this._cache.get(t);
                        return void 0 === n && (n = e.call(this), this._cache.set(t, n)), n
                    }, t.prototype._getCanvasCache = function() {
                        return this._cache.get("canvas")
                    }, t.prototype._clearSelfAndDescendantCache = function(t) {
                        this._clearCache(t), this.isCached() || this.children && this.children.each((function(e) {
                            e._clearSelfAndDescendantCache(t)
                        }))
                    }, t.prototype.clearCache = function() {
                        return this._cache.delete("canvas"), this._clearSelfAndDescendantCache(), this
                    }, t.prototype.cache = function(t) {
                        var e = t || {},
                            n = {};
                        void 0 !== e.x && void 0 !== e.y && void 0 !== e.width && void 0 !== e.height || (n = this.getClientRect({
                            skipTransform: !0,
                            relativeTo: this.getParent()
                        }));
                        var i = Math.ceil(e.width || n.width),
                            a = Math.ceil(e.height || n.height),
                            s = e.pixelRatio,
                            l = void 0 === e.x ? n.x : e.x,
                            u = void 0 === e.y ? n.y : e.y,
                            c = e.offset || 0,
                            h = e.drawBorder || !1;
                        if (i && a) {
                            i += 2 * c, a += 2 * c, l -= c, u -= c;
                            var d = new o.SceneCanvas({
                                    pixelRatio: s,
                                    width: i,
                                    height: a
                                }),
                                f = new o.SceneCanvas({
                                    pixelRatio: s,
                                    width: i,
                                    height: a
                                }),
                                p = new o.HitCanvas({
                                    pixelRatio: 1,
                                    width: i,
                                    height: a
                                }),
                                g = d.getContext(),
                                y = p.getContext();
                            return p.isCache = !0, this._cache.delete("canvas"), this._filterUpToDate = !1, !1 === e.imageSmoothingEnabled && (d.getContext()._context.imageSmoothingEnabled = !1, f.getContext()._context.imageSmoothingEnabled = !1, p.getContext()._context.imageSmoothingEnabled = !1), g.save(), y.save(), g.translate(-l, -u), y.translate(-l, -u), this._isUnderCache = !0, this._clearSelfAndDescendantCache("absoluteOpacity"), this._clearSelfAndDescendantCache("absoluteScale"), this.drawScene(d, this, !0), this.drawHit(p, this, !0), this._isUnderCache = !1, g.restore(), y.restore(), h && (g.save(), g.beginPath(), g.rect(0, 0, i, a), g.closePath(), g.setAttr("strokeStyle", "red"), g.setAttr("lineWidth", 5), g.stroke(), g.restore()), this._cache.set("canvas", {
                                scene: d,
                                filter: f,
                                hit: p,
                                x: l,
                                y: u
                            }), this
                        }
                        r.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.")
                    }, t.prototype.isCached = function() {
                        return this._cache.has("canvas")
                    }, t.prototype.getClientRect = function(t) {
                        throw new Error('abstract "getClientRect" method call')
                    }, t.prototype._transformedRect = function(t, e) {
                        var n, r, i, o, a = [{
                                x: t.x,
                                y: t.y
                            }, {
                                x: t.x + t.width,
                                y: t.y
                            }, {
                                x: t.x + t.width,
                                y: t.y + t.height
                            }, {
                                x: t.x,
                                y: t.y + t.height
                            }],
                            s = this.getAbsoluteTransform(e);
                        return a.forEach((function(t) {
                            var e = s.point(t);
                            void 0 === n && (n = i = e.x, r = o = e.y), n = Math.min(n, e.x), r = Math.min(r, e.y), i = Math.max(i, e.x), o = Math.max(o, e.y)
                        })), {
                            x: n,
                            y: r,
                            width: i - n,
                            height: o - r
                        }
                    }, t.prototype._drawCachedSceneCanvas = function(t) {
                        t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
                        var e = this._getCanvasCache();
                        t.translate(e.x, e.y);
                        var n = this._getCachedSceneCanvas(),
                            r = n.pixelRatio;
                        t.drawImage(n._canvas, 0, 0, n.width / r, n.height / r), t.restore()
                    }, t.prototype._drawCachedHitCanvas = function(t) {
                        var e = this._getCanvasCache(),
                            n = e.hit;
                        t.save(), t.translate(e.x, e.y), t.drawImage(n._canvas, 0, 0), t.restore()
                    }, t.prototype._getCachedSceneCanvas = function() {
                        var t, e, n, i, o = this.filters(),
                            a = this._getCanvasCache(),
                            s = a.scene,
                            l = a.filter,
                            u = l.getContext();
                        if (o) {
                            if (!this._filterUpToDate) {
                                var c = s.pixelRatio;
                                try {
                                    for (t = o.length, u.clear(), u.drawImage(s._canvas, 0, 0, s.getWidth() / c, s.getHeight() / c), e = u.getImageData(0, 0, l.getWidth(), l.getHeight()), n = 0; n < t; n++) "function" === typeof(i = o[n]) ? (i.call(this, e), u.putImageData(e, 0, 0)) : r.Util.error("Filter should be type of function, but got " + typeof i + " instead. Please check correct filters")
                                } catch (h) {
                                    r.Util.error("Unable to apply filter. " + h.message + ". This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.")
                                }
                                this._filterUpToDate = !0
                            }
                            return l
                        }
                        return s
                    }, t.prototype.on = function(t, e) {
                        if (3 === arguments.length) return this._delegate.apply(this, arguments);
                        var n, r, i, o, a = t.split(" "),
                            s = a.length;
                        for (n = 0; n < s; n++) i = (r = a[n].split("."))[0], o = r[1] || "", this.eventListeners[i] || (this.eventListeners[i] = []), this.eventListeners[i].push({
                            name: o,
                            handler: e
                        });
                        return this
                    }, t.prototype.off = function(t, e) {
                        var n, r, i, o, a, s = (t || "").split(" "),
                            l = s.length;
                        if (!t)
                            for (r in this.eventListeners) this._off(r);
                        for (n = 0; n < l; n++)
                            if (o = (i = s[n].split("."))[0], a = i[1], o) this.eventListeners[o] && this._off(o, a, e);
                            else
                                for (r in this.eventListeners) this._off(r, a, e);
                        return this
                    }, t.prototype.dispatchEvent = function(t) {
                        var e = {
                            target: this,
                            type: t.type,
                            evt: t
                        };
                        return this.fire(t.type, e), this
                    }, t.prototype.addEventListener = function(t, e) {
                        return this.on(t, (function(t) {
                            e.call(this, t.evt)
                        })), this
                    }, t.prototype.removeEventListener = function(t) {
                        return this.off(t), this
                    }, t.prototype._delegate = function(t, e, n) {
                        var i = this;
                        this.on(t, (function(t) {
                            for (var o = t.target.findAncestors(e, !0, i), a = 0; a < o.length; a++)(t = r.Util.cloneObject(t)).currentTarget = o[a], n.call(o[a], t)
                        }))
                    }, t.prototype.remove = function() {
                        return this.isDragging() && this.stopDrag(), s.DD._dragElements.delete(this._id), this._remove(), this
                    }, t.prototype._clearCaches = function() {
                        this._clearSelfAndDescendantCache("absoluteTransform"), this._clearSelfAndDescendantCache("absoluteOpacity"), this._clearSelfAndDescendantCache("absoluteScale"), this._clearSelfAndDescendantCache("stage"), this._clearSelfAndDescendantCache("visible"), this._clearSelfAndDescendantCache("listening")
                    }, t.prototype._remove = function() {
                        this._clearCaches();
                        var t = this.getParent();
                        t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null)
                    }, t.prototype.destroy = function() {
                        e._removeId(this.id(), this);
                        for (var t = (this.name() || "").split(/\s/g), n = 0; n < t.length; n++) {
                            var r = t[n];
                            e._removeName(r, this._id)
                        }
                        return this.remove(), this
                    }, t.prototype.getAttr = function(t) {
                        var e = "get" + r.Util._capitalize(t);
                        return r.Util._isFunction(this[e]) ? this[e]() : this.attrs[t]
                    }, t.prototype.getAncestors = function() {
                        for (var t = this.getParent(), e = new r.Collection; t;) e.push(t), t = t.getParent();
                        return e
                    }, t.prototype.getAttrs = function() {
                        return this.attrs || {}
                    }, t.prototype.setAttrs = function(t) {
                        var e, n;
                        if (!t) return this;
                        for (e in t) "children" !== e && (n = "set" + r.Util._capitalize(e), r.Util._isFunction(this[n]) ? this[n](t[e]) : this._setAttr(e, t[e]));
                        return this
                    }, t.prototype.isListening = function() {
                        return this._getCache("listening", this._isListening)
                    }, t.prototype._isListening = function() {
                        var t = this.listening(),
                            e = this.getParent();
                        return "inherit" === t ? !e || e.isListening() : t
                    }, t.prototype.isVisible = function() {
                        return this._getCache("visible", this._isVisible)
                    }, t.prototype._isVisible = function(t) {
                        var e = this.visible(),
                            n = this.getParent();
                        return "inherit" === e ? !n || n === t || n._isVisible(t) : t && t !== n ? e && n._isVisible(t) : e
                    }, t.prototype.shouldDrawHit = function() {
                        var t = this.getLayer();
                        return !t && this.isListening() && this.isVisible() || t && t.hitGraphEnabled() && this.isListening() && this.isVisible()
                    }, t.prototype.show = function() {
                        return this.visible(!0), this
                    }, t.prototype.hide = function() {
                        return this.visible(!1), this
                    }, t.prototype.getZIndex = function() {
                        return this.index || 0
                    }, t.prototype.getAbsoluteZIndex = function() {
                        var t, e, n, r, i = this.getDepth(),
                            o = this,
                            a = 0;
                        return "Stage" !== o.nodeType && function s(l) {
                            for (t = [], e = l.length, n = 0; n < e; n++) r = l[n], a++, "Shape" !== r.nodeType && (t = t.concat(r.getChildren().toArray())), r._id === o._id && (n = e);
                            t.length > 0 && t[0].getDepth() <= i && s(t)
                        }(o.getStage().getChildren()), a
                    }, t.prototype.getDepth = function() {
                        for (var t = 0, e = this.parent; e;) t++, e = e.parent;
                        return t
                    }, t.prototype.setPosition = function(t) {
                        return this.x(t.x), this.y(t.y), this
                    }, t.prototype.getPosition = function() {
                        return {
                            x: this.x(),
                            y: this.y()
                        }
                    }, t.prototype.getAbsolutePosition = function(t) {
                        for (var e = !1, n = this.parent; n;) {
                            if (n.isCached()) {
                                e = !0;
                                break
                            }
                            n = n.parent
                        }
                        e && !t && (t = !0);
                        var i = this.getAbsoluteTransform(t).getMatrix(),
                            o = new r.Transform,
                            a = this.offset();
                        return o.m = i.slice(), o.translate(a.x, a.y), o.getTranslation()
                    }, t.prototype.setAbsolutePosition = function(t) {
                        var e, n = this._clearTransform();
                        return this.attrs.x = n.x, this.attrs.y = n.y, delete n.x, delete n.y, (e = this.getAbsoluteTransform()).invert(), e.translate(t.x, t.y), t = {
                            x: this.attrs.x + e.getTranslation().x,
                            y: this.attrs.y + e.getTranslation().y
                        }, this.setPosition({
                            x: t.x,
                            y: t.y
                        }), this._setTransform(n), this
                    }, t.prototype._setTransform = function(t) {
                        var e;
                        for (e in t) this.attrs[e] = t[e];
                        this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform")
                    }, t.prototype._clearTransform = function() {
                        var t = {
                            x: this.x(),
                            y: this.y(),
                            rotation: this.rotation(),
                            scaleX: this.scaleX(),
                            scaleY: this.scaleY(),
                            offsetX: this.offsetX(),
                            offsetY: this.offsetY(),
                            skewX: this.skewX(),
                            skewY: this.skewY()
                        };
                        return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform"), t
                    }, t.prototype.move = function(t) {
                        var e = t.x,
                            n = t.y,
                            r = this.x(),
                            i = this.y();
                        return void 0 !== e && (r += e), void 0 !== n && (i += n), this.setPosition({
                            x: r,
                            y: i
                        }), this
                    }, t.prototype._eachAncestorReverse = function(t, e) {
                        var n, r, i = [],
                            o = this.getParent();
                        if (e && e._id === this._id) t(this);
                        else {
                            for (i.unshift(this); o && (!e || o._id !== e._id);) i.unshift(o), o = o.parent;
                            for (n = i.length, r = 0; r < n; r++) t(i[r])
                        }
                    }, t.prototype.rotate = function(t) {
                        return this.rotation(this.rotation() + t), this
                    }, t.prototype.moveToTop = function() {
                        if (!this.parent) return r.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
                        var t = this.index;
                        return this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0
                    }, t.prototype.moveUp = function() {
                        if (!this.parent) return r.Util.warn("Node has no parent. moveUp function is ignored."), !1;
                        var t = this.index;
                        return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0)
                    }, t.prototype.moveDown = function() {
                        if (!this.parent) return r.Util.warn("Node has no parent. moveDown function is ignored."), !1;
                        var t = this.index;
                        return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0)
                    }, t.prototype.moveToBottom = function() {
                        if (!this.parent) return r.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
                        var t = this.index;
                        return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0)
                    }, t.prototype.setZIndex = function(t) {
                        if (!this.parent) return r.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
                        (t < 0 || t >= this.parent.children.length) && r.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
                        var e = this.index;
                        return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this
                    }, t.prototype.getAbsoluteOpacity = function() {
                        return this._getCache("absoluteOpacity", this._getAbsoluteOpacity)
                    }, t.prototype._getAbsoluteOpacity = function() {
                        var t = this.opacity(),
                            e = this.getParent();
                        return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t
                    }, t.prototype.moveTo = function(t) {
                        return this.getParent() !== t && (this._remove(), t.add(this)), this
                    }, t.prototype.toObject = function() {
                        var t, e, n, i, o = {},
                            a = this.getAttrs();
                        for (t in o.attrs = {}, a) e = a[t], r.Util.isObject(e) && !r.Util._isPlainObject(e) && !r.Util._isArray(e) || (n = "function" === typeof this[t] && this[t], delete a[t], i = n ? n.call(this) : null, a[t] = e, i !== e && (o.attrs[t] = e));
                        return o.className = this.getClassName(), r.Util._prepareToStringify(o)
                    }, t.prototype.toJSON = function() {
                        return JSON.stringify(this.toObject())
                    }, t.prototype.getParent = function() {
                        return this.parent
                    }, t.prototype.findAncestors = function(t, e, n) {
                        var r = [];
                        e && this._isMatch(t) && r.push(this);
                        for (var i = this.parent; i;) {
                            if (i === n) return r;
                            i._isMatch(t) && r.push(i), i = i.parent
                        }
                        return r
                    }, t.prototype.isAncestorOf = function(t) {
                        return !1
                    }, t.prototype.findAncestor = function(t, e, n) {
                        return this.findAncestors(t, e, n)[0]
                    }, t.prototype._isMatch = function(t) {
                        if (!t) return !1;
                        if ("function" === typeof t) return t(this);
                        var e, n, i = t.replace(/ /g, "").split(","),
                            o = i.length;
                        for (e = 0; e < o; e++)
                            if (n = i[e], r.Util.isValidSelector(n) || (r.Util.warn('Selector "' + n + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), r.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), r.Util.warn("Konva is awesome, right?")), "#" === n.charAt(0)) {
                                if (this.id() === n.slice(1)) return !0
                            } else if ("." === n.charAt(0)) {
                            if (this.hasName(n.slice(1))) return !0
                        } else if (this.className === n || this.nodeType === n) return !0;
                        return !1
                    }, t.prototype.getLayer = function() {
                        var t = this.getParent();
                        return t ? t.getLayer() : null
                    }, t.prototype.getStage = function() {
                        return this._getCache("stage", this._getStage)
                    }, t.prototype._getStage = function() {
                        var t = this.getParent();
                        return t ? t.getStage() : void 0
                    }, t.prototype.fire = function(t, e, n) {
                        return (e = e || {}).target = e.target || this, n ? this._fireAndBubble(t, e) : this._fire(t, e), this
                    }, t.prototype.getAbsoluteTransform = function(t) {
                        return t ? this._getAbsoluteTransform(t) : this._getCache("absoluteTransform", this._getAbsoluteTransform)
                    }, t.prototype._getAbsoluteTransform = function(t) {
                        var e;
                        if (t) return e = new r.Transform, this._eachAncestorReverse((function(t) {
                            var n = t.transformsEnabled();
                            "all" === n ? e.multiply(t.getTransform()) : "position" === n && e.translate(t.x() - t.offsetX(), t.y() - t.offsetY())
                        }), t), e;
                        e = this.parent ? this.parent.getAbsoluteTransform().copy() : new r.Transform;
                        var n = this.transformsEnabled();
                        return "all" === n ? e.multiply(this.getTransform()) : "position" === n && e.translate(this.x() - this.offsetX(), this.y() - this.offsetY()), e
                    }, t.prototype.getAbsoluteScale = function(t) {
                        return t ? this._getAbsoluteScale(t) : this._getCache("absoluteScale", this._getAbsoluteScale)
                    }, t.prototype._getAbsoluteScale = function(t) {
                        for (var e = this; e;) e._isUnderCache && (t = e), e = e.getParent();
                        var n = 1,
                            r = 1;
                        return this._eachAncestorReverse((function(t) {
                            n *= t.scaleX(), r *= t.scaleY()
                        }), t), {
                            x: n,
                            y: r
                        }
                    }, t.prototype.getAbsoluteRotation = function() {
                        for (var t = this, e = 0; t;) e += t.rotation(), t = t.getParent();
                        return e
                    }, t.prototype.getTransform = function() {
                        return this._getCache("transform", this._getTransform)
                    }, t.prototype._getTransform = function() {
                        var t = new r.Transform,
                            e = this.x(),
                            n = this.y(),
                            i = a.Konva.getAngle(this.rotation()),
                            o = this.scaleX(),
                            s = this.scaleY(),
                            l = this.skewX(),
                            u = this.skewY(),
                            c = this.offsetX(),
                            h = this.offsetY();
                        return 0 === e && 0 === n || t.translate(e, n), 0 !== i && t.rotate(i), 0 === l && 0 === u || t.skew(l, u), 1 === o && 1 === s || t.scale(o, s), 0 === c && 0 === h || t.translate(-1 * c, -1 * h), t
                    }, t.prototype.clone = function(t) {
                        var e, n, i, o, a, s = r.Util.cloneObject(this.attrs);
                        for (e in t) s[e] = t[e];
                        var l = new this.constructor(s);
                        for (e in this.eventListeners)
                            for (i = (n = this.eventListeners[e]).length, o = 0; o < i; o++)(a = n[o]).name.indexOf("konva") < 0 && (l.eventListeners[e] || (l.eventListeners[e] = []), l.eventListeners[e].push(a));
                        return l
                    }, t.prototype._toKonvaCanvas = function(t) {
                        t = t || {};
                        var e = this.getClientRect(),
                            n = this.getStage(),
                            r = void 0 !== t.x ? t.x : e.x,
                            i = void 0 !== t.y ? t.y : e.y,
                            a = t.pixelRatio || 1,
                            s = new o.SceneCanvas({
                                width: t.width || e.width || (n ? n.width() : 0),
                                height: t.height || e.height || (n ? n.height() : 0),
                                pixelRatio: a
                            }),
                            l = s.getContext();
                        return l.save(), (r || i) && l.translate(-1 * r, -1 * i), this.drawScene(s), l.restore(), s
                    }, t.prototype.toCanvas = function(t) {
                        return this._toKonvaCanvas(t)._canvas
                    }, t.prototype.toDataURL = function(t) {
                        var e = (t = t || {}).mimeType || null,
                            n = t.quality || null,
                            r = this._toKonvaCanvas(t).toDataURL(e, n);
                        return t.callback && t.callback(r), r
                    }, t.prototype.toImage = function(t) {
                        if (!t || !t.callback) throw "callback required for toImage method config argument";
                        var e = t.callback;
                        delete t.callback, r.Util._urlToImage(this.toDataURL(t), (function(t) {
                            e(t)
                        }))
                    }, t.prototype.setSize = function(t) {
                        return this.width(t.width), this.height(t.height), this
                    }, t.prototype.getSize = function() {
                        return {
                            width: this.width(),
                            height: this.height()
                        }
                    }, t.prototype.getClassName = function() {
                        return this.className || this.nodeType
                    }, t.prototype.getType = function() {
                        return this.nodeType
                    }, t.prototype.getDragDistance = function() {
                        return void 0 !== this.attrs.dragDistance ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : a.Konva.dragDistance
                    }, t.prototype._off = function(t, e, n) {
                        var r, i, o, a = this.eventListeners[t];
                        for (r = 0; r < a.length; r++)
                            if (i = a[r].name, o = a[r].handler, ("konva" !== i || "konva" === e) && (!e || i === e) && (!n || n === o)) {
                                if (a.splice(r, 1), 0 === a.length) {
                                    delete this.eventListeners[t];
                                    break
                                }
                                r--
                            }
                    }, t.prototype._fireChangeEvent = function(t, e, n) {
                        this._fire(t + "Change", {
                            oldVal: e,
                            newVal: n
                        })
                    }, t.prototype.setId = function(t) {
                        var n = this.id();
                        return e._removeId(n, this),
                            function(t, n) {
                                n && (e.ids[n] = t)
                            }(this, t), this._setAttr("id", t), this
                    }, t.prototype.setName = function(t) {
                        var n, r, i = (this.name() || "").split(/\s/g),
                            o = (t || "").split(/\s/g);
                        for (r = 0; r < i.length; r++) n = i[r], -1 === o.indexOf(n) && n && e._removeName(n, this._id);
                        for (r = 0; r < o.length; r++) n = o[r], -1 === i.indexOf(n) && n && e._addName(this, n);
                        return this._setAttr("name", t), this
                    }, t.prototype.addName = function(t) {
                        if (!this.hasName(t)) {
                            var e = this.name(),
                                n = e ? e + " " + t : t;
                            this.setName(n)
                        }
                        return this
                    }, t.prototype.hasName = function(t) {
                        if (!t) return !1;
                        var e = this.name();
                        return !!e && -1 !== (e || "").split(/\s/g).indexOf(t)
                    }, t.prototype.removeName = function(t) {
                        var e = (this.name() || "").split(/\s/g),
                            n = e.indexOf(t);
                        return -1 !== n && (e.splice(n, 1), this.setName(e.join(" "))), this
                    }, t.prototype.setAttr = function(t, e) {
                        var n = this["set" + r.Util._capitalize(t)];
                        return r.Util._isFunction(n) ? n.call(this, e) : this._setAttr(t, e), this
                    }, t.prototype._setAttr = function(t, e) {
                        var n = this.attrs[t];
                        (n !== e || r.Util.isObject(e)) && (void 0 === e || null === e ? delete this.attrs[t] : this.attrs[t] = e, this._fireChangeEvent(t, n, e))
                    }, t.prototype._setComponentAttr = function(t, e, n) {
                        var r;
                        void 0 !== n && ((r = this.attrs[t]) || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = n, this._fireChangeEvent(t, r, n))
                    }, t.prototype._fireAndBubble = function(t, e, n) {
                        if (e && "Shape" === this.nodeType && (e.target = this), !(("mouseenter" === t || "mouseleave" === t) && (n && (this === n || this.isAncestorOf && this.isAncestorOf(n)) || "Stage" === this.nodeType && !n))) {
                            this._fire(t, e);
                            var r = ("mouseenter" === t || "mouseleave" === t) && n && n.isAncestorOf && n.isAncestorOf(this) && !n.isAncestorOf(this.parent);
                            (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !r && (n && n.parent ? this._fireAndBubble.call(this.parent, t, e, n.parent) : this._fireAndBubble.call(this.parent, t, e))
                        }
                    }, t.prototype._fire = function(t, e) {
                        var n, r = this.eventListeners[t];
                        if (r)
                            for ((e = e || {}).currentTarget = this, e.type = t, n = 0; n < r.length; n++) r[n].handler.call(this, e)
                    }, t.prototype.draw = function() {
                        return this.drawScene(), this.drawHit(), this
                    }, t.prototype._createDragElement = function(t) {
                        var e = t ? t.pointerId : void 0,
                            n = this.getStage(),
                            r = this.getAbsolutePosition(),
                            i = n._getPointerById(e) || n._changedPointerPositions[0] || r;
                        s.DD._dragElements.set(this._id, {
                            node: this,
                            startPointerPos: i,
                            offset: {
                                x: i.x - r.x,
                                y: i.y - r.y
                            },
                            dragStatus: "ready",
                            pointerId: e
                        })
                    }, t.prototype.startDrag = function(t) {
                        s.DD._dragElements.has(this._id) || this._createDragElement(t), s.DD._dragElements.get(this._id).dragStatus = "dragging", this.fire("dragstart", {
                            type: "dragstart",
                            target: this,
                            evt: t && t.evt
                        }, !0)
                    }, t.prototype._setDragPosition = function(t, e) {
                        var n = this.getStage()._getPointerById(e.pointerId);
                        if (n) {
                            var i = {
                                    x: n.x - e.offset.x,
                                    y: n.y - e.offset.y
                                },
                                o = this.dragBoundFunc();
                            if (void 0 !== o) {
                                var a = o.call(this, i, t);
                                a ? i = a : r.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.")
                            }
                            this._lastPos && this._lastPos.x === i.x && this._lastPos.y === i.y || (this.setAbsolutePosition(i), this.getLayer() ? this.getLayer().batchDraw() : this.getStage() && this.getStage().batchDraw()), this._lastPos = i
                        }
                    }, t.prototype.stopDrag = function(t) {
                        var e = s.DD._dragElements.get(this._id);
                        e && (e.dragStatus = "stopped"), s.DD._endDragBefore(t), s.DD._endDragAfter(t)
                    }, t.prototype.setDraggable = function(t) {
                        this._setAttr("draggable", t), this._dragChange()
                    }, t.prototype.isDragging = function() {
                        var t = s.DD._dragElements.get(this._id);
                        return !!t && "dragging" === t.dragStatus
                    }, t.prototype._listenDrag = function() {
                        this._dragCleanup(), this.on("mousedown.konva touchstart.konva", (function(t) {
                            var e = this;
                            if ((!(void 0 !== t.evt.button) || a.Konva.dragButtons.indexOf(t.evt.button) >= 0) && !this.isDragging()) {
                                var n = !1;
                                s.DD._dragElements.forEach((function(t) {
                                    e.isAncestorOf(t.node) && (n = !0)
                                })), n || this._createDragElement(t)
                            }
                        }))
                    }, t.prototype._dragChange = function() {
                        this.attrs.draggable ? this._listenDrag() : (this._dragCleanup(), this.getStage() && s.DD._dragElements.has(this._id) && this.stopDrag())
                    }, t.prototype._dragCleanup = function() {
                        this.off("mousedown.konva"), this.off("touchstart.konva")
                    }, t.create = function(t, e) {
                        return r.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, e)
                    }, t._createNode = function(e, n) {
                        var i, o, s, l = t.prototype.getClassName.call(e),
                            u = e.children;
                        if (n && (e.attrs.container = n), a._NODES_REGISTRY[l] || (r.Util.warn('Can not find a node with class name "' + l + '". Fallback to "Shape".'), l = "Shape"), i = new(0, a._NODES_REGISTRY[l])(e.attrs), u)
                            for (o = u.length, s = 0; s < o; s++) i.add(t._createNode(u[s]));
                        return i
                    }, t
                }();
            e.Node = f, f.prototype.nodeType = "Node", f.prototype._attrsAffectingSize = [], i.Factory.addGetterSetter(f, "zIndex"), i.Factory.addGetterSetter(f, "absolutePosition"), i.Factory.addGetterSetter(f, "position"), i.Factory.addGetterSetter(f, "x", 0, l.getNumberValidator()), i.Factory.addGetterSetter(f, "y", 0, l.getNumberValidator()), i.Factory.addGetterSetter(f, "globalCompositeOperation", "source-over", l.getStringValidator()), i.Factory.addGetterSetter(f, "opacity", 1, l.getNumberValidator()), i.Factory.addGetterSetter(f, "name", "", l.getStringValidator()), i.Factory.addGetterSetter(f, "id", "", l.getStringValidator()), i.Factory.addGetterSetter(f, "rotation", 0, l.getNumberValidator()), i.Factory.addComponentsGetterSetter(f, "scale", ["x", "y"]), i.Factory.addGetterSetter(f, "scaleX", 1, l.getNumberValidator()), i.Factory.addGetterSetter(f, "scaleY", 1, l.getNumberValidator()), i.Factory.addComponentsGetterSetter(f, "skew", ["x", "y"]), i.Factory.addGetterSetter(f, "skewX", 0, l.getNumberValidator()), i.Factory.addGetterSetter(f, "skewY", 0, l.getNumberValidator()), i.Factory.addComponentsGetterSetter(f, "offset", ["x", "y"]), i.Factory.addGetterSetter(f, "offsetX", 0, l.getNumberValidator()), i.Factory.addGetterSetter(f, "offsetY", 0, l.getNumberValidator()), i.Factory.addGetterSetter(f, "dragDistance", null, l.getNumberValidator()), i.Factory.addGetterSetter(f, "width", 0, l.getNumberValidator()), i.Factory.addGetterSetter(f, "height", 0, l.getNumberValidator()), i.Factory.addGetterSetter(f, "listening", "inherit", (function(t) {
                return !0 === t || !1 === t || "inherit" === t || r.Util.warn(t + ' is a not valid value for "listening" attribute. The value may be true, false or "inherit".'), t
            })), i.Factory.addGetterSetter(f, "preventDefault", !0, l.getBooleanValidator()), i.Factory.addGetterSetter(f, "filters", null, (function(t) {
                return this._filterUpToDate = !1, t
            })), i.Factory.addGetterSetter(f, "visible", "inherit", (function(t) {
                return !0 === t || !1 === t || "inherit" === t || r.Util.warn(t + ' is a not valid value for "visible" attribute. The value may be true, false or "inherit".'), t
            })), i.Factory.addGetterSetter(f, "transformsEnabled", "all", l.getStringValidator()), i.Factory.addGetterSetter(f, "size"), i.Factory.addGetterSetter(f, "dragBoundFunc"), i.Factory.addGetterSetter(f, "draggable", !1, l.getBooleanValidator()), i.Factory.backCompat(f, {
                rotateDeg: "rotate",
                setRotationDeg: "setRotation",
                getRotationDeg: "getRotation"
            }), r.Collection.mapMethods(f)
        },
        303: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, o = n(301),
                a = n(298),
                s = n(302),
                l = n(300),
                u = n(299),
                c = n(422);

            function h() {
                return i || (i = o.Util.createCanvasElement().getContext("2d"))
            }

            function d() {
                this._clearCache("hasShadow")
            }

            function f() {
                this._clearCache("shadowRGBA")
            }

            function p() {
                this._clearCache("patternImage")
            }

            function g() {
                this._clearCache("linearGradient")
            }

            function y() {
                this._clearCache("radialGradient")
            }
            e.shapes = {};
            var v = function(t) {
                function n(n) {
                    for (var r, i = t.call(this, n) || this; !(r = o.Util.getRandomColor()) || r in e.shapes;);
                    return i.colorKey = r, e.shapes[r] = i, i.on("shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", d), i.on("shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", f), i.on("fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva", p), i.on("fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", g), i.on("fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", y), i
                }
                return r(n, t), n.prototype.getContext = function() {
                    return this.getLayer().getContext()
                }, n.prototype.getCanvas = function() {
                    return this.getLayer().getCanvas()
                }, n.prototype.getSceneFunc = function() {
                    return this.attrs.sceneFunc || this._sceneFunc
                }, n.prototype.getHitFunc = function() {
                    return this.attrs.hitFunc || this._hitFunc
                }, n.prototype.hasShadow = function() {
                    return this._getCache("hasShadow", this._hasShadow)
                }, n.prototype._hasShadow = function() {
                    return this.shadowEnabled() && 0 !== this.shadowOpacity() && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY())
                }, n.prototype._getFillPattern = function() {
                    return this._getCache("patternImage", this.__getFillPattern)
                }, n.prototype.__getFillPattern = function() {
                    if (this.fillPatternImage()) return h().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat")
                }, n.prototype._getLinearGradient = function() {
                    return this._getCache("linearGradient", this.__getLinearGradient)
                }, n.prototype.__getLinearGradient = function() {
                    var t = this.fillLinearGradientColorStops();
                    if (t) {
                        for (var e = h(), n = this.fillLinearGradientStartPoint(), r = this.fillLinearGradientEndPoint(), i = e.createLinearGradient(n.x, n.y, r.x, r.y), o = 0; o < t.length; o += 2) i.addColorStop(t[o], t[o + 1]);
                        return i
                    }
                }, n.prototype._getRadialGradient = function() {
                    return this._getCache("radialGradient", this.__getRadialGradient)
                }, n.prototype.__getRadialGradient = function() {
                    var t = this.fillRadialGradientColorStops();
                    if (t) {
                        for (var e = h(), n = this.fillRadialGradientStartPoint(), r = this.fillRadialGradientEndPoint(), i = e.createRadialGradient(n.x, n.y, this.fillRadialGradientStartRadius(), r.x, r.y, this.fillRadialGradientEndRadius()), o = 0; o < t.length; o += 2) i.addColorStop(t[o], t[o + 1]);
                        return i
                    }
                }, n.prototype.getShadowRGBA = function() {
                    return this._getCache("shadowRGBA", this._getShadowRGBA)
                }, n.prototype._getShadowRGBA = function() {
                    if (this.hasShadow()) {
                        var t = o.Util.colorToRGBA(this.shadowColor());
                        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a * (this.shadowOpacity() || 1) + ")"
                    }
                }, n.prototype.hasFill = function() {
                    return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops())
                }, n.prototype.hasStroke = function() {
                    return this.strokeEnabled() && this.strokeWidth() && !(!this.stroke() && !this.strokeLinearGradientColorStops())
                }, n.prototype.hasHitStroke = function() {
                    var t = this.hitStrokeWidth();
                    return this.strokeEnabled() && (t || this.strokeWidth() && "auto" === t)
                }, n.prototype.intersects = function(t) {
                    var e = this.getStage().bufferHitCanvas;
                    return e.getContext().clear(), this.drawHit(e), e.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data[3] > 0
                }, n.prototype.destroy = function() {
                    return s.Node.prototype.destroy.call(this), delete e.shapes[this.colorKey], delete this.colorKey, this
                }, n.prototype._useBufferCanvas = function(t) {
                    return !(t && !this.hasShadow() || !this.perfectDrawEnabled() || 1 === this.getAbsoluteOpacity() || !this.hasFill() || !this.hasStroke() || !this.getStage())
                }, n.prototype.setStrokeHitEnabled = function(t) {
                    t ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0)
                }, n.prototype.getStrokeHitEnabled = function() {
                    return 0 !== this.hitStrokeWidth()
                }, n.prototype.getSelfRect = function() {
                    var t = this.size();
                    return {
                        x: this._centroid ? Math.round(-t.width / 2) : 0,
                        y: this._centroid ? Math.round(-t.height / 2) : 0,
                        width: t.width,
                        height: t.height
                    }
                }, n.prototype.getClientRect = function(t) {
                    var e = (t = t || {}).skipTransform,
                        n = t.relativeTo,
                        r = this.getSelfRect(),
                        i = !t.skipStroke && this.hasStroke() && this.strokeWidth() || 0,
                        o = r.width + i,
                        a = r.height + i,
                        s = !t.skipShadow && this.hasShadow(),
                        l = s ? this.shadowOffsetX() : 0,
                        u = s ? this.shadowOffsetY() : 0,
                        c = o + Math.abs(l),
                        h = a + Math.abs(u),
                        d = s && this.shadowBlur() || 0,
                        f = c + 2 * d,
                        p = h + 2 * d,
                        g = 0;
                    Math.round(i / 2) !== i / 2 && (g = 1);
                    var y = {
                        width: f + g,
                        height: p + g,
                        x: -Math.round(i / 2 + d) + Math.min(l, 0) + r.x,
                        y: -Math.round(i / 2 + d) + Math.min(u, 0) + r.y
                    };
                    return e ? y : this._transformedRect(y, n)
                }, n.prototype.drawScene = function(t, e, n, r) {
                    var i, o, a = this.getLayer(),
                        s = t || a.getCanvas(),
                        l = s.getContext(),
                        u = this._getCanvasCache(),
                        c = this.sceneFunc(),
                        h = this.hasShadow(),
                        d = this.hasStroke();
                    if (!this.isVisible() && !n) return this;
                    if (u) return l.save(), a._applyTransform(this, l, e), this._drawCachedSceneCanvas(l), l.restore(), this;
                    if (!c) return this;
                    if (l.save(), this._useBufferCanvas(n) && !r) {
                        if ((o = (i = this.getStage().bufferCanvas).getContext()).clear(), o.save(), o._applyLineJoin(this), !n)
                            if (a) a._applyTransform(this, o, e);
                            else {
                                var f = this.getAbsoluteTransform(e).getMatrix();
                                l.transform(f[0], f[1], f[2], f[3], f[4], f[5])
                            }
                        c.call(this, o, this), o.restore();
                        var p = i.pixelRatio;
                        h && !s.hitCanvas ? (l.save(), l._applyShadow(this), l._applyOpacity(this), l._applyGlobalCompositeOperation(this), l.drawImage(i._canvas, 0, 0, i.width / p, i.height / p), l.restore()) : (l._applyOpacity(this), l._applyGlobalCompositeOperation(this), l.drawImage(i._canvas, 0, 0, i.width / p, i.height / p))
                    } else {
                        if (l._applyLineJoin(this), !n)
                            if (a) a._applyTransform(this, l, e);
                            else {
                                var g = this.getAbsoluteTransform(e).getMatrix();
                                l.transform(g[0], g[1], g[2], g[3], g[4], g[5])
                            }
                        h && d && !s.hitCanvas ? (l.save(), n || (l._applyOpacity(this), l._applyGlobalCompositeOperation(this)), l._applyShadow(this), c.call(this, l, this), l.restore(), this.hasFill() && this.shadowForStrokeEnabled() && c.call(this, l, this)) : h && !s.hitCanvas ? (l.save(), n || (l._applyOpacity(this), l._applyGlobalCompositeOperation(this)), l._applyShadow(this), c.call(this, l, this), l.restore()) : (n || (l._applyOpacity(this), l._applyGlobalCompositeOperation(this)), c.call(this, l, this))
                    }
                    return l.restore(), this
                }, n.prototype.drawHit = function(t, e, n) {
                    var r = this.getLayer(),
                        i = t || r.hitCanvas,
                        a = i && i.getContext(),
                        s = this.hitFunc() || this.sceneFunc(),
                        l = this._getCanvasCache(),
                        u = l && l.hit;
                    if (this.colorKey || (console.log(this), o.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. See the shape in logs above. If you want to reuse shape you should call remove() instead of destroy()")), !this.shouldDrawHit() && !n) return this;
                    if (u) return a.save(), r._applyTransform(this, a, e), this._drawCachedHitCanvas(a), a.restore(), this;
                    if (!s) return this;
                    if (a.save(), a._applyLineJoin(this), !n)
                        if (r) r._applyTransform(this, a, e);
                        else {
                            var c = this.getAbsoluteTransform(e).getMatrix();
                            a.transform(c[0], c[1], c[2], c[3], c[4], c[5])
                        }
                    return s.call(this, a, this), a.restore(), this
                }, n.prototype.drawHitFromCache = function(t) {
                    void 0 === t && (t = 0);
                    var e, n, r, i, a, s = this._getCanvasCache(),
                        l = this._getCachedSceneCanvas(),
                        u = s.hit,
                        c = u.getContext(),
                        h = u.getWidth(),
                        d = u.getHeight();
                    c.clear(), c.drawImage(l._canvas, 0, 0, h, d);
                    try {
                        for (r = (n = (e = c.getImageData(0, 0, h, d)).data).length, i = o.Util._hexToRgb(this.colorKey), a = 0; a < r; a += 4) n[a + 3] > t ? (n[a] = i.r, n[a + 1] = i.g, n[a + 2] = i.b, n[a + 3] = 255) : n[a + 3] = 0;
                        c.putImageData(e, 0, 0)
                    } catch (f) {
                        o.Util.error("Unable to draw hit graph from cached scene canvas. " + f.message)
                    }
                    return this
                }, n.prototype.hasPointerCapture = function(t) {
                    return c.hasPointerCapture(t, this)
                }, n.prototype.setPointerCapture = function(t) {
                    c.setPointerCapture(t, this)
                }, n.prototype.releaseCapture = function(t) {
                    c.releaseCapture(t, this)
                }, n
            }(s.Node);
            e.Shape = v, v.prototype._fillFunc = function(t) {
                t.fill()
            }, v.prototype._strokeFunc = function(t) {
                t.stroke()
            }, v.prototype._fillFuncHit = function(t) {
                t.fill()
            }, v.prototype._strokeFuncHit = function(t) {
                t.stroke()
            }, v.prototype._centroid = !1, v.prototype.nodeType = "Shape", u._registerNode(v), a.Factory.addGetterSetter(v, "stroke", void 0, l.getStringValidator()), a.Factory.addGetterSetter(v, "strokeWidth", 2, l.getNumberValidator()), a.Factory.addGetterSetter(v, "hitStrokeWidth", "auto", l.getNumberOrAutoValidator()), a.Factory.addGetterSetter(v, "strokeHitEnabled", !0, l.getBooleanValidator()), a.Factory.addGetterSetter(v, "perfectDrawEnabled", !0, l.getBooleanValidator()), a.Factory.addGetterSetter(v, "shadowForStrokeEnabled", !0, l.getBooleanValidator()), a.Factory.addGetterSetter(v, "lineJoin"), a.Factory.addGetterSetter(v, "lineCap"), a.Factory.addGetterSetter(v, "sceneFunc"), a.Factory.addGetterSetter(v, "hitFunc"), a.Factory.addGetterSetter(v, "dash"), a.Factory.addGetterSetter(v, "dashOffset", 0, l.getNumberValidator()), a.Factory.addGetterSetter(v, "shadowColor", void 0, l.getStringValidator()), a.Factory.addGetterSetter(v, "shadowBlur", 0, l.getNumberValidator()), a.Factory.addGetterSetter(v, "shadowOpacity", 1, l.getNumberValidator()), a.Factory.addComponentsGetterSetter(v, "shadowOffset", ["x", "y"]), a.Factory.addGetterSetter(v, "shadowOffsetX", 0, l.getNumberValidator()), a.Factory.addGetterSetter(v, "shadowOffsetY", 0, l.getNumberValidator()), a.Factory.addGetterSetter(v, "fillPatternImage"), a.Factory.addGetterSetter(v, "fill", void 0, l.getStringValidator()), a.Factory.addGetterSetter(v, "fillPatternX", 0, l.getNumberValidator()), a.Factory.addGetterSetter(v, "fillPatternY", 0, l.getNumberValidator()), a.Factory.addGetterSetter(v, "fillLinearGradientColorStops"), a.Factory.addGetterSetter(v, "strokeLinearGradientColorStops"), a.Factory.addGetterSetter(v, "fillRadialGradientStartRadius", 0), a.Factory.addGetterSetter(v, "fillRadialGradientEndRadius", 0), a.Factory.addGetterSetter(v, "fillRadialGradientColorStops"), a.Factory.addGetterSetter(v, "fillPatternRepeat", "repeat"), a.Factory.addGetterSetter(v, "fillEnabled", !0), a.Factory.addGetterSetter(v, "strokeEnabled", !0), a.Factory.addGetterSetter(v, "shadowEnabled", !0), a.Factory.addGetterSetter(v, "dashEnabled", !0), a.Factory.addGetterSetter(v, "strokeScaleEnabled", !0), a.Factory.addGetterSetter(v, "fillPriority", "color"), a.Factory.addComponentsGetterSetter(v, "fillPatternOffset", ["x", "y"]), a.Factory.addGetterSetter(v, "fillPatternOffsetX", 0, l.getNumberValidator()), a.Factory.addGetterSetter(v, "fillPatternOffsetY", 0, l.getNumberValidator()), a.Factory.addComponentsGetterSetter(v, "fillPatternScale", ["x", "y"]), a.Factory.addGetterSetter(v, "fillPatternScaleX", 1, l.getNumberValidator()), a.Factory.addGetterSetter(v, "fillPatternScaleY", 1, l.getNumberValidator()), a.Factory.addComponentsGetterSetter(v, "fillLinearGradientStartPoint", ["x", "y"]), a.Factory.addComponentsGetterSetter(v, "strokeLinearGradientStartPoint", ["x", "y"]), a.Factory.addGetterSetter(v, "fillLinearGradientStartPointX", 0), a.Factory.addGetterSetter(v, "strokeLinearGradientStartPointX", 0), a.Factory.addGetterSetter(v, "fillLinearGradientStartPointY", 0), a.Factory.addGetterSetter(v, "strokeLinearGradientStartPointY", 0), a.Factory.addComponentsGetterSetter(v, "fillLinearGradientEndPoint", ["x", "y"]), a.Factory.addComponentsGetterSetter(v, "strokeLinearGradientEndPoint", ["x", "y"]), a.Factory.addGetterSetter(v, "fillLinearGradientEndPointX", 0), a.Factory.addGetterSetter(v, "strokeLinearGradientEndPointX", 0), a.Factory.addGetterSetter(v, "fillLinearGradientEndPointY", 0), a.Factory.addGetterSetter(v, "strokeLinearGradientEndPointY", 0), a.Factory.addComponentsGetterSetter(v, "fillRadialGradientStartPoint", ["x", "y"]), a.Factory.addGetterSetter(v, "fillRadialGradientStartPointX", 0), a.Factory.addGetterSetter(v, "fillRadialGradientStartPointY", 0), a.Factory.addComponentsGetterSetter(v, "fillRadialGradientEndPoint", ["x", "y"]), a.Factory.addGetterSetter(v, "fillRadialGradientEndPointX", 0), a.Factory.addGetterSetter(v, "fillRadialGradientEndPointY", 0), a.Factory.addGetterSetter(v, "fillPatternRotation", 0), a.Factory.backCompat(v, {
                dashArray: "dash",
                getDashArray: "getDash",
                setDashArray: "getDash",
                drawFunc: "sceneFunc",
                getDrawFunc: "getSceneFunc",
                setDrawFunc: "setSceneFunc",
                drawHitFunc: "hitFunc",
                getDrawHitFunc: "getHitFunc",
                setDrawHitFunc: "setHitFunc"
            }), o.Collection.mapMethods(v)
        },
        336: function(t, e, n) {
            "use strict";
            var r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                },
                i = n(565);
            n(425);
            t.exports = r({}, i)
        },
        337: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(302),
                s = n(360),
                l = n(300),
                u = n(299),
                c = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.children = new i.Collection, e
                    }
                    return r(e, t), e.prototype.getChildren = function(t) {
                        if (!t) return this.children;
                        var e = new i.Collection;
                        return this.children.each((function(n) {
                            t(n) && e.push(n)
                        })), e
                    }, e.prototype.hasChildren = function() {
                        return this.getChildren().length > 0
                    }, e.prototype.removeChildren = function() {
                        for (var t, e = 0; e < this.children.length; e++)(t = this.children[e]).parent = null, t.index = 0, t.remove();
                        return this.children = new i.Collection, this
                    }, e.prototype.destroyChildren = function() {
                        for (var t, e = 0; e < this.children.length; e++)(t = this.children[e]).parent = null, t.index = 0, t.destroy();
                        return this.children = new i.Collection, this
                    }, e.prototype.add = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        if (arguments.length > 1) {
                            for (var n = 0; n < arguments.length; n++) this.add(arguments[n]);
                            return this
                        }
                        var r = t[0];
                        if (r.getParent()) return r.moveTo(this), this;
                        var i = this.children;
                        return this._validateAdd(r), r._clearCaches(), r.index = i.length, r.parent = this, i.push(r), this._fire("add", {
                            child: r
                        }), this
                    }, e.prototype.destroy = function() {
                        return this.hasChildren() && this.destroyChildren(), t.prototype.destroy.call(this), this
                    }, e.prototype.find = function(t) {
                        return this._generalFind(t, !1)
                    }, e.prototype.get = function(t) {
                        return i.Util.warn("collection.get() method is deprecated. Please use collection.find() instead."), this.find(t)
                    }, e.prototype.findOne = function(t) {
                        var e = this._generalFind(t, !0);
                        return e.length > 0 ? e[0] : void 0
                    }, e.prototype._generalFind = function(t, e) {
                        var n = [];
                        return this._descendants((function(r) {
                            var i = r._isMatch(t);
                            return i && n.push(r), !(!i || !e)
                        })), i.Collection.toCollection(n)
                    }, e.prototype._descendants = function(t) {
                        for (var e = 0; e < this.children.length; e++) {
                            var n = this.children[e];
                            if (t(n)) return !0;
                            if (n.hasChildren() && n._descendants(t)) return !0
                        }
                        return !1
                    }, e.prototype.toObject = function() {
                        var t = a.Node.prototype.toObject.call(this);
                        t.children = [];
                        for (var e = this.getChildren(), n = e.length, r = 0; r < n; r++) {
                            var i = e[r];
                            t.children.push(i.toObject())
                        }
                        return t
                    }, e.prototype._getDescendants = function(t) {
                        for (var e = [], n = t.length, r = 0; r < n; r++) {
                            var i = t[r];
                            this.isAncestorOf(i) && e.push(i)
                        }
                        return e
                    }, e.prototype.isAncestorOf = function(t) {
                        for (var e = t.getParent(); e;) {
                            if (e._id === this._id) return !0;
                            e = e.getParent()
                        }
                        return !1
                    }, e.prototype.clone = function(t) {
                        var e = a.Node.prototype.clone.call(this, t);
                        return this.getChildren().each((function(t) {
                            e.add(t.clone())
                        })), e
                    }, e.prototype.getAllIntersections = function(t) {
                        var e = [];
                        return this.find("Shape").each((function(n) {
                            n.isVisible() && n.intersects(t) && e.push(n)
                        })), e
                    }, e.prototype._setChildrenIndices = function() {
                        this.children.each((function(t, e) {
                            t.index = e
                        }))
                    }, e.prototype.drawScene = function(t, e, n) {
                        var r = this.getLayer(),
                            i = t || r && r.getCanvas(),
                            o = i && i.getContext(),
                            a = this._getCanvasCache(),
                            s = a && a.scene;
                        return (this.isVisible() || n) && (!n && s ? (o.save(), r._applyTransform(this, o, e), this._drawCachedSceneCanvas(o), o.restore()) : this._drawChildren(i, "drawScene", e, !1, n, n)), this
                    }, e.prototype.drawHit = function(t, e, n) {
                        var r = this.getLayer(),
                            i = t || r && r.hitCanvas,
                            o = i && i.getContext(),
                            a = this._getCanvasCache(),
                            s = a && a.hit;
                        return (this.shouldDrawHit(i) || n) && (!n && s ? (o.save(), r._applyTransform(this, o, e), this._drawCachedHitCanvas(o), o.restore()) : this._drawChildren(i, "drawHit", e, !1, n, n)), this
                    }, e.prototype._drawChildren = function(t, e, n, r, i, o) {
                        var a, s, l = this.getLayer(),
                            u = t && t.getContext(),
                            c = this.clipWidth(),
                            h = this.clipHeight(),
                            d = this.clipFunc(),
                            f = c && h || d;
                        if (f && l) {
                            u.save();
                            var p = this.getAbsoluteTransform(n),
                                g = p.getMatrix();
                            u.transform(g[0], g[1], g[2], g[3], g[4], g[5]), u.beginPath(), d ? d.call(this, u, this) : (a = this.clipX(), s = this.clipY(), u.rect(a, s, c, h)), u.clip(), g = p.copy().invert().getMatrix(), u.transform(g[0], g[1], g[2], g[3], g[4], g[5])
                        }
                        var y = "source-over" !== this.globalCompositeOperation() && !o && "drawScene" === e;
                        y && l && (u.save(), u._applyGlobalCompositeOperation(this)), this.children.each((function(o) {
                            o[e](t, n, r, i)
                        })), y && l && u.restore(), f && l && u.restore()
                    }, e.prototype.shouldDrawHit = function(t) {
                        if (t && t.isCache) return !0;
                        var e = this.getLayer(),
                            n = !1;
                        s.DD._dragElements.forEach((function(t) {
                            "dragging" === t.dragStatus && t.node.getLayer() === e && (n = !0)
                        }));
                        var r = !u.Konva.hitOnDragEnabled && n;
                        return e && e.hitGraphEnabled() && this.isVisible() && !r
                    }, e.prototype.getClientRect = function(t) {
                        var e, n, r, i, o = (t = t || {}).skipTransform,
                            a = t.relativeTo,
                            s = {
                                x: 1 / 0,
                                y: 1 / 0,
                                width: 0,
                                height: 0
                            },
                            l = this;
                        this.children.each((function(o) {
                            if (o.visible()) {
                                var a = o.getClientRect({
                                    relativeTo: l,
                                    skipShadow: t.skipShadow,
                                    skipStroke: t.skipStroke
                                });
                                0 === a.width && 0 === a.height || (void 0 === e ? (e = a.x, n = a.y, r = a.x + a.width, i = a.y + a.height) : (e = Math.min(e, a.x), n = Math.min(n, a.y), r = Math.max(r, a.x + a.width), i = Math.max(i, a.y + a.height)))
                            }
                        }));
                        for (var u = this.find("Shape"), c = !1, h = 0; h < u.length; h++) {
                            if (u[h]._isVisible(this)) {
                                c = !0;
                                break
                            }
                        }
                        return s = c && void 0 !== e ? {
                            x: e,
                            y: n,
                            width: r - e,
                            height: i - n
                        } : {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }, o ? s : this._transformedRect(s, a)
                    }, e
                }(a.Node);
            e.Container = c, o.Factory.addComponentsGetterSetter(c, "clip", ["x", "y", "width", "height"]), o.Factory.addGetterSetter(c, "clipX", void 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "clipY", void 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "clipWidth", void 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "clipHeight", void 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "clipFunc"), i.Collection.mapMethods(c)
        },
        348: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, o = n(301),
                a = n(421),
                s = n(299),
                l = n(298),
                u = n(300);
            var c = function() {
                function t(t) {
                    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
                    var e = (t || {}).pixelRatio || s.Konva.pixelRatio || function() {
                        if (i) return i;
                        var t = o.Util.createCanvasElement().getContext("2d");
                        return i = (s.Konva._global.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
                    }();
                    this.pixelRatio = e, this._canvas = o.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0"
                }
                return t.prototype.getContext = function() {
                    return this.context
                }, t.prototype.getPixelRatio = function() {
                    return this.pixelRatio
                }, t.prototype.setPixelRatio = function(t) {
                    var e = this.pixelRatio;
                    this.pixelRatio = t, this.setSize(this.getWidth() / e, this.getHeight() / e)
                }, t.prototype.setWidth = function(t) {
                    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
                    var e = this.pixelRatio;
                    this.getContext()._context.scale(e, e)
                }, t.prototype.setHeight = function(t) {
                    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
                    var e = this.pixelRatio;
                    this.getContext()._context.scale(e, e)
                }, t.prototype.getWidth = function() {
                    return this.width
                }, t.prototype.getHeight = function() {
                    return this.height
                }, t.prototype.setSize = function(t, e) {
                    this.setWidth(t), this.setHeight(e)
                }, t.prototype.toDataURL = function(t, e) {
                    try {
                        return this._canvas.toDataURL(t, e)
                    } catch (n) {
                        try {
                            return this._canvas.toDataURL()
                        } catch (r) {
                            return o.Util.error("Unable to get data URL. " + r.message + ". For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), ""
                        }
                    }
                }, t
            }();
            e.Canvas = c, l.Factory.addGetterSetter(c, "pixelRatio", void 0, u.getNumberValidator());
            var h = function(t) {
                function e(e) {
                    void 0 === e && (e = {
                        width: 0,
                        height: 0
                    });
                    var n = t.call(this, e) || this;
                    return n.context = new a.SceneContext(n), n.setSize(e.width, e.height), n
                }
                return r(e, t), e
            }(c);
            e.SceneCanvas = h;
            var d = function(t) {
                function e(e) {
                    void 0 === e && (e = {
                        width: 0,
                        height: 0
                    });
                    var n = t.call(this, e) || this;
                    return n.hitCanvas = !0, n.context = new a.HitContext(n), n.setSize(e.width, e.height), n
                }
                return r(e, t), e
            }(c);
            e.HitCanvas = d
        },
        360: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(299),
                i = n(301);
            e.DD = {
                get isDragging() {
                    var t = !1;
                    return e.DD._dragElements.forEach((function(e) {
                        "dragging" === e.dragStatus && (t = !0)
                    })), t
                },
                justDragged: !1,
                get node() {
                    var t;
                    return e.DD._dragElements.forEach((function(e) {
                        t = e.node
                    })), t
                },
                _dragElements: new Map,
                _drag: function(t) {
                    e.DD._dragElements.forEach((function(e, n) {
                        var r = e.node,
                            o = r.getStage();
                        o.setPointersPositions(t), void 0 === e.pointerId && (e.pointerId = i.Util._getFirstPointerId(t));
                        var a = o._changedPointerPositions.find((function(t) {
                            return t.id === e.pointerId
                        }));
                        if (a) {
                            if ("dragging" !== e.dragStatus) {
                                var s = r.dragDistance();
                                if (Math.max(Math.abs(a.x - e.startPointerPos.x), Math.abs(a.y - e.startPointerPos.y)) < s) return;
                                if (r.startDrag({
                                        evt: t
                                    }), !r.isDragging()) return
                            }
                            r._setDragPosition(t, e), r.fire("dragmove", {
                                type: "dragmove",
                                target: r,
                                evt: t
                            }, !0)
                        }
                    }))
                },
                _endDragBefore: function(t) {
                    e.DD._dragElements.forEach((function(n, i) {
                        var o = n.node.getStage();
                        if (t && o.setPointersPositions(t), o._changedPointerPositions.find((function(t) {
                                return t.id === n.pointerId
                            }))) {
                            "dragging" !== n.dragStatus && "stopped" !== n.dragStatus || (e.DD.justDragged = !0, r.Konva.listenClickTap = !1, n.dragStatus = "stopped");
                            var a = n.node.getLayer() || n.node instanceof r.Konva.Stage && n.node;
                            a && a.draw()
                        }
                    }))
                },
                _endDragAfter: function(t) {
                    e.DD._dragElements.forEach((function(n, r) {
                        "stopped" === n.dragStatus && n.node.fire("dragend", {
                            type: "dragend",
                            target: n.node,
                            evt: t
                        }, !0), "dragging" !== n.dragStatus && e.DD._dragElements.delete(r)
                    }))
                }
            }, r.Konva.isBrowser && (window.addEventListener("mouseup", e.DD._endDragBefore, !0), window.addEventListener("touchend", e.DD._endDragBefore, !0), window.addEventListener("mousemove", e.DD._drag), window.addEventListener("touchmove", e.DD._drag), window.addEventListener("mouseup", e.DD._endDragAfter, !1), window.addEventListener("touchend", e.DD._endDragAfter, !1))
        },
        390: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(337),
                a = n(299),
                s = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._validateAdd = function(t) {
                        var e = t.getType();
                        "Group" !== e && "Shape" !== e && i.Util.throw("You may only add groups and shapes to groups.")
                    }, e
                }(o.Container);
            e.Group = s, s.prototype.nodeType = "Group", a._registerNode(s), i.Collection.mapMethods(s)
        },
        391: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(299),
                i = r.glob.performance && r.glob.performance.now ? function() {
                    return r.glob.performance.now()
                } : function() {
                    return (new Date).getTime()
                },
                o = function() {
                    function t(e, n) {
                        this.id = t.animIdCounter++, this.frame = {
                            time: 0,
                            timeDiff: 0,
                            lastTime: i(),
                            frameRate: 0
                        }, this.func = e, this.setLayers(n)
                    }
                    return t.prototype.setLayers = function(t) {
                        var e = [];
                        return e = t ? t.length > 0 ? t : [t] : [], this.layers = e, this
                    }, t.prototype.getLayers = function() {
                        return this.layers
                    }, t.prototype.addLayer = function(t) {
                        var e, n = this.layers,
                            r = n.length;
                        for (e = 0; e < r; e++)
                            if (n[e]._id === t._id) return !1;
                        return this.layers.push(t), !0
                    }, t.prototype.isRunning = function() {
                        var e, n = t.animations,
                            r = n.length;
                        for (e = 0; e < r; e++)
                            if (n[e].id === this.id) return !0;
                        return !1
                    }, t.prototype.start = function() {
                        return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = i(), t._addAnimation(this), this
                    }, t.prototype.stop = function() {
                        return t._removeAnimation(this), this
                    }, t.prototype._updateFrameObject = function(t) {
                        this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff
                    }, t._addAnimation = function(t) {
                        this.animations.push(t), this._handleAnimation()
                    }, t._removeAnimation = function(t) {
                        var e, n = t.id,
                            r = this.animations,
                            i = r.length;
                        for (e = 0; e < i; e++)
                            if (r[e].id === n) {
                                this.animations.splice(e, 1);
                                break
                            }
                    }, t._runFrames = function() {
                        var t, e, n, r, o, a, s, l, u = {},
                            c = this.animations;
                        for (r = 0; r < c.length; r++)
                            if (e = (t = c[r]).layers, n = t.func, t._updateFrameObject(i()), a = e.length, !n || !1 !== n.call(t, t.frame))
                                for (o = 0; o < a; o++) void 0 !== (s = e[o])._id && (u[s._id] = s);
                        for (l in u) u.hasOwnProperty(l) && u[l].draw()
                    }, t._animationLoop = function() {
                        var e = t;
                        e.animations.length ? (e._runFrames(), requestAnimationFrame(e._animationLoop)) : e.animRunning = !1
                    }, t._handleAnimation = function() {
                        this.animRunning || (this.animRunning = !0, requestAnimationFrame(this._animationLoop))
                    }, t.animations = [], t.animIdCounter = 0, t.animRunning = !1, t
                }();
            e.Animation = o
        },
        392: function(t, e, n) {
            "use strict";
            var r = function(t) {
                if (void 0 === t) throw new Error("invariant(...): Second argument must be a string.")
            };
            t.exports = function(t, e) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                if (r(e), !t) {
                    var a;
                    if (void 0 === e) a = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var s = 0;
                        (a = new Error(e.replace(/%s/g, (function() {
                            return String(i[s++])
                        })))).name = "Invariant Violation"
                    }
                    throw a.framesToPop = 1, a
                }
            }
        },
        419: function(t, e, n) {
            var r = n(420).Konva;
            r._injectGlobal(r), e.default = r, r.default = r, t.exports = e.default
        },
        420: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(299),
                i = n(301),
                o = n(302),
                a = n(337),
                s = n(566),
                l = n(567),
                u = n(568),
                c = n(390),
                h = n(360),
                d = n(303),
                f = n(391),
                p = n(569),
                g = n(421),
                y = n(348);
            e.Konva = i.Util._assign(r.Konva, {
                Collection: i.Collection,
                Util: i.Util,
                Transform: i.Transform,
                Node: o.Node,
                ids: o.ids,
                names: o.names,
                Container: a.Container,
                Stage: s.Stage,
                stages: s.stages,
                Layer: l.Layer,
                FastLayer: u.FastLayer,
                Group: c.Group,
                DD: h.DD,
                Shape: d.Shape,
                shapes: d.shapes,
                Animation: f.Animation,
                Tween: p.Tween,
                Easings: p.Easings,
                Context: g.Context,
                Canvas: y.Canvas
            })
        },
        421: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(299),
                a = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "ellipse", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"],
                s = function() {
                    function t(t) {
                        this.canvas = t, this._context = t._canvas.getContext("2d"), o.Konva.enableTrace && (this.traceArr = [], this._enableTrace())
                    }
                    return t.prototype.fillShape = function(t) {
                        t.fillEnabled() && this._fill(t)
                    }, t.prototype._fill = function(t) {}, t.prototype.strokeShape = function(t) {
                        t.hasStroke() && this._stroke(t)
                    }, t.prototype._stroke = function(t) {}, t.prototype.fillStrokeShape = function(t) {
                        this.fillShape(t), this.strokeShape(t)
                    }, t.prototype.getTrace = function(t) {
                        var e, n, r, o, a = this.traceArr,
                            s = a.length,
                            l = "";
                        for (e = 0; e < s; e++)(r = (n = a[e]).method) ? (o = n.args, l += r, t ? l += "()" : i.Util._isArray(o[0]) ? l += "([" + o.join(",") + "])" : l += "(" + o.join(",") + ")") : (l += n.property, t || (l += "=" + n.val)), l += ";";
                        return l
                    }, t.prototype.clearTrace = function() {
                        this.traceArr = []
                    }, t.prototype._trace = function(t) {
                        var e = this.traceArr;
                        e.push(t), e.length >= 100 && e.shift()
                    }, t.prototype.reset = function() {
                        var t = this.getCanvas().getPixelRatio();
                        this.setTransform(1 * t, 0, 0, 1 * t, 0, 0)
                    }, t.prototype.getCanvas = function() {
                        return this.canvas
                    }, t.prototype.clear = function(t) {
                        var e = this.getCanvas();
                        t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio)
                    }, t.prototype._applyLineCap = function(t) {
                        var e = t.getLineCap();
                        e && this.setAttr("lineCap", e)
                    }, t.prototype._applyOpacity = function(t) {
                        var e = t.getAbsoluteOpacity();
                        1 !== e && this.setAttr("globalAlpha", e)
                    }, t.prototype._applyLineJoin = function(t) {
                        var e = t.getLineJoin();
                        e && this.setAttr("lineJoin", e)
                    }, t.prototype.setAttr = function(t, e) {
                        this._context[t] = e
                    }, t.prototype.arc = function(t, e, n, r, i, o) {
                        this._context.arc(t, e, n, r, i, o)
                    }, t.prototype.arcTo = function(t, e, n, r, i) {
                        this._context.arcTo(t, e, n, r, i)
                    }, t.prototype.beginPath = function() {
                        this._context.beginPath()
                    }, t.prototype.bezierCurveTo = function(t, e, n, r, i, o) {
                        this._context.bezierCurveTo(t, e, n, r, i, o)
                    }, t.prototype.clearRect = function(t, e, n, r) {
                        this._context.clearRect(t, e, n, r)
                    }, t.prototype.clip = function() {
                        this._context.clip()
                    }, t.prototype.closePath = function() {
                        this._context.closePath()
                    }, t.prototype.createImageData = function(t, e) {
                        var n = arguments;
                        return 2 === n.length ? this._context.createImageData(t, e) : 1 === n.length ? this._context.createImageData(t) : void 0
                    }, t.prototype.createLinearGradient = function(t, e, n, r) {
                        return this._context.createLinearGradient(t, e, n, r)
                    }, t.prototype.createPattern = function(t, e) {
                        return this._context.createPattern(t, e)
                    }, t.prototype.createRadialGradient = function(t, e, n, r, i, o) {
                        return this._context.createRadialGradient(t, e, n, r, i, o)
                    }, t.prototype.drawImage = function(t, e, n, r, i, o, a, s, l) {
                        var u = arguments,
                            c = this._context;
                        3 === u.length ? c.drawImage(t, e, n) : 5 === u.length ? c.drawImage(t, e, n, r, i) : 9 === u.length && c.drawImage(t, e, n, r, i, o, a, s, l)
                    }, t.prototype.ellipse = function(t, e, n, r, i, o, a, s) {
                        this._context.ellipse(t, e, n, r, i, o, a, s)
                    }, t.prototype.isPointInPath = function(t, e) {
                        return this._context.isPointInPath(t, e)
                    }, t.prototype.fill = function() {
                        this._context.fill()
                    }, t.prototype.fillRect = function(t, e, n, r) {
                        this._context.fillRect(t, e, n, r)
                    }, t.prototype.strokeRect = function(t, e, n, r) {
                        this._context.strokeRect(t, e, n, r)
                    }, t.prototype.fillText = function(t, e, n) {
                        this._context.fillText(t, e, n)
                    }, t.prototype.measureText = function(t) {
                        return this._context.measureText(t)
                    }, t.prototype.getImageData = function(t, e, n, r) {
                        return this._context.getImageData(t, e, n, r)
                    }, t.prototype.lineTo = function(t, e) {
                        this._context.lineTo(t, e)
                    }, t.prototype.moveTo = function(t, e) {
                        this._context.moveTo(t, e)
                    }, t.prototype.rect = function(t, e, n, r) {
                        this._context.rect(t, e, n, r)
                    }, t.prototype.putImageData = function(t, e, n) {
                        this._context.putImageData(t, e, n)
                    }, t.prototype.quadraticCurveTo = function(t, e, n, r) {
                        this._context.quadraticCurveTo(t, e, n, r)
                    }, t.prototype.restore = function() {
                        this._context.restore()
                    }, t.prototype.rotate = function(t) {
                        this._context.rotate(t)
                    }, t.prototype.save = function() {
                        this._context.save()
                    }, t.prototype.scale = function(t, e) {
                        this._context.scale(t, e)
                    }, t.prototype.setLineDash = function(t) {
                        this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t)
                    }, t.prototype.getLineDash = function() {
                        return this._context.getLineDash()
                    }, t.prototype.setTransform = function(t, e, n, r, i, o) {
                        this._context.setTransform(t, e, n, r, i, o)
                    }, t.prototype.stroke = function() {
                        this._context.stroke()
                    }, t.prototype.strokeText = function(t, e, n, r) {
                        this._context.strokeText(t, e, n, r)
                    }, t.prototype.transform = function(t, e, n, r, i, o) {
                        this._context.transform(t, e, n, r, i, o)
                    }, t.prototype.translate = function(t, e) {
                        this._context.translate(t, e)
                    }, t.prototype._enableTrace = function() {
                        var t, e, n = this,
                            r = a.length,
                            o = i.Util._simplifyArray,
                            s = this.setAttr,
                            l = function(t) {
                                var r, i = n[t];
                                n[t] = function() {
                                    return e = o(Array.prototype.slice.call(arguments, 0)), r = i.apply(n, arguments), n._trace({
                                        method: t,
                                        args: e
                                    }), r
                                }
                            };
                        for (t = 0; t < r; t++) l(a[t]);
                        n.setAttr = function() {
                            s.apply(n, arguments);
                            var t = arguments[0],
                                e = arguments[1];
                            "shadowOffsetX" !== t && "shadowOffsetY" !== t && "shadowBlur" !== t || (e /= this.canvas.getPixelRatio()), n._trace({
                                property: t,
                                val: e
                            })
                        }
                    }, t.prototype._applyGlobalCompositeOperation = function(t) {
                        var e = t.getGlobalCompositeOperation();
                        "source-over" !== e && this.setAttr("globalCompositeOperation", e)
                    }, t
                }();
            e.Context = s, ["fillStyle", "strokeStyle", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "font", "textAlign", "textBaseline", "globalAlpha", "globalCompositeOperation", "imageSmoothingEnabled"].forEach((function(t) {
                Object.defineProperty(s.prototype, t, {
                    get: function() {
                        return this._context[t]
                    },
                    set: function(e) {
                        this._context[t] = e
                    }
                })
            }));
            var l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.prototype._fillColor = function(t) {
                    var e = t.fill();
                    this.setAttr("fillStyle", e), t._fillFunc(this)
                }, e.prototype._fillPattern = function(t) {
                    var e = t.getFillPatternX(),
                        n = t.getFillPatternY(),
                        r = o.Konva.getAngle(t.getFillPatternRotation()),
                        i = t.getFillPatternOffsetX(),
                        a = t.getFillPatternOffsetY(),
                        s = t.getFillPatternScaleX(),
                        l = t.getFillPatternScaleY();
                    (e || n) && this.translate(e || 0, n || 0), r && this.rotate(r), (s || l) && this.scale(s, l), (i || a) && this.translate(-1 * i, -1 * a), this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this)
                }, e.prototype._fillLinearGradient = function(t) {
                    var e = t._getLinearGradient();
                    e && (this.setAttr("fillStyle", e), t._fillFunc(this))
                }, e.prototype._fillRadialGradient = function(t) {
                    var e = t._getRadialGradient();
                    e && (this.setAttr("fillStyle", e), t._fillFunc(this))
                }, e.prototype._fill = function(t) {
                    var e = t.fill(),
                        n = t.getFillPriority();
                    if (e && "color" === n) this._fillColor(t);
                    else {
                        var r = t.getFillPatternImage();
                        if (r && "pattern" === n) this._fillPattern(t);
                        else {
                            var i = t.getFillLinearGradientColorStops();
                            if (i && "linear-gradient" === n) this._fillLinearGradient(t);
                            else {
                                var o = t.getFillRadialGradientColorStops();
                                o && "radial-gradient" === n ? this._fillRadialGradient(t) : e ? this._fillColor(t) : r ? this._fillPattern(t) : i ? this._fillLinearGradient(t) : o && this._fillRadialGradient(t)
                            }
                        }
                    }
                }, e.prototype._strokeLinearGradient = function(t) {
                    var e = t.getStrokeLinearGradientStartPoint(),
                        n = t.getStrokeLinearGradientEndPoint(),
                        r = t.getStrokeLinearGradientColorStops(),
                        i = this.createLinearGradient(e.x, e.y, n.x, n.y);
                    if (r) {
                        for (var o = 0; o < r.length; o += 2) i.addColorStop(r[o], r[o + 1]);
                        this.setAttr("strokeStyle", i)
                    }
                }, e.prototype._stroke = function(t) {
                    var e = t.dash(),
                        n = t.getStrokeScaleEnabled();
                    if (t.hasStroke()) {
                        if (!n) {
                            this.save();
                            var r = this.getCanvas().getPixelRatio();
                            this.setTransform(r, 0, 0, r, 0, 0)
                        }
                        this._applyLineCap(t), e && t.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), t.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), n || this.restore()
                    }
                }, e.prototype._applyShadow = function(t) {
                    var e = i.Util,
                        n = e.get(t.getShadowRGBA(), "black"),
                        r = e.get(t.getShadowBlur(), 5),
                        o = e.get(t.getShadowOffset(), {
                            x: 0,
                            y: 0
                        }),
                        a = t.getAbsoluteScale(),
                        s = this.canvas.getPixelRatio(),
                        l = a.x * s,
                        u = a.y * s;
                    this.setAttr("shadowColor", n), this.setAttr("shadowBlur", r * Math.min(Math.abs(l), Math.abs(u))), this.setAttr("shadowOffsetX", o.x * l), this.setAttr("shadowOffsetY", o.y * u)
                }, e
            }(s);
            e.SceneContext = l;
            var u = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.prototype._fill = function(t) {
                    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore()
                }, e.prototype.strokeShape = function(t) {
                    t.hasHitStroke() && this._stroke(t)
                }, e.prototype._stroke = function(t) {
                    if (t.hasHitStroke()) {
                        var e = t.getStrokeScaleEnabled();
                        if (!e) {
                            this.save();
                            var n = this.getCanvas().getPixelRatio();
                            this.setTransform(n, 0, 0, n, 0, 0)
                        }
                        this._applyLineCap(t);
                        var r = t.hitStrokeWidth(),
                            i = "auto" === r ? t.strokeWidth() : r;
                        this.setAttr("lineWidth", i), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), e || this.restore()
                    }
                }, e
            }(s);
            e.HitContext = u
        },
        422: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(299),
                i = new Map,
                o = void 0 !== r.Konva._global.PointerEvent;

            function a(t) {
                return {
                    evt: t,
                    pointerId: t.pointerId
                }
            }

            function s(t, e) {
                var n = i.get(t);
                if (n) {
                    var r = n.getStage();
                    r && r.content, i.delete(t), o && n._fire("lostpointercapture", a(new PointerEvent("lostpointercapture")))
                }
            }
            e.getCapturedShape = function(t) {
                return i.get(t)
            }, e.createEvent = a, e.hasPointerCapture = function(t, e) {
                return i.get(t) === e
            }, e.setPointerCapture = function(t, e) {
                s(t), e.getStage() && (i.set(t, e), o && e._fire("gotpointercapture", a(new PointerEvent("gotpointercapture"))))
            }, e.releaseCapture = s
        },
        423: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(337),
                a = n(302),
                s = n(298),
                l = n(348),
                u = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.canvas = new l.SceneCanvas, n._waitingForDraw = !1, n.on("visibleChange", n._checkVisibility), n._checkVisibility(), n.on("imageSmoothingEnabledChange", n._checkSmooth), n._checkSmooth(), n
                    }
                    return r(e, t), e.prototype.createPNGStream = function() {
                        return this.canvas._canvas.createPNGStream()
                    }, e.prototype.getCanvas = function() {
                        return this.canvas
                    }, e.prototype.getHitCanvas = function() {
                        return this.hitCanvas
                    }, e.prototype.getContext = function() {
                        return this.getCanvas().getContext()
                    }, e.prototype.clear = function(t) {
                        return this.getContext().clear(t), this
                    }, e.prototype.setZIndex = function(e) {
                        t.prototype.setZIndex.call(this, e);
                        var n = this.getStage();
                        return n && (n.content.removeChild(this.getCanvas()._canvas), e < n.children.length - 1 ? n.content.insertBefore(this.getCanvas()._canvas, n.children[e + 1].getCanvas()._canvas) : n.content.appendChild(this.getCanvas()._canvas)), this
                    }, e.prototype.moveToTop = function() {
                        a.Node.prototype.moveToTop.call(this);
                        var t = this.getStage();
                        return t && (t.content.removeChild(this.getCanvas()._canvas), t.content.appendChild(this.getCanvas()._canvas)), !0
                    }, e.prototype.moveUp = function() {
                        if (!a.Node.prototype.moveUp.call(this)) return !1;
                        var t = this.getStage();
                        return !!t && (t.content.removeChild(this.getCanvas()._canvas), this.index < t.children.length - 1 ? t.content.insertBefore(this.getCanvas()._canvas, t.children[this.index + 1].getCanvas()._canvas) : t.content.appendChild(this.getCanvas()._canvas), !0)
                    }, e.prototype.moveDown = function() {
                        if (a.Node.prototype.moveDown.call(this)) {
                            var t = this.getStage();
                            if (t) {
                                var e = t.children;
                                t.content.removeChild(this.getCanvas()._canvas), t.content.insertBefore(this.getCanvas()._canvas, e[this.index + 1].getCanvas()._canvas)
                            }
                            return !0
                        }
                        return !1
                    }, e.prototype.moveToBottom = function() {
                        if (a.Node.prototype.moveToBottom.call(this)) {
                            var t = this.getStage();
                            if (t) {
                                var e = t.children;
                                t.content.removeChild(this.getCanvas()._canvas), t.content.insertBefore(this.getCanvas()._canvas, e[1].getCanvas()._canvas)
                            }
                            return !0
                        }
                        return !1
                    }, e.prototype.getLayer = function() {
                        return this
                    }, e.prototype.hitGraphEnabled = function() {
                        return !0
                    }, e.prototype.remove = function() {
                        var t = this.getCanvas()._canvas;
                        return a.Node.prototype.remove.call(this), t && t.parentNode && i.Util._isInDocument(t) && t.parentNode.removeChild(t), this
                    }, e.prototype.getStage = function() {
                        return this.parent
                    }, e.prototype.setSize = function(t) {
                        var e = t.width,
                            n = t.height;
                        return this.canvas.setSize(e, n), this
                    }, e.prototype._toKonvaCanvas = function(t) {
                        return (t = t || {}).width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = void 0 !== t.x ? t.x : this.x(), t.y = void 0 !== t.y ? t.y : this.y(), a.Node.prototype._toKonvaCanvas.call(this, t)
                    }, e.prototype._checkVisibility = function() {
                        var t = this.visible();
                        this.canvas._canvas.style.display = t ? "block" : "none"
                    }, e.prototype._checkSmooth = function() {
                        this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled()
                    }, e.prototype.getWidth = function() {
                        if (this.parent) return this.parent.width()
                    }, e.prototype.setWidth = function() {
                        i.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.')
                    }, e.prototype.getHeight = function() {
                        if (this.parent) return this.parent.height()
                    }, e.prototype.setHeight = function() {
                        i.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.')
                    }, e.prototype.getIntersection = function(t, e) {
                        return null
                    }, e.prototype.batchDraw = function() {
                        var t = this;
                        return this._waitingForDraw || (this._waitingForDraw = !0, i.Util.requestAnimFrame((function() {
                            t.draw(), t._waitingForDraw = !1
                        }))), this
                    }, e.prototype._applyTransform = function(t, e, n) {
                        var r = t.getAbsoluteTransform(n).getMatrix();
                        e.transform(r[0], r[1], r[2], r[3], r[4], r[5])
                    }, e
                }(o.Container);
            e.BaseLayer = u, u.prototype.nodeType = "BaseLayer", s.Factory.addGetterSetter(u, "imageSmoothingEnabled", !0), s.Factory.addGetterSetter(u, "clearBeforeDraw", !0), i.Collection.mapMethods(u)
        },
        424: function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.toggleStrictMode = function(t) {
                s = t
            }, e.applyNodeProps = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                !i && "zIndex" in e && (console.warn(u), i = !0);
                if (!o && e.draggable) {
                    var h = void 0 !== e.x || void 0 !== e.y,
                        d = e.onDragEnd || e.onDragMove;
                    h && !d && (console.warn(l), o = !0)
                }
                for (var f in n)
                    if (!r[f]) {
                        var p = "on" === f.slice(0, 2),
                            g = n[f] !== e[f];
                        if (p && g) "content" === (b = f.substr(2).toLowerCase()).substr(0, 7) && (b = "content" + b.substr(7, 1).toUpperCase() + b.substr(8)), t.off(b, n[f]);
                        var y = !e.hasOwnProperty(f);
                        y && t.setAttr(f, void 0)
                    }
                var v = s || e._useStrictMode,
                    m = {},
                    _ = !1;
                for (var f in e)
                    if (!r[f]) {
                        p = "on" === f.slice(0, 2);
                        var b, S = n[f] !== e[f];
                        if (p && S) "content" === (b = f.substr(2).toLowerCase()).substr(0, 7) && (b = "content" + b.substr(7, 1).toUpperCase() + b.substr(8)), e[f] && t.on(b + a, e[f]);
                        !p && (e[f] !== n[f] || v && e[f] !== t.getAttr(f)) && (_ = !0, m[f] = e[f])
                    }
                _ && (t.setAttrs(m), c(t))
            }, e.updatePicture = c;
            var r = {
                    children: !0,
                    ref: !0,
                    key: !0,
                    style: !0,
                    forwardedRef: !0,
                    unstable_applyCache: !0,
                    unstable_applyDrawHitFromCache: !0
                },
                i = !1,
                o = !1,
                a = e.EVENTS_NAMESPACE = ".react-konva-event",
                s = !1;
            var l = "ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.\nPosition of a node will be changed during drag&drop, so you should update state of the react app as well.\nConsider to add onDragMove or onDragEnd events.\nFor more info see: https://github.com/konvajs/react-konva/issues/256\n",
                u = 'ReactKonva: You are using "zIndex" attribute for a Konva node.\nreact-konva may get confused with ordering. Just define correct order of elements in your render function of a component.\nFor more info see: https://github.com/konvajs/react-konva/issues/194\n';

            function c(t) {
                var e = t.getLayer() || t.getStage();
                e && e.batchDraw()
            }
        },
        425: function(t, e, n) {
            var r = n(576).Konva;
            r._injectGlobal(r), e.default = r, t.exports = e.default
        },
        426: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                i = this && this.__spreadArrays || function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                        i = 0;
                    for (e = 0; e < n; e++)
                        for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                    return r
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(301),
                a = n(298),
                s = n(303),
                l = n(300),
                u = n(299),
                c = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", (function() {
                            this._clearCache("tensionPoints")
                        })), n
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        var e, n, r, i = this.points(),
                            o = i.length,
                            a = this.tension(),
                            s = this.closed(),
                            l = this.bezier();
                        if (o) {
                            if (t.beginPath(), t.moveTo(i[0], i[1]), 0 !== a && o > 4) {
                                for (n = (e = this.getTensionPoints()).length, r = s ? 0 : 4, s || t.quadraticCurveTo(e[0], e[1], e[2], e[3]); r < n - 2;) t.bezierCurveTo(e[r++], e[r++], e[r++], e[r++], e[r++], e[r++]);
                                s || t.quadraticCurveTo(e[n - 2], e[n - 1], i[o - 2], i[o - 1])
                            } else if (l)
                                for (r = 2; r < o;) t.bezierCurveTo(i[r++], i[r++], i[r++], i[r++], i[r++], i[r++]);
                            else
                                for (r = 2; r < o; r += 2) t.lineTo(i[r], i[r + 1]);
                            s ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this)
                        }
                    }, e.prototype.getTensionPoints = function() {
                        return this._getCache("tensionPoints", this._getTensionPoints)
                    }, e.prototype._getTensionPoints = function() {
                        return this.closed() ? this._getTensionPointsClosed() : o.Util._expandPoints(this.points(), this.tension())
                    }, e.prototype._getTensionPointsClosed = function() {
                        var t = this.points(),
                            e = t.length,
                            n = this.tension(),
                            r = o.Util._getControlPoints(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], n),
                            i = o.Util._getControlPoints(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], n),
                            a = o.Util._expandPoints(t, n);
                        return [r[2], r[3]].concat(a).concat([i[0], i[1], t[e - 2], t[e - 1], i[2], i[3], r[0], r[1], t[0], t[1]])
                    }, e.prototype.getWidth = function() {
                        return this.getSelfRect().width
                    }, e.prototype.getHeight = function() {
                        return this.getSelfRect().height
                    }, e.prototype.getSelfRect = function() {
                        var t = this.points();
                        if (t.length < 4) return {
                            x: t[0] || 0,
                            y: t[1] || 0,
                            width: 0,
                            height: 0
                        };
                        for (var e, n, r = (t = 0 !== this.tension() ? i([t[0], t[1]], this._getTensionPoints(), [t[t.length - 2], t[t.length - 1]]) : this.points())[0], o = t[0], a = t[1], s = t[1], l = 0; l < t.length / 2; l++) e = t[2 * l], n = t[2 * l + 1], r = Math.min(r, e), o = Math.max(o, e), a = Math.min(a, n), s = Math.max(s, n);
                        return {
                            x: Math.round(r),
                            y: Math.round(a),
                            width: Math.round(o - r),
                            height: Math.round(s - a)
                        }
                    }, e
                }(s.Shape);
            e.Line = c, c.prototype.className = "Line", c.prototype._attrsAffectingSize = ["points", "bezier", "tension"], u._registerNode(c), a.Factory.addGetterSetter(c, "closed", !1), a.Factory.addGetterSetter(c, "bezier", !1), a.Factory.addGetterSetter(c, "tension", 0, l.getNumberValidator()), a.Factory.addGetterSetter(c, "points", [], l.getNumberArrayValidator()), o.Collection.mapMethods(c)
        },
        427: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(299),
                l = function(t) {
                    function e(n) {
                        var r = t.call(this, n) || this;
                        r.dataArray = [], r.pathLength = 0, r.dataArray = e.parsePathData(r.data()), r.pathLength = 0;
                        for (var i = 0; i < r.dataArray.length; ++i) r.pathLength += r.dataArray[i].pathLength;
                        return r.on("dataChange.konva", (function() {
                            this.dataArray = e.parsePathData(this.data()), this.pathLength = 0;
                            for (var t = 0; t < this.dataArray.length; ++t) this.pathLength += this.dataArray[t].pathLength
                        })), r
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        var e = this.dataArray;
                        t.beginPath();
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n].command,
                                i = e[n].points;
                            switch (r) {
                                case "L":
                                    t.lineTo(i[0], i[1]);
                                    break;
                                case "M":
                                    t.moveTo(i[0], i[1]);
                                    break;
                                case "C":
                                    t.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                                    break;
                                case "Q":
                                    t.quadraticCurveTo(i[0], i[1], i[2], i[3]);
                                    break;
                                case "A":
                                    var o = i[0],
                                        a = i[1],
                                        s = i[2],
                                        l = i[3],
                                        u = i[4],
                                        c = i[5],
                                        h = i[6],
                                        d = i[7],
                                        f = s > l ? s : l,
                                        p = s > l ? 1 : s / l,
                                        g = s > l ? l / s : 1;
                                    t.translate(o, a), t.rotate(h), t.scale(p, g), t.arc(0, 0, f, u, u + c, 1 - d), t.scale(1 / p, 1 / g), t.rotate(-h), t.translate(-o, -a);
                                    break;
                                case "z":
                                    t.closePath()
                            }
                        }
                        t.fillStrokeShape(this)
                    }, e.prototype.getSelfRect = function() {
                        var t = [];
                        this.dataArray.forEach((function(n) {
                            if ("A" === n.command) {
                                var r = n.points[4],
                                    i = n.points[5],
                                    o = n.points[4] + i,
                                    a = Math.PI / 180;
                                if (Math.abs(r - o) < a && (a = Math.abs(r - o)), i < 0)
                                    for (var s = r - a; s > o; s -= a) {
                                        var l = e.getPointOnEllipticalArc(n.points[0], n.points[1], n.points[2], n.points[3], s, 0);
                                        t.push(l.x, l.y)
                                    } else
                                        for (s = r + a; s < o; s += a) {
                                            l = e.getPointOnEllipticalArc(n.points[0], n.points[1], n.points[2], n.points[3], s, 0);
                                            t.push(l.x, l.y)
                                        }
                            } else if ("C" === n.command)
                                for (s = 0; s <= 1; s += .01) {
                                    l = e.getPointOnCubicBezier(s, n.start.x, n.start.y, n.points[0], n.points[1], n.points[2], n.points[3], n.points[4], n.points[5]);
                                    t.push(l.x, l.y)
                                } else t = t.concat(n.points)
                        }));
                        for (var n, r, i = t[0], o = t[0], a = t[1], s = t[1], l = 0; l < t.length / 2; l++) n = t[2 * l], r = t[2 * l + 1], isNaN(n) || (i = Math.min(i, n), o = Math.max(o, n)), isNaN(r) || (a = Math.min(a, r), s = Math.max(s, r));
                        return {
                            x: Math.round(i),
                            y: Math.round(a),
                            width: Math.round(o - i),
                            height: Math.round(s - a)
                        }
                    }, e.prototype.getLength = function() {
                        return this.pathLength
                    }, e.prototype.getPointAtLength = function(t) {
                        var n, r = 0,
                            i = this.dataArray.length;
                        if (!i) return null;
                        for (; r < i && t > this.dataArray[r].pathLength;) t -= this.dataArray[r].pathLength, ++r;
                        if (r === i) return {
                            x: (n = this.dataArray[r - 1].points.slice(-2))[0],
                            y: n[1]
                        };
                        if (t < .01) return {
                            x: (n = this.dataArray[r].points.slice(0, 2))[0],
                            y: n[1]
                        };
                        var o = this.dataArray[r],
                            a = o.points;
                        switch (o.command) {
                            case "L":
                                return e.getPointOnLine(t, o.start.x, o.start.y, a[0], a[1]);
                            case "C":
                                return e.getPointOnCubicBezier(t / o.pathLength, o.start.x, o.start.y, a[0], a[1], a[2], a[3], a[4], a[5]);
                            case "Q":
                                return e.getPointOnQuadraticBezier(t / o.pathLength, o.start.x, o.start.y, a[0], a[1], a[2], a[3]);
                            case "A":
                                var s = a[0],
                                    l = a[1],
                                    u = a[2],
                                    c = a[3],
                                    h = a[4],
                                    d = a[5],
                                    f = a[6];
                                return h += d * t / o.pathLength, e.getPointOnEllipticalArc(s, l, u, c, h, f)
                        }
                        return null
                    }, e.getLineLength = function(t, e, n, r) {
                        return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e))
                    }, e.getPointOnLine = function(t, e, n, r, i, o, a) {
                        void 0 === o && (o = e), void 0 === a && (a = n);
                        var s = (i - n) / (r - e + 1e-8),
                            l = Math.sqrt(t * t / (1 + s * s));
                        r < e && (l *= -1);
                        var u, c = s * l;
                        if (r === e) u = {
                            x: o,
                            y: a + c
                        };
                        else if ((a - n) / (o - e + 1e-8) === s) u = {
                            x: o + l,
                            y: a + c
                        };
                        else {
                            var h, d, f = this.getLineLength(e, n, r, i);
                            if (f < 1e-8) return;
                            var p = (o - e) * (r - e) + (a - n) * (i - n);
                            h = e + (p /= f * f) * (r - e), d = n + p * (i - n);
                            var g = this.getLineLength(o, a, h, d),
                                y = Math.sqrt(t * t - g * g);
                            l = Math.sqrt(y * y / (1 + s * s)), r < e && (l *= -1), u = {
                                x: h + l,
                                y: d + (c = s * l)
                            }
                        }
                        return u
                    }, e.getPointOnCubicBezier = function(t, e, n, r, i, o, a, s, l) {
                        function u(t) {
                            return t * t * t
                        }

                        function c(t) {
                            return 3 * t * t * (1 - t)
                        }

                        function h(t) {
                            return 3 * t * (1 - t) * (1 - t)
                        }

                        function d(t) {
                            return (1 - t) * (1 - t) * (1 - t)
                        }
                        return {
                            x: s * u(t) + o * c(t) + r * h(t) + e * d(t),
                            y: l * u(t) + a * c(t) + i * h(t) + n * d(t)
                        }
                    }, e.getPointOnQuadraticBezier = function(t, e, n, r, i, o, a) {
                        function s(t) {
                            return t * t
                        }

                        function l(t) {
                            return 2 * t * (1 - t)
                        }

                        function u(t) {
                            return (1 - t) * (1 - t)
                        }
                        return {
                            x: o * s(t) + r * l(t) + e * u(t),
                            y: a * s(t) + i * l(t) + n * u(t)
                        }
                    }, e.getPointOnEllipticalArc = function(t, e, n, r, i, o) {
                        var a = Math.cos(o),
                            s = Math.sin(o),
                            l = n * Math.cos(i),
                            u = r * Math.sin(i);
                        return {
                            x: t + (l * a - u * s),
                            y: e + (l * s + u * a)
                        }
                    }, e.parsePathData = function(t) {
                        if (!t) return [];
                        var e = t,
                            n = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
                        e = e.replace(new RegExp(" ", "g"), ",");
                        for (var r = 0; r < n.length; r++) e = e.replace(new RegExp(n[r], "g"), "|" + n[r]);
                        var i, o = e.split("|"),
                            a = [],
                            s = [],
                            l = 0,
                            u = 0,
                            c = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
                        for (r = 1; r < o.length; r++) {
                            var h = o[r],
                                d = h.charAt(0);
                            for (h = h.slice(1), s.length = 0; i = c.exec(h);) s.push(i[0]);
                            for (var f = [], p = 0, g = s.length; p < g; p++) {
                                var y = parseFloat(s[p]);
                                isNaN(y) ? f.push(0) : f.push(y)
                            }
                            for (; f.length > 0 && !isNaN(f[0]);) {
                                var v, m, _, b, S, x, C, w, T, P, k = null,
                                    E = [],
                                    M = l,
                                    F = u;
                                switch (d) {
                                    case "l":
                                        l += f.shift(), u += f.shift(), k = "L", E.push(l, u);
                                        break;
                                    case "L":
                                        l = f.shift(), u = f.shift(), E.push(l, u);
                                        break;
                                    case "m":
                                        var O = f.shift(),
                                            N = f.shift();
                                        if (l += O, u += N, k = "M", a.length > 2 && "z" === a[a.length - 1].command)
                                            for (var A = a.length - 2; A >= 0; A--)
                                                if ("M" === a[A].command) {
                                                    l = a[A].points[0] + O, u = a[A].points[1] + N;
                                                    break
                                                }
                                        E.push(l, u), d = "l";
                                        break;
                                    case "M":
                                        l = f.shift(), u = f.shift(), k = "M", E.push(l, u), d = "L";
                                        break;
                                    case "h":
                                        l += f.shift(), k = "L", E.push(l, u);
                                        break;
                                    case "H":
                                        l = f.shift(), k = "L", E.push(l, u);
                                        break;
                                    case "v":
                                        u += f.shift(), k = "L", E.push(l, u);
                                        break;
                                    case "V":
                                        u = f.shift(), k = "L", E.push(l, u);
                                        break;
                                    case "C":
                                        E.push(f.shift(), f.shift(), f.shift(), f.shift()), l = f.shift(), u = f.shift(), E.push(l, u);
                                        break;
                                    case "c":
                                        E.push(l + f.shift(), u + f.shift(), l + f.shift(), u + f.shift()), l += f.shift(), u += f.shift(), k = "C", E.push(l, u);
                                        break;
                                    case "S":
                                        m = l, _ = u, "C" === (v = a[a.length - 1]).command && (m = l + (l - v.points[2]), _ = u + (u - v.points[3])), E.push(m, _, f.shift(), f.shift()), l = f.shift(), u = f.shift(), k = "C", E.push(l, u);
                                        break;
                                    case "s":
                                        m = l, _ = u, "C" === (v = a[a.length - 1]).command && (m = l + (l - v.points[2]), _ = u + (u - v.points[3])), E.push(m, _, l + f.shift(), u + f.shift()), l += f.shift(), u += f.shift(), k = "C", E.push(l, u);
                                        break;
                                    case "Q":
                                        E.push(f.shift(), f.shift()), l = f.shift(), u = f.shift(), E.push(l, u);
                                        break;
                                    case "q":
                                        E.push(l + f.shift(), u + f.shift()), l += f.shift(), u += f.shift(), k = "Q", E.push(l, u);
                                        break;
                                    case "T":
                                        m = l, _ = u, "Q" === (v = a[a.length - 1]).command && (m = l + (l - v.points[0]), _ = u + (u - v.points[1])), l = f.shift(), u = f.shift(), k = "Q", E.push(m, _, l, u);
                                        break;
                                    case "t":
                                        m = l, _ = u, "Q" === (v = a[a.length - 1]).command && (m = l + (l - v.points[0]), _ = u + (u - v.points[1])), l += f.shift(), u += f.shift(), k = "Q", E.push(m, _, l, u);
                                        break;
                                    case "A":
                                        b = f.shift(), S = f.shift(), x = f.shift(), C = f.shift(), w = f.shift(), T = l, P = u, l = f.shift(), u = f.shift(), k = "A", E = this.convertEndpointToCenterParameterization(T, P, l, u, C, w, b, S, x);
                                        break;
                                    case "a":
                                        b = f.shift(), S = f.shift(), x = f.shift(), C = f.shift(), w = f.shift(), T = l, P = u, l += f.shift(), u += f.shift(), k = "A", E = this.convertEndpointToCenterParameterization(T, P, l, u, C, w, b, S, x)
                                }
                                a.push({
                                    command: k || d,
                                    points: E,
                                    start: {
                                        x: M,
                                        y: F
                                    },
                                    pathLength: this.calcLength(M, F, k || d, E)
                                })
                            }
                            "z" !== d && "Z" !== d || a.push({
                                command: "z",
                                points: [],
                                start: void 0,
                                pathLength: 0
                            })
                        }
                        return a
                    }, e.calcLength = function(t, n, r, i) {
                        var o, a, s, l, u = e;
                        switch (r) {
                            case "L":
                                return u.getLineLength(t, n, i[0], i[1]);
                            case "C":
                                for (o = 0, a = u.getPointOnCubicBezier(0, t, n, i[0], i[1], i[2], i[3], i[4], i[5]), l = .01; l <= 1; l += .01) s = u.getPointOnCubicBezier(l, t, n, i[0], i[1], i[2], i[3], i[4], i[5]), o += u.getLineLength(a.x, a.y, s.x, s.y), a = s;
                                return o;
                            case "Q":
                                for (o = 0, a = u.getPointOnQuadraticBezier(0, t, n, i[0], i[1], i[2], i[3]), l = .01; l <= 1; l += .01) s = u.getPointOnQuadraticBezier(l, t, n, i[0], i[1], i[2], i[3]), o += u.getLineLength(a.x, a.y, s.x, s.y), a = s;
                                return o;
                            case "A":
                                o = 0;
                                var c = i[4],
                                    h = i[5],
                                    d = i[4] + h,
                                    f = Math.PI / 180;
                                if (Math.abs(c - d) < f && (f = Math.abs(c - d)), a = u.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], c, 0), h < 0)
                                    for (l = c - f; l > d; l -= f) s = u.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), o += u.getLineLength(a.x, a.y, s.x, s.y), a = s;
                                else
                                    for (l = c + f; l < d; l += f) s = u.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), o += u.getLineLength(a.x, a.y, s.x, s.y), a = s;
                                return s = u.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], d, 0), o += u.getLineLength(a.x, a.y, s.x, s.y)
                        }
                        return 0
                    }, e.convertEndpointToCenterParameterization = function(t, e, n, r, i, o, a, s, l) {
                        var u = l * (Math.PI / 180),
                            c = Math.cos(u) * (t - n) / 2 + Math.sin(u) * (e - r) / 2,
                            h = -1 * Math.sin(u) * (t - n) / 2 + Math.cos(u) * (e - r) / 2,
                            d = c * c / (a * a) + h * h / (s * s);
                        d > 1 && (a *= Math.sqrt(d), s *= Math.sqrt(d));
                        var f = Math.sqrt((a * a * (s * s) - a * a * (h * h) - s * s * (c * c)) / (a * a * (h * h) + s * s * (c * c)));
                        i === o && (f *= -1), isNaN(f) && (f = 0);
                        var p = f * a * h / s,
                            g = f * -s * c / a,
                            y = (t + n) / 2 + Math.cos(u) * p - Math.sin(u) * g,
                            v = (e + r) / 2 + Math.sin(u) * p + Math.cos(u) * g,
                            m = function(t) {
                                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
                            },
                            _ = function(t, e) {
                                return (t[0] * e[0] + t[1] * e[1]) / (m(t) * m(e))
                            },
                            b = function(t, e) {
                                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(_(t, e))
                            },
                            S = b([1, 0], [(c - p) / a, (h - g) / s]),
                            x = [(c - p) / a, (h - g) / s],
                            C = [(-1 * c - p) / a, (-1 * h - g) / s],
                            w = b(x, C);
                        return _(x, C) <= -1 && (w = Math.PI), _(x, C) >= 1 && (w = 0), 0 === o && w > 0 && (w -= 2 * Math.PI), 1 === o && w < 0 && (w += 2 * Math.PI), [y, v, a, s, S, w, u, o]
                    }, e
                }(a.Shape);
            e.Path = l, l.prototype.className = "Path", l.prototype._attrsAffectingSize = ["data"], s._registerNode(l), o.Factory.addGetterSetter(l, "data"), i.Collection.mapMethods(l)
        },
        428: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(299),
                l = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        var e = this.cornerRadius(),
                            n = this.width(),
                            r = this.height();
                        if (t.beginPath(), e) {
                            var i = 0,
                                o = 0,
                                a = 0,
                                s = 0;
                            "number" === typeof e ? i = o = a = s = Math.min(e, n / 2, r / 2) : (i = Math.min(e[0], n / 2, r / 2), o = Math.min(e[1], n / 2, r / 2), s = Math.min(e[2], n / 2, r / 2), a = Math.min(e[3], n / 2, r / 2)), t.moveTo(i, 0), t.lineTo(n - o, 0), t.arc(n - o, o, o, 3 * Math.PI / 2, 0, !1), t.lineTo(n, r - s), t.arc(n - s, r - s, s, 0, Math.PI / 2, !1), t.lineTo(a, r), t.arc(a, r - a, a, Math.PI / 2, Math.PI, !1), t.lineTo(0, i), t.arc(i, i, i, Math.PI, 3 * Math.PI / 2, !1)
                        } else t.rect(0, 0, n, r);
                        t.closePath(), t.fillStrokeShape(this)
                    }, e
                }(a.Shape);
            e.Rect = l, l.prototype.className = "Rect", s._registerNode(l), o.Factory.addGetterSetter(l, "cornerRadius", 0), i.Collection.mapMethods(l)
        },
        429: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, o = n(301),
                a = n(298),
                s = n(303),
                l = n(299),
                u = n(300),
                c = n(299),
                h = ["fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "verticalAlign", "lineHeight", "text", "width", "height", "wrap", "ellipsis", "letterSpacing"],
                d = h.length;

            function f() {
                return i || (i = o.Util.createCanvasElement().getContext("2d"))
            }
            String.prototype.trimRight;
            var p = function(t) {
                function e(e) {
                    var n = t.call(this, function(t) {
                        return (t = t || {}).fillLinearGradientColorStops || t.fillRadialGradientColorStops || t.fillPatternImage || (t.fill = t.fill || "black"), t
                    }(e)) || this;
                    n._partialTextX = 0, n._partialTextY = 0;
                    for (var r = 0; r < d; r++) n.on(h[r] + "Change.konva", n._setTextData);
                    return n._setTextData(), n
                }
                return r(e, t), e.prototype._sceneFunc = function(t) {
                    var e, n = this.padding(),
                        r = this.fontSize(),
                        i = this.lineHeight() * r,
                        o = this.textArr,
                        a = o.length,
                        s = this.verticalAlign(),
                        l = 0,
                        u = this.align(),
                        c = this.getWidth(),
                        h = this.letterSpacing(),
                        d = this.fill(),
                        f = this.textDecoration(),
                        p = -1 !== f.indexOf("underline"),
                        g = -1 !== f.indexOf("line-through"),
                        y = 0,
                        v = (y = i / 2, 0),
                        m = 0;
                    for (t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", "middle"), t.setAttr("textAlign", "left"), "middle" === s ? l = (this.getHeight() - a * i - 2 * n) / 2 : "bottom" === s && (l = this.getHeight() - a * i - 2 * n), t.translate(n, l + n), e = 0; e < a; e++) {
                        v = 0, m = 0;
                        var _, b, S, x = o[e],
                            C = x.text,
                            w = x.width,
                            T = e !== a - 1;
                        if (t.save(), "right" === u ? v += c - w - 2 * n : "center" === u && (v += (c - w - 2 * n) / 2), p && (t.save(), t.beginPath(), t.moveTo(v, y + m + Math.round(r / 2)), b = 0 === (_ = C.split(" ").length - 1), S = "justify" === u && T && !b ? c - 2 * n : w, t.lineTo(v + Math.round(S), y + m + Math.round(r / 2)), t.lineWidth = r / 15, t.strokeStyle = d, t.stroke(), t.restore()), g && (t.save(), t.beginPath(), t.moveTo(v, y + m), b = 0 === (_ = C.split(" ").length - 1), S = "justify" === u && T && !b ? c - 2 * n : w, t.lineTo(v + Math.round(S), y + m), t.lineWidth = r / 15, t.strokeStyle = d, t.stroke(), t.restore()), 0 !== h || "justify" === u) {
                            _ = C.split(" ").length - 1;
                            for (var P = 0; P < C.length; P++) {
                                var k = C[P];
                                " " === k && e !== a - 1 && "justify" === u && (v += Math.floor((c - 2 * n - w) / _)), this._partialTextX = v, this._partialTextY = y + m, this._partialText = k, t.fillStrokeShape(this), v += Math.round(this.measureSize(k).width) + h
                            }
                        } else this._partialTextX = v, this._partialTextY = y + m, this._partialText = C, t.fillStrokeShape(this);
                        t.restore(), a > 1 && (y += i)
                    }
                }, e.prototype._hitFunc = function(t) {
                    var e = this.getWidth(),
                        n = this.getHeight();
                    t.beginPath(), t.rect(0, 0, e, n), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.setText = function(t) {
                    var e = o.Util._isString(t) ? t : null === t || void 0 === t ? "" : t + "";
                    return this._setAttr("text", e), this
                }, e.prototype.getWidth = function() {
                    return "auto" === this.attrs.width || void 0 === this.attrs.width ? this.getTextWidth() + 2 * this.padding() : this.attrs.width
                }, e.prototype.getHeight = function() {
                    return "auto" === this.attrs.height || void 0 === this.attrs.height ? this.fontSize() * this.textArr.length * this.lineHeight() + 2 * this.padding() : this.attrs.height
                }, e.prototype.getTextWidth = function() {
                    return this.textWidth
                }, e.prototype.getTextHeight = function() {
                    return o.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight
                }, e.prototype.measureSize = function(t) {
                    var e, n = f(),
                        r = this.fontSize();
                    return n.save(), n.font = this._getContextFont(), e = n.measureText(t), n.restore(), {
                        width: e.width,
                        height: r
                    }
                }, e.prototype._getContextFont = function() {
                    return l.Konva.UA.isIE ? this.fontStyle() + " " + this.fontSize() + "px " + this.fontFamily() : this.fontStyle() + " " + this.fontVariant() + " " + this.fontSize() + "px " + this.fontFamily()
                }, e.prototype._addTextLine = function(t) {
                    "justify" === this.align() && (t = t.trim());
                    var e = this._getTextWidth(t);
                    return this.textArr.push({
                        text: t,
                        width: e
                    })
                }, e.prototype._getTextWidth = function(t) {
                    var e = this.letterSpacing(),
                        n = t.length;
                    return f().measureText(t).width + (n ? e * (n - 1) : 0)
                }, e.prototype._setTextData = function() {
                    var t = this.text().split("\n"),
                        e = +this.fontSize(),
                        n = 0,
                        r = this.lineHeight() * e,
                        i = this.attrs.width,
                        o = this.attrs.height,
                        a = "auto" !== i && void 0 !== i,
                        s = "auto" !== o && void 0 !== o,
                        l = this.padding(),
                        u = i - 2 * l,
                        c = o - 2 * l,
                        h = 0,
                        d = this.wrap(),
                        p = "none" !== d,
                        g = "char" !== d && p,
                        y = this.ellipsis() && !p;
                    this.textArr = [], f().font = this._getContextFont();
                    for (var v = y ? this._getTextWidth("\u2026") : 0, m = 0, _ = t.length; m < _; ++m) {
                        var b = t[m],
                            S = this._getTextWidth(b);
                        if (a && S > u)
                            for (; b.length > 0;) {
                                for (var x = 0, C = b.length, w = "", T = 0; x < C;) {
                                    var P = x + C >>> 1,
                                        k = b.slice(0, P + 1),
                                        E = this._getTextWidth(k) + v;
                                    E <= u ? (x = P + 1, w = k + (y ? "\u2026" : ""), T = E) : C = P
                                }
                                if (!w) break;
                                if (g) {
                                    var M, F = b[w.length];
                                    (M = (" " === F || "-" === F) && T <= u ? w.length : Math.max(w.lastIndexOf(" "), w.lastIndexOf("-")) + 1) > 0 && (x = M, w = w.slice(0, x), T = this._getTextWidth(w))
                                }
                                if (w = w.trimRight(), this._addTextLine(w), n = Math.max(n, T), h += r, !p || s && h + r > c) break;
                                if ((b = (b = b.slice(x)).trimLeft()).length > 0 && (S = this._getTextWidth(b)) <= u) {
                                    this._addTextLine(b), h += r, n = Math.max(n, S);
                                    break
                                }
                            } else this._addTextLine(b), h += r, n = Math.max(n, S);
                        if (s && h + r > c) break
                    }
                    this.textHeight = e, this.textWidth = n
                }, e.prototype.getStrokeScaleEnabled = function() {
                    return !0
                }, e
            }(s.Shape);
            e.Text = p, p.prototype._fillFunc = function(t) {
                t.fillText(this._partialText, this._partialTextX, this._partialTextY)
            }, p.prototype._strokeFunc = function(t) {
                t.strokeText(this._partialText, this._partialTextX, this._partialTextY)
            }, p.prototype.className = "Text", p.prototype._attrsAffectingSize = ["text", "fontSize", "padding", "wrap", "lineHeight"], c._registerNode(p), a.Factory.overWriteSetter(p, "width", u.getNumberOrAutoValidator()), a.Factory.overWriteSetter(p, "height", u.getNumberOrAutoValidator()), a.Factory.addGetterSetter(p, "fontFamily", "Arial"), a.Factory.addGetterSetter(p, "fontSize", 12, u.getNumberValidator()), a.Factory.addGetterSetter(p, "fontStyle", "normal"), a.Factory.addGetterSetter(p, "fontVariant", "normal"), a.Factory.addGetterSetter(p, "padding", 0, u.getNumberValidator()), a.Factory.addGetterSetter(p, "align", "left"), a.Factory.addGetterSetter(p, "verticalAlign", "top"), a.Factory.addGetterSetter(p, "lineHeight", 1, u.getNumberValidator()), a.Factory.addGetterSetter(p, "wrap", "word"), a.Factory.addGetterSetter(p, "ellipsis", !1), a.Factory.addGetterSetter(p, "letterSpacing", 0, u.getNumberValidator()), a.Factory.addGetterSetter(p, "text", "", u.getStringValidator()), a.Factory.addGetterSetter(p, "textDecoration", ""), o.Collection.mapMethods(p)
        },
        565: function(t, e, n) {
            "use strict";
            var r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            };

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }
            var a = n(2),
                s = n(419),
                l = n(570),
                u = n(572),
                c = n(573),
                h = n(424),
                d = h.applyNodeProps,
                f = h.toggleStrictMode,
                p = function(t) {
                    function e() {
                        return i(this, e), o(this, t.apply(this, arguments))
                    }
                    return function(t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), e.prototype.componentDidMount = function() {
                        s.isBrowser && (this._stage = new s.Stage({
                            width: this.props.width,
                            height: this.props.height,
                            container: this._tagRef
                        }), this._setRef(this._stage), d(this._stage, this.props), this._mountNode = y.createContainer(this._stage), y.updateContainer(this.props.children, this._mountNode, this))
                    }, e.prototype._setRef = function(t) {
                        var e = this.props.forwardedRef;
                        e && ("function" === typeof e ? e(t) : e.current = t)
                    }, e.prototype.componentDidUpdate = function(t) {
                        s.isBrowser && (this._setRef(this._stage), d(this._stage, this.props, t), y.updateContainer(this.props.children, this._mountNode, this))
                    }, e.prototype.componentWillUnmount = function() {
                        s.isBrowser && (this._setRef(null), y.updateContainer(null, this._mountNode, this), this._stage.destroy())
                    }, e.prototype.getStage = function() {
                        return this._stage
                    }, e.prototype.render = function() {
                        var t = this,
                            e = this.props;
                        return a.createElement("div", {
                            ref: function(e) {
                                return t._tagRef = e
                            },
                            accessKey: e.accessKey,
                            className: e.className,
                            role: e.role,
                            style: e.style,
                            tabIndex: e.tabIndex,
                            title: e.title
                        })
                    }, e
                }(a.Component),
                g = {};
            ["Layer", "FastLayer", "Group", "Label", "Rect", "Circle", "Ellipse", "Wedge", "Line", "Sprite", "Image", "Text", "TextPath", "Star", "Ring", "Arc", "Tag", "Path", "RegularPolygon", "Arrow", "Shape", "Transformer"].forEach((function(t) {
                g[t] = t
            }));
            var y = l(c);
            y.injectIntoDevTools({
                findFiberByHostInstance: u.getClosestInstanceFromNode,
                bundleType: 0,
                version: a.version,
                rendererPackageName: "react-konva",
                getInspectorDataForViewTag: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.log(e)
                }
            });
            var v = a.forwardRef((function(t, e) {
                return a.createElement(p, r({}, t, {
                    forwardedRef: e
                }))
            }));
            t.exports = r({}, g, {
                __matchRectVersion: !0,
                Stage: v,
                useStrictMode: f
            })
        },
        566: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(337),
                s = n(299),
                l = n(348),
                u = n(360),
                c = n(299),
                h = n(422),
                d = ["mouseenter", "mousedown", "mousemove", "mouseup", "mouseout", "touchstart", "touchmove", "touchend", "mouseover", "wheel", "contextmenu", "pointerdown", "pointermove", "pointerup", "pointercancel", "lostpointercapture"],
                f = d.length;

            function p(t, e) {
                t.content.addEventListener(e, (function(n) {
                    t["_" + e](n)
                }), !1)
            }

            function g(t) {
                return void 0 === t && (t = {}), (t.clipFunc || t.clipWidth || t.clipHeight) && i.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), t
            }
            e.stages = [];
            var y = function(t) {
                function n(n) {
                    var r = t.call(this, g(n)) || this;
                    return r._pointerPositions = [], r._changedPointerPositions = [], r._buildDOM(), r._bindContentEvents(), e.stages.push(r), r.on("widthChange.konva heightChange.konva", r._resizeDOM), r.on("visibleChange.konva", r._checkVisibility), r.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", (function() {
                        g(r.attrs)
                    })), r._checkVisibility(), r
                }
                return r(n, t), n.prototype._validateAdd = function(t) {
                    var e = "Layer" === t.getType(),
                        n = "FastLayer" === t.getType();
                    e || n || i.Util.throw("You may only add layers to the stage.")
                }, n.prototype._checkVisibility = function() {
                    var t = this.visible() ? "" : "none";
                    this.content.style.display = t
                }, n.prototype.setContainer = function(t) {
                    if ("string" === typeof t) {
                        if ("." === t.charAt(0)) {
                            var e = t.slice(1);
                            t = document.getElementsByClassName(e)[0]
                        } else {
                            var n;
                            n = "#" !== t.charAt(0) ? t : t.slice(1), t = document.getElementById(n)
                        }
                        if (!t) throw "Can not find container in document with id " + n
                    }
                    return this._setAttr("container", t), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), t.appendChild(this.content)), this
                }, n.prototype.shouldDrawHit = function() {
                    return !0
                }, n.prototype.clear = function() {
                    var t, e = this.children,
                        n = e.length;
                    for (t = 0; t < n; t++) e[t].clear();
                    return this
                }, n.prototype.clone = function(t) {
                    return t || (t = {}), t.container = document.createElement("div"), a.Container.prototype.clone.call(this, t)
                }, n.prototype.destroy = function() {
                    t.prototype.destroy.call(this);
                    var n = this.content;
                    n && i.Util._isInDocument(n) && this.container().removeChild(n);
                    var r = e.stages.indexOf(this);
                    return r > -1 && e.stages.splice(r, 1), this
                }, n.prototype.getPointerPosition = function() {
                    var t = this._pointerPositions[0] || this._changedPointerPositions[0];
                    return t ? {
                        x: t.x,
                        y: t.y
                    } : (i.Util.warn("Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"), null)
                }, n.prototype._getPointerById = function(t) {
                    return this._pointerPositions.find((function(e) {
                        return e.id === t
                    }))
                }, n.prototype.getPointersPositions = function() {
                    return this._pointerPositions
                }, n.prototype.getStage = function() {
                    return this
                }, n.prototype.getContent = function() {
                    return this.content
                }, n.prototype._toKonvaCanvas = function(t) {
                    var e = (t = t || {}).x || 0,
                        n = t.y || 0,
                        r = new l.SceneCanvas({
                            width: t.width || this.width(),
                            height: t.height || this.height(),
                            pixelRatio: t.pixelRatio || 1
                        }),
                        i = r.getContext()._context,
                        o = this.children;
                    return (e || n) && i.translate(-1 * e, -1 * n), o.each((function(r) {
                        if (r.isVisible()) {
                            var o = r._toKonvaCanvas(t);
                            i.drawImage(o._canvas, e, n, o.getWidth() / o.getPixelRatio(), o.getHeight() / o.getPixelRatio())
                        }
                    })), r
                }, n.prototype.getIntersection = function(t, e) {
                    if (!t) return null;
                    var n, r, i = this.children;
                    for (n = i.length - 1; n >= 0; n--)
                        if (r = i[n].getIntersection(t, e)) return r;
                    return null
                }, n.prototype._resizeDOM = function() {
                    if (this.content) {
                        var t, e, n = this.width(),
                            r = this.height(),
                            i = this.getChildren(),
                            o = i.length;
                        for (this.content.style.width = n + "px", this.content.style.height = r + "px", this.bufferCanvas.setSize(n, r), this.bufferHitCanvas.setSize(n, r), t = 0; t < o; t++)(e = i[t]).setSize({
                            width: n,
                            height: r
                        }), e.draw()
                    }
                }, n.prototype.add = function(e) {
                    if (arguments.length > 1) {
                        for (var n = 0; n < arguments.length; n++) this.add(arguments[n]);
                        return this
                    }
                    t.prototype.add.call(this, e);
                    var r = this.children.length;
                    return r > 5 && i.Util.warn("The stage has " + r + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), e._setCanvasSize(this.width(), this.height()), e.draw(), s.Konva.isBrowser && this.content.appendChild(e.canvas._canvas), this
                }, n.prototype.getParent = function() {
                    return null
                }, n.prototype.getLayer = function() {
                    return null
                }, n.prototype.hasPointerCapture = function(t) {
                    return h.hasPointerCapture(t, this)
                }, n.prototype.setPointerCapture = function(t) {
                    h.setPointerCapture(t, this)
                }, n.prototype.releaseCapture = function(t) {
                    h.releaseCapture(t, this)
                }, n.prototype.getLayers = function() {
                    return this.getChildren()
                }, n.prototype._bindContentEvents = function() {
                    if (s.Konva.isBrowser)
                        for (var t = 0; t < f; t++) p(this, d[t])
                }, n.prototype._mouseenter = function(t) {
                    this.setPointersPositions(t), this._fire("mouseenter", {
                        evt: t,
                        target: this,
                        currentTarget: this
                    })
                }, n.prototype._mouseover = function(t) {
                    this.setPointersPositions(t), this._fire("contentMouseover", {
                        evt: t
                    }), this._fire("mouseover", {
                        evt: t,
                        target: this,
                        currentTarget: this
                    })
                }, n.prototype._mouseout = function(t) {
                    this.setPointersPositions(t);
                    var e = this.targetShape,
                        n = !u.DD.isDragging || s.Konva.hitOnDragEnabled;
                    e && n ? (e._fireAndBubble("mouseout", {
                        evt: t
                    }), e._fireAndBubble("mouseleave", {
                        evt: t
                    }), this._fire("mouseleave", {
                        evt: t,
                        target: this,
                        currentTarget: this
                    }), this.targetShape = null) : n && (this._fire("mouseleave", {
                        evt: t,
                        target: this,
                        currentTarget: this
                    }), this._fire("mouseout", {
                        evt: t,
                        target: this,
                        currentTarget: this
                    })), this.pointerPos = void 0, this._pointerPositions = [], this._fire("contentMouseout", {
                        evt: t
                    })
                }, n.prototype._mousemove = function(t) {
                    if (s.Konva.UA.ieMobile) return this._touchmove(t);
                    this.setPointersPositions(t);
                    var e, n = i.Util._getFirstPointerId(t),
                        r = !u.DD.isDragging || s.Konva.hitOnDragEnabled;
                    if (r) {
                        if ((e = this.getIntersection(this.getPointerPosition())) && e.isListening()) {
                            var o = !this.targetShape || this.targetShape !== e;
                            r && o ? (this.targetShape && (this.targetShape._fireAndBubble("mouseout", {
                                evt: t,
                                pointerId: n
                            }, e), this.targetShape._fireAndBubble("mouseleave", {
                                evt: t,
                                pointerId: n
                            }, e)), e._fireAndBubble("mouseover", {
                                evt: t,
                                pointerId: n
                            }, this.targetShape), e._fireAndBubble("mouseenter", {
                                evt: t,
                                pointerId: n
                            }, this.targetShape), e._fireAndBubble("mousemove", {
                                evt: t,
                                pointerId: n
                            }), this.targetShape = e) : e._fireAndBubble("mousemove", {
                                evt: t,
                                pointerId: n
                            })
                        } else this.targetShape && r && (this.targetShape._fireAndBubble("mouseout", {
                            evt: t,
                            pointerId: n
                        }), this.targetShape._fireAndBubble("mouseleave", {
                            evt: t,
                            pointerId: n
                        }), this._fire("mouseover", {
                            evt: t,
                            target: this,
                            currentTarget: this,
                            pointerId: n
                        }), this.targetShape = null), this._fire("mousemove", {
                            evt: t,
                            target: this,
                            currentTarget: this,
                            pointerId: n
                        });
                        this._fire("contentMousemove", {
                            evt: t
                        })
                    }
                    t.cancelable && t.preventDefault()
                }, n.prototype._mousedown = function(t) {
                    if (s.Konva.UA.ieMobile) return this._touchstart(t);
                    this.setPointersPositions(t);
                    var e = i.Util._getFirstPointerId(t),
                        n = this.getIntersection(this.getPointerPosition());
                    u.DD.justDragged = !1, s.Konva.listenClickTap = !0, n && n.isListening() ? (this.clickStartShape = n, n._fireAndBubble("mousedown", {
                        evt: t,
                        pointerId: e
                    })) : this._fire("mousedown", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: e
                    }), this._fire("contentMousedown", {
                        evt: t
                    })
                }, n.prototype._mouseup = function(t) {
                    if (s.Konva.UA.ieMobile) return this._touchend(t);
                    this.setPointersPositions(t);
                    var e = i.Util._getFirstPointerId(t),
                        n = this.getIntersection(this.getPointerPosition()),
                        r = this.clickStartShape,
                        o = this.clickEndShape,
                        a = !1;
                    s.Konva.inDblClickWindow ? (a = !0, clearTimeout(this.dblTimeout)) : u.DD.justDragged || (s.Konva.inDblClickWindow = !0, clearTimeout(this.dblTimeout)), this.dblTimeout = setTimeout((function() {
                        s.Konva.inDblClickWindow = !1
                    }), s.Konva.dblClickWindow), n && n.isListening() ? (this.clickEndShape = n, n._fireAndBubble("mouseup", {
                        evt: t,
                        pointerId: e
                    }), s.Konva.listenClickTap && r && r._id === n._id && (n._fireAndBubble("click", {
                        evt: t,
                        pointerId: e
                    }), a && o && o === n && n._fireAndBubble("dblclick", {
                        evt: t,
                        pointerId: e
                    }))) : (this._fire("mouseup", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: e
                    }), s.Konva.listenClickTap && this._fire("click", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: e
                    }), a && this._fire("dblclick", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: e
                    })), this._fire("contentMouseup", {
                        evt: t
                    }), s.Konva.listenClickTap && (this._fire("contentClick", {
                        evt: t
                    }), a && this._fire("contentDblclick", {
                        evt: t
                    })), s.Konva.listenClickTap = !1, t.cancelable && t.preventDefault()
                }, n.prototype._contextmenu = function(t) {
                    this.setPointersPositions(t);
                    var e = this.getIntersection(this.getPointerPosition());
                    e && e.isListening() ? e._fireAndBubble("contextmenu", {
                        evt: t
                    }) : this._fire("contextmenu", {
                        evt: t,
                        target: this,
                        currentTarget: this
                    }), this._fire("contentContextmenu", {
                        evt: t
                    })
                }, n.prototype._touchstart = function(t) {
                    var e = this;
                    this.setPointersPositions(t);
                    var n = !1;
                    this._changedPointerPositions.forEach((function(r) {
                        var i = e.getIntersection(r);
                        s.Konva.listenClickTap = !0, u.DD.justDragged = !1, i && i.isListening() && (s.Konva.captureTouchEventsEnabled && i.setPointerCapture(r.id), e.tapStartShape = i, i._fireAndBubble("touchstart", {
                            evt: t,
                            pointerId: r.id
                        }, e), n = !0, i.isListening() && i.preventDefault() && t.cancelable && t.preventDefault())
                    })), n || this._fire("touchstart", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), this._fire("contentTouchstart", {
                        evt: t
                    })
                }, n.prototype._touchmove = function(t) {
                    var e = this;
                    if (this.setPointersPositions(t), !u.DD.isDragging || s.Konva.hitOnDragEnabled) {
                        var n = !1,
                            r = {};
                        this._changedPointerPositions.forEach((function(i) {
                            var o = h.getCapturedShape(i.id) || e.getIntersection(i);
                            o && o.isListening() && (r[o._id] || (r[o._id] = !0, o._fireAndBubble("touchmove", {
                                evt: t,
                                pointerId: i.id
                            }), n = !0, o.isListening() && o.preventDefault() && t.cancelable && t.preventDefault()))
                        })), n || this._fire("touchmove", {
                            evt: t,
                            target: this,
                            currentTarget: this,
                            pointerId: this._changedPointerPositions[0].id
                        }), this._fire("contentTouchmove", {
                            evt: t
                        })
                    }
                    u.DD.isDragging && u.DD.node.preventDefault() && t.cancelable && t.preventDefault()
                }, n.prototype._touchend = function(t) {
                    var e = this;
                    this.setPointersPositions(t);
                    var n = this.clickEndShape,
                        r = !1;
                    s.Konva.inDblClickWindow ? (r = !0, clearTimeout(this.dblTimeout)) : u.DD.justDragged || (s.Konva.inDblClickWindow = !0, clearTimeout(this.dblTimeout)), this.dblTimeout = setTimeout((function() {
                        s.Konva.inDblClickWindow = !1
                    }), s.Konva.dblClickWindow);
                    var i = !1,
                        o = {},
                        a = !1,
                        l = !1;
                    this._changedPointerPositions.forEach((function(u) {
                        var c = h.getCapturedShape(u.id) || e.getIntersection(u);
                        c && c.releaseCapture(u.id), c && c.isListening() && (o[c._id] || (o[c._id] = !0, e.clickEndShape = c, c._fireAndBubble("touchend", {
                            evt: t,
                            pointerId: u.id
                        }), i = !0, s.Konva.listenClickTap && c === e.tapStartShape && (a = !0, c._fireAndBubble("tap", {
                            evt: t,
                            pointerId: u.id
                        }), r && n && n === c && (l = !0, c._fireAndBubble("dbltap", {
                            evt: t,
                            pointerId: u.id
                        }))), c.isListening() && c.preventDefault() && t.cancelable && t.preventDefault()))
                    })), i || this._fire("touchend", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), s.Konva.listenClickTap && !a && this._fire("tap", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), r && !l && this._fire("dbltap", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), this._fire("contentTouchend", {
                        evt: t
                    }), s.Konva.listenClickTap && (this._fire("contentTap", {
                        evt: t
                    }), r && this._fire("contentDbltap", {
                        evt: t
                    })), s.Konva.listenClickTap = !1
                }, n.prototype._wheel = function(t) {
                    this.setPointersPositions(t);
                    var e = this.getIntersection(this.getPointerPosition());
                    e && e.isListening() ? e._fireAndBubble("wheel", {
                        evt: t
                    }) : this._fire("wheel", {
                        evt: t,
                        target: this,
                        currentTarget: this
                    }), this._fire("contentWheel", {
                        evt: t
                    })
                }, n.prototype._pointerdown = function(t) {
                    if (s.Konva._pointerEventsEnabled) {
                        this.setPointersPositions(t);
                        var e = h.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                        e && e._fireAndBubble("pointerdown", h.createEvent(t))
                    }
                }, n.prototype._pointermove = function(t) {
                    if (s.Konva._pointerEventsEnabled) {
                        this.setPointersPositions(t);
                        var e = h.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                        e && e._fireAndBubble("pointermove", h.createEvent(t))
                    }
                }, n.prototype._pointerup = function(t) {
                    if (s.Konva._pointerEventsEnabled) {
                        this.setPointersPositions(t);
                        var e = h.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                        e && e._fireAndBubble("pointerup", h.createEvent(t)), h.releaseCapture(t.pointerId)
                    }
                }, n.prototype._pointercancel = function(t) {
                    if (s.Konva._pointerEventsEnabled) {
                        this.setPointersPositions(t);
                        var e = h.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                        e && e._fireAndBubble("pointerup", h.createEvent(t)), h.releaseCapture(t.pointerId)
                    }
                }, n.prototype._lostpointercapture = function(t) {
                    h.releaseCapture(t.pointerId)
                }, n.prototype.setPointersPositions = function(t) {
                    var e = this,
                        n = this._getContentPosition(),
                        r = null,
                        o = null;
                    void 0 !== (t = t || window.event).touches ? (this._pointerPositions = [], this._changedPointerPositions = [], i.Collection.prototype.each.call(t.touches, (function(t) {
                        e._pointerPositions.push({
                            id: t.identifier,
                            x: (t.clientX - n.left) / n.scaleX,
                            y: (t.clientY - n.top) / n.scaleY
                        })
                    })), i.Collection.prototype.each.call(t.changedTouches || t.touches, (function(t) {
                        e._changedPointerPositions.push({
                            id: t.identifier,
                            x: (t.clientX - n.left) / n.scaleX,
                            y: (t.clientY - n.top) / n.scaleY
                        })
                    }))) : (r = (t.clientX - n.left) / n.scaleX, o = (t.clientY - n.top) / n.scaleY, this.pointerPos = {
                        x: r,
                        y: o
                    }, this._pointerPositions = [{
                        x: r,
                        y: o,
                        id: i.Util._getFirstPointerId(t)
                    }], this._changedPointerPositions = [{
                        x: r,
                        y: o,
                        id: i.Util._getFirstPointerId(t)
                    }])
                }, n.prototype._setPointerPosition = function(t) {
                    i.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(t)
                }, n.prototype._getContentPosition = function() {
                    var t = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : {
                        top: 0,
                        left: 0,
                        width: 1e3,
                        height: 1e3
                    };
                    return {
                        top: t.top,
                        left: t.left,
                        scaleX: t.width / this.content.clientWidth || 1,
                        scaleY: t.height / this.content.clientHeight || 1
                    }
                }, n.prototype._buildDOM = function() {
                    if (this.bufferCanvas = new l.SceneCanvas, this.bufferHitCanvas = new l.HitCanvas({
                            pixelRatio: 1
                        }), s.Konva.isBrowser) {
                        var t = this.container();
                        if (!t) throw "Stage has no container. A container is required.";
                        t.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), t.appendChild(this.content), this._resizeDOM()
                    }
                }, n.prototype.cache = function() {
                    return i.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this
                }, n.prototype.clearCache = function() {
                    return this
                }, n.prototype.batchDraw = function() {
                    return this.children.each((function(t) {
                        t.batchDraw()
                    })), this
                }, n
            }(a.Container);
            e.Stage = y, y.prototype.nodeType = "Stage", c._registerNode(y), o.Factory.addGetterSetter(y, "container")
        },
        567: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(337),
                a = n(298),
                s = n(423),
                l = n(348),
                u = n(303),
                c = n(300),
                h = n(299),
                d = [{
                    x: 0,
                    y: 0
                }, {
                    x: -1,
                    y: -1
                }, {
                    x: 1,
                    y: -1
                }, {
                    x: 1,
                    y: 1
                }, {
                    x: -1,
                    y: 1
                }],
                f = d.length,
                p = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.hitCanvas = new l.HitCanvas({
                            pixelRatio: 1
                        }), e
                    }
                    return r(e, t), e.prototype._setCanvasSize = function(t, e) {
                        this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e), this._checkSmooth()
                    }, e.prototype._validateAdd = function(t) {
                        var e = t.getType();
                        "Group" !== e && "Shape" !== e && i.Util.throw("You may only add groups and shapes to a layer.")
                    }, e.prototype.getIntersection = function(t, e) {
                        var n, r, i, o;
                        if (!this.hitGraphEnabled() || !this.isVisible()) return null;
                        for (var a = 1, s = !1;;) {
                            for (r = 0; r < f; r++) {
                                if (i = d[r], (o = (n = this._getIntersection({
                                        x: t.x + i.x * a,
                                        y: t.y + i.y * a
                                    })).shape) && e) return o.findAncestor(e, !0);
                                if (o) return o;
                                if (s = !!n.antialiased, !n.antialiased) break
                            }
                            if (!s) return null;
                            a += 1
                        }
                    }, e.prototype._getIntersection = function(t) {
                        var e, n, r = this.hitCanvas.pixelRatio,
                            o = this.hitCanvas.context.getImageData(Math.round(t.x * r), Math.round(t.y * r), 1, 1).data,
                            a = o[3];
                        return 255 === a ? (e = i.Util._rgbToHex(o[0], o[1], o[2]), (n = u.shapes["#" + e]) ? {
                            shape: n
                        } : {
                            antialiased: !0
                        }) : a > 0 ? {
                            antialiased: !0
                        } : {}
                    }, e.prototype.drawScene = function(t, e) {
                        var n = this.getLayer(),
                            r = t || n && n.getCanvas();
                        return this._fire("beforeDraw", {
                            node: this
                        }), this.clearBeforeDraw() && r.getContext().clear(), o.Container.prototype.drawScene.call(this, r, e), this._fire("draw", {
                            node: this
                        }), this
                    }, e.prototype.drawHit = function(t, e) {
                        var n = this.getLayer(),
                            r = t || n && n.hitCanvas;
                        return n && n.clearBeforeDraw() && n.getHitCanvas().getContext().clear(), o.Container.prototype.drawHit.call(this, r, e), this
                    }, e.prototype.clear = function(t) {
                        return s.BaseLayer.prototype.clear.call(this, t), this.getHitCanvas().getContext().clear(t), this
                    }, e.prototype.enableHitGraph = function() {
                        return this.hitGraphEnabled(!0), this
                    }, e.prototype.disableHitGraph = function() {
                        return this.hitGraphEnabled(!1), this
                    }, e.prototype.toggleHitCanvas = function() {
                        if (this.parent) {
                            var t = this.parent;
                            !!this.hitCanvas._canvas.parentNode ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas)
                        }
                    }, e.prototype.setSize = function(e) {
                        var n = e.width,
                            r = e.height;
                        return t.prototype.setSize.call(this, {
                            width: n,
                            height: r
                        }), this.hitCanvas.setSize(n, r), this
                    }, e
                }(s.BaseLayer);
            e.Layer = p, p.prototype.nodeType = "Layer", h._registerNode(p), a.Factory.addGetterSetter(p, "hitGraphEnabled", !0, c.getBooleanValidator()), i.Collection.mapMethods(p)
        },
        568: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(337),
                a = n(423),
                s = n(299),
                l = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._validateAdd = function(t) {
                        "Shape" !== t.getType() && i.Util.throw("You may only add shapes to a fast layer.")
                    }, e.prototype._setCanvasSize = function(t, e) {
                        this.canvas.setSize(t, e), this._checkSmooth()
                    }, e.prototype.hitGraphEnabled = function() {
                        return !1
                    }, e.prototype.drawScene = function(t) {
                        var e = this.getLayer(),
                            n = t || e && e.getCanvas();
                        return this.clearBeforeDraw() && n.getContext().clear(), o.Container.prototype.drawScene.call(this, n), this
                    }, e.prototype.draw = function() {
                        return this.drawScene(), this
                    }, e
                }(a.BaseLayer);
            e.FastLayer = l, l.prototype.nodeType = "FastLayer", s._registerNode(l), i.Collection.mapMethods(l)
        },
        569: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(301),
                i = n(391),
                o = n(302),
                a = n(299),
                s = {
                    node: 1,
                    duration: 1,
                    easing: 1,
                    onFinish: 1,
                    yoyo: 1
                },
                l = 0,
                u = ["fill", "stroke", "shadowColor"],
                c = function() {
                    function t(t, e, n, r, i, o, a) {
                        this.prop = t, this.propFunc = e, this.begin = r, this._pos = r, this.duration = o, this._change = 0, this.prevPos = 0, this.yoyo = a, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = n, this._change = i - this.begin, this.pause()
                    }
                    return t.prototype.fire = function(t) {
                        var e = this[t];
                        e && e()
                    }, t.prototype.setTime = function(t) {
                        t > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : t < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = t, this.update())
                    }, t.prototype.getTime = function() {
                        return this._time
                    }, t.prototype.setPosition = function(t) {
                        this.prevPos = this._pos, this.propFunc(t), this._pos = t
                    }, t.prototype.getPosition = function(t) {
                        return void 0 === t && (t = this._time), this.func(t, this.begin, this._change, this.duration)
                    }, t.prototype.play = function() {
                        this.state = 2, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay")
                    }, t.prototype.reverse = function() {
                        this.state = 3, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse")
                    }, t.prototype.seek = function(t) {
                        this.pause(), this._time = t, this.update(), this.fire("onSeek")
                    }, t.prototype.reset = function() {
                        this.pause(), this._time = 0, this.update(), this.fire("onReset")
                    }, t.prototype.finish = function() {
                        this.pause(), this._time = this.duration, this.update(), this.fire("onFinish")
                    }, t.prototype.update = function() {
                        this.setPosition(this.getPosition(this._time))
                    }, t.prototype.onEnterFrame = function() {
                        var t = this.getTimer() - this._startTime;
                        2 === this.state ? this.setTime(t) : 3 === this.state && this.setTime(this.duration - t)
                    }, t.prototype.pause = function() {
                        this.state = 1, this.fire("onPause")
                    }, t.prototype.getTimer = function() {
                        return (new Date).getTime()
                    }, t
                }(),
                h = function() {
                    function t(n) {
                        var o, u, h = this,
                            d = n.node,
                            f = d._id,
                            p = n.easing || e.Easings.Linear,
                            g = !!n.yoyo;
                        o = "undefined" === typeof n.duration ? .3 : 0 === n.duration ? .001 : n.duration, this.node = d, this._id = l++;
                        var y = d.getLayer() || (d instanceof a.Konva.Stage ? d.getLayers() : null);
                        for (u in y || r.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new i.Animation((function() {
                                h.tween.onEnterFrame()
                            }), y), this.tween = new c(u, (function(t) {
                                h._tweenFunc(t)
                            }), p, 0, 1, 1e3 * o, g), this._addListeners(), t.attrs[f] || (t.attrs[f] = {}), t.attrs[f][this._id] || (t.attrs[f][this._id] = {}), t.tweens[f] || (t.tweens[f] = {}), n) void 0 === s[u] && this._addAttr(u, n[u]);
                        this.reset(), this.onFinish = n.onFinish, this.onReset = n.onReset
                    }
                    return t.prototype._addAttr = function(e, n) {
                        var i, o, a, s, l, c, h, d, f = this.node,
                            p = f._id;
                        if ((a = t.tweens[p][e]) && delete t.attrs[p][a][e], i = f.getAttr(e), r.Util._isArray(n))
                            if (o = [], l = Math.max(n.length, i.length), "points" === e && n.length !== i.length && (n.length > i.length ? (h = i, i = r.Util._prepareArrayForTween(i, n, f.closed())) : (c = n, n = r.Util._prepareArrayForTween(n, i, f.closed()))), 0 === e.indexOf("fill"))
                                for (s = 0; s < l; s++)
                                    if (s % 2 === 0) o.push(n[s] - i[s]);
                                    else {
                                        var g = r.Util.colorToRGBA(i[s]);
                                        d = r.Util.colorToRGBA(n[s]), i[s] = g, o.push({
                                            r: d.r - g.r,
                                            g: d.g - g.g,
                                            b: d.b - g.b,
                                            a: d.a - g.a
                                        })
                                    }
                        else
                            for (s = 0; s < l; s++) o.push(n[s] - i[s]);
                        else -1 !== u.indexOf(e) ? (i = r.Util.colorToRGBA(i), o = {
                            r: (d = r.Util.colorToRGBA(n)).r - i.r,
                            g: d.g - i.g,
                            b: d.b - i.b,
                            a: d.a - i.a
                        }) : o = n - i;
                        t.attrs[p][this._id][e] = {
                            start: i,
                            diff: o,
                            end: n,
                            trueEnd: c,
                            trueStart: h
                        }, t.tweens[p][e] = this._id
                    }, t.prototype._tweenFunc = function(e) {
                        var n, i, o, a, s, l, c, h, d = this.node,
                            f = t.attrs[d._id][this._id];
                        for (n in f) {
                            if (o = (i = f[n]).start, a = i.diff, h = i.end, r.Util._isArray(o))
                                if (s = [], c = Math.max(o.length, h.length), 0 === n.indexOf("fill"))
                                    for (l = 0; l < c; l++) l % 2 === 0 ? s.push((o[l] || 0) + a[l] * e) : s.push("rgba(" + Math.round(o[l].r + a[l].r * e) + "," + Math.round(o[l].g + a[l].g * e) + "," + Math.round(o[l].b + a[l].b * e) + "," + (o[l].a + a[l].a * e) + ")");
                                else
                                    for (l = 0; l < c; l++) s.push((o[l] || 0) + a[l] * e);
                            else s = -1 !== u.indexOf(n) ? "rgba(" + Math.round(o.r + a.r * e) + "," + Math.round(o.g + a.g * e) + "," + Math.round(o.b + a.b * e) + "," + (o.a + a.a * e) + ")" : o + a * e;
                            d.setAttr(n, s)
                        }
                    }, t.prototype._addListeners = function() {
                        var e = this;
                        this.tween.onPlay = function() {
                            e.anim.start()
                        }, this.tween.onReverse = function() {
                            e.anim.start()
                        }, this.tween.onPause = function() {
                            e.anim.stop()
                        }, this.tween.onFinish = function() {
                            var n = e.node,
                                r = t.attrs[n._id][e._id];
                            r.points && r.points.trueEnd && n.setAttr("points", r.points.trueEnd), e.onFinish && e.onFinish.call(e)
                        }, this.tween.onReset = function() {
                            var n = e.node,
                                r = t.attrs[n._id][e._id];
                            r.points && r.points.trueStart && n.points(r.points.trueStart), e.onReset && e.onReset()
                        }
                    }, t.prototype.play = function() {
                        return this.tween.play(), this
                    }, t.prototype.reverse = function() {
                        return this.tween.reverse(), this
                    }, t.prototype.reset = function() {
                        return this.tween.reset(), this
                    }, t.prototype.seek = function(t) {
                        return this.tween.seek(1e3 * t), this
                    }, t.prototype.pause = function() {
                        return this.tween.pause(), this
                    }, t.prototype.finish = function() {
                        return this.tween.finish(), this
                    }, t.prototype.destroy = function() {
                        var e, n = this.node._id,
                            r = this._id,
                            i = t.tweens[n];
                        for (e in this.pause(), i) delete t.tweens[n][e];
                        delete t.attrs[n][r]
                    }, t.attrs = {}, t.tweens = {}, t
                }();
            e.Tween = h, o.Node.prototype.to = function(t) {
                var e = t.onFinish;
                t.node = this, t.onFinish = function() {
                    this.destroy(), e && e()
                }, new h(t).play()
            }, e.Easings = {
                BackEaseIn: function(t, e, n, r) {
                    var i = 1.70158;
                    return n * (t /= r) * t * ((i + 1) * t - i) + e
                },
                BackEaseOut: function(t, e, n, r) {
                    var i = 1.70158;
                    return n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                },
                BackEaseInOut: function(t, e, n, r) {
                    var i = 1.70158;
                    return (t /= r / 2) < 1 ? n / 2 * (t * t * ((1 + (i *= 1.525)) * t - i)) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                },
                ElasticEaseIn: function(t, e, n, r, i, o) {
                    var a = 0;
                    return 0 === t ? e : 1 === (t /= r) ? e + n : (o || (o = .3 * r), !i || i < Math.abs(n) ? (i = n, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(n / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) + e)
                },
                ElasticEaseOut: function(t, e, n, r, i, o) {
                    var a = 0;
                    return 0 === t ? e : 1 === (t /= r) ? e + n : (o || (o = .3 * r), !i || i < Math.abs(n) ? (i = n, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(n / i), i * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / o) + n + e)
                },
                ElasticEaseInOut: function(t, e, n, r, i, o) {
                    var a = 0;
                    return 0 === t ? e : 2 === (t /= r / 2) ? e + n : (o || (o = r * (.3 * 1.5)), !i || i < Math.abs(n) ? (i = n, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(n / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * -.5 + e : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + n + e)
                },
                BounceEaseOut: function(t, e, n, r) {
                    return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + e : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                },
                BounceEaseIn: function(t, n, r, i) {
                    return r - e.Easings.BounceEaseOut(i - t, 0, r, i) + n
                },
                BounceEaseInOut: function(t, n, r, i) {
                    return t < i / 2 ? .5 * e.Easings.BounceEaseIn(2 * t, 0, r, i) + n : .5 * e.Easings.BounceEaseOut(2 * t - i, 0, r, i) + .5 * r + n
                },
                EaseIn: function(t, e, n, r) {
                    return n * (t /= r) * t + e
                },
                EaseOut: function(t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                },
                EaseInOut: function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                },
                StrongEaseIn: function(t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                },
                StrongEaseOut: function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                },
                StrongEaseInOut: function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                },
                Linear: function(t, e, n, r) {
                    return n * t / r + e
                }
            }
        },
        570: function(t, e, n) {
            "use strict";
            t.exports = n(571)
        },
        571: function(t, e, n) {
            t.exports = function e(r) {
                "use strict";
                var i = n(117),
                    o = n(2),
                    a = n(176);

                function s(t) {
                    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                l.hasOwnProperty("ReactCurrentDispatcher") || (l.ReactCurrentDispatcher = {
                    current: null
                }), l.hasOwnProperty("ReactCurrentBatchConfig") || (l.ReactCurrentBatchConfig = {
                    suspense: null
                });
                var u = "function" === typeof Symbol && Symbol.for,
                    c = u ? Symbol.for("react.element") : 60103,
                    h = u ? Symbol.for("react.portal") : 60106,
                    d = u ? Symbol.for("react.fragment") : 60107,
                    f = u ? Symbol.for("react.strict_mode") : 60108,
                    p = u ? Symbol.for("react.profiler") : 60114,
                    g = u ? Symbol.for("react.provider") : 60109,
                    y = u ? Symbol.for("react.context") : 60110,
                    v = u ? Symbol.for("react.concurrent_mode") : 60111,
                    m = u ? Symbol.for("react.forward_ref") : 60112,
                    _ = u ? Symbol.for("react.suspense") : 60113,
                    b = u ? Symbol.for("react.suspense_list") : 60120,
                    S = u ? Symbol.for("react.memo") : 60115,
                    x = u ? Symbol.for("react.lazy") : 60116;
                u && Symbol.for("react.fundamental"), u && Symbol.for("react.responder"), u && Symbol.for("react.scope");
                var C = "function" === typeof Symbol && Symbol.iterator;

                function w(t) {
                    return null === t || "object" !== typeof t ? null : "function" === typeof(t = C && t[C] || t["@@iterator"]) ? t : null
                }

                function T(t) {
                    if (null == t) return null;
                    if ("function" === typeof t) return t.displayName || t.name || null;
                    if ("string" === typeof t) return t;
                    switch (t) {
                        case d:
                            return "Fragment";
                        case h:
                            return "Portal";
                        case p:
                            return "Profiler";
                        case f:
                            return "StrictMode";
                        case _:
                            return "Suspense";
                        case b:
                            return "SuspenseList"
                    }
                    if ("object" === typeof t) switch (t.$$typeof) {
                        case y:
                            return "Context.Consumer";
                        case g:
                            return "Context.Provider";
                        case m:
                            var e = t.render;
                            return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case S:
                            return T(t.type);
                        case x:
                            if (t = 1 === t._status ? t._result : null) return T(t)
                    }
                    return null
                }

                function P(t) {
                    var e = t,
                        n = t;
                    if (t.alternate)
                        for (; e.return;) e = e.return;
                    else {
                        t = e;
                        do {
                            0 !== (1026 & (e = t).effectTag) && (n = e.return), t = e.return
                        } while (t)
                    }
                    return 3 === e.tag ? n : null
                }

                function k(t) {
                    if (P(t) !== t) throw Error(s(188))
                }

                function E(t) {
                    var e = t.alternate;
                    if (!e) {
                        if (null === (e = P(t))) throw Error(s(188));
                        return e !== t ? null : t
                    }
                    for (var n = t, r = e;;) {
                        var i = n.return;
                        if (null === i) break;
                        var o = i.alternate;
                        if (null === o) {
                            if (null !== (r = i.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (i.child === o.child) {
                            for (o = i.child; o;) {
                                if (o === n) return k(i), t;
                                if (o === r) return k(i), e;
                                o = o.sibling
                            }
                            throw Error(s(188))
                        }
                        if (n.return !== r.return) n = i, r = o;
                        else {
                            for (var a = !1, l = i.child; l;) {
                                if (l === n) {
                                    a = !0, n = i, r = o;
                                    break
                                }
                                if (l === r) {
                                    a = !0, r = i, n = o;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!a) {
                                for (l = o.child; l;) {
                                    if (l === n) {
                                        a = !0, n = o, r = i;
                                        break
                                    }
                                    if (l === r) {
                                        a = !0, r = o, n = i;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!a) throw Error(s(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(s(190))
                    }
                    if (3 !== n.tag) throw Error(s(188));
                    return n.stateNode.current === n ? t : e
                }

                function M(t) {
                    if (!(t = E(t))) return null;
                    for (var e = t;;) {
                        if (5 === e.tag || 6 === e.tag) return e;
                        if (e.child) e.child.return = e, e = e.child;
                        else {
                            if (e === t) break;
                            for (; !e.sibling;) {
                                if (!e.return || e.return === t) return null;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                    }
                    return null
                }
                var F = r.getPublicInstance,
                    O = r.getRootHostContext,
                    N = r.getChildHostContext,
                    A = r.prepareForCommit,
                    I = r.resetAfterCommit,
                    R = r.createInstance,
                    D = r.appendInitialChild,
                    G = r.finalizeInitialChildren,
                    U = r.prepareUpdate,
                    L = r.shouldSetTextContent,
                    z = r.shouldDeprioritizeSubtree,
                    j = r.createTextInstance,
                    B = r.setTimeout,
                    H = r.clearTimeout,
                    V = r.noTimeout,
                    W = r.isPrimaryRenderer,
                    K = r.supportsMutation,
                    Y = r.supportsPersistence,
                    X = r.supportsHydration,
                    q = r.appendChild,
                    Q = r.appendChildToContainer,
                    $ = r.commitTextUpdate,
                    J = r.commitMount,
                    Z = r.commitUpdate,
                    tt = r.insertBefore,
                    et = r.insertInContainerBefore,
                    nt = r.removeChild,
                    rt = r.removeChildFromContainer,
                    it = r.resetTextContent,
                    ot = r.hideInstance,
                    at = r.hideTextInstance,
                    st = r.unhideInstance,
                    lt = r.unhideTextInstance,
                    ut = r.cloneInstance,
                    ct = r.createContainerChildSet,
                    ht = r.appendChildToContainerChildSet,
                    dt = r.finalizeContainerChildren,
                    ft = r.replaceContainerChildren,
                    pt = r.cloneHiddenInstance,
                    gt = r.cloneHiddenTextInstance,
                    yt = r.canHydrateInstance,
                    vt = r.canHydrateTextInstance,
                    mt = r.isSuspenseInstancePending,
                    _t = r.isSuspenseInstanceFallback,
                    bt = r.getNextHydratableSibling,
                    St = r.getFirstHydratableChild,
                    xt = r.hydrateInstance,
                    Ct = r.hydrateTextInstance,
                    wt = r.getNextHydratableInstanceAfterSuspenseInstance,
                    Tt = r.commitHydratedContainer,
                    Pt = r.commitHydratedSuspenseInstance,
                    kt = /^(.*)[\\\/]/;

                function Et(t) {
                    var e = "";
                    do {
                        t: switch (t.tag) {
                            case 3:
                            case 4:
                            case 6:
                            case 7:
                            case 10:
                            case 9:
                                var n = "";
                                break t;
                            default:
                                var r = t._debugOwner,
                                    i = t._debugSource,
                                    o = T(t.type);
                                n = null, r && (n = T(r.type)), r = o, o = "", i ? o = " (at " + i.fileName.replace(kt, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
                        }
                        e += n,
                        t = t.return
                    } while (t);
                    return e
                }
                new Set;
                var Mt = [],
                    Ft = -1;

                function Ot(t) {
                    0 > Ft || (t.current = Mt[Ft], Mt[Ft] = null, Ft--)
                }

                function Nt(t, e) {
                    Ft++, Mt[Ft] = t.current, t.current = e
                }
                var At = {},
                    It = {
                        current: At
                    },
                    Rt = {
                        current: !1
                    },
                    Dt = At;

                function Gt(t, e) {
                    var n = t.type.contextTypes;
                    if (!n) return At;
                    var r = t.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
                    var i, o = {};
                    for (i in n) o[i] = e[i];
                    return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function Ut(t) {
                    return null !== (t = t.childContextTypes) && void 0 !== t
                }

                function Lt(t) {
                    Ot(Rt), Ot(It)
                }

                function zt(t) {
                    Ot(Rt), Ot(It)
                }

                function jt(t, e, n) {
                    if (It.current !== At) throw Error(s(168));
                    Nt(It, e), Nt(Rt, n)
                }

                function Bt(t, e, n) {
                    var r = t.stateNode;
                    if (t = e.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var o in r = r.getChildContext())
                        if (!(o in t)) throw Error(s(108, T(e) || "Unknown", o));
                    return i({}, n, {}, r)
                }

                function Ht(t) {
                    var e = t.stateNode;
                    return e = e && e.__reactInternalMemoizedMergedChildContext || At, Dt = It.current, Nt(It, e), Nt(Rt, Rt.current), !0
                }

                function Vt(t, e, n) {
                    var r = t.stateNode;
                    if (!r) throw Error(s(169));
                    n ? (e = Bt(t, e, Dt), r.__reactInternalMemoizedMergedChildContext = e, Ot(Rt), Ot(It), Nt(It, e)) : Ot(Rt), Nt(Rt, n)
                }
                var Wt = a.unstable_runWithPriority,
                    Kt = a.unstable_scheduleCallback,
                    Yt = a.unstable_cancelCallback,
                    Xt = a.unstable_shouldYield,
                    qt = a.unstable_requestPaint,
                    Qt = a.unstable_now,
                    $t = a.unstable_getCurrentPriorityLevel,
                    Jt = a.unstable_ImmediatePriority,
                    Zt = a.unstable_UserBlockingPriority,
                    te = a.unstable_NormalPriority,
                    ee = a.unstable_LowPriority,
                    ne = a.unstable_IdlePriority,
                    re = {},
                    ie = void 0 !== qt ? qt : function() {},
                    oe = null,
                    ae = null,
                    se = !1,
                    le = Qt(),
                    ue = 1e4 > le ? Qt : function() {
                        return Qt() - le
                    };

                function ce() {
                    switch ($t()) {
                        case Jt:
                            return 99;
                        case Zt:
                            return 98;
                        case te:
                            return 97;
                        case ee:
                            return 96;
                        case ne:
                            return 95;
                        default:
                            throw Error(s(332))
                    }
                }

                function he(t) {
                    switch (t) {
                        case 99:
                            return Jt;
                        case 98:
                            return Zt;
                        case 97:
                            return te;
                        case 96:
                            return ee;
                        case 95:
                            return ne;
                        default:
                            throw Error(s(332))
                    }
                }

                function de(t, e) {
                    return t = he(t), Wt(t, e)
                }

                function fe(t, e, n) {
                    return t = he(t), Kt(t, e, n)
                }

                function pe(t) {
                    return null === oe ? (oe = [t], ae = Kt(Jt, ye)) : oe.push(t), re
                }

                function ge() {
                    if (null !== ae) {
                        var t = ae;
                        ae = null, Yt(t)
                    }
                    ye()
                }

                function ye() {
                    if (!se && null !== oe) {
                        se = !0;
                        var t = 0;
                        try {
                            var e = oe;
                            de(99, (function() {
                                for (; t < e.length; t++) {
                                    var n = e[t];
                                    do {
                                        n = n(!0)
                                    } while (null !== n)
                                }
                            })), oe = null
                        } catch (n) {
                            throw null !== oe && (oe = oe.slice(t + 1)), Kt(Jt, ge), n
                        } finally {
                            se = !1
                        }
                    }
                }
                var ve = 3;

                function me(t, e, n) {
                    return 1073741821 - (1 + ((1073741821 - t + e / 10) / (n /= 10) | 0)) * n
                }
                var _e = "function" === typeof Object.is ? Object.is : function(t, e) {
                        return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                    },
                    be = Object.prototype.hasOwnProperty;

                function Se(t, e) {
                    if (_e(t, e)) return !0;
                    if ("object" !== typeof t || null === t || "object" !== typeof e || null === e) return !1;
                    var n = Object.keys(t),
                        r = Object.keys(e);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++)
                        if (!be.call(e, n[r]) || !_e(t[n[r]], e[n[r]])) return !1;
                    return !0
                }

                function xe(t, e) {
                    if (t && t.defaultProps)
                        for (var n in e = i({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]);
                    return e
                }
                var Ce = {
                        current: null
                    },
                    we = null,
                    Te = null,
                    Pe = null;

                function ke() {
                    Pe = Te = we = null
                }

                function Ee(t, e) {
                    var n = t.type._context;
                    W ? (Nt(Ce, n._currentValue), n._currentValue = e) : (Nt(Ce, n._currentValue2), n._currentValue2 = e)
                }

                function Me(t) {
                    var e = Ce.current;
                    Ot(Ce), t = t.type._context, W ? t._currentValue = e : t._currentValue2 = e
                }

                function Fe(t, e) {
                    for (; null !== t;) {
                        var n = t.alternate;
                        if (t.childExpirationTime < e) t.childExpirationTime = e, null !== n && n.childExpirationTime < e && (n.childExpirationTime = e);
                        else {
                            if (!(null !== n && n.childExpirationTime < e)) break;
                            n.childExpirationTime = e
                        }
                        t = t.return
                    }
                }

                function Oe(t, e) {
                    we = t, Pe = Te = null, null !== (t = t.dependencies) && null !== t.firstContext && (t.expirationTime >= e && (dr = !0), t.firstContext = null)
                }

                function Ne(t, e) {
                    if (Pe !== t && !1 !== e && 0 !== e)
                        if ("number" === typeof e && 1073741823 !== e || (Pe = t, e = 1073741823), e = {
                                context: t,
                                observedBits: e,
                                next: null
                            }, null === Te) {
                            if (null === we) throw Error(s(308));
                            Te = e, we.dependencies = {
                                expirationTime: 0,
                                firstContext: e,
                                responders: null
                            }
                        } else Te = Te.next = e;
                    return W ? t._currentValue : t._currentValue2
                }
                var Ae = !1;

                function Ie(t) {
                    return {
                        baseState: t,
                        firstUpdate: null,
                        lastUpdate: null,
                        firstCapturedUpdate: null,
                        lastCapturedUpdate: null,
                        firstEffect: null,
                        lastEffect: null,
                        firstCapturedEffect: null,
                        lastCapturedEffect: null
                    }
                }

                function Re(t) {
                    return {
                        baseState: t.baseState,
                        firstUpdate: t.firstUpdate,
                        lastUpdate: t.lastUpdate,
                        firstCapturedUpdate: null,
                        lastCapturedUpdate: null,
                        firstEffect: null,
                        lastEffect: null,
                        firstCapturedEffect: null,
                        lastCapturedEffect: null
                    }
                }

                function De(t, e) {
                    return {
                        expirationTime: t,
                        suspenseConfig: e,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null,
                        nextEffect: null
                    }
                }

                function Ge(t, e) {
                    null === t.lastUpdate ? t.firstUpdate = t.lastUpdate = e : (t.lastUpdate.next = e, t.lastUpdate = e)
                }

                function Ue(t, e) {
                    var n = t.alternate;
                    if (null === n) {
                        var r = t.updateQueue,
                            i = null;
                        null === r && (r = t.updateQueue = Ie(t.memoizedState))
                    } else r = t.updateQueue, i = n.updateQueue, null === r ? null === i ? (r = t.updateQueue = Ie(t.memoizedState), i = n.updateQueue = Ie(n.memoizedState)) : r = t.updateQueue = Re(i) : null === i && (i = n.updateQueue = Re(r));
                    null === i || r === i ? Ge(r, e) : null === r.lastUpdate || null === i.lastUpdate ? (Ge(r, e), Ge(i, e)) : (Ge(r, e), i.lastUpdate = e)
                }

                function Le(t, e) {
                    var n = t.updateQueue;
                    null === (n = null === n ? t.updateQueue = Ie(t.memoizedState) : ze(t, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = e : (n.lastCapturedUpdate.next = e, n.lastCapturedUpdate = e)
                }

                function ze(t, e) {
                    var n = t.alternate;
                    return null !== n && e === n.updateQueue && (e = t.updateQueue = Re(e)), e
                }

                function je(t, e, n, r, o, a) {
                    switch (n.tag) {
                        case 1:
                            return "function" === typeof(t = n.payload) ? t.call(a, r, o) : t;
                        case 3:
                            t.effectTag = -4097 & t.effectTag | 64;
                        case 0:
                            if (null === (o = "function" === typeof(t = n.payload) ? t.call(a, r, o) : t) || void 0 === o) break;
                            return i({}, r, o);
                        case 2:
                            Ae = !0
                    }
                    return r
                }

                function Be(t, e, n, r, i) {
                    Ae = !1;
                    for (var o = (e = ze(t, e)).baseState, a = null, s = 0, l = e.firstUpdate, u = o; null !== l;) {
                        var c = l.expirationTime;
                        c < i ? (null === a && (a = l, o = u), s < c && (s = c)) : (Li(c, l.suspenseConfig), u = je(t, 0, l, u, n, r), null !== l.callback && (t.effectTag |= 32, l.nextEffect = null, null === e.lastEffect ? e.firstEffect = e.lastEffect = l : (e.lastEffect.nextEffect = l, e.lastEffect = l))), l = l.next
                    }
                    for (c = null, l = e.firstCapturedUpdate; null !== l;) {
                        var h = l.expirationTime;
                        h < i ? (null === c && (c = l, null === a && (o = u)), s < h && (s = h)) : (u = je(t, 0, l, u, n, r), null !== l.callback && (t.effectTag |= 32, l.nextEffect = null, null === e.lastCapturedEffect ? e.firstCapturedEffect = e.lastCapturedEffect = l : (e.lastCapturedEffect.nextEffect = l, e.lastCapturedEffect = l))), l = l.next
                    }
                    null === a && (e.lastUpdate = null), null === c ? e.lastCapturedUpdate = null : t.effectTag |= 32, null === a && null === c && (o = u), e.baseState = o, e.firstUpdate = a, e.firstCapturedUpdate = c, zi(s), t.expirationTime = s, t.memoizedState = u
                }

                function He(t, e, n) {
                    null !== e.firstCapturedUpdate && (null !== e.lastUpdate && (e.lastUpdate.next = e.firstCapturedUpdate, e.lastUpdate = e.lastCapturedUpdate), e.firstCapturedUpdate = e.lastCapturedUpdate = null), Ve(e.firstEffect, n), e.firstEffect = e.lastEffect = null, Ve(e.firstCapturedEffect, n), e.firstCapturedEffect = e.lastCapturedEffect = null
                }

                function Ve(t, e) {
                    for (; null !== t;) {
                        var n = t.callback;
                        if (null !== n) {
                            t.callback = null;
                            var r = e;
                            if ("function" !== typeof n) throw Error(s(191, n));
                            n.call(r)
                        }
                        t = t.nextEffect
                    }
                }
                var We = l.ReactCurrentBatchConfig,
                    Ke = (new o.Component).refs;

                function Ye(t, e, n, r) {
                    n = null === (n = n(r, e = t.memoizedState)) || void 0 === n ? e : i({}, e, n), t.memoizedState = n, null !== (r = t.updateQueue) && 0 === t.expirationTime && (r.baseState = n)
                }
                var Xe = {
                    isMounted: function(t) {
                        return !!(t = t._reactInternalFiber) && P(t) === t
                    },
                    enqueueSetState: function(t, e, n) {
                        t = t._reactInternalFiber;
                        var r = ki(),
                            i = We.suspense;
                        (i = De(r = Ei(r, t, i), i)).payload = e, void 0 !== n && null !== n && (i.callback = n), Ue(t, i), Mi(t, r)
                    },
                    enqueueReplaceState: function(t, e, n) {
                        t = t._reactInternalFiber;
                        var r = ki(),
                            i = We.suspense;
                        (i = De(r = Ei(r, t, i), i)).tag = 1, i.payload = e, void 0 !== n && null !== n && (i.callback = n), Ue(t, i), Mi(t, r)
                    },
                    enqueueForceUpdate: function(t, e) {
                        t = t._reactInternalFiber;
                        var n = ki(),
                            r = We.suspense;
                        (r = De(n = Ei(n, t, r), r)).tag = 2, void 0 !== e && null !== e && (r.callback = e), Ue(t, r), Mi(t, n)
                    }
                };

                function qe(t, e, n, r, i, o, a) {
                    return "function" === typeof(t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, o, a) : !e.prototype || !e.prototype.isPureReactComponent || (!Se(n, r) || !Se(i, o))
                }

                function Qe(t, e, n) {
                    var r = !1,
                        i = At,
                        o = e.contextType;
                    return "object" === typeof o && null !== o ? o = Ne(o) : (i = Ut(e) ? Dt : It.current, o = (r = null !== (r = e.contextTypes) && void 0 !== r) ? Gt(t, i) : At), e = new e(n, o), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = Xe, t.stateNode = e, e._reactInternalFiber = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e
                }

                function $e(t, e, n, r) {
                    t = e.state, "function" === typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, r), "function" === typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && Xe.enqueueReplaceState(e, e.state, null)
                }

                function Je(t, e, n, r) {
                    var i = t.stateNode;
                    i.props = n, i.state = t.memoizedState, i.refs = Ke;
                    var o = e.contextType;
                    "object" === typeof o && null !== o ? i.context = Ne(o) : (o = Ut(e) ? Dt : It.current, i.context = Gt(t, o)), null !== (o = t.updateQueue) && (Be(t, o, n, i, r), i.state = t.memoizedState), "function" === typeof(o = e.getDerivedStateFromProps) && (Ye(t, e, o, n), i.state = t.memoizedState), "function" === typeof e.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (e = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), e !== i.state && Xe.enqueueReplaceState(i, i.state, null), null !== (o = t.updateQueue) && (Be(t, o, n, i, r), i.state = t.memoizedState)), "function" === typeof i.componentDidMount && (t.effectTag |= 4)
                }
                var Ze = Array.isArray;

                function tn(t, e, n) {
                    if (null !== (t = n.ref) && "function" !== typeof t && "object" !== typeof t) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(s(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(s(147, t));
                            var i = "" + t;
                            return null !== e && null !== e.ref && "function" === typeof e.ref && e.ref._stringRef === i ? e.ref : ((e = function(t) {
                                var e = r.refs;
                                e === Ke && (e = r.refs = {}), null === t ? delete e[i] : e[i] = t
                            })._stringRef = i, e)
                        }
                        if ("string" !== typeof t) throw Error(s(284));
                        if (!n._owner) throw Error(s(290, t))
                    }
                    return t
                }

                function en(t, e) {
                    if ("textarea" !== t.type) throw Error(s(31, "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, ""))
                }

                function nn(t) {
                    function e(e, n) {
                        if (t) {
                            var r = e.lastEffect;
                            null !== r ? (r.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.effectTag = 8
                        }
                    }

                    function n(n, r) {
                        if (!t) return null;
                        for (; null !== r;) e(n, r), r = r.sibling;
                        return null
                    }

                    function r(t, e) {
                        for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                        return t
                    }

                    function i(t, e, n) {
                        return (t = ao(t, e)).index = 0, t.sibling = null, t
                    }

                    function o(e, n, r) {
                        return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index) < n ? (e.effectTag = 2, n) : r : (e.effectTag = 2, n) : n
                    }

                    function a(e) {
                        return t && null === e.alternate && (e.effectTag = 2), e
                    }

                    function l(t, e, n, r) {
                        return null === e || 6 !== e.tag ? ((e = uo(n, t.mode, r)).return = t, e) : ((e = i(e, n)).return = t, e)
                    }

                    function u(t, e, n, r) {
                        return null !== e && e.elementType === n.type ? ((r = i(e, n.props)).ref = tn(t, e, n), r.return = t, r) : ((r = so(n.type, n.key, n.props, null, t.mode, r)).ref = tn(t, e, n), r.return = t, r)
                    }

                    function f(t, e, n, r) {
                        return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = co(n, t.mode, r)).return = t, e) : ((e = i(e, n.children || [])).return = t, e)
                    }

                    function p(t, e, n, r, o) {
                        return null === e || 7 !== e.tag ? ((e = lo(n, t.mode, r, o)).return = t, e) : ((e = i(e, n)).return = t, e)
                    }

                    function g(t, e, n) {
                        if ("string" === typeof e || "number" === typeof e) return (e = uo("" + e, t.mode, n)).return = t, e;
                        if ("object" === typeof e && null !== e) {
                            switch (e.$$typeof) {
                                case c:
                                    return (n = so(e.type, e.key, e.props, null, t.mode, n)).ref = tn(t, null, e), n.return = t, n;
                                case h:
                                    return (e = co(e, t.mode, n)).return = t, e
                            }
                            if (Ze(e) || w(e)) return (e = lo(e, t.mode, n, null)).return = t, e;
                            en(t, e)
                        }
                        return null
                    }

                    function y(t, e, n, r) {
                        var i = null !== e ? e.key : null;
                        if ("string" === typeof n || "number" === typeof n) return null !== i ? null : l(t, e, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case c:
                                    return n.key === i ? n.type === d ? p(t, e, n.props.children, r, i) : u(t, e, n, r) : null;
                                case h:
                                    return n.key === i ? f(t, e, n, r) : null
                            }
                            if (Ze(n) || w(n)) return null !== i ? null : p(t, e, n, r, null);
                            en(t, n)
                        }
                        return null
                    }

                    function v(t, e, n, r, i) {
                        if ("string" === typeof r || "number" === typeof r) return l(e, t = t.get(n) || null, "" + r, i);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case c:
                                    return t = t.get(null === r.key ? n : r.key) || null, r.type === d ? p(e, t, r.props.children, i, r.key) : u(e, t, r, i);
                                case h:
                                    return f(e, t = t.get(null === r.key ? n : r.key) || null, r, i)
                            }
                            if (Ze(r) || w(r)) return p(e, t = t.get(n) || null, r, i, null);
                            en(e, r)
                        }
                        return null
                    }

                    function m(i, a, s, l) {
                        for (var u = null, c = null, h = a, d = a = 0, f = null; null !== h && d < s.length; d++) {
                            h.index > d ? (f = h, h = null) : f = h.sibling;
                            var p = y(i, h, s[d], l);
                            if (null === p) {
                                null === h && (h = f);
                                break
                            }
                            t && h && null === p.alternate && e(i, h), a = o(p, a, d), null === c ? u = p : c.sibling = p, c = p, h = f
                        }
                        if (d === s.length) return n(i, h), u;
                        if (null === h) {
                            for (; d < s.length; d++) null !== (h = g(i, s[d], l)) && (a = o(h, a, d), null === c ? u = h : c.sibling = h, c = h);
                            return u
                        }
                        for (h = r(i, h); d < s.length; d++) null !== (f = v(h, i, d, s[d], l)) && (t && null !== f.alternate && h.delete(null === f.key ? d : f.key), a = o(f, a, d), null === c ? u = f : c.sibling = f, c = f);
                        return t && h.forEach((function(t) {
                            return e(i, t)
                        })), u
                    }

                    function _(i, a, l, u) {
                        var c = w(l);
                        if ("function" !== typeof c) throw Error(s(150));
                        if (null == (l = c.call(l))) throw Error(s(151));
                        for (var h = c = null, d = a, f = a = 0, p = null, m = l.next(); null !== d && !m.done; f++, m = l.next()) {
                            d.index > f ? (p = d, d = null) : p = d.sibling;
                            var _ = y(i, d, m.value, u);
                            if (null === _) {
                                null === d && (d = p);
                                break
                            }
                            t && d && null === _.alternate && e(i, d), a = o(_, a, f), null === h ? c = _ : h.sibling = _, h = _, d = p
                        }
                        if (m.done) return n(i, d), c;
                        if (null === d) {
                            for (; !m.done; f++, m = l.next()) null !== (m = g(i, m.value, u)) && (a = o(m, a, f), null === h ? c = m : h.sibling = m, h = m);
                            return c
                        }
                        for (d = r(i, d); !m.done; f++, m = l.next()) null !== (m = v(d, i, f, m.value, u)) && (t && null !== m.alternate && d.delete(null === m.key ? f : m.key), a = o(m, a, f), null === h ? c = m : h.sibling = m, h = m);
                        return t && d.forEach((function(t) {
                            return e(i, t)
                        })), c
                    }
                    return function(t, r, o, l) {
                        var u = "object" === typeof o && null !== o && o.type === d && null === o.key;
                        u && (o = o.props.children);
                        var f = "object" === typeof o && null !== o;
                        if (f) switch (o.$$typeof) {
                            case c:
                                t: {
                                    for (f = o.key, u = r; null !== u;) {
                                        if (u.key === f) {
                                            if (7 === u.tag ? o.type === d : u.elementType === o.type) {
                                                n(t, u.sibling), (r = i(u, o.type === d ? o.props.children : o.props)).ref = tn(t, u, o), r.return = t, t = r;
                                                break t
                                            }
                                            n(t, u);
                                            break
                                        }
                                        e(t, u), u = u.sibling
                                    }
                                    o.type === d ? ((r = lo(o.props.children, t.mode, l, o.key)).return = t, t = r) : ((l = so(o.type, o.key, o.props, null, t.mode, l)).ref = tn(t, r, o), l.return = t, t = l)
                                }
                                return a(t);
                            case h:
                                t: {
                                    for (u = o.key; null !== r;) {
                                        if (r.key === u) {
                                            if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                                n(t, r.sibling), (r = i(r, o.children || [])).return = t, t = r;
                                                break t
                                            }
                                            n(t, r);
                                            break
                                        }
                                        e(t, r), r = r.sibling
                                    }(r = co(o, t.mode, l)).return = t,
                                    t = r
                                }
                                return a(t)
                        }
                        if ("string" === typeof o || "number" === typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(t, r.sibling), (r = i(r, o)).return = t, t = r) : (n(t, r), (r = uo(o, t.mode, l)).return = t, t = r), a(t);
                        if (Ze(o)) return m(t, r, o, l);
                        if (w(o)) return _(t, r, o, l);
                        if (f && en(t, o), "undefined" === typeof o && !u) switch (t.tag) {
                            case 1:
                            case 0:
                                throw t = t.type, Error(s(152, t.displayName || t.name || "Component"))
                        }
                        return n(t, r)
                    }
                }
                var rn = nn(!0),
                    on = nn(!1),
                    an = {},
                    sn = {
                        current: an
                    },
                    ln = {
                        current: an
                    },
                    un = {
                        current: an
                    };

                function cn(t) {
                    if (t === an) throw Error(s(174));
                    return t
                }

                function hn(t, e) {
                    Nt(un, e), Nt(ln, t), Nt(sn, an), e = O(e), Ot(sn), Nt(sn, e)
                }

                function dn(t) {
                    Ot(sn), Ot(ln), Ot(un)
                }

                function fn(t) {
                    var e = cn(un.current),
                        n = cn(sn.current);
                    n !== (e = N(n, t.type, e)) && (Nt(ln, t), Nt(sn, e))
                }

                function pn(t) {
                    ln.current === t && (Ot(sn), Ot(ln))
                }
                var gn = {
                    current: 0
                };

                function yn(t) {
                    for (var e = t; null !== e;) {
                        if (13 === e.tag) {
                            var n = e.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || mt(n) || _t(n))) return e
                        } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
                            if (0 !== (64 & e.effectTag)) return e
                        } else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) return null;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    return null
                }

                function vn(t, e) {
                    return {
                        responder: t,
                        props: e
                    }
                }
                var mn = l.ReactCurrentDispatcher,
                    _n = l.ReactCurrentBatchConfig,
                    bn = 0,
                    Sn = null,
                    xn = null,
                    Cn = null,
                    wn = null,
                    Tn = null,
                    Pn = null,
                    kn = 0,
                    En = null,
                    Mn = 0,
                    Fn = !1,
                    On = null,
                    Nn = 0;

                function An() {
                    throw Error(s(321))
                }

                function In(t, e) {
                    if (null === e) return !1;
                    for (var n = 0; n < e.length && n < t.length; n++)
                        if (!_e(t[n], e[n])) return !1;
                    return !0
                }

                function Rn(t, e, n, r, i, o) {
                    if (bn = o, Sn = e, Cn = null !== t ? t.memoizedState : null, mn.current = null === Cn ? tr : er, e = n(r, i), Fn) {
                        do {
                            Fn = !1, Nn += 1, Cn = null !== t ? t.memoizedState : null, Pn = wn, En = Tn = xn = null, mn.current = er, e = n(r, i)
                        } while (Fn);
                        On = null, Nn = 0
                    }
                    if (mn.current = Zn, (t = Sn).memoizedState = wn, t.expirationTime = kn, t.updateQueue = En, t.effectTag |= Mn, t = null !== xn && null !== xn.next, bn = 0, Pn = Tn = wn = Cn = xn = Sn = null, kn = 0, En = null, Mn = 0, t) throw Error(s(300));
                    return e
                }

                function Dn() {
                    mn.current = Zn, bn = 0, Pn = Tn = wn = Cn = xn = Sn = null, kn = 0, En = null, Mn = 0, Fn = !1, On = null, Nn = 0
                }

                function Gn() {
                    var t = {
                        memoizedState: null,
                        baseState: null,
                        queue: null,
                        baseUpdate: null,
                        next: null
                    };
                    return null === Tn ? wn = Tn = t : Tn = Tn.next = t, Tn
                }

                function Un() {
                    if (null !== Pn) Pn = (Tn = Pn).next, Cn = null !== (xn = Cn) ? xn.next : null;
                    else {
                        if (null === Cn) throw Error(s(310));
                        var t = {
                            memoizedState: (xn = Cn).memoizedState,
                            baseState: xn.baseState,
                            queue: xn.queue,
                            baseUpdate: xn.baseUpdate,
                            next: null
                        };
                        Tn = null === Tn ? wn = t : Tn.next = t, Cn = xn.next
                    }
                    return Tn
                }

                function Ln(t, e) {
                    return "function" === typeof e ? e(t) : e
                }

                function zn(t) {
                    var e = Un(),
                        n = e.queue;
                    if (null === n) throw Error(s(311));
                    if (n.lastRenderedReducer = t, 0 < Nn) {
                        var r = n.dispatch;
                        if (null !== On) {
                            var i = On.get(n);
                            if (void 0 !== i) {
                                On.delete(n);
                                var o = e.memoizedState;
                                do {
                                    o = t(o, i.action), i = i.next
                                } while (null !== i);
                                return _e(o, e.memoizedState) || (dr = !0), e.memoizedState = o, e.baseUpdate === n.last && (e.baseState = o), n.lastRenderedState = o, [o, r]
                            }
                        }
                        return [e.memoizedState, r]
                    }
                    r = n.last;
                    var a = e.baseUpdate;
                    if (o = e.baseState, null !== a ? (null !== r && (r.next = null), r = a.next) : r = null !== r ? r.next : null, null !== r) {
                        var l = i = null,
                            u = r,
                            c = !1;
                        do {
                            var h = u.expirationTime;
                            h < bn ? (c || (c = !0, l = a, i = o), h > kn && zi(kn = h)) : (Li(h, u.suspenseConfig), o = u.eagerReducer === t ? u.eagerState : t(o, u.action)), a = u, u = u.next
                        } while (null !== u && u !== r);
                        c || (l = a, i = o), _e(o, e.memoizedState) || (dr = !0), e.memoizedState = o, e.baseUpdate = l, e.baseState = i, n.lastRenderedState = o
                    }
                    return [e.memoizedState, n.dispatch]
                }

                function jn(t) {
                    var e = Gn();
                    return "function" === typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = {
                        last: null,
                        dispatch: null,
                        lastRenderedReducer: Ln,
                        lastRenderedState: t
                    }).dispatch = Jn.bind(null, Sn, t), [e.memoizedState, t]
                }

                function Bn(t) {
                    return zn(Ln)
                }

                function Hn(t, e, n, r) {
                    return t = {
                        tag: t,
                        create: e,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === En ? (En = {
                        lastEffect: null
                    }).lastEffect = t.next = t : null === (e = En.lastEffect) ? En.lastEffect = t.next = t : (n = e.next, e.next = t, t.next = n, En.lastEffect = t), t
                }

                function Vn(t, e, n, r) {
                    var i = Gn();
                    Mn |= t, i.memoizedState = Hn(e, n, void 0, void 0 === r ? null : r)
                }

                function Wn(t, e, n, r) {
                    var i = Un();
                    r = void 0 === r ? null : r;
                    var o = void 0;
                    if (null !== xn) {
                        var a = xn.memoizedState;
                        if (o = a.destroy, null !== r && In(r, a.deps)) return void Hn(0, n, o, r)
                    }
                    Mn |= t, i.memoizedState = Hn(e, n, o, r)
                }

                function Kn(t, e) {
                    return Vn(516, 192, t, e)
                }

                function Yn(t, e) {
                    return Wn(516, 192, t, e)
                }

                function Xn(t, e) {
                    return "function" === typeof e ? (t = t(), e(t), function() {
                        e(null)
                    }) : null !== e && void 0 !== e ? (t = t(), e.current = t, function() {
                        e.current = null
                    }) : void 0
                }

                function qn() {}

                function Qn(t, e) {
                    return Gn().memoizedState = [t, void 0 === e ? null : e], t
                }

                function $n(t, e) {
                    var n = Un();
                    e = void 0 === e ? null : e;
                    var r = n.memoizedState;
                    return null !== r && null !== e && In(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
                }

                function Jn(t, e, n) {
                    if (!(25 > Nn)) throw Error(s(301));
                    var r = t.alternate;
                    if (t === Sn || null !== r && r === Sn)
                        if (Fn = !0, t = {
                                expirationTime: bn,
                                suspenseConfig: null,
                                action: n,
                                eagerReducer: null,
                                eagerState: null,
                                next: null
                            }, null === On && (On = new Map), void 0 === (n = On.get(e))) On.set(e, t);
                        else {
                            for (e = n; null !== e.next;) e = e.next;
                            e.next = t
                        }
                    else {
                        var i = ki(),
                            o = We.suspense;
                        o = {
                            expirationTime: i = Ei(i, t, o),
                            suspenseConfig: o,
                            action: n,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        };
                        var a = e.last;
                        if (null === a) o.next = o;
                        else {
                            var l = a.next;
                            null !== l && (o.next = l), a.next = o
                        }
                        if (e.last = o, 0 === t.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = e.lastRenderedReducer)) try {
                            var u = e.lastRenderedState,
                                c = r(u, n);
                            if (o.eagerReducer = r, o.eagerState = c, _e(c, u)) return
                        } catch (h) {}
                        Mi(t, i)
                    }
                }
                var Zn = {
                        readContext: Ne,
                        useCallback: An,
                        useContext: An,
                        useEffect: An,
                        useImperativeHandle: An,
                        useLayoutEffect: An,
                        useMemo: An,
                        useReducer: An,
                        useRef: An,
                        useState: An,
                        useDebugValue: An,
                        useResponder: An,
                        useDeferredValue: An,
                        useTransition: An
                    },
                    tr = {
                        readContext: Ne,
                        useCallback: Qn,
                        useContext: Ne,
                        useEffect: Kn,
                        useImperativeHandle: function(t, e, n) {
                            return n = null !== n && void 0 !== n ? n.concat([t]) : null, Vn(4, 36, Xn.bind(null, e, t), n)
                        },
                        useLayoutEffect: function(t, e) {
                            return Vn(4, 36, t, e)
                        },
                        useMemo: function(t, e) {
                            var n = Gn();
                            return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t
                        },
                        useReducer: function(t, e, n) {
                            var r = Gn();
                            return e = void 0 !== n ? n(e) : e, r.memoizedState = r.baseState = e, t = (t = r.queue = {
                                last: null,
                                dispatch: null,
                                lastRenderedReducer: t,
                                lastRenderedState: e
                            }).dispatch = Jn.bind(null, Sn, t), [r.memoizedState, t]
                        },
                        useRef: function(t) {
                            return t = {
                                current: t
                            }, Gn().memoizedState = t
                        },
                        useState: jn,
                        useDebugValue: qn,
                        useResponder: vn,
                        useDeferredValue: function(t, e) {
                            var n = jn(t),
                                r = n[0],
                                i = n[1];
                            return Kn((function() {
                                a.unstable_next((function() {
                                    var n = _n.suspense;
                                    _n.suspense = void 0 === e ? null : e;
                                    try {
                                        i(t)
                                    } finally {
                                        _n.suspense = n
                                    }
                                }))
                            }), [t, e]), r
                        },
                        useTransition: function(t) {
                            var e = jn(!1),
                                n = e[0],
                                r = e[1];
                            return [Qn((function(e) {
                                r(!0), a.unstable_next((function() {
                                    var n = _n.suspense;
                                    _n.suspense = void 0 === t ? null : t;
                                    try {
                                        r(!1), e()
                                    } finally {
                                        _n.suspense = n
                                    }
                                }))
                            }), [t, n]), n]
                        }
                    },
                    er = {
                        readContext: Ne,
                        useCallback: $n,
                        useContext: Ne,
                        useEffect: Yn,
                        useImperativeHandle: function(t, e, n) {
                            return n = null !== n && void 0 !== n ? n.concat([t]) : null, Wn(4, 36, Xn.bind(null, e, t), n)
                        },
                        useLayoutEffect: function(t, e) {
                            return Wn(4, 36, t, e)
                        },
                        useMemo: function(t, e) {
                            var n = Un();
                            e = void 0 === e ? null : e;
                            var r = n.memoizedState;
                            return null !== r && null !== e && In(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
                        },
                        useReducer: zn,
                        useRef: function() {
                            return Un().memoizedState
                        },
                        useState: Bn,
                        useDebugValue: qn,
                        useResponder: vn,
                        useDeferredValue: function(t, e) {
                            var n = Bn(),
                                r = n[0],
                                i = n[1];
                            return Yn((function() {
                                a.unstable_next((function() {
                                    var n = _n.suspense;
                                    _n.suspense = void 0 === e ? null : e;
                                    try {
                                        i(t)
                                    } finally {
                                        _n.suspense = n
                                    }
                                }))
                            }), [t, e]), r
                        },
                        useTransition: function(t) {
                            var e = Bn(),
                                n = e[0],
                                r = e[1];
                            return [$n((function(e) {
                                r(!0), a.unstable_next((function() {
                                    var n = _n.suspense;
                                    _n.suspense = void 0 === t ? null : t;
                                    try {
                                        r(!1), e()
                                    } finally {
                                        _n.suspense = n
                                    }
                                }))
                            }), [t, n]), n]
                        }
                    },
                    nr = null,
                    rr = null,
                    ir = !1;

                function or(t, e) {
                    var n = io(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = e, n.return = t, n.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
                }

                function ar(t, e) {
                    switch (t.tag) {
                        case 5:
                            return null !== (e = yt(e, t.type, t.pendingProps)) && (t.stateNode = e, !0);
                        case 6:
                            return null !== (e = vt(e, t.pendingProps)) && (t.stateNode = e, !0);
                        case 13:
                        default:
                            return !1
                    }
                }

                function sr(t) {
                    if (ir) {
                        var e = rr;
                        if (e) {
                            var n = e;
                            if (!ar(t, e)) {
                                if (!(e = bt(n)) || !ar(t, e)) return t.effectTag = -1025 & t.effectTag | 2, ir = !1, void(nr = t);
                                or(nr, n)
                            }
                            nr = t, rr = St(e)
                        } else t.effectTag = -1025 & t.effectTag | 2, ir = !1, nr = t
                    }
                }

                function lr(t) {
                    for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
                    nr = t
                }

                function ur(t) {
                    if (!X || t !== nr) return !1;
                    if (!ir) return lr(t), ir = !0, !1;
                    var e = t.type;
                    if (5 !== t.tag || "head" !== e && "body" !== e && !L(e, t.memoizedProps))
                        for (e = rr; e;) or(t, e), e = bt(e);
                    if (lr(t), 13 === t.tag) {
                        if (!X) throw Error(s(316));
                        if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(s(317));
                        rr = wt(t)
                    } else rr = nr ? bt(t.stateNode) : null;
                    return !0
                }

                function cr() {
                    X && (rr = nr = null, ir = !1)
                }
                var hr = l.ReactCurrentOwner,
                    dr = !1;

                function fr(t, e, n, r) {
                    e.child = null === t ? on(e, null, n, r) : rn(e, t.child, n, r)
                }

                function pr(t, e, n, r, i) {
                    n = n.render;
                    var o = e.ref;
                    return Oe(e, i), r = Rn(t, e, n, r, o, i), null === t || dr ? (e.effectTag |= 1, fr(t, e, r, i), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), Or(t, e, i))
                }

                function gr(t, e, n, r, i, o) {
                    if (null === t) {
                        var a = n.type;
                        return "function" !== typeof a || oo(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = so(n.type, null, r, null, e.mode, o)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = a, yr(t, e, a, r, i, o))
                    }
                    return a = t.child, i < o && (i = a.memoizedProps, (n = null !== (n = n.compare) ? n : Se)(i, r) && t.ref === e.ref) ? Or(t, e, o) : (e.effectTag |= 1, (t = ao(a, r)).ref = e.ref, t.return = e, e.child = t)
                }

                function yr(t, e, n, r, i, o) {
                    return null !== t && Se(t.memoizedProps, r) && t.ref === e.ref && (dr = !1, i < o) ? Or(t, e, o) : mr(t, e, n, r, o)
                }

                function vr(t, e) {
                    var n = e.ref;
                    (null === t && null !== n || null !== t && t.ref !== n) && (e.effectTag |= 128)
                }

                function mr(t, e, n, r, i) {
                    var o = Ut(n) ? Dt : It.current;
                    return o = Gt(e, o), Oe(e, i), n = Rn(t, e, n, r, o, i), null === t || dr ? (e.effectTag |= 1, fr(t, e, n, i), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), Or(t, e, i))
                }

                function _r(t, e, n, r, i) {
                    if (Ut(n)) {
                        var o = !0;
                        Ht(e)
                    } else o = !1;
                    if (Oe(e, i), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), Qe(e, n, r), Je(e, n, r, i), r = !0;
                    else if (null === t) {
                        var a = e.stateNode,
                            s = e.memoizedProps;
                        a.props = s;
                        var l = a.context,
                            u = n.contextType;
                        "object" === typeof u && null !== u ? u = Ne(u) : u = Gt(e, u = Ut(n) ? Dt : It.current);
                        var c = n.getDerivedStateFromProps,
                            h = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
                        h || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (s !== r || l !== u) && $e(e, a, r, u), Ae = !1;
                        var d = e.memoizedState;
                        l = a.state = d;
                        var f = e.updateQueue;
                        null !== f && (Be(e, f, r, a, i), l = e.memoizedState), s !== r || d !== l || Rt.current || Ae ? ("function" === typeof c && (Ye(e, n, c, r), l = e.memoizedState), (s = Ae || qe(e, n, s, r, d, l, u)) ? (h || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (e.effectTag |= 4)) : ("function" === typeof a.componentDidMount && (e.effectTag |= 4), e.memoizedProps = r, e.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : ("function" === typeof a.componentDidMount && (e.effectTag |= 4), r = !1)
                    } else a = e.stateNode, s = e.memoizedProps, a.props = e.type === e.elementType ? s : xe(e.type, s), l = a.context, "object" === typeof(u = n.contextType) && null !== u ? u = Ne(u) : u = Gt(e, u = Ut(n) ? Dt : It.current), (h = "function" === typeof(c = n.getDerivedStateFromProps) || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (s !== r || l !== u) && $e(e, a, r, u), Ae = !1, l = e.memoizedState, d = a.state = l, null !== (f = e.updateQueue) && (Be(e, f, r, a, i), d = e.memoizedState), s !== r || l !== d || Rt.current || Ae ? ("function" === typeof c && (Ye(e, n, c, r), d = e.memoizedState), (c = Ae || qe(e, n, s, r, l, d, u)) ? (h || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, d, u), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, u)), "function" === typeof a.componentDidUpdate && (e.effectTag |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (e.effectTag |= 256)) : ("function" !== typeof a.componentDidUpdate || s === t.memoizedProps && l === t.memoizedState || (e.effectTag |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || s === t.memoizedProps && l === t.memoizedState || (e.effectTag |= 256), e.memoizedProps = r, e.memoizedState = d), a.props = r, a.state = d, a.context = u, r = c) : ("function" !== typeof a.componentDidUpdate || s === t.memoizedProps && l === t.memoizedState || (e.effectTag |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || s === t.memoizedProps && l === t.memoizedState || (e.effectTag |= 256), r = !1);
                    return br(t, e, n, r, o, i)
                }

                function br(t, e, n, r, i, o) {
                    vr(t, e);
                    var a = 0 !== (64 & e.effectTag);
                    if (!r && !a) return i && Vt(e, n, !1), Or(t, e, o);
                    r = e.stateNode, hr.current = e;
                    var s = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return e.effectTag |= 1, null !== t && a ? (e.child = rn(e, t.child, null, o), e.child = rn(e, null, s, o)) : fr(t, e, s, o), e.memoizedState = r.state, i && Vt(e, n, !0), e.child
                }

                function Sr(t) {
                    var e = t.stateNode;
                    e.pendingContext ? jt(0, e.pendingContext, e.pendingContext !== e.context) : e.context && jt(0, e.context, !1), hn(t, e.containerInfo)
                }
                var xr, Cr, wr, Tr, Pr = {
                    dehydrated: null,
                    retryTime: 0
                };

                function kr(t, e, n) {
                    var r, i = e.mode,
                        o = e.pendingProps,
                        a = gn.current,
                        s = !1;
                    if ((r = 0 !== (64 & e.effectTag)) || (r = 0 !== (2 & a) && (null === t || null !== t.memoizedState)), r ? (s = !0, e.effectTag &= -65) : null !== t && null === t.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1), Nt(gn, 1 & a), null === t) {
                        if (void 0 !== o.fallback && sr(e), s) {
                            if (s = o.fallback, (o = lo(null, i, 0, null)).return = e, 0 === (2 & e.mode))
                                for (t = null !== e.memoizedState ? e.child.child : e.child, o.child = t; null !== t;) t.return = o, t = t.sibling;
                            return (n = lo(s, i, n, null)).return = e, o.sibling = n, e.memoizedState = Pr, e.child = o, n
                        }
                        return i = o.children, e.memoizedState = null, e.child = on(e, null, i, n)
                    }
                    if (null !== t.memoizedState) {
                        if (i = (t = t.child).sibling, s) {
                            if (o = o.fallback, (n = ao(t, t.pendingProps)).return = e, 0 === (2 & e.mode) && (s = null !== e.memoizedState ? e.child.child : e.child) !== t.child)
                                for (n.child = s; null !== s;) s.return = n, s = s.sibling;
                            return (i = ao(i, o, i.expirationTime)).return = e, n.sibling = i, n.childExpirationTime = 0, e.memoizedState = Pr, e.child = n, i
                        }
                        return n = rn(e, t.child, o.children, n), e.memoizedState = null, e.child = n
                    }
                    if (t = t.child, s) {
                        if (s = o.fallback, (o = lo(null, i, 0, null)).return = e, o.child = t, null !== t && (t.return = o), 0 === (2 & e.mode))
                            for (t = null !== e.memoizedState ? e.child.child : e.child, o.child = t; null !== t;) t.return = o, t = t.sibling;
                        return (n = lo(s, i, n, null)).return = e, o.sibling = n, n.effectTag |= 2, o.childExpirationTime = 0, e.memoizedState = Pr, e.child = o, n
                    }
                    return e.memoizedState = null, e.child = rn(e, t, o.children, n)
                }

                function Er(t, e) {
                    t.expirationTime < e && (t.expirationTime = e);
                    var n = t.alternate;
                    null !== n && n.expirationTime < e && (n.expirationTime = e), Fe(t.return, e)
                }

                function Mr(t, e, n, r, i, o) {
                    var a = t.memoizedState;
                    null === a ? t.memoizedState = {
                        isBackwards: e,
                        rendering: null,
                        last: r,
                        tail: n,
                        tailExpiration: 0,
                        tailMode: i,
                        lastEffect: o
                    } : (a.isBackwards = e, a.rendering = null, a.last = r, a.tail = n, a.tailExpiration = 0, a.tailMode = i, a.lastEffect = o)
                }

                function Fr(t, e, n) {
                    var r = e.pendingProps,
                        i = r.revealOrder,
                        o = r.tail;
                    if (fr(t, e, r.children, n), 0 !== (2 & (r = gn.current))) r = 1 & r | 2, e.effectTag |= 64;
                    else {
                        if (null !== t && 0 !== (64 & t.effectTag)) t: for (t = e.child; null !== t;) {
                            if (13 === t.tag) null !== t.memoizedState && Er(t, n);
                            else if (19 === t.tag) Er(t, n);
                            else if (null !== t.child) {
                                t.child.return = t, t = t.child;
                                continue
                            }
                            if (t === e) break t;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) break t;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                        r &= 1
                    }
                    if (Nt(gn, r), 0 === (2 & e.mode)) e.memoizedState = null;
                    else switch (i) {
                        case "forwards":
                            for (n = e.child, i = null; null !== n;) null !== (t = n.alternate) && null === yn(t) && (i = n), n = n.sibling;
                            null === (n = i) ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Mr(e, !1, i, n, o, e.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, i = e.child, e.child = null; null !== i;) {
                                if (null !== (t = i.alternate) && null === yn(t)) {
                                    e.child = i;
                                    break
                                }
                                t = i.sibling, i.sibling = n, n = i, i = t
                            }
                            Mr(e, !0, n, null, o, e.lastEffect);
                            break;
                        case "together":
                            Mr(e, !1, null, null, void 0, e.lastEffect);
                            break;
                        default:
                            e.memoizedState = null
                    }
                    return e.child
                }

                function Or(t, e, n) {
                    null !== t && (e.dependencies = t.dependencies);
                    var r = e.expirationTime;
                    if (0 !== r && zi(r), e.childExpirationTime < n) return null;
                    if (null !== t && e.child !== t.child) throw Error(s(153));
                    if (null !== e.child) {
                        for (n = ao(t = e.child, t.pendingProps, t.expirationTime), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = ao(t, t.pendingProps, t.expirationTime)).return = e;
                        n.sibling = null
                    }
                    return e.child
                }

                function Nr(t) {
                    t.effectTag |= 4
                }
                if (K) xr = function(t, e) {
                    for (var n = e.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) D(t, n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === e) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Cr = function() {}, wr = function(t, e, n, r, i) {
                    if ((t = t.memoizedProps) !== r) {
                        var o = e.stateNode,
                            a = cn(sn.current);
                        n = U(o, n, t, r, i, a), (e.updateQueue = n) && Nr(e)
                    }
                }, Tr = function(t, e, n, r) {
                    n !== r && Nr(e)
                };
                else if (Y) {
                    xr = function(t, e, n, r) {
                        for (var i = e.child; null !== i;) {
                            if (5 === i.tag) {
                                var o = i.stateNode;
                                n && r && (o = pt(o, i.type, i.memoizedProps, i)), D(t, o)
                            } else if (6 === i.tag) o = i.stateNode, n && r && (o = gt(o, i.memoizedProps, i)), D(t, o);
                            else if (4 !== i.tag) {
                                if (13 === i.tag && 0 !== (4 & i.effectTag) && (o = null !== i.memoizedState)) {
                                    var a = i.child;
                                    if (null !== a && (null !== a.child && (a.child.return = a, xr(t, a, !0, o)), null !== (o = a.sibling))) {
                                        o.return = i, i = o;
                                        continue
                                    }
                                }
                                if (null !== i.child) {
                                    i.child.return = i, i = i.child;
                                    continue
                                }
                            }
                            if (i === e) break;
                            for (; null === i.sibling;) {
                                if (null === i.return || i.return === e) return;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                    };
                    Cr = function(t) {
                        var e = t.stateNode;
                        if (null !== t.firstEffect) {
                            var n = e.containerInfo,
                                r = ct(n);
                            ! function t(e, n, r, i) {
                                for (var o = n.child; null !== o;) {
                                    if (5 === o.tag) {
                                        var a = o.stateNode;
                                        r && i && (a = pt(a, o.type, o.memoizedProps, o)), ht(e, a)
                                    } else if (6 === o.tag) a = o.stateNode, r && i && (a = gt(a, o.memoizedProps, o)), ht(e, a);
                                    else if (4 !== o.tag) {
                                        if (13 === o.tag && 0 !== (4 & o.effectTag) && (a = null !== o.memoizedState)) {
                                            var s = o.child;
                                            if (null !== s && (null !== s.child && (s.child.return = s, t(e, s, !0, a)), null !== (a = s.sibling))) {
                                                a.return = o, o = a;
                                                continue
                                            }
                                        }
                                        if (null !== o.child) {
                                            o.child.return = o, o = o.child;
                                            continue
                                        }
                                    }
                                    if (o === n) break;
                                    for (; null === o.sibling;) {
                                        if (null === o.return || o.return === n) return;
                                        o = o.return
                                    }
                                    o.sibling.return = o.return, o = o.sibling
                                }
                            }(r, t, !1, !1), e.pendingChildren = r, Nr(t), dt(n, r)
                        }
                    }, wr = function(t, e, n, r, i) {
                        var o = t.stateNode,
                            a = t.memoizedProps;
                        if ((t = null === e.firstEffect) && a === r) e.stateNode = o;
                        else {
                            var s = e.stateNode,
                                l = cn(sn.current),
                                u = null;
                            a !== r && (u = U(s, n, a, r, i, l)), t && null === u ? e.stateNode = o : (o = ut(o, u, n, a, r, e, t, s), G(o, n, r, i, l) && Nr(e), e.stateNode = o, t ? Nr(e) : xr(o, e, !1, !1))
                        }
                    }, Tr = function(t, e, n, r) {
                        n !== r && (t = cn(un.current), n = cn(sn.current), e.stateNode = j(r, t, n, e), Nr(e))
                    }
                } else Cr = function() {}, wr = function() {}, Tr = function() {};

                function Ar(t, e) {
                    switch (t.tailMode) {
                        case "hidden":
                            e = t.tail;
                            for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
                            null === n ? t.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = t.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null
                    }
                }

                function Ir(t) {
                    switch (t.tag) {
                        case 1:
                            Ut(t.type) && Lt();
                            var e = t.effectTag;
                            return 4096 & e ? (t.effectTag = -4097 & e | 64, t) : null;
                        case 3:
                            if (dn(), zt(), 0 !== (64 & (e = t.effectTag))) throw Error(s(285));
                            return t.effectTag = -4097 & e | 64, t;
                        case 5:
                            return pn(t), null;
                        case 13:
                            return Ot(gn), 4096 & (e = t.effectTag) ? (t.effectTag = -4097 & e | 64, t) : null;
                        case 19:
                            return Ot(gn), null;
                        case 4:
                            return dn(), null;
                        case 10:
                            return Me(t), null;
                        default:
                            return null
                    }
                }

                function Rr(t, e) {
                    return {
                        value: t,
                        source: e,
                        stack: Et(e)
                    }
                }
                var Dr = "function" === typeof WeakSet ? WeakSet : Set;

                function Gr(t, e) {
                    var n = e.source,
                        r = e.stack;
                    null === r && null !== n && (r = Et(n)), null !== n && T(n.type), e = e.value, null !== t && 1 === t.tag && T(t.type);
                    try {
                        console.error(e)
                    } catch (i) {
                        setTimeout((function() {
                            throw i
                        }))
                    }
                }

                function Ur(t) {
                    var e = t.ref;
                    if (null !== e)
                        if ("function" === typeof e) try {
                            e(null)
                        } catch (n) {
                            Ji(t, n)
                        } else e.current = null
                }

                function Lr(t, e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            zr(2, 0, e);
                            break;
                        case 1:
                            if (256 & e.effectTag && null !== t) {
                                var n = t.memoizedProps,
                                    r = t.memoizedState;
                                e = (t = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? n : xe(e.type, n), r), t.__reactInternalSnapshotBeforeUpdate = e
                            }
                            break;
                        case 3:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(s(163))
                    }
                }

                function zr(t, e, n) {
                    if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
                        var r = n = n.next;
                        do {
                            if (0 !== (r.tag & t)) {
                                var i = r.destroy;
                                r.destroy = void 0, void 0 !== i && i()
                            }
                            0 !== (r.tag & e) && (i = r.create, r.destroy = i()), r = r.next
                        } while (r !== n)
                    }
                }

                function jr(t, e, n) {
                    switch ("function" === typeof no && no(e), e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) {
                                var r = t.next;
                                de(97 < n ? 97 : n, (function() {
                                    var t = r;
                                    do {
                                        var n = t.destroy;
                                        if (void 0 !== n) {
                                            var i = e;
                                            try {
                                                n()
                                            } catch (o) {
                                                Ji(i, o)
                                            }
                                        }
                                        t = t.next
                                    } while (t !== r)
                                }))
                            }
                            break;
                        case 1:
                            Ur(e), "function" === typeof(n = e.stateNode).componentWillUnmount && function(t, e) {
                                try {
                                    e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                                } catch (n) {
                                    Ji(t, n)
                                }
                            }(e, n);
                            break;
                        case 5:
                            Ur(e);
                            break;
                        case 4:
                            K ? Kr(t, e, n) : Y && function(t) {
                                if (Y) {
                                    t = t.stateNode.containerInfo;
                                    var e = ct(t);
                                    ft(t, e)
                                }
                            }(e)
                    }
                }

                function Br(t, e, n) {
                    for (var r = e;;)
                        if (jr(t, r, n), null === r.child || K && 4 === r.tag) {
                            if (r === e) break;
                            for (; null === r.sibling;) {
                                if (null === r.return || r.return === e) return;
                                r = r.return
                            }
                            r.sibling.return = r.return, r = r.sibling
                        } else r.child.return = r, r = r.child
                }

                function Hr(t) {
                    var e = t.alternate;
                    t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.alternate = null, t.firstEffect = null, t.lastEffect = null, t.pendingProps = null, t.memoizedProps = null, null !== e && Hr(e)
                }

                function Vr(t) {
                    return 5 === t.tag || 3 === t.tag || 4 === t.tag
                }

                function Wr(t) {
                    if (K) {
                        t: {
                            for (var e = t.return; null !== e;) {
                                if (Vr(e)) {
                                    var n = e;
                                    break t
                                }
                                e = e.return
                            }
                            throw Error(s(160))
                        }
                        switch (e = n.stateNode, n.tag) {
                            case 5:
                                var r = !1;
                                break;
                            case 3:
                            case 4:
                                e = e.containerInfo, r = !0;
                                break;
                            default:
                                throw Error(s(161))
                        }
                        16 & n.effectTag && (it(e), n.effectTag &= -17);t: e: for (n = t;;) {
                            for (; null === n.sibling;) {
                                if (null === n.return || Vr(n.return)) {
                                    n = null;
                                    break t
                                }
                                n = n.return
                            }
                            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                                if (2 & n.effectTag) continue e;
                                if (null === n.child || 4 === n.tag) continue e;
                                n.child.return = n, n = n.child
                            }
                            if (!(2 & n.effectTag)) {
                                n = n.stateNode;
                                break t
                            }
                        }
                        for (var i = t;;) {
                            var o = 5 === i.tag || 6 === i.tag;
                            if (o) o = o ? i.stateNode : i.stateNode.instance, n ? r ? et(e, o, n) : tt(e, o, n) : r ? Q(e, o) : q(e, o);
                            else if (4 !== i.tag && null !== i.child) {
                                i.child.return = i, i = i.child;
                                continue
                            }
                            if (i === t) break;
                            for (; null === i.sibling;) {
                                if (null === i.return || i.return === t) return;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                    }
                }

                function Kr(t, e, n) {
                    for (var r, i, o = e, a = !1;;) {
                        if (!a) {
                            a = o.return;
                            t: for (;;) {
                                if (null === a) throw Error(s(160));
                                switch (r = a.stateNode, a.tag) {
                                    case 5:
                                        i = !1;
                                        break t;
                                    case 3:
                                    case 4:
                                        r = r.containerInfo, i = !0;
                                        break t
                                }
                                a = a.return
                            }
                            a = !0
                        }
                        if (5 === o.tag || 6 === o.tag) Br(t, o, n), i ? rt(r, o.stateNode) : nt(r, o.stateNode);
                        else if (4 === o.tag) {
                            if (null !== o.child) {
                                r = o.stateNode.containerInfo, i = !0, o.child.return = o, o = o.child;
                                continue
                            }
                        } else if (jr(t, o, n), null !== o.child) {
                            o.child.return = o, o = o.child;
                            continue
                        }
                        if (o === e) break;
                        for (; null === o.sibling;) {
                            if (null === o.return || o.return === e) return;
                            4 === (o = o.return).tag && (a = !1)
                        }
                        o.sibling.return = o.return, o = o.sibling
                    }
                }

                function Yr(t, e) {
                    if (K) switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            zr(4, 8, e);
                            break;
                        case 1:
                            break;
                        case 5:
                            var n = e.stateNode;
                            if (null != n) {
                                var r = e.memoizedProps;
                                t = null !== t ? t.memoizedProps : r;
                                var i = e.type,
                                    o = e.updateQueue;
                                e.updateQueue = null, null !== o && Z(n, o, i, t, r, e)
                            }
                            break;
                        case 6:
                            if (null === e.stateNode) throw Error(s(162));
                            n = e.memoizedProps, $(e.stateNode, null !== t ? t.memoizedProps : n, n);
                            break;
                        case 3:
                            X && ((e = e.stateNode).hydrate && (e.hydrate = !1, Tt(e.containerInfo)));
                            break;
                        case 12:
                            break;
                        case 13:
                            Xr(e), qr(e);
                            break;
                        case 19:
                            qr(e);
                            break;
                        case 17:
                        case 20:
                        case 21:
                            break;
                        default:
                            throw Error(s(163))
                    } else {
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                return void zr(4, 8, e);
                            case 12:
                                return;
                            case 13:
                                return Xr(e), void qr(e);
                            case 19:
                                return void qr(e);
                            case 3:
                                X && ((n = e.stateNode).hydrate && (n.hydrate = !1, Tt(n.containerInfo)))
                        }
                        t: if (Y) switch (e.tag) {
                            case 1:
                            case 5:
                            case 6:
                            case 20:
                                break t;
                            case 3:
                            case 4:
                                e = e.stateNode, ft(e.containerInfo, e.pendingChildren);
                                break t;
                            default:
                                throw Error(s(163))
                        }
                    }
                }

                function Xr(t) {
                    var e = t;
                    if (null === t.memoizedState) var n = !1;
                    else n = !0, e = t.child, gi = ue();
                    if (K && null !== e) t: if (t = e, K)
                        for (e = t;;) {
                            if (5 === e.tag) {
                                var r = e.stateNode;
                                n ? ot(r) : st(e.stateNode, e.memoizedProps)
                            } else if (6 === e.tag) r = e.stateNode, n ? at(r) : lt(r, e.memoizedProps);
                            else {
                                if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                                    (r = e.child.sibling).return = e, e = r;
                                    continue
                                }
                                if (null !== e.child) {
                                    e.child.return = e, e = e.child;
                                    continue
                                }
                            }
                            if (e === t) break t;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break t;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                }

                function qr(t) {
                    var e = t.updateQueue;
                    if (null !== e) {
                        t.updateQueue = null;
                        var n = t.stateNode;
                        null === n && (n = t.stateNode = new Dr), e.forEach((function(e) {
                            var r = to.bind(null, t, e);
                            n.has(e) || (n.add(e), e.then(r, r))
                        }))
                    }
                }
                var Qr = "function" === typeof WeakMap ? WeakMap : Map;

                function $r(t, e, n) {
                    (n = De(n, null)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = e.value;
                    return n.callback = function() {
                        vi || (vi = !0, mi = r), Gr(t, e)
                    }, n
                }

                function Jr(t, e, n) {
                    (n = De(n, null)).tag = 3;
                    var r = t.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var i = e.value;
                        n.payload = function() {
                            return Gr(t, e), r(i)
                        }
                    }
                    var o = t.stateNode;
                    return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
                        "function" !== typeof r && (null === _i ? _i = new Set([this]) : _i.add(this), Gr(t, e));
                        var n = e.stack;
                        this.componentDidCatch(e.value, {
                            componentStack: null !== n ? n : ""
                        })
                    }), n
                }
                var Zr, ti = Math.ceil,
                    ei = l.ReactCurrentDispatcher,
                    ni = l.ReactCurrentOwner,
                    ri = 16,
                    ii = 0,
                    oi = null,
                    ai = null,
                    si = 0,
                    li = 0,
                    ui = null,
                    ci = 1073741823,
                    hi = 1073741823,
                    di = null,
                    fi = 0,
                    pi = !1,
                    gi = 0,
                    yi = null,
                    vi = !1,
                    mi = null,
                    _i = null,
                    bi = !1,
                    Si = null,
                    xi = 90,
                    Ci = null,
                    wi = 0,
                    Ti = null,
                    Pi = 0;

                function ki() {
                    return 0 !== (48 & ii) ? 1073741821 - (ue() / 10 | 0) : 0 !== Pi ? Pi : Pi = 1073741821 - (ue() / 10 | 0)
                }

                function Ei(t, e, n) {
                    if (0 === (2 & (e = e.mode))) return 1073741823;
                    var r = ce();
                    if (0 === (4 & e)) return 99 === r ? 1073741823 : 1073741822;
                    if (0 !== (ii & ri)) return si;
                    if (null !== n) t = me(t, 0 | n.timeoutMs || 5e3, 250);
                    else switch (r) {
                        case 99:
                            t = 1073741823;
                            break;
                        case 98:
                            t = me(t, 150, 100);
                            break;
                        case 97:
                        case 96:
                            t = me(t, 5e3, 250);
                            break;
                        case 95:
                            t = 2;
                            break;
                        default:
                            throw Error(s(326))
                    }
                    return null !== oi && t === si && --t, t
                }

                function Mi(t, e) {
                    if (50 < wi) throw wi = 0, Ti = null, Error(s(185));
                    if (null !== (t = Fi(t, e))) {
                        var n = ce();
                        1073741823 === e ? 0 !== (8 & ii) && 0 === (48 & ii) ? Ii(t) : (Ni(t), 0 === ii && ge()) : Ni(t), 0 === (4 & ii) || 98 !== n && 99 !== n || (null === Ci ? Ci = new Map([
                            [t, e]
                        ]) : (void 0 === (n = Ci.get(t)) || n > e) && Ci.set(t, e))
                    }
                }

                function Fi(t, e) {
                    t.expirationTime < e && (t.expirationTime = e);
                    var n = t.alternate;
                    null !== n && n.expirationTime < e && (n.expirationTime = e);
                    var r = t.return,
                        i = null;
                    if (null === r && 3 === t.tag) i = t.stateNode;
                    else
                        for (; null !== r;) {
                            if (n = r.alternate, r.childExpirationTime < e && (r.childExpirationTime = e), null !== n && n.childExpirationTime < e && (n.childExpirationTime = e), null === r.return && 3 === r.tag) {
                                i = r.stateNode;
                                break
                            }
                            r = r.return
                        }
                    return null !== i && (oi === i && (zi(e), 4 === li && po(i, si)), go(i, e)), i
                }

                function Oi(t) {
                    var e = t.lastExpiredTime;
                    return 0 !== e ? e : fo(t, e = t.firstPendingTime) ? (e = t.lastPingedTime) > (t = t.nextKnownPendingLevel) ? e : t : e
                }

                function Ni(t) {
                    if (0 !== t.lastExpiredTime) t.callbackExpirationTime = 1073741823, t.callbackPriority = 99, t.callbackNode = pe(Ii.bind(null, t));
                    else {
                        var e = Oi(t),
                            n = t.callbackNode;
                        if (0 === e) null !== n && (t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90);
                        else {
                            var r = ki();
                            if (1073741823 === e ? r = 99 : 1 === e || 2 === e ? r = 95 : r = 0 >= (r = 10 * (1073741821 - e) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                                var i = t.callbackPriority;
                                if (t.callbackExpirationTime === e && i >= r) return;
                                n !== re && Yt(n)
                            }
                            t.callbackExpirationTime = e, t.callbackPriority = r, e = 1073741823 === e ? pe(Ii.bind(null, t)) : fe(r, Ai.bind(null, t), {
                                timeout: 10 * (1073741821 - e) - ue()
                            }), t.callbackNode = e
                        }
                    }
                }

                function Ai(t, e) {
                    if (Pi = 0, e) return yo(t, e = ki()), Ni(t), null;
                    var n = Oi(t);
                    if (0 !== n) {
                        if (e = t.callbackNode, 0 !== (48 & ii)) throw Error(s(327));
                        if (qi(), t === oi && n === si || Di(t, n), null !== ai) {
                            var r = ii;
                            ii |= ri;
                            for (var i = Ui();;) try {
                                Bi();
                                break
                            } catch (l) {
                                Gi(t, l)
                            }
                            if (ke(), ii = r, ei.current = i, 1 === li) throw e = ui, Di(t, n), po(t, n), Ni(t), e;
                            if (null === ai) switch (i = t.finishedWork = t.current.alternate, t.finishedExpirationTime = n, r = li, oi = null, r) {
                                case 0:
                                case 1:
                                    throw Error(s(345));
                                case 2:
                                    yo(t, 2 < n ? 2 : n);
                                    break;
                                case 3:
                                    if (po(t, n), n === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = Wi(i)), 1073741823 === ci && 10 < (i = gi + 500 - ue())) {
                                        if (pi) {
                                            var o = t.lastPingedTime;
                                            if (0 === o || o >= n) {
                                                t.lastPingedTime = n, Di(t, n);
                                                break
                                            }
                                        }
                                        if (0 !== (o = Oi(t)) && o !== n) break;
                                        if (0 !== r && r !== n) {
                                            t.lastPingedTime = r;
                                            break
                                        }
                                        t.timeoutHandle = B(Ki.bind(null, t), i);
                                        break
                                    }
                                    Ki(t);
                                    break;
                                case 4:
                                    if (po(t, n), n === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = Wi(i)), pi && (0 === (i = t.lastPingedTime) || i >= n)) {
                                        t.lastPingedTime = n, Di(t, n);
                                        break
                                    }
                                    if (0 !== (i = Oi(t)) && i !== n) break;
                                    if (0 !== r && r !== n) {
                                        t.lastPingedTime = r;
                                        break
                                    }
                                    if (1073741823 !== hi ? r = 10 * (1073741821 - hi) - ue() : 1073741823 === ci ? r = 0 : (r = 10 * (1073741821 - ci) - 5e3, 0 > (r = (i = ue()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ti(r / 1960)) - r) && (r = n)), 10 < r) {
                                        t.timeoutHandle = B(Ki.bind(null, t), r);
                                        break
                                    }
                                    Ki(t);
                                    break;
                                case 5:
                                    if (1073741823 !== ci && null !== di) {
                                        o = ci;
                                        var a = di;
                                        if (0 >= (r = 0 | a.busyMinDurationMs) ? r = 0 : (i = 0 | a.busyDelayMs, r = (o = ue() - (10 * (1073741821 - o) - (0 | a.timeoutMs || 5e3))) <= i ? 0 : i + r - o), 10 < r) {
                                            po(t, n), t.timeoutHandle = B(Ki.bind(null, t), r);
                                            break
                                        }
                                    }
                                    Ki(t);
                                    break;
                                default:
                                    throw Error(s(329))
                            }
                            if (Ni(t), t.callbackNode === e) return Ai.bind(null, t)
                        }
                    }
                    return null
                }

                function Ii(t) {
                    var e = t.lastExpiredTime;
                    if (e = 0 !== e ? e : 1073741823, t.finishedExpirationTime === e) Ki(t);
                    else {
                        if (0 !== (48 & ii)) throw Error(s(327));
                        if (qi(), t === oi && e === si || Di(t, e), null !== ai) {
                            var n = ii;
                            ii |= ri;
                            for (var r = Ui();;) try {
                                ji();
                                break
                            } catch (i) {
                                Gi(t, i)
                            }
                            if (ke(), ii = n, ei.current = r, 1 === li) throw n = ui, Di(t, e), po(t, e), Ni(t), n;
                            if (null !== ai) throw Error(s(261));
                            t.finishedWork = t.current.alternate, t.finishedExpirationTime = e, oi = null, Ki(t), Ni(t)
                        }
                    }
                    return null
                }

                function Ri(t, e) {
                    if (0 !== (48 & ii)) throw Error(s(187));
                    var n = ii;
                    ii |= 1;
                    try {
                        return de(99, t.bind(null, e))
                    } finally {
                        ii = n, ge()
                    }
                }

                function Di(t, e) {
                    t.finishedWork = null, t.finishedExpirationTime = 0;
                    var n = t.timeoutHandle;
                    if (n !== V && (t.timeoutHandle = V, H(n)), null !== ai)
                        for (n = ai.return; null !== n;) {
                            var r = n;
                            switch (r.tag) {
                                case 1:
                                    var i = r.type.childContextTypes;
                                    null !== i && void 0 !== i && Lt();
                                    break;
                                case 3:
                                    dn(), zt();
                                    break;
                                case 5:
                                    pn(r);
                                    break;
                                case 4:
                                    dn();
                                    break;
                                case 13:
                                case 19:
                                    Ot(gn);
                                    break;
                                case 10:
                                    Me(r)
                            }
                            n = n.return
                        }
                    oi = t, ai = ao(t.current, null), si = e, li = 0, ui = null, hi = ci = 1073741823, di = null, fi = 0, pi = !1
                }

                function Gi(t, e) {
                    for (;;) {
                        try {
                            if (ke(), Dn(), null === ai || null === ai.return) return li = 1, ui = e, null;
                            t: {
                                var n = t,
                                    r = ai.return,
                                    i = ai,
                                    o = e;
                                if (e = si, i.effectTag |= 2048, i.firstEffect = i.lastEffect = null, null !== o && "object" === typeof o && "function" === typeof o.then) {
                                    var a = o,
                                        s = 0 !== (1 & gn.current),
                                        l = r;
                                    do {
                                        var u;
                                        if (u = 13 === l.tag) {
                                            var c = l.memoizedState;
                                            if (null !== c) u = null !== c.dehydrated;
                                            else {
                                                var h = l.memoizedProps;
                                                u = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !s)
                                            }
                                        }
                                        if (u) {
                                            var d = l.updateQueue;
                                            if (null === d) {
                                                var f = new Set;
                                                f.add(a), l.updateQueue = f
                                            } else d.add(a);
                                            if (0 === (2 & l.mode)) {
                                                if (l.effectTag |= 64, i.effectTag &= -2981, 1 === i.tag)
                                                    if (null === i.alternate) i.tag = 17;
                                                    else {
                                                        var p = De(1073741823, null);
                                                        p.tag = 2, Ue(i, p)
                                                    }
                                                i.expirationTime = 1073741823;
                                                break t
                                            }
                                            o = void 0, i = e;
                                            var g = n.pingCache;
                                            if (null === g ? (g = n.pingCache = new Qr, o = new Set, g.set(a, o)) : void 0 === (o = g.get(a)) && (o = new Set, g.set(a, o)), !o.has(i)) {
                                                o.add(i);
                                                var y = Zi.bind(null, n, a, i);
                                                a.then(y, y)
                                            }
                                            l.effectTag |= 4096, l.expirationTime = e;
                                            break t
                                        }
                                        l = l.return
                                    } while (null !== l);
                                    o = Error((T(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Et(i))
                                }
                                5 !== li && (li = 2),
                                o = Rr(o, i),
                                l = r;do {
                                    switch (l.tag) {
                                        case 3:
                                            a = o, l.effectTag |= 4096, l.expirationTime = e, Le(l, $r(l, a, e));
                                            break t;
                                        case 1:
                                            a = o;
                                            var v = l.type,
                                                m = l.stateNode;
                                            if (0 === (64 & l.effectTag) && ("function" === typeof v.getDerivedStateFromError || null !== m && "function" === typeof m.componentDidCatch && (null === _i || !_i.has(m)))) {
                                                l.effectTag |= 4096, l.expirationTime = e, Le(l, Jr(l, a, e));
                                                break t
                                            }
                                    }
                                    l = l.return
                                } while (null !== l)
                            }
                            ai = Vi(ai)
                        } catch (_) {
                            e = _;
                            continue
                        }
                        break
                    }
                }

                function Ui() {
                    var t = ei.current;
                    return ei.current = Zn, null === t ? Zn : t
                }

                function Li(t, e) {
                    t < ci && 2 < t && (ci = t), null !== e && t < hi && 2 < t && (hi = t, di = e)
                }

                function zi(t) {
                    t > fi && (fi = t)
                }

                function ji() {
                    for (; null !== ai;) ai = Hi(ai)
                }

                function Bi() {
                    for (; null !== ai && !Xt();) ai = Hi(ai)
                }

                function Hi(t) {
                    var e = Zr(t.alternate, t, si);
                    return t.memoizedProps = t.pendingProps, null === e && (e = Vi(t)), ni.current = null, e
                }

                function Vi(t) {
                    ai = t;
                    do {
                        var e = ai.alternate;
                        if (t = ai.return, 0 === (2048 & ai.effectTag)) {
                            t: {
                                var n = e,
                                    r = si,
                                    i = (e = ai).pendingProps;
                                switch (e.tag) {
                                    case 2:
                                    case 16:
                                        break;
                                    case 15:
                                    case 0:
                                        break;
                                    case 1:
                                        Ut(e.type) && Lt();
                                        break;
                                    case 3:
                                        dn(), zt(), (i = e.stateNode).pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (null === n || null === n.child) && ur(e) && Nr(e), Cr(e);
                                        break;
                                    case 5:
                                        pn(e);
                                        var o = cn(un.current);
                                        if (r = e.type, null !== n && null != e.stateNode) wr(n, e, r, i, o), n.ref !== e.ref && (e.effectTag |= 128);
                                        else if (i) {
                                            if (n = cn(sn.current), ur(e)) {
                                                if (i = e, !X) throw Error(s(175));
                                                n = xt(i.stateNode, i.type, i.memoizedProps, o, n, i), i.updateQueue = n, (n = null !== n) && Nr(e)
                                            } else {
                                                var a = R(r, i, o, n, e);
                                                xr(a, e, !1, !1), e.stateNode = a, G(a, r, i, o, n) && Nr(e)
                                            }
                                            null !== e.ref && (e.effectTag |= 128)
                                        } else if (null === e.stateNode) throw Error(s(166));
                                        break;
                                    case 6:
                                        if (n && null != e.stateNode) Tr(n, e, n.memoizedProps, i);
                                        else {
                                            if ("string" !== typeof i && null === e.stateNode) throw Error(s(166));
                                            if (n = cn(un.current), o = cn(sn.current), ur(e)) {
                                                if (n = e, !X) throw Error(s(176));
                                                (n = Ct(n.stateNode, n.memoizedProps, n)) && Nr(e)
                                            } else e.stateNode = j(i, n, o, e)
                                        }
                                        break;
                                    case 11:
                                        break;
                                    case 13:
                                        if (Ot(gn), i = e.memoizedState, 0 !== (64 & e.effectTag)) {
                                            e.expirationTime = r;
                                            break t
                                        }
                                        i = null !== i, o = !1, null === n ? void 0 !== e.memoizedProps.fallback && ur(e) : (o = null !== (r = n.memoizedState), i || null === r || null !== (r = n.child.sibling) && (null !== (a = e.firstEffect) ? (e.firstEffect = r, r.nextEffect = a) : (e.firstEffect = e.lastEffect = r, r.nextEffect = null), r.effectTag = 8)), i && !o && 0 !== (2 & e.mode) && (null === n && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & gn.current) ? 0 === li && (li = 3) : (0 !== li && 3 !== li || (li = 4), 0 !== fi && null !== oi && (po(oi, si), go(oi, fi)))), Y && i && (e.effectTag |= 4), K && (i || o) && (e.effectTag |= 4);
                                        break;
                                    case 7:
                                    case 8:
                                    case 12:
                                        break;
                                    case 4:
                                        dn(), Cr(e);
                                        break;
                                    case 10:
                                        Me(e);
                                        break;
                                    case 9:
                                    case 14:
                                        break;
                                    case 17:
                                        Ut(e.type) && Lt();
                                        break;
                                    case 19:
                                        if (Ot(gn), null === (i = e.memoizedState)) break;
                                        if (o = 0 !== (64 & e.effectTag), null === (a = i.rendering)) {
                                            if (o) Ar(i, !1);
                                            else if (0 !== li || null !== n && 0 !== (64 & n.effectTag))
                                                for (n = e.child; null !== n;) {
                                                    if (null !== (a = yn(n))) {
                                                        for (e.effectTag |= 64, Ar(i, !1), null !== (n = a.updateQueue) && (e.updateQueue = n, e.effectTag |= 4), null === i.lastEffect && (e.firstEffect = null), e.lastEffect = i.lastEffect, n = r, i = e.child; null !== i;) r = n, (o = i).effectTag &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (a = o.alternate) ? (o.childExpirationTime = 0, o.expirationTime = r, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = a.childExpirationTime, o.expirationTime = a.expirationTime, o.child = a.child, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, r = a.dependencies, o.dependencies = null === r ? null : {
                                                            expirationTime: r.expirationTime,
                                                            firstContext: r.firstContext,
                                                            responders: r.responders
                                                        }), i = i.sibling;
                                                        Nt(gn, 1 & gn.current | 2), e = e.child;
                                                        break t
                                                    }
                                                    n = n.sibling
                                                }
                                        } else {
                                            if (!o)
                                                if (null !== (n = yn(a))) {
                                                    if (e.effectTag |= 64, o = !0, null !== (n = n.updateQueue) && (e.updateQueue = n, e.effectTag |= 4), Ar(i, !0), null === i.tail && "hidden" === i.tailMode && !a.alternate) {
                                                        null !== (e = e.lastEffect = i.lastEffect) && (e.nextEffect = null);
                                                        break
                                                    }
                                                } else ue() > i.tailExpiration && 1 < r && (e.effectTag |= 64, o = !0, Ar(i, !1), e.expirationTime = e.childExpirationTime = r - 1);
                                            i.isBackwards ? (a.sibling = e.child, e.child = a) : (null !== (n = i.last) ? n.sibling = a : e.child = a, i.last = a)
                                        }
                                        if (null !== i.tail) {
                                            0 === i.tailExpiration && (i.tailExpiration = ue() + 500), n = i.tail, i.rendering = n, i.tail = n.sibling, i.lastEffect = e.lastEffect, n.sibling = null, i = gn.current, Nt(gn, i = o ? 1 & i | 2 : 1 & i), e = n;
                                            break t
                                        }
                                        break;
                                    case 20:
                                    case 21:
                                        break;
                                    default:
                                        throw Error(s(156, e.tag))
                                }
                                e = null
                            }
                            if (n = ai, 1 === si || 1 !== n.childExpirationTime) {
                                for (i = 0, o = n.child; null !== o;)(r = o.expirationTime) > i && (i = r), (a = o.childExpirationTime) > i && (i = a), o = o.sibling;
                                n.childExpirationTime = i
                            }
                            if (null !== e) return e;null !== t && 0 === (2048 & t.effectTag) && (null === t.firstEffect && (t.firstEffect = ai.firstEffect), null !== ai.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = ai.firstEffect), t.lastEffect = ai.lastEffect), 1 < ai.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = ai : t.firstEffect = ai, t.lastEffect = ai))
                        }
                        else {
                            if (null !== (e = Ir(ai))) return e.effectTag &= 2047, e;
                            null !== t && (t.firstEffect = t.lastEffect = null, t.effectTag |= 2048)
                        }
                        if (null !== (e = ai.sibling)) return e;
                        ai = t
                    } while (null !== ai);
                    return 0 === li && (li = 5), null
                }

                function Wi(t) {
                    var e = t.expirationTime;
                    return e > (t = t.childExpirationTime) ? e : t
                }

                function Ki(t) {
                    var e = ce();
                    return de(99, Yi.bind(null, t, e)), null
                }

                function Yi(t, e) {
                    do {
                        qi()
                    } while (null !== Si);
                    if (0 !== (48 & ii)) throw Error(s(327));
                    var n = t.finishedWork,
                        r = t.finishedExpirationTime;
                    if (null === n) return null;
                    if (t.finishedWork = null, t.finishedExpirationTime = 0, n === t.current) throw Error(s(177));
                    t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90, t.nextKnownPendingLevel = 0;
                    var i = Wi(n);
                    if (t.firstPendingTime = i, r <= t.lastSuspendedTime ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1), r <= t.lastPingedTime && (t.lastPingedTime = 0), r <= t.lastExpiredTime && (t.lastExpiredTime = 0), t === oi && (ai = oi = null, si = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
                        var o = ii;
                        ii |= 32, ni.current = null, A(t.containerInfo), yi = i;
                        do {
                            try {
                                Xi()
                            } catch (k) {
                                if (null === yi) throw Error(s(330));
                                Ji(yi, k), yi = yi.nextEffect
                            }
                        } while (null !== yi);
                        yi = i;
                        do {
                            try {
                                for (var a = t, l = e; null !== yi;) {
                                    var u = yi.effectTag;
                                    if (16 & u && K && it(yi.stateNode), 128 & u) {
                                        var c = yi.alternate;
                                        if (null !== c) {
                                            var h = c.ref;
                                            null !== h && ("function" === typeof h ? h(null) : h.current = null)
                                        }
                                    }
                                    switch (1038 & u) {
                                        case 2:
                                            Wr(yi), yi.effectTag &= -3;
                                            break;
                                        case 6:
                                            Wr(yi), yi.effectTag &= -3, Yr(yi.alternate, yi);
                                            break;
                                        case 1024:
                                            yi.effectTag &= -1025;
                                            break;
                                        case 1028:
                                            yi.effectTag &= -1025, Yr(yi.alternate, yi);
                                            break;
                                        case 4:
                                            Yr(yi.alternate, yi);
                                            break;
                                        case 8:
                                            var d = a,
                                                f = yi,
                                                p = l;
                                            K ? Kr(d, f, p) : Br(d, f, p), Hr(f)
                                    }
                                    yi = yi.nextEffect
                                }
                            } catch (k) {
                                if (null === yi) throw Error(s(330));
                                Ji(yi, k), yi = yi.nextEffect
                            }
                        } while (null !== yi);
                        I(t.containerInfo), t.current = n, yi = i;
                        do {
                            try {
                                for (u = r; null !== yi;) {
                                    var g = yi.effectTag;
                                    if (36 & g) {
                                        var y = yi.alternate;
                                        switch (h = u, (c = yi).tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                zr(16, 32, c);
                                                break;
                                            case 1:
                                                var v = c.stateNode;
                                                if (4 & c.effectTag)
                                                    if (null === y) v.componentDidMount();
                                                    else {
                                                        var m = c.elementType === c.type ? y.memoizedProps : xe(c.type, y.memoizedProps);
                                                        v.componentDidUpdate(m, y.memoizedState, v.__reactInternalSnapshotBeforeUpdate)
                                                    }
                                                var _ = c.updateQueue;
                                                null !== _ && He(0, _, v);
                                                break;
                                            case 3:
                                                var b = c.updateQueue;
                                                if (null !== b) {
                                                    if (a = null, null !== c.child) switch (c.child.tag) {
                                                        case 5:
                                                            a = F(c.child.stateNode);
                                                            break;
                                                        case 1:
                                                            a = c.child.stateNode
                                                    }
                                                    He(0, b, a)
                                                }
                                                break;
                                            case 5:
                                                var S = c.stateNode;
                                                null === y && 4 & c.effectTag && J(S, c.type, c.memoizedProps, c);
                                                break;
                                            case 6:
                                            case 4:
                                            case 12:
                                                break;
                                            case 13:
                                                if (X && null === c.memoizedState) {
                                                    var x = c.alternate;
                                                    if (null !== x) {
                                                        var C = x.memoizedState;
                                                        if (null !== C) {
                                                            var w = C.dehydrated;
                                                            null !== w && Pt(w)
                                                        }
                                                    }
                                                }
                                                break;
                                            case 19:
                                            case 17:
                                            case 20:
                                            case 21:
                                                break;
                                            default:
                                                throw Error(s(163))
                                        }
                                    }
                                    if (128 & g) {
                                        c = void 0;
                                        var T = yi.ref;
                                        if (null !== T) {
                                            var P = yi.stateNode;
                                            switch (yi.tag) {
                                                case 5:
                                                    c = F(P);
                                                    break;
                                                default:
                                                    c = P
                                            }
                                            "function" === typeof T ? T(c) : T.current = c
                                        }
                                    }
                                    yi = yi.nextEffect
                                }
                            } catch (k) {
                                if (null === yi) throw Error(s(330));
                                Ji(yi, k), yi = yi.nextEffect
                            }
                        } while (null !== yi);
                        yi = null, ie(), ii = o
                    } else t.current = n;
                    if (bi) bi = !1, Si = t, xi = e;
                    else
                        for (yi = i; null !== yi;) e = yi.nextEffect, yi.nextEffect = null, yi = e;
                    if (0 === (e = t.firstPendingTime) && (_i = null), 1073741823 === e ? t === Ti ? wi++ : (wi = 0, Ti = t) : wi = 0, "function" === typeof eo && eo(n.stateNode, r), Ni(t), vi) throw vi = !1, t = mi, mi = null, t;
                    return 0 !== (8 & ii) || ge(), null
                }

                function Xi() {
                    for (; null !== yi;) {
                        var t = yi.effectTag;
                        0 !== (256 & t) && Lr(yi.alternate, yi), 0 === (512 & t) || bi || (bi = !0, fe(97, (function() {
                            return qi(), null
                        }))), yi = yi.nextEffect
                    }
                }

                function qi() {
                    if (90 !== xi) {
                        var t = 97 < xi ? 97 : xi;
                        return xi = 90, de(t, Qi)
                    }
                }

                function Qi() {
                    if (null === Si) return !1;
                    var t = Si;
                    if (Si = null, 0 !== (48 & ii)) throw Error(s(331));
                    var e = ii;
                    for (ii |= 32, t = t.current.firstEffect; null !== t;) {
                        try {
                            var n = t;
                            if (0 !== (512 & n.effectTag)) switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    zr(128, 0, n), zr(0, 64, n)
                            }
                        } catch (r) {
                            if (null === t) throw Error(s(330));
                            Ji(t, r)
                        }
                        n = t.nextEffect, t.nextEffect = null, t = n
                    }
                    return ii = e, ge(), !0
                }

                function $i(t, e, n) {
                    Ue(t, e = $r(t, e = Rr(n, e), 1073741823)), null !== (t = Fi(t, 1073741823)) && Ni(t)
                }

                function Ji(t, e) {
                    if (3 === t.tag) $i(t, t, e);
                    else
                        for (var n = t.return; null !== n;) {
                            if (3 === n.tag) {
                                $i(n, t, e);
                                break
                            }
                            if (1 === n.tag) {
                                var r = n.stateNode;
                                if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === _i || !_i.has(r))) {
                                    Ue(n, t = Jr(n, t = Rr(e, t), 1073741823)), null !== (n = Fi(n, 1073741823)) && Ni(n);
                                    break
                                }
                            }
                            n = n.return
                        }
                }

                function Zi(t, e, n) {
                    var r = t.pingCache;
                    null !== r && r.delete(e), oi === t && si === n ? 4 === li || 3 === li && 1073741823 === ci && ue() - gi < 500 ? Di(t, si) : pi = !0 : fo(t, n) && (0 !== (e = t.lastPingedTime) && e < n || (t.lastPingedTime = n, t.finishedExpirationTime === n && (t.finishedExpirationTime = 0, t.finishedWork = null), Ni(t)))
                }

                function to(t, e) {
                    var n = t.stateNode;
                    null !== n && n.delete(e), 0 === (e = 0) && (e = Ei(e = ki(), t, null)), null !== (t = Fi(t, e)) && Ni(t)
                }
                Zr = function(t, e, n) {
                    var r = e.expirationTime;
                    if (null !== t) {
                        var i = e.pendingProps;
                        if (t.memoizedProps !== i || Rt.current) dr = !0;
                        else {
                            if (r < n) {
                                switch (dr = !1, e.tag) {
                                    case 3:
                                        Sr(e), cr();
                                        break;
                                    case 5:
                                        if (fn(e), 4 & e.mode && 1 !== n && z(e.type, i)) return e.expirationTime = e.childExpirationTime = 1, null;
                                        break;
                                    case 1:
                                        Ut(e.type) && Ht(e);
                                        break;
                                    case 4:
                                        hn(e, e.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        Ee(e, e.memoizedProps.value);
                                        break;
                                    case 13:
                                        if (null !== e.memoizedState) return 0 !== (r = e.child.childExpirationTime) && r >= n ? kr(t, e, n) : (Nt(gn, 1 & gn.current), null !== (e = Or(t, e, n)) ? e.sibling : null);
                                        Nt(gn, 1 & gn.current);
                                        break;
                                    case 19:
                                        if (r = e.childExpirationTime >= n, 0 !== (64 & t.effectTag)) {
                                            if (r) return Fr(t, e, n);
                                            e.effectTag |= 64
                                        }
                                        if (null !== (i = e.memoizedState) && (i.rendering = null, i.tail = null), Nt(gn, gn.current), !r) return null
                                }
                                return Or(t, e, n)
                            }
                            dr = !1
                        }
                    } else dr = !1;
                    switch (e.expirationTime = 0, e.tag) {
                        case 2:
                            if (r = e.type, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, i = Gt(e, It.current), Oe(e, n), i = Rn(null, e, r, t, i, n), e.effectTag |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof) {
                                if (e.tag = 1, Dn(), Ut(r)) {
                                    var o = !0;
                                    Ht(e)
                                } else o = !1;
                                e.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null;
                                var a = r.getDerivedStateFromProps;
                                "function" === typeof a && Ye(e, r, a, t), i.updater = Xe, e.stateNode = i, i._reactInternalFiber = e, Je(e, r, t, n), e = br(null, e, r, !0, o, n)
                            } else e.tag = 0, fr(null, e, i, n), e = e.child;
                            return e;
                        case 16:
                            if (i = e.elementType, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, function(t) {
                                    if (-1 === t._status) {
                                        t._status = 0;
                                        var e = t._ctor;
                                        e = e(), t._result = e, e.then((function(e) {
                                            0 === t._status && (e = e.default, t._status = 1, t._result = e)
                                        }), (function(e) {
                                            0 === t._status && (t._status = 2, t._result = e)
                                        }))
                                    }
                                }(i), 1 !== i._status) throw i._result;
                            switch (i = i._result, e.type = i, o = e.tag = function(t) {
                                if ("function" === typeof t) return oo(t) ? 1 : 0;
                                if (void 0 !== t && null !== t) {
                                    if ((t = t.$$typeof) === m) return 11;
                                    if (t === S) return 14
                                }
                                return 2
                            }(i), t = xe(i, t), o) {
                                case 0:
                                    e = mr(null, e, i, t, n);
                                    break;
                                case 1:
                                    e = _r(null, e, i, t, n);
                                    break;
                                case 11:
                                    e = pr(null, e, i, t, n);
                                    break;
                                case 14:
                                    e = gr(null, e, i, xe(i.type, t), r, n);
                                    break;
                                default:
                                    throw Error(s(306, i, ""))
                            }
                            return e;
                        case 0:
                            return r = e.type, i = e.pendingProps, mr(t, e, r, i = e.elementType === r ? i : xe(r, i), n);
                        case 1:
                            return r = e.type, i = e.pendingProps, _r(t, e, r, i = e.elementType === r ? i : xe(r, i), n);
                        case 3:
                            if (Sr(e), null === (r = e.updateQueue)) throw Error(s(282));
                            if (i = null !== (i = e.memoizedState) ? i.element : null, Be(e, r, e.pendingProps, null, n), (r = e.memoizedState.element) === i) cr(), e = Or(t, e, n);
                            else {
                                if ((i = e.stateNode.hydrate) && (X ? (rr = St(e.stateNode.containerInfo), nr = e, i = ir = !0) : i = !1), i)
                                    for (n = on(e, null, r, n), e.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
                                else fr(t, e, r, n), cr();
                                e = e.child
                            }
                            return e;
                        case 5:
                            return fn(e), null === t && sr(e), r = e.type, i = e.pendingProps, o = null !== t ? t.memoizedProps : null, a = i.children, L(r, i) ? a = null : null !== o && L(r, o) && (e.effectTag |= 16), vr(t, e), 4 & e.mode && 1 !== n && z(r, i) ? (e.expirationTime = e.childExpirationTime = 1, e = null) : (fr(t, e, a, n), e = e.child), e;
                        case 6:
                            return null === t && sr(e), null;
                        case 13:
                            return kr(t, e, n);
                        case 4:
                            return hn(e, e.stateNode.containerInfo), r = e.pendingProps, null === t ? e.child = rn(e, null, r, n) : fr(t, e, r, n), e.child;
                        case 11:
                            return r = e.type, i = e.pendingProps, pr(t, e, r, i = e.elementType === r ? i : xe(r, i), n);
                        case 7:
                            return fr(t, e, e.pendingProps, n), e.child;
                        case 8:
                        case 12:
                            return fr(t, e, e.pendingProps.children, n), e.child;
                        case 10:
                            t: {
                                if (r = e.type._context, i = e.pendingProps, a = e.memoizedProps, Ee(e, o = i.value), null !== a) {
                                    var l = a.value;
                                    if (0 === (o = _e(l, o) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(l, o) : 1073741823))) {
                                        if (a.children === i.children && !Rt.current) {
                                            e = Or(t, e, n);
                                            break t
                                        }
                                    } else
                                        for (null !== (l = e.child) && (l.return = e); null !== l;) {
                                            var u = l.dependencies;
                                            if (null !== u) {
                                                a = l.child;
                                                for (var c = u.firstContext; null !== c;) {
                                                    if (c.context === r && 0 !== (c.observedBits & o)) {
                                                        1 === l.tag && ((c = De(n, null)).tag = 2, Ue(l, c)), l.expirationTime < n && (l.expirationTime = n), null !== (c = l.alternate) && c.expirationTime < n && (c.expirationTime = n), Fe(l.return, n), u.expirationTime < n && (u.expirationTime = n);
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else a = 10 === l.tag && l.type === e.type ? null : l.child;
                                            if (null !== a) a.return = l;
                                            else
                                                for (a = l; null !== a;) {
                                                    if (a === e) {
                                                        a = null;
                                                        break
                                                    }
                                                    if (null !== (l = a.sibling)) {
                                                        l.return = a.return, a = l;
                                                        break
                                                    }
                                                    a = a.return
                                                }
                                            l = a
                                        }
                                }
                                fr(t, e, i.children, n),
                                e = e.child
                            }
                            return e;
                        case 9:
                            return i = e.type, r = (o = e.pendingProps).children, Oe(e, n), r = r(i = Ne(i, o.unstable_observedBits)), e.effectTag |= 1, fr(t, e, r, n), e.child;
                        case 14:
                            return o = xe(i = e.type, e.pendingProps), gr(t, e, i, o = xe(i.type, o), r, n);
                        case 15:
                            return yr(t, e, e.type, e.pendingProps, r, n);
                        case 17:
                            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : xe(r, i), null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), e.tag = 1, Ut(r) ? (t = !0, Ht(e)) : t = !1, Oe(e, n), Qe(e, r, i), Je(e, r, i, n), br(null, e, r, !0, t, n);
                        case 19:
                            return Fr(t, e, n)
                    }
                    throw Error(s(156, e.tag))
                };
                var eo = null,
                    no = null;

                function ro(t, e, n, r) {
                    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
                }

                function io(t, e, n, r) {
                    return new ro(t, e, n, r)
                }

                function oo(t) {
                    return !(!(t = t.prototype) || !t.isReactComponent)
                }

                function ao(t, e) {
                    var n = t.alternate;
                    return null === n ? ((n = io(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = t.childExpirationTime, n.expirationTime = t.expirationTime, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : {
                        expirationTime: e.expirationTime,
                        firstContext: e.firstContext,
                        responders: e.responders
                    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
                }

                function so(t, e, n, r, i, o) {
                    var a = 2;
                    if (r = t, "function" === typeof t) oo(t) && (a = 1);
                    else if ("string" === typeof t) a = 5;
                    else t: switch (t) {
                        case d:
                            return lo(n.children, i, o, e);
                        case v:
                            a = 8, i |= 7;
                            break;
                        case f:
                            a = 8, i |= 1;
                            break;
                        case p:
                            return (t = io(12, n, e, 8 | i)).elementType = p, t.type = p, t.expirationTime = o, t;
                        case _:
                            return (t = io(13, n, e, i)).type = _, t.elementType = _, t.expirationTime = o, t;
                        case b:
                            return (t = io(19, n, e, i)).elementType = b, t.expirationTime = o, t;
                        default:
                            if ("object" === typeof t && null !== t) switch (t.$$typeof) {
                                case g:
                                    a = 10;
                                    break t;
                                case y:
                                    a = 9;
                                    break t;
                                case m:
                                    a = 11;
                                    break t;
                                case S:
                                    a = 14;
                                    break t;
                                case x:
                                    a = 16, r = null;
                                    break t
                            }
                            throw Error(s(130, null == t ? t : typeof t, ""))
                    }
                    return (e = io(a, n, e, i)).elementType = t, e.type = r, e.expirationTime = o, e
                }

                function lo(t, e, n, r) {
                    return (t = io(7, t, r, e)).expirationTime = n, t
                }

                function uo(t, e, n) {
                    return (t = io(6, t, null, e)).expirationTime = n, t
                }

                function co(t, e, n) {
                    return (e = io(4, null !== t.children ? t.children : [], t.key, e)).expirationTime = n, e.stateNode = {
                        containerInfo: t.containerInfo,
                        pendingChildren: null,
                        implementation: t.implementation
                    }, e
                }

                function ho(t, e, n) {
                    this.tag = e, this.current = null, this.containerInfo = t, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = V, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
                }

                function fo(t, e) {
                    var n = t.firstSuspendedTime;
                    return t = t.lastSuspendedTime, 0 !== n && n >= e && t <= e
                }

                function po(t, e) {
                    var n = t.firstSuspendedTime,
                        r = t.lastSuspendedTime;
                    n < e && (t.firstSuspendedTime = e), (r > e || 0 === n) && (t.lastSuspendedTime = e), e <= t.lastPingedTime && (t.lastPingedTime = 0), e <= t.lastExpiredTime && (t.lastExpiredTime = 0)
                }

                function go(t, e) {
                    e > t.firstPendingTime && (t.firstPendingTime = e);
                    var n = t.firstSuspendedTime;
                    0 !== n && (e >= n ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : e >= t.lastSuspendedTime && (t.lastSuspendedTime = e + 1), e > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = e))
                }

                function yo(t, e) {
                    var n = t.lastExpiredTime;
                    (0 === n || n > e) && (t.lastExpiredTime = e)
                }

                function vo(t) {
                    var e = t._reactInternalFiber;
                    if (void 0 === e) {
                        if ("function" === typeof t.render) throw Error(s(188));
                        throw Error(s(268, Object.keys(t)))
                    }
                    return null === (t = M(e)) ? null : t.stateNode
                }

                function mo(t, e) {
                    null !== (t = t.memoizedState) && null !== t.dehydrated && t.retryTime < e && (t.retryTime = e)
                }

                function _o(t, e) {
                    mo(t, e), (t = t.alternate) && mo(t, e)
                }
                var bo = {
                    createContainer: function(t, e, n) {
                        return t = new ho(t, e, n), e = io(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0), t.current = e, e.stateNode = t
                    },
                    updateContainer: function(t, e, n, r) {
                        var i = e.current,
                            o = ki(),
                            a = We.suspense;
                        o = Ei(o, i, a);
                        t: if (n) {
                            e: {
                                if (P(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(s(170));
                                var l = n;do {
                                    switch (l.tag) {
                                        case 3:
                                            l = l.stateNode.context;
                                            break e;
                                        case 1:
                                            if (Ut(l.type)) {
                                                l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                                break e
                                            }
                                    }
                                    l = l.return
                                } while (null !== l);
                                throw Error(s(171))
                            }
                            if (1 === n.tag) {
                                var u = n.type;
                                if (Ut(u)) {
                                    n = Bt(n, u, l);
                                    break t
                                }
                            }
                            n = l
                        }
                        else n = At;
                        return null === e.context ? e.context = n : e.pendingContext = n, (e = De(o, a)).payload = {
                            element: t
                        }, null !== (r = void 0 === r ? null : r) && (e.callback = r), Ue(i, e), Mi(i, o), o
                    },
                    batchedEventUpdates: function(t, e) {
                        var n = ii;
                        ii |= 2;
                        try {
                            return t(e)
                        } finally {
                            0 === (ii = n) && ge()
                        }
                    },
                    batchedUpdates: function(t, e) {
                        var n = ii;
                        ii |= 1;
                        try {
                            return t(e)
                        } finally {
                            0 === (ii = n) && ge()
                        }
                    },
                    unbatchedUpdates: function(t, e) {
                        var n = ii;
                        ii &= -2, ii |= 8;
                        try {
                            return t(e)
                        } finally {
                            0 === (ii = n) && ge()
                        }
                    },
                    deferredUpdates: function(t) {
                        return de(97, t)
                    },
                    syncUpdates: function(t, e, n, r) {
                        return de(99, t.bind(null, e, n, r))
                    },
                    discreteUpdates: function(t, e, n, r) {
                        var i = ii;
                        ii |= 4;
                        try {
                            return de(98, t.bind(null, e, n, r))
                        } finally {
                            0 === (ii = i) && ge()
                        }
                    },
                    flushDiscreteUpdates: function() {
                        0 === (49 & ii) && (function() {
                            if (null !== Ci) {
                                var t = Ci;
                                Ci = null, t.forEach((function(t, e) {
                                    yo(e, t), Ni(e)
                                })), ge()
                            }
                        }(), qi())
                    },
                    flushControlled: function(t) {
                        var e = ii;
                        ii |= 1;
                        try {
                            de(99, t)
                        } finally {
                            0 === (ii = e) && ge()
                        }
                    },
                    flushSync: Ri,
                    flushPassiveEffects: qi,
                    IsThisRendererActing: {
                        current: !1
                    },
                    getPublicRootInstance: function(t) {
                        if (!(t = t.current).child) return null;
                        switch (t.child.tag) {
                            case 5:
                                return F(t.child.stateNode);
                            default:
                                return t.child.stateNode
                        }
                    },
                    attemptSynchronousHydration: function(t) {
                        switch (t.tag) {
                            case 3:
                                var e = t.stateNode;
                                e.hydrate && function(t, e) {
                                    yo(t, e), Ni(t), 0 === (48 & ii) && ge()
                                }(e, e.firstPendingTime);
                                break;
                            case 13:
                                Ri((function() {
                                    return Mi(t, 1073741823)
                                })), e = me(ki(), 150, 100), _o(t, e)
                        }
                    },
                    attemptUserBlockingHydration: function(t) {
                        if (13 === t.tag) {
                            var e = me(ki(), 150, 100);
                            Mi(t, e), _o(t, e)
                        }
                    },
                    attemptContinuousHydration: function(t) {
                        if (13 === t.tag) {
                            ki();
                            var e = ve++;
                            Mi(t, e), _o(t, e)
                        }
                    },
                    attemptHydrationAtCurrentPriority: function(t) {
                        if (13 === t.tag) {
                            var e = ki();
                            Mi(t, e = Ei(e, t, null)), _o(t, e)
                        }
                    },
                    findHostInstance: vo,
                    findHostInstanceWithWarning: function(t) {
                        return vo(t)
                    },
                    findHostInstanceWithNoPortals: function(t) {
                        return null === (t = function(t) {
                            if (!(t = E(t))) return null;
                            for (var e = t;;) {
                                if (5 === e.tag || 6 === e.tag) return e;
                                if (e.child && 4 !== e.tag) e.child.return = e, e = e.child;
                                else {
                                    if (e === t) break;
                                    for (; !e.sibling;) {
                                        if (!e.return || e.return === t) return null;
                                        e = e.return
                                    }
                                    e.sibling.return = e.return, e = e.sibling
                                }
                            }
                            return null
                        }(t)) ? null : 20 === t.tag ? t.stateNode.instance : t.stateNode
                    },
                    shouldSuspend: function() {
                        return !1
                    },
                    injectIntoDevTools: function(t) {
                        var e = t.findFiberByHostInstance;
                        return function(t) {
                            if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                            var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                            if (e.isDisabled || !e.supportsFiber) return !0;
                            try {
                                var n = e.inject(t);
                                eo = function(t) {
                                    try {
                                        e.onCommitFiberRoot(n, t, void 0, 64 === (64 & t.current.effectTag))
                                    } catch (r) {}
                                }, no = function(t) {
                                    try {
                                        e.onCommitFiberUnmount(n, t)
                                    } catch (r) {}
                                }
                            } catch (r) {}
                            return !0
                        }(i({}, t, {
                            overrideHookState: null,
                            overrideProps: null,
                            setSuspenseHandler: null,
                            scheduleUpdate: null,
                            currentDispatcherRef: l.ReactCurrentDispatcher,
                            findHostInstanceByFiber: function(t) {
                                return null === (t = M(t)) ? null : t.stateNode
                            },
                            findFiberByHostInstance: function(t) {
                                return e ? e(t) : null
                            },
                            findHostInstancesForRefresh: null,
                            scheduleRefresh: null,
                            scheduleRoot: null,
                            setRefreshHandler: null,
                            getCurrentFiber: null
                        }))
                    }
                };
                t.exports = bo.default || bo;
                var So = t.exports;
                return t.exports = e, So
            }
        },
        572: function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.getClosestInstanceFromNode = function(t) {
                if (t[r]) return t[r];
                for (; !t[r];) {
                    if (!t.parentNode) return null;
                    t = t.parentNode
                }
                var e = t[r];
                if (5 === e.tag || 6 === e.tag) return e;
                return null
            };
            var r = "__reactInternalInstance$" + Math.random().toString(36).slice(2)
        },
        573: function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.supportsMutation = e.isPrimaryRenderer = e.cancelPassiveEffects = e.schedulePassiveEffects = e.noTimeout = e.cancelTimeout = e.scheduleTimeout = e.cancelDeferredCallback = e.shouldYield = e.scheduleDeferredCallback = e.now = void 0;
            var r = n(574);
            Object.keys(r).forEach((function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return r[t]
                    }
                })
            }));
            var i = n(575);
            Object.keys(i).forEach((function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return i[t]
                    }
                })
            }));
            var o = n(176);
            Object.defineProperty(e, "now", {
                enumerable: !0,
                get: function() {
                    return o.unstable_now
                }
            }), Object.defineProperty(e, "scheduleDeferredCallback", {
                enumerable: !0,
                get: function() {
                    return o.unstable_scheduleCallback
                }
            }), Object.defineProperty(e, "shouldYield", {
                enumerable: !0,
                get: function() {
                    return o.unstable_shouldYield
                }
            }), Object.defineProperty(e, "cancelDeferredCallback", {
                enumerable: !0,
                get: function() {
                    return o.unstable_cancelCallback
                }
            }), e.appendInitialChild = function(t, e) {
                if ("string" === typeof e) return void(0, l.default)(!1, 'Don not use plain text as child of Konva.Node. You are using text: "%s"', e);
                t.add(e), (0, s.updatePicture)(t)
            }, e.createInstance = function(t, e, n) {
                var r = a.default[t];
                if (!r) return void(0, l.default)(i, 'Konva has no node with the type "%s". If you use minimal version of react-konva, just import required nodes into Konva: `import "konva/lib/shapes/%s"`  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html', t, t);
                var i = new r;
                return (0, s.applyNodeProps)(i, e), i
            }, e.createTextInstance = function(t, e, n) {
                (0, l.default)(!1, 'Text components are not supported for now in ReactKonva. You text is: "' + t + '"')
            }, e.finalizeInitialChildren = function(t, e, n) {
                return !1
            }, e.getPublicInstance = function(t) {
                return t
            }, e.prepareForCommit = function() {}, e.prepareUpdate = function(t, e, n, r) {
                return h
            }, e.resetAfterCommit = function() {}, e.resetTextContent = function(t) {}, e.shouldDeprioritizeSubtree = function(t, e) {
                return !1
            }, e.getRootHostContext = function() {
                return c
            }, e.getChildHostContext = function() {
                return c
            }, e.shouldSetTextContent = function(t, e) {
                return !1
            }, e.appendChild = function(t, e) {
                e.parent === t ? e.moveToTop() : t.add(e);
                (0, s.updatePicture)(t)
            }, e.appendChildToContainer = function(t, e) {
                e.parent === t ? e.moveToTop() : t.add(e);
                (0, s.updatePicture)(t)
            }, e.insertBefore = d, e.insertInContainerBefore = function(t, e, n) {
                d(t, e, n)
            }, e.removeChild = function(t, e) {
                e.destroy(), e.off(s.EVENTS_NAMESPACE), (0, s.updatePicture)(t)
            }, e.removeChildFromContainer = function(t, e) {
                e.destroy(), e.off(s.EVENTS_NAMESPACE), (0, s.updatePicture)(t)
            }, e.commitTextUpdate = function(t, e, n) {
                (0, l.default)(!1, 'Text components are not yet supported in ReactKonva. You text is: "' + n + '"')
            }, e.commitMount = function(t, e, n) {}, e.commitUpdate = function(t, e, n, r, i) {
                (0, s.applyNodeProps)(t, i, r)
            }, e.hideInstance = function(t) {
                t.hide(), (0, s.updatePicture)(t)
            }, e.hideTextInstance = function(t) {}, e.unhideInstance = function(t, e) {
                (null == e.visible || e.visible) && t.show()
            }, e.unhideTextInstance = function(t, e) {};
            var a = u(n(419)),
                s = n(424),
                l = u(n(392));

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var c = {},
                h = {};
            a.default.Node.prototype._applyProps = s.applyNodeProps;
            e.scheduleTimeout = setTimeout, e.cancelTimeout = clearTimeout, e.noTimeout = -1, e.schedulePassiveEffects = o.unstable_scheduleCallback, e.cancelPassiveEffects = o.unstable_cancelCallback;
            e.isPrimaryRenderer = !1, e.supportsMutation = !0;

            function d(t, e, n) {
                (0, l.default)(e !== n, "ReactKonva: Can not insert node before itself"), e._remove(), t.add(e), e.setZIndex(n.getZIndex()), (0, s.updatePicture)(t)
            }
        },
        574: function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.createHiddenTextInstance = e.cloneUnhiddenInstance = e.cloneHiddenInstance = e.replaceContainerChildren = e.finalizeContainerChildren = e.appendChildToContainerChildSet = e.createContainerChildSet = e.cloneInstance = e.supportsPersistence = void 0;
            var r, i = n(392),
                o = (r = i) && r.__esModule ? r : {
                    default: r
                };

            function a() {
                (0, o.default)(!1, "The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue.")
            }
            e.supportsPersistence = !1, e.cloneInstance = a, e.createContainerChildSet = a, e.appendChildToContainerChildSet = a, e.finalizeContainerChildren = a, e.replaceContainerChildren = a, e.cloneHiddenInstance = a, e.cloneUnhiddenInstance = a, e.createHiddenTextInstance = a
        },
        575: function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.didNotFindHydratableTextInstance = e.didNotFindHydratableInstance = e.didNotFindHydratableContainerTextInstance = e.didNotFindHydratableContainerInstance = e.didNotHydrateInstance = e.didNotHydrateContainerInstance = e.didNotMatchHydratedTextInstance = e.didNotMatchHydratedContainerTextInstance = e.hydrateTextInstance = e.hydrateInstance = e.getFirstHydratableChild = e.getNextHydratableSibling = e.canHydrateTextInstance = e.canHydrateInstance = e.supportsHydration = void 0;
            var r, i = n(392),
                o = (r = i) && r.__esModule ? r : {
                    default: r
                };

            function a() {
                (0, o.default)(!1, "The current renderer does not support hyration. This error is likely caused by a bug in React. Please file an issue.")
            }
            e.supportsHydration = !1, e.canHydrateInstance = a, e.canHydrateTextInstance = a, e.getNextHydratableSibling = a, e.getFirstHydratableChild = a, e.hydrateInstance = a, e.hydrateTextInstance = a, e.didNotMatchHydratedContainerTextInstance = a, e.didNotMatchHydratedTextInstance = a, e.didNotHydrateContainerInstance = a, e.didNotHydrateInstance = a, e.didNotFindHydratableContainerInstance = a, e.didNotFindHydratableContainerTextInstance = a, e.didNotFindHydratableInstance = a, e.didNotFindHydratableTextInstance = a
        },
        576: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(420),
                i = n(577),
                o = n(578),
                a = n(579),
                s = n(580),
                l = n(581),
                u = n(582),
                c = n(426),
                h = n(427),
                d = n(428),
                f = n(583),
                p = n(584),
                g = n(585),
                y = n(586),
                v = n(429),
                m = n(587),
                _ = n(588),
                b = n(589),
                S = n(590),
                x = n(591),
                C = n(592),
                w = n(593),
                T = n(594),
                P = n(595),
                k = n(596),
                E = n(597),
                M = n(598),
                F = n(599),
                O = n(600),
                N = n(601),
                A = n(602),
                I = n(603),
                R = n(604),
                D = n(605),
                G = n(606),
                U = n(607),
                L = n(608);
            e.Konva = r.Konva.Util._assign(r.Konva, {
                Arc: i.Arc,
                Arrow: o.Arrow,
                Circle: a.Circle,
                Ellipse: s.Ellipse,
                Image: l.Image,
                Label: u.Label,
                Tag: u.Tag,
                Line: c.Line,
                Path: h.Path,
                Rect: d.Rect,
                RegularPolygon: f.RegularPolygon,
                Ring: p.Ring,
                Sprite: g.Sprite,
                Star: y.Star,
                Text: v.Text,
                TextPath: m.TextPath,
                Transformer: _.Transformer,
                Wedge: b.Wedge,
                Filters: {
                    Blur: S.Blur,
                    Brighten: x.Brighten,
                    Contrast: C.Contrast,
                    Emboss: w.Emboss,
                    Enhance: T.Enhance,
                    Grayscale: P.Grayscale,
                    HSL: k.HSL,
                    HSV: E.HSV,
                    Invert: M.Invert,
                    Kaleidoscope: F.Kaleidoscope,
                    Mask: O.Mask,
                    Noise: N.Noise,
                    Pixelate: A.Pixelate,
                    Posterize: I.Posterize,
                    RGB: R.RGB,
                    RGBA: D.RGBA,
                    Sepia: G.Sepia,
                    Solarize: U.Solarize,
                    Threshold: L.Threshold
                }
            })
        },
        577: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(299),
                l = n(300),
                u = n(299),
                c = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        var e = s.Konva.getAngle(this.angle()),
                            n = this.clockwise();
                        t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, e, n), t.arc(0, 0, this.innerRadius(), e, 0, !n), t.closePath(), t.fillStrokeShape(this)
                    }, e.prototype.getWidth = function() {
                        return 2 * this.outerRadius()
                    }, e.prototype.getHeight = function() {
                        return 2 * this.outerRadius()
                    }, e.prototype.setWidth = function(t) {
                        this.outerRadius(t / 2)
                    }, e.prototype.setHeight = function(t) {
                        this.outerRadius(t / 2)
                    }, e
                }(a.Shape);
            e.Arc = c, c.prototype._centroid = !0, c.prototype.className = "Arc", c.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], u._registerNode(c), o.Factory.addGetterSetter(c, "innerRadius", 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "outerRadius", 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "angle", 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "clockwise", !1, l.getBooleanValidator()), i.Collection.mapMethods(c)
        },
        578: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(426),
                s = n(300),
                l = n(299),
                u = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(e) {
                        t.prototype._sceneFunc.call(this, e);
                        var n = 2 * Math.PI,
                            r = this.points(),
                            i = r,
                            o = 0 !== this.tension() && r.length > 4;
                        o && (i = this.getTensionPoints());
                        var a, s, l = r.length;
                        o ? (a = r[l - 2] - (i[i.length - 2] + i[i.length - 4]) / 2, s = r[l - 1] - (i[i.length - 1] + i[i.length - 3]) / 2) : (a = r[l - 2] - r[l - 4], s = r[l - 1] - r[l - 3]);
                        var u = (Math.atan2(s, a) + n) % n,
                            c = this.pointerLength(),
                            h = this.pointerWidth();
                        e.save(), e.beginPath(), e.translate(r[l - 2], r[l - 1]), e.rotate(u), e.moveTo(0, 0), e.lineTo(-c, h / 2), e.lineTo(-c, -h / 2), e.closePath(), e.restore(), this.pointerAtBeginning() && (e.save(), e.translate(r[0], r[1]), o ? (a = (i[0] + i[2]) / 2 - r[0], s = (i[1] + i[3]) / 2 - r[1]) : (a = r[2] - r[0], s = r[3] - r[1]), e.rotate((Math.atan2(-s, -a) + n) % n), e.moveTo(0, 0), e.lineTo(-c, h / 2), e.lineTo(-c, -h / 2), e.closePath(), e.restore());
                        var d = this.dashEnabled();
                        d && (this.attrs.dashEnabled = !1, e.setLineDash([])), e.fillStrokeShape(this), d && (this.attrs.dashEnabled = !0)
                    }, e.prototype.getSelfRect = function() {
                        var e = t.prototype.getSelfRect.call(this),
                            n = this.pointerWidth() / 2;
                        return {
                            x: e.x - n,
                            y: e.y - n,
                            width: e.width + 2 * n,
                            height: e.height + 2 * n
                        }
                    }, e
                }(a.Line);
            e.Arrow = u, u.prototype.className = "Arrow", l._registerNode(u), o.Factory.addGetterSetter(u, "pointerLength", 10, s.getNumberValidator()), o.Factory.addGetterSetter(u, "pointerWidth", 10, s.getNumberValidator()), o.Factory.addGetterSetter(u, "pointerAtBeginning", !1), i.Collection.mapMethods(u)
        },
        579: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(300),
                l = n(299),
                u = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        t.beginPath(), t.arc(0, 0, this.radius(), 0, 2 * Math.PI, !1), t.closePath(), t.fillStrokeShape(this)
                    }, e.prototype.getWidth = function() {
                        return 2 * this.radius()
                    }, e.prototype.getHeight = function() {
                        return 2 * this.radius()
                    }, e.prototype.setWidth = function(t) {
                        this.radius() !== t / 2 && this.radius(t / 2)
                    }, e.prototype.setHeight = function(t) {
                        this.radius() !== t / 2 && this.radius(t / 2)
                    }, e
                }(a.Shape);
            e.Circle = u, u.prototype._centroid = !0, u.prototype.className = "Circle", u.prototype._attrsAffectingSize = ["radius"], l._registerNode(u), o.Factory.addGetterSetter(u, "radius", 0, s.getNumberValidator()), i.Collection.mapMethods(u)
        },
        580: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(300),
                l = n(299),
                u = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        var e = this.radiusX(),
                            n = this.radiusY();
                        t.beginPath(), t.save(), e !== n && t.scale(1, n / e), t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.restore(), t.closePath(), t.fillStrokeShape(this)
                    }, e.prototype.getWidth = function() {
                        return 2 * this.radiusX()
                    }, e.prototype.getHeight = function() {
                        return 2 * this.radiusY()
                    }, e.prototype.setWidth = function(t) {
                        this.radiusX(t / 2)
                    }, e.prototype.setHeight = function(t) {
                        this.radiusY(t / 2)
                    }, e
                }(a.Shape);
            e.Ellipse = u, u.prototype.className = "Ellipse", u.prototype._centroid = !0, u.prototype._attrsAffectingSize = ["radiusX", "radiusY"], l._registerNode(u), o.Factory.addComponentsGetterSetter(u, "radius", ["x", "y"]), o.Factory.addGetterSetter(u, "radiusX", 0, s.getNumberValidator()), o.Factory.addGetterSetter(u, "radiusY", 0, s.getNumberValidator()), i.Collection.mapMethods(u)
        },
        581: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(300),
                l = n(299),
                u = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._useBufferCanvas = function() {
                        return !(!this.hasShadow() && 1 === this.getAbsoluteOpacity() || !this.hasStroke() || !this.getStage())
                    }, e.prototype._sceneFunc = function(t) {
                        var e, n, r, i = this.width(),
                            o = this.height(),
                            a = this.image();
                        a && (e = this.cropWidth(), n = this.cropHeight(), r = e && n ? [a, this.cropX(), this.cropY(), e, n, 0, 0, i, o] : [a, 0, 0, i, o]), (this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, i, o), t.closePath(), t.fillStrokeShape(this)), a && t.drawImage.apply(t, r)
                    }, e.prototype._hitFunc = function(t) {
                        var e = this.width(),
                            n = this.height();
                        t.beginPath(), t.rect(0, 0, e, n), t.closePath(), t.fillStrokeShape(this)
                    }, e.prototype.getWidth = function() {
                        var t, e = this.image();
                        return null !== (t = this.attrs.width) && void 0 !== t ? t : e ? e.width : 0
                    }, e.prototype.getHeight = function() {
                        var t, e = this.image();
                        return null !== (t = this.attrs.height) && void 0 !== t ? t : e ? e.height : 0
                    }, e.fromURL = function(t, n) {
                        var r = i.Util.createImageElement();
                        r.onload = function() {
                            var t = new e({
                                image: r
                            });
                            n(t)
                        }, r.crossOrigin = "Anonymous", r.src = t
                    }, e
                }(a.Shape);
            e.Image = u, u.prototype.className = "Image", l._registerNode(u), o.Factory.addGetterSetter(u, "image"), o.Factory.addComponentsGetterSetter(u, "crop", ["x", "y", "width", "height"]), o.Factory.addGetterSetter(u, "cropX", 0, s.getNumberValidator()), o.Factory.addGetterSetter(u, "cropY", 0, s.getNumberValidator()), o.Factory.addGetterSetter(u, "cropWidth", 0, s.getNumberValidator()), o.Factory.addGetterSetter(u, "cropHeight", 0, s.getNumberValidator()), i.Collection.mapMethods(u)
        },
        582: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(390),
                l = n(300),
                u = n(299),
                c = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text", "width"],
                h = c.length,
                d = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.on("add.konva", (function(t) {
                            this._addListeners(t.child), this._sync()
                        })), n
                    }
                    return r(e, t), e.prototype.getText = function() {
                        return this.find("Text")[0]
                    }, e.prototype.getTag = function() {
                        return this.find("Tag")[0]
                    }, e.prototype._addListeners = function(t) {
                        var e, n = this,
                            r = function() {
                                n._sync()
                            };
                        for (e = 0; e < h; e++) t.on(c[e] + "Change.konva", r)
                    }, e.prototype.getWidth = function() {
                        return this.getText().width()
                    }, e.prototype.getHeight = function() {
                        return this.getText().height()
                    }, e.prototype._sync = function() {
                        var t, e, n, r, i, o, a, s = this.getText(),
                            l = this.getTag();
                        if (s && l) {
                            switch (t = s.width(), e = s.height(), n = l.pointerDirection(), r = l.pointerWidth(), a = l.pointerHeight(), i = 0, o = 0, n) {
                                case "up":
                                    i = t / 2, o = -1 * a;
                                    break;
                                case "right":
                                    i = t + r, o = e / 2;
                                    break;
                                case "down":
                                    i = t / 2, o = e + a;
                                    break;
                                case "left":
                                    i = -1 * r, o = e / 2
                            }
                            l.setAttrs({
                                x: -1 * i,
                                y: -1 * o,
                                width: t,
                                height: e
                            }), s.setAttrs({
                                x: -1 * i,
                                y: -1 * o
                            })
                        }
                    }, e
                }(s.Group);
            e.Label = d, d.prototype.className = "Label", u._registerNode(d), i.Collection.mapMethods(d);
            var f = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.prototype._sceneFunc = function(t) {
                    var e = this.width(),
                        n = this.height(),
                        r = this.pointerDirection(),
                        i = this.pointerWidth(),
                        o = this.pointerHeight(),
                        a = Math.min(this.cornerRadius(), e / 2, n / 2);
                    t.beginPath(), a ? t.moveTo(a, 0) : t.moveTo(0, 0), "up" === r && (t.lineTo((e - i) / 2, 0), t.lineTo(e / 2, -1 * o), t.lineTo((e + i) / 2, 0)), a ? (t.lineTo(e - a, 0), t.arc(e - a, a, a, 3 * Math.PI / 2, 0, !1)) : t.lineTo(e, 0), "right" === r && (t.lineTo(e, (n - o) / 2), t.lineTo(e + i, n / 2), t.lineTo(e, (n + o) / 2)), a ? (t.lineTo(e, n - a), t.arc(e - a, n - a, a, 0, Math.PI / 2, !1)) : t.lineTo(e, n), "down" === r && (t.lineTo((e + i) / 2, n), t.lineTo(e / 2, n + o), t.lineTo((e - i) / 2, n)), a ? (t.lineTo(a, n), t.arc(a, n - a, a, Math.PI / 2, Math.PI, !1)) : t.lineTo(0, n), "left" === r && (t.lineTo(0, (n + o) / 2), t.lineTo(-1 * i, n / 2), t.lineTo(0, (n - o) / 2)), a && (t.lineTo(0, a), t.arc(a, a, a, Math.PI, 3 * Math.PI / 2, !1)), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getSelfRect = function() {
                    var t = 0,
                        e = 0,
                        n = this.pointerWidth(),
                        r = this.pointerHeight(),
                        i = this.pointerDirection(),
                        o = this.width(),
                        a = this.height();
                    return "up" === i ? (e -= r, a += r) : "down" === i ? a += r : "left" === i ? (t -= 1.5 * n, o += n) : "right" === i && (o += 1.5 * n), {
                        x: t,
                        y: e,
                        width: o,
                        height: a
                    }
                }, e
            }(a.Shape);
            e.Tag = f, f.prototype.className = "Tag", u._registerNode(f), o.Factory.addGetterSetter(f, "pointerDirection", "none"), o.Factory.addGetterSetter(f, "pointerWidth", 0, l.getNumberValidator()), o.Factory.addGetterSetter(f, "pointerHeight", 0, l.getNumberValidator()), o.Factory.addGetterSetter(f, "cornerRadius", 0, l.getNumberValidator()), i.Collection.mapMethods(f)
        },
        583: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(300),
                l = n(299),
                u = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        var e, n, r, i = this.sides(),
                            o = this.radius();
                        for (t.beginPath(), t.moveTo(0, 0 - o), e = 1; e < i; e++) n = o * Math.sin(2 * e * Math.PI / i), r = -1 * o * Math.cos(2 * e * Math.PI / i), t.lineTo(n, r);
                        t.closePath(), t.fillStrokeShape(this)
                    }, e.prototype.getWidth = function() {
                        return 2 * this.radius()
                    }, e.prototype.getHeight = function() {
                        return 2 * this.radius()
                    }, e.prototype.setWidth = function(t) {
                        this.radius(t / 2)
                    }, e.prototype.setHeight = function(t) {
                        this.radius(t / 2)
                    }, e
                }(a.Shape);
            e.RegularPolygon = u, u.prototype.className = "RegularPolygon", u.prototype._centroid = !0, u.prototype._attrsAffectingSize = ["radius"], l._registerNode(u), o.Factory.addGetterSetter(u, "radius", 0, s.getNumberValidator()), o.Factory.addGetterSetter(u, "sides", 0, s.getNumberValidator()), i.Collection.mapMethods(u)
        },
        584: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(300),
                l = n(299),
                u = 2 * Math.PI,
                c = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        t.beginPath(), t.arc(0, 0, this.innerRadius(), 0, u, !1), t.moveTo(this.outerRadius(), 0), t.arc(0, 0, this.outerRadius(), u, 0, !0), t.closePath(), t.fillStrokeShape(this)
                    }, e.prototype.getWidth = function() {
                        return 2 * this.outerRadius()
                    }, e.prototype.getHeight = function() {
                        return 2 * this.outerRadius()
                    }, e.prototype.setWidth = function(t) {
                        this.outerRadius(t / 2)
                    }, e.prototype.setHeight = function(t) {
                        this.outerRadius(t / 2)
                    }, e
                }(a.Shape);
            e.Ring = c, c.prototype.className = "Ring", c.prototype._centroid = !0, c.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], l._registerNode(c), o.Factory.addGetterSetter(c, "innerRadius", 0, s.getNumberValidator()), o.Factory.addGetterSetter(c, "outerRadius", 0, s.getNumberValidator()), i.Collection.mapMethods(c)
        },
        585: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(391),
                l = n(300),
                u = n(299),
                c = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n._updated = !0, n.anim = new s.Animation((function() {
                            var t = n._updated;
                            return n._updated = !1, t
                        })), n.on("animationChange.konva", (function() {
                            this.frameIndex(0)
                        })), n.on("frameIndexChange.konva", (function() {
                            this._updated = !0
                        })), n.on("frameRateChange.konva", (function() {
                            this.anim.isRunning() && (clearInterval(this.interval), this._setInterval())
                        })), n
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        var e = this.animation(),
                            n = this.frameIndex(),
                            r = 4 * n,
                            i = this.animations()[e],
                            o = this.frameOffsets(),
                            a = i[r + 0],
                            s = i[r + 1],
                            l = i[r + 2],
                            u = i[r + 3],
                            c = this.image();
                        if ((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, l, u), t.closePath(), t.fillStrokeShape(this)), c)
                            if (o) {
                                var h = o[e],
                                    d = 2 * n;
                                t.drawImage(c, a, s, l, u, h[d + 0], h[d + 1], l, u)
                            } else t.drawImage(c, a, s, l, u, 0, 0, l, u)
                    }, e.prototype._hitFunc = function(t) {
                        var e = this.animation(),
                            n = this.frameIndex(),
                            r = 4 * n,
                            i = this.animations()[e],
                            o = this.frameOffsets(),
                            a = i[r + 2],
                            s = i[r + 3];
                        if (t.beginPath(), o) {
                            var l = o[e],
                                u = 2 * n;
                            t.rect(l[u + 0], l[u + 1], a, s)
                        } else t.rect(0, 0, a, s);
                        t.closePath(), t.fillShape(this)
                    }, e.prototype._useBufferCanvas = function() {
                        return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke()
                    }, e.prototype._setInterval = function() {
                        var t = this;
                        this.interval = setInterval((function() {
                            t._updateIndex()
                        }), 1e3 / this.frameRate())
                    }, e.prototype.start = function() {
                        if (!this.isRunning()) {
                            var t = this.getLayer();
                            this.anim.setLayers(t), this._setInterval(), this.anim.start()
                        }
                    }, e.prototype.stop = function() {
                        this.anim.stop(), clearInterval(this.interval)
                    }, e.prototype.isRunning = function() {
                        return this.anim.isRunning()
                    }, e.prototype._updateIndex = function() {
                        var t = this.frameIndex(),
                            e = this.animation();
                        t < this.animations()[e].length / 4 - 1 ? this.frameIndex(t + 1) : this.frameIndex(0)
                    }, e
                }(a.Shape);
            e.Sprite = c, c.prototype.className = "Sprite", u._registerNode(c), o.Factory.addGetterSetter(c, "animation"), o.Factory.addGetterSetter(c, "animations"), o.Factory.addGetterSetter(c, "frameOffsets"), o.Factory.addGetterSetter(c, "image"), o.Factory.addGetterSetter(c, "frameIndex", 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "frameRate", 17, l.getNumberValidator()), o.Factory.backCompat(c, {
                index: "frameIndex",
                getIndex: "getFrameIndex",
                setIndex: "setFrameIndex"
            }), i.Collection.mapMethods(c)
        },
        586: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(300),
                l = n(299),
                u = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        var e = this.innerRadius(),
                            n = this.outerRadius(),
                            r = this.numPoints();
                        t.beginPath(), t.moveTo(0, 0 - n);
                        for (var i = 1; i < 2 * r; i++) {
                            var o = i % 2 === 0 ? n : e,
                                a = o * Math.sin(i * Math.PI / r),
                                s = -1 * o * Math.cos(i * Math.PI / r);
                            t.lineTo(a, s)
                        }
                        t.closePath(), t.fillStrokeShape(this)
                    }, e.prototype.getWidth = function() {
                        return 2 * this.outerRadius()
                    }, e.prototype.getHeight = function() {
                        return 2 * this.outerRadius()
                    }, e.prototype.setWidth = function(t) {
                        this.outerRadius(t / 2)
                    }, e.prototype.setHeight = function(t) {
                        this.outerRadius(t / 2)
                    }, e
                }(a.Shape);
            e.Star = u, u.prototype.className = "Star", u.prototype._centroid = !0, u.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], l._registerNode(u), o.Factory.addGetterSetter(u, "numPoints", 5, s.getNumberValidator()), o.Factory.addGetterSetter(u, "innerRadius", 0, s.getNumberValidator()), o.Factory.addGetterSetter(u, "outerRadius", 0, s.getNumberValidator()), i.Collection.mapMethods(u)
        },
        587: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(427),
                l = n(429),
                u = n(300),
                c = n(299);

            function h(t) {
                t.fillText(this.partialText, 0, 0)
            }

            function d(t) {
                t.strokeText(this.partialText, 0, 0)
            }
            var f = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.dummyCanvas = i.Util.createCanvasElement(), n.dataArray = [], n.dataArray = s.Path.parsePathData(n.attrs.data), n.on("dataChange.konva", (function() {
                        this.dataArray = s.Path.parsePathData(this.attrs.data), this._setTextData()
                    })), n.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva", n._setTextData), e && e.getKerning && (i.Util.warn('getKerning TextPath API is deprecated. Please use "kerningFunc" instead.'), n.kerningFunc(e.getKerning)), n._setTextData(), n
                }
                return r(e, t), e.prototype._sceneFunc = function(t) {
                    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
                    var e = this.textDecoration(),
                        n = this.fill(),
                        r = this.fontSize(),
                        i = this.glyphInfo;
                    "underline" === e && t.beginPath();
                    for (var o = 0; o < i.length; o++) {
                        t.save();
                        var a = i[o].p0;
                        t.translate(a.x, a.y), t.rotate(i[o].rotation), this.partialText = i[o].text, t.fillStrokeShape(this), "underline" === e && (0 === o && t.moveTo(0, r / 2 + 1), t.lineTo(r, r / 2 + 1)), t.restore()
                    }
                    "underline" === e && (t.strokeStyle = n, t.lineWidth = r / 20, t.stroke()), t.restore()
                }, e.prototype._hitFunc = function(t) {
                    t.beginPath();
                    var e = this.glyphInfo;
                    if (e.length >= 1) {
                        var n = e[0].p0;
                        t.moveTo(n.x, n.y)
                    }
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r].p1;
                        t.lineTo(i.x, i.y)
                    }
                    t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke()
                }, e.prototype.getTextWidth = function() {
                    return this.textWidth
                }, e.prototype.getTextHeight = function() {
                    return i.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight
                }, e.prototype.setText = function(t) {
                    return l.Text.prototype.setText.call(this, t)
                }, e.prototype._getContextFont = function() {
                    return l.Text.prototype._getContextFont.call(this)
                }, e.prototype._getTextSize = function(t) {
                    var e = this.dummyCanvas.getContext("2d");
                    e.save(), e.font = this._getContextFont();
                    var n = e.measureText(t);
                    return e.restore(), {
                        width: n.width,
                        height: parseInt(this.attrs.fontSize, 10)
                    }
                }, e.prototype._setTextData = function() {
                    var t = this,
                        e = this._getTextSize(this.attrs.text),
                        n = this.letterSpacing(),
                        r = this.align(),
                        i = this.kerningFunc();
                    this.textWidth = e.width, this.textHeight = e.height;
                    var o = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * n, 0);
                    this.glyphInfo = [];
                    for (var a = 0, l = 0; l < t.dataArray.length; l++) t.dataArray[l].pathLength > 0 && (a += t.dataArray[l].pathLength);
                    var u = 0;
                    "center" === r && (u = Math.max(0, a / 2 - o / 2)), "right" === r && (u = Math.max(0, a - o));
                    for (var c, h, d, f = this.text().split(""), p = this.text().split(" ").length - 1, g = -1, y = 0, v = function() {
                            y = 0;
                            for (var e = t.dataArray, n = g + 1; n < e.length; n++) {
                                if (e[n].pathLength > 0) return g = n, e[n];
                                "M" === e[n].command && (c = {
                                    x: e[n].points[0],
                                    y: e[n].points[1]
                                })
                            }
                            return {}
                        }, m = function(e) {
                            var i = t._getTextSize(e).width + n;
                            " " === e && "justify" === r && (i += (a - o) / p);
                            var l = 0,
                                u = 0;
                            for (h = void 0; Math.abs(i - l) / i > .01 && u < 25;) {
                                u++;
                                for (var f = l; void 0 === d;)(d = v()) && f + d.pathLength < i && (f += d.pathLength, d = void 0);
                                if (d === {} || void 0 === c) return;
                                var g = !1;
                                switch (d.command) {
                                    case "L":
                                        s.Path.getLineLength(c.x, c.y, d.points[0], d.points[1]) > i ? h = s.Path.getPointOnLine(i, c.x, c.y, d.points[0], d.points[1], c.x, c.y) : d = void 0;
                                        break;
                                    case "A":
                                        var m = d.points[4],
                                            _ = d.points[5],
                                            b = d.points[4] + _;
                                        0 === y ? y = m + 1e-8 : i > l ? y += Math.PI / 180 * _ / Math.abs(_) : y -= Math.PI / 360 * _ / Math.abs(_), (_ < 0 && y < b || _ >= 0 && y > b) && (y = b, g = !0), h = s.Path.getPointOnEllipticalArc(d.points[0], d.points[1], d.points[2], d.points[3], y, d.points[6]);
                                        break;
                                    case "C":
                                        0 === y ? y = i > d.pathLength ? 1e-8 : i / d.pathLength : i > l ? y += (i - l) / d.pathLength : y -= (l - i) / d.pathLength, y > 1 && (y = 1, g = !0), h = s.Path.getPointOnCubicBezier(y, d.start.x, d.start.y, d.points[0], d.points[1], d.points[2], d.points[3], d.points[4], d.points[5]);
                                        break;
                                    case "Q":
                                        0 === y ? y = i / d.pathLength : i > l ? y += (i - l) / d.pathLength : y -= (l - i) / d.pathLength, y > 1 && (y = 1, g = !0), h = s.Path.getPointOnQuadraticBezier(y, d.start.x, d.start.y, d.points[0], d.points[1], d.points[2], d.points[3])
                                }
                                void 0 !== h && (l = s.Path.getLineLength(c.x, c.y, h.x, h.y)), g && (g = !1, d = void 0)
                            }
                        }, _ = u / (t._getTextSize("C").width + n) - 1, b = 0; b < _ && (m("C"), void 0 !== c && void 0 !== h); b++) c = h;
                    for (var S = 0; S < f.length && (m(f[S]), void 0 !== c && void 0 !== h); S++) {
                        var x = s.Path.getLineLength(c.x, c.y, h.x, h.y),
                            C = 0;
                        if (i) try {
                            C = i(f[S - 1], f[S]) * this.fontSize()
                        } catch (P) {
                            C = 0
                        }
                        c.x += C, h.x += C, this.textWidth += C;
                        var w = s.Path.getPointOnLine(C + x / 2, c.x, c.y, h.x, h.y),
                            T = Math.atan2(h.y - c.y, h.x - c.x);
                        this.glyphInfo.push({
                            transposeX: w.x,
                            transposeY: w.y,
                            text: f[S],
                            rotation: T,
                            p0: c,
                            p1: h
                        }), c = h
                    }
                }, e.prototype.getSelfRect = function() {
                    if (!this.glyphInfo.length) return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    var t = [];
                    this.glyphInfo.forEach((function(e) {
                        t.push(e.p0.x), t.push(e.p0.y), t.push(e.p1.x), t.push(e.p1.y)
                    }));
                    for (var e, n, r = t[0] || 0, i = t[0] || 0, o = t[1] || 0, a = t[1] || 0, s = 0; s < t.length / 2; s++) e = t[2 * s], n = t[2 * s + 1], r = Math.min(r, e), i = Math.max(i, e), o = Math.min(o, n), a = Math.max(a, n);
                    var l = this.fontSize();
                    return {
                        x: Math.round(r) - l / 2,
                        y: Math.round(o) - l / 2,
                        width: Math.round(i - r) + l,
                        height: Math.round(a - o) + l
                    }
                }, e
            }(a.Shape);
            e.TextPath = f, f.prototype._fillFunc = h, f.prototype._strokeFunc = d, f.prototype._fillFuncHit = h, f.prototype._strokeFuncHit = d, f.prototype.className = "TextPath", f.prototype._attrsAffectingSize = ["text", "fontSize", "data"], c._registerNode(f), o.Factory.addGetterSetter(f, "data"), o.Factory.addGetterSetter(f, "fontFamily", "Arial"), o.Factory.addGetterSetter(f, "fontSize", 12, u.getNumberValidator()), o.Factory.addGetterSetter(f, "fontStyle", "normal"), o.Factory.addGetterSetter(f, "align", "left"), o.Factory.addGetterSetter(f, "letterSpacing", 0, u.getNumberValidator()), o.Factory.addGetterSetter(f, "textBaseline", "middle"), o.Factory.addGetterSetter(f, "fontVariant", "normal"), o.Factory.addGetterSetter(f, "text", ""), o.Factory.addGetterSetter(f, "textDecoration", null), o.Factory.addGetterSetter(f, "kerningFunc", null), i.Collection.mapMethods(f)
        },
        588: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(302),
                s = n(303),
                l = n(428),
                u = n(390),
                c = n(299),
                h = n(300),
                d = n(299),
                f = ["resizeEnabledChange", "rotateAnchorOffsetChange", "rotateEnabledChange", "enabledAnchorsChange", "anchorSizeChange", "borderEnabledChange", "borderStrokeChange", "borderStrokeWidthChange", "borderDashChange", "anchorStrokeChange", "anchorStrokeWidthChange", "anchorFillChange", "anchorCornerRadiusChange", "ignoreStrokeChange"].map((function(t) {
                    return t + ".tr-konva"
                })).join(" "),
                p = ["widthChange", "heightChange", "scaleXChange", "scaleYChange", "skewXChange", "skewYChange", "rotationChange", "offsetXChange", "offsetYChange", "transformsEnabledChange", "strokeWidthChange"].map((function(t) {
                    return t + ".tr-konva"
                })).join(" "),
                g = {
                    "top-left": -45,
                    "top-center": 0,
                    "top-right": 45,
                    "middle-right": -90,
                    "middle-left": 90,
                    "bottom-left": -135,
                    "bottom-center": 180,
                    "bottom-right": 135
                },
                y = "ontouchstart" in c.Konva._global;
            var v = ["top-left", "top-center", "top-right", "middle-right", "middle-left", "bottom-left", "bottom-center", "bottom-right"],
                m = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n._transforming = !1, n._createElements(), n._handleMouseMove = n._handleMouseMove.bind(n), n._handleMouseUp = n._handleMouseUp.bind(n), n.update = n.update.bind(n), n.on(f, n.update), n.getNode() && n.update(), n
                    }
                    return r(e, t), e.prototype.attachTo = function(t) {
                        return this.setNode(t), this
                    }, e.prototype.setNode = function(t) {
                        var e = this;
                        this._node && this.detach(), this._node = t, this._resetTransformCache();
                        var n = t._attrsAffectingSize.map((function(t) {
                                return t + "Change.tr-konva"
                            })).join(" "),
                            r = function() {
                                e._resetTransformCache(), e._transforming || e.update()
                            };
                        return t.on(n, r), t.on(p, r), t.on("xChange.tr-konva yChange.tr-konva", (function() {
                            return e._resetTransformCache()
                        })), !!this.findOne(".top-left") && this.update(), this
                    }, e.prototype.getNode = function() {
                        return this._node
                    }, e.prototype.detach = function() {
                        this.getNode() && (this.getNode().off(".tr-konva"), this._node = void 0), this._resetTransformCache()
                    }, e.prototype._resetTransformCache = function() {
                        this._clearCache("nodeRect"), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform")
                    }, e.prototype._getNodeRect = function() {
                        return this._getCache("nodeRect", this.__getNodeRect)
                    }, e.prototype.__getNodeRect = function() {
                        var t = this.getNode();
                        if (!t) return {
                            x: -1e8,
                            y: -1e8,
                            width: 0,
                            height: 0,
                            rotation: 0
                        };
                        t.parent && this.parent && t.parent !== this.parent && i.Util.warn("Transformer and attached node have different parents. Konva does not support such case right now. Please move Transformer to the parent of attaching node.");
                        var e = t.getClientRect({
                                skipTransform: !0,
                                skipShadow: !0,
                                skipStroke: this.ignoreStroke()
                            }),
                            n = c.Konva.getAngle(t.rotation()),
                            r = e.x * t.scaleX() - t.offsetX() * t.scaleX(),
                            o = e.y * t.scaleY() - t.offsetY() * t.scaleY();
                        return {
                            x: t.x() + r * Math.cos(n) + o * Math.sin(-n),
                            y: t.y() + o * Math.cos(n) + r * Math.sin(n),
                            width: e.width * t.scaleX(),
                            height: e.height * t.scaleY(),
                            rotation: t.rotation()
                        }
                    }, e.prototype.getX = function() {
                        return this._getNodeRect().x
                    }, e.prototype.getY = function() {
                        return this._getNodeRect().y
                    }, e.prototype.getRotation = function() {
                        return this._getNodeRect().rotation
                    }, e.prototype.getWidth = function() {
                        return this._getNodeRect().width
                    }, e.prototype.getHeight = function() {
                        return this._getNodeRect().height
                    }, e.prototype._createElements = function() {
                        this._createBack(), v.forEach(function(t) {
                            this._createAnchor(t)
                        }.bind(this)), this._createAnchor("rotater")
                    }, e.prototype._createAnchor = function(t) {
                        var e = this,
                            n = new l.Rect({
                                stroke: "rgb(0, 161, 255)",
                                fill: "white",
                                strokeWidth: 1,
                                name: t + " _anchor",
                                dragDistance: 0,
                                draggable: !0,
                                hitStrokeWidth: y ? 10 : "auto"
                            }),
                            r = this;
                        n.on("mousedown touchstart", (function(t) {
                            r._handleMouseDown(t)
                        })), n.on("dragstart", (function(t) {
                            t.cancelBubble = !0
                        })), n.on("dragmove", (function(t) {
                            t.cancelBubble = !0
                        })), n.on("dragend", (function(t) {
                            t.cancelBubble = !0
                        })), n.on("mouseenter", (function() {
                            var r = c.Konva.getAngle(e.getAbsoluteRotation()),
                                o = e.getNode().getAbsoluteScale(),
                                a = o.y * o.x < 0,
                                s = function(t, e, n) {
                                    if ("rotater" === t) return "crosshair";
                                    e += i.Util._degToRad(g[t] || 0), n && (e *= -1);
                                    var r = (i.Util._radToDeg(e) % 360 + 360) % 360;
                                    return i.Util._inRange(r, 337.5, 360) || i.Util._inRange(r, 0, 22.5) ? "ns-resize" : i.Util._inRange(r, 22.5, 67.5) ? "nesw-resize" : i.Util._inRange(r, 67.5, 112.5) ? "ew-resize" : i.Util._inRange(r, 112.5, 157.5) ? "nwse-resize" : i.Util._inRange(r, 157.5, 202.5) ? "ns-resize" : i.Util._inRange(r, 202.5, 247.5) ? "nesw-resize" : i.Util._inRange(r, 247.5, 292.5) ? "ew-resize" : i.Util._inRange(r, 292.5, 337.5) ? "nwse-resize" : (i.Util.error("Transformer has unknown angle for cursor detection: " + r), "pointer")
                                }(t, r, a);
                            n.getStage().content.style.cursor = s, e._cursorChange = !0
                        })), n.on("mouseout", (function() {
                            n.getStage() && n.getParent() && (n.getStage().content.style.cursor = "", e._cursorChange = !1)
                        })), this.add(n)
                    }, e.prototype._createBack = function() {
                        var t = new s.Shape({
                            name: "back",
                            width: 0,
                            height: 0,
                            listening: !1,
                            sceneFunc: function(t) {
                                var e = this.getParent(),
                                    n = e.padding();
                                t.beginPath(), t.rect(-n, -n, this.width() + 2 * n, this.height() + 2 * n), t.moveTo(this.width() / 2, -n), e.rotateEnabled() && t.lineTo(this.width() / 2, -e.rotateAnchorOffset() * i.Util._sign(this.height()) - n), t.fillStrokeShape(this)
                            }
                        });
                        this.add(t)
                    }, e.prototype._handleMouseDown = function(t) {
                        this._movingAnchorName = t.target.name().split(" ")[0];
                        var e = this._getNodeRect(),
                            n = e.width,
                            r = e.height,
                            i = Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
                        this.sin = Math.abs(r / i), this.cos = Math.abs(n / i), window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0), this._transforming = !0, this._fire("transformstart", {
                            evt: t,
                            target: this.getNode()
                        }), this.getNode()._fire("transformstart", {
                            evt: t,
                            target: this.getNode()
                        })
                    }, e.prototype._handleMouseMove = function(t) {
                        var e, n, r, o = this.findOne("." + this._movingAnchorName),
                            a = o.getStage();
                        a.setPointersPositions(t), o.setAbsolutePosition(a.getPointerPosition());
                        var s = this.keepRatio() || t.shiftKey,
                            l = this.padding();
                        if ("top-left" === this._movingAnchorName) {
                            if (s) {
                                r = Math.sqrt(Math.pow(this.findOne(".bottom-right").x() - o.x() - 2 * l, 2) + Math.pow(this.findOne(".bottom-right").y() - o.y() - 2 * l, 2));
                                var u = this.findOne(".top-left").x() > this.findOne(".bottom-right").x() ? -1 : 1,
                                    h = this.findOne(".top-left").y() > this.findOne(".bottom-right").y() ? -1 : 1;
                                e = r * this.cos * u, n = r * this.sin * h, this.findOne(".top-left").x(this.findOne(".bottom-right").x() - e - 2 * l), this.findOne(".top-left").y(this.findOne(".bottom-right").y() - n - 2 * l)
                            }
                        } else if ("top-center" === this._movingAnchorName) this.findOne(".top-left").y(o.y());
                        else if ("top-right" === this._movingAnchorName) {
                            if (s) {
                                r = Math.sqrt(Math.pow(o.x() - this.findOne(".bottom-left").x() - 2 * l, 2) + Math.pow(this.findOne(".bottom-left").y() - o.y() - 2 * l, 2));
                                u = this.findOne(".top-right").x() < this.findOne(".top-left").x() ? -1 : 1, h = this.findOne(".top-right").y() > this.findOne(".bottom-left").y() ? -1 : 1;
                                e = r * this.cos * u, n = r * this.sin * h, this.findOne(".top-right").x(e + l), this.findOne(".top-right").y(this.findOne(".bottom-left").y() - n - 2 * l)
                            }
                            var d = o.position();
                            this.findOne(".top-left").y(d.y), this.findOne(".bottom-right").x(d.x)
                        } else if ("middle-left" === this._movingAnchorName) this.findOne(".top-left").x(o.x());
                        else if ("middle-right" === this._movingAnchorName) this.findOne(".bottom-right").x(o.x());
                        else if ("bottom-left" === this._movingAnchorName) {
                            if (s) {
                                r = Math.sqrt(Math.pow(this.findOne(".top-right").x() - o.x() - 2 * l, 2) + Math.pow(o.y() - this.findOne(".top-right").y() - 2 * l, 2));
                                u = this.findOne(".top-right").x() < this.findOne(".bottom-left").x() ? -1 : 1, h = this.findOne(".bottom-right").y() < this.findOne(".top-left").y() ? -1 : 1;
                                e = r * this.cos * u, n = r * this.sin * h, this.findOne(".bottom-left").x(this.findOne(".top-right").x() - e - 2 * l), this.findOne(".bottom-left").y(n + l)
                            }
                            d = o.position(), this.findOne(".top-left").x(d.x), this.findOne(".bottom-right").y(d.y)
                        } else if ("bottom-center" === this._movingAnchorName) this.findOne(".bottom-right").y(o.y());
                        else if ("bottom-right" === this._movingAnchorName) {
                            if (s) {
                                r = Math.sqrt(Math.pow(this.findOne(".bottom-right").x() - l, 2) + Math.pow(this.findOne(".bottom-right").y() - l, 2));
                                u = this.findOne(".top-left").x() > this.findOne(".bottom-right").x() ? -1 : 1, h = this.findOne(".top-left").y() > this.findOne(".bottom-right").y() ? -1 : 1;
                                e = r * this.cos * u, n = r * this.sin * h, this.findOne(".bottom-right").x(e + l), this.findOne(".bottom-right").y(n + l)
                            }
                        } else if ("rotater" === this._movingAnchorName) {
                            var f = this._getNodeRect();
                            e = o.x() - f.width / 2, n = -o.y() + f.height / 2;
                            var p = Math.atan2(-n, e) + Math.PI / 2;
                            f.height < 0 && (p -= Math.PI);
                            for (var g = c.Konva.getAngle(this.rotation()), y = i.Util._radToDeg(g) + i.Util._radToDeg(p), v = c.Konva.getAngle(this.getNode().rotation()), m = i.Util._degToRad(y), _ = this.rotationSnaps(), b = 0; b < _.length; b++) {
                                var S = c.Konva.getAngle(_[b]);
                                Math.abs(S - i.Util._degToRad(y)) % (2 * Math.PI) < .1 && (y = i.Util._radToDeg(S), m = i.Util._degToRad(y))
                            }
                            var x = l,
                                C = l;
                            this._fitNodeInto({
                                rotation: c.Konva.angleDeg ? y : i.Util._degToRad(y),
                                x: f.x + (f.width / 2 + l) * (Math.cos(v) - Math.cos(m)) + (f.height / 2 + l) * (Math.sin(-v) - Math.sin(-m)) - (x * Math.cos(g) + C * Math.sin(-g)),
                                y: f.y + (f.height / 2 + l) * (Math.cos(v) - Math.cos(m)) + (f.width / 2 + l) * (Math.sin(v) - Math.sin(m)) - (C * Math.cos(g) + x * Math.sin(g)),
                                width: f.width + 2 * l,
                                height: f.height + 2 * l
                            }, t)
                        } else console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
                        if ("rotater" !== this._movingAnchorName) {
                            if (this.centeredScaling() || t.altKey) {
                                var w = this.findOne(".top-left"),
                                    T = this.findOne(".bottom-right"),
                                    P = w.x() + l,
                                    k = w.y() + l,
                                    E = this.getWidth() - T.x() + l,
                                    M = this.getHeight() - T.y() + l;
                                T.move({
                                    x: -P,
                                    y: -k
                                }), w.move({
                                    x: E,
                                    y: M
                                })
                            }
                            var F = this.findOne(".top-left").getAbsolutePosition(this.getParent());
                            e = F.x, n = F.y;
                            var O = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(),
                                N = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
                            this._fitNodeInto({
                                x: e + this.offsetX(),
                                y: n + this.offsetY(),
                                width: O,
                                height: N
                            }, t)
                        }
                    }, e.prototype._handleMouseUp = function(t) {
                        this._removeEvents(t)
                    }, e.prototype._removeEvents = function(t) {
                        if (this._transforming) {
                            this._transforming = !1, window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0);
                            var e = this.getNode();
                            this._fire("transformend", {
                                evt: t,
                                target: e
                            }), e && e.fire("transformend", {
                                evt: t,
                                target: e
                            })
                        }
                    }, e.prototype._fitNodeInto = function(t, e) {
                        var n = this.boundBoxFunc();
                        if (n) {
                            var r = this._getNodeRect();
                            t = n.call(this, r, t)
                        }
                        var i = this.getNode();
                        void 0 !== t.rotation && this.getNode().rotation(t.rotation);
                        var o = i.getClientRect({
                                skipTransform: !0,
                                skipShadow: !0,
                                skipStroke: this.ignoreStroke()
                            }),
                            a = this.padding(),
                            s = o.width ? (t.width - 2 * a) / o.width : 1,
                            l = o.height ? (t.height - 2 * a) / o.height : 1,
                            u = c.Konva.getAngle(i.rotation()),
                            h = o.x * s - a - i.offsetX() * s,
                            d = o.y * l - a - i.offsetY() * l;
                        this.getNode().setAttrs({
                            scaleX: s,
                            scaleY: l,
                            x: t.x - (h * Math.cos(u) + d * Math.sin(-u)),
                            y: t.y - (d * Math.cos(u) + h * Math.sin(u))
                        }), this._fire("transform", {
                            evt: e,
                            target: this.getNode()
                        }), this.getNode()._fire("transform", {
                            evt: e,
                            target: this.getNode()
                        }), this.update(), this.getLayer().batchDraw()
                    }, e.prototype.forceUpdate = function() {
                        this._resetTransformCache(), this.update()
                    }, e.prototype.update = function() {
                        var t = this,
                            e = this._getNodeRect(),
                            n = this.getNode(),
                            r = {
                                x: 1,
                                y: 1
                            };
                        n && n.getParent() && (r = n.getParent().getAbsoluteScale());
                        var o = {
                                x: 1 / r.x,
                                y: 1 / r.y
                            },
                            a = e.width,
                            s = e.height,
                            l = this.enabledAnchors(),
                            u = this.resizeEnabled(),
                            c = this.padding(),
                            h = this.anchorSize();
                        this.find("._anchor").each((function(e) {
                            return e.setAttrs({
                                width: h,
                                height: h,
                                offsetX: h / 2,
                                offsetY: h / 2,
                                stroke: t.anchorStroke(),
                                strokeWidth: t.anchorStrokeWidth(),
                                fill: t.anchorFill(),
                                cornerRadius: t.anchorCornerRadius()
                            })
                        })), this.findOne(".top-left").setAttrs({
                            x: -c,
                            y: -c,
                            scale: o,
                            visible: u && l.indexOf("top-left") >= 0
                        }), this.findOne(".top-center").setAttrs({
                            x: a / 2,
                            y: -c,
                            scale: o,
                            visible: u && l.indexOf("top-center") >= 0
                        }), this.findOne(".top-right").setAttrs({
                            x: a + c,
                            y: -c,
                            scale: o,
                            visible: u && l.indexOf("top-right") >= 0
                        }), this.findOne(".middle-left").setAttrs({
                            x: -c,
                            y: s / 2,
                            scale: o,
                            visible: u && l.indexOf("middle-left") >= 0
                        }), this.findOne(".middle-right").setAttrs({
                            x: a + c,
                            y: s / 2,
                            scale: o,
                            visible: u && l.indexOf("middle-right") >= 0
                        }), this.findOne(".bottom-left").setAttrs({
                            x: -c,
                            y: s + c,
                            scale: o,
                            visible: u && l.indexOf("bottom-left") >= 0
                        }), this.findOne(".bottom-center").setAttrs({
                            x: a / 2,
                            y: s + c,
                            scale: o,
                            visible: u && l.indexOf("bottom-center") >= 0
                        }), this.findOne(".bottom-right").setAttrs({
                            x: a + c,
                            y: s + c,
                            scale: o,
                            visible: u && l.indexOf("bottom-right") >= 0
                        });
                        var d = -this.rotateAnchorOffset() * Math.abs(o.y);
                        this.findOne(".rotater").setAttrs({
                            x: a / 2,
                            y: d * i.Util._sign(s) - c,
                            scale: o,
                            visible: this.rotateEnabled()
                        }), this.findOne(".back").setAttrs({
                            width: a * r.x,
                            height: s * r.y,
                            scale: o,
                            visible: this.borderEnabled(),
                            stroke: this.borderStroke(),
                            strokeWidth: this.borderStrokeWidth(),
                            dash: this.borderDash()
                        })
                    }, e.prototype.isTransforming = function() {
                        return this._transforming
                    }, e.prototype.stopTransform = function() {
                        if (this._transforming) {
                            this._removeEvents();
                            var t = this.findOne("." + this._movingAnchorName);
                            t && t.stopDrag()
                        }
                    }, e.prototype.destroy = function() {
                        return this.getStage() && this._cursorChange && (this.getStage().content.style.cursor = ""), u.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this
                    }, e.prototype.toObject = function() {
                        return a.Node.prototype.toObject.call(this)
                    }, e
                }(u.Group);
            e.Transformer = m, m.prototype.className = "Transformer", d._registerNode(m), o.Factory.addGetterSetter(m, "enabledAnchors", v, (function(t) {
                return t instanceof Array || i.Util.warn("enabledAnchors value should be an array"), t instanceof Array && t.forEach((function(t) {
                    -1 === v.indexOf(t) && i.Util.warn("Unknown anchor name: " + t + ". Available names are: " + v.join(", "))
                })), t || []
            })), o.Factory.addGetterSetter(m, "resizeEnabled", !0), o.Factory.addGetterSetter(m, "anchorSize", 10, h.getNumberValidator()), o.Factory.addGetterSetter(m, "rotateEnabled", !0), o.Factory.addGetterSetter(m, "rotationSnaps", []), o.Factory.addGetterSetter(m, "rotateAnchorOffset", 50, h.getNumberValidator()), o.Factory.addGetterSetter(m, "borderEnabled", !0), o.Factory.addGetterSetter(m, "anchorStroke", "rgb(0, 161, 255)"), o.Factory.addGetterSetter(m, "anchorStrokeWidth", 1, h.getNumberValidator()), o.Factory.addGetterSetter(m, "anchorFill", "white"), o.Factory.addGetterSetter(m, "anchorCornerRadius", 0, h.getNumberValidator()), o.Factory.addGetterSetter(m, "borderStroke", "rgb(0, 161, 255)"), o.Factory.addGetterSetter(m, "borderStrokeWidth", 1, h.getNumberValidator()), o.Factory.addGetterSetter(m, "borderDash"), o.Factory.addGetterSetter(m, "keepRatio", !0), o.Factory.addGetterSetter(m, "centeredScaling", !1), o.Factory.addGetterSetter(m, "ignoreStroke", !1), o.Factory.addGetterSetter(m, "padding", 0, h.getNumberValidator()), o.Factory.addGetterSetter(m, "node"), o.Factory.addGetterSetter(m, "boundBoxFunc"), o.Factory.backCompat(m, {
                lineEnabled: "borderEnabled",
                rotateHandlerOffset: "rotateAnchorOffset",
                enabledHandlers: "enabledAnchors"
            }), i.Collection.mapMethods(m)
        },
        589: function(t, e, n) {
            "use strict";
            var r = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(301),
                o = n(298),
                a = n(303),
                s = n(299),
                l = n(300),
                u = n(299),
                c = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return r(e, t), e.prototype._sceneFunc = function(t) {
                        t.beginPath(), t.arc(0, 0, this.radius(), 0, s.Konva.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this)
                    }, e.prototype.getWidth = function() {
                        return 2 * this.radius()
                    }, e.prototype.getHeight = function() {
                        return 2 * this.radius()
                    }, e.prototype.setWidth = function(t) {
                        this.radius(t / 2)
                    }, e.prototype.setHeight = function(t) {
                        this.radius(t / 2)
                    }, e
                }(a.Shape);
            e.Wedge = c, c.prototype.className = "Wedge", c.prototype._centroid = !0, c.prototype._attrsAffectingSize = ["radius"], u._registerNode(c), o.Factory.addGetterSetter(c, "radius", 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "angle", 0, l.getNumberValidator()), o.Factory.addGetterSetter(c, "clockwise", !1), o.Factory.backCompat(c, {
                angleDeg: "angle",
                getAngleDeg: "getAngle",
                setAngleDeg: "setAngle"
            }), i.Collection.mapMethods(c)
        },
        590: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);

            function a() {
                this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
            }
            var s = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
                l = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
            e.Blur = function(t) {
                var e = Math.round(this.blurRadius());
                e > 0 && function(t, e) {
                    var n, r, i, o, u, c, h, d, f, p, g, y, v, m, _, b, S, x, C, w, T, P, k, E, M = t.data,
                        F = t.width,
                        O = t.height,
                        N = e + e + 1,
                        A = F - 1,
                        I = O - 1,
                        R = e + 1,
                        D = R * (R + 1) / 2,
                        G = new a,
                        U = null,
                        L = G,
                        z = null,
                        j = null,
                        B = s[e],
                        H = l[e];
                    for (i = 1; i < N; i++) L = L.next = new a, i === R && (U = L);
                    for (L.next = G, h = c = 0, r = 0; r < O; r++) {
                        for (b = S = x = C = d = f = p = g = 0, y = R * (w = M[c]), v = R * (T = M[c + 1]), m = R * (P = M[c + 2]), _ = R * (k = M[c + 3]), d += D * w, f += D * T, p += D * P, g += D * k, L = G, i = 0; i < R; i++) L.r = w, L.g = T, L.b = P, L.a = k, L = L.next;
                        for (i = 1; i < R; i++) o = c + ((A < i ? A : i) << 2), d += (L.r = w = M[o]) * (E = R - i), f += (L.g = T = M[o + 1]) * E, p += (L.b = P = M[o + 2]) * E, g += (L.a = k = M[o + 3]) * E, b += w, S += T, x += P, C += k, L = L.next;
                        for (z = G, j = U, n = 0; n < F; n++) M[c + 3] = k = g * B >> H, 0 !== k ? (k = 255 / k, M[c] = (d * B >> H) * k, M[c + 1] = (f * B >> H) * k, M[c + 2] = (p * B >> H) * k) : M[c] = M[c + 1] = M[c + 2] = 0, d -= y, f -= v, p -= m, g -= _, y -= z.r, v -= z.g, m -= z.b, _ -= z.a, o = h + ((o = n + e + 1) < A ? o : A) << 2, d += b += z.r = M[o], f += S += z.g = M[o + 1], p += x += z.b = M[o + 2], g += C += z.a = M[o + 3], z = z.next, y += w = j.r, v += T = j.g, m += P = j.b, _ += k = j.a, b -= w, S -= T, x -= P, C -= k, j = j.next, c += 4;
                        h += F
                    }
                    for (n = 0; n < F; n++) {
                        for (S = x = C = b = f = p = g = d = 0, y = R * (w = M[c = n << 2]), v = R * (T = M[c + 1]), m = R * (P = M[c + 2]), _ = R * (k = M[c + 3]), d += D * w, f += D * T, p += D * P, g += D * k, L = G, i = 0; i < R; i++) L.r = w, L.g = T, L.b = P, L.a = k, L = L.next;
                        for (u = F, i = 1; i <= e; i++) c = u + n << 2, d += (L.r = w = M[c]) * (E = R - i), f += (L.g = T = M[c + 1]) * E, p += (L.b = P = M[c + 2]) * E, g += (L.a = k = M[c + 3]) * E, b += w, S += T, x += P, C += k, L = L.next, i < I && (u += F);
                        for (c = n, z = G, j = U, r = 0; r < O; r++) M[(o = c << 2) + 3] = k = g * B >> H, k > 0 ? (k = 255 / k, M[o] = (d * B >> H) * k, M[o + 1] = (f * B >> H) * k, M[o + 2] = (p * B >> H) * k) : M[o] = M[o + 1] = M[o + 2] = 0, d -= y, f -= v, p -= m, g -= _, y -= z.r, v -= z.g, m -= z.b, _ -= z.a, o = n + ((o = r + R) < I ? o : I) * F << 2, d += b += z.r = M[o], f += S += z.g = M[o + 1], p += x += z.b = M[o + 2], g += C += z.a = M[o + 3], z = z.next, y += w = j.r, v += T = j.g, m += P = j.b, _ += k = j.a, b -= w, S -= T, x -= P, C -= k, j = j.next, c += F
                    }
                }(t, e)
            }, r.Factory.addGetterSetter(i.Node, "blurRadius", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        },
        591: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            e.Brighten = function(t) {
                var e, n = 255 * this.brightness(),
                    r = t.data,
                    i = r.length;
                for (e = 0; e < i; e += 4) r[e] += n, r[e + 1] += n, r[e + 2] += n
            }, r.Factory.addGetterSetter(i.Node, "brightness", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        },
        592: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            e.Contrast = function(t) {
                var e, n = Math.pow((this.contrast() + 100) / 100, 2),
                    r = t.data,
                    i = r.length,
                    o = 150,
                    a = 150,
                    s = 150;
                for (e = 0; e < i; e += 4) o = r[e], a = r[e + 1], s = r[e + 2], o /= 255, o -= .5, o *= n, o += .5, a /= 255, a -= .5, a *= n, a += .5, s /= 255, s -= .5, s *= n, s += .5, o = (o *= 255) < 0 ? 0 : o > 255 ? 255 : o, a = (a *= 255) < 0 ? 0 : a > 255 ? 255 : a, s = (s *= 255) < 0 ? 0 : s > 255 ? 255 : s, r[e] = o, r[e + 1] = a, r[e + 2] = s
            }, r.Factory.addGetterSetter(i.Node, "contrast", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        },
        593: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(301),
                a = n(300);
            e.Emboss = function(t) {
                var e = 10 * this.embossStrength(),
                    n = 255 * this.embossWhiteLevel(),
                    r = this.embossDirection(),
                    i = this.embossBlend(),
                    a = 0,
                    s = 0,
                    l = t.data,
                    u = t.width,
                    c = t.height,
                    h = 4 * u,
                    d = c;
                switch (r) {
                    case "top-left":
                        a = -1, s = -1;
                        break;
                    case "top":
                        a = -1, s = 0;
                        break;
                    case "top-right":
                        a = -1, s = 1;
                        break;
                    case "right":
                        a = 0, s = 1;
                        break;
                    case "bottom-right":
                        a = 1, s = 1;
                        break;
                    case "bottom":
                        a = 1, s = 0;
                        break;
                    case "bottom-left":
                        a = 1, s = -1;
                        break;
                    case "left":
                        a = 0, s = -1;
                        break;
                    default:
                        o.Util.error("Unknown emboss direction: " + r)
                }
                do {
                    var f = (d - 1) * h,
                        p = a;
                    d + p < 1 && (p = 0), d + p > c && (p = 0);
                    var g = (d - 1 + p) * u * 4,
                        y = u;
                    do {
                        var v = f + 4 * (y - 1),
                            m = s;
                        y + m < 1 && (m = 0), y + m > u && (m = 0);
                        var _ = g + 4 * (y - 1 + m),
                            b = l[v] - l[_],
                            S = l[v + 1] - l[_ + 1],
                            x = l[v + 2] - l[_ + 2],
                            C = b,
                            w = C > 0 ? C : -C;
                        if ((S > 0 ? S : -S) > w && (C = S), (x > 0 ? x : -x) > w && (C = x), C *= e, i) {
                            var T = l[v] + C,
                                P = l[v + 1] + C,
                                k = l[v + 2] + C;
                            l[v] = T > 255 ? 255 : T < 0 ? 0 : T, l[v + 1] = P > 255 ? 255 : P < 0 ? 0 : P, l[v + 2] = k > 255 ? 255 : k < 0 ? 0 : k
                        } else {
                            var E = n - C;
                            E < 0 ? E = 0 : E > 255 && (E = 255), l[v] = l[v + 1] = l[v + 2] = E
                        }
                    } while (--y)
                } while (--d)
            }, r.Factory.addGetterSetter(i.Node, "embossStrength", .5, a.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "embossWhiteLevel", .5, a.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "embossDirection", "top-left", null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "embossBlend", !1, null, r.Factory.afterSetFilter)
        },
        594: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);

            function a(t, e, n, r, i) {
                var o = n - e,
                    a = i - r;
                return 0 === o ? r + a / 2 : 0 === a ? r : a * ((t - e) / o) + r
            }
            e.Enhance = function(t) {
                var e, n, r, i, o = t.data,
                    s = o.length,
                    l = o[0],
                    u = l,
                    c = o[1],
                    h = c,
                    d = o[2],
                    f = d,
                    p = this.enhance();
                if (0 !== p) {
                    for (i = 0; i < s; i += 4)(e = o[i + 0]) < l ? l = e : e > u && (u = e), (n = o[i + 1]) < c ? c = n : n > h && (h = n), (r = o[i + 2]) < d ? d = r : r > f && (f = r);
                    var g, y, v, m, _, b, S, x, C;
                    for (u === l && (u = 255, l = 0), h === c && (h = 255, c = 0), f === d && (f = 255, d = 0), p > 0 ? (y = u + p * (255 - u), v = l - p * (l - 0), _ = h + p * (255 - h), b = c - p * (c - 0), x = f + p * (255 - f), C = d - p * (d - 0)) : (y = u + p * (u - (g = .5 * (u + l))), v = l + p * (l - g), _ = h + p * (h - (m = .5 * (h + c))), b = c + p * (c - m), x = f + p * (f - (S = .5 * (f + d))), C = d + p * (d - S)), i = 0; i < s; i += 4) o[i + 0] = a(o[i + 0], l, u, v, y), o[i + 1] = a(o[i + 1], c, h, b, _), o[i + 2] = a(o[i + 2], d, f, C, x)
                }
            }, r.Factory.addGetterSetter(i.Node, "enhance", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        },
        595: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Grayscale = function(t) {
                var e, n, r = t.data,
                    i = r.length;
                for (e = 0; e < i; e += 4) n = .34 * r[e] + .5 * r[e + 1] + .16 * r[e + 2], r[e] = n, r[e + 1] = n, r[e + 2] = n
            }
        },
        596: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            r.Factory.addGetterSetter(i.Node, "hue", 0, o.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "saturation", 0, o.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "luminance", 0, o.getNumberValidator(), r.Factory.afterSetFilter), e.HSL = function(t) {
                var e, n, r, i, o, a = t.data,
                    s = a.length,
                    l = Math.pow(2, this.saturation()),
                    u = Math.abs(this.hue() + 360) % 360,
                    c = 127 * this.luminance(),
                    h = 1 * l * Math.cos(u * Math.PI / 180),
                    d = 1 * l * Math.sin(u * Math.PI / 180),
                    f = .299 + .701 * h + .167 * d,
                    p = .587 - .587 * h + .33 * d,
                    g = .114 - .114 * h - .497 * d,
                    y = .299 - .299 * h - .328 * d,
                    v = .587 + .413 * h + .035 * d,
                    m = .114 - .114 * h + .293 * d,
                    _ = .299 - .3 * h + 1.25 * d,
                    b = .587 - .586 * h - 1.05 * d,
                    S = .114 + .886 * h - .2 * d;
                for (e = 0; e < s; e += 4) n = a[e + 0], r = a[e + 1], i = a[e + 2], o = a[e + 3], a[e + 0] = f * n + p * r + g * i + c, a[e + 1] = y * n + v * r + m * i + c, a[e + 2] = _ * n + b * r + S * i + c, a[e + 3] = o
            }
        },
        597: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            e.HSV = function(t) {
                var e, n, r, i, o, a = t.data,
                    s = a.length,
                    l = Math.pow(2, this.value()),
                    u = Math.pow(2, this.saturation()),
                    c = Math.abs(this.hue() + 360) % 360,
                    h = l * u * Math.cos(c * Math.PI / 180),
                    d = l * u * Math.sin(c * Math.PI / 180),
                    f = .299 * l + .701 * h + .167 * d,
                    p = .587 * l - .587 * h + .33 * d,
                    g = .114 * l - .114 * h - .497 * d,
                    y = .299 * l - .299 * h - .328 * d,
                    v = .587 * l + .413 * h + .035 * d,
                    m = .114 * l - .114 * h + .293 * d,
                    _ = .299 * l - .3 * h + 1.25 * d,
                    b = .587 * l - .586 * h - 1.05 * d,
                    S = .114 * l + .886 * h - .2 * d;
                for (e = 0; e < s; e += 4) n = a[e + 0], r = a[e + 1], i = a[e + 2], o = a[e + 3], a[e + 0] = f * n + p * r + g * i, a[e + 1] = y * n + v * r + m * i, a[e + 2] = _ * n + b * r + S * i, a[e + 3] = o
            }, r.Factory.addGetterSetter(i.Node, "hue", 0, o.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "saturation", 0, o.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "value", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        },
        598: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Invert = function(t) {
                var e, n = t.data,
                    r = n.length;
                for (e = 0; e < r; e += 4) n[e] = 255 - n[e], n[e + 1] = 255 - n[e + 1], n[e + 2] = 255 - n[e + 2]
            }
        },
        599: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(301),
                a = n(300);
            e.Kaleidoscope = function(t) {
                var e, n, r, i, a, s, l, u, c, h = t.width,
                    d = t.height,
                    f = Math.round(this.kaleidoscopePower()),
                    p = Math.round(this.kaleidoscopeAngle()),
                    g = Math.floor(h * (p % 360) / 360);
                if (!(f < 1)) {
                    var y = o.Util.createCanvasElement();
                    y.width = h, y.height = d;
                    var v = y.getContext("2d").getImageData(0, 0, h, d);
                    ! function(t, e, n) {
                        var r, i, o, a, s = t.data,
                            l = e.data,
                            u = t.width,
                            c = t.height,
                            h = n.polarCenterX || u / 2,
                            d = n.polarCenterY || c / 2,
                            f = 0,
                            p = 0,
                            g = 0,
                            y = 0,
                            v = Math.sqrt(h * h + d * d);
                        i = u - h, o = c - d, v = (a = Math.sqrt(i * i + o * o)) > v ? a : v;
                        var m, _, b, S, x = c,
                            C = u,
                            w = 360 / C * Math.PI / 180;
                        for (_ = 0; _ < C; _ += 1)
                            for (b = Math.sin(_ * w), S = Math.cos(_ * w), m = 0; m < x; m += 1) i = Math.floor(h + v * m / x * S), f = s[(r = 4 * ((o = Math.floor(d + v * m / x * b)) * u + i)) + 0], p = s[r + 1], g = s[r + 2], y = s[r + 3], l[(r = 4 * (_ + m * u)) + 0] = f, l[r + 1] = p, l[r + 2] = g, l[r + 3] = y
                    }(t, v, {
                        polarCenterX: h / 2,
                        polarCenterY: d / 2
                    });
                    for (var m = h / Math.pow(2, f); m <= 8;) m *= 2, f -= 1;
                    var _ = m = Math.ceil(m),
                        b = 0,
                        S = _,
                        x = 1;
                    for (g + m > h && (b = _, S = 0, x = -1), n = 0; n < d; n += 1)
                        for (e = b; e !== S; e += x) u = 4 * (h * n + Math.round(e + g) % h), i = v.data[u + 0], a = v.data[u + 1], s = v.data[u + 2], l = v.data[u + 3], c = 4 * (h * n + e), v.data[c + 0] = i, v.data[c + 1] = a, v.data[c + 2] = s, v.data[c + 3] = l;
                    for (n = 0; n < d; n += 1)
                        for (_ = Math.floor(m), r = 0; r < f; r += 1) {
                            for (e = 0; e < _ + 1; e += 1) u = 4 * (h * n + e), i = v.data[u + 0], a = v.data[u + 1], s = v.data[u + 2], l = v.data[u + 3], c = 4 * (h * n + 2 * _ - e - 1), v.data[c + 0] = i, v.data[c + 1] = a, v.data[c + 2] = s, v.data[c + 3] = l;
                            _ *= 2
                        }! function(t, e, n) {
                            var r, i, o, a, s, l, u = t.data,
                                c = e.data,
                                h = t.width,
                                d = t.height,
                                f = n.polarCenterX || h / 2,
                                p = n.polarCenterY || d / 2,
                                g = 0,
                                y = 0,
                                v = 0,
                                m = 0,
                                _ = Math.sqrt(f * f + p * p);
                            i = h - f, o = d - p, _ = (l = Math.sqrt(i * i + o * o)) > _ ? l : _;
                            var b, S, x, C = d,
                                w = h,
                                T = n.polarRotation || 0;
                            for (i = 0; i < h; i += 1)
                                for (o = 0; o < d; o += 1) a = i - f, s = o - p, b = Math.sqrt(a * a + s * s) * C / _, S = (S = (180 * Math.atan2(s, a) / Math.PI + 360 + T) % 360) * w / 360, x = Math.floor(S), g = u[(r = 4 * (Math.floor(b) * h + x)) + 0], y = u[r + 1], v = u[r + 2], m = u[r + 3], c[(r = 4 * (o * h + i)) + 0] = g, c[r + 1] = y, c[r + 2] = v, c[r + 3] = m
                        }(v, t, {
                            polarRotation: 0
                        })
                }
            }, r.Factory.addGetterSetter(i.Node, "kaleidoscopePower", 2, a.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "kaleidoscopeAngle", 0, a.getNumberValidator(), r.Factory.afterSetFilter)
        },
        600: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);

            function a(t, e, n) {
                var r = 4 * (n * t.width + e),
                    i = [];
                return i.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), i
            }

            function s(t, e) {
                return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2))
            }
            e.Mask = function(t) {
                var e = function(t, e) {
                    var n = a(t, 0, 0),
                        r = a(t, t.width - 1, 0),
                        i = a(t, 0, t.height - 1),
                        o = a(t, t.width - 1, t.height - 1),
                        l = e || 10;
                    if (s(n, r) < l && s(r, o) < l && s(o, i) < l && s(i, n) < l) {
                        for (var u = function(t) {
                                for (var e = [0, 0, 0], n = 0; n < t.length; n++) e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][2];
                                return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e
                            }([r, n, o, i]), c = [], h = 0; h < t.width * t.height; h++) {
                            var d = s(u, [t.data[4 * h], t.data[4 * h + 1], t.data[4 * h + 2]]);
                            c[h] = d < l ? 0 : 255
                        }
                        return c
                    }
                }(t, this.threshold());
                return e && function(t, e) {
                    for (var n = 0; n < t.width * t.height; n++) t.data[4 * n + 3] = e[n]
                }(t, e = function(t, e, n) {
                    for (var r = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], i = Math.round(Math.sqrt(r.length)), o = Math.floor(i / 2), a = [], s = 0; s < n; s++)
                        for (var l = 0; l < e; l++) {
                            for (var u = s * e + l, c = 0, h = 0; h < i; h++)
                                for (var d = 0; d < i; d++) {
                                    var f = s + h - o,
                                        p = l + d - o;
                                    if (f >= 0 && f < n && p >= 0 && p < e) {
                                        var g = r[h * i + d];
                                        c += t[f * e + p] * g
                                    }
                                }
                            a[u] = c
                        }
                    return a
                }(e = function(t, e, n) {
                    for (var r = [1, 1, 1, 1, 1, 1, 1, 1, 1], i = Math.round(Math.sqrt(r.length)), o = Math.floor(i / 2), a = [], s = 0; s < n; s++)
                        for (var l = 0; l < e; l++) {
                            for (var u = s * e + l, c = 0, h = 0; h < i; h++)
                                for (var d = 0; d < i; d++) {
                                    var f = s + h - o,
                                        p = l + d - o;
                                    if (f >= 0 && f < n && p >= 0 && p < e) {
                                        var g = r[h * i + d];
                                        c += t[f * e + p] * g
                                    }
                                }
                            a[u] = c >= 1020 ? 255 : 0
                        }
                    return a
                }(e = function(t, e, n) {
                    for (var r = [1, 1, 1, 1, 0, 1, 1, 1, 1], i = Math.round(Math.sqrt(r.length)), o = Math.floor(i / 2), a = [], s = 0; s < n; s++)
                        for (var l = 0; l < e; l++) {
                            for (var u = s * e + l, c = 0, h = 0; h < i; h++)
                                for (var d = 0; d < i; d++) {
                                    var f = s + h - o,
                                        p = l + d - o;
                                    if (f >= 0 && f < n && p >= 0 && p < e) {
                                        var g = r[h * i + d];
                                        c += t[f * e + p] * g
                                    }
                                }
                            a[u] = 2040 === c ? 255 : 0
                        }
                    return a
                }(e, t.width, t.height), t.width, t.height), t.width, t.height)), t
            }, r.Factory.addGetterSetter(i.Node, "threshold", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        },
        601: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            e.Noise = function(t) {
                var e, n = 255 * this.noise(),
                    r = t.data,
                    i = r.length,
                    o = n / 2;
                for (e = 0; e < i; e += 4) r[e + 0] += o - 2 * o * Math.random(), r[e + 1] += o - 2 * o * Math.random(), r[e + 2] += o - 2 * o * Math.random()
            }, r.Factory.addGetterSetter(i.Node, "noise", .2, o.getNumberValidator(), r.Factory.afterSetFilter)
        },
        602: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(301),
                o = n(302),
                a = n(300);
            e.Pixelate = function(t) {
                var e, n, r, o, a, s, l, u, c, h, d, f, p, g, y = Math.ceil(this.pixelSize()),
                    v = t.width,
                    m = t.height,
                    _ = Math.ceil(v / y),
                    b = Math.ceil(m / y),
                    S = t.data;
                if (y <= 0) i.Util.error("pixelSize value can not be <= 0");
                else
                    for (f = 0; f < _; f += 1)
                        for (p = 0; p < b; p += 1) {
                            for (o = 0, a = 0, s = 0, l = 0, c = (u = f * y) + y, d = (h = p * y) + y, g = 0, e = u; e < c; e += 1)
                                if (!(e >= v))
                                    for (n = h; n < d; n += 1) n >= m || (o += S[(r = 4 * (v * n + e)) + 0], a += S[r + 1], s += S[r + 2], l += S[r + 3], g += 1);
                            for (o /= g, a /= g, s /= g, l /= g, e = u; e < c; e += 1)
                                if (!(e >= v))
                                    for (n = h; n < d; n += 1) n >= m || (S[(r = 4 * (v * n + e)) + 0] = o, S[r + 1] = a, S[r + 2] = s, S[r + 3] = l)
                        }
            }, r.Factory.addGetterSetter(o.Node, "pixelSize", 8, a.getNumberValidator(), r.Factory.afterSetFilter)
        },
        603: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            e.Posterize = function(t) {
                var e, n = Math.round(254 * this.levels()) + 1,
                    r = t.data,
                    i = r.length,
                    o = 255 / n;
                for (e = 0; e < i; e += 1) r[e] = Math.floor(r[e] / o) * o
            }, r.Factory.addGetterSetter(i.Node, "levels", .5, o.getNumberValidator(), r.Factory.afterSetFilter)
        },
        604: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            e.RGB = function(t) {
                var e, n, r = t.data,
                    i = r.length,
                    o = this.red(),
                    a = this.green(),
                    s = this.blue();
                for (e = 0; e < i; e += 4) n = (.34 * r[e] + .5 * r[e + 1] + .16 * r[e + 2]) / 255, r[e] = n * o, r[e + 1] = n * a, r[e + 2] = n * s, r[e + 3] = r[e + 3]
            }, r.Factory.addGetterSetter(i.Node, "red", 0, (function(t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(i.Node, "green", 0, (function(t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(i.Node, "blue", 0, o.RGBComponent, r.Factory.afterSetFilter)
        },
        605: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            e.RGBA = function(t) {
                var e, n, r = t.data,
                    i = r.length,
                    o = this.red(),
                    a = this.green(),
                    s = this.blue(),
                    l = this.alpha();
                for (e = 0; e < i; e += 4) n = 1 - l, r[e] = o * l + r[e] * n, r[e + 1] = a * l + r[e + 1] * n, r[e + 2] = s * l + r[e + 2] * n
            }, r.Factory.addGetterSetter(i.Node, "red", 0, (function(t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(i.Node, "green", 0, (function(t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(i.Node, "blue", 0, o.RGBComponent, r.Factory.afterSetFilter), r.Factory.addGetterSetter(i.Node, "alpha", 1, (function(t) {
                return this._filterUpToDate = !1, t > 1 ? 1 : t < 0 ? 0 : t
            }))
        },
        606: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Sepia = function(t) {
                var e, n, r, i, o = t.data,
                    a = o.length;
                for (e = 0; e < a; e += 4) n = o[e + 0], r = o[e + 1], i = o[e + 2], o[e + 0] = Math.min(255, .393 * n + .769 * r + .189 * i), o[e + 1] = Math.min(255, .349 * n + .686 * r + .168 * i), o[e + 2] = Math.min(255, .272 * n + .534 * r + .131 * i)
            }
        },
        607: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Solarize = function(t) {
                var e = t.data,
                    n = t.width,
                    r = 4 * n,
                    i = t.height;
                do {
                    var o = (i - 1) * r,
                        a = n;
                    do {
                        var s = o + 4 * (a - 1),
                            l = e[s],
                            u = e[s + 1],
                            c = e[s + 2];
                        l > 127 && (l = 255 - l), u > 127 && (u = 255 - u), c > 127 && (c = 255 - c), e[s] = l, e[s + 1] = u, e[s + 2] = c
                    } while (--a)
                } while (--i)
            }
        },
        608: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(298),
                i = n(302),
                o = n(300);
            e.Threshold = function(t) {
                var e, n = 255 * this.threshold(),
                    r = t.data,
                    i = r.length;
                for (e = 0; e < i; e += 1) r[e] = r[e] < n ? 0 : 255
            }, r.Factory.addGetterSetter(i.Node, "threshold", .5, o.getNumberValidator(), r.Factory.afterSetFilter)
        }
    }
]);
//# sourceMappingURL=0.c1fbe2b0.chunk.js.map