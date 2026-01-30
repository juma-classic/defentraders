(function() {
    const W = document.createElement("link").relList;
    if (W && W.supports && W.supports("modulepreload")) return;
    for (const K of document.querySelectorAll('link[rel="modulepreload"]')) d(K);
    new MutationObserver(K => {
        for (const C of K)
            if (C.type === "childList")
                for (const pl of C.addedNodes) pl.tagName === "LINK" && pl.rel === "modulepreload" && d(pl)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function el(K) {
        const C = {};
        return K.integrity && (C.integrity = K.integrity), K.referrerPolicy && (C.referrerPolicy = K.referrerPolicy), K.crossOrigin === "use-credentials" ? C.credentials = "include" : K.crossOrigin === "anonymous" ? C.credentials = "omit" : C.credentials = "same-origin", C
    }

    function d(K) {
        if (K.ep) return;
        K.ep = !0;
        const C = el(K);
        fetch(K.href, C)
    }
})();
var xf = {
        exports: {}
    },
    nn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0;

function My() {
    if (h0) return nn;
    h0 = 1;
    var O = Symbol.for("react.transitional.element"),
        W = Symbol.for("react.fragment");

    function el(d, K, C) {
        var pl = null;
        if (C !== void 0 && (pl = "" + C), K.key !== void 0 && (pl = "" + K.key), "key" in K) {
            C = {};
            for (var Cl in K) Cl !== "key" && (C[Cl] = K[Cl])
        } else C = K;
        return K = C.ref, {
            $$typeof: O,
            type: d,
            key: pl,
            ref: K !== void 0 ? K : null,
            props: C
        }
    }
    return nn.Fragment = W, nn.jsx = el, nn.jsxs = el, nn
}
var m0;

function xy() {
    return m0 || (m0 = 1, xf.exports = My()), xf.exports
}
var A = xy(),
    Uf = {
        exports: {}
    },
    k = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0;

function Uy() {
    if (g0) return k;
    g0 = 1;
    var O = Symbol.for("react.transitional.element"),
        W = Symbol.for("react.portal"),
        el = Symbol.for("react.fragment"),
        d = Symbol.for("react.strict_mode"),
        K = Symbol.for("react.profiler"),
        C = Symbol.for("react.consumer"),
        pl = Symbol.for("react.context"),
        Cl = Symbol.for("react.forward_ref"),
        j = Symbol.for("react.suspense"),
        T = Symbol.for("react.memo"),
        H = Symbol.for("react.lazy"),
        ul = Symbol.iterator;

    function P(s) {
        return s === null || typeof s != "object" ? null : (s = ul && s[ul] || s["@@iterator"], typeof s == "function" ? s : null)
    }
    var Rl = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        jl = Object.assign,
        Gl = {};

    function ql(s, E, M) {
        this.props = s, this.context = E, this.refs = Gl, this.updater = M || Rl
    }
    ql.prototype.isReactComponent = {}, ql.prototype.setState = function(s, E) {
        if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, E, "setState")
    }, ql.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate")
    };

    function xl() {}
    xl.prototype = ql.prototype;

    function Jl(s, E, M) {
        this.props = s, this.context = E, this.refs = Gl, this.updater = M || Rl
    }
    var Ul = Jl.prototype = new xl;
    Ul.constructor = Jl, jl(Ul, ql.prototype), Ul.isPureReactComponent = !0;
    var kl = Array.isArray,
        J = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        Xl = Object.prototype.hasOwnProperty;

    function Al(s, E, M, z, B, il) {
        return M = il.ref, {
            $$typeof: O,
            type: s,
            key: E,
            ref: M !== void 0 ? M : null,
            props: il
        }
    }

    function Z(s, E) {
        return Al(s.type, E, void 0, void 0, void 0, s.props)
    }

    function dl(s) {
        return typeof s == "object" && s !== null && s.$$typeof === O
    }

    function $(s) {
        var E = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + s.replace(/[=:]/g, function(M) {
            return E[M]
        })
    }
    var ll = /\/+/g;

    function V(s, E) {
        return typeof s == "object" && s !== null && s.key != null ? $("" + s.key) : E.toString(36)
    }

    function zl() {}

    function ml(s) {
        switch (s.status) {
            case "fulfilled":
                return s.value;
            case "rejected":
                throw s.reason;
            default:
                switch (typeof s.status == "string" ? s.then(zl, zl) : (s.status = "pending", s.then(function(E) {
                    s.status === "pending" && (s.status = "fulfilled", s.value = E)
                }, function(E) {
                    s.status === "pending" && (s.status = "rejected", s.reason = E)
                })), s.status) {
                    case "fulfilled":
                        return s.value;
                    case "rejected":
                        throw s.reason
                }
        }
        throw s
    }

    function F(s, E, M, z, B) {
        var il = typeof s;
        (il === "undefined" || il === "boolean") && (s = null);
        var Y = !1;
        if (s === null) Y = !0;
        else switch (il) {
            case "bigint":
            case "string":
            case "number":
                Y = !0;
                break;
            case "object":
                switch (s.$$typeof) {
                    case O:
                    case W:
                        Y = !0;
                        break;
                    case H:
                        return Y = s._init, F(Y(s._payload), E, M, z, B)
                }
        }
        if (Y) return B = B(s), Y = z === "" ? "." + V(s, 0) : z, kl(B) ? (M = "", Y != null && (M = Y.replace(ll, "$&/") + "/"), F(B, E, M, "", function(Qt) {
            return Qt
        })) : B != null && (dl(B) && (B = Z(B, M + (B.key == null || s && s.key === B.key ? "" : ("" + B.key).replace(ll, "$&/") + "/") + Y)), E.push(B)), 1;
        Y = 0;
        var ut = z === "" ? "." : z + ":";
        if (kl(s))
            for (var _l = 0; _l < s.length; _l++) z = s[_l], il = ut + V(z, _l), Y += F(z, E, M, il, B);
        else if (_l = P(s), typeof _l == "function")
            for (s = _l.call(s), _l = 0; !(z = s.next()).done;) z = z.value, il = ut + V(z, _l++), Y += F(z, E, M, il, B);
        else if (il === "object") {
            if (typeof s.then == "function") return F(ml(s), E, M, z, B);
            throw E = String(s), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Y
    }

    function g(s, E, M) {
        if (s == null) return s;
        var z = [],
            B = 0;
        return F(s, z, "", "", function(il) {
            return E.call(M, il, B++)
        }), z
    }

    function D(s) {
        if (s._status === -1) {
            var E = s._result;
            E = E(), E.then(function(M) {
                (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M)
            }, function(M) {
                (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M)
            }), s._status === -1 && (s._status = 0, s._result = E)
        }
        if (s._status === 1) return s._result.default;
        throw s._result
    }
    var _ = typeof reportError == "function" ? reportError : function(s) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var E = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
                error: s
            });
            if (!window.dispatchEvent(E)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", s);
            return
        }
        console.error(s)
    };

    function w() {}
    return k.Children = {
        map: g,
        forEach: function(s, E, M) {
            g(s, function() {
                E.apply(this, arguments)
            }, M)
        },
        count: function(s) {
            var E = 0;
            return g(s, function() {
                E++
            }), E
        },
        toArray: function(s) {
            return g(s, function(E) {
                return E
            }) || []
        },
        only: function(s) {
            if (!dl(s)) throw Error("React.Children.only expected to receive a single React element child.");
            return s
        }
    }, k.Component = ql, k.Fragment = el, k.Profiler = K, k.PureComponent = Jl, k.StrictMode = d, k.Suspense = j, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, k.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(s) {
            return J.H.useMemoCache(s)
        }
    }, k.cache = function(s) {
        return function() {
            return s.apply(null, arguments)
        }
    }, k.cloneElement = function(s, E, M) {
        if (s == null) throw Error("The argument must be a React element, but you passed " + s + ".");
        var z = jl({}, s.props),
            B = s.key,
            il = void 0;
        if (E != null)
            for (Y in E.ref !== void 0 && (il = void 0), E.key !== void 0 && (B = "" + E.key), E) !Xl.call(E, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && E.ref === void 0 || (z[Y] = E[Y]);
        var Y = arguments.length - 2;
        if (Y === 1) z.children = M;
        else if (1 < Y) {
            for (var ut = Array(Y), _l = 0; _l < Y; _l++) ut[_l] = arguments[_l + 2];
            z.children = ut
        }
        return Al(s.type, B, void 0, void 0, il, z)
    }, k.createContext = function(s) {
        return s = {
            $$typeof: pl,
            _currentValue: s,
            _currentValue2: s,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, s.Provider = s, s.Consumer = {
            $$typeof: C,
            _context: s
        }, s
    }, k.createElement = function(s, E, M) {
        var z, B = {},
            il = null;
        if (E != null)
            for (z in E.key !== void 0 && (il = "" + E.key), E) Xl.call(E, z) && z !== "key" && z !== "__self" && z !== "__source" && (B[z] = E[z]);
        var Y = arguments.length - 2;
        if (Y === 1) B.children = M;
        else if (1 < Y) {
            for (var ut = Array(Y), _l = 0; _l < Y; _l++) ut[_l] = arguments[_l + 2];
            B.children = ut
        }
        if (s && s.defaultProps)
            for (z in Y = s.defaultProps, Y) B[z] === void 0 && (B[z] = Y[z]);
        return Al(s, il, void 0, void 0, null, B)
    }, k.createRef = function() {
        return {
            current: null
        }
    }, k.forwardRef = function(s) {
        return {
            $$typeof: Cl,
            render: s
        }
    }, k.isValidElement = dl, k.lazy = function(s) {
        return {
            $$typeof: H,
            _payload: {
                _status: -1,
                _result: s
            },
            _init: D
        }
    }, k.memo = function(s, E) {
        return {
            $$typeof: T,
            type: s,
            compare: E === void 0 ? null : E
        }
    }, k.startTransition = function(s) {
        var E = J.T,
            M = {};
        J.T = M;
        try {
            var z = s(),
                B = J.S;
            B !== null && B(M, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(w, _)
        } catch (il) {
            _(il)
        } finally {
            J.T = E
        }
    }, k.unstable_useCacheRefresh = function() {
        return J.H.useCacheRefresh()
    }, k.use = function(s) {
        return J.H.use(s)
    }, k.useActionState = function(s, E, M) {
        return J.H.useActionState(s, E, M)
    }, k.useCallback = function(s, E) {
        return J.H.useCallback(s, E)
    }, k.useContext = function(s) {
        return J.H.useContext(s)
    }, k.useDebugValue = function() {}, k.useDeferredValue = function(s, E) {
        return J.H.useDeferredValue(s, E)
    }, k.useEffect = function(s, E, M) {
        var z = J.H;
        if (typeof M == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return z.useEffect(s, E)
    }, k.useId = function() {
        return J.H.useId()
    }, k.useImperativeHandle = function(s, E, M) {
        return J.H.useImperativeHandle(s, E, M)
    }, k.useInsertionEffect = function(s, E) {
        return J.H.useInsertionEffect(s, E)
    }, k.useLayoutEffect = function(s, E) {
        return J.H.useLayoutEffect(s, E)
    }, k.useMemo = function(s, E) {
        return J.H.useMemo(s, E)
    }, k.useOptimistic = function(s, E) {
        return J.H.useOptimistic(s, E)
    }, k.useReducer = function(s, E, M) {
        return J.H.useReducer(s, E, M)
    }, k.useRef = function(s) {
        return J.H.useRef(s)
    }, k.useState = function(s) {
        return J.H.useState(s)
    }, k.useSyncExternalStore = function(s, E, M) {
        return J.H.useSyncExternalStore(s, E, M)
    }, k.useTransition = function() {
        return J.H.useTransition()
    }, k.version = "19.1.0", k
}
var S0;

function Bf() {
    return S0 || (S0 = 1, Uf.exports = Uy()), Uf.exports
}
var R = Bf(),
    Nf = {
        exports: {}
    },
    cn = {},
    Hf = {
        exports: {}
    },
    jf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b0;

function Ny() {
    return b0 || (b0 = 1, function(O) {
        function W(g, D) {
            var _ = g.length;
            g.push(D);
            l: for (; 0 < _;) {
                var w = _ - 1 >>> 1,
                    s = g[w];
                if (0 < K(s, D)) g[w] = D, g[_] = s, _ = w;
                else break l
            }
        }

        function el(g) {
            return g.length === 0 ? null : g[0]
        }

        function d(g) {
            if (g.length === 0) return null;
            var D = g[0],
                _ = g.pop();
            if (_ !== D) {
                g[0] = _;
                l: for (var w = 0, s = g.length, E = s >>> 1; w < E;) {
                    var M = 2 * (w + 1) - 1,
                        z = g[M],
                        B = M + 1,
                        il = g[B];
                    if (0 > K(z, _)) B < s && 0 > K(il, z) ? (g[w] = il, g[B] = _, w = B) : (g[w] = z, g[M] = _, w = M);
                    else if (B < s && 0 > K(il, _)) g[w] = il, g[B] = _, w = B;
                    else break l
                }
            }
            return D
        }

        function K(g, D) {
            var _ = g.sortIndex - D.sortIndex;
            return _ !== 0 ? _ : g.id - D.id
        }
        if (O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var C = performance;
            O.unstable_now = function() {
                return C.now()
            }
        } else {
            var pl = Date,
                Cl = pl.now();
            O.unstable_now = function() {
                return pl.now() - Cl
            }
        }
        var j = [],
            T = [],
            H = 1,
            ul = null,
            P = 3,
            Rl = !1,
            jl = !1,
            Gl = !1,
            ql = !1,
            xl = typeof setTimeout == "function" ? setTimeout : null,
            Jl = typeof clearTimeout == "function" ? clearTimeout : null,
            Ul = typeof setImmediate < "u" ? setImmediate : null;

        function kl(g) {
            for (var D = el(T); D !== null;) {
                if (D.callback === null) d(T);
                else if (D.startTime <= g) d(T), D.sortIndex = D.expirationTime, W(j, D);
                else break;
                D = el(T)
            }
        }

        function J(g) {
            if (Gl = !1, kl(g), !jl)
                if (el(j) !== null) jl = !0, Xl || (Xl = !0, V());
                else {
                    var D = el(T);
                    D !== null && F(J, D.startTime - g)
                }
        }
        var Xl = !1,
            Al = -1,
            Z = 5,
            dl = -1;

        function $() {
            return ql ? !0 : !(O.unstable_now() - dl < Z)
        }

        function ll() {
            if (ql = !1, Xl) {
                var g = O.unstable_now();
                dl = g;
                var D = !0;
                try {
                    l: {
                        jl = !1,
                        Gl && (Gl = !1, Jl(Al), Al = -1),
                        Rl = !0;
                        var _ = P;
                        try {
                            t: {
                                for (kl(g), ul = el(j); ul !== null && !(ul.expirationTime > g && $());) {
                                    var w = ul.callback;
                                    if (typeof w == "function") {
                                        ul.callback = null, P = ul.priorityLevel;
                                        var s = w(ul.expirationTime <= g);
                                        if (g = O.unstable_now(), typeof s == "function") {
                                            ul.callback = s, kl(g), D = !0;
                                            break t
                                        }
                                        ul === el(j) && d(j), kl(g)
                                    } else d(j);
                                    ul = el(j)
                                }
                                if (ul !== null) D = !0;
                                else {
                                    var E = el(T);
                                    E !== null && F(J, E.startTime - g), D = !1
                                }
                            }
                            break l
                        }
                        finally {
                            ul = null, P = _, Rl = !1
                        }
                        D = void 0
                    }
                }
                finally {
                    D ? V() : Xl = !1
                }
            }
        }
        var V;
        if (typeof Ul == "function") V = function() {
            Ul(ll)
        };
        else if (typeof MessageChannel < "u") {
            var zl = new MessageChannel,
                ml = zl.port2;
            zl.port1.onmessage = ll, V = function() {
                ml.postMessage(null)
            }
        } else V = function() {
            xl(ll, 0)
        };

        function F(g, D) {
            Al = xl(function() {
                g(O.unstable_now())
            }, D)
        }
        O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(g) {
            g.callback = null
        }, O.unstable_forceFrameRate = function(g) {
            0 > g || 125 < g ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < g ? Math.floor(1e3 / g) : 5
        }, O.unstable_getCurrentPriorityLevel = function() {
            return P
        }, O.unstable_next = function(g) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                    var D = 3;
                    break;
                default:
                    D = P
            }
            var _ = P;
            P = D;
            try {
                return g()
            } finally {
                P = _
            }
        }, O.unstable_requestPaint = function() {
            ql = !0
        }, O.unstable_runWithPriority = function(g, D) {
            switch (g) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    g = 3
            }
            var _ = P;
            P = g;
            try {
                return D()
            } finally {
                P = _
            }
        }, O.unstable_scheduleCallback = function(g, D, _) {
            var w = O.unstable_now();
            switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? w + _ : w) : _ = w, g) {
                case 1:
                    var s = -1;
                    break;
                case 2:
                    s = 250;
                    break;
                case 5:
                    s = 1073741823;
                    break;
                case 4:
                    s = 1e4;
                    break;
                default:
                    s = 5e3
            }
            return s = _ + s, g = {
                id: H++,
                callback: D,
                priorityLevel: g,
                startTime: _,
                expirationTime: s,
                sortIndex: -1
            }, _ > w ? (g.sortIndex = _, W(T, g), el(j) === null && g === el(T) && (Gl ? (Jl(Al), Al = -1) : Gl = !0, F(J, _ - w))) : (g.sortIndex = s, W(j, g), jl || Rl || (jl = !0, Xl || (Xl = !0, V()))), g
        }, O.unstable_shouldYield = $, O.unstable_wrapCallback = function(g) {
            var D = P;
            return function() {
                var _ = P;
                P = D;
                try {
                    return g.apply(this, arguments)
                } finally {
                    P = _
                }
            }
        }
    }(jf)), jf
}
var p0;

function Hy() {
    return p0 || (p0 = 1, Hf.exports = Ny()), Hf.exports
}
var qf = {
        exports: {}
    },
    dt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T0;

function jy() {
    if (T0) return dt;
    T0 = 1;
    var O = Bf();

    function W(j) {
        var T = "https://react.dev/errors/" + j;
        if (1 < arguments.length) {
            T += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var H = 2; H < arguments.length; H++) T += "&args[]=" + encodeURIComponent(arguments[H])
        }
        return "Minified React error #" + j + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function el() {}
    var d = {
            d: {
                f: el,
                r: function() {
                    throw Error(W(522))
                },
                D: el,
                C: el,
                L: el,
                m: el,
                X: el,
                S: el,
                M: el
            },
            p: 0,
            findDOMNode: null
        },
        K = Symbol.for("react.portal");

    function C(j, T, H) {
        var ul = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: K,
            key: ul == null ? null : "" + ul,
            children: j,
            containerInfo: T,
            implementation: H
        }
    }
    var pl = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function Cl(j, T) {
        if (j === "font") return "";
        if (typeof T == "string") return T === "use-credentials" ? T : ""
    }
    return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, dt.createPortal = function(j, T) {
        var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(W(299));
        return C(j, T, null, H)
    }, dt.flushSync = function(j) {
        var T = pl.T,
            H = d.p;
        try {
            if (pl.T = null, d.p = 2, j) return j()
        } finally {
            pl.T = T, d.p = H, d.d.f()
        }
    }, dt.preconnect = function(j, T) {
        typeof j == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, d.d.C(j, T))
    }, dt.prefetchDNS = function(j) {
        typeof j == "string" && d.d.D(j)
    }, dt.preinit = function(j, T) {
        if (typeof j == "string" && T && typeof T.as == "string") {
            var H = T.as,
                ul = Cl(H, T.crossOrigin),
                P = typeof T.integrity == "string" ? T.integrity : void 0,
                Rl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
            H === "style" ? d.d.S(j, typeof T.precedence == "string" ? T.precedence : void 0, {
                crossOrigin: ul,
                integrity: P,
                fetchPriority: Rl
            }) : H === "script" && d.d.X(j, {
                crossOrigin: ul,
                integrity: P,
                fetchPriority: Rl,
                nonce: typeof T.nonce == "string" ? T.nonce : void 0
            })
        }
    }, dt.preinitModule = function(j, T) {
        if (typeof j == "string")
            if (typeof T == "object" && T !== null) {
                if (T.as == null || T.as === "script") {
                    var H = Cl(T.as, T.crossOrigin);
                    d.d.M(j, {
                        crossOrigin: H,
                        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
                        nonce: typeof T.nonce == "string" ? T.nonce : void 0
                    })
                }
            } else T == null && d.d.M(j)
    }, dt.preload = function(j, T) {
        if (typeof j == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
            var H = T.as,
                ul = Cl(H, T.crossOrigin);
            d.d.L(j, H, {
                crossOrigin: ul,
                integrity: typeof T.integrity == "string" ? T.integrity : void 0,
                nonce: typeof T.nonce == "string" ? T.nonce : void 0,
                type: typeof T.type == "string" ? T.type : void 0,
                fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
                referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
                imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
                imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
                media: typeof T.media == "string" ? T.media : void 0
            })
        }
    }, dt.preloadModule = function(j, T) {
        if (typeof j == "string")
            if (T) {
                var H = Cl(T.as, T.crossOrigin);
                d.d.m(j, {
                    as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
                    crossOrigin: H,
                    integrity: typeof T.integrity == "string" ? T.integrity : void 0
                })
            } else d.d.m(j)
    }, dt.requestFormReset = function(j) {
        d.d.r(j)
    }, dt.unstable_batchedUpdates = function(j, T) {
        return j(T)
    }, dt.useFormState = function(j, T, H) {
        return pl.H.useFormState(j, T, H)
    }, dt.useFormStatus = function() {
        return pl.H.useHostTransitionStatus()
    }, dt.version = "19.1.0", dt
}
var E0;

function qy() {
    if (E0) return qf.exports;
    E0 = 1;

    function O() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)
        } catch (W) {
            console.error(W)
        }
    }
    return O(), qf.exports = jy(), qf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A0;

