(this.webpackJsonpweb = this.webpackJsonpweb || []).push([
    [2], {
        304: function(e, t, n) {
            "use strict";
            var o = n(30),
                r = n(2),
                a = n(331),
                l = n.n(a);
            t.a = (e, t) => {
                const n = r.useState(null),
                    a = Object(o.a)(n, 2),
                    i = a[0],
                    c = a[1];
                r.useLayoutEffect(() => {
                    let t = i;
                    return t || (t = l()(e.options), c(t)), t.setMembers(e.getGroupElements()), t.activate(), void 0 !== e.focusNodeIndex && t.focusNodeAtIndex(e.focusNodeIndex), () => {
                        t.deactivate()
                    }
                }, t)
            }
        },
        306: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            var o = n(30),
                r = n(63),
                a = n(9),
                l = n(5),
                i = n(2),
                c = n(311),
                s = n(26);

            function u() {
                const e = Object(a.a)(["\n  position: absolute;\n  top: ", "px;\n  left: 16px;\n  color: ", ";\n  font-size: ", "px;\n  line-height: 15px;\n  user-select: none;\n  pointer-events: none;\n  transition: top 0.2s ease-out, color 0.2s ease-out, font-size 0.2s ease-out;\n"]);
                return u = function() {
                    return e
                }, e
            }
            const d = l.d.div.withConfig({
                    displayName: "LabeledTextInput__LabelRoot",
                    componentId: "sc-13g76zn-0"
                })(["position:relative;height:55px;"]),
                p = Object(s.a)("label", ["collapsed"])(u(), e => e.collapsed ? 8 : 21, e => e.theme.placeholderColor, e => e.collapsed ? 12 : 16),
                f = Object(l.d)(c.a).withConfig({
                    displayName: "LabeledTextInput__StyledTextInput",
                    componentId: "sc-13g76zn-1"
                })(["height:55px;padding:27px 16px 12px;font-size:16px;background:", ";color:", ";border:0;"], e => e.theme.inputBgColor, e => e.theme.fgColor),
                h = i.forwardRef((e, t) => {
                    let n = e.placeholder,
                        a = e.className,
                        l = e.value,
                        c = e.id,
                        s = Object(r.a)(e, ["placeholder", "className", "value", "id"]);
                    const u = i.useState(!1),
                        h = Object(o.a)(u, 2),
                        m = h[0],
                        b = h[1];
                    return i.createElement(d, {
                        className: a
                    }, i.createElement(f, Object.assign({
                        id: c,
                        value: l,
                        onFocus: () => b(!0),
                        onBlur: () => b(!1),
                        ref: t
                    }, s)), i.createElement(p, {
                        htmlFor: c,
                        collapsed: m || !!l
                    }, n))
                });
            t.b = h
        },
        311: function(e, t, n) {
            "use strict";
            var o = n(9),
                r = n(26);

            function a() {
                const e = Object(o.a)(["\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  border: 1px solid ", ";\n  transition: border 0.2s ease-out;\n  height: 50px;\n  padding: 14px 17px 16px;\n  font-size: 16px;\n  font-weight: 400;\n  color: black;\n  background-color: white;\n  border-radius: 4px;\n  &::-webkit-input-placeholder {\n    color: ", ";\n    opacity: 1;\n    transition: opacity 0.2s ease-out;\n  }\n  &:focus::-webkit-input-placeholder {\n    opacity: 0;\n  }\n  &::-moz-placeholder {\n    color: ", ";\n    opacity: 1;\n    transition: opacity 0.2s ease-out;\n  }\n  &:focus::-moz-placeholder {\n    opacity: 0;\n  }\n  &::-ms-input-placeholder {\n    color: ", ";\n    opacity: 1;\n    transition: opacity 0.2s ease-out;\n  }\n  &:focus::-ms-input-placeholder {\n    opacity: 0;\n  }\n\n  &::-webkit-textfield-decoration-container {\n    margin-right: ", ";\n  }\n\n  &::-ms-clear {\n    margin-right: ", ";\n  }\n\n  &::-ms-reveal {\n    display: none;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 2px 2px ", ";\n  }\n"]);
                return a = function() {
                    return e
                }, e
            }
            const l = Object(r.a)("input", ["hasIcon"])(a(), e => e.theme.borderColor, e => e.theme.placeholderColor, e => e.theme.placeholderColor, e => e.theme.placeholderColor, e => e.hasIcon ? "30px" : 0, e => e.hasIcon ? "30px" : 0, e => e.theme.outlineColor);
            t.a = l
        },
        324: function(e, t, n) {
            "use strict";
            var o = n(9),
                r = n(63),
                a = n(5),
                l = n(2),
                i = n.n(l),
                c = n(311),
                s = n(306);

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var p = i.a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, i.a.createElement("path", {
                    d: "M0 0h24v24H0z"
                }), i.a.createElement("path", {
                    fill: "currentColor",
                    fillRule: "nonzero",
                    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                })),
                f = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = d(e, ["svgRef", "title"]);
                    return i.a.createElement("svg", u({
                        viewBox: "0 0 24 24",
                        ref: t
                    }, o), n ? i.a.createElement("title", null, n) : null, p)
                },
                h = i.a.forwardRef((function(e, t) {
                    return i.a.createElement(f, u({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function m() {
                return (m = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function b(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var g = i.a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, i.a.createElement("path", {
                    d: "M0 0h24v24H0z"
                }), i.a.createElement("path", {
                    fill: "currentColor",
                    fillRule: "nonzero",
                    d: "M9.693 7.564l-2.132-2.2A11.763 11.763 0 0 1 12 4.5c5 0 9.27 3.11 11 7.5a11.888 11.888 0 0 1-3.98 5.186l-2.658-2.741a5.002 5.002 0 0 0-6.67-6.881zm-1.425 1.11a5.002 5.002 0 0 0 6.94 7.16l2.255 2.327A11.747 11.747 0 0 1 12 19.5c-5 0-9.27-3.11-11-7.5a11.89 11.89 0 0 1 4.88-5.79l2.388 2.464zm6.596 4.225l-3.673-3.79C11.45 9.04 11.72 9 12 9c1.66 0 3 1.34 3 3 0 .313-.048.615-.136.899zm-1.052 1.494A2.99 2.99 0 0 1 12 15c-1.66 0-3-1.34-3-3 0-.715.249-1.37.664-1.886l4.148 4.28z"
                }), i.a.createElement("path", {
                    fill: "currentColor",
                    fillRule: "nonzero",
                    d: "M4.27 4L3 5.27 18.73 21.5 20 20.23z"
                })),
                v = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = b(e, ["svgRef", "title"]);
                    return i.a.createElement("svg", m({
                        viewBox: "0 0 24 24",
                        ref: t
                    }, o), n ? i.a.createElement("title", null, n) : null, g)
                },
                y = i.a.forwardRef((function(e, t) {
                    return i.a.createElement(v, m({
                        svgRef: t
                    }, e))
                })),
                x = (n.p, n(64));
            const w = Object(a.d)(x.a).withConfig({
                displayName: "ShowPasswordToggle__ShowPasswordToggleRoot",
                componentId: "sc-1k9lgsj-0"
            })(["margin:0;padding:0;border:0;background:none;width:24px;height:24px;color:", ";&:hover{cursor:pointer;opacity:0.7;}& > svg{width:100%;height:100%;}"], e => e.theme.fgColor);
            var O = ({
                    className: e,
                    onClick: t,
                    passwordHidden: n,
                    "data-testid": o
                }) => l.createElement(w, {
                    type: "button",
                    className: e,
                    onClick: t,
                    label: n ? "Show password" : "Hide password",
                    active: !n,
                    "data-testid": o
                }, n ? l.createElement(h, {
                    "aria-hidden": "true"
                }) : l.createElement(y, {
                    "aria-hidden": "true"
                })),
                C = n(26);

            function j() {
                const e = Object(o.a)(["\n  position: absolute;\n  top: ", "px;\n  right: 15px;\n"]);
                return j = function() {
                    return e
                }, e
            }
            class E extends l.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        passwordHidden: !0
                    }
                }
                render() {
                    const e = this.props,
                        t = e.value,
                        n = e.name,
                        o = e.id,
                        a = e.onChange,
                        i = e.forwardedRef,
                        u = e["data-testid"],
                        d = e.labeled,
                        p = e.className,
                        f = e.style,
                        h = Object(r.a)(e, ["value", "name", "id", "onChange", "forwardedRef", "data-testid", "labeled", "className", "style"]),
                        m = "string" === typeof t && t.length > 0,
                        b = d ? s.b : c.a;
                    return l.createElement(k, {
                        className: p,
                        style: f
                    }, l.createElement(b, Object.assign({
                        className: "password-input",
                        autoComplete: "off",
                        "data-testid": u,
                        type: this.state.passwordHidden ? "password" : "text",
                        name: n,
                        id: o,
                        value: t,
                        onChange: a,
                        hasIcon: m,
                        ref: i
                    }, h)), m && l.createElement(R, {
                        className: "password-toggle",
                        labeled: d,
                        "data-testid": u && "".concat(u, "-toggle"),
                        onClick: () => this.setState(e => ({
                            passwordHidden: !e.passwordHidden
                        })),
                        passwordHidden: this.state.passwordHidden
                    }))
                }
            }
            t.a = l.forwardRef((e, t) => l.createElement(E, Object.assign({
                forwardedRef: t
            }, e)));
            const k = a.d.div.withConfig({
                    displayName: "PasswordInput__PasswordInputRoot",
                    componentId: "sc-6sztd5-0"
                })(["position:relative;"]),
                R = Object(C.a)(O, ["labeled"])(j(), e => e.labeled ? 16 : 13)
        },
        330: function(e, t, n) {
            "use strict";
            var o = n(5),
                r = n(62);
            const a = Object(o.d)(r.a).withConfig({
                displayName: "BorderButton",
                componentId: "sc-1xt2biz-0"
            })(["position:relative;color:", ";border:1px solid ", ";background-color:", ";font-size:16px;&:hover{border-color:", ";}"], e => e.active ? e.theme.borderButtonSelectedFgColor : e.theme.fgColor, e => e.active ? e.theme.borderButtonSelectedBorderColor : e.theme.borderColor, e => e.active ? e.theme.borderButtonSelectedBgColor : e.theme.borderButtonBgColor, e => e.disabled ? e.theme.borderColor : e.active ? e.theme.borderButtonSelectedBorderColor : e.theme.borderButtonBorderHoverColor);
            t.a = a
        },
        332: function(e, t, n) {
            "use strict";

            function o(e) {
                return e ? e[0].toUpperCase() + e.substr(1) : ""
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        334: function(e, t, n) {
            "use strict";
            var o = n(9),
                r = n(5),
                a = n(2),
                l = n(330),
                i = n(304),
                c = n(344),
                s = n(26),
                u = n(15);

            function d() {
                const e = Object(o.a)(["\n    & + & {\n      margin-left: ", ";;\n    }\n  "]);
                return d = function() {
                    return e
                }, e
            }

            function p() {
                const e = Object(o.a)(["\n  position: relative;\n\n  margin-top: ", ";\n  & + & {\n    margin-left: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &.focus-visible:focus {\n    box-shadow: 0 0 2px 2px ", ";\n  }\n\n  ", "\n"]);
                return p = function() {
                    return e
                }, e
            }

            function f() {
                const e = Object(o.a)(["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: ", ";\n  justify-content: space-around;\n"]);
                return f = function() {
                    return e
                }, e
            }
            t.a = e => {
                const t = e.value,
                    n = e.onChange,
                    o = e.id,
                    r = e.variants,
                    l = e.className,
                    c = e.layout,
                    s = void 0 === c ? "vertical" : c,
                    u = e.buttonTheme,
                    d = void 0 === u ? "solid" : u,
                    p = e.size,
                    f = e.disabled,
                    v = a.useRef(null);
                Object(i.a)({
                    getGroupElements: () => v.current ? v.current.querySelectorAll("li") : [],
                    options: {
                        keybindings: {
                            next: {
                                key: "horizontal" === s ? "ArrowRight" : "ArrowDown"
                            },
                            prev: {
                                key: "horizontal" === s ? "ArrowLeft" : "ArrowUp"
                            }
                        }
                    }
                }, [v]);
                const y = "outline" === d ? b : m;
                return a.createElement(h, {
                    className: l,
                    ref: v,
                    role: "radiogroup",
                    layout: s,
                    "aria-activedescendant": t && "".concat(o, "-").concat(t)
                }, r.map((r, l) => a.createElement(y, {
                    size: p,
                    layout: s,
                    id: "".concat(o, "-").concat(r.value),
                    key: r.value,
                    role: "radio",
                    "aria-checked": r.value === t,
                    active: r.value === t,
                    disabled: f,
                    onClick: () => {
                        f || (r.locked ? e.onLockedClick && e.onLockedClick(r.value) : n(r.value))
                    },
                    onKeyDown: t => {
                        f || "Enter" !== t.key && " " !== t.key || (t.preventDefault(), r.locked ? e.onLockedClick && e.onLockedClick(r.value) : n(r.value))
                    },
                    tabIndex: r.value === t || !t && 0 === l ? 0 : -1
                }, r.locked && a.createElement(g, null), r.label)))
            };
            const h = Object(s.a)("ul", ["layout"])(f(), e => "horizontal" === e.layout ? "flex" : "block"),
                m = Object(s.a)(e => a.createElement(l.a, Object.assign({
                    as: "li"
                }, e)), ["layout"])(p(), e => "horizontal" === e.layout ? 0 : "16px", e => "horizontal" === e.layout ? "8px" : 0, e => e.theme.outlineColor, Object(u.a)(d(), e => "horizontal" === e.layout ? "4px" : 0)),
                b = Object(r.d)(m).withConfig({
                    displayName: "RadioButtonSelector__OutlineRadioButton",
                    componentId: "sc-1bj17au-0"
                })(["opacity:", ";border:1px solid ", ";background:transparent;color:", ";padding:0 20px;&:hover{border-color:", ";opacity:1;}"], e => e.active ? 1 : .5, e => e.active ? e.disabled ? e.theme.dimmedFgColor : e.theme.fgColor : "transparent", e => e.disabled ? e.theme.dimmedFgColor : e.theme.fgColor, e => e.theme.fgColor),
                g = Object(r.d)(c.a).withConfig({
                    displayName: "RadioButtonSelector__Lock",
                    componentId: "sc-1bj17au-1"
                })(["position:absolute;left:24px;top:13px;color:", ";opacity:0.4;"], e => e.theme.fgColor)
        },
        344: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var o = n(2),
                r = n.n(o);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var i = r.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.40234 7.5C2.29777 7.5 1.40234 8.39543 1.40234 9.5V15.5C1.40234 16.6046 2.29777 17.5 3.40234 17.5H13.4023C14.5069 17.5 15.4023 16.6046 15.4023 15.5V9.5C15.4023 8.39543 14.5069 7.5 13.4023 7.5H3.40234ZM8.40234 14.5C9.50691 14.5 10.4023 13.6046 10.4023 12.5C10.4023 11.3954 9.50691 10.5 8.40234 10.5C7.29777 10.5 6.40234 11.3954 6.40234 12.5C6.40234 13.6046 7.29777 14.5 8.40234 14.5Z",
                    fill: "currentColor"
                }),
                c = r.a.createElement("path", {
                    d: "M11.7355 6.33333C11.7355 7.25162 11.7366 8.49238 11.7355 9.32572C10.0699 9.32572 5.06885 9.32572 5.06885 9.32572C5.06885 9.32572 5.06885 8.17428 5.06885 6.33333C5.06885 4.49238 6.56123 3 8.40218 3C10.2431 3 11.7355 4.49238 11.7355 6.33333Z",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                s = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = l(e, ["svgRef", "title"]);
                    return r.a.createElement("svg", a({
                        width: 17,
                        height: 20,
                        viewBox: "0 0 17 20",
                        fill: "none",
                        ref: t
                    }, o), n ? r.a.createElement("title", null, n) : null, i, c)
                },
                u = r.a.forwardRef((function(e, t) {
                    return r.a.createElement(s, a({
                        svgRef: t
                    }, e))
                }));
            n.p
        },
        359: function(e, t, n) {
            "use strict";
            var o = n(2),
                r = n(12),
                a = n(1),
                l = n(334),
                i = n(332);
            const c = Object(r.values)(a.g).map(e => ({
                label: Object(i.a)(e),
                value: e
            }));
            t.a = e => {
                const t = e.value,
                    n = e.onChange,
                    r = e.className;
                return o.createElement(l.a, {
                    layout: "horizontal",
                    buttonTheme: "outline",
                    size: "small",
                    className: r,
                    variants: c,
                    value: t,
                    onChange: n,
                    id: "gender"
                })
            }
        },
        387: function(e, t, n) {
            "use strict";
            var o = n(5),
                r = n(2),
                a = n(12),
                l = n(1),
                i = n(334),
                c = n(332);
            const s = Object(a.values)(l.k).map(e => ({
                label: Object(c.a)(e),
                value: e
            }));
            t.a = e => {
                const t = e.value,
                    n = e.onChange,
                    o = e.className;
                return r.createElement(u, {
                    layout: "horizontal",
                    buttonTheme: "outline",
                    size: "small",
                    className: o,
                    variants: s,
                    value: t,
                    onChange: n,
                    id: "pronoun"
                })
            };
            const u = Object(o.d)(i.a).withConfig({
                displayName: "PronounSelector__StyledRadioButtonSelector",
                componentId: "sc-16rt99j-0"
            })(["margin:0 auto;max-width:280px;"])
        },
        410: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var o = n(2),
                r = n.n(o);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var i = r.a.createElement("path", {
                    d: "M11.92 16.062A19.91 19.91 0 0 1 0 20V0h20c0 7.668-.155 16.282 4 20-5.176-.054-9.12-1.727-12.08-3.938z"
                }),
                c = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = l(e, ["svgRef", "title"]);
                    return r.a.createElement("svg", a({
                        viewBox: "0 0 24 20",
                        width: 24,
                        height: 20,
                        fill: "currentColor",
                        ref: t
                    }, o), n ? r.a.createElement("title", null, n) : null, i)
                },
                s = r.a.forwardRef((function(e, t) {
                    return r.a.createElement(c, a({
                        svgRef: t
                    }, e))
                }));
            n.p
        },
        432: function(e, t, n) {
            "use strict";
            var o = n(9),
                r = n(30),
                a = n(5),
                l = n(2),
                i = n(22),
                c = n(26),
                s = n(0),
                u = n(410),
                d = n(1);

            function p() {
                const e = Object(o.a)(["\n  color: ", ";\n  position: absolute;\n  top: 0;\n  ", "\n  z-index: 0;\n"]);
                return p = function() {
                    return e
                }, e
            }
            var f = ({
                className: e,
                x: t,
                y: n,
                text: o,
                onResize: a,
                hidden: i,
                phrasePosition: c
            }) => {
                const u = l.useRef(null),
                    d = l.useState(o),
                    p = Object(r.a)(d, 2),
                    f = p[0],
                    g = p[1],
                    v = l.useState(0),
                    y = Object(r.a)(v, 2),
                    x = y[0],
                    w = y[1];
                l.useEffect(() => {
                    let e;
                    return null !== o ? g(o) : e = setTimeout(() => g(null), 200), () => clearTimeout(e)
                }, [o]), l.useLayoutEffect(() => {
                    if (u.current && f) {
                        const e = "left" === c ? t - 16 : window.innerWidth - t - 16,
                            n = Math.min(u.current.offsetWidth, e);
                        a && a(n, u.current.offsetHeight), w(n)
                    }
                }, [f, a, t, c]);
                const O = "left" === c ? {
                    left: t - x,
                    maxWidth: 0 === x ? "auto" : x
                } : {
                    left: t,
                    maxWidth: 0 === x ? "auto" : x
                };
                return l.createElement(h, {
                    className: e,
                    ref: u,
                    style: Object(s.a)(Object(s.a)({}, O), {}, {
                        top: n,
                        transition: i ? "none" : "opacity 0.2s ease-out",
                        opacity: !o || i ? 0 : 1
                    })
                }, l.createElement(b, {
                    phrasePosition: c,
                    "aria-hidden": "true"
                }), l.createElement(m, {
                    role: "alert",
                    "aria-live": "polite",
                    "aria-atomic": "true",
                    "data-testid": "replika-phrase"
                }, f))
            };
            const h = a.d.p.withConfig({
                    displayName: "ReplikaPhrase__ReplikaPhraseRoot",
                    componentId: "ch5ihc-0"
                })(["position:fixed;max-width:170px;color:", ";background:", ";padding:12px 15px;border-radius:18px;z-index:", ";box-shadow:", ";font-size:16px;line-height:21px;transition:opacity 0.2s ease-out;"], e => e.theme.fgColor, e => e.theme.chatBgColor, d.s.ReplikaPhrase, e => e.theme.phraseBoxShadow),
                m = a.d.span.withConfig({
                    displayName: "ReplikaPhrase__ReplikaPhraseText",
                    componentId: "ch5ihc-1"
                })(["position:relative;z-index:1;white-space:pre-wrap;"]),
                b = Object(c.a)(u.a, ["phrasePosition"])(p(), e => e.theme.chatBgColor, e => "left" === e.phrasePosition ? "right: -4px;\n    transform: scale(1, -1);" : "left: -4px;\n    transform: scale(-1, -1);");
            var g = n(20),
                v = n(418),
                y = n.n(v);

            function x() {
                const e = Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ", "px;\n  transition: padding-bottom ", "ms ease-out;\n"]);
                return x = function() {
                    return e
                }, e
            }
            let w;
            t.a = Object(i.i)(({
                className: e,
                style: t,
                phraseText: n,
                phrasePosition: o = "right",
                expiration: a,
                hasCurrentMission: i,
                location: c,
                children: s,
                xOffset: u,
                bottomOffset: p
            }) => {
                const h = l.useRef(null),
                    m = l.useState((e => !!e && new Date(e).getTime() < Date.now())(a)),
                    b = Object(r.a)(m, 2),
                    v = b[0],
                    x = b[1];
                l.useEffect(() => {
                    let e;
                    if (a) {
                        const t = new Date(a).getTime() - Date.now();
                        t > 0 && (e = setTimeout(() => x(!0), t)), x(t <= 0)
                    }
                    return () => {
                        clearTimeout(e)
                    }
                }, [a, v]), l.useEffect(() => {
                    !v && a && w !== a && (Object(g.b)(d.j.PhraseShown, {
                        phrase: n
                    }), w = a)
                }, [v, a, n]);
                const j = l.useState({
                        x: 0,
                        y: 0
                    }),
                    E = Object(r.a)(j, 2),
                    k = E[0],
                    R = E[1],
                    z = l.useState({
                        width: 0,
                        height: 0
                    }),
                    N = Object(r.a)(z, 2),
                    S = N[0],
                    P = N[1],
                    I = l.useState(0),
                    B = Object(r.a)(I, 2),
                    _ = B[0],
                    T = B[1];
                l.useEffect(() => {
                    const e = setTimeout(() => {
                        T(S.height)
                    }, 350);
                    return () => clearTimeout(e)
                }, [S.height]);
                const M = () => {
                    if (h.current) {
                        const e = h.current.getBoundingClientRect();
                        R({
                            x: Math.floor(e.left + e.width / 2 + ("left" === o ? -u : u)),
                            y: Math.floor(e.top + e.height - p)
                        })
                    }
                };
                l.useEffect(M, [_, i, c.pathname]);
                const H = _ !== S.height,
                    L = l.useCallback((e, t) => P({
                        width: e,
                        height: t
                    }), []);
                return l.createElement(O, {
                    className: e,
                    style: t,
                    offset: Math.max(0, S.height - p)
                }, l.createElement(f, {
                    x: k.x,
                    y: k.y,
                    text: v ? null : n,
                    onResize: L,
                    hidden: H,
                    phrasePosition: o
                }), l.createElement(C, {
                    ref: h
                }, l.createElement(y.a, {
                    onPosition: M,
                    onResize: M
                }), s))
            });
            const O = Object(c.a)("div", ["offset"])(x(), e => e.offset, 350),
                C = a.d.div.withConfig({
                    displayName: "ComponentWithPhrase__Wrapper",
                    componentId: "vot3im-0"
                })(["flex:1 0 auto;display:flex;flex-direction:column;"])
        }
    }
]);
//# sourceMappingURL=2.a48eaace.chunk.js.map