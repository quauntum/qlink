(this.webpackJsonpweb = this.webpackJsonpweb || []).push([
    [4], {
        315: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return h
            }));
            var a = n(9),
                o = n(5),
                r = n(2),
                i = n.n(r),
                l = n(26);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                if (null == e) return {};
                var n, a, o = function(e, t) {
                    if (null == e) return {};
                    var n, a, o = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var u = i.a.createElement("defs", null, i.a.createElement("linearGradient", {
                    id: "loading-gradient",
                    x1: "0%",
                    x2: "100%"
                }, i.a.createElement("stop", {
                    offset: "0%",
                    stopColor: "currentColor"
                }), i.a.createElement("stop", {
                    offset: "50%",
                    stopColor: "currentColor"
                }, i.a.createElement("animate", {
                    attributeName: "stop-opacity",
                    dur: "2000ms",
                    values: "1;0.8;0.6;0.6;0.6;0.6;0.6;0.6;0.8;1",
                    repeatCount: "indefinite"
                }), i.a.createElement("animate", {
                    attributeName: "offset",
                    dur: "2000ms",
                    values: "0;0;0;0.1;0.3;0.7;0.9;1;1;1",
                    repeatCount: "indefinite"
                })), i.a.createElement("stop", {
                    offset: "100%",
                    stopColor: "currentColor"
                }))),
                d = i.a.createElement("path", {
                    className: "placeholder-path",
                    fill: "url(#loading-gradient)",
                    d: "M513 531.617c-27.569 3.275-42.893 8.255-56 18.199-5.978 4.535-18.934 17.317-23.966 23.644-13.538 17.021-21.915 32.838-27.826 52.54-4.909 16.361-5.933 21.161-7.685 36-1.518 12.855-.679 38.13 1.892 57 .787 5.775 1.096 10.848.686 11.272-.41.425-2.908-.184-5.55-1.352-5.758-2.548-8.563-1.732-11.133 3.238-3.191 6.172-.12 22.532 7.855 41.842 11.827 28.638 18.599 41.394 24.396 45.955 1.403 1.103 4.691 2.289 7.308 2.636l4.757.631 1.692 6.139c3.581 12.993 12.009 28.063 22.974 41.08l3.899 4.63-1.141 33.984c-1.362 40.583-3.62 59.062-7.903 64.677-3.71 4.864-10.028 8.859-15.255 9.645-2.475.373-9.9 2.434-16.5 4.581-6.6 2.147-15.375 4.406-19.5 5.019-4.125.613-12.45 2.432-18.5 4.041-6.05 1.609-20.444 5.004-31.987 7.544-11.542 2.54-28.867 7.088-38.5 10.108a23628.44 23628.44 0 0 1-26.91 8.418c-5.169 1.612-13.562 4.969-18.652 7.461-8.362 4.096-10.369 5.68-20.822 16.445-10.923 11.248-11.94 12.654-18.232 25.209-9.665 19.286-14.738 38.753-19.88 76.297-3.071 22.425-7.826 39.727-15.486 56.354l-5.827 12.646 3.648 3.828c2.006 2.105 7.882 6.79 13.057 10.41l9.41 6.582-.645 37.59c-.724 42.157-1.508 50.64-12.642 136.719-5.368 41.504-9.225 65.021-18.018 109.871-3.517 17.935-6.014 43.375-6.014 61.262 0 8.688-.848 18.865-2.552 30.614-2.48 17.107-2.54 18.74-2.121 58.362.237 22.419.976 71.137 1.642 108.262 1.159 64.592 1.371 122.669.465 127.315-.234 1.202-.145 4.323.199 6.935l.625 4.75H243.099l-.628-6.25c-.345-3.437-.764-6.711-.931-7.274-.167-.563.1-12.938.594-27.5 1.252-36.926 5.567-76.11 11.451-103.976 16.844-79.774 23.803-117.364 25.919-140 .9-9.625 2.927-25.825 4.506-36 1.579-10.175 3.166-23.675 3.528-30 .361-6.325 1.639-19.375 2.839-29 1.885-15.113 2.105-20.569 1.614-40l-.569-22.5 5.822-33.369c3.202-18.353 7.382-41.438 9.289-51.3 1.907-9.862 3.467-18.899 3.467-20.081 0-3.415 1.547-.93 4.395 7.06 1.562 4.384 2.605 9.435 2.605 12.62 0 16.611 5.156 50.49 15.382 101.07 3.003 14.85 5.769 29.475 6.147 32.5.378 3.025 1.761 11.125 3.074 18 4.686 24.549 2.475 50.717-6.112 72.344-2.437 6.136-5.983 17.456-7.882 25.156-3.471 14.079-5.298 19.53-19.173 57.206-16.317 44.308-21.365 60.236-27.03 85.294-4.168 18.434-5.568 26.605-5.651 33-.088 6.668-.627 9.629-2.501 13.737-3.331 7.302-13.212 67.029-13.236 80.013L260 1920h550v-17.057c0-20.922-.763-26.814-7.568-58.443-2.247-10.442-3.774-20.472-3.96-26-.23-6.843-1.755-14.993-6.36-34-6.027-24.875-11.018-39.904-33.378-100.5-8.535-23.13-11.17-31.321-14.319-44.5-1.445-6.05-4.791-16.625-7.436-23.5-6.859-17.831-9.098-32.355-8.014-52 .44-7.975 1.721-19.225 2.847-25 1.126-5.775 2.346-12.975 2.711-16 .366-3.025 3.314-18.484 6.55-34.353 9.341-45.798 12.617-66.988 14.475-93.647.425-6.099 1.569-12.106 3.196-16.777 1.394-4.003 2.684-7.128 2.867-6.945.498.498 6.705 32.955 13.525 70.722l6.049 33.5-.641 24.5c-.559 21.364-.388 26.292 1.342 38.5 1.091 7.7 2.278 19.175 2.639 25.5.36 6.325 2.16 21.85 3.999 34.5 1.839 12.65 4.055 30.501 4.925 39.669 1.991 20.985 14.559 87.622 27.505 145.831 1.162 5.225 3.69 23.675 5.617 41 3.177 28.555 3.524 34.469 3.717 63.26l.212 31.761 37-.261 37-.26.16-46c.303-87.398 1.093-143.073 2.314-163 1.859-30.356.624-79.1-2.541-100.284-1.727-11.561-2.434-20.554-2.436-31-.003-17.471-2.127-40.918-4.935-54.475-6.902-33.332-13.731-74.597-18.575-112.241-9.552-74.222-11.282-91.489-12.562-125.395-1.013-26.836-.901-48.734.254-49.513 12.644-8.537 24.821-18.259 24.821-19.817 0-.464-2.467-6.234-5.482-12.823-7.111-15.542-12.835-35.746-15.002-52.952-4.45-35.332-10.525-59.554-19.735-78.678-5.727-11.894-6.975-13.677-17.228-24.635-6.079-6.497-13.107-13.079-15.617-14.626-7.705-4.75-20.461-9.804-35.613-14.111-7.96-2.263-15.919-4.719-17.688-5.458-5.602-2.341-20.465-6.22-42.135-10.998-11.55-2.546-24.825-5.699-29.5-7.007-4.675-1.307-12.1-2.882-16.5-3.5-4.4-.618-14.16-3.117-21.688-5.555-7.528-2.438-14.773-4.432-16.1-4.432-2.605 0-8.587-3.999-12.895-8.621-2.125-2.279-3-4.754-4.2-11.879-3.092-18.354-3.611-25.194-4.196-55.243-.329-16.904-.779-31.028-1-31.385-.221-.358 2.368-3.957 5.753-7.998 10.629-12.69 16.07-22.538 20.344-36.823l2.229-7.449 5.791-1.315c3.185-.724 6.397-1.818 7.137-2.432 3.132-2.6 10.446-15.194 15.305-26.355 13.364-30.7 17.118-42.502 17.089-53.723-.02-7.459-1.212-10.179-5.182-11.824-2.202-.912-3.407-.728-6.897 1.052-2.633 1.344-4.582 1.803-5.166 1.219-.585-.585-.12-7.875 1.233-19.331 1.735-14.693 2.065-21.712 1.642-34.893-.631-19.672-2.47-30.744-8.22-49.5-5.422-17.686-9.409-26.317-18.247-39.5-9.416-14.046-17.082-22.983-27.268-31.786-20.677-17.871-38.925-23.183-81.464-23.713-13.2-.165-25.575-.113-27.5.116",
                    fillRule: "evenodd"
                }),
                f = function(e) {
                    var t = e.svgRef,
                        n = e.title,
                        a = s(e, ["svgRef", "title"]);
                    return i.a.createElement("svg", c({
                        width: 1080,
                        height: 1920,
                        viewBox: "0 0 1080 1920",
                        preserveAspectRatio: "xMidYMin slice",
                        ref: t
                    }, a), n ? i.a.createElement("title", null, n) : null, u, d)
                },
                m = i.a.forwardRef((function(e, t) {
                    return i.a.createElement(f, c({
                        svgRef: t
                    }, e))
                }));
            n.p;

            function g() {
                const e = Object(a.a)(["\n  overflow: hidden;\n  height: 100%;\n  ", "\n"]);
                return g = function() {
                    return e
                }, e
            }

            function p() {
                const e = Object(a.a)(["\n  mask-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 1),\n    rgba(0, 0, 0, 1) 85%,\n    rgba(0, 0, 0, 0)\n  );\n\n  /* MS Edge does not support masking; */\n  @supports (-ms-ime-align: auto) {\n    &:before {\n      position: absolute;\n      content: '';\n      display: block;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 15%;\n      background: linear-gradient(\n        to bottom,\n        rgba(255, 255, 255, 0),\n        rgba(255, 255, 255, 1)\n      );\n    }\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            t.a = ({
                className: e,
                style: t,
                src: n,
                fadeOutBottom: a = !1
            }) => n ? r.createElement(b, {
                style: t,
                className: e,
                src: n
            }) : r.createElement(v, {
                fadeOutBottom: a
            }, r.createElement(y, {
                style: t,
                className: e
            }));
            const h = Object(o.c)(p()),
                b = o.d.img.withConfig({
                    displayName: "AvatarPlaceholder__AvatarPlaceholderRoot",
                    componentId: "sc-150krtf-0"
                })(["width:100%;height:100%;object-fit:cover;"]),
                v = Object(l.a)("div", ["fadeOutBottom"])(g(), e => e.fadeOutBottom ? h : ""),
                y = Object(o.d)(m).withConfig({
                    displayName: "AvatarPlaceholder__StyledFullHeightIcon",
                    componentId: "sc-150krtf-1"
                })(["width:100%;height:100%;color:", ";opacity:0.15;"], e => e.theme.fgColor)
        },
        335: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            const a = 1080,
                o = 1920,
                r = {
                    x: .5,
                    y: .5
                };

            function i(e, t, n = 1) {
                const i = e / a * n,
                    l = {
                        x: i / r.x,
                        y: i / r.y
                    },
                    c = {
                        x: (n - 1) * a / 2,
                        y: (n - 1) * o / 2 + (.44 * o - t / e * a / 2)
                    };
                return {
                    baseScale: r,
                    imageScale: l,
                    offset: c,
                    placeholderPosition: {
                        width: r.x * l.x * a,
                        height: r.y * l.y * o,
                        left: -r.x * l.x * c.x,
                        top: -r.y * l.y * c.y
                    }
                }
            }
        },
        347: function(e, t, n) {
            "use strict";
            var a = n(9),
                o = n(0),
                r = n(5),
                i = n(2),
                l = n(315),
                c = n(26),
                s = n(335);

            function u() {
                const e = Object(a.a)(["\n  overflow: hidden;\n  position: relative;\n\n  ", ";\n"]);
                return u = function() {
                    return e
                }, e
            }
            t.a = ({
                className: e,
                style: t,
                width: n,
                height: a,
                scale: r,
                noFadeOut: l,
                "data-testid": c
            }) => {
                const u = Object(s.a)(n, a, r).placeholderPosition;
                return i.createElement(d, {
                    "data-testid": c,
                    noFadeOut: l,
                    className: e,
                    style: {
                        width: n,
                        height: a
                    }
                }, i.createElement(f, {
                    style: Object(o.a)(Object(o.a)({}, t), u)
                }))
            };
            const d = Object(c.a)("div", ["noFadeOut"])(u(), e => e.noFadeOut ? "" : l.b),
                f = Object(r.d)(l.a).withConfig({
                    displayName: "Avatar2DPlaceholder__StyledAvatarPlaceholder",
                    componentId: "sc-1u7trqn-0"
                })(["position:absolute;"])
        },
        349: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            }));
            var a = n(30),
                o = n(2),
                r = n(336);
            const i = e => {
                const t = o.useState(null),
                    n = Object(a.a)(t, 2),
                    r = n[0],
                    i = n[1];
                return o.useEffect(() => {
                    if (null === e || void 0 === e ? void 0 : e.clip) {
                        let t = {
                            cancelled: !1
                        };
                        const n = e.clip.position || {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            },
                            a = new window.Image;
                        a.crossOrigin = "anonymous", a.setAttribute("crossorigin", "anonymous"), a.src = e.clip.image_url;
                        let o = !1;
                        a.onload = () => {
                            o = !0, o && l && !t.cancelled && i({
                                image: a,
                                mask: r,
                                offset: n
                            })
                        };
                        const r = new window.Image;
                        r.src = e.clip.mask_url;
                        let l = !1;
                        return r.onload = () => {
                            l = !0, o && l && !t.cancelled && i({
                                image: a,
                                mask: r,
                                offset: n
                            })
                        }, () => {
                            t.cancelled = !0, i(null)
                        }
                    }
                }, [e]), r
            };
            t.a = ({
                clip: e,
                offset: t,
                scale: n,
                opacity: a,
                eggImage: i
            }) => {
                const l = {
                    x: t.x - e.offset.x,
                    y: t.y - e.offset.y
                };
                return o.createElement(r.Group, {
                    opacity: a
                }, o.createElement(r.Image, {
                    image: e.image,
                    offset: l,
                    scale: n
                }), o.createElement(r.Image, {
                    image: e.mask,
                    offset: l,
                    scale: n,
                    globalCompositeOperation: "destination-in"
                }), i && o.createElement(r.Image, {
                    image: i,
                    scale: n,
                    offset: t,
                    globalCompositeOperation: "destination-in"
                }))
            }
        },
        609: function(e, t, n) {
            var a = n(2),
                o = {
                    image: void 0,
                    status: "loading"
                };
            e.exports = function(e, t) {
                var n = a.useState(o),
                    r = n[0].image,
                    i = n[0].status,
                    l = n[1];
                return a.useEffect((function() {
                    if (!e) return;
                    const n = document.createElement("img");

                    function a() {
                        l({
                            image: n,
                            status: "loaded"
                        })
                    }

                    function r() {
                        l({
                            image: void 0,
                            status: "failed"
                        })
                    }
                    return n.addEventListener("load", a), n.addEventListener("error", r), t && (n.crossOrigin = t), n.src = e,
                        function() {
                            n.removeEventListener("load", a), n.removeEventListener("error", r), l(o)
                        }
                }), [e, t]), [r, i]
            }
        },
        610: function(e, t, n) {
            e.exports = n.p + "static/media/Egg.55ccfdae.svg"
        },
        624: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(9),
                o = n(30),
                r = n(2),
                i = n(336),
                l = n(425),
                c = n.n(l),
                s = n(609),
                u = n.n(s),
                d = n(26),
                f = n(315),
                m = n(347),
                g = n(349),
                p = n(610),
                h = n.n(p),
                b = n(335);

            function v() {
                const e = Object(a.a)(["\n  position: relative;\n  overflow: hidden;\n  transition: opacity 0.15s ease-out;\n\n  ", ";\n\n  & div[role='presentation'] {\n    transform-origin: 0% 0%;\n    transform: scale(0.5);\n  }\n"]);
                return v = function() {
                    return e
                }, e
            }
            t.default = ({
                className: e,
                style: t,
                textures: n,
                height: a,
                width: l,
                onLoad: s,
                noFadeOut: d,
                egged: f,
                noPreview: p,
                scale: v = 1,
                "data-testid": O,
                avatarFallback: E
            }) => {
                const w = r.useRef(null),
                    j = r.useState(null),
                    x = Object(o.a)(j, 2),
                    k = x[0],
                    S = x[1],
                    C = Object(g.b)(n.skin),
                    I = Object(g.b)(n.eye),
                    F = Object(g.b)(n.hair);
                r.useEffect(() => {
                    C && I && F && S({
                        skin: C,
                        eye: I,
                        hair: F
                    })
                }, [C, I, F]);
                const N = u()(h.a),
                    L = Object(o.a)(N, 1)[0],
                    P = C && I && F && L;
                r.useEffect(() => {
                    if (s && w.current && P) {
                        const e = w.current.getStage().toDataURL();
                        s(e)
                    }
                }, [s, P]);
                const R = Object(b.a)(l, a, v),
                    B = R.imageScale,
                    _ = R.offset,
                    A = R.baseScale;
                return !P && p ? null !== E && void 0 !== E ? E : null : k ? r.createElement(y, {
                    "data-testid": O,
                    noFadeOut: d,
                    className: e,
                    width: l / A.x,
                    height: a / A.y,
                    style: {
                        width: l,
                        height: a,
                        opacity: P ? 1 : .5,
                        filter: P ? "none" : "blur(2px)"
                    },
                    listening: !1,
                    ref: w
                }, f && r.createElement(i.Layer, null, r.createElement(i.Rect, {
                    fill: "rgba(255,255,255,0.5)",
                    width: l / A.x,
                    height: a / A.y
                }), r.createElement(i.Image, {
                    image: L,
                    scale: B,
                    offset: _,
                    globalCompositeOperation: "destination-in"
                })), r.createElement(i.Layer, {
                    filters: [c.a.Filters.Blur],
                    imageSmoothingEnabled: !0
                }, r.createElement(g.a, {
                    clip: k.skin,
                    offset: _,
                    scale: B,
                    eggImage: f ? L : void 0
                })), r.createElement(i.Layer, {
                    filters: [c.a.Filters.Blur],
                    imageSmoothingEnabled: !0
                }, r.createElement(g.a, {
                    clip: k.eye,
                    offset: _,
                    scale: B,
                    eggImage: f ? L : void 0
                })), r.createElement(i.Layer, {
                    filters: [c.a.Filters.Blur],
                    imageSmoothingEnabled: !0
                }, r.createElement(g.a, {
                    clip: k.hair,
                    offset: _,
                    scale: B,
                    eggImage: f ? L : void 0
                }))) : p ? null !== E && void 0 !== E ? E : null : r.createElement(m.a, {
                    "data-testid": O && "".concat(O, " ").concat(O, "-placeholder"),
                    noFadeOut: d,
                    className: e,
                    style: t,
                    width: l,
                    height: a,
                    scale: v
                })
            };
            const y = Object(d.a)(i.Stage, ["noFadeOut"])(v(), e => e.noFadeOut ? "" : f.b)
        }
    }
]);
//# sourceMappingURL=Avatar2D.f64280f0.chunk.js.map