function By() {
    if (A0) return cn;
    A0 = 1;
    var O = Hy(),
        W = Bf(),
        el = qy();

    function d(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function K(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }

    function C(l) {
        var t = l,
            e = l;
        if (l.alternate)
            for (; t.return;) t = t.return;
        else {
            l = t;
            do t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return; while (l)
        }
        return t.tag === 3 ? e : null
    }

    function pl(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function Cl(l) {
        if (C(l) !== l) throw Error(d(188))
    }

    function j(l) {
        var t = l.alternate;
        if (!t) {
            if (t = C(l), t === null) throw Error(d(188));
            return t !== l ? null : l
        }
        for (var e = l, u = t;;) {
            var a = e.return;
            if (a === null) break;
            var n = a.alternate;
            if (n === null) {
                if (u = a.return, u !== null) {
                    e = u;
                    continue
                }
                break
            }
            if (a.child === n.child) {
                for (n = a.child; n;) {
                    if (n === e) return Cl(a), l;
                    if (n === u) return Cl(a), t;
                    n = n.sibling
                }
                throw Error(d(188))
            }
            if (e.return !== u.return) e = a, u = n;
            else {
                for (var c = !1, i = a.child; i;) {
                    if (i === e) {
                        c = !0, e = a, u = n;
                        break
                    }
                    if (i === u) {
                        c = !0, u = a, e = n;
                        break
                    }
                    i = i.sibling
                }
                if (!c) {
                    for (i = n.child; i;) {
                        if (i === e) {
                            c = !0, e = n, u = a;
                            break
                        }
                        if (i === u) {
                            c = !0, u = n, e = a;
                            break
                        }
                        i = i.sibling
                    }
                    if (!c) throw Error(d(189))
                }
            }
            if (e.alternate !== u) throw Error(d(190))
        }
        if (e.tag !== 3) throw Error(d(188));
        return e.stateNode.current === e ? l : t
    }

    function T(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l;
        for (l = l.child; l !== null;) {
            if (t = T(l), t !== null) return t;
            l = l.sibling
        }
        return null
    }
    var H = Object.assign,
        ul = Symbol.for("react.element"),
        P = Symbol.for("react.transitional.element"),
        Rl = Symbol.for("react.portal"),
        jl = Symbol.for("react.fragment"),
        Gl = Symbol.for("react.strict_mode"),
        ql = Symbol.for("react.profiler"),
        xl = Symbol.for("react.provider"),
        Jl = Symbol.for("react.consumer"),
        Ul = Symbol.for("react.context"),
        kl = Symbol.for("react.forward_ref"),
        J = Symbol.for("react.suspense"),
        Xl = Symbol.for("react.suspense_list"),
        Al = Symbol.for("react.memo"),
        Z = Symbol.for("react.lazy"),
        dl = Symbol.for("react.activity"),
        $ = Symbol.for("react.memo_cache_sentinel"),
        ll = Symbol.iterator;

    function V(l) {
        return l === null || typeof l != "object" ? null : (l = ll && l[ll] || l["@@iterator"], typeof l == "function" ? l : null)
    }
    var zl = Symbol.for("react.client.reference");

    function ml(l) {
        if (l == null) return null;
        if (typeof l == "function") return l.$$typeof === zl ? null : l.displayName || l.name || null;
        if (typeof l == "string") return l;
        switch (l) {
            case jl:
                return "Fragment";
            case ql:
                return "Profiler";
            case Gl:
                return "StrictMode";
            case J:
                return "Suspense";
            case Xl:
                return "SuspenseList";
            case dl:
                return "Activity"
        }
        if (typeof l == "object") switch (l.$$typeof) {
            case Rl:
                return "Portal";
            case Ul:
                return (l.displayName || "Context") + ".Provider";
            case Jl:
                return (l._context.displayName || "Context") + ".Consumer";
            case kl:
                var t = l.render;
                return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
            case Al:
                return t = l.displayName || null, t !== null ? t : ml(l.type) || "Memo";
            case Z:
                t = l._payload, l = l._init;
                try {
                    return ml(l(t))
                } catch {}
        }
        return null
    }
    var F = Array.isArray,
        g = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        D = el.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        _ = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        w = [],
        s = -1;

    function E(l) {
        return {
            current: l
        }
    }

    function M(l) {
        0 > s || (l.current = w[s], w[s] = null, s--)
    }

    function z(l, t) {
        s++, w[s] = l.current, l.current = t
    }
    var B = E(null),
        il = E(null),
        Y = E(null),
        ut = E(null);

    function _l(l, t) {
        switch (z(Y, t), z(il, l), z(B, null), t.nodeType) {
            case 9:
            case 11:
                l = (l = t.documentElement) && (l = l.namespaceURI) ? Zo(l) : 0;
                break;
            default:
                if (l = t.tagName, t = t.namespaceURI) t = Zo(t), l = Vo(t, l);
                else switch (l) {
                    case "svg":
                        l = 1;
                        break;
                    case "math":
                        l = 2;
                        break;
                    default:
                        l = 0
                }
        }
        M(B), z(B, l)
    }

    function Qt() {
        M(B), M(il), M(Y)
    }

    function fn(l) {
        l.memoizedState !== null && z(ut, l);
        var t = B.current,
            e = Vo(t, l.type);
        t !== e && (z(il, l), z(B, e))
    }

    function Au(l) {
        il.current === l && (M(B), M(il)), ut.current === l && (M(ut), ln._currentValue = _)
    }
    var _u = Object.prototype.hasOwnProperty,
        _e = O.unstable_scheduleCallback,
        sa = O.unstable_cancelCallback,
        Du = O.unstable_shouldYield,
        bc = O.unstable_requestPaint,
        gt = O.unstable_now,
        pc = O.unstable_getCurrentPriorityLevel,
        ra = O.unstable_ImmediatePriority,
        Tc = O.unstable_UserBlockingPriority,
        De = O.unstable_NormalPriority,
        yt = O.unstable_LowPriority,
        Ec = O.unstable_IdlePriority,
        Ac = O.log,
        Yf = O.unstable_setDisableYieldValue,
        Ru = null,
        St = null;

    function ee(l) {
        if (typeof Ac == "function" && Yf(l), St && typeof St.setStrictMode == "function") try {
            St.setStrictMode(Ru, l)
        } catch {}
    }
    var bt = Math.clz32 ? Math.clz32 : oa,
        Cf = Math.log,
        _c = Math.LN2;

    function oa(l) {
        return l >>>= 0, l === 0 ? 32 : 31 - (Cf(l) / _c | 0) | 0
    }
    var zu = 256,
        tu = 4194304;

    function ue(l) {
        var t = l & 42;
        if (t !== 0) return t;
        switch (l & -l) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return l & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return l & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return l
        }
    }

    function eu(l, t, e) {
        var u = l.pendingLanes;
        if (u === 0) return 0;
        var a = 0,
            n = l.suspendedLanes,
            c = l.pingedLanes;
        l = l.warmLanes;
        var i = u & 134217727;
        return i !== 0 ? (u = i & ~n, u !== 0 ? a = ue(u) : (c &= i, c !== 0 ? a = ue(c) : e || (e = i & ~l, e !== 0 && (a = ue(e))))) : (i = u & ~n, i !== 0 ? a = ue(i) : c !== 0 ? a = ue(c) : e || (e = u & ~l, e !== 0 && (a = ue(e)))), a === 0 ? 0 : t !== 0 && t !== a && (t & n) === 0 && (n = a & -a, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : a
    }

    function Wt(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }

    function Lt(l, t) {
        switch (l) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function $t() {
        var l = zu;
        return zu <<= 1, (zu & 4194048) === 0 && (zu = 256), l
    }

    function Ou() {
        var l = tu;
        return tu <<= 1, (tu & 62914560) === 0 && (tu = 4194304), l
    }

    function Re(l) {
        for (var t = [], e = 0; 31 > e; e++) t.push(l);
        return t
    }

    function ae(l, t) {
        l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
    }

    function at(l, t, e, u, a, n) {
        var c = l.pendingLanes;
        l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
        var i = l.entanglements,
            f = l.expirationTimes,
            v = l.hiddenUpdates;
        for (e = c & ~e; 0 < e;) {
            var S = 31 - bt(e),
                p = 1 << S;
            i[S] = 0, f[S] = -1;
            var h = v[S];
            if (h !== null)
                for (v[S] = null, S = 0; S < h.length; S++) {
                    var m = h[S];
                    m !== null && (m.lane &= -536870913)
                }
            e &= ~p
        }
        u !== 0 && ze(l, u, 0), n !== 0 && a === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t))
    }

    function ze(l, t, e) {
        l.pendingLanes |= t, l.suspendedLanes &= ~t;
        var u = 31 - bt(t);
        l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | e & 4194090
    }

    function ne(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e;) {
            var u = 31 - bt(e),
                a = 1 << u;
            a & t | l[u] & t && (l[u] |= t), e &= ~a
        }
    }

    function uu(l) {
        switch (l) {
            case 2:
                l = 1;
                break;
            case 8:
                l = 4;
                break;
            case 32:
                l = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                l = 128;
                break;
            case 268435456:
                l = 134217728;
                break;
            default:
                l = 0
        }
        return l
    }

    function ce(l) {
        return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function sn() {
        var l = D.p;
        return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : s0(l.type))
    }

    function _t(l, t) {
        var e = D.p;
        try {
            return D.p = l, t()
        } finally {
            D.p = e
        }
    }
    var nt = Math.random().toString(36).slice(2),
        Ql = "__reactFiber$" + nt,
        Wl = "__reactProps$" + nt,
        ie = "__reactContainer$" + nt,
        au = "__reactEvents$" + nt,
        Dc = "__reactListeners$" + nt,
        Nl = "__reactHandles$" + nt,
        Nt = "__reactResources$" + nt,
        Oe = "__reactMarker$" + nt;

    function Me(l) {
        delete l[Ql], delete l[Wl], delete l[au], delete l[Dc], delete l[Nl]
    }

    function vt(l) {
        var t = l[Ql];
        if (t) return t;
        for (var e = l.parentNode; e;) {
            if (t = e[ie] || e[Ql]) {
                if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
                    for (l = ko(l); l !== null;) {
                        if (e = l[Ql]) return e;
                        l = ko(l)
                    }
                return t
            }
            l = e, e = l.parentNode
        }
        return null
    }

    function xe(l) {
        if (l = l[Ql] || l[ie]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l
        }
        return null
    }

    function nu(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
        throw Error(d(33))
    }

    function Zt(l) {
        var t = l[Nt];
        return t || (t = l[Nt] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Ll(l) {
        l[Oe] = !0
    }
    var Mu = new Set,
        da = {};

    function fe(l, t) {
        Ue(l, t), Ue(l + "Capture", t)
    }

    function Ue(l, t) {
        for (da[l] = t, l = 0; l < t.length; l++) Mu.add(t[l])
    }
    var rn = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        x = {},
        G = {};

    function N(l) {
        return _u.call(G, l) ? !0 : _u.call(x, l) ? !1 : rn.test(l) ? G[l] = !0 : (x[l] = !0, !1)
    }

    function fl(l, t, e) {
        if (N(t))
            if (e === null) l.removeAttribute(t);
            else {
                switch (typeof e) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        l.removeAttribute(t);
                        return;
                    case "boolean":
                        var u = t.toLowerCase().slice(0, 5);
                        if (u !== "data-" && u !== "aria-") {
                            l.removeAttribute(t);
                            return
                        }
                }
                l.setAttribute(t, "" + e)
            }
    }

    function Tl(l, t, e) {
        if (e === null) l.removeAttribute(t);
        else {
            switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(t);
                    return
            }
            l.setAttribute(t, "" + e)
        }
    }

    function al(l, t, e, u) {
        if (u === null) l.removeAttribute(e);
        else {
            switch (typeof u) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(e);
                    return
            }
            l.setAttributeNS(t, e, "" + u)
        }
    }
    var $l, rt;

    function sl(l) {
        if ($l === void 0) try {
            throw Error()
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            $l = t && t[1] || "", rt = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + $l + l + rt
    }
    var ct = !1;

    function Vt(l, t) {
        if (!l || ct) return "";
        ct = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var u = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var p = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(p.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(p, [])
                                } catch (m) {
                                    var h = m
                                }
                                Reflect.construct(l, [], p)
                            } else {
                                try {
                                    p.call()
                                } catch (m) {
                                    h = m
                                }
                                l.call(p.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (m) {
                                h = m
                            }(p = l()) && typeof p.catch == "function" && p.catch(function() {})
                        }
                    } catch (m) {
                        if (m && h && typeof m.stack == "string") return [m.stack, h.stack]
                    }
                    return [null, null]
                }
            };
            u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = u.DetermineComponentFrameRoot(),
                c = n[0],
                i = n[1];
            if (c && i) {
                var f = c.split(`
`),
                    v = i.split(`
`);
                for (a = u = 0; u < f.length && !f[u].includes("DetermineComponentFrameRoot");) u++;
                for (; a < v.length && !v[a].includes("DetermineComponentFrameRoot");) a++;
                if (u === f.length || a === v.length)
                    for (u = f.length - 1, a = v.length - 1; 1 <= u && 0 <= a && f[u] !== v[a];) a--;
                for (; 1 <= u && 0 <= a; u--, a--)
                    if (f[u] !== v[a]) {
                        if (u !== 1 || a !== 1)
                            do
                                if (u--, a--, 0 > a || f[u] !== v[a]) {
                                    var S = `
` + f[u].replace(" at new ", " at ");
                                    return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S
                                }
                        while (1 <= u && 0 <= a);
                        break
                    }
            }
        } finally {
            ct = !1, Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? sl(e) : ""
    }

    function Ne(l) {
        switch (l.tag) {
            case 26:
            case 27:
            case 5:
                return sl(l.type);
            case 16:
                return sl("Lazy");
            case 13:
                return sl("Suspense");
            case 19:
                return sl("SuspenseList");
            case 0:
            case 15:
                return Vt(l.type, !1);
            case 11:
                return Vt(l.type.render, !1);
            case 1:
                return Vt(l.type, !0);
            case 31:
                return sl("Activity");
            default:
                return ""
        }
    }

    function Kt(l) {
        try {
            var t = "";
            do t += Ne(l), l = l.return; while (l);
            return t
        } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack
        }
    }

    function Ol(l) {
        switch (typeof l) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return l;
            case "object":
                return l;
            default:
                return ""
        }
    }

    function cu(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function se(l) {
        var t = cu(l) ? "checked" : "value",
            e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
            u = "" + l[t];
        if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
            var a = e.get,
                n = e.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return a.call(this)
                },
                set: function(c) {
                    u = "" + c, n.call(this, c)
                }
            }), Object.defineProperty(l, t, {
                enumerable: e.enumerable
            }), {
                getValue: function() {
                    return u
                },
                setValue: function(c) {
                    u = "" + c
                },
                stopTracking: function() {
                    l._valueTracker = null, delete l[t]
                }
            }
        }
    }

    function ht(l) {
        l._valueTracker || (l._valueTracker = se(l))
    }

    function on(l) {
        if (!l) return !1;
        var t = l._valueTracker;
        if (!t) return !0;
        var e = t.getValue(),
            u = "";
        return l && (u = cu(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== e ? (t.setValue(l), !0) : !1
    }

    function dn(l) {
        if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var D0 = /[\n"\\]/g;

    function Ht(l) {
        return l.replace(D0, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Rc(l, t, e, u, a, n, c, i) {
        l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Ol(t)) : l.value !== "" + Ol(t) && (l.value = "" + Ol(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? zc(l, c, Ol(t)) : e != null ? zc(l, c, Ol(e)) : u != null && l.removeAttribute("value"), a == null && n != null && (l.defaultChecked = !!n), a != null && (l.checked = a && typeof a != "function" && typeof a != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + Ol(i) : l.removeAttribute("name")
    }

    function Gf(l, t, e, u, a, n, c, i) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) return;
            e = e != null ? "" + Ol(e) : "", t = t != null ? "" + Ol(t) : e, i || t === l.value || (l.value = t), l.defaultValue = t
        }
        u = u ? ? a, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = i ? l.checked : !!u, l.defaultChecked = !!u, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c)
    }

    function zc(l, t, e) {
        t === "number" && dn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }

    function xu(l, t, e, u) {
        if (l = l.options, t) {
            t = {};
            for (var a = 0; a < e.length; a++) t["$" + e[a]] = !0;
            for (e = 0; e < l.length; e++) a = t.hasOwnProperty("$" + l[e].value), l[e].selected !== a && (l[e].selected = a), a && u && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + Ol(e), t = null, a = 0; a < l.length; a++) {
                if (l[a].value === e) {
                    l[a].selected = !0, u && (l[a].defaultSelected = !0);
                    return
                }
                t !== null || l[a].disabled || (t = l[a])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Xf(l, t, e) {
        if (t != null && (t = "" + Ol(t), t !== l.value && (l.value = t), e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + Ol(e) : ""
    }

    function Qf(l, t, e, u) {
        if (t == null) {
            if (u != null) {
                if (e != null) throw Error(d(92));
                if (F(u)) {
                    if (1 < u.length) throw Error(d(93));
                    u = u[0]
                }
                e = u
            }
            e == null && (e = ""), t = e
        }
        e = Ol(t), l.defaultValue = e, u = l.textContent, u === e && u !== "" && u !== null && (l.value = u)
    }

    function Uu(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var R0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Lf(l, t, e) {
        var u = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, e) : typeof e != "number" || e === 0 || R0.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }

    function Zf(l, t, e) {
        if (t != null && typeof t != "object") throw Error(d(62));
        if (l = l.style, e != null) {
            for (var u in e) !e.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
            for (var a in t) u = t[a], t.hasOwnProperty(a) && e[a] !== u && Lf(l, a, u)
        } else
            for (var n in t) t.hasOwnProperty(n) && Lf(l, n, t[n])
    }

    function Oc(l) {
        if (l.indexOf("-") === -1) return !1;
        switch (l) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var z0 = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        O0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function yn(l) {
        return O0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    var Mc = null;

    function xc(l) {
        return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
    }
    var Nu = null,
        Hu = null;

    function Vf(l) {
        var t = xe(l);
        if (t && (l = t.stateNode)) {
            var e = l[Wl] || null;
            l: switch (l = t.stateNode, t.type) {
                case "input":
                    if (Rc(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
                        for (e = l; e.parentNode;) e = e.parentNode;
                        for (e = e.querySelectorAll('input[name="' + Ht("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                            var u = e[t];
                            if (u !== l && u.form === l.form) {
                                var a = u[Wl] || null;
                                if (!a) throw Error(d(90));
                                Rc(u, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                            }
                        }
                        for (t = 0; t < e.length; t++) u = e[t], u.form === l.form && on(u)
                    }
                    break l;
                case "textarea":
                    Xf(l, e.value, e.defaultValue);
                    break l;
                case "select":
                    t = e.value, t != null && xu(l, !!e.multiple, t, !1)
            }
        }
    }
    var Uc = !1;

    function Kf(l, t, e) {
        if (Uc) return l(t, e);
        Uc = !0;
        try {
            var u = l(t);
            return u
        } finally {
            if (Uc = !1, (Nu !== null || Hu !== null) && (In(), Nu && (t = Nu, l = Hu, Hu = Nu = null, Vf(t), l)))
                for (t = 0; t < l.length; t++) Vf(l[t])
        }
    }

    function ya(l, t) {
        var e = l.stateNode;
        if (e === null) return null;
        var u = e[Wl] || null;
        if (u === null) return null;
        e = u[t];
        l: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
                break l;
            default:
                l = !1
        }
        if (l) return null;
        if (e && typeof e != "function") throw Error(d(231, t, typeof e));
        return e
    }
    var re = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Nc = !1;
    if (re) try {
        var va = {};
        Object.defineProperty(va, "passive", {
            get: function() {
                Nc = !0
            }
        }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va)
    } catch {
        Nc = !1
    }
    var He = null,
        Hc = null,
        vn = null;

    function wf() {
        if (vn) return vn;
        var l, t = Hc,
            e = t.length,
            u, a = "value" in He ? He.value : He.textContent,
            n = a.length;
        for (l = 0; l < e && t[l] === a[l]; l++);
        var c = e - l;
        for (u = 1; u <= c && t[e - u] === a[n - u]; u++);
        return vn = a.slice(l, 1 < u ? 1 - u : void 0)
    }

    function hn(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
    }

    function mn() {
        return !0
    }

    function Jf() {
        return !1
    }

    function pt(l) {
        function t(e, u, a, n, c) {
            this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = c, this.currentTarget = null;
            for (var i in l) l.hasOwnProperty(i) && (e = l[i], this[i] = e ? e(n) : n[i]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? mn : Jf, this.isPropagationStopped = Jf, this
        }
        return H(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = mn)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = mn)
            },
            persist: function() {},
            isPersistent: mn
        }), t
    }
    var iu = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(l) {
                return l.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        gn = pt(iu),
        ha = H({}, iu, {
            view: 0,
            detail: 0
        }),
        M0 = pt(ha),
        jc, qc, ma, Sn = H({}, ha, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Yc,
            button: 0,
            buttons: 0,
            relatedTarget: function(l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
            },
            movementX: function(l) {
                return "movementX" in l ? l.movementX : (l !== ma && (ma && l.type === "mousemove" ? (jc = l.screenX - ma.screenX, qc = l.screenY - ma.screenY) : qc = jc = 0, ma = l), jc)
            },
            movementY: function(l) {
                return "movementY" in l ? l.movementY : qc
            }
        }),
        kf = pt(Sn),
        x0 = H({}, Sn, {
            dataTransfer: 0
        }),
        U0 = pt(x0),
        N0 = H({}, ha, {
            relatedTarget: 0
        }),
        Bc = pt(N0),
        H0 = H({}, iu, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        j0 = pt(H0),
        q0 = H({}, iu, {
            clipboardData: function(l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData
            }
        }),
        B0 = pt(q0),
        Y0 = H({}, iu, {
            data: 0
        }),
        Wf = pt(Y0),
        C0 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        G0 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        X0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Q0(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = X0[l]) ? !!t[l] : !1
    }

    function Yc() {
        return Q0
    }
    var L0 = H({}, ha, {
            key: function(l) {
                if (l.key) {
                    var t = C0[l.key] || l.key;
                    if (t !== "Unidentified") return t
                }
                return l.type === "keypress" ? (l = hn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? G0[l.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Yc,
            charCode: function(l) {
                return l.type === "keypress" ? hn(l) : 0
            },
            keyCode: function(l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            },
            which: function(l) {
                return l.type === "keypress" ? hn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            }
        }),
        Z0 = pt(L0),
        V0 = H({}, Sn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        $f = pt(V0),
        K0 = H({}, ha, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Yc
        }),
        w0 = pt(K0),
        J0 = H({}, iu, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        k0 = pt(J0),
        W0 = H({}, Sn, {
            deltaX: function(l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
            },
            deltaY: function(l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        $0 = pt(W0),
        F0 = H({}, iu, {
            newState: 0,
            oldState: 0
        }),
        I0 = pt(F0),
        P0 = [9, 13, 27, 32],
        Cc = re && "CompositionEvent" in window,
        ga = null;
    re && "documentMode" in document && (ga = document.documentMode);
    var ld = re && "TextEvent" in window && !ga,
        Ff = re && (!Cc || ga && 8 < ga && 11 >= ga),
        If = " ",
        Pf = !1;

    function ls(l, t) {
        switch (l) {
            case "keyup":
                return P0.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function ts(l) {
        return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
    }
    var ju = !1;

    function td(l, t) {
        switch (l) {
            case "compositionend":
                return ts(t);
            case "keypress":
                return t.which !== 32 ? null : (Pf = !0, If);
            case "textInput":
                return l = t.data, l === If && Pf ? null : l;
            default:
                return null
        }
    }

    function ed(l, t) {
        if (ju) return l === "compositionend" || !Cc && ls(l, t) ? (l = wf(), vn = Hc = He = null, ju = !1, l) : null;
        switch (l) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Ff && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var ud = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function es(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!ud[l.type] : t === "textarea"
    }

    function us(l, t, e, u) {
        Nu ? Hu ? Hu.push(u) : Hu = [u] : Nu = u, t = ac(t, "onChange"), 0 < t.length && (e = new gn("onChange", "change", null, e, u), l.push({
            event: e,
            listeners: t
        }))
    }
    var Sa = null,
        ba = null;

    function ad(l) {
        Co(l, 0)
    }

    function bn(l) {
        var t = nu(l);
        if (on(t)) return l
    }

    function as(l, t) {
        if (l === "change") return t
    }
    var ns = !1;
    if (re) {
        var Gc;
        if (re) {
            var Xc = "oninput" in document;
            if (!Xc) {
                var cs = document.createElement("div");
                cs.setAttribute("oninput", "return;"), Xc = typeof cs.oninput == "function"
            }
            Gc = Xc
        } else Gc = !1;
        ns = Gc && (!document.documentMode || 9 < document.documentMode)
    }

    function is() {
        Sa && (Sa.detachEvent("onpropertychange", fs), ba = Sa = null)
    }

    function fs(l) {
        if (l.propertyName === "value" && bn(ba)) {
            var t = [];
            us(t, ba, l, xc(l)), Kf(ad, t)
        }
    }

    function nd(l, t, e) {
        l === "focusin" ? (is(), Sa = t, ba = e, Sa.attachEvent("onpropertychange", fs)) : l === "focusout" && is()
    }

    function cd(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown") return bn(ba)
    }

    function id(l, t) {
        if (l === "click") return bn(t)
    }

    function fd(l, t) {
        if (l === "input" || l === "change") return bn(t)
    }

    function sd(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var Dt = typeof Object.is == "function" ? Object.is : sd;

    function pa(l, t) {
        if (Dt(l, t)) return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
        var e = Object.keys(l),
            u = Object.keys(t);
        if (e.length !== u.length) return !1;
        for (u = 0; u < e.length; u++) {
            var a = e[u];
            if (!_u.call(t, a) || !Dt(l[a], t[a])) return !1
        }
        return !0
    }

    function ss(l) {
        for (; l && l.firstChild;) l = l.firstChild;
        return l
    }

    function rs(l, t) {
        var e = ss(l);
        l = 0;
        for (var u; e;) {
            if (e.nodeType === 3) {
                if (u = l + e.textContent.length, l <= t && u >= t) return {
                    node: e,
                    offset: t - l
                };
                l = u
            }
            l: {
                for (; e;) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = ss(e)
        }
    }

    function os(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? os(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function ds(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = dn(l.document); t instanceof l.HTMLIFrameElement;) {
            try {
                var e = typeof t.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e) l = t.contentWindow;
            else break;
            t = dn(l.document)
        }
        return t
    }

    function Qc(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var rd = re && "documentMode" in document && 11 >= document.documentMode,
        qu = null,
        Lc = null,
        Ta = null,
        Zc = !1;

    function ys(l, t, e) {
        var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        Zc || qu == null || qu !== dn(u) || (u = qu, "selectionStart" in u && Qc(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }), Ta && pa(Ta, u) || (Ta = u, u = ac(Lc, "onSelect"), 0 < u.length && (t = new gn("onSelect", "select", null, t, e), l.push({
            event: t,
            listeners: u
        }), t.target = qu)))
    }

    function fu(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e
    }
    var Bu = {
            animationend: fu("Animation", "AnimationEnd"),
            animationiteration: fu("Animation", "AnimationIteration"),
            animationstart: fu("Animation", "AnimationStart"),
            transitionrun: fu("Transition", "TransitionRun"),
            transitionstart: fu("Transition", "TransitionStart"),
            transitioncancel: fu("Transition", "TransitionCancel"),
            transitionend: fu("Transition", "TransitionEnd")
        },
        Vc = {},
        vs = {};
    re && (vs = document.createElement("div").style, "AnimationEvent" in window || (delete Bu.animationend.animation, delete Bu.animationiteration.animation, delete Bu.animationstart.animation), "TransitionEvent" in window || delete Bu.transitionend.transition);

    function su(l) {
        if (Vc[l]) return Vc[l];
        if (!Bu[l]) return l;
        var t = Bu[l],
            e;
        for (e in t)
            if (t.hasOwnProperty(e) && e in vs) return Vc[l] = t[e];
        return l
    }
    var hs = su("animationend"),
        ms = su("animationiteration"),
        gs = su("animationstart"),
        od = su("transitionrun"),
        dd = su("transitionstart"),
        yd = su("transitioncancel"),
        Ss = su("transitionend"),
        bs = new Map,
        Kc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Kc.push("scrollEnd");

    function wt(l, t) {
        bs.set(l, t), fe(t, [l])
    }
    var ps = new WeakMap;

    function jt(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = ps.get(l);
            return e !== void 0 ? e : (t = {
                value: l,
                source: t,
                stack: Kt(t)
            }, ps.set(l, t), t)
        }
        return {
            value: l,
            source: t,
            stack: Kt(t)
        }
    }
    var qt = [],
        Yu = 0,
        wc = 0;

    function pn() {
        for (var l = Yu, t = wc = Yu = 0; t < l;) {
            var e = qt[t];
            qt[t++] = null;
            var u = qt[t];
            qt[t++] = null;
            var a = qt[t];
            qt[t++] = null;
            var n = qt[t];
            if (qt[t++] = null, u !== null && a !== null) {
                var c = u.pending;
                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
            }
            n !== 0 && Ts(e, a, n)
        }
    }

    function Tn(l, t, e, u) {
        qt[Yu++] = l, qt[Yu++] = t, qt[Yu++] = e, qt[Yu++] = u, wc |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u)
    }

    function Jc(l, t, e, u) {
        return Tn(l, t, e, u), En(l)
    }

    function Cu(l, t) {
        return Tn(l, null, null, t), En(l)
    }

    function Ts(l, t, e) {
        l.lanes |= e;
        var u = l.alternate;
        u !== null && (u.lanes |= e);
        for (var a = !1, n = l.return; n !== null;) n.childLanes |= e, u = n.alternate, u !== null && (u.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (a = !0)), l = n, n = n.return;
        return l.tag === 3 ? (n = l.stateNode, a && t !== null && (a = 31 - bt(e), l = n.hiddenUpdates, u = l[a], u === null ? l[a] = [t] : u.push(t), t.lane = e | 536870912), n) : null
    }

    function En(l) {
        if (50 < wa) throw wa = 0, Pi = null, Error(d(185));
        for (var t = l.return; t !== null;) l = t, t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var Gu = {};

    function vd(l, t, e, u) {
        this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Rt(l, t, e, u) {
        return new vd(l, t, e, u)
    }

    function kc(l) {
        return l = l.prototype, !(!l || !l.isReactComponent)
    }

    function oe(l, t) {
        var e = l.alternate;
        return e === null ? (e = Rt(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e
    }

    function Es(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), l
    }

    function An(l, t, e, u, a, n) {
        var c = 0;
        if (u = l, typeof l == "function") kc(l) && (c = 1);
        else if (typeof l == "string") c = my(l, e, B.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else l: switch (l) {
            case dl:
                return l = Rt(31, e, t, a), l.elementType = dl, l.lanes = n, l;
            case jl:
                return ru(e.children, a, n, t);
            case Gl:
                c = 8, a |= 24;
                break;
            case ql:
                return l = Rt(12, e, t, a | 2), l.elementType = ql, l.lanes = n, l;
            case J:
                return l = Rt(13, e, t, a), l.elementType = J, l.lanes = n, l;
            case Xl:
                return l = Rt(19, e, t, a), l.elementType = Xl, l.lanes = n, l;
            default:
                if (typeof l == "object" && l !== null) switch (l.$$typeof) {
                    case xl:
                    case Ul:
                        c = 10;
                        break l;
                    case Jl:
                        c = 9;
                        break l;
                    case kl:
                        c = 11;
                        break l;
                    case Al:
                        c = 14;
                        break l;
                    case Z:
                        c = 16, u = null;
                        break l
                }
                c = 29, e = Error(d(130, l === null ? "null" : typeof l, "")), u = null
        }
        return t = Rt(c, e, t, a), t.elementType = l, t.type = u, t.lanes = n, t
    }

    function ru(l, t, e, u) {
        return l = Rt(7, l, u, t), l.lanes = e, l
    }

    function Wc(l, t, e) {
        return l = Rt(6, l, null, t), l.lanes = e, l
    }

    function $c(l, t, e) {
        return t = Rt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        }, t
    }
    var Xu = [],
        Qu = 0,
        _n = null,
        Dn = 0,
        Bt = [],
        Yt = 0,
        ou = null,
        de = 1,
        ye = "";

    function du(l, t) {
        Xu[Qu++] = Dn, Xu[Qu++] = _n, _n = l, Dn = t
    }

    function As(l, t, e) {
        Bt[Yt++] = de, Bt[Yt++] = ye, Bt[Yt++] = ou, ou = l;
        var u = de;
        l = ye;
        var a = 32 - bt(u) - 1;
        u &= ~(1 << a), e += 1;
        var n = 32 - bt(t) + a;
        if (30 < n) {
            var c = a - a % 5;
            n = (u & (1 << c) - 1).toString(32), u >>= c, a -= c, de = 1 << 32 - bt(t) + a | e << a | u, ye = n + l
        } else de = 1 << n | e << a | u, ye = l
    }

    function Fc(l) {
        l.return !== null && (du(l, 1), As(l, 1, 0))
    }

    function Ic(l) {
        for (; l === _n;) _n = Xu[--Qu], Xu[Qu] = null, Dn = Xu[--Qu], Xu[Qu] = null;
        for (; l === ou;) ou = Bt[--Yt], Bt[Yt] = null, ye = Bt[--Yt], Bt[Yt] = null, de = Bt[--Yt], Bt[Yt] = null
    }
    var mt = null,
        Bl = null,
        yl = !1,
        yu = null,
        Ft = !1,
        Pc = Error(d(519));

    function vu(l) {
        var t = Error(d(418, ""));
        throw _a(jt(t, l)), Pc
    }

    function _s(l) {
        var t = l.stateNode,
            e = l.type,
            u = l.memoizedProps;
        switch (t[Ql] = l, t[Wl] = u, e) {
            case "dialog":
                cl("cancel", t), cl("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                cl("load", t);
                break;
            case "video":
            case "audio":
                for (e = 0; e < ka.length; e++) cl(ka[e], t);
                break;
            case "source":
                cl("error", t);
                break;
            case "img":
            case "image":
            case "link":
                cl("error", t), cl("load", t);
                break;
            case "details":
                cl("toggle", t);
                break;
            case "input":
                cl("invalid", t), Gf(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0), ht(t);
                break;
            case "select":
                cl("invalid", t);
                break;
            case "textarea":
                cl("invalid", t), Qf(t, u.value, u.defaultValue, u.children), ht(t)
        }
        e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || u.suppressHydrationWarning === !0 || Lo(t.textContent, e) ? (u.popover != null && (cl("beforetoggle", t), cl("toggle", t)), u.onScroll != null && cl("scroll", t), u.onScrollEnd != null && cl("scrollend", t), u.onClick != null && (t.onclick = nc), t = !0) : t = !1, t || vu(l)
    }

    function Ds(l) {
        for (mt = l.return; mt;) switch (mt.tag) {
            case 5:
            case 13:
                Ft = !1;
                return;
            case 27:
            case 3:
                Ft = !0;
                return;
            default:
                mt = mt.return
        }
    }

    function Ea(l) {
        if (l !== mt) return !1;
        if (!yl) return Ds(l), yl = !0, !1;
        var t = l.tag,
            e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || mf(l.type, l.memoizedProps)), e = !e), e && Bl && vu(l), Ds(l), t === 13) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
            l: {
                for (l = l.nextSibling, t = 0; l;) {
                    if (l.nodeType === 8)
                        if (e = l.data, e === "/$") {
                            if (t === 0) {
                                Bl = kt(l.nextSibling);
                                break l
                            }
                            t--
                        } else e !== "$" && e !== "$!" && e !== "$?" || t++;
                    l = l.nextSibling
                }
                Bl = null
            }
        } else t === 27 ? (t = Bl, We(l.type) ? (l = pf, pf = null, Bl = l) : Bl = t) : Bl = mt ? kt(l.stateNode.nextSibling) : null;
        return !0
    }

    function Aa() {
        Bl = mt = null, yl = !1
    }

    function Rs() {
        var l = yu;
        return l !== null && (At === null ? At = l : At.push.apply(At, l), yu = null), l
    }

    function _a(l) {
        yu === null ? yu = [l] : yu.push(l)
    }
    var li = E(null),
        hu = null,
        ve = null;

    function je(l, t, e) {
        z(li, t._currentValue), t._currentValue = e
    }

    function he(l) {
        l._currentValue = li.current, M(li)
    }

    function ti(l, t, e) {
        for (; l !== null;) {
            var u = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === e) break;
            l = l.return
        }
    }

    function ei(l, t, e, u) {
        var a = l.child;
        for (a !== null && (a.return = l); a !== null;) {
            var n = a.dependencies;
            if (n !== null) {
                var c = a.child;
                n = n.firstContext;
                l: for (; n !== null;) {
                    var i = n;
                    n = a;
                    for (var f = 0; f < t.length; f++)
                        if (i.context === t[f]) {
                            n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), ti(n.return, e, l), u || (c = null);
                            break l
                        }
                    n = i.next
                }
            } else if (a.tag === 18) {
                if (c = a.return, c === null) throw Error(d(341));
                c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), ti(c, e, l), c = null
            } else c = a.child;
            if (c !== null) c.return = a;
            else
                for (c = a; c !== null;) {
                    if (c === l) {
                        c = null;
                        break
                    }
                    if (a = c.sibling, a !== null) {
                        a.return = c.return, c = a;
                        break
                    }
                    c = c.return
                }
            a = c
        }
    }

    function Da(l, t, e, u) {
        l = null;
        for (var a = t, n = !1; a !== null;) {
            if (!n) {
                if ((a.flags & 524288) !== 0) n = !0;
                else if ((a.flags & 262144) !== 0) break
            }
            if (a.tag === 10) {
                var c = a.alternate;
                if (c === null) throw Error(d(387));
                if (c = c.memoizedProps, c !== null) {
                    var i = a.type;
                    Dt(a.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i])
                }
            } else if (a === ut.current) {
                if (c = a.alternate, c === null) throw Error(d(387));
                c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (l !== null ? l.push(ln) : l = [ln])
            }
            a = a.return
        }
        l !== null && ei(t, l, e, u), t.flags |= 262144
    }

    function Rn(l) {
        for (l = l.firstContext; l !== null;) {
            if (!Dt(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next
        }
        return !1
    }

    function mu(l) {
        hu = l, ve = null, l = l.dependencies, l !== null && (l.firstContext = null)
    }

    function ot(l) {
        return zs(hu, l)
    }

    function zn(l, t) {
        return hu === null && mu(l), zs(l, t)
    }

    function zs(l, t) {
        var e = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, ve === null) {
            if (l === null) throw Error(d(308));
            ve = t, l.dependencies = {
                lanes: 0,
                firstContext: t
            }, l.flags |= 524288
        } else ve = ve.next = t;
        return e
    }
    var hd = typeof AbortController < "u" ? AbortController : function() {
            var l = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(e, u) {
                        l.push(u)
                    }
                };
            this.abort = function() {
                t.aborted = !0, l.forEach(function(e) {
                    return e()
                })
            }
        },
        md = O.unstable_scheduleCallback,
        gd = O.unstable_NormalPriority,
        Fl = {
            $$typeof: Ul,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function ui() {
        return {
            controller: new hd,
            data: new Map,
            refCount: 0
        }
    }

    function Ra(l) {
        l.refCount--, l.refCount === 0 && md(gd, function() {
            l.controller.abort()
        })
    }
    var za = null,
        ai = 0,
        Lu = 0,
        Zu = null;

    function Sd(l, t) {
        if (za === null) {
            var e = za = [];
            ai = 0, Lu = cf(), Zu = {
                status: "pending",
                value: void 0,
                then: function(u) {
                    e.push(u)
                }
            }
        }
        return ai++, t.then(Os, Os), t
    }

    function Os() {
        if (--ai === 0 && za !== null) {
            Zu !== null && (Zu.status = "fulfilled");
            var l = za;
            za = null, Lu = 0, Zu = null;
            for (var t = 0; t < l.length; t++)(0, l[t])()
        }
    }

    function bd(l, t) {
        var e = [],
            u = {
                status: "pending",
                value: null,
                reason: null,
                then: function(a) {
                    e.push(a)
                }
            };
        return l.then(function() {
            u.status = "fulfilled", u.value = t;
            for (var a = 0; a < e.length; a++)(0, e[a])(t)
        }, function(a) {
            for (u.status = "rejected", u.reason = a, a = 0; a < e.length; a++)(0, e[a])(void 0)
        }), u
    }
    var Ms = g.S;
    g.S = function(l, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Sd(l, t), Ms !== null && Ms(l, t)
    };
    var gu = E(null);

    function ni() {
        var l = gu.current;
        return l !== null ? l : Dl.pooledCache
    }

    function On(l, t) {
        t === null ? z(gu, gu.current) : z(gu, t.pool)
    }

    function xs() {
        var l = ni();
        return l === null ? null : {
            parent: Fl._currentValue,
            pool: l
        }
    }
    var Oa = Error(d(460)),
        Us = Error(d(474)),
        Mn = Error(d(542)),
        ci = {
            then: function() {}
        };

    function Ns(l) {
        return l = l.status, l === "fulfilled" || l === "rejected"
    }

    function xn() {}

    function Hs(l, t, e) {
        switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(xn, xn), t = e), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason, qs(l), l;
            default:
                if (typeof t.status == "string") t.then(xn, xn);
                else {
                    if (l = Dl, l !== null && 100 < l.shellSuspendCounter) throw Error(d(482));
                    l = t, l.status = "pending", l.then(function(u) {
                        if (t.status === "pending") {
                            var a = t;
                            a.status = "fulfilled", a.value = u
                        }
                    }, function(u) {
                        if (t.status === "pending") {
                            var a = t;
                            a.status = "rejected", a.reason = u
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw l = t.reason, qs(l), l
                }
                throw Ma = t, Oa
        }
    }
    var Ma = null;

    function js() {
        if (Ma === null) throw Error(d(459));
        var l = Ma;
        return Ma = null, l
    }

    function qs(l) {
        if (l === Oa || l === Mn) throw Error(d(483))
    }
    var qe = !1;

    function ii(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function fi(l, t) {
        l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }

    function Be(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Ye(l, t, e) {
        var u = l.updateQueue;
        if (u === null) return null;
        if (u = u.shared, (vl & 2) !== 0) {
            var a = u.pending;
            return a === null ? t.next = t : (t.next = a.next, a.next = t), u.pending = t, t = En(l), Ts(l, null, e), t
        }
        return Tn(l, u, t, e), En(l)
    }

    function xa(l, t, e) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
            var u = t.lanes;
            u &= l.pendingLanes, e |= u, t.lanes = e, ne(l, e)
        }
    }

    function si(l, t) {
        var e = l.updateQueue,
            u = l.alternate;
        if (u !== null && (u = u.updateQueue, e === u)) {
            var a = null,
                n = null;
            if (e = e.firstBaseUpdate, e !== null) {
                do {
                    var c = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? a = n = c : n = n.next = c, e = e.next
                } while (e !== null);
                n === null ? a = n = t : n = n.next = t
            } else a = n = t;
            e = {
                baseState: u.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: n,
                shared: u.shared,
                callbacks: u.callbacks
            }, l.updateQueue = e;
            return
        }
        l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t
    }
    var ri = !1;

    function Ua() {
        if (ri) {
            var l = Zu;
            if (l !== null) throw l
        }
    }

    function Na(l, t, e, u) {
        ri = !1;
        var a = l.updateQueue;
        qe = !1;
        var n = a.firstBaseUpdate,
            c = a.lastBaseUpdate,
            i = a.shared.pending;
        if (i !== null) {
            a.shared.pending = null;
            var f = i,
                v = f.next;
            f.next = null, c === null ? n = v : c.next = v, c = f;
            var S = l.alternate;
            S !== null && (S = S.updateQueue, i = S.lastBaseUpdate, i !== c && (i === null ? S.firstBaseUpdate = v : i.next = v, S.lastBaseUpdate = f))
        }
        if (n !== null) {
            var p = a.baseState;
            c = 0, S = v = f = null, i = n;
            do {
                var h = i.lane & -536870913,
                    m = h !== i.lane;
                if (m ? (rl & h) === h : (u & h) === h) {
                    h !== 0 && h === Lu && (ri = !0), S !== null && (S = S.next = {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var L = l,
                            X = i;h = t;
                        var bl = e;
                        switch (X.tag) {
                            case 1:
                                if (L = X.payload, typeof L == "function") {
                                    p = L.call(bl, p, h);
                                    break l
                                }
                                p = L;
                                break l;
                            case 3:
                                L.flags = L.flags & -65537 | 128;
                            case 0:
                                if (L = X.payload, h = typeof L == "function" ? L.call(bl, p, h) : L, h == null) break l;
                                p = H({}, p, h);
                                break l;
                            case 2:
                                qe = !0
                        }
                    }
                    h = i.callback, h !== null && (l.flags |= 64, m && (l.flags |= 8192), m = a.callbacks, m === null ? a.callbacks = [h] : m.push(h))
                } else m = {
                    lane: h,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                }, S === null ? (v = S = m, f = p) : S = S.next = m, c |= h;
                if (i = i.next, i === null) {
                    if (i = a.shared.pending, i === null) break;
                    m = i, i = m.next, m.next = null, a.lastBaseUpdate = m, a.shared.pending = null
                }
            } while (!0);
            S === null && (f = p), a.baseState = f, a.firstBaseUpdate = v, a.lastBaseUpdate = S, n === null && (a.shared.lanes = 0), Ke |= c, l.lanes = c, l.memoizedState = p
        }
    }

    function Bs(l, t) {
        if (typeof l != "function") throw Error(d(191, l));
        l.call(t)
    }

    function Ys(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null, l = 0; l < e.length; l++) Bs(e[l], t)
    }
    var Vu = E(null),
        Un = E(0);

    function Cs(l, t) {
        l = Ee, z(Un, l), z(Vu, t), Ee = l | t.baseLanes
    }

    function oi() {
        z(Un, Ee), z(Vu, Vu.current)
    }

    function di() {
        Ee = Un.current, M(Vu), M(Un)
    }
    var Ce = 0,
        I = null,
        gl = null,
        Kl = null,
        Nn = !1,
        Ku = !1,
        Su = !1,
        Hn = 0,
        Ha = 0,
        wu = null,
        pd = 0;

    function Zl() {
        throw Error(d(321))
    }

    function yi(l, t) {
        if (t === null) return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!Dt(l[e], t[e])) return !1;
        return !0
    }

    function vi(l, t, e, u, a, n) {
        return Ce = n, I = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = l === null || l.memoizedState === null ? Tr : Er, Su = !1, n = e(u, a), Su = !1, Ku && (n = Xs(t, e, u, a)), Gs(l), n
    }

    function Gs(l) {
        g.H = Gn;
        var t = gl !== null && gl.next !== null;
        if (Ce = 0, Kl = gl = I = null, Nn = !1, Ha = 0, wu = null, t) throw Error(d(300));
        l === null || lt || (l = l.dependencies, l !== null && Rn(l) && (lt = !0))
    }

    function Xs(l, t, e, u) {
        I = l;
        var a = 0;
        do {
            if (Ku && (wu = null), Ha = 0, Ku = !1, 25 <= a) throw Error(d(301));
            if (a += 1, Kl = gl = null, l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0)
            }
            g.H = zd, n = t(e, u)
        } while (Ku);
        return n
    }

    function Td() {
        var l = g.H,
            t = l.useState()[0];
        return t = typeof t.then == "function" ? ja(t) : t, l = l.useState()[0], (gl !== null ? gl.memoizedState : null) !== l && (I.flags |= 1024), t
    }

    function hi() {
        var l = Hn !== 0;
        return Hn = 0, l
    }

    function mi(l, t, e) {
        t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e
    }

    function gi(l) {
        if (Nn) {
            for (l = l.memoizedState; l !== null;) {
                var t = l.queue;
                t !== null && (t.pending = null), l = l.next
            }
            Nn = !1
        }
        Ce = 0, Kl = gl = I = null, Ku = !1, Ha = Hn = 0, wu = null
    }

    function Tt() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Kl === null ? I.memoizedState = Kl = l : Kl = Kl.next = l, Kl
    }

    function wl() {
        if (gl === null) {
            var l = I.alternate;
            l = l !== null ? l.memoizedState : null
        } else l = gl.next;
        var t = Kl === null ? I.memoizedState : Kl.next;
        if (t !== null) Kl = t, gl = l;
        else {
            if (l === null) throw I.alternate === null ? Error(d(467)) : Error(d(310));
            gl = l, l = {
                memoizedState: gl.memoizedState,
                baseState: gl.baseState,
                baseQueue: gl.baseQueue,
                queue: gl.queue,
                next: null
            }, Kl === null ? I.memoizedState = Kl = l : Kl = Kl.next = l
        }
        return Kl
    }

    function Si() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function ja(l) {
        var t = Ha;
        return Ha += 1, wu === null && (wu = []), l = Hs(wu, l, t), t = I, (Kl === null ? t.memoizedState : Kl.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? Tr : Er), l
    }

    function jn(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return ja(l);
            if (l.$$typeof === Ul) return ot(l)
        }
        throw Error(d(438, String(l)))
    }

    function bi(l) {
        var t = null,
            e = I.updateQueue;
        if (e !== null && (t = e.memoCache), t == null) {
            var u = I.alternate;
            u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
                data: u.data.map(function(a) {
                    return a.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), e === null && (e = Si(), I.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
            for (e = t.data[t.index] = Array(l), u = 0; u < l; u++) e[u] = $;
        return t.index++, e
    }

    function me(l, t) {
        return typeof t == "function" ? t(l) : t
    }

    function qn(l) {
        var t = wl();
        return pi(t, gl, l)
    }

    function pi(l, t, e) {
        var u = l.queue;
        if (u === null) throw Error(d(311));
        u.lastRenderedReducer = e;
        var a = l.baseQueue,
            n = u.pending;
        if (n !== null) {
            if (a !== null) {
                var c = a.next;
                a.next = n.next, n.next = c
            }
            t.baseQueue = a = n, u.pending = null
        }
        if (n = l.baseState, a === null) l.memoizedState = n;
        else {
            t = a.next;
            var i = c = null,
                f = null,
                v = t,
                S = !1;
            do {
                var p = v.lane & -536870913;
                if (p !== v.lane ? (rl & p) === p : (Ce & p) === p) {
                    var h = v.revertLane;
                    if (h === 0) f !== null && (f = f.next = {
                        lane: 0,
                        revertLane: 0,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null
                    }), p === Lu && (S = !0);
                    else if ((Ce & h) === h) {
                        v = v.next, h === Lu && (S = !0);
                        continue
                    } else p = {
                        lane: 0,
                        revertLane: v.revertLane,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null
                    }, f === null ? (i = f = p, c = n) : f = f.next = p, I.lanes |= h, Ke |= h;
                    p = v.action, Su && e(n, p), n = v.hasEagerState ? v.eagerState : e(n, p)
                } else h = {
                    lane: p,
                    revertLane: v.revertLane,
                    action: v.action,
                    hasEagerState: v.hasEagerState,
                    eagerState: v.eagerState,
                    next: null
                }, f === null ? (i = f = h, c = n) : f = f.next = h, I.lanes |= p, Ke |= p;
                v = v.next
            } while (v !== null && v !== t);
            if (f === null ? c = n : f.next = i, !Dt(n, l.memoizedState) && (lt = !0, S && (e = Zu, e !== null))) throw e;
            l.memoizedState = n, l.baseState = c, l.baseQueue = f, u.lastRenderedState = n
        }
        return a === null && (u.lanes = 0), [l.memoizedState, u.dispatch]
    }

    function Ti(l) {
        var t = wl(),
            e = t.queue;
        if (e === null) throw Error(d(311));
        e.lastRenderedReducer = l;
        var u = e.dispatch,
            a = e.pending,
            n = t.memoizedState;
        if (a !== null) {
            e.pending = null;
            var c = a = a.next;
            do n = l(n, c.action), c = c.next; while (c !== a);
            Dt(n, t.memoizedState) || (lt = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n
        }
        return [n, u]
    }

    function Qs(l, t, e) {
        var u = I,
            a = wl(),
            n = yl;
        if (n) {
            if (e === void 0) throw Error(d(407));
            e = e()
        } else e = t();
        var c = !Dt((gl || a).memoizedState, e);
        c && (a.memoizedState = e, lt = !0), a = a.queue;
        var i = Vs.bind(null, u, a, l);
        if (qa(2048, 8, i, [l]), a.getSnapshot !== t || c || Kl !== null && Kl.memoizedState.tag & 1) {
            if (u.flags |= 2048, Ju(9, Bn(), Zs.bind(null, u, a, e, t), null), Dl === null) throw Error(d(349));
            n || (Ce & 124) !== 0 || Ls(u, t, e)
        }
        return e
    }

    function Ls(l, t, e) {
        l.flags |= 16384, l = {
            getSnapshot: t,
            value: e
        }, t = I.updateQueue, t === null ? (t = Si(), I.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l))
    }

    function Zs(l, t, e, u) {
        t.value = e, t.getSnapshot = u, Ks(t) && ws(l)
    }

    function Vs(l, t, e) {
        return e(function() {
            Ks(t) && ws(l)
        })
    }

    function Ks(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !Dt(l, e)
        } catch {
            return !0
        }
    }

    function ws(l) {
        var t = Cu(l, 2);
        t !== null && Ut(t, l, 2)
    }

    function Ei(l) {
        var t = Tt();
        if (typeof l == "function") {
            var e = l;
            if (l = e(), Su) {
                ee(!0);
                try {
                    e()
                } finally {
                    ee(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: me,
            lastRenderedState: l
        }, t
    }

    function Js(l, t, e, u) {
        return l.baseState = e, pi(l, gl, typeof u == "function" ? u : me)
    }

    function Ed(l, t, e, u, a) {
        if (Cn(l)) throw Error(d(485));
        if (l = t.action, l !== null) {
            var n = {
                payload: a,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    n.listeners.push(c)
                }
            };
            g.T !== null ? e(!0) : n.isTransition = !1, u(n), e = t.pending, e === null ? (n.next = t.pending = n, ks(t, n)) : (n.next = e.next, t.pending = e.next = n)
        }
    }

    function ks(l, t) {
        var e = t.action,
            u = t.payload,
            a = l.state;
        if (t.isTransition) {
            var n = g.T,
                c = {};
            g.T = c;
            try {
                var i = e(a, u),
                    f = g.S;
                f !== null && f(c, i), Ws(l, t, i)
            } catch (v) {
                Ai(l, t, v)
            } finally {
                g.T = n
            }
        } else try {
            n = e(a, u), Ws(l, t, n)
        } catch (v) {
            Ai(l, t, v)
        }
    }

    function Ws(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(u) {
            $s(l, t, u)
        }, function(u) {
            return Ai(l, t, u)
        }) : $s(l, t, e)
    }

    function $s(l, t, e) {
        t.status = "fulfilled", t.value = e, Fs(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, ks(l, e)))
    }

    function Ai(l, t, e) {
        var u = l.pending;
        if (l.pending = null, u !== null) {
            u = u.next;
            do t.status = "rejected", t.reason = e, Fs(t), t = t.next; while (t !== u)
        }
        l.action = null
    }

    function Fs(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)(0, l[t])()
    }

    function Is(l, t) {
        return t
    }

    function Ps(l, t) {
        if (yl) {
            var e = Dl.formState;
            if (e !== null) {
                l: {
                    var u = I;
                    if (yl) {
                        if (Bl) {
                            t: {
                                for (var a = Bl, n = Ft; a.nodeType !== 8;) {
                                    if (!n) {
                                        a = null;
                                        break t
                                    }
                                    if (a = kt(a.nextSibling), a === null) {
                                        a = null;
                                        break t
                                    }
                                }
                                n = a.data,
                                a = n === "F!" || n === "F" ? a : null
                            }
                            if (a) {
                                Bl = kt(a.nextSibling), u = a.data === "F!";
                                break l
                            }
                        }
                        vu(u)
                    }
                    u = !1
                }
                u && (t = e[0])
            }
        }
        return e = Tt(), e.memoizedState = e.baseState = t, u = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Is,
            lastRenderedState: t
        }, e.queue = u, e = Sr.bind(null, I, u), u.dispatch = e, u = Ei(!1), n = Oi.bind(null, I, !1, u.queue), u = Tt(), a = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        }, u.queue = a, e = Ed.bind(null, I, a, n, e), a.dispatch = e, u.memoizedState = l, [t, e, !1]
    }

    function lr(l) {
        var t = wl();
        return tr(t, gl, l)
    }

    function tr(l, t, e) {
        if (t = pi(l, t, Is)[0], l = qn(me)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var u = ja(t)
        } catch (c) {
            throw c === Oa ? Mn : c
        } else u = t;
        t = wl();
        var a = t.queue,
            n = a.dispatch;
        return e !== t.memoizedState && (I.flags |= 2048, Ju(9, Bn(), Ad.bind(null, a, e), null)), [u, n, l]
    }

    function Ad(l, t) {
        l.action = t
    }

    function er(l) {
        var t = wl(),
            e = gl;
        if (e !== null) return tr(t, e, l);
        wl(), t = t.memoizedState, e = wl();
        var u = e.queue.dispatch;
        return e.memoizedState = l, [t, u, !1]
    }

    function Ju(l, t, e, u) {
        return l = {
            tag: l,
            create: e,
            deps: u,
            inst: t,
            next: null
        }, t = I.updateQueue, t === null && (t = Si(), I.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (u = e.next, e.next = l, l.next = u, t.lastEffect = l), l
    }

    function Bn() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function ur() {
        return wl().memoizedState
    }

    function Yn(l, t, e, u) {
        var a = Tt();
        u = u === void 0 ? null : u, I.flags |= l, a.memoizedState = Ju(1 | t, Bn(), e, u)
    }

    function qa(l, t, e, u) {
        var a = wl();
        u = u === void 0 ? null : u;
        var n = a.memoizedState.inst;
        gl !== null && u !== null && yi(u, gl.memoizedState.deps) ? a.memoizedState = Ju(t, n, e, u) : (I.flags |= l, a.memoizedState = Ju(1 | t, n, e, u))
    }

    function ar(l, t) {
        Yn(8390656, 8, l, t)
    }

    function nr(l, t) {
        qa(2048, 8, l, t)
    }

    function cr(l, t) {
        return qa(4, 2, l, t)
    }

    function ir(l, t) {
        return qa(4, 4, l, t)
    }

    function fr(l, t) {
        if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function() {
                typeof e == "function" ? e() : t(null)
            }
        }
        if (t != null) return l = l(), t.current = l,
            function() {
                t.current = null
            }
    }

    function sr(l, t, e) {
        e = e != null ? e.concat([l]) : null, qa(4, 4, fr.bind(null, t, l), e)
    }

    function _i() {}

    function rr(l, t) {
        var e = wl();
        t = t === void 0 ? null : t;
        var u = e.memoizedState;
        return t !== null && yi(t, u[1]) ? u[0] : (e.memoizedState = [l, t], l)
    }

    function or(l, t) {
        var e = wl();
        t = t === void 0 ? null : t;
        var u = e.memoizedState;
        if (t !== null && yi(t, u[1])) return u[0];
        if (u = l(), Su) {
            ee(!0);
            try {
                l()
            } finally {
                ee(!1)
            }
        }
        return e.memoizedState = [u, t], u
    }

    function Di(l, t, e) {
        return e === void 0 || (Ce & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = e, l = ho(), I.lanes |= l, Ke |= l, e)
    }

    function dr(l, t, e, u) {
        return Dt(e, t) ? e : Vu.current !== null ? (l = Di(l, e, u), Dt(l, t) || (lt = !0), l) : (Ce & 42) === 0 ? (lt = !0, l.memoizedState = e) : (l = ho(), I.lanes |= l, Ke |= l, t)
    }

    function yr(l, t, e, u, a) {
        var n = D.p;
        D.p = n !== 0 && 8 > n ? n : 8;
        var c = g.T,
            i = {};
        g.T = i, Oi(l, !1, t, e);
        try {
            var f = a(),
                v = g.S;
            if (v !== null && v(i, f), f !== null && typeof f == "object" && typeof f.then == "function") {
                var S = bd(f, u);
                Ba(l, t, S, xt(l))
            } else Ba(l, t, u, xt(l))
        } catch (p) {
            Ba(l, t, {
                then: function() {},
                status: "rejected",
                reason: p
            }, xt())
        } finally {
            D.p = n, g.T = c
        }
    }

    function _d() {}

    function Ri(l, t, e, u) {
        if (l.tag !== 5) throw Error(d(476));
        var a = vr(l).queue;
        yr(l, a, t, _, e === null ? _d : function() {
            return hr(l), e(u)
        })
    }

    function vr(l) {
        var t = l.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: _,
            baseState: _,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: me,
                lastRenderedState: _
            },
            next: null
        };
        var e = {};
        return t.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: me,
                lastRenderedState: e
            },
            next: null
        }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
    }

    function hr(l) {
        var t = vr(l).next.queue;
        Ba(l, t, {}, xt())
    }

    function zi() {
        return ot(ln)
    }

    function mr() {
        return wl().memoizedState
    }

    function gr() {
        return wl().memoizedState
    }

    function Dd(l) {
        for (var t = l.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var e = xt();
                    l = Be(e);
                    var u = Ye(t, l, e);
                    u !== null && (Ut(u, t, e), xa(u, t, e)), t = {
                        cache: ui()
                    }, l.payload = t;
                    return
            }
            t = t.return
        }
    }

    function Rd(l, t, e) {
        var u = xt();
        e = {
            lane: u,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Cn(l) ? br(t, e) : (e = Jc(l, t, e, u), e !== null && (Ut(e, l, u), pr(e, t, u)))
    }

    function Sr(l, t, e) {
        var u = xt();
        Ba(l, t, e, u)
    }

    function Ba(l, t, e, u) {
        var a = {
            lane: u,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Cn(l)) br(t, a);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
                var c = t.lastRenderedState,
                    i = n(c, e);
                if (a.hasEagerState = !0, a.eagerState = i, Dt(i, c)) return Tn(l, t, a, 0), Dl === null && pn(), !1
            } catch {} finally {}
            if (e = Jc(l, t, a, u), e !== null) return Ut(e, l, u), pr(e, t, u), !0
        }
        return !1
    }

    function Oi(l, t, e, u) {
        if (u = {
                lane: 2,
                revertLane: cf(),
                action: u,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Cn(l)) {
            if (t) throw Error(d(479))
        } else t = Jc(l, e, u, 2), t !== null && Ut(t, l, 2)
    }

    function Cn(l) {
        var t = l.alternate;
        return l === I || t !== null && t === I
    }

    function br(l, t) {
        Ku = Nn = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t
    }

    function pr(l, t, e) {
        if ((e & 4194048) !== 0) {
            var u = t.lanes;
            u &= l.pendingLanes, e |= u, t.lanes = e, ne(l, e)
        }
    }
    var Gn = {
            readContext: ot,
            use: jn,
            useCallback: Zl,
            useContext: Zl,
            useEffect: Zl,
            useImperativeHandle: Zl,
            useLayoutEffect: Zl,
            useInsertionEffect: Zl,
            useMemo: Zl,
            useReducer: Zl,
            useRef: Zl,
            useState: Zl,
            useDebugValue: Zl,
            useDeferredValue: Zl,
            useTransition: Zl,
            useSyncExternalStore: Zl,
            useId: Zl,
            useHostTransitionStatus: Zl,
            useFormState: Zl,
            useActionState: Zl,
            useOptimistic: Zl,
            useMemoCache: Zl,
            useCacheRefresh: Zl
        },
        Tr = {
            readContext: ot,
            use: jn,
            useCallback: function(l, t) {
                return Tt().memoizedState = [l, t === void 0 ? null : t], l
            },
            useContext: ot,
            useEffect: ar,
            useImperativeHandle: function(l, t, e) {
                e = e != null ? e.concat([l]) : null, Yn(4194308, 4, fr.bind(null, t, l), e)
            },
            useLayoutEffect: function(l, t) {
                return Yn(4194308, 4, l, t)
            },
            useInsertionEffect: function(l, t) {
                Yn(4, 2, l, t)
            },
            useMemo: function(l, t) {
                var e = Tt();
                t = t === void 0 ? null : t;
                var u = l();
                if (Su) {
                    ee(!0);
                    try {
                        l()
                    } finally {
                        ee(!1)
                    }
                }
                return e.memoizedState = [u, t], u
            },
            useReducer: function(l, t, e) {
                var u = Tt();
                if (e !== void 0) {
                    var a = e(t);
                    if (Su) {
                        ee(!0);
                        try {
                            e(t)
                        } finally {
                            ee(!1)
                        }
                    }
                } else a = t;
                return u.memoizedState = u.baseState = a, l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: l,
                    lastRenderedState: a
                }, u.queue = l, l = l.dispatch = Rd.bind(null, I, l), [u.memoizedState, l]
            },
            useRef: function(l) {
                var t = Tt();
                return l = {
                    current: l
                }, t.memoizedState = l
            },
            useState: function(l) {
                l = Ei(l);
                var t = l.queue,
                    e = Sr.bind(null, I, t);
                return t.dispatch = e, [l.memoizedState, e]
            },
            useDebugValue: _i,
            useDeferredValue: function(l, t) {
                var e = Tt();
                return Di(e, l, t)
            },
            useTransition: function() {
                var l = Ei(!1);
                return l = yr.bind(null, I, l.queue, !0, !1), Tt().memoizedState = l, [!1, l]
            },
            useSyncExternalStore: function(l, t, e) {
                var u = I,
                    a = Tt();
                if (yl) {
                    if (e === void 0) throw Error(d(407));
                    e = e()
                } else {
                    if (e = t(), Dl === null) throw Error(d(349));
                    (rl & 124) !== 0 || Ls(u, t, e)
                }
                a.memoizedState = e;
                var n = {
                    value: e,
                    getSnapshot: t
                };
                return a.queue = n, ar(Vs.bind(null, u, n, l), [l]), u.flags |= 2048, Ju(9, Bn(), Zs.bind(null, u, n, e, t), null), e
            },
            useId: function() {
                var l = Tt(),
                    t = Dl.identifierPrefix;
                if (yl) {
                    var e = ye,
                        u = de;
                    e = (u & ~(1 << 32 - bt(u) - 1)).toString(32) + e, t = "«" + t + "R" + e, e = Hn++, 0 < e && (t += "H" + e.toString(32)), t += "»"
                } else e = pd++, t = "«" + t + "r" + e.toString(32) + "»";
                return l.memoizedState = t
            },
            useHostTransitionStatus: zi,
            useFormState: Ps,
            useActionState: Ps,
            useOptimistic: function(l) {
                var t = Tt();
                t.memoizedState = t.baseState = l;
                var e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = e, t = Oi.bind(null, I, !0, e), e.dispatch = t, [l, t]
            },
            useMemoCache: bi,
            useCacheRefresh: function() {
                return Tt().memoizedState = Dd.bind(null, I)
            }
        },
        Er = {
            readContext: ot,
            use: jn,
            useCallback: rr,
            useContext: ot,
            useEffect: nr,
            useImperativeHandle: sr,
            useInsertionEffect: cr,
            useLayoutEffect: ir,
            useMemo: or,
            useReducer: qn,
            useRef: ur,
            useState: function() {
                return qn(me)
            },
            useDebugValue: _i,
            useDeferredValue: function(l, t) {
                var e = wl();
                return dr(e, gl.memoizedState, l, t)
            },
            useTransition: function() {
                var l = qn(me)[0],
                    t = wl().memoizedState;
                return [typeof l == "boolean" ? l : ja(l), t]
            },
            useSyncExternalStore: Qs,
            useId: mr,
            useHostTransitionStatus: zi,
            useFormState: lr,
            useActionState: lr,
            useOptimistic: function(l, t) {
                var e = wl();
                return Js(e, gl, l, t)
            },
            useMemoCache: bi,
            useCacheRefresh: gr
        },
        zd = {
            readContext: ot,
            use: jn,
            useCallback: rr,
            useContext: ot,
            useEffect: nr,
            useImperativeHandle: sr,
            useInsertionEffect: cr,
            useLayoutEffect: ir,
            useMemo: or,
            useReducer: Ti,
            useRef: ur,
            useState: function() {
                return Ti(me)
            },
            useDebugValue: _i,
            useDeferredValue: function(l, t) {
                var e = wl();
                return gl === null ? Di(e, l, t) : dr(e, gl.memoizedState, l, t)
            },
            useTransition: function() {
                var l = Ti(me)[0],
                    t = wl().memoizedState;
                return [typeof l == "boolean" ? l : ja(l), t]
            },
            useSyncExternalStore: Qs,
            useId: mr,
            useHostTransitionStatus: zi,
            useFormState: er,
            useActionState: er,
            useOptimistic: function(l, t) {
                var e = wl();
                return gl !== null ? Js(e, gl, l, t) : (e.baseState = l, [l, e.queue.dispatch])
            },
            useMemoCache: bi,
            useCacheRefresh: gr
        },
        ku = null,
        Ya = 0;

    function Xn(l) {
        var t = Ya;
        return Ya += 1, ku === null && (ku = []), Hs(ku, l, t)
    }

    function Ca(l, t) {
        t = t.props.ref, l.ref = t !== void 0 ? t : null
    }

    function Qn(l, t) {
        throw t.$$typeof === ul ? Error(d(525)) : (l = Object.prototype.toString.call(t), Error(d(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }

    function Ar(l) {
        var t = l._init;
        return t(l._payload)
    }

    function _r(l) {
        function t(o, r) {
            if (l) {
                var y = o.deletions;
                y === null ? (o.deletions = [r], o.flags |= 16) : y.push(r)
            }
        }

        function e(o, r) {
            if (!l) return null;
            for (; r !== null;) t(o, r), r = r.sibling;
            return null
        }

        function u(o) {
            for (var r = new Map; o !== null;) o.key !== null ? r.set(o.key, o) : r.set(o.index, o), o = o.sibling;
            return r
        }

        function a(o, r) {
            return o = oe(o, r), o.index = 0, o.sibling = null, o
        }

        function n(o, r, y) {
            return o.index = y, l ? (y = o.alternate, y !== null ? (y = y.index, y < r ? (o.flags |= 67108866, r) : y) : (o.flags |= 67108866, r)) : (o.flags |= 1048576, r)
        }

        function c(o) {
            return l && o.alternate === null && (o.flags |= 67108866), o
        }

        function i(o, r, y, b) {
            return r === null || r.tag !== 6 ? (r = Wc(y, o.mode, b), r.return = o, r) : (r = a(r, y), r.return = o, r)
        }

        function f(o, r, y, b) {
            var U = y.type;
            return U === jl ? S(o, r, y.props.children, b, y.key) : r !== null && (r.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Z && Ar(U) === r.type) ? (r = a(r, y.props), Ca(r, y), r.return = o, r) : (r = An(y.type, y.key, y.props, null, o.mode, b), Ca(r, y), r.return = o, r)
        }

        function v(o, r, y, b) {
            return r === null || r.tag !== 4 || r.stateNode.containerInfo !== y.containerInfo || r.stateNode.implementation !== y.implementation ? (r = $c(y, o.mode, b), r.return = o, r) : (r = a(r, y.children || []), r.return = o, r)
        }

        function S(o, r, y, b, U) {
            return r === null || r.tag !== 7 ? (r = ru(y, o.mode, b, U), r.return = o, r) : (r = a(r, y), r.return = o, r)
        }

        function p(o, r, y) {
            if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return r = Wc("" + r, o.mode, y), r.return = o, r;
            if (typeof r == "object" && r !== null) {
                switch (r.$$typeof) {
                    case P:
                        return y = An(r.type, r.key, r.props, null, o.mode, y), Ca(y, r), y.return = o, y;
                    case Rl:
                        return r = $c(r, o.mode, y), r.return = o, r;
                    case Z:
                        var b = r._init;
                        return r = b(r._payload), p(o, r, y)
                }
                if (F(r) || V(r)) return r = ru(r, o.mode, y, null), r.return = o, r;
                if (typeof r.then == "function") return p(o, Xn(r), y);
                if (r.$$typeof === Ul) return p(o, zn(o, r), y);
                Qn(o, r)
            }
            return null
        }

        function h(o, r, y, b) {
            var U = r !== null ? r.key : null;
            if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return U !== null ? null : i(o, r, "" + y, b);
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                    case P:
                        return y.key === U ? f(o, r, y, b) : null;
                    case Rl:
                        return y.key === U ? v(o, r, y, b) : null;
                    case Z:
                        return U = y._init, y = U(y._payload), h(o, r, y, b)
                }
                if (F(y) || V(y)) return U !== null ? null : S(o, r, y, b, null);
                if (typeof y.then == "function") return h(o, r, Xn(y), b);
                if (y.$$typeof === Ul) return h(o, r, zn(o, y), b);
                Qn(o, y)
            }
            return null
        }

        function m(o, r, y, b, U) {
            if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return o = o.get(y) || null, i(r, o, "" + b, U);
            if (typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                    case P:
                        return o = o.get(b.key === null ? y : b.key) || null, f(r, o, b, U);
                    case Rl:
                        return o = o.get(b.key === null ? y : b.key) || null, v(r, o, b, U);
                    case Z:
                        var tl = b._init;
                        return b = tl(b._payload), m(o, r, y, b, U)
                }
                if (F(b) || V(b)) return o = o.get(y) || null, S(r, o, b, U, null);
                if (typeof b.then == "function") return m(o, r, y, Xn(b), U);
                if (b.$$typeof === Ul) return m(o, r, y, zn(r, b), U);
                Qn(r, b)
            }
            return null
        }

        function L(o, r, y, b) {
            for (var U = null, tl = null, q = r, Q = r = 0, et = null; q !== null && Q < y.length; Q++) {
                q.index > Q ? (et = q, q = null) : et = q.sibling;
                var ol = h(o, q, y[Q], b);
                if (ol === null) {
                    q === null && (q = et);
                    break
                }
                l && q && ol.alternate === null && t(o, q), r = n(ol, r, Q), tl === null ? U = ol : tl.sibling = ol, tl = ol, q = et
            }
            if (Q === y.length) return e(o, q), yl && du(o, Q), U;
            if (q === null) {
                for (; Q < y.length; Q++) q = p(o, y[Q], b), q !== null && (r = n(q, r, Q), tl === null ? U = q : tl.sibling = q, tl = q);
                return yl && du(o, Q), U
            }
            for (q = u(q); Q < y.length; Q++) et = m(q, o, Q, y[Q], b), et !== null && (l && et.alternate !== null && q.delete(et.key === null ? Q : et.key), r = n(et, r, Q), tl === null ? U = et : tl.sibling = et, tl = et);
            return l && q.forEach(function(lu) {
                return t(o, lu)
            }), yl && du(o, Q), U
        }

        function X(o, r, y, b) {
            if (y == null) throw Error(d(151));
            for (var U = null, tl = null, q = r, Q = r = 0, et = null, ol = y.next(); q !== null && !ol.done; Q++, ol = y.next()) {
                q.index > Q ? (et = q, q = null) : et = q.sibling;
                var lu = h(o, q, ol.value, b);
                if (lu === null) {
                    q === null && (q = et);
                    break
                }
                l && q && lu.alternate === null && t(o, q), r = n(lu, r, Q), tl === null ? U = lu : tl.sibling = lu, tl = lu, q = et
            }
            if (ol.done) return e(o, q), yl && du(o, Q), U;
            if (q === null) {
                for (; !ol.done; Q++, ol = y.next()) ol = p(o, ol.value, b), ol !== null && (r = n(ol, r, Q), tl === null ? U = ol : tl.sibling = ol, tl = ol);
                return yl && du(o, Q), U
            }
            for (q = u(q); !ol.done; Q++, ol = y.next()) ol = m(q, o, Q, ol.value, b), ol !== null && (l && ol.alternate !== null && q.delete(ol.key === null ? Q : ol.key), r = n(ol, r, Q), tl === null ? U = ol : tl.sibling = ol, tl = ol);
            return l && q.forEach(function(Oy) {
                return t(o, Oy)
            }), yl && du(o, Q), U
        }

        function bl(o, r, y, b) {
            if (typeof y == "object" && y !== null && y.type === jl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                    case P:
                        l: {
                            for (var U = y.key; r !== null;) {
                                if (r.key === U) {
                                    if (U = y.type, U === jl) {
                                        if (r.tag === 7) {
                                            e(o, r.sibling), b = a(r, y.props.children), b.return = o, o = b;
                                            break l
                                        }
                                    } else if (r.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Z && Ar(U) === r.type) {
                                        e(o, r.sibling), b = a(r, y.props), Ca(b, y), b.return = o, o = b;
                                        break l
                                    }
                                    e(o, r);
                                    break
                                } else t(o, r);
                                r = r.sibling
                            }
                            y.type === jl ? (b = ru(y.props.children, o.mode, b, y.key), b.return = o, o = b) : (b = An(y.type, y.key, y.props, null, o.mode, b), Ca(b, y), b.return = o, o = b)
                        }
                        return c(o);
                    case Rl:
                        l: {
                            for (U = y.key; r !== null;) {
                                if (r.key === U)
                                    if (r.tag === 4 && r.stateNode.containerInfo === y.containerInfo && r.stateNode.implementation === y.implementation) {
                                        e(o, r.sibling), b = a(r, y.children || []), b.return = o, o = b;
                                        break l
                                    } else {
                                        e(o, r);
                                        break
                                    }
                                else t(o, r);
                                r = r.sibling
                            }
                            b = $c(y, o.mode, b),
                            b.return = o,
                            o = b
                        }
                        return c(o);
                    case Z:
                        return U = y._init, y = U(y._payload), bl(o, r, y, b)
                }
                if (F(y)) return L(o, r, y, b);
                if (V(y)) {
                    if (U = V(y), typeof U != "function") throw Error(d(150));
                    return y = U.call(y), X(o, r, y, b)
                }
                if (typeof y.then == "function") return bl(o, r, Xn(y), b);
                if (y.$$typeof === Ul) return bl(o, r, zn(o, y), b);
                Qn(o, y)
            }
            return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, r !== null && r.tag === 6 ? (e(o, r.sibling), b = a(r, y), b.return = o, o = b) : (e(o, r), b = Wc(y, o.mode, b), b.return = o, o = b), c(o)) : e(o, r)
        }
        return function(o, r, y, b) {
            try {
                Ya = 0;
                var U = bl(o, r, y, b);
                return ku = null, U
            } catch (q) {
                if (q === Oa || q === Mn) throw q;
                var tl = Rt(29, q, null, o.mode);
                return tl.lanes = b, tl.return = o, tl
            } finally {}
        }
    }
    var Wu = _r(!0),
        Dr = _r(!1),
        Ct = E(null),
        It = null;

    function Ge(l) {
        var t = l.alternate;
        z(Il, Il.current & 1), z(Ct, l), It === null && (t === null || Vu.current !== null || t.memoizedState !== null) && (It = l)
    }

    function Rr(l) {
        if (l.tag === 22) {
            if (z(Il, Il.current), z(Ct, l), It === null) {
                var t = l.alternate;
                t !== null && t.memoizedState !== null && (It = l)
            }
        } else Xe()
    }

    function Xe() {
        z(Il, Il.current), z(Ct, Ct.current)
    }

    function ge(l) {
        M(Ct), It === l && (It = null), M(Il)
    }
    var Il = E(0);

    function Ln(l) {
        for (var t = l; t !== null;) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || bf(e))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === l) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === l) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Mi(l, t, e, u) {
        t = l.memoizedState, e = e(u, t), e = e == null ? t : H({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e)
    }
    var xi = {
        enqueueSetState: function(l, t, e) {
            l = l._reactInternals;
            var u = xt(),
                a = Be(u);
            a.payload = t, e != null && (a.callback = e), t = Ye(l, a, u), t !== null && (Ut(t, l, u), xa(t, l, u))
        },
        enqueueReplaceState: function(l, t, e) {
            l = l._reactInternals;
            var u = xt(),
                a = Be(u);
            a.tag = 1, a.payload = t, e != null && (a.callback = e), t = Ye(l, a, u), t !== null && (Ut(t, l, u), xa(t, l, u))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var e = xt(),
                u = Be(e);
            u.tag = 2, t != null && (u.callback = t), t = Ye(l, u, e), t !== null && (Ut(t, l, e), xa(t, l, e))
        }
    };

    function zr(l, t, e, u, a, n, c) {
        return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, c) : t.prototype && t.prototype.isPureReactComponent ? !pa(e, u) || !pa(a, n) : !0
    }

    function Or(l, t, e, u) {
        l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, u), t.state !== l && xi.enqueueReplaceState(t, t.state, null)
    }

    function bu(l, t) {
        var e = t;
        if ("ref" in t) {
            e = {};
            for (var u in t) u !== "ref" && (e[u] = t[u])
        }
        if (l = l.defaultProps) {
            e === t && (e = H({}, e));
            for (var a in l) e[a] === void 0 && (e[a] = l[a])
        }
        return e
    }
    var Zn = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    };

    function Mr(l) {
        Zn(l)
    }

    function xr(l) {
        console.error(l)
    }

    function Ur(l) {
        Zn(l)
    }

    function Vn(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {
                componentStack: t.stack
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function Nr(l, t, e) {
        try {
            var u = l.onCaughtError;
            u(e.value, {
                componentStack: e.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function Ui(l, t, e) {
        return e = Be(e), e.tag = 3, e.payload = {
            element: null
        }, e.callback = function() {
            Vn(l, t)
        }, e
    }

    function Hr(l) {
        return l = Be(l), l.tag = 3, l
    }

    function jr(l, t, e, u) {
        var a = e.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var n = u.value;
            l.payload = function() {
                return a(n)
            }, l.callback = function() {
                Nr(t, e, u)
            }
        }
        var c = e.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
            Nr(t, e, u), typeof a != "function" && (we === null ? we = new Set([this]) : we.add(this));
            var i = u.stack;
            this.componentDidCatch(u.value, {
                componentStack: i !== null ? i : ""
            })
        })
    }

    function Od(l, t, e, u, a) {
        if (e.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
            if (t = e.alternate, t !== null && Da(t, e, a, !0), e = Ct.current, e !== null) {
                switch (e.tag) {
                    case 13:
                        return It === null ? tf() : e.alternate === null && Yl === 0 && (Yl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === ci ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = new Set([u]) : t.add(u), uf(l, u, a)), !1;
                    case 22:
                        return e.flags |= 65536, u === ci ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([u])
                        }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = new Set([u]) : e.add(u)), uf(l, u, a)), !1
                }
                throw Error(d(435, e.tag))
            }
            return uf(l, u, a), tf(), !1
        }
        if (yl) return t = Ct.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, u !== Pc && (l = Error(d(422), {
            cause: u
        }), _a(jt(l, e)))) : (u !== Pc && (t = Error(d(423), {
            cause: u
        }), _a(jt(t, e))), l = l.current.alternate, l.flags |= 65536, a &= -a, l.lanes |= a, u = jt(u, e), a = Ui(l.stateNode, u, a), si(l, a), Yl !== 4 && (Yl = 2)), !1;
        var n = Error(d(520), {
            cause: u
        });
        if (n = jt(n, e), Ka === null ? Ka = [n] : Ka.push(n), Yl !== 4 && (Yl = 2), t === null) return !0;
        u = jt(u, e), e = t;
        do {
            switch (e.tag) {
                case 3:
                    return e.flags |= 65536, l = a & -a, e.lanes |= l, l = Ui(e.stateNode, u, l), si(e, l), !1;
                case 1:
                    if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (we === null || !we.has(n)))) return e.flags |= 65536, a &= -a, e.lanes |= a, a = Hr(a), jr(a, l, e, u), si(e, a), !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var qr = Error(d(461)),
        lt = !1;

    function it(l, t, e, u) {
        t.child = l === null ? Dr(t, null, e, u) : Wu(t, l.child, e, u)
    }

    function Br(l, t, e, u, a) {
        e = e.render;
        var n = t.ref;
        if ("ref" in u) {
            var c = {};
            for (var i in u) i !== "ref" && (c[i] = u[i])
        } else c = u;
        return mu(t), u = vi(l, t, e, c, n, a), i = hi(), l !== null && !lt ? (mi(l, t, a), Se(l, t, a)) : (yl && i && Fc(t), t.flags |= 1, it(l, t, u, a), t.child)
    }

    function Yr(l, t, e, u, a) {
        if (l === null) {
            var n = e.type;
            return typeof n == "function" && !kc(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Cr(l, t, n, u, a)) : (l = An(e.type, null, u, t, t.mode, a), l.ref = t.ref, l.return = t, t.child = l)
        }
        if (n = l.child, !Gi(l, a)) {
            var c = n.memoizedProps;
            if (e = e.compare, e = e !== null ? e : pa, e(c, u) && l.ref === t.ref) return Se(l, t, a)
        }
        return t.flags |= 1, l = oe(n, u), l.ref = t.ref, l.return = t, t.child = l
    }

    function Cr(l, t, e, u, a) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (pa(n, u) && l.ref === t.ref)
                if (lt = !1, t.pendingProps = u = n, Gi(l, a))(l.flags & 131072) !== 0 && (lt = !0);
                else return t.lanes = l.lanes, Se(l, t, a)
        }
        return Ni(l, t, e, u, a)
    }

    function Gr(l, t, e) {
        var u = t.pendingProps,
            a = u.children,
            n = l !== null ? l.memoizedState : null;
        if (u.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (u = n !== null ? n.baseLanes | e : e, l !== null) {
                    for (a = t.child = l.child, n = 0; a !== null;) n = n | a.lanes | a.childLanes, a = a.sibling;
                    t.childLanes = n & ~u
                } else t.childLanes = 0, t.child = null;
                return Xr(l, t, u, e)
            }
            if ((e & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, l !== null && On(t, n !== null ? n.cachePool : null), n !== null ? Cs(t, n) : oi(), Rr(t);
            else return t.lanes = t.childLanes = 536870912, Xr(l, t, n !== null ? n.baseLanes | e : e, e)
        } else n !== null ? (On(t, n.cachePool), Cs(t, n), Xe(), t.memoizedState = null) : (l !== null && On(t, null), oi(), Xe());
        return it(l, t, a, e), t.child
    }

    function Xr(l, t, e, u) {
        var a = ni();
        return a = a === null ? null : {
            parent: Fl._currentValue,
            pool: a
        }, t.memoizedState = {
            baseLanes: e,
            cachePool: a
        }, l !== null && On(t, null), oi(), Rr(t), l !== null && Da(l, t, u, !0), null
    }

    function Kn(l, t) {
        var e = t.ref;
        if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object") throw Error(d(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }

    function Ni(l, t, e, u, a) {
        return mu(t), e = vi(l, t, e, u, void 0, a), u = hi(), l !== null && !lt ? (mi(l, t, a), Se(l, t, a)) : (yl && u && Fc(t), t.flags |= 1, it(l, t, e, a), t.child)
    }

    function Qr(l, t, e, u, a, n) {
        return mu(t), t.updateQueue = null, e = Xs(t, u, e, a), Gs(l), u = hi(), l !== null && !lt ? (mi(l, t, n), Se(l, t, n)) : (yl && u && Fc(t), t.flags |= 1, it(l, t, e, n), t.child)
    }

    function Lr(l, t, e, u, a) {
        if (mu(t), t.stateNode === null) {
            var n = Gu,
                c = e.contextType;
            typeof c == "object" && c !== null && (n = ot(c)), n = new e(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = xi, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, ii(t), c = e.contextType, n.context = typeof c == "object" && c !== null ? ot(c) : Gu, n.state = t.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (Mi(t, e, c, u), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && xi.enqueueReplaceState(n, n.state, null), Na(t, u, n, a), Ua(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0
        } else if (l === null) {
            n = t.stateNode;
            var i = t.memoizedProps,
                f = bu(e, i);
            n.props = f;
            var v = n.context,
                S = e.contextType;
            c = Gu, typeof S == "object" && S !== null && (c = ot(S));
            var p = e.getDerivedStateFromProps;
            S = typeof p == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || v !== c) && Or(t, n, u, c), qe = !1;
            var h = t.memoizedState;
            n.state = h, Na(t, u, n, a), Ua(), v = t.memoizedState, i || h !== v || qe ? (typeof p == "function" && (Mi(t, e, p, u), v = t.memoizedState), (f = qe || zr(t, e, f, u, h, v, c)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = v), n.props = u, n.state = v, n.context = c, u = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1)
        } else {
            n = t.stateNode, fi(l, t), c = t.memoizedProps, S = bu(e, c), n.props = S, p = t.pendingProps, h = n.context, v = e.contextType, f = Gu, typeof v == "object" && v !== null && (f = ot(v)), i = e.getDerivedStateFromProps, (v = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== p || h !== f) && Or(t, n, u, f), qe = !1, h = t.memoizedState, n.state = h, Na(t, u, n, a), Ua();
            var m = t.memoizedState;
            c !== p || h !== m || qe || l !== null && l.dependencies !== null && Rn(l.dependencies) ? (typeof i == "function" && (Mi(t, e, i, u), m = t.memoizedState), (S = qe || zr(t, e, S, u, h, m, f) || l !== null && l.dependencies !== null && Rn(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, m, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, m, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = f, u = S) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), u = !1)
        }
        return n = u, Kn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, e = u && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Wu(t, l.child, null, a), t.child = Wu(t, null, e, a)) : it(l, t, e, a), t.memoizedState = n.state, l = t.child) : l = Se(l, t, a), l
    }

    function Zr(l, t, e, u) {
        return Aa(), t.flags |= 256, it(l, t, e, u), t.child
    }
    var Hi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function ji(l) {
        return {
            baseLanes: l,
            cachePool: xs()
        }
    }

    function qi(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0, t && (l |= Gt), l
    }

    function Vr(l, t, e) {
        var u = t.pendingProps,
            a = !1,
            n = (t.flags & 128) !== 0,
            c;
        if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (Il.current & 2) !== 0), c && (a = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
            if (yl) {
                if (a ? Ge(t) : Xe(), yl) {
                    var i = Bl,
                        f;
                    if (f = i) {
                        l: {
                            for (f = i, i = Ft; f.nodeType !== 8;) {
                                if (!i) {
                                    i = null;
                                    break l
                                }
                                if (f = kt(f.nextSibling), f === null) {
                                    i = null;
                                    break l
                                }
                            }
                            i = f
                        }
                        i !== null ? (t.memoizedState = {
                            dehydrated: i,
                            treeContext: ou !== null ? {
                                id: de,
                                overflow: ye
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, f = Rt(18, null, null, 0), f.stateNode = i, f.return = t, t.child = f, mt = t, Bl = null, f = !0) : f = !1
                    }
                    f || vu(t)
                }
                if (i = t.memoizedState, i !== null && (i = i.dehydrated, i !== null)) return bf(i) ? t.lanes = 32 : t.lanes = 536870912, null;
                ge(t)
            }
            return i = u.children, u = u.fallback, a ? (Xe(), a = t.mode, i = wn({
                mode: "hidden",
                children: i
            }, a), u = ru(u, a, e, null), i.return = t, u.return = t, i.sibling = u, t.child = i, a = t.child, a.memoizedState = ji(e), a.childLanes = qi(l, c, e), t.memoizedState = Hi, u) : (Ge(t), Bi(t, i))
        }
        if (f = l.memoizedState, f !== null && (i = f.dehydrated, i !== null)) {
            if (n) t.flags & 256 ? (Ge(t), t.flags &= -257, t = Yi(l, t, e)) : t.memoizedState !== null ? (Xe(), t.child = l.child, t.flags |= 128, t = null) : (Xe(), a = u.fallback, i = t.mode, u = wn({
                mode: "visible",
                children: u.children
            }, i), a = ru(a, i, e, null), a.flags |= 2, u.return = t, a.return = t, u.sibling = a, t.child = u, Wu(t, l.child, null, e), u = t.child, u.memoizedState = ji(e), u.childLanes = qi(l, c, e), t.memoizedState = Hi, t = a);
            else if (Ge(t), bf(i)) {
                if (c = i.nextSibling && i.nextSibling.dataset, c) var v = c.dgst;
                c = v, u = Error(d(419)), u.stack = "", u.digest = c, _a({
                    value: u,
                    source: null,
                    stack: null
                }), t = Yi(l, t, e)
            } else if (lt || Da(l, t, e, !1), c = (e & l.childLanes) !== 0, lt || c) {
                if (c = Dl, c !== null && (u = e & -e, u = (u & 42) !== 0 ? 1 : uu(u), u = (u & (c.suspendedLanes | e)) !== 0 ? 0 : u, u !== 0 && u !== f.retryLane)) throw f.retryLane = u, Cu(l, u), Ut(c, l, u), qr;
                i.data === "$?" || tf(), t = Yi(l, t, e)
            } else i.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, Bl = kt(i.nextSibling), mt = t, yl = !0, yu = null, Ft = !1, l !== null && (Bt[Yt++] = de, Bt[Yt++] = ye, Bt[Yt++] = ou, de = l.id, ye = l.overflow, ou = t), t = Bi(t, u.children), t.flags |= 4096);
            return t
        }
        return a ? (Xe(), a = u.fallback, i = t.mode, f = l.child, v = f.sibling, u = oe(f, {
            mode: "hidden",
            children: u.children
        }), u.subtreeFlags = f.subtreeFlags & 65011712, v !== null ? a = oe(v, a) : (a = ru(a, i, e, null), a.flags |= 2), a.return = t, u.return = t, u.sibling = a, t.child = u, u = a, a = t.child, i = l.child.memoizedState, i === null ? i = ji(e) : (f = i.cachePool, f !== null ? (v = Fl._currentValue, f = f.parent !== v ? {
            parent: v,
            pool: v
        } : f) : f = xs(), i = {
            baseLanes: i.baseLanes | e,
            cachePool: f
        }), a.memoizedState = i, a.childLanes = qi(l, c, e), t.memoizedState = Hi, u) : (Ge(t), e = l.child, l = e.sibling, e = oe(e, {
            mode: "visible",
            children: u.children
        }), e.return = t, e.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = e, t.memoizedState = null, e)
    }

    function Bi(l, t) {
        return t = wn({
            mode: "visible",
            children: t
        }, l.mode), t.return = l, l.child = t
    }

    function wn(l, t) {
        return l = Rt(22, l, null, t), l.lanes = 0, l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, l
    }

    function Yi(l, t, e) {
        return Wu(t, l.child, null, e), l = Bi(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
    }

    function Kr(l, t, e) {
        l.lanes |= t;
        var u = l.alternate;
        u !== null && (u.lanes |= t), ti(l.return, t, e)
    }

    function Ci(l, t, e, u, a) {
        var n = l.memoizedState;
        n === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: e,
            tailMode: a
        } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = e, n.tailMode = a)
    }

    function wr(l, t, e) {
        var u = t.pendingProps,
            a = u.revealOrder,
            n = u.tail;
        if (it(l, t, u.children, e), u = Il.current, (u & 2) !== 0) u = u & 1 | 2, t.flags |= 128;
        else {
            if (l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null;) {
                if (l.tag === 13) l.memoizedState !== null && Kr(l, e, t);
                else if (l.tag === 19) Kr(l, e, t);
                else if (l.child !== null) {
                    l.child.return = l, l = l.child;
                    continue
                }
                if (l === t) break l;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === t) break l;
                    l = l.return
                }
                l.sibling.return = l.return, l = l.sibling
            }
            u &= 1
        }
        switch (z(Il, u), a) {
            case "forwards":
                for (e = t.child, a = null; e !== null;) l = e.alternate, l !== null && Ln(l) === null && (a = e), e = e.sibling;
                e = a, e === null ? (a = t.child, t.child = null) : (a = e.sibling, e.sibling = null), Ci(t, !1, a, e, n);
                break;
            case "backwards":
                for (e = null, a = t.child, t.child = null; a !== null;) {
                    if (l = a.alternate, l !== null && Ln(l) === null) {
                        t.child = a;
                        break
                    }
                    l = a.sibling, a.sibling = e, e = a, a = l
                }
                Ci(t, !0, e, null, n);
                break;
            case "together":
                Ci(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Se(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies), Ke |= t.lanes, (e & t.childLanes) === 0)
            if (l !== null) {
                if (Da(l, t, e, !1), (e & t.childLanes) === 0) return null
            } else return null;
        if (l !== null && t.child !== l.child) throw Error(d(153));
        if (t.child !== null) {
            for (l = t.child, e = oe(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null;) l = l.sibling, e = e.sibling = oe(l, l.pendingProps), e.return = t;
            e.sibling = null
        }
        return t.child
    }

    function Gi(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Rn(l)))
    }

    function Md(l, t, e) {
        switch (t.tag) {
            case 3:
                _l(t, t.stateNode.containerInfo), je(t, Fl, l.memoizedState.cache), Aa();
                break;
            case 27:
            case 5:
                fn(t);
                break;
            case 4:
                _l(t, t.stateNode.containerInfo);
                break;
            case 10:
                je(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var u = t.memoizedState;
                if (u !== null) return u.dehydrated !== null ? (Ge(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Vr(l, t, e) : (Ge(t), l = Se(l, t, e), l !== null ? l.sibling : null);
                Ge(t);
                break;
            case 19:
                var a = (l.flags & 128) !== 0;
                if (u = (e & t.childLanes) !== 0, u || (Da(l, t, e, !1), u = (e & t.childLanes) !== 0), a) {
                    if (u) return wr(l, t, e);
                    t.flags |= 128
                }
                if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), z(Il, Il.current), u) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Gr(l, t, e);
            case 24:
                je(t, Fl, l.memoizedState.cache)
        }
        return Se(l, t, e)
    }

    function Jr(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps) lt = !0;
            else {
                if (!Gi(l, e) && (t.flags & 128) === 0) return lt = !1, Md(l, t, e);
                lt = (l.flags & 131072) !== 0
            }
        else lt = !1, yl && (t.flags & 1048576) !== 0 && As(t, Dn, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                l: {
                    l = t.pendingProps;
                    var u = t.elementType,
                        a = u._init;
                    if (u = a(u._payload), t.type = u, typeof u == "function") kc(u) ? (l = bu(u, l), t.tag = 1, t = Lr(null, t, u, l, e)) : (t.tag = 0, t = Ni(null, t, u, l, e));
                    else {
                        if (u != null) {
                            if (a = u.$$typeof, a === kl) {
                                t.tag = 11, t = Br(null, t, u, l, e);
                                break l
                            } else if (a === Al) {
                                t.tag = 14, t = Yr(null, t, u, l, e);
                                break l
                            }
                        }
                        throw t = ml(u) || u, Error(d(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Ni(l, t, t.type, t.pendingProps, e);
            case 1:
                return u = t.type, a = bu(u, t.pendingProps), Lr(l, t, u, a, e);
            case 3:
                l: {
                    if (_l(t, t.stateNode.containerInfo), l === null) throw Error(d(387));u = t.pendingProps;
                    var n = t.memoizedState;a = n.element,
                    fi(l, t),
                    Na(t, u, null, e);
                    var c = t.memoizedState;
                    if (u = c.cache, je(t, Fl, u), u !== n.cache && ei(t, [Fl], e, !0), Ua(), u = c.element, n.isDehydrated)
                        if (n = {
                                element: u,
                                isDehydrated: !1,
                                cache: c.cache
                            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                            t = Zr(l, t, u, e);
                            break l
                        } else if (u !== a) {
                        a = jt(Error(d(424)), t), _a(a), t = Zr(l, t, u, e);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo, l.nodeType) {
                            case 9:
                                l = l.body;
                                break;
                            default:
                                l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (Bl = kt(l.firstChild), mt = t, yl = !0, yu = null, Ft = !0, e = Dr(t, null, u, e), t.child = e; e;) e.flags = e.flags & -3 | 4096, e = e.sibling
                    } else {
                        if (Aa(), u === a) {
                            t = Se(l, t, e);
                            break l
                        }
                        it(l, t, u, e)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Kn(l, t), l === null ? (e = Io(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : yl || (e = t.type, l = t.pendingProps, u = cc(Y.current).createElement(e), u[Ql] = t, u[Wl] = l, st(u, e, l), Ll(u), t.stateNode = u) : t.memoizedState = Io(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
            case 27:
                return fn(t), l === null && yl && (u = t.stateNode = Wo(t.type, t.pendingProps, Y.current), mt = t, Ft = !0, a = Bl, We(t.type) ? (pf = a, Bl = kt(u.firstChild)) : Bl = a), it(l, t, t.pendingProps.children, e), Kn(l, t), l === null && (t.flags |= 4194304), t.child;
            case 5:
                return l === null && yl && ((a = u = Bl) && (u = uy(u, t.type, t.pendingProps, Ft), u !== null ? (t.stateNode = u, mt = t, Bl = kt(u.firstChild), Ft = !1, a = !0) : a = !1), a || vu(t)), fn(t), a = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, u = n.children, mf(a, n) ? u = null : c !== null && mf(a, c) && (t.flags |= 32), t.memoizedState !== null && (a = vi(l, t, Td, null, null, e), ln._currentValue = a), Kn(l, t), it(l, t, u, e), t.child;
            case 6:
                return l === null && yl && ((l = e = Bl) && (e = ay(e, t.pendingProps, Ft), e !== null ? (t.stateNode = e, mt = t, Bl = null, l = !0) : l = !1), l || vu(t)), null;
            case 13:
                return Vr(l, t, e);
            case 4:
                return _l(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = Wu(t, null, u, e) : it(l, t, u, e), t.child;
            case 11:
                return Br(l, t, t.type, t.pendingProps, e);
            case 7:
                return it(l, t, t.pendingProps, e), t.child;
            case 8:
                return it(l, t, t.pendingProps.children, e), t.child;
            case 12:
                return it(l, t, t.pendingProps.children, e), t.child;
            case 10:
                return u = t.pendingProps, je(t, t.type, u.value), it(l, t, u.children, e), t.child;
            case 9:
                return a = t.type._context, u = t.pendingProps.children, mu(t), a = ot(a), u = u(a), t.flags |= 1, it(l, t, u, e), t.child;
            case 14:
                return Yr(l, t, t.type, t.pendingProps, e);
            case 15:
                return Cr(l, t, t.type, t.pendingProps, e);
            case 19:
                return wr(l, t, e);
            case 31:
                return u = t.pendingProps, e = t.mode, u = {
                    mode: u.mode,
                    children: u.children
                }, l === null ? (e = wn(u, e), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = oe(l.child, u), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
            case 22:
                return Gr(l, t, e);
            case 24:
                return mu(t), u = ot(Fl), l === null ? (a = ni(), a === null && (a = Dl, n = ui(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), t.memoizedState = {
                    parent: u,
                    cache: a
                }, ii(t), je(t, Fl, a)) : ((l.lanes & e) !== 0 && (fi(l, t), Na(t, null, null, e), Ua()), a = l.memoizedState, n = t.memoizedState, a.parent !== u ? (a = {
                    parent: u,
                    cache: u
                }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), je(t, Fl, u)) : (u = n.cache, je(t, Fl, u), u !== a.cache && ei(t, [Fl], e, !0))), it(l, t, t.pendingProps.children, e), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(d(156, t.tag))
    }

    function be(l) {
        l.flags |= 4
    }

    function kr(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
        else if (l.flags |= 16777216, !u0(t)) {
            if (t = Ct.current, t !== null && ((rl & 4194048) === rl ? It !== null : (rl & 62914560) !== rl && (rl & 536870912) === 0 || t !== It)) throw Ma = ci, Us;
            l.flags |= 8192
        }
    }

    function Jn(l, t) {
        t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Ou() : 536870912, l.lanes |= t, Pu |= t)
    }

    function Ga(l, t) {
        if (!yl) switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var e = null; t !== null;) t.alternate !== null && (e = t), t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = l.tail;
                for (var u = null; e !== null;) e.alternate !== null && (u = e), e = e.sibling;
                u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null
        }
    }

    function Hl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child,
            e = 0,
            u = 0;
        if (t)
            for (var a = l.child; a !== null;) e |= a.lanes | a.childLanes, u |= a.subtreeFlags & 65011712, u |= a.flags & 65011712, a.return = l, a = a.sibling;
        else
            for (a = l.child; a !== null;) e |= a.lanes | a.childLanes, u |= a.subtreeFlags, u |= a.flags, a.return = l, a = a.sibling;
        return l.subtreeFlags |= u, l.childLanes = e, t
    }

    function xd(l, t, e) {
        var u = t.pendingProps;
        switch (Ic(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Hl(t), null;
            case 1:
                return Hl(t), null;
            case 3:
                return e = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), he(Fl), Qt(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (Ea(t) ? be(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Rs())), Hl(t), null;
            case 26:
                return e = t.memoizedState, l === null ? (be(t), e !== null ? (Hl(t), kr(t, e)) : (Hl(t), t.flags &= -16777217)) : e ? e !== l.memoizedState ? (be(t), Hl(t), kr(t, e)) : (Hl(t), t.flags &= -16777217) : (l.memoizedProps !== u && be(t), Hl(t), t.flags &= -16777217), null;
            case 27:
                Au(t), e = Y.current;
                var a = t.type;
                if (l !== null && t.stateNode != null) l.memoizedProps !== u && be(t);
                else {
                    if (!u) {
                        if (t.stateNode === null) throw Error(d(166));
                        return Hl(t), null
                    }
                    l = B.current, Ea(t) ? _s(t) : (l = Wo(a, u, e), t.stateNode = l, be(t))
                }
                return Hl(t), null;
            case 5:
                if (Au(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && be(t);
                else {
                    if (!u) {
                        if (t.stateNode === null) throw Error(d(166));
                        return Hl(t), null
                    }
                    if (l = B.current, Ea(t)) _s(t);
                    else {
                        switch (a = cc(Y.current), l) {
                            case 1:
                                l = a.createElementNS("http://www.w3.org/2000/svg", e);
                                break;
                            case 2:
                                l = a.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                break;
                            default:
                                switch (e) {
                                    case "svg":
                                        l = a.createElementNS("http://www.w3.org/2000/svg", e);
                                        break;
                                    case "math":
                                        l = a.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                        break;
                                    case "script":
                                        l = a.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                                        break;
                                    case "select":
                                        l = typeof u.is == "string" ? a.createElement("select", {
                                            is: u.is
                                        }) : a.createElement("select"), u.multiple ? l.multiple = !0 : u.size && (l.size = u.size);
                                        break;
                                    default:
                                        l = typeof u.is == "string" ? a.createElement(e, {
                                            is: u.is
                                        }) : a.createElement(e)
                                }
                        }
                        l[Ql] = t, l[Wl] = u;
                        l: for (a = t.child; a !== null;) {
                            if (a.tag === 5 || a.tag === 6) l.appendChild(a.stateNode);
                            else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                                a.child.return = a, a = a.child;
                                continue
                            }
                            if (a === t) break l;
                            for (; a.sibling === null;) {
                                if (a.return === null || a.return === t) break l;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                        t.stateNode = l;
                        l: switch (st(l, e, u), e) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l = !!u.autoFocus;
                                break l;
                            case "img":
                                l = !0;
                                break l;
                            default:
                                l = !1
                        }
                        l && be(t)
                    }
                }
                return Hl(t), t.flags &= -16777217, null;
            case 6:
                if (l && t.stateNode != null) l.memoizedProps !== u && be(t);
                else {
                    if (typeof u != "string" && t.stateNode === null) throw Error(d(166));
                    if (l = Y.current, Ea(t)) {
                        if (l = t.stateNode, e = t.memoizedProps, u = null, a = mt, a !== null) switch (a.tag) {
                            case 27:
                            case 5:
                                u = a.memoizedProps
                        }
                        l[Ql] = t, l = !!(l.nodeValue === e || u !== null && u.suppressHydrationWarning === !0 || Lo(l.nodeValue, e)), l || vu(t)
                    } else l = cc(l).createTextNode(u), l[Ql] = t, t.stateNode = l
                }
                return Hl(t), null;
            case 13:
                if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                    if (a = Ea(t), u !== null && u.dehydrated !== null) {
                        if (l === null) {
                            if (!a) throw Error(d(318));
                            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(d(317));
                            a[Ql] = t
                        } else Aa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Hl(t), a = !1
                    } else a = Rs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), a = !0;
                    if (!a) return t.flags & 256 ? (ge(t), t) : (ge(t), null)
                }
                if (ge(t), (t.flags & 128) !== 0) return t.lanes = e, t;
                if (e = u !== null, l = l !== null && l.memoizedState !== null, e) {
                    u = t.child, a = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (a = u.alternate.memoizedState.cachePool.pool);
                    var n = null;
                    u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== a && (u.flags |= 2048)
                }
                return e !== l && e && (t.child.flags |= 8192), Jn(t, t.updateQueue), Hl(t), null;
            case 4:
                return Qt(), l === null && of (t.stateNode.containerInfo), Hl(t), null;
            case 10:
                return he(t.type), Hl(t), null;
            case 19:
                if (M(Il), a = t.memoizedState, a === null) return Hl(t), null;
                if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
                    if (u) Ga(a, !1);
                    else {
                        if (Yl !== 0 || l !== null && (l.flags & 128) !== 0)
                            for (l = t.child; l !== null;) {
                                if (n = Ln(l), n !== null) {
                                    for (t.flags |= 128, Ga(a, !1), l = n.updateQueue, t.updateQueue = l, Jn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null;) Es(e, l), e = e.sibling;
                                    return z(Il, Il.current & 1 | 2), t.child
                                }
                                l = l.sibling
                            }
                        a.tail !== null && gt() > $n && (t.flags |= 128, u = !0, Ga(a, !1), t.lanes = 4194304)
                    }
                else {
                    if (!u)
                        if (l = Ln(n), l !== null) {
                            if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, Jn(t, l), Ga(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !yl) return Hl(t), null
                        } else 2 * gt() - a.renderingStartTime > $n && e !== 536870912 && (t.flags |= 128, u = !0, Ga(a, !1), t.lanes = 4194304);
                    a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n)
                }
                return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = gt(), t.sibling = null, l = Il.current, z(Il, u ? l & 1 | 2 : l & 1), t) : (Hl(t), null);
            case 22:
            case 23:
                return ge(t), di(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Hl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Hl(t), e = t.updateQueue, e !== null && Jn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== e && (t.flags |= 2048), l !== null && M(gu), null;
            case 24:
                return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), he(Fl), Hl(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(d(156, t.tag))
    }

    function Ud(l, t) {
        switch (Ic(t), t.tag) {
            case 1:
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 3:
                return he(Fl), Qt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Au(t), null;
            case 13:
                if (ge(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                    if (t.alternate === null) throw Error(d(340));
                    Aa()
                }
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 19:
                return M(Il), null;
            case 4:
                return Qt(), null;
            case 10:
                return he(t.type), null;
            case 22:
            case 23:
                return ge(t), di(), l !== null && M(gu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 24:
                return he(Fl), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Wr(l, t) {
        switch (Ic(t), t.tag) {
            case 3:
                he(Fl), Qt();
                break;
            case 26:
            case 27:
            case 5:
                Au(t);
                break;
            case 4:
                Qt();
                break;
            case 13:
                ge(t);
                break;
            case 19:
                M(Il);
                break;
            case 10:
                he(t.type);
                break;
            case 22:
            case 23:
                ge(t), di(), l !== null && M(gu);
                break;
            case 24:
                he(Fl)
        }
    }

    function Xa(l, t) {
        try {
            var e = t.updateQueue,
                u = e !== null ? e.lastEffect : null;
            if (u !== null) {
                var a = u.next;
                e = a;
                do {
                    if ((e.tag & l) === l) {
                        u = void 0;
                        var n = e.create,
                            c = e.inst;
                        u = n(), c.destroy = u
                    }
                    e = e.next
                } while (e !== a)
            }
        } catch (i) {
            El(t, t.return, i)
        }
    }

    function Qe(l, t, e) {
        try {
            var u = t.updateQueue,
                a = u !== null ? u.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                u = n;
                do {
                    if ((u.tag & l) === l) {
                        var c = u.inst,
                            i = c.destroy;
                        if (i !== void 0) {
                            c.destroy = void 0, a = t;
                            var f = e,
                                v = i;
                            try {
                                v()
                            } catch (S) {
                                El(a, f, S)
                            }
                        }
                    }
                    u = u.next
                } while (u !== n)
            }
        } catch (S) {
            El(t, t.return, S)
        }
    }

    function $r(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                Ys(t, e)
            } catch (u) {
                El(l, l.return, u)
            }
        }
    }

    function Fr(l, t, e) {
        e.props = bu(l.type, l.memoizedProps), e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (u) {
            El(l, t, u)
        }
    }

    function Qa(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var u = l.stateNode;
                        break;
                    case 30:
                        u = l.stateNode;
                        break;
                    default:
                        u = l.stateNode
                }
                typeof e == "function" ? l.refCleanup = e(u) : e.current = u
            }
        } catch (a) {
            El(l, t, a)
        }
    }

    function Pt(l, t) {
        var e = l.ref,
            u = l.refCleanup;
        if (e !== null)
            if (typeof u == "function") try {
                u()
            } catch (a) {
                El(l, t, a)
            } finally {
                l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
            } else if (typeof e == "function") try {
                e(null)
            } catch (a) {
                El(l, t, a)
            } else e.current = null
    }

    function Ir(l) {
        var t = l.type,
            e = l.memoizedProps,
            u = l.stateNode;
        try {
            l: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    e.autoFocus && u.focus();
                    break l;
                case "img":
                    e.src ? u.src = e.src : e.srcSet && (u.srcset = e.srcSet)
            }
        }
        catch (a) {
            El(l, l.return, a)
        }
    }

    function Xi(l, t, e) {
        try {
            var u = l.stateNode;
            Id(u, l.type, e, t), u[Wl] = t
        } catch (a) {
            El(l, l.return, a)
        }
    }

    function Pr(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && We(l.type) || l.tag === 4
    }

    function Qi(l) {
        l: for (;;) {
            for (; l.sibling === null;) {
                if (l.return === null || Pr(l.return)) return null;
                l = l.return
            }
            for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                if (l.tag === 27 && We(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                l.child.return = l, l = l.child
            }
            if (!(l.flags & 2)) return l.stateNode
        }
    }

    function Li(l, t, e) {
        var u = l.tag;
        if (u === 5 || u === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = nc));
        else if (u !== 4 && (u === 27 && We(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
            for (Li(l, t, e), l = l.sibling; l !== null;) Li(l, t, e), l = l.sibling
    }

    function kn(l, t, e) {
        var u = l.tag;
        if (u === 5 || u === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
        else if (u !== 4 && (u === 27 && We(l.type) && (e = l.stateNode), l = l.child, l !== null))
            for (kn(l, t, e), l = l.sibling; l !== null;) kn(l, t, e), l = l.sibling
    }

    function lo(l) {
        var t = l.stateNode,
            e = l.memoizedProps;
        try {
            for (var u = l.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
            st(t, u, e), t[Ql] = l, t[Wl] = e
        } catch (n) {
            El(l, l.return, n)
        }
    }
    var pe = !1,
        Vl = !1,
        Zi = !1,
        to = typeof WeakSet == "function" ? WeakSet : Set,
        tt = null;

    function Nd(l, t) {
        if (l = l.containerInfo, vf = dc, l = ds(l), Qc(l)) {
            if ("selectionStart" in l) var e = {
                start: l.selectionStart,
                end: l.selectionEnd
            };
            else l: {
                e = (e = l.ownerDocument) && e.defaultView || window;
                var u = e.getSelection && e.getSelection();
                if (u && u.rangeCount !== 0) {
                    e = u.anchorNode;
                    var a = u.anchorOffset,
                        n = u.focusNode;
                    u = u.focusOffset;
                    try {
                        e.nodeType, n.nodeType
                    } catch {
                        e = null;
                        break l
                    }
                    var c = 0,
                        i = -1,
                        f = -1,
                        v = 0,
                        S = 0,
                        p = l,
                        h = null;
                    t: for (;;) {
                        for (var m; p !== e || a !== 0 && p.nodeType !== 3 || (i = c + a), p !== n || u !== 0 && p.nodeType !== 3 || (f = c + u), p.nodeType === 3 && (c += p.nodeValue.length), (m = p.firstChild) !== null;) h = p, p = m;
                        for (;;) {
                            if (p === l) break t;
                            if (h === e && ++v === a && (i = c), h === n && ++S === u && (f = c), (m = p.nextSibling) !== null) break;
                            p = h, h = p.parentNode
                        }
                        p = m
                    }
                    e = i === -1 || f === -1 ? null : {
                        start: i,
                        end: f
                    }
                } else e = null
            }
            e = e || {
                start: 0,
                end: 0
            }
        } else e = null;
        for (hf = {
                focusedElem: l,
                selectionRange: e
            }, dc = !1, tt = t; tt !== null;)
            if (t = tt, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, tt = l;
            else
                for (; tt !== null;) {
                    switch (t = tt, n = t.alternate, l = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((l & 1024) !== 0 && n !== null) {
                                l = void 0, e = t, a = n.memoizedProps, n = n.memoizedState, u = e.stateNode;
                                try {
                                    var L = bu(e.type, a, e.elementType === e.type);
                                    l = u.getSnapshotBeforeUpdate(L, n), u.__reactInternalSnapshotBeforeUpdate = l
                                } catch (X) {
                                    El(e, e.return, X)
                                }
                            }
                            break;
                        case 3:
                            if ((l & 1024) !== 0) {
                                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) Sf(l);
                                else if (e === 1) switch (l.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Sf(l);
                                        break;
                                    default:
                                        l.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((l & 1024) !== 0) throw Error(d(163))
                    }
                    if (l = t.sibling, l !== null) {
                        l.return = t.return, tt = l;
                        break
                    }
                    tt = t.return
                }
    }

    function eo(l, t, e) {
        var u = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Le(l, e), u & 4 && Xa(5, e);
                break;
            case 1:
                if (Le(l, e), u & 4)
                    if (l = e.stateNode, t === null) try {
                        l.componentDidMount()
                    } catch (c) {
                        El(e, e.return, c)
                    } else {
                        var a = bu(e.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            l.componentDidUpdate(a, t, l.__reactInternalSnapshotBeforeUpdate)
                        } catch (c) {
                            El(e, e.return, c)
                        }
                    }
                u & 64 && $r(e), u & 512 && Qa(e, e.return);
                break;
            case 3:
                if (Le(l, e), u & 64 && (l = e.updateQueue, l !== null)) {
                    if (t = null, e.child !== null) switch (e.child.tag) {
                        case 27:
                        case 5:
                            t = e.child.stateNode;
                            break;
                        case 1:
                            t = e.child.stateNode
                    }
                    try {
                        Ys(l, t)
                    } catch (c) {
                        El(e, e.return, c)
                    }
                }
                break;
            case 27:
                t === null && u & 4 && lo(e);
            case 26:
            case 5:
                Le(l, e), t === null && u & 4 && Ir(e), u & 512 && Qa(e, e.return);
                break;
            case 12:
                Le(l, e);
                break;
            case 13:
                Le(l, e), u & 4 && no(l, e), u & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Qd.bind(null, e), ny(l, e))));
                break;
            case 22:
                if (u = e.memoizedState !== null || pe, !u) {
                    t = t !== null && t.memoizedState !== null || Vl, a = pe;
                    var n = Vl;
                    pe = u, (Vl = t) && !n ? Ze(l, e, (e.subtreeFlags & 8772) !== 0) : Le(l, e), pe = a, Vl = n
                }
                break;
            case 30:
                break;
            default:
                Le(l, e)
        }
    }

    function uo(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null, uo(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Me(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
    }
    var Ml = null,
        Et = !1;

    function Te(l, t, e) {
        for (e = e.child; e !== null;) ao(l, t, e), e = e.sibling
    }

    function ao(l, t, e) {
        if (St && typeof St.onCommitFiberUnmount == "function") try {
            St.onCommitFiberUnmount(Ru, e)
        } catch {}
        switch (e.tag) {
            case 26:
                Vl || Pt(e, t), Te(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
                break;
            case 27:
                Vl || Pt(e, t);
                var u = Ml,
                    a = Et;
                We(e.type) && (Ml = e.stateNode, Et = !1), Te(l, t, e), $a(e.stateNode), Ml = u, Et = a;
                break;
            case 5:
                Vl || Pt(e, t);
            case 6:
                if (u = Ml, a = Et, Ml = null, Te(l, t, e), Ml = u, Et = a, Ml !== null)
                    if (Et) try {
                        (Ml.nodeType === 9 ? Ml.body : Ml.nodeName === "HTML" ? Ml.ownerDocument.body : Ml).removeChild(e.stateNode)
                    } catch (n) {
                        El(e, t, n)
                    } else try {
                        Ml.removeChild(e.stateNode)
                    } catch (n) {
                        El(e, t, n)
                    }
                break;
            case 18:
                Ml !== null && (Et ? (l = Ml, Jo(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), an(l)) : Jo(Ml, e.stateNode));
                break;
            case 4:
                u = Ml, a = Et, Ml = e.stateNode.containerInfo, Et = !0, Te(l, t, e), Ml = u, Et = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Vl || Qe(2, e, t), Vl || Qe(4, e, t), Te(l, t, e);
                break;
            case 1:
                Vl || (Pt(e, t), u = e.stateNode, typeof u.componentWillUnmount == "function" && Fr(e, t, u)), Te(l, t, e);
                break;
            case 21:
                Te(l, t, e);
                break;
            case 22:
                Vl = (u = Vl) || e.memoizedState !== null, Te(l, t, e), Vl = u;
                break;
            default:
                Te(l, t, e)
        }
    }

    function no(l, t) {
        if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
            an(l)
        } catch (e) {
            El(t, t.return, e)
        }
    }

    function Hd(l) {
        switch (l.tag) {
            case 13:
            case 19:
                var t = l.stateNode;
                return t === null && (t = l.stateNode = new to), t;
            case 22:
                return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new to), t;
            default:
                throw Error(d(435, l.tag))
        }
    }

    function Vi(l, t) {
        var e = Hd(l);
        t.forEach(function(u) {
            var a = Ld.bind(null, l, u);
            e.has(u) || (e.add(u), u.then(a, a))
        })
    }

    function zt(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var u = 0; u < e.length; u++) {
                var a = e[u],
                    n = l,
                    c = t,
                    i = c;
                l: for (; i !== null;) {
                    switch (i.tag) {
                        case 27:
                            if (We(i.type)) {
                                Ml = i.stateNode, Et = !1;
                                break l
                            }
                            break;
                        case 5:
                            Ml = i.stateNode, Et = !1;
                            break l;
                        case 3:
                        case 4:
                            Ml = i.stateNode.containerInfo, Et = !0;
                            break l
                    }
                    i = i.return
                }
                if (Ml === null) throw Error(d(160));
                ao(n, c, a), Ml = null, Et = !1, n = a.alternate, n !== null && (n.return = null), a.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) co(t, l), t = t.sibling
    }
    var Jt = null;

    function co(l, t) {
        var e = l.alternate,
            u = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                zt(t, l), Ot(l), u & 4 && (Qe(3, l, l.return), Xa(3, l), Qe(5, l, l.return));
                break;
            case 1:
                zt(t, l), Ot(l), u & 512 && (Vl || e === null || Pt(e, e.return)), u & 64 && pe && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? u : e.concat(u))));
                break;
            case 26:
                var a = Jt;
                if (zt(t, l), Ot(l), u & 512 && (Vl || e === null || Pt(e, e.return)), u & 4) {
                    var n = e !== null ? e.memoizedState : null;
                    if (u = l.memoizedState, e === null)
                        if (u === null)
                            if (l.stateNode === null) {
                                l: {
                                    u = l.type,
                                    e = l.memoizedProps,
                                    a = a.ownerDocument || a;t: switch (u) {
                                        case "title":
                                            n = a.getElementsByTagName("title")[0], (!n || n[Oe] || n[Ql] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = a.createElement(u), a.head.insertBefore(n, a.querySelector("head > title"))), st(n, u, e), n[Ql] = l, Ll(n), u = n;
                                            break l;
                                        case "link":
                                            var c = t0("link", "href", a).get(u + (e.href || ""));
                                            if (c) {
                                                for (var i = 0; i < c.length; i++)
                                                    if (n = c[i], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                        c.splice(i, 1);
                                                        break t
                                                    }
                                            }
                                            n = a.createElement(u), st(n, u, e), a.head.appendChild(n);
                                            break;
                                        case "meta":
                                            if (c = t0("meta", "content", a).get(u + (e.content || ""))) {
                                                for (i = 0; i < c.length; i++)
                                                    if (n = c[i], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                        c.splice(i, 1);
                                                        break t
                                                    }
                                            }
                                            n = a.createElement(u), st(n, u, e), a.head.appendChild(n);
                                            break;
                                        default:
                                            throw Error(d(468, u))
                                    }
                                    n[Ql] = l,
                                    Ll(n),
                                    u = n
                                }
                                l.stateNode = u
                            }
                    else e0(a, l.type, l.stateNode);
                    else l.stateNode = l0(a, u, l.memoizedProps);
                    else n !== u ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, u === null ? e0(a, l.type, l.stateNode) : l0(a, u, l.memoizedProps)) : u === null && l.stateNode !== null && Xi(l, l.memoizedProps, e.memoizedProps)
                }
                break;
            case 27:
                zt(t, l), Ot(l), u & 512 && (Vl || e === null || Pt(e, e.return)), e !== null && u & 4 && Xi(l, l.memoizedProps, e.memoizedProps);
                break;
            case 5:
                if (zt(t, l), Ot(l), u & 512 && (Vl || e === null || Pt(e, e.return)), l.flags & 32) {
                    a = l.stateNode;
                    try {
                        Uu(a, "")
                    } catch (m) {
                        El(l, l.return, m)
                    }
                }
                u & 4 && l.stateNode != null && (a = l.memoizedProps, Xi(l, a, e !== null ? e.memoizedProps : a)), u & 1024 && (Zi = !0);
                break;
            case 6:
                if (zt(t, l), Ot(l), u & 4) {
                    if (l.stateNode === null) throw Error(d(162));
                    u = l.memoizedProps, e = l.stateNode;
                    try {
                        e.nodeValue = u
                    } catch (m) {
                        El(l, l.return, m)
                    }
                }
                break;
            case 3:
                if (sc = null, a = Jt, Jt = ic(t.containerInfo), zt(t, l), Jt = a, Ot(l), u & 4 && e !== null && e.memoizedState.isDehydrated) try {
                    an(t.containerInfo)
                } catch (m) {
                    El(l, l.return, m)
                }
                Zi && (Zi = !1, io(l));
                break;
            case 4:
                u = Jt, Jt = ic(l.stateNode.containerInfo), zt(t, l), Ot(l), Jt = u;
                break;
            case 12:
                zt(t, l), Ot(l);
                break;
            case 13:
                zt(t, l), Ot(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && ($i = gt()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, Vi(l, u)));
                break;
            case 22:
                a = l.memoizedState !== null;
                var f = e !== null && e.memoizedState !== null,
                    v = pe,
                    S = Vl;
                if (pe = v || a, Vl = S || f, zt(t, l), Vl = S, pe = v, Ot(l), u & 8192) l: for (t = l.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (e === null || f || pe || Vl || pu(l)), e = null, t = l;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            f = e = t;
                            try {
                                if (n = f.stateNode, a) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    i = f.stateNode;
                                    var p = f.memoizedProps.style,
                                        h = p != null && p.hasOwnProperty("display") ? p.display : null;
                                    i.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim()
                                }
                            } catch (m) {
                                El(f, f.return, m)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            f = t;
                            try {
                                f.stateNode.nodeValue = a ? "" : f.memoizedProps
                            } catch (m) {
                                El(f, f.return, m)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === l) break l;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === l) break l;
                        e === t && (e = null), t = t.return
                    }
                    e === t && (e = null), t.sibling.return = t.return, t = t.sibling
                }
                u & 4 && (u = l.updateQueue, u !== null && (e = u.retryQueue, e !== null && (u.retryQueue = null, Vi(l, e))));
                break;
            case 19:
                zt(t, l), Ot(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, Vi(l, u)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                zt(t, l), Ot(l)
        }
    }

    function Ot(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, u = l.return; u !== null;) {
                    if (Pr(u)) {
                        e = u;
                        break
                    }
                    u = u.return
                }
                if (e == null) throw Error(d(160));
                switch (e.tag) {
                    case 27:
                        var a = e.stateNode,
                            n = Qi(l);
                        kn(l, n, a);
                        break;
                    case 5:
                        var c = e.stateNode;
                        e.flags & 32 && (Uu(c, ""), e.flags &= -33);
                        var i = Qi(l);
                        kn(l, i, c);
                        break;
                    case 3:
                    case 4:
                        var f = e.stateNode.containerInfo,
                            v = Qi(l);
                        Li(l, v, f);
                        break;
                    default:
                        throw Error(d(161))
                }
            } catch (S) {
                El(l, l.return, S)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }

    function io(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null;) {
                var t = l;
                io(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling
            }
    }

    function Le(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) eo(l, t.alternate, t), t = t.sibling
    }

    function pu(l) {
        for (l = l.child; l !== null;) {
            var t = l;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Qe(4, t, t.return), pu(t);
                    break;
                case 1:
                    Pt(t, t.return);
                    var e = t.stateNode;
                    typeof e.componentWillUnmount == "function" && Fr(t, t.return, e), pu(t);
                    break;
                case 27:
                    $a(t.stateNode);
                case 26:
                case 5:
                    Pt(t, t.return), pu(t);
                    break;
                case 22:
                    t.memoizedState === null && pu(t);
                    break;
                case 30:
                    pu(t);
                    break;
                default:
                    pu(t)
            }
            l = l.sibling
        }
    }

    function Ze(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var u = t.alternate,
                a = l,
                n = t,
                c = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    Ze(a, n, e), Xa(4, n);
                    break;
                case 1:
                    if (Ze(a, n, e), u = n, a = u.stateNode, typeof a.componentDidMount == "function") try {
                        a.componentDidMount()
                    } catch (v) {
                        El(u, u.return, v)
                    }
                    if (u = n, a = u.updateQueue, a !== null) {
                        var i = u.stateNode;
                        try {
                            var f = a.shared.hiddenCallbacks;
                            if (f !== null)
                                for (a.shared.hiddenCallbacks = null, a = 0; a < f.length; a++) Bs(f[a], i)
                        } catch (v) {
                            El(u, u.return, v)
                        }
                    }
                    e && c & 64 && $r(n), Qa(n, n.return);
                    break;
                case 27:
                    lo(n);
                case 26:
                case 5:
                    Ze(a, n, e), e && u === null && c & 4 && Ir(n), Qa(n, n.return);
                    break;
                case 12:
                    Ze(a, n, e);
                    break;
                case 13:
                    Ze(a, n, e), e && c & 4 && no(a, n);
                    break;
                case 22:
                    n.memoizedState === null && Ze(a, n, e), Qa(n, n.return);
                    break;
                case 30:
                    break;
                default:
                    Ze(a, n, e)
            }
            t = t.sibling
        }
    }

    function Ki(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Ra(e))
    }

    function wi(l, t) {
        l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ra(l))
    }

    function le(l, t, e, u) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) fo(l, t, e, u), t = t.sibling
    }

    function fo(l, t, e, u) {
        var a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                le(l, t, e, u), a & 2048 && Xa(9, t);
                break;
            case 1:
                le(l, t, e, u);
                break;
            case 3:
                le(l, t, e, u), a & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ra(l)));
                break;
            case 12:
                if (a & 2048) {
                    le(l, t, e, u), l = t.stateNode;
                    try {
                        var n = t.memoizedProps,
                            c = n.id,
                            i = n.onPostCommit;
                        typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                    } catch (f) {
                        El(t, t.return, f)
                    }
                } else le(l, t, e, u);
                break;
            case 13:
                le(l, t, e, u);
                break;
            case 23:
                break;
            case 22:
                n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? le(l, t, e, u) : La(l, t) : n._visibility & 2 ? le(l, t, e, u) : (n._visibility |= 2, $u(l, t, e, u, (t.subtreeFlags & 10256) !== 0)), a & 2048 && Ki(c, t);
                break;
            case 24:
                le(l, t, e, u), a & 2048 && wi(t.alternate, t);
                break;
            default:
                le(l, t, e, u)
        }
    }

    function $u(l, t, e, u, a) {
        for (a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var n = l,
                c = t,
                i = e,
                f = u,
                v = c.flags;
            switch (c.tag) {
                case 0:
                case 11:
                case 15:
                    $u(n, c, i, f, a), Xa(8, c);
                    break;
                case 23:
                    break;
                case 22:
                    var S = c.stateNode;
                    c.memoizedState !== null ? S._visibility & 2 ? $u(n, c, i, f, a) : La(n, c) : (S._visibility |= 2, $u(n, c, i, f, a)), a && v & 2048 && Ki(c.alternate, c);
                    break;
                case 24:
                    $u(n, c, i, f, a), a && v & 2048 && wi(c.alternate, c);
                    break;
                default:
                    $u(n, c, i, f, a)
            }
            t = t.sibling
        }
    }

    function La(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var e = l,
                    u = t,
                    a = u.flags;
                switch (u.tag) {
                    case 22:
                        La(e, u), a & 2048 && Ki(u.alternate, u);
                        break;
                    case 24:
                        La(e, u), a & 2048 && wi(u.alternate, u);
                        break;
                    default:
                        La(e, u)
                }
                t = t.sibling
            }
    }
    var Za = 8192;

    function Fu(l) {
        if (l.subtreeFlags & Za)
            for (l = l.child; l !== null;) so(l), l = l.sibling
    }

    function so(l) {
        switch (l.tag) {
            case 26:
                Fu(l), l.flags & Za && l.memoizedState !== null && Sy(Jt, l.memoizedState, l.memoizedProps);
                break;
            case 5:
                Fu(l);
                break;
            case 3:
            case 4:
                var t = Jt;
                Jt = ic(l.stateNode.containerInfo), Fu(l), Jt = t;
                break;
            case 22:
                l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = Za, Za = 16777216, Fu(l), Za = t) : Fu(l));
                break;
            default:
                Fu(l)
        }
    }

    function ro(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child, l !== null)) {
            t.child = null;
            do t = l.sibling, l.sibling = null, l = t; while (l !== null)
        }
    }

    function Va(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var u = t[e];
                    tt = u, yo(u, l)
                }
            ro(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) oo(l), l = l.sibling
    }

    function oo(l) {
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Va(l), l.flags & 2048 && Qe(9, l, l.return);
                break;
            case 3:
                Va(l);
                break;
            case 12:
                Va(l);
                break;
            case 22:
                var t = l.stateNode;
                l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Wn(l)) : Va(l);
                break;
            default:
                Va(l)
        }
    }

    function Wn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var u = t[e];
                    tt = u, yo(u, l)
                }
            ro(l)
        }
        for (l = l.child; l !== null;) {
            switch (t = l, t.tag) {
                case 0:
                case 11:
                case 15:
                    Qe(8, t, t.return), Wn(t);
                    break;
                case 22:
                    e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Wn(t));
                    break;
                default:
                    Wn(t)
            }
            l = l.sibling
        }
    }

    function yo(l, t) {
        for (; tt !== null;) {
            var e = tt;
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    Qe(8, e, t);
                    break;
                case 23:
                case 22:
                    if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                        var u = e.memoizedState.cachePool.pool;
                        u != null && u.refCount++
                    }
                    break;
                case 24:
                    Ra(e.memoizedState.cache)
            }
            if (u = e.child, u !== null) u.return = e, tt = u;
            else l: for (e = l; tt !== null;) {
                u = tt;
                var a = u.sibling,
                    n = u.return;
                if (uo(u), u === e) {
                    tt = null;
                    break l
                }
                if (a !== null) {
                    a.return = n, tt = a;
                    break l
                }
                tt = n
            }
        }
    }
    var jd = {
            getCacheForType: function(l) {
                var t = ot(Fl),
                    e = t.data.get(l);
                return e === void 0 && (e = l(), t.data.set(l, e)), e
            }
        },
        qd = typeof WeakMap == "function" ? WeakMap : Map,
        vl = 0,
        Dl = null,
        nl = null,
        rl = 0,
        hl = 0,
        Mt = null,
        Ve = !1,
        Iu = !1,
        Ji = !1,
        Ee = 0,
        Yl = 0,
        Ke = 0,
        Tu = 0,
        ki = 0,
        Gt = 0,
        Pu = 0,
        Ka = null,
        At = null,
        Wi = !1,
        $i = 0,
        $n = 1 / 0,
        Fn = null,
        we = null,
        ft = 0,
        Je = null,
        la = null,
        ta = 0,
        Fi = 0,
        Ii = null,
        vo = null,
        wa = 0,
        Pi = null;

    function xt() {
        if ((vl & 2) !== 0 && rl !== 0) return rl & -rl;
        if (g.T !== null) {
            var l = Lu;
            return l !== 0 ? l : cf()
        }
        return sn()
    }

    function ho() {
        Gt === 0 && (Gt = (rl & 536870912) === 0 || yl ? $t() : 536870912);
        var l = Ct.current;
        return l !== null && (l.flags |= 32), Gt
    }

    function Ut(l, t, e) {
        (l === Dl && (hl === 2 || hl === 9) || l.cancelPendingCommit !== null) && (ea(l, 0), ke(l, rl, Gt, !1)), ae(l, e), ((vl & 2) === 0 || l !== Dl) && (l === Dl && ((vl & 2) === 0 && (Tu |= e), Yl === 4 && ke(l, rl, Gt, !1)), te(l))
    }

    function mo(l, t, e) {
        if ((vl & 6) !== 0) throw Error(d(327));
        var u = !e && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Wt(l, t),
            a = u ? Cd(l, t) : ef(l, t, !0),
            n = u;
        do {
            if (a === 0) {
                Iu && !u && ke(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate, n && !Bd(e)) {
                    a = ef(l, t, !1), n = !1;
                    continue
                }
                if (a === 2) {
                    if (n = t, l.errorRecoveryDisabledLanes & n) var c = 0;
                    else c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        l: {
                            var i = l;a = Ka;
                            var f = i.current.memoizedState.isDehydrated;
                            if (f && (ea(i, c).flags |= 256), c = ef(i, c, !1), c !== 2) {
                                if (Ji && !f) {
                                    i.errorRecoveryDisabledLanes |= n, Tu |= n, a = 4;
                                    break l
                                }
                                n = At, At = a, n !== null && (At === null ? At = n : At.push.apply(At, n))
                            }
                            a = c
                        }
                        if (n = !1, a !== 2) continue
                    }
                }
                if (a === 1) {
                    ea(l, 0), ke(l, t, 0, !0);
                    break
                }
                l: {
                    switch (u = l, n = a, n) {
                        case 0:
                        case 1:
                            throw Error(d(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            ke(u, t, Gt, !Ve);
                            break l;
                        case 2:
                            At = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(d(329))
                    }
                    if ((t & 62914560) === t && (a = $i + 300 - gt(), 10 < a)) {
                        if (ke(u, t, Gt, !Ve), eu(u, 0, !0) !== 0) break l;
                        u.timeoutHandle = Ko(go.bind(null, u, e, At, Fn, Wi, t, Gt, Tu, Pu, Ve, n, 2, -0, 0), a);
                        break l
                    }
                    go(u, e, At, Fn, Wi, t, Gt, Tu, Pu, Ve, n, 0, -0, 0)
                }
            }
            break
        } while (!0);
        te(l)
    }

    function go(l, t, e, u, a, n, c, i, f, v, S, p, h, m) {
        if (l.timeoutHandle = -1, p = t.subtreeFlags, (p & 8192 || (p & 16785408) === 16785408) && (Pa = {
                stylesheets: null,
                count: 0,
                unsuspend: gy
            }, so(t), p = by(), p !== null)) {
            l.cancelPendingCommit = p(_o.bind(null, l, t, n, e, u, a, c, i, f, S, 1, h, m)), ke(l, n, c, !v);
            return
        }
        _o(l, t, n, e, u, a, c, i, f)
    }

    function Bd(l) {
        for (var t = l;;) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
                for (var u = 0; u < e.length; u++) {
                    var a = e[u],
                        n = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!Dt(n(), a)) return !1
                    } catch {
                        return !1
                    }
                }
            if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
            else {
                if (t === l) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === l) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function ke(l, t, e, u) {
        t &= ~ki, t &= ~Tu, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
        for (var a = t; 0 < a;) {
            var n = 31 - bt(a),
                c = 1 << n;
            u[n] = -1, a &= ~c
        }
        e !== 0 && ze(l, e, t)
    }

    function In() {
        return (vl & 6) === 0 ? (Ja(0), !1) : !0
    }

    function lf() {
        if (nl !== null) {
            if (hl === 0) var l = nl.return;
            else l = nl, ve = hu = null, gi(l), ku = null, Ya = 0, l = nl;
            for (; l !== null;) Wr(l.alternate, l), l = l.return;
            nl = null
        }
    }

    function ea(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1, ly(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), lf(), Dl = l, nl = e = oe(l.current, null), rl = t, hl = 0, Mt = null, Ve = !1, Iu = Wt(l, t), Ji = !1, Pu = Gt = ki = Tu = Ke = Yl = 0, At = Ka = null, Wi = !1, (t & 8) !== 0 && (t |= t & 32);
        var u = l.entangledLanes;
        if (u !== 0)
            for (l = l.entanglements, u &= t; 0 < u;) {
                var a = 31 - bt(u),
                    n = 1 << a;
                t |= l[a], u &= ~n
            }
        return Ee = t, pn(), e
    }

    function So(l, t) {
        I = null, g.H = Gn, t === Oa || t === Mn ? (t = js(), hl = 3) : t === Us ? (t = js(), hl = 4) : hl = t === qr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Mt = t, nl === null && (Yl = 1, Vn(l, jt(t, l.current)))
    }

    function bo() {
        var l = g.H;
        return g.H = Gn, l === null ? Gn : l
    }

    function po() {
        var l = g.A;
        return g.A = jd, l
    }

    function tf() {
        Yl = 4, Ve || (rl & 4194048) !== rl && Ct.current !== null || (Iu = !0), (Ke & 134217727) === 0 && (Tu & 134217727) === 0 || Dl === null || ke(Dl, rl, Gt, !1)
    }

    function ef(l, t, e) {
        var u = vl;
        vl |= 2;
        var a = bo(),
            n = po();
        (Dl !== l || rl !== t) && (Fn = null, ea(l, t)), t = !1;
        var c = Yl;
        l: do try {
                if (hl !== 0 && nl !== null) {
                    var i = nl,
                        f = Mt;
                    switch (hl) {
                        case 8:
                            lf(), c = 6;
                            break l;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ct.current === null && (t = !0);
                            var v = hl;
                            if (hl = 0, Mt = null, ua(l, i, f, v), e && Iu) {
                                c = 0;
                                break l
                            }
                            break;
                        default:
                            v = hl, hl = 0, Mt = null, ua(l, i, f, v)
                    }
                }
                Yd(), c = Yl;
                break
            } catch (S) {
                So(l, S)
            }
            while (!0);
            return t && l.shellSuspendCounter++, ve = hu = null, vl = u, g.H = a, g.A = n, nl === null && (Dl = null, rl = 0, pn()), c
    }

    function Yd() {
        for (; nl !== null;) To(nl)
    }

    function Cd(l, t) {
        var e = vl;
        vl |= 2;
        var u = bo(),
            a = po();
        Dl !== l || rl !== t ? (Fn = null, $n = gt() + 500, ea(l, t)) : Iu = Wt(l, t);
        l: do try {
                if (hl !== 0 && nl !== null) {
                    t = nl;
                    var n = Mt;
                    t: switch (hl) {
                        case 1:
                            hl = 0, Mt = null, ua(l, t, n, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ns(n)) {
                                hl = 0, Mt = null, Eo(t);
                                break
                            }
                            t = function() {
                                hl !== 2 && hl !== 9 || Dl !== l || (hl = 7), te(l)
                            }, n.then(t, t);
                            break l;
                        case 3:
                            hl = 7;
                            break l;
                        case 4:
                            hl = 5;
                            break l;
                        case 7:
                            Ns(n) ? (hl = 0, Mt = null, Eo(t)) : (hl = 0, Mt = null, ua(l, t, n, 7));
                            break;
                        case 5:
                            var c = null;
                            switch (nl.tag) {
                                case 26:
                                    c = nl.memoizedState;
                                case 5:
                                case 27:
                                    var i = nl;
                                    if (!c || u0(c)) {
                                        hl = 0, Mt = null;
                                        var f = i.sibling;
                                        if (f !== null) nl = f;
                                        else {
                                            var v = i.return;
                                            v !== null ? (nl = v, Pn(v)) : nl = null
                                        }
                                        break t
                                    }
                            }
                            hl = 0, Mt = null, ua(l, t, n, 5);
                            break;
                        case 6:
                            hl = 0, Mt = null, ua(l, t, n, 6);
                            break;
                        case 8:
                            lf(), Yl = 6;
                            break l;
                        default:
                            throw Error(d(462))
                    }
                }
                Gd();
                break
            } catch (S) {
                So(l, S)
            }
            while (!0);
            return ve = hu = null, g.H = u, g.A = a, vl = e, nl !== null ? 0 : (Dl = null, rl = 0, pn(), Yl)
    }

    function Gd() {
        for (; nl !== null && !Du();) To(nl)
    }

    function To(l) {
        var t = Jr(l.alternate, l, Ee);
        l.memoizedProps = l.pendingProps, t === null ? Pn(l) : nl = t
    }

    function Eo(l) {
        var t = l,
            e = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Qr(e, t, t.pendingProps, t.type, void 0, rl);
                break;
            case 11:
                t = Qr(e, t, t.pendingProps, t.type.render, t.ref, rl);
                break;
            case 5:
                gi(t);
            default:
                Wr(e, t), t = nl = Es(t, Ee), t = Jr(e, t, Ee)
        }
        l.memoizedProps = l.pendingProps, t === null ? Pn(l) : nl = t
    }

    function ua(l, t, e, u) {
        ve = hu = null, gi(t), ku = null, Ya = 0;
        var a = t.return;
        try {
            if (Od(l, a, t, e, rl)) {
                Yl = 1, Vn(l, jt(e, l.current)), nl = null;
                return
            }
        } catch (n) {
            if (a !== null) throw nl = a, n;
            Yl = 1, Vn(l, jt(e, l.current)), nl = null;
            return
        }
        t.flags & 32768 ? (yl || u === 1 ? l = !0 : Iu || (rl & 536870912) !== 0 ? l = !1 : (Ve = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Ct.current, u !== null && u.tag === 13 && (u.flags |= 16384))), Ao(t, l)) : Pn(t)
    }

    function Pn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                Ao(t, Ve);
                return
            }
            l = t.return;
            var e = xd(t.alternate, t, Ee);
            if (e !== null) {
                nl = e;
                return
            }
            if (t = t.sibling, t !== null) {
                nl = t;
                return
            }
            nl = t = l
        } while (t !== null);
        Yl === 0 && (Yl = 5)
    }

    function Ao(l, t) {
        do {
            var e = Ud(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767, nl = e;
                return
            }
            if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
                nl = l;
                return
            }
            nl = l = e
        } while (l !== null);
        Yl = 6, nl = null
    }

    function _o(l, t, e, u, a, n, c, i, f) {
        l.cancelPendingCommit = null;
        do lc(); while (ft !== 0);
        if ((vl & 6) !== 0) throw Error(d(327));
        if (t !== null) {
            if (t === l.current) throw Error(d(177));
            if (n = t.lanes | t.childLanes, n |= wc, at(l, e, n, c, i, f), l === Dl && (nl = Dl = null, rl = 0), la = t, Je = l, ta = e, Fi = n, Ii = a, vo = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Zd(De, function() {
                    return Mo(), null
                })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
                u = g.T, g.T = null, a = D.p, D.p = 2, c = vl, vl |= 4;
                try {
                    Nd(l, t, e)
                } finally {
                    vl = c, D.p = a, g.T = u
                }
            }
            ft = 1, Do(), Ro(), zo()
        }
    }

    function Do() {
        if (ft === 1) {
            ft = 0;
            var l = Je,
                t = la,
                e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = g.T, g.T = null;
                var u = D.p;
                D.p = 2;
                var a = vl;
                vl |= 4;
                try {
                    co(t, l);
                    var n = hf,
                        c = ds(l.containerInfo),
                        i = n.focusedElem,
                        f = n.selectionRange;
                    if (c !== i && i && i.ownerDocument && os(i.ownerDocument.documentElement, i)) {
                        if (f !== null && Qc(i)) {
                            var v = f.start,
                                S = f.end;
                            if (S === void 0 && (S = v), "selectionStart" in i) i.selectionStart = v, i.selectionEnd = Math.min(S, i.value.length);
                            else {
                                var p = i.ownerDocument || document,
                                    h = p && p.defaultView || window;
                                if (h.getSelection) {
                                    var m = h.getSelection(),
                                        L = i.textContent.length,
                                        X = Math.min(f.start, L),
                                        bl = f.end === void 0 ? X : Math.min(f.end, L);
                                    !m.extend && X > bl && (c = bl, bl = X, X = c);
                                    var o = rs(i, X),
                                        r = rs(i, bl);
                                    if (o && r && (m.rangeCount !== 1 || m.anchorNode !== o.node || m.anchorOffset !== o.offset || m.focusNode !== r.node || m.focusOffset !== r.offset)) {
                                        var y = p.createRange();
                                        y.setStart(o.node, o.offset), m.removeAllRanges(), X > bl ? (m.addRange(y), m.extend(r.node, r.offset)) : (y.setEnd(r.node, r.offset), m.addRange(y))
                                    }
                                }
                            }
                        }
                        for (p = [], m = i; m = m.parentNode;) m.nodeType === 1 && p.push({
                            element: m,
                            left: m.scrollLeft,
                            top: m.scrollTop
                        });
                        for (typeof i.focus == "function" && i.focus(), i = 0; i < p.length; i++) {
                            var b = p[i];
                            b.element.scrollLeft = b.left, b.element.scrollTop = b.top
                        }
                    }
                    dc = !!vf, hf = vf = null
                } finally {
                    vl = a, D.p = u, g.T = e
                }
            }
            l.current = t, ft = 2
        }
    }

    function Ro() {
        if (ft === 2) {
            ft = 0;
            var l = Je,
                t = la,
                e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = g.T, g.T = null;
                var u = D.p;
                D.p = 2;
                var a = vl;
                vl |= 4;
                try {
                    eo(l, t.alternate, t)
                } finally {
                    vl = a, D.p = u, g.T = e
                }
            }
            ft = 3
        }
    }

    function zo() {
        if (ft === 4 || ft === 3) {
            ft = 0, bc();
            var l = Je,
                t = la,
                e = ta,
                u = vo;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ft = 5 : (ft = 0, la = Je = null, Oo(l, l.pendingLanes));
            var a = l.pendingLanes;
            if (a === 0 && (we = null), ce(e), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function") try {
                St.onCommitFiberRoot(Ru, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (u !== null) {
                t = g.T, a = D.p, D.p = 2, g.T = null;
                try {
                    for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
                        var i = u[c];
                        n(i.value, {
                            componentStack: i.stack
                        })
                    }
                } finally {
                    g.T = t, D.p = a
                }
            }(ta & 3) !== 0 && lc(), te(l), a = l.pendingLanes, (e & 4194090) !== 0 && (a & 42) !== 0 ? l === Pi ? wa++ : (wa = 0, Pi = l) : wa = 0, Ja(0)
        }
    }

    function Oo(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ra(t)))
    }

    function lc(l) {
        return Do(), Ro(), zo(), Mo()
    }

    function Mo() {
        if (ft !== 5) return !1;
        var l = Je,
            t = Fi;
        Fi = 0;
        var e = ce(ta),
            u = g.T,
            a = D.p;
        try {
            D.p = 32 > e ? 32 : e, g.T = null, e = Ii, Ii = null;
            var n = Je,
                c = ta;
            if (ft = 0, la = Je = null, ta = 0, (vl & 6) !== 0) throw Error(d(331));
            var i = vl;
            if (vl |= 4, oo(n.current), fo(n, n.current, c, e), vl = i, Ja(0, !1), St && typeof St.onPostCommitFiberRoot == "function") try {
                St.onPostCommitFiberRoot(Ru, n)
            } catch {}
            return !0
        } finally {
            D.p = a, g.T = u, Oo(l, t)
        }
    }

    function xo(l, t, e) {
        t = jt(e, t), t = Ui(l.stateNode, t, 2), l = Ye(l, t, 2), l !== null && (ae(l, 2), te(l))
    }

    function El(l, t, e) {
        if (l.tag === 3) xo(l, l, e);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    xo(t, l, e);
                    break
                } else if (t.tag === 1) {
                    var u = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (we === null || !we.has(u))) {
                        l = jt(e, l), e = Hr(2), u = Ye(t, e, 2), u !== null && (jr(e, u, t, l), ae(u, 2), te(u));
                        break
                    }
                }
                t = t.return
            }
    }

    function uf(l, t, e) {
        var u = l.pingCache;
        if (u === null) {
            u = l.pingCache = new qd;
            var a = new Set;
            u.set(t, a)
        } else a = u.get(t), a === void 0 && (a = new Set, u.set(t, a));
        a.has(e) || (Ji = !0, a.add(e), l = Xd.bind(null, l, t, e), t.then(l, l))
    }

    function Xd(l, t, e) {
        var u = l.pingCache;
        u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, Dl === l && (rl & e) === e && (Yl === 4 || Yl === 3 && (rl & 62914560) === rl && 300 > gt() - $i ? (vl & 2) === 0 && ea(l, 0) : ki |= e, Pu === rl && (Pu = 0)), te(l)
    }

    function Uo(l, t) {
        t === 0 && (t = Ou()), l = Cu(l, t), l !== null && (ae(l, t), te(l))
    }

    function Qd(l) {
        var t = l.memoizedState,
            e = 0;
        t !== null && (e = t.retryLane), Uo(l, e)
    }

    function Ld(l, t) {
        var e = 0;
        switch (l.tag) {
            case 13:
                var u = l.stateNode,
                    a = l.memoizedState;
                a !== null && (e = a.retryLane);
                break;
            case 19:
                u = l.stateNode;
                break;
            case 22:
                u = l.stateNode._retryCache;
                break;
            default:
                throw Error(d(314))
        }
        u !== null && u.delete(t), Uo(l, e)
    }

    function Zd(l, t) {
        return _e(l, t)
    }
    var tc = null,
        aa = null,
        af = !1,
        ec = !1,
        nf = !1,
        Eu = 0;

    function te(l) {
        l !== aa && l.next === null && (aa === null ? tc = aa = l : aa = aa.next = l), ec = !0, af || (af = !0, Kd())
    }

    function Ja(l, t) {
        if (!nf && ec) {
            nf = !0;
            do
                for (var e = !1, u = tc; u !== null;) {
                    if (l !== 0) {
                        var a = u.pendingLanes;
                        if (a === 0) var n = 0;
                        else {
                            var c = u.suspendedLanes,
                                i = u.pingedLanes;
                            n = (1 << 31 - bt(42 | l) + 1) - 1, n &= a & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (e = !0, qo(u, n))
                    } else n = rl, n = eu(u, u === Dl ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (n & 3) === 0 || Wt(u, n) || (e = !0, qo(u, n));
                    u = u.next
                }
            while (e);
            nf = !1
        }
    }

    function Vd() {
        No()
    }

    function No() {
        ec = af = !1;
        var l = 0;
        Eu !== 0 && (Pd() && (l = Eu), Eu = 0);
        for (var t = gt(), e = null, u = tc; u !== null;) {
            var a = u.next,
                n = Ho(u, t);
            n === 0 ? (u.next = null, e === null ? tc = a : e.next = a, a === null && (aa = e)) : (e = u, (l !== 0 || (n & 3) !== 0) && (ec = !0)), u = a
        }
        Ja(l)
    }

    function Ho(l, t) {
        for (var e = l.suspendedLanes, u = l.pingedLanes, a = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
            var c = 31 - bt(n),
                i = 1 << c,
                f = a[c];
            f === -1 ? ((i & e) === 0 || (i & u) !== 0) && (a[c] = Lt(i, t)) : f <= t && (l.expiredLanes |= i), n &= ~i
        }
        if (t = Dl, e = rl, e = eu(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, e === 0 || l === t && (hl === 2 || hl === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && sa(u), l.callbackNode = null, l.callbackPriority = 0;
        if ((e & 3) === 0 || Wt(l, e)) {
            if (t = e & -e, t === l.callbackPriority) return t;
            switch (u !== null && sa(u), ce(e)) {
                case 2:
                case 8:
                    e = Tc;
                    break;
                case 32:
                    e = De;
                    break;
                case 268435456:
                    e = Ec;
                    break;
                default:
                    e = De
            }
            return u = jo.bind(null, l), e = _e(e, u), l.callbackPriority = t, l.callbackNode = e, t
        }
        return u !== null && u !== null && sa(u), l.callbackPriority = 2, l.callbackNode = null, 2
    }

    function jo(l, t) {
        if (ft !== 0 && ft !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
        var e = l.callbackNode;
        if (lc() && l.callbackNode !== e) return null;
        var u = rl;
        return u = eu(l, l === Dl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (mo(l, u, t), Ho(l, gt()), l.callbackNode != null && l.callbackNode === e ? jo.bind(null, l) : null)
    }

    function qo(l, t) {
        if (lc()) return null;
        mo(l, t, !0)
    }

    function Kd() {
        ty(function() {
            (vl & 6) !== 0 ? _e(ra, Vd) : No()
        })
    }

    function cf() {
        return Eu === 0 && (Eu = $t()), Eu
    }

    function Bo(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : yn("" + l)
    }

    function Yo(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l
    }

    function wd(l, t, e, u, a) {
        if (t === "submit" && e && e.stateNode === a) {
            var n = Bo((a[Wl] || null).action),
                c = u.submitter;
            c && (t = (t = c[Wl] || null) ? Bo(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
            var i = new gn("action", "action", null, u, a);
            l.push({
                event: i,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (u.defaultPrevented) {
                            if (Eu !== 0) {
                                var f = c ? Yo(a, c) : new FormData(a);
                                Ri(e, {
                                    pending: !0,
                                    data: f,
                                    method: a.method,
                                    action: n
                                }, null, f)
                            }
                        } else typeof n == "function" && (i.preventDefault(), f = c ? Yo(a, c) : new FormData(a), Ri(e, {
                            pending: !0,
                            data: f,
                            method: a.method,
                            action: n
                        }, n, f))
                    },
                    currentTarget: a
                }]
            })
        }
    }
    for (var ff = 0; ff < Kc.length; ff++) {
        var sf = Kc[ff],
            Jd = sf.toLowerCase(),
            kd = sf[0].toUpperCase() + sf.slice(1);
        wt(Jd, "on" + kd)
    }
    wt(hs, "onAnimationEnd"), wt(ms, "onAnimationIteration"), wt(gs, "onAnimationStart"), wt("dblclick", "onDoubleClick"), wt("focusin", "onFocus"), wt("focusout", "onBlur"), wt(od, "onTransitionRun"), wt(dd, "onTransitionStart"), wt(yd, "onTransitionCancel"), wt(Ss, "onTransitionEnd"), Ue("onMouseEnter", ["mouseout", "mouseover"]), Ue("onMouseLeave", ["mouseout", "mouseover"]), Ue("onPointerEnter", ["pointerout", "pointerover"]), Ue("onPointerLeave", ["pointerout", "pointerover"]), fe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), fe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), fe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), fe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), fe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), fe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ka = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Wd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ka));

    function Co(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var u = l[e],
                a = u.event;
            u = u.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var c = u.length - 1; 0 <= c; c--) {
                        var i = u[c],
                            f = i.instance,
                            v = i.currentTarget;
                        if (i = i.listener, f !== n && a.isPropagationStopped()) break l;
                        n = i, a.currentTarget = v;
                        try {
                            n(a)
                        } catch (S) {
                            Zn(S)
                        }
                        a.currentTarget = null, n = f
                    } else
                        for (c = 0; c < u.length; c++) {
                            if (i = u[c], f = i.instance, v = i.currentTarget, i = i.listener, f !== n && a.isPropagationStopped()) break l;
                            n = i, a.currentTarget = v;
                            try {
                                n(a)
                            } catch (S) {
                                Zn(S)
                            }
                            a.currentTarget = null, n = f
                        }
            }
        }
    }

    function cl(l, t) {
        var e = t[au];
        e === void 0 && (e = t[au] = new Set);
        var u = l + "__bubble";
        e.has(u) || (Go(t, l, 2, !1), e.add(u))
    }

    function rf(l, t, e) {
        var u = 0;
        t && (u |= 4), Go(e, l, u, t)
    }
    var uc = "_reactListening" + Math.random().toString(36).slice(2);

    function of (l) {
        if (!l[uc]) {
            l[uc] = !0, Mu.forEach(function(e) {
                e !== "selectionchange" && (Wd.has(e) || rf(e, !1, l), rf(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[uc] || (t[uc] = !0, rf("selectionchange", !1, t))
        }
    }

    function Go(l, t, e, u) {
        switch (s0(t)) {
            case 2:
                var a = Ey;
                break;
            case 8:
                a = Ay;
                break;
            default:
                a = Df
        }
        e = a.bind(null, t, e, l), a = void 0, !Nc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), u ? a !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: a
        }) : l.addEventListener(t, e, !0) : a !== void 0 ? l.addEventListener(t, e, {
            passive: a
        }) : l.addEventListener(t, e, !1)
    }

    function df(l, t, e, u, a) {
        var n = u;
        if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (;;) {
            if (u === null) return;
            var c = u.tag;
            if (c === 3 || c === 4) {
                var i = u.stateNode.containerInfo;
                if (i === a) break;
                if (c === 4)
                    for (c = u.return; c !== null;) {
                        var f = c.tag;
                        if ((f === 3 || f === 4) && c.stateNode.containerInfo === a) return;
                        c = c.return
                    }
                for (; i !== null;) {
                    if (c = vt(i), c === null) return;
                    if (f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                        u = n = c;
                        continue l
                    }
                    i = i.parentNode
                }
            }
            u = u.return
        }
        Kf(function() {
            var v = n,
                S = xc(e),
                p = [];
            l: {
                var h = bs.get(l);
                if (h !== void 0) {
                    var m = gn,
                        L = l;
                    switch (l) {
                        case "keypress":
                            if (hn(e) === 0) break l;
                        case "keydown":
                        case "keyup":
                            m = Z0;
                            break;
                        case "focusin":
                            L = "focus", m = Bc;
                            break;
                        case "focusout":
                            L = "blur", m = Bc;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            m = Bc;
                            break;
                        case "click":
                            if (e.button === 2) break l;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            m = kf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            m = U0;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            m = w0;
                            break;
                        case hs:
                        case ms:
                        case gs:
                            m = j0;
                            break;
                        case Ss:
                            m = k0;
                            break;
                        case "scroll":
                        case "scrollend":
                            m = M0;
                            break;
                        case "wheel":
                            m = $0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            m = B0;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            m = $f;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            m = I0
                    }
                    var X = (t & 4) !== 0,
                        bl = !X && (l === "scroll" || l === "scrollend"),
                        o = X ? h !== null ? h + "Capture" : null : h;
                    X = [];
                    for (var r = v, y; r !== null;) {
                        var b = r;
                        if (y = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || y === null || o === null || (b = ya(r, o), b != null && X.push(Wa(r, b, y))), bl) break;
                        r = r.return
                    }
                    0 < X.length && (h = new m(h, L, null, e, S), p.push({
                        event: h,
                        listeners: X
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (h = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", h && e !== Mc && (L = e.relatedTarget || e.fromElement) && (vt(L) || L[ie])) break l;
                    if ((m || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (L = e.relatedTarget || e.toElement, m = v, L = L ? vt(L) : null, L !== null && (bl = C(L), X = L.tag, L !== bl || X !== 5 && X !== 27 && X !== 6) && (L = null)) : (m = null, L = v), m !== L)) {
                        if (X = kf, b = "onMouseLeave", o = "onMouseEnter", r = "mouse", (l === "pointerout" || l === "pointerover") && (X = $f, b = "onPointerLeave", o = "onPointerEnter", r = "pointer"), bl = m == null ? h : nu(m), y = L == null ? h : nu(L), h = new X(b, r + "leave", m, e, S), h.target = bl, h.relatedTarget = y, b = null, vt(S) === v && (X = new X(o, r + "enter", L, e, S), X.target = y, X.relatedTarget = bl, b = X), bl = b, m && L) t: {
                            for (X = m, o = L, r = 0, y = X; y; y = na(y)) r++;
                            for (y = 0, b = o; b; b = na(b)) y++;
                            for (; 0 < r - y;) X = na(X),
                            r--;
                            for (; 0 < y - r;) o = na(o),
                            y--;
                            for (; r--;) {
                                if (X === o || o !== null && X === o.alternate) break t;
                                X = na(X), o = na(o)
                            }
                            X = null
                        }
                        else X = null;
                        m !== null && Xo(p, h, m, X, !1), L !== null && bl !== null && Xo(p, bl, L, X, !0)
                    }
                }
                l: {
                    if (h = v ? nu(v) : window, m = h.nodeName && h.nodeName.toLowerCase(), m === "select" || m === "input" && h.type === "file") var U = as;
                    else if (es(h))
                        if (ns) U = fd;
                        else {
                            U = cd;
                            var tl = nd
                        }
                    else m = h.nodeName,
                    !m || m.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? v && Oc(v.elementType) && (U = as) : U = id;
                    if (U && (U = U(l, v))) {
                        us(p, U, e, S);
                        break l
                    }
                    tl && tl(l, h, v),
                    l === "focusout" && v && h.type === "number" && v.memoizedProps.value != null && zc(h, "number", h.value)
                }
                switch (tl = v ? nu(v) : window, l) {
                    case "focusin":
                        (es(tl) || tl.contentEditable === "true") && (qu = tl, Lc = v, Ta = null);
                        break;
                    case "focusout":
                        Ta = Lc = qu = null;
                        break;
                    case "mousedown":
                        Zc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Zc = !1, ys(p, e, S);
                        break;
                    case "selectionchange":
                        if (rd) break;
                    case "keydown":
                    case "keyup":
                        ys(p, e, S)
                }
                var q;
                if (Cc) l: {
                    switch (l) {
                        case "compositionstart":
                            var Q = "onCompositionStart";
                            break l;
                        case "compositionend":
                            Q = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            Q = "onCompositionUpdate";
                            break l
                    }
                    Q = void 0
                }
                else ju ? ls(l, e) && (Q = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (Q = "onCompositionStart");Q && (Ff && e.locale !== "ko" && (ju || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && ju && (q = wf()) : (He = S, Hc = "value" in He ? He.value : He.textContent, ju = !0)), tl = ac(v, Q), 0 < tl.length && (Q = new Wf(Q, l, null, e, S), p.push({
                    event: Q,
                    listeners: tl
                }), q ? Q.data = q : (q = ts(e), q !== null && (Q.data = q)))),
                (q = ld ? td(l, e) : ed(l, e)) && (Q = ac(v, "onBeforeInput"), 0 < Q.length && (tl = new Wf("onBeforeInput", "beforeinput", null, e, S), p.push({
                    event: tl,
                    listeners: Q
                }), tl.data = q)),
                wd(p, l, v, e, S)
            }
            Co(p, t)
        })
    }

    function Wa(l, t, e) {
        return {
            instance: l,
            listener: t,
            currentTarget: e
        }
    }

    function ac(l, t) {
        for (var e = t + "Capture", u = []; l !== null;) {
            var a = l,
                n = a.stateNode;
            if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = ya(l, e), a != null && u.unshift(Wa(l, a, n)), a = ya(l, t), a != null && u.push(Wa(l, a, n))), l.tag === 3) return u;
            l = l.return
        }
        return []
    }

    function na(l) {
        if (l === null) return null;
        do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }

    function Xo(l, t, e, u, a) {
        for (var n = t._reactName, c = []; e !== null && e !== u;) {
            var i = e,
                f = i.alternate,
                v = i.stateNode;
            if (i = i.tag, f !== null && f === u) break;
            i !== 5 && i !== 26 && i !== 27 || v === null || (f = v, a ? (v = ya(e, n), v != null && c.unshift(Wa(e, v, f))) : a || (v = ya(e, n), v != null && c.push(Wa(e, v, f)))), e = e.return
        }
        c.length !== 0 && l.push({
            event: t,
            listeners: c
        })
    }
    var $d = /\r\n?/g,
        Fd = /\u0000|\uFFFD/g;

    function Qo(l) {
        return (typeof l == "string" ? l : "" + l).replace($d, `
`).replace(Fd, "")
    }

    function Lo(l, t) {
        return t = Qo(t), Qo(l) === t
    }

    function nc() {}

    function Sl(l, t, e, u, a, n) {
        switch (e) {
            case "children":
                typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Uu(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Uu(l, "" + u);
                break;
            case "className":
                Tl(l, "class", u);
                break;
            case "tabIndex":
                Tl(l, "tabindex", u);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Tl(l, e, u);
                break;
            case "style":
                Zf(l, u, n);
                break;
            case "data":
                if (t !== "object") {
                    Tl(l, "data", u);
                    break
                }
            case "src":
            case "href":
                if (u === "" && (t !== "a" || e !== "href")) {
                    l.removeAttribute(e);
                    break
                }
                if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
                    l.removeAttribute(e);
                    break
                }
                u = yn("" + u), l.setAttribute(e, u);
                break;
            case "action":
            case "formAction":
                if (typeof u == "function") {
                    l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof n == "function" && (e === "formAction" ? (t !== "input" && Sl(l, t, "name", a.name, a, null), Sl(l, t, "formEncType", a.formEncType, a, null), Sl(l, t, "formMethod", a.formMethod, a, null), Sl(l, t, "formTarget", a.formTarget, a, null)) : (Sl(l, t, "encType", a.encType, a, null), Sl(l, t, "method", a.method, a, null), Sl(l, t, "target", a.target, a, null)));
                if (u == null || typeof u == "symbol" || typeof u == "boolean") {
                    l.removeAttribute(e);
                    break
                }
                u = yn("" + u), l.setAttribute(e, u);
                break;
            case "onClick":
                u != null && (l.onclick = nc);
                break;
            case "onScroll":
                u != null && cl("scroll", l);
                break;
            case "onScrollEnd":
                u != null && cl("scrollend", l);
                break;
            case "dangerouslySetInnerHTML":
                if (u != null) {
                    if (typeof u != "object" || !("__html" in u)) throw Error(d(61));
                    if (e = u.__html, e != null) {
                        if (a.children != null) throw Error(d(60));
                        l.innerHTML = e
                    }
                }
                break;
            case "multiple":
                l.multiple = u && typeof u != "function" && typeof u != "symbol";
                break;
            case "muted":
                l.muted = u && typeof u != "function" && typeof u != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
                    l.removeAttribute("xlink:href");
                    break
                }
                e = yn("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(e, "" + u) : l.removeAttribute(e);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
                break;
            case "capture":
            case "download":
                u === !0 ? l.setAttribute(e, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(e, u) : l.removeAttribute(e);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(e, u) : l.removeAttribute(e);
                break;
            case "rowSpan":
            case "start":
                u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(e) : l.setAttribute(e, u);
                break;
            case "popover":
                cl("beforetoggle", l), cl("toggle", l), fl(l, "popover", u);
                break;
            case "xlinkActuate":
                al(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
                break;
            case "xlinkArcrole":
                al(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
                break;
            case "xlinkRole":
                al(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
                break;
            case "xlinkShow":
                al(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
                break;
            case "xlinkTitle":
                al(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
                break;
            case "xlinkType":
                al(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
                break;
            case "xmlBase":
                al(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
                break;
            case "xmlLang":
                al(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
                break;
            case "xmlSpace":
                al(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
                break;
            case "is":
                fl(l, "is", u);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = z0.get(e) || e, fl(l, e, u))
        }
    }

    function yf(l, t, e, u, a, n) {
        switch (e) {
            case "style":
                Zf(l, u, n);
                break;
            case "dangerouslySetInnerHTML":
                if (u != null) {
                    if (typeof u != "object" || !("__html" in u)) throw Error(d(61));
                    if (e = u.__html, e != null) {
                        if (a.children != null) throw Error(d(60));
                        l.innerHTML = e
                    }
                }
                break;
            case "children":
                typeof u == "string" ? Uu(l, u) : (typeof u == "number" || typeof u == "bigint") && Uu(l, "" + u);
                break;
            case "onScroll":
                u != null && cl("scroll", l);
                break;
            case "onScrollEnd":
                u != null && cl("scrollend", l);
                break;
            case "onClick":
                u != null && (l.onclick = nc);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!da.hasOwnProperty(e)) l: {
                    if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), t = e.slice(2, a ? e.length - 7 : void 0), n = l[Wl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, a), typeof u == "function")) {
                        typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, u, a);
                        break l
                    }
                    e in l ? l[e] = u : u === !0 ? l.setAttribute(e, "") : fl(l, e, u)
                }
        }
    }

    function st(l, t, e) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                cl("error", l), cl("load", l);
                var u = !1,
                    a = !1,
                    n;
                for (n in e)
                    if (e.hasOwnProperty(n)) {
                        var c = e[n];
                        if (c != null) switch (n) {
                            case "src":
                                u = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(d(137, t));
                            default:
                                Sl(l, t, n, c, e, null)
                        }
                    }
                a && Sl(l, t, "srcSet", e.srcSet, e, null), u && Sl(l, t, "src", e.src, e, null);
                return;
            case "input":
                cl("invalid", l);
                var i = n = c = a = null,
                    f = null,
                    v = null;
                for (u in e)
                    if (e.hasOwnProperty(u)) {
                        var S = e[u];
                        if (S != null) switch (u) {
                            case "name":
                                a = S;
                                break;
                            case "type":
                                c = S;
                                break;
                            case "checked":
                                f = S;
                                break;
                            case "defaultChecked":
                                v = S;
                                break;
                            case "value":
                                n = S;
                                break;
                            case "defaultValue":
                                i = S;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (S != null) throw Error(d(137, t));
                                break;
                            default:
                                Sl(l, t, u, S, e, null)
                        }
                    }
                Gf(l, n, i, f, v, c, a, !1), ht(l);
                return;
            case "select":
                cl("invalid", l), u = c = n = null;
                for (a in e)
                    if (e.hasOwnProperty(a) && (i = e[a], i != null)) switch (a) {
                        case "value":
                            n = i;
                            break;
                        case "defaultValue":
                            c = i;
                            break;
                        case "multiple":
                            u = i;
                        default:
                            Sl(l, t, a, i, e, null)
                    }
                t = n, e = c, l.multiple = !!u, t != null ? xu(l, !!u, t, !1) : e != null && xu(l, !!u, e, !0);
                return;
            case "textarea":
                cl("invalid", l), n = a = u = null;
                for (c in e)
                    if (e.hasOwnProperty(c) && (i = e[c], i != null)) switch (c) {
                        case "value":
                            u = i;
                            break;
                        case "defaultValue":
                            a = i;
                            break;
                        case "children":
                            n = i;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (i != null) throw Error(d(91));
                            break;
                        default:
                            Sl(l, t, c, i, e, null)
                    }
                Qf(l, u, a, n), ht(l);
                return;
            case "option":
                for (f in e)
                    if (e.hasOwnProperty(f) && (u = e[f], u != null)) switch (f) {
                        case "selected":
                            l.selected = u && typeof u != "function" && typeof u != "symbol";
                            break;
                        default:
                            Sl(l, t, f, u, e, null)
                    }
                return;
            case "dialog":
                cl("beforetoggle", l), cl("toggle", l), cl("cancel", l), cl("close", l);
                break;
            case "iframe":
            case "object":
                cl("load", l);
                break;
            case "video":
            case "audio":
                for (u = 0; u < ka.length; u++) cl(ka[u], l);
                break;
            case "image":
                cl("error", l), cl("load", l);
                break;
            case "details":
                cl("toggle", l);
                break;
            case "embed":
            case "source":
            case "link":
                cl("error", l), cl("load", l);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (v in e)
                    if (e.hasOwnProperty(v) && (u = e[v], u != null)) switch (v) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(d(137, t));
                        default:
                            Sl(l, t, v, u, e, null)
                    }
                return;
            default:
                if (Oc(t)) {
                    for (S in e) e.hasOwnProperty(S) && (u = e[S], u !== void 0 && yf(l, t, S, u, e, void 0));
                    return
                }
        }
        for (i in e) e.hasOwnProperty(i) && (u = e[i], u != null && Sl(l, t, i, u, e, null))
    }

    function Id(l, t, e, u) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var a = null,
                    n = null,
                    c = null,
                    i = null,
                    f = null,
                    v = null,
                    S = null;
                for (m in e) {
                    var p = e[m];
                    if (e.hasOwnProperty(m) && p != null) switch (m) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            f = p;
                        default:
                            u.hasOwnProperty(m) || Sl(l, t, m, null, u, p)
                    }
                }
                for (var h in u) {
                    var m = u[h];
                    if (p = e[h], u.hasOwnProperty(h) && (m != null || p != null)) switch (h) {
                        case "type":
                            n = m;
                            break;
                        case "name":
                            a = m;
                            break;
                        case "checked":
                            v = m;
                            break;
                        case "defaultChecked":
                            S = m;
                            break;
                        case "value":
                            c = m;
                            break;
                        case "defaultValue":
                            i = m;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (m != null) throw Error(d(137, t));
                            break;
                        default:
                            m !== p && Sl(l, t, h, m, u, p)
                    }
                }
                Rc(l, c, i, f, v, S, n, a);
                return;
            case "select":
                m = c = i = h = null;
                for (n in e)
                    if (f = e[n], e.hasOwnProperty(n) && f != null) switch (n) {
                        case "value":
                            break;
                        case "multiple":
                            m = f;
                        default:
                            u.hasOwnProperty(n) || Sl(l, t, n, null, u, f)
                    }
                for (a in u)
                    if (n = u[a], f = e[a], u.hasOwnProperty(a) && (n != null || f != null)) switch (a) {
                        case "value":
                            h = n;
                            break;
                        case "defaultValue":
                            i = n;
                            break;
                        case "multiple":
                            c = n;
                        default:
                            n !== f && Sl(l, t, a, n, u, f)
                    }
                t = i, e = c, u = m, h != null ? xu(l, !!e, h, !1) : !!u != !!e && (t != null ? xu(l, !!e, t, !0) : xu(l, !!e, e ? [] : "", !1));
                return;
            case "textarea":
                m = h = null;
                for (i in e)
                    if (a = e[i], e.hasOwnProperty(i) && a != null && !u.hasOwnProperty(i)) switch (i) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Sl(l, t, i, null, u, a)
                    }
                for (c in u)
                    if (a = u[c], n = e[c], u.hasOwnProperty(c) && (a != null || n != null)) switch (c) {
                        case "value":
                            h = a;
                            break;
                        case "defaultValue":
                            m = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(d(91));
                            break;
                        default:
                            a !== n && Sl(l, t, c, a, u, n)
                    }
                Xf(l, h, m);
                return;
            case "option":
                for (var L in e)
                    if (h = e[L], e.hasOwnProperty(L) && h != null && !u.hasOwnProperty(L)) switch (L) {
                        case "selected":
                            l.selected = !1;
                            break;
                        default:
                            Sl(l, t, L, null, u, h)
                    }
                for (f in u)
                    if (h = u[f], m = e[f], u.hasOwnProperty(f) && h !== m && (h != null || m != null)) switch (f) {
                        case "selected":
                            l.selected = h && typeof h != "function" && typeof h != "symbol";
                            break;
                        default:
                            Sl(l, t, f, h, u, m)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var X in e) h = e[X], e.hasOwnProperty(X) && h != null && !u.hasOwnProperty(X) && Sl(l, t, X, null, u, h);
                for (v in u)
                    if (h = u[v], m = e[v], u.hasOwnProperty(v) && h !== m && (h != null || m != null)) switch (v) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (h != null) throw Error(d(137, t));
                            break;
                        default:
                            Sl(l, t, v, h, u, m)
                    }
                return;
            default:
                if (Oc(t)) {
                    for (var bl in e) h = e[bl], e.hasOwnProperty(bl) && h !== void 0 && !u.hasOwnProperty(bl) && yf(l, t, bl, void 0, u, h);
                    for (S in u) h = u[S], m = e[S], !u.hasOwnProperty(S) || h === m || h === void 0 && m === void 0 || yf(l, t, S, h, u, m);
                    return
                }
        }
        for (var o in e) h = e[o], e.hasOwnProperty(o) && h != null && !u.hasOwnProperty(o) && Sl(l, t, o, null, u, h);
        for (p in u) h = u[p], m = e[p], !u.hasOwnProperty(p) || h === m || h == null && m == null || Sl(l, t, p, h, u, m)
    }
    var vf = null,
        hf = null;

    function cc(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }

    function Zo(l) {
        switch (l) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Vo(l, t) {
        if (l === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return l === 1 && t === "foreignObject" ? 0 : l
    }

    function mf(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var gf = null;

    function Pd() {
        var l = window.event;
        return l && l.type === "popstate" ? l === gf ? !1 : (gf = l, !0) : (gf = null, !1)
    }
    var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
        ly = typeof clearTimeout == "function" ? clearTimeout : void 0,
        wo = typeof Promise == "function" ? Promise : void 0,
        ty = typeof queueMicrotask == "function" ? queueMicrotask : typeof wo < "u" ? function(l) {
            return wo.resolve(null).then(l).catch(ey)
        } : Ko;

    function ey(l) {
        setTimeout(function() {
            throw l
        })
    }

    function We(l) {
        return l === "head"
    }

    function Jo(l, t) {
        var e = t,
            u = 0,
            a = 0;
        do {
            var n = e.nextSibling;
            if (l.removeChild(e), n && n.nodeType === 8)
                if (e = n.data, e === "/$") {
                    if (0 < u && 8 > u) {
                        e = u;
                        var c = l.ownerDocument;
                        if (e & 1 && $a(c.documentElement), e & 2 && $a(c.body), e & 4)
                            for (e = c.head, $a(e), c = e.firstChild; c;) {
                                var i = c.nextSibling,
                                    f = c.nodeName;
                                c[Oe] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && c.rel.toLowerCase() === "stylesheet" || e.removeChild(c), c = i
                            }
                    }
                    if (a === 0) {
                        l.removeChild(n), an(t);
                        return
                    }
                    a--
                } else e === "$" || e === "$?" || e === "$!" ? a++ : u = e.charCodeAt(0) - 48;
            else u = 0;
            e = n
        } while (e);
        an(t)
    }

    function Sf(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var e = t;
            switch (t = t.nextSibling, e.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Sf(e), Me(e);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (e.rel.toLowerCase() === "stylesheet") continue
            }
            l.removeChild(e)
        }
    }

    function uy(l, t, e, u) {
        for (; l.nodeType === 1;) {
            var a = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
            } else if (u) {
                if (!l[Oe]) switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop")) break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
                        if (n !== a.rel || l.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || l.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || l.getAttribute("title") !== (a.title == null ? null : a.title)) break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence")) break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"), (n !== (a.src == null ? null : a.src) || l.getAttribute("type") !== (a.type == null ? null : a.type) || l.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
                        return l;
                    default:
                        return l
                }
            } else if (t === "input" && l.type === "hidden") {
                var n = a.name == null ? null : "" + a.name;
                if (a.type === "hidden" && l.getAttribute("name") === n) return l
            } else return l;
            if (l = kt(l.nextSibling), l === null) break
        }
        return null
    }

    function ay(l, t, e) {
        if (t === "") return null;
        for (; l.nodeType !== 3;)
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = kt(l.nextSibling), l === null)) return null;
        return l
    }

    function bf(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete"
    }

    function ny(l, t) {
        var e = l.ownerDocument;
        if (l.data !== "$?" || e.readyState === "complete") t();
        else {
            var u = function() {
                t(), e.removeEventListener("DOMContentLoaded", u)
            };
            e.addEventListener("DOMContentLoaded", u), l._reactRetry = u
        }
    }

    function kt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return l
    }
    var pf = null;

    function ko(l) {
        l = l.previousSibling;
        for (var t = 0; l;) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "$" || e === "$!" || e === "$?") {
                    if (t === 0) return l;
                    t--
                } else e === "/$" && t++
            }
            l = l.previousSibling
        }
        return null
    }

    function Wo(l, t, e) {
        switch (t = cc(e), l) {
            case "html":
                if (l = t.documentElement, !l) throw Error(d(452));
                return l;
            case "head":
                if (l = t.head, !l) throw Error(d(453));
                return l;
            case "body":
                if (l = t.body, !l) throw Error(d(454));
                return l;
            default:
                throw Error(d(451))
        }
    }

    function $a(l) {
        for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
        Me(l)
    }
    var Xt = new Map,
        $o = new Set;

    function ic(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var Ae = D.d;
    D.d = {
        f: cy,
        r: iy,
        D: fy,
        C: sy,
        L: ry,
        m: oy,
        X: yy,
        S: dy,
        M: vy
    };

    function cy() {
        var l = Ae.f(),
            t = In();
        return l || t
    }

    function iy(l) {
        var t = xe(l);
        t !== null && t.tag === 5 && t.type === "form" ? hr(t) : Ae.r(l)
    }
    var ca = typeof document > "u" ? null : document;

    function Fo(l, t, e) {
        var u = ca;
        if (u && typeof t == "string" && t) {
            var a = Ht(t);
            a = 'link[rel="' + l + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), $o.has(a) || ($o.add(a), l = {
                rel: l,
                crossOrigin: e,
                href: t
            }, u.querySelector(a) === null && (t = u.createElement("link"), st(t, "link", l), Ll(t), u.head.appendChild(t)))
        }
    }

    function fy(l) {
        Ae.D(l), Fo("dns-prefetch", l, null)
    }

    function sy(l, t) {
        Ae.C(l, t), Fo("preconnect", l, t)
    }

    function ry(l, t, e) {
        Ae.L(l, t, e);
        var u = ca;
        if (u && l && t) {
            var a = 'link[rel="preload"][as="' + Ht(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (a += '[imagesrcset="' + Ht(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (a += '[imagesizes="' + Ht(e.imageSizes) + '"]')) : a += '[href="' + Ht(l) + '"]';
            var n = a;
            switch (t) {
                case "style":
                    n = ia(l);
                    break;
                case "script":
                    n = fa(l)
            }
            Xt.has(n) || (l = H({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e), Xt.set(n, l), u.querySelector(a) !== null || t === "style" && u.querySelector(Fa(n)) || t === "script" && u.querySelector(Ia(n)) || (t = u.createElement("link"), st(t, "link", l), Ll(t), u.head.appendChild(t)))
        }
    }

    function oy(l, t) {
        Ae.m(l, t);
        var e = ca;
        if (e && l) {
            var u = t && typeof t.as == "string" ? t.as : "script",
                a = 'link[rel="modulepreload"][as="' + Ht(u) + '"][href="' + Ht(l) + '"]',
                n = a;
            switch (u) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    n = fa(l)
            }
            if (!Xt.has(n) && (l = H({
                    rel: "modulepreload",
                    href: l
                }, t), Xt.set(n, l), e.querySelector(a) === null)) {
                switch (u) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (e.querySelector(Ia(n))) return
                }
                u = e.createElement("link"), st(u, "link", l), Ll(u), e.head.appendChild(u)
            }
        }
    }

    function dy(l, t, e) {
        Ae.S(l, t, e);
        var u = ca;
        if (u && l) {
            var a = Zt(u).hoistableStyles,
                n = ia(l);
            t = t || "default";
            var c = a.get(n);
            if (!c) {
                var i = {
                    loading: 0,
                    preload: null
                };
                if (c = u.querySelector(Fa(n))) i.loading = 5;
                else {
                    l = H({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, e), (e = Xt.get(n)) && Tf(l, e);
                    var f = c = u.createElement("link");
                    Ll(f), st(f, "link", l), f._p = new Promise(function(v, S) {
                        f.onload = v, f.onerror = S
                    }), f.addEventListener("load", function() {
                        i.loading |= 1
                    }), f.addEventListener("error", function() {
                        i.loading |= 2
                    }), i.loading |= 4, fc(c, t, u)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: i
                }, a.set(n, c)
            }
        }
    }

    function yy(l, t) {
        Ae.X(l, t);
        var e = ca;
        if (e && l) {
            var u = Zt(e).hoistableScripts,
                a = fa(l),
                n = u.get(a);
            n || (n = e.querySelector(Ia(a)), n || (l = H({
                src: l,
                async: !0
            }, t), (t = Xt.get(a)) && Ef(l, t), n = e.createElement("script"), Ll(n), st(n, "link", l), e.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, u.set(a, n))
        }
    }

    function vy(l, t) {
        Ae.M(l, t);
        var e = ca;
        if (e && l) {
            var u = Zt(e).hoistableScripts,
                a = fa(l),
                n = u.get(a);
            n || (n = e.querySelector(Ia(a)), n || (l = H({
                src: l,
                async: !0,
                type: "module"
            }, t), (t = Xt.get(a)) && Ef(l, t), n = e.createElement("script"), Ll(n), st(n, "link", l), e.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, u.set(a, n))
        }
    }

    function Io(l, t, e, u) {
        var a = (a = Y.current) ? ic(a) : null;
        if (!a) throw Error(d(446));
        switch (l) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof e.precedence == "string" && typeof e.href == "string" ? (t = ia(e.href), e = Zt(a).hoistableStyles, u = e.get(t), u || (u = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, e.set(t, u)), u) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                    l = ia(e.href);
                    var n = Zt(a).hoistableStyles,
                        c = n.get(l);
                    if (c || (a = a.ownerDocument || a, c = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, n.set(l, c), (n = a.querySelector(Fa(l))) && !n._p && (c.instance = n, c.state.loading = 5), Xt.has(l) || (e = {
                            rel: "preload",
                            as: "style",
                            href: e.href,
                            crossOrigin: e.crossOrigin,
                            integrity: e.integrity,
                            media: e.media,
                            hrefLang: e.hrefLang,
                            referrerPolicy: e.referrerPolicy
                        }, Xt.set(l, e), n || hy(a, l, e, c.state))), t && u === null) throw Error(d(528, ""));
                    return c
                }
                if (t && u !== null) throw Error(d(529, ""));
                return null;
            case "script":
                return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = fa(e), e = Zt(a).hoistableScripts, u = e.get(t), u || (u = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, e.set(t, u)), u) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(d(444, l))
        }
    }

    function ia(l) {
        return 'href="' + Ht(l) + '"'
    }

    function Fa(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }

    function Po(l) {
        return H({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }

    function hy(l, t, e, u) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
            return u.loading |= 1
        }), t.addEventListener("error", function() {
            return u.loading |= 2
        }), st(t, "link", e), Ll(t), l.head.appendChild(t))
    }

    function fa(l) {
        return '[src="' + Ht(l) + '"]'
    }

    function Ia(l) {
        return "script[async]" + l
    }

    function l0(l, t, e) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var u = l.querySelector('style[data-href~="' + Ht(e.href) + '"]');
                if (u) return t.instance = u, Ll(u), u;
                var a = H({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return u = (l.ownerDocument || l).createElement("style"), Ll(u), st(u, "style", a), fc(u, e.precedence, l), t.instance = u;
            case "stylesheet":
                a = ia(e.href);
                var n = l.querySelector(Fa(a));
                if (n) return t.state.loading |= 4, t.instance = n, Ll(n), n;
                u = Po(e), (a = Xt.get(a)) && Tf(u, a), n = (l.ownerDocument || l).createElement("link"), Ll(n);
                var c = n;
                return c._p = new Promise(function(i, f) {
                    c.onload = i, c.onerror = f
                }), st(n, "link", u), t.state.loading |= 4, fc(n, e.precedence, l), t.instance = n;
            case "script":
                return n = fa(e.src), (a = l.querySelector(Ia(n))) ? (t.instance = a, Ll(a), a) : (u = e, (a = Xt.get(n)) && (u = H({}, e), Ef(u, a)), l = l.ownerDocument || l, a = l.createElement("script"), Ll(a), st(a, "link", u), l.head.appendChild(a), t.instance = a);
            case "void":
                return null;
            default:
                throw Error(d(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, fc(u, e.precedence, l));
        return t.instance
    }

    function fc(l, t, e) {
        for (var u = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = u.length ? u[u.length - 1] : null, n = a, c = 0; c < u.length; c++) {
            var i = u[c];
            if (i.dataset.precedence === t) n = i;
            else if (n !== a) break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild))
    }

    function Tf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
    }

    function Ef(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
    }
    var sc = null;

    function t0(l, t, e) {
        if (sc === null) {
            var u = new Map,
                a = sc = new Map;
            a.set(e, u)
        } else a = sc, u = a.get(e), u || (u = new Map, a.set(e, u));
        if (u.has(l)) return u;
        for (u.set(l, null), e = e.getElementsByTagName(l), a = 0; a < e.length; a++) {
            var n = e[a];
            if (!(n[Oe] || n[Ql] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = n.getAttribute(t) || "";
                c = l + c;
                var i = u.get(c);
                i ? i.push(n) : u.set(c, [n])
            }
        }
        return u
    }

    function e0(l, t, e) {
        l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }

    function my(l, t, e) {
        if (e === 1 || t.itemProp != null) return !1;
        switch (l) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return l = t.disabled, typeof t.precedence == "string" && l == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function u0(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    var Pa = null;

    function gy() {}

    function Sy(l, t, e) {
        if (Pa === null) throw Error(d(475));
        var u = Pa;
        if (t.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var a = ia(e.href),
                    n = l.querySelector(Fa(a));
                if (n) {
                    l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = rc.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, Ll(n);
                    return
                }
                n = l.ownerDocument || l, e = Po(e), (a = Xt.get(a)) && Tf(e, a), n = n.createElement("link"), Ll(n);
                var c = n;
                c._p = new Promise(function(i, f) {
                    c.onload = i, c.onerror = f
                }), st(n, "link", e), t.instance = n
            }
            u.stylesheets === null && (u.stylesheets = new Map), u.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = rc.bind(u), l.addEventListener("load", t), l.addEventListener("error", t))
        }
    }

    function by() {
        if (Pa === null) throw Error(d(475));
        var l = Pa;
        return l.stylesheets && l.count === 0 && Af(l, l.stylesheets), 0 < l.count ? function(t) {
            var e = setTimeout(function() {
                if (l.stylesheets && Af(l, l.stylesheets), l.unsuspend) {
                    var u = l.unsuspend;
                    l.unsuspend = null, u()
                }
            }, 6e4);
            return l.unsuspend = t,
                function() {
                    l.unsuspend = null, clearTimeout(e)
                }
        } : null
    }

    function rc() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Af(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null, l()
            }
        }
    }
    var oc = null;

    function Af(l, t) {
        l.stylesheets = null, l.unsuspend !== null && (l.count++, oc = new Map, t.forEach(py, l), oc = null, rc.call(l))
    }

    function py(l, t) {
        if (!(t.state.loading & 4)) {
            var e = oc.get(l);
            if (e) var u = e.get(null);
            else {
                e = new Map, oc.set(l, e);
                for (var a = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < a.length; n++) {
                    var c = a[n];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), u = c)
                }
                u && e.set(null, u)
            }
            a = t.instance, c = a.getAttribute("data-precedence"), n = e.get(c) || u, n === u && e.set(null, a), e.set(c, a), this.count++, u = rc.bind(this), a.addEventListener("load", u), a.addEventListener("error", u), n ? n.parentNode.insertBefore(a, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(a, l.firstChild)), t.state.loading |= 4
        }
    }
    var ln = {
        $$typeof: Ul,
        Provider: null,
        Consumer: null,
        _currentValue: _,
        _currentValue2: _,
        _threadCount: 0
    };

    function Ty(l, t, e, u, a, n, c, i) {
        this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Re(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Re(0), this.hiddenUpdates = Re(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = new Map
    }

    function a0(l, t, e, u, a, n, c, i, f, v, S, p) {
        return l = new Ty(l, t, e, c, i, f, v, p), t = 1, n === !0 && (t |= 24), n = Rt(3, null, null, t), l.current = n, n.stateNode = l, t = ui(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
            element: u,
            isDehydrated: e,
            cache: t
        }, ii(n), l
    }

    function n0(l) {
        return l ? (l = Gu, l) : Gu
    }

    function c0(l, t, e, u, a, n) {
        a = n0(a), u.context === null ? u.context = a : u.pendingContext = a, u = Be(t), u.payload = {
            element: e
        }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = Ye(l, u, t), e !== null && (Ut(e, l, t), xa(e, l, t))
    }

    function i0(l, t) {
        if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }

    function _f(l, t) {
        i0(l, t), (l = l.alternate) && i0(l, t)
    }

    function f0(l) {
        if (l.tag === 13) {
            var t = Cu(l, 67108864);
            t !== null && Ut(t, l, 67108864), _f(l, 67108864)
        }
    }
    var dc = !0;

    function Ey(l, t, e, u) {
        var a = g.T;
        g.T = null;
        var n = D.p;
        try {
            D.p = 2, Df(l, t, e, u)
        } finally {
            D.p = n, g.T = a
        }
    }

    function Ay(l, t, e, u) {
        var a = g.T;
        g.T = null;
        var n = D.p;
        try {
            D.p = 8, Df(l, t, e, u)
        } finally {
            D.p = n, g.T = a
        }
    }

    function Df(l, t, e, u) {
        if (dc) {
            var a = Rf(u);
            if (a === null) df(l, t, u, yc, e), r0(l, u);
            else if (Dy(a, l, t, e, u)) u.stopPropagation();
            else if (r0(l, u), t & 4 && -1 < _y.indexOf(l)) {
                for (; a !== null;) {
                    var n = xe(a);
                    if (n !== null) switch (n.tag) {
                        case 3:
                            if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                var c = ue(n.pendingLanes);
                                if (c !== 0) {
                                    var i = n;
                                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c;) {
                                        var f = 1 << 31 - bt(c);
                                        i.entanglements[1] |= f, c &= ~f
                                    }
                                    te(n), (vl & 6) === 0 && ($n = gt() + 500, Ja(0))
                                }
                            }
                            break;
                        case 13:
                            i = Cu(n, 2), i !== null && Ut(i, n, 2), In(), _f(n, 2)
                    }
                    if (n = Rf(u), n === null && df(l, t, u, yc, e), n === a) break;
                    a = n
                }
                a !== null && u.stopPropagation()
            } else df(l, t, u, null, e)
        }
    }

    function Rf(l) {
        return l = xc(l), zf(l)
    }
    var yc = null;

    function zf(l) {
        if (yc = null, l = vt(l), l !== null) {
            var t = C(l);
            if (t === null) l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (l = pl(t), l !== null) return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else t !== l && (l = null)
            }
        }
        return yc = l, null
    }

    function s0(l) {
        switch (l) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (pc()) {
                    case ra:
                        return 2;
                    case Tc:
                        return 8;
                    case De:
                    case yt:
                        return 32;
                    case Ec:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Of = !1,
        $e = null,
        Fe = null,
        Ie = null,
        tn = new Map,
        en = new Map,
        Pe = [],
        _y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function r0(l, t) {
        switch (l) {
            case "focusin":
            case "focusout":
                $e = null;
                break;
            case "dragenter":
            case "dragleave":
                Fe = null;
                break;
            case "mouseover":
            case "mouseout":
                Ie = null;
                break;
            case "pointerover":
            case "pointerout":
                tn.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                en.delete(t.pointerId)
        }
    }

    function un(l, t, e, u, a, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: u,
            nativeEvent: n,
            targetContainers: [a]
        }, t !== null && (t = xe(t), t !== null && f0(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), l)
    }

    function Dy(l, t, e, u, a) {
        switch (t) {
            case "focusin":
                return $e = un($e, l, t, e, u, a), !0;
            case "dragenter":
                return Fe = un(Fe, l, t, e, u, a), !0;
            case "mouseover":
                return Ie = un(Ie, l, t, e, u, a), !0;
            case "pointerover":
                var n = a.pointerId;
                return tn.set(n, un(tn.get(n) || null, l, t, e, u, a)), !0;
            case "gotpointercapture":
                return n = a.pointerId, en.set(n, un(en.get(n) || null, l, t, e, u, a)), !0
        }
        return !1
    }

    function o0(l) {
        var t = vt(l.target);
        if (t !== null) {
            var e = C(t);
            if (e !== null) {
                if (t = e.tag, t === 13) {
                    if (t = pl(e), t !== null) {
                        l.blockedOn = t, _t(l.priority, function() {
                            if (e.tag === 13) {
                                var u = xt();
                                u = uu(u);
                                var a = Cu(e, u);
                                a !== null && Ut(a, e, u), _f(e, u)
                            }
                        });
                        return
                    }
                } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }

    function vc(l) {
        if (l.blockedOn !== null) return !1;
        for (var t = l.targetContainers; 0 < t.length;) {
            var e = Rf(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var u = new e.constructor(e.type, e);
                Mc = u, e.target.dispatchEvent(u), Mc = null
            } else return t = xe(e), t !== null && f0(t), l.blockedOn = e, !1;
            t.shift()
        }
        return !0
    }

    function d0(l, t, e) {
        vc(l) && e.delete(t)
    }

    function Ry() {
        Of = !1, $e !== null && vc($e) && ($e = null), Fe !== null && vc(Fe) && (Fe = null), Ie !== null && vc(Ie) && (Ie = null), tn.forEach(d0), en.forEach(d0)
    }

    function hc(l, t) {
        l.blockedOn === t && (l.blockedOn = null, Of || (Of = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, Ry)))
    }
    var mc = null;

    function y0(l) {
        mc !== l && (mc = l, O.unstable_scheduleCallback(O.unstable_NormalPriority, function() {
            mc === l && (mc = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t],
                    u = l[t + 1],
                    a = l[t + 2];
                if (typeof u != "function") {
                    if (zf(u || e) === null) continue;
                    break
                }
                var n = xe(e);
                n !== null && (l.splice(t, 3), t -= 3, Ri(n, {
                    pending: !0,
                    data: a,
                    method: e.method,
                    action: u
                }, u, a))
            }
        }))
    }

    function an(l) {
        function t(f) {
            return hc(f, l)
        }
        $e !== null && hc($e, l), Fe !== null && hc(Fe, l), Ie !== null && hc(Ie, l), tn.forEach(t), en.forEach(t);
        for (var e = 0; e < Pe.length; e++) {
            var u = Pe[e];
            u.blockedOn === l && (u.blockedOn = null)
        }
        for (; 0 < Pe.length && (e = Pe[0], e.blockedOn === null);) o0(e), e.blockedOn === null && Pe.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
            for (u = 0; u < e.length; u += 3) {
                var a = e[u],
                    n = e[u + 1],
                    c = a[Wl] || null;
                if (typeof n == "function") c || y0(e);
                else if (c) {
                    var i = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (a = n, c = n[Wl] || null) i = c.formAction;
                        else if (zf(a) !== null) continue
                    } else i = c.action;
                    typeof i == "function" ? e[u + 1] = i : (e.splice(u, 3), u -= 3), y0(e)
                }
            }
    }

    function Mf(l) {
        this._internalRoot = l
    }
    gc.prototype.render = Mf.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null) throw Error(d(409));
        var e = t.current,
            u = xt();
        c0(e, u, l, t, null, null)
    }, gc.prototype.unmount = Mf.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            c0(l.current, 2, null, l, null, null), In(), t[ie] = null
        }
    };

    function gc(l) {
        this._internalRoot = l
    }
    gc.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = sn();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var e = 0; e < Pe.length && t !== 0 && t < Pe[e].priority; e++);
            Pe.splice(e, 0, l), e === 0 && o0(l)
        }
    };
    var v0 = W.version;
    if (v0 !== "19.1.0") throw Error(d(527, v0, "19.1.0"));
    D.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0) throw typeof l.render == "function" ? Error(d(188)) : (l = Object.keys(l).join(","), Error(d(268, l)));
        return l = j(t), l = l !== null ? T(l) : null, l = l === null ? null : l.stateNode, l
    };
    var zy = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: g,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Sc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Sc.isDisabled && Sc.supportsFiber) try {
            Ru = Sc.inject(zy), St = Sc
        } catch {}
    }
    return cn.createRoot = function(l, t) {
        if (!K(l)) throw Error(d(299));
        var e = !1,
            u = "",
            a = Mr,
            n = xr,
            c = Ur,
            i = null;
        return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (i = t.unstable_transitionCallbacks)), t = a0(l, 1, !1, null, null, e, u, a, n, c, i, null), l[ie] = t.current, of (l), new Mf(t)
    }, cn.hydrateRoot = function(l, t, e) {
        if (!K(l)) throw Error(d(299));
        var u = !1,
            a = "",
            n = Mr,
            c = xr,
            i = Ur,
            f = null,
            v = null;
        return e != null && (e.unstable_strictMode === !0 && (u = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (f = e.unstable_transitionCallbacks), e.formState !== void 0 && (v = e.formState)), t = a0(l, 1, !0, t, e ? ? null, u, a, n, c, i, f, v), t.context = n0(null), e = t.current, u = xt(), u = uu(u), a = Be(u), a.callback = null, Ye(e, a, u), e = u, t.current.lanes = e, ae(t, e), te(t), l[ie] = t.current, of (l), new gc(t)
    }, cn.version = "19.1.0", cn
}
var _0;

