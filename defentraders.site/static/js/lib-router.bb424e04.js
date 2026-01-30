/*! For license information please see lib-router.bb424e04.js.LICENSE.txt */
"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["535"], {
        45588(e, t, r) {
            var n, a, o, i;

            function l() {
                return (l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            r.d(t, {
                AO: () => p,
                B6: () => x,
                G3: () => $,
                Gh: () => L,
                HS: () => T,
                Oi: () => c,
                Rr: () => v,
                VV: () => U,
                aE: () => Y,
                pX: () => A,
                pb: () => R,
                rc: () => n,
                tH: () => j,
                ue: () => g,
                yD: () => k,
                zR: () => u
            }), (o = n || (n = {})).Pop = "POP", o.Push = "PUSH", o.Replace = "REPLACE";
            let s = "popstate";

            function u(e) {
                return void 0 === e && (e = {}),
                    function(e, t, r, a) {
                        void 0 === a && (a = {});
                        let {
                            window: o = document.defaultView,
                            v5Compat: i = !1
                        } = a, u = o.history, d = n.Pop, v = null, m = y();

                        function y() {
                            return (u.state || {
                                idx: null
                            }).idx
                        }

                        function g() {
                            d = n.Pop;
                            let e = y(),
                                t = null == e ? null : e - m;
                            m = e, v && v({
                                action: d,
                                location: w.location,
                                delta: t
                            })
                        }

                        function b(e) {
                            let t = "null" !== o.location.origin ? o.location.origin : o.location.href,
                                r = "string" == typeof e ? e : p(e);
                            return c(t, "No window.location.(origin|href) available to create URL for href: " + (r = r.replace(/ $/, "%20"))), new URL(r, t)
                        }
                        null == m && (m = 0, u.replaceState(l({}, u.state, {
                            idx: m
                        }), ""));
                        let w = {
                            get action() {
                                return d
                            },
                            get location() {
                                return e(o, u)
                            },
                            listen(e) {
                                if (v) throw Error("A history only accepts one active listener");
                                return o.addEventListener(s, g), v = e, () => {
                                    o.removeEventListener(s, g), v = null
                                }
                            },
                            createHref: e => t(o, e),
                            createURL: b,
                            encodeLocation(e) {
                                let t = b(e);
                                return {
                                    pathname: t.pathname,
                                    search: t.search,
                                    hash: t.hash
                                }
                            },
                            push: function(e, t) {
                                d = n.Push;
                                let r = f(w.location, e, t);
                                let a = h(r, m = y() + 1),
                                    l = w.createHref(r);
                                try {
                                    u.pushState(a, "", l)
                                } catch (e) {
                                    if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
                                    o.location.assign(l)
                                }
                                i && v && v({
                                    action: d,
                                    location: w.location,
                                    delta: 1
                                })
                            },
                            replace: function(e, t) {
                                d = n.Replace;
                                let r = f(w.location, e, t);
                                let a = h(r, m = y()),
                                    o = w.createHref(r);
                                u.replaceState(a, "", o), i && v && v({
                                    action: d,
                                    location: w.location,
                                    delta: 0
                                })
                            },
                            go: e => u.go(e)
                        };
                        return w
                    }(function(e, t) {
                        let {
                            pathname: r,
                            search: n,
                            hash: a
                        } = e.location;
                        return f("", {
                            pathname: r,
                            search: n,
                            hash: a
                        }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                    }, function(e, t) {
                        return "string" == typeof t ? t : p(t)
                    }, null, e)
            }

            function c(e, t) {
                if (!1 === e || null == e) throw Error(t)
            }

            function d(e, t) {
                if (!e) {
                    "undefined" != typeof console && console.warn(t);
                    try {
                        throw Error(t)
                    } catch (e) {}
                }
            }

            function h(e, t) {
                return {
                    usr: e.state,
                    key: e.key,
                    idx: t
                }
            }

            function f(e, t, r, n) {
                return void 0 === r && (r = null), l({
                    pathname: "string" == typeof e ? e : e.pathname,
                    search: "",
                    hash: ""
                }, "string" == typeof t ? v(t) : t, {
                    state: r,
                    key: t && t.key || n || Math.random().toString(36).substr(2, 8)
                })
            }

            function p(e) {
                let {
                    pathname: t = "/",
                    search: r = "",
                    hash: n = ""
                } = e;
                return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n), t
            }

            function v(e) {
                let t = {};
                if (e) {
                    let r = e.indexOf("#");
                    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
                    let n = e.indexOf("?");
                    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
                }
                return t
            }(i = a || (a = {})).data = "data", i.deferred = "deferred", i.redirect = "redirect", i.error = "error";
            let m = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

            function y(e, t, r, n) {
                return void 0 === r && (r = []), void 0 === n && (n = {}), e.map((e, a) => {
                    let o = [...r, String(a)],
                        i = "string" == typeof e.id ? e.id : o.join("-");
                    if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!n[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), !0 === e.index) {
                        let r = l({}, e, t(e), {
                            id: i
                        });
                        return n[i] = r, r
                    } {
                        let r = l({}, e, t(e), {
                            id: i,
                            children: void 0
                        });
                        return n[i] = r, e.children && (r.children = y(e.children, t, o, n)), r
                    }
                })
            }

            function g(e, t, r) {
                return void 0 === r && (r = "/"), b(e, t, r, !1)
            }

            function b(e, t, r, n) {
                let a = R(("string" == typeof t ? v(t) : t).pathname || "/", r);
                if (null == a) return null;
                let o = function e(t, r, n, a) {
                    void 0 === r && (r = []), void 0 === n && (n = []), void 0 === a && (a = "");
                    let o = (t, o, i) => {
                        var l, s;
                        let u, d, h = {
                            relativePath: void 0 === i ? t.path || "" : i,
                            caseSensitive: !0 === t.caseSensitive,
                            childrenIndex: o,
                            route: t
                        };
                        h.relativePath.startsWith("/") && (c(h.relativePath.startsWith(a), 'Absolute route path "' + h.relativePath + '" nested under path "' + a + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), h.relativePath = h.relativePath.slice(a.length));
                        let f = T([a, h.relativePath]),
                            p = n.concat(h);
                        t.children && t.children.length > 0 && (c(!0 !== t.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + f + '".'), e(t.children, r, p, f)), (null != t.path || t.index) && r.push({
                            path: f,
                            score: (l = f, s = t.index, d = (u = l.split("/")).length, u.some(E) && (d += -2), s && (d += 2), u.filter(e => !E(e)).reduce((e, t) => e + (w.test(t) ? 3 : "" === t ? 1 : 10), d)),
                            routesMeta: p
                        })
                    };
                    return t.forEach((e, t) => {
                        var r;
                        if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                            for (let r of function e(t) {
                                    let r = t.split("/");
                                    if (0 === r.length) return [];
                                    let [n, ...a] = r, o = n.endsWith("?"), i = n.replace(/\?$/, "");
                                    if (0 === a.length) return o ? [i, ""] : [i];
                                    let l = e(a.join("/")),
                                        s = [];
                                    return s.push(...l.map(e => "" === e ? i : [i, e].join("/"))), o && s.push(...l), s.map(e => t.startsWith("/") && "" === e ? "/" : e)
                                }(e.path)) o(e, t, r);
                        else o(e, t)
                    }), r
                }(e);
                o.sort((e, t) => {
                    var r, n;
                    return e.score !== t.score ? t.score - e.score : (r = e.routesMeta.map(e => e.childrenIndex), n = t.routesMeta.map(e => e.childrenIndex), r.length === n.length && r.slice(0, -1).every((e, t) => e === n[t]) ? r[r.length - 1] - n[n.length - 1] : 0)
                });
                let i = null;
                for (let e = 0; null == i && e < o.length; ++e) {
                    let t = function(e) {
                        try {
                            return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
                        } catch (t) {
                            return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
                        }
                    }(a);
                    i = function(e, t, r) {
                        void 0 === r && (r = !1);
                        let {
                            routesMeta: n
                        } = e, a = {}, o = "/", i = [];
                        for (let e = 0; e < n.length; ++e) {
                            let l = n[e],
                                s = e === n.length - 1,
                                u = "/" === o ? t : t.slice(o.length) || "/",
                                c = x({
                                    path: l.relativePath,
                                    caseSensitive: l.caseSensitive,
                                    end: s
                                }, u),
                                d = l.route;
                            if (!c && s && r && !n[n.length - 1].route.index && (c = x({
                                    path: l.relativePath,
                                    caseSensitive: l.caseSensitive,
                                    end: !1
                                }, u)), !c) return null;
                            Object.assign(a, c.params), i.push({
                                params: a,
                                pathname: T([o, c.pathname]),
                                pathnameBase: _(T([o, c.pathnameBase])),
                                route: d
                            }), "/" !== c.pathnameBase && (o = T([o, c.pathnameBase]))
                        }
                        return i
                    }(o[e], t, n)
                }
                return i
            }
            let w = /^:[\w-]+$/,
                E = e => "*" === e;

            function x(e, t) {
                var r, n, a;
                let o, i;
                "string" == typeof e && (e = {
                    path: e,
                    caseSensitive: !1,
                    end: !0
                });
                let [l, s] = (r = e.path, n = e.caseSensitive, a = e.end, void 0 === n && (n = !1), void 0 === a && (a = !0), d("*" === r || !r.endsWith("*") || r.endsWith("/*"), 'Route path "' + r + '" will be treated as if it were "' + r.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + r.replace(/\*$/, "/*") + '".'), o = [], i = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, r) => (o.push({
                    paramName: t,
                    isOptional: null != r
                }), r ? "/?([^\\/]+)?" : "/([^\\/]+)")), r.endsWith("*") ? (o.push({
                    paramName: "*"
                }), i += "*" === r || "/*" === r ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? i += "\\/*$" : "" !== r && "/" !== r && (i += "(?:(?=\\/|$))"), [new RegExp(i, n ? void 0 : "i"), o]), u = t.match(l);
                if (!u) return null;
                let c = u[0],
                    h = c.replace(/(.)\/+$/, "$1"),
                    f = u.slice(1);
                return {
                    params: s.reduce((e, t, r) => {
                        let {
                            paramName: n,
                            isOptional: a
                        } = t;
                        if ("*" === n) {
                            let e = f[r] || "";
                            h = c.slice(0, c.length - e.length).replace(/(.)\/+$/, "$1")
                        }
                        let o = f[r];
                        return a && !o ? e[n] = void 0 : e[n] = (o || "").replace(/%2F/g, "/"), e
                    }, {}),
                    pathname: c,
                    pathnameBase: h,
                    pattern: e
                }
            }

            function R(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                let r = t.endsWith("/") ? t.length - 1 : t.length,
                    n = e.charAt(r);
                return n && "/" !== n ? null : e.slice(r) || "/"
            }
            let S = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

            function D(e, t) {
                let r = t.replace(/\/+$/, "").split("/");
                return e.split("/").forEach(e => {
                    ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
                }), r.length > 1 ? r.join("/") : "/"
            }

            function C(e, t, r, n) {
                return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [") + JSON.stringify(n) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
            }

            function P(e) {
                return e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0)
            }

            function k(e, t) {
                let r = P(e);
                return t ? r.map((e, t) => t === r.length - 1 ? e.pathname : e.pathnameBase) : r.map(e => e.pathnameBase)
            }

            function L(e, t, r, n) {
                let a, o;
                void 0 === n && (n = !1), "string" == typeof e ? a = v(e) : (c(!(a = l({}, e)).pathname || !a.pathname.includes("?"), C("?", "pathname", "search", a)), c(!a.pathname || !a.pathname.includes("#"), C("#", "pathname", "hash", a)), c(!a.search || !a.search.includes("#"), C("#", "search", "hash", a)));
                let i = "" === e || "" === a.pathname,
                    s = i ? "/" : a.pathname;
                if (null == s) o = r;
                else {
                    let e = t.length - 1;
                    if (!n && s.startsWith("..")) {
                        let t = s.split("/");
                        for (;
                            ".." === t[0];) t.shift(), e -= 1;
                        a.pathname = t.join("/")
                    }
                    o = e >= 0 ? t[e] : "/"
                }
                let u = function(e, t) {
                        let r;
                        void 0 === t && (t = "/");
                        let {
                            pathname: n,
                            search: a = "",
                            hash: o = ""
                        } = "string" == typeof e ? v(e) : e;
                        if (n) {
                            let e;
                            (e = n, S.test(e)) ? r = n: (n.includes("//") && d(!1, "Pathnames cannot have embedded double slashes - normalizing " + n + " -> " + (n = n.replace(/\/\/+/g, "/"))), r = n.startsWith("/") ? D(n.substring(1), "/") : D(n, t))
                        } else r = t;
                        return {
                            pathname: r,
                            search: M(a),
                            hash: O(o)
                        }
                    }(a, o),
                    h = s && "/" !== s && s.endsWith("/"),
                    f = (i || "." === s) && r.endsWith("/");
                return !u.pathname.endsWith("/") && (h || f) && (u.pathname += "/"), u
            }
            let T = e => e.join("/").replace(/\/\/+/g, "/"),
                _ = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                M = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
                O = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
            class j extends Error {}
            class U {
                constructor(e, t, r, n) {
                    void 0 === n && (n = !1), this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
                }
            }

            function A(e) {
                return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
            }
            let B = ["post", "put", "patch", "delete"],
                z = new Set(B),
                F = new Set(["get", ...B]),
                H = new Set([301, 302, 303, 307, 308]),
                I = new Set([307, 308]),
                N = {
                    state: "idle",
                    location: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                },
                W = {
                    state: "idle",
                    data: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                },
                $ = {
                    state: "unblocked",
                    proceed: void 0,
                    reset: void 0,
                    location: void 0
                },
                V = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                q = e => ({
                    hasErrorBoundary: !!e.hasErrorBoundary
                }),
                J = "remix-router-transitions";

            function Y(e) {
                let t, r, o, i, s, u, h = e.window ? e.window : "undefined" != typeof window ? window : void 0,
                    p = void 0 !== h && void 0 !== h.document && void 0 !== h.document.createElement,
                    v = !p;
                if (c(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) t = e.mapRouteProperties;
                else if (e.detectErrorBoundary) {
                    let r = e.detectErrorBoundary;
                    t = e => ({
                        hasErrorBoundary: r(e)
                    })
                } else t = q;
                let m = {},
                    w = y(e.routes, t, void 0, m),
                    E = e.basename || "/",
                    x = e.dataStrategy || ea,
                    S = e.patchRoutesOnNavigation,
                    D = l({
                        v7_fetcherPersist: !1,
                        v7_normalizeFormMethod: !1,
                        v7_partialHydration: !1,
                        v7_prependBasename: !1,
                        v7_relativeSplatPath: !1,
                        v7_skipActionErrorRevalidation: !1
                    }, e.future),
                    C = null,
                    P = new Set,
                    k = null,
                    L = null,
                    T = null,
                    _ = null != e.hydrationData,
                    M = g(w, e.history.location, E),
                    O = !1,
                    j = null;
                if (null == M && !S) {
                    let t = ey(404, {
                            pathname: e.history.location.pathname
                        }),
                        {
                            matches: r,
                            route: n
                        } = em(w);
                    M = r, j = {
                        [n.id]: t
                    }
                }
                if (M && !e.hydrationData && ta(M, w, e.history.location.pathname).active && (M = null), M)
                    if (M.some(e => e.route.lazy)) o = !1;
                    else if (M.some(e => e.route.loader))
                    if (D.v7_partialHydration) {
                        let t = e.hydrationData ? e.hydrationData.loaderData : null,
                            r = e.hydrationData ? e.hydrationData.errors : null;
                        if (r) {
                            let e = M.findIndex(e => void 0 !== r[e.route.id]);
                            o = M.slice(0, e + 1).every(e => !Q(e.route, t, r))
                        } else o = M.every(e => !Q(e.route, t, r))
                    } else o = null != e.hydrationData;
                else o = !0;
                else if (o = !1, M = [], D.v7_partialHydration) {
                    let t = ta(null, w, e.history.location.pathname);
                    t.active && t.matches && (O = !0, M = t.matches)
                }
                let U = {
                        historyAction: e.history.action,
                        location: e.history.location,
                        matches: M,
                        initialized: o,
                        navigation: N,
                        restoreScrollPosition: null == e.hydrationData && null,
                        preventScrollReset: !1,
                        revalidation: "idle",
                        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
                        actionData: e.hydrationData && e.hydrationData.actionData || null,
                        errors: e.hydrationData && e.hydrationData.errors || j,
                        fetchers: new Map,
                        blockers: new Map
                    },
                    B = n.Pop,
                    z = !1,
                    F = !1,
                    Y = new Map,
                    X = null,
                    ee = !1,
                    et = !1,
                    en = [],
                    ei = new Set,
                    ec = new Map,
                    ed = 0,
                    eb = -1,
                    eR = new Map,
                    eL = new Set,
                    eU = new Map,
                    eA = new Map,
                    eB = new Set,
                    ez = new Map,
                    eF = new Map;

                function eH(e, t) {
                    void 0 === t && (t = {}), U = l({}, U, e);
                    let r = [],
                        n = [];
                    D.v7_fetcherPersist && U.fetchers.forEach((e, t) => {
                        "idle" === e.state && (eB.has(t) ? n.push(t) : r.push(t))
                    }), eB.forEach(e => {
                        U.fetchers.has(e) || ec.has(e) || n.push(e)
                    }), [...P].forEach(e => e(U, {
                        deletedFetchers: n,
                        viewTransitionOpts: t.viewTransitionOpts,
                        flushSync: !0 === t.flushSync
                    })), D.v7_fetcherPersist ? (r.forEach(e => U.fetchers.delete(e)), n.forEach(e => e7(e))) : n.forEach(e => eB.delete(e))
                }

                function eI(t, a, o) {
                    var i, s;
                    let u, c, {
                            flushSync: d
                        } = void 0 === o ? {} : o,
                        h = null != U.actionData && null != U.navigation.formMethod && eD(U.navigation.formMethod) && "loading" === U.navigation.state && (null == (i = t.state) ? void 0 : i._isRedirect) !== !0;
                    u = a.actionData ? Object.keys(a.actionData).length > 0 ? a.actionData : null : h ? U.actionData : null;
                    let f = a.loaderData ? ef(U.loaderData, a.loaderData, a.matches || [], a.errors) : U.loaderData,
                        p = U.blockers;
                    p.size > 0 && (p = new Map(p)).forEach((e, t) => p.set(t, $));
                    let v = !0 === z || null != U.navigation.formMethod && eD(U.navigation.formMethod) && (null == (s = t.state) ? void 0 : s._isRedirect) !== !0;
                    if (r && (w = r, r = void 0), ee || B === n.Pop || (B === n.Push ? e.history.push(t, t.state) : B === n.Replace && e.history.replace(t, t.state)), B === n.Pop) {
                        let e = Y.get(U.location.pathname);
                        e && e.has(t.pathname) ? c = {
                            currentLocation: U.location,
                            nextLocation: t
                        } : Y.has(t.pathname) && (c = {
                            currentLocation: t,
                            nextLocation: U.location
                        })
                    } else if (F) {
                        let e = Y.get(U.location.pathname);
                        e ? e.add(t.pathname) : (e = new Set([t.pathname]), Y.set(U.location.pathname, e)), c = {
                            currentLocation: U.location,
                            nextLocation: t
                        }
                    }
                    eH(l({}, a, {
                        actionData: u,
                        loaderData: f,
                        historyAction: B,
                        location: t,
                        initialized: !0,
                        navigation: N,
                        revalidation: "idle",
                        restoreScrollPosition: tn(t, a.matches || U.matches),
                        preventScrollReset: v,
                        blockers: p
                    }), {
                        viewTransitionOpts: c,
                        flushSync: !0 === d
                    }), B = n.Pop, z = !1, F = !1, ee = !1, et = !1, en = []
                }
                async function eN(t, r) {
                    if ("number" == typeof t) return void e.history.go(t);
                    let a = G(U.location, U.matches, E, D.v7_prependBasename, t, D.v7_relativeSplatPath, null == r ? void 0 : r.fromRouteId, null == r ? void 0 : r.relative),
                        {
                            path: o,
                            submission: i,
                            error: s
                        } = K(D.v7_normalizeFormMethod, !1, a, r),
                        u = U.location,
                        c = f(U.location, o, r && r.state);
                    c = l({}, c, e.history.encodeLocation(c));
                    let d = r && null != r.replace ? r.replace : void 0,
                        h = n.Push;
                    !0 === d ? h = n.Replace : !1 === d || null != i && eD(i.formMethod) && i.formAction === U.location.pathname + U.location.search && (h = n.Replace);
                    let p = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0,
                        v = !0 === (r && r.flushSync),
                        m = e9({
                            currentLocation: u,
                            nextLocation: c,
                            historyAction: h
                        });
                    return m ? void e8(m, {
                        state: "blocked",
                        location: c,
                        proceed() {
                            e8(m, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: c
                            }), eN(t, r)
                        },
                        reset() {
                            let e = new Map(U.blockers);
                            e.set(m, $), eH({
                                blockers: e
                            })
                        }
                    }) : await eW(h, c, {
                        submission: i,
                        pendingError: s,
                        preventScrollReset: p,
                        replace: r && r.replace,
                        enableViewTransition: r && r.viewTransition,
                        flushSync: v
                    })
                }
                async function eW(t, n, o) {
                    var i, u, c, d;
                    let h;
                    s && s.abort(), s = null, B = t, ee = !0 === (o && o.startUninterruptedRevalidation), i = U.location, u = U.matches, k && T && (k[tr(i, u)] = T()), z = !0 === (o && o.preventScrollReset), F = !0 === (o && o.enableViewTransition);
                    let f = r || w,
                        p = o && o.overrideNavigation,
                        v = null != o && o.initialHydration && U.matches && U.matches.length > 0 && !O ? U.matches : g(f, n, E),
                        m = !0 === (o && o.flushSync);
                    if (v && U.initialized && !et && (c = U.location, d = n, c.pathname === d.pathname && c.search === d.search && ("" === c.hash ? "" !== d.hash : c.hash === d.hash || "" !== d.hash || !1)) && !(o && o.submission && eD(o.submission.formMethod))) return void eI(n, {
                        matches: v
                    }, {
                        flushSync: m
                    });
                    let y = ta(v, f, n.pathname);
                    if (y.active && y.matches && (v = y.matches), !v) {
                        let {
                            error: e,
                            notFoundMatches: t,
                            route: r
                        } = te(n.pathname);
                        eI(n, {
                            matches: t,
                            loaderData: {},
                            errors: {
                                [r.id]: e
                            }
                        }, {
                            flushSync: m
                        });
                        return
                    }
                    s = new AbortController;
                    let b = eu(e.history, n, s.signal, o && o.submission);
                    if (o && o.pendingError) h = [ev(v).route.id, {
                        type: a.error,
                        error: o.pendingError
                    }];
                    else if (o && o.submission && eD(o.submission.formMethod)) {
                        let t = await e$(b, n, o.submission, v, y.active, {
                            replace: o.replace,
                            flushSync: m
                        });
                        if (t.shortCircuited) return;
                        if (t.pendingActionResult) {
                            let [e, r] = t.pendingActionResult;
                            if (eE(r) && A(r.error) && 404 === r.error.status) {
                                s = null, eI(n, {
                                    matches: t.matches,
                                    loaderData: {},
                                    errors: {
                                        [e]: r.error
                                    }
                                });
                                return
                            }
                        }
                        v = t.matches || v, h = t.pendingActionResult, p = eM(n, o.submission), m = !1, y.active = !1, b = eu(e.history, b.url, b.signal)
                    }
                    let {
                        shortCircuited: x,
                        matches: R,
                        loaderData: S,
                        errors: D
                    } = await eV(b, n, v, y.active, p, o && o.submission, o && o.fetcherSubmission, o && o.replace, o && !0 === o.initialHydration, m, h);
                    x || (s = null, eI(n, l({
                        matches: R || v
                    }, ep(h), {
                        loaderData: S,
                        errors: D
                    })))
                }
                async function e$(e, t, r, o, i, l) {
                    var s;
                    let u;
                    if (void 0 === l && (l = {}), eZ(), eH({
                            navigation: {
                                state: "submitting",
                                location: t,
                                formMethod: (s = r).formMethod,
                                formAction: s.formAction,
                                formEncType: s.formEncType,
                                formData: s.formData,
                                json: s.json,
                                text: s.text
                            }
                        }, {
                            flushSync: !0 === l.flushSync
                        }), i) {
                        let r = await to(o, t.pathname, e.signal);
                        if ("aborted" === r.type) return {
                            shortCircuited: !0
                        };
                        if ("error" === r.type) {
                            let e = ev(r.partialMatches).route.id;
                            return {
                                matches: r.partialMatches,
                                pendingActionResult: [e, {
                                    type: a.error,
                                    error: r.error
                                }]
                            }
                        }
                        if (r.matches) o = r.matches;
                        else {
                            let {
                                notFoundMatches: e,
                                error: r,
                                route: n
                            } = te(t.pathname);
                            return {
                                matches: e,
                                pendingActionResult: [n.id, {
                                    type: a.error,
                                    error: r
                                }]
                            }
                        }
                    }
                    let c = eT(o, t);
                    if (c.route.action || c.route.lazy) {
                        if (u = (await eK("action", U, e, [c], o, null))[c.route.id], e.signal.aborted) return {
                            shortCircuited: !0
                        }
                    } else u = {
                        type: a.error,
                        error: ey(405, {
                            method: e.method,
                            pathname: t.pathname,
                            routeId: c.route.id
                        })
                    };
                    if (ex(u)) {
                        let t;
                        return t = l && null != l.replace ? l.replace : es(u.response.headers.get("Location"), new URL(e.url), E) === U.location.pathname + U.location.search, await eG(e, u, !0, {
                            submission: r,
                            replace: t
                        }), {
                            shortCircuited: !0
                        }
                    }
                    if (ew(u)) throw ey(400, {
                        type: "defer-action"
                    });
                    if (eE(u)) {
                        let e = ev(o, c.route.id);
                        return !0 !== (l && l.replace) && (B = n.Push), {
                            matches: o,
                            pendingActionResult: [e.route.id, u]
                        }
                    }
                    return {
                        matches: o,
                        pendingActionResult: [c.route.id, u]
                    }
                }
                async function eV(t, n, a, o, i, u, c, d, h, f, p) {
                    let v = i || eM(n, u),
                        m = u || c || e_(v),
                        y = !ee && (!D.v7_partialHydration || !h);
                    if (o) {
                        if (y) {
                            let e = eq(p);
                            eH(l({
                                navigation: v
                            }, void 0 !== e ? {
                                actionData: e
                            } : {}), {
                                flushSync: f
                            })
                        }
                        let e = await to(a, n.pathname, t.signal);
                        if ("aborted" === e.type) return {
                            shortCircuited: !0
                        };
                        if ("error" === e.type) {
                            let t = ev(e.partialMatches).route.id;
                            return {
                                matches: e.partialMatches,
                                loaderData: {},
                                errors: {
                                    [t]: e.error
                                }
                            }
                        }
                        if (e.matches) a = e.matches;
                        else {
                            let {
                                error: e,
                                notFoundMatches: t,
                                route: r
                            } = te(n.pathname);
                            return {
                                matches: t,
                                loaderData: {},
                                errors: {
                                    [r.id]: e
                                }
                            }
                        }
                    }
                    let g = r || w,
                        [b, x] = Z(e.history, U, a, m, n, D.v7_partialHydration && !0 === h, D.v7_skipActionErrorRevalidation, et, en, ei, eB, eU, eL, g, E, p);
                    if (tt(e => !(a && a.some(t => t.route.id === e)) || b && b.some(t => t.route.id === e)), eb = ++ed, 0 === b.length && 0 === x.length) {
                        let e = e2();
                        return eI(n, l({
                            matches: a,
                            loaderData: {},
                            errors: p && eE(p[1]) ? {
                                [p[0]]: p[1].error
                            } : null
                        }, ep(p), e ? {
                            fetchers: new Map(U.fetchers)
                        } : {}), {
                            flushSync: f
                        }), {
                            shortCircuited: !0
                        }
                    }
                    if (y) {
                        let e = {};
                        if (!o) {
                            e.navigation = v;
                            let t = eq(p);
                            void 0 !== t && (e.actionData = t)
                        }
                        x.length > 0 && (x.forEach(e => {
                            let t = U.fetchers.get(e.key),
                                r = eO(void 0, t ? t.data : void 0);
                            U.fetchers.set(e.key, r)
                        }), e.fetchers = new Map(U.fetchers)), eH(e, {
                            flushSync: f
                        })
                    }
                    x.forEach(e => {
                        e4(e.key), e.controller && ec.set(e.key, e.controller)
                    });
                    let R = () => x.forEach(e => e4(e.key));
                    s && s.signal.addEventListener("abort", R);
                    let {
                        loaderResults: S,
                        fetcherResults: C
                    } = await eX(U, a, b, x, t);
                    if (t.signal.aborted) return {
                        shortCircuited: !0
                    };
                    s && s.signal.removeEventListener("abort", R), x.forEach(e => ec.delete(e.key));
                    let P = eg(S);
                    if (P) return await eG(t, P.result, !0, {
                        replace: d
                    }), {
                        shortCircuited: !0
                    };
                    if (P = eg(C)) return eL.add(P.key), await eG(t, P.result, !0, {
                        replace: d
                    }), {
                        shortCircuited: !0
                    };
                    let {
                        loaderData: k,
                        errors: L
                    } = eh(U, a, S, p, x, C, ez);
                    ez.forEach((e, t) => {
                        e.subscribe(r => {
                            (r || e.done) && ez.delete(t)
                        })
                    }), D.v7_partialHydration && h && U.errors && (L = l({}, U.errors, L));
                    let T = e2(),
                        _ = e6(eb),
                        M = T || _ || x.length > 0;
                    return l({
                        matches: a,
                        loaderData: k,
                        errors: L
                    }, M ? {
                        fetchers: new Map(U.fetchers)
                    } : {})
                }

                function eq(e) {
                    if (e && !eE(e[1])) return {
                        [e[0]]: e[1].data
                    };
                    if (U.actionData)
                        if (0 === Object.keys(U.actionData).length) return null;
                        else return U.actionData
                }
                async function eJ(t, n, a, o, i, l, u, d, h) {
                    var f, p;

                    function v(e) {
                        if (!e.route.action && !e.route.lazy) {
                            let e = ey(405, {
                                method: h.formMethod,
                                pathname: a,
                                routeId: n
                            });
                            return e0(t, n, e, {
                                flushSync: u
                            }), !0
                        }
                        return !1
                    }
                    if (eZ(), eU.delete(t), !l && v(o)) return;
                    let m = U.fetchers.get(t);
                    eQ(t, (f = h, p = m, {
                        state: "submitting",
                        formMethod: f.formMethod,
                        formAction: f.formAction,
                        formEncType: f.formEncType,
                        formData: f.formData,
                        json: f.json,
                        text: f.text,
                        data: p ? p.data : void 0
                    }), {
                        flushSync: u
                    });
                    let y = new AbortController,
                        b = eu(e.history, a, y.signal, h);
                    if (l) {
                        let e = await to(i, new URL(b.url).pathname, b.signal, t);
                        if ("aborted" === e.type) return;
                        if ("error" === e.type) return void e0(t, n, e.error, {
                            flushSync: u
                        });
                        if (!e.matches) return void e0(t, n, ey(404, {
                            pathname: a
                        }), {
                            flushSync: u
                        });
                        if (v(o = eT(i = e.matches, a))) return
                    }
                    ec.set(t, y);
                    let x = ed,
                        R = (await eK("action", U, b, [o], i, t))[o.route.id];
                    if (b.signal.aborted) {
                        ec.get(t) === y && ec.delete(t);
                        return
                    }
                    if (D.v7_fetcherPersist && eB.has(t)) {
                        if (ex(R) || eE(R)) return void eQ(t, ej(void 0))
                    } else {
                        if (ex(R)) return (ec.delete(t), eb > x) ? void eQ(t, ej(void 0)) : (eL.add(t), eQ(t, eO(h)), eG(b, R, !1, {
                            fetcherSubmission: h,
                            preventScrollReset: d
                        }));
                        if (eE(R)) return void e0(t, n, R.error)
                    }
                    if (ew(R)) throw ey(400, {
                        type: "defer-action"
                    });
                    let S = U.navigation.location || U.location,
                        C = eu(e.history, S, y.signal),
                        P = r || w,
                        k = "idle" !== U.navigation.state ? g(P, U.navigation.location, E) : U.matches;
                    c(k, "Didn't find any matches after fetcher action");
                    let L = ++ed;
                    eR.set(t, L);
                    let T = eO(h, R.data);
                    U.fetchers.set(t, T);
                    let [_, M] = Z(e.history, U, k, h, S, !1, D.v7_skipActionErrorRevalidation, et, en, ei, eB, eU, eL, P, E, [o.route.id, R]);
                    M.filter(e => e.key !== t).forEach(e => {
                        let t = e.key,
                            r = U.fetchers.get(t),
                            n = eO(void 0, r ? r.data : void 0);
                        U.fetchers.set(t, n), e4(t), e.controller && ec.set(t, e.controller)
                    }), eH({
                        fetchers: new Map(U.fetchers)
                    });
                    let O = () => M.forEach(e => e4(e.key));
                    y.signal.addEventListener("abort", O);
                    let {
                        loaderResults: j,
                        fetcherResults: A
                    } = await eX(U, k, _, M, C);
                    if (y.signal.aborted) return;
                    y.signal.removeEventListener("abort", O), eR.delete(t), ec.delete(t), M.forEach(e => ec.delete(e.key));
                    let z = eg(j);
                    if (z) return eG(C, z.result, !1, {
                        preventScrollReset: d
                    });
                    if (z = eg(A)) return eL.add(z.key), eG(C, z.result, !1, {
                        preventScrollReset: d
                    });
                    let {
                        loaderData: F,
                        errors: H
                    } = eh(U, k, j, void 0, M, A, ez);
                    if (U.fetchers.has(t)) {
                        let e = ej(R.data);
                        U.fetchers.set(t, e)
                    }
                    e6(L), "loading" === U.navigation.state && L > eb ? (c(B, "Expected pending action"), s && s.abort(), eI(U.navigation.location, {
                        matches: k,
                        loaderData: F,
                        errors: H,
                        fetchers: new Map(U.fetchers)
                    })) : (eH({
                        errors: H,
                        loaderData: ef(U.loaderData, F, k, H),
                        fetchers: new Map(U.fetchers)
                    }), et = !1)
                }
                async function eY(t, r, n, a, o, i, l, s, u) {
                    let d = U.fetchers.get(t);
                    eQ(t, eO(u, d ? d.data : void 0), {
                        flushSync: l
                    });
                    let h = new AbortController,
                        f = eu(e.history, n, h.signal);
                    if (i) {
                        let e = await to(o, new URL(f.url).pathname, f.signal, t);
                        if ("aborted" === e.type) return;
                        if ("error" === e.type) return void e0(t, r, e.error, {
                            flushSync: l
                        });
                        if (!e.matches) return void e0(t, r, ey(404, {
                            pathname: n
                        }), {
                            flushSync: l
                        });
                        a = eT(o = e.matches, n)
                    }
                    ec.set(t, h);
                    let p = ed,
                        v = (await eK("loader", U, f, [a], o, t))[a.route.id];
                    if (ew(v) && (v = await ek(v, f.signal, !0) || v), ec.get(t) === h && ec.delete(t), !f.signal.aborted) {
                        if (eB.has(t)) return void eQ(t, ej(void 0));
                        if (ex(v))
                            if (eb > p) return void eQ(t, ej(void 0));
                            else {
                                eL.add(t), await eG(f, v, !1, {
                                    preventScrollReset: s
                                });
                                return
                            }
                        if (eE(v)) return void e0(t, r, v.error);
                        c(!ew(v), "Unhandled fetcher deferred data"), eQ(t, ej(v.data))
                    }
                }
                async function eG(t, r, a, o) {
                    let {
                        submission: i,
                        fetcherSubmission: u,
                        preventScrollReset: d,
                        replace: v
                    } = void 0 === o ? {} : o;
                    r.response.headers.has("X-Remix-Revalidate") && (et = !0);
                    let m = r.response.headers.get("Location");
                    c(m, "Expected a Location header on the redirect Response"), m = es(m, new URL(t.url), E);
                    let y = f(U.location, m, {
                        _isRedirect: !0
                    });
                    if (p) {
                        let t = !1;
                        if (r.response.headers.has("X-Remix-Reload-Document")) t = !0;
                        else if (V.test(m)) {
                            let r = e.history.createURL(m);
                            t = r.origin !== h.location.origin || null == R(r.pathname, E)
                        }
                        if (t) return void(v ? h.location.replace(m) : h.location.assign(m))
                    }
                    s = null;
                    let g = !0 === v || r.response.headers.has("X-Remix-Replace") ? n.Replace : n.Push,
                        {
                            formMethod: b,
                            formAction: w,
                            formEncType: x
                        } = U.navigation;
                    !i && !u && b && w && x && (i = e_(U.navigation));
                    let S = i || u;
                    if (I.has(r.response.status) && S && eD(S.formMethod)) await eW(g, y, {
                        submission: l({}, S, {
                            formAction: m
                        }),
                        preventScrollReset: d || z,
                        enableViewTransition: a ? F : void 0
                    });
                    else {
                        let e = eM(y, i);
                        await eW(g, y, {
                            overrideNavigation: e,
                            fetcherSubmission: u,
                            preventScrollReset: d || z,
                            enableViewTransition: a ? F : void 0
                        })
                    }
                }
                async function eK(e, r, n, o, i, l) {
                    let s, u = {};
                    try {
                        s = await eo(x, e, r, n, o, i, l, m, t)
                    } catch (e) {
                        return o.forEach(t => {
                            u[t.route.id] = {
                                type: a.error,
                                error: e
                            }
                        }), u
                    }
                    for (let [e, t] of Object.entries(s)) {
                        var d;
                        if (eS((d = t).result) && H.has(d.result.status)) {
                            let r = t.result;
                            u[e] = {
                                type: a.redirect,
                                response: function(e, t, r, n, a, o) {
                                    let i = e.headers.get("Location");
                                    if (c(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !V.test(i)) {
                                        let l = n.slice(0, n.findIndex(e => e.route.id === r) + 1);
                                        i = G(new URL(t.url), l, a, !0, i, o), e.headers.set("Location", i)
                                    }
                                    return e
                                }(r, n, e, i, E, D.v7_relativeSplatPath)
                            }
                        } else u[e] = await el(t)
                    }
                    return u
                }
                async function eX(t, r, n, o, i) {
                    let l = t.matches,
                        s = eK("loader", t, i, n, r, null),
                        u = Promise.all(o.map(async r => {
                            if (!r.matches || !r.match || !r.controller) return Promise.resolve({
                                [r.key]: {
                                    type: a.error,
                                    error: ey(404, {
                                        pathname: r.path
                                    })
                                }
                            }); {
                                let n = (await eK("loader", t, eu(e.history, r.path, r.controller.signal), [r.match], r.matches, r.key))[r.match.route.id];
                                return {
                                    [r.key]: n
                                }
                            }
                        })),
                        c = await s,
                        d = (await u).reduce((e, t) => Object.assign(e, t), {});
                    return await Promise.all([eC(r, c, i.signal, l, t.loaderData), eP(r, d, o)]), {
                        loaderResults: c,
                        fetcherResults: d
                    }
                }

                function eZ() {
                    et = !0, en.push(...tt()), eU.forEach((e, t) => {
                        ec.has(t) && ei.add(t), e4(t)
                    })
                }

                function eQ(e, t, r) {
                    void 0 === r && (r = {}), U.fetchers.set(e, t), eH({
                        fetchers: new Map(U.fetchers)
                    }, {
                        flushSync: !0 === (r && r.flushSync)
                    })
                }

                function e0(e, t, r, n) {
                    void 0 === n && (n = {});
                    let a = ev(U.matches, t);
                    e7(e), eH({
                        errors: {
                            [a.route.id]: r
                        },
                        fetchers: new Map(U.fetchers)
                    }, {
                        flushSync: !0 === (n && n.flushSync)
                    })
                }

                function e1(e) {
                    return eA.set(e, (eA.get(e) || 0) + 1), eB.has(e) && eB.delete(e), U.fetchers.get(e) || W
                }

                function e7(e) {
                    let t = U.fetchers.get(e);
                    ec.has(e) && !(t && "loading" === t.state && eR.has(e)) && e4(e), eU.delete(e), eR.delete(e), eL.delete(e), D.v7_fetcherPersist && eB.delete(e), ei.delete(e), U.fetchers.delete(e)
                }

                function e4(e) {
                    let t = ec.get(e);
                    t && (t.abort(), ec.delete(e))
                }

                function e5(e) {
                    for (let t of e) {
                        let e = ej(e1(t).data);
                        U.fetchers.set(t, e)
                    }
                }

                function e2() {
                    let e = [],
                        t = !1;
                    for (let r of eL) {
                        let n = U.fetchers.get(r);
                        c(n, "Expected fetcher: " + r), "loading" === n.state && (eL.delete(r), e.push(r), t = !0)
                    }
                    return e5(e), t
                }

                function e6(e) {
                    let t = [];
                    for (let [r, n] of eR)
                        if (n < e) {
                            let e = U.fetchers.get(r);
                            c(e, "Expected fetcher: " + r), "loading" === e.state && (e4(r), eR.delete(r), t.push(r))
                        }
                    return e5(t), t.length > 0
                }

                function e3(e) {
                    U.blockers.delete(e), eF.delete(e)
                }

                function e8(e, t) {
                    let r = U.blockers.get(e) || $;
                    c("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
                    let n = new Map(U.blockers);
                    n.set(e, t), eH({
                        blockers: n
                    })
                }

                function e9(e) {
                    let {
                        currentLocation: t,
                        nextLocation: r,
                        historyAction: n
                    } = e;
                    if (0 === eF.size) return;
                    eF.size > 1 && d(!1, "A router only supports one blocker at a time");
                    let a = Array.from(eF.entries()),
                        [o, i] = a[a.length - 1],
                        l = U.blockers.get(o);
                    if ((!l || "proceeding" !== l.state) && i({
                            currentLocation: t,
                            nextLocation: r,
                            historyAction: n
                        })) return o
                }

                function te(e) {
                    let t = ey(404, {
                            pathname: e
                        }),
                        {
                            matches: n,
                            route: a
                        } = em(r || w);
                    return tt(), {
                        notFoundMatches: n,
                        route: a,
                        error: t
                    }
                }

                function tt(e) {
                    let t = [];
                    return ez.forEach((r, n) => {
                        (!e || e(n)) && (r.cancel(), t.push(n), ez.delete(n))
                    }), t
                }

                function tr(e, t) {
                    return L && L(e, t.map(e => (function(e, t) {
                        let {
                            route: r,
                            pathname: n,
                            params: a
                        } = e;
                        return {
                            id: r.id,
                            pathname: n,
                            params: a,
                            data: t[r.id],
                            handle: r.handle
                        }
                    })(e, U.loaderData))) || e.key
                }

                function tn(e, t) {
                    if (k) {
                        let r = k[tr(e, t)];
                        if ("number" == typeof r) return r
                    }
                    return null
                }

                function ta(e, t, r) {
                    if (S) {
                        if (!e) return {
                            active: !0,
                            matches: b(t, r, E, !0) || []
                        };
                        else if (Object.keys(e[0].params).length > 0) return {
                            active: !0,
                            matches: b(t, r, E, !0)
                        }
                    }
                    return {
                        active: !1,
                        matches: null
                    }
                }
                async function to(e, n, a, o) {
                    if (!S) return {
                        type: "success",
                        matches: e
                    };
                    let i = e;
                    for (;;) {
                        let e = null == r,
                            l = r || w,
                            s = m;
                        try {
                            await S({
                                signal: a,
                                path: n,
                                matches: i,
                                fetcherKey: o,
                                patch: (e, r) => {
                                    a.aborted || er(e, r, l, s, t)
                                }
                            })
                        } catch (e) {
                            return {
                                type: "error",
                                error: e,
                                partialMatches: i
                            }
                        } finally {
                            e && !a.aborted && (w = [...w])
                        }
                        if (a.aborted) return {
                            type: "aborted"
                        };
                        let u = g(l, n, E);
                        if (u) return {
                            type: "success",
                            matches: u
                        };
                        let c = b(l, n, E, !0);
                        if (!c || i.length === c.length && i.every((e, t) => e.route.id === c[t].route.id)) return {
                            type: "success",
                            matches: null
                        };
                        i = c
                    }
                }
                return i = {
                    get basename() {
                        return E
                    },
                    get future() {
                        return D
                    },
                    get state() {
                        return U
                    },
                    get routes() {
                        return w
                    },
                    get window() {
                        return h
                    },
                    initialize: function() {
                        if (C = e.history.listen(t => {
                                let {
                                    action: r,
                                    location: n,
                                    delta: a
                                } = t;
                                if (u) {
                                    u(), u = void 0;
                                    return
                                }
                                d(0 === eF.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                                let o = e9({
                                    currentLocation: U.location,
                                    nextLocation: n,
                                    historyAction: r
                                });
                                if (o && null != a) {
                                    let t = new Promise(e => {
                                        u = e
                                    });
                                    e.history.go(-1 * a), e8(o, {
                                        state: "blocked",
                                        location: n,
                                        proceed() {
                                            e8(o, {
                                                state: "proceeding",
                                                proceed: void 0,
                                                reset: void 0,
                                                location: n
                                            }), t.then(() => e.history.go(a))
                                        },
                                        reset() {
                                            let e = new Map(U.blockers);
                                            e.set(o, $), eH({
                                                blockers: e
                                            })
                                        }
                                    });
                                    return
                                }
                                return eW(r, n)
                            }), p) {
                            var t = h,
                                r = Y;
                            try {
                                let e = t.sessionStorage.getItem(J);
                                if (e) {
                                    let t = JSON.parse(e);
                                    for (let [e, n] of Object.entries(t || {})) n && Array.isArray(n) && r.set(e, new Set(n || []))
                                }
                            } catch (e) {}
                            let e = () => (function(e, t) {
                                if (t.size > 0) {
                                    let r = {};
                                    for (let [e, n] of t) r[e] = [...n];
                                    try {
                                        e.sessionStorage.setItem(J, JSON.stringify(r))
                                    } catch (e) {
                                        d(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").")
                                    }
                                }
                            })(h, Y);
                            h.addEventListener("pagehide", e), X = () => h.removeEventListener("pagehide", e)
                        }
                        return U.initialized || eW(n.Pop, U.location, {
                            initialHydration: !0
                        }), i
                    },
                    subscribe: function(e) {
                        return P.add(e), () => P.delete(e)
                    },
                    enableScrollRestoration: function(e, t, r) {
                        if (k = e, T = t, L = r || null, !_ && U.navigation === N) {
                            _ = !0;
                            let e = tn(U.location, U.matches);
                            null != e && eH({
                                restoreScrollPosition: e
                            })
                        }
                        return () => {
                            k = null, T = null, L = null
                        }
                    },
                    navigate: eN,
                    fetch: function(e, t, n, a) {
                        if (v) throw Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
                        e4(e);
                        let o = !0 === (a && a.flushSync),
                            i = r || w,
                            l = G(U.location, U.matches, E, D.v7_prependBasename, n, D.v7_relativeSplatPath, t, null == a ? void 0 : a.relative),
                            s = g(i, l, E),
                            u = ta(s, i, l);
                        if (u.active && u.matches && (s = u.matches), !s) return void e0(e, t, ey(404, {
                            pathname: l
                        }), {
                            flushSync: o
                        });
                        let {
                            path: c,
                            submission: d,
                            error: h
                        } = K(D.v7_normalizeFormMethod, !0, l, a);
                        if (h) return void e0(e, t, h, {
                            flushSync: o
                        });
                        let f = eT(s, c),
                            p = !0 === (a && a.preventScrollReset);
                        d && eD(d.formMethod) ? eJ(e, t, c, f, s, u.active, o, p, d) : (eU.set(e, {
                            routeId: t,
                            path: c
                        }), eY(e, t, c, f, s, u.active, o, p, d))
                    },
                    revalidate: function() {
                        if (eZ(), eH({
                                revalidation: "loading"
                            }), "submitting" !== U.navigation.state) {
                            if ("idle" === U.navigation.state) return void eW(U.historyAction, U.location, {
                                startUninterruptedRevalidation: !0
                            });
                            eW(B || U.historyAction, U.navigation.location, {
                                overrideNavigation: U.navigation,
                                enableViewTransition: !0 === F
                            })
                        }
                    },
                    createHref: t => e.history.createHref(t),
                    encodeLocation: t => e.history.encodeLocation(t),
                    getFetcher: e1,
                    deleteFetcher: function(e) {
                        let t = (eA.get(e) || 0) - 1;
                        t <= 0 ? (eA.delete(e), eB.add(e), D.v7_fetcherPersist || e7(e)) : eA.set(e, t), eH({
                            fetchers: new Map(U.fetchers)
                        })
                    },
                    dispose: function() {
                        C && C(), X && X(), P.clear(), s && s.abort(), U.fetchers.forEach((e, t) => e7(t)), U.blockers.forEach((e, t) => e3(t))
                    },
                    getBlocker: function(e, t) {
                        let r = U.blockers.get(e) || $;
                        return eF.get(e) !== t && eF.set(e, t), r
                    },
                    deleteBlocker: e3,
                    patchRoutes: function(e, n) {
                        let a = null == r;
                        er(e, n, r || w, m, t), a && (w = [...w], eH({}))
                    },
                    _internalFetchControllers: ec,
                    _internalActiveDeferreds: ez,
                    _internalSetRoutes: function(e) {
                        r = y(e, t, void 0, m = {})
                    }
                }
            }

            function G(e, t, r, n, a, o, i, l) {
                let s, u;
                if (i) {
                    for (let e of (s = [], t))
                        if (s.push(e), e.route.id === i) {
                            u = e;
                            break
                        }
                } else s = t, u = t[t.length - 1];
                let c = L(a || ".", k(s, o), R(e.pathname, r) || e.pathname, "path" === l);
                if (null == a && (c.search = e.search, c.hash = e.hash), (null == a || "" === a || "." === a) && u) {
                    let e = eL(c.search);
                    if (u.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
                    else if (!u.route.index && e) {
                        let e = new URLSearchParams(c.search),
                            t = e.getAll("index");
                        e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
                        let r = e.toString();
                        c.search = r ? "?" + r : ""
                    }
                }
                return n && "/" !== r && (c.pathname = "/" === c.pathname ? r : T([r, c.pathname])), p(c)
            }

            function K(e, t, r, n) {
                var a;
                let o, i;
                if (!n || !(null != n && ("formData" in n && null != n.formData || "body" in n && void 0 !== n.body))) return {
                    path: r
                };
                if (n.formMethod && (a = n.formMethod, !F.has(a.toLowerCase()))) return {
                    path: r,
                    error: ey(405, {
                        method: n.formMethod
                    })
                };
                let l = () => ({
                        path: r,
                        error: ey(400, {
                            type: "invalid-body"
                        })
                    }),
                    s = n.formMethod || "get",
                    u = e ? s.toUpperCase() : s.toLowerCase(),
                    d = eb(r);
                if (void 0 !== n.body) {
                    if ("text/plain" === n.formEncType) {
                        if (!eD(u)) return l();
                        let e = "string" == typeof n.body ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce((e, t) => {
                            let [r, n] = t;
                            return "" + e + r + "=" + n + "\n"
                        }, "") : String(n.body);
                        return {
                            path: r,
                            submission: {
                                formMethod: u,
                                formAction: d,
                                formEncType: n.formEncType,
                                formData: void 0,
                                json: void 0,
                                text: e
                            }
                        }
                    } else if ("application/json" === n.formEncType) {
                        if (!eD(u)) return l();
                        try {
                            let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
                            return {
                                path: r,
                                submission: {
                                    formMethod: u,
                                    formAction: d,
                                    formEncType: n.formEncType,
                                    formData: void 0,
                                    json: e,
                                    text: void 0
                                }
                            }
                        } catch (e) {
                            return l()
                        }
                    }
                }
                if (c("function" == typeof FormData, "FormData is not available in this environment"), n.formData) o = ec(n.formData), i = n.formData;
                else if (n.body instanceof FormData) o = ec(n.body), i = n.body;
                else if (n.body instanceof URLSearchParams) i = ed(o = n.body);
                else if (null == n.body) o = new URLSearchParams, i = new FormData;
                else try {
                    o = new URLSearchParams(n.body), i = ed(o)
                } catch (e) {
                    return l()
                }
                let h = {
                    formMethod: u,
                    formAction: d,
                    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
                    formData: i,
                    json: void 0,
                    text: void 0
                };
                if (eD(h.formMethod)) return {
                    path: r,
                    submission: h
                };
                let f = v(r);
                return t && f.search && eL(f.search) && o.append("index", ""), f.search = "?" + o, {
                    path: p(f),
                    submission: h
                }
            }

            function X(e, t, r) {
                void 0 === r && (r = !1);
                let n = e.findIndex(e => e.route.id === t);
                return n >= 0 ? e.slice(0, r ? n + 1 : n) : e
            }

            function Z(e, t, r, n, a, o, i, s, u, c, d, h, f, p, v, m) {
                let y = m ? eE(m[1]) ? m[1].error : m[1].data : void 0,
                    b = e.createURL(t.location),
                    w = e.createURL(a),
                    E = r;
                o && t.errors ? E = X(r, Object.keys(t.errors)[0], !0) : m && eE(m[1]) && (E = X(r, m[0]));
                let x = m ? m[1].statusCode : void 0,
                    R = i && x && x >= 400,
                    S = E.filter((e, r) => {
                        var a, i, c;
                        let d, h, {
                            route: f
                        } = e;
                        if (f.lazy) return !0;
                        if (null == f.loader) return !1;
                        if (o) return Q(f, t.loaderData, t.errors);
                        if (a = t.loaderData, i = t.matches[r], c = e, d = !i || c.route.id !== i.route.id, h = void 0 === a[c.route.id], d || h || u.some(t => t === e.route.id)) return !0;
                        let p = t.matches[r];
                        return et(e, l({
                            currentUrl: b,
                            currentParams: p.params,
                            nextUrl: w,
                            nextParams: e.params
                        }, n, {
                            actionResult: y,
                            actionStatus: x,
                            defaultShouldRevalidate: !R && (s || b.pathname + b.search === w.pathname + w.search || b.search !== w.search || ee(p, e))
                        }))
                    }),
                    D = [];
                return h.forEach((e, a) => {
                    if (o || !r.some(t => t.route.id === e.routeId) || d.has(a)) return;
                    let i = g(p, e.path, v);
                    if (!i) return void D.push({
                        key: a,
                        routeId: e.routeId,
                        path: e.path,
                        matches: null,
                        match: null,
                        controller: null
                    });
                    let u = t.fetchers.get(a),
                        h = eT(i, e.path),
                        m = !1;
                    f.has(a) ? m = !1 : c.has(a) ? (c.delete(a), m = !0) : m = u && "idle" !== u.state && void 0 === u.data ? s : et(h, l({
                        currentUrl: b,
                        currentParams: t.matches[t.matches.length - 1].params,
                        nextUrl: w,
                        nextParams: r[r.length - 1].params
                    }, n, {
                        actionResult: y,
                        actionStatus: x,
                        defaultShouldRevalidate: !R && s
                    })), m && D.push({
                        key: a,
                        routeId: e.routeId,
                        path: e.path,
                        matches: i,
                        match: h,
                        controller: new AbortController
                    })
                }), [S, D]
            }

            function Q(e, t, r) {
                if (e.lazy) return !0;
                if (!e.loader) return !1;
                let n = null != t && void 0 !== t[e.id],
                    a = null != r && void 0 !== r[e.id];
                return (!!n || !a) && ("function" == typeof e.loader && !0 === e.loader.hydrate || !n && !a)
            }

            function ee(e, t) {
                let r = e.route.path;
                return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
            }

            function et(e, t) {
                if (e.route.shouldRevalidate) {
                    let r = e.route.shouldRevalidate(t);
                    if ("boolean" == typeof r) return r
                }
                return t.defaultShouldRevalidate
            }

            function er(e, t, r, n, a) {
                var o;
                let i;
                if (e) {
                    let t = n[e];
                    c(t, "No route found to patch children into: routeId = " + e), t.children || (t.children = []), i = t.children
                } else i = r;
                let l = y(t.filter(e => !i.some(t => (function e(t, r) {
                    return "id" in t && "id" in r && t.id === r.id || t.index === r.index && t.path === r.path && t.caseSensitive === r.caseSensitive && ((!t.children || 0 === t.children.length) && (!r.children || 0 === r.children.length) || t.children.every((t, n) => {
                        var a;
                        return null == (a = r.children) ? void 0 : a.some(r => e(t, r))
                    }))
                })(e, t))), a, [e || "_", "patch", String((null == (o = i) ? void 0 : o.length) || "0")], n);
                i.push(...l)
            }
            async function en(e, t, r) {
                if (!e.lazy) return;
                let n = await e.lazy();
                if (!e.lazy) return;
                let a = r[e.id];
                c(a, "No route found in manifest");
                let o = {};
                for (let e in n) {
                    let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
                    d(!t, 'Route "' + a.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || m.has(e) || (o[e] = n[e])
                }
                Object.assign(a, o), Object.assign(a, l({}, t(a), {
                    lazy: void 0
                }))
            }
            async function ea(e) {
                let {
                    matches: t
                } = e, r = t.filter(e => e.shouldLoad);
                return (await Promise.all(r.map(e => e.resolve()))).reduce((e, t, n) => Object.assign(e, {
                    [r[n].route.id]: t
                }), {})
            }
            async function eo(e, t, r, n, o, i, s, u, c, d) {
                let h = i.map(e => e.route.lazy ? en(e.route, c, u) : void 0),
                    f = i.map((e, r) => {
                        let i = h[r],
                            s = o.some(t => t.route.id === e.route.id),
                            u = async r => (r && "GET" === n.method && (e.route.lazy || e.route.loader) && (s = !0), s ? ei(t, n, e, i, r, d) : Promise.resolve({
                                type: a.data,
                                result: void 0
                            }));
                        return l({}, e, {
                            shouldLoad: s,
                            resolve: u
                        })
                    }),
                    p = await e({
                        matches: f,
                        request: n,
                        params: i[0].params,
                        fetcherKey: s,
                        context: d
                    });
                try {
                    await Promise.all(h)
                } catch (e) {}
                return p
            }
            async function ei(e, t, r, n, o, i) {
                let l, s, u = n => {
                    let a, l = new Promise((e, t) => a = t);
                    s = () => a(), t.signal.addEventListener("abort", s);
                    let u = a => "function" != typeof n ? Promise.reject(Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ') + r.route.id + "]")) : n({
                        request: t,
                        params: r.params,
                        context: i
                    }, ...void 0 !== a ? [a] : []);
                    return Promise.race([(async () => {
                        try {
                            let e = await (o ? o(e => u(e)) : u());
                            return {
                                type: "data",
                                result: e
                            }
                        } catch (e) {
                            return {
                                type: "error",
                                result: e
                            }
                        }
                    })(), l])
                };
                try {
                    let o = r.route[e];
                    if (n)
                        if (o) {
                            let e, [t] = await Promise.all([u(o).catch(t => {
                                e = t
                            }), n]);
                            if (void 0 !== e) throw e;
                            l = t
                        } else if (await n, o = r.route[e]) l = await u(o);
                    else {
                        if ("action" !== e) return {
                            type: a.data,
                            result: void 0
                        };
                        let n = new URL(t.url),
                            o = n.pathname + n.search;
                        throw ey(405, {
                            method: t.method,
                            pathname: o,
                            routeId: r.route.id
                        })
                    } else if (o) l = await u(o);
                    else {
                        let e = new URL(t.url),
                            r = e.pathname + e.search;
                        throw ey(404, {
                            pathname: r
                        })
                    }
                    c(void 0 !== l.result, "You defined " + ("action" === e ? "an action" : "a loader") + " for route " + ('"' + r.route.id + "\" but didn't return anything from your `") + e + "` function. Please return a value or `null`.")
                } catch (e) {
                    return {
                        type: a.error,
                        result: e
                    }
                } finally {
                    s && t.signal.removeEventListener("abort", s)
                }
                return l
            }
            async function el(e) {
                var t, r, n, o, i, l, s, u, c;
                let {
                    result: d,
                    type: h
                } = e;
                if (eS(d)) {
                    let e;
                    try {
                        let t = d.headers.get("Content-Type");
                        e = t && /\bapplication\/json\b/.test(t) ? null == d.body ? null : await d.json() : await d.text()
                    } catch (e) {
                        return {
                            type: a.error,
                            error: e
                        }
                    }
                    return h === a.error ? {
                        type: a.error,
                        error: new U(d.status, d.statusText, e),
                        statusCode: d.status,
                        headers: d.headers
                    } : {
                        type: a.data,
                        data: e,
                        statusCode: d.status,
                        headers: d.headers
                    }
                }
                if (h === a.error) return eR(d) ? d.data instanceof Error ? {
                    type: a.error,
                    error: d.data,
                    statusCode: null == (n = d.init) ? void 0 : n.status,
                    headers: null != (o = d.init) && o.headers ? new Headers(d.init.headers) : void 0
                } : {
                    type: a.error,
                    error: new U((null == (t = d.init) ? void 0 : t.status) || 500, void 0, d.data),
                    statusCode: A(d) ? d.status : void 0,
                    headers: null != (r = d.init) && r.headers ? new Headers(d.init.headers) : void 0
                } : {
                    type: a.error,
                    error: d,
                    statusCode: A(d) ? d.status : void 0
                };
                return (c = d) && "object" == typeof c && "object" == typeof c.data && "function" == typeof c.subscribe && "function" == typeof c.cancel && "function" == typeof c.resolveData ? {
                    type: a.deferred,
                    deferredData: d,
                    statusCode: null == (i = d.init) ? void 0 : i.status,
                    headers: (null == (l = d.init) ? void 0 : l.headers) && new Headers(d.init.headers)
                } : eR(d) ? {
                    type: a.data,
                    data: d.data,
                    statusCode: null == (s = d.init) ? void 0 : s.status,
                    headers: null != (u = d.init) && u.headers ? new Headers(d.init.headers) : void 0
                } : {
                    type: a.data,
                    data: d
                }
            }

            function es(e, t, r) {
                if (V.test(e)) {
                    let n = new URL(e.startsWith("//") ? t.protocol + e : e),
                        a = null != R(n.pathname, r);
                    if (n.origin === t.origin && a) return n.pathname + n.search + n.hash
                }
                return e
            }

            function eu(e, t, r, n) {
                let a = e.createURL(eb(t)).toString(),
                    o = {
                        signal: r
                    };
                if (n && eD(n.formMethod)) {
                    let {
                        formMethod: e,
                        formEncType: t
                    } = n;
                    o.method = e.toUpperCase(), "application/json" === t ? (o.headers = new Headers({
                        "Content-Type": t
                    }), o.body = JSON.stringify(n.json)) : "text/plain" === t ? o.body = n.text : "application/x-www-form-urlencoded" === t && n.formData ? o.body = ec(n.formData) : o.body = n.formData
                }
                return new Request(a, o)
            }

            function ec(e) {
                let t = new URLSearchParams;
                for (let [r, n] of e.entries()) t.append(r, "string" == typeof n ? n : n.name);
                return t
            }

            function ed(e) {
                let t = new FormData;
                for (let [r, n] of e.entries()) t.append(r, n);
                return t
            }

            function eh(e, t, r, n, a, o, i) {
                let s, u, d, h, f, p, {
                    loaderData: v,
                    errors: m
                } = (u = {}, d = null, h = !1, f = {}, p = n && eE(n[1]) ? n[1].error : void 0, t.forEach(e => {
                    if (!(e.route.id in r)) return;
                    let n = e.route.id,
                        a = r[n];
                    if (c(!ex(a), "Cannot handle redirect results in processLoaderData"), eE(a)) {
                        let e = a.error;
                        void 0 !== p && (e = p, p = void 0), d = d || {}, 1; {
                            let r = ev(t, n);
                            null == d[r.route.id] && (d[r.route.id] = e)
                        }
                        u[n] = void 0, h || (h = !0, s = A(a.error) ? a.error.status : 500), a.headers && (f[n] = a.headers)
                    } else ew(a) ? (i.set(n, a.deferredData), u[n] = a.deferredData.data, null == a.statusCode || 200 === a.statusCode || h || (s = a.statusCode)) : (u[n] = a.data, a.statusCode && 200 !== a.statusCode && !h && (s = a.statusCode)), a.headers && (f[n] = a.headers)
                }), void 0 !== p && n && (d = {
                    [n[0]]: p
                }, u[n[0]] = void 0), {
                    loaderData: u,
                    errors: d,
                    statusCode: s || 200,
                    loaderHeaders: f
                });
                return a.forEach(t => {
                    let {
                        key: r,
                        match: n,
                        controller: a
                    } = t, i = o[r];
                    if (c(i, "Did not find corresponding fetcher result"), !a || !a.signal.aborted)
                        if (eE(i)) {
                            let t = ev(e.matches, null == n ? void 0 : n.route.id);
                            m && m[t.route.id] || (m = l({}, m, {
                                [t.route.id]: i.error
                            })), e.fetchers.delete(r)
                        } else if (ex(i)) c(!1, "Unhandled fetcher revalidation redirect");
                    else if (ew(i)) c(!1, "Unhandled fetcher deferred data");
                    else {
                        let t = ej(i.data);
                        e.fetchers.set(r, t)
                    }
                }), {
                    loaderData: v,
                    errors: m
                }
            }

            function ef(e, t, r, n) {
                let a = l({}, t);
                for (let o of r) {
                    let r = o.route.id;
                    if (t.hasOwnProperty(r) ? void 0 !== t[r] && (a[r] = t[r]) : void 0 !== e[r] && o.route.loader && (a[r] = e[r]), n && n.hasOwnProperty(r)) break
                }
                return a
            }

            function ep(e) {
                return e ? eE(e[1]) ? {
                    actionData: {}
                } : {
                    actionData: {
                        [e[0]]: e[1].data
                    }
                } : {}
            }

            function ev(e, t) {
                return (t ? e.slice(0, e.findIndex(e => e.route.id === t) + 1) : [...e]).reverse().find(e => !0 === e.route.hasErrorBoundary) || e[0]
            }

            function em(e) {
                let t = 1 === e.length ? e[0] : e.find(e => e.index || !e.path || "/" === e.path) || {
                    id: "__shim-error-route__"
                };
                return {
                    matches: [{
                        params: {},
                        pathname: "",
                        pathnameBase: "",
                        route: t
                    }],
                    route: t
                }
            }

            function ey(e, t) {
                let {
                    pathname: r,
                    routeId: n,
                    method: a,
                    type: o,
                    message: i
                } = void 0 === t ? {} : t, l = "Unknown Server Error", s = "Unknown @remix-run/router error";
                return 400 === e ? (l = "Bad Request", a && r && n ? s = "You made a " + a + ' request to "' + r + '" but did not provide a `loader` for route "' + n + '", so there is no way to handle the request.' : "defer-action" === o ? s = "defer() is not supported in actions" : "invalid-body" === o && (s = "Unable to encode submission body")) : 403 === e ? (l = "Forbidden", s = 'Route "' + n + '" does not match URL "' + r + '"') : 404 === e ? (l = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (l = "Method Not Allowed", a && r && n ? s = "You made a " + a.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + n + '", so there is no way to handle the request.' : a && (s = 'Invalid request method "' + a.toUpperCase() + '"')), new U(e || 500, l, Error(s), !0)
            }

            function eg(e) {
                let t = Object.entries(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let [r, n] = t[e];
                    if (ex(n)) return {
                        key: r,
                        result: n
                    }
                }
            }

            function eb(e) {
                let t = "string" == typeof e ? v(e) : e;
                return p(l({}, t, {
                    hash: ""
                }))
            }

            function ew(e) {
                return e.type === a.deferred
            }

            function eE(e) {
                return e.type === a.error
            }

            function ex(e) {
                return (e && e.type) === a.redirect
            }

            function eR(e) {
                return "object" == typeof e && null != e && "type" in e && "data" in e && "init" in e && "DataWithResponseInit" === e.type
            }

            function eS(e) {
                return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "object" == typeof e.headers && void 0 !== e.body
            }

            function eD(e) {
                return z.has(e.toLowerCase())
            }
            async function eC(e, t, r, n, a) {
                let o = Object.entries(t);
                for (let i = 0; i < o.length; i++) {
                    let [l, s] = o[i], u = e.find(e => (null == e ? void 0 : e.route.id) === l);
                    if (!u) continue;
                    let c = n.find(e => e.route.id === u.route.id),
                        d = null != c && !ee(c, u) && (a && a[u.route.id]) !== void 0;
                    ew(s) && d && await ek(s, r, !1).then(e => {
                        e && (t[l] = e)
                    })
                }
            }
            async function eP(e, t, r) {
                for (let n = 0; n < r.length; n++) {
                    let {
                        key: a,
                        routeId: o,
                        controller: i
                    } = r[n], l = t[a];
                    e.find(e => (null == e ? void 0 : e.route.id) === o) && ew(l) && (c(i, "Expected an AbortController for revalidating fetcher deferred result"), await ek(l, i.signal, !0).then(e => {
                        e && (t[a] = e)
                    }))
                }
            }
            async function ek(e, t, r) {
                if (void 0 === r && (r = !1), !await e.deferredData.resolveData(t)) {
                    if (r) try {
                        return {
                            type: a.data,
                            data: e.deferredData.unwrappedData
                        }
                    } catch (e) {
                        return {
                            type: a.error,
                            error: e
                        }
                    }
                    return {
                        type: a.data,
                        data: e.deferredData.data
                    }
                }
            }

            function eL(e) {
                return new URLSearchParams(e).getAll("index").some(e => "" === e)
            }

            function eT(e, t) {
                let r = "string" == typeof t ? v(t).search : t.search;
                if (e[e.length - 1].route.index && eL(r || "")) return e[e.length - 1];
                let n = P(e);
                return n[n.length - 1]
            }

            function e_(e) {
                let {
                    formMethod: t,
                    formAction: r,
                    formEncType: n,
                    text: a,
                    formData: o,
                    json: i
                } = e;
                if (t && r && n) {
                    if (null != a) return {
                        formMethod: t,
                        formAction: r,
                        formEncType: n,
                        formData: void 0,
                        json: void 0,
                        text: a
                    };
                    else if (null != o) return {
                        formMethod: t,
                        formAction: r,
                        formEncType: n,
                        formData: o,
                        json: void 0,
                        text: void 0
                    };
                    else if (void 0 !== i) return {
                        formMethod: t,
                        formAction: r,
                        formEncType: n,
                        formData: void 0,
                        json: i,
                        text: void 0
                    }
                }
            }

            function eM(e, t) {
                return t ? {
                    state: "loading",
                    location: e,
                    formMethod: t.formMethod,
                    formAction: t.formAction,
                    formEncType: t.formEncType,
                    formData: t.formData,
                    json: t.json,
                    text: t.text
                } : {
                    state: "loading",
                    location: e,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0
                }
            }

            function eO(e, t) {
                return e ? {
                    state: "loading",
                    formMethod: e.formMethod,
                    formAction: e.formAction,
                    formEncType: e.formEncType,
                    formData: e.formData,
                    json: e.json,
                    text: e.text,
                    data: t
                } : {
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: t
                }
            }

            function ej(e) {
                return {
                    state: "idle",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: e
                }
            }
            Symbol("deferred")
        },
        84976(e, t, r) {
            r.d(t, {
                N_: () => k,
                Ys: () => y,
                k2: () => L,
                pg: () => S
            });
            var n, a, o, i, l, s, u = r(96540),
                c = r(40961),
                d = r(47767),
                h = r(45588);

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function p(e, t) {
                if (null == e) return {};
                var r, n, a = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }
            let v = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
                m = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"];
            try {
                window.__reactRouterVersion = "6"
            } catch (e) {}

            function y(e, t) {
                var r;
                let n;
                return (0, h.aE)({
                    basename: null == t ? void 0 : t.basename,
                    future: f({}, null == t ? void 0 : t.future, {
                        v7_prependBasename: !0
                    }),
                    history: (0, h.zR)({
                        window: null == t ? void 0 : t.window
                    }),
                    hydrationData: (null == t ? void 0 : t.hydrationData) || ((n = null == (r = window) ? void 0 : r.__staticRouterHydrationData) && n.errors && (n = f({}, n, {
                        errors: function(e) {
                            if (!e) return null;
                            let t = Object.entries(e),
                                r = {};
                            for (let [e, n] of t)
                                if (n && "RouteErrorResponse" === n.__type) r[e] = new h.VV(n.status, n.statusText, n.data, !0 === n.internal);
                                else if (n && "Error" === n.__type) {
                                if (n.__subType) {
                                    let t = window[n.__subType];
                                    if ("function" == typeof t) try {
                                        let a = new t(n.message);
                                        a.stack = "", r[e] = a
                                    } catch (e) {}
                                }
                                if (null == r[e]) {
                                    let t = Error(n.message);
                                    t.stack = "", r[e] = t
                                }
                            } else r[e] = n;
                            return r
                        }(n.errors)
                    })), n),
                    routes: e,
                    mapRouteProperties: d.wE,
                    dataStrategy: null == t ? void 0 : t.dataStrategy,
                    patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
                    window: null == t ? void 0 : t.window
                }).initialize()
            }
            let g = u.createContext({
                    isTransitioning: !1
                }),
                b = u.createContext(new Map),
                w = (o || (o = r.t(u, 2))).startTransition,
                E = (i || (i = r.t(c, 2))).flushSync;

            function x(e) {
                E ? E(e) : e()
            }(o || (o = r.t(u, 2))).useId;
            class R {
                constructor() {
                    this.status = "pending", this.promise = new Promise((e, t) => {
                        this.resolve = t => {
                            "pending" === this.status && (this.status = "resolved", e(t))
                        }, this.reject = e => {
                            "pending" === this.status && (this.status = "rejected", t(e))
                        }
                    })
                }
            }

            function S(e) {
                let {
                    fallbackElement: t,
                    router: r,
                    future: n
                } = e, [a, o] = u.useState(r.state), [i, l] = u.useState(), [s, c] = u.useState({
                    isTransitioning: !1
                }), [h, f] = u.useState(), [p, v] = u.useState(), [m, y] = u.useState(), E = u.useRef(new Map), {
                    v7_startTransition: S
                } = n || {}, C = u.useCallback(e => {
                    if (S) w ? w(e) : e();
                    else e()
                }, [S]), P = u.useCallback((e, t) => {
                    let {
                        deletedFetchers: n,
                        flushSync: a,
                        viewTransitionOpts: i
                    } = t;
                    e.fetchers.forEach((e, t) => {
                        void 0 !== e.data && E.current.set(t, e.data)
                    }), n.forEach(e => E.current.delete(e));
                    let s = null == r.window || null == r.window.document || "function" != typeof r.window.document.startViewTransition;
                    if (!i || s) return void(a ? x(() => o(e)) : C(() => o(e)));
                    if (a) {
                        x(() => {
                            p && (h && h.resolve(), p.skipTransition()), c({
                                isTransitioning: !0,
                                flushSync: !0,
                                currentLocation: i.currentLocation,
                                nextLocation: i.nextLocation
                            })
                        });
                        let t = r.window.document.startViewTransition(() => {
                            x(() => o(e))
                        });
                        t.finished.finally(() => {
                            x(() => {
                                f(void 0), v(void 0), l(void 0), c({
                                    isTransitioning: !1
                                })
                            })
                        }), x(() => v(t));
                        return
                    }
                    p ? (h && h.resolve(), p.skipTransition(), y({
                        state: e,
                        currentLocation: i.currentLocation,
                        nextLocation: i.nextLocation
                    })) : (l(e), c({
                        isTransitioning: !0,
                        flushSync: !1,
                        currentLocation: i.currentLocation,
                        nextLocation: i.nextLocation
                    }))
                }, [r.window, p, h, E, C]);
                u.useLayoutEffect(() => r.subscribe(P), [r, P]), u.useEffect(() => {
                    s.isTransitioning && !s.flushSync && f(new R)
                }, [s]), u.useEffect(() => {
                    if (h && i && r.window) {
                        let e = h.promise,
                            t = r.window.document.startViewTransition(async () => {
                                C(() => o(i)), await e
                            });
                        t.finished.finally(() => {
                            f(void 0), v(void 0), l(void 0), c({
                                isTransitioning: !1
                            })
                        }), v(t)
                    }
                }, [C, i, h, r.window]), u.useEffect(() => {
                    h && i && a.location.key === i.location.key && h.resolve()
                }, [h, p, a.location, i]), u.useEffect(() => {
                    !s.isTransitioning && m && (l(m.state), c({
                        isTransitioning: !0,
                        flushSync: !1,
                        currentLocation: m.currentLocation,
                        nextLocation: m.nextLocation
                    }), y(void 0))
                }, [s.isTransitioning, m]), u.useEffect(() => {}, []);
                let k = u.useMemo(() => ({
                        createHref: r.createHref,
                        encodeLocation: r.encodeLocation,
                        go: e => r.navigate(e),
                        push: (e, t, n) => r.navigate(e, {
                            state: t,
                            preventScrollReset: null == n ? void 0 : n.preventScrollReset
                        }),
                        replace: (e, t, n) => r.navigate(e, {
                            replace: !0,
                            state: t,
                            preventScrollReset: null == n ? void 0 : n.preventScrollReset
                        })
                    }), [r]),
                    L = r.basename || "/",
                    T = u.useMemo(() => ({
                        router: r,
                        navigator: k,
                        static: !1,
                        basename: L
                    }), [r, k, L]),
                    _ = u.useMemo(() => ({
                        v7_relativeSplatPath: r.future.v7_relativeSplatPath
                    }), [r.future.v7_relativeSplatPath]);
                return u.useEffect(() => (0, d.V8)(n, r.future), [n, r.future]), u.createElement(u.Fragment, null, u.createElement(d.sp.Provider, {
                    value: T
                }, u.createElement(d.Rq.Provider, {
                    value: a
                }, u.createElement(b.Provider, {
                    value: E.current
                }, u.createElement(g.Provider, {
                    value: s
                }, u.createElement(d.Ix, {
                    basename: L,
                    location: a.location,
                    navigationType: a.historyAction,
                    navigator: k,
                    future: _
                }, a.initialized || r.future.v7_partialHydration ? u.createElement(D, {
                    routes: r.routes,
                    future: r.future,
                    state: a
                }) : t))))), null)
            }
            let D = u.memo(function(e) {
                    let {
                        routes: t,
                        future: r,
                        state: n
                    } = e;
                    return (0, d.ph)(t, void 0, n, r)
                }),
                C = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                P = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                k = u.forwardRef(function(e, t) {
                    let r, {
                            onClick: n,
                            relative: a,
                            reloadDocument: o,
                            replace: i,
                            state: l,
                            target: s,
                            to: c,
                            preventScrollReset: m,
                            viewTransition: y
                        } = e,
                        g = p(e, v),
                        {
                            basename: b
                        } = u.useContext(d.jb),
                        w = !1;
                    if ("string" == typeof c && P.test(c) && (r = c, C)) try {
                        let e = new URL(window.location.href),
                            t = new URL(c.startsWith("//") ? e.protocol + c : c),
                            r = (0, h.pb)(t.pathname, b);
                        t.origin === e.origin && null != r ? c = r + t.search + t.hash : w = !0
                    } catch (e) {}
                    let E = (0, d.$P)(c, {
                            relative: a
                        }),
                        x = function(e, t) {
                            let {
                                target: r,
                                replace: n,
                                state: a,
                                preventScrollReset: o,
                                relative: i,
                                viewTransition: l
                            } = void 0 === t ? {} : t, s = (0, d.Zp)(), c = (0, d.zy)(), f = (0, d.x$)(e, {
                                relative: i
                            });
                            return u.useCallback(t => {
                                0 !== t.button || r && "_self" !== r || t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || (t.preventDefault(), s(e, {
                                    replace: void 0 !== n ? n : (0, h.AO)(c) === (0, h.AO)(f),
                                    state: a,
                                    preventScrollReset: o,
                                    relative: i,
                                    viewTransition: l
                                }))
                            }, [c, s, f, n, a, r, e, o, i, l])
                        }(c, {
                            replace: i,
                            state: l,
                            target: s,
                            preventScrollReset: m,
                            relative: a,
                            viewTransition: y
                        });
                    return u.createElement("a", f({}, g, {
                        href: r || E,
                        onClick: w || o ? n : function(e) {
                            n && n(e), e.defaultPrevented || x(e)
                        },
                        ref: t,
                        target: s
                    }))
                }),
                L = u.forwardRef(function(e, t) {
                    let r, {
                            "aria-current": n = "page",
                            caseSensitive: a = !1,
                            className: o = "",
                            end: i = !1,
                            style: s,
                            to: c,
                            viewTransition: v,
                            children: y
                        } = e,
                        b = p(e, m),
                        w = (0, d.x$)(c, {
                            relative: b.relative
                        }),
                        E = (0, d.zy)(),
                        x = u.useContext(d.Rq),
                        {
                            navigator: R,
                            basename: S
                        } = u.useContext(d.jb),
                        D = null != x && function(e, t) {
                            let r;
                            void 0 === t && (t = {});
                            let n = u.useContext(g);
                            null == n && (0, h.Oi)(!1);
                            let {
                                basename: a
                            } = (l.useViewTransitionState, (r = u.useContext(d.sp)) || (0, h.Oi)(!1), r), o = (0, d.x$)(e, {
                                relative: t.relative
                            });
                            if (!n.isTransitioning) return !1;
                            let i = (0, h.pb)(n.currentLocation.pathname, a) || n.currentLocation.pathname,
                                s = (0, h.pb)(n.nextLocation.pathname, a) || n.nextLocation.pathname;
                            return null != (0, h.B6)(o.pathname, s) || null != (0, h.B6)(o.pathname, i)
                        }(w) && !0 === v,
                        C = R.encodeLocation ? R.encodeLocation(w).pathname : w.pathname,
                        P = E.pathname,
                        L = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
                    a || (P = P.toLowerCase(), L = L ? L.toLowerCase() : null, C = C.toLowerCase()), L && S && (L = (0, h.pb)(L, S) || L);
                    let T = "/" !== C && C.endsWith("/") ? C.length - 1 : C.length,
                        _ = P === C || !i && P.startsWith(C) && "/" === P.charAt(T),
                        M = null != L && (L === C || !i && L.startsWith(C) && "/" === L.charAt(C.length)),
                        O = {
                            isActive: _,
                            isPending: M,
                            isTransitioning: D
                        },
                        j = _ ? n : void 0;
                    r = "function" == typeof o ? o(O) : [o, _ ? "active" : null, M ? "pending" : null, D ? "transitioning" : null].filter(Boolean).join(" ");
                    let U = "function" == typeof s ? s(O) : s;
                    return u.createElement(k, f({}, b, {
                        "aria-current": j,
                        className: r,
                        ref: t,
                        style: U,
                        to: c,
                        viewTransition: v
                    }), "function" == typeof y ? y(O) : y)
                });
            (n = l || (l = {})).UseScrollRestoration = "useScrollRestoration", n.UseSubmit = "useSubmit", n.UseSubmitFetcher = "useSubmitFetcher", n.UseFetcher = "useFetcher", n.useViewTransitionState = "useViewTransitionState", (a = s || (s = {})).UseFetcher = "useFetcher", a.UseFetchers = "useFetchers", a.UseScrollRestoration = "useScrollRestoration"
        },
        47767(e, t, r) {
            r.d(t, {
                $P: () => m,
                Eu: () => function e(t, r) {
                    void 0 === r && (r = []);
                    let n = [];
                    return l.Children.forEach(t, (t, a) => {
                        if (!l.isValidElement(t)) return;
                        let o = [...r, a];
                        if (t.type === l.Fragment) return void n.push.apply(n, e(t.props.children, o));
                        t.type !== z && (0, s.Oi)(!1), t.props.index && t.props.children && (0, s.Oi)(!1);
                        let i = {
                            id: t.props.id || o.join("-"),
                            caseSensitive: t.props.caseSensitive,
                            element: t.props.element,
                            Component: t.props.Component,
                            index: t.props.index,
                            path: t.props.path,
                            loader: t.props.loader,
                            action: t.props.action,
                            errorElement: t.props.errorElement,
                            ErrorBoundary: t.props.ErrorBoundary,
                            hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
                            shouldRevalidate: t.props.shouldRevalidate,
                            handle: t.props.handle,
                            lazy: t.props.lazy
                        };
                        t.props.children && (i.children = e(t.props.children, o)), n.push(i)
                    }), n
                },
                Ix: () => F,
                KP: () => O,
                Rq: () => d,
                V8: () => A,
                Zp: () => w,
                jb: () => h,
                ph: () => R,
                qh: () => z,
                sp: () => c,
                sv: () => B,
                wE: () => I,
                x$: () => x,
                zy: () => g
            });
            var n, a, o, i, l = r(96540),
                s = r(45588);

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            let c = l.createContext(null),
                d = l.createContext(null),
                h = l.createContext(null),
                f = l.createContext(null),
                p = l.createContext({
                    outlet: null,
                    matches: [],
                    isDataRoute: !1
                }),
                v = l.createContext(null);

            function m(e, t) {
                let {
                    relative: r
                } = void 0 === t ? {} : t;
                y() || (0, s.Oi)(!1);
                let {
                    basename: n,
                    navigator: a
                } = l.useContext(h), {
                    hash: o,
                    pathname: i,
                    search: u
                } = x(e, {
                    relative: r
                }), c = i;
                return "/" !== n && (c = "/" === i ? n : (0, s.HS)([n, i])), a.createHref({
                    pathname: c,
                    search: u,
                    hash: o
                })
            }

            function y() {
                return null != l.useContext(f)
            }

            function g() {
                return y() || (0, s.Oi)(!1), l.useContext(f).location
            }

            function b(e) {
                l.useContext(h).static || l.useLayoutEffect(e)
            }

            function w() {
                let {
                    isDataRoute: e
                } = l.useContext(p);
                return e ? function() {
                    let {
                        router: e
                    } = L(P.UseNavigateStable), t = _(k.UseNavigateStable), r = l.useRef(!1);
                    return b(() => {
                        r.current = !0
                    }), l.useCallback(function(n, a) {
                        void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, u({
                            fromRouteId: t
                        }, a)))
                    }, [e, t])
                }() : function() {
                    y() || (0, s.Oi)(!1);
                    let e = l.useContext(c),
                        {
                            basename: t,
                            future: r,
                            navigator: n
                        } = l.useContext(h),
                        {
                            matches: a
                        } = l.useContext(p),
                        {
                            pathname: o
                        } = g(),
                        i = JSON.stringify((0, s.yD)(a, r.v7_relativeSplatPath)),
                        u = l.useRef(!1);
                    return b(() => {
                        u.current = !0
                    }), l.useCallback(function(r, a) {
                        if (void 0 === a && (a = {}), !u.current) return;
                        if ("number" == typeof r) return void n.go(r);
                        let l = (0, s.Gh)(r, JSON.parse(i), o, "path" === a.relative);
                        null == e && "/" !== t && (l.pathname = "/" === l.pathname ? t : (0, s.HS)([t, l.pathname])), (a.replace ? n.replace : n.push)(l, a.state, a)
                    }, [t, n, i, o, e])
                }()
            }
            let E = l.createContext(null);

            function x(e, t) {
                let {
                    relative: r
                } = void 0 === t ? {} : t, {
                    future: n
                } = l.useContext(h), {
                    matches: a
                } = l.useContext(p), {
                    pathname: o
                } = g(), i = JSON.stringify((0, s.yD)(a, n.v7_relativeSplatPath));
                return l.useMemo(() => (0, s.Gh)(e, JSON.parse(i), o, "path" === r), [e, i, o, r])
            }

            function R(e, t, r, n) {
                let a;
                y() || (0, s.Oi)(!1);
                let {
                    navigator: o
                } = l.useContext(h), {
                    matches: i
                } = l.useContext(p), c = i[i.length - 1], d = c ? c.params : {};
                c && c.pathname;
                let v = c ? c.pathnameBase : "/";
                c && c.route;
                let m = g();
                if (t) {
                    var b;
                    let e = "string" == typeof t ? (0, s.Rr)(t) : t;
                    "/" === v || (null == (b = e.pathname) ? void 0 : b.startsWith(v)) || (0, s.Oi)(!1), a = e
                } else a = m;
                let w = a.pathname || "/",
                    E = w;
                if ("/" !== v) {
                    let e = v.replace(/^\//, "").split("/");
                    E = "/" + w.replace(/^\//, "").split("/").slice(e.length).join("/")
                }
                let x = (0, s.ue)(e, {
                        pathname: E
                    }),
                    R = function(e, t, r, n) {
                        var a, o;
                        if (void 0 === t && (t = []), void 0 === r && (r = null), void 0 === n && (n = null), null == e) {
                            if (!r) return null;
                            if (r.errors) e = r.matches;
                            else {
                                if (null == (o = n) || !o.v7_partialHydration || 0 !== t.length || r.initialized || !(r.matches.length > 0)) return null;
                                e = r.matches
                            }
                        }
                        let i = e,
                            u = null == (a = r) ? void 0 : a.errors;
                        if (null != u) {
                            let e = i.findIndex(e => e.route.id && (null == u ? void 0 : u[e.route.id]) !== void 0);
                            e >= 0 || (0, s.Oi)(!1), i = i.slice(0, Math.min(i.length, e + 1))
                        }
                        let c = !1,
                            d = -1;
                        if (r && n && n.v7_partialHydration)
                            for (let e = 0; e < i.length; e++) {
                                let t = i[e];
                                if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (d = e), t.route.id) {
                                    let {
                                        loaderData: e,
                                        errors: n
                                    } = r, a = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
                                    if (t.route.lazy || a) {
                                        c = !0, i = d >= 0 ? i.slice(0, d + 1) : [i[0]];
                                        break
                                    }
                                }
                            }
                        return i.reduceRight((e, n, a) => {
                            var o;
                            let s, h = !1,
                                f = null,
                                p = null;
                            r && (s = u && n.route.id ? u[n.route.id] : void 0, f = n.route.errorElement || S, c && (d < 0 && 0 === a ? (o = "route-fallback", j[o] || (j[o] = !0), h = !0, p = null) : d === a && (h = !0, p = n.route.hydrateFallbackElement || null)));
                            let v = t.concat(i.slice(0, a + 1)),
                                m = () => {
                                    let t;
                                    return t = s ? f : h ? p : n.route.Component ? l.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, l.createElement(C, {
                                        match: n,
                                        routeContext: {
                                            outlet: e,
                                            matches: v,
                                            isDataRoute: null != r
                                        },
                                        children: t
                                    })
                                };
                            return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === a) ? l.createElement(D, {
                                location: r.location,
                                revalidation: r.revalidation,
                                component: f,
                                error: s,
                                children: m(),
                                routeContext: {
                                    outlet: null,
                                    matches: v,
                                    isDataRoute: !0
                                }
                            }) : m()
                        }, null)
                    }(x && x.map(e => Object.assign({}, e, {
                        params: Object.assign({}, d, e.params),
                        pathname: (0, s.HS)([v, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
                        pathnameBase: "/" === e.pathnameBase ? v : (0, s.HS)([v, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                    })), i, r, n);
                return t && R ? l.createElement(f.Provider, {
                    value: {
                        location: u({
                            pathname: "/",
                            search: "",
                            hash: "",
                            state: null,
                            key: "default"
                        }, a),
                        navigationType: s.rc.Pop
                    }
                }, R) : R
            }
            let S = l.createElement(function() {
                var e;
                let t, r, n, a = (t = l.useContext(v), r = T(k.UseRouteError), n = _(k.UseRouteError), void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n]),
                    o = (0, s.pX)(a) ? a.status + " " + a.statusText : a instanceof Error ? a.message : JSON.stringify(a),
                    i = a instanceof Error ? a.stack : null;
                return l.createElement(l.Fragment, null, l.createElement("h2", null, "Unexpected Application Error!"), l.createElement("h3", {
                    style: {
                        fontStyle: "italic"
                    }
                }, o), i ? l.createElement("pre", {
                    style: {
                        padding: "0.5rem",
                        backgroundColor: "rgba(200,200,200, 0.5)"
                    }
                }, i) : null, null)
            }, null);
            class D extends l.Component {
                constructor(e) {
                    super(e), this.state = {
                        location: e.location,
                        revalidation: e.revalidation,
                        error: e.error
                    }
                }
                static getDerivedStateFromError(e) {
                    return {
                        error: e
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                        error: e.error,
                        location: e.location,
                        revalidation: e.revalidation
                    } : {
                        error: void 0 !== e.error ? e.error : t.error,
                        location: t.location,
                        revalidation: e.revalidation || t.revalidation
                    }
                }
                componentDidCatch(e, t) {
                    console.error("React Router caught the following error during render", e, t)
                }
                render() {
                    return void 0 !== this.state.error ? l.createElement(p.Provider, {
                        value: this.props.routeContext
                    }, l.createElement(v.Provider, {
                        value: this.state.error,
                        children: this.props.component
                    })) : this.props.children
                }
            }

            function C(e) {
                let {
                    routeContext: t,
                    match: r,
                    children: n
                } = e, a = l.useContext(c);
                return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), l.createElement(p.Provider, {
                    value: t
                }, n)
            }
            var P = ((n = P || {}).UseBlocker = "useBlocker", n.UseRevalidator = "useRevalidator", n.UseNavigateStable = "useNavigate", n),
                k = ((a = k || {}).UseBlocker = "useBlocker", a.UseLoaderData = "useLoaderData", a.UseActionData = "useActionData", a.UseRouteError = "useRouteError", a.UseNavigation = "useNavigation", a.UseRouteLoaderData = "useRouteLoaderData", a.UseMatches = "useMatches", a.UseRevalidator = "useRevalidator", a.UseNavigateStable = "useNavigate", a.UseRouteId = "useRouteId", a);

            function L(e) {
                let t = l.useContext(c);
                return t || (0, s.Oi)(!1), t
            }

            function T(e) {
                let t = l.useContext(d);
                return t || (0, s.Oi)(!1), t
            }

            function _(e) {
                let t, r = ((t = l.useContext(p)) || (0, s.Oi)(!1), t),
                    n = r.matches[r.matches.length - 1];
                return n.route.id || (0, s.Oi)(!1), n.route.id
            }
            let M = 0;

            function O(e) {
                let {
                    router: t,
                    basename: r
                } = L(P.UseBlocker), n = T(k.UseBlocker), [a, o] = l.useState(""), i = l.useCallback(t => {
                    if ("function" != typeof e) return !!e;
                    if ("/" === r) return e(t);
                    let {
                        currentLocation: n,
                        nextLocation: a,
                        historyAction: o
                    } = t;
                    return e({
                        currentLocation: u({}, n, {
                            pathname: (0, s.pb)(n.pathname, r) || n.pathname
                        }),
                        nextLocation: u({}, a, {
                            pathname: (0, s.pb)(a.pathname, r) || a.pathname
                        }),
                        historyAction: o
                    })
                }, [r, e]);
                return l.useEffect(() => {
                    let e = String(++M);
                    return o(e), () => t.deleteBlocker(e)
                }, [t]), l.useEffect(() => {
                    "" !== a && t.getBlocker(a, i)
                }, [t, a, i]), a && n.blockers.has(a) ? n.blockers.get(a) : s.G3
            }
            let j = {},
                U = (e, t, r) => {};

            function A(e, t) {
                (null == e ? void 0 : e.v7_startTransition) === void 0 && U("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (null == e ? void 0 : e.v7_relativeSplatPath) !== void 0 || t && void 0 !== t.v7_relativeSplatPath || U("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"), t && (void 0 === t.v7_fetcherPersist && U("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"), void 0 === t.v7_normalizeFormMethod && U("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"), void 0 === t.v7_partialHydration && U("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"), void 0 === t.v7_skipActionErrorRevalidation && U("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))
            }

            function B(e) {
                var t;
                let r;
                return t = e.context, (r = l.useContext(p).outlet) ? l.createElement(E.Provider, {
                    value: t
                }, r) : r
            }

            function z(e) {
                (0, s.Oi)(!1)
            }

            function F(e) {
                let {
                    basename: t = "/",
                    children: r = null,
                    location: n,
                    navigationType: a = s.rc.Pop,
                    navigator: o,
                    static: i = !1,
                    future: c
                } = e;
                y() && (0, s.Oi)(!1);
                let d = t.replace(/^\/*/, "/"),
                    p = l.useMemo(() => ({
                        basename: d,
                        navigator: o,
                        static: i,
                        future: u({
                            v7_relativeSplatPath: !1
                        }, c)
                    }), [d, c, o, i]);
                "string" == typeof n && (n = (0, s.Rr)(n));
                let {
                    pathname: v = "/",
                    search: m = "",
                    hash: g = "",
                    state: b = null,
                    key: w = "default"
                } = n, E = l.useMemo(() => {
                    let e = (0, s.pb)(v, d);
                    return null == e ? null : {
                        location: {
                            pathname: e,
                            search: m,
                            hash: g,
                            state: b,
                            key: w
                        },
                        navigationType: a
                    }
                }, [d, v, m, g, b, w, a]);
                return null == E ? null : l.createElement(h.Provider, {
                    value: p
                }, l.createElement(f.Provider, {
                    children: r,
                    value: E
                }))
            }(i || (i = r.t(l, 2))).startTransition;
            var H = ((o = H || {})[o.pending = 0] = "pending", o[o.success = 1] = "success", o[o.error = 2] = "error", o);

            function I(e) {
                let t = {
                    hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
                };
                return e.Component && Object.assign(t, {
                    element: l.createElement(e.Component),
                    Component: void 0
                }), e.HydrateFallback && Object.assign(t, {
                    hydrateFallbackElement: l.createElement(e.HydrateFallback),
                    HydrateFallback: void 0
                }), e.ErrorBoundary && Object.assign(t, {
                    errorElement: l.createElement(e.ErrorBoundary),
                    ErrorBoundary: void 0
                }), t
            }
            new Promise(() => {}), l.Component
        }
    }
]);