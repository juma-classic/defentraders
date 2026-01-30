(function() {
    const it = document.createElement("link").relList;
    if (it && it.supports && it.supports("modulepreload")) return;
    for (const Y of document.querySelectorAll('link[rel="modulepreload"]')) x(Y);
    new MutationObserver(Y => {
        for (const J of Y)
            if (J.type === "childList")
                for (const P of J.addedNodes) P.tagName === "LINK" && P.rel === "modulepreload" && x(P)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function I(Y) {
        const J = {};
        return Y.integrity && (J.integrity = Y.integrity), Y.referrerPolicy && (J.referrerPolicy = Y.referrerPolicy), Y.crossOrigin === "use-credentials" ? J.credentials = "include" : Y.crossOrigin === "anonymous" ? J.credentials = "omit" : J.credentials = "same-origin", J
    }

    function x(Y) {
        if (Y.ep) return;
        Y.ep = !0;
        const J = I(Y);
        fetch(Y.href, J)
    }
})();
var $c = {
        exports: {}
    },
    bu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;

function Ry() {
    if (Fr) return bu;
    Fr = 1;
    var U = Symbol.for("react.transitional.element"),
        it = Symbol.for("react.fragment");

    function I(x, Y, J) {
        var P = null;
        if (J !== void 0 && (P = "" + J), Y.key !== void 0 && (P = "" + Y.key), "key" in Y) {
            J = {};
            for (var Et in Y) Et !== "key" && (J[Et] = Y[Et])
        } else J = Y;
        return Y = J.ref, {
            $$typeof: U,
            type: x,
            key: P,
            ref: Y !== void 0 ? Y : null,
            props: J
        }
    }
    return bu.Fragment = it, bu.jsx = I, bu.jsxs = I, bu
}
var Ir;

function My() {
    return Ir || (Ir = 1, $c.exports = Ry()), $c.exports
}
var y = My(),
    Fc = {
        exports: {}
    },
    W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;

function jy() {
    if (Pr) return W;
    Pr = 1;
    var U = Symbol.for("react.transitional.element"),
        it = Symbol.for("react.portal"),
        I = Symbol.for("react.fragment"),
        x = Symbol.for("react.strict_mode"),
        Y = Symbol.for("react.profiler"),
        J = Symbol.for("react.consumer"),
        P = Symbol.for("react.context"),
        Et = Symbol.for("react.forward_ref"),
        N = Symbol.for("react.suspense"),
        z = Symbol.for("react.memo"),
        V = Symbol.for("react.lazy"),
        tt = Symbol.iterator;

    function w(s) {
        return s === null || typeof s != "object" ? null : (s = tt && s[tt] || s["@@iterator"], typeof s == "function" ? s : null)
    }
    var Rt = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        $ = Object.assign,
        Vt = {};

    function ft(s, v, d) {
        this.props = s, this.context = v, this.refs = Vt, this.updater = d || Rt
    }
    ft.prototype.isReactComponent = {}, ft.prototype.setState = function(s, v) {
        if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, v, "setState")
    }, ft.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate")
    };

    function Xt() {}
    Xt.prototype = ft.prototype;

    function Mt(s, v, d) {
        this.props = s, this.context = v, this.refs = Vt, this.updater = d || Rt
    }
    var yt = Mt.prototype = new Xt;
    yt.constructor = Mt, $(yt, ft.prototype), yt.isPureReactComponent = !0;
    var ht = Array.isArray,
        L = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        ct = Object.prototype.hasOwnProperty;

    function zt(s, v, d, o, b, E) {
        return d = E.ref, {
            $$typeof: U,
            type: s,
            key: v,
            ref: d !== void 0 ? d : null,
            props: E
        }
    }

    function k(s, v) {
        return zt(s.type, v, void 0, void 0, void 0, s.props)
    }

    function vt(s) {
        return typeof s == "object" && s !== null && s.$$typeof === U
    }

    function gt(s) {
        var v = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + s.replace(/[=:]/g, function(d) {
            return v[d]
        })
    }
    var Tt = /\/+/g;

    function ut(s, v) {
        return typeof s == "object" && s !== null && s.key != null ? gt("" + s.key) : v.toString(36)
    }

    function At() {}

    function Yt(s) {
        switch (s.status) {
            case "fulfilled":
                return s.value;
            case "rejected":
                throw s.reason;
            default:
                switch (typeof s.status == "string" ? s.then(At, At) : (s.status = "pending", s.then(function(v) {
                    s.status === "pending" && (s.status = "fulfilled", s.value = v)
                }, function(v) {
                    s.status === "pending" && (s.status = "rejected", s.reason = v)
                })), s.status) {
                    case "fulfilled":
                        return s.value;
                    case "rejected":
                        throw s.reason
                }
        }
        throw s
    }

    function st(s, v, d, o, b) {
        var E = typeof s;
        (E === "undefined" || E === "boolean") && (s = null);
        var j = !1;
        if (s === null) j = !0;
        else switch (E) {
            case "bigint":
            case "string":
            case "number":
                j = !0;
                break;
            case "object":
                switch (s.$$typeof) {
                    case U:
                    case it:
                        j = !0;
                        break;
                    case V:
                        return j = s._init, st(j(s._payload), v, d, o, b)
                }
        }
        if (j) return b = b(s), j = o === "" ? "." + ut(s, 0) : o, ht(b) ? (d = "", j != null && (d = j.replace(Tt, "$&/") + "/"), st(b, v, d, "", function(K) {
            return K
        })) : b != null && (vt(b) && (b = k(b, d + (b.key == null || s && s.key === b.key ? "" : ("" + b.key).replace(Tt, "$&/") + "/") + j)), v.push(b)), 1;
        j = 0;
        var H = o === "" ? "." : o + ":";
        if (ht(s))
            for (var C = 0; C < s.length; C++) o = s[C], E = H + ut(o, C), j += st(o, v, d, E, b);
        else if (C = w(s), typeof C == "function")
            for (s = C.call(s), C = 0; !(o = s.next()).done;) o = o.value, E = H + ut(o, C++), j += st(o, v, d, E, b);
        else if (E === "object") {
            if (typeof s.then == "function") return st(Yt(s), v, d, o, b);
            throw v = String(s), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.")
        }
        return j
    }

    function T(s, v, d) {
        if (s == null) return s;
        var o = [],
            b = 0;
        return st(s, o, "", "", function(E) {
            return v.call(d, E, b++)
        }), o
    }

    function M(s) {
        if (s._status === -1) {
            var v = s._result;
            v = v(), v.then(function(d) {
                (s._status === 0 || s._status === -1) && (s._status = 1, s._result = d)
            }, function(d) {
                (s._status === 0 || s._status === -1) && (s._status = 2, s._result = d)
            }), s._status === -1 && (s._status = 0, s._result = v)
        }
        if (s._status === 1) return s._result.default;
        throw s._result
    }
    var O = typeof reportError == "function" ? reportError : function(s) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var v = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
                error: s
            });
            if (!window.dispatchEvent(v)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", s);
            return
        }
        console.error(s)
    };

    function B() {}
    return W.Children = {
        map: T,
        forEach: function(s, v, d) {
            T(s, function() {
                v.apply(this, arguments)
            }, d)
        },
        count: function(s) {
            var v = 0;
            return T(s, function() {
                v++
            }), v
        },
        toArray: function(s) {
            return T(s, function(v) {
                return v
            }) || []
        },
        only: function(s) {
            if (!vt(s)) throw Error("React.Children.only expected to receive a single React element child.");
            return s
        }
    }, W.Component = ft, W.Fragment = I, W.Profiler = Y, W.PureComponent = Mt, W.StrictMode = x, W.Suspense = N, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, W.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(s) {
            return L.H.useMemoCache(s)
        }
    }, W.cache = function(s) {
        return function() {
            return s.apply(null, arguments)
        }
    }, W.cloneElement = function(s, v, d) {
        if (s == null) throw Error("The argument must be a React element, but you passed " + s + ".");
        var o = $({}, s.props),
            b = s.key,
            E = void 0;
        if (v != null)
            for (j in v.ref !== void 0 && (E = void 0), v.key !== void 0 && (b = "" + v.key), v) !ct.call(v, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && v.ref === void 0 || (o[j] = v[j]);
        var j = arguments.length - 2;
        if (j === 1) o.children = d;
        else if (1 < j) {
            for (var H = Array(j), C = 0; C < j; C++) H[C] = arguments[C + 2];
            o.children = H
        }
        return zt(s.type, b, void 0, void 0, E, o)
    }, W.createContext = function(s) {
        return s = {
            $$typeof: P,
            _currentValue: s,
            _currentValue2: s,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, s.Provider = s, s.Consumer = {
            $$typeof: J,
            _context: s
        }, s
    }, W.createElement = function(s, v, d) {
        var o, b = {},
            E = null;
        if (v != null)
            for (o in v.key !== void 0 && (E = "" + v.key), v) ct.call(v, o) && o !== "key" && o !== "__self" && o !== "__source" && (b[o] = v[o]);
        var j = arguments.length - 2;
        if (j === 1) b.children = d;
        else if (1 < j) {
            for (var H = Array(j), C = 0; C < j; C++) H[C] = arguments[C + 2];
            b.children = H
        }
        if (s && s.defaultProps)
            for (o in j = s.defaultProps, j) b[o] === void 0 && (b[o] = j[o]);
        return zt(s, E, void 0, void 0, null, b)
    }, W.createRef = function() {
        return {
            current: null
        }
    }, W.forwardRef = function(s) {
        return {
            $$typeof: Et,
            render: s
        }
    }, W.isValidElement = vt, W.lazy = function(s) {
        return {
            $$typeof: V,
            _payload: {
                _status: -1,
                _result: s
            },
            _init: M
        }
    }, W.memo = function(s, v) {
        return {
            $$typeof: z,
            type: s,
            compare: v === void 0 ? null : v
        }
    }, W.startTransition = function(s) {
        var v = L.T,
            d = {};
        L.T = d;
        try {
            var o = s(),
                b = L.S;
            b !== null && b(d, o), typeof o == "object" && o !== null && typeof o.then == "function" && o.then(B, O)
        } catch (E) {
            O(E)
        } finally {
            L.T = v
        }
    }, W.unstable_useCacheRefresh = function() {
        return L.H.useCacheRefresh()
    }, W.use = function(s) {
        return L.H.use(s)
    }, W.useActionState = function(s, v, d) {
        return L.H.useActionState(s, v, d)
    }, W.useCallback = function(s, v) {
        return L.H.useCallback(s, v)
    }, W.useContext = function(s) {
        return L.H.useContext(s)
    }, W.useDebugValue = function() {}, W.useDeferredValue = function(s, v) {
        return L.H.useDeferredValue(s, v)
    }, W.useEffect = function(s, v, d) {
        var o = L.H;
        if (typeof d == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return o.useEffect(s, v)
    }, W.useId = function() {
        return L.H.useId()
    }, W.useImperativeHandle = function(s, v, d) {
        return L.H.useImperativeHandle(s, v, d)
    }, W.useInsertionEffect = function(s, v) {
        return L.H.useInsertionEffect(s, v)
    }, W.useLayoutEffect = function(s, v) {
        return L.H.useLayoutEffect(s, v)
    }, W.useMemo = function(s, v) {
        return L.H.useMemo(s, v)
    }, W.useOptimistic = function(s, v) {
        return L.H.useOptimistic(s, v)
    }, W.useReducer = function(s, v, d) {
        return L.H.useReducer(s, v, d)
    }, W.useRef = function(s) {
        return L.H.useRef(s)
    }, W.useState = function(s) {
        return L.H.useState(s)
    }, W.useSyncExternalStore = function(s, v, d) {
        return L.H.useSyncExternalStore(s, v, d)
    }, W.useTransition = function() {
        return L.H.useTransition()
    }, W.version = "19.1.0", W
}
var td;

function ef() {
    return td || (td = 1, Fc.exports = jy()), Fc.exports
}
var R = ef(),
    Ic = {
        exports: {}
    },
    pu = {},
    Pc = {
        exports: {}
    },
    tf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ld;

function Uy() {
    return ld || (ld = 1, function(U) {
        function it(T, M) {
            var O = T.length;
            T.push(M);
            t: for (; 0 < O;) {
                var B = O - 1 >>> 1,
                    s = T[B];
                if (0 < Y(s, M)) T[B] = M, T[O] = s, O = B;
                else break t
            }
        }

        function I(T) {
            return T.length === 0 ? null : T[0]
        }

        function x(T) {
            if (T.length === 0) return null;
            var M = T[0],
                O = T.pop();
            if (O !== M) {
                T[0] = O;
                t: for (var B = 0, s = T.length, v = s >>> 1; B < v;) {
                    var d = 2 * (B + 1) - 1,
                        o = T[d],
                        b = d + 1,
                        E = T[b];
                    if (0 > Y(o, O)) b < s && 0 > Y(E, o) ? (T[B] = E, T[b] = O, B = b) : (T[B] = o, T[d] = O, B = d);
                    else if (b < s && 0 > Y(E, O)) T[B] = E, T[b] = O, B = b;
                    else break t
                }
            }
            return M
        }

        function Y(T, M) {
            var O = T.sortIndex - M.sortIndex;
            return O !== 0 ? O : T.id - M.id
        }
        if (U.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var J = performance;
            U.unstable_now = function() {
                return J.now()
            }
        } else {
            var P = Date,
                Et = P.now();
            U.unstable_now = function() {
                return P.now() - Et
            }
        }
        var N = [],
            z = [],
            V = 1,
            tt = null,
            w = 3,
            Rt = !1,
            $ = !1,
            Vt = !1,
            ft = !1,
            Xt = typeof setTimeout == "function" ? setTimeout : null,
            Mt = typeof clearTimeout == "function" ? clearTimeout : null,
            yt = typeof setImmediate < "u" ? setImmediate : null;

        function ht(T) {
            for (var M = I(z); M !== null;) {
                if (M.callback === null) x(z);
                else if (M.startTime <= T) x(z), M.sortIndex = M.expirationTime, it(N, M);
                else break;
                M = I(z)
            }
        }

        function L(T) {
            if (Vt = !1, ht(T), !$)
                if (I(N) !== null) $ = !0, ct || (ct = !0, ut());
                else {
                    var M = I(z);
                    M !== null && st(L, M.startTime - T)
                }
        }
        var ct = !1,
            zt = -1,
            k = 5,
            vt = -1;

        function gt() {
            return ft ? !0 : !(U.unstable_now() - vt < k)
        }

        function Tt() {
            if (ft = !1, ct) {
                var T = U.unstable_now();
                vt = T;
                var M = !0;
                try {
                    t: {
                        $ = !1,
                        Vt && (Vt = !1, Mt(zt), zt = -1),
                        Rt = !0;
                        var O = w;
                        try {
                            l: {
                                for (ht(T), tt = I(N); tt !== null && !(tt.expirationTime > T && gt());) {
                                    var B = tt.callback;
                                    if (typeof B == "function") {
                                        tt.callback = null, w = tt.priorityLevel;
                                        var s = B(tt.expirationTime <= T);
                                        if (T = U.unstable_now(), typeof s == "function") {
                                            tt.callback = s, ht(T), M = !0;
                                            break l
                                        }
                                        tt === I(N) && x(N), ht(T)
                                    } else x(N);
                                    tt = I(N)
                                }
                                if (tt !== null) M = !0;
                                else {
                                    var v = I(z);
                                    v !== null && st(L, v.startTime - T), M = !1
                                }
                            }
                            break t
                        }
                        finally {
                            tt = null, w = O, Rt = !1
                        }
                        M = void 0
                    }
                }
                finally {
                    M ? ut() : ct = !1
                }
            }
        }
        var ut;
        if (typeof yt == "function") ut = function() {
            yt(Tt)
        };
        else if (typeof MessageChannel < "u") {
            var At = new MessageChannel,
                Yt = At.port2;
            At.port1.onmessage = Tt, ut = function() {
                Yt.postMessage(null)
            }
        } else ut = function() {
            Xt(Tt, 0)
        };

        function st(T, M) {
            zt = Xt(function() {
                T(U.unstable_now())
            }, M)
        }
        U.unstable_IdlePriority = 5, U.unstable_ImmediatePriority = 1, U.unstable_LowPriority = 4, U.unstable_NormalPriority = 3, U.unstable_Profiling = null, U.unstable_UserBlockingPriority = 2, U.unstable_cancelCallback = function(T) {
            T.callback = null
        }, U.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < T ? Math.floor(1e3 / T) : 5
        }, U.unstable_getCurrentPriorityLevel = function() {
            return w
        }, U.unstable_next = function(T) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var M = 3;
                    break;
                default:
                    M = w
            }
            var O = w;
            w = M;
            try {
                return T()
            } finally {
                w = O
            }
        }, U.unstable_requestPaint = function() {
            ft = !0
        }, U.unstable_runWithPriority = function(T, M) {
            switch (T) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    T = 3
            }
            var O = w;
            w = T;
            try {
                return M()
            } finally {
                w = O
            }
        }, U.unstable_scheduleCallback = function(T, M, O) {
            var B = U.unstable_now();
            switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? B + O : B) : O = B, T) {
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
            return s = O + s, T = {
                id: V++,
                callback: M,
                priorityLevel: T,
                startTime: O,
                expirationTime: s,
                sortIndex: -1
            }, O > B ? (T.sortIndex = O, it(z, T), I(N) === null && T === I(z) && (Vt ? (Mt(zt), zt = -1) : Vt = !0, st(L, O - B))) : (T.sortIndex = s, it(N, T), $ || Rt || ($ = !0, ct || (ct = !0, ut()))), T
        }, U.unstable_shouldYield = gt, U.unstable_wrapCallback = function(T) {
            var M = w;
            return function() {
                var O = w;
                w = M;
                try {
                    return T.apply(this, arguments)
                } finally {
                    w = O
                }
            }
        }
    }(tf)), tf
}
var ed;

function Ny() {
    return ed || (ed = 1, Pc.exports = Uy()), Pc.exports
}
var lf = {
        exports: {}
    },
    Pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;

function Hy() {
    if (ad) return Pt;
    ad = 1;
    var U = ef();

    function it(N) {
        var z = "https://react.dev/errors/" + N;
        if (1 < arguments.length) {
            z += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var V = 2; V < arguments.length; V++) z += "&args[]=" + encodeURIComponent(arguments[V])
        }
        return "Minified React error #" + N + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function I() {}
    var x = {
            d: {
                f: I,
                r: function() {
                    throw Error(it(522))
                },
                D: I,
                C: I,
                L: I,
                m: I,
                X: I,
                S: I,
                M: I
            },
            p: 0,
            findDOMNode: null
        },
        Y = Symbol.for("react.portal");

    function J(N, z, V) {
        var tt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Y,
            key: tt == null ? null : "" + tt,
            children: N,
            containerInfo: z,
            implementation: V
        }
    }
    var P = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function Et(N, z) {
        if (N === "font") return "";
        if (typeof z == "string") return z === "use-credentials" ? z : ""
    }
    return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x, Pt.createPortal = function(N, z) {
        var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11) throw Error(it(299));
        return J(N, z, null, V)
    }, Pt.flushSync = function(N) {
        var z = P.T,
            V = x.p;
        try {
            if (P.T = null, x.p = 2, N) return N()
        } finally {
            P.T = z, x.p = V, x.d.f()
        }
    }, Pt.preconnect = function(N, z) {
        typeof N == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, x.d.C(N, z))
    }, Pt.prefetchDNS = function(N) {
        typeof N == "string" && x.d.D(N)
    }, Pt.preinit = function(N, z) {
        if (typeof N == "string" && z && typeof z.as == "string") {
            var V = z.as,
                tt = Et(V, z.crossOrigin),
                w = typeof z.integrity == "string" ? z.integrity : void 0,
                Rt = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
            V === "style" ? x.d.S(N, typeof z.precedence == "string" ? z.precedence : void 0, {
                crossOrigin: tt,
                integrity: w,
                fetchPriority: Rt
            }) : V === "script" && x.d.X(N, {
                crossOrigin: tt,
                integrity: w,
                fetchPriority: Rt,
                nonce: typeof z.nonce == "string" ? z.nonce : void 0
            })
        }
    }, Pt.preinitModule = function(N, z) {
        if (typeof N == "string")
            if (typeof z == "object" && z !== null) {
                if (z.as == null || z.as === "script") {
                    var V = Et(z.as, z.crossOrigin);
                    x.d.M(N, {
                        crossOrigin: V,
                        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
                        nonce: typeof z.nonce == "string" ? z.nonce : void 0
                    })
                }
            } else z == null && x.d.M(N)
    }, Pt.preload = function(N, z) {
        if (typeof N == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
            var V = z.as,
                tt = Et(V, z.crossOrigin);
            x.d.L(N, V, {
                crossOrigin: tt,
                integrity: typeof z.integrity == "string" ? z.integrity : void 0,
                nonce: typeof z.nonce == "string" ? z.nonce : void 0,
                type: typeof z.type == "string" ? z.type : void 0,
                fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
                referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
                imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
                imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
                media: typeof z.media == "string" ? z.media : void 0
            })
        }
    }, Pt.preloadModule = function(N, z) {
        if (typeof N == "string")
            if (z) {
                var V = Et(z.as, z.crossOrigin);
                x.d.m(N, {
                    as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
                    crossOrigin: V,
                    integrity: typeof z.integrity == "string" ? z.integrity : void 0
                })
            } else x.d.m(N)
    }, Pt.requestFormReset = function(N) {
        x.d.r(N)
    }, Pt.unstable_batchedUpdates = function(N, z) {
        return N(z)
    }, Pt.useFormState = function(N, z, V) {
        return P.H.useFormState(N, z, V)
    }, Pt.useFormStatus = function() {
        return P.H.useHostTransitionStatus()
    }, Pt.version = "19.1.0", Pt
}
var ud;

function Cy() {
    if (ud) return lf.exports;
    ud = 1;

    function U() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U)
        } catch (it) {
            console.error(it)
        }
    }
    return U(), lf.exports = Hy(), lf.exports
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
var nd;