function Yy() {
    if (_0) return Nf.exports;
    _0 = 1;

    function O() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)
        } catch (W) {
            console.error(W)
        }
    }
    return O(), Nf.exports = By(), Nf.exports
}
var Cy = Yy();
const Gy = 1e3,
    Xy = ({
        volatility: O
    }) => {
        const [W, el] = R.useState(null), [d, K] = R.useState([]), [C, pl] = R.useState([]), [Cl, j] = R.useState([]), [T, H] = R.useState(""), [ul, P] = R.useState(!1), [Rl, jl] = R.useState([]), [Gl, ql] = R.useState([]), xl = R.useRef([]), Jl = R.useRef([]), Ul = R.useRef({}), kl = R.useRef(null), J = Z => {
            let dl = [],
                $ = [],
                ll = [],
                V = [],
                zl = -1 / 0,
                ml = -1 / 0,
                F = 1 / 0,
                g = 1 / 0;
            Z.forEach(D => {
                const _ = D.percentage;
                _ > zl ? (ml = zl, $ = [...dl], zl = _, dl = [D]) : _ === zl ? dl.push(D) : _ > ml ? (ml = _, $ = [D]) : _ === ml && $.push(D), _ < F ? (g = F, V = [...ll], F = _, ll = [D]) : _ === F ? ll.push(D) : _ < g ? (g = _, V = [D]) : _ === g && V.push(D)
            }), pl(dl), jl($), j(ll), ql(V)
        }, Xl = R.useCallback(Z => {
            var ml, F, g;
            const dl = (Z == null ? void 0 : Z.pip_size) || ((ml = Z == null ? void 0 : Z.tick) == null ? void 0 : ml.pip_size) || 2,
                $ = {},
                ll = [];
            let V = 0;
            (g = (F = Z == null ? void 0 : Z.history) == null ? void 0 : F.prices) == null || g.forEach(D => {
                const _ = D.toFixed(dl),
                    w = parseInt(_.at(-1), 10);
                isNaN(w) || (ll.push(w), $[w] = ($[w] || 0) + 1, V += 1)
            }), Jl.current = ll, Ul.current = $;
            const zl = Array.from({
                length: 10
            }, (D, _) => {
                const w = $[_] || 0;
                return {
                    item: _,
                    count: w,
                    percentage: Number((w / V * 100).toFixed(1))
                }
            });
            xl.current = zl, K(zl), J(zl), P(!1)
        }, []), Al = R.useCallback(Z => {
            var D, _;
            const dl = (D = Z == null ? void 0 : Z.tick) == null ? void 0 : D.quote,
                $ = (_ = Z == null ? void 0 : Z.tick) == null ? void 0 : _.pip_size;
            if (dl == null || $ == null) return;
            const ll = dl.toFixed($),
                V = parseInt(ll.slice(-1), 10);
            H(ll), el(V);
            const zl = Jl.current,
                ml = Ul.current;
            if (zl.length >= Gy) {
                const w = zl.shift();
                ml[w] = (ml[w] || 1) - 1
            }
            zl.push(V), ml[V] = (ml[V] || 0) + 1;
            const F = zl.length,
                g = Array.from({
                    length: 10
                }, (w, s) => {
                    const E = ml[s] || 0;
                    return {
                        item: s,
                        count: E,
                        percentage: Number((E / F * 100).toFixed(1))
                    }
                });
            xl.current = g, K(g), J(g), P(!0)
        }, []);
        return R.useEffect(() => {
            P(!1), H(""), xl.current = [], Jl.current = [], Ul.current = {};
            const Z = 71745,
                dl = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${Z}`);
            return kl.current = dl, dl.onopen = () => {
                dl.send(JSON.stringify({
                    ticks_history: O,
                    adjust_start_time: 1,
                    count: 1e3,
                    end: "latest",
                    style: "ticks",
                    subscribe: 1
                }))
            }, dl.onmessage = $ => {
                const ll = JSON.parse($.data);
                if (ll.error) {
                    alert(ll.error.message), dl.close();
                    return
                }
                ll.msg_type === "history" ? Xl(ll) : ll.msg_type === "tick" && Al(ll)
            }, () => dl.close()
        }, [O, Xl, Al]), A.jsx("div", {
            style: {
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                justifyContent: "center"
            },
            children: d.map(({
                item: Z,
                percentage: dl
            }) => {
                let $ = "#cececeff";
                return C.some(ll => ll.item === Z) ? $ = "green" : Rl.some(ll => ll.item === Z) ? $ = "blue" : Cl.some(ll => ll.item === Z) ? $ = "red" : Gl.some(ll => ll.item === Z) && ($ = "yellow"), A.jsxs("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 60
                    },
                    children: [A.jsx("div", {
                        style: {
                            height: 55,
                            width: 55,
                            borderRadius: "50%",
                            color: "#333",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 13,
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            padding: 4,
                            backgroundColor: $
                        },
                        children: A.jsxs("div", {
                            style: {
                                height: "100%",
                                width: "100%",
                                borderRadius: "50%",
                                backgroundColor: $,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: [A.jsx("strong", {
                                style: {
                                    fontSize: 16,
                                    color: $ === "green" || $ === "red" || $ === "blue" ? "white" : "black"
                                },
                                children: Z
                            }), A.jsxs("small", {
                                style: {
                                    fontSize: 11,
                                    color: $ === "green" || $ === "red" || $ === "blue" ? "white" : "black",
                                    fontWeight: "bold"
                                },
                                children: [dl.toFixed(1), "%"]
                            })]
                        })
                    }), W === Z && A.jsx("div", {
                        style: {
                            width: 0,
                            height: 0,
                            borderLeft: "8px solid transparent",
                            borderRight: "8px solid transparent",
                            borderBottom: "10px solid #ea4335",
                            marginTop: 4
                        }
                    })]
                }, Z)
            })
        })
    },
    Qy = ({
        showModal: O,
        setShowModal: W,
        originalStake: el,
        takeProfit: d,
        stopLoss: K,
        setStake: C,
        setOriginalStake: pl,
        setTakeProfit: Cl,
        setStopLoss: j,
        stakeMultiplier: T,
        setStakeMultiplier: H,
        setCurrent: ul
    }) => {
        const [P, Rl] = R.useState(`${el}`), [jl, Gl] = R.useState(`${d}`), [ql, xl] = R.useState(`${K}`), [Jl, Ul] = R.useState(`${T}`), [kl, J] = R.useState(!1), Xl = () => {
            J(!0), C(P > 0 ? P : 1), pl(P > 0 ? P : 1), Cl(jl > 0 ? jl : 5), j(ql > 0 ? ql : 1), H(Jl > 0 ? Jl : 2.1), ul({}), setTimeout(() => {
                J(!1), W(!1)
            }, 800)
        };
        return O ? A.jsx("div", {
            style: Pl.overlay,
            children: A.jsxs("div", {
                style: Pl.modal,
                children: [A.jsxs("div", {
                    style: Pl.header,
                    children: [A.jsx("button", {
                        onClick: () => W(!1),
                        style: Pl.closeButton,
                        children: "×"
                    }), A.jsx("h3", {
                        style: {
                            margin: 0
                        },
                        children: "Configure Your Bot"
                    })]
                }), A.jsxs("div", {
                    style: Pl.row,
                    children: [A.jsxs("div", {
                        style: Pl.inputGroup,
                        children: [A.jsx("label", {
                            style: Pl.label,
                            children: "Stake Amount"
                        }), A.jsx("input", {
                            type: "number",
                            value: P,
                            onChange: Al => Rl(Al.target.value),
                            style: Pl.input,
                            placeholder: "e.g. 1"
                        })]
                    }), A.jsxs("div", {
                        style: Pl.inputGroup,
                        children: [A.jsx("label", {
                            style: Pl.label,
                            children: "Martingale"
                        }), A.jsx("input", {
                            type: "number",
                            value: Jl,
                            onChange: Al => Ul(Al.target.value),
                            style: Pl.input,
                            placeholder: "e.g. 2.1"
                        })]
                    })]
                }), A.jsxs("div", {
                    style: Pl.row,
                    children: [A.jsxs("div", {
                        style: Pl.inputGroup,
                        children: [A.jsx("label", {
                            style: Pl.label,
                            children: "Take Profit (TP)"
                        }), A.jsx("input", {
                            type: "number",
                            value: jl,
                            onChange: Al => Gl(Al.target.value),
                            style: Pl.input,
                            placeholder: "e.g. 5"
                        })]
                    }), A.jsxs("div", {
                        style: Pl.inputGroup,
                        children: [A.jsx("label", {
                            style: Pl.label,
                            children: "Stop Loss (SL)"
                        }), A.jsx("input", {
                            type: "number",
                            value: ql,
                            onChange: Al => xl(Al.target.value),
                            style: Pl.input,
                            placeholder: "e.g. 1"
                        })]
                    })]
                }), A.jsx("button", {
                    onClick: Xl,
                    disabled: kl,
                    style: { ...Pl.saveButton,
                        opacity: kl ? .6 : 1,
                        cursor: kl ? "not-allowed" : "pointer"
                    },
                    children: kl ? "Saving..." : "Save"
                })]
            })
        }) : null
    },
    Pl = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
        },
        modal: {
            backgroundColor: "#fff",
            borderRadius: 8,
            padding: 24,
            width: "90%",
            maxWidth: 500,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20
        },
        closeButton: {
            fontSize: 24,
            background: "none",
            border: "none",
            cursor: "pointer"
        },
        row: {
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 20
        },
        inputGroup: {
            flex: 1,
            display: "flex",
            flexDirection: "column"
        },
        label: {
            marginBottom: 6,
            fontSize: 14,
            fontWeight: 500
        },
        input: {
            padding: 10,
            border: "1px solid #ccc",
            borderRadius: 4,
            fontSize: 14
        },
        saveButton: {
            width: "100%",
            padding: 12,
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: 6,
            fontSize: 16
        }
    },
    Ly = ({
        visible: O,
        setVisible: W,
        title: el,
        content: d
    }) => O ? A.jsx("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1e3,
            padding: 16
        },
        children: A.jsxs("div", {
            style: {
                backgroundColor: "#fff",
                borderRadius: 12,
                padding: 24,
                maxWidth: 500,
                width: "100%",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                position: "relative"
            },
            children: [A.jsxs("div", {
                children: [A.jsx("h3", {
                    children: el
                }), A.jsx("p", {
                    children: d
                })]
            }), A.jsx("button", {
                style: {
                    width: "100%",
                    height: 40,
                    borderRadius: 10,
                    color: "white",
                    background: "red",
                    cursor: "pointer",
                    fontWeight: "bold",
                    border: "none",
                    outline: "none"
                },
                onClick: () => window.location.href = "https://oauth.deriv.com/oauth2/authorize?app_id=74892",
                children: "Re-Login"
            })]
        })
    }) : null,
    Zy = ({
        activeToken: O
    }) => {
        const [W, el] = R.useState("R_10"), [d, K] = R.useState("DIGIT"), [C, pl] = R.useState(0), [Cl, j] = R.useState("0"), [T, H] = R.useState("EVEN"), [ul, P] = R.useState("RISE"), [Rl, jl] = R.useState("DIFFER"), [Gl, ql] = R.useState(!1), [xl, Jl] = R.useState(!1), [Ul, kl] = R.useState(!1), [J, Xl] = R.useState({}), [Al, Z] = R.useState(""), [dl, $] = R.useState(""), [ll, V] = R.useState(!1), [zl, ml] = R.useState(null), [F, g] = R.useState({
            trades: 0,
            wins: 0,
            losses: 0,
            winRate: 0
        }), [D, _] = R.useState([]), [w, s] = R.useState(0), [E, M] = R.useState(0), [z, B] = R.useState(0), [il, Y] = R.useState(1), [ut, _l] = R.useState(1), [Qt, fn] = R.useState(1), [Au, _u] = R.useState(!1), [_e, sa] = R.useState(50), [Du, bc] = R.useState(10), [gt, pc] = R.useState(1.5), [ra, Tc] = R.useState([]), [De, yt] = R.useState(!1), [Ec, Ac] = R.useState({
            current: 0,
            entry: 0
        }), [Yf, Ru] = R.useState(0), [St, ee] = R.useState(!1), [bt, Cf] = R.useState("50%"), [_c, oa] = R.useState(!1), [zu, tu] = R.useState(""), [ue, eu] = R.useState(""), [Wt, Lt] = R.useState(!1), $t = R.useRef([]), Ou = R.useRef(null), Re = R.useRef([]), ae = R.useRef(0), at = R.useRef(null), ze = R.useRef(null), ne = R.useRef(De);
        ne.current = De;
        const uu = R.useRef(Wt);
        uu.current = Wt;
        const ce = R.useRef(il);
        ce.current = il;
        const sn = R.useRef(Qt);
        sn.current = Qt;
        const _t = R.useRef(ut);
        _t.current = ut;
        const nt = R.useRef(w);
        nt.current = w;
        const Ql = R.useRef(_e);
        Ql.current = _e;
        const Wl = R.useRef(Du);
        Wl.current = Du;
        const ie = R.useRef(O);
        ie.current = O;
        const au = R.useRef(gt);
        au.current = gt;
        const Dc = R.useRef(ra);
        Dc.current = ra;
        const Nl = R.useRef(D);
        Nl.current = D;
        const Nt = R.useRef(J);
        Nt.current = J;
        const Oe = R.useRef(C);
        Oe.current = C;
        const Me = R.useRef(),
            vt = R.useRef(null),
            xe = [{
                label: "Volatility 10 Index",
                value: "R_10"
            }, {
                label: "Volatility 25 Index",
                value: "R_25"
            }, {
                label: "Volatility 50 Index",
                value: "R_50"
            }, {
                label: "Volatility 75 Index",
                value: "R_75"
            }, {
                label: "Volatility 100 Index",
                value: "R_100"
            }, {
                label: "Volatility 10 (1s) Index",
                value: "1HZ10V"
            }, {
                label: "Volatility 15 (1s) Index",
                value: "1HZ15V"
            }, {
                label: "Volatility 25 (1s) Index",
                value: "1HZ25V"
            }, {
                label: "Volatility 30 (1s) Index",
                value: "1HZ30V"
            }, {
                label: "Volatility 50 (1s) Index",
                value: "1HZ50V"
            }, {
                label: "Volatility 75 (1s) Index",
                value: "1HZ75V"
            }, {
                label: "Volatility 90 (1s) Index",
                value: "1HZ90V"
            }, {
                label: "Volatility 100 (1s) Index",
                value: "1HZ100V"
            }],
            nu = x => {
                const G = setInterval(() => {
                    x.readyState === x.OPEN && x.send(JSON.stringify({
                        ping: 1
                    }))
                }, 3e4);
                return () => clearInterval(G)
            };
        R.useEffect(() => {
            if (O) {
                _([]);
                const x = 74892;
                vt.current = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=" + x);
                const G = vt.current,
                    N = () => {
                        G.send(JSON.stringify({
                            authorize: O
                        })), _([...Nl.current, {
                            time: new Date().toISOString(),
                            type: "normal",
                            log: "Initializing"
                        }]), nu(G)
                    },
                    fl = Tl => {
                        var $l, rt, sl;
                        var al = JSON.parse(Tl == null ? void 0 : Tl.data);
                        (al == null ? void 0 : al.error) !== void 0 ? (G.close(), (($l = al == null ? void 0 : al.error) == null ? void 0 : $l.message) === "The token is invalid." || ((rt = al == null ? void 0 : al.error) == null ? void 0 : rt.message) === "Token is not valid for current app ID." ? (tu("Your Deriv token has expired"), eu("You will need to re-login again with your deriv account"), oa(!0)) : alert((sl = al == null ? void 0 : al.error) == null ? void 0 : sl.message)) : (al == null ? void 0 : al.msg_type) === "authorize" && _([...Nl.current, {
                            time: new Date().toISOString(),
                            type: "success",
                            log: "Bot is ready"
                        }])
                    };
                return G.onopen = N, G.onmessage = fl, () => {
                    vt.current.close(), clearInterval(3e4)
                }
            }
        }, [O, W, d, C, T, ul, Rl, Gl, xl]);
        const Zt = () => d === "DIGIT" ? C < 5 ? "DIGITOVER" : "DIGITUNDER" : d === "MATCH_DIFF" ? "DIGITDIFF" : d === "EVEN_ODD" ? `DIGIT${T}` : d === "RISE_FALL" ? ul === "RISE" ? "CALL" : "PUT" : "",
            Ll = () => d === "DIGIT" ? C < 5 ? `OVER ${C}` : `UNDER ${C}` : d === "MATCH_DIFF" ? Rl === "MATCH" ? `MATCH ${C}` : `DIFFER from ${C}` : d === "EVEN_ODD" ? T : d === "RISE_FALL" ? ul : "",
            Mu = (x, G) => d === "DIGIT" ? C < 5 ? G > C : G < C : d === "MATCH_DIFF" ? Rl === "MATCH" ? G === C : G !== C : d === "EVEN_ODD" ? T === "EVEN" ? G % 2 === 0 : G % 2 !== 0 : d === "RISE_FALL" ? ul === "RISE" ? G > x : G < x : !1,
            da = () => {
                const x = $t.current;
                if (!(x.length < 2))
                    if (d === "RISE_FALL") {
                        let G = x.length - 1,
                            N = 0;
                        for (let Tl = 0; Tl < x.length - 1; Tl++) {
                            const al = x[Tl],
                                $l = x[Tl + 1];
                            Mu(al, $l) && N++
                        }
                        const fl = G > 0 ? N / G : 0;
                        Ou.current = "RISE_FALL", Re.current = [fl], ae.current = fl, Z(`Trade ${ul} market direction.
Success Rate: ${(fl*100).toFixed(2)}%
Suggested expiry: 3-5 ticks (adjust manually)`)
                    } else {
                        const G = Array(10).fill(0),
                            N = Array(10).fill(0);
                        for (let sl = 0; sl < x.length - 1; sl++) {
                            const ct = x[sl],
                                Vt = x[sl + 1];
                            Mu(ct, Vt) && N[ct]++, G[ct]++
                        }
                        const fl = G.map((sl, ct) => sl ? N[ct] / sl : 0),
                            Tl = fl.filter(sl => sl > 0),
                            al = Tl.length ? Tl.reduce((sl, ct) => sl + ct, 0) / Tl.length : 0;
                        let $l = -1,
                            rt = 0;
                        for (let sl = 0; sl < 10; sl++) G[sl] > 5 && fl[sl] > rt && (rt = fl[sl], $l = sl);
                        Ou.current = $l, Re.current = fl, ae.current = al, Z($l !== -1 ? `Trade ${Ll()} when digit ${$l} appears.
Success Rate: ${(rt*100).toFixed(2)}% (Avg: ${(al*100).toFixed(1)}%)` : "No strong signal found. Try a different setup.")
                    }
            },
            fe = () => {
                if ((d === "DIGIT" || d === "MATCH_DIFF") && (isNaN(C) || C < 0 || C > 9)) {
                    alert("Please enter a valid digit between 0 and 9.");
                    return
                }
                V(!0), Z(""), $(""), ml(null), g({
                    trades: 0,
                    wins: 0,
                    losses: 0,
                    winRate: 0
                }), ze.current && ze.current.close(), at.current && at.current.close();
                const x = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=1089");
                ze.current = x, x.onopen = () => {
                    x.send(JSON.stringify({
                        ticks_history: W,
                        style: "ticks",
                        count: 1e3,
                        end: "latest"
                    }))
                }, x.onmessage = G => {
                    const N = JSON.parse(G.data);
                    N.history && (d === "RISE_FALL" ? $t.current = N.history.prices : $t.current = N.history.prices.map(fl => Number(`${fl.toFixed(N==null?void 0:N.pip_size)}`.at(-1))), da(), V(!1), x.close(), ze.current = null, Ue())
                }, x.onclose = () => {
                    ze.current = null
                }
            },
            Ue = () => {
                at.current && at.current.close(), at.current = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=1089"), at.current.tradeInProgress = null, at.current.onopen = () => {
                    at.current.send(JSON.stringify({
                        ticks: W
                    }))
                }, at.current.onmessage = x => {
                    var $l, rt, sl, ct, Vt, Ne;
                    const G = JSON.parse(x.data);
                    if (!G.tick) return;
                    const N = G.tick.quote;
                    let fl;
                    d === "RISE_FALL" ? (fl = N, $t.current.push(fl)) : (fl = Number(`${(sl=($l=G==null?void 0:G.tick)==null?void 0:$l.quote)==null?void 0:sl.toFixed((rt=G==null?void 0:G.tick)==null?void 0:rt.pip_size)}`.charAt(`${(Ne=(ct=G==null?void 0:G.tick)==null?void 0:ct.quote)==null?void 0:Ne.toFixed((Vt=G==null?void 0:G.tick)==null?void 0:Vt.pip_size)}`.length - 1)), $t.current.push(fl)), $t.current.length > 1e3 && $t.current.shift(), da();
                    const Tl = at.current.tradeInProgress;
                    if (Tl) {
                        if (Tl.ticksRemaining--, ml(Tl.ticksRemaining), Tl.ticksRemaining === 0) {
                            const Kt = fl,
                                Ol = Mu(Tl.entryValue, Kt);
                            g(cu => {
                                const se = cu.trades + 1,
                                    ht = cu.wins + (Ol ? 1 : 0),
                                    on = cu.losses + (Ol ? 0 : 1);
                                return {
                                    trades: se,
                                    wins: ht,
                                    losses: on,
                                    winRate: se ? ht / se : 0
                                }
                            }), $(`RESULT: Result was ${Kt}. You ${Ol?"WIN":"LOSE"}!`), ml(null), at.current.tradeInProgress = null
                        }
                        return
                    }
                    const al = Ou.current;
                    if (al === "RISE_FALL") Tl || (uu.current && (M(0), B(0), _([]), Xl({
                        ticks: 4,
                        type: Zt()
                    }), _([...Nl.current, {
                        time: new Date().toISOString(),
                        type: "normal",
                        log: `Trading ${Zt()} with entry digit ${fl} and 4 ticks.`
                    }]), yt(!0)), $(`NOW: Trade ${ul} at price ${fl} – ${new Date().toLocaleTimeString()}`), ml(4), at.current.tradeInProgress = {
                        entryValue: fl,
                        ticksRemaining: 4
                    });
                    else if (al !== null && fl === al && (!Gl || Re.current[fl] > ae.current)) {
                        const Kt = Re.current[fl] || 0,
                            Ol = Math.max(3, Math.min(10, Math.floor(10 - Kt * 10)));
                        uu.current && !ne.current && (M(0), B(0), _([]), Xl({
                            ticks: Ol,
                            type: Zt()
                        }), _([...Nl.current, {
                            time: new Date().toISOString(),
                            type: "normal",
                            log: `Trading ${Zt()} ${C} with entry digit ${fl} and ${Ol} ticks.`
                        }]), yt(!0)), $(`NOW: Trade ${Ll()} – Trigger digit ${fl} at ${new Date().toLocaleTimeString()}`), ml(Ol), at.current.tradeInProgress = {
                            entryValue: fl,
                            ticksRemaining: Ol
                        }
                    }
                }, at.current.onclose = () => {
                    ml(null), at.current.tradeInProgress = null
                }
            },
            rn = R.useCallback(() => {
                _([...Nl.current, {
                    time: new Date().toISOString(),
                    type: "success",
                    log: "Bot is running"
                }]);
                const x = async () => {
                    V(!0), Nt.current.type === "CALL" || Nt.current.type === "PUT" || Nt.current.type === "DIGITEVEN" || Nt.current.type === "DIGITODD" ? vt.current.send(JSON.stringify({
                        buy: 1,
                        subscribe: 1,
                        price: ce.current,
                        parameters: {
                            app_markup_percentage: 3,
                            amount: ce.current,
                            basis: "stake",
                            contract_type: Nt.current.type,
                            product_type: "basic",
                            currency: "USD",
                            duration: Nt.current.ticks,
                            duration_unit: "t",
                            symbol: W
                        }
                    })) : vt.current.send(JSON.stringify({
                        buy: 1,
                        subscribe: 1,
                        price: ce.current,
                        parameters: {
                            app_markup_percentage: 3,
                            amount: ce.current,
                            basis: "stake",
                            barrier: Oe.current,
                            contract_type: Nt.current.type,
                            product_type: "basic",
                            currency: "USD",
                            duration: Nt.current.ticks,
                            duration_unit: "t",
                            symbol: W
                        }
                    })), vt.current.onmessage = G => {
                        var fl, Tl, al, $l, rt, sl, ct, Vt, Ne, Kt, Ol;
                        var N = JSON.parse(G == null ? void 0 : G.data);
                        if ((N == null ? void 0 : N.error) !== void 0) yt(!1), Lt(!1), V(!1), _([...Nl.current, {
                            time: new Date().toISOString(),
                            type: "error",
                            log: "Bot has stopped"
                        }]), ((fl = N == null ? void 0 : N.error) == null ? void 0 : fl.message) === "The token is invalid." || ((Tl = N == null ? void 0 : N.error) == null ? void 0 : Tl.message) === "Token is not valid for current app ID." ? (tu("Your Deriv token has expired"), eu("You will need to re-login again with your deriv account"), oa(!0)) : alert((al = N == null ? void 0 : N.error) == null ? void 0 : al.message);
                        else if ((N == null ? void 0 : N.msg_type) === "proposal_open_contract" && (($l = N == null ? void 0 : N.proposal_open_contract) == null ? void 0 : $l.is_sold)) {
                            if (_([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "normal",
                                    log: (rt = N == null ? void 0 : N.proposal_open_contract) == null ? void 0 : rt.longcode
                                }]), ((sl = N == null ? void 0 : N.proposal_open_contract) == null ? void 0 : sl.status) === "won") {
                                _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "success",
                                    log: `Contract won +${(ct=N==null?void 0:N.proposal_open_contract)==null?void 0:ct.profit} USD`
                                }]);
                                const se = ((Vt = N == null ? void 0 : N.proposal_open_contract) == null ? void 0 : Vt.profit) || 0;
                                s(ht => ht + se), M(ht => ht + 1), nt.current < 0 ? (Y(parseFloat(_t.current * au.current).toFixed(2)), nt.current >= Ql.current ? (alert("Take Profit Hit"), Y(_t.current), yt(!1), Lt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }])) : nt.current <= -Wl.current ? (alert("Stop Loss Hit"), Y(_t.current), yt(!1), Lt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }])) : ne.current ? (V(!1), setTimeout(() => {
                                    x()
                                }, Math.floor(Math.random() * 3) + 1)) : (yt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }]))) : (Y(_t.current), nt.current >= Ql.current ? (alert("Take Profit Hit"), Y(_t.current), yt(!1), Lt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }])) : nt.current <= -Wl.current ? (alert("Stop Loss Hit"), Y(_t.current), yt(!1), Lt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }])) : ne.current ? (V(!1), setTimeout(() => {
                                    x()
                                }, Math.floor(Math.random() * 3) + 1)) : (yt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }])))
                            } else if (((Ne = N == null ? void 0 : N.proposal_open_contract) == null ? void 0 : Ne.status) === "lost") {
                                _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: `Contract lost ${(Kt=N==null?void 0:N.proposal_open_contract)==null?void 0:Kt.profit} USD`
                                }]);
                                const se = ((Ol = N == null ? void 0 : N.proposal_open_contract) == null ? void 0 : Ol.profit) || 0;
                                s(ht => ht + se), B(ht => ht + 1), Y(parseFloat(_t.current * au.current).toFixed(2)), nt.current >= Ql.current ? (alert("Take Profit Hit"), Y(_t.current), yt(!1), Lt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }])) : nt.current <= -Wl.current ? (alert("Stop Loss Hit"), Y(_t.current), yt(!1), Lt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }])) : (yt(!1), V(!1), _([...Nl.current, {
                                    time: new Date().toISOString(),
                                    type: "error",
                                    log: "Bot has stopped"
                                }]))
                            }
                        }
                    }
                };
                x()
            }, [ie.current]);
        return R.useEffect(() => {
            ne.current && (_([]), Y(_t.current), rn())
        }, [ne.current, rn]), R.useEffect(() => {
            const x = setTimeout(() => {
                W && d && fe()
            }, 500);
            return () => clearTimeout(x)
        }, [W, d, C, T, ul, Rl, Gl, xl, Wt]), R.useEffect(() => {
            Nl.current.length > 0 && Me.current && (Me.current.scrollTop = Me.current.scrollHeight)
        }, [Nl.current]), A.jsxs("div", {
            className: "max-w-3xl mx-auto font-mono p-4",
            children: [A.jsx(Qy, {
                showModal: Au,
                setShowModal: _u,
                originalStake: ut,
                takeProfit: _e,
                stopLoss: Du,
                setStake: Y,
                setOriginalStake: _l,
                setTakeProfit: sa,
                setStopLoss: bc,
                stakeMultiplier: gt,
                setStakeMultiplier: pc,
                setCurrent: Ac
            }), A.jsx(Ly, {
                visible: _c,
                setVisible: oa,
                title: zu,
                content: ue
            }), A.jsx("h2", {
                className: "text-xl font-bold mb-4 text-center",
                children: "Defen Live Signals"
            }), A.jsxs("div", {
                className: "flex flex-row justify-between align-middle items-center flex-wrap",
                children: [A.jsxs("div", {
                    className: "mb-4",
                    children: [A.jsx("label", {
                        className: "block mb-1 font-bold",
                        children: "Select Volatility Index:"
                    }), A.jsx("select", {
                        value: W,
                        onChange: x => el(x.target.value),
                        className: "w-full border px-2 py-1 cursor-pointer",
                        children: xe.map(x => A.jsx("option", {
                            value: x.value,
                            children: x.label
                        }, x.value))
                    })]
                }), A.jsxs("div", {
                    className: "mb-4",
                    children: [A.jsx("label", {
                        className: "block mb-1 font-bold",
                        children: "Trade Mode:"
                    }), A.jsxs("select", {
                        value: d,
                        onChange: x => K(x.target.value),
                        className: "w-full border px-2 py-1 cursor-pointer",
                        children: [A.jsx("option", {
                            value: "DIGIT",
                            children: "Digit Over/Under"
                        }), A.jsx("option", {
                            value: "MATCH_DIFF",
                            children: "Digit Differs"
                        }), A.jsx("option", {
                            value: "EVEN_ODD",
                            children: "Even / Odd"
                        }), A.jsx("option", {
                            value: "RISE_FALL",
                            children: "Rise/Fall"
                        })]
                    })]
                }), (d === "DIGIT" || d === "MATCH_DIFF") && A.jsxs("div", {
                    className: "mb-4",
                    children: [A.jsx("label", {
                        className: "block mb-1 font-bold",
                        children: "Target Digit (0–9):"
                    }), A.jsx("input", {
                        type: "number",
                        min: 0,
                        max: 9,
                        value: Cl,
                        onChange: x => {
                            const G = x.target.value;
                            if (G === "") {
                                j("");
                                return
                            }
                            const N = Number(G);
                            !isNaN(N) && N >= 0 && N <= 9 && (j(G), pl(N))
                        },
                        className: "w-full border px-2 py-1"
                    })]
                }), d === "EVEN_ODD" && A.jsxs("div", {
                    className: "mb-4",
                    children: [A.jsx("label", {
                        className: "block mb-1 font-bold",
                        children: "Select Even/Odd:"
                    }), A.jsxs("select", {
                        value: T,
                        onChange: x => H(x.target.value),
                        className: "w-full border px-2 py-1 cursor-pointer",
                        children: [A.jsx("option", {
                            value: "EVEN",
                            children: "EVEN"
                        }), A.jsx("option", {
                            value: "ODD",
                            children: "ODD"
                        })]
                    })]
                }), d === "RISE_FALL" && A.jsxs("div", {
                    className: "mb-4",
                    children: [A.jsx("label", {
                        className: "block mb-1 font-bold",
                        children: "Select Rise/Fall:"
                    }), A.jsxs("select", {
                        value: ul,
                        onChange: x => P(x.target.value),
                        className: "w-full border px-2 py-1 cursor-pointer",
                        children: [A.jsx("option", {
                            value: "RISE",
                            children: "RISE"
                        }), A.jsx("option", {
                            value: "FALL",
                            children: "FALL"
                        })]
                    })]
                })]
            }), A.jsxs("div", {
                className: "flex mb-4",
                children: [A.jsx("input", {
                    type: "checkbox",
                    className: "mr-2 cursor-pointer",
                    checked: Gl,
                    onChange: () => ql(!Gl),
                    disabled: ll
                }), A.jsx("p", {
                    children: "Only signal when trigger digit win rate above average"
                })]
            }), d !== "RISE_FALL" && A.jsxs("div", {
                className: "flex mb-4",
                children: [A.jsx("input", {
                    type: "checkbox",
                    className: "mr-2 cursor-pointer",
                    checked: xl,
                    onChange: () => Jl(!xl),
                    disabled: ll
                }), A.jsx("p", {
                    children: "Allow tool to trade on my account automatically"
                })]
            }), xl && d !== "RISE_FALL" && A.jsxs("div", {
                className: "flex justify-between align-middle items-center flex-row px-20 py-5",
                children: [A.jsx("button", {
                    disabled: De,
                    className: "bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded",
                    onClick: () => {
                        _u(!0)
                    },
                    children: "Configure Bot"
                }), Wt ? A.jsx("button", {
                    onClick: () => {
                        Lt(!1), yt(!1)
                    },
                    className: "bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded",
                    children: "Stop Bot"
                }) : A.jsx("button", {
                    disabled: vt.current === null,
                    onClick: () => {
                        M(0), B(0), _([]), Lt(!0)
                    },
                    className: "bg-green-700 cursor-pointer text-white font-bold py-2 px-4 rounded",
                    children: vt.current === null ? "Bot Loading" : "Run Bot"
                })]
            }), A.jsx("h3", {
                className: "text-xl font-bold mb-4 text-center",
                children: xl ? "Live Stats" : "Simulation Stats"
            }), xl && d !== "RISE_FALL" ? A.jsxs(A.Fragment, {
                children: [A.jsxs("div", {
                    className: "flex flex-row justify-between align-middle items-center flex-wrap bg-black text-white px-10 py-5 mb-4 rounded-md",
                    children: [A.jsxs("p", {
                        children: ["R: ", E + z]
                    }), A.jsxs("p", {
                        children: ["W: ", E]
                    }), A.jsxs("p", {
                        children: ["L: ", z]
                    })]
                }), A.jsxs("div", {
                    className: "flex flex-row justify-between align-middle items-center flex-wrap bg-black text-white px-10 py-5 mb-4 rounded-md",
                    children: [A.jsxs("p", {
                        children: ["TP: ", _e, " usd"]
                    }), A.jsxs("p", {
                        children: ["SL: ", Du, " usd"]
                    })]
                })]
            }) : A.jsxs("div", {
                className: "flex flex-row justify-between align-middle items-center flex-wrap bg-black text-white px-10 py-5 mb-4 rounded-md",
                children: [A.jsxs("p", {
                    children: ["Runs: ", F == null ? void 0 : F.trades]
                }), A.jsxs("p", {
                    children: ["Wins: ", F == null ? void 0 : F.wins]
                }), A.jsxs("p", {
                    children: ["Losses: ", F == null ? void 0 : F.losses]
                }), A.jsxs("p", {
                    children: ["Rate: ", parseFloat((F == null ? void 0 : F.winRate) * 100).toFixed(0), " %"]
                })]
            }), A.jsx(Xy, {
                volatility: W
            }), A.jsx("pre", {
                className: "whitespace-pre-wrap bg-gray-900 text-green-400 p-4 mt-6 min-h-[6rem] rounded",
                children: Al
            }), !xl && d !== "RISE_FALL" && A.jsxs("pre", {
                className: "whitespace-pre-wrap bg-gray-800 text-white p-4 mt-4 min-h-[5rem] rounded mb-40",
                children: [dl, zl !== null && `
Countdown: ${zl} ticks`]
            }), xl && d !== "RISE_FALL" && A.jsx("div", {
                ref: Me,
                style: {
                    backgroundColor: "#000000",
                    color: "white",
                    padding: "16px",
                    borderRadius: "8px",
                    height: "400px",
                    overflowY: "auto",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    marginTop: "20px",
                    boxShadow: "0 0 8px rgba(0,0,0,0.4)"
                },
                children: D.map(x => {
                    const G = (x == null ? void 0 : x.type) === "success" ? "green" : (x == null ? void 0 : x.type) === "error" ? "red" : "white";
                    return A.jsxs("div", {
                        style: {
                            marginBottom: "8px"
                        },
                        children: [A.jsxs("div", {
                            style: {
                                color: G
                            },
                            children: ["[", new Date(x == null ? void 0 : x.time).toLocaleTimeString(), "]"]
                        }), A.jsx("div", {
                            style: {
                                color: G
                            },
                            children: x == null ? void 0 : x.log
                        })]
                    }, x == null ? void 0 : x.time)
                })
            })]
        })
    },
    Vy = () => {
        const [O, W] = R.useState(null);
        return R.useEffect(() => {
            const d = new URLSearchParams(window.location.search).get("token");
            d && W(d)
        }, []), A.jsx("div", {
            children: O && A.jsx(Zy, {
                activeToken: O
            })
        })
    };
Cy.createRoot(document.getElementById("root")).render(A.jsx(R.StrictMode, {
    children: A.jsx(Vy, {})
}));