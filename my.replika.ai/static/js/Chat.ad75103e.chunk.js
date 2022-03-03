(this.webpackJsonpweb = this.webpackJsonpweb || []).push([
    [9], {
        315: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            }));
            var o = n(9),
                a = n(5),
                i = n(2),
                r = n.n(i),
                l = n(26);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var d = r.a.createElement("defs", null, r.a.createElement("linearGradient", {
                    id: "loading-gradient",
                    x1: "0%",
                    x2: "100%"
                }, r.a.createElement("stop", {
                    offset: "0%",
                    stopColor: "currentColor"
                }), r.a.createElement("stop", {
                    offset: "50%",
                    stopColor: "currentColor"
                }, r.a.createElement("animate", {
                    attributeName: "stop-opacity",
                    dur: "2000ms",
                    values: "1;0.8;0.6;0.6;0.6;0.6;0.6;0.6;0.8;1",
                    repeatCount: "indefinite"
                }), r.a.createElement("animate", {
                    attributeName: "offset",
                    dur: "2000ms",
                    values: "0;0;0;0.1;0.3;0.7;0.9;1;1;1",
                    repeatCount: "indefinite"
                })), r.a.createElement("stop", {
                    offset: "100%",
                    stopColor: "currentColor"
                }))),
                p = r.a.createElement("path", {
                    className: "placeholder-path",
                    fill: "url(#loading-gradient)",
                    d: "M513 531.617c-27.569 3.275-42.893 8.255-56 18.199-5.978 4.535-18.934 17.317-23.966 23.644-13.538 17.021-21.915 32.838-27.826 52.54-4.909 16.361-5.933 21.161-7.685 36-1.518 12.855-.679 38.13 1.892 57 .787 5.775 1.096 10.848.686 11.272-.41.425-2.908-.184-5.55-1.352-5.758-2.548-8.563-1.732-11.133 3.238-3.191 6.172-.12 22.532 7.855 41.842 11.827 28.638 18.599 41.394 24.396 45.955 1.403 1.103 4.691 2.289 7.308 2.636l4.757.631 1.692 6.139c3.581 12.993 12.009 28.063 22.974 41.08l3.899 4.63-1.141 33.984c-1.362 40.583-3.62 59.062-7.903 64.677-3.71 4.864-10.028 8.859-15.255 9.645-2.475.373-9.9 2.434-16.5 4.581-6.6 2.147-15.375 4.406-19.5 5.019-4.125.613-12.45 2.432-18.5 4.041-6.05 1.609-20.444 5.004-31.987 7.544-11.542 2.54-28.867 7.088-38.5 10.108a23628.44 23628.44 0 0 1-26.91 8.418c-5.169 1.612-13.562 4.969-18.652 7.461-8.362 4.096-10.369 5.68-20.822 16.445-10.923 11.248-11.94 12.654-18.232 25.209-9.665 19.286-14.738 38.753-19.88 76.297-3.071 22.425-7.826 39.727-15.486 56.354l-5.827 12.646 3.648 3.828c2.006 2.105 7.882 6.79 13.057 10.41l9.41 6.582-.645 37.59c-.724 42.157-1.508 50.64-12.642 136.719-5.368 41.504-9.225 65.021-18.018 109.871-3.517 17.935-6.014 43.375-6.014 61.262 0 8.688-.848 18.865-2.552 30.614-2.48 17.107-2.54 18.74-2.121 58.362.237 22.419.976 71.137 1.642 108.262 1.159 64.592 1.371 122.669.465 127.315-.234 1.202-.145 4.323.199 6.935l.625 4.75H243.099l-.628-6.25c-.345-3.437-.764-6.711-.931-7.274-.167-.563.1-12.938.594-27.5 1.252-36.926 5.567-76.11 11.451-103.976 16.844-79.774 23.803-117.364 25.919-140 .9-9.625 2.927-25.825 4.506-36 1.579-10.175 3.166-23.675 3.528-30 .361-6.325 1.639-19.375 2.839-29 1.885-15.113 2.105-20.569 1.614-40l-.569-22.5 5.822-33.369c3.202-18.353 7.382-41.438 9.289-51.3 1.907-9.862 3.467-18.899 3.467-20.081 0-3.415 1.547-.93 4.395 7.06 1.562 4.384 2.605 9.435 2.605 12.62 0 16.611 5.156 50.49 15.382 101.07 3.003 14.85 5.769 29.475 6.147 32.5.378 3.025 1.761 11.125 3.074 18 4.686 24.549 2.475 50.717-6.112 72.344-2.437 6.136-5.983 17.456-7.882 25.156-3.471 14.079-5.298 19.53-19.173 57.206-16.317 44.308-21.365 60.236-27.03 85.294-4.168 18.434-5.568 26.605-5.651 33-.088 6.668-.627 9.629-2.501 13.737-3.331 7.302-13.212 67.029-13.236 80.013L260 1920h550v-17.057c0-20.922-.763-26.814-7.568-58.443-2.247-10.442-3.774-20.472-3.96-26-.23-6.843-1.755-14.993-6.36-34-6.027-24.875-11.018-39.904-33.378-100.5-8.535-23.13-11.17-31.321-14.319-44.5-1.445-6.05-4.791-16.625-7.436-23.5-6.859-17.831-9.098-32.355-8.014-52 .44-7.975 1.721-19.225 2.847-25 1.126-5.775 2.346-12.975 2.711-16 .366-3.025 3.314-18.484 6.55-34.353 9.341-45.798 12.617-66.988 14.475-93.647.425-6.099 1.569-12.106 3.196-16.777 1.394-4.003 2.684-7.128 2.867-6.945.498.498 6.705 32.955 13.525 70.722l6.049 33.5-.641 24.5c-.559 21.364-.388 26.292 1.342 38.5 1.091 7.7 2.278 19.175 2.639 25.5.36 6.325 2.16 21.85 3.999 34.5 1.839 12.65 4.055 30.501 4.925 39.669 1.991 20.985 14.559 87.622 27.505 145.831 1.162 5.225 3.69 23.675 5.617 41 3.177 28.555 3.524 34.469 3.717 63.26l.212 31.761 37-.261 37-.26.16-46c.303-87.398 1.093-143.073 2.314-163 1.859-30.356.624-79.1-2.541-100.284-1.727-11.561-2.434-20.554-2.436-31-.003-17.471-2.127-40.918-4.935-54.475-6.902-33.332-13.731-74.597-18.575-112.241-9.552-74.222-11.282-91.489-12.562-125.395-1.013-26.836-.901-48.734.254-49.513 12.644-8.537 24.821-18.259 24.821-19.817 0-.464-2.467-6.234-5.482-12.823-7.111-15.542-12.835-35.746-15.002-52.952-4.45-35.332-10.525-59.554-19.735-78.678-5.727-11.894-6.975-13.677-17.228-24.635-6.079-6.497-13.107-13.079-15.617-14.626-7.705-4.75-20.461-9.804-35.613-14.111-7.96-2.263-15.919-4.719-17.688-5.458-5.602-2.341-20.465-6.22-42.135-10.998-11.55-2.546-24.825-5.699-29.5-7.007-4.675-1.307-12.1-2.882-16.5-3.5-4.4-.618-14.16-3.117-21.688-5.555-7.528-2.438-14.773-4.432-16.1-4.432-2.605 0-8.587-3.999-12.895-8.621-2.125-2.279-3-4.754-4.2-11.879-3.092-18.354-3.611-25.194-4.196-55.243-.329-16.904-.779-31.028-1-31.385-.221-.358 2.368-3.957 5.753-7.998 10.629-12.69 16.07-22.538 20.344-36.823l2.229-7.449 5.791-1.315c3.185-.724 6.397-1.818 7.137-2.432 3.132-2.6 10.446-15.194 15.305-26.355 13.364-30.7 17.118-42.502 17.089-53.723-.02-7.459-1.212-10.179-5.182-11.824-2.202-.912-3.407-.728-6.897 1.052-2.633 1.344-4.582 1.803-5.166 1.219-.585-.585-.12-7.875 1.233-19.331 1.735-14.693 2.065-21.712 1.642-34.893-.631-19.672-2.47-30.744-8.22-49.5-5.422-17.686-9.409-26.317-18.247-39.5-9.416-14.046-17.082-22.983-27.268-31.786-20.677-17.871-38.925-23.183-81.464-23.713-13.2-.165-25.575-.113-27.5.116",
                    fillRule: "evenodd"
                }),
                u = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = s(e, ["svgRef", "title"]);
                    return r.a.createElement("svg", c({
                        width: 1080,
                        height: 1920,
                        viewBox: "0 0 1080 1920",
                        preserveAspectRatio: "xMidYMin slice",
                        ref: t
                    }, o), n ? r.a.createElement("title", null, n) : null, d, p)
                },
                m = r.a.forwardRef((function(e, t) {
                    return r.a.createElement(u, c({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function h() {
                const e = Object(o.a)(["\n  overflow: hidden;\n  height: 100%;\n  ", "\n"]);
                return h = function() {
                    return e
                }, e
            }

            function g() {
                const e = Object(o.a)(["\n  mask-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 1),\n    rgba(0, 0, 0, 1) 85%,\n    rgba(0, 0, 0, 0)\n  );\n\n  /* MS Edge does not support masking; */\n  @supports (-ms-ime-align: auto) {\n    &:before {\n      position: absolute;\n      content: '';\n      display: block;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 15%;\n      background: linear-gradient(\n        to bottom,\n        rgba(255, 255, 255, 0),\n        rgba(255, 255, 255, 1)\n      );\n    }\n  }\n"]);
                return g = function() {
                    return e
                }, e
            }
            t.a = ({
                className: e,
                style: t,
                src: n,
                fadeOutBottom: o = !1
            }) => n ? i.createElement(b, {
                style: t,
                className: e,
                src: n
            }) : i.createElement(v, {
                fadeOutBottom: o
            }, i.createElement(x, {
                style: t,
                className: e
            }));
            const f = Object(a.c)(g()),
                b = a.d.img.withConfig({
                    displayName: "AvatarPlaceholder__AvatarPlaceholderRoot",
                    componentId: "sc-150krtf-0"
                })(["width:100%;height:100%;object-fit:cover;"]),
                v = Object(l.a)("div", ["fadeOutBottom"])(h(), e => e.fadeOutBottom ? f : ""),
                x = Object(a.d)(m).withConfig({
                    displayName: "AvatarPlaceholder__StyledFullHeightIcon",
                    componentId: "sc-150krtf-1"
                })(["width:100%;height:100%;color:", ";opacity:0.15;"], e => e.theme.fgColor)
        },
        321: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return g
            })), n.d(t, "a", (function() {
                return f
            })), n.d(t, "b", (function() {
                return b
            })), n.d(t, "d", (function() {
                return v
            })), n.d(t, "f", (function() {
                return x
            })), n.d(t, "e", (function() {
                return y
            }));
            var o = n(9),
                a = n(5),
                i = n(15),
                r = n(62),
                l = n(26),
                c = n(350),
                s = n(311);

            function d() {
                const e = Object(o.a)(["\n    padding: 25px 16px;\n    max-height: 45vh;\n  "]);
                return d = function() {
                    return e
                }, e
            }

            function p() {
                const e = Object(o.a)(["\n    margin: 0;\n  "]);
                return p = function() {
                    return e
                }, e
            }

            function u() {
                const e = Object(o.a)(["\n    min-width: 4rem;\n  "]);
                return u = function() {
                    return e
                }, e
            }

            function m() {
                const e = Object(o.a)(["\n    justify-content: ", ";\n  "]);
                return m = function() {
                    return e
                }, e
            }

            function h() {
                const e = Object(o.a)(["\n  display: flex;\n  margin-top: 20px;\n  justify-content: flex-end;\n\n  ", "\n"]);
                return h = function() {
                    return e
                }, e
            }
            const g = Object(l.a)("div", ["skipEnabled"])(h(), Object(i.a)(m(), e => e.skipEnabled ? "space-between" : "flex-end")),
                f = Object(a.d)(r.a).withConfig({
                    displayName: "WidgetLayout__SendButton",
                    componentId: "s1msl5-0"
                })(["width:auto;background-color:", ";", ";"], e => e.disabled ? e.theme.widgetButtonDisabledBgColor : e.theme.widgetButtonBgColor, Object(i.a)(u())),
                b = Object(a.d)(r.a).withConfig({
                    displayName: "WidgetLayout__SkipButton",
                    componentId: "s1msl5-1"
                })(["width:auto;color:", ";background-color:transparent;min-width:0;text-decoration:none;padding:0;border-radius:0;height:auto;align-self:center;margin-right:30px;&:hover{text-decoration:underline;}", ";"], e => e.disabled ? e.theme.dimmedFgColor : e.theme.fgColor, Object(i.a)(p())),
                v = a.d.div.withConfig({
                    displayName: "WidgetLayout__WidgetContainer",
                    componentId: "s1msl5-2"
                })(["background-color:", ";padding:25px 25px;flex:0 0 auto;", ""], e => e.theme.widgetBgColor, Object(i.a)(d())),
                x = Object(a.d)(c.a).withConfig({
                    displayName: "WidgetLayout__WidgetTextArea",
                    componentId: "s1msl5-3"
                })(["color:", ";background-color:", ";border:none;&::-webkit-input-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&::-ms-input-placeholder{color:", ";}"], e => e.theme.fgColor, e => e.theme.widgetInputBgColor, e => e.theme.chatInputPlaceholderColor, e => e.theme.chatInputPlaceholderColor, e => e.theme.chatInputPlaceholderColor),
                y = x.withComponent(s.a)
        },
        335: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            const o = 1080,
                a = 1920,
                i = {
                    x: .5,
                    y: .5
                };

            function r(e, t, n = 1) {
                const r = e / o * n,
                    l = {
                        x: r / i.x,
                        y: r / i.y
                    },
                    c = {
                        x: (n - 1) * o / 2,
                        y: (n - 1) * a / 2 + (.44 * a - t / e * o / 2)
                    };
                return {
                    baseScale: i,
                    imageScale: l,
                    offset: c,
                    placeholderPosition: {
                        width: i.x * l.x * o,
                        height: i.y * l.y * a,
                        left: -i.x * l.x * c.x,
                        top: -i.y * l.y * c.y
                    }
                }
            }
        },
        347: function(e, t, n) {
            "use strict";
            var o = n(9),
                a = n(0),
                i = n(5),
                r = n(2),
                l = n(315),
                c = n(26),
                s = n(335);

            function d() {
                const e = Object(o.a)(["\n  overflow: hidden;\n  position: relative;\n\n  ", ";\n"]);
                return d = function() {
                    return e
                }, e
            }
            t.a = ({
                className: e,
                style: t,
                width: n,
                height: o,
                scale: i,
                noFadeOut: l,
                "data-testid": c
            }) => {
                const d = Object(s.a)(n, o, i).placeholderPosition;
                return r.createElement(p, {
                    "data-testid": c,
                    noFadeOut: l,
                    className: e,
                    style: {
                        width: n,
                        height: o
                    }
                }, r.createElement(u, {
                    style: Object(a.a)(Object(a.a)({}, t), d)
                }))
            };
            const p = Object(c.a)("div", ["noFadeOut"])(d(), e => e.noFadeOut ? "" : l.b),
                u = Object(i.d)(l.a).withConfig({
                    displayName: "Avatar2DPlaceholder__StyledAvatarPlaceholder",
                    componentId: "sc-1u7trqn-0"
                })(["position:absolute;"])
        },
        350: function(e, t, n) {
            "use strict";
            var o = n(5),
                a = n(433);
            t.a = Object(o.d)(a.a).withConfig({
                displayName: "TextArea",
                componentId: "sc-1bdd87d-0"
            })(["padding:10px;font-size:16px;line-height:24px;resize:vertical;width:100%;border:1px solid ", ";border-radius:4px;background-color:", ";color:", ";&:focus{outline:none;}&::-webkit-input-placeholder{color:", ";opacity:1;transition:opacity 0.2s ease-out;}&:focus::-webkit-input-placeholder{opacity:0;}&::-moz-placeholder{color:", ";opacity:1;transition:opacity 0.2s ease-out;}&:focus::-moz-placeholder{opacity:0;}&::-ms-input-placeholder{color:", ";opacity:1;transition:opacity 0.2s ease-out;}&:focus::-ms-input-placeholder{opacity:0;}"], e => e.theme.borderColor, e => e.theme.chatBgColor, e => e.theme.fgColor, e => e.theme.placeholderColor, e => e.theme.placeholderColor, e => e.theme.placeholderColor)
        },
        382: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var o = n(2),
                a = n.n(o);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function r(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var l = a.a.createElement("path", {
                    d: "M1 6L5 10C5 10 11.0948 4.67108 15 1",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                c = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = r(e, ["svgRef", "title"]);
                    return a.a.createElement("svg", i({
                        width: 16,
                        height: 11,
                        viewBox: "0 0 16 11",
                        fill: "none",
                        ref: t
                    }, o), n ? a.a.createElement("title", null, n) : null, l)
                },
                s = a.a.forwardRef((function(e, t) {
                    return a.a.createElement(c, i({
                        svgRef: t
                    }, e))
                }));
            n.p
        },
        413: function(e, t, n) {
            "use strict";
            var o = n(30),
                a = n(63),
                i = n(0),
                r = n(5),
                l = n(2),
                c = n(431),
                s = n(306);
            const d = (e, t) => ({
                    option: (t, {
                        isFocused: n
                    }) => Object(i.a)(Object(i.a)({}, t), {}, {
                        color: n ? e.bubbleOutFgColor : e.fgColor,
                        backgroundColor: n ? e.bubbleOutBgColor : e.chatBgColor
                    }),
                    menu: t => Object(i.a)(Object(i.a)({}, t), {}, {
                        backgroundColor: e.chatBgColor
                    }),
                    control: (t, n) => Object(i.a)(Object(i.a)({}, t), {}, {
                        color: e.fgColor,
                        backgroundColor: e.inputBgColor,
                        borderColor: e.inputBgColor,
                        borderRadius: 3,
                        boxShadow: n.isFocused ? "0 0 2px 2px ".concat(e.outlineColor) : "none",
                        ":hover": {
                            borderColor: e.inputBgColor
                        }
                    }),
                    placeholder: t => Object(i.a)(Object(i.a)({}, t), {}, {
                        color: e.placeholderColor,
                        margin: 0,
                        paddingTop: 14
                    }),
                    input: t => Object(i.a)(Object(i.a)({}, t), {}, {
                        color: e.fgColor,
                        height: "42px",
                        marginTop: 14,
                        padding: "0 0 12px 0"
                    }),
                    valueContainer: e => Object(i.a)(Object(i.a)({}, e), {}, {
                        padding: "0 15px",
                        height: 55
                    }),
                    singleValue: n => Object(i.a)(Object(i.a)({}, n), {}, {
                        color: e.fgColor,
                        transform: t ? "translateY(0)" : "translateY(-8px)",
                        margin: 0
                    }),
                    indicatorSeparator: () => ({
                        width: 0
                    })
                }),
                p = r.d.div.withConfig({
                    displayName: "Dropdown__DropdownRoot",
                    componentId: "sc-12pwh0s-0"
                })(["position:relative;"]);
            t.a = Object(r.f)(e => {
                let t = e.theme,
                    n = e.placeholder,
                    i = e.id,
                    r = e.value,
                    u = e.className,
                    m = Object(a.a)(e, ["theme", "placeholder", "id", "value", "className"]);
                const h = l.useState((null === r || void 0 === r ? void 0 : r.value) || ""),
                    g = Object(o.a)(h, 2),
                    f = g[0],
                    b = g[1];
                return l.useEffect(() => {
                    const e = (null === r || void 0 === r ? void 0 : r.value) || "";
                    b(e)
                }, [r]), l.createElement(p, {
                    className: u
                }, l.createElement(c.a, Object.assign({
                    key: f ? "selected" : "no selected",
                    inputId: i,
                    value: r,
                    placeholder: ""
                }, m, {
                    styles: d(t, !!n),
                    isSearchable: !1,
                    onChange: e => {
                        b(e.value), m.onChange && m.onChange(e)
                    }
                })), l.createElement(s.a, {
                    collapsed: !!f,
                    htmlFor: i
                }, n))
            })
        },
        516: function(e, t, n) {
            e.exports = n.p + "static/media/reactions.6d75afc3.png"
        },
        625: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(3),
                a = n.n(o),
                i = n(4),
                r = n(2),
                l = n.n(r),
                c = n(17),
                s = n(9),
                d = n(30),
                p = n(5),
                u = n(13),
                m = n(56),
                h = n(110);
            const g = p.d.div.withConfig({
                displayName: "Spinner__SpinnerRoot",
                componentId: "sc-1c9ztk4-0"
            })(["width:30px;text-align:center;> div{width:8px;height:8px;background-color:", ";border-radius:100%;display:inline-block;animation:sk-bouncedelay 0.7s infinite ease-in-out both;}> div:nth-child(2){animation-delay:-0.32s;}> div:nth-child(3){animation-delay:-0.16s;}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);}40%{-webkit-transform:scale(1);}}@keyframes sk-bouncedelay{0%,80%,100%{transform:scale(0.5);}40%{transform:scale(0.7);}}"], e => e.theme.chatBgColor);
            var f = ({
                    className: e
                }) => r.createElement(g, {
                    className: e
                }, r.createElement("div", null), r.createElement("div", null), r.createElement("div", null)),
                b = n(26),
                v = n(1);

            function x() {
                const e = Object(s.a)(["\n  position: absolute;\n  top: ", ";\n  width: 100%;\n  height: 64px;\n  background-color: ", ";\n  z-index: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n  font-weight: semibold;\n  font-size: 14px;\n  transition: top ", "ms ease-in;\n"]);
                return x = function() {
                    return e
                }, e
            }
            var y = function() {
                const e = Object(c.e)(e => [e.chat.voiceModeEnabled, e.ui.imageUpload.uploadError]),
                    t = Object(d.a)(e, 2),
                    n = t[0],
                    o = t[1],
                    a = r.useState("hidden"),
                    i = Object(d.a)(a, 2),
                    l = i[0],
                    s = i[1],
                    p = r.useState(null),
                    u = Object(d.a)(p, 2),
                    m = u[0],
                    h = u[1];
                return r.useEffect(() => {
                    if ("shown" === l && (null === m || void 0 === m ? void 0 : m.expiration)) {
                        const e = setTimeout(() => s("hiding"), m.expiration);
                        return () => clearTimeout(e)
                    }
                    if ("hiding" === l) {
                        const e = setTimeout(() => {
                            s("hidden"), h(null)
                        }, 200);
                        return () => clearTimeout(e)
                    }
                }, [l, m]), r.useEffect(() => {
                    n ? (s("shown"), h({
                        text: "Call in progress",
                        expiration: 0,
                        spinner: !0
                    })) : s("hiding")
                }, [n]), r.useEffect(() => {
                    o && (s("shown"), h({
                        text: o,
                        expiration: 3e3,
                        spinner: !1
                    }))
                }, [o]), r.createElement(w, {
                    show: "shown" === l
                }, r.createElement("div", null, null === m || void 0 === m ? void 0 : m.text), (null === m || void 0 === m ? void 0 : m.spinner) && r.createElement(C, null))
            };
            const w = Object(b.a)("div", ["show"])(x(), e => e.show ? 0 : "-64px", e => e.theme.notificationBgColor, v.s.Popup, e => e.theme.notificationFgColor, 200),
                C = Object(p.d)(f).withConfig({
                    displayName: "ChatNotification__StyledSpinner",
                    componentId: "q83sn3-0"
                })(["& > div{background-color:", ";}"], e => e.theme.notificationFgColor);
            var E = n(32),
                k = n(12),
                O = n(350),
                j = n(63),
                _ = n(430);
            class I extends r.PureComponent {
                render() {
                    const e = this.props,
                        t = e.className,
                        n = Object(j.a)(e, ["className"]);
                    return r.createElement(_.a, Object.assign({
                        overlayClassName: t
                    }, n))
                }
            }
            var S = Object(p.d)(I).withConfig({
                    displayName: "Tooltip",
                    componentId: "sc-1knnm0k-0"
                })(["&&&{opacity:1;padding:0;}&.rc-tooltip-placement-top .rc-tooltip-arrow,&.rc-tooltip-placement-topLeft .rc-tooltip-arrow,&.rc-tooltip-placement-topRight .rc-tooltip-arrow{border-top-color:transparent;}&.rc-tooltip-placement-bottom .rc-tooltip-arrow,&.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,&.rc-tooltip-placement-bottomRight .rc-tooltip-arrow{border-bottom-color:transparent;}& .rc-tooltip-inner{padding:0;border:none;background-color:transparent;}"]),
                N = n(612);

            function P() {
                return (P = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function M(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var R = l.a.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M15.75 11.81l3.72 3.72a.75.75 0 0 0 1.06-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 1.06 1.06l3.72-3.72v9.69h1.5v-9.69zM15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"
                }),
                B = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = M(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", P({
                        viewBox: "0 0 30 30",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, R)
                },
                D = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(B, P({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function z() {
                return (z = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function T(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var L = l.a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, l.a.createElement("path", {
                    fill: "currentColor",
                    d: "M26 13c0 7.18-5.82 13-13 13S0 20.18 0 13 5.82 0 13 0s13 5.82 13 13       M18.68 12.086h-3.36a2 2 0 1 1 3.36 0zM10.68 12.086H7.32a2 2 0 1 1 3.36 0z       M7 17.017c.777 1.526 3.576 3.069 6 3.069 2.43 0 5.223-1.543 6-3.086-1.684.254-3.684.382-6 .386-2.316.003-4.316-.12-6-.37z"
                })),
                F = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = T(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", z({
                        viewBox: "0 0 26 26",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, L)
                },
                A = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(F, z({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function W() {
                return (W = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function H(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var q = l.a.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "     M22,3c0,-1.6 -1.3,-3 -3,-3l-16,0c-1.6,0 -3,1.3 -3,3l0,18c0,1.6 1.3,3 3,3l16,0c1.6,0 3,-1.3 3,-3l0,-18Z     M3 18.5L8 14l6 4.5 5-4.5v7H3zM18 7a3 3 0 1 1-5.999 0A3 3 0 0 1 18 7"
                }),
                G = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = H(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", W({
                        viewBox: "0 0 22 24",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, q)
                },
                U = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(G, W({
                        svgRef: t
                    }, e))
                }));
            n.p;
            const Y = p.d.label.withConfig({
                    displayName: "UploadImageButton__FileInputLabel",
                    componentId: "qiwfgp-0"
                })(["position:absolute;width:100%;height:100%;z-index:1;cursor:pointer;"]),
                V = p.d.input.withConfig({
                    displayName: "UploadImageButton__FileInput",
                    componentId: "qiwfgp-1"
                })(["width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;&:focus + label{outline-color:", ";outline-style:auto;outline-width:5px;}"], e => e.theme.outlineColor),
                Z = Object(p.d)(U).withConfig({
                    displayName: "UploadImageButton__StyledImageIcon",
                    componentId: "qiwfgp-2"
                })(["width:100%;height:100%;z-index:0;transition:color 0.2s ease-out;"]),
                J = p.d.div.withConfig({
                    displayName: "UploadImageButton__UploadImageButtonRoot",
                    componentId: "qiwfgp-3"
                })(["position:relative;display:flex;align-items:center;"]);
            var K = ({
                className: e,
                onUpload: t,
                disabled: n,
                id: o,
                "data-testid": a,
                children: i
            }) => r.createElement(J, {
                role: "button",
                className: e,
                "data-testid": a
            }, r.createElement(V, {
                accept: "image/*",
                type: "file",
                name: o,
                id: o,
                onChange: e => {
                    return t((n = e.target.files) ? Array.from(n).filter(e => /^image\//.test(e.type)) : []);
                    var n
                },
                disabled: n,
                "aria-label": "Send image to your Replika"
            }), r.createElement(Y, {
                htmlFor: o
            }), null !== i && void 0 !== i ? i : r.createElement(Z, null));

            function X() {
                return (X = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Q(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var $ = l.a.createElement("g", null, l.a.createElement("circle", {
                    cx: 15,
                    cy: 14.9999,
                    r: 9,
                    transform: "rotate(45 15 14.9999)",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), l.a.createElement("circle", {
                    cx: 15,
                    cy: 15.0001,
                    r: 4,
                    transform: "rotate(45 15 15.0001)",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), l.a.createElement("line", {
                    x1: 12.1716,
                    y1: 12.1715,
                    x2: 8.63605,
                    y2: 8.63593,
                    stroke: "currentColor",
                    strokeWidth: 2
                }), l.a.createElement("line", {
                    x1: 21.364,
                    y1: 21.3638,
                    x2: 17.8284,
                    y2: 17.8283,
                    stroke: "currentColor",
                    strokeWidth: 2
                }), l.a.createElement("line", {
                    x1: 12.1716,
                    y1: 17.8282,
                    x2: 8.63605,
                    y2: 21.3637,
                    stroke: "currentColor",
                    strokeWidth: 2
                }), l.a.createElement("line", {
                    x1: 21.364,
                    y1: 8.63582,
                    x2: 17.8284,
                    y2: 12.1714,
                    stroke: "currentColor",
                    strokeWidth: 2
                })),
                ee = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Q(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", X({
                        width: 30,
                        height: 30,
                        viewBox: "0 0 30 30",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, $)
                },
                te = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(ee, X({
                        svgRef: t
                    }, e))
                })),
                ne = (n.p, n(82)),
                oe = n(108),
                ae = n(15),
                ie = n(44),
                re = n(31),
                le = (n(489), n(490), n(20));

            function ce() {
                const e = Object(s.a)(["\n    margin-right: 16px;\n  "]);
                return ce = function() {
                    return e
                }, e
            }

            function se() {
                const e = Object(s.a)(["\n    padding: 16px 10px 16px 16px;\n  "]);
                return se = function() {
                    return e
                }, e
            }

            function de() {
                const e = Object(s.a)(["\n    margin-left: 16px;\n  "]);
                return de = function() {
                    return e
                }, e
            }
            const pe = p.d.div.withConfig({
                    displayName: "ChatDefaultWidget__ChatDefaultWidgetRoot",
                    componentId: "q6sj8t-0"
                })(["display:flex;flex:0 0 auto;flex-direction:row;position:relative;border-top:1px solid ", ";align-items:center;background-color:", ";"], e => e.theme.chatInputBorderColor, e => e.theme.chatInputBgColor),
                ue = p.d.div.withConfig({
                    displayName: "ChatDefaultWidget__StyledTextareaWrapper",
                    componentId: "q6sj8t-1"
                })(["position:relative;width:100%;& div{position:absolute;background-color:", ";width:10px;height:100%;bottom:0;right:0;}"], e => e.theme.chatInputBgColor),
                me = Object(p.d)(ne.a).withConfig({
                    displayName: "ChatDefaultWidget__StyledIconButton",
                    componentId: "q6sj8t-2"
                })(["width:35px;height:35px;flex-shrink:1;opacity:0.5;margin-left:20px;flex-shrink:0;color:", ";&:hover{cursor:pointer;opacity:1;}", ""], e => e.theme.fgColor, Object(ae.a)(de())),
                he = Object(p.d)(O.a).withConfig({
                    displayName: "ChatDefaultWidget__StyledTextarea",
                    componentId: "q6sj8t-3"
                })(["flex:1 0 auto;padding:18px 10px 18px 6px;height:100%;max-height:150px;border:none;background-color:", ";color:", ";", ""], e => e.theme.chatInputBgColor, e => e.theme.fgColor, Object(ae.a)(se())),
                ge = Object(p.d)(ne.a).withConfig({
                    displayName: "ChatDefaultWidget__TextfieldButton",
                    componentId: "q6sj8t-4"
                })(["flex:0 0 auto;color:", ";transition:color 0.2s ease-out,transform 0.2s ease-out;"], e => e.active ? e.theme.fgColor : e.theme.chatInputPlaceholderColor),
                fe = Object(p.d)(ge).attrs({
                    "aria-haspopup": !0
                }).withConfig({
                    displayName: "ChatDefaultWidget__StyledEmojiButton",
                    componentId: "q6sj8t-5"
                })(["width:25px;height:25px;"]),
                be = Object(p.d)(ge).withConfig({
                    displayName: "ChatDefaultWidget__StyledSendButton",
                    componentId: "q6sj8t-6"
                })(["width:24px;height:24px;color:", ";transform:scale(1.25);&:hover{transform:scale(1.35);}&:active{transform:scale(1.2);}"], e => e.theme.fgColor),
                ve = Object(p.d)(K).withConfig({
                    displayName: "ChatDefaultWidget__StyledUploadImageButton",
                    componentId: "q6sj8t-7"
                })(["flex:0 0 auto;width:24px;height:24px;color:", ";"], e => e.theme.chatInputPlaceholderColor),
                xe = p.d.div.withConfig({
                    displayName: "ChatDefaultWidget__Buttons",
                    componentId: "q6sj8t-8"
                })(["display:flex;margin-right:27px;& > * + *{margin-left:20px;}", ""], Object(ae.a)(ce())),
                ye = p.d.div.withConfig({
                    displayName: "ChatDefaultWidget__PickerWrapper",
                    componentId: "q6sj8t-9"
                })(["& .emoji-mart-preview-emoji > span.emoji-mart-emoji > span{background-position:92.1569% 50.9804%;}"]);
            class we extends r.PureComponent {
                constructor(e) {
                    var t;
                    super(e), t = this, this.throttledUpdateChatMessageText = Object(k.throttle)(this.props.updateChatMessageText, 500), this.setMessageText = e => {
                        this.setState({
                            text: e
                        }), this.throttledUpdateChatMessageText(e)
                    }, this.uploadImage = function() {
                        var e = Object(i.a)(a.a.mark((function e(n) {
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, !t.props.chatId) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, t.props.uploadChatImage(n);
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), Object(ie.a)(e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.handleUpload = e => this.uploadImage(e[0]), this.handleAppendEmoji = e => {
                        (e => !e.hasOwnProperty("native"))(e) || this.setMessageText(this.state.text + e.native)
                    }, this.handleTextInputDetected = Object(i.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t.props.chatId || t.props.sendMessageDisabled) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, t.props.textInputDetected();
                                case 4:
                                    e.next = 8;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(1);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 6]
                        ])
                    }))), this.throttledTextInputDetected = Object(k.throttle)(this.handleTextInputDetected, 1e3), this.handleChange = e => {
                        this.throttledTextInputDetected(), this.setMessageText(e.target.value.substr(0, 2e3))
                    }, this.handleKeyDown = e => {
                        "Enter" === e.key && this.props.chatId && (e.metaKey || e.shiftKey || (e.preventDefault(), this.props.sendMessageDisabled || (this.props.onSendMessage(this.state.text), this.setMessageText(""))))
                    }, this.state = {
                        emojiOpened: !1,
                        text: e.messageText
                    }
                }
                render() {
                    var e;
                    const t = this.props,
                        n = t.sendMessageDisabled,
                        o = t.disabled,
                        a = t.bot,
                        i = this.state.text,
                        l = null !== (e = null === a || void 0 === a ? void 0 : a.unlocked_features) && void 0 !== e ? e : [],
                        c = n || -1 === l.indexOf(v.q.SendPhoto);
                    return r.createElement(pe, {
                        "data-testid": "chat-controls"
                    }, r.createElement(me, {
                        "data-testid": "chat-controls-get-help-button",
                        label: "Get help",
                        disabled: o,
                        tabIndex: o ? -1 : 0,
                        onClick: () => {
                            Object(le.b)(v.j.NeedHelpButtonClicked), this.props.setActiveDialog({
                                type: v.f.GetHelp
                            })
                        }
                    }, r.createElement(te, null)), r.createElement(ue, null, r.createElement(he, {
                        tabIndex: o ? -1 : 0,
                        id: "send-message-textarea",
                        "data-testid": "chat-controls-message-textarea",
                        "aria-label": "Message for ".concat(a ? "your Replika ".concat(a.name) : "your Replika"),
                        value: i,
                        autoFocus: !0,
                        placeholder: "Start typing",
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeyDown
                    }), r.createElement("div", null)), r.createElement(xe, null, r.createElement(oe.a, null, r.createElement(S, {
                        placement: "top",
                        trigger: ["click"],
                        overlay: r.createElement(ye, null, r.createElement(N.a, {
                            autoFocus: !0,
                            title: "Pick your Emoji...",
                            onClick: this.handleAppendEmoji
                        })),
                        align: {
                            offset: [0, -10]
                        },
                        onVisibleChange: e => {
                            this.setState({
                                emojiOpened: !!e
                            })
                        }
                    }, r.createElement(fe, {
                        tabIndex: o ? -1 : 0,
                        active: this.state.emojiOpened,
                        "data-testid": "chat-controls-emoji-keyboard-button",
                        "aria-label": "Open emoji keyboard popup"
                    }, r.createElement(A, null)))), i.length > 0 ? !n && r.createElement(be, {
                        tabIndex: o ? -1 : 0,
                        "data-testid": "chat-controls-send-button",
                        onClick: () => {
                            this.props.onSendMessage(i), this.setMessageText("")
                        }
                    }, r.createElement(D, null)) : !c && r.createElement(ve, {
                        id: "upload-image-to-chat",
                        "data-testid": "chat-controls-upload-image-button",
                        onUpload: this.handleUpload,
                        disabled: n
                    })))
                }
            }
            const Ce = {
                uploadChatImage: m.m,
                textInputDetected: m.k,
                updateChatMessageText: m.l,
                setActiveDialog: re.e
            };
            var Ee = Object(c.c)(e => ({
                    chatId: e.ws.persist.chatId,
                    bot: e.profile.persist.bot,
                    messageText: e.chat.persist.messageText
                }), Ce)(we),
                ke = n(613);

            function Oe() {
                const e = Object(s.a)(["\n  &.rc-slider {\n    width: auto;\n    margin: 0 10px;\n  }\n\n  &.rc-slider .rc-slider-rail {\n    width: auto;\n    left: -10px;\n    right: -10px;\n\n    height: ", ";\n    background: ", ";\n  }\n\n  &.rc-slider-disabled {\n    background: none;\n  }\n\n  &.rc-slider .rc-slider-track {\n    background: none;\n  }\n\n  &.rc-slider-disabled .rc-slider-track {\n    background: none;\n  }\n\n  &.rc-slider .rc-slider-step {\n    height: 8px;\n  }\n\n  &.rc-slider .rc-slider-handle {\n    width: 24px;\n    height: 24px;\n    margin-left: -12px;\n    margin-top:", ";\n    border: 0;\n    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25);\n  }\n\n  &.rc-slider .rc-slider-handle:hover {\n    border: 0;\n  }\n\n  &.rc-slider .rc-slider-handle:focus {\n    border: 0;\n    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25);\n  }\n"]);
                return Oe = function() {
                    return e
                }, e
            }
            var je = Object(b.a)(ke.a, [])(Oe(), e => e.gradient ? "8px" : "4px", e => e.disabled ? e.theme.sliderRailDisabledColor : e.gradient ? e.theme.sliderRailGradientColor : e.theme.sliderRailColor, e => e.gradient ? "-8px" : "-10px");

            function _e(e, t = 1) {
                let n, o, a;
                e < .5 ? (o = [233, 37, 54], a = [249, 213, 0], n = 2 * e) : (o = [249, 213, 0], a = [2, 158, 74], n = 2 * e - 1);
                const i = [Math.floor(o[0] * (1 - n) + a[0] * n), Math.floor(o[1] * (1 - n) + a[1] * n), Math.floor(o[2] * (1 - n) + a[2] * n)];
                return "rgba(".concat(i[0], ",").concat(i[1], ",").concat(i[2], ",").concat(t, ")")
            }
            var Ie = n(321);
            n(408);

            function Se() {
                const e = Object(s.a)(["\n    margin: 5px 0px 30px 0;\n  "]);
                return Se = function() {
                    return e
                }, e
            }

            function Ne() {
                const e = Object(s.a)(["\n  flex: 0 0 auto;\n  color: ", ";\n  font-size: 20px;\n  font-weight: bold;\n  margin: 5px 0 30px;\n  text-align: center;\n"]);
                return Ne = function() {
                    return e
                }, e
            }
            const Pe = Object(p.d)(Ie.d).withConfig({
                    displayName: "ChatMoodMeterWidget__ChatMoodMeterWidgetRoot",
                    componentId: "fzrytr-0"
                })(["display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;"]),
                Me = Object(b.a)("div", ["percent"])(Ne(), e => _e(e.percent)),
                Re = p.d.div.withConfig({
                    displayName: "ChatMoodMeterWidget__SliderWrapper",
                    componentId: "fzrytr-1"
                })(["flex:0 0 auto;display:flex;flex-direction:column;margin:5px 0px 30px 0;", ";"], Object(ae.a)(Se())),
                Be = Object(p.d)(je).withConfig({
                    displayName: "ChatMoodMeterWidget__StyledSlider",
                    componentId: "fzrytr-2"
                })(["flex:0 0 auto;"]);
            class De extends r.Component {
                constructor(e) {
                    super(e), this.handleCaptionChange = e => {
                        this.setState({
                            caption: e.target.value
                        })
                    }, this.handleMoodChange = e => {
                        this.setState({
                            score: e
                        })
                    };
                    const t = Math.ceil(e.widget.items.length / 2);
                    this.state = {
                        score: t,
                        caption: ""
                    }
                }
                getMoodTitle(e) {
                    const t = this.props.widget.items.find(t => t.score === e);
                    return null === t || void 0 === t ? void 0 : t.title
                }
                render() {
                    const e = this.props,
                        t = e.widget,
                        n = e.onSkip,
                        o = e.onSubmit,
                        a = e.disabled,
                        i = this.getMoodTitle(this.state.score),
                        l = this.state.score / (t.items.length - 1);
                    return r.createElement(Pe, {
                        "data-testid": "mood-widget"
                    }, r.createElement(Re, null, r.createElement(Me, {
                        percent: l,
                        "data-testid": "mood-widget-title"
                    }, i), r.createElement(Be, {
                        "data-testid": "mood-widget-slider",
                        value: this.state.score,
                        max: t.items.length - 1,
                        onChange: this.handleMoodChange,
                        disabled: a,
                        gradient: !0
                    })), r.createElement(Ie.f, {
                        "data-testid": "mood-widget-caption-textarea",
                        autoFocus: !0,
                        placeholder: "What made you feel this way?",
                        onChange: this.handleCaptionChange,
                        minRows: 1
                    }), r.createElement(Ie.c, {
                        skipEnabled: !0
                    }, r.createElement(Ie.b, {
                        "data-testid": "mood-widget-skip-button",
                        disabled: a,
                        size: "small",
                        onClick: () => {
                            Object(le.b)(v.j.MoodSliderSkipped), n(t.id)
                        }
                    }, "Skip"), r.createElement(Ie.a, {
                        size: "small",
                        "data-testid": "mood-widget-send-button",
                        disabled: a,
                        onClick: () => o(t.id, i || "", this.state.score, this.state.caption)
                    }, "Send")))
                }
            }
            class ze extends r.Component {
                constructor(e) {
                    super(e), this.handleChange = e => {
                        this.setState({
                            text: e.target.value
                        })
                    }, this.isButtonDisabled = () => this.state.text.length < 1, this.handleSubmit = () => {
                        this.props.onSubmit({
                            type: "text",
                            text: this.state.text,
                            widget: {
                                widget_id: this.props.widget.id
                            }
                        })
                    }, this.handleKeyDown = e => {
                        "Enter" === e.key && e.metaKey && this.handleSubmit()
                    }, this.state = {
                        text: ""
                    }
                }
                render() {
                    const e = this.props,
                        t = e.widget,
                        n = t.id,
                        o = t.title,
                        a = t.skip_enabled,
                        i = e.onSkip;
                    return r.createElement(Ie.d, null, r.createElement(Le, {
                        "data-testid": "titled-text-field-widget-title"
                    }, o), r.createElement(Te, {
                        value: this.state.text,
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeyDown,
                        placeholder: "Your answer",
                        "data-testid": "titled-text-field-widget-textarea"
                    }), r.createElement(Ie.c, {
                        skipEnabled: a
                    }, a && r.createElement(Ie.b, {
                        "data-testid": "titled-text-field-widget-skip-button",
                        size: "small",
                        onClick: () => i(n)
                    }, "Skip"), r.createElement(Ie.a, {
                        size: "small",
                        "data-testid": "titled-text-field-widget-send-button",
                        disabled: this.isButtonDisabled(),
                        onClick: this.handleSubmit
                    }, "Send")))
                }
            }
            const Te = Object(p.d)(Ie.f).withConfig({
                    displayName: "ChatTitledTextFieldWidget__StyledTextArea",
                    componentId: "sc-1vx115z-0"
                })(["padding:17px 16px;"]),
                Le = p.d.h3.withConfig({
                    displayName: "ChatTitledTextFieldWidget__Title",
                    componentId: "sc-1vx115z-1"
                })(["font-weight:normal;font-size:16px;color:", ";margin:2px 0 18px;"], e => e.theme.fgColor);
            class Fe extends r.Component {
                constructor(e) {
                    super(e), this.handleSubmit = () => {
                        const e = {
                            widget_id: this.props.widget.id,
                            selected_item_id: this.props.widget.items[this.state.value].id
                        };
                        this.props.onSubmit({
                            type: "text",
                            text: this.props.widget.items[this.state.value].title,
                            widget: e
                        })
                    }, this.handleChange = e => {
                        this.setState({
                            value: e
                        })
                    }, this.state = {
                        value: 0
                    }
                }
                render() {
                    const e = this.props,
                        t = e.widget,
                        n = t.id,
                        o = t.items,
                        a = t.skip_enabled,
                        i = e.onSkip,
                        l = e.skippedWidgetId;
                    return r.createElement(Ie.d, null, r.createElement(We, null, o[this.state.value].title), r.createElement(je, {
                        "data-testid": "scale-widget-slider",
                        value: this.state.value,
                        max: o.length - 1,
                        onChange: this.handleChange,
                        disabled: !1
                    }), !l && r.createElement(Ae, {
                        skipEnabled: a
                    }, a && r.createElement(Ie.b, {
                        "data-testid": "scale-widget-skip-button",
                        size: "small",
                        onClick: () => i(n)
                    }, "Skip"), r.createElement(Ie.a, {
                        size: "small",
                        "data-testid": "scale-widget-send-button",
                        disabled: !1,
                        onClick: this.handleSubmit
                    }, "Send")))
                }
            }
            const Ae = Object(p.d)(Ie.c).withConfig({
                    displayName: "ChatScaleWidget__StyledSubmitContainer",
                    componentId: "bk4onw-0"
                })(["margin-top:30px;"]),
                We = p.d.div.withConfig({
                    displayName: "ChatScaleWidget__Answer",
                    componentId: "bk4onw-1"
                })(["padding:8px 0 20px;text-align:center;font-size:20px;color:", ";"], e => e.theme.fgColor);
            var He = n(330);

            function qe() {
                const e = Object(s.a)(["\n    flex: 1 0 ", ";\n    max-width: ", ";\n  "]);
                return qe = function() {
                    return e
                }, e
            }

            function Ge() {
                const e = Object(s.a)(["\n  margin: ", ";\n  flex: 1 0 auto;\n  width: 100%;\n  max-width: ", ";\n  margin-bottom: 16px;\n  border-color: ", ";\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n\n  ", "\n"]);
                return Ge = function() {
                    return e
                }, e
            }

            function Ue() {
                const e = Object(s.a)(["\n  display: flex;\n  flex-direction: ", ";\n  margin: 0 -5px -6px;\n  flex-wrap: wrap;\n  align-items: ", ";\n  flex: 1 1 100%;\n  justify-content: ", ";\n"]);
                return Ue = function() {
                    return e
                }, e
            }

            function Ye() {
                const e = Object(s.a)(["\n    padding-bottom: 0;\n  "]);
                return Ye = function() {
                    return e
                }, e
            }
            class Ve extends l.a.Component {
                constructor(e) {
                    super(e), this.onSelectItem = e => {
                        const t = this.props.widget,
                            n = t.multiple_selection,
                            o = t.max_item_selected,
                            a = this.state.selectedItems;
                        n ? a.indexOf(e) > -1 ? this.setState({
                            selectedItems: a.filter(t => t !== e)
                        }) : a.length < o ? this.setState({
                            selectedItems: a.concat(e)
                        }) : 1 === o && this.setState({
                            selectedItems: [e]
                        }) : this.setState({
                            selectedItems: [e]
                        })
                    }, this.handleSubmit = () => {
                        const e = {
                                widget_id: this.props.widget.id,
                                selected_item_ids: this.state.selectedItems
                            },
                            t = this.state.selectedItems,
                            n = this.props.widget.items.filter(e => -1 !== t.indexOf(e.id)).map((e, t) => t > 0 ? e.title.toLowerCase() : e.title).join(", ");
                        this.props.onSubmit({
                            type: "text",
                            text: n,
                            widget: e
                        })
                    }, this.isButtonDisabled = () => {
                        const e = this.state.selectedItems,
                            t = this.props.widget,
                            n = t.min_item_selected,
                            o = t.max_item_selected;
                        return e.length < n || e.length > o
                    }, this.state = {
                        selectedItems: []
                    }
                }
                render() {
                    const e = this.props,
                        t = e.widget,
                        n = t.id,
                        o = t.items,
                        a = t.skip_enabled,
                        i = e.onSkip,
                        r = this.state.selectedItems,
                        c = o.find(e => e.title.length > 15) ? "vertical" : o.length < 3 ? "horizontal" : o.find(e => e.title.length > 10) ? "horizontalGrid2" : "horizontalGrid3";
                    return l.a.createElement(Ze, null, l.a.createElement(Je, {
                        layoutType: c
                    }, o.map((e, t) => l.a.createElement(Ke, {
                        key: e.title,
                        "data-testid": "multiselect-widget-".concat(t, "-item-button"),
                        active: r.indexOf(e.id) > -1,
                        layoutType: c,
                        onClick: () => this.onSelectItem(e.id)
                    }, e.title))), l.a.createElement(Ie.c, {
                        skipEnabled: a
                    }, a && l.a.createElement(Ie.b, {
                        "data-testid": "multiselect-widget-skip-button",
                        size: "small",
                        onClick: () => i(n)
                    }, "Skip"), l.a.createElement(Ie.a, {
                        size: "small",
                        "data-testid": "multiselect-widget-send-button",
                        disabled: this.isButtonDisabled(),
                        onClick: this.handleSubmit
                    }, "Send")))
                }
            }
            const Ze = Object(p.d)(Ie.d).withConfig({
                    displayName: "ChatMultiselectWidget__ChatMultiselectWidgetRoot",
                    componentId: "sc-1fttdm4-0"
                })(["flex:1 0 auto;max-height:60vh;overflow-y:scroll;padding-bottom:0;", " &:after{content:'';height:25px;display:block;}"], Object(ae.a)(Ye())),
                Je = Object(b.a)("div", ["layoutType"])(Ue(), e => "vertical" === e.layoutType ? "column" : "row", e => "vertical" === e.layoutType ? "center" : "flex-start", e => "vertical" === e.layoutType ? "center" : "flex-start"),
                Ke = Object(b.a)(He.a, ["layoutType"])(Ge(), e => "vertical" === e.layoutType ? 0 : "0 5px", e => "vertical" === e.layoutType ? "360px" : "horizontal" === e.layoutType ? "250px" : "horizontalGrid2" === e.layoutType ? "calc(50% - 10px)" : "calc(33% - 9px)", e => e.active ? e.theme.borderButtonSelectedBorderColor : e.theme.widgetButtonBorderColor, Object(ae.a)(qe(), e => "vertical" === e.layoutType ? "auto" : "40%", e => "vertical" === e.layoutType ? "400px" : "calc(50% - 10px)"));
            var Xe = e => {
                const t = r.useState(""),
                    n = Object(d.a)(t, 2),
                    o = n[0],
                    a = n[1];
                return r.createElement(Ie.d, null, r.createElement(Ie.e, {
                    value: o,
                    onChange: e => a(e.target.value),
                    placeholder: e.placeholder
                }), r.createElement(Ie.c, null, r.createElement(Ie.a, {
                    onClick: () => {
                        0 !== o.length && (e.onSubmit({
                            type: "text",
                            text: o,
                            widget: {
                                widget_id: e.widget.id
                            }
                        }), a(""))
                    }
                }, "Send")))
            };
            var Qe = ({
                className: e
            }) => r.createElement($e, {
                className: e
            }, r.createElement(et, null));
            const $e = Object(p.d)(Ie.d).withConfig({
                    displayName: "LoadingWidget__LoadingWidgetRoot",
                    componentId: "sc-1ml1fdg-0"
                })(["display:flex;align-items:center;justify-content:center;height:200px;"]),
                et = Object(p.d)(h.a).withConfig({
                    displayName: "LoadingWidget__StyledSpinner",
                    componentId: "sc-1ml1fdg-1"
                })(["width:54px;height:54px;color:", ";"], e => e.theme.dimmedFgColor);
            var tt = n(8),
                nt = n(6),
                ot = n(7),
                at = n(100),
                it = n(16);
            const rt = () => function() {
                    var e = Object(i.a)(a.a.mark((function e(t, n) {
                        var o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = Object(tt.b)(n(), "GET"), e.abrupt("return", Object(ot.a)(v.c.GetSavedChatItemTypes, t, {}, {
                                        onRequest: () => fetch("".concat(nt.a, "/saved_chat_items/item_types"), o)
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                lt = (e, t = 0, n = 25) => function() {
                    var o = Object(i.a)(a.a.mark((function o(i, r) {
                        var l;
                        return a.a.wrap((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    return l = Object(tt.b)(r(), "GET"), o.abrupt("return", Object(ot.a)(v.c.GetSavedChatItemPreviews, i, {
                                        offset: t,
                                        limit: n,
                                        type: e
                                    }, {
                                        onRequest: () => fetch("".concat(nt.a, "/saved_chat_items/previews?").concat(Object(at.a)({
                                            t: e,
                                            offset: t,
                                            limit: n
                                        })), l)
                                    }));
                                case 2:
                                case "end":
                                    return o.stop()
                            }
                        }), o)
                    })));
                    return function(e, t) {
                        return o.apply(this, arguments)
                    }
                }(),
                ct = (e, t) => function() {
                    var n = Object(i.a)(a.a.mark((function n(o, i) {
                        var r;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = Object(tt.b)(i(), "POST", {
                                        ids: e,
                                        type: t
                                    }), n.abrupt("return", Object(ot.a)(v.c.GetSavedChatItems, o, {
                                        ids: e,
                                        type: t
                                    }, {
                                        onRequest: () => fetch("".concat(nt.a, "/saved_chat_items/actions/get_by_ids"), r)
                                    }));
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                st = e => function() {
                    var t = Object(i.a)(a.a.mark((function t(n, o) {
                        var i;
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = Object(tt.b)(o(), "POST", {
                                        ids: e
                                    }), t.abrupt("return", Object(ot.a)(v.c.MarkSavedChatItemRead, n, {
                                        ids: e
                                    }, {
                                        onRequest: () => fetch("".concat(nt.a, "/saved_chat_items/actions/mark_as_read"), i),
                                        onSuccess: () => {
                                            rt()(n, o)
                                        }
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                dt = (e, t) => function() {
                    var n = Object(i.a)(a.a.mark((function n(o, i) {
                        var r;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = Object(tt.b)(i(), "PATCH", t), n.abrupt("return", Object(ot.a)(v.c.UpdateSavedChatItem, o, {
                                        id: e,
                                        update: t
                                    }, {
                                        onRequest: () => fetch("".concat(nt.a, "/saved_chat_items/").concat(e), r)
                                    }));
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                pt = e => function() {
                    var t = Object(i.a)(a.a.mark((function t(n, o) {
                        var i;
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = Object(tt.b)(o(), "DELETE"), t.abrupt("return", Object(ot.a)(v.c.DeleteSavedChatItem, n, {
                                        id: e
                                    }, {
                                        onRequest: () => fetch("".concat(nt.a, "/saved_chat_items/").concat(e), i),
                                        onSuccess: () => {
                                            rt()(n, o)
                                        }
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                ut = (e, t) => function() {
                    var n = Object(i.a)(a.a.mark((function n(o, i) {
                        var r, l, c;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = i(), l = r.ws.persist.chatId) {
                                        n.next = 4;
                                        break
                                    }
                                    throw Error("no chat id");
                                case 4:
                                    return c = {
                                        chatId: l,
                                        itemId: e,
                                        name: t
                                    }, n.abrupt("return", Object(ot.f)(v.c.WsSaveChatItem, o, c, {
                                        onRequest: () => Object(it.c)({
                                            event_name: v.r.SaveChatItem,
                                            payload: {
                                                id: e,
                                                chat_id: l,
                                                name: t
                                            }
                                        }, r),
                                        onSuccess: () => {
                                            rt()(o, i)
                                        }
                                    }));
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }();
            var mt = n(111),
                ht = n.n(mt),
                gt = n(154);
            var ft = e => {
                    const t = e.src,
                        n = e.children,
                        o = Object(c.d)(),
                        a = Object(c.e)(t => {
                            const n = t.image.persist.signedUrlCache.find(t => t.url === e.src);
                            return null === n || void 0 === n ? void 0 : n.signedUrl
                        }),
                        i = r.useState(!1),
                        l = Object(d.a)(i, 2),
                        s = l[0],
                        p = l[1],
                        u = r.useState(a),
                        m = Object(d.a)(u, 2),
                        h = m[0],
                        g = m[1],
                        f = r.useCallback(() => {
                            if (t) {
                                let e = !1;
                                return o(Object(gt.a)(t)).then(({
                                    image_url: t
                                }) => {
                                    e || g(t)
                                }), () => {
                                    e = !0
                                }
                            }
                        }, [t, o]);
                    return r.useEffect(() => {
                        if (t && h && !s) {
                            const e = new Image;
                            let t = !1;
                            return e.onload = () => {
                                t || p(!0), e.src = ""
                            }, e.src = h, e.complete || (e.onerror = e => {
                                console.error(e), f()
                            }), () => {
                                t = !0
                            }
                        }
                    }, [t, h, s, f]), r.useEffect(() => {
                        p(!1)
                    }, [t]), r.useEffect(() => {
                        t && !h && f()
                    }, [t, h, f]), r.createElement(r.Fragment, null, n(h, s))
                },
                bt = n(64);

            function vt() {
                const e = Object(s.a)(["\n  z-index: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: {p => p.maxLines};\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 18px;\n  max-height: 72px;\n  color: ", ";\n  margin-top: 8px;\n"]);
                return vt = function() {
                    return e
                }, e
            }

            function xt() {
                const e = Object(s.a)(["\n  z-index: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: {p => p.maxLines};\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 18px;\n  max-height: 72px;\n  color: ", ";\n  margin-top: 8px;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:after {\n    position: absolute;\n    content: '';\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]);
                return xt = function() {
                    return e
                }, e
            }

            function yt() {
                const e = Object(s.a)(["\n  max-width: 160px;\n  height: 152px;\n  z-index: 0;\n  display: block;\n  position: relative;\n  border: none;\n  border-radius: 4px;\n  overflow: hidden;\n  background: ", ";\n  padding: 30px 16px 12px;\n\n  &:focus-within {\n    box-shadow: 0 0 2px 2px ", ";\n  }\n\n  &:focus-within a:focus {\n    outline: none;\n  }\n\n  & ", " {\n    background: ", ";\n  }\n"]);
                return yt = function() {
                    return e
                }, e
            }
            var wt = function(e) {
                const t = e.className,
                    n = e.tabIndex,
                    o = e.itemType,
                    a = e.isListItem,
                    i = e.imageUrl,
                    l = e.isRead,
                    c = e.caption,
                    s = e.to,
                    d = e.timestamp,
                    p = e["data-testid"],
                    u = o === v.n.Diary && !!i,
                    m = o === v.n.Activity && !!i,
                    h = s ? r.createElement(It, {
                        maxLines: m ? 1 : 4,
                        style: {
                            color: u ? "#FFF" : void 0
                        },
                        tabIndex: n,
                        to: s,
                        "data-testid": p && "".concat(p, "-caption")
                    }, c) : r.createElement(St, {
                        maxLines: m ? 1 : 4,
                        style: {
                            color: u ? "#FFF" : void 0
                        },
                        "data-testid": p && "".concat(p, "-caption")
                    }, c);
                return r.createElement(_t, {
                    className: t,
                    as: a ? "li" : void 0,
                    itemType: o,
                    "data-testid": p
                }, u && r.createElement(ft, {
                    src: i
                }, e => r.createElement(Ot, {
                    style: {
                        backgroundImage: "url(" + e + ")"
                    }
                })), r.createElement(jt, {
                    "data-testid": p && "".concat(p, "-badge")
                }, o), !l && r.createElement(Et, null), m && r.createElement(ft, {
                    src: i
                }, e => r.createElement(kt, {
                    src: e,
                    alt: "".concat(c, " badge"),
                    "data-testid": p && "".concat(p, "-image")
                })), h, r.createElement(Ct, {
                    "data-testid": p && "".concat(p, "-date"),
                    style: {
                        color: u ? "#b0b0b9" : void 0
                    }
                }, ht()(d).format("MMMM D")))
            };
            const Ct = p.d.div.withConfig({
                    displayName: "SavedChatItemCard__SavedChatItemDate",
                    componentId: "sc-1r6nr9i-0"
                })(["position:absolute;color:", ";left:16px;bottom:12px;font-size:13px;"], e => e.theme.savedChatItemDateFgColor),
                Et = p.d.div.withConfig({
                    displayName: "SavedChatItemCard__SavedChatItemNewDot",
                    componentId: "sc-1r6nr9i-1"
                })(["background-color:", ";position:absolute;top:8px;right:8px;width:8px;height:8px;border-radius:4px;"], e => e.theme.newItemBgColor),
                kt = p.d.img.withConfig({
                    displayName: "SavedChatItemCard__SavedChatItemImage",
                    componentId: "sc-1r6nr9i-2"
                })(["width:64px;height:64px;display:block;margin:0 auto;"]),
                Ot = p.d.div.withConfig({
                    displayName: "SavedChatItemCard__SavedChatItemImageBackground",
                    componentId: "sc-1r6nr9i-3"
                })(["position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:center;&:before{content:'';position:absolute;width:100%;height:100%;background:#000;opacity:0.6;}"]),
                jt = p.d.div.withConfig({
                    displayName: "SavedChatItemCard__SavedChatItemBadge",
                    componentId: "sc-1r6nr9i-4"
                })(["position:absolute;top:8px;left:8px;border-radius:4px;padding:2px 8px;font-size:12px;line-height:16px;font-weight:bold;color:", ";text-transform:capitalize;"], e => e.theme.savedChatItemFgColor),
                _t = Object(b.a)("div", ["itemType"])(yt(), e => {
                    var t;
                    return null !== (t = e.theme.savedChatItemBgColors[e.itemType]) && void 0 !== t ? t : e.theme.savedChatItemBgColors.default
                }, e => e.theme.outlineColor, jt, e => {
                    var t;
                    return null !== (t = e.theme.savedChatItemBadgeBgColors[e.itemType]) && void 0 !== t ? t : e.theme.savedChatItemBadgeBgColors.default
                }),
                It = Object(b.a)(bt.a, ["maxLines"])(xt(), e => e.theme.fgColor),
                St = Object(b.a)("span", ["maxLines"])(vt(), e => e.theme.fgColor);
            var Nt = n(109);
            const Pt = {
                [v.n.Song]: "Edit song name",
                [v.n.Story]: "Edit story title",
                [v.n.Session]: "Edit session name",
                [v.n.Diary]: "Edit diary title"
            };
            var Mt = function({
                className: e,
                item: t
            }) {
                const n = Object(c.d)(),
                    o = Pt[t.type],
                    a = t.type !== v.n.Activity;
                return r.useEffect(() => {
                    Object(le.b)(v.j.SavedChatItemsPopupOpened)
                }, [t.id]), r.createElement(Ie.d, {
                    "data-testid": "save-item-widget",
                    className: e
                }, r.createElement(Rt, {
                    "data-testid": "save-item-widget-card",
                    itemType: t.type,
                    isRead: !0,
                    caption: t.name,
                    timestamp: t.timestamp,
                    imageUrl: t.image_url
                }), a && r.createElement(Bt, {
                    "data-testid": "save-item-widget-edit-name-button",
                    onClick: () => {
                        Object(le.b)(v.j.SavedChatItemsPopupEditNamePressed), n(Object(re.e)({
                            type: v.f.EditSavedChatItem,
                            itemId: t.id,
                            source: "widget",
                            itemType: t.type,
                            name: t.name
                        }))
                    }
                }, o), r.createElement(Ie.c, {
                    skipEnabled: !0
                }, r.createElement(Ie.b, {
                    "data-testid": "save-item-widget-skip-button",
                    onClick: () => {
                        var e;
                        Object(le.b)(v.j.SavedChatItemsCancelButtonPressed), n((e = t.id, {
                            type: v.a.CancelSaveChatItem,
                            itemId: e
                        }))
                    }
                }, "Cancel"), r.createElement(Ie.a, {
                    "data-testid": "save-item-widget-save-button",
                    onClick: () => {
                        Object(le.b)(v.j.SavedChatItemsSaveButtonPressed), n(ut(t.id, t.name))
                    }
                }, "Save")))
            };
            const Rt = Object(p.d)(wt).withConfig({
                    displayName: "SaveChatItemWidget__StyledSavedChatItemCard",
                    componentId: "f24z0w-0"
                })(["margin:0 auto 20px;"]),
                Bt = Object(p.d)(Nt.a).withConfig({
                    displayName: "SaveChatItemWidget__EditButton",
                    componentId: "f24z0w-1"
                })(["color:", ";display:block;margin:0 auto 30px;text-decoration:none;font-size:13px;"], e => e.theme.dimmedFgColor);
            var Dt = r.createContext({
                thoughtsShown: !1,
                setThoughtsShown: () => {}
            });
            const zt = Object(E.a)(() => Promise.all([n.e(21), n.e(3)]).then(n.bind(null, 627)), {
                fallback: r.createElement(Qe, null)
            });

            function Tt(e) {
                const t = e.wsStatus,
                    n = e.disabled,
                    o = e.onSendMessage;
                return r.createElement(Ee, {
                    disabled: n,
                    onSendMessage: e => {
                        o({
                            type: "text",
                            text: e
                        })
                    },
                    sendMessageDisabled: n || "connected" !== t
                })
            }

            function Lt(e) {
                const t = e.lastMessage,
                    n = e.skipWidget,
                    o = e.skippedWidgetId,
                    a = e.onSendMessage,
                    i = e.voiceModeEnabled,
                    l = e.wsStatus,
                    s = e.skipExperiment,
                    d = r.useContext(Dt).thoughtsShown,
                    p = (e, t, n, o) => {
                        const i = {
                            widget_id: e,
                            widget_type: "mood_meter",
                            selected_item_score: n,
                            caption: o
                        };
                        Object(le.b)(v.j.MoodAdded, {
                            mood: n,
                            "comment length": o ? o.length : 0
                        }), a({
                            type: "text",
                            text: t,
                            widget: i
                        })
                    },
                    u = null === t || void 0 === t ? void 0 : t.widget,
                    m = null === t || void 0 === t ? void 0 : t.effects,
                    h = !!(null === m || void 0 === m ? void 0 : m.hideInput) || i || d,
                    g = Object(c.e)(e => e.chat.experimentInProgress),
                    f = Object(c.e)(e => e.savedChatItems.persist.chatItemsToSave.length > 0 ? e.savedChatItems.persist.chatItemsToSave[0] : null);
                if (f) return r.createElement(Mt, {
                    disabled: h,
                    item: f
                });
                if (g) return r.createElement(zt, {
                    onSkipExperiment: s,
                    onSubmit: s,
                    disabled: i
                });
                if (!u || o === (null === u || void 0 === u ? void 0 : u.id)) return r.createElement(Tt, {
                    disabled: h,
                    wsStatus: l,
                    onSendMessage: a
                });
                switch (u.type) {
                    case "mood_meter":
                        return Object(le.b)(v.j.MoodSliderDisplayed), r.createElement(De, {
                            widget: u,
                            onSkip: n,
                            onSubmit: p,
                            disabled: h
                        });
                    case "titled_text_field":
                        return r.createElement(ze, {
                            widget: u,
                            onSkip: n,
                            onSubmit: a,
                            disabled: h,
                            skippedWidgetId: o
                        });
                    case "scale":
                        return r.createElement(Fe, {
                            widget: u,
                            onSkip: n,
                            onSubmit: a,
                            disabled: h,
                            skippedWidgetId: o
                        });
                    case "multiselect":
                        return r.createElement(Ve, {
                            widget: u,
                            onSkip: n,
                            onSubmit: a,
                            disabled: h,
                            skippedWidgetId: o
                        });
                    case "user_name":
                        return r.createElement(Xe, {
                            widget: u,
                            onSkip: n,
                            onSubmit: a,
                            disabled: h,
                            skippedWidgetId: o,
                            placeholder: "My first name"
                        });
                    case "bot_name":
                        return r.createElement(Xe, {
                            widget: u,
                            onSkip: n,
                            onSubmit: a,
                            disabled: h,
                            skippedWidgetId: o,
                            placeholder: "Your name will be"
                        });
                    case "app_navigation":
                    case "mission_recommendation":
                    case "select":
                        return null;
                    default:
                        return r.createElement(Tt, {
                            disabled: h,
                            wsStatus: l,
                            onSendMessage: a
                        })
                }
            }
            var Ft = n(62);
            var At = r.forwardRef(({
                item: e,
                onClick: t,
                className: n,
                index: o,
                describedById: a,
                disabled: i
            }, l) => r.createElement(Wt, {
                tabIndex: 0 === o ? 0 : -1,
                "data-testid": "chat-virtual-keyboard-button-" + o,
                className: n,
                onClick: n => t(e, n),
                ref: l,
                "aria-describedby": a || void 0,
                disabled: i
            }, e.title));
            const Wt = Object(p.d)(Ft.a).withConfig({
                displayName: "ChatSelectWidgetItem__ChatSelectWidgetItemRoot",
                componentId: "h1spwn-0"
            })(["color:", ";background-color:", ";"], e => e.theme.vkButtonFgColor, e => e.theme.vkButtonBgColor);
            var Ht = n(304);
            var qt = function(e) {
                const t = e.widget,
                    n = e.message,
                    o = e.disabled,
                    a = e.onSelect,
                    i = r.useRef(null);
                return Object(Ht.a)({
                    getGroupElements: () => i.current ? i.current.getElementsByTagName("button") : [],
                    options: {
                        wrap: !0
                    },
                    focusNodeIndex: 0
                }, [t]), r.createElement(Gt, {
                    ref: i,
                    "aria-label": "Your answer",
                    role: "group"
                }, t.items.map((e, t) => r.createElement(Ut, {
                    index: t,
                    item: e,
                    key: e.id,
                    onClick: a,
                    describedById: n && "message-".concat(n.id, "-text"),
                    disabled: o
                })))
            };
            const Gt = p.d.div.withConfig({
                    displayName: "ChatSelectWidget__SelectWidgetRoot",
                    componentId: "sc-1bl2evl-0"
                })(["flex:0 0 auto;display:flex;flex-direction:column;margin:50px 20px 0;justify-content:center;align-items:center;"]),
                Ut = Object(p.d)(At).withConfig({
                    displayName: "ChatSelectWidget__StyledSelectWidgetItem",
                    componentId: "sc-1bl2evl-1"
                })(["margin-bottom:10px;&:last-child{margin-bottom:0;}"]);
            var Yt = function(e) {
                const t = e.widget,
                    n = e.message,
                    o = e.disabled,
                    a = e.onSelect,
                    i = e.onSkip,
                    l = r.useRef(null);
                return Object(Ht.a)({
                    getGroupElements: () => l.current ? l.current.getElementsByTagName("button") : [],
                    options: {
                        wrap: !0
                    },
                    focusNodeIndex: 0
                }, [t]), r.createElement(Vt, {
                    ref: l,
                    "aria-label": "Your answer",
                    role: "group"
                }, t.items.map((e, t) => r.createElement(Zt, {
                    index: t,
                    item: e,
                    key: e.id,
                    onClick: a,
                    describedById: n && "message-".concat(n.id, "-text"),
                    disabled: o
                })), t.skip_enabled && t.skip_button_name && r.createElement(Zt, {
                    index: t.items.length + 1,
                    item: {
                        id: "skip_widget_id",
                        title: t.skip_button_name || "Skip"
                    },
                    key: "skip_widget_id",
                    onClick: i,
                    describedById: n && "message-".concat(n.id, "-text"),
                    disabled: o
                }))
            };
            const Vt = p.d.div.withConfig({
                    displayName: "ChatAppNavigationWidget__AppNavigationRoot",
                    componentId: "xsqfa7-0"
                })(["flex:0 0 auto;display:flex;flex-direction:column;margin:50px 20px 0;justify-content:center;align-items:center;"]),
                Zt = Object(p.d)(At).withConfig({
                    displayName: "ChatAppNavigationWidget__StyledSelectWidgetItem",
                    componentId: "xsqfa7-1"
                })(["margin-bottom:10px;&:last-child{margin-bottom:0;}"]);

            function Jt(e) {
                return !e.hasOwnProperty("access_type")
            }

            function Kt(e) {
                return "current_mission" === e.meta.type
            }

            function Xt(e) {
                return "recommended_mission" === e.meta.type
            }
            var Qt = n(344);
            var $t = (e, t = []) => !!t.find(t => t.name === e);

            function en() {
                const e = Object(s.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: hidden;\n  max-height: ", ";\n  transition: max-height ", "ms ease-out, opacity ", "ms ease-out;\n  opacity: ", ";\n"]);
                return en = function() {
                    return e
                }, e
            }

            function tn() {
                const e = Object(s.a)(["\n  padding: ", ";\n  position: relative;\n  height: ", ";\n  max-height: ", ";\n  transition: max-height ", "ms ease-out, padding ", "ms ease-out;\n\n  background-size: cover;\n  background-position: center;\n  ", ";\n  color: #fff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: ", ";\n  align-items: center;\n  border-radius: 8px;\n\n  &[tabindex=\"0\"] {\n    cursor: pointer;\n  }\n\n  & > * {\n    z-index: 1;\n  }\n\n  &:before {\n    z-index: 0;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    bottom: 0;\n    border-radius: 8px;\n    background: linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.6) 0%,\n      rgba(0, 0, 0, 0.4) 70%,\n      rgba(0, 0, 0, 0.1) 100%\n    );\n  }\n"]);
                return tn = function() {
                    return e
                }, e
            }
            const nn = {
                in_progress: "In progress"
            };
            var on = e => {
                const t = e.className,
                    n = e.backgroundUrl,
                    o = e.mission,
                    a = e.features,
                    i = e["data-testid"],
                    l = e.expandable,
                    c = e.actionButtonLabel,
                    s = e.actionButtonText,
                    p = e.onActionButtonClick,
                    u = e.statusText,
                    m = r.useState(!1),
                    h = Object(d.a)(m, 2),
                    g = h[0],
                    f = h[1],
                    b = !Jt(o) && "paid" === o.access_type.mission_access && !$t("full_library_access", a),
                    v = o.duration;
                if (l) return r.createElement(an, {
                    className: t,
                    "data-testid": i,
                    backgroundUrl: n,
                    tabIndex: 0,
                    expandable: !0,
                    expanded: g,
                    onClick: () => f(!g),
                    onKeyDown: e => {
                        "Enter" !== e.key && " " !== e.key || f(!g)
                    },
                    "aria-expanded": g
                }, r.createElement(ln, null, u || "Activity of the day"), v && r.createElement(cn, null, v), r.createElement(sn, {
                    "data-testid": i && "".concat(i, "-title")
                }, b ? r.createElement(dn, null) : null, o.title), r.createElement(rn, {
                    expanded: g
                }, r.createElement(pn, {
                    "data-testid": i && "".concat(i, "-description")
                }, o.description), r.createElement(un, {
                    "data-testid": i && "".concat(i, "-button"),
                    label: c,
                    disabled: !g,
                    tabIndex: g ? 0 : -1,
                    onClick: e => {
                        e.preventDefault(), e.stopPropagation(), p(e)
                    }
                }, s))); {
                    const e = u || (Jt(o) ? null : nn[o.progress.type]);
                    return r.createElement(an, {
                        className: t,
                        "data-testid": i,
                        backgroundUrl: n
                    }, e && r.createElement(ln, null, e), v && r.createElement(cn, null, v), r.createElement(sn, {
                        "data-testid": i && "".concat(i, "-title")
                    }, b ? r.createElement(dn, null) : null, o.title), r.createElement(pn, {
                        "data-testid": i && "".concat(i, "-description")
                    }, o.description), r.createElement(un, {
                        "data-testid": i && "".concat(i, "-stop-button"),
                        label: c,
                        onClick: e => {
                            e.preventDefault(), p(e)
                        }
                    }, s))
                }
            };
            const an = Object(b.a)("div", ["backgroundUrl", "expandable", "expanded"])(tn(), e => e.expandable ? e.expanded ? "50px 10px 15px" : "45px 10px" : "25px 10px", e => e.expandable ? "260px" : "300px", e => e.expandable ? e.expanded ? "260px" : "140px" : "auto", 250, 250, e => e.backgroundUrl ? "background-image: url(" + e.backgroundUrl + ")" : "", e => e.expandable ? "center" : "flex-end"),
                rn = Object(b.a)("div", ["expanded"])(en(), e => e.expanded ? "150px" : "0", 250, 250, e => e.expanded ? 1 : 0),
                ln = p.d.div.withConfig({
                    displayName: "MissionCard__Status",
                    componentId: "sc-1szp8ut-0"
                })(["position:absolute;left:8px;top:10px;font-size:12px;line-height:18px;height:24px;padding:2px 6px;border-radius:2px;background:rgba(0,0,0,0.5);"]),
                cn = p.d.div.withConfig({
                    displayName: "MissionCard__Duration",
                    componentId: "sc-1szp8ut-1"
                })(["position:absolute;right:16px;top:10px;font-size:14px;line-height:20px;opacity:0.7;"]),
                sn = p.d.h4.withConfig({
                    displayName: "MissionCard__Title",
                    componentId: "sc-1szp8ut-2"
                })(["font-size:20px;line-height:25px;margin:0;width:250px;"]),
                dn = Object(p.d)(Qt.a).withConfig({
                    displayName: "MissionCard__TitleLock",
                    componentId: "sc-1szp8ut-3"
                })(["vertical-align:-2px;margin-right:8px;"]),
                pn = p.d.p.withConfig({
                    displayName: "MissionCard__Description",
                    componentId: "sc-1szp8ut-4"
                })(["font-size:16px;line-height:20px;margin:10px 0 0;width:270px;min-height:40px;max-height:60px;overflow-y:hidden;"]),
                un = Object(p.d)(Ft.a).withConfig({
                    displayName: "MissionCard__StyledSolidButton",
                    componentId: "sc-1szp8ut-5"
                })(["margin:25px 0 5px;color:", ";background-color:", ";"], e => e.theme.spotlightButtonFgColor, e => e.theme.spotlightButtonBgColor),
                mn = () => function() {
                    var e = Object(i.a)(a.a.mark((function e(t, n) {
                        var o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = Object(tt.b)(n(), "GET"), e.abrupt("return", Object(ot.a)(v.c.GetTracks, t, {}, {
                                        onRequest: () => fetch("".concat(nt.a, "/journey/tracks"), o)
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                hn = e => function() {
                    var t = Object(i.a)(a.a.mark((function t(n, o) {
                        var i;
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = Object(tt.b)(o(), "GET"), t.abrupt("return", Object(ot.a)(v.c.GetTrack, n, {
                                        trackId: e
                                    }, {
                                        onRequest: () => fetch("".concat(nt.a, "/journey/tracks/").concat(e), i)
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                gn = e => function() {
                    var t = Object(i.a)(a.a.mark((function t(n, o) {
                        var i;
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = Object(tt.b)(o(), "GET"), t.abrupt("return", Object(ot.a)(v.c.GetMissions, n, {}, {
                                        onRequest: () => fetch("".concat(nt.a, "/journey/tracks/").concat(e, "/missions"), i)
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                fn = (e, t) => function() {
                    var n = Object(i.a)(a.a.mark((function n(o, i) {
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", Object(ot.f)(v.c.WsStartMission, o, {
                                        missionId: e
                                    }, {
                                        onRequest: () => Object(it.c)({
                                            event_name: v.r.StartMission,
                                            payload: {
                                                mission_id: e,
                                                current_mission_action: t
                                            }
                                        }, i()),
                                        onSuccess: () => {
                                            vn()(o, i)
                                        }
                                    }));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                bn = () => function() {
                    var e = Object(i.a)(a.a.mark((function e(t, n) {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Object(ot.f)(v.c.WsDropMission, t, {}, {
                                        onRequest: () => Object(it.c)({
                                            event_name: v.r.DropMission,
                                            payload: {}
                                        }, n()),
                                        onSuccess: () => {
                                            vn()(t, n)
                                        }
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                vn = () => function() {
                    var e = Object(i.a)(a.a.mark((function e(t, n) {
                        var o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = Object(tt.b)(n(), "GET"), e.abrupt("return", Object(ot.a)(v.c.GetSpotlight, t, {}, {
                                        onRequest: () => fetch("".concat(nt.a, "/journey/spotlight"), o)
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                xn = function() {
                    var e = Object(i.a)(a.a.mark((function e(t, n, o, i) {
                        var r, l, c;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, o(n);
                                case 3:
                                    r = e.sent, l = r.missions, (c = l.find(e => e.id === t)) && i(c), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0), console.error(e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function(t, n, o, a) {
                        return e.apply(this, arguments)
                    }
                }();
            var yn = Object(c.c)(e => ({
                features: e.subscriptions.persist.features
            }), {
                getMissions: gn,
                setActiveDialog: re.e
            })(r.memo((function(e) {
                const t = e.widget,
                    n = e.onSkip,
                    o = e.features,
                    a = e.getMissions,
                    i = r.useState(null),
                    l = Object(d.a)(i, 2),
                    c = l[0],
                    s = l[1],
                    p = !!c && ("paid" === c.access_type.mission_access && !$t("full_library_access", o));
                return r.useEffect(() => {
                    c || xn(t.mission.id, t.mission.track_id, a, s)
                }, [t.mission.id, t.mission.track_id, c, a]), r.createElement(wn, null, r.createElement(En, {
                    mission: c || t.mission,
                    backgroundUrl: t.mission.track_image_url,
                    actionButtonLabel: "start '".concat(t.mission.title, "' mission"),
                    actionButtonText: "Start conversation",
                    features: o,
                    onActionButtonClick: () => {
                        p ? e.setActiveDialog({
                            type: v.f.Subscription,
                            causedBy: "mission_from_chat"
                        }) : (e.onSkip(), e.onStartMission())
                    },
                    statusText: "Recommended"
                }), r.createElement(Cn, {
                    onClick: n
                }, "Let\u2019s just talk"))
            })));
            const wn = p.d.div.withConfig({
                    displayName: "ChatMissionRecommendationWidget__MissionRecommendationRoot",
                    componentId: "z2vrxz-0"
                })(["flex:0 0 auto;display:flex;flex-direction:column;margin:20px;justify-content:center;align-items:center;"]),
                Cn = Object(p.d)(Ft.a).withConfig({
                    displayName: "ChatMissionRecommendationWidget__SkipButton",
                    componentId: "z2vrxz-1"
                })(["margin:16px 0 0;color:", ";background-color:", ";"], e => e.theme.vkButtonFgColor, e => e.theme.vkButtonBgColor),
                En = Object(p.d)(on).withConfig({
                    displayName: "ChatMissionRecommendationWidget__StyledMissionCard",
                    componentId: "z2vrxz-2"
                })([""]);

            function kn(e) {
                const t = e.lastMessage,
                    n = e.skippedWidgetId;
                if (!t) return null;
                const o = null === t || void 0 === t ? void 0 : t.widget;
                if (!o || n === (null === o || void 0 === o ? void 0 : o.id)) return null;
                switch (o.type) {
                    case "select":
                        return r.createElement(qt, {
                            message: t,
                            widget: o,
                            onSelect: t => ((t, n) => {
                                const o = {
                                    widget_id: t,
                                    selected_item_id: n.id
                                };
                                e.onSendMessage({
                                    type: "text",
                                    text: n.title,
                                    widget: o
                                })
                            })(o.id, t),
                            disabled: e.voiceModeEnabled
                        });
                    case "app_navigation":
                        return r.createElement(Yt, {
                            message: t,
                            widget: o,
                            onSelect: t => ((t, n) => {
                                if (null === n || void 0 === n ? void 0 : n.action) switch (n.action.type) {
                                    case "profile":
                                        e.setActiveDialog({
                                            type: v.f.EditProfile
                                        });
                                        break;
                                    case "journey":
                                        e.push(v.m.Conversations);
                                        break;
                                    case "relationship_settings":
                                        e.setActiveDialog({
                                            type: v.f.EditRelationshipStatus
                                        })
                                }
                                e.skipWidget(t)
                            })(o.id, t),
                            onSkip: () => e.skipWidget(o.id),
                            disabled: e.voiceModeEnabled
                        });
                    case "mission_recommendation":
                        return r.createElement(yn, {
                            message: t,
                            widget: o,
                            onSkip: () => e.skipWidget(o.id),
                            onStartMission: () => e.startMission(o.mission.id),
                            disabled: e.voiceModeEnabled
                        });
                    default:
                        return null
                }
            }
            var On = n(27);
            var jn = (e, t) => {
                const n = Object(p.c)(["width:100%;height:100%;"]);
                if (!t || !e) return n;
                const o = Object(p.c)(["width:", ";height:", ";"], 100 / t + "%", 100 * t + "%");
                switch (e) {
                    case 2:
                        return Object(p.c)(["", ";transform:matrix(-1,0,0,1,0,0);"], n);
                    case 3:
                        return Object(p.c)(["", ";transform:matrix(-1,0,0,-1,0,0);"], n);
                    case 4:
                        return Object(p.c)(["", ";transform:matrix(1,0,0,-1,0,0);"], n);
                    case 5:
                        return Object(p.c)(["", ";transform:matrix(0,1,1,0,0,0);"], o);
                    case 6:
                        return Object(p.c)(["", ";transform:matrix(0,1,-1,0,0,0);"], o);
                    case 7:
                        return Object(p.c)(["", ";transform:matrix(0,-1,-1,0,0,0);"], o);
                    case 8:
                        return Object(p.c)(["", ";transform:matrix(0,-1,1,0,0,0);"], o);
                    default:
                        return ""
                }
            };

            function _n() {
                const e = Object(s.a)(["\n  width: ", ";\n  height: 25vh;\n  border: 1px solid ", ";\n  color: ", ';\n  border-radius: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n\n  &:before {\n    z-index: 0;\n    position: absolute;\n    content: "";\n    background-image: url(', ");\n    background-size: cover;\n    background-position: center;\n    ", '\n  }\n\n  &:after {\n    z-index: 1;\n    position: absolute;\n    content: "";\n    width: 100%;\n    height: 100%;\n    background: #000;\n    opacity: ', ";\n  }\n\n  & img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n"]);
                return _n = function() {
                    return e
                }, e
            }
            const In = Object(b.a)("div", ["previewUrl", "previewRatio", "orientation"])(_n(), e => e.previewRatio ? "calc(25vh * ".concat(e.previewRatio, ")") : "300px", e => e.theme.borderColor, e => e.theme.dimmedFgColor, e => e.previewUrl || "", e => jn(e.orientation, e.previewRatio), e => e.previewUrl ? .5 : .1),
                Sn = Object(p.d)(h.a).withConfig({
                    displayName: "ImagePlaceholder__StyledCircleSpinner",
                    componentId: "sc-1ixmwes-0"
                })(["z-index:2;width:70px;height:70px;"]);
            var Nn = ({
                previewUrl: e,
                previewRatio: t,
                orientation: n
            }) => r.createElement(In, {
                previewUrl: e,
                previewRatio: t,
                orientation: n
            }, r.createElement(Sn, null));
            const Pn = e => "service_message" === e.content.type,
                Mn = e => "Customer" === e.meta.nature;
            var Rn = (e, t, n, o, a) => {
                    const i = a[o - 1],
                        r = ht.a.utc(n.meta.timestamp),
                        l = !i || !ht.a.utc(i.meta.timestamp).isSame(r, "day"),
                        c = Mn(n),
                        s = Pn(n),
                        d = t[t.length - 1];
                    if (!d || l || i && c !== Mn(i) || i && s !== Pn(i))
                        if (s) t.push({
                            type: "service_messages",
                            messages: [n]
                        });
                        else {
                            const e = c ? "right" : "left",
                                o = l ? r.calendar(void 0, {
                                    lastDay: "[Yesterday]",
                                    sameDay: "[Today]",
                                    nextDay: "LL",
                                    lastWeek: "LL",
                                    nextWeek: "LL",
                                    sameElse: "LL"
                                }) : void 0;
                            t.push({
                                type: "messages",
                                messages: [n],
                                timestamp: o,
                                align: e
                            })
                        }
                    else d.messages.push(n);
                    return e && o === a.length - 1 && c && t.push({
                        type: "messages",
                        messages: [],
                        timestamp: void 0,
                        align: "left"
                    }), t
                },
                Bn = n(409),
                Dn = n(410);

            function zn() {
                return (zn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Tn(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Ln = l.a.createElement("g", {
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, l.a.createElement("path", {
                    clipRule: "evenodd",
                    d: "M11.635 20.8176C12.3016 20.8176 12.8608 21.5427 13.3963 21.5427C15.0667 21.5427 18.7055 21.5449 20.3623 21.5449C21.1703 21.5449 21.5743 21.4156 21.9782 20.6723C22.3822 19.929 23.5455 15.2681 23.635 14.9995C24.039 13.7875 23.264 12.8176 22.5441 12.8176C20.4196 12.8176 20.621 12.8176 18.5441 12.8176C18.149 12.8176 17.7362 12.8176 17.7362 12.0097C17.8169 10.2722 17.9926 6.99947 16.726 6.99947C15.4593 6.99947 16.1875 7.58597 14.6082 10.6353C13.7918 12.2115 12.9136 12.8176 11.635 12.8176C11.635 14.2711 11.635 19.3631 11.635 20.8176Z"
                }), l.a.createElement("rect", {
                    width: 2.18182,
                    height: 8,
                    transform: "matrix(-1 0 0 1 10.1836 12.8184)"
                })),
                Fn = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Tn(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", zn({
                        width: 32,
                        height: 32,
                        viewBox: "0 0 32 32",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Ln)
                },
                An = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Fn, zn({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Wn() {
                return (Wn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Hn(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var qn = l.a.createElement("g", {
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, l.a.createElement("path", {
                    clipRule: "evenodd",
                    d: "M20.365 10.7273C19.6984 10.7273 19.1392 10.0022 18.6037 10.0022C16.9333 10.0022 13.2945 10 11.6377 10C10.8297 10 10.4257 10.1293 10.0218 10.8726C9.61779 11.6159 8.45449 16.2769 8.36496 16.5455C7.96098 17.7574 8.73596 18.7273 9.45587 18.7273C11.5804 18.7273 11.379 18.7273 13.4559 18.7273C13.851 18.7273 14.2638 18.7273 14.2638 19.5352C14.1831 21.2727 14.0074 24.5455 15.274 24.5455C16.5407 24.5455 15.8125 23.959 17.3918 20.9096C18.2082 19.3334 19.0864 18.7273 20.365 18.7273C20.365 17.2738 20.365 12.1818 20.365 10.7273Z"
                }), l.a.createElement("rect", {
                    width: 2.18182,
                    height: 8,
                    transform: "matrix(1 0 0 -1 21.8164 18.7266)"
                })),
                Gn = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Hn(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Wn({
                        width: 32,
                        height: 32,
                        viewBox: "0 0 32 32",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, qn)
                },
                Un = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Gn, Wn({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Yn() {
                return (Yn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Vn(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Zn = l.a.createElement("g", {
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, l.a.createElement("circle", {
                    cx: 10,
                    cy: 16,
                    r: 2
                }), l.a.createElement("circle", {
                    cx: 16,
                    cy: 16,
                    r: 2
                }), l.a.createElement("circle", {
                    cx: 22,
                    cy: 16,
                    r: 2
                })),
                Jn = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Vn(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Yn({
                        viewBox: "0 0 32 32",
                        width: 32,
                        height: 32,
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Zn)
                },
                Kn = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Jn, Yn({
                        svgRef: t
                    }, e))
                })),
                Xn = (n.p, n(498)),
                Qn = n.n(Xn),
                $n = n(381),
                eo = n.n($n),
                to = n(114);

            function no() {
                const e = Object(s.a)(["\n  background: ", ";\n  border-radius: 8px;\n  box-shadow: 0px 8px 20px ", ";\n  padding: ", ";\n  text-align: center;\n  overflow-y: auto;\n"]);
                return no = function() {
                    return e
                }, e
            }

            function oo() {
                const e = Object(s.a)(["\n    width: 90vw;\n    max-width: 360px;\n  "]);
                return oo = function() {
                    return e
                }, e
            }
            const ao = e => r.createElement(co, Object.assign({
                size: "small"
            }, e));

            function io(e) {
                const t = e.children,
                    n = e.className,
                    o = e.isOpen,
                    a = e.place,
                    i = e.preferPlace,
                    l = e.offset,
                    c = e.noTip,
                    s = e.onRenderContent,
                    d = e.onClose,
                    p = e.size,
                    u = e.focusTrap,
                    m = e.closeOnOuterAction,
                    h = e.showCloseButton,
                    g = r.createElement(lo, {
                        size: p
                    }, h && r.createElement(po, {
                        onClick: d,
                        label: "close popover"
                    }, r.createElement(to.a, null)), s({
                        onClose: d
                    })),
                    f = u ? r.createElement(eo.a, {
                        focusTrapOptions: {
                            clickOutsideDeactivates: !0
                        }
                    }, g) : g,
                    b = r.useCallback(e => {
                        m && (function(e, t) {
                            let n = e;
                            for (; n;) {
                                if (t(n)) return !0;
                                n = n.parentElement
                            }
                            return !1
                        }(e.target, e => e.hasAttribute("data-remainpopup")) || d())
                    }, [d, m]);
                return r.createElement(ro, {
                    tipSize: c ? .01 : void 0,
                    isOpen: o,
                    className: n,
                    onOuterAction: b,
                    body: f,
                    place: a,
                    preferPlace: i,
                    enterExitTransitionDurationMs: 300,
                    offset: l
                }, t)
            }
            const ro = Object(p.d)(Qn.a).withConfig({
                    displayName: "Popover__PopoverRoot",
                    componentId: "sc-1qwqmtp-0"
                })(["z-index:", ";width:270px;& > .Popover-tip{fill:", ";}", ";"], v.s.Popup, e => e.theme.chatBgColor, Object(ae.a)(oo())),
                lo = Object(b.a)("div", ["size"])(no(), e => e.theme.chatBgColor, e => e.theme.shadowColor, e => "small" === e.size ? "15px 15px" : "25px 20px"),
                co = Object(p.d)(Ft.a).withConfig({
                    displayName: "Popover__StyledButton",
                    componentId: "sc-1qwqmtp-1"
                })(["margin:15px 0 5px;width:auto;"]),
                so = Object(p.d)(ao).withConfig({
                    displayName: "Popover__PopoverCancelButton",
                    componentId: "sc-1qwqmtp-2"
                })(["background-color:transparent;color:", ";min-width:0;&:hover{text-decoration:underline;}"], e => e.theme.fgColor),
                po = Object(p.d)(ne.a).withConfig({
                    displayName: "Popover__CloseButton",
                    componentId: "sc-1qwqmtp-3"
                })(["position:absolute;display:block;right:16px;top:16px;color:", ";& > svg{display:block;width:16px;height:16px;}"], e => e.theme.fgColor);
            var uo = n(516),
                mo = n.n(uo);

            function ho() {
                const e = Object(s.a)(["\n  display: inline-block;\n  background-size: 400% 100%;\n  background-image: url('", "');\n  background-position: ", "% 0px;\n"]);
                return ho = function() {
                    return e
                }, e
            }
            const go = [{
                emoji: "\ud83d\ude0d",
                icon: mo.a,
                offset: 0,
                label: "Love",
                name: "Love"
            }, {
                emoji: "\ud83d\ude03",
                icon: mo.a,
                offset: 33.3,
                label: "Funny",
                name: "Funny"
            }, {
                emoji: "\ud83d\ude10",
                icon: mo.a,
                offset: 66.6,
                label: "Meaningless",
                name: "Meaningless"
            }, {
                emoji: "\ud83d\ude2c",
                icon: mo.a,
                offset: 100,
                label: "Offensive",
                name: "Offensive"
            }];

            function fo({
                messageId: e,
                className: t,
                onClose: n,
                permittedActions: o = []
            }) {
                const a = go.filter(e => -1 !== o.indexOf(e.name)),
                    i = r.useRef(null),
                    l = Object(c.d)();
                return Object(Ht.a)({
                    getGroupElements: () => i.current ? i.current.querySelectorAll("button") : [],
                    options: {
                        wrap: !0
                    },
                    focusNodeIndex: 0
                }, [a.length]), r.createElement(xo, {
                    ref: i,
                    role: "list",
                    className: t
                }, a.map((t, o) => r.createElement(yo, {
                    tabIndex: 0 === o ? 0 : -1,
                    key: t.label,
                    onClick: () => {
                        l(Object(m.g)(e, t.name)), n()
                    }
                }, r.createElement(vo, {
                    "aria-hidden": "true",
                    reaction: t
                }), r.createElement(wo, null, t.label))))
            }
            const bo = Object(b.a)("div", ["reaction"])(ho(), e => e.reaction.icon, e => e.reaction.offset),
                vo = Object(p.d)(bo).withConfig({
                    displayName: "ReactionDialogBody__Emoji",
                    componentId: "sc-125vsjr-0"
                })(["margin-right:10px;width:36px;height:36px;"]),
                xo = p.d.div.withConfig({
                    displayName: "ReactionDialogBody__Reactions",
                    componentId: "sc-125vsjr-1"
                })(["width:100%;color:", ";"], e => e.theme.fgColor),
                yo = Object(p.d)(Nt.a).withConfig({
                    displayName: "ReactionDialogBody__Reaction",
                    componentId: "sc-125vsjr-2"
                })(["display:flex;align-items:center;text-decoration:none;&:hover{text-decoration:none;}& + &{margin-top:10px;}"]),
                wo = p.d.span.withConfig({
                    displayName: "ReactionDialogBody__Label",
                    componentId: "sc-125vsjr-3"
                })(["font-size:16px;line-height:20px;font-weight:bold;"]),
                Co = p.d.div.withConfig({
                    displayName: "Thumbs__ThumbsRoot",
                    componentId: "khhgu2-0"
                })(["display:flex;align-items:center;transition:opacity 0.2s ease-out;"]),
                Eo = Object(p.d)(ne.a).withConfig({
                    displayName: "Thumbs__ThumbButton",
                    componentId: "khhgu2-1"
                })(["position:relative;border:none;padding:0;width:32px;height:32px;margin-left:8px;&:before{position:absolute;width:28px;height:28px;content:'';display:block;background-color:", ";border-radius:30px;z-index:-1;}display:flex;align-items:center;justify-content:center;color:", ";transition:color 0.2s ease-out;&:hover{cursor:pointer;color:", ";}&:focus{outline:none;box-shadow:0 0 2px 2px ", ";}& > svg{width:100%;height:100%;}"], e => e.theme.bubbleThumbBgColor, e => e.active ? e.theme.bubbleThumbSelectedFgColor : e.theme.bubbleThumbFgColor, e => e.theme.fgColor, e => e.theme.outlineColor),
                ko = p.d.h3.withConfig({
                    displayName: "Thumbs__HintTitle",
                    componentId: "khhgu2-2"
                })(["line-height:23px;font-size:16px;font-weight:600;margin:0;color:", ";"], e => e.theme.fgColor),
                Oo = p.d.p.withConfig({
                    displayName: "Thumbs__HintDescription",
                    componentId: "khhgu2-3"
                })(["line-height:23px;font-size:16px;margin:15px 0 5px;color:", ";"], e => e.theme.lightFgColor),
                jo = p.d.h3.withConfig({
                    displayName: "Thumbs__ReactionMenuTitle",
                    componentId: "khhgu2-4"
                })(["margin:0;color:", ";font-weight:normal;font-size:16px;line-height:20px;text-align:left;margin-right:40px;"], e => e.theme.dimmedFgColor),
                _o = Object(p.d)(fo).withConfig({
                    displayName: "Thumbs__StyledReactionDialogBody",
                    componentId: "khhgu2-5"
                })(["margin:16px 0;"]),
                Io = Object(p.d)(bo).withConfig({
                    displayName: "Thumbs__Emoji",
                    componentId: "khhgu2-6"
                })(["width:20px;height:20px;"]),
                So = Object(p.d)(io).withConfig({
                    displayName: "Thumbs__StyledPopover",
                    componentId: "khhgu2-7"
                })(["& .Popover-body{transform:translateX(40%);}"]);
            class No extends r.PureComponent {
                constructor(...e) {
                    super(...e), this.state = {
                        isHintOpen: !1,
                        isReactionMenuOpen: !1
                    }, this.handleClose = () => this.setState({
                        isReactionMenuOpen: !1
                    }), this.renderThumb = e => {
                        const t = this.props,
                            n = t.reaction,
                            o = t.messageId,
                            a = t.hintMessageReaction,
                            i = t.active,
                            l = t.onFocus,
                            c = t.onBlur,
                            s = i && (null === a || void 0 === a ? void 0 : a.message_id) === o && a.reaction === e,
                            d = ((e, t, n, o, a) => {
                                switch (e) {
                                    case "Upvote":
                                        return r.createElement(Eo, {
                                            "data-testid": "chat-message-upvote-button",
                                            label: "thumb up",
                                            tabIndex: -1,
                                            key: "upvote",
                                            onClick: () => {
                                                n(t ? void 0 : e)
                                            },
                                            onFocus: o,
                                            onBlur: a,
                                            active: t,
                                            "aria-pressed": t
                                        }, r.createElement(An, {
                                            "aria-hidden": "true"
                                        }));
                                    case "Downvote":
                                        return r.createElement(Eo, {
                                            "data-testid": "chat-message-downvote-button",
                                            label: "thumb down",
                                            tabIndex: -1,
                                            key: "downvote",
                                            onClick: () => {
                                                n(t ? void 0 : e)
                                            },
                                            onFocus: o,
                                            onBlur: a,
                                            active: t,
                                            "aria-pressed": t
                                        }, r.createElement(Un, {
                                            "aria-hidden": "true"
                                        }));
                                    default:
                                        const i = go.find(t => t.name === e);
                                        return !(!i || !t) && r.createElement(Eo, {
                                            "data-testid": "chat-message-".concat(i.name.toLowerCase(), "-button"),
                                            label: i.name,
                                            tabIndex: -1,
                                            key: i.name,
                                            onClick: () => {
                                                n(t ? void 0 : e)
                                            },
                                            onFocus: o,
                                            onBlur: a,
                                            active: t,
                                            "aria-pressed": t
                                        }, r.createElement(Io, {
                                            "aria-hidden": "true",
                                            reaction: i
                                        }))
                                }
                            })(e, n === e, this.handleThumbClick, l, c);
                        return s && d ? r.createElement(io, {
                            preferPlace: "above",
                            offset: 10,
                            isOpen: this.state.isHintOpen,
                            onClose: () => this.setState({
                                isHintOpen: !1
                            }),
                            onRenderContent: this.renderHint
                        }, d) : d
                    }, this.renderHint = () => {
                        const e = this.props.bot;
                        return r.createElement(r.Fragment, null, r.createElement(ko, null, "Keep the feedback coming!"), r.createElement(Oo, null, (t = (null === e || void 0 === e ? void 0 : e.name) || "your Replika", "Feedback helps ".concat(t, " improve, so let her know when messages look good or don\u2019t make sense."))), r.createElement(ao, {
                            onClick: () => this.setState({
                                isHintOpen: !1
                            })
                        }, "OK"));
                        var t
                    }, this.handleThumbClick = e => {
                        const t = this.props.messageId;
                        this.props.setMessageReaction(t, e)
                    }
                }
                componentWillUnmount() {
                    this.props.onBlur()
                }
                componentDidUpdate(e) {
                    if (this.props.reaction === e.reaction && this.props.active === e.active || this.props.onBlur(), this.props.hintMessageReaction !== e.hintMessageReaction) {
                        var t;
                        const e = (null === (t = this.props.hintMessageReaction) || void 0 === t ? void 0 : t.message_id) === this.props.messageId;
                        this.setState({
                            isHintOpen: e
                        })
                    }
                }
                render() {
                    var e;
                    const t = this.props,
                        n = t.className,
                        o = t.permittedActions,
                        a = t.reaction,
                        i = t.active,
                        l = t.setActiveDialog,
                        c = t.messageId,
                        s = t.bot,
                        d = (a ? o.filter(e => a === e) : o).map(this.renderThumb).filter(Boolean);
                    if (0 === d.length) return null;
                    const p = o.filter(e => {
                            return !("Upvote" === (t = e) || "Downvote" === t);
                            var t
                        }).length > 0,
                        u = null !== (e = null === s || void 0 === s ? void 0 : s.name) && void 0 !== e ? e : "your Replika",
                        m = "What do you think about ".concat(u, " phrase?"),
                        h = !a && p;
                    return r.createElement(Co, {
                        style: {
                            opacity: i ? 1 : 0,
                            pointerEvents: i ? "auto" : "none"
                        },
                        className: n
                    }, d, h && r.createElement(oe.b, null, r.createElement(So, {
                        offset: 10,
                        size: "small",
                        preferPlace: "above",
                        place: "column",
                        isOpen: this.state.isReactionMenuOpen,
                        onClose: this.handleClose,
                        focusTrap: !0,
                        showCloseButton: !0,
                        closeOnOuterAction: !0,
                        onRenderContent: () => r.createElement(r.Fragment, null, r.createElement(jo, null, m), r.createElement(_o, {
                            permittedActions: o,
                            messageId: c,
                            onClose: this.handleClose
                        }))
                    }, r.createElement(Eo, {
                        "data-testid": "chat-message-more-actions-button",
                        tabIndex: -1,
                        onClick: () => this.setState({
                            isReactionMenuOpen: !0
                        })
                    }, r.createElement(Kn, null)))), h && r.createElement(oe.c, null, r.createElement(Eo, {
                        "data-testid": "chat-message-more-actions-button",
                        tabIndex: -1,
                        onClick: () => l({
                            type: v.f.Reaction,
                            messageId: c,
                            permittedActions: o
                        })
                    }, r.createElement(Kn, null))))
                }
            }
            var Po = Object(c.c)((e, t) => ({
                bot: e.profile.persist.bot,
                hintMessageReaction: e.chat.hintMessageReaction,
                reaction: e.chat.messageReactions[t.messageId]
            }), {
                setMessageReaction: m.g,
                setActiveDialog: re.e
            })(No);

            function Mo() {
                const e = Object(s.a)(["\n  width: 160px;\n  position: absolute;\n  ", ": 0;\n  transform: translateX(", ");\n\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n  overflow: hidden;\n"]);
                return Mo = function() {
                    return e
                }, e
            }
            const Ro = p.d.div.withConfig({
                    displayName: "MessageHover__MessageHoverRoot",
                    componentId: "sc-6lkiln-0"
                })(["display:flex;align-items:center;"]),
                Bo = Object(b.a)("div", ["align"])(Mo(), e => "right" === e.align ? "left" : "right", e => "right" === e.align ? "-100%" : "100%", e => "right" === e.align ? "flex-end" : "flex-start"),
                Do = Object(p.d)(Po).withConfig({
                    displayName: "MessageHover__StyledThumbs",
                    componentId: "sc-6lkiln-1"
                })(["flex:0 0 auto;padding:5px 0;"]);
            var zo = e => {
                const t = e.className,
                    n = e.actions,
                    o = e.children,
                    a = e.timestamp,
                    i = e.align,
                    l = e.label,
                    s = e.messageId,
                    p = e.isLastMessage,
                    u = r.useRef(null),
                    m = r.useState(!1),
                    h = Object(d.a)(m, 2),
                    g = h[0],
                    f = h[1],
                    b = r.useState(!1),
                    v = Object(d.a)(b, 2),
                    x = v[0],
                    y = v[1],
                    w = r.useState(!1),
                    C = Object(d.a)(w, 2),
                    E = C[0],
                    k = C[1],
                    O = r.useState(!1),
                    j = Object(d.a)(O, 2),
                    _ = j[0],
                    I = j[1],
                    S = r.useContext(Dt).thoughtsShown,
                    N = Object(c.e)(e => s && e.chat.messageReactions[s]),
                    P = Object(c.e)(e => e.chat.showMessageActions === s);
                let M;
                r.useEffect(() => {
                    x && u.current && document.activeElement === document.body && u.current.focus()
                }, [N, x]), r.useEffect(() => {
                    if (P) I(!0);
                    else {
                        if (!(g || x || E)) {
                            const e = setTimeout(() => {
                                I(!1)
                            }, 10);
                            return () => clearTimeout(e)
                        }
                        I(!0)
                    }
                }, [g, x, E, P]), Object(Ht.a)({
                    getGroupElements: () => u.current && !S ? [u.current, ...Array.from(u.current.getElementsByTagName("button"))] : [],
                    options: {
                        keybindings: {
                            next: {
                                key: "ArrowRight"
                            },
                            prev: {
                                key: "ArrowLeft"
                            }
                        }
                    }
                }, [u, _, N, S]);
                return r.createElement(Ro, {
                    ref: u,
                    id: "message-".concat(s),
                    className: t,
                    onMouseEnter: () => {
                        clearTimeout(M), M = setTimeout(() => f(!0), 300)
                    },
                    onMouseLeave: () => {
                        clearTimeout(M), M = setTimeout(() => f(!1), 100)
                    },
                    tabIndex: p && !S ? 0 : -1,
                    onFocus: () => y(!0),
                    onBlur: () => y(!1),
                    "aria-label": "".concat(l, ", at ").concat(a)
                }, o, r.createElement(Bo, {
                    align: i
                }, n && s && !S && r.createElement(Do, {
                    active: _,
                    permittedActions: n,
                    messageId: s,
                    onFocus: () => k(!0),
                    onBlur: () => k(!1)
                })))
            };
            const To = Object(p.d)(zo).withConfig({
                    displayName: "BubbleText__BubbleTextRoot",
                    componentId: "sc-1bng39n-0"
                })(["position:relative;max-width:100%;border-radius:20px;background-color:", ";z-index:1;padding:10px 19px 11px;color:", ";line-height:1.25;& > svg{color:", ";}&:focus{background-color:", ";}&:focus > svg{color:", ";}"], e => "right" === e.align ? e.theme.bubbleOutBgColor : e.theme.bubbleInBgColor, e => "right" === e.align ? e.theme.bubbleOutFgColor : e.theme.bubbleInFgColor, e => "right" === e.align ? e.theme.bubbleOutBgColor : e.theme.bubbleInBgColor, e => "right" === e.align ? e.theme.bubbleSelectedOutBgColor : e.theme.bubbleSelectedInBgColor, e => "right" === e.align ? e.theme.bubbleSelectedOutBgColor : e.theme.bubbleSelectedInBgColor),
                Lo = Object(p.d)(Dn.a).withConfig({
                    displayName: "BubbleText__StyledTail",
                    componentId: "sc-1bng39n-1"
                })(["position:absolute;width:21px;height:18px;bottom:0px;transform:", ";", ":-3px;"], e => "right" === e.align ? "none" : "rotateY(180deg)", e => e.align),
                Fo = p.d.div.withConfig({
                    displayName: "BubbleText__BubbleTextContent",
                    componentId: "sc-1bng39n-2"
                })(["white-space:pre-wrap;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;max-width:100%;"]);
            var Ao = r.memo(e => {
                const t = e.messageId,
                    n = e.className,
                    o = e.children,
                    a = e.align,
                    i = e.hasTail,
                    l = e.actions,
                    c = e.timestamp,
                    s = e.isLastMessage,
                    p = e.botName,
                    u = e.label,
                    m = e.messageLength,
                    h = r.useRef(null),
                    g = r.useState("auto"),
                    f = Object(d.a)(g, 2),
                    b = f[0],
                    v = f[1],
                    x = () => {
                        if (h.current && m > 10) {
                            if (h.current.parentNode.parentNode.offsetWidth < 100) return void setTimeout(x, 100);
                            const e = Array.from(h.current.childNodes).reduce((e, t) => Math.max(e, t.offsetWidth), 0);
                            h.current.offsetHeight > 20 && h.current.offsetWidth > 0 && ("auto" === b || Math.abs(e - b) > 10) && v(e)
                        }
                    };
                r.useLayoutEffect(x, [h.current, b]), r.useEffect(() => {
                    const e = Object(k.debounce)(() => {
                        v("auto")
                    }, 100);
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [v]);
                const y = "left" === a ? p ? "".concat(p, " says:") : "your Replika says:" : "you say:";
                return r.createElement(To, {
                    messageId: t,
                    className: n,
                    align: a,
                    actions: l,
                    timestamp: c,
                    isLastMessage: s,
                    label: u ? y + " " + u : void 0
                }, i && r.createElement(Lo, {
                    align: a
                }), r.createElement(Fo, {
                    ref: h,
                    style: {
                        width: b
                    },
                    "data-testid": "chat-message-text",
                    "data-author": "left" === a ? "replika" : "user"
                }, o))
            });
            const Wo = Object(p.d)(zo).withConfig({
                    displayName: "BubbleImage__BubbleImageRoot",
                    componentId: "p6dnrz-0"
                })(["position:relative;z-index:1;max-width:100%;cursor:pointer;&:focus{border-radius:17px;background-color:", ";}&:focus img{box-shadow:0 0 0 2px ", ";}"], e => e.theme.bubbleImageSelectedBgColor, e => e.theme.bubbleImageSelectedBgColor),
                Ho = p.d.img.withConfig({
                    displayName: "BubbleImage__StyledImage",
                    componentId: "p6dnrz-1"
                })(["display:block;border:none;max-width:100%;max-height:25vh;border-radius:17px;overflow:hidden;height:", ";"], e => e.isEmpty ? "25vh" : "auto"),
                qo = Object(p.d)(Nn).withConfig({
                    displayName: "BubbleImage__StyledImagePlaceholder",
                    componentId: "p6dnrz-2"
                })(["width:300px;"]);
            class Go extends r.PureComponent {
                render() {
                    const e = this.props,
                        t = e.className,
                        n = e.imageUrl,
                        o = e.align,
                        a = e.timestamp,
                        i = e.actions,
                        l = e.messageId,
                        c = e.isLastMessage,
                        s = e.botName,
                        d = e.imagePreview,
                        p = e.onClick,
                        u = "left" === o ? s ? "".concat(s, " sent you an image") : "Replika sent you an image" : "you sent an image",
                        m = d ? d.orientation > 4 && d.orientation < 9 ? d.height / d.width : d.width / d.height : 0;
                    return r.createElement(Wo, {
                        messageId: l,
                        className: t,
                        align: o,
                        timestamp: a,
                        actions: i,
                        isLastMessage: c,
                        label: u
                    }, r.createElement(ft, {
                        src: n
                    }, (e, t) => t && e ? r.createElement(Ho, {
                        alt: u,
                        "data-testid": "chat-message-image",
                        "data-author": "left" === o ? "replika" : "user",
                        src: e,
                        isEmpty: !t,
                        onClick: () => p(e)
                    }) : d ? r.createElement(qo, {
                        previewUrl: d.src,
                        previewRatio: m,
                        orientation: d.orientation
                    }) : r.createElement(qo, null)))
                }
            }
            var Uo = Go;
            const Yo = /(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?/i,
                Vo = e => {
                    const t = e.match(Yo);
                    return null === t || void 0 === t ? void 0 : t[0]
                },
                Zo = p.d.div.withConfig({
                    displayName: "BubbleMediaPreview__PreviewTitle",
                    componentId: "sc-7602nw-0"
                })(["margin-top:10px;font-weight:bold;line-height:1.18em;"]),
                Jo = p.d.a.withConfig({
                    displayName: "BubbleMediaPreview__CoverLink",
                    componentId: "sc-7602nw-1"
                })(["margin-top:10px;margin-bottom:8px;display:block;background-image:", " background-size:cover;background-position:center;height:25vh;max-height:300px;width:100%;"], e => e.img ? "url(".concat(e.img, ");") : "linear-gradient(\n    to top,\n    #020024 0%,\n    #090979 40%,\n    #197dc0 100%\n  );"),
                Ko = p.d.div.withConfig({
                    displayName: "BubbleMediaPreview__EmptyImage",
                    componentId: "sc-7602nw-2"
                })(["margin-top:10px;margin-bottom:8px;background-image:linear-gradient( to top,#020024 0%,#090979 40%,#197dc0 100% );height:25vh;width:100%;"]),
                Xo = p.d.div.withConfig({
                    displayName: "BubbleMediaPreview__PreviewDescription",
                    componentId: "sc-7602nw-3"
                })(["font-size:13px;line-height:1.54em;margin-top:5px;"]),
                Qo = p.d.a.withConfig({
                    displayName: "BubbleMediaPreview__PreviewSiteName",
                    componentId: "sc-7602nw-4"
                })(["color:inherit;opacity:0.4;font-size:13px;line-height:1.54em;margin-top:5px;&:focus{opacity:1;}"]);
            var $o = ({
                mediaPreviewUrl: e,
                mediaPreview: t,
                className: n
            }) => {
                if (!t) return r.createElement("div", {
                    className: n
                }, r.createElement(Ko, null), r.createElement(Zo, null, "..."), r.createElement(Qo, {
                    href: e,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, e));
                switch (t.type) {
                    case "object":
                    case "video":
                        return r.createElement("div", {
                            className: n
                        }, r.createElement(Jo, {
                            "aria-hidden": !0,
                            tabIndex: -1,
                            img: t.content.preview_image,
                            href: t.content.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }), r.createElement(Zo, null, t.content.title), r.createElement(Xo, null, t.content.description), r.createElement(Qo, {
                            href: t.content.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": t.content.description
                        }, t.content.site_name));
                    case "image":
                        return r.createElement("div", {
                            className: n
                        }, r.createElement(Jo, {
                            img: t.content.url,
                            href: t.content.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }));
                    default:
                        return Object(ie.a)("Unknown media: ".concat(JSON.stringify(t))), null
                }
            };
            const ea = p.d.a.withConfig({
                    displayName: "TextWithLinks__LinkToPreview",
                    componentId: "sc-1yeozua-0"
                })(["color:inherit;text-decoration:none;&:hover,&:focus{color:inherit;text-decoration:underline;}"]),
                ta = (e, t) => e ? t ? "".concat(t, " says:") : "your Replika says:" : "you say:";
            var na = ({
                    text: e,
                    isLast: t,
                    isRobotMessage: n,
                    botName: o,
                    id: a
                }) => r.createElement("span", {
                    "aria-live": t ? "polite" : "off",
                    "aria-label": ta(n, o)
                }, r.createElement("span", {
                    id: a
                }, (e => {
                    const t = [];
                    let n = e.search(Yo);
                    for (; - 1 !== n;) {
                        t.push(e.substr(0, n));
                        const o = Yo.exec(e);
                        if (o) {
                            if (t.push(o[0]), n + o[0].length === 0) break;
                            e = e.substr(n + o[0].length)
                        }
                        n = e.search(Yo)
                    }
                    return e.length > 0 && t.push(e), t
                })(e).map((e, t) => t % 2 ? r.createElement(ea, {
                    key: t,
                    href: e,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, e) : r.createElement("span", {
                    key: t
                }, e)))),
                oa = n(382);

            function aa() {
                const e = Object(s.a)(["\n    width: 100%;\n  "]);
                return aa = function() {
                    return e
                }, e
            }

            function ia() {
                const e = Object(s.a)(["\n  0% {\n    transform: scale(1);\n    opacity: 0;\n  }\n\n  10% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    transform: scale(1.3);\n    opacity: 1;\n  }\n\n  30% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  90% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n"]);
                return ia = function() {
                    return e
                }, e
            }

            function ra() {
                const e = Object(s.a)(["\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  30% {\n    opacity: 1;\n  }\n\n  50% {\n    transform: scale(1.3);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1.3);\n    opacity: 0;\n  }\n"]);
                return ra = function() {
                    return e
                }, e
            }

            function la() {
                const e = Object(s.a)(["\n  0% {\n    opacity: 0;\n  }\n\n  5% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"]);
                return la = function() {
                    return e
                }, e
            }
            const ca = () => {
                Bn.PopupboxManager.close({
                    config: {
                        fadeIn: !0,
                        fadeInSpeed: 100,
                        fadeOutSpeed: 100
                    }
                })
            };

            function sa({
                messageId: e
            }) {
                var t;
                const n = Object(c.d)(),
                    o = Object(c.e)(t => t.chat.messageAlerts.filter(t => t.messageId === e), (e, t) => e.length === t.length),
                    a = null !== (t = o.map(e => "score" === e.type ? e.score : -1).find(e => -1 !== e)) && void 0 !== t ? t : 0,
                    i = null != o.find(e => "memory" === e.type);
                return r.useEffect(() => {
                    if (a > 0) {
                        const t = setTimeout(() => {
                            n(Object(m.a)("score", e))
                        }, 2750);
                        return () => clearTimeout(t)
                    }
                }, [a, e, n]), r.useEffect(() => {
                    if (i) {
                        const t = setTimeout(() => {
                            n(Object(m.a)("memory", e))
                        }, 3300);
                        return () => clearTimeout(t)
                    }
                }, [i, e, n]), r.createElement(da, null, i ? r.createElement(ha, null, r.createElement(oa.a, null)) : null, a ? r.createElement(ga, null, "+", a, " XP") : null)
            }
            const da = p.d.div.withConfig({
                    displayName: "Message__MessageAlertsRoot",
                    componentId: "sc-1sr72w1-0"
                })(["position:absolute;flex:0 0 auto;z-index:1;height:45px;left:-140px;width:110px;top:0;"]),
                pa = Object(p.e)(la()),
                ua = Object(p.e)(ra()),
                ma = Object(p.e)(ia()),
                ha = p.d.div.withConfig({
                    displayName: "Message__MemoryCheck",
                    componentId: "sc-1sr72w1-1"
                })(["position:absolute;width:45px;height:45px;left:0;top:0;display:flex;align-items:center;justify-content:center;opacity:0;color:", ";transform-origin:50% 50%;animation:", " ", "ms ease-in ", "ms 1;"], e => e.theme.fgColor, ma, 2500, 800),
                ga = p.d.div.withConfig({
                    displayName: "Message__FadingPoints",
                    componentId: "sc-1sr72w1-2"
                })(["position:absolute;left:65px;top:0;opacity:0;font-size:10px;text-align:center;line-height:45px;width:45px;height:45px;color:", ";border-radius:40px;animation:", " ", "ms ease-out ", "ms 1;&:before{position:absolute;content:'';left:0;top:0;width:100%;height:100%;border:1px solid ", ";border-radius:40px;opacity:0;animation:", " ", "ms ease-out ", "ms 1;}"], e => e.theme.fgColor, pa, 2500, 250, e => e.theme.fgColor, ua, 2500, 250);
            var fa = r.memo(e => {
                const t = e.className,
                    n = e.message,
                    o = e.isLast,
                    a = e.isLastGroup,
                    i = e.align,
                    l = e.mediaPreviews,
                    s = e.imagePreviews,
                    d = e.botName,
                    p = Object(c.d)(),
                    u = n.content,
                    m = "images" === u.type || "achievement" === u.type,
                    h = o && !m,
                    g = Vo(u.text),
                    f = g ? l[g] : void 0,
                    b = ht()(n.meta.timestamp).format("LT"),
                    x = s[n.meta.client_token];
                switch (u.type) {
                    case "images":
                        return r.createElement(Uo, {
                            messageId: n.id,
                            className: t,
                            imageUrl: u.text,
                            align: i,
                            timestamp: b,
                            actions: n.meta.permitted_actions,
                            isLastMessage: o && a,
                            botName: d,
                            imagePreview: x,
                            onClick: e => (e => {
                                Bn.PopupboxManager.open({
                                    content: e,
                                    config: {
                                        fadeIn: !0,
                                        fadeInSpeed: 100,
                                        fadeOutSpeed: 100
                                    }
                                })
                            })(r.createElement(ba, {
                                onClick: ca
                            }, r.createElement(va, {
                                src: e
                            })))
                        });
                    case "achievement":
                        return r.createElement(Uo, {
                            messageId: n.id,
                            className: t,
                            imageUrl: u.icon_url,
                            align: i,
                            timestamp: b,
                            actions: n.meta.permitted_actions,
                            isLastMessage: o && a,
                            botName: d,
                            onClick: () => p(Object(re.e)({
                                type: v.f.Badge,
                                badge: {
                                    type: "Legacy",
                                    id: u.achievement_id,
                                    title: u.text,
                                    description: u.achievement_description,
                                    image_url_2x: u.icon_url,
                                    image_url_3x: u.icon_url
                                }
                            }))
                        });
                    default:
                        return r.createElement(xa, null, r.createElement(sa, {
                            messageId: n.id
                        }), r.createElement(Ao, {
                            messageId: n.id,
                            className: t,
                            hasTail: h,
                            align: i,
                            actions: n.meta.permitted_actions,
                            timestamp: b,
                            isLastMessage: o && a,
                            botName: d,
                            label: u.text,
                            messageLength: u.text.length
                        }, r.createElement(na, {
                            id: "message-".concat(n.id, "-text"),
                            text: u.text,
                            isLast: o && a,
                            isRobotMessage: "left" === i,
                            botName: d
                        }), !!g && r.createElement($o, {
                            "data-testid": "chat-message-media-preview",
                            mediaPreview: f || void 0,
                            mediaPreviewUrl: g
                        })))
                }
            });
            const ba = p.d.div.withConfig({
                    displayName: "Message__ImageContainer",
                    componentId: "sc-1sr72w1-3"
                })(["height:100%;display:flex;align-items:center;"]),
                va = p.d.img.withConfig({
                    displayName: "Message__LightboxImage",
                    componentId: "sc-1sr72w1-4"
                })(["max-width:80vh;max-height:80vh;object-fit:contain;&:hover{cursor:pointer;}", ";"], Object(ae.a)(aa())),
                xa = p.d.div.withConfig({
                    displayName: "Message__PointsContainer",
                    componentId: "sc-1sr72w1-5"
                })(["position:relative;display:flex;align-items:center;"]);

            function ya() {
                const e = Object(s.a)(["\n  from, to: {\n    transform: scale(1)\n  }\n  10% {\n    transform: scale(1.3)\n  }\n  20% {\n    transform: scale(1)\n  }\n  50% {\n    transform: scale(1)\n  }\n  60% {\n    transform: scale(1.3)\n  }\n  70% {\n    transform: scale(1)\n  }\n"]);
                return ya = function() {
                    return e
                }, e
            }

            function wa() {
                const e = Object(s.a)(["\n  from, to: {\n    transform: scale(1)\n  }\n  10% {\n    transform: scale(1.3)\n  }\n  20% {\n    transform: scale(1)\n  }\n  70% {\n    transform: scale(1)\n  }\n  80% {\n    transform: scale(1.3)\n  }\n  90% {\n    transform: scale(1)\n  }\n"]);
                return wa = function() {
                    return e
                }, e
            }
            const Ca = Object(p.e)(wa()),
                Ea = Object(p.e)(ya()),
                ka = p.d.svg.withConfig({
                    displayName: "Typing__StyledSvg",
                    componentId: "sc-1hlltfo-0"
                })(["& > .left-dot{transform-origin:4px 5px;animation:", " 2s 0s linear infinite;}& > .middle-dot{transform-origin:15px 5px;animation:", " 2s 0.15s linear infinite;}& > .right-dot{transform-origin:26px 5px;animation:", " 2s 1s linear infinite;}"], Ca, Ea, Ca);
            class Oa extends r.PureComponent {
                constructor(...e) {
                    super(...e), this.uniqId = Math.floor(1e6 * Math.random()).toString()
                }
                render() {
                    const e = this.props.className;
                    return r.createElement(ka, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 30 10",
                        className: e
                    }, r.createElement("circle", {
                        className: "left-dot",
                        cx: "4",
                        cy: "5",
                        r: "3",
                        fill: "currentColor"
                    }), r.createElement("circle", {
                        className: "middle-dot",
                        cx: "15",
                        cy: "5",
                        r: "3",
                        fill: "currentColor"
                    }), r.createElement("circle", {
                        className: "right-dot",
                        cx: "26",
                        cy: "5",
                        r: "3",
                        fill: "currentColor"
                    }))
                }
            }

            function ja() {
                const e = Object(s.a)(["\n          ", " 0.2s ease-out;\n        "]);
                return ja = function() {
                    return e
                }, e
            }

            function _a() {
                const e = Object(s.a)(["\n    padding: 0 16px;\n  "]);
                return _a = function() {
                    return e
                }, e
            }

            function Ia() {
                const e = Object(s.a)(["\n  from {\n    transform: translateY(20px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n"]);
                return Ia = function() {
                    return e
                }, e
            }
            const Sa = Object(p.e)(Ia()),
                Na = p.d.div.withConfig({
                    displayName: "MessageGroup__MessageGroupRoot",
                    componentId: "h4dfhv-0"
                })(["flex:1 0 auto;padding:0 25px;width:100%;display:flex;flex-wrap:wrap;align-items:flex-end;margin-top:2px;justify-content:", ";", ";"], e => "right" === e.align ? "flex-end" : "flex-start", Object(ae.a)(_a())),
                Pa = p.d.div.withConfig({
                    displayName: "MessageGroup__MessageGroupInner",
                    componentId: "h4dfhv-1"
                })(["max-width:60%;flex:1 0 auto;display:flex;flex-direction:column;align-items:", ";"], e => "right" === e.align ? "flex-end" : "flex-start"),
                Ma = Object(p.d)(fa).withConfig({
                    displayName: "MessageGroup__StyledMessage",
                    componentId: "h4dfhv-2"
                })(["flex:1 0 auto;margin-top:2px;animation:", ";&:focus{outline:none;}"], e => e.moveUp ? Object(p.c)(ja(), Sa) : "none"),
                Ra = p.d.h3.withConfig({
                    displayName: "MessageGroup__Timestamp",
                    componentId: "h4dfhv-3"
                })(["margin:0;width:100%;font-size:12px;font-weight:600;align-self:stretch;text-align:center;margin-top:25px;margin-bottom:25px;color:", ";"], e => e.theme.fgColor),
                Ba = Object(p.d)(Ao).withConfig({
                    displayName: "MessageGroup__TypingBubble",
                    componentId: "h4dfhv-4"
                })(["animation:", " 0.2s ease-out;margin-top:2px;flex:1 0 auto;"], Sa),
                Da = Object(p.d)(Oa).withConfig({
                    displayName: "MessageGroup__StyledTyping",
                    componentId: "h4dfhv-5"
                })(["width:30px;height:10px;color:", ";"], e => e.theme.fgColor),
                za = e => e.map(e => e.id).join(",");
            class Ta extends r.Component {
                shouldComponentUpdate(e) {
                    return !!["timestamp", "isTyping", "className", "bot", "align", "isLast", "mediaPreviews", "messageReactions"].find(t => this.props[t] !== e[t]) || za(this.props.messages) !== za(e.messages)
                }
                render() {
                    const e = this.props,
                        t = e.timestamp,
                        n = e.messages,
                        o = e.isTyping,
                        a = e.className,
                        i = e.bot,
                        l = e.align,
                        c = e.mediaPreviews,
                        s = e.imagePreviews,
                        d = e.isLast;
                    return r.createElement(Na, {
                        className: a,
                        align: l
                    }, !!t && r.createElement(Ra, {
                        role: "heading",
                        "aria-level": 3,
                        tabIndex: -1
                    }, t), r.createElement(Pa, {
                        align: l
                    }, n.map((e, t) => r.createElement(Ma, {
                        key: e.id,
                        message: e,
                        align: l,
                        isLast: !o && t === n.length - 1,
                        moveUp: d && "right" === l && "text" === e.content.type && t === n.length - 1,
                        mediaPreviews: c,
                        imagePreviews: s,
                        isLastGroup: d,
                        botName: null === i || void 0 === i ? void 0 : i.name
                    })), o && r.createElement(Ba, {
                        align: l,
                        hasTail: !0,
                        messageLength: 0
                    }, r.createElement(Da, null))))
                }
            }
            var La = p.d.div.withConfig({
                displayName: "ServiceMessage",
                componentId: "nue20l-0"
            })(["font-size:12px;font-weight:600;align-self:stretch;text-align:center;padding:25px 45px;color:", ";"], e => e.theme.fgColor);
            const Fa = p.d.div.withConfig({
                displayName: "ServiceMessageGroup__ServiceMessageGroupRoot",
                componentId: "sc-2yi3sy-0"
            })([""]);
            var Aa = ({
                messages: e,
                className: t
            }) => r.createElement(Fa, {
                className: t
            }, e.map(e => r.createElement(La, {
                key: e.id
            }, e.content.text)));
            var Wa = ({
                isRobotTyping: e,
                mediaPreviews: t,
                imagePreviews: n,
                bot: o,
                imageUpload: a,
                messages: i,
                onLoadMore: l,
                children: c
            }) => {
                const s = r.useRef(null),
                    d = i.reduce(Rn.bind(null, e), []),
                    p = r.useContext(Dt).thoughtsShown,
                    u = (e => e.length > 0 ? e[0] : null)(i),
                    m = (e => e.length > 0 ? e[e.length - 1] : null)(i),
                    h = m && ("Customer" === m.meta.nature || (e => !!e.widget)(m) || a.inProgress);
                r.useEffect(() => {
                    const e = s.current,
                        t = e ? e.scrollHeight - (e.scrollTop + e.offsetHeight) : 0;
                    (h || t < 500) && e && (e.scrollTop = e.scrollHeight)
                }, [h, t, e, u, m]);
                return r.useLayoutEffect(() => {
                    const e = s.current;
                    e && (e.scrollTop = e.scrollHeight)
                }, []), Object(Ht.a)({
                    getGroupElements: () => s.current && !p ? s.current.querySelectorAll("div[tabindex],h3[tabindex]") : []
                }, [i.length, p]), r.createElement(Ha, {
                    "aria-hidden": p,
                    ref: s,
                    onScroll: e => {
                        e.target.scrollTop < 300 && l()
                    }
                }, r.createElement(Va, null), r.createElement(On.b, null, "Conversation"), r.createElement(qa, {
                    "data-testid": "chat-messages"
                }, d.map((a, i) => {
                    var l, c, s, p, u, m;
                    return "messages" === a.type ? r.createElement(Ta, {
                        key: null !== (l = null === (c = a.messages) || void 0 === c || null === (s = c[0]) || void 0 === s ? void 0 : s.id) && void 0 !== l ? l : i.toString(),
                        timestamp: a.timestamp,
                        align: a.align,
                        messages: a.messages,
                        isTyping: e && i === d.length - 1,
                        mediaPreviews: t,
                        imagePreviews: n,
                        isLast: i === d.length - 1,
                        bot: o
                    }) : r.createElement(Ya, {
                        key: null !== (p = null === (u = a.messages) || void 0 === u || null === (m = u[0]) || void 0 === m ? void 0 : m.id) && void 0 !== p ? p : i.toString(),
                        messages: a.messages
                    })
                }), a.inProgress && r.createElement(Ga, null, r.createElement(Ua, {
                    "data-testid": "chat-progress"
                })), c))
            };
            const Ha = p.d.div.withConfig({
                    displayName: "ChatMessagesList__ChatMessagesListRoot",
                    componentId: "sc-1ajwmer-0"
                })(["flex:0 1 auto;overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:-ms-autohiding-scrollbar;-webkit-overflow-scrolling:touch;"]),
                qa = p.d.div.withConfig({
                    displayName: "ChatMessagesList__ChatMessagesListInner",
                    componentId: "sc-1ajwmer-1"
                })(["padding-top:20px;padding-bottom:50px;position:relative;"]),
                Ga = p.d.div.withConfig({
                    displayName: "ChatMessagesList__PlaceholderRow",
                    componentId: "sc-1ajwmer-2"
                })(["display:flex;justify-content:flex-end;padding:0 25px;margin-top:4px;"]),
                Ua = Object(p.d)(Nn).withConfig({
                    displayName: "ChatMessagesList__StyledImagePlaceholder",
                    componentId: "sc-1ajwmer-3"
                })(["width:60%;"]),
                Ya = Object(p.d)(Aa).withConfig({
                    displayName: "ChatMessagesList__StyledServiceMessageGroup",
                    componentId: "sc-1ajwmer-4"
                })(["padding:0 25px;width:100%;"]),
                Va = p.d.div.withConfig({
                    displayName: "ChatMessagesList__ScrollFixer",
                    componentId: "sc-1ajwmer-5"
                })(["position:absolute;width:0px;height:0px;overflow:hidden;"]);
            var Za = r.memo(e => {
                const t = e.spotlight,
                    n = e.lastUpdated,
                    o = e.getSpotlight,
                    a = t && Kt(t) ? t.current_mission : null,
                    i = null === a || void 0 === a ? void 0 : a.title,
                    l = r.useState(i),
                    c = Object(d.a)(l, 2),
                    s = c[0],
                    p = c[1];
                return r.useEffect(() => {
                    i && p(i)
                }, [i]), r.useEffect(() => {
                    o()
                }, [n, o]), r.createElement(Ja, {
                    "aria-hidden": !a
                }, s)
            });
            const Ja = p.d.div.withConfig({
                displayName: "MissionBadge__MissionBadgeRoot",
                componentId: "sc-1d3qzhe-0"
            })(["position:absolute;align-self:center;transition:top 0.3s ease-out;top:", "px;background:rgba(0,0,0,0.7);box-shadow:0px 4px 8px rgba(0,0,0,0.05);border-radius:4px;z-index:", ";padding:6px 12px 7px;color:#fff;font-size:14px;line-height:18px;max-width:calc(100vw - 130px);"], e => e["aria-hidden"] ? -50 : 20, v.s.Popup);
            var Ka = n(57);

            function Xa() {
                return (Xa = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Qa(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var $a = l.a.createElement("path", {
                    d: "M18.077,11.54C20.981,10.243 23.788,11.693 24.024,14.501C28.071,16.12 27.901,21.18 24.152,22.552C23.688,25.653 20.458,27.197 17.87,25.641C14.816,27.059 12.043,25.67 11.898,22.425C8.136,20.948 8.408,16.127 11.891,14.859C11.83,11.914 15.558,10.146 18.077,11.54Z",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none"
                }),
                ei = l.a.createElement("circle", {
                    cx: 10,
                    cy: 9,
                    r: 2,
                    fill: "currentColor"
                }),
                ti = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Qa(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Xa({
                        width: 36,
                        height: 36,
                        viewBox: "0 0 36 36",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, $a, ei)
                },
                ni = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(ti, Xa({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function oi(e = "Your Replika") {
                var t;
                const n = Object(c.e)(e => e.profile.persist.bot);
                return null !== (t = null === n || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : e
            }
            var ai = n(119);

            function ii() {
                const e = Object(s.a)(["\n  pointer-events: auto;\n  position: relative;\n  flex: 0 0 auto;\n\n  &:after {\n    display: ", ';\n    content: "";\n    position: absolute;\n    z-index: 1;\n    top: -2px;\n    right: -2px;\n    width: 14px;\n    height: 14px;\n    background-color: ', ";\n    border-radius: 100%;\n  }\n"]);
                return ii = function() {
                    return e
                }, e
            }

            function ri() {
                const e = Object(s.a)(["\n    padding: 64px 20px 0;\n  "]);
                return ri = function() {
                    return e
                }, e
            }

            function li({
                size: e
            }) {
                const t = Object(d.a)(e, 2),
                    n = t[0],
                    o = t[1];
                return r.createElement("svg", {
                    width: n,
                    height: o,
                    viewBox: "0 0 ".concat(n, " ").concat(o),
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "1.5"
                }, r.createElement("path", {
                    d: "M".concat(n - 10, ",16.554\n        c0,-3.617 -2.937,-6.554 -6.554,-6.554\n        l-").concat(n - 34, ".892,-0\n        c-3.617,-0 -6.554,2.937 -6.554,6.554\n        l-0,").concat(o - 33.108, "\n        c-0,3.617 2.937,6.554 6.554,6.554\n        l").concat(n - 34, ".892,0\n        c3.617,0 6.554,-2.937 6.554,-6.554l0,-10.892Z"),
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "16px",
                    strokeDasharray: "1,9,0,0"
                }))
            }

            function ci(e) {
                return e ? new Date(e.active_till).getTime() - (new Date).getTime() : 0
            }

            function si({
                buttons: e,
                onReply: t,
                hidden: n
            }) {
                const o = r.useRef(null);
                return Object(Ht.a)({
                    getGroupElements: () => o.current && !n ? o.current.getElementsByTagName("button") : [],
                    options: {
                        wrap: !0
                    }
                }, [n]), r.createElement(vi, {
                    ref: o
                }, e.map((e, o) => r.createElement("li", {
                    key: o
                }, r.createElement(xi, {
                    tabIndex: 0 !== o || n ? -1 : 0,
                    onClick: () => t(e.text, e.scenario_id)
                }, e.text))))
            }
            var di = function({
                className: e
            }) {
                const t = Object(c.e)(e => e.chat.thought),
                    n = r.useState(ci(t) > 0),
                    o = Object(d.a)(n, 2),
                    a = o[0],
                    i = o[1],
                    l = r.useContext(Dt),
                    s = l.thoughtsShown,
                    p = l.setThoughtsShown,
                    u = Object(c.e)(e => e.chat.voiceModeEnabled);
                r.useEffect(() => {
                    const e = ci(t);
                    if (t && e > 0) {
                        i(!0);
                        const t = setTimeout(() => {
                            i(!1)
                        }, e);
                        return () => clearTimeout(t)
                    }
                    i(!1)
                }, [t]), r.useEffect(() => {
                    const e = e => {
                        "Escape" === e.key && s && p(!1)
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [s, p]);
                const h = Object(c.d)(),
                    g = r.useRef(null),
                    f = r.useState([100, 44]),
                    b = Object(d.a)(f, 2),
                    v = b[0],
                    x = b[1],
                    y = null === t || void 0 === t ? void 0 : t.text,
                    w = oi();
                return r.useLayoutEffect(() => {
                    g.current && s && x([g.current.offsetWidth, g.current.offsetHeight])
                }, [y, s]), t && a && !u ? r.createElement(pi, {
                    className: e
                }, r.createElement(ui, {
                    "aria-hidden": s,
                    style: {
                        opacity: s ? 0 : 1
                    }
                }, r.createElement(hi, {
                    viewed: t.viewed,
                    tabIndex: s ? -1 : 0,
                    label: "show ".concat(w, "\u2019s thoughts"),
                    onClick: () => {
                        p(!0), h(Object(m.e)())
                    }
                }, r.createElement(ni, null))), r.createElement(bi, {
                    "aria-hidden": !s,
                    style: {
                        opacity: s ? 1 : 0,
                        pointerEvents: s ? "auto" : "none"
                    }
                }, r.createElement(ui, null, r.createElement(mi, {
                    tabIndex: s ? 0 : -1,
                    label: "back to chat",
                    onClick: () => {
                        p(!1)
                    }
                }, r.createElement(to.a, null)), r.createElement(gi, null, r.createElement(li, {
                    size: v
                }), r.createElement(fi, {
                    ref: g
                }, r.createElement(ai.a, null, r.createElement(On.c, null, w, " thinks: "), t.text)))), r.createElement(si, {
                    buttons: t.reply_buttons,
                    hidden: !s,
                    onReply: (e, t) => {
                        p(!1), h(Object(m.f)({
                            type: "text",
                            text: e,
                            startScenarioId: t
                        }))
                    }
                }))) : null
            };
            const pi = p.d.div.withConfig({
                    displayName: "ThoughtsLayer__ThoughtsLayerRoot",
                    componentId: "sc-1ghuxxs-0"
                })(["pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:", ";"], v.s.Thoughts),
                ui = p.d.div.withConfig({
                    displayName: "ThoughtsLayer__Header",
                    componentId: "sc-1ghuxxs-1"
                })(["padding:20px 8px 0;display:flex;align-items:flex-start;transition:opacity 0.2s ease-out;", ""], Object(ae.a)(ri())),
                mi = Object(p.d)(bt.a).withConfig({
                    displayName: "ThoughtsLayer__CloseButton",
                    componentId: "sc-1ghuxxs-2"
                })(["border:0;padding:0;flex:0 0 auto;cursor:pointer;width:40px;height:40px;color:", ";background:", ";border-radius:100%;box-shadow:0px 4px 8px rgba(0,0,0,0.15),0px 1px 1px rgba(0,0,0,0.15);"], e => e.theme.fgColor, e => e.theme.lightButtonBgColor),
                hi = Object(b.a)(mi, ["viewed"])(ii(), e => e.viewed ? "none" : "block", e => e.theme.unreadBadgeBgColor),
                gi = p.d.div.withConfig({
                    displayName: "ThoughtsLayer__ReplikaThoughtBubble",
                    componentId: "sc-1ghuxxs-3"
                })(["position:relative;margin-left:8px;margin-top:-2px;min-height:44px;& > svg{position:absolute;left:0;top:0;color:", ";width:100%;height:100%;}&:before{content:'';position:absolute;width:8px;height:8px;background:", ";left:-7px;top:-1px;border-radius:100%;}"], e => e.theme.lightButtonBgColor, e => e.theme.lightButtonBgColor),
                fi = p.d.h4.withConfig({
                    displayName: "ThoughtsLayer__ReplikaThoughtText",
                    componentId: "sc-1ghuxxs-4"
                })(["display:block;margin:0;font-weight:normal;line-height:24px;position:relative;padding:10px 25px;z-index:1;color:", ";"], e => e.theme.fgColor),
                bi = p.d.div.withConfig({
                    displayName: "ThoughtsLayer__ThoughtContent",
                    componentId: "sc-1ghuxxs-5"
                })(["position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background:", ";transition:opacity 0.2s ease-out;display:flex;flex-direction:column;justify-content:space-between;"], e => e.theme.thoughtBgColor),
                vi = p.d.ul.withConfig({
                    displayName: "ThoughtsLayer__ReplyButtonsRoot",
                    componentId: "sc-1ghuxxs-6"
                })(["display:flex;padding:0;list-style-type:none;flex-direction:column;align-items:flex-end;margin:16px;& > li{max-width:60%;}& > li ~ li{margin-top:8px;}"]),
                xi = Object(p.d)(bt.a).withConfig({
                    displayName: "ThoughtsLayer__ReplyButton",
                    componentId: "sc-1ghuxxs-7"
                })(["border:0;cursor:pointer;padding:10px 20px;color:", ";background:", ";border-radius:24px;min-height:48px;box-shadow:0px 4px 8px rgba(0,0,0,0.15),0px 1px 1px rgba(0,0,0,0.15);line-height:20px;text-align:left;font-weight:bold;"], e => e.theme.fgColor, e => e.theme.lightButtonBgColor),
                yi = e => "voice_record" !== e.content.type && "voice_recognized" !== e.content.type;
            const wi = {
                sendChatMessage: m.f,
                getHistory: m.b,
                skipWidget: m.j,
                skipExperiment: m.i,
                push: u.d,
                getSpotlight: vn,
                setActiveDialog: re.e,
                startMission: fn,
                chatScreen: Ka.a
            };
            var Ci = Object(c.c)(e => ({
                wsStatus: e.ws.status,
                chatId: e.ws.persist.chatId,
                messages: e.chat.messages,
                bot: e.profile.persist.bot,
                mediaPreviews: e.chat.mediaPreviews,
                imagePreviews: e.chat.imagePreviews,
                isRobotTyping: e.chat.isRobotTyping,
                hasMoreMessages: e.chat.hasMoreMessages,
                imageUpload: e.ui.imageUpload,
                voiceModeEnabled: e.chat.voiceModeEnabled,
                skippedWidgetId: e.chat.skippedWidgetId,
                spotlight: e.journey.persist.spotlight,
                lastJourneyChange: e.journey.lastJourneyChange,
                wsReady: e.ws.wsReady
            }), wi)(r.memo((function(e) {
                const t = r.useState(!1),
                    n = Object(d.a)(t, 2),
                    o = n[0],
                    a = n[1],
                    i = e.messages,
                    l = e.className,
                    c = e.voiceModeEnabled,
                    s = e.wsStatus,
                    p = e.isRobotTyping,
                    u = e.mediaPreviews,
                    m = e.imagePreviews,
                    h = e.bot,
                    g = e.imageUpload,
                    f = e.spotlight,
                    b = e.lastJourneyChange,
                    v = e.hasMoreMessages,
                    x = e.skippedWidgetId,
                    w = e.chatId,
                    C = e.wsReady,
                    E = e.sendChatMessage,
                    k = e.chatScreen,
                    O = !!i,
                    j = (i || []).filter(yi),
                    _ = (e => e.length > 0 ? e[e.length - 1] : null)(j);
                r.useEffect(() => {
                    C && k()
                }, [k, C]);
                const I = r.useCallback(e => {
                        if (c) return;
                        const t = e.text.trim();
                        "text" === e.type && "" === t || h && w && E(e)
                    }, [E, c, h, w]),
                    S = r.useState(!1),
                    N = Object(d.a)(S, 2),
                    P = N[0],
                    M = N[1];
                return r.createElement(Dt.Provider, {
                    value: {
                        thoughtsShown: P,
                        setThoughtsShown: M
                    }
                }, r.createElement(Ei, {
                    className: l
                }, r.createElement(On.a, null, "Chat with Replika"), r.createElement(di, null), r.createElement(oe.d, null, r.createElement(Za, {
                    spotlight: f,
                    lastUpdated: b.updated,
                    getSpotlight: e.getSpotlight
                })), r.createElement(y, null), !O && r.createElement(ki, null, r.createElement(Oi, null)), i && 0 === i.length && r.createElement(ki, null, "No messages yet"), O && r.createElement(Wa, {
                    messages: j,
                    isRobotTyping: p,
                    mediaPreviews: u,
                    imagePreviews: m,
                    bot: h,
                    imageUpload: g,
                    onLoadMore: () => {
                        if (i && "connected" === s && v && !o) {
                            a(!0);
                            const t = i[0],
                                n = (null === t || void 0 === t ? void 0 : t.id) || void 0;
                            e.getHistory(n, 100, !1).then(() => a(!1))
                        }
                    },
                    onEggClick: () => {
                        e.push("/journey")
                    }
                }, r.createElement(kn, {
                    lastMessage: _,
                    voiceModeEnabled: c,
                    onSendMessage: I,
                    skippedWidgetId: x,
                    push: e.push,
                    setActiveDialog: e.setActiveDialog,
                    skipWidget: e.skipWidget,
                    startMission: e.startMission
                })), r.createElement(Lt, {
                    wsStatus: s,
                    lastMessage: _,
                    voiceModeEnabled: c,
                    onSendMessage: I,
                    skippedWidgetId: x,
                    skipExperiment: e.skipExperiment,
                    skipWidget: e.skipWidget
                })))
            })));
            const Ei = p.d.main.withConfig({
                    displayName: "ChatMessages__ChatMessagesRoot",
                    componentId: "sc-10qvl13-0"
                })(["position:relative;display:flex;justify-content:flex-end;flex-direction:column;background:", ";"], e => e.theme.chatGradientBgColor),
                ki = p.d.div.withConfig({
                    displayName: "ChatMessages__ChatMessagesEmpty",
                    componentId: "sc-10qvl13-1"
                })(["width:100%;flex:1 1 100%;display:flex;justify-content:center;align-items:center;color:", ";"], e => e.theme.dimmedFgColor),
                Oi = Object(p.d)(h.a).withConfig({
                    displayName: "ChatMessages__StyledCircleSpinner",
                    componentId: "sc-10qvl13-2"
                })(["width:100px;height:100px;color:", ";"], e => e.theme.dimmedFgColor);
            var ji = n(22),
                _i = n(115);
            var Ii = (e, t) => {
                const n = t.length;
                if (n < e) {
                    const o = e - n;
                    return [...t, ...Array(o).fill("?")]
                }
                if (n % e === 0) return t; {
                    const o = e - n % e;
                    return [...t, ...Array(o).fill("?")]
                }
            };

            function Si() {
                const e = Object(s.a)(["\n    padding: 15px;\n  "]);
                return Si = function() {
                    return e
                }, e
            }
            var Ni = Object(c.c)(null, {
                setActiveDialog: re.e
            })(e => {
                const t = e.badges,
                    n = void 0 === t ? [] : t,
                    o = e.className,
                    a = e.emptyText,
                    i = e.emptyDescription,
                    l = r.useState(!1),
                    c = Object(d.a)(l, 2),
                    s = c[0],
                    p = c[1],
                    u = r.useState(3),
                    m = Object(d.a)(u, 2),
                    h = m[0],
                    g = m[1],
                    f = r.useRef(null);
                if (Object(Ht.a)({
                        getGroupElements: () => f.current ? f.current.querySelectorAll("button") : [],
                        options: {
                            wrap: !0,
                            keybindings: {
                                next: {
                                    key: "ArrowRight"
                                },
                                prev: {
                                    key: "ArrowLeft"
                                }
                            }
                        }
                    }, [f, n.length]), r.useEffect(() => {
                        const e = () => {
                            const e = f.current ? Math.floor((f.current.clientWidth - 60) / 90) : 3;
                            e !== h && g(e)
                        };
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, [h, f]), 0 === n.length) return r.createElement(Ti, {
                    className: o
                }, a);
                const b = !s && n.length > 3 * h,
                    x = Ii(h, b ? Object(k.take)(n, 2 * h) : n);
                return r.createElement(Pi, {
                    ref: f,
                    className: o,
                    "aria-label": "Your Badges",
                    "data-testid": "badges"
                }, x.map((t, n) => "?" === t ? r.createElement(Mi, {
                    key: n,
                    "aria-hidden": "true"
                }, r.createElement(Bi, {
                    tabIndex: -1,
                    onClick: () => {
                        e.setActiveDialog({
                            type: v.f.Badge,
                            emptyDescription: i
                        })
                    }
                })) : r.createElement(Mi, {
                    key: n
                }, r.createElement(Ri, {
                    tabIndex: 0 === n ? 0 : -1,
                    "data-testid": "badge-".concat(n),
                    onClick: () => {
                        e.setActiveDialog({
                            type: v.f.Badge,
                            badge: t
                        })
                    }
                }, r.createElement(Di, {
                    src: t.image_url_2x,
                    alt: t.title
                }), r.createElement(zi, {
                    "aria-hidden": "true"
                }, t.title)))), b && r.createElement(Li, {
                    onClick: () => p(!0)
                }, "Show all ".concat(n.length, " ").concat(n.length > 1 ? "badges" : "badge")))
            });
            const Pi = p.d.ul.withConfig({
                    displayName: "Badges__BadgesRoot",
                    componentId: "vs3wws-0"
                })(["display:flex;flex-wrap:wrap;align-items:flex-start;padding:10px 30px 20px;margin:0;color:", ";", ";"], e => e.theme.lightFgColor, Object(ae.a)(Si())),
                Mi = p.d.li.withConfig({
                    displayName: "Badges__BadgeItem",
                    componentId: "vs3wws-1"
                })(["flex:1 0 ", "px;display:block;margin-bottom:25px;"], 90),
                Ri = Object(p.d)(ne.a).withConfig({
                    displayName: "Badges__Badge",
                    componentId: "vs3wws-2"
                })(["width:100%;display:block;display:flex;flex-direction:column;align-items:center;font-size:13px;cursor:pointer;"]),
                Bi = Object(p.d)(Ri).withConfig({
                    displayName: "Badges__BadgeSlot",
                    componentId: "vs3wws-3"
                })(["&:before{content:'?';color:", ";border:1px solid ", ";width:40px;height:40px;margin:4px 0;border-radius:100%;text-align:center;vertical-align:middle;line-height:40px;font-size:18px;}cursor:pointer;"], e => e.theme.dimmedFgColor, e => e.theme.borderColor),
                Di = p.d.img.withConfig({
                    displayName: "Badges__BadgeImage",
                    componentId: "vs3wws-4"
                })(["width:50px;"]),
                zi = p.d.h4.withConfig({
                    displayName: "Badges__BadgeTitle",
                    componentId: "vs3wws-5"
                })(["font-weight:normal;color:", ";margin:15px 0 0;font-size:13px;line-height:16px;text-align:center;"], e => e.theme.fgColor),
                Ti = p.d.p.withConfig({
                    displayName: "Badges__EmptyBadges",
                    componentId: "vs3wws-6"
                })(["margin:0;font-size:16px;line-height:24px;color:", ";padding:0 16px 30px;"], e => e.theme.dimmedFgColor),
                Li = Object(p.d)(Ft.a).withConfig({
                    displayName: "Badges__ExpandButton",
                    componentId: "vs3wws-7"
                })(["margin:0 auto;color:", ";background-color:", ";box-shadow:0px 1px 2px ", ";"], e => e.theme.fgColor, e => e.theme.chatBgColor, e => e.theme.lightButtonShadowColor);
            var Fi = n(331),
                Ai = n.n(Fi),
                Wi = n(40);

            function Hi() {
                const e = Object(s.a)(["\n  color: ", ";\n"]);
                return Hi = function() {
                    return e
                }, e
            }
            var qi = Object(c.c)(null, {
                setActiveDialog: re.e
            })(e => {
                const t = e.mood,
                    n = e["data-testid"];
                let o = t.caption,
                    a = null;
                o.length > 110 && (o = o.substr(0, 110), o = o.substr(0, o.lastIndexOf(" ")) + "... ", a = r.createElement(Zi, null, "more"));
                const i = () => {
                    e.setActiveDialog({
                        type: v.f.EditMood,
                        mood: t
                    }), e.onClose(), Object(le.b)(v.j.MoodOpened, {
                        mode: "full screen"
                    })
                };
                return r.createElement(Gi, {
                    "data-testid": n,
                    onMouseDown: e => e.preventDefault()
                }, r.createElement(Yi, {
                    "data-testid": "".concat(n, "-date")
                }, ht()(t.date).utc().format("MMMM D, h:mm A")), r.createElement(Vi, {
                    "data-testid": "".concat(n, "-title"),
                    percent: t.mood_percentage / 100
                }, t.title), r.createElement(Ui, {
                    "data-testid": "".concat(n, "-caption")
                }, t.caption ? r.createElement(Nt.a, {
                    onClick: i,
                    "data-testid": "".concat(n, "-caption-link")
                }, o, a) : r.createElement(Ji, {
                    onClick: i,
                    "data-testid": "".concat(n, "-caption-link")
                }, "Click to edit")))
            });
            const Gi = p.d.div.withConfig({
                    displayName: "MoodRecordPopover__MoodRecordPopoverRoot",
                    componentId: "sc-12z9b2a-0"
                })(["text-align:left;line-height:24px;font-size:16px;"]),
                Ui = p.d.div.withConfig({
                    displayName: "MoodRecordPopover__PopoverText",
                    componentId: "sc-12z9b2a-1"
                })(["color:", ";margin-top:10px;"], e => e.theme.fgColor),
                Yi = p.d.div.withConfig({
                    displayName: "MoodRecordPopover__PopoverDate",
                    componentId: "sc-12z9b2a-2"
                })(["color:", ";"], e => e.theme.fgColor),
                Vi = Object(b.a)("div", ["percent"])(Hi(), e => _e(e.percent)),
                Zi = p.d.span.withConfig({
                    displayName: "MoodRecordPopover__Ellipsis",
                    componentId: "sc-12z9b2a-3"
                })(["color:", ";text-decoration:none;"], e => e.theme.dimmedFgColor),
                Ji = Object(p.d)(Nt.a).withConfig({
                    displayName: "MoodRecordPopover__EmptyCaption",
                    componentId: "sc-12z9b2a-4"
                })(["color:", ";"], e => e.theme.dimmedFgColor);

            function Ki() {
                const e = Object(s.a)(["\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  position: absolute;\n  width: 13px;\n  height: 13px;\n  left: 50%;\n  bottom: ", "%;\n  transform: translate(-6px, 6px);\n  border: none;\n  border-radius: 100%;\n  background-color: ", ";\n\n  box-shadow: ", ";\n\n  &.focus-visible:focus {\n    outline: none;\n    box-shadow: 0 0 0 6px ", ";\n  }\n"]);
                return Ki = function() {
                    return e
                }, e
            }

            function Xi() {
                const e = Object(s.a)(["\n  height: 90px;\n  position: relative;\n  &::before {\n    position: absolute;\n    content: '';\n    left: 50%;\n    height: 100%;\n    width: 1px;\n    border-left: 1px solid ", ";\n  }\n"]);
                return Xi = function() {
                    return e
                }, e
            }
            const Qi = p.d.div.withConfig({
                    displayName: "MoodRecord__MoodRecordRoot",
                    componentId: "sc-1fyyfuf-0"
                })(["flex:0 0 ", "px;width:", "px;"], 60, 60),
                $i = Object(b.a)("div", ["currentDay"])(Xi(), e => e.currentDay ? e.theme.moodTrackerCurrentDayColor : e.theme.moodTrackerDayColor),
                er = Object(b.a)("div", ["percent", "active"])(Ki(), e => 100 * (.7 * e.percent + .15), e => _e(e.percent), e => e.active ? "0 0 0 6px ".concat(_e(e.percent, .3)) : "none", e => _e(e.percent, .3)),
                tr = p.d.div.withConfig({
                    displayName: "MoodRecord__MoodRecordDate",
                    componentId: "sc-1fyyfuf-1"
                })(["font-size:12px;color:", ";text-align:center;padding:12px 0 0;"], e => e.theme.dimmedFgColor);
            var nr = ({
                mood: e,
                setActive: t,
                active: n,
                last: o,
                "data-testid": a
            }) => {
                const i = o && ht()(e.date).isSame(ht()(), "day");
                return r.createElement(Qi, {
                    "data-testid": a
                }, r.createElement(io, {
                    preferPlace: "above",
                    isOpen: n,
                    onClose: () => t(e.id, !1),
                    onRenderContent: () => r.createElement(qi, {
                        "data-testid": "".concat(a, "-popover"),
                        mood: e,
                        onClose: () => t(e.id, !1)
                    }),
                    closeOnOuterAction: !0,
                    size: "small",
                    offset: 5
                }, r.createElement($i, {
                    currentDay: i
                }, r.createElement(er, {
                    "data-testid": "mood-dot ".concat(a, "-dot"),
                    percent: e.mood_percentage / 100,
                    tabIndex: o ? 0 : -1,
                    onClick: () => t(e.id, !0),
                    onFocus: () => t(e.id, !0),
                    active: n
                }))), r.createElement(tr, null, ht()(e.date).utc().format("MMM D")))
            };

            function or() {
                const e = Object(s.a)(['\n  flex: 0 0 auto;\n  width: 16px;\n  height: 100%;\n  position: relative;\n  &::before {\n    position: absolute;\n    content: "";\n    left: 50%;\n    height: 100%;\n    width: 1px;\n    border-left: 1px dashed ', ';\n  }\n  &::after {\n    position: absolute;\n    content: "";\n    left: 50%;\n    width: 7px;\n    height: 7px;\n    border-radius: 10px;\n    bottom: ', "%;\n    transform: translate(-3px, 3px);\n    background-color: ", ";\n  }\n"]);
                return or = function() {
                    return e
                }, e
            }
            var ar = ({
                className: e
            }) => r.createElement(ir, {
                className: e
            }, r.createElement(rr, null, "Your mood history will appear here."), r.createElement(lr, null, r.createElement(cr, {
                percent: 0
            }), r.createElement(cr, {
                percent: .3
            }), r.createElement(cr, {
                percent: .9
            }), r.createElement(cr, {
                percent: .5
            }), r.createElement(cr, {
                percent: 1
            })));
            const ir = p.d.div.withConfig({
                    displayName: "MoodEmpty__MoodEmptyRoot",
                    componentId: "h08eiq-0"
                })(["background:", ";padding:0 20px;height:140px;width:100%;display:flex;align-items:center;justify-content:space-between;"], e => e.theme.chatBgColor),
                rr = p.d.div.withConfig({
                    displayName: "MoodEmpty__MoodEmptyText",
                    componentId: "h08eiq-1"
                })(["color:", ";padding-right:15px;font-size:16px;line-height:24px;"], e => e.theme.fgColor),
                lr = p.d.div.withConfig({
                    displayName: "MoodEmpty__MoodEmptyGraph",
                    componentId: "h08eiq-2"
                })(["height:60px;display:flex;"]),
                cr = Object(b.a)("div", ["percent"])(or(), e => e.theme.borderColor, e => 100 * (.7 * e.percent + .15), e => _e(e.percent));

            function sr() {
                return (sr = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function dr(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var pr = l.a.createElement("path", {
                    d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z",
                    fill: "currentColor"
                }),
                ur = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = dr(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", sr({
                        width: 20,
                        height: 20,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, pr)
                },
                mr = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(ur, sr({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function hr() {
                const e = Object(s.a)(["\n  min-width: ", "px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  &::before {\n    position: absolute;\n    top: 0;\n    content: '';\n    background-color: ", ";\n    width: 100%;\n    height: 90px;\n  }\n"]);
                return hr = function() {
                    return e
                }, e
            }
            class gr extends r.PureComponent {
                constructor(e) {
                    super(e), this.state = {
                        activeId: void 0
                    }, this.rootRef = r.createRef(), this.focusGroup = Ai()({
                        keybindings: {
                            next: {
                                key: "ArrowRight"
                            },
                            prev: {
                                key: "ArrowLeft"
                            }
                        }
                    }), this.handleSetActive = (e, t) => {
                        const n = t ? e : void 0;
                        n !== this.state.activeId && (this.setState({
                            activeId: n
                        }), t && Object(le.b)(v.j.MoodOpened, {
                            mode: "preview"
                        }))
                    }, this.handleMoodsBlur = () => {
                        this.setState({
                            activeId: void 0
                        })
                    }, this.handleScroll = () => {
                        const e = this.props,
                            t = e.moods,
                            n = e.hasMoreMoods,
                            o = e.isFetchingMoodMeter,
                            a = this.rootRef.current;
                        if (a && a.scrollLeft < 50 && t && t.length > 0 && n && !o) {
                            const e = t[0].id;
                            this.props.getMoodMeter(e, 20)
                        }
                    }, e.moods && 0 !== e.moods.length && e.lastMoodTimestamp ? e.updateMoodMeter(e.lastMoodTimestamp) : e.getMoodMeter()
                }
                componentDidMount() {
                    const e = this.rootRef.current;
                    e && this.scrollToRight(e, !0), this.focusGroup.setMembers(this.getFocusGroupElements()), this.focusGroup.activate()
                }
                componentWillUnmount() {
                    this.focusGroup.deactivate()
                }
                getSnapshotBeforeUpdate(e) {
                    const t = this.rootRef.current;
                    return t && this.props.moods.length > e.moods.length ? t.scrollWidth - t.offsetWidth - t.scrollLeft : null
                }
                componentDidUpdate(e, t, n) {
                    const o = this.props.moods,
                        a = e.moods,
                        i = this.rootRef.current;
                    if (i && o.length > a.length) {
                        const e = 0 === a.length,
                            t = n;
                        this.scrollToRight(i, e, t), this.focusGroup.setMembers(this.getFocusGroupElements())
                    }
                }
                scrollToRight(e, t, n = null) {
                    if (e.scrollWidth - e.offsetWidth - e.scrollLeft < 80 || t) e.scrollLeft = e.scrollWidth;
                    else if (n) {
                        const t = e.scrollWidth - e.offsetWidth - n;
                        t !== e.scrollLeft && (e.scrollLeft = t)
                    }
                }
                getFocusGroupElements() {
                    return this.rootRef.current ? this.rootRef.current.querySelectorAll("div[tabindex]") : []
                }
                render() {
                    const e = this.props,
                        t = e.className,
                        n = e.hasMoreMoods,
                        o = e.moods,
                        a = !!o.find(e => ht()(e.date).isSame(ht()(), "day")) ? "Good job on adding your today\u2019s mood!" : "Don\u2019t forget to add your today\u2019s mood";
                    return o.length < 1 ? r.createElement(ar, {
                        className: t
                    }) : r.createElement(br, null, r.createElement(vr, {
                        className: t,
                        ref: this.rootRef,
                        onScroll: this.handleScroll,
                        onClick: this.handleScroll
                    }, r.createElement(xr, {
                        count: n ? o.length + 1 : o.length,
                        onBlur: this.handleMoodsBlur
                    }, n && r.createElement(yr, null), o.map((e, t) => r.createElement(nr, {
                        active: this.state.activeId === e.id,
                        "data-testid": "mood-".concat(o.length - 1 - t),
                        mood: e,
                        key: e.id,
                        setActive: this.handleSetActive,
                        last: t === o.length - 1
                    })))), r.createElement(wr, null, a), r.createElement(Cr, {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: "https://help.replika.ai/hc/en-us/articles/360020674571-How-to-track-mood-in-Replika"
                    }, r.createElement(mr, null), " How does mood tracking work?"))
                }
            }
            var fr = Object(c.c)(e => ({
                moods: e.profile.persist.moods || [],
                lastMoodTimestamp: e.profile.persist.lastMoodTimestamp,
                hasMoreMoods: e.profile.persist.hasMoreMoods,
                isFetchingMoodMeter: e.profile.isFetchingMoodMeter
            }), {
                getMoodMeter: Wi.d,
                updateMoodMeter: Wi.l
            })(gr);
            const br = p.d.div.withConfig({
                    displayName: "MoodTracker__MoodTrackerRoot",
                    componentId: "l0rl6o-0"
                })(["width:100%;background:", ";text-align:center;padding-bottom:25px;"], e => e.theme.chatBgColor),
                vr = p.d.div.withConfig({
                    displayName: "MoodTracker__MoodTrackerScroll",
                    componentId: "l0rl6o-1"
                })(["width:100%;padding:25px 30px;overflow-y:auto;-webkit-overflow-scrolling:touch;"]),
                xr = Object(b.a)("div", ["count"])(hr(), e => 60 * e.count, e => e.theme.chatBgColor),
                yr = Object(p.d)(h.a).withConfig({
                    displayName: "MoodTracker__MoreMoodsSpinner",
                    componentId: "l0rl6o-2"
                })(["color:", ";position:absolute;width:25px;height:25px;z-index:1;left:20px;top:35px;"], e => e.theme.dimmedFgColor),
                wr = p.d.p.withConfig({
                    displayName: "MoodTracker__MoodHint",
                    componentId: "l0rl6o-3"
                })(["margin:5px 0 15px;color:", ";"], e => e.theme.fgColor),
                Cr = p.d.a.withConfig({
                    displayName: "MoodTracker__MoodHelpLink",
                    componentId: "l0rl6o-4"
                })(["color:", ";display:inline-flex;font-size:15px;line-height:20px;& > svg{margin-right:10px;}"], e => e.theme.dimmedFgColor);

            function Er() {
                const e = Object(s.a)(["\n    padding: 15px 15px 10px;\n  "]);
                return Er = function() {
                    return e
                }, e
            }

            function kr() {
                const e = Object(s.a)(["\n    min-height: 100px;\n    max-height: 300px;\n  "]);
                return kr = function() {
                    return e
                }, e
            }
            const Or = {
                push: u.d,
                setHintStatus: re.i,
                createNewMood: Wi.a
            };
            var jr = Object(c.c)(e => {
                const t = e.profile.persist,
                    n = t.userProfile,
                    o = t.bot;
                return {
                    botId: null === o || void 0 === o ? void 0 : o.id,
                    userProfile: n,
                    botStats: null === o || void 0 === o ? void 0 : o.stats
                }
            }, Or)(e => {
                const t = e.className,
                    n = e.botStats,
                    o = e.userProfile;
                return r.createElement(Ir, {
                    "data-testid": "profile",
                    className: t
                }, r.createElement(On.b, null, "Profile"), r.createElement(Nr, null, r.createElement(oe.d, null, r.createElement(Pr, {
                    to: v.m.Main,
                    "data-testid": "profile-back-button"
                }, r.createElement(_i.a, null))), r.createElement(_r, null, null === o || void 0 === o ? void 0 : o.first_name)), r.createElement(Sr, null, r.createElement(Rr, {
                    role: "heading",
                    "aria-level": 3
                }, r.createElement("span", null, "MOOD"), r.createElement(Dr, {
                    "data-testid": "profile-add-mood",
                    label: "add mood",
                    onClick: () => {
                        Object(le.b)(v.j.MoodSliderCalled), e.createNewMood(), e.push("/")
                    }
                }, "+")), r.createElement(Br, null), r.createElement(Rr, {
                    role: "heading",
                    "aria-level": 3
                }, "personality"), r.createElement(Mr, {
                    badges: null === n || void 0 === n ? void 0 : n.achievements.filter(e => "Personality" === e.type || "Legacy" === e.type),
                    emptyText: "Complete conversations about your personality and earn badges.",
                    emptyDescription: "As you talk to Replika it will be giving away badges that reflect your personality. They will be displayed here."
                }), r.createElement(Rr, {
                    role: "heading",
                    "aria-level": 3
                }, "Skills"), r.createElement(Mr, {
                    badges: null === n || void 0 === n ? void 0 : n.achievements.filter(e => "Skill" === e.type),
                    emptyText: "Learn skills through conversations with Replika and collect rewards.",
                    emptyDescription: "Learn skills through conversations with Replika and collect rewards."
                })))
            });
            const _r = p.d.h3.withConfig({
                    displayName: "Profile__ProfileTitle",
                    componentId: "suvxq-0"
                })(["color:", ";font-weight:bold;font-size:20px;line-height:25px;text-align:center;margin:0 20px;"], e => e.theme.fgColor),
                Ir = p.d.div.withConfig({
                    displayName: "Profile__ChatSidebarProfileRoot",
                    componentId: "suvxq-1"
                })(["height:100%;display:flex;flex-direction:column;"]),
                Sr = p.d.div.withConfig({
                    displayName: "Profile__ProfileContent",
                    componentId: "suvxq-2"
                })(["margin-top:10px;flex:0 1 auto;display:flex;flex-direction:column;overflow-y:auto;-ms-overflow-style:-ms-autohiding-scrollbar;"]),
                Nr = p.d.div.withConfig({
                    displayName: "Profile__ChatSidebarHeader",
                    componentId: "suvxq-3"
                })(["position:relative;flex:0 0 auto;width:100%;padding:25px 15px 0;"]),
                Pr = Object(p.d)(ne.a).withConfig({
                    displayName: "Profile__ArrowButton",
                    componentId: "suvxq-4"
                })(["position:absolute;top:25px;left:15px;&:hover{cursor:pointer;}color:", ";"], e => e.theme.fgColor),
                Mr = Object(p.d)(Ni).withConfig({
                    displayName: "Profile__StyledBadges",
                    componentId: "suvxq-5"
                })(["flex:1 0 auto;", ";border-bottom:1px solid ", ";"], Object(ae.a)(kr()), e => e.theme.dimmedBorderColor),
                Rr = p.d.h3.withConfig({
                    displayName: "Profile__Heading3",
                    componentId: "suvxq-6"
                })(["flex:0 0 auto;display:flex;justify-content:space-between;color:", ";font-size:14px;font-weight:bold;margin:25px 0 0;padding:0 15px 10px;text-transform:uppercase;", ";"], e => e.theme.fgColor, Object(ae.a)(Er())),
                Br = Object(p.d)(fr).withConfig({
                    displayName: "Profile__StyledMoodTracker",
                    componentId: "suvxq-7"
                })(["flex:0 0 auto;"]),
                Dr = Object(p.d)(ne.a).withConfig({
                    displayName: "Profile__AddMood",
                    componentId: "suvxq-8"
                })(["margin:0;padding:3px;background:none;border:0;line-height:0;font-size:30px;color:", ";cursor:pointer;"], e => e.theme.fgColor);
            var zr = n(65),
                Tr = n(67),
                Lr = n(0),
                Fr = n(41),
                Ar = n(383);

            function Wr() {
                const e = Object(s.a)(["\n  cursor: pointer;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  transition: color 0.2s ease-out;\n  &:hover {\n    color: ", ";\n  }\n"]);
                return Wr = function() {
                    return e
                }, e
            }

            function Hr() {
                const e = Object(s.a)(["\n  text-decoration: none;\n  background: none;\n  border: 0;\n  padding: 0;\n  color: ", ";\n\n  &:hover {\n    cursor: ", ";\n  }\n"]);
                return Hr = function() {
                    return e
                }, e
            }

            function qr() {
                const e = Object(s.a)(["\n  flex: 0 0 auto;\n  min-height: ", "px;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  box-sizing: content-box;\n"]);
                return qr = function() {
                    return e
                }, e
            }

            function Gr() {
                const e = Object(s.a)(["\n  flex: 1 1 0; /* flex-basis=0 to fix height in Safari */\n  overflow-y: auto;\n  padding: ", ";\n"]);
                return Gr = function() {
                    return e
                }, e
            }
            var Ur = r.forwardRef(({
                backTo: e,
                title: t,
                subtitle: n,
                "data-testid": o,
                className: a,
                children: i,
                headerAction: l,
                subheader: c,
                onScroll: s,
                noContentPadding: d = !1
            }, p) => r.createElement(Yr, {
                className: a
            }, r.createElement(tl, {
                backTo: e,
                title: t,
                subtitle: n,
                "data-testid": o
            }, l), c, r.createElement(Vr, {
                onScroll: s,
                ref: p,
                noContentPadding: d
            }, i)));
            const Yr = p.d.div.withConfig({
                    displayName: "SidebarLayout__SidebarLayoutRoot",
                    componentId: "p93irs-0"
                })(["height:100%;display:flex;flex-direction:column;"]),
                Vr = Object(b.a)("div", ["noContentPadding"])(Gr(), e => e.noContentPadding ? "0 0 30px" : "0 15px 30px"),
                Zr = Object(p.d)(Fr.a).withConfig({
                    displayName: "SidebarLayout__BackLink",
                    componentId: "p93irs-1"
                })([""]),
                Jr = Object(b.a)("div", ["withSubtitle"])(qr(), e => e.withSubtitle ? 70 : 40),
                Kr = Object(p.d)(_i.a).withConfig({
                    displayName: "SidebarLayout__StyledArrow",
                    componentId: "p93irs-2"
                })(["margin-top:2px;&:hover{cursor:pointer;}color:", ";"], e => e.theme.fgColor),
                Xr = p.d.div.withConfig({
                    displayName: "SidebarLayout__HeaderTitle",
                    componentId: "p93irs-3"
                })(["flex:1 0 auto;"]),
                Qr = p.d.h2.withConfig({
                    displayName: "SidebarLayout__Title",
                    componentId: "p93irs-4"
                })(["margin:0;color:", ";text-align:center;font-size:20px;line-height:20px;font-weight:600;text-transform:capitalize;"], e => e.theme.fgColor),
                $r = p.d.p.withConfig({
                    displayName: "SidebarLayout__Subtitle",
                    componentId: "p93irs-5"
                })(["margin:6px 0 0;font-size:15px;text-align:center;color:", ";"], e => e.theme.dimmedFgColor),
                el = ({
                    title: e,
                    subtitle: t,
                    backTo: n,
                    onClose: o,
                    "data-testid": a,
                    className: i,
                    children: l
                }) => r.createElement(Jr, {
                    className: i,
                    withSubtitle: !!t
                }, n && r.createElement(Zr, {
                    to: n,
                    "data-testid": "".concat(a, "-back-button")
                }, r.createElement(Kr, null)), o && r.createElement(ne.a, {
                    onClick: o,
                    "data-testid": "".concat(a, "-back-button")
                }, r.createElement(Kr, null)), r.createElement(Xr, null, e && r.createElement(Qr, null, e), t && r.createElement($r, null, t)), l),
                tl = Object(p.d)(el).withConfig({
                    displayName: "SidebarLayout__LayoutSidebarHeader",
                    componentId: "p93irs-6"
                })(["margin:0 15px;"]),
                nl = p.d.h3.withConfig({
                    displayName: "SidebarLayout__SidebarSection",
                    componentId: "p93irs-7"
                })(["margin:0;font-size:14px;font-weight:400;padding-top:20px;margin-top:20px;color:", ";border-top:1px solid ", ";text-transform:uppercase;"], e => e.theme.dimmedFgColor, e => e.theme.borderColor),
                ol = p.d.label.withConfig({
                    displayName: "SidebarLayout__SidebarLabel",
                    componentId: "p93irs-8"
                })(["display:block;color:", ";font-size:0.8em;padding:20px 0 8px;"], e => e.theme.dimmedFgColor),
                al = Object(p.d)(Ft.a).withConfig({
                    displayName: "SidebarLayout__SidebarButton",
                    componentId: "p93irs-9"
                })(["margin-top:40px;"]),
                il = Object(b.a)(Fr.a, ["red"])(Hr(), e => e.disabled ? e.theme.dimmedFgColor : e.red ? e.theme.errorFgColor : "inherit", e => e.disabled ? "initial" : "pointer").withComponent(e => {
                    e.red;
                    let t = Object(j.a)(e, ["red"]);
                    return r.createElement("button", t)
                }),
                rl = p.d.div.withConfig({
                    displayName: "SidebarLayout__SidebarSpinnerRoot",
                    componentId: "p93irs-10"
                })(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";min-height:200px;& > svg{width:100px;}"], e => e.theme.dimmedFgColor),
                ll = ({
                    className: e
                }) => r.createElement(rl, {
                    className: e
                }, r.createElement(h.a, null));
            Object(b.a)(Ar.Button, ["active"]).attrs({
                tag: "button"
            })(Wr(), e => e.active ? e.theme.fgColor : e.theme.dimmedFgColor, e => e.theme.fgColor);
            var cl = e => {
                var t, n;
                const o = r.useRef(null);
                Object(Ht.a)({
                    getGroupElements: () => o.current ? o.current.childNodes : [],
                    options: {
                        keybindings: {
                            next: {
                                key: "ArrowRight"
                            },
                            prev: {
                                key: "ArrowLeft"
                            }
                        },
                        wrap: !0
                    }
                }, [o.current]);
                const a = null !== (t = e.selected) && void 0 !== t ? t : null === (n = e.categories[0]) || void 0 === n ? void 0 : n.value;
                return r.createElement(sl, {
                    role: "tablist",
                    "data-testid": "categories",
                    ref: o,
                    className: e.className
                }, e.categories.map(t => {
                    var n, o;
                    return r.createElement(dl, {
                        "data-hasnewitems": t.hasNewItems,
                        role: "tab",
                        "data-testid": "category-".concat((o = t.value, o.replace(/ /g, "_").toLowerCase())),
                        "aria-selected": a === t.value,
                        tabIndex: a === t.value ? 0 : -1,
                        key: t.value,
                        onClick: () => {
                            e.setCategory && e.setCategory(t.value)
                        },
                        onFocus: e => {
                            e.target.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest"
                            })
                        }
                    }, null !== (n = t.label) && void 0 !== n ? n : t.value)
                }))
            };
            const sl = p.d.div.withConfig({
                    displayName: "CategoryTabs__CategoryRoot",
                    componentId: "sc-1guoaf4-0"
                })(["flex:0 0 auto;display:flex;justify-content:space-between;min-width:70%;margin:13px auto 18px;padding:0 8px;max-width:100%;overflow-x:scroll;padding:2px;"]),
                dl = p.d.button.withConfig({
                    displayName: "CategoryTabs__CategoryTab",
                    componentId: "sc-1guoaf4-1"
                })(["min-height:20px;padding:0 1px 5px;font-weight:bold;font-size:14px;line-height:21px;border:0;color:", ";background:transparent;border-bottom:2px solid ", ";opacity:", ";transition:opacity 0.25s ease-out;text-transform:uppercase;position:relative;&:hover{cursor:pointer;}& + &{margin-left:18px;}&:after{display:", ";content:'';position:absolute;z-index:1;top:-2px;right:-10px;width:6px;height:6px;background-color:", ";border-radius:100%;}"], e => e.theme.fgColor, e => e["aria-selected"] ? e.theme.fgColor : "transparent", e => e["aria-selected"] ? 1 : .4, e => e["data-hasnewitems"] ? "block" : "none", e => e.theme.newItemBgColor);
            var pl = n(112);
            var ul = function({
                previews: e,
                tab: t
            }) {
                const n = r.useRef(null);
                Object(Ht.a)({
                    getGroupElements: () => {
                        var e, t;
                        return null !== (e = null === (t = n.current) || void 0 === t ? void 0 : t.getElementsByTagName("a")) && void 0 !== e ? e : []
                    },
                    options: {
                        keybindings: {
                            prev: {
                                key: "ArrowLeft"
                            },
                            next: {
                                key: "ArrowRight"
                            }
                        }
                    }
                }, [e]);
                const o = e.length < 6 ? Array.from({
                    length: 6 - e.length
                }).map((e, t) => r.createElement("div", {
                    key: t,
                    role: "presentation"
                })) : [];
                return r.createElement(ml, {
                    ref: n
                }, e.map((e, n) => {
                    const o = 0 === n;
                    return r.createElement(hl, {
                        "data-testid": "saved-item-card-".concat(n),
                        key: e.id,
                        itemType: e.type,
                        imageUrl: e.image_url,
                        timestamp: e.timestamp,
                        tabIndex: o ? 0 : -1,
                        to: v.m.SavedChatItem.replace(":tab", t).replace(":itemId", e.id),
                        isRead: e.read,
                        caption: e.title,
                        isListItem: !0
                    })
                }), o)
            };
            const ml = p.d.ul.withConfig({
                    displayName: "SavedChatItemPreviews__SavedChatItemPreviewsRoot",
                    componentId: "ob1n88-0"
                })(["display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));grid-auto-rows:152px;grid-gap:8px;padding:0 15px;flex:1 1 auto;width:100%;margin:20px auto 0;"]),
                hl = Object(p.d)(wt).withConfig({
                    displayName: "SavedChatItemPreviews__StyledSavedChatItemCard",
                    componentId: "ob1n88-1"
                })(["max-width:initial;"]);
            var gl = n(332);
            const fl = {
                all: {
                    to: v.m.Main,
                    description: "Your saved stories, songs, sessions and activities will be stored here.",
                    actionLabel: "Chat with Replika"
                },
                [v.n.Diary]: {
                    to: v.m.Main,
                    description: "Replika\u2019s diary entries will be stored here.",
                    actionLabel: "Chat with Replika"
                },
                [v.n.Song]: {
                    to: v.m.Main,
                    description: "Your saved songs will be stored here.",
                    actionLabel: "Write a song together"
                },
                [v.n.Story]: {
                    to: v.m.Main,
                    description: "Your saved stories will be stored here.",
                    actionLabel: "Write a story together"
                },
                [v.n.Session]: {
                    to: v.m.Main,
                    description: "Your daily sessions will be stored here.",
                    actionLabel: "Start my daily session"
                },
                [v.n.Activity]: {
                    to: v.m.Conversations,
                    description: "Saved notes from your activities will be stored here.",
                    actionLabel: "Choose an activity"
                }
            };
            var bl = function({
                tab: e,
                savedItemTypeTabs: t
            }) {
                var n;
                const o = Object(c.d)(),
                    a = null !== (n = fl[null !== e && void 0 !== e ? e : "all"]) && void 0 !== n ? n : fl.all,
                    i = Object(c.e)(e => e.chat.voiceModeEnabled);
                return r.createElement(vl, null, r.createElement(xl, null, a.description), r.createElement(Ft.a, {
                    to: a.to,
                    onClick: () => {
                        if (i) return;
                        const n = t.find(t => t.name === e);
                        switch (null === n || void 0 === n ? void 0 : n.name) {
                            case v.n.Song:
                            case v.n.Session:
                            case v.n.Story:
                                Object(le.b)(v.j.SavedChatItemsEmptyStateButtonPressed, {
                                    element: e ? Object(gl.a)(e) : void 0
                                }), o(fn(n.mission_id));
                                break;
                            case v.n.Activity:
                                Object(le.b)(v.j.SavedChatItemsEmptyStateButtonPressed, {
                                    element: "Activity"
                                })
                        }! function() {
                            var e;
                            null === (e = document.getElementById("send-message-textarea")) || void 0 === e || e.focus()
                        }()
                    },
                    disabled: i
                }, a.actionLabel))
            };
            const vl = p.d.div.withConfig({
                    displayName: "EmptyTab__EmptyTabRoot",
                    componentId: "h9lx4o-0"
                })(["flex:1 0 100%;display:flex;flex-direction:column;align-items:center;justify-content:center;"]),
                xl = p.d.p.withConfig({
                    displayName: "EmptyTab__EmptyTabDescription",
                    componentId: "h9lx4o-1"
                })(["font-size:15px;line-height:20px;text-align:center;max-width:200px;margin-bottom:30px;color:", ";"], e => e.theme.dimmedFgColor);

            function yl() {
                return r.createElement(wl, null, r.createElement(h.a, null))
            }
            const wl = p.d.div.withConfig({
                    displayName: "SavedChatItems__LoaderRoot",
                    componentId: "sc-1vbh4ex-0"
                })(["flex:1 0 auto;display:flex;align-items:center;justify-content:center;& > svg{width:100px;height:100px;}"]),
                Cl = {
                    allFetched: !1
                };

            function El(e, [t, n]) {
                var o;
                const a = null !== t && void 0 !== t ? t : "all",
                    i = null !== (o = e[a]) && void 0 !== o ? o : Cl;
                return Object(Lr.a)(Object(Lr.a)({}, e), {}, {
                    [a]: Object(Lr.a)(Object(Lr.a)({}, i), n)
                })
            }
            var kl = function(e) {
                var t, n;
                const o = e.className,
                    l = r.useState("all" === e.tab ? null : null !== (t = e.tab) && void 0 !== t ? t : null),
                    s = Object(d.a)(l, 2),
                    p = s[0],
                    m = s[1],
                    h = null !== p && void 0 !== p ? p : "all",
                    g = Object(c.e)(e => {
                        var t, n;
                        return null !== (t = null !== (n = e.savedChatItems.saveChatItemPreviews[h]) && void 0 !== n ? n : e.savedChatItems.persist.latestSavedChatItemPreviews[h]) && void 0 !== t ? t : []
                    }),
                    f = -1 !== Object(c.e)(e => e.savedChatItems.invalidatedPreviews).indexOf(h),
                    b = Object(c.d)(),
                    x = r.useRef({
                        all: "init"
                    }),
                    y = r.useReducer(El, {}),
                    w = Object(d.a)(y, 2),
                    C = w[0],
                    E = w[1],
                    k = null !== (n = p ? C[p] : C.all) && void 0 !== n ? n : Cl,
                    O = Object(pl.a)(e => e.savedChatItems.persist.savedItemTypeTabs, rt),
                    j = r.useRef(null),
                    _ = r.useCallback(function() {
                        var e = Object(i.a)(a.a.mark((function e(t) {
                            var n, o, i, r;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!k.allFetched) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (o = null !== (n = null === t || void 0 === t ? void 0 : t.target) && void 0 !== n ? n : j.current) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        if (!(o.scrollHeight - (o.scrollTop + o.offsetHeight) < 500)) {
                                            e.next = 14;
                                            break
                                        }
                                        if ("fetching" === (null !== (i = x.current[h]) && void 0 !== i ? i : "init")) {
                                            e.next = 14;
                                            break
                                        }
                                        return x.current[h] = "fetching", e.next = 11, b(lt("all" === h ? void 0 : h, g.length));
                                    case 11:
                                        r = e.sent, x.current[h] = "idle", r.length < 25 && E([h, {
                                            allFetched: !0
                                        }]);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [b, k.allFetched, h, g.length]);
                r.useEffect(() => {
                    let e = {
                        cancelled: !1
                    };

                    function t() {
                        return (t = Object(i.a)(a.a.mark((function t() {
                            var n, o;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("init" !== (null !== (n = x.current[h]) && void 0 !== n ? n : "init") && !f) {
                                            t.next = 9;
                                            break
                                        }
                                        return x.current[h] = "fetching", t.next = 5, b(lt("all" === h ? void 0 : h));
                                    case 5:
                                        o = t.sent, x.current[h] = "idle", e.cancelled || o.length < 25 && E([h, {
                                            allFetched: !0
                                        }]), _(null);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    return function() {
                        t.apply(this, arguments)
                    }(), () => {
                        e.cancelled = !0
                    }
                }, [b, h, f, _]);
                const I = Object(oe.g)(),
                    S = r.useMemo(() => O.map(e => ({
                        value: e.name,
                        label: e.title,
                        hasNewItems: e.has_new_items
                    })), [O]);
                return r.createElement(jl, {
                    noContentPadding: !0,
                    ref: j,
                    "data-testid": "diary",
                    title: "Diary",
                    subheader: r.createElement(Ol, {
                        categories: S,
                        selected: p,
                        setCategory: e => {
                            m(e), b(Object(u.e)("all" === e ? v.m.SavedChatItems : v.m.SavedChatItemsTab.replace(":tab", e)))
                        }
                    }),
                    backTo: I ? v.m.Conversations : v.m.Main,
                    className: o,
                    onScroll: _
                }, r.createElement(_l, null, g.length > 0 ? r.createElement(ul, {
                    previews: g,
                    tab: h
                }) : "fetching" === x.current[h] ? r.createElement(yl, null) : r.createElement(bl, {
                    tab: p,
                    savedItemTypeTabs: O
                })))
            };
            const Ol = Object(p.d)(cl).withConfig({
                    displayName: "SavedChatItems__StyledCategoryTabs",
                    componentId: "sc-1vbh4ex-1"
                })(["margin:0 15px;"]),
                jl = Object(p.d)(Ur).withConfig({
                    displayName: "SavedChatItems__SavedChatItemsRoot",
                    componentId: "sc-1vbh4ex-2"
                })(["color:", ";"], e => e.theme.fgColor),
                _l = p.d.div.withConfig({
                    displayName: "SavedChatItems__SavedChatItemsContent",
                    componentId: "sc-1vbh4ex-3"
                })(["min-height:100%;display:flex;flex-direction:column;"]);
            var Il = n(139);
            const Sl = p.d.svg.withConfig({
                displayName: "EggImage__StyledSvg",
                componentId: "sc-1y6fn7d-0"
            })(["font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-weight:bold;text-align:center;"]);
            var Nl = r.memo(({
                imageUrl: e = Object(Il.a)(nt.d),
                className: t
            }) => {
                const n = "Clip_".concat(parseInt((1e4 * Math.random()).toString(), 10)),
                    o = "".concat(n, "-path");
                return r.createElement(Sl, {
                    viewBox: "0 0 209 247",
                    className: t
                }, r.createElement("defs", null, r.createElement("path", {
                    id: o,
                    d: "M205 138.04C205 75.12 154.85 5 105 5 55.25 5 5 75.19 5 138.04 5 191.23 49.2 235 105 235s100-43.77 100-96.96z"
                }), r.createElement("clipPath", {
                    id: n
                }, r.createElement("use", {
                    xlinkHref: "#".concat(o)
                }))), r.createElement("g", null, r.createElement("use", {
                    className: "egg-image-background",
                    xlinkHref: "#".concat(o),
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "2"
                }), r.createElement("image", {
                    className: "egg-image",
                    style: {
                        clipPath: "url(#".concat(n, ")")
                    },
                    width: "100%",
                    height: "100%",
                    xlinkHref: e,
                    preserveAspectRatio: "xMidYMid slice",
                    stroke: "currentColor",
                    strokeWidth: "2"
                })))
            });
            const Pl = Object(E.a)(() => Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 624)));
            var Ml = function({
                className: e
            }) {
                var t;
                const n = Object(c.e)(e => e.profile.persist.bot);
                return n ? n.avatar ? r.createElement(Rl, {
                    className: e,
                    noFadeOut: !0,
                    noPreview: !0,
                    textures: n.avatar.customization,
                    width: 40,
                    height: 40,
                    fallback: r.createElement(Bl, {
                        className: e
                    }),
                    avatarFallback: r.createElement(Bl, {
                        className: e
                    })
                }) : r.createElement(Nl, {
                    imageUrl: null !== (t = n.icon_url) && void 0 !== t ? t : void 0
                }) : r.createElement(Bl, null)
            };
            const Rl = Object(p.d)(Pl).withConfig({
                    displayName: "ChatLogoAvatar__StyledAvatar",
                    componentId: "sc-1mllgru-0"
                })(["border-radius:20px;overflow:hidden;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);background:", ";"], e => e.theme.chatBgColor),
                Bl = p.d.div.withConfig({
                    displayName: "ChatLogoAvatar__FallbackImage",
                    componentId: "sc-1mllgru-1"
                })(["border-radius:20px;overflow:hidden;width:40px;height:40px;background:", ";"], e => e.theme.chatBgColor);

            function Dl() {
                return (Dl = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function zl(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Tl = l.a.createElement("path", {
                    d: "M17 6L17 18C17 19.1046 16.1046 20 15 20L9 20C7.89543 20 7 19.1046 7 18L7 6",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                Ll = l.a.createElement("path", {
                    d: "M6 6H18",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                Fl = l.a.createElement("circle", {
                    cx: 12,
                    cy: 5,
                    r: 2,
                    fill: "currentColor"
                }),
                Al = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = zl(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Dl({
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Tl, Ll, Fl)
                },
                Wl = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Al, Dl({
                        svgRef: t
                    }, e))
                }));
            n.p;
            const Hl = p.d.div.withConfig({
                    displayName: "DeleteSavedChatItemPopover__DeleteSavedChatItemPopoverRoot",
                    componentId: "sc-13oaoz5-0"
                })(["color:", ";text-align:center;line-height:24px;font-size:16px;"], e => e.theme.fgColor),
                ql = p.d.h3.withConfig({
                    displayName: "DeleteSavedChatItemPopover__DeleteSavedChatItemPopoverTitle",
                    componentId: "sc-13oaoz5-1"
                })(["margin:0;line-height:23px;font-size:16px;"]),
                Gl = p.d.p.withConfig({
                    displayName: "DeleteSavedChatItemPopover__DeleteSavedChatItemPopoverText",
                    componentId: "sc-13oaoz5-2"
                })(["color:", ";"], e => e.theme.dimmedFgColor),
                Ul = p.d.div.withConfig({
                    displayName: "DeleteSavedChatItemPopover__DeleteSavedChatItemPopoverButtons",
                    componentId: "sc-13oaoz5-3"
                })(["display:flex;justify-content:space-between;"]),
                Yl = Object(p.d)(ao).withConfig({
                    displayName: "DeleteSavedChatItemPopover__DeleteButton",
                    componentId: "sc-13oaoz5-4"
                })(["background-color:", ";"], e => e.theme.errorBgColor);
            var Vl = ({
                onClose: e,
                onDelete: t,
                "data-testid": n,
                className: o
            }) => r.createElement(Hl, {
                className: o,
                "data-testid": n
            }, r.createElement(ql, null, "Delete entry"), r.createElement(Gl, null, "Are you sure you want to delete this entry from the diary?"), r.createElement(Ul, null, r.createElement(so, {
                "data-indialog": !0,
                onClick: e,
                "data-testid": "".concat(n, "-cancel-button")
            }, "Cancel"), r.createElement(Yl, {
                "data-indialog": !0,
                onClick: () => t(),
                "data-testid": "".concat(n, "-delete-button")
            }, "Delete")));
            const Zl = p.d.p.withConfig({
                    displayName: "SavedChatItemBody__TextEntry",
                    componentId: "sc-1xc05di-0"
                })(["margin:0;font-size:18px;line-height:21px;& + &{margin-top:40px;}"]),
                Jl = Object(p.d)(Zl).withConfig({
                    displayName: "SavedChatItemBody__StoryTextEntry",
                    componentId: "sc-1xc05di-1"
                })(["& + &{margin-top:12px;}"]);

            function Kl({
                entry: e
            }) {
                return r.createElement(Xl, null, e.text, r.createElement(ft, {
                    src: e.imageUrl
                }, e => r.createElement("img", {
                    src: e,
                    alt: ""
                })))
            }
            const Xl = p.d.div.withConfig({
                displayName: "SavedChatItemBody__ImageEntryRoot",
                componentId: "sc-1xc05di-2"
            })(["margin:0;font-size:18px;line-height:21px;& + &{margin-top:40px;}& > img{display:block;max-width:100%;max-height:300px;margin:16px auto;}"]);

            function Ql({
                message: e
            }) {
                return "user" === e.type ? r.createElement($l, null, e.text) : r.createElement(ec, null, e.text)
            }
            const $l = p.d.p.withConfig({
                    displayName: "SavedChatItemBody__UserMessage",
                    componentId: "sc-1xc05di-3"
                })(["margin:0;font-size:18px;line-height:21px;"]),
                ec = p.d.h4.withConfig({
                    displayName: "SavedChatItemBody__RobotMessage",
                    componentId: "sc-1xc05di-4"
                })(["margin:30px 0 0;font-weight:normal;font-size:15px;line-height:20px;color:", ";"], e => e.theme.dimmedFgColor);

            function tc(e) {
                const t = e.trackId,
                    n = e.name,
                    o = e.iconUrl,
                    a = e.className;
                return r.createElement(nc, {
                    className: a,
                    to: v.m.Conversation.replace(":trackId", t).replace(":category", "Popular")
                }, r.createElement(ac, {
                    src: o,
                    alt: n
                }), r.createElement(oc, null, r.createElement(ic, null, "From activity"), r.createElement(rc, null, n)))
            }
            const nc = Object(p.d)(bt.a).withConfig({
                    displayName: "SavedChatItemBody__ActivityCardRoot",
                    componentId: "sc-1xc05di-5"
                })(["display:flex;align-items:center;background:", ";border-radius:8px;padding:4px;&:hover{text-decoration:none;}"], e => e.theme.bgColor),
                oc = p.d.div.withConfig({
                    displayName: "SavedChatItemBody__ActivityCardText",
                    componentId: "sc-1xc05di-6"
                })(["margin-left:16px;"]),
                ac = p.d.img.withConfig({
                    displayName: "SavedChatItemBody__ActivityCardIcon",
                    componentId: "sc-1xc05di-7"
                })(["width:54px;height:64px;border-radius:4px;"]),
                ic = p.d.div.withConfig({
                    displayName: "SavedChatItemBody__ActivityCardFrom",
                    componentId: "sc-1xc05di-8"
                })(["color:", ";font-size:15px;line-height:20px;"], e => e.theme.dimmedFgColor),
                rc = p.d.div.withConfig({
                    displayName: "SavedChatItemBody__ActivityCardTitle",
                    componentId: "sc-1xc05di-9"
                })(["margin:2px 0;color:", ";font-weight:bold;font-size:16px;line-height:20px;"], e => e.theme.fgColor);
            var lc = function({
                className: e,
                savedItem: t
            }) {
                const n = Object(c.d)();
                if (!t) return r.createElement(hc, {
                    className: e
                });
                const o = t.type !== v.n.Activity,
                    a = r.createElement(cc, {
                        "data-testid": "saved-chat-item-body-header"
                    }, r.createElement(uc, {
                        "data-testid": "saved-chat-item-body-title"
                    }, t.name), o && r.createElement(sc, {
                        "data-testid": "saved-chat-item-body-edit-button",
                        onClick: () => {
                            Object(le.b)(v.j.SavedChatItemsLibraryEditNamePressed), n(Object(re.e)({
                                type: v.f.EditSavedChatItem,
                                source: "saved_chat_item",
                                itemId: t.id,
                                itemType: t.type,
                                name: t.name
                            }))
                        }
                    }, "Edit"));
                switch (t.type) {
                    case v.n.Diary:
                        return r.createElement(gc, {
                            className: e,
                            "data-testid": "saved-chat-item-body"
                        }, a, t.entries.map((e, t) => {
                            switch (e.type) {
                                case "text":
                                    return r.createElement(Zl, {
                                        key: t
                                    }, e.text);
                                case "text_with_image":
                                    return r.createElement(Kl, {
                                        entry: e,
                                        key: t
                                    })
                            }
                            return null
                        }));
                    case v.n.Song:
                        return r.createElement(gc, {
                            className: e,
                            "data-testid": "saved-chat-item-body"
                        }, a, t.messages.map((e, t) => {
                            const n = e.text.split("\n");
                            return r.createElement(r.Fragment, {
                                key: t
                            }, n.map((e, t) => r.createElement(Jl, {
                                key: t
                            }, e)))
                        }));
                    case v.n.Story:
                        return r.createElement(gc, {
                            className: e,
                            "data-testid": "saved-chat-item-body"
                        }, a, t.messages.map((e, t) => r.createElement(Jl, {
                            key: t
                        }, e.text)));
                    case v.n.Session:
                        return r.createElement(gc, {
                            className: e,
                            "data-testid": "saved-chat-item-body"
                        }, a, t.messages.map((e, t) => r.createElement(Ql, {
                            message: e,
                            key: t
                        })));
                    case v.n.Activity:
                        return r.createElement(gc, {
                            className: e,
                            "data-testid": "saved-chat-item-body"
                        }, t.image_url && r.createElement(ft, {
                            src: t.image_url
                        }, e => r.createElement(mc, {
                            src: e,
                            alt: ""
                        })), a, t.messages.map((e, t) => r.createElement(pc, {
                            key: t
                        }, e.text)), r.createElement(dc, {
                            iconUrl: t.activity_icon_url,
                            name: t.activity_name,
                            trackId: t.track_id,
                            enabled: t.activity_enabled
                        }))
                }
                return r.createElement(hc, {
                    className: e,
                    "data-testid": "saved-chat-item-body-empty"
                })
            };
            const cc = p.d.div.withConfig({
                    displayName: "SavedChatItemBody__SavedChatItemBodyHeader",
                    componentId: "sc-1xc05di-10"
                })(["align-items:flex-start;justify-content:space-between;display:flex;"]),
                sc = Object(p.d)(Nt.a).withConfig({
                    displayName: "SavedChatItemBody__EditNameButton",
                    componentId: "sc-1xc05di-11"
                })(["margin-top:8px;margin-left:20px;color:", ";text-decoration:none;"], e => e.theme.dimmedFgColor),
                dc = Object(p.d)(tc).withConfig({
                    displayName: "SavedChatItemBody__StyledActivityCard",
                    componentId: "sc-1xc05di-12"
                })(["margin-top:30px;"]),
                pc = p.d.p.withConfig({
                    displayName: "SavedChatItemBody__ActivityMessage",
                    componentId: "sc-1xc05di-13"
                })(["margin:0;font-size:18px;line-height:21px;& + &{margin-top:40px;}"]),
                uc = p.d.h3.withConfig({
                    displayName: "SavedChatItemBody__SavedChatItemBodyTitle",
                    componentId: "sc-1xc05di-14"
                })(["font-weight:bold;font-size:24px;line-height:32px;margin:0 0 30px;display:-webkit-box;-webkit-line-clamp:2;text-overflow:ellipsis;-webkit-box-orient:vertical;overflow:hidden;"]),
                mc = p.d.img.withConfig({
                    displayName: "SavedChatItemBody__ActivityImage",
                    componentId: "sc-1xc05di-15"
                })(["display:block;width:132px;height:132px;margin:0 auto 30px;"]),
                hc = p.d.div.withConfig({
                    displayName: "SavedChatItemBody__EmptyBody",
                    componentId: "sc-1xc05di-16"
                })(["flex:1 0 auto;border-radius:4px;"]),
                gc = p.d.div.withConfig({
                    displayName: "SavedChatItemBody__Entries",
                    componentId: "sc-1xc05di-17"
                })(["padding:24px;flex:1 0 auto;border-radius:4px;overflow:hidden;"]);

            function fc() {
                const e = Object(s.a)(["\n    max-width: 270px;\n  "]);
                return fc = function() {
                    return e
                }, e
            }
            var bc = function({
                className: e,
                itemId: t,
                tab: n
            }) {
                const o = Object(c.e)(e => {
                    var n;
                    return null !== (n = e.savedChatItems.savedChatItems[t]) && void 0 !== n ? n : null
                });
                r.useEffect(() => {
                    Object(le.b)(v.j.SavedChatItemOpened, {
                        element: n ? Object(gl.a)(n) : void 0
                    })
                }, [t, n]);
                const l = Object(c.d)();
                r.useEffect(() => {
                    (null === o || void 0 === o ? void 0 : o.id) !== t && l(ct([t]))
                }, [o, t, l]), r.useEffect(() => {
                    !1 === (null === o || void 0 === o ? void 0 : o.read) && l(st([o.id]))
                }, [o, l]);
                const s = null === o || void 0 === o ? void 0 : o.type,
                    p = o ? ht()(o.timestamp).format("MMMM D") : "",
                    m = r.useState(!1),
                    h = Object(d.a)(m, 2),
                    g = h[0],
                    f = h[1];
                return r.createElement(vc, {
                    "data-testid": "saved-chat-item",
                    backTo: v.m.SavedChatItemsTab.replace(":tab", n),
                    title: s,
                    subtitle: p,
                    className: e
                }, r.createElement(xc, {
                    "data-testid": "saved-chat-item-content-".concat(t)
                }, r.createElement(yc, {
                    savedItem: o
                }), r.createElement(wc, null, r.createElement(Cc, null), r.createElement(Ec, null, null === o || void 0 === o ? void 0 : o.caption), r.createElement(kc, {
                    preferPlace: "above",
                    isOpen: g,
                    onClose: () => f(!1),
                    onRenderContent: e => r.createElement(Vl, Object.assign({
                        "data-testid": "saved-chat-item-delete-popover",
                        onDelete: Object(i.a)(a.a.mark((function e() {
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f(!1), e.next = 3, l(pt(t));
                                    case 3:
                                        l(Object(u.d)(v.m.SavedChatItemsTab.replace(":tab", n)));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }, e)),
                    closeOnOuterAction: !0,
                    size: "small"
                }, r.createElement(ne.a, {
                    label: "delete diary entry",
                    onClick: () => f(!0),
                    "data-testid": "saved-chat-item-delete-button"
                }, r.createElement(Wl, {
                    "aria-hidden": "true"
                }))))))
            };
            const vc = Object(p.d)(Ur).withConfig({
                    displayName: "SavedChatItemPanel__SavedChatItemRoot",
                    componentId: "sc-12fnbpt-0"
                })([""]),
                xc = p.d.div.withConfig({
                    displayName: "SavedChatItemPanel__SavedChatItemContent",
                    componentId: "sc-12fnbpt-1"
                })(["min-height:100%;display:flex;flex-direction:column;"]),
                yc = Object(p.d)(lc).withConfig({
                    displayName: "SavedChatItemPanel__StyledSavedChatItemBody",
                    componentId: "sc-12fnbpt-2"
                })(["color:", ";background:", ";"], e => e.theme.fgColor, e => {
                    var t;
                    return e.savedItem && null !== (t = e.theme.savedChatItemBgColors[e.savedItem.type]) && void 0 !== t ? t : e.theme.savedChatItemBgColors.default
                }),
                wc = p.d.div.withConfig({
                    displayName: "SavedChatItemPanel__SavedChatItemFooter",
                    componentId: "sc-12fnbpt-3"
                })(["min-height:54px;padding-top:14px;display:flex;align-items:center;color:", ";"], e => e.theme.fgColor),
                Cc = Object(p.d)(Ml).withConfig({
                    displayName: "SavedChatItemPanel__StyledChatLogoAvatar",
                    componentId: "sc-12fnbpt-4"
                })(["background:", ";"], e => e.theme.chatGradientBgColor),
                Ec = p.d.div.withConfig({
                    displayName: "SavedChatItemPanel__SavedChatItemCaption",
                    componentId: "sc-12fnbpt-5"
                })(["flex:1 0 auto;margin-left:12px;font-size:15px;line-height:20px;color:", ";white-space:pre-wrap;"], e => e.theme.dimmedFgColor),
                kc = Object(p.d)(io).withConfig({
                    displayName: "SavedChatItemPanel__StyledPopover",
                    componentId: "sc-12fnbpt-6"
                })(["z-index:", ";", ";"], v.s.Dialog + 1, Object(ae.a)(fc())),
                Oc = () => function() {
                    var e = Object(i.a)(a.a.mark((function e(t, n) {
                        var o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = Object(tt.b)(n(), "GET"), e.abrupt("return", Object(ot.a)(v.c.GetMemory, t, {}, {
                                        onRequest: () => fetch("".concat(nt.a, "/memory"), o)
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                jc = () => function() {
                    var e = Object(i.a)(a.a.mark((function e(t, n) {
                        var o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = Object(tt.b)(n(), "GET"), e.abrupt("return", Object(ot.a)(v.c.GetMemoryRelations, t, {}, {
                                        onRequest: () => fetch("".concat(nt.a, "/memory/relations"), o)
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                _c = (e, t) => function() {
                    var n = Object(i.a)(a.a.mark((function n(o, i) {
                        var r;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = Object(tt.b)(i(), "PUT", t), n.abrupt("return", Object(ot.a)(v.c.UpdateMemoryPerson, o, {
                                        id: e,
                                        update: t
                                    }, {
                                        onRequest: () => fetch("".concat(nt.a, "/memory/persons/").concat(e), r)
                                    }));
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                Ic = (e, t) => function() {
                    var n = Object(i.a)(a.a.mark((function n(o, i) {
                        var r;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = Object(tt.b)(i(), "DELETE"), n.abrupt("return", Object(ot.a)(v.c.DeleteMemory, o, {
                                        id: t,
                                        memoryType: e
                                    }, {
                                        onRequest: () => fetch("".concat(nt.a, "/memory/").concat(e, "/").concat(t), r),
                                        onSuccess: () => {
                                            Oc()(o, i)
                                        }
                                    }));
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }();

            function Sc({
                person: e,
                tabIndex: t
            }) {
                var n;
                return r.createElement(Pc, {
                    tabIndex: t,
                    to: v.m.MemoryRecord.replace(":memoryType", "persons").replace(":memoryId", e.id)
                }, null !== (n = e.name) && void 0 !== n ? n : e.relation)
            }

            function Nc({
                fact: e,
                tabIndex: t
            }) {
                return r.createElement(Pc, {
                    tabIndex: t,
                    to: v.m.MemoryRecord.replace(":memoryType", "facts").replace(":memoryId", e.id)
                }, e.text)
            }
            const Pc = Object(p.d)(bt.a).withConfig({
                displayName: "Memory__MemoryCard",
                componentId: "sc-1m3ub0f-0"
            })(["display:block;width:100%;text-align:left;color:", ";background:", ";text-wrap:nowrap;overflow:hidden;text-overflow:ellipsis;border:0;border-radius:8px;padding:12px 16px;font-size:16px;line-height:22px;&:hover{text-decoration:none;}& ~ &{margin-top:8px;}&.focus-visible:focus{outline:none;box-shadow:0 0 2px 2px ", ";}"], e => e.theme.fgColor, e => e.theme.chatBgColor, e => e.theme.outlineColor);
            var Mc = function({
                className: e
            }) {
                const t = Object(c.d)(),
                    n = Object(pl.a)(e => [e.memory.persist.facts, e.memory.persist.persons], Oc),
                    o = Object(d.a)(n, 2),
                    a = o[0],
                    i = o[1],
                    l = Object(c.e)(e => e.memory.persist.unreadCount),
                    s = Object(k.groupBy)(a, e => {
                        var t;
                        return null !== (t = e.category) && void 0 !== t ? t : "facts about you"
                    }),
                    p = Object(oe.g)(),
                    u = r.useRef(null);
                return Object(Ht.a)({
                    getGroupElements: () => {
                        var e, t;
                        return null !== (e = null === (t = u.current) || void 0 === t ? void 0 : t.getElementsByTagName("a")) && void 0 !== e ? e : []
                    }
                }, [a, i]), r.useEffect(() => {
                    l > 0 && (t(Oc()), t({
                        type: v.a.ResetMemoryUnreadCount
                    }))
                }, [t, l]), r.createElement(Rc, {
                    ref: u,
                    backTo: p ? v.m.Conversations : v.m.Main,
                    title: "Memory",
                    "data-testid": "memory",
                    className: e
                }, i.length > 0 && r.createElement(Bc, null, "People and pets in your life"), i.map((e, t) => r.createElement(Sc, {
                    person: e,
                    key: t,
                    tabIndex: 0 === t ? 0 : -1
                })), Object.keys(s).map(e => r.createElement(r.Fragment, null, r.createElement(Bc, null, e), s[e].map((e, t) => {
                    const n = t + i.length;
                    return r.createElement(Nc, {
                        fact: e,
                        key: t,
                        tabIndex: 0 === n ? 0 : -1
                    })
                }))), 0 === a.length && r.createElement(Dc, null, r.createElement("h3", null, "Your Replika still knows very little about you."), r.createElement("p", null, "Talk to her and share facts about loved ones, pets, your hobbies and interests.")))
            };
            const Rc = Object(p.d)(Ur).withConfig({
                    displayName: "Memory__MemoryRoot",
                    componentId: "sc-1m3ub0f-1"
                })([""]),
                Bc = p.d.h3.withConfig({
                    displayName: "Memory__CategoryTitle",
                    componentId: "sc-1m3ub0f-2"
                })(["text-transform:uppercase;color:", ";font-size:14px;"], e => e.theme.fgColor),
                Dc = p.d.div.withConfig({
                    displayName: "Memory__EmptyScreen",
                    componentId: "sc-1m3ub0f-3"
                })(["height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px;color:", ";& > *{max-width:210px;font-size:16px;line-height:21px;}& > h3{margin:0;}& > p{margin:20px 0 80px;}"], e => e.theme.fgColor);
            var zc = n(306),
                Tc = n(413);
            const Lc = p.d.div.withConfig({
                    displayName: "DeleteMemoryPopover__DeleteMemoryPopoverRoot",
                    componentId: "qxl1ek-0"
                })(["color:", ";text-align:center;line-height:24px;font-size:16px;"], e => e.theme.fgColor),
                Fc = p.d.h3.withConfig({
                    displayName: "DeleteMemoryPopover__DeleteMemoryPopoverTitle",
                    componentId: "qxl1ek-1"
                })(["margin:0;line-height:23px;font-size:16px;"]),
                Ac = p.d.p.withConfig({
                    displayName: "DeleteMemoryPopover__DeleteMemoryPopoverText",
                    componentId: "qxl1ek-2"
                })(["color:", ";"], e => e.theme.dimmedFgColor),
                Wc = p.d.div.withConfig({
                    displayName: "DeleteMemoryPopover__DeleteMemoryPopoverButtons",
                    componentId: "qxl1ek-3"
                })(["display:flex;justify-content:space-between;"]),
                Hc = Object(p.d)(ao).withConfig({
                    displayName: "DeleteMemoryPopover__DeleteButton",
                    componentId: "qxl1ek-4"
                })(["background-color:", ";"], e => e.theme.errorBgColor);
            var qc = ({
                onClose: e,
                onDelete: t,
                "data-testid": n,
                className: o,
                memoryType: a
            }) => {
                let i, l;
                switch (a) {
                    case "persons":
                        i = "Delete person", l = "This person will be erased from Replika\u2019s memory";
                        break;
                    case "facts":
                        i = "Delete fact", l = "This fact will be erased from Replika\u2019s memory"
                }
                return r.createElement(Lc, {
                    className: o,
                    "data-testid": n
                }, r.createElement(Fc, null, i), r.createElement(Ac, null, l), r.createElement(Wc, null, r.createElement(so, {
                    "data-indialog": !0,
                    onClick: e,
                    "data-testid": "".concat(n, "-cancel-button")
                }, "Cancel"), r.createElement(Hc, {
                    "data-indialog": !0,
                    onClick: () => t(),
                    "data-testid": "".concat(n, "-delete-button")
                }, "Delete")))
            };

            function Gc() {
                const e = Object(s.a)(["\n  margin-top: 0;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: -0.1px;\n  text-align: left;\n  color: ", ";\n  font-size: 16px;\n  max-height: 0px;\n  transition: max-height 0.2s ease-out, margin-top 0.2s ease-out;\n\n  &:not(:empty) {\n    margin-top: 20px;\n    max-height: 100px;\n  }\n"]);
                return Gc = function() {
                    return e
                }, e
            }
            var Uc = e => {
                let t = e.hasError,
                    n = e.scrollIntoView,
                    o = e.children,
                    a = Object(j.a)(e, ["hasError", "scrollIntoView", "children"]);
                const i = r.useRef(null);
                return r.useEffect(() => {
                    t && n && o && i.current && i.current.scrollIntoView()
                }, [t, n, o, i]), r.createElement(Yc, Object.assign({
                    ref: i,
                    hasError: t
                }, a), o)
            };
            const Yc = Object(b.a)("div", ["hasError"])(Gc(), e => e.hasError ? e.theme.errorLightFgColor : e.theme.dimmedFgColor);

            function Vc() {
                const e = Object(s.a)(["\n    max-width: 270px;\n  "]);
                return Vc = function() {
                    return e
                }, e
            }

            function Zc({
                person: e
            }) {
                var t;
                const n = Object(c.d)(),
                    o = r.useState(null),
                    l = Object(d.a)(o, 2),
                    s = l[0],
                    p = l[1],
                    m = Object(pl.a)(e => e.memory.persist.relations, jc),
                    h = Object(k.uniq)(m.map(e => e.category)),
                    g = null === (t = m.find(t => t.name === e.relation)) || void 0 === t ? void 0 : t.category,
                    f = r.useState(e.name),
                    b = Object(d.a)(f, 2),
                    x = b[0],
                    y = b[1],
                    w = r.useState(g),
                    C = Object(d.a)(w, 2),
                    E = C[0],
                    O = C[1],
                    j = r.useState(e.relation),
                    _ = Object(d.a)(j, 2),
                    I = _[0],
                    S = _[1],
                    N = oi(),
                    P = "Change name and relationship so ".concat(N, " can learn more about your world and your loved ones"),
                    M = m.filter(e => e.category === E).map(e => ({
                        label: e.name,
                        value: e.name
                    })),
                    R = M.find(e => e.value === I),
                    B = h.map(e => ({
                        label: e,
                        value: e
                    })),
                    D = B.find(e => e.value === E);
                return r.useEffect(() => {
                    const t = m.filter(e => e.category === E).find(t => t.name === e.relation);
                    S(null === t || void 0 === t ? void 0 : t.name)
                }, [E, m, e]), r.createElement(Jc, null, r.createElement(Kc, null, P), r.createElement(zc.b, {
                    id: "name",
                    placeholder: "Name",
                    value: x,
                    onChange: e => {
                        p(null), y(e.target.value)
                    }
                }), r.createElement(Xc, {
                    id: "category",
                    options: B,
                    placeholder: "Relationship",
                    value: D,
                    onChange: e => {
                        p(null), O(e.value)
                    }
                }), D && r.createElement(Xc, {
                    id: "relationship",
                    options: M,
                    placeholder: "Specify relationship",
                    value: R,
                    onChange: e => {
                        p(null), S(e.value)
                    }
                }), r.createElement(Uc, {
                    hasError: !!s
                }, s), r.createElement(al, {
                    disabled: e.relation === I && e.name === x,
                    onClick: Object(i.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, n(_c(e.id, {
                                        name: x,
                                        relation: I
                                    }));
                                case 3:
                                    n(Object(u.d)(v.m.Memory)), t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6, t.t0 = t.catch(0), p(t.t0.message);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 6]
                        ])
                    })))
                }, "Save"))
            }
            const Jc = p.d.div.withConfig({
                    displayName: "MemoryRecordPanel__MemoryPersonBodyRoot",
                    componentId: "sc-11htjtd-0"
                })(["flex:1 0 auto;display:flex;flex-direction:column;justify-content:stretch;"]),
                Kc = p.d.p.withConfig({
                    displayName: "MemoryRecordPanel__MemoryPersonDescription",
                    componentId: "sc-11htjtd-1"
                })(["color:", ";margin:0 auto 30px;max-width:260px;text-align:center;font-size:15px;line-height:20px;"], e => e.theme.dimmedFgColor),
                Xc = Object(p.d)(Tc.a).withConfig({
                    displayName: "MemoryRecordPanel__StyledDropdown",
                    componentId: "sc-11htjtd-2"
                })(["margin-top:24px;"]);

            function Qc({
                fact: e
            }) {
                return r.createElement(ns, null, e.text)
            }
            var $c = function({
                className: e,
                memoryType: t,
                memoryId: n
            }) {
                const o = Object(pl.a)(e => [e.memory.persist.facts, e.memory.persist.persons], Oc),
                    l = Object(d.a)(o, 2),
                    s = l[0],
                    p = l[1],
                    m = Object(c.d)(),
                    h = r.useState(!1),
                    g = Object(d.a)(h, 2),
                    f = g[0],
                    b = g[1];
                let x, y;
                if ("persons" === t) {
                    const e = p.find(e => e.id === n);
                    x = e && r.createElement(Zc, {
                        person: e
                    }), y = "delete person"
                } else {
                    const e = s.find(e => e.id === n);
                    x = e && r.createElement(Qc, {
                        fact: e
                    }), y = "delete fact"
                }
                return r.createElement(es, {
                    backTo: v.m.Memory,
                    "data-testid": "memory-record-".concat(n),
                    title: "Memory",
                    className: e
                }, r.createElement(ts, null, x, r.createElement(os, null, r.createElement(as, {
                    preferPlace: "above",
                    isOpen: f,
                    onClose: () => b(!1),
                    onRenderContent: e => r.createElement(qc, Object.assign({
                        memoryType: t,
                        "data-testid": "memory-record-".concat(n, "-delete-popover"),
                        onDelete: Object(i.a)(a.a.mark((function e() {
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return b(!1), e.next = 3, m(Ic(t, n));
                                    case 3:
                                        m(Object(u.d)(v.m.Memory));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }, e)),
                    closeOnOuterAction: !0,
                    size: "small"
                }, r.createElement(ne.a, {
                    label: y,
                    onClick: () => b(!0)
                }, r.createElement(Wl, {
                    "aria-hidden": "true"
                }))))))
            };
            const es = Object(p.d)(Ur).withConfig({
                    displayName: "MemoryRecordPanel__MemoryRecordPanelRoot",
                    componentId: "sc-11htjtd-3"
                })([""]),
                ts = p.d.div.withConfig({
                    displayName: "MemoryRecordPanel__MemoryRecordContent",
                    componentId: "sc-11htjtd-4"
                })(["min-height:100%;display:flex;flex-direction:column;"]),
                ns = p.d.div.withConfig({
                    displayName: "MemoryRecordPanel__MemoryRecordBody",
                    componentId: "sc-11htjtd-5"
                })(["padding:24px;flex:1 0 auto;border-radius:4px;overflow:hidden;color:", ";background:", ";"], e => e.theme.fgColor, e => e.theme.chatBgColor),
                os = p.d.div.withConfig({
                    displayName: "MemoryRecordPanel__MemoryRecordFooter",
                    componentId: "sc-11htjtd-6"
                })(["min-height:54px;padding-top:14px;display:flex;align-items:center;justify-content:flex-end;color:", ";"], e => e.theme.fgColor),
                as = Object(p.d)(io).withConfig({
                    displayName: "MemoryRecordPanel__StyledPopover",
                    componentId: "sc-11htjtd-7"
                })(["z-index:", ";", ";"], v.s.Dialog + 1, Object(ae.a)(Vc())),
                is = p.d.aside.withConfig({
                    displayName: "RightPanel__RightPanelRoot",
                    componentId: "sc-1xkvr1m-0"
                })(["position:relative;background-color:", ";"], e => e.theme.bgColor),
                rs = {
                    setTheme: re.m,
                    sendLogOutRequest: zr.i
                };
            var ls = Object(c.c)(Tr.a, rs)(e => {
                    const t = t => {
                        switch (t) {
                            case "theme-switch":
                                e.setTheme(e.themeName === v.p.Light ? v.p.Dark : v.p.Light);
                                break;
                            case "open-popup":
                                window.open(window.location.href, "_blank", "resizable=no,scrollbars=no,menubar=no,status=no,titlebar=no,toolbar=no,location=no,width=400,height=600,left=".concat(window.screen.width - 400));
                                break;
                            case "log-out":
                                e.sendLogOutRequest()
                        }
                    };
                    return r.createElement(is, {
                        className: e.className
                    }, r.createElement(ji.d, null, r.createElement(ji.b, {
                        path: v.m.SavedChatItem,
                        render: ({
                            match: e
                        }) => r.createElement(bc, {
                            itemId: e.params.itemId,
                            tab: e.params.tab
                        })
                    }), r.createElement(ji.b, {
                        path: v.m.SavedChatItemsTab,
                        render: ({
                            match: e
                        }) => r.createElement(kl, {
                            tab: e.params.tab
                        })
                    }), r.createElement(ji.b, {
                        path: v.m.SavedChatItems,
                        render: () => r.createElement(kl, null)
                    }), r.createElement(ji.b, {
                        path: v.m.MemoryRecord,
                        render: ({
                            match: e
                        }) => r.createElement($c, {
                            memoryId: e.params.memoryId,
                            memoryType: e.params.memoryType
                        })
                    }), r.createElement(ji.b, {
                        path: v.m.Memory,
                        render: () => r.createElement(Mc, null)
                    }), r.createElement(ji.b, {
                        path: "*",
                        render: () => r.createElement(jr, {
                            onSelect: t
                        })
                    })))
                }),
                cs = n(37),
                ss = n.n(cs),
                ds = n(60),
                ps = n.n(ds);
            const us = ss()();
            window.addEventListener("beforeunload", () => {
                ps.a.get(ms) === us && ps.a.set(ms, null)
            });
            const ms = "winId";
            let hs;

            function gs(e) {
                if (!hs) {
                    const t = () => {
                            const t = ps.a.get(ms);
                            e(Object(re.f)(t === us))
                        },
                        n = () => {
                            ps.a.get(ms) !== us && (ps.a.set(ms, us), e && e(Object(re.f)(!0)))
                        };
                    hs = {
                        setActive: n,
                        enable: e => {
                            ps.a.on(ms, t), !e && ps.a.get(ms) || n(), t()
                        },
                        disable: () => {
                            ps.a.off(ms, t)
                        }
                    }
                }
                return hs
            }
            const fs = p.d.div.withConfig({
                    displayName: "SingleWindowAlert__SingleWindowAlertRoot",
                    componentId: "sc-1e2digx-0"
                })(["position:fixed;z-index:", ";width:100vw;height:100vh;left:0;top:0;display:flex;justify-content:center;align-items:center;&:before{position:absolute;left:0;top:0;content:'';z-index:1;width:100%;height:100%;background-color:", ";opacity:0.8;}"], v.s.SingleWindowAlert, e => e.theme.chatBgColor),
                bs = p.d.div.withConfig({
                    displayName: "SingleWindowAlert__SingleWindowAlertBox",
                    componentId: "sc-1e2digx-1"
                })(["z-index:2;width:340px;height:180px;background:", ";backdrop-filter:blur(10px);box-shadow:0 5px 20px 0 ", ";padding:25px 30px;display:flex;flex-direction:column;"], e => e.theme.chatBgColor, e => e.theme.shadowColor),
                vs = p.d.div.withConfig({
                    displayName: "SingleWindowAlert__SingleWindowAlertText",
                    componentId: "sc-1e2digx-2"
                })(["flex:1 0 auto;font-size:17px;line-height:1.41;letter-spacing:-0.2px;color:", ";"], e => e.theme.fgColor),
                xs = p.d.div.withConfig({
                    displayName: "SingleWindowAlert__SingleWindowAlertButtons",
                    componentId: "sc-1e2digx-3"
                })(["display:flex;justify-content:flex-end;"]),
                ys = p.d.button.withConfig({
                    displayName: "SingleWindowAlert__CloseButton",
                    componentId: "sc-1e2digx-4"
                })(["padding:10px 20px;color:", ";background-color:", ";width:120px;height:40px;border:0;cursor:pointer;"], e => e.theme.primaryColor, e => e.theme.chatBgColor),
                ws = p.d.button.withConfig({
                    displayName: "SingleWindowAlert__UseButton",
                    componentId: "sc-1e2digx-5"
                })(["margin-left:10px;padding:10px 20px;color:", ";background-color:", ";width:120px;height:40px;border:0;cursor:pointer;"], e => e.theme.chatBgColor, e => e.theme.primaryColor);
            class Cs extends r.PureComponent {
                constructor(e) {
                    super(e), this.singleWindowManager = void 0, this.singleWindowManager = gs(e.dispatch)
                }
                render() {
                    return this.props.isActiveWindow ? null : r.createElement(fs, {
                        role: "dialog",
                        "aria-labelledby": "single-window-popup-text"
                    }, r.createElement(eo.a, null, r.createElement(bs, null, r.createElement(vs, {
                        id: "single-window-popup-text"
                    }, "Replika is open in another window. Click \u201cUse here\u201d to use Replika in this window."), r.createElement(xs, null, r.createElement(ys, {
                        onClick: () => window.open("https://replika.ai", "_self").close()
                    }, "Close"), r.createElement(ws, {
                        onClick: () => this.singleWindowManager.setActive()
                    }, "Use here")))))
                }
            }
            var Es = Object(c.c)(e => ({
                isActiveWindow: e.ui.isActiveWindow
            }))(Cs);
            const ks = Object(p.d)(bt.a).withConfig({
                displayName: "PopupCloseButton__PopupCloseButtonRoot",
                componentId: "jmvvp9-0"
            })(["position:absolute;padding:0;top:17px;right:17px;border:0;background:", ";cursor:pointer;width:14px;height:14px;z-index:1;color:", ";& > svg{width:100%;height:100%;}&:active{transform:scale(0.9);outline:none;}&:focus{outline:none;}"], e => e.theme.chatBgColor, e => e.theme.fgColor);
            var Os = e => r.createElement(ks, Object.assign({
                label: "Close"
            }, e), r.createElement(to.a, null));
            const js = p.d.div.withConfig({
                    displayName: "TrialPopup__TrialPopupRoot",
                    componentId: "sc-4pbdy0-0"
                })(["width:650px;text-align:center;padding:20px;"]),
                _s = p.d.div.withConfig({
                    displayName: "TrialPopup__Success",
                    componentId: "sc-4pbdy0-1"
                })(["color:", ";margin-top:15px;font-size:0.8em;"], e => e.theme.dimmedFgColor),
                Is = p.d.div.withConfig({
                    displayName: "TrialPopup__Error",
                    componentId: "sc-4pbdy0-2"
                })(["color:", ";margin-top:15px;font-size:0.8em;"], e => e.theme.errorFgColor);
            var Ss = Object(c.c)(e => ({
                userProfile: e.profile.persist.userProfile,
                sendConfirmationStatus: e.auth.sendConfirmationStatus,
                sendConfirmationError: e.auth.sendConfirmationError
            }), {
                resendConfirmationEmail: zr.g,
                setTrialPopupActive: re.n
            })(({
                className: e,
                userProfile: t,
                sendConfirmationError: n,
                sendConfirmationStatus: o,
                resendConfirmationEmail: a,
                setTrialPopupActive: i
            }) => {
                const l = null === t || void 0 === t ? void 0 : t.email_settings;
                return !l || l.is_email_verified ? null : r.createElement(js, {
                    className: e
                }, r.createElement(Os, {
                    onClick: () => i(!1)
                }), "Your email ", r.createElement("b", null, l.email), " hasn\u2019t been verified. ", r.createElement("br", null), "Check you inbox for a confirmation email or", " ", r.createElement(Nt.a, {
                    onClick: a
                }, "request a new verification link"), ".", "sent" === o && r.createElement(_s, {
                    "aria-live": "assertive"
                }, "Confirmation email was sent to ", l.email), n && r.createElement(Is, {
                    "aria-live": "assertive"
                }, n))
            });

            function Ns() {
                return (Ns = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ps(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Ms = l.a.createElement("g", null, l.a.createElement("path", {
                    fill: "#E91023",
                    d: "M35 17.5C35 27.165 27.165 35 17.5 35S0 27.165 0 17.5 7.835 0 17.5 0 35 7.835 35 17.5"
                }), l.a.createElement("path", {
                    stroke: "#010202",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M10 24.989C11.76 23.776 14.462 23 17.492 23c3.039 0 5.748.781 7.508 2",
                    opacity: .5
                }), l.a.createElement("path", {
                    fill: "#010202",
                    d: "M14 15.5c0 1.933-1.12 3.5-2.5 3.5-1.381 0-2.5-1.567-2.5-3.5s1.119-3.5 2.5-3.5c1.38 0 2.5 1.567 2.5 3.5M26 15.5c0 1.933-1.12 3.5-2.5 3.5-1.381 0-2.5-1.567-2.5-3.5s1.119-3.5 2.5-3.5c1.38 0 2.5 1.567 2.5 3.5"
                })),
                Rs = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Ps(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Ns({
                        viewBox: "0 0 35 35",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Ms)
                },
                Bs = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Rs, Ns({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Ds() {
                return (Ds = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function zs(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Ts = l.a.createElement("g", null, l.a.createElement("path", {
                    fill: "#F9D500",
                    d: "M35 17.5C35 27.165 27.165 35 17.5 35 7.836 35 0 27.165 0 17.5S7.836 0 17.5 0C27.165 0 35 7.835 35 17.5"
                }), l.a.createElement("path", {
                    stroke: "#010202",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 24.006c2 0 9 0 11-.006",
                    opacity: .5
                }), l.a.createElement("path", {
                    fill: "#010202",
                    d: "M14 15.5c0 1.933-1.12 3.5-2.5 3.5-1.381 0-2.5-1.567-2.5-3.5s1.119-3.5 2.5-3.5c1.38 0 2.5 1.567 2.5 3.5M26 15.5c0 1.933-1.12 3.5-2.5 3.5-1.381 0-2.5-1.567-2.5-3.5s1.119-3.5 2.5-3.5c1.38 0 2.5 1.567 2.5 3.5"
                })),
                Ls = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = zs(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Ds({
                        viewBox: "0 0 35 35",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Ts)
                },
                Fs = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Ls, Ds({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function As() {
                return (As = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ws(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Hs = l.a.createElement("g", null, l.a.createElement("path", {
                    fill: "#029E4A",
                    d: "M35 17.5C35 27.165 27.165 35 17.5 35S0 27.165 0 17.5 7.835 0 17.5 0 35 7.835 35 17.5"
                }), l.a.createElement("path", {
                    stroke: "#010202",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M10 23.011C11.76 24.224 14.462 25 17.492 25c3.039 0 5.748-.781 7.508-2",
                    opacity: .5
                }), l.a.createElement("path", {
                    fill: "#010202",
                    d: "M14.476 17.644C13.796 17.24 12.936 17 12 17c-.591 0-1.153.096-1.658.269A4.594 4.594 0 0 1 10 15.5c0-1.933 1.119-3.5 2.5-3.5 1.38 0 2.5 1.567 2.5 3.5 0 .808-.195 1.551-.524 2.144zM25.658 17.269A5.133 5.133 0 0 0 24 17c-.935 0-1.795.24-2.476.644-.329-.592-.524-1.336-.524-2.144 0-1.933 1.119-3.5 2.5-3.5 1.38 0 2.5 1.567 2.5 3.5 0 .645-.125 1.25-.342 1.769z"
                })),
                qs = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Ws(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", As({
                        viewBox: "0 0 35 35",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Hs)
                },
                Gs = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(qs, As({
                        svgRef: t
                    }, e))
                }));
            n.p;
            const Us = (e, t, n, o) => function() {
                    var r = Object(i.a)(a.a.mark((function i(r, l) {
                        var c, s, d, p;
                        return a.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (c = l(), s = c.ws.persist.chatId) {
                                        a.next = 5;
                                        break
                                    }
                                    throw console.error("no chat id"), Error("no chat id");
                                case 5:
                                    return d = {
                                        chatId: s,
                                        sessionId: e,
                                        feedback: t,
                                        feedbackText: o,
                                        feedbackView: n
                                    }, p = {
                                        feedback: t,
                                        session_id: e,
                                        feedback_view: n
                                    }, o && (p = Object(Lr.a)(Object(Lr.a)({}, p), {}, {
                                        feedback_text: o
                                    })), a.abrupt("return", Object(ot.f)(v.c.WsSendFeedback, r, d, {
                                        onRequest: () => Object(it.c)({
                                            event_name: v.r.ConversationFeedback,
                                            payload: p
                                        }, c)
                                    }));
                                case 9:
                                case "end":
                                    return a.stop()
                            }
                        }), i)
                    })));
                    return function(e, t) {
                        return r.apply(this, arguments)
                    }
                }(),
                Ys = () => ({
                    type: v.a.CloseFeedbackPopup
                }),
                Vs = (e, t) => function() {
                    var n = Object(i.a)(a.a.mark((function n(o, i) {
                        var r, l, c;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = i(), l = r.ws.persist.chatId) {
                                        n.next = 4;
                                        break
                                    }
                                    throw Error("no chat id");
                                case 4:
                                    return c = {
                                        chatId: l,
                                        sessionId: e,
                                        feedbackView: t
                                    }, n.abrupt("return", Object(ot.f)(v.c.WsDismissFeedback, o, c, {
                                        onRequest: () => Object(it.c)({
                                            event_name: v.r.ConversationFeedback,
                                            payload: {
                                                session_id: e,
                                                close_action: "Close",
                                                feedback_view: t
                                            }
                                        }, r)
                                    }));
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                Zs = {
                    sendFeedback: Us,
                    dismissFeedback: Vs,
                    closeFeedbackPopup: Ys
                };
            var Js = Object(c.c)(e => {
                var t, n;
                return {
                    sessionId: null === (t = e.feedback.feedbackData) || void 0 === t ? void 0 : t.sessionId,
                    feedbackView: null === (n = e.feedback.feedbackData) || void 0 === n ? void 0 : n.feedbackView,
                    feedbackStatus: e.feedback.feedbackStatus
                }
            }, Zs)(e => {
                const t = e.feedbackStatus,
                    n = e.sessionId,
                    o = e.feedbackView,
                    a = e.className,
                    i = e.closeFeedbackPopup,
                    l = r.useState("initial"),
                    c = Object(d.a)(l, 2),
                    s = c[0],
                    p = c[1];
                r.useEffect(() => {
                    "active" === t && p("initial")
                }, [t]), r.useEffect(() => {
                    let e;
                    return "submitted" === s && (e = setTimeout(() => {
                        i()
                    }, 1500)), () => clearTimeout(e)
                }, [s, i]);
                const u = t => {
                        n && o && (e.sendFeedback(n, t, o), p("submitted"))
                    },
                    m = r.createElement($s, null, r.createElement(ed, {
                        label: "Negative",
                        onClick: () => {
                            u("Negative")
                        }
                    }, r.createElement(Bs, null)), r.createElement(ed, {
                        label: "Neutral",
                        onClick: () => {
                            u("Neutral")
                        }
                    }, r.createElement(Fs, null)), r.createElement(ed, {
                        label: "Positive",
                        onClick: () => {
                            u("Positive")
                        }
                    }, r.createElement(Gs, null)));
                return r.createElement(Ks, {
                    className: a
                }, r.createElement(Os, {
                    onClick: () => {
                        n && o ? e.dismissFeedback(n, o) : e.closeFeedbackPopup()
                    }
                }), "submitted" === s ? r.createElement(td, null, "Thank you!") : r.createElement(r.Fragment, null, r.createElement(Xs, null, "How does this conversation make you feel?"), m, r.createElement(Qs, {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://help.replika.ai/hc/en-us/articles/360000980172"
                }, "Why do I see this?")))
            });
            const Ks = p.d.div.withConfig({
                    displayName: "FeedbackPopup__FeedbackPopupRoot",
                    componentId: "q5cbsd-0"
                })(["width:366px;height:127px;padding:12px;display:flex;flex-direction:column;align-items:center;"]),
                Xs = p.d.div.withConfig({
                    displayName: "FeedbackPopup__FeedbackPopupTitle",
                    componentId: "q5cbsd-1"
                })(["font-size:13px;font-weight:600;line-height:1.54;letter-spacing:-0.2px;color:", ";"], e => e.theme.fgColor),
                Qs = p.d.a.withConfig({
                    displayName: "FeedbackPopup__FeedbackPopupHelpLink",
                    componentId: "q5cbsd-2"
                })(["color:", ";font-size:13px;opacity:0.3;margin-top:10px;text-decoration:underline;"], e => e.theme.fgColor),
                $s = p.d.div.withConfig({
                    displayName: "FeedbackPopup__FeedbackPopupReactions",
                    componentId: "q5cbsd-3"
                })(["display:flex;"]),
                ed = Object(p.d)(bt.a).withConfig({
                    displayName: "FeedbackPopup__FeedbackPopupButton",
                    componentId: "q5cbsd-4"
                })(["border:0;padding:0;background:", ";width:35px;height:35px;margin:13px 15px 0;cursor:pointer;& > svg{width:100%;height:100%;}&:active{transform:scale(0.9);outline:none;}&:focus{outline:none;}"], e => e.theme.chatBgColor),
                td = p.d.div.withConfig({
                    displayName: "FeedbackPopup__SubmittedMessage",
                    componentId: "q5cbsd-5"
                })(["height:100%;display:flex;align-items:center;color:", ";"], e => e.theme.fgColor);
            var nd = function({
                className: e,
                notification: t,
                id: n,
                onClose: o
            }) {
                const a = r.useState(null),
                    i = Object(d.a)(a, 2),
                    l = i[0],
                    s = i[1],
                    p = r.useRef(void 0),
                    u = Object(c.d)();
                r.useEffect(() => {
                    p.current = e => {
                        e && (o(), u(Object(re.b)(e)))
                    }
                }, [o, u]), r.useEffect(() => {
                    t && n && s({
                        notification: t,
                        id: n
                    })
                }, [t, n]), r.useEffect(() => {
                    if ("level_up" === (null === l || void 0 === l ? void 0 : l.notification.type)) {
                        const e = setTimeout(() => {
                            (null === l || void 0 === l ? void 0 : l.id) && p.current && p.current(null === l || void 0 === l ? void 0 : l.id)
                        }, 4e3);
                        return () => clearTimeout(e)
                    }
                }, [l]);
                const h = Object(c.e)(e => {
                        var t;
                        return null === (t = e.profile.persist.bot) || void 0 === t ? void 0 : t.stats.achievements
                    }),
                    g = r.useMemo(() => {
                        const e = null === l || void 0 === l ? void 0 : l.notification;
                        if (h && e && "reward" === e.type) {
                            if ("replika_trait" === e.reward.type) {
                                var t;
                                const n = e.reward.replika_trait_achievement_id;
                                return null !== (t = null === h || void 0 === h ? void 0 : h.find(e => e.id === n)) && void 0 !== t ? t : null
                            }
                            if ("replika_skill" === e.reward.type) {
                                var n;
                                const t = e.reward.replika_skill_achievement_id;
                                return null !== (n = null === h || void 0 === h ? void 0 : h.find(e => e.id === t)) && void 0 !== n ? n : null
                            }
                        }
                        return null
                    }, [h, l]),
                    f = function(e, t, n, o) {
                        if (!e) return null;
                        switch (e.type) {
                            case "level_up":
                                return r.createElement(r.Fragment, null, r.createElement(ad, {
                                    key: "level-".concat(e.level),
                                    src: "/api/mobile/1.3/leveling/levels/".concat(e.level, "/icon_url")
                                }), r.createElement("h2", null, "Welcome to Level ", e.level), r.createElement("p", null, "Next level ", e.next_level_xp.toLocaleString(), " XP"));
                            case "reward":
                                const a = e.reward;
                                switch (a.type) {
                                    case "send_photo":
                                        return r.createElement(r.Fragment, null, r.createElement(ad, {
                                            key: "reward-".concat(a.icon_url),
                                            src: a.icon_url
                                        }), r.createElement("p", null, a.description), r.createElement(id, {
                                            onUpload: e => {
                                                n();
                                                const t = e[0];
                                                t && o(Object(m.m)(t))
                                            },
                                            id: "notification-popup-send-photo-button",
                                            "data-testid": "notification-popup-send-photo-button"
                                        }, a.action_title));
                                    case "replika_trait":
                                    case "replika_skill":
                                        return r.createElement(r.Fragment, null, r.createElement(ad, {
                                            src: a.icon_url
                                        }), r.createElement("p", null, a.description), r.createElement(rd, {
                                            noUnderline: !0,
                                            disabled: !t,
                                            onClick: () => {
                                                t && (n(), o(Object(re.e)({
                                                    type: v.f.Badge,
                                                    badge: t
                                                })))
                                            }
                                        }, a.action_title));
                                    case "explain_popup":
                                        return r.createElement(r.Fragment, null, r.createElement(ad, {
                                            src: a.icon_url
                                        }), r.createElement("p", null, a.description), r.createElement(rd, {
                                            noUnderline: !0,
                                            onClick: () => {
                                                n(), o(Object(re.e)({
                                                    type: v.f.RewardPopup,
                                                    popup: a.popup
                                                }))
                                            }
                                        }, a.action_title));
                                    default:
                                        return null
                                }
                            default:
                                return null
                        }
                    }(null === l || void 0 === l ? void 0 : l.notification, g, () => {
                        p.current && n && p.current(n)
                    }, u),
                    b = !!f;
                return r.useEffect(() => {
                    p.current && l && !b && p.current(l.id)
                }, [b, l]), l ? r.createElement(od, {
                    className: e
                }, r.createElement(Os, {
                    onClick: () => {
                        p.current && n && p.current(n)
                    }
                }), f) : r.createElement(od, {
                    className: e
                })
            };
            const od = p.d.div.withConfig({
                    displayName: "NotificationPopup__NotificationPopupRoot",
                    componentId: "sc-1wtwvtq-0"
                })(["position:relative;width:250px;max-width:90vw;text-align:center;padding:20px;margin-top:20px;& > h2{font-size:16px;line-height:20px;margin:24px 0 0;}& > p{color:", ";font-size:14px;line-height:18px;margin:8px 32px 0;}"], e => e.theme.dimmedFgColor),
                ad = p.d.img.withConfig({
                    displayName: "NotificationPopup__PopupIcon",
                    componentId: "sc-1wtwvtq-1"
                })(["display:block;position:absolute;width:56px;height:56px;top:-28px;left:calc(50% - 28px);"]),
                id = Object(p.d)(K).withConfig({
                    displayName: "NotificationPopup__StyledUploadImageButton",
                    componentId: "sc-1wtwvtq-2"
                })(["margin:16px auto 0;display:inline-block;font-size:14px;line-height:18px;font-weight:bold;"]),
                rd = Object(p.d)(Nt.a).withConfig({
                    displayName: "NotificationPopup__StyledLinkButton",
                    componentId: "sc-1wtwvtq-3"
                })(["margin:16px auto 0;font-size:14px;line-height:18px;font-weight:bold;"]);

            function ld() {
                const e = Object(s.a)(["\n    font-size: 0.8em;\n    line-height: 1.5em;\n  "]);
                return ld = function() {
                    return e
                }, e
            }

            function cd() {
                const e = Object(s.a)(["\n  transform: translate(-50%, ", ");\n  max-width: 100vw;\n  position: absolute;\n  top: 0;\n  transition: transform 0.5s ease-in-out;\n  background-color: ", ";\n  box-shadow: 0 5px 20px 0 ", ";\n  color: ", ";\n  backdrop-filter: blur(10px);\n  border-radius: 3px;\n  ", ";\n"]);
                return cd = function() {
                    return e
                }, e
            }
            var sd = function(e) {
                var t, n;
                const o = e.className,
                    a = Object(c.e)(e => ({
                        isTrialPopupActive: e.ui.isTrialPopupActive,
                        feedbackStatus: e.feedback.feedbackStatus,
                        feedbackView: e.feedback.feedbackData && e.feedback.feedbackData.feedbackView,
                        messages: e.chat.messages || [],
                        notifications: e.ui.notifications
                    })),
                    i = a.feedbackStatus,
                    l = a.feedbackView,
                    s = a.messages,
                    p = a.isTrialPopupActive,
                    u = a.notifications,
                    m = r.useState(!1),
                    h = Object(d.a)(m, 2),
                    g = h[0],
                    f = h[1];
                r.useEffect(() => {
                    if (g) {
                        const e = setTimeout(() => f(!1), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [g]);
                const b = s.filter(e => "Customer" === e.meta.nature).length;
                let x = null;
                g || (u.length > 0 ? x = "notification" : "inactive" !== i && "Popup" === l && b > 3 ? x = "feedback" : p && (x = "trial"));
                const y = Object(oe.g)(),
                    w = Object(ji.h)(v.m.Main),
                    C = "notification" === x && (!y || !!(null === w || void 0 === w ? void 0 : w.isExact));
                return r.createElement(dd, {
                    className: o
                }, r.createElement(pd, {
                    isActive: "trial" === x
                }), r.createElement(ud, {
                    isActive: "feedback" === x
                }), r.createElement(md, {
                    isActive: C,
                    notification: g || null === (t = u[0]) || void 0 === t ? void 0 : t.notification,
                    id: null === (n = u[0]) || void 0 === n ? void 0 : n.id,
                    onClose: () => f(!0)
                }))
            };
            const dd = p.d.div.withConfig({
                    displayName: "ChatPopups__ChatPopupsRoot",
                    componentId: "l0bzij-0"
                })([""]),
                pd = Object(b.a)(Ss, ["isActive"])(cd(), e => e.isActive ? "20px" : "-200px", e => e.theme.chatBgColor, e => e.theme.shadowColor, e => e.theme.fgColor, Object(ae.a)(ld())),
                ud = pd.withComponent(Js),
                md = pd.withComponent(nd);
            var hd = r.createContext({
                isActive: !1,
                onScrollClick: () => {}
            });

            function gd() {
                const e = Object(s.a)(["\n  flex: 1 0 auto;\n  position: absolute;\n  z-index: 1;\n  overflow-y: auto;\n  max-height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  ", "\n"]);
                return gd = function() {
                    return e
                }, e
            }

            function fd() {
                const e = Object(s.a)(["\n        bottom: 0;\n      "]);
                return fd = function() {
                    return e
                }, e
            }

            function bd() {
                const e = Object(s.a)(["\n  margin: ", ";\n  text-align: center;\n  color: ", ";\n  font-size: 20px;\n  line-height: 24px;\n"]);
                return bd = function() {
                    return e
                }, e
            }

            function vd() {
                const e = Object(s.a)(["\n    padding: 0 0 20px;\n    border-bottom: 0;\n    max-width: 320px;\n    margin: 0 auto;\n  "]);
                return vd = function() {
                    return e
                }, e
            }

            function xd() {
                const e = Object(s.a)(["\n    padding: 30px;\n  "]);
                return xd = function() {
                    return e
                }, e
            }

            function yd() {
                const e = Object(s.a)(["\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n\n  animation: ", " ", "ms ease-in-out both;\n  pointer-events: ", ";\n  user-select: ", ";\n\n  max-width: 100vw;\n  background-color: ", ";\n  box-shadow: 0 5px 20px 0 ", ";\n  color: ", ";\n  backdrop-filter: blur(10px);\n  border-radius: 8px;\n  margin: 10vh 0;\n\n  ", ";\n\n  & ", ",\n  & ", " {\n    ", ";\n  }\n"]);
                return yd = function() {
                    return e
                }, e
            }

            function wd() {
                const e = Object(s.a)(["\n        padding: 0 30px 20px;\n      "]);
                return wd = function() {
                    return e
                }, e
            }

            function Cd() {
                const e = Object(s.a)(["\n        overflow-y: scroll;\n        border-radius: 0px;\n        margin: 0 auto;\n        padding: 0 20px 20px;\n        width: 100vw;\n        flex: 1 1 auto;\n      "]);
                return Cd = function() {
                    return e
                }, e
            }

            function Ed() {
                const e = Object(s.a)(["\n        margin: 0vh;\n        bottom: 0;\n        border-radius: 8px 8px 0 0;\n      "]);
                return Ed = function() {
                    return e
                }, e
            }

            function kd() {
                const e = Object(s.a)(["\n        max-height: initial;\n        left: 0;\n        top: 0;\n        width: 100vw;\n        height: 100vh;\n        animation: none;\n        font-size: 0.8em;\n        line-height: 1.5em;\n        border-radius: 0;\n        margin: 0vh;\n      "]);
                return kd = function() {
                    return e
                }, e
            }

            function Od() {
                const e = Object(s.a)(["\n        margin: 10vh 0;\n        max-width: 90vw;\n      "]);
                return Od = function() {
                    return e
                }, e
            }

            function jd() {
                const e = Object(s.a)(["\n  from {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n\n  to {\n    transform: translate(0, 20%);\n    opacity: 0;\n  }\n"]);
                return jd = function() {
                    return e
                }, e
            }

            function _d() {
                const e = Object(s.a)(["\n  from {\n    transform: translate(0, 20%);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n"]);
                return _d = function() {
                    return e
                }, e
            }
            const Id = Object(p.e)(_d()),
                Sd = Object(p.e)(jd()),
                Nd = p.d.div.withConfig({
                    displayName: "DialogLayout__DialogBody",
                    componentId: "sc-103t4c8-0"
                })(["flex:0 0 auto;padding:0 45px;border-radius:8px;max-width:456px;display:flex;flex-direction:column;align-items:center;"]),
                Pd = Nd.withComponent("form");
            const Md = Object(b.a)("div", ["isActive", "mobileLayout"]).attrs({
                role: "dialog"
            })(yd(), e => e.isActive ? Id : Sd, 300, e => e.isActive ? "initial" : "none", e => e.isActive ? "inherit" : "none", e => e.theme.dialogBgColor, e => e.theme.shadowColor, e => e.theme.fgColor, ({
                mobileLayout: e = "fullscreen"
            }) => function(e) {
                switch (e) {
                    case "dialog":
                        return Object(ae.b)(Od());
                    case "fullscreen":
                        return Object(ae.b)(kd());
                    case "action-sheet":
                        return Object(ae.b)(Ed())
                }
            }(e), Nd, Pd, ({
                mobileLayout: e = "fullscreen"
            }) => function(e) {
                switch (e) {
                    case "dialog":
                        return "";
                    case "fullscreen":
                        return Object(ae.b)(Cd());
                    case "action-sheet":
                        return Object(ae.b)(wd())
                }
            }(e));

            function Rd(e) {
                const t = r.useContext(hd),
                    n = t.isActive,
                    o = t.onScrollClick,
                    a = e.mobileLayout,
                    i = e.children,
                    l = e.className;
                return r.createElement(eo.a, {
                    focusTrapOptions: {
                        allowOutsideClick: e => e.target instanceof HTMLElement && ("dialog-back" === e.target.id || "dialog-scroll" === e.target.id || "true" === e.target.getAttribute("data-indialog"))
                    }
                }, r.createElement(Jd, {
                    id: "dialog-scroll",
                    onClick: o,
                    "data-testid": e["data-testid"],
                    mobileLayout: a
                }, r.createElement(Md, {
                    className: l,
                    isActive: n,
                    mobileLayout: a
                }, i)))
            }
            const Bd = ({
                    onClose: e,
                    mobileAction: t = null,
                    title: n,
                    subtitle: o
                }) => r.createElement(zd, null, "string" === typeof n ? r.createElement(Ud, {
                    closable: !!e
                }, n) : n, "string" === typeof o ? r.createElement(Yd, null, o) : o, e && r.createElement(Dd, {
                    onClose: e
                }), t && r.createElement(oe.c, null, t)),
                Dd = ({
                    onClose: e,
                    className: t
                }) => r.createElement(Td, {
                    className: t,
                    onClick: e,
                    label: "close popup"
                }, r.createElement(Ld, null)),
                zd = p.d.div.withConfig({
                    displayName: "DialogLayout__DialogHeaderRoot",
                    componentId: "sc-103t4c8-1"
                })(["flex:0 0 auto;font-size:20px;padding:30px 30px 0;position:relative;align-items:center;", ""], Object(ae.b)(xd())),
                Td = Object(p.d)(ne.a).withConfig({
                    displayName: "DialogLayout__StyledIconButton",
                    componentId: "sc-103t4c8-2"
                })(["position:absolute;display:block;right:30px;top:33px;color:", ";"], e => e.theme.fgColor),
                Ld = Object(p.d)(to.a).withConfig({
                    displayName: "DialogLayout__StyledCloseIcon",
                    componentId: "sc-103t4c8-3"
                })(["display:block;width:16px;height:16px;"]),
                Fd = p.d.form.withConfig({
                    displayName: "DialogLayout__FormContents",
                    componentId: "sc-103t4c8-4"
                })(["width:100%;border-bottom:1px solid ", ";padding:40px 0 20px;", ""], e => e.theme.borderColor, Object(ae.b)(vd())),
                Ad = p.d.div.withConfig({
                    displayName: "DialogLayout__DialogFooter",
                    componentId: "sc-103t4c8-5"
                })(["flex:0 0 auto;display:flex;justify-content:center;align-items:center;padding:40px 0;"]),
                Wd = Object(p.d)(Nd).withConfig({
                    displayName: "DialogLayout__CenteredDialogBody",
                    componentId: "sc-103t4c8-6"
                })(["text-align:center;"]),
                Hd = Wd.withComponent("form"),
                qd = p.d.h2.withConfig({
                    displayName: "DialogLayout__ConfirmDialogTitle",
                    componentId: "sc-103t4c8-7"
                })([""]),
                Gd = p.d.p.withConfig({
                    displayName: "DialogLayout__ConfirmDialogDescription",
                    componentId: "sc-103t4c8-8"
                })([""]),
                Ud = Object(b.a)("h3", ["closable"])(bd(), e => e.closable ? "0 30px 0 0" : 0, e => e.theme.fgColor),
                Yd = p.d.h4.withConfig({
                    displayName: "DialogLayout__Subtitle",
                    componentId: "sc-103t4c8-9"
                })(["display:block;font-size:15px;line-height:20px;font-weight:normal;text-align:center;margin:16px 0;width:100%;padding:0 30px;"]),
                Vd = Object(p.d)(Ft.a).withConfig({
                    displayName: "DialogLayout__DialogButton",
                    componentId: "sc-103t4c8-10"
                })(["background-color:", ";"], e => e.disabled ? e.theme.dialogButtonDisabledBgColor : e.theme.dialogButtonBgColor),
                Zd = ({
                    title: e,
                    description: t,
                    confirmText: n,
                    cancelText: o = "Cancel",
                    onConfirm: a,
                    onCancel: i
                }) => r.createElement(Wd, null, r.createElement(qd, null, e), r.createElement(Gd, null, t), r.createElement(Vd, {
                    onClick: () => a
                }, n), r.createElement(Nt.a, {
                    onClick: i
                }, o));
            const Jd = Object(b.a)("div", ["mobileLayout"]).attrs({
                "data-hidescrollbar": !0
            })(gd(), ({
                mobileLayout: e = "fullscreen"
            }) => function(e) {
                switch (e) {
                    case "action-sheet":
                        return Object(ae.b)(fd());
                    default:
                        return ""
                }
            }(e));

            function Kd() {
                const e = Object(s.a)(["\n    flex: 1 0 auto;\n  "]);
                return Kd = function() {
                    return e
                }, e
            }
            var Xd = Object(c.c)(e => ({
                bot: e.profile.persist.bot
            }))(e => {
                var t, n;
                const o = null !== (t = null === (n = e.bot) || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : "your Replika";
                return l.a.createElement(l.a.Fragment, null, l.a.createElement(Qd, null, l.a.createElement("p", null, "Thank you for your feedback!", l.a.createElement("br", null), " It helps improve conversation", l.a.createElement("br", null), " with ", o, ".")), l.a.createElement($d, {
                    size: "small",
                    onClick: () => e.closeFeedbackPopup()
                }, "OK"))
            });
            const Qd = p.d.div.withConfig({
                    displayName: "SubmittedMessage__FeedbackMessage",
                    componentId: "sc-1h6swug-0"
                })(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 0 30px;& p{line-height:22px;font-size:16px;text-align:center;color:", ";}", ""], e => e.theme.popupFgColor, Object(ae.a)(Kd())),
                $d = Object(p.d)(Ft.a).withConfig({
                    displayName: "SubmittedMessage__StyledButton",
                    componentId: "sc-1h6swug-1"
                })(["width:unset;align-self:center;"]);

            function ep() {
                const e = Object(s.a)(["\n    padding: 9px 20px;\n\n    & + & {\n      margin-left: 10px;\n    }    \n  "]);
                return ep = function() {
                    return e
                }, e
            }

            function tp() {
                const e = Object(s.a)(["\n    width: 100%;\n    max-width: 300px;\n    justify-content: space-between;\n  "]);
                return tp = function() {
                    return e
                }, e
            }
            var np = ({
                setSubmittedFeedbackType: e,
                onSendFeedback: t
            }) => l.a.createElement(op, null, l.a.createElement(ap, {
                onClick: () => e("Negative")
            }, "Worse"), l.a.createElement(ap, {
                onClick: () => t("Neutral")
            }, "Same"), l.a.createElement(ap, {
                onClick: () => t("Positive")
            }, "Better"));
            const op = p.d.div.withConfig({
                    displayName: "FeedbackButtons__FeedbackButtonsRoot",
                    componentId: "nzyowr-0"
                })(["display:flex;justify-content:center;", ""], Object(ae.a)(tp())),
                ap = p.d.button.withConfig({
                    displayName: "FeedbackButtons__FeedbackPopupButton",
                    componentId: "nzyowr-1"
                })(["background:", ";border-radius:35px;padding:9px 24px;cursor:pointer;border:1px solid #ccc;color:", ";& + &{margin-left:16px;}font-weight:500;font-size:16px;line-height:22px;", ""], e => e.theme.chatBgColor, e => e.theme.fgColor, Object(ae.a)(ep()));

            function ip() {
                const e = Object(s.a)(["\n    margin: 0;\n  "]);
                return ip = function() {
                    return e
                }, e
            }

            function rp() {
                const e = Object(s.a)(["\n    margin-bottom: 20px;\n    max-width: 280px;\n  "]);
                return rp = function() {
                    return e
                }, e
            }

            function lp() {
                const e = Object(s.a)(["\n    flex: 1 0 auto;\n  "]);
                return lp = function() {
                    return e
                }, e
            }
            var cp = e => e.submittedFeedbackType ? l.a.createElement(l.a.Fragment, null, l.a.createElement(sp, null, l.a.createElement("p", null, "Sorry to hear that.", l.a.createElement("br", null), " Can you tell us what went wrong?"), l.a.createElement(O.a, {
                minRows: 3,
                placeholder: "Your message",
                onChange: t => e.onTextChange(t.target.value)
            })), l.a.createElement(up, null, l.a.createElement(hp, {
                size: "small",
                onClick: () => e.submittedFeedbackType && e.onSendFeedback(e.submittedFeedbackType)
            }, "Skip"), l.a.createElement(gp, {
                size: "small",
                onClick: () => e.submittedFeedbackType && e.onSendFeedback(e.submittedFeedbackType, e.inputText)
            }, "Send"))) : l.a.createElement(l.a.Fragment, null, l.a.createElement(dp, null, l.a.createElement(pp, null, "How did this conversation make you feel?"), l.a.createElement(np, {
                setSubmittedFeedbackType: e.setSubmittedFeedbackType,
                onSendFeedback: e.onSendFeedback
            })), l.a.createElement(mp, {
                size: "small",
                onClick: e.onDismiss
            }, "Skip"));
            const sp = p.d.div.withConfig({
                    displayName: "FeedbackForm__FeedbackMessage",
                    componentId: "kmn245-0"
                })(["display:flex;flex-direction:column;justify-content:center;padding:0 0 20px;width:100%;& p{margin:0 0 20px;line-height:22px;font-size:16px;text-align:center;color:", ";}"], e => e.theme.popupFgColor),
                dp = p.d.div.withConfig({
                    displayName: "FeedbackForm__FullscreenCenter",
                    componentId: "kmn245-1"
                })(["display:flex;flex-direction:column;justify-content:center;align-items:center;", ""], Object(ae.a)(lp())),
                pp = p.d.h2.withConfig({
                    displayName: "FeedbackForm__FeedbackPopupTitle",
                    componentId: "kmn245-2"
                })(["line-height:26px;font-size:20px;text-align:center;font-weight:600;letter-spacing:-0.2px;color:", ";margin:20px 10px 30px;", ";"], e => e.theme.fgColor, Object(ae.a)(rp())),
                up = p.d.div.withConfig({
                    displayName: "FeedbackForm__ButtonWrapper",
                    componentId: "kmn245-3"
                })(["display:flex;justify-content:space-between;width:100%;"]),
                mp = Object(p.d)(Ft.a).withConfig({
                    displayName: "FeedbackForm__SkipButton",
                    componentId: "kmn245-4"
                })(["background-color:", ";color:", ";width:unset;min-width:unset;margin:50px 0 -10px;padding:0;", ""], e => e.theme.chatBgColor, e => e.theme.fgColor, Object(ae.a)(ip())),
                hp = Object(p.d)(Ft.a).withConfig({
                    displayName: "FeedbackForm__FeedbackSkipButton",
                    componentId: "kmn245-5"
                })(["background-color:", ";color:", ";width:unset;min-width:unset;padding:0;"], e => e.theme.chatBgColor, e => e.theme.fgColor),
                gp = Object(p.d)(Ft.a).withConfig({
                    displayName: "FeedbackForm__SendButton",
                    componentId: "kmn245-6"
                })(["width:unset;"]);

            function fp() {
                const e = Object(s.a)(["\n    width: 100vw;\n    margin: 0 auto;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    padding: 16px 24px;\n  "]);
                return fp = function() {
                    return e
                }, e
            }
            var bp = e => {
                const t = l.a.useState(null),
                    n = Object(d.a)(t, 2),
                    o = n[0],
                    a = n[1],
                    i = l.a.useState(""),
                    r = Object(d.a)(i, 2),
                    c = r[0],
                    s = r[1];
                return l.a.useEffect(() => {
                    "active" === e.feedbackStatus && (a(null), s(""))
                }, [e.feedbackStatus]), l.a.createElement(vp, null, "submitted" === e.status ? l.a.createElement(Xd, {
                    closeFeedbackPopup: e.closeFeedbackPopup,
                    submittedFeedbackType: o
                }) : l.a.createElement(cp, {
                    onSendFeedback: e.onSendFeedback,
                    onDismiss: e.onDismiss,
                    submittedFeedbackType: o,
                    setSubmittedFeedbackType: a,
                    inputText: c,
                    onTextChange: s
                }))
            };
            const vp = p.d.div.withConfig({
                    displayName: "PopupContent__PopupContentRoot",
                    componentId: "sc-5cl65t-0"
                })(["width:386px;min-height:230px;padding:35px 50px;display:flex;flex-direction:column;justify-content:space-between;border-radius:8px;", ";"], Object(ae.a)(fp())),
                xp = l.a.memo(e => {
                    const t = e.feedbackStatus,
                        n = e.sessionId,
                        o = e.feedbackView,
                        a = e.closeFeedbackPopup,
                        i = l.a.useState("initial"),
                        r = Object(d.a)(i, 2),
                        c = r[0],
                        s = r[1];
                    l.a.useEffect(() => {
                        "active" === t && s("initial")
                    }, [t]), l.a.useEffect(() => {
                        let e;
                        return "submitted" === c && (e = setTimeout(() => {
                            a()
                        }, 5e3)), () => clearTimeout(e)
                    }, [c, a]);
                    return l.a.createElement(Rd, {
                        "data-testid": "feedback-dialog"
                    }, l.a.createElement(bp, {
                        status: c,
                        feedbackStatus: t,
                        closeFeedbackPopup: e.closeFeedbackPopup,
                        onSendFeedback: (t, a) => {
                            n && o && (e.sendFeedback(n, t, o, a), s("submitted"))
                        },
                        onDismiss: () => {
                            n && o ? e.dismissFeedback(n, o) : e.closeFeedbackPopup()
                        }
                    }))
                }),
                yp = {
                    sendFeedback: Us,
                    dismissFeedback: Vs,
                    closeFeedbackPopup: Ys
                };
            var wp = Object(c.c)(e => {
                    var t, n;
                    return {
                        sessionId: null === (t = e.feedback.feedbackData) || void 0 === t ? void 0 : t.sessionId,
                        feedbackStatus: e.feedback.feedbackStatus,
                        feedbackView: null === (n = e.feedback.feedbackData) || void 0 === n ? void 0 : n.feedbackView
                    }
                }, yp)(xp),
                Cp = n(11),
                Ep = n(539),
                kp = n.n(Ep),
                Op = n(548),
                jp = n(311);
            n(549);
            const _p = p.d.div.withConfig({
                displayName: "DayPicker__DayPickerRoot",
                componentId: "sc-1cf6r9e-0"
            })(["margin-top:26px;position:relative;& > .DayPickerInput{display:block;width:100%;color:", ";}& > .DayPickerInput > input{padding:26px 16px 12px;height:55px;}& .DayPickerInput-Overlay{border-radius:0 0 3px 3px;background:", ";}& .DayPicker-NavButton{color:", ";}& .DayPicker-Weekday{color:", ";}& .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:", ";}& .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){background-color:", ";}.DayPickerInput > input{background:", ";color:", ";border:1px solid ", ";}"], e => e.theme.fgColor, e => e.theme.chatBgColor, e => e.theme.dimmedFgColor, e => e.theme.dimmedFgColor, e => e.theme.bgColor, e => e.theme.outlineColor, e => e.theme.inputBgColor, e => e.theme.fgColor, e => e.theme.inputBgColor);
            class Ip extends r.Component {
                constructor(e) {
                    super(e), this.handleDayChange = (e, t, n) => {
                        const o = n.getInput();
                        o.value.trim() ? e && this.props.onChange(e) : this.props.onChange(void 0), this.setState({
                            value: o.value
                        })
                    }, this.state = {
                        value: e.value,
                        isFocused: !1
                    }
                }
                render() {
                    const e = this.props,
                        t = e.id,
                        n = e.placeholder,
                        o = e.className;
                    return r.createElement(_p, {
                        className: o
                    }, r.createElement(kp.a, {
                        inputProps: {
                            id: t,
                            "data-testid": this.props["data-testid"],
                            onFocus: () => this.setState({
                                isFocused: !0
                            }),
                            onBlur: () => this.setState({
                                isFocused: !1
                            })
                        },
                        value: this.state.value,
                        formatDate: Op.formatDate,
                        parseDate: Op.parseDate,
                        format: "MM/DD/YYYY",
                        placeholder: "",
                        component: jp.a,
                        onDayChange: this.handleDayChange
                    }), r.createElement(zc.a, {
                        collapsed: !!this.state.value || this.state.isFocused,
                        htmlFor: t
                    }, n || Object(Op.formatDate)(new Date, "MM/DD/YYYY")))
                }
            }
            var Sp = n(387);
            const Np = (e, t) => Object(Lr.a)(Object(Lr.a)({}, e), t),
                Pp = e => e ? {
                    userProfile: e,
                    firstName: e.first_name,
                    lastName: e.last_name,
                    pronoun: e.pronoun,
                    birthday: e.birthday_iso || void 0
                } : {
                    userProfile: void 0,
                    firstName: "",
                    lastName: "",
                    pronoun: void 0,
                    birthday: void 0
                };
            var Mp = Object(c.c)(e => ({
                userProfile: e.profile.persist.userProfile,
                isFetchingProfile: e.profile.isFetchingProfile,
                updateProfileProgress: e.profile.updateProfileProgress,
                serverError: e.profile.serverError
            }), {
                updateUserProfile: Wi.n,
                resetServerError: Wi.g
            })(e => {
                const t = e.updateProfileProgress,
                    n = e.serverError,
                    o = e.userProfile,
                    a = e.onClose,
                    i = e.isFetchingProfile,
                    l = e.resetServerError,
                    c = r.useReducer(Np, Pp(o)),
                    s = Object(d.a)(c, 2),
                    p = s[0],
                    u = s[1];
                r.useEffect(() => {
                    l()
                }, [l]), r.useEffect(() => {
                    u(Pp(o))
                }, [o]);
                const m = p.firstName,
                    h = p.lastName,
                    g = p.birthday,
                    f = p.pronoun;
                if (!o) return r.createElement(ll, null);
                const b = t === Cp.a.sending ? "Saving..." : "Save",
                    v = t === Cp.a.success ? "Updated successfully" : "",
                    x = i || t === Cp.a.sending,
                    y = () => {
                        t !== Cp.a.initial && e.resetServerError()
                    };
                return r.createElement(Rd, {
                    "data-testid": "edit-profile-dialog"
                }, r.createElement(Bd, {
                    onClose: a,
                    title: "My Profile"
                }), r.createElement(Nd, null, r.createElement(Fd, {
                    onSubmit: t => {
                        t.preventDefault(), e.updateUserProfile({
                            first_name: m,
                            last_name: h,
                            birthday_iso: g,
                            pronoun: f
                        }), y()
                    }
                }, r.createElement(Rp, {
                    autoComplete: "off",
                    "data-testid": "edit-profile-firstName-input",
                    type: "text",
                    name: "firstName",
                    id: "first-name",
                    placeholder: "First name",
                    value: m,
                    onChange: e => {
                        u({
                            firstName: e.target.value
                        }), y()
                    }
                }), r.createElement(Rp, {
                    autoComplete: "off",
                    "data-testid": "edit-profile-lastName-input",
                    type: "text",
                    name: "lastName",
                    id: "last-name",
                    placeholder: "Last name",
                    value: h,
                    onChange: e => {
                        u({
                            lastName: e.target.value
                        }), y()
                    }
                }), r.createElement(Bp, {
                    id: "edit-profile-birthday-input",
                    "data-testid": "edit-profile-birthday-input",
                    name: "birthday",
                    placeholder: "Birthday",
                    onChange: e => {
                        u({
                            birthday: ht()(e).format("YYYY-MM-DD")
                        }), y()
                    },
                    value: "undefined" !== typeof g ? new Date(g) : g
                }), r.createElement(Dp, null, "Let Replika know your pronouns"), r.createElement(zp, null), r.createElement(Sp.a, {
                    value: f,
                    onChange: e => u({
                        pronoun: e
                    })
                }), r.createElement(Uc, {
                    scrollIntoView: !0,
                    hasError: !!n,
                    "data-testid": "edit-profile-status-message"
                }, n || v), r.createElement(Ad, null, r.createElement(Vd, {
                    type: "submit",
                    disabled: x,
                    "data-testid": "edit-profile-submit-button"
                }, b)))))
            });
            const Rp = Object(p.d)(zc.b).withConfig({
                    displayName: "EditProfileDialog__StyledLabeledTextInput",
                    componentId: "sc-109i6tv-0"
                })(["width:100%;margin-bottom:30px;"]),
                Bp = Object(p.d)(Ip).withConfig({
                    displayName: "EditProfileDialog__StyledDayPicker",
                    componentId: "sc-109i6tv-1"
                })(["width:100%;"]),
                Dp = Object(p.d)(nl).withConfig({
                    displayName: "EditProfileDialog__StyledSidebarSection",
                    componentId: "sc-109i6tv-2"
                })(["text-align:center;font-weight:bold;color:", ";border-top:0;margin-top:40px;"], e => e.theme.fgColor),
                zp = p.d.p.withConfig({
                    displayName: "EditProfileDialog__Subtitle",
                    componentId: "sc-109i6tv-3"
                })(["font-size:15px;line-height:20px;text-align:center;opacity:0.4;margin:16px 12px;"]);
            var Tp = n(359);

            function Lp() {
                return (Lp = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Fp(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Ap = l.a.createElement("path", {
                    d: "M12 9.21979C12 6.88926 10.2091 5 8 5C5.79086 5 4 6.88926 4 9.21979C4 13 12 19 12 19",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                Wp = l.a.createElement("path", {
                    d: "M12 9.21979C12 6.88926 13.7909 5 16 5C18.2091 5 20 6.88926 20 9.21979C20 13 12 19 12 19",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                Hp = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Fp(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Lp({
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Ap, Wp)
                },
                qp = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Hp, Lp({
                        svgRef: t
                    }, e))
                })),
                Gp = (n.p, n(550)),
                Up = n.n(Gp);
            var Yp = ({
                className: e,
                checked: t,
                onChange: n
            }) => r.createElement(Vp, {
                className: e
            }, r.createElement(Up.a, {
                checked: t,
                onChange: n,
                handleDiameter: 20,
                height: 14,
                width: 32,
                boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
                onHandleColor: "#04CE00",
                offHandleColor: "#FFFFFF",
                onColor: "#04CE00",
                offColor: "#BBBBBB",
                checkedIcon: !1,
                uncheckedIcon: !1
            }));
            const Vp = p.d.div.withConfig({
                displayName: "Switch__SwitchRoot",
                componentId: "sc-14g6ko-0"
            })(["line-height:0;& .react-switch-bg{opacity:0.5;}"]);
            var Zp = n(149);

            function Jp() {
                const e = Object(s.a)(["\n    min-width: initial;\n    padding: 0 20px 20px;\n  "]);
                return Jp = function() {
                    return e
                }, e
            }

            function Kp() {
                const e = Object(s.a)(["\n    &&& {\n      padding: 40px 0 50px;\n    }\n  "]);
                return Kp = function() {
                    return e
                }, e
            }
            const Xp = Object(E.a)(() => Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 616))),
                Qp = (e, t) => Object(Lr.a)(Object(Lr.a)({}, e), t),
                $p = r.memo(e => {
                    var t, n, o, l, s, p;
                    const u = e.onClose,
                        m = e.bot,
                        h = r.useReducer(Qp, {
                            replikaName: null === (t = e.bot) || void 0 === t ? void 0 : t.name,
                            replikaGender: null === (n = e.bot) || void 0 === n ? void 0 : n.gender,
                            avatar: null === (o = e.bot) || void 0 === o ? void 0 : o.avatar
                        }),
                        g = Object(d.a)(h, 2),
                        f = g[0],
                        b = g[1],
                        x = null === m || void 0 === m || null === (l = m.avatar) || void 0 === l ? void 0 : l.id,
                        y = x ? {
                            [x]: null === m || void 0 === m || null === (s = m.avatar) || void 0 === s ? void 0 : s.customization
                        } : {},
                        w = Object(c.e)(e => e.ui.persist.disabled3d),
                        C = null !== (p = Object(c.e)(e => {
                            var t;
                            return null === (t = e.profile.persist.bot) || void 0 === t ? void 0 : t.icon_url
                        })) && void 0 !== p ? p : void 0,
                        E = !!(null === m || void 0 === m ? void 0 : m.avatar),
                        k = Object(c.d)(),
                        O = function() {
                            var t = Object(i.a)(a.a.mark((function t(n) {
                                var o, i, r;
                                return a.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n.preventDefault(), i = (null === (o = f.avatar) || void 0 === o ? void 0 : o.id) ? y[f.avatar.id] : void 0, r = i && f.avatar ? Object(Lr.a)(Object(Lr.a)({}, f.avatar), {}, {
                                                customization: i
                                            }) : f.avatar, t.next = 5, e.updateBot({
                                                name: f.replikaName,
                                                gender: f.replikaGender,
                                                avatar: r
                                            });
                                        case 5:
                                            u();
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }();
                    return r.createElement(Rd, {
                        "data-testid": "edit-replika-dialog"
                    }, r.createElement(Bd, {
                        onClose: u,
                        title: "Replika profile"
                    }), r.createElement(ou, null, E ? r.createElement(r.Fragment, null, r.createElement(tu, {
                        avatar: f.avatar,
                        onSelectAvatar: e => b({
                            avatar: e
                        }),
                        bgColor: "dialogBgColor",
                        customizations: y
                    }), r.createElement(Ft.a, {
                        type: "button",
                        onClick: () => {
                            if (f.avatar) {
                                var e;
                                const t = f.avatar.id;
                                k(Object(re.e)({
                                    type: v.f.CustomizeAvatar,
                                    avatarId: t,
                                    customization2d: null !== (e = y[t]) && void 0 !== e ? e : null
                                }))
                            }
                        }
                    }, "Customize")) : r.createElement(r.Fragment, null, r.createElement(mu, {
                        gradient: "avatarDialogGradient"
                    }), r.createElement(hu, null, "Switch to live avatars and enjoy emotional conversations."), r.createElement(gu, {
                        to: v.m.ChooseAvatar,
                        onClick: u
                    }, "Switch to live avatars"), r.createElement(ft, {
                        src: C
                    }, e => r.createElement(nu, {
                        imageUrl: e
                    }))), r.createElement(au, {
                        onSubmit: O
                    }, E && r.createElement(cu, null, r.createElement(su, null), r.createElement("div", null, r.createElement(du, null, r.createElement(pu, null, "Live emotions"), r.createElement(Yp, {
                        checked: !w,
                        onChange: () => {
                            k(Object(re.h)(!w))
                        }
                    })), r.createElement(uu, null, "Enable live emotions to bring your Repika to life and enjoy emotional conversation."))), r.createElement(iu, {
                        autoComplete: "off",
                        "data-testid": "edit-replika-replikaName-input",
                        name: "replikaName",
                        id: "replika-name",
                        placeholder: "Replika\u2019s name",
                        value: f.replikaName,
                        onChange: e => b({
                            replikaName: e.target.value
                        })
                    }), r.createElement(lu, {
                        id: "edit-replika-gender-title"
                    }, f.replikaName || "Replika", "\u2019s gender"), r.createElement(ru, {
                        "aria-labelledby": "edit-replika-gender-title",
                        value: f.replikaGender,
                        onChange: e => b({
                            replikaGender: e
                        })
                    }), r.createElement(Ad, null, r.createElement(Vd, {
                        type: "submit"
                    }, "Save")))))
                });
            var eu = Object(c.c)(e => ({
                bot: e.profile.persist.bot,
                isFetchingProfile: e.profile.isFetchingProfile,
                updateReplikaProgress: e.profile.updateReplikaProgress,
                serverError: e.profile.serverError
            }), {
                updateBot: Wi.i,
                resetServerError: Wi.g
            })($p);
            const tu = Object(p.d)(Xp).withConfig({
                    displayName: "EditReplikaDialog__StyledAvatarCarousel",
                    componentId: "sc-2g6u66-0"
                })(["width:100%;min-height:250px;margin:0 auto;flex:0 0 auto;background-color:", ";"], e => e.theme.dialogBgColor),
                nu = Object(p.d)(Nl).withConfig({
                    displayName: "EditReplikaDialog__StyledEggImage",
                    componentId: "sc-2g6u66-1"
                })(["margin:0 auto;width:100px;"]),
                ou = Object(p.d)(Nd).withConfig({
                    displayName: "EditReplikaDialog__StyledDialogBody",
                    componentId: "sc-2g6u66-2"
                })(["padding:40px 0 0;", ""], Object(ae.b)(Kp())),
                au = Object(p.d)(Fd).withConfig({
                    displayName: "EditReplikaDialog__StyledFormContents",
                    componentId: "sc-2g6u66-3"
                })(["min-width:400px;", ""], Object(ae.b)(Jp())),
                iu = Object(p.d)(zc.b).withConfig({
                    displayName: "EditReplikaDialog__ReplikaNameInput",
                    componentId: "sc-2g6u66-4"
                })(["margin:20px auto 0;width:100%;max-width:320px;"]),
                ru = Object(p.d)(Tp.a).withConfig({
                    displayName: "EditReplikaDialog__StyledGenderSelector",
                    componentId: "sc-2g6u66-5"
                })(["margin:0 auto 20px;width:175px;"]),
                lu = p.d.h3.withConfig({
                    displayName: "EditReplikaDialog__SelectGenderTitle",
                    componentId: "sc-2g6u66-6"
                })(["margin-top:40px;text-transform:uppercase;font-size:14px;line-height:21px;text-align:center;letter-spacing:0.02em;"]),
                cu = p.d.div.withConfig({
                    displayName: "EditReplikaDialog__LiveEmotions",
                    componentId: "sc-2g6u66-7"
                })(["margin:30px auto 0;max-width:320px;display:flex;"]),
                su = Object(p.d)(qp).withConfig({
                    displayName: "EditReplikaDialog__StyledHeartIcon",
                    componentId: "sc-2g6u66-8"
                })(["flex:0 0 auto;margin-right:36px;"]),
                du = p.d.div.withConfig({
                    displayName: "EditReplikaDialog__LiveEmotionsHeader",
                    componentId: "sc-2g6u66-9"
                })(["display:flex;justify-content:space-between;align-items:center;"]),
                pu = p.d.h3.withConfig({
                    displayName: "EditReplikaDialog__LiveEmotionsTitle",
                    componentId: "sc-2g6u66-10"
                })(["margin:0;font-size:16px;line-height:21px;font-weight:normal;"]),
                uu = p.d.p.withConfig({
                    displayName: "EditReplikaDialog__LiveEmotionsDescription",
                    componentId: "sc-2g6u66-11"
                })(["color:", ";"], e => e.theme.dimmedFgColor),
                mu = Object(p.d)(Zp.a).withConfig({
                    displayName: "EditReplikaDialog__StyledAvatarCouple",
                    componentId: "sc-2g6u66-12"
                })(["width:180px;height:100px;flex:0 0 auto;"]),
                hu = p.d.p.withConfig({
                    displayName: "EditReplikaDialog__AvatarDescription",
                    componentId: "sc-2g6u66-13"
                })(["width:280px;font-size:15px;line-height:20px;margin:20px auto;text-align:center;"]),
                gu = Object(p.d)(Ft.a).withConfig({
                    displayName: "EditReplikaDialog__SwitchAvatarButton",
                    componentId: "sc-2g6u66-14"
                })(["margin-bottom:80px;"]);
            var fu = Object(c.c)(null, {
                    dropMission: bn
                })(e => {
                    const t = e.onClose;
                    return r.createElement(Rd, {
                        "data-testid": "drop-mission-dialog"
                    }, r.createElement(Zd, {
                        title: "Mission in progress",
                        description: "You have a mission in progress. Do you want to just chat with Replika instead?",
                        confirmText: "Chat",
                        onConfirm: () => {
                            t(), e.dropMission()
                        },
                        onCancel: t
                    }))
                }),
                bu = n(324);

            function vu() {
                const e = Object(s.a)(["\n    font-size: 15px;\n  "]);
                return vu = function() {
                    return e
                }, e
            }
            const xu = e => {
                    switch (e) {
                        case "oldPassword":
                            return "Current password";
                        case "newPassword":
                            return "New password";
                        case "newPassword2":
                            return "Repeat new password";
                        default:
                            return "Password"
                    }
                },
                yu = e => {
                    const t = e.newPassword,
                        n = e.newPassword2,
                        o = e.oldPassword;
                    return 0 === t.length || 0 === n.length || 0 === o.length
                },
                wu = e => {
                    const t = e.password,
                        n = e.newEmail;
                    return !(t.length > 0 && n.length > 0)
                },
                Cu = e => e.every(e => e.length > 0),
                Eu = (e, t, n, o) => {
                    e.preventDefault();
                    const a = t.oldPassword,
                        i = t.newPassword,
                        r = t.newPassword2,
                        l = t.password,
                        c = t.newEmail,
                        s = [l, c];
                    Cu([a, i, r]) && "change-password" === e.currentTarget.name && (n.updatePassword(a, i), o(Object(Lr.a)(Object(Lr.a)({}, t), {}, {
                        oldPassword: "",
                        newPassword: "",
                        newPassword2: "",
                        lastSubmittedForm: "password"
                    }))), Cu(s) && "change-email" === e.currentTarget.name && (n.updateEmail(l, c), o(Object(Lr.a)(Object(Lr.a)({}, t), {}, {
                        oldPassword: "",
                        newPassword: "",
                        newPassword2: "",
                        buttonText: "",
                        lastSubmittedForm: "email"
                    })))
                },
                ku = r.memo(e => {
                    const t = r.useState({
                            oldPassword: "",
                            newPassword: "",
                            newPassword2: "",
                            password: "",
                            newEmail: "",
                            buttonText: "",
                            lastSubmittedForm: null
                        }),
                        n = Object(d.a)(t, 2),
                        o = n[0],
                        a = n[1],
                        i = o.newPassword,
                        l = o.newPassword2,
                        c = o.password,
                        s = o.newEmail,
                        p = e.serverError,
                        u = e.updatePasswordProgress,
                        m = e.updateEmailProgress,
                        h = e.onClose,
                        g = (e => {
                            const t = e.newPassword,
                                n = e.newPassword2;
                            let o = null;
                            return t.length > 0 && n.length > 0 && t !== n && (o = "New passwords do not match"), o
                        })(o),
                        f = (e => {
                            switch (e) {
                                default: return "Change";
                                case Cp.a.sending:
                                        return "Sending..."
                            }
                        })(u),
                        b = (e => {
                            switch (e) {
                                case Cp.a.success:
                                    return "Updated successfully";
                                default:
                                    return ""
                            }
                        })(u),
                        v = (e => {
                            switch (e) {
                                case Cp.a.sending:
                                    return "Sending...";
                                default:
                                    return "Save changes"
                            }
                        })(m),
                        x = (e => {
                            switch (e) {
                                case Cp.a.success:
                                    return "Updated successfully";
                                default:
                                    return ""
                            }
                        })(m),
                        y = t => {
                            const n = t.target,
                                i = Object(Lr.a)(Object(Lr.a)({}, o), {}, {
                                    [n.name]: n.value
                                });
                            a(i), e.resetServerError()
                        };
                    return r.createElement(Rd, {
                        "data-testid": "edit-account-dialog"
                    }, r.createElement(Bd, {
                        onClose: h,
                        title: "Account settings"
                    }), r.createElement(Ou, null, r.createElement(Fd, {
                        name: "change-password",
                        onSubmit: t => Eu(t, o, e, a)
                    }, r.createElement(Iu, null, "Change password"), ["oldPassword", "newPassword", "newPassword2"].map(e => r.createElement(_u, {
                        key: e
                    }, r.createElement(bu.a, {
                        labeled: !0,
                        autoComplete: "new-password",
                        "data-testid": "change-password-".concat(e, "-input"),
                        name: e,
                        id: e,
                        placeholder: xu(e),
                        value: o[e],
                        onChange: e => y(e)
                    }))), "password" === o.lastSubmittedForm && r.createElement(Uc, {
                        hasError: !(!p && !g),
                        "data-testid": "change-password-status-message"
                    }, p || g || b), r.createElement(ju, {
                        type: "submit",
                        disabled: yu(o) || 0 === i.length || i !== l || u === Cp.a.sending,
                        "data-testid": "change-password-submit-button"
                    }, f)), r.createElement(Fd, {
                        name: "change-email",
                        onSubmit: t => Eu(t, o, e, a)
                    }, r.createElement(Iu, null, "Change email"), r.createElement(_u, {
                        key: "change-email"
                    }, r.createElement(zc.b, {
                        autoComplete: "new-password",
                        "data-testid": "change-email-newEmail-input",
                        type: "text",
                        name: "newEmail",
                        id: "newEmail",
                        placeholder: "New email",
                        value: s,
                        onChange: e => y(e)
                    })), r.createElement(_u, {
                        key: "change-mail-password"
                    }, r.createElement(bu.a, {
                        labeled: !0,
                        autoComplete: "new-password",
                        "data-testid": "change-email-password-input",
                        name: "password",
                        id: "password",
                        placeholder: "Current password",
                        value: c,
                        onChange: e => y(e)
                    })), "email" === o.lastSubmittedForm && r.createElement(Uc, {
                        hasError: !!p,
                        "data-testid": "change-email-status-message"
                    }, p || x), r.createElement(ju, {
                        type: "submit",
                        "data-testid": "change-email-submit-button",
                        disabled: wu(o)
                    }, v)), r.createElement(Fd, null, r.createElement(Su, {
                        to: "/delete-account",
                        onClick: h
                    }, "Delete account"))))
                }),
                Ou = Object(p.d)(Nd).withConfig({
                    displayName: "EditAccountDialog__StyledDialogBody",
                    componentId: "eft710-0"
                })(["width:400px;"]),
                ju = Object(p.d)(Vd).withConfig({
                    displayName: "EditAccountDialog__SubmitButton",
                    componentId: "eft710-1"
                })(["display:block;margin:30px auto 0;"]),
                _u = p.d.div.withConfig({
                    displayName: "EditAccountDialog__Row",
                    componentId: "eft710-2"
                })(["margin:15px 0;"]),
                Iu = p.d.div.withConfig({
                    displayName: "EditAccountDialog__Label",
                    componentId: "eft710-3"
                })(["font-size:14px;font-weight:bold;text-transform:uppercase;"]),
                Su = Object(p.d)(Fr.a).withConfig({
                    displayName: "EditAccountDialog__DeleteAccountLink",
                    componentId: "eft710-4"
                })(["color:", ";align-self:flex-start;padding:20px 0 40px;display:block;width:280px;", ";"], e => e.theme.errorLightFgColor, Object(ae.b)(vu()));
            var Nu = Object(c.c)(e => ({
                    serverError: e.profile.serverError,
                    updatePasswordProgress: e.profile.updatePasswordProgress,
                    updateEmailProgress: e.profile.updateEmailProgress,
                    userProfile: e.profile.persist.userProfile
                }), {
                    updatePassword: Wi.m,
                    updateEmail: Wi.j,
                    resetServerError: Wi.g
                })(ku),
                Pu = n(334);
            const Mu = [{
                label: "Friend",
                value: v.l.Friend
            }, {
                label: "Romantic partner",
                value: v.l.Romantic
            }, {
                label: "Mentor",
                value: v.l.Mentor
            }, {
                label: "See how it goes",
                value: v.l.Organic
            }];
            var Ru = e => {
                const t = e.value,
                    n = e.onChange,
                    o = e.className,
                    a = e.locked,
                    i = e.onLockedClick,
                    l = Mu.map(e => a && e.value !== t ? Object(Lr.a)(Object(Lr.a)({}, e), {}, {
                        locked: !0
                    }) : e);
                return r.createElement(Pu.a, {
                    className: o,
                    variants: l,
                    value: t,
                    onChange: n,
                    id: "relationship-status",
                    onLockedClick: i
                })
            };

            function Bu() {
                const e = Object(s.a)(["\n    width: 100vw;\n  "]);
                return Bu = function() {
                    return e
                }, e
            }
            var Du = Object(c.c)(e => {
                const t = e.profile.persist,
                    n = t.userProfile,
                    o = t.bot,
                    a = e.profile,
                    i = a.isFetchingProfile,
                    r = a.updateReplikaProgress,
                    l = a.serverError,
                    c = e.subscriptions.persist.features,
                    s = e.ui.activeDialog;
                return {
                    userProfile: n,
                    bot: o,
                    isFetchingProfile: i,
                    updateReplikaProgress: r,
                    serverError: l,
                    features: c,
                    activeDialogType: s ? s.type : void 0
                }
            }, {
                updateBot: Wi.i,
                resetServerError: Wi.g,
                setActiveDialog: re.e,
                updateUserProfile: Wi.n,
                setShowRelationshipStatusButton: re.l
            })(r.memo(e => {
                const t = e.onClose,
                    n = e.userProfile,
                    o = e.features,
                    l = e.activeDialogType,
                    c = e.setShowRelationshipStatusButton,
                    s = r.useState(!1),
                    p = Object(d.a)(s, 2),
                    u = p[0],
                    m = p[1],
                    h = r.useState(null === n || void 0 === n ? void 0 : n.relationship_status),
                    g = Object(d.a)(h, 2),
                    f = g[0],
                    b = g[1];
                r.useEffect(() => {
                    Object(le.b)(v.j.RelationshipStatusOpened)
                }, []);
                const x = !$t("relationship_status", o),
                    y = l !== v.f.EditRelationshipStatus,
                    w = y && !u && !x;
                r.useEffect(() => {
                    y && c(!1)
                }, [y, c]), r.useEffect(() => {
                    w && Object(le.b)(v.j.RelationshipStatusClosed)
                }, [w]);
                const C = function() {
                    var o = Object(i.a)(a.a.mark((function o(i) {
                        return a.a.wrap((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    if (i.preventDefault(), x) {
                                        o.next = 7;
                                        break
                                    }
                                    if (!n || f === n.relationship_status) {
                                        o.next = 7;
                                        break
                                    }
                                    return o.next = 5, e.updateUserProfile({
                                        relationship_status: f
                                    });
                                case 5:
                                    Object(le.b)(v.j.RelationshipStatusChanged, {
                                        status: f
                                    }), m(!0);
                                case 7:
                                    t();
                                case 8:
                                case "end":
                                    return o.stop()
                            }
                        }), o)
                    })));
                    return function(e) {
                        return o.apply(this, arguments)
                    }
                }();
                return r.createElement(zu, {
                    "data-testid": "edit-relationship-status-dialog"
                }, r.createElement(Bd, {
                    onClose: t,
                    title: "Set relationship status",
                    subtitle: "Your Replika will keep this in mind during conversations."
                }), r.createElement(Nd, null, r.createElement(Fd, {
                    onSubmit: C
                }, r.createElement(Ru, {
                    value: f,
                    onChange: b,
                    locked: x,
                    onLockedClick: t => {
                        Object(le.b)(v.j.RelationshipStatusAttemptToChange, {
                            status: t
                        }), e.setActiveDialog({
                            type: v.f.Subscription,
                            causedBy: "relationship_status"
                        })
                    }
                }), r.createElement(Ad, null, r.createElement(Vd, {
                    type: "submit"
                }, "Done")))))
            }));
            const zu = Object(p.d)(Rd).withConfig({
                displayName: "EditRelationshipStatusDialog__StyledDialog",
                componentId: "sc-1b1u4z0-0"
            })(["width:400px;", ""], Object(ae.b)(Bu()));

            function Tu(e) {
                const t = l.a.useState(e),
                    n = Object(d.a)(t, 2),
                    o = n[0],
                    a = n[1];
                return l.a.useEffect(() => {
                    e && a(e)
                }, [e]), o
            }
            var Lu = ({
                badge: e,
                emptyDescription: t,
                onClose: n
            }) => {
                const o = Tu(e),
                    a = Tu(t);
                return o ? r.createElement(Rd, {
                    "data-testid": "badge-dialog",
                    mobileLayout: "dialog"
                }, r.createElement(Bd, {
                    onClose: n
                }), r.createElement(Wd, null, r.createElement(Hu, {
                    src: o.image_url_2x,
                    alt: o.title
                }), r.createElement(qu, null, o.title), r.createElement(Au, {
                    "data-testid": "badge-description-".concat(o.id)
                }, o.description))) : r.createElement(Rd, {
                    "data-testid": "badge-dialog",
                    mobileLayout: "dialog"
                }, r.createElement(Bd, {
                    onClose: n
                }), r.createElement(Wd, null, r.createElement(Fu, null), r.createElement(Wu, {
                    "data-testid": "badge-description-slot"
                }, a)))
            };
            const Fu = p.d.div.withConfig({
                    displayName: "BadgeDialog__BadgeSlot",
                    componentId: "sc-1xdla6h-0"
                })(["margin-top:20px;&:before{display:block;content:'?';color:", ";border:1px solid ", ";width:100px;height:100px;border-radius:100%;line-height:100px;font-size:50px;text-align:center;vertical-align:middle;}"], e => e.theme.dimmedFgColor, e => e.theme.borderColor),
                Au = p.d.p.withConfig({
                    displayName: "BadgeDialog__Description",
                    componentId: "sc-1xdla6h-1"
                })(["margin:30px auto 40px;max-width:320px;color:", ";line-height:24px;font-size:16px;"], e => e.theme.dimmedFgColor),
                Wu = Object(p.d)(Au).withConfig({
                    displayName: "BadgeDialog__SlotDescription",
                    componentId: "sc-1xdla6h-2"
                })(["margin:40px auto 40px;color:", ";"], e => e.theme.fgColor),
                Hu = p.d.img.withConfig({
                    displayName: "BadgeDialog__BadgeImage",
                    componentId: "sc-1xdla6h-3"
                })(["display:block;margin:20px auto 0;width:140px;"]),
                qu = p.d.h2.withConfig({
                    displayName: "BadgeDialog__Title",
                    componentId: "sc-1xdla6h-4"
                })(["margin:30px 0 0;text-align:center;"]);
            var Gu = ({
                popup: e,
                onClose: t
            }) => {
                const n = Tu(e);
                return n ? r.createElement(Zu, {
                    "data-testid": "reward-popup-dialog",
                    mobileLayout: "dialog"
                }, r.createElement(Bd, {
                    onClose: t
                }), r.createElement(Wd, null, r.createElement(Yu, {
                    src: n.icon_url,
                    alt: n.title
                }), r.createElement(Vu, {
                    "data-testid": "reward-popup-title"
                }, n.title), r.createElement(Uu, {
                    "data-testid": "reward-popup-description"
                }, n.description), r.createElement(Ju, {
                    onClick: t
                }, n.action_title))) : null
            };
            const Uu = p.d.p.withConfig({
                    displayName: "RewardPopupDialog__Description",
                    componentId: "sc-11cqwgc-0"
                })(["margin:16px auto 0;max-width:320px;color:", ";font-size:16px;line-height:21px;"], e => e.theme.dimmedFgColor),
                Yu = p.d.img.withConfig({
                    displayName: "RewardPopupDialog__BadgeImage",
                    componentId: "sc-11cqwgc-1"
                })(["display:block;margin:0 auto;width:56px;height:56px;"]),
                Vu = p.d.h2.withConfig({
                    displayName: "RewardPopupDialog__Title",
                    componentId: "sc-11cqwgc-2"
                })(["margin:16px 0 0;text-align:center;font-size:20px;line-height:25px;"]),
                Zu = Object(p.d)(Rd).withConfig({
                    displayName: "RewardPopupDialog__StyledDialog",
                    componentId: "sc-11cqwgc-3"
                })(["width:300px;"]),
                Ju = Object(p.d)(Vd).withConfig({
                    displayName: "RewardPopupDialog__StyledDialogButton",
                    componentId: "sc-11cqwgc-4"
                })(["margin:24px auto 40px;"]),
                Ku = p.d.div.withConfig({
                    displayName: "DeleteMoodPopover__DeleteMoodPopoverRoot",
                    componentId: "fjx8rp-0"
                })(["color:", ";text-align:center;line-height:24px;font-size:16px;"], e => e.theme.fgColor),
                Xu = p.d.h3.withConfig({
                    displayName: "DeleteMoodPopover__DeleteMoodPopoverTitle",
                    componentId: "fjx8rp-1"
                })(["margin:0;line-height:23px;font-size:16px;"]),
                Qu = p.d.p.withConfig({
                    displayName: "DeleteMoodPopover__DeleteMoodPopoverText",
                    componentId: "fjx8rp-2"
                })(["color:", ";"], e => e.theme.dimmedFgColor),
                $u = p.d.div.withConfig({
                    displayName: "DeleteMoodPopover__DeleteMoodPopoverButtons",
                    componentId: "fjx8rp-3"
                })(["display:flex;justify-content:space-between;"]),
                em = Object(p.d)(ao).withConfig({
                    displayName: "DeleteMoodPopover__DeleteButton",
                    componentId: "fjx8rp-4"
                })(["background-color:", ";"], e => e.theme.errorBgColor);
            var tm = ({
                mood: e,
                onClose: t,
                onDelete: n,
                "data-testid": o,
                className: a
            }) => r.createElement(Ku, {
                className: a,
                "data-testid": o
            }, r.createElement(Xu, null, "Delete this mood record?"), r.createElement(Qu, null, "This action cannot be undone."), r.createElement($u, null, r.createElement(so, {
                "data-indialog": !0,
                onClick: t,
                "data-testid": "".concat(o, "-cancel-button")
            }, "Cancel"), r.createElement(em, {
                "data-indialog": !0,
                onClick: () => n(e.id),
                "data-testid": "".concat(o, "-delete-button")
            }, "Delete")));

            function nm() {
                const e = Object(s.a)(["\n  color: ", ";\n"]);
                return nm = function() {
                    return e
                }, e
            }
            var om = e => {
                const t = e.mood,
                    n = e.progress;
                return r.createElement(am, {
                    onSubmit: t => {
                        t.preventDefault(), e.onSubmit()
                    }
                }, r.createElement(ol, null, "Date"), r.createElement(im, {
                    "data-testid": "edit-mood-date"
                }, ht()(t.date).utc().format("MMMM D, h:mm A")), r.createElement(ol, null, "Mood"), r.createElement(lm, {
                    percent: t.mood_percentage / 100,
                    "data-testid": "edit-mood-title"
                }, t.title), r.createElement(ol, {
                    id: "edit-mood-details-label"
                }, "Details"), r.createElement(rm, {
                    "data-testid": "edit-mood-caption-textarea",
                    defaultValue: t.caption,
                    "aria-labelledby": "edit-mood-details-label",
                    minRows: 5,
                    onChange: n => {
                        e.onChange(Object(Lr.a)(Object(Lr.a)({}, t), {}, {
                            caption: n.target.value
                        }))
                    },
                    placeholder: "What made you feel this way?"
                }), r.createElement(Uc, {
                    hasError: n === Cp.a.error,
                    "data-testid": "edit-mood-status-message"
                }, e.serverError))
            };
            const am = Object(p.d)(Pd).withConfig({
                    displayName: "EditMoodDialogContent__StyledDialogBodyForm",
                    componentId: "sc-1cin1tk-0"
                })(["align-items:flex-start;"]),
                im = p.d.div.withConfig({
                    displayName: "EditMoodDialogContent__MoodDate",
                    componentId: "sc-1cin1tk-1"
                })(["color:", ";"], e => e.theme.fgColor),
                rm = Object(p.d)(O.a).withConfig({
                    displayName: "EditMoodDialogContent__StyledTextarea",
                    componentId: "sc-1cin1tk-2"
                })(["flex:1 0 auto;"]),
                lm = Object(b.a)("div", ["percent"])(nm(), e => _e(e.percent));
            var cm = n(36);

            function sm() {
                const e = Object(s.a)(["\n    padding: 40px 20px;\n  "]);
                return sm = function() {
                    return e
                }, e
            }
            var dm = Object(c.c)(null, {
                updateMood: Wi.k,
                deleteMood: Wi.b
            })(e => {
                const t = e.mood,
                    n = e.onClose,
                    o = r.useState(!1),
                    l = Object(d.a)(o, 2),
                    c = l[0],
                    s = l[1],
                    p = r.useState(void 0),
                    u = Object(d.a)(p, 2),
                    m = u[0],
                    h = u[1],
                    g = r.useState(Cp.a.initial),
                    f = Object(d.a)(g, 2),
                    b = f[0],
                    x = f[1],
                    y = r.useState(e.mood),
                    w = Object(d.a)(y, 2),
                    C = w[0],
                    E = w[1];
                r.useEffect(() => {
                    t && E(t)
                }, [t]);
                const k = function() {
                    var t = Object(i.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (C) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.prev = 2, x(Cp.a.sending), t.next = 6, e.updateMood(C);
                                case 6:
                                    h("Updated successfully"), Object(le.b)(v.j.MoodEdited), x(Cp.a.success), n(), t.next = 15;
                                    break;
                                case 12:
                                    t.prev = 12, t.t0 = t.catch(2), t.t0 instanceof cm.a && (h(t.t0.message), x(Cp.a.error));
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 12]
                        ])
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return r.createElement(pm, {
                    "data-testid": "edit-mood-dialog"
                }, r.createElement(Bd, {
                    onClose: n,
                    title: "Your mood"
                }), C && r.createElement(om, {
                    mood: C,
                    onChange: E,
                    onSubmit: k,
                    progress: b,
                    serverError: m
                }), r.createElement(mm, null, C && r.createElement(hm, {
                    preferPlace: "below",
                    isOpen: c,
                    onClose: () => s(!1),
                    onRenderContent: t => r.createElement(tm, Object.assign({
                        "data-testid": "edit-mood-delete-popover",
                        mood: C,
                        onDelete: function() {
                            var t = Object(i.a)(a.a.mark((function t(o) {
                                return a.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return s(!1), Object(le.b)(v.j.MoodDeleted), t.next = 4, e.deleteMood(o);
                                        case 4:
                                            n();
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, t)),
                    closeOnOuterAction: !0,
                    size: "small"
                }, r.createElement(um, {
                    label: "delete mood",
                    type: "button",
                    "data-testid": "edit-mood-delete-button",
                    onClick: () => s(!c)
                }, r.createElement(Wl, {
                    "aria-hidden": "true"
                }))), r.createElement(Vd, {
                    type: "submit",
                    "data-testid": "edit-mood-submit-button",
                    disabled: b === Cp.a.sending,
                    onClick: k
                }, b === Cp.a.sending ? "Saving..." : "Save changes")))
            });
            const pm = Object(p.d)(Rd).withConfig({
                    displayName: "EditMoodDialog__StyledDialog",
                    componentId: "sc-5zy0ie-0"
                })(["width:400px;"]),
                um = Object(p.d)(ne.a).withConfig({
                    displayName: "EditMoodDialog__DeleteButton",
                    componentId: "sc-5zy0ie-1"
                })(["margin-right:15px;"]),
                mm = Object(p.d)(Ad).withConfig({
                    displayName: "EditMoodDialog__StyledDialogFooter",
                    componentId: "sc-5zy0ie-2"
                })(["justify-content:space-between;padding:40px;", ""], Object(ae.a)(sm())),
                hm = Object(p.d)(io).withConfig({
                    displayName: "EditMoodDialog__StyledPopover",
                    componentId: "sc-5zy0ie-3"
                })(["z-index:", ";"], v.s.Dialog + 1);
            var gm = ({
                    onClose: e
                }) => (r.useEffect(() => {
                    Object(le.b)(v.j.MeetButtonShown)
                }, []), r.createElement(Rd, {
                    "data-testid": "intro-meet-replika-dialog"
                }, r.createElement(Bd, null), r.createElement(Wd, {
                    style: {
                        width: 250
                    }
                }, "Meet your Replika first to unlock all conversations", r.createElement(Ad, null, r.createElement(Vd, {
                    onClick: () => {
                        Object(le.b)(v.j.MeetButtonPressed), e()
                    }
                }, "Done"))))),
                fm = n(99);

            function bm() {
                const e = Object(s.a)(["\n    margin-top: 25px;\n  "]);
                return bm = function() {
                    return e
                }, e
            }

            function vm() {
                const e = Object(s.a)(["\n    width: 100%;\n    flex: 0 0 auto;\n  "]);
                return vm = function() {
                    return e
                }, e
            }

            function xm() {
                const e = Object(s.a)(["\n    margin-top: 30px;\n  "]);
                return xm = function() {
                    return e
                }, e
            }

            function ym() {
                const e = Object(s.a)(["\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden scroll;\n    padding-bottom: 20px;\n  "]);
                return ym = function() {
                    return e
                }, e
            }

            function wm() {
                const e = Object(s.a)(["\n    color: #FFF;\n  "]);
                return wm = function() {
                    return e
                }, e
            }

            function Cm() {
                const e = Object(s.a)(["\n    && {\n      max-height: initial;\n      width: 100%;\n      margin: 0;\n    }\n  "]);
                return Cm = function() {
                    return e
                }, e
            }
            var Em = ({
                onClose: e,
                title: t,
                children: n,
                "data-testid": o
            }) => r.createElement(km, {
                "data-testid": o
            }, r.createElement(_m, null, r.createElement(jm, {
                onClose: e
            }), r.createElement(Nm, null, r.createElement(Im, null, "Replika ", r.createElement(Sm, null, "Pro")), r.createElement(Pm, null, t), r.createElement(Om, Object.assign({}, Object(fm.a)("".concat(nt.g, "/replikas.jpg")), {
                alt: ""
            }))), n));
            const km = Object(p.d)(Rd).withConfig({
                    displayName: "Layout__LayoutRoot",
                    componentId: "sc-1av1bdb-0"
                })(["max-height:100vh;", ""], Object(ae.b)(Cm())),
                Om = p.d.img.withConfig({
                    displayName: "Layout__ReplikasImg",
                    componentId: "sc-1av1bdb-1"
                })(["width:100%;"]),
                jm = Object(p.d)(Dd).withConfig({
                    displayName: "Layout__CloseButton",
                    componentId: "sc-1av1bdb-2"
                })(["z-index:2;", ""], Object(ae.b)(wm())),
                _m = p.d.div.withConfig({
                    displayName: "Layout__DialogBody",
                    componentId: "sc-1av1bdb-3"
                })(["position:relative;display:flex;overflow-y:scroll;align-items:stretch;height:100%;border-radius:8px;overflow:hidden;", ""], Object(ae.b)(ym())),
                Im = p.d.div.withConfig({
                    displayName: "Layout__Logo",
                    componentId: "sc-1av1bdb-4"
                })(["margin-top:50px;font-size:20px;font-weight:bold;", ""], Object(ae.b)(xm())),
                Sm = p.d.span.withConfig({
                    displayName: "Layout__Pro",
                    componentId: "sc-1av1bdb-5"
                })(["font-size:10px;text-transform:uppercase;line-height:21px;color:#000;background-color:#fff;padding:3px 5px;border-radius:2px;vertical-align:text-bottom;"]),
                Nm = p.d.div.withConfig({
                    displayName: "Layout__Left",
                    componentId: "sc-1av1bdb-6"
                })(["flex:0 0 auto;position:relative;width:400px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;background-color:#000;color:#fff;", ""], Object(ae.b)(vm())),
                Pm = p.d.h2.withConfig({
                    displayName: "Layout__Title",
                    componentId: "sc-1av1bdb-7"
                })(["width:260px;margin-top:30px;text-align:center;font-size:24px;line-height:32px;", ""], Object(ae.b)(bm()));
            var Mm = ({
                onClose: e
            }) => r.createElement(r.Fragment, null, r.createElement(Rm, null, "\n  We\u2019re updating the app with new exciting features, and want you to be part of this journey.\ufe0f\n\n  Enjoy 6 months of Replika Pro for free: new conversations, activities, and customization features. Our treat!\n"), r.createElement(Ft.a, {
                onClick: e
            }, "Get Replika Pro for free"), r.createElement(Bm, {
                href: "https://help.replika.ai/hc/en-us/articles/360032500052-What-is-Replika-Pro-",
                target: "_blank",
                rel: "noopener noreferrer",
                "data-testid": "what-is-replika-pro-link"
            }, "What is Replika Pro?"));
            const Rm = p.d.p.withConfig({
                    displayName: "ReboardingContent__Description",
                    componentId: "aerm6j-0"
                })(["white-space:pre-wrap;max-width:300px;text-align:center;font-size:16px;line-height:24px;color:", ";margin:0 0 48px;"], e => e.theme.fgColor),
                Bm = p.d.a.withConfig({
                    displayName: "ReboardingContent__Link",
                    componentId: "aerm6j-1"
                })(["margin-top:32px;color:", ";text-decoration:underline;"], e => e.theme.dimmedFgColor);
            var Dm = n(150);
            var zm = ({
                className: e
            }) => r.createElement(Tm, {
                className: e
            }, r.createElement("svg", {
                version: "1.1",
                id: "loader-1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                width: "30px",
                height: "30px",
                viewBox: "0 0 50 50"
            }, r.createElement("path", {
                fill: "#ccc",
                d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
            }, r.createElement("animateTransform", {
                attributeType: "xml",
                attributeName: "transform",
                type: "rotate",
                from: "0 25 25",
                to: "360 25 25",
                dur: "0.6s",
                repeatCount: "indefinite"
            }))));
            const Tm = p.d.div.withConfig({
                displayName: "InlineSpinner__InlineSpinnerRoot",
                componentId: "xqz7hc-0"
            })(["height:20px;display:inline-block;vertical-align:middle;"]);
            var Lm = n(84);

            function Fm(e, t, n) {
                return Am.apply(this, arguments)
            }

            function Am() {
                return (Am = Object(i.a)(a.a.mark((function e(t, n, o) {
                    var i, r, l;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = o.payment_intent) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 3:
                                if ("requires_action" !== i.status && "requires_payment_method" !== i.status) {
                                    e.next = 14;
                                    break
                                }
                                return e.next = 6, n.confirmCardPayment(i.client_secret, {
                                    payment_method: t
                                });
                            case 6:
                                if (!(l = e.sent).error) {
                                    e.next = 11;
                                    break
                                }
                                throw l.error;
                            case 11:
                                if ("succeeded" !== (null === (r = l.paymentIntent) || void 0 === r ? void 0 : r.status)) {
                                    e.next = 13;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 13:
                                return e.abrupt("return", o.id);
                            case 14:
                                return e.abrupt("return", null);
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Wm(e, t, n) {
                return Hm.apply(this, arguments)
            }

            function Hm() {
                return (Hm = Object(i.a)(a.a.mark((function e(t, n, o) {
                    var i, r, l;
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("active" !== o.status) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 2:
                                if (i = o.latest_invoice.payment_intent) {
                                    e.next = 7;
                                    break
                                }
                                if ("open" !== o.latest_invoice.status) {
                                    e.next = 6;
                                    break
                                }
                                throw new Error("Something went wrong");
                            case 6:
                                return e.abrupt("return", null);
                            case 7:
                                if ("requires_action" !== i.status) {
                                    e.next = 20;
                                    break
                                }
                                return e.next = 10, n.confirmCardPayment(i.client_secret);
                            case 10:
                                if (!(l = e.sent).error) {
                                    e.next = 15;
                                    break
                                }
                                throw l.error;
                            case 15:
                                if ("succeeded" !== (null === (r = l.paymentIntent) || void 0 === r ? void 0 : r.status)) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 17:
                                return e.abrupt("return", o.latest_invoice.id);
                            case 20:
                                if ("requires_payment_method" !== i.status) {
                                    e.next = 22;
                                    break
                                }
                                return e.abrupt("return", o.latest_invoice.id);
                            case 22:
                                return e.abrupt("return", null);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var qm = n(85),
                Gm = n(29);

            function Um() {
                const e = Object(s.a)(["\n    position: initial;\n    height: auto;\n    flex: 1 0 auto;\n  "]);
                return Um = function() {
                    return e
                }, e
            }

            function Ym() {
                const e = Object(s.a)(["\n    margin-top: 50px;\n  "]);
                return Ym = function() {
                    return e
                }, e
            }

            function Vm() {
                const e = Object(s.a)(["\n    flex: 1 0 auto;\n    height: auto;\n  "]);
                return Vm = function() {
                    return e
                }, e
            }

            function Zm({
                subscription: e
            }) {
                let t, n, o;
                const a = Object(pl.a)(e => {
                    var t;
                    return null !== (t = e.subscriptions.persist.stripeSubscriptions) && void 0 !== t ? t : []
                }, Lm.c, {
                    memoDeepEqual: !0
                });
                if (nh(e)) {
                    const i = e.recurring,
                        l = i.period_amount,
                        c = i.period_timeunit;
                    t = l > 1 ? "".concat(l, "-").concat(c) : "day" === c ? "daily" : "".concat(c, "ly"), n = a.find(t => t.subscription_id === e.subscription_id), o = r.createElement(r.Fragment, null, r.createElement(Qm, null, "Created ", ht.a.utc(e.created).format("ll")), r.createElement(Qm, null, "Next payment ", ht.a.utc(e.expiration).format("ll")))
                } else oh(e) && (t = "lifetime", o = r.createElement($m, null, "You have an unlimited subscription, no further payments required."));
                const i = nh(e) && "FreeTrial" === e.subscription_state;
                return r.createElement(Jm, null, i && n && r.createElement(Km, null, 1 === n.trial_period_days ? "".concat(n.trial_period_days, "-day trial") : "".concat(n.trial_period_days, "-days trial")), r.createElement(Xm, null, t), n ? r.createElement(eh, null, n.price.amount.toFixed(2), " ", r.createElement(th, null, n.price.currency)) : r.createElement(eh, null), o)
            }
            const Jm = p.d.div.withConfig({
                    displayName: "ActiveSubscription__SubscriptionCardRoot",
                    componentId: "sc-9d0lpp-0"
                })(["position:relative;margin:40px 0 0;width:280px;border:2px solid ", ";border-radius:8px;padding:14px 16px;"], e => e.theme.borderButtonSelectedBorderColor),
                Km = p.d.div.withConfig({
                    displayName: "ActiveSubscription__SubscriptionTrialBadge",
                    componentId: "sc-9d0lpp-1"
                })(["position:absolute;top:10px;right:16px;font-size:13px;font-weight:bold;white-space:nowrap;color:", ";background-color:", ";padding:4px 8px;border-radius:2px;"], e => e.theme.subscriptionBadgeFgColor, e => e.theme.subscriptionBadgeBgColor),
                Xm = p.d.div.withConfig({
                    displayName: "ActiveSubscription__Period",
                    componentId: "sc-9d0lpp-2"
                })(["text-transform:uppercase;letter-spacing:0.02em;font-size:14px;line-height:21px;font-weight:bold;color:", ";"], e => e.theme.fgColor),
                Qm = p.d.p.withConfig({
                    displayName: "ActiveSubscription__Desc",
                    componentId: "sc-9d0lpp-3"
                })(["margin-top:16px;margin-bottom:0;font-size:15px;line-height:20px;color:", ";& + &{margin-top:4px;}"], e => e.theme.dimmedFgColor),
                $m = p.d.p.withConfig({
                    displayName: "ActiveSubscription__LifetimeDesc",
                    componentId: "sc-9d0lpp-4"
                })(["margin:0;font-size:15px;line-height:20px;color:", ";max-width:200px;"], e => e.theme.dimmedFgColor),
                eh = p.d.div.withConfig({
                    displayName: "ActiveSubscription__Price",
                    componentId: "sc-9d0lpp-5"
                })(["font-weight:bold;font-size:24px;line-height:30px;height:30px;color:", ";"], e => e.theme.fgColor),
                th = p.d.span.withConfig({
                    displayName: "ActiveSubscription__Currency",
                    componentId: "sc-9d0lpp-6"
                })(["text-transform:uppercase;vertical-align:top;color:", ";font-weight:bold;font-size:14px;line-height:21px;letter-spacing:0.02em;"], e => e.theme.dimmedFgColor);

            function nh(e) {
                return "legacy" !== e.source && "promo" !== e.source && "SUBS" === e.subscription_type
            }

            function oh(e) {
                return "legacy" !== e.source && "promo" !== e.source && "IN_APP" === e.subscription_type
            }
            var ah = function({
                className: e,
                subscription: t
            }) {
                const n = Object(c.d)(),
                    o = function(e, t) {
                        switch (e.source) {
                            case "ios":
                                return {
                                    title: "You are paying through Apple App Store",
                                    description: "To change what you pay update your\xa0subscription settings of your\xa0App Store account."
                                };
                            case "android":
                                return {
                                    title: "You are paying through Google Play",
                                    description: "To change what you pay update your\xa0subscription settings of your\xa0Google Play account."
                                };
                            case "legacy":
                            case "stripe":
                            case "promo":
                                return {
                                    title: "Welcome to Replika Pro",
                                    description: "You now have access to all features and conversations in the app. Enjoy spending time with ".concat(t, "!")
                                };
                            default:
                                return {
                                    title: "",
                                    description: ""
                                }
                        }
                    }(t, oi()),
                    a = o.title,
                    i = o.description,
                    l = nh(t),
                    s = !l && !Object(Gm.b)("production"),
                    d = nh(t) && t.recurring.period_amount > 0 || oh(t);
                return r.createElement(ih, {
                    className: e
                }, r.createElement(lh, null, a), r.createElement(ch, null, i), d ? r.createElement(Zm, {
                    subscription: t
                }) : r.createElement(rh, null), r.createElement(ph, null, l && r.createElement(sh, {
                    onClick: () => {
                        n(Object(re.e)({
                            type: v.f.CancelSubscription
                        }))
                    }
                }, "Cancel subscription"), s && r.createElement(sh, {
                    onClick: () => {
                        n(Object(re.e)({
                            type: v.f.CancelSubscription
                        }))
                    }
                }, "Cancel subscription [DEV]"), r.createElement(dh, {
                    href: "".concat(Object(qm.a)(), "/legal/terms#2.4.-subscriptions"),
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "View subscription terms")))
            };
            const ih = p.d.div.withConfig({
                    displayName: "ActiveSubscription__ActiveSubscriptionRoot",
                    componentId: "sc-9d0lpp-7"
                })(["flex:0 0 auto;position:relative;height:444px;width:400px;max-width:100vw;display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";padding:0 20px;", ""], e => e.theme.fgColor, Object(ae.b)(Vm())),
                rh = p.d.div.withConfig({
                    displayName: "ActiveSubscription__SubscriptionCardPlaceholder",
                    componentId: "sc-9d0lpp-8"
                })(["height:50px;"]),
                lh = p.d.h3.withConfig({
                    displayName: "ActiveSubscription__Title",
                    componentId: "sc-9d0lpp-9"
                })(["font-size:20px;line-height:24px;margin:0 0 16px;width:280px;text-align:center;", ""], Object(ae.b)(Ym())),
                ch = p.d.p.withConfig({
                    displayName: "ActiveSubscription__Description",
                    componentId: "sc-9d0lpp-10"
                })(["font-size:16px;line-height:21px;width:280px;text-align:center;margin:0;"]),
                sh = Object(p.d)(Nt.a).withConfig({
                    displayName: "ActiveSubscription__StyledLinkButton",
                    componentId: "sc-9d0lpp-11"
                })(["color:", ";text-decoration:none;"], e => e.theme.dimmedFgColor),
                dh = p.d.a.withConfig({
                    displayName: "ActiveSubscription__StyledLink",
                    componentId: "sc-9d0lpp-12"
                })(["color:", ";"], e => e.theme.dimmedFgColor),
                ph = p.d.div.withConfig({
                    displayName: "ActiveSubscription__Actions",
                    componentId: "sc-9d0lpp-13"
                })(["margin-top:24px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;& > * ~ *{margin-top:16px;}", ""], Object(ae.b)(Um()));

            function uh() {
                return (uh = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function mh(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var hh = l.a.createElement("path", {
                    d: "M212 600h-14l-2-1c-6-2-12-3-17-6-13-6-24-16-34-27a380 380 0 0 1-53-78c-5-9-10-18-13-27a372 372 0 0 1-29-151c1-16 4-32 8-47 4-16 11-30 19-44a148 148 0 0 1 110-72c9-1 19-1 29 1 13 2 25 6 37 11l30 11c8 3 16 4 24 1l18-6c15-5 29-11 44-15a135 135 0 0 1 66-2 142 142 0 0 1 81 48l6 8-14 11a135 135 0 0 0-46 72l-4 19c-1 22 1 43 9 63a138 138 0 0 0 65 69l6 2-1 3-7 20a354 354 0 0 1-82 120 72 72 0 0 1-59 15c-11-2-21-6-31-10a130 130 0 0 0-68-12c-12 2-25 6-36 11-13 6-26 11-40 12l-2 1zM413 0l1 14a128 128 0 0 1-26 74 124 124 0 0 1-56 44 88 88 0 0 1-39 6 106 106 0 0 1 10-57 137 137 0 0 1 84-76l19-4 2-1h5z",
                    fillRule: "nonzero"
                }),
                gh = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = mh(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", uh({
                        viewBox: "0 0 600 600",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 1,
                        fill: "currentColor",
                        width: 20,
                        height: 20,
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, hh)
                },
                fh = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(gh, uh({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function bh() {
                return (bh = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function vh(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var xh = l.a.createElement("path", {
                    d: "M232 600l-5-2c-10-4-17-11-21-21-3-7-3-14-3-20v-72l-1-7-7-1h-27c-16 1-31-15-31-30V209l1-5c3-1 320-2 326-1v6a82386 82386 0 0 1 0 233c0 7 0 13-4 19-4 7-9 12-17 15l-10 1h-28l-5 1-1 6v73c0 6 0 11-2 17-4 13-13 21-25 25l-2 1h-12l-2-1c-14-4-22-14-26-28l-1-14a34866 34866 0 0 1-1-79h-55l-1 11v77c-2 15-9 26-23 32l-6 2h-11zM404 1c2 2 2 4 1 6l-17 30-8 12-1 4c0 2 2 3 3 3a158 158 0 0 1 46 36 141 141 0 0 1 35 90c-1 2-3 2-5 2H145l-5-1c-2-1-2-3-2-4a143 143 0 0 1 76-120l8-5-2-6-23-40c-2-2-2-5-1-7h4l1 1 23 40c2 3 3 7 6 9 47-20 95-19 141 0l4-4 22-39 5-7h2zm-26 129c8 0 15-6 15-15 0-7-5-15-15-15-8-1-15 6-15 15-1 8 6 15 15 15zm-155 0c9 0 15-7 16-15 0-8-7-16-15-15-11 0-16 7-16 15s8 15 15 15zM48 308v-70c0-8 2-16 6-23 6-11 16-17 29-18 12 0 21 6 28 16 5 7 7 15 7 24v143c0 8-2 16-6 23-8 15-27 23-43 15-8-4-14-11-18-20-2-5-3-11-3-18v-72zM553 309v71c0 8-2 16-6 23-8 15-26 23-42 15-12-6-19-16-21-29l-1-10V239c0-9 2-17 7-25 6-11 16-17 29-16 14 0 24 8 30 21 3 6 4 12 4 18v72z",
                    fillRule: "nonzero"
                }),
                yh = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = vh(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", bh({
                        viewBox: "0 0 600 600",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 1,
                        fill: "currentColor",
                        width: 20,
                        height: 20,
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, xh)
                },
                wh = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(yh, bh({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Ch() {
                return r.createElement(r.Fragment, null, r.createElement(Eh, null, "Subscribe to Replika Pro"), r.createElement(kh, null, "Go to your Replika app to subscribe and unlock premium features."), r.createElement(Oh, null, "Starting $4.17/month"), r.createElement(jh, null, "Get the app"), r.createElement(_h, {
                    as: e => r.createElement("a", Object.assign({
                        href: "".concat(Object(qm.a)(), "/get-ios"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-testid": "get-ios-app"
                    }, e), e.children),
                    onClick: () => Object(le.b)(v.j.SubscriptionWebPromptClicked, {
                        platform: "ios"
                    })
                }, r.createElement(fh, null), r.createElement("span", null, "iOS")), r.createElement(_h, {
                    as: e => r.createElement("a", Object.assign({
                        href: "".concat(Object(qm.a)(), "/get-android"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-testid": "get-android-app"
                    }, e), e.children),
                    onClick: () => Object(le.b)(v.j.SubscriptionWebPromptClicked, {
                        platform: "android"
                    })
                }, r.createElement(wh, null), r.createElement("span", null, "Android")))
            }
            const Eh = p.d.h3.withConfig({
                    displayName: "SubscriptionContentLegacy__Title",
                    componentId: "wph8xo-0"
                })(["font-size:20px;line-height:24px;color:", ";margin:0 0 16px;"], e => e.theme.fgColor),
                kh = p.d.p.withConfig({
                    displayName: "SubscriptionContentLegacy__Description",
                    componentId: "wph8xo-1"
                })(["max-width:280px;white-space:pre-wrap;font-size:16px;line-height:24px;color:", ";text-align:center;margin:0;"], e => e.theme.fgColor),
                Oh = p.d.p.withConfig({
                    displayName: "SubscriptionContentLegacy__Price",
                    componentId: "wph8xo-2"
                })(["color:", ";"], e => e.theme.dimmedFgColor),
                jh = p.d.h4.withConfig({
                    displayName: "SubscriptionContentLegacy__GetAppTitle",
                    componentId: "wph8xo-3"
                })(["text-transform:uppercase;font-size:14px;line-height:21px;"]),
                _h = Object(p.d)(He.a).withConfig({
                    displayName: "SubscriptionContentLegacy__AppButton",
                    componentId: "wph8xo-4"
                })(["position:relative;width:170px;color:", ";& + &{margin-top:12px;}& > svg{position:absolute;left:16px;top:10px;}& > span{margin-left:20px;}"], e => e.theme.fgColor);

            function Ih() {
                const e = Object(s.a)(["\n    margin-top: 50px;\n  "]);
                return Ih = function() {
                    return e
                }, e
            }

            function Sh() {
                const e = Object(s.a)(["\n    height: auto;\n  "]);
                return Sh = function() {
                    return e
                }, e
            }

            function Nh(e) {
                const t = e.subscription,
                    n = e.selected,
                    o = e.onClick;
                let a, i;
                const l = t.price.amount;
                switch (t.subscription_type) {
                    case "IN_APP":
                        a = "lifetime";
                        break;
                    case "SUBS":
                        const e = t.recurring;
                        a = e.period_amount > 1 ? "".concat(e.period_amount, "-").concat(e.period_timeunit) : "day" === e.period_timeunit ? "daily" : "".concat(e.period_timeunit, "ly"), "year" === e.period_timeunit && (i = r.createElement("span", null, (l / 12).toFixed(2), " ", r.createElement(Rh, null, t.price.currency), " / month"))
                }
                return r.createElement(Ph, {
                    role: "presentation"
                }, r.createElement(Mh, {
                    role: "radio",
                    tabIndex: n ? 0 : -1,
                    "aria-checked": n,
                    onClick: o
                }, t.trial_period_days > 0 && r.createElement(Bh, null, 1 === t.trial_period_days ? "".concat(t.trial_period_days, "-day trial") : "".concat(t.trial_period_days, "-days trial")), r.createElement(Dh, null, a), r.createElement(zh, null, l.toFixed(2), r.createElement(Th, null, t.price.currency)), i && r.createElement(Lh, null, i)))
            }
            const Ph = p.d.li.withConfig({
                    displayName: "SubscriptionContent__StripePriceCardRoot",
                    componentId: "izds17-0"
                })(["padding:0;"]),
                Mh = p.d.button.withConfig({
                    displayName: "SubscriptionContent__StripePriceCardButton",
                    componentId: "izds17-1"
                })(["position:relative;border:2px solid ", ";background:", ";color:", ";font-size:24px;width:140px;height:134px;border-radius:8px;text-align:left;display:flex;flex-direction:column;padding:0 8px;cursor:pointer;"], e => e["aria-checked"] ? e.theme.borderButtonSelectedBorderColor : e.theme.borderButtonBorderColor, e => e.theme.borderButtonBgColor, e => e.theme.fgColor),
                Rh = p.d.span.withConfig({
                    displayName: "SubscriptionContent__Currency",
                    componentId: "izds17-2"
                })(["text-transform:uppercase;"]),
                Bh = p.d.div.withConfig({
                    displayName: "SubscriptionContent__SubscriptionTrialBadge",
                    componentId: "izds17-3"
                })(["position:absolute;top:10px;left:10px;font-size:13px;font-weight:bold;white-space:nowrap;color:", ";background-color:", ";padding:4px 8px;border-radius:2px;"], e => e.theme.subscriptionBadgeFgColor, e => e.theme.subscriptionBadgeBgColor),
                Dh = p.d.div.withConfig({
                    displayName: "SubscriptionContent__SubscriptionPeriod",
                    componentId: "izds17-4"
                })(["margin-top:44px;letter-spacing:0.02em;color:", ";font-weight:bold;font-size:14px;white-space:nowrap;text-transform:uppercase;margin-bottom:5px;"], e => e.theme.fgColor),
                zh = p.d.div.withConfig({
                    displayName: "SubscriptionContent__SubscriptionPrice",
                    componentId: "izds17-5"
                })(["color:", ";font-weight:bold;font-size:24px;line-height:30px;"], e => e.theme.fgColor),
                Th = p.d.span.withConfig({
                    displayName: "SubscriptionContent__SubscriptionCurrency",
                    componentId: "izds17-6"
                })(["color:", ";font-weight:bold;font-size:14px;line-height:21px;text-transform:uppercase;vertical-align:top;margin-left:6px;"], e => e.theme.dimmedFgColor),
                Lh = p.d.div.withConfig({
                    displayName: "SubscriptionContent__SubscriptionAltPrice",
                    componentId: "izds17-7"
                })(["color:", ";font-size:12px;line-height:15px;margin-top:4px;"], e => e.theme.dimmedFgColor);

            function Fh(e) {
                const t = e.priceId,
                    n = e.subscriptions,
                    o = e.onChange;
                return r.createElement(Jh, {
                    role: "radiogroup"
                }, n.map(e => r.createElement(Nh, {
                    selected: e.subscription_id === t,
                    key: e.subscription_id,
                    subscription: e,
                    onClick: () => o(e.subscription_id)
                })), 0 === n.length ? r.createElement(r.Fragment, null, r.createElement(Ah, null), r.createElement(Ah, null), r.createElement(Ah, null)) : null)
            }
            const Ah = p.d.li.withConfig({
                displayName: "SubscriptionContent__EmptyStripeCard",
                componentId: "izds17-8"
            })(["flex:0 0 auto;border:2px solid ", ";width:140px;height:134px;border-radius:8px;"], e => e.theme.borderButtonBorderColor);

            function Wh({
                inProgress: e,
                children: t
            }) {
                return r.createElement("div", {
                    style: {
                        display: "flex",
                        position: "relative"
                    }
                }, t, e && r.createElement(Hh, null))
            }
            const Hh = Object(p.d)(zm).withConfig({
                displayName: "SubscriptionContent__StyledSpinner",
                componentId: "izds17-9"
            })(["position:absolute;top:8px;right:-40px;"]);
            var qh = Object(p.f)((function({
                theme: e,
                stripeSubscriptions: t
            }) {
                const n = r.useState(null),
                    o = Object(d.a)(n, 2),
                    l = o[0],
                    s = o[1],
                    p = r.useState(""),
                    u = Object(d.a)(p, 2),
                    m = u[0],
                    h = u[1],
                    g = r.useState(!1),
                    f = Object(d.a)(g, 2),
                    b = f[0],
                    v = f[1],
                    x = Object(c.d)(),
                    y = r.useState("init"),
                    w = Object(d.a)(y, 2),
                    C = w[0],
                    E = w[1],
                    k = r.useMemo(() => function(e) {
                        return {
                            style: {
                                base: {
                                    color: e.fgColor,
                                    backgroundColor: "transparent",
                                    fontFamily: "Muli, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
                                    fontSize: "16px",
                                    "::placeholder": {
                                        color: e.placeholderColor
                                    }
                                },
                                invalid: {
                                    color: e.errorFgColor,
                                    iconColor: e.errorFgColor
                                }
                            }
                        }
                    }(e), [e]),
                    O = Object(Dm.useStripe)(),
                    j = Object(Dm.useElements)(),
                    _ = Object(c.e)(e => e.subscriptions.persist.stripeLatestInvoiceId);
                r.useEffect(() => {
                    function e() {
                        return (e = Object(i.a)(a.a.mark((function e() {
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, x(Object(Lm.e)());
                                    case 2:
                                        E("idle");
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }, [x]);
                const I = Object(c.e)(e => e.subscriptions.persist.subscription);
                if (0 === (null === t || void 0 === t ? void 0 : t.length)) return r.createElement(Gh, {
                    style: {
                        width: 400,
                        height: 400
                    }
                }, r.createElement(Ch, null));
                const S = function() {
                        var e = Object(i.a)(a.a.mark((function e() {
                            var t, n, o, i, r, c, s, d;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (l) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (e.prev = 2, O && j) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        if (h(""), t = j.getElement(Dm.CardElement)) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        return E("subscribing"), e.next = 12, O.createPaymentMethod({
                                            type: "card",
                                            card: t
                                        });
                                    case 12:
                                        if (n = e.sent, o = n.error, i = n.paymentMethod, !o) {
                                            e.next = 21;
                                            break
                                        }
                                        o.message && h(o.message), console.error(o), E("idle"), e.next = 42;
                                        break;
                                    case 21:
                                        if (!i) {
                                            e.next = 42;
                                            break
                                        }
                                        if (r = i.id, !_) {
                                            e.next = 32;
                                            break
                                        }
                                        return e.next = 26, x(Object(Lm.f)({
                                            paymentMethodId: r,
                                            latestInvoiceId: _
                                        }));
                                    case 26:
                                        return s = e.sent, e.next = 29, Fm(r, O, s);
                                    case 29:
                                        c = e.sent, e.next = 39;
                                        break;
                                    case 32:
                                        if (!l) {
                                            e.next = 39;
                                            break
                                        }
                                        return e.next = 35, x(Object(Lm.a)({
                                            paymentMethodId: r,
                                            priceId: l
                                        }));
                                    case 35:
                                        return d = e.sent, e.next = 38, Wm(r, O, d);
                                    case 38:
                                        c = e.sent;
                                    case 39:
                                        c ? h("Your card was declined.") : x(Object(Lm.e)()), x(Object(Lm.g)(c)), E("idle");
                                    case 42:
                                        e.next = 49;
                                        break;
                                    case 44:
                                        e.prev = 44, e.t0 = e.catch(2), h(e.t0.message), x(Object(Lm.g)(null)), E("idle");
                                    case 49:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 44]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    N = "subscribing" === C,
                    P = !l || "init" === C || "subscribing" === C || !b;
                return I ? r.createElement(ah, {
                    subscription: I
                }) : r.createElement(Gh, null, r.createElement(Yh, null, "Subscribe to Replika Pro"), r.createElement(Vh, null, "Pick a subscription plan to support the project and get full access to the app. Cancel anytime."), r.createElement(Fh, {
                    priceId: l,
                    subscriptions: null !== t && void 0 !== t ? t : [],
                    onChange: s
                }), r.createElement(Zh, null, r.createElement(Dm.CardElement, {
                    options: k,
                    onChange: ({
                        complete: e
                    }) => v(e)
                })), m && r.createElement(Uh, null, m), r.createElement(Wh, {
                    inProgress: N
                }, r.createElement(Ft.a, {
                    disabled: P,
                    onClick: S
                }, "Subscribe")))
            }));
            const Gh = p.d.div.withConfig({
                    displayName: "SubscriptionContent__SubscribeToReplika",
                    componentId: "izds17-10"
                })(["flex:0 0 auto;height:600px;width:565px;max-width:100vw;display:flex;flex-direction:column;align-items:center;justify-content:center;", ""], Object(ae.b)(Sh())),
                Uh = p.d.div.withConfig({
                    displayName: "SubscriptionContent__Error",
                    componentId: "izds17-11"
                })(["color:", ";margin:0 20px 20px;font-size:16px;line-height:21px;"], e => e.theme.errorFgColor),
                Yh = p.d.h3.withConfig({
                    displayName: "SubscriptionContent__Title",
                    componentId: "izds17-12"
                })(["font-size:20px;line-height:24px;color:", ";margin:0 0 16px;text-align:center;", ""], e => e.theme.fgColor, Object(ae.b)(Ih())),
                Vh = p.d.p.withConfig({
                    displayName: "SubscriptionContent__Description",
                    componentId: "izds17-13"
                })(["font-size:16px;line-height:24px;text-align:center;max-width:300px;margin:0 0 35px;"]),
                Zh = p.d.div.withConfig({
                    displayName: "SubscriptionContent__StripeContainer",
                    componentId: "izds17-14"
                })(["width:calc(100% - 40px);margin:20px 0;padding:14px 17px 16px;border-radius:4px;border:1px solid ", ";background-color:", ";"], e => e.theme.borderColor, e => e.theme.inputBgColor),
                Jh = p.d.ul.withConfig({
                    displayName: "SubscriptionContent__StripePriceListRoot",
                    componentId: "izds17-15"
                })(["margin:0;padding:0 20px;list-style-type:none;display:flex;overflow-y:scroll;max-width:100%;&::after{content:'';padding-right:20px;}& > li + li{margin-left:10px;}"]);
            var Kh = e => {
                const t = e.onClose,
                    n = e.reboarding,
                    o = Object(c.d)(),
                    a = Object(c.e)(e => e.subscriptions.persist.subscription),
                    i = Object(pl.a)(e => e.subscriptions.persist.stripeSubscriptions, Lm.c, {
                        memoDeepEqual: !0
                    }),
                    l = 0 === (null === i || void 0 === i ? void 0 : i.length);
                r.useEffect(() => {
                    Object(le.b)(n ? v.j.SubscriptionExtendedTrialShown : v.j.SubscriptionWebPromptShown)
                }, [n]);
                const s = Object(c.e)(e => e.subscriptions.stripeEnabled),
                    d = n ? "Welcome to Replika Pro" : "Unlock 150+ activities, voice calls, role play and more",
                    p = () => {
                        t(), o(Object(Lm.h)())
                    };
                return r.createElement(Em, {
                    onClose: p,
                    title: a ? "" : d,
                    "data-testid": n ? "subscription-reboarding-dialog" : "subscription-dialog"
                }, n ? r.createElement(Mm, {
                    onClose: p
                }) : s || l ? r.createElement(qh, {
                    stripeSubscriptions: i
                }) : r.createElement(Qh, null, r.createElement(Xh, null)))
            };
            const Xh = Object(p.d)(h.a).withConfig({
                    displayName: "SubscriptionDialog__StyledCircleSpinner",
                    componentId: "sc-115r510-0"
                })(["width:100px;height:100px;"]),
                Qh = p.d.div.withConfig({
                    displayName: "SubscriptionDialog__SpinnerContainer",
                    componentId: "sc-115r510-1"
                })(["width:565px;height:600px;max-width:100vw;display:flex;align-items:center;justify-content:center;"]);

            function $h() {
                return ($h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function eg(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var tg = l.a.createElement("path", {
                    d: "M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z",
                    fill: "currentcolor"
                }),
                ng = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = eg(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", $h({
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, tg)
                },
                og = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(ng, $h({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function ag() {
                return (ag = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function ig(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var rg = l.a.createElement("path", {
                    d: "M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11Z",
                    fill: "currentColor"
                }),
                lg = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = ig(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", ag({
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, rg)
                },
                cg = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(lg, ag({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function sg() {
                const e = Object(s.a)(["\n    height: 100vh;\n    width: 100vw;\n  "]);
                return sg = function() {
                    return e
                }, e
            }
            const dg = p.d.div.withConfig({
                    displayName: "GetHelpDialog__HelpOptions",
                    componentId: "subi7w-0"
                })(["flex:0 0 auto;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;width:320px;height:320px;"]),
                pg = Object(p.d)(He.a).withConfig({
                    displayName: "GetHelpDialog__HelpOptionButton",
                    componentId: "subi7w-1"
                })(["color:", ";width:48%;border-radius:8px;height:72px;font-size:16px;line-height:20px;padding:0 16px;margin-top:8px;"], e => e.theme.fgColor),
                ug = Object(p.d)(ll).withConfig({
                    displayName: "GetHelpDialog__StyledSidebarSpinner",
                    componentId: "subi7w-2"
                })(["height:400px;width:300px;", ""], Object(ae.b)(sg())),
                mg = p.d.div.withConfig({
                    displayName: "GetHelpDialog__CrisisInfo",
                    componentId: "subi7w-3"
                })(["padding:40px 0;text-align:center;"]),
                hg = p.d.h3.withConfig({
                    displayName: "GetHelpDialog__CrisisTitle",
                    componentId: "subi7w-4"
                })(["margin:0;color:", ";line-height:24px;font-size:16px;font-weight:600;"], e => e.theme.errorLightFgColor),
                gg = Object(p.d)(og).withConfig({
                    displayName: "GetHelpDialog__StyledPhoneIcon",
                    componentId: "subi7w-5"
                })(["width:24px;height:24px;color:inherit;vertical-align:middle;margin-left:20px;"]),
                fg = Object(p.d)(gg.withComponent(cg)).withConfig({
                    displayName: "GetHelpDialog__StyledTextIcon",
                    componentId: "subi7w-6"
                })(["transform:translateY(2px);"]),
                bg = p.d.p.withConfig({
                    displayName: "GetHelpDialog__CrisisText",
                    componentId: "subi7w-7"
                })(["line-height:24px;font-size:16px;color:", ";margin:5px auto 15px;max-width:240px;"], e => e.theme.dimmedFgColor),
                vg = Object(p.d)(bg).withConfig({
                    displayName: "GetHelpDialog__LocalHotlineText",
                    componentId: "subi7w-8"
                })(["margin-top:50px;max-width:200px;"]),
                xg = p.d.div.withConfig({
                    displayName: "GetHelpDialog__PhoneLinkText",
                    componentId: "subi7w-9"
                })(["flex:1 0 auto;line-height:24px;font-size:16px;font-weight:600;margin-right:45px;text-align:center;"]),
                yg = p.d.div.withConfig({
                    displayName: "GetHelpDialog__PhoneLinks",
                    componentId: "subi7w-10"
                })([""]),
                wg = Object(p.d)(Vd).withConfig({
                    displayName: "GetHelpDialog__PhoneLink",
                    componentId: "subi7w-11"
                })(["position:relative;padding:0;width:300px;& + &{margin-top:10px;}"]),
                Cg = p.d.a.withConfig({
                    displayName: "GetHelpDialog__HotlineLink",
                    componentId: "subi7w-12"
                })(["color:", ";font-weight:bold;text-decoration:underline;line-height:24px;font-size:16px;"], e => e.theme.fgColor);
            class Eg extends r.PureComponent {
                constructor(e) {
                    super(e), this.handleLifelineCallClick = () => {
                        Object(le.b)(v.j.NeedHelpHotlineCalled)
                    }, this.handleLifelineChatClick = () => {
                        Object(le.b)(v.j.NeedHelpLifelineChatClicked)
                    }, this.handleHotlineUrlClick = () => {
                        Object(le.b)(v.j.NeedHelpWebsiteClicked)
                    }, this.sendMessage = e => {
                        Object(le.b)(v.j.NeedHelpOptionSelected, {
                            option: e
                        }), this.props.sendChatMessage({
                            type: "text",
                            text: e
                        }), this.props.push("/")
                    }, e.getHelpConfig || e.fetchGetHelpConfig()
                }
                render() {
                    const e = this.props,
                        t = e.getHelpConfig,
                        n = e.isFetchingGetHelpConfig,
                        o = e.onClose;
                    return r.createElement(Rd, {
                        "data-testid": "get-help-dialog"
                    }, r.createElement(Bd, {
                        onClose: o,
                        title: "Get help"
                    }), r.createElement(Nd, null, n && r.createElement(ug, null), !n && t && this.renderOptions(t), !n && t && this.renderCrisisInfo(t)))
                }
                renderOptions(e) {
                    const t = e.help_titles;
                    return r.createElement(dg, null, t.map((e, t) => r.createElement(pg, {
                        key: t,
                        "data-testid": "get-help-".concat(t, "-button"),
                        onClick: () => {
                            this.sendMessage(e), this.props.onClose()
                        }
                    }, e)))
                }
                renderCrisisInfo(e) {
                    return r.createElement(mg, null, r.createElement(hg, null, "Are you in crisis?"), r.createElement(bg, null, "Call or text the National Suicide Prevention\xa0Lifeline:"), r.createElement(yg, null, r.createElement(wg, {
                        as: t => r.createElement("a", Object.assign({
                            "data-testid": "get-help-lifeline-call-link",
                            href: "tel:".concat(e.phone.number)
                        }, t), t.children),
                        onClick: this.handleLifelineCallClick
                    }, r.createElement(gg, null), r.createElement(xg, null, e.phone.number)), r.createElement(wg, {
                        as: e => r.createElement("a", Object.assign({
                            "data-testid": "get-help-lifeline-chat-link",
                            href: "https://suicidepreventionlifeline.org/chat",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, e), e.children),
                        onClick: this.handleLifelineChatClick
                    }, r.createElement(fg, null), r.createElement(xg, null, "Lifeline chat"))), r.createElement(vg, null, "If you\u2019re elsewhere, please call a local\xa0hotline:"), r.createElement(Cg, {
                        href: e.web_help.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: this.handleHotlineUrlClick
                    }, "Find a hotline in your country"))
                }
            }
            var kg = Object(c.c)(e => ({
                getHelpConfig: e.profile.getHelpConfig,
                isFetchingGetHelpConfig: e.profile.isFetchingGetHelpConfig
            }), {
                sendChatMessage: m.f,
                push: u.d,
                fetchGetHelpConfig: Wi.c
            })(Eg);
            var Og = ({
                onClose: e
            }) => {
                var t;
                r.useEffect(() => {}, []);
                const n = r.useState(void 0),
                    o = Object(d.a)(n, 2),
                    a = o[0],
                    i = o[1],
                    l = Object(c.e)(e => e.profile.persist.bot),
                    s = null !== (t = null === l || void 0 === l ? void 0 : l.name) && void 0 !== t ? t : "Your Replika",
                    p = Object(c.d)();
                return r.createElement(Rd, {
                    "data-testid": "reboarding-add-pronoun-dialog"
                }, r.createElement(Bd, null), r.createElement(jg, {
                    onSubmit: t => {
                        t.preventDefault(), p(Object(Wi.n)({
                            pronoun: a
                        })).then(() => {
                            e()
                        })
                    }
                }, r.createElement(_g, null, "Let Replika know your pronouns"), r.createElement(Ig, null, s, " needs to know your pronouns to address you correctly in the conversation, diaries, and memory."), r.createElement(Sp.a, {
                    value: a,
                    onChange: i
                }), r.createElement(Ad, null, r.createElement(Vd, {
                    type: "submit",
                    disabled: !a
                }, "Done"))))
            };
            const jg = Object(p.d)(Hd).withConfig({
                    displayName: "ReboardingAddPronounDialog__StyledDialogBody",
                    componentId: "q0engb-0"
                })(["max-width:360px;"]),
                _g = p.d.h3.withConfig({
                    displayName: "ReboardingAddPronounDialog__Title",
                    componentId: "q0engb-1"
                })([""]),
                Ig = p.d.p.withConfig({
                    displayName: "ReboardingAddPronounDialog__Description",
                    componentId: "q0engb-2"
                })(["margin-bottom:30px;padding:0 30px;"]),
                Sg = Object(E.a)(() => Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 615)));
            var Ng = e => {
                var t;
                const n = e.onClose,
                    o = e.avatarId,
                    l = e.customization2d,
                    s = r.useState({
                        avatarId: o,
                        customization2d: l
                    }),
                    p = Object(d.a)(s, 2),
                    u = p[0],
                    m = p[1],
                    h = Object(c.e)(e => {
                        var t;
                        return null === (t = e.profile.persist.bot) || void 0 === t ? void 0 : t.avatar
                    }),
                    g = Object(c.d)();
                r.useEffect(() => {
                    o && l && m({
                        avatarId: o,
                        customization2d: l
                    })
                }, [l, o]);
                const f = function() {
                    var e = Object(i.a)(a.a.mark((function e(t) {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.preventDefault(), !h || !u.customization2d) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4, g(Object(Wi.i)({
                                        avatar: {
                                            type: "3d",
                                            id: u.avatarId,
                                            customization: u.customization2d
                                        }
                                    }));
                                case 4:
                                    n();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return r.createElement(Pg, {
                    "data-testid": "customize-avatar-dialog"
                }, r.createElement(Bd, {
                    onClose: n,
                    title: "Customize"
                }), r.createElement(Rg, {
                    onSubmit: f
                }, r.createElement(Mg, {
                    key: u.avatarId,
                    avatarId: u.avatarId,
                    onChange: e => m({
                        avatarId: u.avatarId,
                        customization2d: e
                    }),
                    customization: null !== (t = u.customization2d) && void 0 !== t ? t : void 0
                }), r.createElement(Ad, null, r.createElement(Vd, {
                    type: "submit"
                }, "Save"))))
            };
            const Pg = Object(p.d)(Rd).withConfig({
                    displayName: "CustomizeAvatarDialog__StyledDialog",
                    componentId: "sc-1epnmyo-0"
                })(["width:500px;"]),
                Mg = Object(p.d)(Sg).withConfig({
                    displayName: "CustomizeAvatarDialog__StyledAvatarCustomizer",
                    componentId: "sc-1epnmyo-1"
                })([""]),
                Rg = Object(p.d)(Pd).withConfig({
                    displayName: "CustomizeAvatarDialog__StyledDialogBodyForm",
                    componentId: "sc-1epnmyo-2"
                })(["padding:20px;max-width:none;"]);
            var Bg = ({
                onClose: e,
                messageId: t,
                permittedActions: n
            }) => {
                const o = oi(),
                    a = "What do you think about ".concat(o, " phrase?"),
                    i = Tu(n);
                return r.createElement(Dg, {
                    "data-testid": "reaction-dialog",
                    mobileLayout: "action-sheet"
                }, r.createElement(Bd, {
                    onClose: e,
                    title: r.createElement(Tg, null, a)
                }), r.createElement(Nd, null, r.createElement(zg, {
                    messageId: t,
                    onClose: e,
                    permittedActions: i
                })))
            };
            const Dg = Object(p.d)(Rd).withConfig({
                    displayName: "ReactionDialog__StyledDialog",
                    componentId: "sc-1dddttk-0"
                })(["width:400px;"]),
                zg = Object(p.d)(fo).withConfig({
                    displayName: "ReactionDialog__StyledBody",
                    componentId: "sc-1dddttk-1"
                })(["margin-bottom:20px;"]),
                Tg = p.d.h3.withConfig({
                    displayName: "ReactionDialog__Title",
                    componentId: "sc-1dddttk-2"
                })(["margin:0 30px 0 0;text-align:left;color:", ";font-weight:normal;font-size:16px;line-height:20px;"], e => e.theme.dimmedFgColor),
                Lg = {
                    default: {
                        title: "Change name",
                        placeholder: "Item name"
                    },
                    [v.n.Diary]: {
                        title: "Change diary title",
                        placeholder: "Diary title"
                    },
                    [v.n.Song]: {
                        title: "Change song name",
                        placeholder: "Song name"
                    },
                    [v.n.Story]: {
                        title: "Change story title",
                        placeholder: "Story title"
                    },
                    [v.n.Session]: {
                        title: "Change session name",
                        placeholder: "Session name"
                    }
                };
            var Fg = e => {
                var t;
                const n = e.onClose,
                    o = e.itemId,
                    a = e.source,
                    i = e.itemType,
                    l = r.useState(e.name),
                    s = Object(d.a)(l, 2),
                    p = s[0],
                    u = s[1],
                    m = Object(c.d)(),
                    h = Tu(i),
                    g = h && null !== (t = Lg[h]) && void 0 !== t ? t : Lg.default,
                    f = g.title,
                    b = g.placeholder;
                return r.createElement(Wg, {
                    "data-testid": "saved-chat-item-dialog",
                    mobileLayout: "dialog"
                }, r.createElement(Bd, {
                    onClose: n,
                    title: f
                }), r.createElement(Hg, null, r.createElement(qg, {
                    id: "saved-chat-item-name",
                    placeholder: b,
                    value: p,
                    onChange: e => u(e.target.value)
                })), r.createElement(Ag, null, r.createElement(Nt.a, {
                    onClick: n
                }, "Cancel"), r.createElement(Vd, {
                    onClick: () => {
                        m("saved_chat_item" === a ? dt(o, {
                            name: p
                        }) : ((e, t) => ({
                            type: v.a.UpdateChatItemToSave,
                            itemId: e,
                            update: t
                        }))(o, {
                            name: p
                        })), n()
                    }
                }, "Save")))
            };
            const Ag = Object(p.d)(Ad).withConfig({
                    displayName: "EditSavedChatItemDialog__StyledDialogFooter",
                    componentId: "kuwkf-0"
                })(["justify-content:space-between;padding:25px;"]),
                Wg = Object(p.d)(Rd).withConfig({
                    displayName: "EditSavedChatItemDialog__StyledDialog",
                    componentId: "kuwkf-1"
                })(["width:400px;max-width:calc(100vw - 40px);"]),
                Hg = Object(p.d)(Nd).withConfig({
                    displayName: "EditSavedChatItemDialog__StyledDialogBody",
                    componentId: "kuwkf-2"
                })(["padding:40px 25px 0;"]),
                qg = Object(p.d)(zc.b).withConfig({
                    displayName: "EditSavedChatItemDialog__StyledTextInput",
                    componentId: "kuwkf-3"
                })(["width:100%;"]);
            var Gg = ({
                onClose: e,
                navigationPopup: t
            }) => {
                const n = Tu(t),
                    o = Object(c.d)(),
                    a = !!n && -1 !== ["relationship_status"].indexOf(n.button_destination);
                return r.createElement(Ug, {
                    "data-testid": "navigation-dialog",
                    mobileLayout: "action-sheet"
                }, r.createElement(Bd, {
                    onClose: e,
                    title: null === n || void 0 === n ? void 0 : n.header_text
                }), r.createElement(Nd, null, r.createElement(Yg, null, null === n || void 0 === n ? void 0 : n.body_text), r.createElement(Ad, null, a && r.createElement(Vd, {
                    onClick: () => {
                        switch (null === n || void 0 === n ? void 0 : n.button_destination) {
                            case "relationship_status":
                                o(Object(re.e)({
                                    type: v.f.EditRelationshipStatus
                                }))
                        }
                    }
                }, null === n || void 0 === n ? void 0 : n.button_text))))
            };
            const Ug = Object(p.d)(Rd).withConfig({
                    displayName: "NavigationPopupDialog__StyledDialog",
                    componentId: "sc-1ni8em-0"
                })(["width:400px;"]),
                Yg = p.d.p.withConfig({
                    displayName: "NavigationPopupDialog__Description",
                    componentId: "sc-1ni8em-1"
                })(["text-align:center;margin:20px 0 0;font-size:16px;line-height:21px;"]);

            function Vg() {
                const e = Object(s.a)(["\n    flex-direction: column-reverse;\n    justify-content: flex-start;\n\n    & > button {\n      margin-top: 16px;\n    }\n\n    & > button ~ button {\n      margin-left: 0;\n    }\n  "]);
                return Vg = function() {
                    return e
                }, e
            }
            var Zg = e => {
                const t = e.onClose,
                    n = Object(c.d)(),
                    o = r.useState(""),
                    l = Object(d.a)(o, 2),
                    s = l[0],
                    p = l[1],
                    u = r.useState("idle"),
                    m = Object(d.a)(u, 2),
                    h = m[0],
                    g = m[1],
                    f = r.useState(""),
                    b = Object(d.a)(f, 2),
                    v = b[0],
                    x = b[1],
                    y = function() {
                        var e = Object(i.a)(a.a.mark((function e(t) {
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, p(""), g("cancelling"), e.next = 6, n(Object(Lm.b)(v));
                                    case 6:
                                        return e.next = 8, n(Object(Lm.e)());
                                    case 8:
                                        g("cancelled"), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), p(e.t0.message), g("idle");
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 11]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return r.createElement(Rd, {
                    "data-testid": "cancel-subscription-dialog"
                }, r.createElement(Bd, {
                    title: "Cancel subscription"
                }), "cancelled" !== h ? r.createElement(Jg, {
                    onSubmit: y
                }, r.createElement(Xg, null, "Are you sure you want to cancel your Replika Pro subscription? You will lose access to 150+ activities, voice calls, role play and more"), r.createElement(Xg, null, "Please enter your password to confirm"), r.createElement(ef, {
                    id: "cancel-subscription-dialog-password",
                    placeholder: "Password",
                    value: v,
                    labeled: !0,
                    onChange: e => x(e.target.value)
                }), r.createElement(Kg, {
                    hasError: !!s
                }, s), r.createElement(Qg, null, r.createElement(Vd, {
                    type: "button",
                    onClick: t
                }, "I changed my mind"), r.createElement(Vd, {
                    type: "submit",
                    disabled: "cancelling" === h || !v
                }, "Cancel subscription"))) : r.createElement(Jg, {
                    style: {
                        maxWidth: 400
                    }
                }, r.createElement(Xg, {
                    style: {
                        maxWidth: 280
                    }
                }, "Your subscription is cancelled.", r.createElement("br", null), r.createElement("br", null), "Thanks for giving it a try! ", r.createElement("br", null), "You can access Pro features until the end of your billing cycle."), r.createElement($g, null, r.createElement(Vd, {
                    type: "button",
                    onClick: t
                }, "Close"))))
            };
            const Jg = Object(p.d)(Pd).withConfig({
                    displayName: "CancelSubscriptionDialog__StyledDialogBodyForm",
                    componentId: "ffe929-0"
                })(["padding:20px 30px;max-width:initial;width:520px;"]),
                Kg = Object(p.d)(Uc).withConfig({
                    displayName: "CancelSubscriptionDialog__Error",
                    componentId: "ffe929-1"
                })(["font-size:12px;"]),
                Xg = p.d.p.withConfig({
                    displayName: "CancelSubscriptionDialog__Description",
                    componentId: "ffe929-2"
                })(["text-align:center;margin-top:10px;font-size:16px;line-height:21px;max-width:400px;"]),
                Qg = Object(p.d)(Ad).withConfig({
                    displayName: "CancelSubscriptionDialog__StyledDialogFooter",
                    componentId: "ffe929-3"
                })(["width:100%;padding:30px 0 20px;justify-content:space-between;& > button ~ button{margin-left:16px;}", ""], Object(ae.b)(Vg())),
                $g = Object(p.d)(Ad).withConfig({
                    displayName: "CancelSubscriptionDialog__StyledDialogFooterCentered",
                    componentId: "ffe929-4"
                })(["width:100%;padding:20px 0 20px;"]),
                ef = Object(p.d)(bu.a).withConfig({
                    displayName: "CancelSubscriptionDialog__StyledPasswordInput",
                    componentId: "ffe929-5"
                })(["width:100%;margin-top:10px;"]);

            function tf() {
                const e = Object(s.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: ", ";\n    animation: ", " ", "ms ease-out both;\n"]);
                return tf = function() {
                    return e
                }, e
            }

            function nf() {
                const e = Object(s.a)(["\n  from {\n    opacity: 0.8;\n  }\n  to {\n    opacity: 0;\n  }\n"]);
                return nf = function() {
                    return e
                }, e
            }

            function of () {
                const e = Object(s.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0.8;\n  }\n"]);
                return of = function() {
                    return e
                }, e
            }
            const af = [
                    [v.f.Subscription, Kh],
                    [v.f.SubscriptionReboarding, Kh],
                    [v.f.EditRelationshipStatus, Du],
                    [v.f.Feedback, wp],
                    [v.f.EditProfile, Mp],
                    [v.f.EditReplika, eu],
                    [v.f.DropMission, fu],
                    [v.f.AccountSettings, Nu],
                    [v.f.Badge, Lu],
                    [v.f.EditMood, dm],
                    [v.f.IntroMeetReplika, gm],
                    [v.f.GetHelp, kg],
                    [v.f.ReboardingAddPronoun, Og],
                    [v.f.RewardPopup, Gu],
                    [v.f.CustomizeAvatar, Ng],
                    [v.f.Reaction, Bg],
                    [v.f.EditSavedChatItem, Fg],
                    [v.f.NavigationPopup, Gg],
                    [v.f.CancelSubscription, Zg]
                ],
                rf = Object(p.e)( of ()),
                lf = Object(p.e)(nf()),
                cf = r.memo(e => {
                    const t = e.className,
                        n = e.activeDialog,
                        o = r.useState("hidden"),
                        a = Object(d.a)(o, 2),
                        i = a[0],
                        l = a[1],
                        c = r.useState(null),
                        s = Object(d.a)(c, 2),
                        p = s[0],
                        u = s[1],
                        m = r.useState(null),
                        h = Object(d.a)(m, 2),
                        g = h[0],
                        f = h[1];
                    r.useEffect(() => {
                        n && p !== n.type && (p && f(p), u(n.type)), n || "hidden" !== i || null === p || (f(null), u(null))
                    }, [n, p, i]), r.useEffect(() => {
                        if (g) {
                            const e = setTimeout(() => f(null), 300);
                            return () => clearTimeout(e)
                        }
                    }, [g, f]), r.useEffect(() => {
                        let e;
                        switch (i) {
                            case "hidden":
                                n && l("visible");
                                break;
                            case "visible":
                                n || l("hiding");
                                break;
                            case "hiding":
                                n ? l("visible") : e = setTimeout(() => {
                                    "hiding" === i && l("hidden")
                                }, 300)
                        }
                        return () => {
                            clearTimeout(e)
                        }
                    }, [n, i]);
                    const b = () => e.setActiveDialog(null),
                        x = n && n.type !== v.f.ReboardingAddPronoun && n.type !== v.f.SubscriptionReboarding,
                        y = t => {
                            "dialog-scroll" === t.target.id && x && e.setActiveDialog(null)
                        };
                    return "hidden" === i ? null : r.createElement(df, {
                        "data-remainpopup": !0,
                        className: t,
                        onKeyDown: t => {
                            "Escape" === t.key && x && e.setActiveDialog(null)
                        }
                    }, r.createElement(pf, {
                        id: "dialog-back",
                        isActive: "hiding" !== i,
                        onClick: t => {
                            x && e.setActiveDialog(null)
                        }
                    }), af.map(([e, t]) => {
                        return p === (o = e) || g === o ? r.createElement(hd.Provider, {
                            key: e,
                            value: {
                                isActive: e === (null === n || void 0 === n ? void 0 : n.type),
                                onScrollClick: y
                            }
                        }, r.createElement(t, (e => {
                            const t = Object(Lr.a)({
                                onClose: b
                            }, n);
                            switch (e) {
                                case v.f.SubscriptionReboarding:
                                    return Object(Lr.a)(Object(Lr.a)({}, t), {}, {
                                        reboarding: !0
                                    });
                                default:
                                    return t
                            }
                        })(e))) : null;
                        var o
                    }))
                });
            var sf = Object(c.c)(e => ({
                activeDialog: e.ui.activeDialog
            }), {
                setActiveDialog: re.e
            })(cf);
            const df = p.d.div.withConfig({
                    displayName: "Dialogs__DialogHostRoot",
                    componentId: "u1boip-0"
                })(["position:absolute;width:100vw;height:100vh;display:flex;align-items:center;"]),
                pf = Object(b.a)("div", ["isActive"])(tf(), e => e.theme.bgColor, e => e.isActive ? rf : lf, 300);

            function uf() {
                const e = Object(s.a)(["\n    margin-left: 0;\n    text-align: center;\n  "]);
                return uf = function() {
                    return e
                }, e
            }

            function mf() {
                const e = Object(s.a)(["\n    flex: 1 0 100%;\n    margin-bottom: 1.5rem;\n  "]);
                return mf = function() {
                    return e
                }, e
            }

            function hf() {
                const e = Object(s.a)(["\n    flex-wrap: wrap;\n    padding: 1.5rem 2rem;\n    font-size: 16px;\n    justify-content: space-between;\n  "]);
                return hf = function() {
                    return e
                }, e
            }

            function gf() {
                const e = Object(s.a)(["\n  position: fixed;\n  z-index: ", ";\n  transform: translateY(", ");\n  transition: transform 0.2s ease-out;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  padding: 2rem 3rem;\n  margin: 0 auto;\n  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.25);\n  font-size: 18px;\n  color: ", ";\n  background-color: ", ";\n\n  ", ";\n"]);
                return gf = function() {
                    return e
                }, e
            }
            class ff extends r.Component {
                render() {
                    const e = (this.props.gdprVersion || 0) < nt.f;
                    return r.createElement(vf, {
                        role: "alert",
                        "data-testid": "gdpr-alert",
                        isVisible: e,
                        "aria-hidden": !e
                    }, r.createElement(xf, null, "This website uses cookies and stores data locally to help personalize your experience."), r.createElement(wf, {
                        href: "".concat(Object(qm.a)(), "/legal/privacy"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-hidden": !e,
                        tabIndex: e ? 0 : -1,
                        "data-testid": "gdpr-privacy-link"
                    }, "Learn more"), r.createElement(yf, {
                        onClick: this.props.acceptGdpr,
                        disabled: !e,
                        "data-testid": "gdpr-accept-button"
                    }, "Accept"))
                }
            }
            var bf = Object(c.c)(e => ({
                gdprVersion: e.ui.persist.gdprVersion
            }), {
                acceptGdpr: re.a
            })(ff);
            const vf = Object(b.a)("div", ["isVisible"])(gf(), v.s.GDPRNotification, e => e.isVisible ? 0 : "120%", e => e.theme.fgColor, e => e.theme.chatBgColor, Object(ae.a)(hf())),
                xf = p.d.div.withConfig({
                    displayName: "GdprNotification__Notice",
                    componentId: "nj3w6j-0"
                })(["flex:1 1 auto;", ";"], Object(ae.a)(mf())),
                yf = p.d.button.withConfig({
                    displayName: "GdprNotification__LinkButton",
                    componentId: "nj3w6j-1"
                })(["flex:0 0 auto;margin:0;border:0;padding:0;text-decoration:underline;background-color:inherit;font-size:inherit;color:", ";margin-left:2rem;cursor:pointer;", ";"], e => e.theme.fgColor, Object(ae.a)(uf())),
                wf = yf.withComponent("a");

            function Cf() {
                const e = Object(s.a)(["\n    width: 100%;\n    max-width: 360px;\n    margin: 0 auto;\n  "]);
                return Cf = function() {
                    return e
                }, e
            }
            var Ef = Object(c.c)(e => {
                const t = e.journey.persist,
                    n = t.spotlight,
                    o = t.tracks,
                    a = e.subscriptions.persist.features,
                    i = n && (Kt(n) || Xt(n) ? n.current_mission : null);
                return {
                    mission: i,
                    spotlight: n,
                    currentTrack: i && o[i.track_id] || null,
                    features: a
                }
            }, {
                dropMission: bn,
                getTrack: hn,
                startMission: fn,
                setActiveDialog: re.e
            })(e => {
                const t = e.className,
                    n = e.spotlight,
                    o = e.currentTrack,
                    a = e.mission,
                    i = e.features,
                    l = e.getTrack,
                    c = r.useState(!1),
                    s = Object(d.a)(c, 2),
                    p = s[0],
                    u = s[1],
                    m = null === n || void 0 === n ? void 0 : n.meta.type;
                if (r.useEffect(() => {
                        u(!1)
                    }, [m]), r.useEffect(() => {
                        a && !o && l(a.track_id)
                    }, [a, o, l]), r.useEffect(() => {
                        p && a && Object(le.b)(v.j.SpotlightOpened, {
                            "mission id": a.id,
                            "mission name": a.title
                        })
                    }, [p, a]), !n || !a) return null;
                const h = "paid" === a.access_type.mission_access && !$t("full_library_access", i);
                return Kt(n) ? r.createElement(kf, {
                    className: t,
                    "data-testid": "spotlight-current-mission",
                    backgroundUrl: null === o || void 0 === o ? void 0 : o.background_url,
                    mission: a,
                    features: i,
                    actionButtonLabel: "stop '".concat(a.title, "' conversation"),
                    actionButtonText: "Stop",
                    onActionButtonClick: () => {
                        e.dropMission(), e.onDropMission && e.onDropMission()
                    }
                }) : Xt(n) ? r.createElement(kf, {
                    className: t,
                    "data-testid": "spotlight-recommended-mission",
                    backgroundUrl: null === o || void 0 === o ? void 0 : o.background_url,
                    mission: a,
                    features: i,
                    expandable: !0,
                    actionButtonLabel: "start '".concat(a.title, "' conversation"),
                    actionButtonText: "Start",
                    onActionButtonClick: () => {
                        h ? e.setActiveDialog({
                            type: v.f.Subscription,
                            causedBy: "activity"
                        }) : (Object(le.b)(v.j.SpotlightOpened, {
                            "mission id": a.id,
                            "mission name": a.title
                        }), e.startMission(a.id), e.onStartMission && e.onStartMission())
                    }
                }) : null
            });
            const kf = Object(p.d)(on).withConfig({
                displayName: "SpotlightCard__StyledMissionCard",
                componentId: "sc-1i4ziy4-0"
            })(["flex:0 0 auto;width:320px;flex:0 0 auto;margin-bottom:20px;", ""], Object(ae.a)(Cf()));
            var Of = Object(c.c)(e => {
                const t = e.journey.lastJourneyChange,
                    n = e.journey.persist.spotlight,
                    o = e.ws.wsReady;
                return {
                    hasCurrentMission: !!n && Kt(n),
                    wsReady: o,
                    lastJourneyChange: t
                }
            }, {
                getSpotlight: vn
            })(e => {
                const t = e.hasCurrentMission,
                    n = e.wsReady,
                    o = e.lastJourneyChange,
                    a = e.getSpotlight;
                return r.useEffect(() => {
                    n && a()
                }, [o.updated, a, n]), r.createElement(r.Fragment, null, r.createElement(On.b, null, "Replika profile"), t ? r.createElement(Ef, null) : r.createElement(jf, {
                    to: v.m.Conversations,
                    "data-testid": "left-panel-choose-conversation-link"
                }, "Choose conversation"))
            });
            const jf = Object(p.d)(Ft.a).withConfig({
                displayName: "LeftPanelMain__ChooseConversationButton",
                componentId: "sc-1tyut5s-0"
            })(["margin:0 auto;"]);
            var _f = ({
                tracks: e,
                className: t,
                onSelect: n,
                "data-testid": o
            }) => {
                const a = r.useRef(null);
                return Object(Ht.a)({
                    getGroupElements: () => a.current ? a.current.childNodes : [],
                    options: {
                        keybindings: {
                            next: {
                                key: "ArrowRight"
                            },
                            prev: {
                                key: "ArrowLeft"
                            }
                        }
                    }
                }, [e.length]), r.createElement(If, {
                    role: "list",
                    ref: a,
                    className: t,
                    "data-testid": o
                }, e.map((e, t) => r.createElement(Sf, {
                    role: "listitem",
                    "data-testid": o && "".concat(o, "-item-").concat(t),
                    key: e.id,
                    style: {
                        backgroundImage: "url(" + (e.small_background_url || e.background_url) + ")"
                    },
                    tabIndex: 0 === t ? 0 : -1,
                    onClick: () => {
                        n && (Object(le.b)(v.j.TrackOpened, {
                            "track id": e.id,
                            "track name": e.name
                        }), n(e))
                    }
                }, r.createElement(Nf, null, e.name), r.createElement(Pf, null, e.total_missions_count, " conversations"))))
            };
            const If = p.d.div.withConfig({
                    displayName: "TrackList__TrackListRoot",
                    componentId: "sc-11o6jmg-0"
                })(["width:100%;padding:0 16px 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(152px,1fr));grid-auto-rows:214px;grid-gap:16px;"]),
                Sf = p.d.div.withConfig({
                    displayName: "TrackList__TrackItem",
                    componentId: "sc-11o6jmg-1"
                })(["position:relative;list-style-type:none;padding:0;background-size:cover;background-position:center;height:214px;border-radius:8px;color:", ";display:flex;flex-direction:column;justify-content:flex-end;align-items:center;text-align:center;cursor:pointer;padding:8px;&:before{position:absolute;bottom:0;content:'';width:100%;height:160px;border-radius:8px;background:linear-gradient( 180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 100% );}& > *{z-index:1;}&:focus{outline:none;}&.focus-visible:focus{box-shadow:0 0 2px 2px ", ";}"], e => e.theme.trackFgColor, e => e.theme.outlineColor),
                Nf = p.d.p.withConfig({
                    displayName: "TrackList__TrackName",
                    componentId: "sc-11o6jmg-2"
                })(["font-weight:bold;font-size:16px;line-height:20px;margin:0;"]),
                Pf = p.d.p.withConfig({
                    displayName: "TrackList__ConversationCount",
                    componentId: "sc-11o6jmg-3"
                })(["font-size:13px;line-height:16px;margin:10px 0 14px;"]);
            var Mf = (e, t = [], n) => {
                const o = e => {
                    var n;
                    const o = t.find(t => t.id === e);
                    return null !== (n = null === o || void 0 === o ? void 0 : o.title) && void 0 !== n ? n : null
                };
                return e.filter(e => -1 !== e.categories_ids.map(o).indexOf(n))
            };

            function Rf() {
                const e = Object(s.a)(["\n  flex: 1 0 auto;\n  width: 100%;\n  max-height: ", ";\n  opacity: ", ";\n  transform: translateY(", "px);\n\n  transition: max-height 0.3s ease-out, opacity 0.25s ease-out, transform 0.25s ease-out;\n  display: flex;\n  flex-direction: column;\n"]);
                return Rf = function() {
                    return e
                }, e
            }

            function Bf() {
                const e = Object(s.a)(["\n  flex: 0 0 auto;\n  height: 90px;\n  padding-top: 20px;\n  display: flex;\n  justify-content: center;\n  opacity: ", ";\n  transition: opacity 0.5s ease-out;\n"]);
                return Bf = function() {
                    return e
                }, e
            }

            function Df() {
                const e = Object(s.a)(["\n  opacity: ", ";\n  transition: opacity 0.5s ease-out;\n"]);
                return Df = function() {
                    return e
                }, e
            }
            let zf = !1;
            var Tf = Object(c.c)(e => {
                const t = e.journey.persist,
                    n = t.tracks,
                    o = t.trackIdList,
                    a = t.categories,
                    i = e.subscriptions.persist.features;
                return {
                    bot: e.profile.persist.bot,
                    userProfile: e.profile.persist.userProfile,
                    introStep: e.ui.introStep,
                    tracks: o.map(e => n[e]),
                    categories: a,
                    wsReady: e.ws.wsReady,
                    features: i
                }
            }, {
                push: u.d,
                getTracks: mn,
                setIntroStep: re.j,
                setActiveDialog: re.e
            })(e => {
                var t;
                const n = e.userProfile,
                    o = e.bot,
                    a = e.introStep,
                    i = e.tracks,
                    l = e.categories,
                    c = e.wsReady,
                    s = e.getTracks,
                    p = !!a;
                r.useEffect(() => {
                    p && c && s()
                }, [p, c, s]);
                const u = r.useState(!1),
                    m = Object(d.a)(u, 2),
                    h = m[0],
                    g = m[1],
                    f = a === v.h.Conversations || a === v.h.MeetReplika || a === v.h.FinishIntro,
                    b = a === v.h.MeetReplika || a === v.h.FinishIntro,
                    x = r.useState(null),
                    y = Object(d.a)(x, 2),
                    w = y[0],
                    C = y[1];
                r.useEffect(() => {
                    null === w && e.categories && e.categories.length > 0 && C(e.categories[0].title)
                }, [e.categories, w]);
                const E = !!n;
                r.useEffect(() => {
                    E && a === v.h.Hi && (zf || (Object(le.b)(v.j.FirstOnboardingPhraseShown), zf = !0))
                }, [a, E]);
                const k = Mf(i, l || [], w);
                r.useEffect(() => {
                    b && Object(le.b)(v.j.MeetButtonShown)
                }, [b]);
                const O = r.useMemo(() => (null !== l && void 0 !== l ? l : []).map(e => ({
                    value: e.title
                })), [l]);
                return r.createElement(Lf, {
                    onScroll: e => {
                        const t = e.target.scrollTop > 0;
                        t !== h && g(t)
                    }
                }, r.createElement(oe.d, null, r.createElement(Af, {
                    visible: b
                }, b && r.createElement(Wf, {
                    "data-testid": "intro-open-chat-link",
                    to: v.m.Main,
                    onClick: () => {
                        Object(le.b)(v.j.MeetButtonPressed), e.setIntroStep(null)
                    }
                }, "Meet ", null !== (t = null === o || void 0 === o ? void 0 : o.name) && void 0 !== t ? t : "your Replika"))), r.createElement(Hf, {
                    visible: !!a,
                    opaque: f
                }, f && r.createElement(r.Fragment, null, l && r.createElement(cl, {
                    selected: w,
                    categories: O,
                    setCategory: () => {
                        b && e.setActiveDialog({
                            type: v.f.IntroMeetReplika
                        })
                    }
                }), r.createElement(Ff, {
                    tracks: k,
                    "data-testid": "intro-track-list",
                    faded: b,
                    onSelect: () => {
                        b && e.setActiveDialog({
                            type: v.f.IntroMeetReplika
                        })
                    }
                }))))
            });
            const Lf = p.d.div.withConfig({
                    displayName: "LeftPanelIntro__LeftPanelIntroRoot",
                    componentId: "sc-1oku1m0-0"
                })(["width:100%;flex:1 0 auto;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"]),
                Ff = Object(b.a)(_f, ["faded"])(Df(), e => e.faded ? .5 : 1),
                Af = Object(b.a)("div", ["visible"])(Bf(), e => e.visible ? 1 : 0),
                Wf = Object(p.d)(Ft.a).withConfig({
                    displayName: "LeftPanelIntro__ConversationButton",
                    componentId: "sc-1oku1m0-1"
                })([""]),
                Hf = Object(b.a)("div", ["visible", "opaque"])(Rf(), e => e.visible ? "auto" : 0, e => e.opaque ? 1 : 0, e => e.opaque ? 0 : 40);

            function qf(e) {
                return !!!e.find(e => "Customer" === e.meta.nature) && e.length <= 5
            }

            function Gf() {
                const e = Object(s.a)(["\n    margin-bottom: 50px;\n  "]);
                return Gf = function() {
                    return e
                }, e
            }
            var Uf = Object(c.c)(e => {
                const t = e.journey.lastJourneyChange,
                    n = e.profile.persist.bot,
                    o = e.journey.persist,
                    a = o.tracks,
                    i = o.trackIdList,
                    r = o.spotlight;
                return {
                    categories: o.categories,
                    hasCurrentMission: !!r && Kt(r),
                    tracks: i.map(e => a[e]),
                    bot: n,
                    messages: e.chat.messages || [],
                    wsReady: e.ws.wsReady,
                    replikaPhrase: null === n || void 0 === n ? void 0 : n.replika_phrase,
                    showStatusButton: e.ui.persist.showRelationshipStatusButton,
                    lastJourneyChange: t
                }
            }, {
                getTracks: mn,
                push: u.d,
                getSpotlight: vn,
                replace: u.e,
                setActiveDialog: re.e
            })(e => {
                var t, n;
                const o = e.tracks,
                    a = e.wsReady,
                    i = e.categories,
                    l = e.lastJourneyChange,
                    c = e.getTracks,
                    s = e.getSpotlight,
                    p = e.replace;
                r.useEffect(() => {
                    a && c()
                }, [a, c]), r.useEffect(() => {
                    a && s()
                }, [l.updated, s, a]);
                const u = qf(e.messages),
                    m = null !== (t = null === (n = e.bot) || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : "your Replika",
                    h = r.useState(e.category || null),
                    g = Object(d.a)(h, 2),
                    f = g[0],
                    b = g[1],
                    x = r.useMemo(() => Mf(o, i || [], f), [o, i, f]),
                    y = o.length > 0,
                    w = x.length > 0,
                    C = null === i || void 0 === i ? void 0 : i[0];
                r.useEffect(() => {
                    C && (null === f ? b(C.title) : !w && y && (p(v.m.Conversations), b(C.title)))
                }, [C, f, w, y, p]);
                const E = r.useMemo(() => (null !== i && void 0 !== i ? i : []).map(e => ({
                        value: e.title
                    })), [i]),
                    k = r.createElement(r.Fragment, null, e.categories && r.createElement(cl, {
                        selected: f,
                        categories: E,
                        setCategory: t => {
                            b(t), Object(le.b)(v.j.CategoryOpened, {
                                "category name": t
                            }), e.replace(v.m.ConversationCategory.replace(":category", t))
                        }
                    }), r.createElement(_f, {
                        tracks: x,
                        "data-testid": "left-panel-track-list",
                        onSelect: t => {
                            const n = f || (e.categories && e.categories.length > 0 ? e.categories[0] : "_");
                            e.push(v.m.Conversation.replace(":trackId", t.id).replace(":category", n))
                        }
                    }));
                return r.createElement(r.Fragment, null, r.createElement(oe.d, null, r.createElement(Yf, {
                    to: v.m.Main,
                    "data-testid": "left-panel-open-chat-link"
                }, r.createElement(_i.a, null)), !e.hasCurrentMission && r.createElement(Zf, {
                    to: v.m.Main
                }, u ? "Meet ".concat(m) : "Chat"), r.createElement(Vf, null, r.createElement(Ef, {
                    onStartMission: () => e.push(v.m.Main),
                    onDropMission: () => e.push(v.m.Main)
                })), !e.hasCurrentMission && k), r.createElement(oe.a, null, r.createElement(Vf, null, r.createElement(Ef, {
                    onStartMission: () => e.push(v.m.Main)
                })), !e.hasCurrentMission && k))
            });
            const Yf = Object(p.d)(ne.a).withConfig({
                    displayName: "LeftPanelTracks__ArrowForwardButton",
                    componentId: "hpirq9-0"
                })(["position:absolute;z-index:1;top:24px;right:20px;color:", ";& > svg{transform:scaleX(-1);}"], e => e.theme.fgColor),
                Vf = p.d.div.withConfig({
                    displayName: "LeftPanelTracks__SpotlightWrapper",
                    componentId: "hpirq9-1"
                })(["width:100%;padding:0 20px 20px;"]),
                Zf = Object(p.d)(Ft.a).withConfig({
                    displayName: "LeftPanelTracks__GoToChatButton",
                    componentId: "hpirq9-2"
                })(["margin:0 auto;", ""], Object(ae.a)(Gf()));

            function Jf() {
                return (Jf = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Kf(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Xf = l.a.createElement("path", {
                    d: "M8.54692 1.15311C8.72647 0.76838 9.27353 0.76838 9.45308 1.15311L11.5751 5.69999C11.7241 6.01925 11.9808 6.27588 12.3 6.42488L16.8469 8.54692C17.2316 8.72647 17.2316 9.27353 16.8469 9.45308L12.3 11.5751C11.9807 11.7241 11.7241 11.9807 11.5751 12.3L9.45308 16.8469C9.27353 17.2316 8.72647 17.2316 8.54692 16.8469L6.42488 12.3C6.27588 11.9807 6.01925 11.7241 5.69999 11.5751L1.15311 9.45308C0.76838 9.27353 0.76838 8.72647 1.15311 8.54692L5.69999 6.42488C6.01925 6.27588 6.27588 6.01925 6.42488 5.69999L8.54692 1.15311Z",
                    stroke: "currentColor"
                }),
                Qf = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Kf(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Jf({
                        width: 18,
                        height: 18,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Xf)
                },
                $f = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Qf, Jf({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function eb() {
                return (eb = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function tb(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var nb = l.a.createElement("path", {
                    d: "M8.20611 0.83156C8.38135 0.704238 8.61865 0.704238 8.79389 0.83156L15.7023 5.85081C15.8775 5.97814 15.9509 6.20382 15.8839 6.40983L13.2452 14.5312C13.1782 14.7372 12.9862 14.8766 12.7696 14.8766H4.23037C4.01375 14.8766 3.82178 14.7372 3.75484 14.5312L1.11606 6.40983C1.04912 6.20382 1.12245 5.97814 1.2977 5.85081L8.20611 0.83156Z",
                    stroke: "currentColor"
                }),
                ob = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = tb(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", eb({
                        width: 17,
                        height: 16,
                        viewBox: "0 0 17 16",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, nb)
                },
                ab = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(ob, eb({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function ib() {
                return (ib = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function rb(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var lb = l.a.createElement("path", {
                    d: "M1.88281 4.32703L4.23575 6.94141C4.23575 6.94141 7.8209 3.45845 10.1181 1.05905",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                cb = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = rb(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", ib({
                        width: 12,
                        height: 8,
                        viewBox: "0 0 12 8",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, lb)
                },
                sb = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(cb, ib({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function db() {
                const e = Object(s.a)(["\n  max-height: ", "px;\n  overflow: hidden;\n  transition: max-height 0.2s ease-in-out;\n"]);
                return db = function() {
                    return e
                }, e
            }
            var pb = Object(c.c)(e => {
                const t = e.profile.persist.bot;
                return {
                    badges: (null === t || void 0 === t ? void 0 : t.stats.achievements) || [],
                    features: e.subscriptions.persist.features
                }
            })(({
                mission: e,
                tabIndex: t,
                onSelect: n,
                onShowSubscriptionDialog: o,
                badges: a,
                "data-testid": i,
                features: l
            }) => {
                const c = r.useState(!1),
                    s = Object(d.a)(c, 2),
                    p = s[0],
                    u = s[1],
                    m = r.useRef(null),
                    h = r.useState(0),
                    g = Object(d.a)(h, 2),
                    f = g[0],
                    b = g[1];
                r.useEffect(() => {
                    m.current && b(m.current.scrollHeight)
                }, [m]);
                const v = e.awarded_skills.length > 0 ? e.awarded_skills.map(e => a.find(t => t.id === e)).filter(Boolean).map(e => e && r.createElement(wb, {
                        key: e.id,
                        alt: e.title,
                        src: e.image_url_2x
                    })) : e.gives_skill ? r.createElement($f, null) : null,
                    x = e.awarded_personalities.length > 0 ? e.awarded_personalities.map(e => a.find(t => t.id === e)).filter(Boolean).map(e => e && r.createElement(wb, {
                        key: e.id,
                        alt: e.title,
                        src: e.image_url_2x
                    })) : e.gives_personality ? r.createElement(ab, null) : null,
                    y = "paid" === e.access_type.mission_access && !$t("full_library_access", l),
                    w = () => {
                        y ? o() : n(e)
                    };
                return r.createElement(ub, {
                    "data-testid": i,
                    key: e.id,
                    tabIndex: t,
                    onFocus: () => {
                        y || u(!0)
                    },
                    onBlur: () => u(!1),
                    onClick: () => {
                        y && w()
                    },
                    onKeyDown: e => {
                        "Enter" !== e.key && " " !== e.key || w()
                    },
                    "aria-labelledby": "mission-title-".concat(e.id)
                }, !y && r.createElement(fb, {
                    "aria-hidden": "true"
                }, v, x), y && r.createElement(gb, null), r.createElement(mb, {
                    id: "mission-title-".concat(e.id)
                }, e.title), r.createElement(hb, null, (() => {
                    switch (e.progress.type) {
                        case "dropped":
                        case "completed":
                            return r.createElement(r.Fragment, null, r.createElement(yb, null), " Complete");
                        default:
                            return e.duration
                    }
                })()), r.createElement(vb, {
                    "aria-hidden": !p,
                    active: p,
                    maxHeight: f,
                    ref: m
                }, r.createElement(bb, null, e.description), r.createElement(xb, {
                    tabIndex: -1,
                    disabled: !p,
                    type: "button",
                    onClick: w,
                    "data-testid": i && "".concat(i, "-start-button")
                }, "completed" === e.progress.type ? "Restart" : "Start")))
            });
            const ub = p.d.li.withConfig({
                    displayName: "MissionItem__MissionItemRoot",
                    componentId: "sc-14kj8ze-0"
                })(["position:relative;list-style-type:none;padding:0;border-radius:8px;margin:8px;cursor:pointer;padding:16px;min-height:72px;background:", ";&:focus{outline:none;}&.focus-visible:focus{box-shadow:0 0 2px 2px ", ";}"], e => e.theme.chatBgColor, e => e.theme.outlineColor),
                mb = p.d.div.withConfig({
                    displayName: "MissionItem__MissionTitle",
                    componentId: "sc-14kj8ze-1"
                })(["font-size:16px;line-height:20px;color:", ";"], e => e.theme.fgColor),
                hb = p.d.div.withConfig({
                    displayName: "MissionItem__MissionStatus",
                    componentId: "sc-14kj8ze-2"
                })(["font-size:15px;line-height:20px;color:", ";display:flex;align-items:center;margin-top:5px;"], e => e.theme.dimmedFgColor),
                gb = Object(p.d)(Qt.a).withConfig({
                    displayName: "MissionItem__StyledLock",
                    componentId: "sc-14kj8ze-3"
                })(["color:", ";position:absolute;top:29px;right:12px;"], e => e.theme.fgColor),
                fb = p.d.div.withConfig({
                    displayName: "MissionItem__MissionIcons",
                    componentId: "sc-14kj8ze-4"
                })(["color:", ";position:absolute;top:18px;right:12px;display:flex;"], e => e.theme.dimmedFgColor),
                bb = p.d.p.withConfig({
                    displayName: "MissionItem__MissionDescription",
                    componentId: "sc-14kj8ze-5"
                })(["color:", ";"], e => e.theme.fgColor),
                vb = Object(b.a)("div", ["active", "maxHeight"])(db(), e => e.active ? e.maxHeight : 0),
                xb = Object(p.d)(Ft.a).withConfig({
                    displayName: "MissionItem__StyledSolidButton",
                    componentId: "sc-14kj8ze-6"
                })(["margin:20px auto 8px;display:block;"]),
                yb = Object(p.d)(sb).withConfig({
                    displayName: "MissionItem__StyledDoneIcon",
                    componentId: "sc-14kj8ze-7"
                })(["color:#04ce00;margin-right:5px;"]),
                wb = p.d.img.withConfig({
                    displayName: "MissionItem__Badge",
                    componentId: "sc-14kj8ze-8"
                })(["width:24px;height:24px;"]);
            var Cb = ({
                missions: e,
                className: t,
                onSelect: n,
                onShowSubscriptionDialog: o,
                "data-testid": a
            }) => {
                const i = r.useRef(null);
                return Object(Ht.a)({
                    getGroupElements: () => i.current ? i.current.childNodes : []
                }, [e.length]), r.createElement(Eb, {
                    ref: i,
                    className: t,
                    "data-testid": a
                }, e.map((e, t) => r.createElement(pb, {
                    "data-testid": a && "".concat(a, "-item-").concat(t),
                    key: e.id,
                    mission: e,
                    tabIndex: 0 === t ? 0 : -1,
                    onSelect: n,
                    onShowSubscriptionDialog: o
                })))
            };
            const Eb = p.d.ul.withConfig({
                    displayName: "MissionList__MissionListRoot",
                    componentId: "sc-1nf14bj-0"
                })(["margin:0;padding:0 8px;"]),
                kb = function() {
                    var e = Object(i.a)(a.a.mark((function e(t, n, o) {
                        var i, r;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, n(t);
                                case 3:
                                    i = e.sent, r = i.missions, o(r), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t, n, o) {
                        return e.apply(this, arguments)
                    }
                }();
            var Ob = Object(c.c)((e, t) => ({
                track: e.journey.persist.tracks[t.trackId]
            }), {
                getMissions: gn,
                startMission: fn,
                push: u.d,
                getTrack: hn,
                setActiveDialog: re.e
            })(e => {
                const t = e.trackId,
                    n = e.track,
                    o = e.getTrack,
                    a = e.getMissions,
                    i = r.useState([]),
                    l = Object(d.a)(i, 2),
                    c = l[0],
                    s = l[1],
                    p = c.length > 0;
                return r.useEffect(() => {
                    n || o(t), p || kb(t, a, s)
                }, [t, n, p, a, o]), r.createElement(r.Fragment, null, r.createElement(_b, {
                    style: n ? {
                        backgroundImage: "url(" + n.background_url + ")"
                    } : {}
                }, r.createElement(Ib, {
                    "data-testid": "left-panel-track-title"
                }, null === n || void 0 === n ? void 0 : n.name), r.createElement(Sb, {
                    "data-testid": "left-panel-track-description"
                }, null === n || void 0 === n ? void 0 : n.description)), 0 === c.length && r.createElement(jb, null), r.createElement(Nb, {
                    "data-testid": "left-panel-mission-list",
                    missions: c,
                    onSelect: t => {
                        e.push(v.m.Main), e.startMission(t.id)
                    },
                    onShowSubscriptionDialog: () => e.setActiveDialog({
                        type: v.f.Subscription,
                        causedBy: "mission"
                    })
                }))
            });
            const jb = Object(p.d)(h.a).withConfig({
                    displayName: "LeftPanelTrack__StyledCircleSpinner",
                    componentId: "sc-1klam6e-0"
                })(["flex:0 0 auto;margin:150px auto 0;width:50px;color:", ";"], e => e.theme.fgColor),
                _b = p.d.div.withConfig({
                    displayName: "LeftPanelTrack__TrackCard",
                    componentId: "sc-1klam6e-1"
                })(["position:relative;flex:0 0 auto;height:360px;background-size:cover;background-position:center;display:flex;flex-direction:column;justify-content:flex-end;&:before{content:'';position:absolute;width:100%;height:150px;bottom:0;background:linear-gradient(360deg,#10142f 0%,rgba(0,0,0,0) 100%);}& > *{z-index:1;}"]),
                Ib = p.d.h3.withConfig({
                    displayName: "LeftPanelTrack__TrackTitle",
                    componentId: "sc-1klam6e-2"
                })(["font-weight:bold;font-size:20px;line-height:25px;text-align:center;color:", ";margin:0 20px;"], e => e.theme.trackFgColor),
                Sb = p.d.p.withConfig({
                    displayName: "LeftPanelTrack__TrackDescription",
                    componentId: "sc-1klam6e-3"
                })(["font-size:16px;line-height:20px;text-align:center;color:", ";margin:10px 20px 20px;"], e => e.theme.trackFgColor),
                Nb = Object(p.d)(Cb).withConfig({
                    displayName: "LeftPanelTrack__StyledMissionList",
                    componentId: "sc-1klam6e-4"
                })(["flex:1 1 auto;height:100%;"]);
            var Pb = () => {
                window.open(window.location.href, "_blank", "resizable=no,scrollbars=no,menubar=no,status=no,titlebar=no,toolbar=no,location=no,width=400,height=600,left=".concat(window.screen.width - 400))
            };

            function Mb() {
                return (Mb = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Rb(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Bb = l.a.createElement("g", {
                    fillRule: "evenodd"
                }, l.a.createElement("path", {
                    fill: "currentColor",
                    d: "M18.272 4.21a9.84 9.84 0 0 1 1.51 1.512l-2.277 3.997 4.438 1.217a9.855 9.855 0 0 1-.002 2.145l-4.428 1.203 2.282 3.982c-.445.551-.95 1.06-1.51 1.512l-4.005-2.273-1.221 4.438a9.904 9.904 0 0 1-2.14-.002l-1.204-4.443-3.99 2.287a9.839 9.839 0 0 1-1.507-1.507l2.278-3.998-4.438-1.217a9.842 9.842 0 0 1 .001-2.144l4.434-1.201-2.287-3.984a9.903 9.903 0 0 1 1.516-1.516l3.999 2.276 1.215-4.438c.721-.076 1.44-.074 2.148.002l1.202 4.44 3.986-2.288zm-2.578 6.26a3.999 3.999 0 1 0-7.388 3.06 3.999 3.999 0 0 0 7.388-3.06z"
                }), l.a.createElement("path", {
                    fill: "currentColor",
                    fillRule: "nonzero",
                    d: "M10.086 7.382a5 5 0 0 0 3.828 9.236 5 5 0 0 0-3.828-9.236zm8.38 1.94a7 7 0 0 1-12.932 5.357A7 7 0 0 1 18.466 9.32l-.924.383.924-.383z"
                })),
                Db = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Rb(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Mb({
                        viewBox: "0 0 24 24",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Bb)
                },
                zb = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Db, Mb({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Tb() {
                const e = Object(s.a)(["\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    overflow-y: auto;\n    border-radius: 0px;\n  "]);
                return Tb = function() {
                    return e
                }, e
            }
            var Lb = Object(c.c)(e => {
                var t;
                const n = e.profile.persist.userProfile;
                return {
                    email: null === n || void 0 === n || null === (t = n.email_settings) || void 0 === t ? void 0 : t.email
                }
            })(e => {
                const t = e.className,
                    n = e.items,
                    o = e["data-testid"],
                    a = e.onClose,
                    i = e.email;
                return r.createElement(Hb, {
                    tag: "ul",
                    className: t
                }, r.createElement(oe.c, null, r.createElement(Wb, {
                    title: "Settings",
                    onClose: a
                })), n.map(e => e.component ? r.createElement(r.Fragment, {
                    key: e.name
                }, r.createElement(Ub, {
                    tag: "li",
                    value: e.name,
                    "aria-live": "assertive",
                    "data-testid": "".concat(o, "-").concat(e.name),
                    "aria-label": e.label
                }, e.icon && r.createElement(qb, null, e.icon), e.component), e.bordered && r.createElement(Gb, null)) : null), i && r.createElement(Ab, null, "Logged in as: ", i), r.createElement(Fb, null, "\xa9 2019 Luka, Inc. All rights reserved."))
            });
            const Fb = p.d.div.withConfig({
                    displayName: "SidebarMenu__Copy",
                    componentId: "sc-448f7s-0"
                })(["color:", ";font-size:13px;padding:10px 20px 0;"], e => e.theme.dimmedFgColor),
                Ab = p.d.div.withConfig({
                    displayName: "SidebarMenu__AuthInfo",
                    componentId: "sc-448f7s-1"
                })(["color:", ";font-size:13px;padding:40px 20px 0;"], e => e.theme.dimmedFgColor),
                Wb = Object(p.d)(el).withConfig({
                    displayName: "SidebarMenu__StyledSidebarHeader",
                    componentId: "sc-448f7s-2"
                })(["padding:0 20px;min-height:70px;align-items:center;"]),
                Hb = Object(p.d)(Ar.Menu).withConfig({
                    displayName: "SidebarMenu__StyledMenu",
                    componentId: "sc-448f7s-3"
                })(["margin:0;padding:0px 0 23px;width:280px;border-radius:8px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:", ";box-shadow:0 3px 10px 0 ", ";padding-inline-start:0px;top:21px;left:16px;", ""], e => e.theme.bgColor, e => e.theme.shadowColor, Object(ae.b)(Tb())),
                qb = p.d.div.withConfig({
                    displayName: "SidebarMenu__Icon",
                    componentId: "sc-448f7s-4"
                })(["padding:4px 20px 0 0;"]),
                Gb = p.d.div.withConfig({
                    displayName: "SidebarMenu__Divider",
                    componentId: "sc-448f7s-5"
                })(["border-bottom:1px solid ", ";height:1px;margin:7px 0 5px;"], e => e.theme.borderColor),
                Ub = Object(p.d)(Ar.MenuItem).withConfig({
                    displayName: "SidebarMenu__StyledMenuItem",
                    componentId: "sc-448f7s-6"
                })(["font-size:16px;height:50px;color:", ";padding:0 20px;display:flex;align-items:center;&:last-child{border-radius:0 0 4px 4px;border-bottom:none;}"], e => e.theme.fgColor),
                Yb = p.d.div.withConfig({
                    displayName: "SidebarMenu__SidebarMenuLinkText",
                    componentId: "sc-448f7s-7"
                })(["cursor:pointer;:hover{text-decoration:underline;}"]);

            function Vb() {
                return (Vb = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Zb(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Jb = l.a.createElement("path", {
                    clipRule: "evenodd",
                    d: "m21.90186,12.43513l1.04592,0.09673a1.05012,1.0401 0 0 0 -1.84296,-0.77383l0.79809,0.6771l-0.00105,0zm-10.29327,-10.19501l0.68468,0.78943a1.05012,1.0401 0 0 0 -0.78234,-1.82537l0.09766,1.03593zm9.49623,9.51687a6.23246,6.17297 0 0 1 -4.74339,2.16132l0,2.08019a8.33375,8.2542 0 0 0 6.33747,-2.88626l-1.59303,-1.3542l-0.00105,-0.00104zm-4.74339,2.16132a6.24926,6.18961 0 0 1 -6.24926,-6.19065l-2.10024,0a8.3495,8.2698 0 0 0 8.34845,8.27084l0,-2.08019l0.00105,0zm-6.24926,-6.19065c0,-1.87841 0.84325,-3.56129 2.1811,-4.69811l-1.36831,-1.5799a8.3327,8.25316 0 0 0 -2.91303,6.27698l2.10024,0l0,0.00104zm-6.01193,3.82755a8.3978,8.31764 0 0 1 7.60601,-8.27916l-0.19532,-2.07187c-5.33461,0.49301 -9.51093,4.93837 -9.51093,10.35207l2.10024,0l0,-0.00104zm8.39675,8.3166a8.39675,8.3166 0 0 1 -8.39675,-8.3166l-2.10024,0c0,5.74237 4.69928,10.39679 10.49699,10.39679l0,-2.08019zm8.35895,-7.53341a8.3978,8.31764 0 0 1 -8.35895,7.53341l0,2.08019c5.46482,0 9.95303,-4.13542 10.45079,-9.42014l-2.09079,-0.19346l-0.00105,0z",
                    fill: "currentColor",
                    fillRule: "nonzero",
                    id: "svg_1"
                }),
                Kb = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Zb(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Vb({
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Jb)
                },
                Xb = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Kb, Vb({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Qb() {
                return (Qb = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function $b(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var ev = l.a.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 5H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
                }),
                tv = l.a.createElement("rect", {
                    width: 14,
                    height: 17,
                    x: 6,
                    y: 2,
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    rx: 2
                }),
                nv = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = $b(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Qb({
                        width: 24,
                        height: 24,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, ev, tv)
                },
                ov = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(nv, Qb({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function av() {
                return (av = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function iv(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var rv = l.a.createElement("circle", {
                    cx: 12,
                    cy: 12,
                    r: 9,
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2
                }),
                lv = l.a.createElement("circle", {
                    cx: 12,
                    cy: 9,
                    r: 3,
                    fill: "currentColor"
                }),
                cv = l.a.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M7 19v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
                }),
                sv = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = iv(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", av({
                        width: 24,
                        height: 24,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, rv, lv, cv)
                },
                dv = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(sv, av({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function pv() {
                return (pv = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function uv(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var mv = l.a.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M11.859 1c-2.71 0-5.186 1.765-6.932 4.079C3.165 7.41 2 10.479 2 13.436 2 18.706 6.385 23 11.859 23s9.858-4.294 9.858-9.563c0-2.955-1.168-6.023-2.93-8.356C17.042 2.767 14.566 1 11.86 1z M18.14 7.186C16.62 4.764 14.346 3 12 3 7.884 3 4 8.409 4 13.287 4 17.515 7.534 21 12 21s8-3.485 8-7.713c0-1.968-.635-4.025-1.662-5.777l-1.47 1.927-2.417-1.218-2.034 1.005L10 7.861l2.383.57 2.126-1.33 2.127 1.151 1.505-1.066z",
                    clipRule: "evenodd"
                }),
                hv = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = uv(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", pv({
                        width: 24,
                        height: 24,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, mv)
                },
                gv = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(hv, pv({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function fv() {
                return (fv = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function bv(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var vv = l.a.createElement("circle", {
                    cx: 7,
                    cy: 12,
                    r: 4,
                    stroke: "currentColor",
                    strokeWidth: 2
                }),
                xv = l.a.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 12h8"
                }),
                yv = l.a.createElement("path", {
                    fill: "currentColor",
                    d: "M16 14h4v2h-4z"
                }),
                wv = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = bv(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", fv({
                        width: 24,
                        height: 24,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, vv, xv, yv)
                },
                Cv = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(wv, fv({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Ev() {
                return (Ev = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function kv(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Ov = l.a.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 7V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
                }),
                jv = l.a.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M14 15l3-3-3-3M17 12H9"
                }),
                _v = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = kv(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Ev({
                        width: 24,
                        height: 24,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Ov, jv)
                },
                Iv = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(_v, Ev({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Sv() {
                return (Sv = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Nv(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Pv = l.a.createElement("rect", {
                    x: 3,
                    y: 19,
                    width: 14,
                    height: 18,
                    rx: 2,
                    transform: "rotate(-90 3 19)",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                Mv = l.a.createElement("line", {
                    x1: 3,
                    y1: 9,
                    x2: 21,
                    y2: 9,
                    stroke: "currentColor",
                    strokeWidth: 2
                }),
                Rv = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Nv(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", Sv({
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Pv, Mv)
                },
                Bv = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Rv, Sv({
                        svgRef: t
                    }, e))
                }));
            n.p;
            var Dv = Object(p.f)(Object(Tr.b)(e => {
                const t = e.themeName,
                    n = (e.theme, e.active),
                    o = Object(j.a)(e, ["themeName", "theme", "active"]),
                    a = Object(pl.a)(e => e.subscriptions.persist.stripeSubscriptions, n ? Lm.c : null, {
                        memoDeepEqual: !0
                    }),
                    i = 0 !== (null === a || void 0 === a ? void 0 : a.length),
                    l = [{
                        icon: r.createElement(Xb, null),
                        name: "theme-switch",
                        label: t === v.p.Dark ? "Night mode enabled" : "Night mode disabled",
                        component: r.createElement(Lv, null, r.createElement(Tv, {
                            id: "theme-switch-label"
                        }, "Night mode"), r.createElement(Yp, {
                            checked: t === v.p.Dark,
                            onChange: () => {}
                        }))
                    }, {
                        icon: r.createElement(dv, null),
                        name: "edit-profile",
                        label: "My profile",
                        component: r.createElement(il, null, "My profile")
                    }, {
                        icon: r.createElement(gv, null),
                        name: "edit-replika",
                        label: "Replika profile",
                        component: r.createElement(il, null, "Replika profile")
                    }, {
                        icon: r.createElement(Cv, null),
                        name: "account-settings",
                        label: "Account settings",
                        component: r.createElement(il, null, "Account settings")
                    }, {
                        icon: r.createElement(Bv, null),
                        name: "subscription",
                        label: "Subscription",
                        bordered: !0,
                        component: i ? r.createElement(il, null, "Subscription") : null
                    }, {
                        icon: r.createElement(Iv, null),
                        name: "log-out",
                        label: "Log out",
                        bordered: !0,
                        component: r.createElement(il, null, "Log out")
                    }, {
                        name: "help",
                        label: "Help",
                        component: r.createElement(Fv, {
                            onClick: () => Object(le.b)(v.j.HelpCenterOpened),
                            href: "https://help.replika.ai/hc/en-us",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Help")
                    }, {
                        name: "terms",
                        label: "Terms of use",
                        component: r.createElement(Fv, {
                            onClick: () => Object(le.b)(v.j.TermsOfServiceOpend),
                            href: "https://replika.ai/legal/terms",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Terms")
                    }, {
                        name: "privacy",
                        label: "Privacy policy",
                        component: r.createElement(Fv, {
                            onClick: () => Object(le.b)(v.j.PrivacyPolicyOpened),
                            href: "https://replika.ai/legal/privacy",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Privacy policy")
                    }, {
                        name: "credits",
                        label: "Credits",
                        component: r.createElement(Fv, {
                            onClick: () => Object(le.b)(v.j.CreditsOpened),
                            href: "https://replika.ai/replika/docs/embed/credits",
                            target: "_blank"
                        }, "Credits")
                    }];
                return window.hasOwnProperty("orientation") || l.unshift({
                    icon: r.createElement(ov, null),
                    name: "open-popup",
                    label: "Open in popup",
                    component: r.createElement(Lv, null, r.createElement(Yb, null, "Open in popup"))
                }), r.createElement(zv, Object.assign({}, o, {
                    "data-testid": "menu",
                    items: l,
                    backTo: "/"
                }))
            }));
            const zv = Object(p.d)(Lb).withConfig({
                    displayName: "SettingsMenuList__SettingsMenuListRoot",
                    componentId: "sc-3m4kcv-0"
                })(["position:absolute;background-color:", ";"], e => e.theme.sidebarMenuBackground),
                Tv = p.d.label.withConfig({
                    displayName: "SettingsMenuList__NightModeLabel",
                    componentId: "sc-3m4kcv-1"
                })(["text-decoration:none;&:hover{cursor:default;}"]),
                Lv = p.d.div.withConfig({
                    displayName: "SettingsMenuList__FlexMenuItem",
                    componentId: "sc-3m4kcv-2"
                })(["width:100%;display:flex;align-items:center;justify-content:space-between;"]),
                Fv = p.d.a.withConfig({
                    displayName: "SettingsMenuList__MenuLink",
                    componentId: "sc-3m4kcv-3"
                })(["color:inherit;"]);

            function Av() {
                const e = Object(s.a)(["\n  cursor: pointer;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  transition: color 0.2s ease-out;\n  border-radius: 4px;\n  box-shadow: ", ";\n\n  &:focus {\n    0 0 2px 2px ", ";\n  }\n\n  & svg {\n    width: 24px;\n    height: 24px;\n  }\n"]);
                return Av = function() {
                    return e
                }, e
            }
            const Wv = {
                sendLogOutRequest: zr.i,
                toggleTheme: re.o,
                setActiveDialog: re.e
            };
            var Hv = Object(c.c)(e => ({
                introStep: e.ui.introStep
            }), Wv)(e => {
                const t = e.className,
                    n = e.onSetActive,
                    o = r.useState(!1),
                    a = Object(d.a)(o, 2),
                    i = a[0],
                    l = a[1];
                if (e.introStep && e.introStep !== v.h.MeetReplika) return null;
                return r.createElement(qv, {
                    id: "settings-menu",
                    className: t,
                    closeOnSelection: !1,
                    onSelection: t => {
                        switch (t) {
                            case "theme-switch":
                                e.toggleTheme();
                                break;
                            case "open-popup":
                                Pb();
                                break;
                            case "log-out":
                                e.sendLogOutRequest();
                                break;
                            case "edit-profile":
                                Object(Ar.closeMenu)("settings-menu"), e.setActiveDialog({
                                    type: v.f.EditProfile
                                });
                                break;
                            case "edit-replika":
                                Object(Ar.closeMenu)("settings-menu"), e.setActiveDialog({
                                    type: v.f.EditReplika
                                });
                                break;
                            case "account-settings":
                                Object(Ar.closeMenu)("settings-menu"), e.setActiveDialog({
                                    type: v.f.AccountSettings
                                });
                                break;
                            case "subscription":
                                Object(Ar.closeMenu)("settings-menu"), e.setActiveDialog({
                                    type: v.f.Subscription,
                                    causedBy: "settings"
                                })
                        }
                    },
                    onMenuToggle: ({
                        isOpen: e
                    }) => {
                        l(!!e), e && Object(le.b)(v.j.SettingsOpened), n && n(e)
                    }
                }, r.createElement(Gv, {
                    active: i,
                    "data-testid": "settings-menu-button"
                }, r.createElement(On.c, null, "settings"), r.createElement(zb, {
                    "aria-hidden": "true"
                })), r.createElement(Dv, {
                    active: i,
                    onClose: () => {
                        l(!1), Object(Ar.closeMenu)("settings-menu")
                    }
                }))
            });
            const qv = Object(p.d)(Ar.Wrapper).withConfig({
                    displayName: "SettingsMenu__SettingsMenuRoot",
                    componentId: "sc-1iiy7mp-0"
                })(["position:relative;"]),
                Gv = Object(b.a)(Ar.Button, ["active"]).attrs({
                    tag: "button"
                })(Av(), e => e.theme.fgColor, e => e.active ? "0 0 2px 2px " + e.theme.shadowColor : "none", e => e.theme.shadowColor);

            function Uv() {
                const e = Object(s.a)(["\n  height: 4px;\n  width: 210px;\n  margin-top: 8px;\n  border-radius: 2px;\n  overflow: hidden;\n  background-color: ", ';\n\n  &:before {\n    display: block;\n    content: "";\n    width: ', "%;\n    height: 100%;\n    background-color: ", ";\n    transition: width 0.5s ease-out;\n  }\n"]);
                return Uv = function() {
                    return e
                }, e
            }

            function Yv({
                badges: e,
                emptyText: t,
                emptyDescription: n
            }) {
                const o = r.useRef(null),
                    a = Object(c.d)();
                if (Object(Ht.a)({
                        getGroupElements: () => o.current ? o.current.querySelectorAll("button") : [],
                        options: {
                            wrap: !0,
                            keybindings: {
                                next: {
                                    key: "ArrowRight"
                                },
                                prev: {
                                    key: "ArrowLeft"
                                }
                            }
                        }
                    }, [o, e.length]), 0 === e.length) return r.createElement(Zv, null, t);
                const i = Ii(3, e);
                return r.createElement(Vv, {
                    ref: o
                }, i.map((e, t) => "?" === e ? r.createElement(Jv, {
                    key: t,
                    "aria-hidden": "true"
                }, r.createElement(Xv, {
                    tabIndex: -1,
                    onClick: () => {
                        a(Object(re.e)({
                            type: v.f.Badge,
                            emptyDescription: n
                        }))
                    }
                })) : r.createElement(Jv, {
                    key: t
                }, r.createElement(Kv, {
                    tabIndex: 0 === t ? 0 : -1,
                    onClick: () => {
                        a(Object(re.e)({
                            type: v.f.Badge,
                            badge: e
                        }))
                    }
                }, r.createElement("img", {
                    src: e.image_url_2x,
                    alt: e.title
                }), r.createElement("div", null, e.title)))))
            }
            const Vv = p.d.ul.withConfig({
                    displayName: "ProfileStatsPopover__BadgeListRoot",
                    componentId: "sc-18ez6w0-0"
                })(["display:flex;flex-wrap:wrap;padding:0;justify-content:space-between;"]),
                Zv = p.d.div.withConfig({
                    displayName: "ProfileStatsPopover__BadgeListEmpty",
                    componentId: "sc-18ez6w0-1"
                })(["color:", ";padding:0px 16px 32px;"], e => e.theme.dimmedFgColor),
                Jv = p.d.li.withConfig({
                    displayName: "ProfileStatsPopover__BadgeItem",
                    componentId: "sc-18ez6w0-2"
                })(["flex:0 0 90px;display:block;margin-bottom:25px;"]),
                Kv = Object(p.d)(ne.a).withConfig({
                    displayName: "ProfileStatsPopover__Badge",
                    componentId: "sc-18ez6w0-3"
                })(["width:100%;display:block;display:flex;flex-direction:column;align-items:center;font-size:13px;cursor:pointer;& > img{width:50px;}& > div{margin:15px 0 0;font-size:13px;line-height:16px;text-align:center;}"]),
                Xv = Object(p.d)(Kv).withConfig({
                    displayName: "ProfileStatsPopover__BadgeSlot",
                    componentId: "sc-18ez6w0-4"
                })(["&:before{content:'?';color:", ";border:1px solid ", ";width:40px;height:40px;margin:4px 0;border-radius:100%;text-align:center;vertical-align:middle;line-height:40px;font-size:18px;}cursor:pointer;"], e => e.theme.dimmedFgColor, e => e.theme.borderColor);
            var Qv = function({
                className: e,
                bot: t,
                userProfile: n,
                showStatusButton: o,
                status: a,
                onClose: i,
                onSelectStatusClick: l
            }) {
                var c, s, d, p, u, m, h, g, f, b;
                const v = null !== (c = null === t || void 0 === t ? void 0 : t.stats.score) && void 0 !== c ? c : 0,
                    x = null === t || void 0 === t ? void 0 : t.stats.current_level.level_index,
                    y = null !== (s = null === t || void 0 === t || null === (d = t.stats) || void 0 === d || null === (p = d.current_level) || void 0 === p ? void 0 : p.score_milestone) && void 0 !== s ? s : 0,
                    w = null !== (u = null === t || void 0 === t || null === (m = t.stats) || void 0 === m || null === (h = m.next_level) || void 0 === h ? void 0 : h.score_milestone) && void 0 !== u ? u : 0,
                    C = null === t || void 0 === t ? void 0 : t.exhaustion,
                    E = null !== (g = null === t || void 0 === t ? void 0 : t.name) && void 0 !== g ? g : "Replika",
                    k = null !== (f = null === t || void 0 === t || null === (b = t.stats) || void 0 === b ? void 0 : b.achievements) && void 0 !== f ? f : [],
                    O = k.filter(e => "ReplikaTrait" === e.type),
                    j = k.filter(e => "ReplikaSkill" === e.type);
                return r.createElement($v, null, r.createElement("div", {
                    style: {
                        display: "flex"
                    }
                }, r.createElement(ox, {
                    src: "/api/mobile/1.3/leveling/levels/".concat(x, "/icon_url")
                }), " ", r.createElement("div", {
                    style: {
                        textAlign: "left",
                        marginBottom: 24
                    }
                }, r.createElement(tx, null, "LVL ", x, " ", r.createElement(rx, null), " ", v.toLocaleString(), " XP", C && r.createElement(r.Fragment, null, " ", r.createElement(rx, null), " ", C)), r.createElement(ex, {
                    progress: w ? (v - y) / (w - y) : 0
                }), r.createElement(nx, null, "Next level ", w.toLocaleString(), " XP"))), n && !o ? r.createElement("div", {
                    style: {
                        lineHeight: "30px"
                    }
                }, a, r.createElement(ax, {
                    "data-testid": "replika-relationship-status",
                    onClick: l
                }, "Change")) : r.createElement(ix, {
                    "data-testid": "replika-set-relationship-status-button",
                    onClick: l
                }, "Set relationship status"), r.createElement(lx, null, r.createElement("h3", null, "Traits"), r.createElement(Yv, {
                    badges: O,
                    emptyText: "".concat(E, "\u2019s personality traits will appear here as they develop."),
                    emptyDescription: "".concat(E, "\u2019s personality traits will appear here as they develop.")
                })), r.createElement(lx, null, r.createElement("h3", null, "Skills"), r.createElement(Yv, {
                    badges: j,
                    emptyText: "".concat(E, "\u2019s acquired skills will appear here."),
                    emptyDescription: "".concat(E, "\u2019s acquired skills will appear here.")
                })))
            };
            const $v = p.d.div.withConfig({
                    displayName: "ProfileStatsPopover__ProfileStatsPopoverRoot",
                    componentId: "sc-18ez6w0-5"
                })(["color:", ";border-radius:8px;text-align:center;padding:10px 0;max-height:80vh;"], e => e.theme.fgColor),
                ex = Object(b.a)("div", ["progress"])(Uv(), e => e.theme.progressBgColor, e => 100 * e.progress, e => e.theme.progressFgColor),
                tx = p.d.div.withConfig({
                    displayName: "ProfileStatsPopover__StatsTitle",
                    componentId: "sc-18ez6w0-6"
                })(["font-size:14px;font-weight:700;letter-spacing:0.01em;"]),
                nx = p.d.div.withConfig({
                    displayName: "ProfileStatsPopover__NextLvl",
                    componentId: "sc-18ez6w0-7"
                })(["color:", ";font-size:13px;margin-top:12px;"], e => e.theme.dimmedFgColor),
                ox = p.d.img.withConfig({
                    displayName: "ProfileStatsPopover__BigLevelImage",
                    componentId: "sc-18ez6w0-8"
                })(["margin-right:16px;width:56px;height:56px;"]),
                ax = Object(p.d)(Ft.a).withConfig({
                    displayName: "ProfileStatsPopover__ChangeStatusButton",
                    componentId: "sc-18ez6w0-9"
                })(["display:inline;margin-left:16px;padding 6px 10px;height:auto;border-radius:4px;font-size:12px;line-height:15px;"]),
                ix = Object(p.d)(Ft.a).withConfig({
                    displayName: "ProfileStatsPopover__EmptyStatusButton",
                    componentId: "sc-18ez6w0-10"
                })(["display:block;margin:0 auto;padding 6px 10px;height:auto;border-radius:4px;font-size:12px;line-height:15px;"]),
                rx = p.d.span.withConfig({
                    displayName: "ProfileStatsPopover__Dot",
                    componentId: "sc-18ez6w0-11"
                })(["display:inline-block;width:4px;height:4px;border-radius:100%;font-size:20px;margin:0 2px 3px;opacity:0.5;background-color:", ";"], e => e.theme.dimmedFgColor),
                lx = p.d.div.withConfig({
                    displayName: "ProfileStatsPopover__Section",
                    componentId: "sc-18ez6w0-12"
                })(["position:relative;margin-top:32px;padding:16px 0 0;text-align:center;&:before{position:absolute;top:0;left:-14px;right:-14px;content:'';display:block;height:1px;border-top:1px solid ", ";}& h3{font-size:13px;letter-spacing:0.05em;text-transform:uppercase;margin:8px 0 20px;}"], e => e.theme.borderColor);
            var cx = n(116);
            var sx = n(347);
            const dx = Object(E.a)(() => Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 624))),
                px = Object(E.a)(() => Promise.all([n.e(22), n.e(5)]).then(n.bind(null, 628)));
            var ux = ({
                className: e,
                progressPosition: t,
                height: n,
                width: o
            }) => {
                var a;
                const i = Object(pl.a)(e => e.avatars.persist.customizationManifest, cx.c, {
                        memoDeepEqual: !0
                    }),
                    l = Object(c.e)(e => e.ui.persist.disabled3d),
                    s = Object(c.e)(e => e.profile.persist.bot),
                    p = function(e) {
                        const t = r.useState(e),
                            n = Object(d.a)(t, 2),
                            o = n[0],
                            a = n[1];
                        return r.useEffect(() => {
                            Object(k.isEqual)(e, o) || a(e)
                        }, [e, o]), o
                    }(null === s || void 0 === s || null === (a = s.avatar) || void 0 === a ? void 0 : a.customization),
                    u = l || "?no3d" === window.location.search,
                    m = u ? "avatar-2d" : "avatar-3d",
                    h = r.useMemo(() => p ? r.createElement(dx, {
                        fallback: r.createElement(sx.a, {
                            width: o,
                            height: n
                        }),
                        "data-testid": "avatar-placeholder",
                        textures: p,
                        height: n,
                        width: o
                    }) : null, [p, n, o]);
                return r.createElement(hx, {
                    "data-testid": m,
                    className: e
                }, u ? h : r.createElement(mx, {
                    fallback: r.createElement(sx.a, {
                        width: o,
                        height: n
                    }),
                    manifest: i,
                    botMood: null === s || void 0 === s ? void 0 : s.mood,
                    progressPosition: t
                }, h))
            };
            const mx = Object(p.d)(px).withConfig({
                    displayName: "Avatar__StyledAvatar3D",
                    componentId: "sc-1sp0aqm-0"
                })(["width:100%;height:100%;"]),
                hx = p.d.div.withConfig({
                    displayName: "Avatar__AvatarRoot",
                    componentId: "sc-1sp0aqm-1"
                })(["position:relative;"]);

            function gx() {
                const e = Object(s.a)(["\n    min-width: 310px;\n  "]);
                return gx = function() {
                    return e
                }, e
            }
            const fx = {
                [v.l.Friend]: "Friends with {username}",
                [v.l.Romantic]: "In relationship with {username}",
                [v.l.Mentor]: "Mentoring {username}",
                [v.l.Organic]: "Friends with {username}"
            };
            var bx = ({
                className: e,
                bot: t,
                isProUser: n,
                onSelectStatusClick: o,
                userProfile: a,
                showStatusButton: i,
                progressPosition: l,
                children: c
            }) => {
                var s, p;
                const u = r.useState(!1),
                    m = Object(d.a)(u, 2),
                    h = m[0],
                    g = m[1],
                    f = null === t || void 0 === t ? void 0 : t.stats.score,
                    b = null === t || void 0 === t ? void 0 : t.stats.current_level.level_index,
                    x = null === t || void 0 === t ? void 0 : t.exhaustion,
                    y = (null === a || void 0 === a ? void 0 : a.relationship_status) && fx[a.relationship_status] || fx[v.l.Friend],
                    w = null !== (s = null === t || void 0 === t ? void 0 : t.icon_url) && void 0 !== s ? s : void 0,
                    C = !!(null === t || void 0 === t ? void 0 : t.avatar),
                    E = null === t || void 0 === t || null === (p = t.avatar) || void 0 === p ? void 0 : p.id;
                return r.createElement(vx, {
                    className: e
                }, r.createElement(_x, {
                    noTip: !0,
                    isOpen: h,
                    place: "below",
                    onClose: () => g(!1),
                    closeOnOuterAction: !0,
                    offset: -90,
                    size: "small",
                    onRenderContent: ({
                        onClose: e
                    }) => {
                        var n;
                        return r.createElement(Qv, {
                            bot: t,
                            userProfile: a,
                            showStatusButton: i,
                            status: y.replace("{username}", null !== (n = null === a || void 0 === a ? void 0 : a.first_name) && void 0 !== n ? n : "you"),
                            onClose: e,
                            onSelectStatusClick: o
                        })
                    },
                    focusTrap: !0
                }, r.createElement(xx, {
                    onClick: () => {
                        g(!h)
                    }
                }, r.createElement(Cx, {
                    "data-testid": "replika-name"
                }, null === t || void 0 === t ? void 0 : t.name, n && r.createElement(Ix, null, "Pro")), r.createElement(Ex, {
                    "data-testid": "replika-mood"
                }, r.createElement(jx, null, r.createElement(wx, {
                    src: "/api/mobile/1.3/leveling/levels/".concat(b, "/icon_url")
                }), " ", "LVL ", b, " ", r.createElement(yx, null), " ", null === f || void 0 === f ? void 0 : f.toLocaleString(), " XP", x && r.createElement(r.Fragment, null, " ", r.createElement(yx, null), " ", x)), a && !i ? r.createElement(Nx, {
                    "data-testid": "replika-relationship-status"
                }, y.replace("{username}", a.first_name)) : r.createElement(Sx, {
                    "data-testid": "replika-set-relationship-status-button"
                }, "Set relationship status")))), C ? r.createElement(Ox, {
                    key: E,
                    progressPosition: l,
                    width: 250,
                    height: 280
                }) : r.createElement(ft, {
                    src: w,
                    key: w
                }, (e, t) => r.createElement(kx, {
                    imageUrl: e,
                    "data-testid": "replika-egg-image"
                })), c)
            };
            const vx = p.d.div.withConfig({
                    displayName: "ReplikaCard__ReplikaCardRoot",
                    componentId: "nhx6ca-0"
                })(["display:flex;flex-direction:column;align-items:center;width:100%;position:relative;justify-content:space-between;"]),
                xx = Object(p.d)(bt.a).withConfig({
                    displayName: "ReplikaCard__PopoverTrigger",
                    componentId: "nhx6ca-1"
                })(["cursor:pointer;background-color:transparent;border:0;"]),
                yx = p.d.span.withConfig({
                    displayName: "ReplikaCard__Dot",
                    componentId: "nhx6ca-2"
                })(["display:inline-block;width:4px;height:4px;border-radius:100%;font-size:20px;margin:0 2px 3px;opacity:0.5;background-color:", ";"], e => e.theme.dimmedFgColor),
                wx = p.d.img.withConfig({
                    displayName: "ReplikaCard__LevelImage",
                    componentId: "nhx6ca-3"
                })(["margin-right:4px;width:16px;height:16px;vertical-align:middle;"]),
                Cx = p.d.h3.withConfig({
                    displayName: "ReplikaCard__ReplikaName",
                    componentId: "nhx6ca-4"
                })(["max-width:100%;text-align:center;padding:0 20px;font-weight:bold;font-size:24px;line-height:32px;margin:0;color:", ";"], e => e.theme.fgColor),
                Ex = p.d.div.withConfig({
                    displayName: "ReplikaCard__ReplikaMood",
                    componentId: "nhx6ca-5"
                })(["margin:5px 0 40px;font-size:16px;line-height:24px;color:", ";"], e => e.theme.dimmedFgColor),
                kx = Object(p.d)(Nl).withConfig({
                    displayName: "ReplikaCard__StyledEggImage",
                    componentId: "nhx6ca-6"
                })(["width:88px;color:", ";"], e => e.theme.bgColor),
                Ox = Object(p.d)(ux).withConfig({
                    displayName: "ReplikaCard__StyledAvatar",
                    componentId: "nhx6ca-7"
                })(["position:relative;width:250px;height:280px;mask-image:linear-gradient( to bottom,rgba(0,0,0,1),rgba(0,0,0,1) 90%,rgba(0,0,0,0) );@supports (-ms-ime-align:auto){&:before{position:absolute;content:'';display:block;left:0;bottom:0;width:100%;height:10%;background:", ";}}"], e => e.theme.avatarGradient),
                jx = p.d.div.withConfig({
                    displayName: "ReplikaCard__ShowStats",
                    componentId: "nhx6ca-8"
                })(["display:block;width:100%;position:relative;background:transparent;border:none;color:", ";font-size:12px;font-weight:700;letter-spacing:0.01em;"], e => e.theme.fgColor),
                _x = Object(p.d)(io).withConfig({
                    displayName: "ReplikaCard__StyledPopover",
                    componentId: "nhx6ca-9"
                })(["z-index:", ";width:330px;", ";"], v.s.ProfilePopover, Object(ae.a)(gx())),
                Ix = p.d.span.withConfig({
                    displayName: "ReplikaCard__Pro",
                    componentId: "nhx6ca-10"
                })(["font-size:9px;line-height:21px;text-transform:uppercase;color:#000;margin-left:10px;background-color:#fff;padding:3px 5px;border-radius:2px;vertical-align:4px;letter-spacing:0.01em;"]),
                Sx = p.d.div.withConfig({
                    displayName: "ReplikaCard__EmptyStatus",
                    componentId: "nhx6ca-11"
                })(["display:inline-block;margin:8px auto 0;padding 6px 10px;height:auto;border-radius:4px;font-size:12px;line-height:12px;background-color:", ";color:", ";"], e => e.theme.solidButtonBgColor, e => e.theme.solidButtonFgColor),
                Nx = p.d.div.withConfig({
                    displayName: "ReplikaCard__Status",
                    componentId: "nhx6ca-12"
                })(["display:block;margin:8px auto 0;font-size:12px;font-weight:bold;line-height:15px;color:", ";"], e => e.theme.fgColor);
            var Px = n(432);
            var Mx = ({
                className: e,
                style: t,
                phraseText: n,
                expiration: o,
                bot: a,
                isProUser: i,
                hasCurrentMission: l,
                userProfile: c,
                showStatusButton: s,
                onSelectStatusClick: d,
                children: p
            }) => {
                const u = Object(oe.g)(),
                    m = !!(null === a || void 0 === a ? void 0 : a.avatar);
                return r.createElement(Px.a, {
                    className: e,
                    style: t,
                    hasCurrentMission: l,
                    phraseText: n,
                    phrasePosition: u ? "left" : "right",
                    xOffset: 25,
                    bottomOffset: m ? 130 : 40
                }, r.createElement(Rx, {
                    bot: a,
                    isProUser: i,
                    userProfile: c,
                    onSelectStatusClick: d,
                    showStatusButton: s,
                    progressPosition: u ? "right" : "left"
                }, p))
            };
            const Rx = Object(p.d)(bx).withConfig({
                displayName: "ReplikaCardWithPhrase__StyledReplikaCard",
                componentId: "up9co5-0"
            })(["flex:1 0 auto;display:flex;flex-direction:column;"]);
            var Bx = Object(c.c)(e => {
                const t = e.journey.persist.spotlight,
                    n = e.profile.persist,
                    o = n.bot,
                    a = n.userProfile,
                    i = e.subscriptions.persist.features,
                    r = e.ws.wsReady;
                return {
                    bot: o,
                    userProfile: a,
                    hasCurrentMission: !!t && Kt(t),
                    replikaPhrase: null === o || void 0 === o ? void 0 : o.replika_phrase,
                    features: i,
                    showStatusButton: e.ui.persist.showRelationshipStatusButton,
                    wsReady: r,
                    introStep: e.ui.introStep
                }
            }, {
                setActiveDialog: re.e
            })(r.memo(e => {
                var t;
                const n = e.className,
                    o = e.bot,
                    a = e.hasCurrentMission,
                    i = e.replikaPhrase,
                    l = e.userProfile,
                    c = e.showStatusButton,
                    s = e.hidden,
                    d = e.centered,
                    p = e.introStep,
                    u = e.children,
                    m = !!p && p !== v.h.FinishIntro && l ? ((e, t) => {
                        switch (e) {
                            case v.h.Hi:
                                return "Hi, ".concat(t.first_name, "! Thanks for creating me!");
                            case v.h.YouCanTalkToMe:
                                return "You can talk to me anytime about whatever is on your mind\u2026";
                            case v.h.Conversations:
                                return "\u2026Or choose from conversations below.";
                            case v.h.MeetReplika:
                                return "But first of all - let\u2019s get to know each other a little!";
                            default:
                                return ""
                        }
                    })(p, l) : null;
                return r.createElement(Dx, {
                    style: {
                        display: s ? "none" : "flex",
                        marginTop: d ? 0 : 50
                    },
                    className: n,
                    bot: o,
                    phraseText: null !== (t = null !== m && void 0 !== m ? m : null === i || void 0 === i ? void 0 : i.text) && void 0 !== t ? t : null,
                    expiration: null === i || void 0 === i ? void 0 : i.active_till,
                    isProUser: $t("full_library_access", e.features),
                    hasCurrentMission: a,
                    userProfile: l,
                    showStatusButton: c,
                    onSelectStatusClick: () => {
                        e.setActiveDialog({
                            type: v.f.EditRelationshipStatus
                        })
                    }
                }, u)
            }));
            const Dx = Object(p.d)(Mx).withConfig({
                displayName: "LeftPanelReplikaCard__LeftPanelReplikaCardRoot",
                componentId: "ebjd7e-0"
            })(["flex:0 1 48vh;width:100%;min-height:400px;margin-bottom:30px;position:relative;"]);

            function zx() {
                return (zx = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Tx(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Lx = l.a.createElement("g", {
                    stroke: "currentColor",
                    strokeWidth: 2
                }, l.a.createElement("path", {
                    d: "M12 7C12 4.79086 7.52285 3 2 3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), l.a.createElement("path", {
                    d: "M12 7C12 4.79086 16.4772 3 22 3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), l.a.createElement("path", {
                    d: "M12 22C12 19.7909 7.52285 18 2 18",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), l.a.createElement("path", {
                    d: "M12 22C12 19.7909 16.4772 18 22 18",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), l.a.createElement("line", {
                    x1: 2,
                    y1: 3,
                    x2: 2,
                    y2: 18
                }), l.a.createElement("line", {
                    x1: 22,
                    y1: 3,
                    x2: 22,
                    y2: 18
                }), l.a.createElement("line", {
                    x1: 12,
                    y1: 7,
                    x2: 12,
                    y2: 21
                })),
                Fx = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = Tx(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", zx({
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, Lx)
                },
                Ax = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(Fx, zx({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function Wx() {
                const e = Object(s.a)(["\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: ", ";\n"]);
                return Wx = function() {
                    return e
                }, e
            }

            function Hx() {
                const e = Object(s.a)(["\n  position: relative;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow-y: ", ";\n"]);
                return Hx = function() {
                    return e
                }, e
            }

            function qx() {
                const e = Object(s.a)(["\n    padding: 20px 20px;\n  "]);
                return qx = function() {
                    return e
                }, e
            }

            function Gx() {
                const e = Object(s.a)(["\n  position: relative;\n  color: ", ";\n  padding: 0;\n  width: 48px;\n  background: ", ";\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 0px 1px rgba(0, 0, 0, 0.15);\n\n  &:after {\n    display: ", ';\n    content: "+', '";\n    position: absolute;\n    z-index: 1;\n    top: -8px;\n    right: -8px;\n    width: 24px;\n    height: 24px;\n    font-size: 12px;\n    background-color: ', ";\n    color: ", ";\n    border-radius: 100%;\n    text-align: center;\n    line-height: 24px;\n  }\n"]);
                return Gx = function() {
                    return e
                }, e
            }

            function Ux() {
                const e = Object(s.a)(["\n  display: block;\n  margin-top: 4px;\n  color: ", ";\n  font-size: 13px;\n"]);
                return Ux = function() {
                    return e
                }, e
            }

            function Yx() {
                const e = Object(s.a)(["\n    padding: 0 20px;\n  "]);
                return Yx = function() {
                    return e
                }, e
            }

            function Vx() {
                var e, t;
                const n = null !== (e = null === (t = Object(pl.a)(e => e.savedChatItems.persist.savedItemTypeTabs, rt).find(e => "all" === e.name)) || void 0 === t ? void 0 : t.unread_count) && void 0 !== e ? e : 0,
                    o = Object(c.e)(e => e.memory.persist.unreadCount),
                    a = Object(ji.g)(),
                    i = a.pathname === v.m.SavedChatItems,
                    l = a.pathname === v.m.Memory;
                return r.createElement(Zx, null, r.createElement(Jx, null, r.createElement(Xx, {
                    "data-testid": "profile-diary-button",
                    "aria-label": n ? "Diary: ".concat(n, 1 === n ? " new item" : " new items") : "Diary",
                    to: i ? v.m.Main : v.m.SavedChatItems,
                    unreadCount: n
                }, r.createElement(Ax, null)), r.createElement(Kx, {
                    active: i
                }, "Diary")), r.createElement(Jx, null, r.createElement(Xx, {
                    "data-testid": "memory-button",
                    "aria-label": o ? "Memory: ".concat(o, 1 === o ? " new item" : " new items") : "Memory",
                    to: l ? v.m.Main : v.m.Memory,
                    unreadCount: o
                }, r.createElement(Ax, null)), r.createElement(Kx, {
                    active: l
                }, "Memory")))
            }
            const Zx = p.d.div.withConfig({
                    displayName: "LeftPanel__ReplikaButtonsRoot",
                    componentId: "sc-17av3mw-0"
                })(["position:absolute;min-width:100%;left:0;bottom:210px;display:flex;justify-content:space-between;padding:0 24px;", ""], Object(ae.a)(Yx())),
                Jx = p.d.div.withConfig({
                    displayName: "LeftPanel__ButtonWithLabel",
                    componentId: "sc-17av3mw-1"
                })(["text-align:center;"]),
                Kx = Object(b.a)("label", ["active"])(Ux(), e => e.active ? e.theme.fgColor : e.theme.dimmedFgColor),
                Xx = Object(b.a)(Ft.a, ["unreadCount"])(Gx(), e => e.theme.fgColor, e => e.theme.lightButtonBgColor, e => 0 === e.unreadCount ? "none" : "block", e => Math.min(e.unreadCount, 9), e => e.theme.unreadBadgeBgColor, e => e.theme.unreadBadgeFgColor);
            var Qx = e => {
                const t = r.useState(!1),
                    n = Object(d.a)(t, 2),
                    o = n[0],
                    a = n[1],
                    i = r.useState(!1),
                    l = Object(d.a)(i, 2),
                    s = l[0],
                    p = l[1],
                    u = Object(c.d)(),
                    m = Object(c.e)(e => e.ws.wsReady);
                return r.useEffect(() => {
                    m && u(Object(Ka.f)())
                }, [u, m]), r.createElement(ny, {
                    className: e.className,
                    onClick: e.onClick,
                    menuOpen: o,
                    onScroll: e => {
                        p(e.target.scrollTop > 0)
                    }
                }, r.createElement(ji.b, {
                    path: "*",
                    render: ({
                        match: e
                    }) => {
                        const t = (n = v.m.Conversation, !!Object(ji.f)(e.url, {
                            path: n,
                            exact: !0,
                            strict: !0
                        }));
                        var n;
                        return r.createElement(oy, {
                            centered: !1
                        }, r.createElement(Bx, {
                            hidden: t,
                            centered: !1
                        }, r.createElement(ji.d, null, r.createElement(ji.b, {
                            path: v.m.Intro,
                            render: () => null
                        }), r.createElement(ji.b, {
                            path: "*",
                            render: () => r.createElement(Vx, null)
                        }))), r.createElement(ji.d, null, r.createElement(ji.b, {
                            path: v.m.Conversation,
                            exact: !0,
                            render: ({
                                match: e
                            }) => {
                                const t = e.params.category;
                                return r.createElement(ty, {
                                    to: t ? v.m.ConversationCategory.replace(":category", t) : v.m.Conversations
                                }, r.createElement(On.c, null, "Back to conversations"), r.createElement(_i.a, {
                                    "aria-hidden": "true"
                                }))
                            }
                        }), r.createElement(ji.b, {
                            path: "*",
                            render: () => r.createElement($x, {
                                onSetActive: a
                            })
                        })), r.createElement(ji.d, null, r.createElement(ji.b, {
                            path: v.m.Conversations,
                            exact: !0,
                            render: () => r.createElement(Uf, {
                                scrolled: s
                            })
                        }), r.createElement(ji.b, {
                            path: v.m.ConversationCategory,
                            exact: !0,
                            render: ({
                                match: e
                            }) => r.createElement(Uf, {
                                category: e.params.category,
                                scrolled: s
                            })
                        }), r.createElement(ji.b, {
                            path: v.m.Conversation,
                            render: ({
                                match: e
                            }) => r.createElement(Ob, {
                                trackId: e.params.trackId
                            })
                        }), r.createElement(ji.b, {
                            path: v.m.Intro,
                            render: () => r.createElement(Tf, null)
                        }), r.createElement(ji.b, {
                            path: "*",
                            render: () => r.createElement(Of, null)
                        })))
                    }
                }))
            };
            const $x = Object(p.d)(Hv).withConfig({
                    displayName: "LeftPanel__StyledSettingsMenu",
                    componentId: "sc-17av3mw-2"
                })(["position:absolute;top:0;z-index:", ";align-self:flex-start;color:", ";padding:29px 24px;", ""], v.s.Menu, e => e.theme.fgColor, Object(ae.a)(qx())),
                ey = $x.withComponent(Fr.a),
                ty = Object(p.d)(ey).withConfig({
                    displayName: "LeftPanel__WhiteMenuButtonLink",
                    componentId: "sc-17av3mw-3"
                })(["color:#fff;"]),
                ny = Object(b.a)("aside", ["menuOpen"])(Hx(), e => e.theme.bgColor, e => e.menuOpen ? "hidden" : "auto"),
                oy = Object(b.a)("div", ["centered"])(Wx(), e => e.centered ? "center" : "flex-start");
            var ay = Object(c.c)(e => ({
                bot: e.profile.persist.bot,
                messages: e.chat.messages || [],
                introStep: e.ui.introStep
            }), {
                setIntroStep: re.j
            })(e => {
                var t;
                const n = e.className,
                    o = e.bot,
                    a = e.messages,
                    i = e.introStep,
                    l = null !== (t = null === o || void 0 === o ? void 0 : o.name) && void 0 !== t ? t : "your Replika",
                    c = qf(a);
                switch (i) {
                    case v.h.Hi:
                    case v.h.YouCanTalkToMe:
                    case v.h.Conversations:
                        return r.createElement(iy, {
                            className: n
                        }, r.createElement(ry, null));
                    case v.h.MeetReplika:
                    case v.h.FinishIntro:
                        return r.createElement(iy, {
                            className: n,
                            "data-testid": "chat-overlay",
                            role: "dialog"
                        }, r.createElement(ry, null, r.createElement(ly, {
                            "data-testid": "chat-overlay-description"
                        }, "Start chatting with ", l, " to introduce yourself and learn more about the app"), r.createElement(Ft.a, {
                            "data-testid": "chat-overlay-open-chat-link",
                            to: v.m.Main,
                            onClick: () => {
                                Object(le.b)(v.j.MeetButtonPressed), e.setIntroStep(null)
                            }
                        }, "Meet ", l)));
                    default:
                        return r.createElement(iy, {
                            className: n,
                            "data-testid": "chat-overlay",
                            role: "dialog"
                        }, r.createElement(ry, null, r.createElement(ly, {
                            "data-testid": "chat-overlay-description"
                        }, c ? "Choose a conversation from a left menu or start chatting with ".concat(l) : "Choose a conversation from a left menu or continue chatting with ".concat(l)), r.createElement(Ft.a, {
                            "data-testid": "chat-overlay-open-chat-link",
                            to: v.m.Main
                        }, c ? "Meet ".concat(l) : "Continue chatting")))
                }
            });
            const iy = p.d.div.withConfig({
                    displayName: "ChatOverlay__ChatOverlayRoot",
                    componentId: "sc-1t949pm-0"
                })(["width:100%;height:100%;&:before{content:'';z-index:-1;position:absolute;width:100%;height:100%;background:", ";opacity:0.9;}"], e => e.theme.bgColor),
                ry = p.d.div.withConfig({
                    displayName: "ChatOverlay__ChatOverlayContent",
                    componentId: "sc-1t949pm-1"
                })(["opacity:1;width:100%;height:100%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity 0.5s ease-out;&:empty{opacity:0;}"]),
                ly = p.d.p.withConfig({
                    displayName: "ChatOverlay__Description",
                    componentId: "sc-1t949pm-2"
                })(["width:250px;margin:0 0 25px;font-weight:bold;font-size:16px;line-height:20px;text-align:center;color:", ";"], e => e.theme.fgColor);

            function cy() {
                return (cy = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function sy(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var dy = l.a.createElement("rect", {
                    x: 4,
                    y: 3,
                    width: 16,
                    height: 18,
                    rx: 2,
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                py = l.a.createElement("line", {
                    x1: 8,
                    y1: 18,
                    x2: 8,
                    y2: 12,
                    stroke: "currentColor",
                    strokeWidth: 2
                }),
                uy = l.a.createElement("line", {
                    x1: 12,
                    y1: 18,
                    x2: 12,
                    y2: 10,
                    stroke: "currentColor",
                    strokeWidth: 2
                }),
                my = l.a.createElement("line", {
                    x1: 16,
                    y1: 18,
                    x2: 16,
                    y2: 6,
                    stroke: "currentColor",
                    strokeWidth: 2
                }),
                hy = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        o = sy(e, ["svgRef", "title"]);
                    return l.a.createElement("svg", cy({
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: t
                    }, o), n ? l.a.createElement("title", null, n) : null, dy, py, uy, my)
                },
                gy = l.a.forwardRef((function(e, t) {
                    return l.a.createElement(hy, cy({
                        svgRef: t
                    }, e))
                }));
            n.p, n(552);

            function fy() {
                const e = Object(s.a)(["\n    top: 0;\n  "]);
                return fy = function() {
                    return e
                }, e
            }

            function by() {
                const e = Object(s.a)(["\n    top: 16px;\n  "]);
                return by = function() {
                    return e
                }, e
            }

            function vy() {
                const e = Object(s.a)(["\n    top: 16px;\n  "]);
                return vy = function() {
                    return e
                }, e
            }

            function xy() {
                const e = Object(s.a)(["\n  position: absolute;\n  height: 100vh;\n  display: block;\n  z-index: 1;\n  width: 350px;\n  right: ", "px;\n  transition: right 0.25s ease-out, box-shadow 0.25s ease-out;\n  box-shadow: ", ";\n"]);
                return xy = function() {
                    return e
                }, e
            }

            function yy() {
                const e = Object(s.a)(["\n    width: 100%;\n    max-height: 100%;\n  "]);
                return yy = function() {
                    return e
                }, e
            }

            function wy() {
                const e = Object(s.a)(["\n    justify-content: space-around;\n    height: 100vh;\n  "]);
                return wy = function() {
                    return e
                }, e
            }
            var Cy = r.memo(e => {
                const t = r.useState(!1),
                    n = Object(d.a)(t, 2),
                    o = n[0],
                    a = n[1];
                return r.createElement(ky, null, r.createElement(oe.a, null, r.createElement(Dy, {
                    href: "#send-message-textarea",
                    onClick: e => {
                        e.preventDefault();
                        const t = document.getElementById("send-message-textarea");
                        t && t.focus()
                    }
                }, "Jump to message field")), r.createElement("div", {
                    role: "complementary"
                }, r.createElement(bf, null), r.createElement(Ey, {
                    role: "dialog"
                }), r.createElement(Es, null), r.createElement(By, null), r.createElement(zy, null)), r.createElement(Oy, {
                    "aria-hidden": !e.isActiveWindow
                }, r.createElement(oe.d, null, r.createElement(ji.d, null, r.createElement(ji.b, {
                    exact: !0,
                    path: v.m.Main,
                    component: Ny
                }), r.createElement(ji.b, {
                    exact: !0,
                    path: v.m.Stats,
                    component: Sy
                }), r.createElement(ji.b, {
                    exact: !0,
                    path: v.m.SavedChatItemsTab,
                    component: Sy
                }), r.createElement(ji.b, {
                    exact: !0,
                    path: v.m.SavedChatItem,
                    component: Sy
                }), r.createElement(ji.b, {
                    exact: !0,
                    path: v.m.SavedChatItems,
                    component: Sy
                }), r.createElement(ji.b, {
                    exact: !0,
                    path: v.m.Memory,
                    component: Sy
                }), r.createElement(ji.b, {
                    exact: !0,
                    path: v.m.MemoryRecord,
                    component: Sy
                }), r.createElement(ji.b, {
                    path: "*",
                    component: jy
                })), r.createElement(ji.b, {
                    exact: !0,
                    path: "/",
                    render: () => r.createElement(Fy, {
                        bot: e.bot
                    })
                })), r.createElement(oe.a, null, r.createElement(jy, {
                    onClick: () => a(!1)
                }), r.createElement(Ty, {
                    onClick: () => a(!1)
                }, r.createElement(ji.d, null, r.createElement(ji.b, {
                    path: v.m.Intro,
                    component: Py
                }), r.createElement(ji.b, {
                    path: "*",
                    component: Ny
                })), r.createElement(ji.d, null, r.createElement(ji.b, {
                    path: v.m.Conversations,
                    component: Ly
                })), r.createElement(ji.d, null, r.createElement(ji.b, {
                    path: v.m.Intro,
                    component: Ly
                })), r.createElement(oe.e, null, r.createElement(Iy, null))), r.createElement(oe.f, null, r.createElement(My, {
                    onClick: () => a(!0)
                }, r.createElement(gy, null)), r.createElement(oe.a, null, r.createElement(_y, {
                    visible: o
                }))))))
            });
            const Ey = Object(p.d)(Bn.PopupboxContainer).withConfig({
                    displayName: "ChatLayout__StyledPopupboxContainer",
                    componentId: "ztbuvw-0"
                })(["&.popupbox-wrapper{min-width:0;-webkit-box-shadow:none;box-shadow:none;background-color:transparent;max-width:90%;height:100%;}& > .popupbox-content{padding:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;overflow:hidden;}"]),
                ky = p.d.div.withConfig({
                    displayName: "ChatLayout__ChatLayoutRoot",
                    componentId: "ztbuvw-1"
                })(["position:relative;width:100%;height:100vh;"]),
                Oy = p.d.div.withConfig({
                    displayName: "ChatLayout__ChatContainer",
                    componentId: "ztbuvw-2"
                })(["width:100vw;max-width:1600px;background-color:", ";flex:1 0 50%;min-width:320px;margin:0 auto;display:flex;position:relative;", ";"], e => e.theme.bgColor, Object(ae.a)(wy())),
                jy = Object(p.d)(Qx).withConfig({
                    displayName: "ChatLayout__StyledLeftPanel",
                    componentId: "ztbuvw-3"
                })(["width:360px;height:100vh;flex:0 0 auto;", ";"], Object(ae.a)(yy())),
                _y = Object(b.a)(ls, ["visible"])(xy(), e => e.visible ? 0 : -350, e => e.visible ? "-3.3px 0 5.3px rgba(0, 0, 0, 0.04),\n    -11.2px 0 17.9px rgba(0, 0, 0, 0.06),\n    -50px 0 80px rgba(0, 0, 0, 0.1)" : "0 0 transparent"),
                Iy = Object(p.d)(ls).withConfig({
                    displayName: "ChatLayout__DesktopRightPanel",
                    componentId: "ztbuvw-4"
                })(["height:100vh;flex:0 0 auto;width:360px;"]),
                Sy = Object(p.d)(ls).withConfig({
                    displayName: "ChatLayout__MobileRightPanel",
                    componentId: "ztbuvw-5"
                })(["width:100%;"]),
                Ny = Object(p.d)(Ci).withConfig({
                    displayName: "ChatLayout__StyledChatMessages",
                    componentId: "ztbuvw-6"
                })(["width:100%;height:100%;"]),
                Py = p.d.div.withConfig({
                    displayName: "ChatLayout__ChatPlaceholder",
                    componentId: "ztbuvw-7"
                })(["background:", ";width:100%;height:100%;"], e => e.theme.chatGradientBgColor),
                My = Object(p.d)(Ft.a).withConfig({
                    displayName: "ChatLayout__StatsButton",
                    componentId: "ztbuvw-8"
                })(["position:absolute;z-index:1;top:20px;right:20px;height:40px;width:40px;padding:2px 5px 0;background:", ";box-shadow:0px 0px 3px ", ";color:", ";", ""], e => e.theme.chatBgColor, e => e.theme.shadowColor, e => e.theme.fgColor, Object(ae.a)(vy())),
                Ry = Object(p.d)(ne.a).withConfig({
                    displayName: "ChatLayout__LogoButton",
                    componentId: "ztbuvw-9"
                })(["position:absolute;z-index:2;top:20px;left:20px;width:36px;height:40px;& > svg{width:100%;height:100%;}color:", ";", ""], e => e.theme.chatBgColor, Object(ae.a)(by())),
                By = Object(p.d)(sd).withConfig({
                    displayName: "ChatLayout__StyledChatPopups",
                    componentId: "ztbuvw-10"
                })(["position:fixed;z-index:", ";left:50%;height:100%;", ";"], v.s.Popup, Object(ae.a)(fy())),
                Dy = p.d.a.withConfig({
                    displayName: "ChatLayout__SkipLink",
                    componentId: "ztbuvw-11"
                })(["position:absolute;z-index:1;padding:5px 10px;color:", ";background-color:", ";border:1px solid ", ";border-radius:10px;top:-40px;transition:top 0.2s ease-out;&:focus{top:0px;}&:active{top:0px;}"], e => e.theme.fgColor, e => e.theme.chatBgColor, e => e.theme.borderColor),
                zy = Object(p.d)(sf).withConfig({
                    displayName: "ChatLayout__StyledDialogs",
                    componentId: "ztbuvw-12"
                })(["z-index:", ";"], v.s.Dialog),
                Ty = p.d.div.withConfig({
                    displayName: "ChatLayout__CenterPanel",
                    componentId: "ztbuvw-13"
                })(["position:relative;flex:1 1 auto;display:flex;height:100vh;overflow-y:hidden;"]),
                Ly = Object(p.d)(ay).withConfig({
                    displayName: "ChatLayout__StyledChatOverlay",
                    componentId: "ztbuvw-14"
                })(["position:absolute;z-index:", ";"], v.s.ChatOverlay),
                Fy = r.memo(({
                    bot: e
                }) => r.createElement(r.Fragment, null, r.createElement(Ry, {
                    to: v.m.Conversations,
                    "data-testid": "header-logo-link"
                }, r.createElement(Ml, null)), r.createElement(My, {
                    to: v.m.Stats,
                    "data-testid": "header-stats-link"
                }, r.createElement(gy, null))));
            var Ay = n(81),
                Wy = n(118);

            function Hy() {
                return (Hy = Object(i.a)(a.a.mark((function e(t, n) {
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, t();
                            case 3:
                                e.next = 12;
                                break;
                            case 5:
                                if (e.prev = 5, e.t0 = e.catch(0), !(e.t0 instanceof cm.a && 401 === e.t0.statusCode)) {
                                    e.next = 11;
                                    break
                                }
                                n(Object(zr.e)()), e.next = 12;
                                break;
                            case 11:
                                throw e.t0;
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 5]
                    ])
                })))).apply(this, arguments)
            }
            t.default = function() {
                const e = Object(c.e)(e => ({
                        messages: e.chat.messages,
                        status: e.ws.status,
                        mediaPreviews: e.chat.mediaPreviews,
                        isActiveWindow: e.ui.isActiveWindow,
                        connectedToInternet: e.ui.connectedToInternet,
                        mobileProfileOpened: e.ui.mobileProfileOpened,
                        userProfile: e.profile.persist.userProfile,
                        bot: e.profile.persist.bot,
                        introStep: e.ui.introStep,
                        subscription: e.subscriptions.persist.subscription,
                        reboardingDialogShown: e.subscriptions.persist.reboardingDialogShown,
                        getPersonalBotProgress: e.profile.getPersonalBotProgress
                    })),
                    t = e.status,
                    n = e.messages,
                    o = e.mediaPreviews,
                    l = e.isActiveWindow,
                    s = e.connectedToInternet,
                    d = e.mobileProfileOpened,
                    p = e.bot,
                    u = e.userProfile,
                    h = e.introStep,
                    g = e.subscription,
                    f = e.reboardingDialogShown,
                    b = e.getPersonalBotProgress,
                    x = Object(c.d)(),
                    y = r.useCallback(Object(i.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, x(Object(Ka.d)());
                                case 2:
                                    x(Object(Lm.e)());
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [x]);
                r.useEffect(() => {
                    const e = setTimeout(() => x(Object(re.n)(!0)), 6e4);
                    return () => clearTimeout(e)
                }, [x]), r.useEffect(() => {
                    y()
                }, [y]), r.useEffect(() => {
                    const e = gs(x);
                    return e.enable(!document.hidden), () => {
                        x(Object(Ay.b)()), e.disable()
                    }
                }, [x]);
                const w = !f && g && "legacy" === g.source,
                    C = !!u && !u.pronoun && !h && !w,
                    E = w || C;
                r.useEffect(() => {
                    w && x(Object(re.e)({
                        type: v.f.SubscriptionReboarding
                    }))
                }, [w, x]), r.useEffect(() => {
                    C && x(Object(re.e)({
                        type: v.f.ReboardingAddPronoun
                    }))
                }, [C, x]), r.useEffect(() => {
                    l && s && "needReconnect" === t && y()
                }, [t, s, l, y]), r.useEffect(() => {
                    const e = () => {
                            x(Object(re.c)()), x(Object(Ay.b)())
                        },
                        t = () => {
                            x(Object(re.d)()), x(Object(Ka.d)())
                        };
                    return window.addEventListener("offline", e), window.addEventListener("online", t), () => {
                        window.removeEventListener("offline", e), window.removeEventListener("online", t)
                    }
                }, [x]), r.useEffect(() => {
                    const e = (n || []).filter(e => "text" === e.content.type).map(e => Vo(e.content.text)).filter(e => e && !o.hasOwnProperty(e));
                    e.length > 0 && x(Object(m.c)(e))
                }, [n, x, o]), r.useEffect(() => {
                    0
                }, [x]);
                const k = !!p;
                return r.useEffect(() => {
                    if (k && !E) switch (h) {
                        case v.h.Hi:
                            setTimeout(() => {
                                x(Object(re.j)(v.h.YouCanTalkToMe))
                            }, 3e3);
                            break;
                        case v.h.YouCanTalkToMe:
                            setTimeout(() => {
                                x(Object(re.j)(v.h.Conversations))
                            }, 3e3);
                            break;
                        case v.h.Conversations:
                            setTimeout(() => {
                                x(Object(re.j)(v.h.MeetReplika))
                            }, 3e3)
                    }
                }, [k, h, E, x]), r.useEffect(() => {
                    k || b !== Cp.a.initial && b !== Cp.a.success || function(e, t) {
                        Hy.apply(this, arguments)
                    }(() => x(Object(Wi.e)()), x)
                }, [k, b, x]), p ? r.createElement(Cy, {
                    mobileProfileOpened: d,
                    isActiveWindow: l,
                    bot: p
                }) : r.createElement(Wy.a, null)
            }
        }
    }
]);
//# sourceMappingURL=Chat.ad75103e.chunk.js.map