function Vy() {
    if (nd) return pu;
    nd = 1;
    var U = Ny(),
        it = ef(),
        I = Cy();

    function x(t) {
        var l = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            l += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++) l += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function Y(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function J(t) {
        var l = t,
            e = t;
        if (t.alternate)
            for (; l.return;) l = l.return;
        else {
            t = l;
            do l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return; while (t)
        }
        return l.tag === 3 ? e : null
    }

    function P(t) {
        if (t.tag === 13) {
            var l = t.memoizedState;
            if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated
        }
        return null
    }

    function Et(t) {
        if (J(t) !== t) throw Error(x(188))
    }

    function N(t) {
        var l = t.alternate;
        if (!l) {
            if (l = J(t), l === null) throw Error(x(188));
            return l !== t ? null : t
        }
        for (var e = t, a = l;;) {
            var u = e.return;
            if (u === null) break;
            var n = u.alternate;
            if (n === null) {
                if (a = u.return, a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (u.child === n.child) {
                for (n = u.child; n;) {
                    if (n === e) return Et(u), t;
                    if (n === a) return Et(u), l;
                    n = n.sibling
                }
                throw Error(x(188))
            }
            if (e.return !== a.return) e = u, a = n;
            else {
                for (var i = !1, c = u.child; c;) {
                    if (c === e) {
                        i = !0, e = u, a = n;
                        break
                    }
                    if (c === a) {
                        i = !0, a = u, e = n;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = n.child; c;) {
                        if (c === e) {
                            i = !0, e = n, a = u;
                            break
                        }
                        if (c === a) {
                            i = !0, a = n, e = u;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i) throw Error(x(189))
                }
            }
            if (e.alternate !== a) throw Error(x(190))
        }
        if (e.tag !== 3) throw Error(x(188));
        return e.stateNode.current === e ? t : l
    }

    function z(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return t;
        for (t = t.child; t !== null;) {
            if (l = z(t), l !== null) return l;
            t = t.sibling
        }
        return null
    }
    var V = Object.assign,
        tt = Symbol.for("react.element"),
        w = Symbol.for("react.transitional.element"),
        Rt = Symbol.for("react.portal"),
        $ = Symbol.for("react.fragment"),
        Vt = Symbol.for("react.strict_mode"),
        ft = Symbol.for("react.profiler"),
        Xt = Symbol.for("react.provider"),
        Mt = Symbol.for("react.consumer"),
        yt = Symbol.for("react.context"),
        ht = Symbol.for("react.forward_ref"),
        L = Symbol.for("react.suspense"),
        ct = Symbol.for("react.suspense_list"),
        zt = Symbol.for("react.memo"),
        k = Symbol.for("react.lazy"),
        vt = Symbol.for("react.activity"),
        gt = Symbol.for("react.memo_cache_sentinel"),
        Tt = Symbol.iterator;

    function ut(t) {
        return t === null || typeof t != "object" ? null : (t = Tt && t[Tt] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var At = Symbol.for("react.client.reference");

    function Yt(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === At ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case $:
                return "Fragment";
            case ft:
                return "Profiler";
            case Vt:
                return "StrictMode";
            case L:
                return "Suspense";
            case ct:
                return "SuspenseList";
            case vt:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case Rt:
                return "Portal";
            case yt:
                return (t.displayName || "Context") + ".Provider";
            case Mt:
                return (t._context.displayName || "Context") + ".Consumer";
            case ht:
                var l = t.render;
                return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case zt:
                return l = t.displayName || null, l !== null ? l : Yt(t.type) || "Memo";
            case k:
                l = t._payload, t = t._init;
                try {
                    return Yt(t(l))
                } catch {}
        }
        return null
    }
    var st = Array.isArray,
        T = it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        M = I.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        O = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        B = [],
        s = -1;

    function v(t) {
        return {
            current: t
        }
    }

    function d(t) {
        0 > s || (t.current = B[s], B[s] = null, s--)
    }

    function o(t, l) {
        s++, B[s] = t.current, t.current = l
    }
    var b = v(null),
        E = v(null),
        j = v(null),
        H = v(null);

    function C(t, l) {
        switch (o(j, l), o(E, t), o(b, null), l.nodeType) {
            case 9:
            case 11:
                t = (t = l.documentElement) && (t = t.namespaceURI) ? zr(t) : 0;
                break;
            default:
                if (t = l.tagName, l = l.namespaceURI) l = zr(l), t = Dr(l, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        d(b), o(b, t)
    }

    function K() {
        d(b), d(E), d(j)
    }

    function ot(t) {
        t.memoizedState !== null && o(H, t);
        var l = b.current,
            e = Dr(l, t.type);
        l !== e && (o(E, t), o(b, e))
    }

    function Qt(t) {
        E.current === t && (d(b), d(E)), H.current === t && (d(H), hu._currentValue = O)
    }
    var Vn = Object.prototype.hasOwnProperty,
        qn = U.unstable_scheduleCallback,
        Bn = U.unstable_cancelCallback,
        cd = U.unstable_shouldYield,
        fd = U.unstable_requestPaint,
        Al = U.unstable_now,
        sd = U.unstable_getCurrentPriorityLevel,
        af = U.unstable_ImmediatePriority,
        uf = U.unstable_UserBlockingPriority,
        xu = U.unstable_NormalPriority,
        od = U.unstable_LowPriority,
        nf = U.unstable_IdlePriority,
        rd = U.log,
        dd = U.unstable_setDisableYieldValue,
        Ta = null,
        il = null;

    function kl(t) {
        if (typeof rd == "function" && dd(t), il && typeof il.setStrictMode == "function") try {
            il.setStrictMode(Ta, t)
        } catch {}
    }
    var cl = Math.clz32 ? Math.clz32 : vd,
        yd = Math.log,
        hd = Math.LN2;

    function vd(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (yd(t) / hd | 0) | 0
    }
    var Tu = 256,
        _u = 4194304;

    function be(t) {
        var l = t & 42;
        if (l !== 0) return l;
        switch (t & -t) {
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
                return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
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
                return t
        }
    }

    function Eu(t, l, e) {
        var a = t.pendingLanes;
        if (a === 0) return 0;
        var u = 0,
            n = t.suspendedLanes,
            i = t.pingedLanes;
        t = t.warmLanes;
        var c = a & 134217727;
        return c !== 0 ? (a = c & ~n, a !== 0 ? u = be(a) : (i &= c, i !== 0 ? u = be(i) : e || (e = c & ~t, e !== 0 && (u = be(e))))) : (c = a & ~n, c !== 0 ? u = be(c) : i !== 0 ? u = be(i) : e || (e = a & ~t, e !== 0 && (u = be(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u
    }

    function _a(t, l) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0
    }

    function gd(t, l) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return l + 250;
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
                return l + 5e3;
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

    function cf() {
        var t = Tu;
        return Tu <<= 1, (Tu & 4194048) === 0 && (Tu = 256), t
    }

    function ff() {
        var t = _u;
        return _u <<= 1, (_u & 62914560) === 0 && (_u = 4194304), t
    }

    function Yn(t) {
        for (var l = [], e = 0; 31 > e; e++) l.push(t);
        return l
    }

    function Ea(t, l) {
        t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function md(t, l, e, a, u, n) {
        var i = t.pendingLanes;
        t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
        var c = t.entanglements,
            f = t.expirationTimes,
            m = t.hiddenUpdates;
        for (e = i & ~e; 0 < e;) {
            var _ = 31 - cl(e),
                A = 1 << _;
            c[_] = 0, f[_] = -1;
            var S = m[_];
            if (S !== null)
                for (m[_] = null, _ = 0; _ < S.length; _++) {
                    var p = S[_];
                    p !== null && (p.lane &= -536870913)
                }
            e &= ~A
        }
        a !== 0 && sf(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l))
    }

    function sf(t, l, e) {
        t.pendingLanes |= l, t.suspendedLanes &= ~l;
        var a = 31 - cl(l);
        t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194090
    }

    function of (t, l) {
        var e = t.entangledLanes |= l;
        for (t = t.entanglements; e;) {
            var a = 31 - cl(e),
                u = 1 << a;
            u & l | t[a] & l && (t[a] |= l), e &= ~u
        }
    }

    function Gn(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
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
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function Zn(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function rf() {
        var t = M.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Lr(t.type))
    }

    function Sd(t, l) {
        var e = M.p;
        try {
            return M.p = t, l()
        } finally {
            M.p = e
        }
    }
    var Wl = Math.random().toString(36).slice(2),
        Ft = "__reactFiber$" + Wl,
        ll = "__reactProps$" + Wl,
        qe = "__reactContainer$" + Wl,
        Xn = "__reactEvents$" + Wl,
        bd = "__reactListeners$" + Wl,
        pd = "__reactHandles$" + Wl,
        df = "__reactResources$" + Wl,
        za = "__reactMarker$" + Wl;

    function Qn(t) {
        delete t[Ft], delete t[ll], delete t[Xn], delete t[bd], delete t[pd]
    }

    function Be(t) {
        var l = t[Ft];
        if (l) return l;
        for (var e = t.parentNode; e;) {
            if (l = e[qe] || e[Ft]) {
                if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
                    for (t = Mr(t); t !== null;) {
                        if (e = t[Ft]) return e;
                        t = Mr(t)
                    }
                return l
            }
            t = e, e = t.parentNode
        }
        return null
    }

    function Ye(t) {
        if (t = t[Ft] || t[qe]) {
            var l = t.tag;
            if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3) return t
        }
        return null
    }

    function Da(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
        throw Error(x(33))
    }

    function Ge(t) {
        var l = t[df];
        return l || (l = t[df] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), l
    }

    function wt(t) {
        t[za] = !0
    }
    var yf = new Set,
        hf = {};

    function pe(t, l) {
        Ze(t, l), Ze(t + "Capture", l)
    }

    function Ze(t, l) {
        for (hf[t] = l, t = 0; t < l.length; t++) yf.add(l[t])
    }
    var xd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        vf = {},
        gf = {};

    function Td(t) {
        return Vn.call(gf, t) ? !0 : Vn.call(vf, t) ? !1 : xd.test(t) ? gf[t] = !0 : (vf[t] = !0, !1)
    }

    function zu(t, l, e) {
        if (Td(l))
            if (e === null) t.removeAttribute(l);
            else {
                switch (typeof e) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(l);
                        return;
                    case "boolean":
                        var a = l.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            t.removeAttribute(l);
                            return
                        }
                }
                t.setAttribute(l, "" + e)
            }
    }

    function Du(t, l, e) {
        if (e === null) t.removeAttribute(l);
        else {
            switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(l);
                    return
            }
            t.setAttribute(l, "" + e)
        }
    }

    function Nl(t, l, e, a) {
        if (a === null) t.removeAttribute(e);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return
            }
            t.setAttributeNS(l, e, "" + a)
        }
    }
    var wn, mf;

    function Xe(t) {
        if (wn === void 0) try {
            throw Error()
        } catch (e) {
            var l = e.stack.trim().match(/\n( *(at )?)/);
            wn = l && l[1] || "", mf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + wn + t + mf
    }
    var Ln = !1;

    function Kn(t, l) {
        if (!t || Ln) return "";
        Ln = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (l) {
                            var A = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(A.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(A, [])
                                } catch (p) {
                                    var S = p
                                }
                                Reflect.construct(t, [], A)
                            } else {
                                try {
                                    A.call()
                                } catch (p) {
                                    S = p
                                }
                                t.call(A.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (p) {
                                S = p
                            }(A = t()) && typeof A.catch == "function" && A.catch(function() {})
                        }
                    } catch (p) {
                        if (p && S && typeof p.stack == "string") return [p.stack, S.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = a.DetermineComponentFrameRoot(),
                i = n[0],
                c = n[1];
            if (i && c) {
                var f = i.split(`
`),
                    m = c.split(`
`);
                for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot");) a++;
                for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot");) u++;
                if (a === f.length || u === m.length)
                    for (a = f.length - 1, u = m.length - 1; 1 <= a && 0 <= u && f[a] !== m[u];) u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (f[a] !== m[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--, u--, 0 > u || f[a] !== m[u]) {
                                    var _ = `
` + f[a].replace(" at new ", " at ");
                                    return t.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", t.displayName)), _
                                }
                        while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            Ln = !1, Error.prepareStackTrace = e
        }
        return (e = t ? t.displayName || t.name : "") ? Xe(e) : ""
    }

    function _d(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Xe(t.type);
            case 16:
                return Xe("Lazy");
            case 13:
                return Xe("Suspense");
            case 19:
                return Xe("SuspenseList");
            case 0:
            case 15:
                return Kn(t.type, !1);
            case 11:
                return Kn(t.type.render, !1);
            case 1:
                return Kn(t.type, !0);
            case 31:
                return Xe("Activity");
            default:
                return ""
        }
    }

    function Sf(t) {
        try {
            var l = "";
            do l += _d(t), t = t.return; while (t);
            return l
        } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack
        }
    }

    function vl(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function bf(t) {
        var l = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio")
    }

    function Ed(t) {
        var l = bf(t) ? "checked" : "value",
            e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l),
            a = "" + t[l];
        if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
            var u = e.get,
                n = e.set;
            return Object.defineProperty(t, l, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(i) {
                    a = "" + i, n.call(this, i)
                }
            }), Object.defineProperty(t, l, {
                enumerable: e.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(i) {
                    a = "" + i
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[l]
                }
            }
        }
    }

    function Au(t) {
        t._valueTracker || (t._valueTracker = Ed(t))
    }

    function pf(t) {
        if (!t) return !1;
        var l = t._valueTracker;
        if (!l) return !0;
        var e = l.getValue(),
            a = "";
        return t && (a = bf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1
    }

    function Ou(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var zd = /[\n"\\]/g;

    function gl(t) {
        return t.replace(zd, function(l) {
            return "\\" + l.charCodeAt(0).toString(16) + " "
        })
    }

    function Jn(t, l, e, a, u, n, i, c) {
        t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + vl(l)) : t.value !== "" + vl(l) && (t.value = "" + vl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? kn(t, i, vl(l)) : e != null ? kn(t, i, vl(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + vl(c) : t.removeAttribute("name")
    }

    function xf(t, l, e, a, u, n, i, c) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || l != null)) return;
            e = e != null ? "" + vl(e) : "", l = l != null ? "" + vl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l
        }
        a = a ? ? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i)
    }

    function kn(t, l, e) {
        l === "number" && Ou(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e)
    }

    function Qe(t, l, e, a) {
        if (t = t.options, l) {
            l = {};
            for (var u = 0; u < e.length; u++) l["$" + e[u]] = !0;
            for (e = 0; e < t.length; e++) u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = !0)
        } else {
            for (e = "" + vl(e), l = null, u = 0; u < t.length; u++) {
                if (t[u].value === e) {
                    t[u].selected = !0, a && (t[u].defaultSelected = !0);
                    return
                }
                l !== null || t[u].disabled || (l = t[u])
            }
            l !== null && (l.selected = !0)
        }
    }

    function Tf(t, l, e) {
        if (l != null && (l = "" + vl(l), l !== t.value && (t.value = l), e == null)) {
            t.defaultValue !== l && (t.defaultValue = l);
            return
        }
        t.defaultValue = e != null ? "" + vl(e) : ""
    }

    function _f(t, l, e, a) {
        if (l == null) {
            if (a != null) {
                if (e != null) throw Error(x(92));
                if (st(a)) {
                    if (1 < a.length) throw Error(x(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""), l = e
        }
        e = vl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a)
    }

    function we(t, l) {
        if (l) {
            var e = t.firstChild;
            if (e && e === t.lastChild && e.nodeType === 3) {
                e.nodeValue = l;
                return
            }
        }
        t.textContent = l
    }
    var Dd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Ef(t, l, e) {
        var a = l.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Dd.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px"
    }

    function zf(t, l, e) {
        if (l != null && typeof l != "object") throw Error(x(62));
        if (t = t.style, e != null) {
            for (var a in e) !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var u in l) a = l[u], l.hasOwnProperty(u) && e[u] !== a && Ef(t, u, a)
        } else
            for (var n in l) l.hasOwnProperty(n) && Ef(t, n, l[n])
    }

    function Wn(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
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
    var Ad = new Map([
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
        Od = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Ru(t) {
        return Od.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var $n = null;

    function Fn(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var Le = null,
        Ke = null;

    function Df(t) {
        var l = Ye(t);
        if (l && (t = l.stateNode)) {
            var e = t[ll] || null;
            t: switch (t = l.stateNode, l.type) {
                case "input":
                    if (Jn(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), l = e.name, e.type === "radio" && l != null) {
                        for (e = t; e.parentNode;) e = e.parentNode;
                        for (e = e.querySelectorAll('input[name="' + gl("" + l) + '"][type="radio"]'), l = 0; l < e.length; l++) {
                            var a = e[l];
                            if (a !== t && a.form === t.form) {
                                var u = a[ll] || null;
                                if (!u) throw Error(x(90));
                                Jn(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                            }
                        }
                        for (l = 0; l < e.length; l++) a = e[l], a.form === t.form && pf(a)
                    }
                    break t;
                case "textarea":
                    Tf(t, e.value, e.defaultValue);
                    break t;
                case "select":
                    l = e.value, l != null && Qe(t, !!e.multiple, l, !1)
            }
        }
    }
    var In = !1;

    function Af(t, l, e) {
        if (In) return t(l, e);
        In = !0;
        try {
            var a = t(l);
            return a
        } finally {
            if (In = !1, (Le !== null || Ke !== null) && (vn(), Le && (l = Le, t = Ke, Ke = Le = null, Df(l), t)))
                for (l = 0; l < t.length; l++) Df(t[l])
        }
    }

    function Aa(t, l) {
        var e = t.stateNode;
        if (e === null) return null;
        var a = e[ll] || null;
        if (a === null) return null;
        e = a[l];
        t: switch (l) {
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
                (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (e && typeof e != "function") throw Error(x(231, l, typeof e));
        return e
    }
    var Hl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Pn = !1;
    if (Hl) try {
        var Oa = {};
        Object.defineProperty(Oa, "passive", {
            get: function() {
                Pn = !0
            }
        }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa)
    } catch {
        Pn = !1
    }
    var $l = null,
        ti = null,
        Mu = null;

    function Of() {
        if (Mu) return Mu;
        var t, l = ti,
            e = l.length,
            a, u = "value" in $l ? $l.value : $l.textContent,
            n = u.length;
        for (t = 0; t < e && l[t] === u[t]; t++);
        var i = e - t;
        for (a = 1; a <= i && l[e - a] === u[n - a]; a++);
        return Mu = u.slice(t, 1 < a ? 1 - a : void 0)
    }

    function ju(t) {
        var l = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function Uu() {
        return !0
    }

    function Rf() {
        return !1
    }

    function el(t) {
        function l(e, a, u, n, i) {
            this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
            for (var c in t) t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Uu : Rf, this.isPropagationStopped = Rf, this
        }
        return V(l.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Uu)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Uu)
            },
            persist: function() {},
            isPersistent: Uu
        }), l
    }
    var xe = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Nu = el(xe),
        Ra = V({}, xe, {
            view: 0,
            detail: 0
        }),
        Rd = el(Ra),
        li, ei, Ma, Hu = V({}, Ra, {
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
            getModifierState: ui,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Ma && (Ma && t.type === "mousemove" ? (li = t.screenX - Ma.screenX, ei = t.screenY - Ma.screenY) : ei = li = 0, Ma = t), li)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : ei
            }
        }),
        Mf = el(Hu),
        Md = V({}, Hu, {
            dataTransfer: 0
        }),
        jd = el(Md),
        Ud = V({}, Ra, {
            relatedTarget: 0
        }),
        ai = el(Ud),
        Nd = V({}, xe, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Hd = el(Nd),
        Cd = V({}, xe, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        Vd = el(Cd),
        qd = V({}, xe, {
            data: 0
        }),
        jf = el(qd),
        Bd = {
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
        Yd = {
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
        Gd = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Zd(t) {
        var l = this.nativeEvent;
        return l.getModifierState ? l.getModifierState(t) : (t = Gd[t]) ? !!l[t] : !1
    }

    function ui() {
        return Zd
    }
    var Xd = V({}, Ra, {
            key: function(t) {
                if (t.key) {
                    var l = Bd[t.key] || t.key;
                    if (l !== "Unidentified") return l
                }
                return t.type === "keypress" ? (t = ju(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Yd[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ui,
            charCode: function(t) {
                return t.type === "keypress" ? ju(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? ju(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        Qd = el(Xd),
        wd = V({}, Hu, {
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
        Uf = el(wd),
        Ld = V({}, Ra, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ui
        }),
        Kd = el(Ld),
        Jd = V({}, xe, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        kd = el(Jd),
        Wd = V({}, Hu, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        $d = el(Wd),
        Fd = V({}, xe, {
            newState: 0,
            oldState: 0
        }),
        Id = el(Fd),
        Pd = [9, 13, 27, 32],
        ni = Hl && "CompositionEvent" in window,
        ja = null;
    Hl && "documentMode" in document && (ja = document.documentMode);
    var t0 = Hl && "TextEvent" in window && !ja,
        Nf = Hl && (!ni || ja && 8 < ja && 11 >= ja),
        Hf = " ",
        Cf = !1;

    function Vf(t, l) {
        switch (t) {
            case "keyup":
                return Pd.indexOf(l.keyCode) !== -1;
            case "keydown":
                return l.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function qf(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Je = !1;

    function l0(t, l) {
        switch (t) {
            case "compositionend":
                return qf(l);
            case "keypress":
                return l.which !== 32 ? null : (Cf = !0, Hf);
            case "textInput":
                return t = l.data, t === Hf && Cf ? null : t;
            default:
                return null
        }
    }

    function e0(t, l) {
        if (Je) return t === "compositionend" || !ni && Vf(t, l) ? (t = Of(), Mu = ti = $l = null, Je = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
                    if (l.char && 1 < l.char.length) return l.char;
                    if (l.which) return String.fromCharCode(l.which)
                }
                return null;
            case "compositionend":
                return Nf && l.locale !== "ko" ? null : l.data;
            default:
                return null
        }
    }
    var a0 = {
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

    function Bf(t) {
        var l = t && t.nodeName && t.nodeName.toLowerCase();
        return l === "input" ? !!a0[t.type] : l === "textarea"
    }

    function Yf(t, l, e, a) {
        Le ? Ke ? Ke.push(a) : Ke = [a] : Le = a, l = xn(l, "onChange"), 0 < l.length && (e = new Nu("onChange", "change", null, e, a), t.push({
            event: e,
            listeners: l
        }))
    }
    var Ua = null,
        Na = null;

    function u0(t) {
        pr(t, 0)
    }

    function Cu(t) {
        var l = Da(t);
        if (pf(l)) return t
    }

    function Gf(t, l) {
        if (t === "change") return l
    }
    var Zf = !1;
    if (Hl) {
        var ii;
        if (Hl) {
            var ci = "oninput" in document;
            if (!ci) {
                var Xf = document.createElement("div");
                Xf.setAttribute("oninput", "return;"), ci = typeof Xf.oninput == "function"
            }
            ii = ci
        } else ii = !1;
        Zf = ii && (!document.documentMode || 9 < document.documentMode)
    }

    function Qf() {
        Ua && (Ua.detachEvent("onpropertychange", wf), Na = Ua = null)
    }

    function wf(t) {
        if (t.propertyName === "value" && Cu(Na)) {
            var l = [];
            Yf(l, Na, t, Fn(t)), Af(u0, l)
        }
    }

    function n0(t, l, e) {
        t === "focusin" ? (Qf(), Ua = l, Na = e, Ua.attachEvent("onpropertychange", wf)) : t === "focusout" && Qf()
    }

    function i0(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Cu(Na)
    }

    function c0(t, l) {
        if (t === "click") return Cu(l)
    }

    function f0(t, l) {
        if (t === "input" || t === "change") return Cu(l)
    }

    function s0(t, l) {
        return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l
    }
    var fl = typeof Object.is == "function" ? Object.is : s0;

    function Ha(t, l) {
        if (fl(t, l)) return !0;
        if (typeof t != "object" || t === null || typeof l != "object" || l === null) return !1;
        var e = Object.keys(t),
            a = Object.keys(l);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!Vn.call(l, u) || !fl(t[u], l[u])) return !1
        }
        return !0
    }

    function Lf(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function Kf(t, l) {
        var e = Lf(t);
        t = 0;
        for (var a; e;) {
            if (e.nodeType === 3) {
                if (a = t + e.textContent.length, t <= l && a >= l) return {
                    node: e,
                    offset: l - t
                };
                t = a
            }
            t: {
                for (; e;) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break t
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = Lf(e)
        }
    }

    function Jf(t, l) {
        return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Jf(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1
    }

    function kf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var l = Ou(t.document); l instanceof t.HTMLIFrameElement;) {
            try {
                var e = typeof l.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e) t = l.contentWindow;
            else break;
            l = Ou(t.document)
        }
        return l
    }

    function fi(t) {
        var l = t && t.nodeName && t.nodeName.toLowerCase();
        return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true")
    }
    var o0 = Hl && "documentMode" in document && 11 >= document.documentMode,
        ke = null,
        si = null,
        Ca = null,
        oi = !1;

    function Wf(t, l, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        oi || ke == null || ke !== Ou(a) || (a = ke, "selectionStart" in a && fi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), Ca && Ha(Ca, a) || (Ca = a, a = xn(si, "onSelect"), 0 < a.length && (l = new Nu("onSelect", "select", null, l, e), t.push({
            event: l,
            listeners: a
        }), l.target = ke)))
    }

    function Te(t, l) {
        var e = {};
        return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e
    }
    var We = {
            animationend: Te("Animation", "AnimationEnd"),
            animationiteration: Te("Animation", "AnimationIteration"),
            animationstart: Te("Animation", "AnimationStart"),
            transitionrun: Te("Transition", "TransitionRun"),
            transitionstart: Te("Transition", "TransitionStart"),
            transitioncancel: Te("Transition", "TransitionCancel"),
            transitionend: Te("Transition", "TransitionEnd")
        },
        ri = {},
        $f = {};
    Hl && ($f = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);

    function _e(t) {
        if (ri[t]) return ri[t];
        if (!We[t]) return t;
        var l = We[t],
            e;
        for (e in l)
            if (l.hasOwnProperty(e) && e in $f) return ri[t] = l[e];
        return t
    }
    var Ff = _e("animationend"),
        If = _e("animationiteration"),
        Pf = _e("animationstart"),
        r0 = _e("transitionrun"),
        d0 = _e("transitionstart"),
        y0 = _e("transitioncancel"),
        ts = _e("transitionend"),
        ls = new Map,
        di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    di.push("scrollEnd");

    function El(t, l) {
        ls.set(t, l), pe(l, [t])
    }
    var es = new WeakMap;

    function ml(t, l) {
        if (typeof t == "object" && t !== null) {
            var e = es.get(t);
            return e !== void 0 ? e : (l = {
                value: t,
                source: l,
                stack: Sf(l)
            }, es.set(t, l), l)
        }
        return {
            value: t,
            source: l,
            stack: Sf(l)
        }
    }
    var Sl = [],
        $e = 0,
        yi = 0;

    function Vu() {
        for (var t = $e, l = yi = $e = 0; l < t;) {
            var e = Sl[l];
            Sl[l++] = null;
            var a = Sl[l];
            Sl[l++] = null;
            var u = Sl[l];
            Sl[l++] = null;
            var n = Sl[l];
            if (Sl[l++] = null, a !== null && u !== null) {
                var i = a.pending;
                i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u
            }
            n !== 0 && as(e, u, n)
        }
    }

    function qu(t, l, e, a) {
        Sl[$e++] = t, Sl[$e++] = l, Sl[$e++] = e, Sl[$e++] = a, yi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
    }

    function hi(t, l, e, a) {
        return qu(t, l, e, a), Bu(t)
    }

    function Fe(t, l) {
        return qu(t, null, null, l), Bu(t)
    }

    function as(t, l, e) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = t.return; n !== null;) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
        return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - cl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [l] : a.push(l), l.lane = e | 536870912), n) : null
    }

    function Bu(t) {
        if (50 < iu) throw iu = 0, pc = null, Error(x(185));
        for (var l = t.return; l !== null;) t = l, l = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Ie = {};

    function h0(t, l, e, a) {
        this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function sl(t, l, e, a) {
        return new h0(t, l, e, a)
    }

    function vi(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function Cl(t, l) {
        var e = t.alternate;
        return e === null ? (e = sl(t.tag, l, t.key, t.mode), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : {
            lanes: l.lanes,
            firstContext: l.firstContext
        }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e
    }

    function us(t, l) {
        t.flags &= 65011714;
        var e = t.alternate;
        return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
            lanes: l.lanes,
            firstContext: l.firstContext
        }), t
    }

    function Yu(t, l, e, a, u, n) {
        var i = 0;
        if (a = t, typeof t == "function") vi(t) && (i = 1);
        else if (typeof t == "string") i = gy(t, e, b.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case vt:
                return t = sl(31, e, l, u), t.elementType = vt, t.lanes = n, t;
            case $:
                return Ee(e.children, u, n, l);
            case Vt:
                i = 8, u |= 24;
                break;
            case ft:
                return t = sl(12, e, l, u | 2), t.elementType = ft, t.lanes = n, t;
            case L:
                return t = sl(13, e, l, u), t.elementType = L, t.lanes = n, t;
            case ct:
                return t = sl(19, e, l, u), t.elementType = ct, t.lanes = n, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case Xt:
                    case yt:
                        i = 10;
                        break t;
                    case Mt:
                        i = 9;
                        break t;
                    case ht:
                        i = 11;
                        break t;
                    case zt:
                        i = 14;
                        break t;
                    case k:
                        i = 16, a = null;
                        break t
                }
                i = 29, e = Error(x(130, t === null ? "null" : typeof t, "")), a = null
        }
        return l = sl(i, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l
    }

    function Ee(t, l, e, a) {
        return t = sl(7, t, a, l), t.lanes = e, t
    }

    function gi(t, l, e) {
        return t = sl(6, t, null, l), t.lanes = e, t
    }

    function mi(t, l, e) {
        return l = sl(4, t.children !== null ? t.children : [], t.key, l), l.lanes = e, l.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, l
    }
    var Pe = [],
        ta = 0,
        Gu = null,
        Zu = 0,
        bl = [],
        pl = 0,
        ze = null,
        Vl = 1,
        ql = "";

    function De(t, l) {
        Pe[ta++] = Zu, Pe[ta++] = Gu, Gu = t, Zu = l
    }

    function ns(t, l, e) {
        bl[pl++] = Vl, bl[pl++] = ql, bl[pl++] = ze, ze = t;
        var a = Vl;
        t = ql;
        var u = 32 - cl(a) - 1;
        a &= ~(1 << u), e += 1;
        var n = 32 - cl(l) + u;
        if (30 < n) {
            var i = u - u % 5;
            n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Vl = 1 << 32 - cl(l) + u | e << u | a, ql = n + t
        } else Vl = 1 << n | e << u | a, ql = t
    }

    function Si(t) {
        t.return !== null && (De(t, 1), ns(t, 1, 0))
    }

    function bi(t) {
        for (; t === Gu;) Gu = Pe[--ta], Pe[ta] = null, Zu = Pe[--ta], Pe[ta] = null;
        for (; t === ze;) ze = bl[--pl], bl[pl] = null, ql = bl[--pl], bl[pl] = null, Vl = bl[--pl], bl[pl] = null
    }
    var tl = null,
        Ut = null,
        dt = !1,
        Ae = null,
        Ol = !1,
        pi = Error(x(519));

    function Oe(t) {
        var l = Error(x(418, ""));
        throw Ba(ml(l, t)), pi
    }

    function is(t) {
        var l = t.stateNode,
            e = t.type,
            a = t.memoizedProps;
        switch (l[Ft] = t, l[ll] = a, e) {
            case "dialog":
                at("cancel", l), at("close", l);
                break;
            case "iframe":
            case "object":
            case "embed":
                at("load", l);
                break;
            case "video":
            case "audio":
                for (e = 0; e < fu.length; e++) at(fu[e], l);
                break;
            case "source":
                at("error", l);
                break;
            case "img":
            case "image":
            case "link":
                at("error", l), at("load", l);
                break;
            case "details":
                at("toggle", l);
                break;
            case "input":
                at("invalid", l), xf(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Au(l);
                break;
            case "select":
                at("invalid", l);
                break;
            case "textarea":
                at("invalid", l), _f(l, a.value, a.defaultValue, a.children), Au(l)
        }
        e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Er(l.textContent, e) ? (a.popover != null && (at("beforetoggle", l), at("toggle", l)), a.onScroll != null && at("scroll", l), a.onScrollEnd != null && at("scrollend", l), a.onClick != null && (l.onclick = Tn), l = !0) : l = !1, l || Oe(t)
    }

    function cs(t) {
        for (tl = t.return; tl;) switch (tl.tag) {
            case 5:
            case 13:
                Ol = !1;
                return;
            case 27:
            case 3:
                Ol = !0;
                return;
            default:
                tl = tl.return
        }
    }

    function Va(t) {
        if (t !== tl) return !1;
        if (!dt) return cs(t), dt = !0, !1;
        var l = t.tag,
            e;
        if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || Vc(t.type, t.memoizedProps)), e = !e), e && Ut && Oe(t), cs(t), l === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(x(317));
            t: {
                for (t = t.nextSibling, l = 0; t;) {
                    if (t.nodeType === 8)
                        if (e = t.data, e === "/$") {
                            if (l === 0) {
                                Ut = Dl(t.nextSibling);
                                break t
                            }
                            l--
                        } else e !== "$" && e !== "$!" && e !== "$?" || l++;
                    t = t.nextSibling
                }
                Ut = null
            }
        } else l === 27 ? (l = Ut, de(t.type) ? (t = Gc, Gc = null, Ut = t) : Ut = l) : Ut = tl ? Dl(t.stateNode.nextSibling) : null;
        return !0
    }

    function qa() {
        Ut = tl = null, dt = !1
    }

    function fs() {
        var t = Ae;
        return t !== null && (nl === null ? nl = t : nl.push.apply(nl, t), Ae = null), t
    }

    function Ba(t) {
        Ae === null ? Ae = [t] : Ae.push(t)
    }
    var xi = v(null),
        Re = null,
        Bl = null;

    function Fl(t, l, e) {
        o(xi, l._currentValue), l._currentValue = e
    }

    function Yl(t) {
        t._currentValue = xi.current, d(xi)
    }

    function Ti(t, l, e) {
        for (; t !== null;) {
            var a = t.alternate;
            if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
            t = t.return
        }
    }

    function _i(t, l, e, a) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null;) {
            var n = u.dependencies;
            if (n !== null) {
                var i = u.child;
                n = n.firstContext;
                t: for (; n !== null;) {
                    var c = n;
                    n = u;
                    for (var f = 0; f < l.length; f++)
                        if (c.context === l[f]) {
                            n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Ti(n.return, e, t), a || (i = null);
                            break t
                        }
                    n = c.next
                }
            } else if (u.tag === 18) {
                if (i = u.return, i === null) throw Error(x(341));
                i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Ti(i, e, t), i = null
            } else i = u.child;
            if (i !== null) i.return = u;
            else
                for (i = u; i !== null;) {
                    if (i === t) {
                        i = null;
                        break
                    }
                    if (u = i.sibling, u !== null) {
                        u.return = i.return, i = u;
                        break
                    }
                    i = i.return
                }
            u = i
        }
    }

    function Ya(t, l, e, a) {
        t = null;
        for (var u = l, n = !1; u !== null;) {
            if (!n) {
                if ((u.flags & 524288) !== 0) n = !0;
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var i = u.alternate;
                if (i === null) throw Error(x(387));
                if (i = i.memoizedProps, i !== null) {
                    var c = u.type;
                    fl(u.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c])
                }
            } else if (u === H.current) {
                if (i = u.alternate, i === null) throw Error(x(387));
                i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(hu) : t = [hu])
            }
            u = u.return
        }
        t !== null && _i(l, t, e, a), l.flags |= 262144
    }

    function Xu(t) {
        for (t = t.firstContext; t !== null;) {
            if (!fl(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function Me(t) {
        Re = t, Bl = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function It(t) {
        return ss(Re, t)
    }

    function Qu(t, l) {
        return Re === null && Me(t), ss(t, l)
    }

    function ss(t, l) {
        var e = l._currentValue;
        if (l = {
                context: l,
                memoizedValue: e,
                next: null
            }, Bl === null) {
            if (t === null) throw Error(x(308));
            Bl = l, t.dependencies = {
                lanes: 0,
                firstContext: l
            }, t.flags |= 524288
        } else Bl = Bl.next = l;
        return e
    }
    var v0 = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                l = this.signal = {
                    aborted: !1,
                    addEventListener: function(e, a) {
                        t.push(a)
                    }
                };
            this.abort = function() {
                l.aborted = !0, t.forEach(function(e) {
                    return e()
                })
            }
        },
        g0 = U.unstable_scheduleCallback,
        m0 = U.unstable_NormalPriority,
        Gt = {
            $$typeof: yt,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Ei() {
        return {
            controller: new v0,
            data: new Map,
            refCount: 0
        }
    }

    function Ga(t) {
        t.refCount--, t.refCount === 0 && g0(m0, function() {
            t.controller.abort()
        })
    }
    var Za = null,
        zi = 0,
        la = 0,
        ea = null;

    function S0(t, l) {
        if (Za === null) {
            var e = Za = [];
            zi = 0, la = Ac(), ea = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return zi++, l.then(os, os), l
    }

    function os() {
        if (--zi === 0 && Za !== null) {
            ea !== null && (ea.status = "fulfilled");
            var t = Za;
            Za = null, la = 0, ea = null;
            for (var l = 0; l < t.length; l++)(0, t[l])()
        }
    }

    function b0(t, l) {
        var e = [],
            a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    e.push(u)
                }
            };
        return t.then(function() {
            a.status = "fulfilled", a.value = l;
            for (var u = 0; u < e.length; u++)(0, e[u])(l)
        }, function(u) {
            for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)(0, e[u])(void 0)
        }), a
    }
    var rs = T.S;
    T.S = function(t, l) {
        typeof l == "object" && l !== null && typeof l.then == "function" && S0(t, l), rs !== null && rs(t, l)
    };
    var je = v(null);

    function Di() {
        var t = je.current;
        return t !== null ? t : Dt.pooledCache
    }

    function wu(t, l) {
        l === null ? o(je, je.current) : o(je, l.pool)
    }

    function ds() {
        var t = Di();
        return t === null ? null : {
            parent: Gt._currentValue,
            pool: t
        }
    }
    var Xa = Error(x(460)),
        ys = Error(x(474)),
        Lu = Error(x(542)),
        Ai = {
            then: function() {}
        };

    function hs(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function Ku() {}

    function vs(t, l, e) {
        switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Ku, Ku), l = e), l.status) {
            case "fulfilled":
                return l.value;
            case "rejected":
                throw t = l.reason, ms(t), t;
            default:
                if (typeof l.status == "string") l.then(Ku, Ku);
                else {
                    if (t = Dt, t !== null && 100 < t.shellSuspendCounter) throw Error(x(482));
                    t = l, t.status = "pending", t.then(function(a) {
                        if (l.status === "pending") {
                            var u = l;
                            u.status = "fulfilled", u.value = a
                        }
                    }, function(a) {
                        if (l.status === "pending") {
                            var u = l;
                            u.status = "rejected", u.reason = a
                        }
                    })
                }
                switch (l.status) {
                    case "fulfilled":
                        return l.value;
                    case "rejected":
                        throw t = l.reason, ms(t), t
                }
                throw Qa = l, Xa
        }
    }
    var Qa = null;

    function gs() {
        if (Qa === null) throw Error(x(459));
        var t = Qa;
        return Qa = null, t
    }

    function ms(t) {
        if (t === Xa || t === Lu) throw Error(x(483))
    }
    var Il = !1;

    function Oi(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
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

    function Ri(t, l) {
        t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function Pl(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function te(t, l, e) {
        var a = t.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (mt & 2) !== 0) {
            var u = a.pending;
            return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = Bu(t), as(t, null, e), l
        }
        return qu(t, a, l, e), Bu(t)
    }

    function wa(t, l, e) {
        if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
            var a = l.lanes;
            a &= t.pendingLanes, e |= a, l.lanes = e, of (t, e)
        }
    }

    function Mi(t, l) {
        var e = t.updateQueue,
            a = t.alternate;
        if (a !== null && (a = a.updateQueue, e === a)) {
            var u = null,
                n = null;
            if (e = e.firstBaseUpdate, e !== null) {
                do {
                    var i = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = i : n = n.next = i, e = e.next
                } while (e !== null);
                n === null ? u = n = l : n = n.next = l
            } else u = n = l;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: a.shared,
                callbacks: a.callbacks
            }, t.updateQueue = e;
            return
        }
        t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l
    }
    var ji = !1;

    function La() {
        if (ji) {
            var t = ea;
            if (t !== null) throw t
        }
    }

    function Ka(t, l, e, a) {
        ji = !1;
        var u = t.updateQueue;
        Il = !1;
        var n = u.firstBaseUpdate,
            i = u.lastBaseUpdate,
            c = u.shared.pending;
        if (c !== null) {
            u.shared.pending = null;
            var f = c,
                m = f.next;
            f.next = null, i === null ? n = m : i.next = m, i = f;
            var _ = t.alternate;
            _ !== null && (_ = _.updateQueue, c = _.lastBaseUpdate, c !== i && (c === null ? _.firstBaseUpdate = m : c.next = m, _.lastBaseUpdate = f))
        }
        if (n !== null) {
            var A = u.baseState;
            i = 0, _ = m = f = null, c = n;
            do {
                var S = c.lane & -536870913,
                    p = S !== c.lane;
                if (p ? (nt & S) === S : (a & S) === S) {
                    S !== 0 && S === la && (ji = !0), _ !== null && (_ = _.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var Q = t,
                            Z = c;S = l;
                        var xt = e;
                        switch (Z.tag) {
                            case 1:
                                if (Q = Z.payload, typeof Q == "function") {
                                    A = Q.call(xt, A, S);
                                    break t
                                }
                                A = Q;
                                break t;
                            case 3:
                                Q.flags = Q.flags & -65537 | 128;
                            case 0:
                                if (Q = Z.payload, S = typeof Q == "function" ? Q.call(xt, A, S) : Q, S == null) break t;
                                A = V({}, A, S);
                                break t;
                            case 2:
                                Il = !0
                        }
                    }
                    S = c.callback, S !== null && (t.flags |= 64, p && (t.flags |= 8192), p = u.callbacks, p === null ? u.callbacks = [S] : p.push(S))
                } else p = {
                    lane: S,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                }, _ === null ? (m = _ = p, f = A) : _ = _.next = p, i |= S;
                if (c = c.next, c === null) {
                    if (c = u.shared.pending, c === null) break;
                    p = c, c = p.next, p.next = null, u.lastBaseUpdate = p, u.shared.pending = null
                }
            } while (!0);
            _ === null && (f = A), u.baseState = f, u.firstBaseUpdate = m, u.lastBaseUpdate = _, n === null && (u.shared.lanes = 0), fe |= i, t.lanes = i, t.memoizedState = A
        }
    }

    function Ss(t, l) {
        if (typeof t != "function") throw Error(x(191, t));
        t.call(l)
    }

    function bs(t, l) {
        var e = t.callbacks;
        if (e !== null)
            for (t.callbacks = null, t = 0; t < e.length; t++) Ss(e[t], l)
    }
    var aa = v(null),
        Ju = v(0);

    function ps(t, l) {
        t = Kl, o(Ju, t), o(aa, l), Kl = t | l.baseLanes
    }

    function Ui() {
        o(Ju, Kl), o(aa, aa.current)
    }

    function Ni() {
        Kl = Ju.current, d(aa), d(Ju)
    }
    var le = 0,
        F = null,
        bt = null,
        qt = null,
        ku = !1,
        ua = !1,
        Ue = !1,
        Wu = 0,
        Ja = 0,
        na = null,
        p0 = 0;

    function Ht() {
        throw Error(x(321))
    }

    function Hi(t, l) {
        if (l === null) return !1;
        for (var e = 0; e < l.length && e < t.length; e++)
            if (!fl(t[e], l[e])) return !1;
        return !0
    }

    function Ci(t, l, e, a, u, n) {
        return le = n, F = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, T.H = t === null || t.memoizedState === null ? ao : uo, Ue = !1, n = e(a, u), Ue = !1, ua && (n = Ts(l, e, a, u)), xs(t), n
    }

    function xs(t) {
        T.H = ln;
        var l = bt !== null && bt.next !== null;
        if (le = 0, qt = bt = F = null, ku = !1, Ja = 0, na = null, l) throw Error(x(300));
        t === null || Lt || (t = t.dependencies, t !== null && Xu(t) && (Lt = !0))
    }

    function Ts(t, l, e, a) {
        F = t;
        var u = 0;
        do {
            if (ua && (na = null), Ja = 0, ua = !1, 25 <= u) throw Error(x(301));
            if (u += 1, qt = bt = null, t.updateQueue != null) {
                var n = t.updateQueue;
                n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0)
            }
            T.H = A0, n = l(e, a)
        } while (ua);
        return n
    }

    function x0() {
        var t = T.H,
            l = t.useState()[0];
        return l = typeof l.then == "function" ? ka(l) : l, t = t.useState()[0], (bt !== null ? bt.memoizedState : null) !== t && (F.flags |= 1024), l
    }

    function Vi() {
        var t = Wu !== 0;
        return Wu = 0, t
    }

    function qi(t, l, e) {
        l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e
    }

    function Bi(t) {
        if (ku) {
            for (t = t.memoizedState; t !== null;) {
                var l = t.queue;
                l !== null && (l.pending = null), t = t.next
            }
            ku = !1
        }
        le = 0, qt = bt = F = null, ua = !1, Ja = Wu = 0, na = null
    }

    function al() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return qt === null ? F.memoizedState = qt = t : qt = qt.next = t, qt
    }

    function Bt() {
        if (bt === null) {
            var t = F.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = bt.next;
        var l = qt === null ? F.memoizedState : qt.next;
        if (l !== null) qt = l, bt = t;
        else {
            if (t === null) throw F.alternate === null ? Error(x(467)) : Error(x(310));
            bt = t, t = {
                memoizedState: bt.memoizedState,
                baseState: bt.baseState,
                baseQueue: bt.baseQueue,
                queue: bt.queue,
                next: null
            }, qt === null ? F.memoizedState = qt = t : qt = qt.next = t
        }
        return qt
    }

    function Yi() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function ka(t) {
        var l = Ja;
        return Ja += 1, na === null && (na = []), t = vs(na, t, l), l = F, (qt === null ? l.memoizedState : qt.next) === null && (l = l.alternate, T.H = l === null || l.memoizedState === null ? ao : uo), t
    }

    function $u(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return ka(t);
            if (t.$$typeof === yt) return It(t)
        }
        throw Error(x(438, String(t)))
    }

    function Gi(t) {
        var l = null,
            e = F.updateQueue;
        if (e !== null && (l = e.memoCache), l == null) {
            var a = F.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (l == null && (l = {
                data: [],
                index: 0
            }), e === null && (e = Yi(), F.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
            for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = gt;
        return l.index++, e
    }

    function Gl(t, l) {
        return typeof l == "function" ? l(t) : l
    }

    function Fu(t) {
        var l = Bt();
        return Zi(l, bt, t)
    }

    function Zi(t, l, e) {
        var a = t.queue;
        if (a === null) throw Error(x(311));
        a.lastRenderedReducer = e;
        var u = t.baseQueue,
            n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var i = u.next;
                u.next = n.next, n.next = i
            }
            l.baseQueue = u = n, a.pending = null
        }
        if (n = t.baseState, u === null) t.memoizedState = n;
        else {
            l = u.next;
            var c = i = null,
                f = null,
                m = l,
                _ = !1;
            do {
                var A = m.lane & -536870913;
                if (A !== m.lane ? (nt & A) === A : (le & A) === A) {
                    var S = m.revertLane;
                    if (S === 0) f !== null && (f = f.next = {
                        lane: 0,
                        revertLane: 0,
                        action: m.action,
                        hasEagerState: m.hasEagerState,
                        eagerState: m.eagerState,
                        next: null
                    }), A === la && (_ = !0);
                    else if ((le & S) === S) {
                        m = m.next, S === la && (_ = !0);
                        continue
                    } else A = {
                        lane: 0,
                        revertLane: m.revertLane,
                        action: m.action,
                        hasEagerState: m.hasEagerState,
                        eagerState: m.eagerState,
                        next: null
                    }, f === null ? (c = f = A, i = n) : f = f.next = A, F.lanes |= S, fe |= S;
                    A = m.action, Ue && e(n, A), n = m.hasEagerState ? m.eagerState : e(n, A)
                } else S = {
                    lane: A,
                    revertLane: m.revertLane,
                    action: m.action,
                    hasEagerState: m.hasEagerState,
                    eagerState: m.eagerState,
                    next: null
                }, f === null ? (c = f = S, i = n) : f = f.next = S, F.lanes |= A, fe |= A;
                m = m.next
            } while (m !== null && m !== l);
            if (f === null ? i = n : f.next = c, !fl(n, t.memoizedState) && (Lt = !0, _ && (e = ea, e !== null))) throw e;
            t.memoizedState = n, t.baseState = i, t.baseQueue = f, a.lastRenderedState = n
        }
        return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
    }

    function Xi(t) {
        var l = Bt(),
            e = l.queue;
        if (e === null) throw Error(x(311));
        e.lastRenderedReducer = t;
        var a = e.dispatch,
            u = e.pending,
            n = l.memoizedState;
        if (u !== null) {
            e.pending = null;
            var i = u = u.next;
            do n = t(n, i.action), i = i.next; while (i !== u);
            fl(n, l.memoizedState) || (Lt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n
        }
        return [n, a]
    }

    function _s(t, l, e) {
        var a = F,
            u = Bt(),
            n = dt;
        if (n) {
            if (e === void 0) throw Error(x(407));
            e = e()
        } else e = l();
        var i = !fl((bt || u).memoizedState, e);
        i && (u.memoizedState = e, Lt = !0), u = u.queue;
        var c = Ds.bind(null, a, u, t);
        if (Wa(2048, 8, c, [t]), u.getSnapshot !== l || i || qt !== null && qt.memoizedState.tag & 1) {
            if (a.flags |= 2048, ia(9, Iu(), zs.bind(null, a, u, e, l), null), Dt === null) throw Error(x(349));
            n || (le & 124) !== 0 || Es(a, l, e)
        }
        return e
    }

    function Es(t, l, e) {
        t.flags |= 16384, t = {
            getSnapshot: l,
            value: e
        }, l = F.updateQueue, l === null ? (l = Yi(), F.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t))
    }

    function zs(t, l, e, a) {
        l.value = e, l.getSnapshot = a, As(l) && Os(t)
    }

    function Ds(t, l, e) {
        return e(function() {
            As(l) && Os(t)
        })
    }

    function As(t) {
        var l = t.getSnapshot;
        t = t.value;
        try {
            var e = l();
            return !fl(t, e)
        } catch {
            return !0
        }
    }

    function Os(t) {
        var l = Fe(t, 2);
        l !== null && hl(l, t, 2)
    }

    function Qi(t) {
        var l = al();
        if (typeof t == "function") {
            var e = t;
            if (t = e(), Ue) {
                kl(!0);
                try {
                    e()
                } finally {
                    kl(!1)
                }
            }
        }
        return l.memoizedState = l.baseState = t, l.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Gl,
            lastRenderedState: t
        }, l
    }

    function Rs(t, l, e, a) {
        return t.baseState = e, Zi(t, bt, typeof a == "function" ? a : Gl)
    }

    function T0(t, l, e, a, u) {
        if (tn(t)) throw Error(x(485));
        if (t = l.action, t !== null) {
            var n = {
                payload: u,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    n.listeners.push(i)
                }
            };
            T.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, Ms(l, n)) : (n.next = e.next, l.pending = e.next = n)
        }
    }

    function Ms(t, l) {
        var e = l.action,
            a = l.payload,
            u = t.state;
        if (l.isTransition) {
            var n = T.T,
                i = {};
            T.T = i;
            try {
                var c = e(u, a),
                    f = T.S;
                f !== null && f(i, c), js(t, l, c)
            } catch (m) {
                wi(t, l, m)
            } finally {
                T.T = n
            }
        } else try {
            n = e(u, a), js(t, l, n)
        } catch (m) {
            wi(t, l, m)
        }
    }

    function js(t, l, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            Us(t, l, a)
        }, function(a) {
            return wi(t, l, a)
        }) : Us(t, l, e)
    }

    function Us(t, l, e) {
        l.status = "fulfilled", l.value = e, Ns(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Ms(t, e)))
    }

    function wi(t, l, e) {
        var a = t.pending;
        if (t.pending = null, a !== null) {
            a = a.next;
            do l.status = "rejected", l.reason = e, Ns(l), l = l.next; while (l !== a)
        }
        t.action = null
    }

    function Ns(t) {
        t = t.listeners;
        for (var l = 0; l < t.length; l++)(0, t[l])()
    }

    function Hs(t, l) {
        return l
    }

    function Cs(t, l) {
        if (dt) {
            var e = Dt.formState;
            if (e !== null) {
                t: {
                    var a = F;
                    if (dt) {
                        if (Ut) {
                            l: {
                                for (var u = Ut, n = Ol; u.nodeType !== 8;) {
                                    if (!n) {
                                        u = null;
                                        break l
                                    }
                                    if (u = Dl(u.nextSibling), u === null) {
                                        u = null;
                                        break l
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                Ut = Dl(u.nextSibling), a = u.data === "F!";
                                break t
                            }
                        }
                        Oe(a)
                    }
                    a = !1
                }
                a && (l = e[0])
            }
        }
        return e = al(), e.memoizedState = e.baseState = l, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Hs,
            lastRenderedState: l
        }, e.queue = a, e = to.bind(null, F, a), a.dispatch = e, a = Qi(!1), n = Wi.bind(null, F, !1, a.queue), a = al(), u = {
            state: l,
            dispatch: null,
            action: t,
            pending: null
        }, a.queue = u, e = T0.bind(null, F, u, n, e), u.dispatch = e, a.memoizedState = t, [l, e, !1]
    }

    function Vs(t) {
        var l = Bt();
        return qs(l, bt, t)
    }

    function qs(t, l, e) {
        if (l = Zi(t, l, Hs)[0], t = Fu(Gl)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
            var a = ka(l)
        } catch (i) {
            throw i === Xa ? Lu : i
        } else a = l;
        l = Bt();
        var u = l.queue,
            n = u.dispatch;
        return e !== l.memoizedState && (F.flags |= 2048, ia(9, Iu(), _0.bind(null, u, e), null)), [a, n, t]
    }

    function _0(t, l) {
        t.action = l
    }

    function Bs(t) {
        var l = Bt(),
            e = bt;
        if (e !== null) return qs(l, e, t);
        Bt(), l = l.memoizedState, e = Bt();
        var a = e.queue.dispatch;
        return e.memoizedState = t, [l, a, !1]
    }

    function ia(t, l, e, a) {
        return t = {
            tag: t,
            create: e,
            deps: a,
            inst: l,
            next: null
        }, l = F.updateQueue, l === null && (l = Yi(), F.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t
    }

    function Iu() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function Ys() {
        return Bt().memoizedState
    }

    function Pu(t, l, e, a) {
        var u = al();
        a = a === void 0 ? null : a, F.flags |= t, u.memoizedState = ia(1 | l, Iu(), e, a)
    }

    function Wa(t, l, e, a) {
        var u = Bt();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        bt !== null && a !== null && Hi(a, bt.memoizedState.deps) ? u.memoizedState = ia(l, n, e, a) : (F.flags |= t, u.memoizedState = ia(1 | l, n, e, a))
    }

    function Gs(t, l) {
        Pu(8390656, 8, t, l)
    }

    function Zs(t, l) {
        Wa(2048, 8, t, l)
    }

    function Xs(t, l) {
        return Wa(4, 2, t, l)
    }

    function Qs(t, l) {
        return Wa(4, 4, t, l)
    }

    function ws(t, l) {
        if (typeof l == "function") {
            t = t();
            var e = l(t);
            return function() {
                typeof e == "function" ? e() : l(null)
            }
        }
        if (l != null) return t = t(), l.current = t,
            function() {
                l.current = null
            }
    }

    function Ls(t, l, e) {
        e = e != null ? e.concat([t]) : null, Wa(4, 4, ws.bind(null, l, t), e)
    }

    function Li() {}

    function Ks(t, l) {
        var e = Bt();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        return l !== null && Hi(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t)
    }

    function Js(t, l) {
        var e = Bt();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        if (l !== null && Hi(l, a[1])) return a[0];
        if (a = t(), Ue) {
            kl(!0);
            try {
                t()
            } finally {
                kl(!1)
            }
        }
        return e.memoizedState = [a, l], a
    }

    function Ki(t, l, e) {
        return e === void 0 || (le & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Fo(), F.lanes |= t, fe |= t, e)
    }

    function ks(t, l, e, a) {
        return fl(e, l) ? e : aa.current !== null ? (t = Ki(t, e, a), fl(t, l) || (Lt = !0), t) : (le & 42) === 0 ? (Lt = !0, t.memoizedState = e) : (t = Fo(), F.lanes |= t, fe |= t, l)
    }

    function Ws(t, l, e, a, u) {
        var n = M.p;
        M.p = n !== 0 && 8 > n ? n : 8;
        var i = T.T,
            c = {};
        T.T = c, Wi(t, !1, l, e);
        try {
            var f = u(),
                m = T.S;
            if (m !== null && m(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
                var _ = b0(f, a);
                $a(t, l, _, yl(t))
            } else $a(t, l, a, yl(t))
        } catch (A) {
            $a(t, l, {
                then: function() {},
                status: "rejected",
                reason: A
            }, yl())
        } finally {
            M.p = n, T.T = i
        }
    }

    function E0() {}

    function Ji(t, l, e, a) {
        if (t.tag !== 5) throw Error(x(476));
        var u = $s(t).queue;
        Ws(t, u, l, O, e === null ? E0 : function() {
            return Fs(t), e(a)
        })
    }

    function $s(t) {
        var l = t.memoizedState;
        if (l !== null) return l;
        l = {
            memoizedState: O,
            baseState: O,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Gl,
                lastRenderedState: O
            },
            next: null
        };
        var e = {};
        return l.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Gl,
                lastRenderedState: e
            },
            next: null
        }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l
    }

    function Fs(t) {
        var l = $s(t).next.queue;
        $a(t, l, {}, yl())
    }

    function ki() {
        return It(hu)
    }

    function Is() {
        return Bt().memoizedState
    }

    function Ps() {
        return Bt().memoizedState
    }

    function z0(t) {
        for (var l = t.return; l !== null;) {
            switch (l.tag) {
                case 24:
                case 3:
                    var e = yl();
                    t = Pl(e);
                    var a = te(l, t, e);
                    a !== null && (hl(a, l, e), wa(a, l, e)), l = {
                        cache: Ei()
                    }, t.payload = l;
                    return
            }
            l = l.return
        }
    }

    function D0(t, l, e) {
        var a = yl();
        e = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, tn(t) ? lo(l, e) : (e = hi(t, l, e, a), e !== null && (hl(e, t, a), eo(e, l, a)))
    }

    function to(t, l, e) {
        var a = yl();
        $a(t, l, e, a)
    }

    function $a(t, l, e, a) {
        var u = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (tn(t)) lo(l, u);
        else {
            var n = t.alternate;
            if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null)) try {
                var i = l.lastRenderedState,
                    c = n(i, e);
                if (u.hasEagerState = !0, u.eagerState = c, fl(c, i)) return qu(t, l, u, 0), Dt === null && Vu(), !1
            } catch {} finally {}
            if (e = hi(t, l, u, a), e !== null) return hl(e, t, a), eo(e, l, a), !0
        }
        return !1
    }

    function Wi(t, l, e, a) {
        if (a = {
                lane: 2,
                revertLane: Ac(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, tn(t)) {
            if (l) throw Error(x(479))
        } else l = hi(t, e, a, 2), l !== null && hl(l, t, 2)
    }

    function tn(t) {
        var l = t.alternate;
        return t === F || l !== null && l === F
    }

    function lo(t, l) {
        ua = ku = !0;
        var e = t.pending;
        e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l
    }

    function eo(t, l, e) {
        if ((e & 4194048) !== 0) {
            var a = l.lanes;
            a &= t.pendingLanes, e |= a, l.lanes = e, of (t, e)
        }
    }
    var ln = {
            readContext: It,
            use: $u,
            useCallback: Ht,
            useContext: Ht,
            useEffect: Ht,
            useImperativeHandle: Ht,
            useLayoutEffect: Ht,
            useInsertionEffect: Ht,
            useMemo: Ht,
            useReducer: Ht,
            useRef: Ht,
            useState: Ht,
            useDebugValue: Ht,
            useDeferredValue: Ht,
            useTransition: Ht,
            useSyncExternalStore: Ht,
            useId: Ht,
            useHostTransitionStatus: Ht,
            useFormState: Ht,
            useActionState: Ht,
            useOptimistic: Ht,
            useMemoCache: Ht,
            useCacheRefresh: Ht
        },
        ao = {
            readContext: It,
            use: $u,
            useCallback: function(t, l) {
                return al().memoizedState = [t, l === void 0 ? null : l], t
            },
            useContext: It,
            useEffect: Gs,
            useImperativeHandle: function(t, l, e) {
                e = e != null ? e.concat([t]) : null, Pu(4194308, 4, ws.bind(null, l, t), e)
            },
            useLayoutEffect: function(t, l) {
                return Pu(4194308, 4, t, l)
            },
            useInsertionEffect: function(t, l) {
                Pu(4, 2, t, l)
            },
            useMemo: function(t, l) {
                var e = al();
                l = l === void 0 ? null : l;
                var a = t();
                if (Ue) {
                    kl(!0);
                    try {
                        t()
                    } finally {
                        kl(!1)
                    }
                }
                return e.memoizedState = [a, l], a
            },
            useReducer: function(t, l, e) {
                var a = al();
                if (e !== void 0) {
                    var u = e(l);
                    if (Ue) {
                        kl(!0);
                        try {
                            e(l)
                        } finally {
                            kl(!1)
                        }
                    }
                } else u = l;
                return a.memoizedState = a.baseState = u, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: u
                }, a.queue = t, t = t.dispatch = D0.bind(null, F, t), [a.memoizedState, t]
            },
            useRef: function(t) {
                var l = al();
                return t = {
                    current: t
                }, l.memoizedState = t
            },
            useState: function(t) {
                t = Qi(t);
                var l = t.queue,
                    e = to.bind(null, F, l);
                return l.dispatch = e, [t.memoizedState, e]
            },
            useDebugValue: Li,
            useDeferredValue: function(t, l) {
                var e = al();
                return Ki(e, t, l)
            },
            useTransition: function() {
                var t = Qi(!1);
                return t = Ws.bind(null, F, t.queue, !0, !1), al().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, l, e) {
                var a = F,
                    u = al();
                if (dt) {
                    if (e === void 0) throw Error(x(407));
                    e = e()
                } else {
                    if (e = l(), Dt === null) throw Error(x(349));
                    (nt & 124) !== 0 || Es(a, l, e)
                }
                u.memoizedState = e;
                var n = {
                    value: e,
                    getSnapshot: l
                };
                return u.queue = n, Gs(Ds.bind(null, a, n, t), [t]), a.flags |= 2048, ia(9, Iu(), zs.bind(null, a, n, e, l), null), e
            },
            useId: function() {
                var t = al(),
                    l = Dt.identifierPrefix;
                if (dt) {
                    var e = ql,
                        a = Vl;
                    e = (a & ~(1 << 32 - cl(a) - 1)).toString(32) + e, l = "«" + l + "R" + e, e = Wu++, 0 < e && (l += "H" + e.toString(32)), l += "»"
                } else e = p0++, l = "«" + l + "r" + e.toString(32) + "»";
                return t.memoizedState = l
            },
            useHostTransitionStatus: ki,
            useFormState: Cs,
            useActionState: Cs,
            useOptimistic: function(t) {
                var l = al();
                l.memoizedState = l.baseState = t;
                var e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return l.queue = e, l = Wi.bind(null, F, !0, e), e.dispatch = l, [t, l]
            },
            useMemoCache: Gi,
            useCacheRefresh: function() {
                return al().memoizedState = z0.bind(null, F)
            }
        },
        uo = {
            readContext: It,
            use: $u,
            useCallback: Ks,
            useContext: It,
            useEffect: Zs,
            useImperativeHandle: Ls,
            useInsertionEffect: Xs,
            useLayoutEffect: Qs,
            useMemo: Js,
            useReducer: Fu,
            useRef: Ys,
            useState: function() {
                return Fu(Gl)
            },
            useDebugValue: Li,
            useDeferredValue: function(t, l) {
                var e = Bt();
                return ks(e, bt.memoizedState, t, l)
            },
            useTransition: function() {
                var t = Fu(Gl)[0],
                    l = Bt().memoizedState;
                return [typeof t == "boolean" ? t : ka(t), l]
            },
            useSyncExternalStore: _s,
            useId: Is,
            useHostTransitionStatus: ki,
            useFormState: Vs,
            useActionState: Vs,
            useOptimistic: function(t, l) {
                var e = Bt();
                return Rs(e, bt, t, l)
            },
            useMemoCache: Gi,
            useCacheRefresh: Ps
        },
        A0 = {
            readContext: It,
            use: $u,
            useCallback: Ks,
            useContext: It,
            useEffect: Zs,
            useImperativeHandle: Ls,
            useInsertionEffect: Xs,
            useLayoutEffect: Qs,
            useMemo: Js,
            useReducer: Xi,
            useRef: Ys,
            useState: function() {
                return Xi(Gl)
            },
            useDebugValue: Li,
            useDeferredValue: function(t, l) {
                var e = Bt();
                return bt === null ? Ki(e, t, l) : ks(e, bt.memoizedState, t, l)
            },
            useTransition: function() {
                var t = Xi(Gl)[0],
                    l = Bt().memoizedState;
                return [typeof t == "boolean" ? t : ka(t), l]
            },
            useSyncExternalStore: _s,
            useId: Is,
            useHostTransitionStatus: ki,
            useFormState: Bs,
            useActionState: Bs,
            useOptimistic: function(t, l) {
                var e = Bt();
                return bt !== null ? Rs(e, bt, t, l) : (e.baseState = t, [t, e.queue.dispatch])
            },
            useMemoCache: Gi,
            useCacheRefresh: Ps
        },
        ca = null,
        Fa = 0;

    function en(t) {
        var l = Fa;
        return Fa += 1, ca === null && (ca = []), vs(ca, t, l)
    }

    function Ia(t, l) {
        l = l.props.ref, t.ref = l !== void 0 ? l : null
    }

    function an(t, l) {
        throw l.$$typeof === tt ? Error(x(525)) : (t = Object.prototype.toString.call(l), Error(x(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)))
    }

    function no(t) {
        var l = t._init;
        return l(t._payload)
    }

    function io(t) {
        function l(h, r) {
            if (t) {
                var g = h.deletions;
                g === null ? (h.deletions = [r], h.flags |= 16) : g.push(r)
            }
        }

        function e(h, r) {
            if (!t) return null;
            for (; r !== null;) l(h, r), r = r.sibling;
            return null
        }

        function a(h) {
            for (var r = new Map; h !== null;) h.key !== null ? r.set(h.key, h) : r.set(h.index, h), h = h.sibling;
            return r
        }

        function u(h, r) {
            return h = Cl(h, r), h.index = 0, h.sibling = null, h
        }

        function n(h, r, g) {
            return h.index = g, t ? (g = h.alternate, g !== null ? (g = g.index, g < r ? (h.flags |= 67108866, r) : g) : (h.flags |= 67108866, r)) : (h.flags |= 1048576, r)
        }

        function i(h) {
            return t && h.alternate === null && (h.flags |= 67108866), h
        }

        function c(h, r, g, D) {
            return r === null || r.tag !== 6 ? (r = gi(g, h.mode, D), r.return = h, r) : (r = u(r, g), r.return = h, r)
        }

        function f(h, r, g, D) {
            var q = g.type;
            return q === $ ? _(h, r, g.props.children, D, g.key) : r !== null && (r.elementType === q || typeof q == "object" && q !== null && q.$$typeof === k && no(q) === r.type) ? (r = u(r, g.props), Ia(r, g), r.return = h, r) : (r = Yu(g.type, g.key, g.props, null, h.mode, D), Ia(r, g), r.return = h, r)
        }

        function m(h, r, g, D) {
            return r === null || r.tag !== 4 || r.stateNode.containerInfo !== g.containerInfo || r.stateNode.implementation !== g.implementation ? (r = mi(g, h.mode, D), r.return = h, r) : (r = u(r, g.children || []), r.return = h, r)
        }

        function _(h, r, g, D, q) {
            return r === null || r.tag !== 7 ? (r = Ee(g, h.mode, D, q), r.return = h, r) : (r = u(r, g), r.return = h, r)
        }

        function A(h, r, g) {
            if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return r = gi("" + r, h.mode, g), r.return = h, r;
            if (typeof r == "object" && r !== null) {
                switch (r.$$typeof) {
                    case w:
                        return g = Yu(r.type, r.key, r.props, null, h.mode, g), Ia(g, r), g.return = h, g;
                    case Rt:
                        return r = mi(r, h.mode, g), r.return = h, r;
                    case k:
                        var D = r._init;
                        return r = D(r._payload), A(h, r, g)
                }
                if (st(r) || ut(r)) return r = Ee(r, h.mode, g, null), r.return = h, r;
                if (typeof r.then == "function") return A(h, en(r), g);
                if (r.$$typeof === yt) return A(h, Qu(h, r), g);
                an(h, r)
            }
            return null
        }

        function S(h, r, g, D) {
            var q = r !== null ? r.key : null;
            if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return q !== null ? null : c(h, r, "" + g, D);
            if (typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                    case w:
                        return g.key === q ? f(h, r, g, D) : null;
                    case Rt:
                        return g.key === q ? m(h, r, g, D) : null;
                    case k:
                        return q = g._init, g = q(g._payload), S(h, r, g, D)
                }
                if (st(g) || ut(g)) return q !== null ? null : _(h, r, g, D, null);
                if (typeof g.then == "function") return S(h, r, en(g), D);
                if (g.$$typeof === yt) return S(h, r, Qu(h, g), D);
                an(h, g)
            }
            return null
        }

        function p(h, r, g, D, q) {
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return h = h.get(g) || null, c(r, h, "" + D, q);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                    case w:
                        return h = h.get(D.key === null ? g : D.key) || null, f(r, h, D, q);
                    case Rt:
                        return h = h.get(D.key === null ? g : D.key) || null, m(r, h, D, q);
                    case k:
                        var lt = D._init;
                        return D = lt(D._payload), p(h, r, g, D, q)
                }
                if (st(D) || ut(D)) return h = h.get(g) || null, _(r, h, D, q, null);
                if (typeof D.then == "function") return p(h, r, g, en(D), q);
                if (D.$$typeof === yt) return p(h, r, g, Qu(r, D), q);
                an(r, D)
            }
            return null
        }

        function Q(h, r, g, D) {
            for (var q = null, lt = null, G = r, X = r = 0, Jt = null; G !== null && X < g.length; X++) {
                G.index > X ? (Jt = G, G = null) : Jt = G.sibling;
                var rt = S(h, G, g[X], D);
                if (rt === null) {
                    G === null && (G = Jt);
                    break
                }
                t && G && rt.alternate === null && l(h, G), r = n(rt, r, X), lt === null ? q = rt : lt.sibling = rt, lt = rt, G = Jt
            }
            if (X === g.length) return e(h, G), dt && De(h, X), q;
            if (G === null) {
                for (; X < g.length; X++) G = A(h, g[X], D), G !== null && (r = n(G, r, X), lt === null ? q = G : lt.sibling = G, lt = G);
                return dt && De(h, X), q
            }
            for (G = a(G); X < g.length; X++) Jt = p(G, h, X, g[X], D), Jt !== null && (t && Jt.alternate !== null && G.delete(Jt.key === null ? X : Jt.key), r = n(Jt, r, X), lt === null ? q = Jt : lt.sibling = Jt, lt = Jt);
            return t && G.forEach(function(me) {
                return l(h, me)
            }), dt && De(h, X), q
        }

        function Z(h, r, g, D) {
            if (g == null) throw Error(x(151));
            for (var q = null, lt = null, G = r, X = r = 0, Jt = null, rt = g.next(); G !== null && !rt.done; X++, rt = g.next()) {
                G.index > X ? (Jt = G, G = null) : Jt = G.sibling;
                var me = S(h, G, rt.value, D);
                if (me === null) {
                    G === null && (G = Jt);
                    break
                }
                t && G && me.alternate === null && l(h, G), r = n(me, r, X), lt === null ? q = me : lt.sibling = me, lt = me, G = Jt
            }
            if (rt.done) return e(h, G), dt && De(h, X), q;
            if (G === null) {
                for (; !rt.done; X++, rt = g.next()) rt = A(h, rt.value, D), rt !== null && (r = n(rt, r, X), lt === null ? q = rt : lt.sibling = rt, lt = rt);
                return dt && De(h, X), q
            }
            for (G = a(G); !rt.done; X++, rt = g.next()) rt = p(G, h, X, rt.value, D), rt !== null && (t && rt.alternate !== null && G.delete(rt.key === null ? X : rt.key), r = n(rt, r, X), lt === null ? q = rt : lt.sibling = rt, lt = rt);
            return t && G.forEach(function(Oy) {
                return l(h, Oy)
            }), dt && De(h, X), q
        }

        function xt(h, r, g, D) {
            if (typeof g == "object" && g !== null && g.type === $ && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                    case w:
                        t: {
                            for (var q = g.key; r !== null;) {
                                if (r.key === q) {
                                    if (q = g.type, q === $) {
                                        if (r.tag === 7) {
                                            e(h, r.sibling), D = u(r, g.props.children), D.return = h, h = D;
                                            break t
                                        }
                                    } else if (r.elementType === q || typeof q == "object" && q !== null && q.$$typeof === k && no(q) === r.type) {
                                        e(h, r.sibling), D = u(r, g.props), Ia(D, g), D.return = h, h = D;
                                        break t
                                    }
                                    e(h, r);
                                    break
                                } else l(h, r);
                                r = r.sibling
                            }
                            g.type === $ ? (D = Ee(g.props.children, h.mode, D, g.key), D.return = h, h = D) : (D = Yu(g.type, g.key, g.props, null, h.mode, D), Ia(D, g), D.return = h, h = D)
                        }
                        return i(h);
                    case Rt:
                        t: {
                            for (q = g.key; r !== null;) {
                                if (r.key === q)
                                    if (r.tag === 4 && r.stateNode.containerInfo === g.containerInfo && r.stateNode.implementation === g.implementation) {
                                        e(h, r.sibling), D = u(r, g.children || []), D.return = h, h = D;
                                        break t
                                    } else {
                                        e(h, r);
                                        break
                                    }
                                else l(h, r);
                                r = r.sibling
                            }
                            D = mi(g, h.mode, D),
                            D.return = h,
                            h = D
                        }
                        return i(h);
                    case k:
                        return q = g._init, g = q(g._payload), xt(h, r, g, D)
                }
                if (st(g)) return Q(h, r, g, D);
                if (ut(g)) {
                    if (q = ut(g), typeof q != "function") throw Error(x(150));
                    return g = q.call(g), Z(h, r, g, D)
                }
                if (typeof g.then == "function") return xt(h, r, en(g), D);
                if (g.$$typeof === yt) return xt(h, r, Qu(h, g), D);
                an(h, g)
            }
            return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, r !== null && r.tag === 6 ? (e(h, r.sibling), D = u(r, g), D.return = h, h = D) : (e(h, r), D = gi(g, h.mode, D), D.return = h, h = D), i(h)) : e(h, r)
        }
        return function(h, r, g, D) {
            try {
                Fa = 0;
                var q = xt(h, r, g, D);
                return ca = null, q
            } catch (G) {
                if (G === Xa || G === Lu) throw G;
                var lt = sl(29, G, null, h.mode);
                return lt.lanes = D, lt.return = h, lt
            } finally {}
        }
    }
    var fa = io(!0),
        co = io(!1),
        xl = v(null),
        Rl = null;

    function ee(t) {
        var l = t.alternate;
        o(Zt, Zt.current & 1), o(xl, t), Rl === null && (l === null || aa.current !== null || l.memoizedState !== null) && (Rl = t)
    }

    function fo(t) {
        if (t.tag === 22) {
            if (o(Zt, Zt.current), o(xl, t), Rl === null) {
                var l = t.alternate;
                l !== null && l.memoizedState !== null && (Rl = t)
            }
        } else ae()
    }

    function ae() {
        o(Zt, Zt.current), o(xl, xl.current)
    }

    function Zl(t) {
        d(xl), Rl === t && (Rl = null), d(Zt)
    }
    var Zt = v(0);

    function un(t) {
        for (var l = t; l !== null;) {
            if (l.tag === 13) {
                var e = l.memoizedState;
                if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || Yc(e))) return l
            } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
                if ((l.flags & 128) !== 0) return l
            } else if (l.child !== null) {
                l.child.return = l, l = l.child;
                continue
            }
            if (l === t) break;
            for (; l.sibling === null;) {
                if (l.return === null || l.return === t) return null;
                l = l.return
            }
            l.sibling.return = l.return, l = l.sibling
        }
        return null
    }

    function $i(t, l, e, a) {
        l = t.memoizedState, e = e(a, l), e = e == null ? l : V({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e)
    }
    var Fi = {
        enqueueSetState: function(t, l, e) {
            t = t._reactInternals;
            var a = yl(),
                u = Pl(a);
            u.payload = l, e != null && (u.callback = e), l = te(t, u, a), l !== null && (hl(l, t, a), wa(l, t, a))
        },
        enqueueReplaceState: function(t, l, e) {
            t = t._reactInternals;
            var a = yl(),
                u = Pl(a);
            u.tag = 1, u.payload = l, e != null && (u.callback = e), l = te(t, u, a), l !== null && (hl(l, t, a), wa(l, t, a))
        },
        enqueueForceUpdate: function(t, l) {
            t = t._reactInternals;
            var e = yl(),
                a = Pl(e);
            a.tag = 2, l != null && (a.callback = l), l = te(t, a, e), l !== null && (hl(l, t, e), wa(l, t, e))
        }
    };

    function so(t, l, e, a, u, n, i) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, i) : l.prototype && l.prototype.isPureReactComponent ? !Ha(e, a) || !Ha(u, n) : !0
    }

    function oo(t, l, e, a) {
        t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && Fi.enqueueReplaceState(l, l.state, null)
    }

    function Ne(t, l) {
        var e = l;
        if ("ref" in l) {
            e = {};
            for (var a in l) a !== "ref" && (e[a] = l[a])
        }
        if (t = t.defaultProps) {
            e === l && (e = V({}, e));
            for (var u in t) e[u] === void 0 && (e[u] = t[u])
        }
        return e
    }
    var nn = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var l = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(l)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    };

    function ro(t) {
        nn(t)
    }

    function yo(t) {
        console.error(t)
    }

    function ho(t) {
        nn(t)
    }

    function cn(t, l) {
        try {
            var e = t.onUncaughtError;
            e(l.value, {
                componentStack: l.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function vo(t, l, e) {
        try {
            var a = t.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: l.tag === 1 ? l.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function Ii(t, l, e) {
        return e = Pl(e), e.tag = 3, e.payload = {
            element: null
        }, e.callback = function() {
            cn(t, l)
        }, e
    }

    function go(t) {
        return t = Pl(t), t.tag = 3, t
    }

    function mo(t, l, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = a.value;
            t.payload = function() {
                return u(n)
            }, t.callback = function() {
                vo(l, e, a)
            }
        }
        var i = e.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            vo(l, e, a), typeof u != "function" && (se === null ? se = new Set([this]) : se.add(this));
            var c = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: c !== null ? c : ""
            })
        })
    }

    function O0(t, l, e, a, u) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (l = e.alternate, l !== null && Ya(l, e, u, !0), e = xl.current, e !== null) {
                switch (e.tag) {
                    case 13:
                        return Rl === null ? Tc() : e.alternate === null && Nt === 0 && (Nt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Ai ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = new Set([a]) : l.add(a), Ec(t, a, u)), !1;
                    case 22:
                        return e.flags |= 65536, a === Ai ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a])
                        }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = new Set([a]) : e.add(a)), Ec(t, a, u)), !1
                }
                throw Error(x(435, e.tag))
            }
            return Ec(t, a, u), Tc(), !1
        }
        if (dt) return l = xl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== pi && (t = Error(x(422), {
            cause: a
        }), Ba(ml(t, e)))) : (a !== pi && (l = Error(x(423), {
            cause: a
        }), Ba(ml(l, e))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = ml(a, e), u = Ii(t.stateNode, a, u), Mi(t, u), Nt !== 4 && (Nt = 2)), !1;
        var n = Error(x(520), {
            cause: a
        });
        if (n = ml(n, e), nu === null ? nu = [n] : nu.push(n), Nt !== 4 && (Nt = 2), l === null) return !0;
        a = ml(a, e), e = l;
        do {
            switch (e.tag) {
                case 3:
                    return e.flags |= 65536, t = u & -u, e.lanes |= t, t = Ii(e.stateNode, a, t), Mi(e, t), !1;
                case 1:
                    if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (se === null || !se.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = go(u), mo(u, t, e, a), Mi(e, u), !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var So = Error(x(461)),
        Lt = !1;

    function kt(t, l, e, a) {
        l.child = t === null ? co(l, null, e, a) : fa(l, t.child, e, a)
    }

    function bo(t, l, e, a, u) {
        e = e.render;
        var n = l.ref;
        if ("ref" in a) {
            var i = {};
            for (var c in a) c !== "ref" && (i[c] = a[c])
        } else i = a;
        return Me(l), a = Ci(t, l, e, i, n, u), c = Vi(), t !== null && !Lt ? (qi(t, l, u), Xl(t, l, u)) : (dt && c && Si(l), l.flags |= 1, kt(t, l, a, u), l.child)
    }

    function po(t, l, e, a, u) {
        if (t === null) {
            var n = e.type;
            return typeof n == "function" && !vi(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, xo(t, l, n, a, u)) : (t = Yu(e.type, null, a, l, l.mode, u), t.ref = l.ref, t.return = l, l.child = t)
        }
        if (n = t.child, !ic(t, u)) {
            var i = n.memoizedProps;
            if (e = e.compare, e = e !== null ? e : Ha, e(i, a) && t.ref === l.ref) return Xl(t, l, u)
        }
        return l.flags |= 1, t = Cl(n, a), t.ref = l.ref, t.return = l, l.child = t
    }

    function xo(t, l, e, a, u) {
        if (t !== null) {
            var n = t.memoizedProps;
            if (Ha(n, a) && t.ref === l.ref)
                if (Lt = !1, l.pendingProps = a = n, ic(t, u))(t.flags & 131072) !== 0 && (Lt = !0);
                else return l.lanes = t.lanes, Xl(t, l, u)
        }
        return Pi(t, l, e, a, u)
    }

    function To(t, l, e) {
        var a = l.pendingProps,
            u = a.children,
            n = t !== null ? t.memoizedState : null;
        if (a.mode === "hidden") {
            if ((l.flags & 128) !== 0) {
                if (a = n !== null ? n.baseLanes | e : e, t !== null) {
                    for (u = l.child = t.child, n = 0; u !== null;) n = n | u.lanes | u.childLanes, u = u.sibling;
                    l.childLanes = n & ~a
                } else l.childLanes = 0, l.child = null;
                return _o(t, l, a, e)
            }
            if ((e & 536870912) !== 0) l.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && wu(l, n !== null ? n.cachePool : null), n !== null ? ps(l, n) : Ui(), fo(l);
            else return l.lanes = l.childLanes = 536870912, _o(t, l, n !== null ? n.baseLanes | e : e, e)
        } else n !== null ? (wu(l, n.cachePool), ps(l, n), ae(), l.memoizedState = null) : (t !== null && wu(l, null), Ui(), ae());
        return kt(t, l, u, e), l.child
    }

    function _o(t, l, e, a) {
        var u = Di();
        return u = u === null ? null : {
            parent: Gt._currentValue,
            pool: u
        }, l.memoizedState = {
            baseLanes: e,
            cachePool: u
        }, t !== null && wu(l, null), Ui(), fo(l), t !== null && Ya(t, l, a, !0), null
    }

    function fn(t, l) {
        var e = l.ref;
        if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object") throw Error(x(284));
            (t === null || t.ref !== e) && (l.flags |= 4194816)
        }
    }

    function Pi(t, l, e, a, u) {
        return Me(l), e = Ci(t, l, e, a, void 0, u), a = Vi(), t !== null && !Lt ? (qi(t, l, u), Xl(t, l, u)) : (dt && a && Si(l), l.flags |= 1, kt(t, l, e, u), l.child)
    }

    function Eo(t, l, e, a, u, n) {
        return Me(l), l.updateQueue = null, e = Ts(l, a, e, u), xs(t), a = Vi(), t !== null && !Lt ? (qi(t, l, n), Xl(t, l, n)) : (dt && a && Si(l), l.flags |= 1, kt(t, l, e, n), l.child)
    }

    function zo(t, l, e, a, u) {
        if (Me(l), l.stateNode === null) {
            var n = Ie,
                i = e.contextType;
            typeof i == "object" && i !== null && (n = It(i)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Fi, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Oi(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? It(i) : Ie, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && ($i(l, e, i, a), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && Fi.enqueueReplaceState(n, n.state, null), Ka(l, a, n, u), La(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0
        } else if (t === null) {
            n = l.stateNode;
            var c = l.memoizedProps,
                f = Ne(e, c);
            n.props = f;
            var m = n.context,
                _ = e.contextType;
            i = Ie, typeof _ == "object" && _ !== null && (i = It(_));
            var A = e.getDerivedStateFromProps;
            _ = typeof A == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, _ || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== i) && oo(l, n, a, i), Il = !1;
            var S = l.memoizedState;
            n.state = S, Ka(l, a, n, u), La(), m = l.memoizedState, c || S !== m || Il ? (typeof A == "function" && ($i(l, e, A, a), m = l.memoizedState), (f = Il || so(l, e, f, a, S, m, i)) ? (_ || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = m), n.props = a, n.state = m, n.context = i, a = f) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1)
        } else {
            n = l.stateNode, Ri(t, l), i = l.memoizedProps, _ = Ne(e, i), n.props = _, A = l.pendingProps, S = n.context, m = e.contextType, f = Ie, typeof m == "object" && m !== null && (f = It(m)), c = e.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== A || S !== f) && oo(l, n, a, f), Il = !1, S = l.memoizedState, n.state = S, Ka(l, a, n, u), La();
            var p = l.memoizedState;
            i !== A || S !== p || Il || t !== null && t.dependencies !== null && Xu(t.dependencies) ? (typeof c == "function" && ($i(l, e, c, a), p = l.memoizedState), (_ = Il || so(l, e, _, a, S, p, f) || t !== null && t.dependencies !== null && Xu(t.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, p, f)), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = p), n.props = a, n.state = p, n.context = f, a = _) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024), a = !1)
        }
        return n = a, fn(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = fa(l, t.child, null, u), l.child = fa(l, null, e, u)) : kt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Xl(t, l, u), t
    }

    function Do(t, l, e, a) {
        return qa(), l.flags |= 256, kt(t, l, e, a), l.child
    }
    var tc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function lc(t) {
        return {
            baseLanes: t,
            cachePool: ds()
        }
    }

    function ec(t, l, e) {
        return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Tl), t
    }

    function Ao(t, l, e) {
        var a = l.pendingProps,
            u = !1,
            n = (l.flags & 128) !== 0,
            i;
        if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0), i && (u = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
            if (dt) {
                if (u ? ee(l) : ae(), dt) {
                    var c = Ut,
                        f;
                    if (f = c) {
                        t: {
                            for (f = c, c = Ol; f.nodeType !== 8;) {
                                if (!c) {
                                    c = null;
                                    break t
                                }
                                if (f = Dl(f.nextSibling), f === null) {
                                    c = null;
                                    break t
                                }
                            }
                            c = f
                        }
                        c !== null ? (l.memoizedState = {
                            dehydrated: c,
                            treeContext: ze !== null ? {
                                id: Vl,
                                overflow: ql
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, f = sl(18, null, null, 0), f.stateNode = c, f.return = l, l.child = f, tl = l, Ut = null, f = !0) : f = !1
                    }
                    f || Oe(l)
                }
                if (c = l.memoizedState, c !== null && (c = c.dehydrated, c !== null)) return Yc(c) ? l.lanes = 32 : l.lanes = 536870912, null;
                Zl(l)
            }
            return c = a.children, a = a.fallback, u ? (ae(), u = l.mode, c = sn({
                mode: "hidden",
                children: c
            }, u), a = Ee(a, u, e, null), c.return = l, a.return = l, c.sibling = a, l.child = c, u = l.child, u.memoizedState = lc(e), u.childLanes = ec(t, i, e), l.memoizedState = tc, a) : (ee(l), ac(l, c))
        }
        if (f = t.memoizedState, f !== null && (c = f.dehydrated, c !== null)) {
            if (n) l.flags & 256 ? (ee(l), l.flags &= -257, l = uc(t, l, e)) : l.memoizedState !== null ? (ae(), l.child = t.child, l.flags |= 128, l = null) : (ae(), u = a.fallback, c = l.mode, a = sn({
                mode: "visible",
                children: a.children
            }, c), u = Ee(u, c, e, null), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, fa(l, t.child, null, e), a = l.child, a.memoizedState = lc(e), a.childLanes = ec(t, i, e), l.memoizedState = tc, l = u);
            else if (ee(l), Yc(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset, i) var m = i.dgst;
                i = m, a = Error(x(419)), a.stack = "", a.digest = i, Ba({
                    value: a,
                    source: null,
                    stack: null
                }), l = uc(t, l, e)
            } else if (Lt || Ya(t, l, e, !1), i = (e & t.childLanes) !== 0, Lt || i) {
                if (i = Dt, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : Gn(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== f.retryLane)) throw f.retryLane = a, Fe(t, a), hl(i, t, a), So;
                c.data === "$?" || Tc(), l = uc(t, l, e)
            } else c.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = f.treeContext, Ut = Dl(c.nextSibling), tl = l, dt = !0, Ae = null, Ol = !1, t !== null && (bl[pl++] = Vl, bl[pl++] = ql, bl[pl++] = ze, Vl = t.id, ql = t.overflow, ze = l), l = ac(l, a.children), l.flags |= 4096);
            return l
        }
        return u ? (ae(), u = a.fallback, c = l.mode, f = t.child, m = f.sibling, a = Cl(f, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = f.subtreeFlags & 65011712, m !== null ? u = Cl(m, u) : (u = Ee(u, c, e, null), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, c = t.child.memoizedState, c === null ? c = lc(e) : (f = c.cachePool, f !== null ? (m = Gt._currentValue, f = f.parent !== m ? {
            parent: m,
            pool: m
        } : f) : f = ds(), c = {
            baseLanes: c.baseLanes | e,
            cachePool: f
        }), u.memoizedState = c, u.childLanes = ec(t, i, e), l.memoizedState = tc, a) : (ee(l), e = t.child, t = e.sibling, e = Cl(e, {
            mode: "visible",
            children: a.children
        }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e)
    }

    function ac(t, l) {
        return l = sn({
            mode: "visible",
            children: l
        }, t.mode), l.return = t, t.child = l
    }

    function sn(t, l) {
        return t = sl(22, t, null, l), t.lanes = 0, t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, t
    }

    function uc(t, l, e) {
        return fa(l, t.child, null, e), t = ac(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t
    }

    function Oo(t, l, e) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l), Ti(t.return, l, e)
    }

    function nc(t, l, e, a, u) {
        var n = t.memoizedState;
        n === null ? t.memoizedState = {
            isBackwards: l,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: u
        } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = e, n.tailMode = u)
    }

    function Ro(t, l, e) {
        var a = l.pendingProps,
            u = a.revealOrder,
            n = a.tail;
        if (kt(t, l, a.children, e), a = Zt.current, (a & 2) !== 0) a = a & 1 | 2, l.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0) t: for (t = l.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && Oo(t, e, l);
                else if (t.tag === 19) Oo(t, e, l);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === l) break t;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === l) break t;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            a &= 1
        }
        switch (o(Zt, a), u) {
            case "forwards":
                for (e = l.child, u = null; e !== null;) t = e.alternate, t !== null && un(t) === null && (u = e), e = e.sibling;
                e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), nc(l, !1, u, e, n);
                break;
            case "backwards":
                for (e = null, u = l.child, l.child = null; u !== null;) {
                    if (t = u.alternate, t !== null && un(t) === null) {
                        l.child = u;
                        break
                    }
                    t = u.sibling, u.sibling = e, e = u, u = t
                }
                nc(l, !0, e, null, n);
                break;
            case "together":
                nc(l, !1, null, null, void 0);
                break;
            default:
                l.memoizedState = null
        }
        return l.child
    }

    function Xl(t, l, e) {
        if (t !== null && (l.dependencies = t.dependencies), fe |= l.lanes, (e & l.childLanes) === 0)
            if (t !== null) {
                if (Ya(t, l, e, !1), (e & l.childLanes) === 0) return null
            } else return null;
        if (t !== null && l.child !== t.child) throw Error(x(153));
        if (l.child !== null) {
            for (t = l.child, e = Cl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null;) t = t.sibling, e = e.sibling = Cl(t, t.pendingProps), e.return = l;
            e.sibling = null
        }
        return l.child
    }

    function ic(t, l) {
        return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Xu(t)))
    }

    function R0(t, l, e) {
        switch (l.tag) {
            case 3:
                C(l, l.stateNode.containerInfo), Fl(l, Gt, t.memoizedState.cache), qa();
                break;
            case 27:
            case 5:
                ot(l);
                break;
            case 4:
                C(l, l.stateNode.containerInfo);
                break;
            case 10:
                Fl(l, l.type, l.memoizedProps.value);
                break;
            case 13:
                var a = l.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (ee(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Ao(t, l, e) : (ee(l), t = Xl(t, l, e), t !== null ? t.sibling : null);
                ee(l);
                break;
            case 19:
                var u = (t.flags & 128) !== 0;
                if (a = (e & l.childLanes) !== 0, a || (Ya(t, l, e, !1), a = (e & l.childLanes) !== 0), u) {
                    if (a) return Ro(t, l, e);
                    l.flags |= 128
                }
                if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), o(Zt, Zt.current), a) break;
                return null;
            case 22:
            case 23:
                return l.lanes = 0, To(t, l, e);
            case 24:
                Fl(l, Gt, t.memoizedState.cache)
        }
        return Xl(t, l, e)
    }

    function Mo(t, l, e) {
        if (t !== null)
            if (t.memoizedProps !== l.pendingProps) Lt = !0;
            else {
                if (!ic(t, e) && (l.flags & 128) === 0) return Lt = !1, R0(t, l, e);
                Lt = (t.flags & 131072) !== 0
            }
        else Lt = !1, dt && (l.flags & 1048576) !== 0 && ns(l, Zu, l.index);
        switch (l.lanes = 0, l.tag) {
            case 16:
                t: {
                    t = l.pendingProps;
                    var a = l.elementType,
                        u = a._init;
                    if (a = u(a._payload), l.type = a, typeof a == "function") vi(a) ? (t = Ne(a, t), l.tag = 1, l = zo(null, l, a, t, e)) : (l.tag = 0, l = Pi(null, l, a, t, e));
                    else {
                        if (a != null) {
                            if (u = a.$$typeof, u === ht) {
                                l.tag = 11, l = bo(null, l, a, t, e);
                                break t
                            } else if (u === zt) {
                                l.tag = 14, l = po(null, l, a, t, e);
                                break t
                            }
                        }
                        throw l = Yt(a) || a, Error(x(306, l, ""))
                    }
                }
                return l;
            case 0:
                return Pi(t, l, l.type, l.pendingProps, e);
            case 1:
                return a = l.type, u = Ne(a, l.pendingProps), zo(t, l, a, u, e);
            case 3:
                t: {
                    if (C(l, l.stateNode.containerInfo), t === null) throw Error(x(387));a = l.pendingProps;
                    var n = l.memoizedState;u = n.element,
                    Ri(t, l),
                    Ka(l, a, null, e);
                    var i = l.memoizedState;
                    if (a = i.cache, Fl(l, Gt, a), a !== n.cache && _i(l, [Gt], e, !0), La(), a = i.element, n.isDehydrated)
                        if (n = {
                                element: a,
                                isDehydrated: !1,
                                cache: i.cache
                            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
                            l = Do(t, l, a, e);
                            break t
                        } else if (a !== u) {
                        u = ml(Error(x(424)), l), Ba(u), l = Do(t, l, a, e);
                        break t
                    } else {
                        switch (t = l.stateNode.containerInfo, t.nodeType) {
                            case 9:
                                t = t.body;
                                break;
                            default:
                                t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Ut = Dl(t.firstChild), tl = l, dt = !0, Ae = null, Ol = !0, e = co(l, null, a, e), l.child = e; e;) e.flags = e.flags & -3 | 4096, e = e.sibling
                    } else {
                        if (qa(), a === u) {
                            l = Xl(t, l, e);
                            break t
                        }
                        kt(t, l, a, e)
                    }
                    l = l.child
                }
                return l;
            case 26:
                return fn(t, l), t === null ? (e = Hr(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : dt || (e = l.type, t = l.pendingProps, a = _n(j.current).createElement(e), a[Ft] = l, a[ll] = t, $t(a, e, t), wt(a), l.stateNode = a) : l.memoizedState = Hr(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
            case 27:
                return ot(l), t === null && dt && (a = l.stateNode = jr(l.type, l.pendingProps, j.current), tl = l, Ol = !0, u = Ut, de(l.type) ? (Gc = u, Ut = Dl(a.firstChild)) : Ut = u), kt(t, l, l.pendingProps.children, e), fn(t, l), t === null && (l.flags |= 4194304), l.child;
            case 5:
                return t === null && dt && ((u = a = Ut) && (a = ay(a, l.type, l.pendingProps, Ol), a !== null ? (l.stateNode = a, tl = l, Ut = Dl(a.firstChild), Ol = !1, u = !0) : u = !1), u || Oe(l)), ot(l), u = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = n.children, Vc(u, n) ? a = null : i !== null && Vc(u, i) && (l.flags |= 32), l.memoizedState !== null && (u = Ci(t, l, x0, null, null, e), hu._currentValue = u), fn(t, l), kt(t, l, a, e), l.child;
            case 6:
                return t === null && dt && ((t = e = Ut) && (e = uy(e, l.pendingProps, Ol), e !== null ? (l.stateNode = e, tl = l, Ut = null, t = !0) : t = !1), t || Oe(l)), null;
            case 13:
                return Ao(t, l, e);
            case 4:
                return C(l, l.stateNode.containerInfo), a = l.pendingProps, t === null ? l.child = fa(l, null, a, e) : kt(t, l, a, e), l.child;
            case 11:
                return bo(t, l, l.type, l.pendingProps, e);
            case 7:
                return kt(t, l, l.pendingProps, e), l.child;
            case 8:
                return kt(t, l, l.pendingProps.children, e), l.child;
            case 12:
                return kt(t, l, l.pendingProps.children, e), l.child;
            case 10:
                return a = l.pendingProps, Fl(l, l.type, a.value), kt(t, l, a.children, e), l.child;
            case 9:
                return u = l.type._context, a = l.pendingProps.children, Me(l), u = It(u), a = a(u), l.flags |= 1, kt(t, l, a, e), l.child;
            case 14:
                return po(t, l, l.type, l.pendingProps, e);
            case 15:
                return xo(t, l, l.type, l.pendingProps, e);
            case 19:
                return Ro(t, l, e);
            case 31:
                return a = l.pendingProps, e = l.mode, a = {
                    mode: a.mode,
                    children: a.children
                }, t === null ? (e = sn(a, e), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = Cl(t.child, a), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
            case 22:
                return To(t, l, e);
            case 24:
                return Me(l), a = It(Gt), t === null ? (u = Di(), u === null && (u = Dt, n = Ei(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
                    parent: a,
                    cache: u
                }, Oi(l), Fl(l, Gt, u)) : ((t.lanes & e) !== 0 && (Ri(t, l), Ka(l, null, null, e), La()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = {
                    parent: a,
                    cache: a
                }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), Fl(l, Gt, a)) : (a = n.cache, Fl(l, Gt, a), a !== u.cache && _i(l, [Gt], e, !0))), kt(t, l, l.pendingProps.children, e), l.child;
            case 29:
                throw l.pendingProps
        }
        throw Error(x(156, l.tag))
    }

    function Ql(t) {
        t.flags |= 4
    }

    function jo(t, l) {
        if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !Yr(l)) {
            if (l = xl.current, l !== null && ((nt & 4194048) === nt ? Rl !== null : (nt & 62914560) !== nt && (nt & 536870912) === 0 || l !== Rl)) throw Qa = Ai, ys;
            t.flags |= 8192
        }
    }

    function on(t, l) {
        l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? ff() : 536870912, t.lanes |= l, da |= l)
    }

    function Pa(t, l) {
        if (!dt) switch (t.tailMode) {
            case "hidden":
                l = t.tail;
                for (var e = null; l !== null;) l.alternate !== null && (e = l), l = l.sibling;
                e === null ? t.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = t.tail;
                for (var a = null; e !== null;) e.alternate !== null && (a = e), e = e.sibling;
                a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
        }
    }

    function jt(t) {
        var l = t.alternate !== null && t.alternate.child === t.child,
            e = 0,
            a = 0;
        if (l)
            for (var u = t.child; u !== null;) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
        else
            for (u = t.child; u !== null;) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
        return t.subtreeFlags |= a, t.childLanes = e, l
    }

    function M0(t, l, e) {
        var a = l.pendingProps;
        switch (bi(l), l.tag) {
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
                return jt(l), null;
            case 1:
                return jt(l), null;
            case 3:
                return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Yl(Gt), K(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Va(l) ? Ql(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, fs())), jt(l), null;
            case 26:
                return e = l.memoizedState, t === null ? (Ql(l), e !== null ? (jt(l), jo(l, e)) : (jt(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Ql(l), jt(l), jo(l, e)) : (jt(l), l.flags &= -16777217) : (t.memoizedProps !== a && Ql(l), jt(l), l.flags &= -16777217), null;
            case 27:
                Qt(l), e = j.current;
                var u = l.type;
                if (t !== null && l.stateNode != null) t.memoizedProps !== a && Ql(l);
                else {
                    if (!a) {
                        if (l.stateNode === null) throw Error(x(166));
                        return jt(l), null
                    }
                    t = b.current, Va(l) ? is(l) : (t = jr(u, a, e), l.stateNode = t, Ql(l))
                }
                return jt(l), null;
            case 5:
                if (Qt(l), e = l.type, t !== null && l.stateNode != null) t.memoizedProps !== a && Ql(l);
                else {
                    if (!a) {
                        if (l.stateNode === null) throw Error(x(166));
                        return jt(l), null
                    }
                    if (t = b.current, Va(l)) is(l);
                    else {
                        switch (u = _n(j.current), t) {
                            case 1:
                                t = u.createElementNS("http://www.w3.org/2000/svg", e);
                                break;
                            case 2:
                                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                break;
                            default:
                                switch (e) {
                                    case "svg":
                                        t = u.createElementNS("http://www.w3.org/2000/svg", e);
                                        break;
                                    case "math":
                                        t = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                        break;
                                    case "script":
                                        t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                                        break;
                                    case "select":
                                        t = typeof a.is == "string" ? u.createElement("select", {
                                            is: a.is
                                        }) : u.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                                        break;
                                    default:
                                        t = typeof a.is == "string" ? u.createElement(e, {
                                            is: a.is
                                        }) : u.createElement(e)
                                }
                        }
                        t[Ft] = l, t[ll] = a;
                        t: for (u = l.child; u !== null;) {
                            if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
                            else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                u.child.return = u, u = u.child;
                                continue
                            }
                            if (u === l) break t;
                            for (; u.sibling === null;) {
                                if (u.return === null || u.return === l) break t;
                                u = u.return
                            }
                            u.sibling.return = u.return, u = u.sibling
                        }
                        l.stateNode = t;
                        t: switch ($t(t, e, a), e) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!a.autoFocus;
                                break t;
                            case "img":
                                t = !0;
                                break t;
                            default:
                                t = !1
                        }
                        t && Ql(l)
                    }
                }
                return jt(l), l.flags &= -16777217, null;
            case 6:
                if (t && l.stateNode != null) t.memoizedProps !== a && Ql(l);
                else {
                    if (typeof a != "string" && l.stateNode === null) throw Error(x(166));
                    if (t = j.current, Va(l)) {
                        if (t = l.stateNode, e = l.memoizedProps, a = null, u = tl, u !== null) switch (u.tag) {
                            case 27:
                            case 5:
                                a = u.memoizedProps
                        }
                        t[Ft] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Er(t.nodeValue, e)), t || Oe(l)
                    } else t = _n(t).createTextNode(a), t[Ft] = l, l.stateNode = t
                }
                return jt(l), null;
            case 13:
                if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (u = Va(l), a !== null && a.dehydrated !== null) {
                        if (t === null) {
                            if (!u) throw Error(x(318));
                            if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(x(317));
                            u[Ft] = l
                        } else qa(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                        jt(l), u = !1
                    } else u = fs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
                    if (!u) return l.flags & 256 ? (Zl(l), l) : (Zl(l), null)
                }
                if (Zl(l), (l.flags & 128) !== 0) return l.lanes = e, l;
                if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
                    a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                    var n = null;
                    a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)
                }
                return e !== t && e && (l.child.flags |= 8192), on(l, l.updateQueue), jt(l), null;
            case 4:
                return K(), t === null && jc(l.stateNode.containerInfo), jt(l), null;
            case 10:
                return Yl(l.type), jt(l), null;
            case 19:
                if (d(Zt), u = l.memoizedState, u === null) return jt(l), null;
                if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
                    if (a) Pa(u, !1);
                    else {
                        if (Nt !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = l.child; t !== null;) {
                                if (n = un(t), n !== null) {
                                    for (l.flags |= 128, Pa(u, !1), t = n.updateQueue, l.updateQueue = t, on(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null;) us(e, t), e = e.sibling;
                                    return o(Zt, Zt.current & 1 | 2), l.child
                                }
                                t = t.sibling
                            }
                        u.tail !== null && Al() > yn && (l.flags |= 128, a = !0, Pa(u, !1), l.lanes = 4194304)
                    }
                else {
                    if (!a)
                        if (t = un(n), t !== null) {
                            if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, on(l, t), Pa(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !dt) return jt(l), null
                        } else 2 * Al() - u.renderingStartTime > yn && e !== 536870912 && (l.flags |= 128, a = !0, Pa(u, !1), l.lanes = 4194304);
                    u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n)
                }
                return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Al(), l.sibling = null, t = Zt.current, o(Zt, a ? t & 1 | 2 : t & 1), l) : (jt(l), null);
            case 22:
            case 23:
                return Zl(l), Ni(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (jt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : jt(l), e = l.updateQueue, e !== null && on(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && d(je), null;
            case 24:
                return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Yl(Gt), jt(l), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(x(156, l.tag))
    }

    function j0(t, l) {
        switch (bi(l), l.tag) {
            case 1:
                return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
            case 3:
                return Yl(Gt), K(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
            case 26:
            case 27:
            case 5:
                return Qt(l), null;
            case 13:
                if (Zl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
                    if (l.alternate === null) throw Error(x(340));
                    qa()
                }
                return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
            case 19:
                return d(Zt), null;
            case 4:
                return K(), null;
            case 10:
                return Yl(l.type), null;
            case 22:
            case 23:
                return Zl(l), Ni(), t !== null && d(je), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
            case 24:
                return Yl(Gt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Uo(t, l) {
        switch (bi(l), l.tag) {
            case 3:
                Yl(Gt), K();
                break;
            case 26:
            case 27:
            case 5:
                Qt(l);
                break;
            case 4:
                K();
                break;
            case 13:
                Zl(l);
                break;
            case 19:
                d(Zt);
                break;
            case 10:
                Yl(l.type);
                break;
            case 22:
            case 23:
                Zl(l), Ni(), t !== null && d(je);
                break;
            case 24:
                Yl(Gt)
        }
    }

    function tu(t, l) {
        try {
            var e = l.updateQueue,
                a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                e = u;
                do {
                    if ((e.tag & t) === t) {
                        a = void 0;
                        var n = e.create,
                            i = e.inst;
                        a = n(), i.destroy = a
                    }
                    e = e.next
                } while (e !== u)
            }
        } catch (c) {
            _t(l, l.return, c)
        }
    }

    function ue(t, l, e) {
        try {
            var a = l.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & t) === t) {
                        var i = a.inst,
                            c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0, u = l;
                            var f = e,
                                m = c;
                            try {
                                m()
                            } catch (_) {
                                _t(u, f, _)
                            }
                        }
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (_) {
            _t(l, l.return, _)
        }
    }

    function No(t) {
        var l = t.updateQueue;
        if (l !== null) {
            var e = t.stateNode;
            try {
                bs(l, e)
            } catch (a) {
                _t(t, t.return, a)
            }
        }
    }

    function Ho(t, l, e) {
        e.props = Ne(t.type, t.memoizedProps), e.state = t.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            _t(t, l, a)
        }
    }

    function lu(t, l) {
        try {
            var e = t.ref;
            if (e !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = t.stateNode;
                        break;
                    case 30:
                        a = t.stateNode;
                        break;
                    default:
                        a = t.stateNode
                }
                typeof e == "function" ? t.refCleanup = e(a) : e.current = a
            }
        } catch (u) {
            _t(t, l, u)
        }
    }

    function Ml(t, l) {
        var e = t.ref,
            a = t.refCleanup;
        if (e !== null)
            if (typeof a == "function") try {
                a()
            } catch (u) {
                _t(t, l, u)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof e == "function") try {
                e(null)
            } catch (u) {
                _t(t, l, u)
            } else e.current = null
    }

    function Co(t) {
        var l = t.type,
            e = t.memoizedProps,
            a = t.stateNode;
        try {
            t: switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    e.autoFocus && a.focus();
                    break t;
                case "img":
                    e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        }
        catch (u) {
            _t(t, t.return, u)
        }
    }

    function cc(t, l, e) {
        try {
            var a = t.stateNode;
            I0(a, t.type, e, l), a[ll] = l
        } catch (u) {
            _t(t, t.return, u)
        }
    }

    function Vo(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && de(t.type) || t.tag === 4
    }

    function fc(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || Vo(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && de(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function sc(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6) t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Tn));
        else if (a !== 4 && (a === 27 && de(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
            for (sc(t, l, e), t = t.sibling; t !== null;) sc(t, l, e), t = t.sibling
    }

    function rn(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6) t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
        else if (a !== 4 && (a === 27 && de(t.type) && (e = t.stateNode), t = t.child, t !== null))
            for (rn(t, l, e), t = t.sibling; t !== null;) rn(t, l, e), t = t.sibling
    }

    function qo(t) {
        var l = t.stateNode,
            e = t.memoizedProps;
        try {
            for (var a = t.type, u = l.attributes; u.length;) l.removeAttributeNode(u[0]);
            $t(l, a, e), l[Ft] = t, l[ll] = e
        } catch (n) {
            _t(t, t.return, n)
        }
    }
    var wl = !1,
        Ct = !1,
        oc = !1,
        Bo = typeof WeakSet == "function" ? WeakSet : Set,
        Kt = null;

    function U0(t, l) {
        if (t = t.containerInfo, Hc = Rn, t = kf(t), fi(t)) {
            if ("selectionStart" in t) var e = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                e = (e = t.ownerDocument) && e.defaultView || window;
                var a = e.getSelection && e.getSelection();
                if (a && a.rangeCount !== 0) {
                    e = a.anchorNode;
                    var u = a.anchorOffset,
                        n = a.focusNode;
                    a = a.focusOffset;
                    try {
                        e.nodeType, n.nodeType
                    } catch {
                        e = null;
                        break t
                    }
                    var i = 0,
                        c = -1,
                        f = -1,
                        m = 0,
                        _ = 0,
                        A = t,
                        S = null;
                    l: for (;;) {
                        for (var p; A !== e || u !== 0 && A.nodeType !== 3 || (c = i + u), A !== n || a !== 0 && A.nodeType !== 3 || (f = i + a), A.nodeType === 3 && (i += A.nodeValue.length), (p = A.firstChild) !== null;) S = A, A = p;
                        for (;;) {
                            if (A === t) break l;
                            if (S === e && ++m === u && (c = i), S === n && ++_ === a && (f = i), (p = A.nextSibling) !== null) break;
                            A = S, S = A.parentNode
                        }
                        A = p
                    }
                    e = c === -1 || f === -1 ? null : {
                        start: c,
                        end: f
                    }
                } else e = null
            }
            e = e || {
                start: 0,
                end: 0
            }
        } else e = null;
        for (Cc = {
                focusedElem: t,
                selectionRange: e
            }, Rn = !1, Kt = l; Kt !== null;)
            if (l = Kt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null) t.return = l, Kt = t;
            else
                for (; Kt !== null;) {
                    switch (l = Kt, n = l.alternate, t = l.flags, l.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && n !== null) {
                                t = void 0, e = l, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                                try {
                                    var Q = Ne(e.type, u, e.elementType === e.type);
                                    t = a.getSnapshotBeforeUpdate(Q, n), a.__reactInternalSnapshotBeforeUpdate = t
                                } catch (Z) {
                                    _t(e, e.return, Z)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9) Bc(t);
                                else if (e === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Bc(t);
                                        break;
                                    default:
                                        t.textContent = ""
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
                            if ((t & 1024) !== 0) throw Error(x(163))
                    }
                    if (t = l.sibling, t !== null) {
                        t.return = l.return, Kt = t;
                        break
                    }
                    Kt = l.return
                }
    }

    function Yo(t, l, e) {
        var a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ne(t, e), a & 4 && tu(5, e);
                break;
            case 1:
                if (ne(t, e), a & 4)
                    if (t = e.stateNode, l === null) try {
                        t.componentDidMount()
                    } catch (i) {
                        _t(e, e.return, i)
                    } else {
                        var u = Ne(e.type, l.memoizedProps);
                        l = l.memoizedState;
                        try {
                            t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (i) {
                            _t(e, e.return, i)
                        }
                    }
                a & 64 && No(e), a & 512 && lu(e, e.return);
                break;
            case 3:
                if (ne(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
                    if (l = null, e.child !== null) switch (e.child.tag) {
                        case 27:
                        case 5:
                            l = e.child.stateNode;
                            break;
                        case 1:
                            l = e.child.stateNode
                    }
                    try {
                        bs(t, l)
                    } catch (i) {
                        _t(e, e.return, i)
                    }
                }
                break;
            case 27:
                l === null && a & 4 && qo(e);
            case 26:
            case 5:
                ne(t, e), l === null && a & 4 && Co(e), a & 512 && lu(e, e.return);
                break;
            case 12:
                ne(t, e);
                break;
            case 13:
                ne(t, e), a & 4 && Xo(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Z0.bind(null, e), ny(t, e))));
                break;
            case 22:
                if (a = e.memoizedState !== null || wl, !a) {
                    l = l !== null && l.memoizedState !== null || Ct, u = wl;
                    var n = Ct;
                    wl = a, (Ct = l) && !n ? ie(t, e, (e.subtreeFlags & 8772) !== 0) : ne(t, e), wl = u, Ct = n
                }
                break;
            case 30:
                break;
            default:
                ne(t, e)
        }
    }

    function Go(t) {
        var l = t.alternate;
        l !== null && (t.alternate = null, Go(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Qn(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var Ot = null,
        ul = !1;

    function Ll(t, l, e) {
        for (e = e.child; e !== null;) Zo(t, l, e), e = e.sibling
    }

    function Zo(t, l, e) {
        if (il && typeof il.onCommitFiberUnmount == "function") try {
            il.onCommitFiberUnmount(Ta, e)
        } catch {}
        switch (e.tag) {
            case 26:
                Ct || Ml(e, l), Ll(t, l, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
                break;
            case 27:
                Ct || Ml(e, l);
                var a = Ot,
                    u = ul;
                de(e.type) && (Ot = e.stateNode, ul = !1), Ll(t, l, e), ou(e.stateNode), Ot = a, ul = u;
                break;
            case 5:
                Ct || Ml(e, l);
            case 6:
                if (a = Ot, u = ul, Ot = null, Ll(t, l, e), Ot = a, ul = u, Ot !== null)
                    if (ul) try {
                        (Ot.nodeType === 9 ? Ot.body : Ot.nodeName === "HTML" ? Ot.ownerDocument.body : Ot).removeChild(e.stateNode)
                    } catch (n) {
                        _t(e, l, n)
                    } else try {
                        Ot.removeChild(e.stateNode)
                    } catch (n) {
                        _t(e, l, n)
                    }
                break;
            case 18:
                Ot !== null && (ul ? (t = Ot, Rr(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode), Su(t)) : Rr(Ot, e.stateNode));
                break;
            case 4:
                a = Ot, u = ul, Ot = e.stateNode.containerInfo, ul = !0, Ll(t, l, e), Ot = a, ul = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Ct || ue(2, e, l), Ct || ue(4, e, l), Ll(t, l, e);
                break;
            case 1:
                Ct || (Ml(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && Ho(e, l, a)), Ll(t, l, e);
                break;
            case 21:
                Ll(t, l, e);
                break;
            case 22:
                Ct = (a = Ct) || e.memoizedState !== null, Ll(t, l, e), Ct = a;
                break;
            default:
                Ll(t, l, e)
        }
    }

    function Xo(t, l) {
        if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            Su(t)
        } catch (e) {
            _t(l, l.return, e)
        }
    }

    function N0(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var l = t.stateNode;
                return l === null && (l = t.stateNode = new Bo), l;
            case 22:
                return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Bo), l;
            default:
                throw Error(x(435, t.tag))
        }
    }

    function rc(t, l) {
        var e = N0(t);
        l.forEach(function(a) {
            var u = X0.bind(null, t, a);
            e.has(a) || (e.add(a), a.then(u, u))
        })
    }

    function ol(t, l) {
        var e = l.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var u = e[a],
                    n = t,
                    i = l,
                    c = i;
                t: for (; c !== null;) {
                    switch (c.tag) {
                        case 27:
                            if (de(c.type)) {
                                Ot = c.stateNode, ul = !1;
                                break t
                            }
                            break;
                        case 5:
                            Ot = c.stateNode, ul = !1;
                            break t;
                        case 3:
                        case 4:
                            Ot = c.stateNode.containerInfo, ul = !0;
                            break t
                    }
                    c = c.return
                }
                if (Ot === null) throw Error(x(160));
                Zo(n, i, u), Ot = null, ul = !1, n = u.alternate, n !== null && (n.return = null), u.return = null
            }
        if (l.subtreeFlags & 13878)
            for (l = l.child; l !== null;) Qo(l, t), l = l.sibling
    }
    var zl = null;

    function Qo(t, l) {
        var e = t.alternate,
            a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ol(l, t), rl(t), a & 4 && (ue(3, t, t.return), tu(3, t), ue(5, t, t.return));
                break;
            case 1:
                ol(l, t), rl(t), a & 512 && (Ct || e === null || Ml(e, e.return)), a & 64 && wl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
                break;
            case 26:
                var u = zl;
                if (ol(l, t), rl(t), a & 512 && (Ct || e === null || Ml(e, e.return)), a & 4) {
                    var n = e !== null ? e.memoizedState : null;
                    if (a = t.memoizedState, e === null)
                        if (a === null)
                            if (t.stateNode === null) {
                                t: {
                                    a = t.type,
                                    e = t.memoizedProps,
                                    u = u.ownerDocument || u;l: switch (a) {
                                        case "title":
                                            n = u.getElementsByTagName("title")[0], (!n || n[za] || n[Ft] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), $t(n, a, e), n[Ft] = t, wt(n), a = n;
                                            break t;
                                        case "link":
                                            var i = qr("link", "href", u).get(a + (e.href || ""));
                                            if (i) {
                                                for (var c = 0; c < i.length; c++)
                                                    if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                        i.splice(c, 1);
                                                        break l
                                                    }
                                            }
                                            n = u.createElement(a), $t(n, a, e), u.head.appendChild(n);
                                            break;
                                        case "meta":
                                            if (i = qr("meta", "content", u).get(a + (e.content || ""))) {
                                                for (c = 0; c < i.length; c++)
                                                    if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                        i.splice(c, 1);
                                                        break l
                                                    }
                                            }
                                            n = u.createElement(a), $t(n, a, e), u.head.appendChild(n);
                                            break;
                                        default:
                                            throw Error(x(468, a))
                                    }
                                    n[Ft] = t,
                                    wt(n),
                                    a = n
                                }
                                t.stateNode = a
                            }
                    else Br(u, t.type, t.stateNode);
                    else t.stateNode = Vr(u, a, t.memoizedProps);
                    else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? Br(u, t.type, t.stateNode) : Vr(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && cc(t, t.memoizedProps, e.memoizedProps)
                }
                break;
            case 27:
                ol(l, t), rl(t), a & 512 && (Ct || e === null || Ml(e, e.return)), e !== null && a & 4 && cc(t, t.memoizedProps, e.memoizedProps);
                break;
            case 5:
                if (ol(l, t), rl(t), a & 512 && (Ct || e === null || Ml(e, e.return)), t.flags & 32) {
                    u = t.stateNode;
                    try {
                        we(u, "")
                    } catch (p) {
                        _t(t, t.return, p)
                    }
                }
                a & 4 && t.stateNode != null && (u = t.memoizedProps, cc(t, u, e !== null ? e.memoizedProps : u)), a & 1024 && (oc = !0);
                break;
            case 6:
                if (ol(l, t), rl(t), a & 4) {
                    if (t.stateNode === null) throw Error(x(162));
                    a = t.memoizedProps, e = t.stateNode;
                    try {
                        e.nodeValue = a
                    } catch (p) {
                        _t(t, t.return, p)
                    }
                }
                break;
            case 3:
                if (Dn = null, u = zl, zl = En(l.containerInfo), ol(l, t), zl = u, rl(t), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
                    Su(l.containerInfo)
                } catch (p) {
                    _t(t, t.return, p)
                }
                oc && (oc = !1, wo(t));
                break;
            case 4:
                a = zl, zl = En(t.stateNode.containerInfo), ol(l, t), rl(t), zl = a;
                break;
            case 12:
                ol(l, t), rl(t);
                break;
            case 13:
                ol(l, t), rl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (mc = Al()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, rc(t, a)));
                break;
            case 22:
                u = t.memoizedState !== null;
                var f = e !== null && e.memoizedState !== null,
                    m = wl,
                    _ = Ct;
                if (wl = m || u, Ct = _ || f, ol(l, t), Ct = _, wl = m, rl(t), a & 8192) t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || f || wl || Ct || He(t)), e = null, l = t;;) {
                    if (l.tag === 5 || l.tag === 26) {
                        if (e === null) {
                            f = e = l;
                            try {
                                if (n = f.stateNode, u) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = f.stateNode;
                                    var A = f.memoizedProps.style,
                                        S = A != null && A.hasOwnProperty("display") ? A.display : null;
                                    c.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim()
                                }
                            } catch (p) {
                                _t(f, f.return, p)
                            }
                        }
                    } else if (l.tag === 6) {
                        if (e === null) {
                            f = l;
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps
                            } catch (p) {
                                _t(f, f.return, p)
                            }
                        }
                    } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
                        l.child.return = l, l = l.child;
                        continue
                    }
                    if (l === t) break t;
                    for (; l.sibling === null;) {
                        if (l.return === null || l.return === t) break t;
                        e === l && (e = null), l = l.return
                    }
                    e === l && (e = null), l.sibling.return = l.return, l = l.sibling
                }
                a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, rc(t, e))));
                break;
            case 19:
                ol(l, t), rl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, rc(t, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ol(l, t), rl(t)
        }
    }

    function rl(t) {
        var l = t.flags;
        if (l & 2) {
            try {
                for (var e, a = t.return; a !== null;) {
                    if (Vo(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null) throw Error(x(160));
                switch (e.tag) {
                    case 27:
                        var u = e.stateNode,
                            n = fc(t);
                        rn(t, n, u);
                        break;
                    case 5:
                        var i = e.stateNode;
                        e.flags & 32 && (we(i, ""), e.flags &= -33);
                        var c = fc(t);
                        rn(t, c, i);
                        break;
                    case 3:
                    case 4:
                        var f = e.stateNode.containerInfo,
                            m = fc(t);
                        sc(t, m, f);
                        break;
                    default:
                        throw Error(x(161))
                }
            } catch (_) {
                _t(t, t.return, _)
            }
            t.flags &= -3
        }
        l & 4096 && (t.flags &= -4097)
    }

    function wo(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var l = t;
                wo(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling
            }
    }

    function ne(t, l) {
        if (l.subtreeFlags & 8772)
            for (l = l.child; l !== null;) Yo(t, l.alternate, l), l = l.sibling
    }

    function He(t) {
        for (t = t.child; t !== null;) {
            var l = t;
            switch (l.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ue(4, l, l.return), He(l);
                    break;
                case 1:
                    Ml(l, l.return);
                    var e = l.stateNode;
                    typeof e.componentWillUnmount == "function" && Ho(l, l.return, e), He(l);
                    break;
                case 27:
                    ou(l.stateNode);
                case 26:
                case 5:
                    Ml(l, l.return), He(l);
                    break;
                case 22:
                    l.memoizedState === null && He(l);
                    break;
                case 30:
                    He(l);
                    break;
                default:
                    He(l)
            }
            t = t.sibling
        }
    }

    function ie(t, l, e) {
        for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null;) {
            var a = l.alternate,
                u = t,
                n = l,
                i = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    ie(u, n, e), tu(4, n);
                    break;
                case 1:
                    if (ie(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
                        u.componentDidMount()
                    } catch (m) {
                        _t(a, a.return, m)
                    }
                    if (a = n, u = a.updateQueue, u !== null) {
                        var c = a.stateNode;
                        try {
                            var f = u.shared.hiddenCallbacks;
                            if (f !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) Ss(f[u], c)
                        } catch (m) {
                            _t(a, a.return, m)
                        }
                    }
                    e && i & 64 && No(n), lu(n, n.return);
                    break;
                case 27:
                    qo(n);
                case 26:
                case 5:
                    ie(u, n, e), e && a === null && i & 4 && Co(n), lu(n, n.return);
                    break;
                case 12:
                    ie(u, n, e);
                    break;
                case 13:
                    ie(u, n, e), e && i & 4 && Xo(u, n);
                    break;
                case 22:
                    n.memoizedState === null && ie(u, n, e), lu(n, n.return);
                    break;
                case 30:
                    break;
                default:
                    ie(u, n, e)
            }
            l = l.sibling
        }
    }

    function dc(t, l) {
        var e = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Ga(e))
    }

    function yc(t, l) {
        t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ga(t))
    }

    function jl(t, l, e, a) {
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) Lo(t, l, e, a), l = l.sibling
    }

    function Lo(t, l, e, a) {
        var u = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                jl(t, l, e, a), u & 2048 && tu(9, l);
                break;
            case 1:
                jl(t, l, e, a);
                break;
            case 3:
                jl(t, l, e, a), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ga(t)));
                break;
            case 12:
                if (u & 2048) {
                    jl(t, l, e, a), t = l.stateNode;
                    try {
                        var n = l.memoizedProps,
                            i = n.id,
                            c = n.onPostCommit;
                        typeof c == "function" && c(i, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (f) {
                        _t(l, l.return, f)
                    }
                } else jl(t, l, e, a);
                break;
            case 13:
                jl(t, l, e, a);
                break;
            case 23:
                break;
            case 22:
                n = l.stateNode, i = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? jl(t, l, e, a) : eu(t, l) : n._visibility & 2 ? jl(t, l, e, a) : (n._visibility |= 2, sa(t, l, e, a, (l.subtreeFlags & 10256) !== 0)), u & 2048 && dc(i, l);
                break;
            case 24:
                jl(t, l, e, a), u & 2048 && yc(l.alternate, l);
                break;
            default:
                jl(t, l, e, a)
        }
    }

    function sa(t, l, e, a, u) {
        for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null;) {
            var n = t,
                i = l,
                c = e,
                f = a,
                m = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    sa(n, i, c, f, u), tu(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var _ = i.stateNode;
                    i.memoizedState !== null ? _._visibility & 2 ? sa(n, i, c, f, u) : eu(n, i) : (_._visibility |= 2, sa(n, i, c, f, u)), u && m & 2048 && dc(i.alternate, i);
                    break;
                case 24:
                    sa(n, i, c, f, u), u && m & 2048 && yc(i.alternate, i);
                    break;
                default:
                    sa(n, i, c, f, u)
            }
            l = l.sibling
        }
    }

    function eu(t, l) {
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) {
                var e = t,
                    a = l,
                    u = a.flags;
                switch (a.tag) {
                    case 22:
                        eu(e, a), u & 2048 && dc(a.alternate, a);
                        break;
                    case 24:
                        eu(e, a), u & 2048 && yc(a.alternate, a);
                        break;
                    default:
                        eu(e, a)
                }
                l = l.sibling
            }
    }
    var au = 8192;

    function oa(t) {
        if (t.subtreeFlags & au)
            for (t = t.child; t !== null;) Ko(t), t = t.sibling
    }

    function Ko(t) {
        switch (t.tag) {
            case 26:
                oa(t), t.flags & au && t.memoizedState !== null && Sy(zl, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                oa(t);
                break;
            case 3:
            case 4:
                var l = zl;
                zl = En(t.stateNode.containerInfo), oa(t), zl = l;
                break;
            case 22:
                t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = au, au = 16777216, oa(t), au = l) : oa(t));
                break;
            default:
                oa(t)
        }
    }

    function Jo(t) {
        var l = t.alternate;
        if (l !== null && (t = l.child, t !== null)) {
            l.child = null;
            do l = t.sibling, t.sibling = null, t = l; while (t !== null)
        }
    }

    function uu(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (l !== null)
                for (var e = 0; e < l.length; e++) {
                    var a = l[e];
                    Kt = a, Wo(a, t)
                }
            Jo(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) ko(t), t = t.sibling
    }

    function ko(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                uu(t), t.flags & 2048 && ue(9, t, t.return);
                break;
            case 3:
                uu(t);
                break;
            case 12:
                uu(t);
                break;
            case 22:
                var l = t.stateNode;
                t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, dn(t)) : uu(t);
                break;
            default:
                uu(t)
        }
    }

    function dn(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (l !== null)
                for (var e = 0; e < l.length; e++) {
                    var a = l[e];
                    Kt = a, Wo(a, t)
                }
            Jo(t)
        }
        for (t = t.child; t !== null;) {
            switch (l = t, l.tag) {
                case 0:
                case 11:
                case 15:
                    ue(8, l, l.return), dn(l);
                    break;
                case 22:
                    e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, dn(l));
                    break;
                default:
                    dn(l)
            }
            t = t.sibling
        }
    }

    function Wo(t, l) {
        for (; Kt !== null;) {
            var e = Kt;
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    ue(8, e, l);
                    break;
                case 23:
                case 22:
                    if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                        var a = e.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    Ga(e.memoizedState.cache)
            }
            if (a = e.child, a !== null) a.return = e, Kt = a;
            else t: for (e = t; Kt !== null;) {
                a = Kt;
                var u = a.sibling,
                    n = a.return;
                if (Go(a), a === e) {
                    Kt = null;
                    break t
                }
                if (u !== null) {
                    u.return = n, Kt = u;
                    break t
                }
                Kt = n
            }
        }
    }
    var H0 = {
            getCacheForType: function(t) {
                var l = It(Gt),
                    e = l.data.get(t);
                return e === void 0 && (e = t(), l.data.set(t, e)), e
            }
        },
        C0 = typeof WeakMap == "function" ? WeakMap : Map,
        mt = 0,
        Dt = null,
        et = null,
        nt = 0,
        St = 0,
        dl = null,
        ce = !1,
        ra = !1,
        hc = !1,
        Kl = 0,
        Nt = 0,
        fe = 0,
        Ce = 0,
        vc = 0,
        Tl = 0,
        da = 0,
        nu = null,
        nl = null,
        gc = !1,
        mc = 0,
        yn = 1 / 0,
        hn = null,
        se = null,
        Wt = 0,
        oe = null,
        ya = null,
        ha = 0,
        Sc = 0,
        bc = null,
        $o = null,
        iu = 0,
        pc = null;

    function yl() {
        if ((mt & 2) !== 0 && nt !== 0) return nt & -nt;
        if (T.T !== null) {
            var t = la;
            return t !== 0 ? t : Ac()
        }
        return rf()
    }

    function Fo() {
        Tl === 0 && (Tl = (nt & 536870912) === 0 || dt ? cf() : 536870912);
        var t = xl.current;
        return t !== null && (t.flags |= 32), Tl
    }

    function hl(t, l, e) {
        (t === Dt && (St === 2 || St === 9) || t.cancelPendingCommit !== null) && (va(t, 0), re(t, nt, Tl, !1)), Ea(t, e), ((mt & 2) === 0 || t !== Dt) && (t === Dt && ((mt & 2) === 0 && (Ce |= e), Nt === 4 && re(t, nt, Tl, !1)), Ul(t))
    }

    function Io(t, l, e) {
        if ((mt & 6) !== 0) throw Error(x(327));
        var a = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || _a(t, l),
            u = a ? B0(t, l) : _c(t, l, !0),
            n = a;
        do {
            if (u === 0) {
                ra && !a && re(t, l, 0, !1);
                break
            } else {
                if (e = t.current.alternate, n && !V0(e)) {
                    u = _c(t, l, !1), n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = l, t.errorRecoveryDisabledLanes & n) var i = 0;
                    else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        l = i;
                        t: {
                            var c = t;u = nu;
                            var f = c.current.memoizedState.isDehydrated;
                            if (f && (va(c, i).flags |= 256), i = _c(c, i, !1), i !== 2) {
                                if (hc && !f) {
                                    c.errorRecoveryDisabledLanes |= n, Ce |= n, u = 4;
                                    break t
                                }
                                n = nl, nl = u, n !== null && (nl === null ? nl = n : nl.push.apply(nl, n))
                            }
                            u = i
                        }
                        if (n = !1, u !== 2) continue
                    }
                }
                if (u === 1) {
                    va(t, 0), re(t, l, 0, !0);
                    break
                }
                t: {
                    switch (a = t, n = u, n) {
                        case 0:
                        case 1:
                            throw Error(x(345));
                        case 4:
                            if ((l & 4194048) !== l) break;
                        case 6:
                            re(a, l, Tl, !ce);
                            break t;
                        case 2:
                            nl = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(x(329))
                    }
                    if ((l & 62914560) === l && (u = mc + 300 - Al(), 10 < u)) {
                        if (re(a, l, Tl, !ce), Eu(a, 0, !0) !== 0) break t;
                        a.timeoutHandle = Ar(Po.bind(null, a, e, nl, hn, gc, l, Tl, Ce, da, ce, n, 2, -0, 0), u);
                        break t
                    }
                    Po(a, e, nl, hn, gc, l, Tl, Ce, da, ce, n, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ul(t)
    }

    function Po(t, l, e, a, u, n, i, c, f, m, _, A, S, p) {
        if (t.timeoutHandle = -1, A = l.subtreeFlags, (A & 8192 || (A & 16785408) === 16785408) && (yu = {
                stylesheets: null,
                count: 0,
                unsuspend: my
            }, Ko(l), A = by(), A !== null)) {
            t.cancelPendingCommit = A(ir.bind(null, t, l, n, e, a, u, i, c, f, _, 1, S, p)), re(t, n, i, !m);
            return
        }
        ir(t, l, n, e, a, u, i, c, f)
    }

    function V0(t) {
        for (var l = t;;) {
            var e = l.tag;
            if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var u = e[a],
                        n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!fl(n(), u)) return !1
                    } catch {
                        return !1
                    }
                }
            if (e = l.child, l.subtreeFlags & 16384 && e !== null) e.return = l, l = e;
            else {
                if (l === t) break;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === t) return !0;
                    l = l.return
                }
                l.sibling.return = l.return, l = l.sibling
            }
        }
        return !0
    }

    function re(t, l, e, a) {
        l &= ~vc, l &= ~Ce, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
        for (var u = l; 0 < u;) {
            var n = 31 - cl(u),
                i = 1 << n;
            a[n] = -1, u &= ~i
        }
        e !== 0 && sf(t, e, l)
    }

    function vn() {
        return (mt & 6) === 0 ? (cu(0), !1) : !0
    }

    function xc() {
        if (et !== null) {
            if (St === 0) var t = et.return;
            else t = et, Bl = Re = null, Bi(t), ca = null, Fa = 0, t = et;
            for (; t !== null;) Uo(t.alternate, t), t = t.return;
            et = null
        }
    }

    function va(t, l) {
        var e = t.timeoutHandle;
        e !== -1 && (t.timeoutHandle = -1, ty(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), xc(), Dt = t, et = e = Cl(t.current, null), nt = l, St = 0, dl = null, ce = !1, ra = _a(t, l), hc = !1, da = Tl = vc = Ce = fe = Nt = 0, nl = nu = null, gc = !1, (l & 8) !== 0 && (l |= l & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements, a &= l; 0 < a;) {
                var u = 31 - cl(a),
                    n = 1 << u;
                l |= t[u], a &= ~n
            }
        return Kl = l, Vu(), e
    }

    function tr(t, l) {
        F = null, T.H = ln, l === Xa || l === Lu ? (l = gs(), St = 3) : l === ys ? (l = gs(), St = 4) : St = l === So ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, dl = l, et === null && (Nt = 1, cn(t, ml(l, t.current)))
    }

    function lr() {
        var t = T.H;
        return T.H = ln, t === null ? ln : t
    }

    function er() {
        var t = T.A;
        return T.A = H0, t
    }

    function Tc() {
        Nt = 4, ce || (nt & 4194048) !== nt && xl.current !== null || (ra = !0), (fe & 134217727) === 0 && (Ce & 134217727) === 0 || Dt === null || re(Dt, nt, Tl, !1)
    }

    function _c(t, l, e) {
        var a = mt;
        mt |= 2;
        var u = lr(),
            n = er();
        (Dt !== t || nt !== l) && (hn = null, va(t, l)), l = !1;
        var i = Nt;
        t: do try {
                if (St !== 0 && et !== null) {
                    var c = et,
                        f = dl;
                    switch (St) {
                        case 8:
                            xc(), i = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            xl.current === null && (l = !0);
                            var m = St;
                            if (St = 0, dl = null, ga(t, c, f, m), e && ra) {
                                i = 0;
                                break t
                            }
                            break;
                        default:
                            m = St, St = 0, dl = null, ga(t, c, f, m)
                    }
                }
                q0(), i = Nt;
                break
            } catch (_) {
                tr(t, _)
            }
            while (!0);
            return l && t.shellSuspendCounter++, Bl = Re = null, mt = a, T.H = u, T.A = n, et === null && (Dt = null, nt = 0, Vu()), i
    }

    function q0() {
        for (; et !== null;) ar(et)
    }

    function B0(t, l) {
        var e = mt;
        mt |= 2;
        var a = lr(),
            u = er();
        Dt !== t || nt !== l ? (hn = null, yn = Al() + 500, va(t, l)) : ra = _a(t, l);
        t: do try {
                if (St !== 0 && et !== null) {
                    l = et;
                    var n = dl;
                    l: switch (St) {
                        case 1:
                            St = 0, dl = null, ga(t, l, n, 1);
                            break;
                        case 2:
                        case 9:
                            if (hs(n)) {
                                St = 0, dl = null, ur(l);
                                break
                            }
                            l = function() {
                                St !== 2 && St !== 9 || Dt !== t || (St = 7), Ul(t)
                            }, n.then(l, l);
                            break t;
                        case 3:
                            St = 7;
                            break t;
                        case 4:
                            St = 5;
                            break t;
                        case 7:
                            hs(n) ? (St = 0, dl = null, ur(l)) : (St = 0, dl = null, ga(t, l, n, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (et.tag) {
                                case 26:
                                    i = et.memoizedState;
                                case 5:
                                case 27:
                                    var c = et;
                                    if (!i || Yr(i)) {
                                        St = 0, dl = null;
                                        var f = c.sibling;
                                        if (f !== null) et = f;
                                        else {
                                            var m = c.return;
                                            m !== null ? (et = m, gn(m)) : et = null
                                        }
                                        break l
                                    }
                            }
                            St = 0, dl = null, ga(t, l, n, 5);
                            break;
                        case 6:
                            St = 0, dl = null, ga(t, l, n, 6);
                            break;
                        case 8:
                            xc(), Nt = 6;
                            break t;
                        default:
                            throw Error(x(462))
                    }
                }
                Y0();
                break
            } catch (_) {
                tr(t, _)
            }
            while (!0);
            return Bl = Re = null, T.H = a, T.A = u, mt = e, et !== null ? 0 : (Dt = null, nt = 0, Vu(), Nt)
    }

    function Y0() {
        for (; et !== null && !cd();) ar(et)
    }

    function ar(t) {
        var l = Mo(t.alternate, t, Kl);
        t.memoizedProps = t.pendingProps, l === null ? gn(t) : et = l
    }

    function ur(t) {
        var l = t,
            e = l.alternate;
        switch (l.tag) {
            case 15:
            case 0:
                l = Eo(e, l, l.pendingProps, l.type, void 0, nt);
                break;
            case 11:
                l = Eo(e, l, l.pendingProps, l.type.render, l.ref, nt);
                break;
            case 5:
                Bi(l);
            default:
                Uo(e, l), l = et = us(l, Kl), l = Mo(e, l, Kl)
        }
        t.memoizedProps = t.pendingProps, l === null ? gn(t) : et = l
    }

    function ga(t, l, e, a) {
        Bl = Re = null, Bi(l), ca = null, Fa = 0;
        var u = l.return;
        try {
            if (O0(t, u, l, e, nt)) {
                Nt = 1, cn(t, ml(e, t.current)), et = null;
                return
            }
        } catch (n) {
            if (u !== null) throw et = u, n;
            Nt = 1, cn(t, ml(e, t.current)), et = null;
            return
        }
        l.flags & 32768 ? (dt || a === 1 ? t = !0 : ra || (nt & 536870912) !== 0 ? t = !1 : (ce = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = xl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nr(l, t)) : gn(l)
    }

    function gn(t) {
        var l = t;
        do {
            if ((l.flags & 32768) !== 0) {
                nr(l, ce);
                return
            }
            t = l.return;
            var e = M0(l.alternate, l, Kl);
            if (e !== null) {
                et = e;
                return
            }
            if (l = l.sibling, l !== null) {
                et = l;
                return
            }
            et = l = t
        } while (l !== null);
        Nt === 0 && (Nt = 5)
    }

    function nr(t, l) {
        do {
            var e = j0(t.alternate, t);
            if (e !== null) {
                e.flags &= 32767, et = e;
                return
            }
            if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
                et = t;
                return
            }
            et = t = e
        } while (t !== null);
        Nt = 6, et = null
    }

    function ir(t, l, e, a, u, n, i, c, f) {
        t.cancelPendingCommit = null;
        do mn(); while (Wt !== 0);
        if ((mt & 6) !== 0) throw Error(x(327));
        if (l !== null) {
            if (l === t.current) throw Error(x(177));
            if (n = l.lanes | l.childLanes, n |= yi, md(t, e, n, i, c, f), t === Dt && (et = Dt = null, nt = 0), ya = l, oe = t, ha = e, Sc = n, bc = u, $o = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Q0(xu, function() {
                    return rr(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
                a = T.T, T.T = null, u = M.p, M.p = 2, i = mt, mt |= 4;
                try {
                    U0(t, l, e)
                } finally {
                    mt = i, M.p = u, T.T = a
                }
            }
            Wt = 1, cr(), fr(), sr()
        }
    }

    function cr() {
        if (Wt === 1) {
            Wt = 0;
            var t = oe,
                l = ya,
                e = (l.flags & 13878) !== 0;
            if ((l.subtreeFlags & 13878) !== 0 || e) {
                e = T.T, T.T = null;
                var a = M.p;
                M.p = 2;
                var u = mt;
                mt |= 4;
                try {
                    Qo(l, t);
                    var n = Cc,
                        i = kf(t.containerInfo),
                        c = n.focusedElem,
                        f = n.selectionRange;
                    if (i !== c && c && c.ownerDocument && Jf(c.ownerDocument.documentElement, c)) {
                        if (f !== null && fi(c)) {
                            var m = f.start,
                                _ = f.end;
                            if (_ === void 0 && (_ = m), "selectionStart" in c) c.selectionStart = m, c.selectionEnd = Math.min(_, c.value.length);
                            else {
                                var A = c.ownerDocument || document,
                                    S = A && A.defaultView || window;
                                if (S.getSelection) {
                                    var p = S.getSelection(),
                                        Q = c.textContent.length,
                                        Z = Math.min(f.start, Q),
                                        xt = f.end === void 0 ? Z : Math.min(f.end, Q);
                                    !p.extend && Z > xt && (i = xt, xt = Z, Z = i);
                                    var h = Kf(c, Z),
                                        r = Kf(c, xt);
                                    if (h && r && (p.rangeCount !== 1 || p.anchorNode !== h.node || p.anchorOffset !== h.offset || p.focusNode !== r.node || p.focusOffset !== r.offset)) {
                                        var g = A.createRange();
                                        g.setStart(h.node, h.offset), p.removeAllRanges(), Z > xt ? (p.addRange(g), p.extend(r.node, r.offset)) : (g.setEnd(r.node, r.offset), p.addRange(g))
                                    }
                                }
                            }
                        }
                        for (A = [], p = c; p = p.parentNode;) p.nodeType === 1 && A.push({
                            element: p,
                            left: p.scrollLeft,
                            top: p.scrollTop
                        });
                        for (typeof c.focus == "function" && c.focus(), c = 0; c < A.length; c++) {
                            var D = A[c];
                            D.element.scrollLeft = D.left, D.element.scrollTop = D.top
                        }
                    }
                    Rn = !!Hc, Cc = Hc = null
                } finally {
                    mt = u, M.p = a, T.T = e
                }
            }
            t.current = l, Wt = 2
        }
    }

    function fr() {
        if (Wt === 2) {
            Wt = 0;
            var t = oe,
                l = ya,
                e = (l.flags & 8772) !== 0;
            if ((l.subtreeFlags & 8772) !== 0 || e) {
                e = T.T, T.T = null;
                var a = M.p;
                M.p = 2;
                var u = mt;
                mt |= 4;
                try {
                    Yo(t, l.alternate, l)
                } finally {
                    mt = u, M.p = a, T.T = e
                }
            }
            Wt = 3
        }
    }

    function sr() {
        if (Wt === 4 || Wt === 3) {
            Wt = 0, fd();
            var t = oe,
                l = ya,
                e = ha,
                a = $o;
            (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0, ya = oe = null, or(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (se = null), Zn(e), l = l.stateNode, il && typeof il.onCommitFiberRoot == "function") try {
                il.onCommitFiberRoot(Ta, l, void 0, (l.current.flags & 128) === 128)
            } catch {}
            if (a !== null) {
                l = T.T, u = M.p, M.p = 2, T.T = null;
                try {
                    for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
                        var c = a[i];
                        n(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    T.T = l, M.p = u
                }
            }(ha & 3) !== 0 && mn(), Ul(t), u = t.pendingLanes, (e & 4194090) !== 0 && (u & 42) !== 0 ? t === pc ? iu++ : (iu = 0, pc = t) : iu = 0, cu(0)
        }
    }

    function or(t, l) {
        (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Ga(l)))
    }

    function mn(t) {
        return cr(), fr(), sr(), rr()
    }

    function rr() {
        if (Wt !== 5) return !1;
        var t = oe,
            l = Sc;
        Sc = 0;
        var e = Zn(ha),
            a = T.T,
            u = M.p;
        try {
            M.p = 32 > e ? 32 : e, T.T = null, e = bc, bc = null;
            var n = oe,
                i = ha;
            if (Wt = 0, ya = oe = null, ha = 0, (mt & 6) !== 0) throw Error(x(331));
            var c = mt;
            if (mt |= 4, ko(n.current), Lo(n, n.current, i, e), mt = c, cu(0, !1), il && typeof il.onPostCommitFiberRoot == "function") try {
                il.onPostCommitFiberRoot(Ta, n)
            } catch {}
            return !0
        } finally {
            M.p = u, T.T = a, or(t, l)
        }
    }

    function dr(t, l, e) {
        l = ml(e, l), l = Ii(t.stateNode, l, 2), t = te(t, l, 2), t !== null && (Ea(t, 2), Ul(t))
    }

    function _t(t, l, e) {
        if (t.tag === 3) dr(t, t, e);
        else
            for (; l !== null;) {
                if (l.tag === 3) {
                    dr(l, t, e);
                    break
                } else if (l.tag === 1) {
                    var a = l.stateNode;
                    if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (se === null || !se.has(a))) {
                        t = ml(e, t), e = go(2), a = te(l, e, 2), a !== null && (mo(e, a, l, t), Ea(a, 2), Ul(a));
                        break
                    }
                }
                l = l.return
            }
    }

    function Ec(t, l, e) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new C0;
            var u = new Set;
            a.set(l, u)
        } else u = a.get(l), u === void 0 && (u = new Set, a.set(l, u));
        u.has(e) || (hc = !0, u.add(e), t = G0.bind(null, t, l, e), l.then(t, t))
    }

    function G0(t, l, e) {
        var a = t.pingCache;
        a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Dt === t && (nt & e) === e && (Nt === 4 || Nt === 3 && (nt & 62914560) === nt && 300 > Al() - mc ? (mt & 2) === 0 && va(t, 0) : vc |= e, da === nt && (da = 0)), Ul(t)
    }

    function yr(t, l) {
        l === 0 && (l = ff()), t = Fe(t, l), t !== null && (Ea(t, l), Ul(t))
    }

    function Z0(t) {
        var l = t.memoizedState,
            e = 0;
        l !== null && (e = l.retryLane), yr(t, e)
    }

    function X0(t, l) {
        var e = 0;
        switch (t.tag) {
            case 13:
                var a = t.stateNode,
                    u = t.memoizedState;
                u !== null && (e = u.retryLane);
                break;
            case 19:
                a = t.stateNode;
                break;
            case 22:
                a = t.stateNode._retryCache;
                break;
            default:
                throw Error(x(314))
        }
        a !== null && a.delete(l), yr(t, e)
    }

    function Q0(t, l) {
        return qn(t, l)
    }
    var Sn = null,
        ma = null,
        zc = !1,
        bn = !1,
        Dc = !1,
        Ve = 0;

    function Ul(t) {
        t !== ma && t.next === null && (ma === null ? Sn = ma = t : ma = ma.next = t), bn = !0, zc || (zc = !0, L0())
    }

    function cu(t, l) {
        if (!Dc && bn) {
            Dc = !0;
            do
                for (var e = !1, a = Sn; a !== null;) {
                    if (t !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var n = 0;
                        else {
                            var i = a.suspendedLanes,
                                c = a.pingedLanes;
                            n = (1 << 31 - cl(42 | t) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (e = !0, mr(a, n))
                    } else n = nt, n = Eu(a, a === Dt ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || _a(a, n) || (e = !0, mr(a, n));
                    a = a.next
                }
            while (e);
            Dc = !1
        }
    }

    function w0() {
        hr()
    }

    function hr() {
        bn = zc = !1;
        var t = 0;
        Ve !== 0 && (P0() && (t = Ve), Ve = 0);
        for (var l = Al(), e = null, a = Sn; a !== null;) {
            var u = a.next,
                n = vr(a, l);
            n === 0 ? (a.next = null, e === null ? Sn = u : e.next = u, u === null && (ma = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (bn = !0)), a = u
        }
        cu(t)
    }

    function vr(t, l) {
        for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n;) {
            var i = 31 - cl(n),
                c = 1 << i,
                f = u[i];
            f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = gd(c, l)) : f <= l && (t.expiredLanes |= c), n &= ~c
        }
        if (l = Dt, e = nt, e = Eu(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, e === 0 || t === l && (St === 2 || St === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && Bn(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((e & 3) === 0 || _a(t, e)) {
            if (l = e & -e, l === t.callbackPriority) return l;
            switch (a !== null && Bn(a), Zn(e)) {
                case 2:
                case 8:
                    e = uf;
                    break;
                case 32:
                    e = xu;
                    break;
                case 268435456:
                    e = nf;
                    break;
                default:
                    e = xu
            }
            return a = gr.bind(null, t), e = qn(e, a), t.callbackPriority = l, t.callbackNode = e, l
        }
        return a !== null && a !== null && Bn(a), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function gr(t, l) {
        if (Wt !== 0 && Wt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var e = t.callbackNode;
        if (mn() && t.callbackNode !== e) return null;
        var a = nt;
        return a = Eu(t, t === Dt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Io(t, a, l), vr(t, Al()), t.callbackNode != null && t.callbackNode === e ? gr.bind(null, t) : null)
    }

    function mr(t, l) {
        if (mn()) return null;
        Io(t, l, !0)
    }

    function L0() {
        ly(function() {
            (mt & 6) !== 0 ? qn(af, w0) : hr()
        })
    }

    function Ac() {
        return Ve === 0 && (Ve = cf()), Ve
    }

    function Sr(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ru("" + t)
    }

    function br(t, l) {
        var e = l.ownerDocument.createElement("input");
        return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t
    }

    function K0(t, l, e, a, u) {
        if (l === "submit" && e && e.stateNode === u) {
            var n = Sr((u[ll] || null).action),
                i = a.submitter;
            i && (l = (l = i[ll] || null) ? Sr(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
            var c = new Nu("action", "action", null, a, u);
            t.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Ve !== 0) {
                                var f = i ? br(u, i) : new FormData(u);
                                Ji(e, {
                                    pending: !0,
                                    data: f,
                                    method: u.method,
                                    action: n
                                }, null, f)
                            }
                        } else typeof n == "function" && (c.preventDefault(), f = i ? br(u, i) : new FormData(u), Ji(e, {
                            pending: !0,
                            data: f,
                            method: u.method,
                            action: n
                        }, n, f))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Oc = 0; Oc < di.length; Oc++) {
        var Rc = di[Oc],
            J0 = Rc.toLowerCase(),
            k0 = Rc[0].toUpperCase() + Rc.slice(1);
        El(J0, "on" + k0)
    }
    El(Ff, "onAnimationEnd"), El(If, "onAnimationIteration"), El(Pf, "onAnimationStart"), El("dblclick", "onDoubleClick"), El("focusin", "onFocus"), El("focusout", "onBlur"), El(r0, "onTransitionRun"), El(d0, "onTransitionStart"), El(y0, "onTransitionCancel"), El(ts, "onTransitionEnd"), Ze("onMouseEnter", ["mouseout", "mouseover"]), Ze("onMouseLeave", ["mouseout", "mouseover"]), Ze("onPointerEnter", ["pointerout", "pointerover"]), Ze("onPointerLeave", ["pointerout", "pointerover"]), pe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), pe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), pe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), pe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), pe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var fu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        W0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fu));

    function pr(t, l) {
        l = (l & 4) !== 0;
        for (var e = 0; e < t.length; e++) {
            var a = t[e],
                u = a.event;
            a = a.listeners;
            t: {
                var n = void 0;
                if (l)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var c = a[i],
                            f = c.instance,
                            m = c.currentTarget;
                        if (c = c.listener, f !== n && u.isPropagationStopped()) break t;
                        n = c, u.currentTarget = m;
                        try {
                            n(u)
                        } catch (_) {
                            nn(_)
                        }
                        u.currentTarget = null, n = f
                    } else
                        for (i = 0; i < a.length; i++) {
                            if (c = a[i], f = c.instance, m = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped()) break t;
                            n = c, u.currentTarget = m;
                            try {
                                n(u)
                            } catch (_) {
                                nn(_)
                            }
                            u.currentTarget = null, n = f
                        }
            }
        }
    }

    function at(t, l) {
        var e = l[Xn];
        e === void 0 && (e = l[Xn] = new Set);
        var a = t + "__bubble";
        e.has(a) || (xr(l, t, 2, !1), e.add(a))
    }

    function Mc(t, l, e) {
        var a = 0;
        l && (a |= 4), xr(e, t, a, l)
    }
    var pn = "_reactListening" + Math.random().toString(36).slice(2);

    function jc(t) {
        if (!t[pn]) {
            t[pn] = !0, yf.forEach(function(e) {
                e !== "selectionchange" && (W0.has(e) || Mc(e, !1, t), Mc(e, !0, t))
            });
            var l = t.nodeType === 9 ? t : t.ownerDocument;
            l === null || l[pn] || (l[pn] = !0, Mc("selectionchange", !1, l))
        }
    }

    function xr(t, l, e, a) {
        switch (Lr(l)) {
            case 2:
                var u = Ty;
                break;
            case 8:
                u = _y;
                break;
            default:
                u = Lc
        }
        e = u.bind(null, l, e, t), u = void 0, !Pn || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(l, e, {
            capture: !0,
            passive: u
        }) : t.addEventListener(l, e, !0) : u !== void 0 ? t.addEventListener(l, e, {
            passive: u
        }) : t.addEventListener(l, e, !1)
    }

    function Uc(t, l, e, a, u) {
        var n = a;
        if ((l & 1) === 0 && (l & 2) === 0 && a !== null) t: for (;;) {
            if (a === null) return;
            var i = a.tag;
            if (i === 3 || i === 4) {
                var c = a.stateNode.containerInfo;
                if (c === u) break;
                if (i === 4)
                    for (i = a.return; i !== null;) {
                        var f = i.tag;
                        if ((f === 3 || f === 4) && i.stateNode.containerInfo === u) return;
                        i = i.return
                    }
                for (; c !== null;) {
                    if (i = Be(c), i === null) return;
                    if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                        a = n = i;
                        continue t
                    }
                    c = c.parentNode
                }
            }
            a = a.return
        }
        Af(function() {
            var m = n,
                _ = Fn(e),
                A = [];
            t: {
                var S = ls.get(t);
                if (S !== void 0) {
                    var p = Nu,
                        Q = t;
                    switch (t) {
                        case "keypress":
                            if (ju(e) === 0) break t;
                        case "keydown":
                        case "keyup":
                            p = Qd;
                            break;
                        case "focusin":
                            Q = "focus", p = ai;
                            break;
                        case "focusout":
                            Q = "blur", p = ai;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            p = ai;
                            break;
                        case "click":
                            if (e.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            p = Mf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            p = jd;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            p = Kd;
                            break;
                        case Ff:
                        case If:
                        case Pf:
                            p = Hd;
                            break;
                        case ts:
                            p = kd;
                            break;
                        case "scroll":
                        case "scrollend":
                            p = Rd;
                            break;
                        case "wheel":
                            p = $d;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            p = Vd;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            p = Uf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            p = Id
                    }
                    var Z = (l & 4) !== 0,
                        xt = !Z && (t === "scroll" || t === "scrollend"),
                        h = Z ? S !== null ? S + "Capture" : null : S;
                    Z = [];
                    for (var r = m, g; r !== null;) {
                        var D = r;
                        if (g = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || g === null || h === null || (D = Aa(r, h), D != null && Z.push(su(r, D, g))), xt) break;
                        r = r.return
                    }
                    0 < Z.length && (S = new p(S, Q, null, e, _), A.push({
                        event: S,
                        listeners: Z
                    }))
                }
            }
            if ((l & 7) === 0) {
                t: {
                    if (S = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", S && e !== $n && (Q = e.relatedTarget || e.fromElement) && (Be(Q) || Q[qe])) break t;
                    if ((p || S) && (S = _.window === _ ? _ : (S = _.ownerDocument) ? S.defaultView || S.parentWindow : window, p ? (Q = e.relatedTarget || e.toElement, p = m, Q = Q ? Be(Q) : null, Q !== null && (xt = J(Q), Z = Q.tag, Q !== xt || Z !== 5 && Z !== 27 && Z !== 6) && (Q = null)) : (p = null, Q = m), p !== Q)) {
                        if (Z = Mf, D = "onMouseLeave", h = "onMouseEnter", r = "mouse", (t === "pointerout" || t === "pointerover") && (Z = Uf, D = "onPointerLeave", h = "onPointerEnter", r = "pointer"), xt = p == null ? S : Da(p), g = Q == null ? S : Da(Q), S = new Z(D, r + "leave", p, e, _), S.target = xt, S.relatedTarget = g, D = null, Be(_) === m && (Z = new Z(h, r + "enter", Q, e, _), Z.target = g, Z.relatedTarget = xt, D = Z), xt = D, p && Q) l: {
                            for (Z = p, h = Q, r = 0, g = Z; g; g = Sa(g)) r++;
                            for (g = 0, D = h; D; D = Sa(D)) g++;
                            for (; 0 < r - g;) Z = Sa(Z),
                            r--;
                            for (; 0 < g - r;) h = Sa(h),
                            g--;
                            for (; r--;) {
                                if (Z === h || h !== null && Z === h.alternate) break l;
                                Z = Sa(Z), h = Sa(h)
                            }
                            Z = null
                        }
                        else Z = null;
                        p !== null && Tr(A, S, p, Z, !1), Q !== null && xt !== null && Tr(A, xt, Q, Z, !0)
                    }
                }
                t: {
                    if (S = m ? Da(m) : window, p = S.nodeName && S.nodeName.toLowerCase(), p === "select" || p === "input" && S.type === "file") var q = Gf;
                    else if (Bf(S))
                        if (Zf) q = f0;
                        else {
                            q = i0;
                            var lt = n0
                        }
                    else p = S.nodeName,
                    !p || p.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? m && Wn(m.elementType) && (q = Gf) : q = c0;
                    if (q && (q = q(t, m))) {
                        Yf(A, q, e, _);
                        break t
                    }
                    lt && lt(t, S, m),
                    t === "focusout" && m && S.type === "number" && m.memoizedProps.value != null && kn(S, "number", S.value)
                }
                switch (lt = m ? Da(m) : window, t) {
                    case "focusin":
                        (Bf(lt) || lt.contentEditable === "true") && (ke = lt, si = m, Ca = null);
                        break;
                    case "focusout":
                        Ca = si = ke = null;
                        break;
                    case "mousedown":
                        oi = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        oi = !1, Wf(A, e, _);
                        break;
                    case "selectionchange":
                        if (o0) break;
                    case "keydown":
                    case "keyup":
                        Wf(A, e, _)
                }
                var G;
                if (ni) t: {
                    switch (t) {
                        case "compositionstart":
                            var X = "onCompositionStart";
                            break t;
                        case "compositionend":
                            X = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            X = "onCompositionUpdate";
                            break t
                    }
                    X = void 0
                }
                else Je ? Vf(t, e) && (X = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (X = "onCompositionStart");X && (Nf && e.locale !== "ko" && (Je || X !== "onCompositionStart" ? X === "onCompositionEnd" && Je && (G = Of()) : ($l = _, ti = "value" in $l ? $l.value : $l.textContent, Je = !0)), lt = xn(m, X), 0 < lt.length && (X = new jf(X, t, null, e, _), A.push({
                    event: X,
                    listeners: lt
                }), G ? X.data = G : (G = qf(e), G !== null && (X.data = G)))),
                (G = t0 ? l0(t, e) : e0(t, e)) && (X = xn(m, "onBeforeInput"), 0 < X.length && (lt = new jf("onBeforeInput", "beforeinput", null, e, _), A.push({
                    event: lt,
                    listeners: X
                }), lt.data = G)),
                K0(A, t, m, e, _)
            }
            pr(A, l)
        })
    }

    function su(t, l, e) {
        return {
            instance: t,
            listener: l,
            currentTarget: e
        }
    }

    function xn(t, l) {
        for (var e = l + "Capture", a = []; t !== null;) {
            var u = t,
                n = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Aa(t, e), u != null && a.unshift(su(t, u, n)), u = Aa(t, l), u != null && a.push(su(t, u, n))), t.tag === 3) return a;
            t = t.return
        }
        return []
    }

    function Sa(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function Tr(t, l, e, a, u) {
        for (var n = l._reactName, i = []; e !== null && e !== a;) {
            var c = e,
                f = c.alternate,
                m = c.stateNode;
            if (c = c.tag, f !== null && f === a) break;
            c !== 5 && c !== 26 && c !== 27 || m === null || (f = m, u ? (m = Aa(e, n), m != null && i.unshift(su(e, m, f))) : u || (m = Aa(e, n), m != null && i.push(su(e, m, f)))), e = e.return
        }
        i.length !== 0 && t.push({
            event: l,
            listeners: i
        })
    }
    var $0 = /\r\n?/g,
        F0 = /\u0000|\uFFFD/g;

    function _r(t) {
        return (typeof t == "string" ? t : "" + t).replace($0, `
`).replace(F0, "")
    }

    function Er(t, l) {
        return l = _r(l), _r(t) === l
    }

    function Tn() {}

    function pt(t, l, e, a, u, n) {
        switch (e) {
            case "children":
                typeof a == "string" ? l === "body" || l === "textarea" && a === "" || we(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && we(t, "" + a);
                break;
            case "className":
                Du(t, "class", a);
                break;
            case "tabIndex":
                Du(t, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Du(t, e, a);
                break;
            case "style":
                zf(t, a, n);
                break;
            case "data":
                if (l !== "object") {
                    Du(t, "data", a);
                    break
                }
            case "src":
            case "href":
                if (a === "" && (l !== "a" || e !== "href")) {
                    t.removeAttribute(e);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    t.removeAttribute(e);
                    break
                }
                a = Ru("" + a), t.setAttribute(e, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof n == "function" && (e === "formAction" ? (l !== "input" && pt(t, l, "name", u.name, u, null), pt(t, l, "formEncType", u.formEncType, u, null), pt(t, l, "formMethod", u.formMethod, u, null), pt(t, l, "formTarget", u.formTarget, u, null)) : (pt(t, l, "encType", u.encType, u, null), pt(t, l, "method", u.method, u, null), pt(t, l, "target", u.target, u, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    t.removeAttribute(e);
                    break
                }
                a = Ru("" + a), t.setAttribute(e, a);
                break;
            case "onClick":
                a != null && (t.onclick = Tn);
                break;
            case "onScroll":
                a != null && at("scroll", t);
                break;
            case "onScrollEnd":
                a != null && at("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(x(61));
                    if (e = a.__html, e != null) {
                        if (u.children != null) throw Error(x(60));
                        t.innerHTML = e
                    }
                }
                break;
            case "multiple":
                t.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "muted":
                t.muted = a && typeof a != "function" && typeof a != "symbol";
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
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                e = Ru("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
                a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
                break;
            case "capture":
            case "download":
                a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
                break;
            case "rowSpan":
            case "start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
                break;
            case "popover":
                at("beforetoggle", t), at("toggle", t), zu(t, "popover", a);
                break;
            case "xlinkActuate":
                Nl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                Nl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                Nl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                Nl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                Nl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                Nl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                Nl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                Nl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                Nl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                zu(t, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Ad.get(e) || e, zu(t, e, a))
        }
    }

    function Nc(t, l, e, a, u, n) {
        switch (e) {
            case "style":
                zf(t, a, n);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(x(61));
                    if (e = a.__html, e != null) {
                        if (u.children != null) throw Error(x(60));
                        t.innerHTML = e
                    }
                }
                break;
            case "children":
                typeof a == "string" ? we(t, a) : (typeof a == "number" || typeof a == "bigint") && we(t, "" + a);
                break;
            case "onScroll":
                a != null && at("scroll", t);
                break;
            case "onScrollEnd":
                a != null && at("scrollend", t);
                break;
            case "onClick":
                a != null && (t.onclick = Tn);
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
                if (!hf.hasOwnProperty(e)) t: {
                    if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[ll] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
                        typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
                        break t
                    }
                    e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : zu(t, e, a)
                }
        }
    }

    function $t(t, l, e) {
        switch (l) {
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
                at("error", t), at("load", t);
                var a = !1,
                    u = !1,
                    n;
                for (n in e)
                    if (e.hasOwnProperty(n)) {
                        var i = e[n];
                        if (i != null) switch (n) {
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(x(137, l));
                            default:
                                pt(t, l, n, i, e, null)
                        }
                    }
                u && pt(t, l, "srcSet", e.srcSet, e, null), a && pt(t, l, "src", e.src, e, null);
                return;
            case "input":
                at("invalid", t);
                var c = n = i = u = null,
                    f = null,
                    m = null;
                for (a in e)
                    if (e.hasOwnProperty(a)) {
                        var _ = e[a];
                        if (_ != null) switch (a) {
                            case "name":
                                u = _;
                                break;
                            case "type":
                                i = _;
                                break;
                            case "checked":
                                f = _;
                                break;
                            case "defaultChecked":
                                m = _;
                                break;
                            case "value":
                                n = _;
                                break;
                            case "defaultValue":
                                c = _;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (_ != null) throw Error(x(137, l));
                                break;
                            default:
                                pt(t, l, a, _, e, null)
                        }
                    }
                xf(t, n, c, f, m, i, u, !1), Au(t);
                return;
            case "select":
                at("invalid", t), a = i = n = null;
                for (u in e)
                    if (e.hasOwnProperty(u) && (c = e[u], c != null)) switch (u) {
                        case "value":
                            n = c;
                            break;
                        case "defaultValue":
                            i = c;
                            break;
                        case "multiple":
                            a = c;
                        default:
                            pt(t, l, u, c, e, null)
                    }
                l = n, e = i, t.multiple = !!a, l != null ? Qe(t, !!a, l, !1) : e != null && Qe(t, !!a, e, !0);
                return;
            case "textarea":
                at("invalid", t), n = u = a = null;
                for (i in e)
                    if (e.hasOwnProperty(i) && (c = e[i], c != null)) switch (i) {
                        case "value":
                            a = c;
                            break;
                        case "defaultValue":
                            u = c;
                            break;
                        case "children":
                            n = c;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (c != null) throw Error(x(91));
                            break;
                        default:
                            pt(t, l, i, c, e, null)
                    }
                _f(t, a, u, n), Au(t);
                return;
            case "option":
                for (f in e)
                    if (e.hasOwnProperty(f) && (a = e[f], a != null)) switch (f) {
                        case "selected":
                            t.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            pt(t, l, f, a, e, null)
                    }
                return;
            case "dialog":
                at("beforetoggle", t), at("toggle", t), at("cancel", t), at("close", t);
                break;
            case "iframe":
            case "object":
                at("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < fu.length; a++) at(fu[a], t);
                break;
            case "image":
                at("error", t), at("load", t);
                break;
            case "details":
                at("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                at("error", t), at("load", t);
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
                for (m in e)
                    if (e.hasOwnProperty(m) && (a = e[m], a != null)) switch (m) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(x(137, l));
                        default:
                            pt(t, l, m, a, e, null)
                    }
                return;
            default:
                if (Wn(l)) {
                    for (_ in e) e.hasOwnProperty(_) && (a = e[_], a !== void 0 && Nc(t, l, _, a, e, void 0));
                    return
                }
        }
        for (c in e) e.hasOwnProperty(c) && (a = e[c], a != null && pt(t, l, c, a, e, null))
    }

    function I0(t, l, e, a) {
        switch (l) {
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
                var u = null,
                    n = null,
                    i = null,
                    c = null,
                    f = null,
                    m = null,
                    _ = null;
                for (p in e) {
                    var A = e[p];
                    if (e.hasOwnProperty(p) && A != null) switch (p) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            f = A;
                        default:
                            a.hasOwnProperty(p) || pt(t, l, p, null, a, A)
                    }
                }
                for (var S in a) {
                    var p = a[S];
                    if (A = e[S], a.hasOwnProperty(S) && (p != null || A != null)) switch (S) {
                        case "type":
                            n = p;
                            break;
                        case "name":
                            u = p;
                            break;
                        case "checked":
                            m = p;
                            break;
                        case "defaultChecked":
                            _ = p;
                            break;
                        case "value":
                            i = p;
                            break;
                        case "defaultValue":
                            c = p;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (p != null) throw Error(x(137, l));
                            break;
                        default:
                            p !== A && pt(t, l, S, p, a, A)
                    }
                }
                Jn(t, i, c, f, m, _, n, u);
                return;
            case "select":
                p = i = c = S = null;
                for (n in e)
                    if (f = e[n], e.hasOwnProperty(n) && f != null) switch (n) {
                        case "value":
                            break;
                        case "multiple":
                            p = f;
                        default:
                            a.hasOwnProperty(n) || pt(t, l, n, null, a, f)
                    }
                for (u in a)
                    if (n = a[u], f = e[u], a.hasOwnProperty(u) && (n != null || f != null)) switch (u) {
                        case "value":
                            S = n;
                            break;
                        case "defaultValue":
                            c = n;
                            break;
                        case "multiple":
                            i = n;
                        default:
                            n !== f && pt(t, l, u, n, a, f)
                    }
                l = c, e = i, a = p, S != null ? Qe(t, !!e, S, !1) : !!a != !!e && (l != null ? Qe(t, !!e, l, !0) : Qe(t, !!e, e ? [] : "", !1));
                return;
            case "textarea":
                p = S = null;
                for (c in e)
                    if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c)) switch (c) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            pt(t, l, c, null, a, u)
                    }
                for (i in a)
                    if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null)) switch (i) {
                        case "value":
                            S = u;
                            break;
                        case "defaultValue":
                            p = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(x(91));
                            break;
                        default:
                            u !== n && pt(t, l, i, u, a, n)
                    }
                Tf(t, S, p);
                return;
            case "option":
                for (var Q in e)
                    if (S = e[Q], e.hasOwnProperty(Q) && S != null && !a.hasOwnProperty(Q)) switch (Q) {
                        case "selected":
                            t.selected = !1;
                            break;
                        default:
                            pt(t, l, Q, null, a, S)
                    }
                for (f in a)
                    if (S = a[f], p = e[f], a.hasOwnProperty(f) && S !== p && (S != null || p != null)) switch (f) {
                        case "selected":
                            t.selected = S && typeof S != "function" && typeof S != "symbol";
                            break;
                        default:
                            pt(t, l, f, S, a, p)
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
                for (var Z in e) S = e[Z], e.hasOwnProperty(Z) && S != null && !a.hasOwnProperty(Z) && pt(t, l, Z, null, a, S);
                for (m in a)
                    if (S = a[m], p = e[m], a.hasOwnProperty(m) && S !== p && (S != null || p != null)) switch (m) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (S != null) throw Error(x(137, l));
                            break;
                        default:
                            pt(t, l, m, S, a, p)
                    }
                return;
            default:
                if (Wn(l)) {
                    for (var xt in e) S = e[xt], e.hasOwnProperty(xt) && S !== void 0 && !a.hasOwnProperty(xt) && Nc(t, l, xt, void 0, a, S);
                    for (_ in a) S = a[_], p = e[_], !a.hasOwnProperty(_) || S === p || S === void 0 && p === void 0 || Nc(t, l, _, S, a, p);
                    return
                }
        }
        for (var h in e) S = e[h], e.hasOwnProperty(h) && S != null && !a.hasOwnProperty(h) && pt(t, l, h, null, a, S);
        for (A in a) S = a[A], p = e[A], !a.hasOwnProperty(A) || S === p || S == null && p == null || pt(t, l, A, S, a, p)
    }
    var Hc = null,
        Cc = null;

    function _n(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function zr(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Dr(t, l) {
        if (t === 0) switch (l) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && l === "foreignObject" ? 0 : t
    }

    function Vc(t, l) {
        return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null
    }
    var qc = null;

    function P0() {
        var t = window.event;
        return t && t.type === "popstate" ? t === qc ? !1 : (qc = t, !0) : (qc = null, !1)
    }
    var Ar = typeof setTimeout == "function" ? setTimeout : void 0,
        ty = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Or = typeof Promise == "function" ? Promise : void 0,
        ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof Or < "u" ? function(t) {
            return Or.resolve(null).then(t).catch(ey)
        } : Ar;

    function ey(t) {
        setTimeout(function() {
            throw t
        })
    }

    function de(t) {
        return t === "head"
    }

    function Rr(t, l) {
        var e = l,
            a = 0,
            u = 0;
        do {
            var n = e.nextSibling;
            if (t.removeChild(e), n && n.nodeType === 8)
                if (e = n.data, e === "/$") {
                    if (0 < a && 8 > a) {
                        e = a;
                        var i = t.ownerDocument;
                        if (e & 1 && ou(i.documentElement), e & 2 && ou(i.body), e & 4)
                            for (e = i.head, ou(e), i = e.firstChild; i;) {
                                var c = i.nextSibling,
                                    f = i.nodeName;
                                i[za] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = c
                            }
                    }
                    if (u === 0) {
                        t.removeChild(n), Su(l);
                        return
                    }
                    u--
                } else e === "$" || e === "$?" || e === "$!" ? u++ : a = e.charCodeAt(0) - 48;
            else a = 0;
            e = n
        } while (e);
        Su(l)
    }

    function Bc(t) {
        var l = t.firstChild;
        for (l && l.nodeType === 10 && (l = l.nextSibling); l;) {
            var e = l;
            switch (l = l.nextSibling, e.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Bc(e), Qn(e);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (e.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(e)
        }
    }

    function ay(t, l, e, a) {
        for (; t.nodeType === 1;) {
            var u = e;
            if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (a) {
                if (!t[za]) switch (l) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (l === "input" && t.type === "hidden") {
                var n = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && t.getAttribute("name") === n) return t
            } else return t;
            if (t = Dl(t.nextSibling), t === null) break
        }
        return null
    }

    function uy(t, l, e) {
        if (l === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Dl(t.nextSibling), t === null)) return null;
        return t
    }

    function Yc(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }

    function ny(t, l) {
        var e = t.ownerDocument;
        if (t.data !== "$?" || e.readyState === "complete") l();
        else {
            var a = function() {
                l(), e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a), t._reactRetry = a
        }
    }

    function Dl(t) {
        for (; t != null; t = t.nextSibling) {
            var l = t.nodeType;
            if (l === 1 || l === 3) break;
            if (l === 8) {
                if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F") break;
                if (l === "/$") return null
            }
        }
        return t
    }
    var Gc = null;

    function Mr(t) {
        t = t.previousSibling;
        for (var l = 0; t;) {
            if (t.nodeType === 8) {
                var e = t.data;
                if (e === "$" || e === "$!" || e === "$?") {
                    if (l === 0) return t;
                    l--
                } else e === "/$" && l++
            }
            t = t.previousSibling
        }
        return null
    }

    function jr(t, l, e) {
        switch (l = _n(e), t) {
            case "html":
                if (t = l.documentElement, !t) throw Error(x(452));
                return t;
            case "head":
                if (t = l.head, !t) throw Error(x(453));
                return t;
            case "body":
                if (t = l.body, !t) throw Error(x(454));
                return t;
            default:
                throw Error(x(451))
        }
    }

    function ou(t) {
        for (var l = t.attributes; l.length;) t.removeAttributeNode(l[0]);
        Qn(t)
    }
    var _l = new Map,
        Ur = new Set;

    function En(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Jl = M.d;
    M.d = {
        f: iy,
        r: cy,
        D: fy,
        C: sy,
        L: oy,
        m: ry,
        X: yy,
        S: dy,
        M: hy
    };

    function iy() {
        var t = Jl.f(),
            l = vn();
        return t || l
    }

    function cy(t) {
        var l = Ye(t);
        l !== null && l.tag === 5 && l.type === "form" ? Fs(l) : Jl.r(t)
    }
    var ba = typeof document > "u" ? null : document;

    function Nr(t, l, e) {
        var a = ba;
        if (a && typeof l == "string" && l) {
            var u = gl(l);
            u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), Ur.has(u) || (Ur.add(u), t = {
                rel: t,
                crossOrigin: e,
                href: l
            }, a.querySelector(u) === null && (l = a.createElement("link"), $t(l, "link", t), wt(l), a.head.appendChild(l)))
        }
    }

    function fy(t) {
        Jl.D(t), Nr("dns-prefetch", t, null)
    }

    function sy(t, l) {
        Jl.C(t, l), Nr("preconnect", t, l)
    }

    function oy(t, l, e) {
        Jl.L(t, l, e);
        var a = ba;
        if (a && t && l) {
            var u = 'link[rel="preload"][as="' + gl(l) + '"]';
            l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + gl(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + gl(e.imageSizes) + '"]')) : u += '[href="' + gl(t) + '"]';
            var n = u;
            switch (l) {
                case "style":
                    n = pa(t);
                    break;
                case "script":
                    n = xa(t)
            }
            _l.has(n) || (t = V({
                rel: "preload",
                href: l === "image" && e && e.imageSrcSet ? void 0 : t,
                as: l
            }, e), _l.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(ru(n)) || l === "script" && a.querySelector(du(n)) || (l = a.createElement("link"), $t(l, "link", t), wt(l), a.head.appendChild(l)))
        }
    }

    function ry(t, l) {
        Jl.m(t, l);
        var e = ba;
        if (e && t) {
            var a = l && typeof l.as == "string" ? l.as : "script",
                u = 'link[rel="modulepreload"][as="' + gl(a) + '"][href="' + gl(t) + '"]',
                n = u;
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    n = xa(t)
            }
            if (!_l.has(n) && (t = V({
                    rel: "modulepreload",
                    href: t
                }, l), _l.set(n, t), e.querySelector(u) === null)) {
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (e.querySelector(du(n))) return
                }
                a = e.createElement("link"), $t(a, "link", t), wt(a), e.head.appendChild(a)
            }
        }
    }

    function dy(t, l, e) {
        Jl.S(t, l, e);
        var a = ba;
        if (a && t) {
            var u = Ge(a).hoistableStyles,
                n = pa(t);
            l = l || "default";
            var i = u.get(n);
            if (!i) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(ru(n))) c.loading = 5;
                else {
                    t = V({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": l
                    }, e), (e = _l.get(n)) && Zc(t, e);
                    var f = i = a.createElement("link");
                    wt(f), $t(f, "link", t), f._p = new Promise(function(m, _) {
                        f.onload = m, f.onerror = _
                    }), f.addEventListener("load", function() {
                        c.loading |= 1
                    }), f.addEventListener("error", function() {
                        c.loading |= 2
                    }), c.loading |= 4, zn(i, l, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: c
                }, u.set(n, i)
            }
        }
    }

    function yy(t, l) {
        Jl.X(t, l);
        var e = ba;
        if (e && t) {
            var a = Ge(e).hoistableScripts,
                u = xa(t),
                n = a.get(u);
            n || (n = e.querySelector(du(u)), n || (t = V({
                src: t,
                async: !0
            }, l), (l = _l.get(u)) && Xc(t, l), n = e.createElement("script"), wt(n), $t(n, "link", t), e.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, a.set(u, n))
        }
    }

    function hy(t, l) {
        Jl.M(t, l);
        var e = ba;
        if (e && t) {
            var a = Ge(e).hoistableScripts,
                u = xa(t),
                n = a.get(u);
            n || (n = e.querySelector(du(u)), n || (t = V({
                src: t,
                async: !0,
                type: "module"
            }, l), (l = _l.get(u)) && Xc(t, l), n = e.createElement("script"), wt(n), $t(n, "link", t), e.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, a.set(u, n))
        }
    }

    function Hr(t, l, e, a) {
        var u = (u = j.current) ? En(u) : null;
        if (!u) throw Error(x(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof e.precedence == "string" && typeof e.href == "string" ? (l = pa(e.href), e = Ge(u).hoistableStyles, a = e.get(l), a || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, e.set(l, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                    t = pa(e.href);
                    var n = Ge(u).hoistableStyles,
                        i = n.get(t);
                    if (i || (u = u.ownerDocument || u, i = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, n.set(t, i), (n = u.querySelector(ru(t))) && !n._p && (i.instance = n, i.state.loading = 5), _l.has(t) || (e = {
                            rel: "preload",
                            as: "style",
                            href: e.href,
                            crossOrigin: e.crossOrigin,
                            integrity: e.integrity,
                            media: e.media,
                            hrefLang: e.hrefLang,
                            referrerPolicy: e.referrerPolicy
                        }, _l.set(t, e), n || vy(u, t, e, i.state))), l && a === null) throw Error(x(528, ""));
                    return i
                }
                if (l && a !== null) throw Error(x(529, ""));
                return null;
            case "script":
                return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = xa(e), e = Ge(u).hoistableScripts, a = e.get(l), a || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, e.set(l, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(x(444, t))
        }
    }

    function pa(t) {
        return 'href="' + gl(t) + '"'
    }

    function ru(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function Cr(t) {
        return V({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function vy(t, l, e, a) {
        t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
            return a.loading |= 1
        }), l.addEventListener("error", function() {
            return a.loading |= 2
        }), $t(l, "link", e), wt(l), t.head.appendChild(l))
    }

    function xa(t) {
        return '[src="' + gl(t) + '"]'
    }

    function du(t) {
        return "script[async]" + t
    }

    function Vr(t, l, e) {
        if (l.count++, l.instance === null) switch (l.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + gl(e.href) + '"]');
                if (a) return l.instance = a, wt(a), a;
                var u = V({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"), wt(a), $t(a, "style", u), zn(a, e.precedence, t), l.instance = a;
            case "stylesheet":
                u = pa(e.href);
                var n = t.querySelector(ru(u));
                if (n) return l.state.loading |= 4, l.instance = n, wt(n), n;
                a = Cr(e), (u = _l.get(u)) && Zc(a, u), n = (t.ownerDocument || t).createElement("link"), wt(n);
                var i = n;
                return i._p = new Promise(function(c, f) {
                    i.onload = c, i.onerror = f
                }), $t(n, "link", a), l.state.loading |= 4, zn(n, e.precedence, t), l.instance = n;
            case "script":
                return n = xa(e.src), (u = t.querySelector(du(n))) ? (l.instance = u, wt(u), u) : (a = e, (u = _l.get(n)) && (a = V({}, e), Xc(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), wt(u), $t(u, "link", a), t.head.appendChild(u), l.instance = u);
            case "void":
                return null;
            default:
                throw Error(x(443, l.type))
        } else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, zn(a, e.precedence, t));
        return l.instance
    }

    function zn(t, l, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.dataset.precedence === l) n = c;
            else if (n !== u) break
        }
        n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild))
    }

    function Zc(t, l) {
        t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title)
    }

    function Xc(t, l) {
        t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity)
    }
    var Dn = null;

    function qr(t, l, e) {
        if (Dn === null) {
            var a = new Map,
                u = Dn = new Map;
            u.set(e, a)
        } else u = Dn, a = u.get(e), a || (a = new Map, u.set(e, a));
        if (a.has(t)) return a;
        for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
            var n = e[u];
            if (!(n[za] || n[Ft] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(l) || "";
                i = t + i;
                var c = a.get(i);
                c ? c.push(n) : a.set(i, [n])
            }
        }
        return a
    }

    function Br(t, l, e) {
        t = t.ownerDocument || t, t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null)
    }

    function gy(t, l, e) {
        if (e === 1 || l.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
                return !0;
            case "link":
                if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
                switch (l.rel) {
                    case "stylesheet":
                        return t = l.disabled, typeof l.precedence == "string" && t == null;
                    default:
                        return !0
                }
            case "script":
                if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return !0
        }
        return !1
    }

    function Yr(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var yu = null;

    function my() {}

    function Sy(t, l, e) {
        if (yu === null) throw Error(x(475));
        var a = yu;
        if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var u = pa(e.href),
                    n = t.querySelector(ru(u));
                if (n) {
                    t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = An.bind(a), t.then(a, a)), l.state.loading |= 4, l.instance = n, wt(n);
                    return
                }
                n = t.ownerDocument || t, e = Cr(e), (u = _l.get(u)) && Zc(e, u), n = n.createElement("link"), wt(n);
                var i = n;
                i._p = new Promise(function(c, f) {
                    i.onload = c, i.onerror = f
                }), $t(n, "link", e), l.instance = n
            }
            a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (a.count++, l = An.bind(a), t.addEventListener("load", l), t.addEventListener("error", l))
        }
    }

    function by() {
        if (yu === null) throw Error(x(475));
        var t = yu;
        return t.stylesheets && t.count === 0 && Qc(t, t.stylesheets), 0 < t.count ? function(l) {
            var e = setTimeout(function() {
                if (t.stylesheets && Qc(t, t.stylesheets), t.unsuspend) {
                    var a = t.unsuspend;
                    t.unsuspend = null, a()
                }
            }, 6e4);
            return t.unsuspend = l,
                function() {
                    t.unsuspend = null, clearTimeout(e)
                }
        } : null
    }

    function An() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Qc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var On = null;

    function Qc(t, l) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, On = new Map, l.forEach(py, t), On = null, An.call(t))
    }

    function py(t, l) {
        if (!(l.state.loading & 4)) {
            var e = On.get(t);
            if (e) var a = e.get(null);
            else {
                e = new Map, On.set(t, e);
                for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i)
                }
                a && e.set(null, a)
            }
            u = l.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = An.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4
        }
    }
    var hu = {
        $$typeof: yt,
        Provider: null,
        Consumer: null,
        _currentValue: O,
        _currentValue2: O,
        _threadCount: 0
    };

    function xy(t, l, e, a, u, n, i, c) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yn(0), this.hiddenUpdates = Yn(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = new Map
    }

    function Gr(t, l, e, a, u, n, i, c, f, m, _, A) {
        return t = new xy(t, l, e, i, c, f, m, A), l = 1, n === !0 && (l |= 24), n = sl(3, null, null, l), t.current = n, n.stateNode = t, l = Ei(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: l
        }, Oi(n), t
    }

    function Zr(t) {
        return t ? (t = Ie, t) : Ie
    }

    function Xr(t, l, e, a, u, n) {
        u = Zr(u), a.context === null ? a.context = u : a.pendingContext = u, a = Pl(l), a.payload = {
            element: e
        }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = te(t, a, l), e !== null && (hl(e, t, l), wa(e, t, l))
    }

    function Qr(t, l) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var e = t.retryLane;
            t.retryLane = e !== 0 && e < l ? e : l
        }
    }

    function wc(t, l) {
        Qr(t, l), (t = t.alternate) && Qr(t, l)
    }

    function wr(t) {
        if (t.tag === 13) {
            var l = Fe(t, 67108864);
            l !== null && hl(l, t, 67108864), wc(t, 67108864)
        }
    }
    var Rn = !0;

    function Ty(t, l, e, a) {
        var u = T.T;
        T.T = null;
        var n = M.p;
        try {
            M.p = 2, Lc(t, l, e, a)
        } finally {
            M.p = n, T.T = u
        }
    }

    function _y(t, l, e, a) {
        var u = T.T;
        T.T = null;
        var n = M.p;
        try {
            M.p = 8, Lc(t, l, e, a)
        } finally {
            M.p = n, T.T = u
        }
    }

    function Lc(t, l, e, a) {
        if (Rn) {
            var u = Kc(a);
            if (u === null) Uc(t, l, a, Mn, e), Kr(t, a);
            else if (zy(u, t, l, e, a)) a.stopPropagation();
            else if (Kr(t, a), l & 4 && -1 < Ey.indexOf(t)) {
                for (; u !== null;) {
                    var n = Ye(u);
                    if (n !== null) switch (n.tag) {
                        case 3:
                            if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                var i = be(n.pendingLanes);
                                if (i !== 0) {
                                    var c = n;
                                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                                        var f = 1 << 31 - cl(i);
                                        c.entanglements[1] |= f, i &= ~f
                                    }
                                    Ul(n), (mt & 6) === 0 && (yn = Al() + 500, cu(0))
                                }
                            }
                            break;
                        case 13:
                            c = Fe(n, 2), c !== null && hl(c, n, 2), vn(), wc(n, 2)
                    }
                    if (n = Kc(a), n === null && Uc(t, l, a, Mn, e), n === u) break;
                    u = n
                }
                u !== null && a.stopPropagation()
            } else Uc(t, l, a, null, e)
        }
    }

    function Kc(t) {
        return t = Fn(t), Jc(t)
    }
    var Mn = null;

    function Jc(t) {
        if (Mn = null, t = Be(t), t !== null) {
            var l = J(t);
            if (l === null) t = null;
            else {
                var e = l.tag;
                if (e === 13) {
                    if (t = P(l), t !== null) return t;
                    t = null
                } else if (e === 3) {
                    if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
                    t = null
                } else l !== t && (t = null)
            }
        }
        return Mn = t, null
    }

    function Lr(t) {
        switch (t) {
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
                switch (sd()) {
                    case af:
                        return 2;
                    case uf:
                        return 8;
                    case xu:
                    case od:
                        return 32;
                    case nf:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var kc = !1,
        ye = null,
        he = null,
        ve = null,
        vu = new Map,
        gu = new Map,
        ge = [],
        Ey = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Kr(t, l) {
        switch (t) {
            case "focusin":
            case "focusout":
                ye = null;
                break;
            case "dragenter":
            case "dragleave":
                he = null;
                break;
            case "mouseover":
            case "mouseout":
                ve = null;
                break;
            case "pointerover":
            case "pointerout":
                vu.delete(l.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                gu.delete(l.pointerId)
        }
    }

    function mu(t, l, e, a, u, n) {
        return t === null || t.nativeEvent !== n ? (t = {
            blockedOn: l,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [u]
        }, l !== null && (l = Ye(l), l !== null && wr(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t)
    }

    function zy(t, l, e, a, u) {
        switch (l) {
            case "focusin":
                return ye = mu(ye, t, l, e, a, u), !0;
            case "dragenter":
                return he = mu(he, t, l, e, a, u), !0;
            case "mouseover":
                return ve = mu(ve, t, l, e, a, u), !0;
            case "pointerover":
                var n = u.pointerId;
                return vu.set(n, mu(vu.get(n) || null, t, l, e, a, u)), !0;
            case "gotpointercapture":
                return n = u.pointerId, gu.set(n, mu(gu.get(n) || null, t, l, e, a, u)), !0
        }
        return !1
    }

    function Jr(t) {
        var l = Be(t.target);
        if (l !== null) {
            var e = J(l);
            if (e !== null) {
                if (l = e.tag, l === 13) {
                    if (l = P(e), l !== null) {
                        t.blockedOn = l, Sd(t.priority, function() {
                            if (e.tag === 13) {
                                var a = yl();
                                a = Gn(a);
                                var u = Fe(e, a);
                                u !== null && hl(u, e, a), wc(e, a)
                            }
                        });
                        return
                    }
                } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function jn(t) {
        if (t.blockedOn !== null) return !1;
        for (var l = t.targetContainers; 0 < l.length;) {
            var e = Kc(t.nativeEvent);
            if (e === null) {
                e = t.nativeEvent;
                var a = new e.constructor(e.type, e);
                $n = a, e.target.dispatchEvent(a), $n = null
            } else return l = Ye(e), l !== null && wr(l), t.blockedOn = e, !1;
            l.shift()
        }
        return !0
    }

    function kr(t, l, e) {
        jn(t) && e.delete(l)
    }

    function Dy() {
        kc = !1, ye !== null && jn(ye) && (ye = null), he !== null && jn(he) && (he = null), ve !== null && jn(ve) && (ve = null), vu.forEach(kr), gu.forEach(kr)
    }

    function Un(t, l) {
        t.blockedOn === l && (t.blockedOn = null, kc || (kc = !0, U.unstable_scheduleCallback(U.unstable_NormalPriority, Dy)))
    }
    var Nn = null;

    function Wr(t) {
        Nn !== t && (Nn = t, U.unstable_scheduleCallback(U.unstable_NormalPriority, function() {
            Nn === t && (Nn = null);
            for (var l = 0; l < t.length; l += 3) {
                var e = t[l],
                    a = t[l + 1],
                    u = t[l + 2];
                if (typeof a != "function") {
                    if (Jc(a || e) === null) continue;
                    break
                }
                var n = Ye(e);
                n !== null && (t.splice(l, 3), l -= 3, Ji(n, {
                    pending: !0,
                    data: u,
                    method: e.method,
                    action: a
                }, a, u))
            }
        }))
    }

    function Su(t) {
        function l(f) {
            return Un(f, t)
        }
        ye !== null && Un(ye, t), he !== null && Un(he, t), ve !== null && Un(ve, t), vu.forEach(l), gu.forEach(l);
        for (var e = 0; e < ge.length; e++) {
            var a = ge[e];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < ge.length && (e = ge[0], e.blockedOn === null);) Jr(e), e.blockedOn === null && ge.shift();
        if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
            for (a = 0; a < e.length; a += 3) {
                var u = e[a],
                    n = e[a + 1],
                    i = u[ll] || null;
                if (typeof n == "function") i || Wr(e);
                else if (i) {
                    var c = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n, i = n[ll] || null) c = i.formAction;
                        else if (Jc(u) !== null) continue
                    } else c = i.action;
                    typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Wr(e)
                }
            }
    }

    function Wc(t) {
        this._internalRoot = t
    }
    Hn.prototype.render = Wc.prototype.render = function(t) {
        var l = this._internalRoot;
        if (l === null) throw Error(x(409));
        var e = l.current,
            a = yl();
        Xr(e, a, t, l, null, null)
    }, Hn.prototype.unmount = Wc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var l = t.containerInfo;
            Xr(t.current, 2, null, t, null, null), vn(), l[qe] = null
        }
    };

    function Hn(t) {
        this._internalRoot = t
    }
    Hn.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var l = rf();
            t = {
                blockedOn: null,
                target: t,
                priority: l
            };
            for (var e = 0; e < ge.length && l !== 0 && l < ge[e].priority; e++);
            ge.splice(e, 0, t), e === 0 && Jr(t)
        }
    };
    var $r = it.version;
    if ($r !== "19.1.0") throw Error(x(527, $r, "19.1.0"));
    M.findDOMNode = function(t) {
        var l = t._reactInternals;
        if (l === void 0) throw typeof t.render == "function" ? Error(x(188)) : (t = Object.keys(t).join(","), Error(x(268, t)));
        return t = N(l), t = t !== null ? z(t) : null, t = t === null ? null : t.stateNode, t
    };
    var Ay = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: T,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Cn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Cn.isDisabled && Cn.supportsFiber) try {
            Ta = Cn.inject(Ay), il = Cn
        } catch {}
    }
    return pu.createRoot = function(t, l) {
        if (!Y(t)) throw Error(x(299));
        var e = !1,
            a = "",
            u = ro,
            n = yo,
            i = ho,
            c = null;
        return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (c = l.unstable_transitionCallbacks)), l = Gr(t, 1, !1, null, null, e, a, u, n, i, c, null), t[qe] = l.current, jc(t), new Wc(l)
    }, pu.hydrateRoot = function(t, l, e) {
        if (!Y(t)) throw Error(x(299));
        var a = !1,
            u = "",
            n = ro,
            i = yo,
            c = ho,
            f = null,
            m = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (f = e.unstable_transitionCallbacks), e.formState !== void 0 && (m = e.formState)), l = Gr(t, 1, !0, l, e ? ? null, a, u, n, i, c, f, m), l.context = Zr(null), e = l.current, a = yl(), a = Gn(a), u = Pl(a), u.callback = null, te(e, u, a), e = a, l.current.lanes = e, Ea(l, e), Ul(l), t[qe] = l.current, jc(t), new Hn(l)
    }, pu.version = "19.1.0", pu
}
var id;

