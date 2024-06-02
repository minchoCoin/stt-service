(function() {
    "use strict";
    var e = {
            653: function(e, n, t) {
                var r = t(963),
                    o = t(252);
                const a = {
                        class: "navbar navbar-expand-lg bg-light"
                    },
                    i = {
                        class: "container-fluid"
                    },
                    u = (0, o._)("button", {
                        class: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                    }, [(0, o._)("span", {
                        class: "navbar-toggler-icon"
                    })], -1),
                    l = {
                        class: "collapse navbar-collapse",
                        id: "navbarSupportedContent"
                    },
                    s = {
                        class: "navbar-nav me-auto mb-2 mb-lg-0"
                    },
                    c = {
                        class: "nav-item"
                    },
                    d = {
                        class: "nav-item"
                    };

                function f(e, n, t, r, f, p) {
                    const v = (0, o.up)("router-link"),
                        m = (0, o.up)("router-view");
                    return (0, o.wg)(), (0, o.iD)(o.HY, null, [(0, o._)("nav", a, [(0, o._)("div", i, [(0, o.Wm)(v, {
                        to: "/",
                        class: "navbar-brand"
                    }, {
                        default: (0, o.w5)((() => [(0, o.Uk)("CLOUD-TERM")])),
                        _: 1
                    }), u, (0, o._)("div", l, [(0, o._)("ul", s, [(0, o._)("li", c, [(0, o.Wm)(v, {
                        to: "/",
                        class: "nav-link active",
                        "aria-current": "page"
                    }, {
                        default: (0, o.w5)((() => [(0, o.Uk)("Home")])),
                        _: 1
                    })]), (0, o._)("li", d, [(0, o.Wm)(v, {
                        to: "/post",
                        class: "nav-link"
                    }, {
                        default: (0, o.w5)((() => [(0, o.Uk)("Post")])),
                        _: 1
                    })])])])])]), (0, o.Wm)(m)], 64)
                }
                var p = {
                        data() {
                            return {
                                requestBody: {}
                            }
                        },
                        methods: {}
                    },
                    v = t(744);
                const m = (0, v.Z)(p, [
                    ["render", f]
                ]);
                var g = m,
                    b = t(201);
                const h = {
                    class: "home"
                };

                function y(e, n, t, r, a, i) {
                    const u = (0, o.up)("HelloWorld");
                    return (0, o.wg)(), (0, o.iD)("div", h, [(0, o.Wm)(u, {
                        msg: "Welcome to PSQLI service!"
                    })])
                }
                var w = t(577);
                const _ = e => ((0, o.dD)("data-v-3e427792"), e = e(), (0, o.Cn)(), e),
                    k = {
                        class: "hello"
                    },
                    C = _((() => (0, o._)("p", null, [(0, o.Uk)(" This is the service to convert audio to text"), (0, o._)("br"), (0, o.Uk)(" If you want to submit your own problems, send email to admin"), (0, o._)("b", null, "(admin@example.com)"), (0, o._)("br")], -1)));

                function O(e, n, t, r, a, i) {
                    return (0, o.wg)(), (0, o.iD)("div", k, [(0, o._)("h1", null, (0, w.zw)(t.msg), 1), C])
                }
                var S = {
                    name: "HelloWorld",
                    props: {
                        msg: String
                    }
                };
                const j = (0, v.Z)(S, [
                    ["render", O],
                    ["__scopeId", "data-v-3e427792"]
                ]);
                var E = j,
                    T = {
                        name: "HomeView",
                        components: {
                            HelloWorld: E
                        }
                    };
                const x = (0, v.Z)(T, [
                    ["render", y]
                ]);
                var P = x;
                const N = (0, o._)("h1", null, "404 Not Found.", -1),
                    A = [N];

                function W(e, n, t, r, a, i) {
                    return (0, o.wg)(), (0, o.iD)("div", null, A)
                }
                var D = {};
                const F = (0, v.Z)(D, [
                    ["render", W]
                ]);
                var H = F;
                const L = [{
                        path: "/",
                        name: "home",
                        component: P
                    }, {
                        path: "/post",
                        name: "post",
                        component: () => t.e(443).then(t.bind(t, 807))
                    }, {
                        path: "/notFound",
                        name: "notfound",
                        component: H
                    }, {
                        path: "/:pathMatch(.*)*",
                        redirect: "/notFound"
                    }],
                    U = (0, b.p7)({
                        history: (0, b.PO)("/"),
                        routes: L
                    });
                var q = U,
                    B = (t(877), t(121));
                const Z = (0, r.ri)(g);
                Z.config.globalProperties.$axios = B.Z, Z.use(q).mount("#app")
            }
        },
        n = {};

    function t(r) {
        var o = n[r];
        if (void 0 !== o) return o.exports;
        var a = n[r] = {
            exports: {}
        };
        return e[r](a, a.exports, t), a.exports
    }
    t.m = e,
        function() {
            var e = [];
            t.O = function(n, r, o, a) {
                if (!r) {
                    var i = 1 / 0;
                    for (c = 0; c < e.length; c++) {
                        r = e[c][0], o = e[c][1], a = e[c][2];
                        for (var u = !0, l = 0; l < r.length; l++)(!1 & a || i >= a) && Object.keys(t.O).every((function(e) {
                            return t.O[e](r[l])
                        })) ? r.splice(l--, 1) : (u = !1, a < i && (i = a));
                        if (u) {
                            e.splice(c--, 1);
                            var s = o();
                            void 0 !== s && (n = s)
                        }
                    }
                    return n
                }
                a = a || 0;
                for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
                e[c] = [r, o, a]
            }
        }(),
        function() {
            t.d = function(e, n) {
                for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: n[r]
                })
            }
        }(),
        function() {
            t.f = {}, t.e = function(e) {
                return Promise.all(Object.keys(t.f).reduce((function(n, r) {
                    return t.f[r](e, n), n
                }), []))
            }
        }(),
        function() {
            t.u = function(e) {
                return "js/about.de8a5e62.js"
            }
        }(),
        function() {
            t.miniCssF = function(e) {
                return "css/about.7a0336af.css"
            }
        }(),
        function() {
            t.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            t.o = function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
        }(),
        function() {
            var e = {},
                n = "psqli:";
            t.l = function(r, o, a, i) {
                if (e[r]) e[r].push(o);
                else {
                    var u, l;
                    if (void 0 !== a)
                        for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                            var d = s[c];
                            if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == n + a) {
                                u = d;
                                break
                            }
                        }
                    u || (l = !0, u = document.createElement("script"), u.charset = "utf-8", u.timeout = 120, t.nc && u.setAttribute("nonce", t.nc), u.setAttribute("data-webpack", n + a), u.src = r), e[r] = [o];
                    var f = function(n, t) {
                            u.onerror = u.onload = null, clearTimeout(p);
                            var o = e[r];
                            if (delete e[r], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function(e) {
                                    return e(t)
                                })), n) return n(t)
                        },
                        p = setTimeout(f.bind(null, void 0, {
                            type: "timeout",
                            target: u
                        }), 12e4);
                    u.onerror = f.bind(null, u.onerror), u.onload = f.bind(null, u.onload), l && document.head.appendChild(u)
                }
            }
        }(),
        function() {
            t.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            t.p = "/"
        }(),
        function() {
            if ("undefined" !== typeof document) {
                var e = function(e, n, t, r, o) {
                        var a = document.createElement("link");
                        a.rel = "stylesheet", a.type = "text/css";
                        var i = function(t) {
                            if (a.onerror = a.onload = null, "load" === t.type) r();
                            else {
                                var i = t && ("load" === t.type ? "missing" : t.type),
                                    u = t && t.target && t.target.href || n,
                                    l = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                                l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = u, a.parentNode && a.parentNode.removeChild(a), o(l)
                            }
                        };
                        return a.onerror = a.onload = i, a.href = n, t ? t.parentNode.insertBefore(a, t.nextSibling) : document.head.appendChild(a), a
                    },
                    n = function(e, n) {
                        for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                            var o = t[r],
                                a = o.getAttribute("data-href") || o.getAttribute("href");
                            if ("stylesheet" === o.rel && (a === e || a === n)) return o
                        }
                        var i = document.getElementsByTagName("style");
                        for (r = 0; r < i.length; r++) {
                            o = i[r], a = o.getAttribute("data-href");
                            if (a === e || a === n) return o
                        }
                    },
                    r = function(r) {
                        return new Promise((function(o, a) {
                            var i = t.miniCssF(r),
                                u = t.p + i;
                            if (n(i, u)) return o();
                            e(r, u, null, o, a)
                        }))
                    },
                    o = {
                        143: 0
                    };
                t.f.miniCss = function(e, n) {
                    var t = {
                        443: 1
                    };
                    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = r(e).then((function() {
                        o[e] = 0
                    }), (function(n) {
                        throw delete o[e], n
                    })))
                }
            }
        }(),
        function() {
            var e = {
                143: 0
            };
            t.f.j = function(n, r) {
                var o = t.o(e, n) ? e[n] : void 0;
                if (0 !== o)
                    if (o) r.push(o[2]);
                    else {
                        var a = new Promise((function(t, r) {
                            o = e[n] = [t, r]
                        }));
                        r.push(o[2] = a);
                        var i = t.p + t.u(n),
                            u = new Error,
                            l = function(r) {
                                if (t.o(e, n) && (o = e[n], 0 !== o && (e[n] = void 0), o)) {
                                    var a = r && ("load" === r.type ? "missing" : r.type),
                                        i = r && r.target && r.target.src;
                                    u.message = "Loading chunk " + n + " failed.\n(" + a + ": " + i + ")", u.name = "ChunkLoadError", u.type = a, u.request = i, o[1](u)
                                }
                            };
                        t.l(i, l, "chunk-" + n, n)
                    }
            }, t.O.j = function(n) {
                return 0 === e[n]
            };
            var n = function(n, r) {
                    var o, a, i = r[0],
                        u = r[1],
                        l = r[2],
                        s = 0;
                    if (i.some((function(n) {
                            return 0 !== e[n]
                        }))) {
                        for (o in u) t.o(u, o) && (t.m[o] = u[o]);
                        if (l) var c = l(t)
                    }
                    for (n && n(r); s < i.length; s++) a = i[s], t.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                    return t.O(c)
                },
                r = self["webpackChunkpsqli"] = self["webpackChunkpsqli"] || [];
            r.forEach(n.bind(null, 0)), r.push = n.bind(null, r.push.bind(r))
        }();
    var r = t.O(void 0, [998], (function() {
        return t(653)
    }));
    r = t.O(r)
})();
//# sourceMappingURL=app.2ed68f2d.js.map