function qy() {
    if (id) return Ic.exports;
    id = 1;

    function U() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U)
        } catch (it) {
            console.error(it)
        }
    }
    return U(), Ic.exports = Vy(), Ic.exports
}
var By = qy();
const Se = ({
        size: U = 24,
        color: it = "white"
    }) => y.jsx("svg", {
        width: U,
        height: U,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: it,
        children: y.jsx("g", {
            fill: "none",
            fillRule: "evenodd",
            children: y.jsxs("g", {
                transform: "translate(1 1)",
                strokeWidth: "2",
                children: [y.jsx("circle", {
                    strokeOpacity: ".3",
                    cx: "18",
                    cy: "18",
                    r: "18"
                }), y.jsx("path", {
                    d: "M36 18c0-9.94-8.06-18-18-18",
                    children: y.jsx("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 18 18",
                        to: "360 18 18",
                        dur: "1s",
                        repeatCount: "indefinite"
                    })
                })]
            })
        })
    }),
    Yy = ({
        activeItem: U,
        digitCounts: it,
        maxItems: I,
        minItems: x,
        volatility: Y,
        secondMaxItems: J,
        token: P,
        secondMinItems: Et
    }) => {
        const [N, z] = R.useState([]), [V, tt] = R.useState(!1), [w, Rt] = R.useState("1000"), [$, Vt] = R.useState(null), [ft, Xt] = R.useState(""), [Mt, yt] = R.useState(1), [ht, L] = R.useState(1), [ct, zt] = R.useState({}), [k, vt] = R.useState(!1), [gt, Tt] = R.useState("1"), [ut, At] = R.useState("1"), [Yt, st] = R.useState(""), T = R.useRef(null), M = R.useMemo(() => {
            const v = N.filter(d => d % 2 === 0).length;
            return N.length ? v / N.length * 100 : 0
        }, [N]), O = R.useMemo(() => 100 - M, [M]);
        R.useEffect(() => {
            tt(!1), z([]);
            const v = 74892,
                d = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${v}`);
            T.current = d;
            let o;
            return d.onopen = () => {
                d.send(JSON.stringify({
                    authorize: P
                })), d.send(JSON.stringify({
                    ticks_history: Y,
                    granularity: 60,
                    adjust_start_time: 1,
                    count: Number(w),
                    end: "latest",
                    style: "ticks",
                    subscribe: 1
                })), o = setInterval(() => {
                    d.readyState === WebSocket.OPEN && d.send(JSON.stringify({
                        ping: 1
                    }))
                }, 3e4)
            }, d.onmessage = b => {
                var j;
                const E = JSON.parse(b.data);
                if (!(E != null && E.error)) {
                    if (E.msg_type === "history") {
                        const C = E.history.prices.map(K => {
                            var ot;
                            return K.toFixed((ot = E == null ? void 0 : E.tick) == null ? void 0 : ot.pip_size)
                        }).map(K => parseInt(K.replace(".", "").at(-1), 10));
                        z(C), tt(!0)
                    } else if (E.msg_type === "tick") {
                        const H = E.tick.quote.toFixed((j = E == null ? void 0 : E.tick) == null ? void 0 : j.pip_size);
                        Xt(H);
                        const C = parseInt(H.replace(".", "").at(-1), 10);
                        Vt(C), z(K => [...K.slice(-999), C])
                    } else if (E.msg_type === "proposal_open_contract") {
                        const H = E.proposal_open_contract;
                        if (H.is_sold) {
                            const C = H.profit || 0;
                            zt({
                                color: H.status === "won" ? "#1cf85eff" : "#cc2e3d",
                                text: `Contract ${H.status} ${H.status==="won"?"+":""}${C} usd`
                            })
                        }
                    }
                }
            }, () => {
                clearInterval(o), d.close()
            }
        }, [Y, w, P]);
        const B = {
                "1HZ10V": "Volatility 10 (1s) Index",
                R_10: "Volatility 10 Index",
                "1HZ15V": "Volatility 15 (1s) Index",
                "1HZ25V": "Volatility 25 (1s) Index",
                R_25: "Volatility 35 Index",
                "1HZ30V": "Volatility 30 (1s) Index",
                "1HZ50V": "Volatility 50 (1s) Index",
                R_50: "Volatility 50 Index",
                "1HZ75V": "Volatility 75 (1s) Index",
                R_75: "Volatility 75 Index",
                "1HZ90V": "Volatility 90 (1s) Index",
                "1HZ100V": "Volatility 100 (1s) Index",
                R_100: "Volatility 100 Index",
                "1HZ150V": "Volatility 150 (1s) Index",
                "1HZ250V": "Volatility 250 (1s) Index"
            },
            s = v => {
                if (vt(!0), !T.current || T.current.readyState !== WebSocket.OPEN) {
                    vt(!1), zt({
                        color: "red",
                        text: "WebSocket not ready"
                    });
                    return
                }
                const d = {
                    buy: 1,
                    subscribe: 1,
                    price: ht,
                    parameters: {
                        app_markup_percentage: 3,
                        amount: ht,
                        basis: "stake",
                        contract_type: v,
                        product_type: "basic",
                        currency: "USD",
                        duration: Mt,
                        duration_unit: "t",
                        symbol: Y
                    }
                };
                T.current.send(JSON.stringify(d)), zt({
                    color: "white",
                    text: `${v==="DIGITEVEN"?"Digit Even":"Digit Odd"} placed on ${B[Y]}`
                }), setTimeout(() => {
                    vt(!1)
                }, 500)
            };
        return y.jsxs("div", {
            style: {
                fontSize: "12px",
                padding: "10px",
                maxWidth: "100vw",
                boxSizing: "border-box",
                overflow: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            },
            children: [y.jsxs("div", {
                style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: [y.jsx("p", {
                    style: {
                        fontWeight: "bold"
                    },
                    children: "Price"
                }), y.jsx("div", {
                    style: {
                        marginLeft: 10,
                        height: 25,
                        width: 120,
                        borderRadius: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "red"
                    },
                    children: y.jsx("p", {
                        style: {
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "0.75rem"
                        },
                        children: ft
                    })
                })]
            }), y.jsx("div", {
                style: {
                    backgroundColor: "black",
                    borderRadius: 7,
                    height: 35,
                    width: "70%",
                    paddingLeft: 20,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: 20
                },
                children: y.jsx("p", {
                    style: {
                        color: ct == null ? void 0 : ct.color,
                        fontSize: 11
                    },
                    children: ct == null ? void 0 : ct.text
                })
            }), y.jsx("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    justifyContent: "center"
                },
                children: it.map(({
                    item: v,
                    percentage: d
                }) => {
                    let o = "#cececeff";
                    return I.some(b => b.item === v) ? o = "green" : J.some(b => b.item === v) ? o = "blue" : x.some(b => b.item === v) ? o = "red" : Et.some(b => b.item === v) && (o = "yellow"), y.jsxs("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: 60
                        },
                        children: [y.jsx("div", {
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
                                backgroundColor: o
                            },
                            children: y.jsxs("div", {
                                style: {
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "50%",
                                    backgroundColor: o,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: [y.jsx("strong", {
                                    style: {
                                        fontSize: 16,
                                        color: o === "green" || o === "red" || o === "blue" ? "white" : "black"
                                    },
                                    children: v
                                }), y.jsxs("small", {
                                    style: {
                                        fontSize: 11,
                                        color: o === "green" || o === "red" || o === "blue" ? "white" : "black",
                                        fontWeight: "bold"
                                    },
                                    children: [d.toFixed(1), "%"]
                                })]
                            })
                        }), U === v && y.jsx("div", {
                            style: {
                                width: 0,
                                height: 0,
                                borderLeft: "8px solid transparent",
                                borderRight: "8px solid transparent",
                                borderBottom: "10px solid #ea4335",
                                marginTop: 4
                            }
                        })]
                    }, v)
                })
            }), V ? y.jsxs(y.Fragment, {
                children: [y.jsx("div", {
                    style: {
                        marginTop: "1rem",
                        marginBottom: 10
                    },
                    children: y.jsx("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                            justifyContent: "center"
                        },
                        children: N.slice(-20).map((v, d) => y.jsx("div", {
                            style: {
                                padding: "4px 6px",
                                borderRadius: "4px",
                                fontSize: "11px",
                                backgroundColor: v % 2 === 0 ? "green" : "red",
                                color: "white"
                            },
                            children: v % 2 === 0 ? "E" : "O"
                        }, d))
                    })
                }), y.jsxs("div", {
                    style: {
                        maxWidth: 300,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 20
                    },
                    children: [y.jsxs("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        children: [y.jsx("p", {
                            style: {
                                margin: 0,
                                fontWeight: "bold"
                            },
                            children: "Ticks"
                        }), y.jsx("input", {
                            type: "number",
                            style: {
                                width: "90%",
                                height: 20
                            },
                            min: 1,
                            max: 9,
                            value: gt,
                            onChange: v => {
                                const d = v.target.value;
                                if (d === "") {
                                    Tt("");
                                    return
                                }
                                const o = Number(d);
                                !isNaN(o) && o >= 0 && o <= 9 && (Tt(d), yt(o))
                            }
                        })]
                    }), y.jsxs("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        children: [y.jsx("p", {
                            style: {
                                margin: 0,
                                fontWeight: "bold"
                            },
                            children: "Stake"
                        }), y.jsx("input", {
                            type: "number",
                            style: {
                                width: "90%",
                                height: 20
                            },
                            min: .35,
                            max: 1e3,
                            value: ut,
                            onChange: v => {
                                const d = v.target.value;
                                if (d === "") {
                                    At("");
                                    return
                                }
                                const o = Number(d);
                                !isNaN(o) && o >= .35 && o <= 1e3 && (At(d), L(o))
                            }
                        })]
                    })]
                }), y.jsxs("div", {
                    style: {
                        maxWidth: 300,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 20
                    },
                    children: [y.jsx("div", {
                        style: {
                            width: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            background: k ? "#00a79e" : "white",
                            height: 40
                        },
                        onClick: () => {
                            k || (st("DIGITEVEN"), s("DIGITEVEN"))
                        },
                        children: k && Yt === "DIGITEVEN" ? y.jsx(Se, {
                            size: 20
                        }) : y.jsxs(y.Fragment, {
                            children: [y.jsx("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#00a79e",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                children: "Even"
                            }), y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#008079",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white"
                                },
                                children: [M.toFixed(1), "%"]
                            })]
                        })
                    }), y.jsx("div", {
                        style: {
                            width: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            background: k ? "#cc2e3d" : "white",
                            height: 40
                        },
                        onClick: () => {
                            k || (st("DIGITODD"), s("DIGITODD"))
                        },
                        children: k && Yt === "DIGITODD" ? y.jsx(Se, {
                            size: 20
                        }) : y.jsxs(y.Fragment, {
                            children: [y.jsx("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#cc2e3d",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                children: "Odd"
                            }), y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#a32430",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white"
                                },
                                children: [O.toFixed(1), "%"]
                            })]
                        })
                    })]
                })]
            }) : y.jsx("div", {
                style: {
                    textAlign: "center",
                    marginTop: "10px"
                },
                children: "Loading..."
            })]
        })
    },
    Gy = ({
        activeItem: U,
        digitCounts: it,
        maxItems: I,
        minItems: x,
        volatility: Y,
        secondMaxItems: J,
        token: P,
        secondMinItems: Et
    }) => {
        const [N, z] = R.useState([]), [V, tt] = R.useState(!1), [w, Rt] = R.useState("1000"), [$, Vt] = R.useState(2), [ft, Xt] = R.useState({
            over: 0,
            under: 0,
            equal: 0,
            different: 0,
            total: 0
        }), [Mt, yt] = R.useState(""), [ht, L] = R.useState(1), [ct, zt] = R.useState(1), [k, vt] = R.useState({}), [gt, Tt] = R.useState(!1), [ut, At] = R.useState("1"), [Yt, st] = R.useState("1"), [T, M] = R.useState(""), O = R.useRef(null), B = R.useRef(null);
        R.useEffect(() => {
            tt(!1), z([]);
            const d = 74892,
                o = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${d}`);
            return O.current = o, o.onopen = () => {
                o.send(JSON.stringify({
                    authorize: P
                }))
            }, o.onmessage = b => {
                var j;
                const E = JSON.parse(b.data);
                if (E.error) {
                    console.error("WebSocket error:", E.error.message);
                    return
                }
                if (E.msg_type === "authorize" && (o.send(JSON.stringify({
                        ticks_history: Y,
                        granularity: 60,
                        adjust_start_time: 1,
                        count: Number(w),
                        end: "latest",
                        style: "ticks",
                        subscribe: 1
                    })), B.current = setInterval(() => {
                        o.readyState === WebSocket.OPEN && o.send(JSON.stringify({
                            ping: 1
                        }))
                    }, 3e4)), E.msg_type === "history") {
                    const H = E.history.prices.map(C => {
                        var Qt;
                        const K = C.toFixed(((Qt = E == null ? void 0 : E.tick) == null ? void 0 : Qt.pip_size) || 2),
                            ot = parseInt(K.replace(".", "").at(-1), 10);
                        return {
                            price: K,
                            lastDigit: ot
                        }
                    });
                    z(H), tt(!0)
                }
                if (E.msg_type === "tick") {
                    const H = E.tick.quote.toFixed(((j = E == null ? void 0 : E.tick) == null ? void 0 : j.pip_size) || 2),
                        C = parseInt(H.replace(".", "").at(-1), 10);
                    yt(H), z(K => [...K, {
                        price: H,
                        lastDigit: C
                    }])
                }
                if (E.msg_type === "proposal_open_contract") {
                    const H = E.proposal_open_contract;
                    if (H.is_sold) {
                        const C = H.profit || 0;
                        H.status === "won" ? vt({
                            color: "#1cf85eff",
                            text: `Contract won +${C} usd`
                        }) : vt({
                            color: "#cc2e3d",
                            text: `Contract lost ${C} usd`
                        })
                    }
                }
            }, () => {
                B.current && clearInterval(B.current), o.close()
            }
        }, [Y, w, P]), R.useEffect(() => {
            if (N.length === 0) return;
            const d = parseInt($, 10);
            let o = 0,
                b = 0,
                E = 0;
            for (const {
                    lastDigit: C
                } of N) isNaN(d) || isNaN(C) || (C > d ? o++ : C < d ? b++ : E++);
            const j = o + b + E,
                H = o + b;
            Xt({
                over: o,
                under: b,
                equal: E,
                different: H,
                total: j
            })
        }, [N, $]);
        const s = {
                "1HZ10V": "Volatility 10 (1s) Index",
                R_10: "Volatility 10 Index",
                "1HZ15V": "Volatility 15 (1s) Index",
                "1HZ25V": "Volatility 25 (1s) Index",
                R_25: "Volatility 35 Index",
                "1HZ30V": "Volatility 30 (1s) Index",
                "1HZ50V": "Volatility 50 (1s) Index",
                R_50: "Volatility 50 Index",
                "1HZ75V": "Volatility 75 (1s) Index",
                R_75: "Volatility 75 Index",
                "1HZ90V": "Volatility 90 (1s) Index",
                "1HZ100V": "Volatility 100 (1s) Index",
                R_100: "Volatility 100 Index",
                "1HZ150V": "Volatility 150 (1s) Index",
                "1HZ250V": "Volatility 250 (1s) Index"
            },
            v = d => {
                Tt(!0);
                const o = O.current;
                if (!o || o.readyState !== WebSocket.OPEN) {
                    Tt(!1), vt({
                        color: "red",
                        text: "WebSocket not ready"
                    });
                    return
                }
                o.send(JSON.stringify({
                    buy: 1,
                    subscribe: 1,
                    price: ct,
                    parameters: {
                        app_markup_percentage: 3,
                        amount: ct,
                        basis: "stake",
                        barrier: $,
                        contract_type: d,
                        product_type: "basic",
                        currency: "USD",
                        duration: ht,
                        duration_unit: "t",
                        symbol: Y
                    }
                })), vt({
                    color: "white",
                    text: `${d==="DIGITMATCH"?"Digit Matches":"Digit Differs"} placed on ${s[Y]}`
                }), setTimeout(() => {
                    Tt(!1)
                }, 500)
            };
        return y.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 10,
                fontSize: "0.8rem",
                maxWidth: "100vw",
                overflow: "auto"
            },
            children: [y.jsxs("div", {
                style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: [y.jsx("p", {
                    style: {
                        fontWeight: "bold"
                    },
                    children: "Price"
                }), y.jsx("div", {
                    style: {
                        marginLeft: 10,
                        height: 25,
                        width: 120,
                        borderRadius: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "red"
                    },
                    children: y.jsx("p", {
                        style: {
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "0.75rem"
                        },
                        children: Mt
                    })
                })]
            }), y.jsx("div", {
                style: {
                    backgroundColor: "black",
                    borderRadius: 7,
                    height: 35,
                    width: "70%",
                    paddingLeft: 20,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBlock: 20
                },
                children: y.jsx("p", {
                    style: {
                        color: k == null ? void 0 : k.color,
                        fontSize: 11
                    },
                    children: k == null ? void 0 : k.text
                })
            }), y.jsx("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    justifyContent: "center"
                },
                children: it.map(({
                    item: d,
                    percentage: o
                }) => {
                    let b = "#cececeff";
                    return I.some(E => E.item === d) ? b = "green" : J.some(E => E.item === d) ? b = "blue" : x.some(E => E.item === d) ? b = "red" : Et.some(E => E.item === d) && (b = "yellow"), y.jsxs("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: 60
                        },
                        children: [y.jsx("div", {
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
                                backgroundColor: b
                            },
                            children: y.jsxs("div", {
                                style: {
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "50%",
                                    backgroundColor: b,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: [y.jsx("strong", {
                                    style: {
                                        fontSize: 16,
                                        color: b === "green" || b === "red" || b === "blue" ? "white" : "black"
                                    },
                                    children: d
                                }), y.jsxs("small", {
                                    style: {
                                        fontSize: 11,
                                        color: b === "green" || b === "red" || b === "blue" ? "white" : "black",
                                        fontWeight: "bold"
                                    },
                                    children: [o.toFixed(1), "%"]
                                })]
                            })
                        }), U === d && y.jsx("div", {
                            style: {
                                width: 0,
                                height: 0,
                                borderLeft: "8px solid transparent",
                                borderRight: "8px solid transparent",
                                borderBottom: "10px solid #ea4335",
                                marginTop: 4
                            }
                        })]
                    }, d)
                })
            }), y.jsx("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: 15,
                    gap: 6
                },
                children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => y.jsx("div", {
                    style: {
                        fontSize: "12px",
                        padding: "5px 8px",
                        border: "1px solid #ccc",
                        borderRadius: 4,
                        backgroundColor: $ === d ? "#064e72" : "#fff",
                        color: $ === d ? "#fff" : "#064e72",
                        cursor: "pointer"
                    },
                    onClick: () => Vt(d),
                    children: d
                }, d))
            }), y.jsxs("div", {
                style: {
                    maxWidth: 300,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: 20
                },
                children: [y.jsxs("div", {
                    style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column"
                    },
                    children: [y.jsx("p", {
                        style: {
                            margin: 0,
                            fontWeight: "bold"
                        },
                        children: "Ticks"
                    }), y.jsx("input", {
                        type: "number",
                        style: {
                            width: "90%",
                            height: 20
                        },
                        min: 1,
                        max: 9,
                        value: ut,
                        onChange: d => {
                            const o = d.target.value;
                            if (o === "") {
                                At("");
                                return
                            }
                            const b = Number(o);
                            !isNaN(b) && b >= 0 && b <= 9 && (At(o), L(b))
                        }
                    })]
                }), y.jsxs("div", {
                    style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column"
                    },
                    children: [y.jsx("p", {
                        style: {
                            margin: 0,
                            fontWeight: "bold"
                        },
                        children: "Stake"
                    }), y.jsx("input", {
                        type: "number",
                        style: {
                            width: "90%",
                            height: 20
                        },
                        min: .35,
                        max: 1e3,
                        value: Yt,
                        onChange: d => {
                            const o = d.target.value;
                            if (o === "") {
                                st("");
                                return
                            }
                            const b = Number(o);
                            !isNaN(b) && b >= .35 && b <= 1e3 && (st(o), zt(b))
                        }
                    })]
                })]
            }), V ? y.jsx(y.Fragment, {
                children: y.jsxs("div", {
                    style: {
                        maxWidth: 300,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 20
                    },
                    children: [y.jsx("div", {
                        style: {
                            width: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            background: gt ? "#00a79e" : "white",
                            height: 40
                        },
                        onClick: () => {
                            gt || (M("DIGITMATCH"), v("DIGITMATCH"))
                        },
                        children: gt && T === "DIGITMATCH" ? y.jsx(Se, {
                            size: 20
                        }) : y.jsxs(y.Fragment, {
                            children: [y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#00a79e",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                children: ["Matches ", $]
                            }), y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#008079",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white"
                                },
                                children: [ft.equal ? (ft.equal / ft.total * 100).toFixed(1) : 0, "%"]
                            })]
                        })
                    }), y.jsx("div", {
                        style: {
                            width: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            background: gt ? "#cc2e3d" : "white",
                            height: 40
                        },
                        onClick: () => {
                            gt || (M("DIGITDIFF"), v("DIGITDIFF"))
                        },
                        children: gt && T === "DIGITDIFF" ? y.jsx(Se, {
                            size: 20
                        }) : y.jsxs(y.Fragment, {
                            children: [y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#cc2e3d",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                children: ["Differs ", $]
                            }), y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#a32430",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white"
                                },
                                children: [ft.different ? (ft.different / ft.total * 100).toFixed(1) : 0, "%"]
                            })]
                        })
                    })]
                })
            }) : y.jsx("p", {
                children: "Loading..."
            })]
        })
    },
    Zy = ({
        activeItem: U,
        digitCounts: it,
        maxItems: I,
        minItems: x,
        volatility: Y,
        secondMaxItems: J,
        token: P,
        secondMinItems: Et
    }) => {
        const [N, z] = R.useState([]), [V, tt] = R.useState(!1), [w, Rt] = R.useState("1000"), [$, Vt] = R.useState(2), [ft, Xt] = R.useState({
            over: 0,
            under: 0,
            equal: 0,
            different: 0,
            total: 0
        }), [Mt, yt] = R.useState(""), [ht, L] = R.useState(1), [ct, zt] = R.useState(1), [k, vt] = R.useState({}), [gt, Tt] = R.useState(!1), [ut, At] = R.useState("1"), [Yt, st] = R.useState("1"), [T, M] = R.useState(""), O = R.useRef(null);
        R.useEffect(() => {
            tt(!1), z([]);
            const v = 74892,
                d = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${v}`);
            O.current = d;
            let o;
            return d.onopen = () => {
                d.send(JSON.stringify({
                    authorize: P
                })), d.send(JSON.stringify({
                    ticks_history: Y,
                    granularity: 60,
                    adjust_start_time: 1,
                    count: Number(w),
                    end: "latest",
                    style: "ticks",
                    subscribe: 1
                })), o = setInterval(() => {
                    d.readyState === WebSocket.OPEN && d.send(JSON.stringify({
                        ping: 1
                    }))
                }, 3e4)
            }, d.onmessage = b => {
                var j;
                let E;
                try {
                    E = JSON.parse(b.data)
                } catch {
                    console.error("Invalid JSON:", b.data);
                    return
                }
                if (E != null && E.error) {
                    console.error("Error from server:", E.error.message);
                    return
                }
                if ((E == null ? void 0 : E.msg_type) === "history") {
                    const H = E.history.prices.map(C => {
                        var Qt;
                        const K = C.toFixed(((Qt = E == null ? void 0 : E.tick) == null ? void 0 : Qt.pip_size) || 2),
                            ot = parseInt(K.replace(".", "").at(-1), 10);
                        return {
                            price: K,
                            lastDigit: ot
                        }
                    });
                    z(H), tt(!0)
                } else if ((E == null ? void 0 : E.msg_type) === "tick") {
                    const H = E.tick.quote.toFixed(((j = E == null ? void 0 : E.tick) == null ? void 0 : j.pip_size) || 2),
                        C = parseInt(H.replace(".", "").at(-1), 10);
                    yt(H), z(K => [...K, {
                        price: H,
                        lastDigit: C
                    }])
                } else if ((E == null ? void 0 : E.msg_type) === "proposal_open_contract") {
                    const H = E.proposal_open_contract;
                    if (H.is_sold) {
                        const C = H.profit || 0;
                        H.status === "won" ? vt({
                            color: "#1cf85eff",
                            text: `Contract won +${C} usd`
                        }) : H.status === "lost" && vt({
                            color: "#cc2e3d",
                            text: `Contract lost ${C} usd`
                        })
                    }
                }
            }, () => {
                clearInterval(o), d.close()
            }
        }, [Y, w, P]), R.useEffect(() => {
            if (N.length === 0) return;
            const v = parseInt($, 10);
            let d = 0,
                o = 0,
                b = 0;
            for (const {
                    lastDigit: H
                } of N) isNaN(v) || isNaN(H) || (H > v ? d++ : H < v ? o++ : b++);
            const E = d + o + b,
                j = d + o;
            Xt({
                over: d,
                under: o,
                equal: b,
                different: j,
                total: E
            })
        }, [N, $]);
        const B = {
                "1HZ10V": "Volatility 10 (1s) Index",
                R_10: "Volatility 10 Index",
                "1HZ15V": "Volatility 15 (1s) Index",
                "1HZ25V": "Volatility 25 (1s) Index",
                R_25: "Volatility 35 Index",
                "1HZ30V": "Volatility 30 (1s) Index",
                "1HZ50V": "Volatility 50 (1s) Index",
                R_50: "Volatility 50 Index",
                "1HZ75V": "Volatility 75 (1s) Index",
                R_75: "Volatility 75 Index",
                "1HZ90V": "Volatility 90 (1s) Index",
                "1HZ100V": "Volatility 100 (1s) Index",
                R_100: "Volatility 100 Index",
                "1HZ150V": "Volatility 150 (1s) Index",
                "1HZ250V": "Volatility 250 (1s) Index"
            },
            s = v => {
                Tt(!0);
                const d = O.current;
                if (!d || d.readyState !== WebSocket.OPEN) {
                    Tt(!1), vt({
                        color: "red",
                        text: "WebSocket not ready"
                    });
                    return
                }
                d.send(JSON.stringify({
                    buy: 1,
                    subscribe: 1,
                    price: ct,
                    parameters: {
                        app_markup_percentage: 3,
                        amount: ct,
                        basis: "stake",
                        barrier: $,
                        contract_type: v,
                        product_type: "basic",
                        currency: "USD",
                        duration: ht,
                        duration_unit: "t",
                        symbol: Y
                    }
                })), vt({
                    color: "white",
                    text: `${v==="DIGITOVER"?"Digit Over":"Digit Under"} placed on ${B[Y]}`
                }), setTimeout(() => {
                    Tt(!1)
                }, 500)
            };
        return y.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 10,
                fontSize: "0.8rem",
                maxWidth: "100vw",
                overflow: "auto"
            },
            children: [y.jsxs("div", {
                style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: [y.jsx("p", {
                    style: {
                        fontWeight: "bold"
                    },
                    children: "Price"
                }), y.jsx("div", {
                    style: {
                        marginLeft: 10,
                        height: 25,
                        width: 120,
                        borderRadius: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "red"
                    },
                    children: y.jsx("p", {
                        style: {
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "0.75rem"
                        },
                        children: Mt
                    })
                })]
            }), y.jsx("div", {
                style: {
                    backgroundColor: "black",
                    borderRadius: 7,
                    height: 35,
                    width: "70%",
                    paddingLeft: 20,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBlock: 20
                },
                children: y.jsx("p", {
                    style: {
                        color: k == null ? void 0 : k.color,
                        fontSize: 11
                    },
                    children: k == null ? void 0 : k.text
                })
            }), y.jsx("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    justifyContent: "center"
                },
                children: it.map(({
                    item: v,
                    percentage: d
                }) => {
                    let o = "#cececeff";
                    return I.some(b => b.item === v) ? o = "green" : J.some(b => b.item === v) ? o = "blue" : x.some(b => b.item === v) ? o = "red" : Et.some(b => b.item === v) && (o = "yellow"), y.jsxs("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: 60
                        },
                        children: [y.jsx("div", {
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
                                backgroundColor: o
                            },
                            children: y.jsxs("div", {
                                style: {
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "50%",
                                    backgroundColor: o,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: [y.jsx("strong", {
                                    style: {
                                        fontSize: 16,
                                        color: o === "green" || o === "red" || o === "blue" ? "white" : "black"
                                    },
                                    children: v
                                }), y.jsxs("small", {
                                    style: {
                                        fontSize: 11,
                                        color: o === "green" || o === "red" || o === "blue" ? "white" : "black",
                                        fontWeight: "bold"
                                    },
                                    children: [d.toFixed(1), "%"]
                                })]
                            })
                        }), U === v && y.jsx("div", {
                            style: {
                                width: 0,
                                height: 0,
                                borderLeft: "8px solid transparent",
                                borderRight: "8px solid transparent",
                                borderBottom: "10px solid #ea4335",
                                marginTop: 4
                            }
                        })]
                    }, v)
                })
            }), V && y.jsx("div", {
                style: {
                    marginTop: "1rem",
                    marginBottom: 10
                },
                children: y.jsx("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        justifyContent: "center"
                    },
                    children: N.slice(-20).map(({
                        lastDigit: v
                    }, d) => {
                        const o = v > $ ? "O" : v < $ ? "U" : "E",
                            b = o === "O" ? "green" : o === "U" ? "red" : "black";
                        return y.jsx("div", {
                            style: {
                                padding: "4px 6px",
                                borderRadius: "4px",
                                fontSize: "11px",
                                backgroundColor: b,
                                color: "white"
                            },
                            children: o
                        }, d)
                    })
                })
            }), y.jsx("div", {
                style: {
                    marginTop: 10,
                    marginBottom: 10
                },
                children: y.jsx("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        justifyContent: "center"
                    },
                    children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, d) => y.jsx("div", {
                        style: {
                            padding: "4px 8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            backgroundColor: $ === v ? "#064e72" : "white",
                            color: $ === v ? "white" : "#064e72",
                            cursor: "pointer",
                            fontSize: "0.75rem"
                        },
                        onClick: () => {
                            Vt(v)
                        },
                        children: v
                    }, d))
                })
            }), y.jsxs("div", {
                style: {
                    maxWidth: 300,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: 20
                },
                children: [y.jsxs("div", {
                    style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column"
                    },
                    children: [y.jsx("p", {
                        style: {
                            margin: 0,
                            fontWeight: "bold"
                        },
                        children: "Ticks"
                    }), y.jsx("input", {
                        type: "number",
                        style: {
                            width: "90%",
                            height: 20
                        },
                        min: 1,
                        max: 9,
                        value: ut,
                        onChange: v => {
                            const d = v.target.value;
                            if (d === "") {
                                At("");
                                return
                            }
                            const o = Number(d);
                            !isNaN(o) && o >= 0 && o <= 9 && (At(d), L(o))
                        }
                    })]
                }), y.jsxs("div", {
                    style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column"
                    },
                    children: [y.jsx("p", {
                        style: {
                            margin: 0,
                            fontWeight: "bold"
                        },
                        children: "Stake"
                    }), y.jsx("input", {
                        type: "number",
                        style: {
                            width: "90%",
                            height: 20
                        },
                        min: .35,
                        max: 1e3,
                        value: Yt,
                        onChange: v => {
                            const d = v.target.value;
                            if (d === "") {
                                st("");
                                return
                            }
                            const o = Number(d);
                            !isNaN(o) && o >= .35 && o <= 1e3 && (st(d), zt(o))
                        }
                    })]
                })]
            }), V ? y.jsx(y.Fragment, {
                children: y.jsxs("div", {
                    style: {
                        maxWidth: 300,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 20
                    },
                    children: [y.jsx("div", {
                        style: {
                            width: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            background: gt ? "#00a79e" : "white",
                            height: 40
                        },
                        onClick: () => {
                            gt || (M("DIGITOVER"), s("DIGITOVER"))
                        },
                        children: gt && T === "DIGITOVER" ? y.jsx(Se, {
                            size: 20
                        }) : y.jsxs(y.Fragment, {
                            children: [y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#00a79e",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                children: ["Over ", $]
                            }), y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#008079",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white"
                                },
                                children: [(ft.over / ft.total * 100).toFixed(2), "%"]
                            })]
                        })
                    }), y.jsx("div", {
                        style: {
                            width: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            background: gt ? "#cc2e3d" : "white",
                            height: 40
                        },
                        onClick: () => {
                            gt || (M("DIGITUNDER"), s("DIGITUNDER"))
                        },
                        children: gt && T === "DIGITUNDER" ? y.jsx(Se, {
                            size: 20
                        }) : y.jsxs(y.Fragment, {
                            children: [y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#cc2e3d",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                children: ["Under ", $]
                            }), y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#a32430",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white"
                                },
                                children: [(ft.under / ft.total * 100).toFixed(2), "%"]
                            })]
                        })
                    })]
                })
            }) : y.jsx("h3", {
                style: {
                    marginTop: 20
                },
                children: "Loading..."
            })]
        })
    },
    Xy = ({
        activeItem: U,
        digitCounts: it,
        maxItems: I,
        minItems: x,
        volatility: Y,
        secondMaxItems: J,
        token: P,
        secondMinItems: Et
    }) => {
        const [N, z] = R.useState("1000"), [V, tt] = R.useState(""), [w, Rt] = R.useState(!1), [$, Vt] = R.useState(1), [ft, Xt] = R.useState(1), [Mt, yt] = R.useState({}), [ht, L] = R.useState(!1), [ct, zt] = R.useState("1"), [k, vt] = R.useState("1"), [gt, Tt] = R.useState(""), ut = R.useRef([]), At = R.useRef({
            over: 0,
            under: 0,
            total: 0
        }), Yt = R.useRef(null), [st, T] = R.useState(0);
        R.useCallback(d => {
            z(d.target.value)
        }, []), R.useEffect(() => {
            Rt(!1), ut.current = [], At.current = {
                over: 0,
                under: 0,
                total: 0
            };
            const d = 74892,
                o = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${d}`);
            Yt.current = o;
            let b;
            return o.onopen = () => {
                o.send(JSON.stringify({
                    authorize: P
                })), o.send(JSON.stringify({
                    ticks_history: Y,
                    granularity: 60,
                    adjust_start_time: 1,
                    count: Number(N),
                    end: "latest",
                    style: "ticks",
                    subscribe: 1
                })), b = setInterval(() => {
                    o.readyState === WebSocket.OPEN && o.send(JSON.stringify({
                        ping: 1
                    }))
                }, 3e4)
            }, o.onmessage = E => {
                const j = JSON.parse(E == null ? void 0 : E.data);
                if (!(j != null && j.error)) {
                    if ((j == null ? void 0 : j.msg_type) === "history") {
                        const H = j.history.prices.map(C => ({
                            price: C.toFixed(2),
                            direction: null
                        }));
                        ut.current = H, T(C => C + 1), Rt(!0)
                    }
                    if ((j == null ? void 0 : j.msg_type) === "tick") {
                        const H = j.tick.quote.toFixed(2);
                        tt(H);
                        const C = ut.current[ut.current.length - 1];
                        let K = null;
                        if (C) {
                            const ot = parseFloat(H),
                                Qt = parseFloat(C.price);
                            if (ot > Qt) K = "Rise", At.current.over += 1;
                            else if (ot < Qt) K = "Fall", At.current.under += 1;
                            else return;
                            At.current.total += 1, ut.current.push({
                                price: H,
                                direction: K
                            })
                        } else ut.current.push({
                            price: H,
                            direction: null
                        });
                        T(ot => ot + 1)
                    }
                    if ((j == null ? void 0 : j.msg_type) === "proposal_open_contract") {
                        const H = j.proposal_open_contract;
                        if (H.is_sold) {
                            const C = H.profit || 0;
                            yt({
                                color: H.status === "won" ? "#1cf85eff" : "#cc2e3d",
                                text: `Contract ${H.status} ${H.status==="won"?"+":""}${C} usd`
                            })
                        }
                    }
                }
            }, () => {
                clearInterval(b), o.close()
            }
        }, [Y, N, P]);
        const M = R.useMemo(() => ut.current.filter(d => d.direction).slice(-20), [st]),
            O = R.useMemo(() => {
                const {
                    over: d,
                    total: o
                } = At.current;
                return (d / o * 100 || 0).toFixed(2)
            }, [st]),
            B = R.useMemo(() => {
                const {
                    under: d,
                    total: o
                } = At.current;
                return (d / o * 100 || 0).toFixed(2)
            }, [st]),
            s = {
                "1HZ10V": "Volatility 10 (1s) Index",
                R_10: "Volatility 10 Index",
                "1HZ15V": "Volatility 15 (1s) Index",
                "1HZ25V": "Volatility 25 (1s) Index",
                R_25: "Volatility 35 Index",
                "1HZ30V": "Volatility 30 (1s) Index",
                "1HZ50V": "Volatility 50 (1s) Index",
                R_50: "Volatility 50 Index",
                "1HZ75V": "Volatility 75 (1s) Index",
                R_75: "Volatility 75 Index",
                "1HZ90V": "Volatility 90 (1s) Index",
                "1HZ100V": "Volatility 100 (1s) Index",
                R_100: "Volatility 100 Index",
                "1HZ150V": "Volatility 150 (1s) Index",
                "1HZ250V": "Volatility 250 (1s) Index"
            },
            v = d => {
                L(!0);
                const o = Yt.current;
                if (!o || o.readyState !== WebSocket.OPEN) {
                    L(!1), yt({
                        color: "red",
                        text: "WebSocket not ready"
                    });
                    return
                }
                const b = {
                    buy: 1,
                    subscribe: 1,
                    price: ft,
                    parameters: {
                        app_markup_percentage: 3,
                        amount: ft,
                        basis: "stake",
                        contract_type: d,
                        product_type: "basic",
                        currency: "USD",
                        duration: $,
                        duration_unit: "t",
                        symbol: Y
                    }
                };
                o.send(JSON.stringify(b)), yt({
                    color: "white",
                    text: `${d==="CALL"?"Rise":"Fall"} placed on ${s[Y]}`
                }), setTimeout(() => {
                    L(!1)
                }, 500)
            };
        return y.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 10,
                fontSize: "0.8rem",
                maxWidth: "100vw",
                overflow: "auto"
            },
            children: [y.jsxs("div", {
                style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: [y.jsx("p", {
                    style: {
                        fontWeight: "bold"
                    },
                    children: "Price"
                }), y.jsx("div", {
                    style: {
                        marginLeft: 10,
                        height: 25,
                        width: 120,
                        borderRadius: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "red"
                    },
                    children: y.jsx("p", {
                        style: {
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "0.75rem"
                        },
                        children: V
                    })
                })]
            }), y.jsx("div", {
                style: {
                    backgroundColor: "black",
                    borderRadius: 7,
                    height: 35,
                    width: "70%",
                    paddingLeft: 20,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: 20
                },
                children: y.jsx("p", {
                    style: {
                        color: Mt == null ? void 0 : Mt.color,
                        fontSize: 11
                    },
                    children: Mt == null ? void 0 : Mt.text
                })
            }), y.jsx("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    justifyContent: "center"
                },
                children: it.map(({
                    item: d,
                    percentage: o
                }) => {
                    let b = "#cececeff";
                    return I.some(E => E.item === d) ? b = "green" : J.some(E => E.item === d) ? b = "blue" : x.some(E => E.item === d) ? b = "red" : Et.some(E => E.item === d) && (b = "yellow"), y.jsxs("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: 60
                        },
                        children: [y.jsx("div", {
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
                                backgroundColor: b
                            },
                            children: y.jsxs("div", {
                                style: {
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "50%",
                                    backgroundColor: b,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: [y.jsx("strong", {
                                    style: {
                                        fontSize: 16,
                                        color: b === "green" || b === "red" || b === "blue" ? "white" : "black"
                                    },
                                    children: d
                                }), y.jsxs("small", {
                                    style: {
                                        fontSize: 11,
                                        color: b === "green" || b === "red" || b === "blue" ? "white" : "black",
                                        fontWeight: "bold"
                                    },
                                    children: [o.toFixed(1), "%"]
                                })]
                            })
                        }), U === d && y.jsx("div", {
                            style: {
                                width: 0,
                                height: 0,
                                borderLeft: "8px solid transparent",
                                borderRight: "8px solid transparent",
                                borderBottom: "10px solid #ea4335",
                                marginTop: 4
                            }
                        })]
                    }, d)
                })
            }), w ? y.jsxs(y.Fragment, {
                children: [y.jsx("div", {
                    style: {
                        marginTop: 10,
                        width: "100%"
                    },
                    children: y.jsx("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                            justifyContent: "center",
                            width: "100%"
                        },
                        children: M.map((d, o) => y.jsx("div", {
                            style: {
                                padding: "6px 10px",
                                borderRadius: "6px",
                                backgroundColor: d.direction === "Rise" ? "green" : "red",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "14px"
                            },
                            children: d.direction[0]
                        }, o))
                    })
                }), y.jsxs("div", {
                    style: {
                        maxWidth: 300,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 20
                    },
                    children: [y.jsxs("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        children: [y.jsx("p", {
                            style: {
                                margin: 0,
                                fontWeight: "bold"
                            },
                            children: "Ticks"
                        }), y.jsx("input", {
                            type: "number",
                            style: {
                                width: "90%",
                                height: 20
                            },
                            min: 1,
                            max: 9,
                            value: ct,
                            onChange: d => {
                                const o = d.target.value;
                                if (o === "") {
                                    zt("");
                                    return
                                }
                                const b = Number(o);
                                !isNaN(b) && b >= 0 && b <= 9 && (zt(o), Vt(b))
                            }
                        })]
                    }), y.jsxs("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        children: [y.jsx("p", {
                            style: {
                                margin: 0,
                                fontWeight: "bold"
                            },
                            children: "Stake"
                        }), y.jsx("input", {
                            type: "number",
                            style: {
                                width: "90%",
                                height: 20
                            },
                            min: .35,
                            max: 1e3,
                            value: k,
                            onChange: d => {
                                const o = d.target.value;
                                if (o === "") {
                                    vt("");
                                    return
                                }
                                const b = Number(o);
                                !isNaN(b) && b >= .35 && b <= 1e3 && (vt(o), Xt(b))
                            }
                        })]
                    })]
                }), y.jsxs("div", {
                    style: {
                        maxWidth: 300,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 20
                    },
                    children: [y.jsx("div", {
                        style: {
                            width: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            background: ht ? "#00a79e" : "white",
                            height: 40
                        },
                        onClick: () => {
                            ht || (Tt("CALL"), v("CALL"))
                        },
                        children: ht && gt === "CALL" ? y.jsx(Se, {
                            size: 20
                        }) : y.jsxs(y.Fragment, {
                            children: [y.jsx("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#00a79e",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                children: "Rise"
                            }), y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#008079",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white"
                                },
                                children: [O, "%"]
                            })]
                        })
                    }), y.jsx("div", {
                        style: {
                            width: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            background: ht ? "#cc2e3d" : "white",
                            height: 40
                        },
                        onClick: () => {
                            ht || (Tt("PUT"), v("PUT"))
                        },
                        children: ht && gt === "PUT" ? y.jsx(Se, {
                            size: 20
                        }) : y.jsxs(y.Fragment, {
                            children: [y.jsx("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#cc2e3d",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    fontWeight: "bold"
                                },
                                children: "Fall"
                            }), y.jsxs("div", {
                                style: {
                                    width: "90%",
                                    backgroundColor: "#a32430",
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white"
                                },
                                children: [B, "%"]
                            })]
                        })
                    })]
                })]
            }) : y.jsx("h3", {
                children: "Loading..."
            })]
        })
    },
    Qy = 1e3,
    wy = () => {
        const [U, it] = R.useState("EvenOdd"), [I, x] = R.useState([{
            label: "Even Odd",
            value: "EvenOdd"
        }, {
            label: "Over Under",
            value: "OverUnder"
        }, {
            label: "Matches Differs",
            value: "MatchesDiffers"
        }, {
            label: "Rise Fall",
            value: "RiseFall"
        }]), [Y, J] = R.useState(null), [P, Et] = R.useState([]), [N, z] = R.useState([]), [V, tt] = R.useState([]), [w, Rt] = R.useState("R_10"), [$, Vt] = R.useState("1000"), [ft, Xt] = R.useState(""), [Mt, yt] = R.useState(!1), [ht, L] = R.useState([]), [ct, zt] = R.useState(null), [k, vt] = R.useState([]), gt = R.useRef([]), Tt = R.useRef([]), ut = R.useRef({}), At = R.useRef(null);
        R.useEffect(() => {
            const O = new URLSearchParams(window.location.search),
                B = O.get("token"),
                s = O.get("client_id");
            console.log(B, s), B && zt(B)
        }, []);
        const Yt = R.useMemo(() => [{
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
            }], []),
            st = O => {
                var C, K;
                let B = [...O].sort((ot, Qt) => Qt.count - ot.count);
                const s = B[0].count,
                    v = B.filter(ot => ot.count === s),
                    d = ((C = B.find(ot => ot.count < s)) == null ? void 0 : C.count) || 0,
                    o = B.filter(ot => ot.count === d),
                    b = B[B.length - 1].count,
                    E = B.filter(ot => ot.count === b),
                    j = ((K = [...B].reverse().find(ot => ot.count > b)) == null ? void 0 : K.count) || 0,
                    H = B.filter(ot => ot.count === j);
                z(v), L(o), tt(E), vt(H)
            },
            T = R.useCallback(O => {
                var b, E, j;
                const B = (O == null ? void 0 : O.pip_size) || ((b = O == null ? void 0 : O.tick) == null ? void 0 : b.pip_size) || 2,
                    s = {},
                    v = [];
                let d = 0;
                (j = (E = O == null ? void 0 : O.history) == null ? void 0 : E.prices) == null || j.forEach(H => {
                    const C = H.toFixed(B),
                        K = parseInt(C.at(-1), 10);
                    isNaN(K) || (v.push(K), s[K] = (s[K] || 0) + 1, d += 1)
                }), Tt.current = v, ut.current = s;
                const o = Array.from({
                    length: 10
                }, (H, C) => {
                    const K = s[C] || 0;
                    return {
                        item: C,
                        count: K,
                        percentage: Number((K / d * 100).toFixed(1))
                    }
                });
                gt.current = o, Et(o), st(o), yt(!1)
            }, []),
            M = R.useCallback(O => {
                var H, C;
                const B = (H = O == null ? void 0 : O.tick) == null ? void 0 : H.quote,
                    s = (C = O == null ? void 0 : O.tick) == null ? void 0 : C.pip_size;
                if (B == null || s == null) return;
                const v = B.toFixed(s),
                    d = parseInt(v.slice(-1), 10);
                Xt(v), J(d);
                const o = Tt.current,
                    b = ut.current;
                if (o.length >= Qy) {
                    const K = o.shift();
                    b[K] = (b[K] || 1) - 1
                }
                o.push(d), b[d] = (b[d] || 0) + 1;
                const E = o.length,
                    j = Array.from({
                        length: 10
                    }, (K, ot) => {
                        const Qt = b[ot] || 0;
                        return {
                            item: ot,
                            count: Qt,
                            percentage: Number((Qt / E * 100).toFixed(1))
                        }
                    });
                gt.current = j, Et(j), st(j), yt(!0)
            }, []);
        return R.useEffect(() => {
            yt(!1), Xt(""), gt.current = [], Tt.current = [], ut.current = {};
            const O = 74892,
                B = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${O}`);
            return At.current = B, B.onopen = () => {
                B.send(JSON.stringify({
                    ticks_history: w,
                    adjust_start_time: 1,
                    count: Number($),
                    end: "latest",
                    style: "ticks",
                    subscribe: 1
                }))
            }, B.onmessage = s => {
                const v = JSON.parse(s.data);
                if (v.error) {
                    B.close();
                    return
                }
                v.msg_type === "history" ? T(v) : v.msg_type === "tick" && M(v)
            }, () => B.close()
        }, [w, $, T, M]), y.jsxs("div", {
            style: {
                overflowY: "auto",
                paddingBottom: "10rem",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flex: 1,
                height: "100vh"
            },
            children: [y.jsxs("div", {
                style: {
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 20,
                    gap: 20
                },
                children: [y.jsx("select", {
                    value: U,
                    onChange: O => it(O.target.value),
                    style: {
                        width: 150,
                        height: 32,
                        paddingLeft: 10,
                        paddingRight: 10,
                        cursor: "pointer"
                    },
                    children: I.map(O => y.jsx("option", {
                        value: O.value,
                        children: O.label
                    }, O.value))
                }), U !== "DefenSmartAnalyzer" && y.jsx("select", {
                    value: w,
                    onChange: O => Rt(O.target.value),
                    style: {
                        width: 180,
                        height: 32,
                        fontSize: "14px",
                        cursor: "pointer"
                    },
                    children: Yt.map(O => y.jsx("option", {
                        value: O.value,
                        children: O.label
                    }, O.value))
                })]
            }), U === "EvenOdd" ? y.jsx(Yy, {
                activeItem: Y,
                digitCounts: P,
                maxItems: N,
                minItems: V,
                volatility: w,
                secondMaxItems: ht,
                token: ct,
                secondMinItems: k
            }) : U === "MatchesDiffers" ? y.jsx(Gy, {
                activeItem: Y,
                digitCounts: P,
                maxItems: N,
                minItems: V,
                volatility: w,
                secondMaxItems: ht,
                token: ct,
                secondMinItems: k
            }) : U === "RiseFall" ? y.jsx(Xy, {
                activeItem: Y,
                digitCounts: P,
                maxItems: N,
                minItems: V,
                volatility: w,
                secondMaxItems: ht,
                token: ct,
                secondMinItems: k
            }) : y.jsx(Zy, {
                activeItem: Y,
                digitCounts: P,
                maxItems: N,
                minItems: V,
                volatility: w,
                secondMaxItems: ht,
                token: ct,
                secondMinItems: k
            })]
        })
    };
By.createRoot(document.getElementById("root")).render(y.jsx(R.StrictMode, {
    children: y.jsx(wy, {})
}));