"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["634"], {
        24310(e, t, n) {
            n.r(t), n.d(t, {
                default: () => tI
            });
            var l = n(74848),
                i = n(96540),
                a = n(34164),
                r = n(18987),
                o = n(47767),
                s = n(67774),
                c = n(58826),
                d = n(9230),
                u = n(33172),
                h = n(28176),
                m = n(4255),
                g = n(88486);
            let p = function() {
                let e, t, n = (0, o.zy)(),
                    l = (0, o.Zp)();
                return {
                    deleteQueryString: function(e) {
                        let t = new URLSearchParams(n.search);
                        t.delete(e), l({
                            search: t.toString()
                        }, {
                            replace: !0
                        })
                    },
                    queryString: (e = new URLSearchParams(n.search), t = {}, e.forEach((e, n) => {
                        t[n] = e
                    }), t),
                    setQueryString: function(e) {
                        let t;
                        t = new URLSearchParams(n.search), Object.entries(e).forEach(e => {
                            let [n, l] = e;
                            void 0 === l ? t.delete(n) : t.set(n, l)
                        }), l({
                            search: t.toString()
                        }, {
                            replace: !0
                        })
                    }
                }
            };

            function v(e) {
                let {
                    deleteQueryString: t,
                    queryString: n,
                    setQueryString: l
                } = p(), {
                    isDesktop: a
                } = (0, d.Y)(), [r, o] = (0, g.ko)(), s = () => {
                    if (n.modal || o.setAll([]), (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 && !1 === e.shouldReinitializeModals) t("modal");
                    else {
                        let e = n.modal;
                        if (e) {
                            let t = e.split(","),
                                n = t.slice(-1)[0];
                            o.setAll([]), t.forEach(e => {
                                o.set(e, !a)
                            }), o.set(n, !0)
                        }
                    }
                };
                return (0, i.useEffect)(() => {
                    s()
                }, []), (0, i.useEffect)(() => {
                    (null == n ? void 0 : n.modal) || o.reset()
                }, [null == n ? void 0 : n.modal]), (0, g.ML)("popstate", () => {
                    s()
                }), {
                    hideModal: e => {
                        let i = n.modal;
                        if (i) {
                            let n = i.split(",");
                            if (null == e ? void 0 : e.shouldHideAllModals) r.forEach((e, n) => {
                                o.set(n, !1), t("modal")
                            });
                            else if (null == e ? void 0 : e.shouldHidePreviousModals)
                                if (n.length > 1) {
                                    let e = n.shift();
                                    n.forEach(e => {
                                        o.set(e, !1)
                                    }), n = [e ? ? ""], l({
                                        modal: e
                                    })
                                } else 1 === n.length ? l({
                                    modal: n[0]
                                }) : t("modal");
                            else {
                                let e = n.pop(),
                                    i = n.slice(-1)[0];
                                i ? (o.set(e, !1), o.set(i, !0)) : o.set(e, !1), 0 === n.length ? t("modal") : l({
                                    modal: n.join(",")
                                })
                            }
                        }
                    },
                    isModalOpenFor: e => r.get(e) || !1,
                    showModal: (e, t) => {
                        let i = n.modal;
                        if (i) {
                            let n = i.split(","),
                                r = n.slice(-1)[0];
                            if (r === e) return;
                            (null == t ? void 0 : t.shouldStackModals) === !1 ? o.set(r, !1) : o.set(r, (null == t ? void 0 : t.shouldStackModals) || !a), o.set(e, !0), n.push(e), l({
                                modal: (null == t ? void 0 : t.shouldClearPreviousModals) ? e : n.join(",")
                            })
                        } else o.set(e, !0), l({
                            modal: e
                        })
                    }
                }
            }
            let _ = () => {
                let e = ["dashboard", "bot_builder", "chart", "tutorial"][Number(localStorage.getItem("active_tab"))],
                    t = window.location.href.split("#")[0];
                return `${t}#${e}`
            };
            var x = n(80422),
                f = n(65119),
                j = n(80763),
                b = n(54815),
                w = n(47911),
                y = n(11841),
                A = n(13225),
                I = n(86844),
                k = n(54176),
                C = n(36015),
                N = n(25098),
                L = n(85496),
                S = n(58007),
                z = n(38889),
                E = n(48041),
                M = n(73152),
                D = n(87252),
                R = n(62498),
                P = n(47239),
                F = n(65222);
            let U = [{
                code: "EN",
                displayName: "English",
                icon: (0, l.jsx)(x.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(x.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(x.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "AR",
                displayName: "العربية",
                icon: (0, l.jsx)(f.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(f.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(f.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "BN",
                displayName: "বাংলা",
                icon: (0, l.jsx)(j.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(j.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(j.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "DE",
                displayName: "Deutsch",
                icon: (0, l.jsx)(b.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(b.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(b.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ES",
                displayName: "Espa\xf1ol",
                icon: (0, l.jsx)(w.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(w.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(w.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "FR",
                displayName: "Fran\xe7ais",
                icon: (0, l.jsx)(y.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(y.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(y.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "IT",
                displayName: "Italiano",
                icon: (0, l.jsx)(A.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(A.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(A.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SW",
                displayName: "Kiswahili",
                icon: (0, l.jsx)(I.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(I.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(I.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KM",
                displayName: "ខ្មែរ",
                icon: (0, l.jsx)(k.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(k.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(k.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KO",
                displayName: "한국어",
                icon: (0, l.jsx)(C.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(C.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(C.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PL",
                displayName: "Polish",
                icon: (0, l.jsx)(N.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(N.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(N.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PT",
                displayName: "Portugu\xeas",
                icon: (0, l.jsx)(L.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(L.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(L.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "RU",
                displayName: "Русский",
                icon: (0, l.jsx)(S.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(S.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(S.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SI",
                displayName: "සිංහල",
                icon: (0, l.jsx)(z.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(z.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(z.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TH",
                displayName: "ไทย",
                icon: (0, l.jsx)(E.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(E.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(E.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TR",
                displayName: "T\xfcrk\xe7e",
                icon: (0, l.jsx)(M.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(M.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(M.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "UZ",
                displayName: "O'zbek",
                icon: (0, l.jsx)(D.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(D.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(D.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "VI",
                displayName: "Tiếng Việt",
                icon: (0, l.jsx)(R.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(R.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(R.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_CN",
                displayName: "简体中文",
                icon: (0, l.jsx)(P.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(P.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(P.A, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_TW",
                displayName: "繁體中文",
                icon: (0, l.jsx)(F.A, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(F.A, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(F.A, {
                    height: 14.67,
                    width: 22
                })
            }];
            var T = n(95526),
                W = n(87163),
                O = n(7246),
                $ = n(11139),
                B = n(57635),
                V = n(49456);
            let q = (0, O.PA)(() => {
                let {
                    isDesktop: e
                } = (0, d.Y)(), {
                    is_livechat_available: t
                } = (() => {
                    let [e, t] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        var e;
                        null == (e = window.LiveChatWidget) || e.on("ready", e => {
                            "online" === e.state.availability && t(!0)
                        })
                    }, []), {
                        is_livechat_available: e
                    }
                })(), n = (0, $.GZ)();
                if (!t && !n) return null;
                setInterval(() => {
                    if (n) {
                        var e;
                        null == (e = window.LiveChatWidget) || e.call("destroy")
                    }
                }, 10);
                let a = () => {
                    var e;
                    n ? window.Intercom("show") : null == (e = window.LiveChatWidget) || e.call("maximize")
                };
                return e ? (0, l.jsx)("div", {
                    onKeyDown: a,
                    onClick: a,
                    children: (0, l.jsx)(V.m, {
                        as: "button",
                        className: "app-footer__icon",
                        tooltipContent: (0, T.kg)("Live chat"),
                        children: (0, l.jsx)(B.A, {
                            iconSize: "xs"
                        })
                    })
                }) : (0, l.jsx)(B.A, {
                    iconSize: "xs",
                    className: "mobile-menu__content__items--right-margin"
                })
            });
            var H = n(20238);
            let Y = () => {
                let {
                    localize: e
                } = (0, T.c3)();
                return (0, l.jsx)(V.m, {
                    as: "a",
                    className: "app-footer__icon",
                    href: h.fv.account_limits,
                    tooltipContent: e("Account limits"),
                    children: (0, l.jsx)(H.A, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    })
                })
            };
            var G = n(18130),
                X = n(61016),
                Z = n(92888);
            let J = (0, O.PA)(() => {
                let {
                    is_dark_mode_on: e,
                    toggleTheme: t
                } = (0, G.A)(), {
                    localize: n
                } = (0, T.c3)();
                return (0, l.jsx)(V.m, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: n("Change theme"),
                    onClick: t,
                    children: e ? (0, l.jsx)(Z.A, {
                        iconSize: "xs"
                    }) : (0, l.jsx)(X.A, {
                        iconSize: "xs"
                    })
                })
            });
            var Q = n(20313);
            let K = () => {
                let {
                    localize: e
                } = (0, T.c3)();
                return (0, l.jsx)(V.m, {
                    as: "a",
                    className: "app-footer__icon",
                    href: h.fv.deriv_com,
                    target: "_blank",
                    tooltipContent: e("Go to deriv.com"),
                    children: (0, l.jsx)(Q.A, {
                        iconSize: "xs"
                    })
                })
            };
            var ee = n(84976),
                et = n(57667),
                en = n(13599);
            let el = () => {
                    let e = en.Sp.getValue(en.ql.configServerURL);
                    return e ? (0, l.jsxs)(et.A, {
                        className: "app-footer__endpoint",
                        color: "red",
                        size: "s",
                        children: ["The server", " ", (0, l.jsx)(ee.N_, {
                            className: "app-footer__endpoint-text",
                            to: h.fv.endpoint,
                            children: "endpoint"
                        }), " ", `is: ${e}`]
                    }) : null
                },
                ei = {
                    exit: ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    request: ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    screenChange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    screenElement: ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"]
                };
            var ea = n(36117);
            let er = () => {
                let {
                    toggleFullScreenMode: e
                } = (() => {
                    let [e, t] = (0, i.useState)(!1), {
                        exit: n,
                        request: l,
                        screenChange: a,
                        screenElement: r
                    } = ei, o = (0, i.useCallback)(() => t(r.some(e => document[e])), [r]);
                    return (0, i.useEffect)(() => (a.forEach(e => {
                        document.addEventListener(e, o, !1)
                    }), () => {
                        a.forEach(e => {
                            document.removeEventListener(e, o, !1)
                        })
                    }), [o, a]), {
                        toggleFullScreenMode: i => {
                            null == i || i.stopPropagation();
                            let a = n.find(e => document[e]),
                                r = l.find(e => document.documentElement[e]);
                            e && a ? document[a]() : r ? document.documentElement[r]() : t(!1)
                        }
                    }
                })(), {
                    localize: t
                } = (0, T.c3)();
                return (0, l.jsx)(V.m, {
                    as: "button",
                    className: "app-footer__icon",
                    onClick: e,
                    tooltipContent: t("Full screen"),
                    children: (0, l.jsx)(ea.A, {
                        iconSize: "xs"
                    })
                })
            };
            var eo = n(35499);
            let es = () => {
                    let {
                        localize: e
                    } = (0, T.c3)();
                    return (0, l.jsx)(V.m, {
                        as: "a",
                        className: "app-footer__icon",
                        href: h.fv.help_center,
                        target: "_blank",
                        tooltipContent: e("Help centre"),
                        children: (0, l.jsx)(eo.A, {
                            iconSize: "xs"
                        })
                    })
                },
                ec = e => {
                    let {
                        openLanguageSettingModal: t
                    } = e, {
                        currentLang: n,
                        localize: a
                    } = (0, T.c3)(), r = (0, i.useMemo)(() => {
                        var e;
                        return null == (e = U.find(e => {
                            let {
                                code: t
                            } = e;
                            return t == n
                        })) ? void 0 : e.placeholderIcon
                    }, [n]);
                    return (0, l.jsxs)(V.m, {
                        as: "button",
                        className: "app-footer__language",
                        onClick: t,
                        tooltipContent: a("Language"),
                        children: [r, (0, l.jsx)(et.A, {
                            size: "xs",
                            weight: "bold",
                            children: n
                        })]
                    })
                },
                ed = () => {
                    let e = (() => {
                            let [e, t] = (0, i.useState)("online"), n = (() => {
                                let [e, t] = (0, i.useState)("undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine), n = () => t(!0), l = () => t(!1);
                                return (0, i.useEffect)(() => (window.addEventListener("online", n), window.addEventListener("offline", l), () => {
                                    window.removeEventListener("online", n), window.removeEventListener("offline", l)
                                }), []), e
                            })();
                            return (0, i.useEffect)(() => {
                                n ? t("online") : t("offline")
                            }, [n]), e
                        })(),
                        {
                            className: t,
                            tooltip: n
                        } = (0, i.useMemo)(() => ({
                            blinking: {
                                className: "app-footer__network-status-online app-footer__network-status-blinking",
                                tooltip: (0, T.kg)("Connecting to server")
                            },
                            offline: {
                                className: "app-footer__network-status-offline",
                                tooltip: "Offline"
                            },
                            online: {
                                className: "app-footer__network-status-online",
                                tooltip: "Online"
                            }
                        })[e], [e]);
                    return (0, l.jsx)(V.m, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_network_status",
                        tooltipContent: (0, T.kg)("Network status: {{status}}", {
                            status: n
                        }),
                        children: (0, l.jsx)("div", {
                            className: (0, a.A)("app-footer__network-status", t),
                            "data-testid": "dt_circle"
                        })
                    })
                };
            var eu = n(30634);
            let eh = () => {
                let {
                    localize: e
                } = (0, T.c3)();
                return (0, l.jsx)(V.m, {
                    as: "a",
                    className: "app-footer__icon",
                    href: h.fv.responsible,
                    target: "_blank",
                    tooltipContent: e("Responsible trading"),
                    children: (0, l.jsx)(eu.A, {
                        iconSize: "xs"
                    })
                })
            };
            var em = n(95093),
                eg = n.n(em),
                ep = n(33718),
                ev = n(2351),
                e_ = n(32321);
            let ex = (0, O.PA)(() => {
                let {
                    isDesktop: e
                } = (0, d.Y)(), {
                    common: t
                } = (0, ep.Pj)() ? ? {
                    common: {
                        server_time: eg()()
                    }
                };
                return (0, l.jsx)(V.m, {
                    as: "div",
                    className: "app-footer__icon",
                    "data-testid": "dt_server_time",
                    tooltipContent: t.server_time.format(ev.qX),
                    children: (0, l.jsx)(e_.E, {
                        size: e ? "xs" : "sm",
                        children: t.server_time.format(ev.rE)
                    })
                })
            });
            var ef = n(68345);
            let ej = () => {
                    let {
                        localize: e
                    } = (0, T.c3)();
                    return (0, l.jsx)(V.m, {
                        as: "a",
                        className: "app-footer__icon",
                        href: en.Zh.whatsApp,
                        target: "_blank",
                        tooltipContent: e("WhatsApp"),
                        children: (0, l.jsx)(ef.A, {
                            iconSize: "xs"
                        })
                    })
                },
                eb = () => {
                    let {
                        currentLang: e = "EN",
                        localize: t,
                        switchLanguage: n
                    } = (0, T.c3)(), {
                        hideModal: i,
                        isModalOpenFor: a,
                        showModal: r
                    } = v(), {
                        data: o
                    } = (0, m.A)(!0), {
                        cs_chat_whatsapp: s
                    } = o;
                    return (0, l.jsxs)("footer", {
                        className: "app-footer",
                        children: [(0, l.jsx)(er, {}), (0, l.jsx)(ec, {
                            openLanguageSettingModal: () => r("DesktopLanguagesModal")
                        }), (0, l.jsx)(es, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(J, {}), (0, l.jsx)(Y, {}), (0, l.jsx)(eh, {}), (0, l.jsx)(K, {}), (0, l.jsx)(q, {}), s && (0, l.jsx)(ej, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(ex, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(ed, {}), (0, l.jsx)(el, {}), a("DesktopLanguagesModal") && (0, l.jsx)(W.t, {
                            headerTitle: t("Select Language"),
                            isModalOpen: !0,
                            languages: U,
                            onClose: i,
                            onLanguageSwitch: e => {
                                n(e), i(), window.location.replace(_()), window.location.reload()
                            },
                            selectedLanguage: e
                        })]
                    })
                };
            var ew = n(92202);
            let ey = {
                    aud: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyAudIcon
                    }))),
                    bch: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyBchIcon
                    }))),
                    btc: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyBtcIcon
                    }))),
                    busd: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyBusdIcon
                    }))),
                    dai: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyDaiIcon
                    }))),
                    eth: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyEthIcon
                    }))),
                    eur: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    "eur-check": (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    eurs: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyEursIcon
                    }))),
                    eusdt: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    gbp: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyGbpIcon
                    }))),
                    idk: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyIdkIcon
                    }))),
                    ltc: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyLtcIcon
                    }))),
                    pax: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyPaxIcon
                    }))),
                    tusd: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyTusdIcon
                    }))),
                    tusdt: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    unknown: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyPlaceholderIcon
                    }))),
                    usd: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyUsdIcon
                    }))),
                    usdc: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyUsdcIcon
                    }))),
                    usdk: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyUsdkIcon
                    }))),
                    ust: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    virtual: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyDemoIcon
                    }))),
                    xrp: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyXrpIcon
                    }))),
                    algo: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyAlgoIcon
                    }))),
                    avax: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyAvaxIcon
                    }))),
                    bat: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyBatIcon
                    }))),
                    bnb: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyBnbIcon
                    }))),
                    dash: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyDashIcon
                    }))),
                    doge: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyDogeIcon
                    }))),
                    dot: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyDotIcon
                    }))),
                    eos: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyEosIcon
                    }))),
                    etc: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyEtcIcon
                    }))),
                    fil: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyFilIcon
                    }))),
                    iota: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyIotaIcon
                    }))),
                    link: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyLinkIcon
                    }))),
                    matic: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyMaticIcon
                    }))),
                    mkr: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyMkrIcon
                    }))),
                    mcd: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyMultiCollateralDaiIcon
                    }))),
                    neo: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyNeoIcon
                    }))),
                    none: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyNoneIcon
                    }))),
                    omg: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyOmgIcon
                    }))),
                    p2p: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyP2PIcon
                    }))),
                    scd: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencySingleCollateralDaiIcon
                    }))),
                    sol: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencySolIcon
                    }))),
                    terra: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyTerraIcon
                    }))),
                    trx: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyTrxIcon
                    }))),
                    uni: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyUniIcon
                    }))),
                    xlm: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyXlmIcon
                    }))),
                    xmr: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyXmrIcon
                    }))),
                    xtz: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyXtzIcon
                    }))),
                    zec: (0, i.lazy)(() => n.e("776").then(n.bind(n, 89787)).then(e => ({
                        default: e.CurrencyZecIcon
                    })))
                },
                eA = e => {
                    let {
                        currency: t,
                        isVirtual: n
                    } = e, a = n ? ey.virtual : ey[null == t ? void 0 : t.toLowerCase()] || ey.unknown;
                    return (0, l.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(a, {
                            iconSize: "sm"
                        })
                    })
                };
            var eI = n(17605),
                ek = n(92424),
                eC = n(64048),
                eN = n(75161);
            let eL = n.p + "static/image/icon.85ae8465.png",
                eS = () => {
                    let {
                        isDesktop: e
                    } = (0, d.Y)();
                    return e ? (0, l.jsx)("img", {
                        src: eL,
                        alt: "logo"
                    }) : null
                };
            var ez = n(43516);
            let eE = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "13"
                            }), (0, l.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "35",
                                y: "19"
                            }), (0, l.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "120",
                                y: "6"
                            })]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "12"
                            }), (0, l.jsx)("circle", {
                                cx: "58",
                                cy: "22",
                                r: "12"
                            }), (0, l.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "150",
                                y: "20"
                            }), (0, l.jsx)("circle", {
                                cx: "118",
                                cy: "24",
                                r: "13"
                            }), (0, l.jsx)("rect", {
                                height: "30",
                                rx: "4",
                                ry: "4",
                                width: "1",
                                x: "87",
                                y: "8"
                            }), (0, l.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "250",
                                y: "8"
                            })]
                        })
                    })
                },
                eM = e => {
                    let {
                        isMobile: t,
                        speed: n
                    } = e;
                    return (0, l.jsx)(ez.Ay, {
                        "data-testid": "dt_accounts_info_loader",
                        height: t ? 42 : 46,
                        speed: n,
                        width: t ? 216 : 350,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: (0, l.jsx)(eE, {
                            isMobile: t
                        })
                    })
                };
            var eD = n(80576),
                eR = n(55875),
                eP = n(49470),
                eF = n(24716),
                eU = n(46942),
                eT = n.n(eU);
            let eW = e => {
                let {
                    width: t,
                    height: n
                } = e;
                return (0, l.jsx)("div", {
                    className: "skeleton",
                    style: {
                        width: t,
                        height: n
                    }
                })
            };
            var eO = n(85004),
                e$ = n(42436),
                eB = n(10616),
                eV = n(44587);
            let eq = {
                    currency: " ",
                    currencyLabel: "Options & Multipliers",
                    is_virtual: 1,
                    loginid: "",
                    is_disabled: !1,
                    balance: "",
                    icon: (0, l.jsx)(Q.A, {
                        width: 24,
                        height: 24
                    }),
                    isActive: !1,
                    isVirtual: !0
                },
                eH = () => (0, l.jsx)(eV.c, {
                    color: "var(--general-section-2)",
                    height: "4px"
                }),
                eY = e => {
                    var t;
                    let {
                        oAuthLogout: n,
                        loginid: i,
                        is_logging_out: a
                    } = e, r = JSON.parse(localStorage.getItem("clientAccounts") || "{}"), o = i ? null == (t = r[i]) ? void 0 : t.currency : "", s = (null == i ? void 0 : i.includes("CR")) || (null == i ? void 0 : i.includes("MF")), {
                        has_wallet: c = !1
                    } = (0, eO.A)() || {}, d = new URLSearchParams(window.location.search).get("account"), u = (null == i ? void 0 : i.startsWith("VRTC")) || "demo" === d || !1, m = (0, e$.y5)("cfds", c, u) || h.fv.traders_hub, g = m;
                    try {
                        let e = new URL(m);
                        u ? e.searchParams.set("account", "demo") : o && e.searchParams.set("account", o), g = e.toString()
                    } catch (e) {
                        console.error("Error parsing redirect URL:", e)
                    }
                    return (0, l.jsxs)("div", {
                        className: "",
                        children: [(0, l.jsx)(eF.l.TradersHubLink, {
                            href: g,
                            children: (0, T.kg)("Looking for CFD accounts? Go to Trader's Hub")
                        }), (0, l.jsx)(eH, {}), (0, l.jsxs)("div", {
                            className: eT()("account-switcher-footer__actions", {
                                "account-switcher-footer__actions--hide-manage-button": !s
                            }),
                            children: [s && (0, l.jsx)(ew.A, {
                                id: "manage-button",
                                className: "manage-button",
                                onClick: () => {
                                    if (c) {
                                        let e = (0, e$.RX)();
                                        location.replace(e)
                                    } else location.replace(g)
                                },
                                children: (0, l.jsx)(T.we, {
                                    i18n_default_text: "Manage accounts"
                                })
                            }), (0, l.jsx)(eF.l.Footer, {
                                children: a ? (0, l.jsx)("div", {
                                    className: "deriv-account-switcher__logout--loader",
                                    children: (0, l.jsx)(eW, {
                                        width: "120px",
                                        height: "12px"
                                    })
                                }) : (0, l.jsxs)("div", {
                                    id: "dt_logout_button",
                                    className: "deriv-account-switcher__logout",
                                    onClick: n,
                                    children: [(0, l.jsx)(et.A, {
                                        color: "prominent",
                                        size: "xs",
                                        align: "left",
                                        className: "deriv-account-switcher__logout-text",
                                        children: (0, T.kg)("Logout")
                                    }), (0, l.jsx)(eB.A, {
                                        iconSize: "xs",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                eG = e => {
                    let {
                        tabs_labels: t,
                        modifiedVRTCRAccountList: n,
                        switchAccount: i,
                        isVirtual: r,
                        activeLoginId: o,
                        oAuthLogout: c,
                        is_logging_out: d
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(eF.l.AccountsPanel, {
                            isOpen: !0,
                            title: (0, T.kg)("Deriv account"),
                            className: "account-switcher-panel",
                            children: n && n.map(e => (0, l.jsx)("span", {
                                className: (0, a.A)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, l.jsx)(eF.l.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        e.is_disabled || i(e.loginid)
                                    },
                                    onResetBalance: r && o === e.loginid && 1e4 !== Number(e.balance.replace(/,/g, "")) ? () => {
                                        var e;
                                        null === s.api_base || void 0 === s.api_base || null == (e = s.api_base.api) || e.send({
                                            topup_virtual: 1
                                        })
                                    } : void 0
                                })
                            }, e.loginid))
                        }, t.demo.toLowerCase()), (0, l.jsx)(eH, {}), (0, l.jsx)(eY, {
                            loginid: o,
                            oAuthLogout: c,
                            is_logging_out: d
                        })]
                    })
                };
            var eX = n(39706);
            let eZ = e => {
                let {
                    isVirtual: t,
                    tabs_labels: n,
                    modifiedMFAccountList: i,
                    switchAccount: r,
                    is_low_risk_country: o
                } = e, s = (null == i ? void 0 : i.length) !== 0 && o ? (0, T.kg)("Eu Deriv accounts") : (0, T.kg)("Deriv accounts");
                return (0, l.jsx)(eF.l.AccountsPanel, {
                    isOpen: !0,
                    title: s,
                    className: "account-switcher-panel",
                    children: i.map(e => (e.currencyLabel = (0, T.kg)("Multipliers"), (0, l.jsx)("span", {
                        className: (0, a.A)("account-switcher__item", {
                            "account-switcher__item--disabled": e.is_disabled
                        }),
                        children: (0, l.jsx)(eF.l.AccountsItem, {
                            account: e,
                            onSelectAccount: () => {
                                e.is_disabled || r(e.loginid)
                            }
                        })
                    }, e.loginid)))
                }, t ? n.real.toLowerCase() : n.demo.toLowerCase())
            };
            var eJ = n(83290);
            let eQ = e => {
                    var t, n;
                    let {
                        isVirtual: i,
                        tabs_labels: a,
                        is_low_risk_country: r
                    } = e, {
                        has_wallet: o = !1
                    } = (0, eO.A)() || {}, s = new URLSearchParams(window.location.search).get("account"), c = i || "demo" === s || !1;
                    return r ? (0, l.jsx)(eF.l.AccountsPanel, {
                        isOpen: !0,
                        title: (0, T.kg)("Non-Eu Deriv account"),
                        className: "account-switcher-panel",
                        children: (0, l.jsxs)("div", {
                            className: "account-switcher-panel__no-eu-accounts",
                            children: [(0, l.jsx)(eF.l.AccountsItem, {
                                account: eq,
                                onSelectAccount: () => {}
                            }), (0, l.jsx)(eH, {}), (0, l.jsx)(eJ.$, {
                                id: "add-button",
                                className: "add-button",
                                onClick: () => {
                                    let e = (0, e$.y5)("tradershub", o, c) || h.fv.traders_hub;
                                    try {
                                        let t = new URL(e);
                                        c && t.searchParams.set("account", "demo"), e = t.toString()
                                    } catch (e) {
                                        console.error("Error parsing redirect URL:", e)
                                    }
                                    location.replace(e)
                                },
                                children: (0, l.jsx)(T.we, {
                                    i18n_default_text: "Add"
                                })
                            })]
                        })
                    }, i ? null == a || null == (n = a.real) ? void 0 : n.toLowerCase() : null == a || null == (t = a.demo) ? void 0 : t.toLowerCase()) : null
                },
                eK = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedCRAccountList: i,
                        modifiedMFAccountList: r,
                        is_low_risk_country: o,
                        switchAccount: s
                    } = e;
                    if (!o && i && (null == i ? void 0 : i.length) === 0) return null;
                    let c = (null == r ? void 0 : r.length) === 0 ? (0, T.kg)("Deriv accounts") : (0, T.kg)("Non-Eu Deriv account");
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(eF.l.AccountsPanel, {
                            isOpen: !0,
                            title: c,
                            className: "account-switcher-panel",
                            style: {
                                maxHeight: "220px"
                            },
                            children: i.map(e => (0, l.jsx)("span", {
                                className: (0, a.A)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, l.jsx)(eF.l.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        e.is_disabled || s(e.loginid)
                                    }
                                })
                            }, e.loginid))
                        }, t ? null == n ? void 0 : n.real.toLowerCase() : n.demo.toLowerCase())
                    })
                },
                e0 = e => {
                    let {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: n,
                        switchAccount: i,
                        isVirtual: a,
                        tabs_labels: r,
                        is_low_risk_country: o,
                        oAuthLogout: s,
                        loginid: c,
                        is_logging_out: d,
                        upgradeable_landing_companies: u
                    } = e, h = t && (null == t ? void 0 : t.length) > 0, m = n && (null == n ? void 0 : n.length) > 0;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [h ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(eK, {
                                modifiedCRAccountList: t,
                                modifiedMFAccountList: n,
                                switchAccount: i,
                                isVirtual: a,
                                tabs_labels: r,
                                is_low_risk_country: o
                            }), (0, l.jsx)(eH, {})]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(eQ, {
                                is_low_risk_country: o,
                                isVirtual: a,
                                tabs_labels: r
                            }), (0, l.jsx)(eH, {})]
                        }), !h && !m && u && (0, l.jsxs)("div", {
                            className: "real-accounts__account-item",
                            children: [(0, l.jsxs)("div", {
                                className: "real-accounts__account-item-left",
                                children: [(0, l.jsx)(eX.I, {
                                    icon: "ic-deriv",
                                    className: "deriv-account-switcher-item__icon"
                                }), (0, l.jsx)("span", {
                                    className: "real-accounts__account-item-left-text",
                                    children: (e => {
                                        switch (e) {
                                            case "svg":
                                                return (0, T.kg)("Options & Multipliers");
                                            case "maltainvest":
                                                return (0, T.kg)("Multipliers");
                                            default:
                                                return (0, T.kg)("Deriv")
                                        }
                                    })(u ? ? "")
                                })]
                            }), (0, l.jsx)("button", {
                                className: "add-button",
                                onClick: () => {
                                    let e = (0, e$.S9)(),
                                        t = `${e}/tradershub/redirect?action=real-account-signup&target=${u}`;
                                    window.location.href = t
                                },
                                children: (0, l.jsx)("span", {
                                    children: (0, l.jsx)(T.we, {
                                        i18n_default_text: "Add"
                                    })
                                })
                            })]
                        }, u), m && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(eZ, {
                                modifiedMFAccountList: n,
                                switchAccount: i,
                                isVirtual: a,
                                tabs_labels: r,
                                is_low_risk_country: o
                            }), (0, l.jsx)(eH, {})]
                        }), (0, l.jsx)(eY, {
                            oAuthLogout: s,
                            loginid: c,
                            is_logging_out: d
                        })]
                    })
                };
            var e7 = n(22998);
            let e1 = (0, i.lazy)(() => n.e("134").then(n.bind(n, 4357))),
                e8 = {
                    demo: (0, T.kg)("Demo"),
                    real: (0, T.kg)("Real")
                },
                e2 = e => {
                    var t, n;
                    let {
                        isVirtual: a,
                        modifiedCRAccountList: r,
                        modifiedMFAccountList: o,
                        modifiedVRTCRAccountList: s,
                        switchAccount: c,
                        activeLoginId: d,
                        client: u
                    } = e, {
                        oAuthLogout: h
                    } = (0, ek.$)({
                        handleLogout: async () => u.logout(),
                        client: u
                    }), m = (0, e7.kd)().includes((null == (t = u.account_settings) ? void 0 : t.country_code) ? ? ""), g = !!a;
                    return ((0, i.useEffect)(() => {
                        var e, t;
                        let n = null == (e = document.getElementsByClassName("account-switcher-panel")) ? void 0 : e[0];
                        !a && n && (n.style.maxHeight = "70vh", null == (t = (0, eR.t)(".deriv-accordion__content", n)) || t.then(e => {
                            e && (e.style.maxHeight = "70vh")
                        }))
                    }, [a]), g) ? (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(eG, {
                            modifiedVRTCRAccountList: s,
                            switchAccount: c,
                            activeLoginId: d,
                            isVirtual: g,
                            tabs_labels: e8,
                            oAuthLogout: h,
                            is_logging_out: u.is_logging_out
                        })
                    }) : (0, l.jsx)(e0, {
                        modifiedCRAccountList: r,
                        modifiedMFAccountList: o,
                        switchAccount: c,
                        isVirtual: g,
                        tabs_labels: e8,
                        is_low_risk_country: m,
                        oAuthLogout: h,
                        loginid: d,
                        is_logging_out: u.is_logging_out,
                        upgradeable_landing_companies: (null == u || null == (n = u.landing_companies) ? void 0 : n.all_company) ? ? null
                    })
                },
                e6 = (0, O.PA)(e => {
                    var t, n;
                    let {
                        activeAccount: a
                    } = e, {
                        isDesktop: r
                    } = (0, d.Y)(), {
                        accountList: o
                    } = (0, eI.d)(), {
                        ui: c,
                        run_panel: u,
                        client: m
                    } = (0, ep.Pj)(), {
                        accounts: g
                    } = m, {
                        toggleAccountsDialog: p,
                        is_accounts_switcher_on: v,
                        account_switcher_disabled_message: _
                    } = c, {
                        is_stop_button_visible: x
                    } = u, f = Object.keys(g).some(e => "wallet" === g[e].account_category), j = (0, i.useMemo)(() => null == o ? void 0 : o.map(e => {
                        var t, n, i, r, o, s, c, d;
                        return { ...e,
                            balance: (0, h.nmX)((null == (r = m.all_accounts_balance) || null == (i = r.accounts) || null == (n = i[null == e ? void 0 : e.loginid]) || null == (t = n.balance) ? void 0 : t.toFixed((0, h.QWi)(e.currency))) ? ? "0"),
                            currencyLabel: (null == e ? void 0 : e.is_virtual) ? e8.demo : (null == (c = m.website_status) || null == (s = c.currencies_config) || null == (o = s[null == e ? void 0 : e.currency]) ? void 0 : o.name) ? ? (null == e ? void 0 : e.currency),
                            icon: (0, l.jsx)(eA, {
                                currency: null == e || null == (d = e.currency) ? void 0 : d.toLowerCase(),
                                isVirtual: !!(null == e ? void 0 : e.is_virtual)
                            }),
                            isVirtual: !!(null == e ? void 0 : e.is_virtual),
                            isActive: (null == e ? void 0 : e.loginid) === (null == a ? void 0 : a.loginid)
                        }
                    }), [o, null == (t = m.all_accounts_balance) ? void 0 : t.accounts, null == (n = m.website_status) ? void 0 : n.currencies_config, null == a ? void 0 : a.loginid]), b = (0, i.useMemo)(() => (null == j ? void 0 : j.filter(e => {
                        var t;
                        return null == e || null == (t = e.loginid) ? void 0 : t.includes("CR")
                    })) ? ? [], [j]), w = (0, i.useMemo)(() => (null == j ? void 0 : j.filter(e => {
                        var t;
                        return null == e || null == (t = e.loginid) ? void 0 : t.includes("MF")
                    })) ? ? [], [j]), y = (0, i.useMemo)(() => (null == j ? void 0 : j.filter(e => {
                        var t;
                        return null == e || null == (t = e.loginid) ? void 0 : t.includes("VRT")
                    })) ? ? [], [j]), A = async e => {
                        if (e.toString() === (null == a ? void 0 : a.loginid)) return;
                        let t = JSON.parse(localStorage.getItem("accountsList") ? ? "{}")[e];
                        if (t) {
                            sessionStorage.setItem("is_switching_account", "true");
                            try {
                                localStorage.setItem("authToken", t), localStorage.setItem("active_loginid", e.toString()), await (null === s.api_base || void 0 === s.api_base ? void 0 : s.api_base.init(!0));
                                let n = new URLSearchParams(window.location.search),
                                    l = j.find(t => t.loginid === e.toString());
                                if (!l) return;
                                let i = l.is_virtual ? "demo" : l.currency;
                                n.set("account", i), window.history.pushState({}, "", `${window.location.pathname}?${n.toString()}`)
                            } finally {
                                setTimeout(() => {
                                    sessionStorage.removeItem("is_switching_account")
                                }, 2e3)
                            }
                        }
                    };
                    return a && (f ? (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(eP.a, {}),
                        children: (0, l.jsx)(e1, {
                            is_dialog_on: v,
                            toggleDialog: p
                        })
                    }) : (0, l.jsx)(eD.A, {
                        className: "run-panel__info",
                        classNameBubble: "run-panel__info--bubble",
                        alignment: "bottom",
                        message: _,
                        zIndex: "5",
                        children: (0, l.jsxs)(eF.l, {
                            activeAccount: a,
                            isDisabled: x,
                            tabsLabels: e8,
                            modalContentStyle: {
                                content: {
                                    top: r ? "30%" : "50%",
                                    borderRadius: "10px"
                                }
                            },
                            children: [(0, l.jsx)(eF.l.Tab, {
                                title: e8.real,
                                children: (0, l.jsx)(e2, {
                                    modifiedCRAccountList: b,
                                    modifiedMFAccountList: w,
                                    switchAccount: A,
                                    activeLoginId: null == a ? void 0 : a.loginid,
                                    client: m
                                })
                            }), (0, l.jsx)(eF.l.Tab, {
                                title: e8.demo,
                                children: (0, l.jsx)(e2, {
                                    modifiedVRTCRAccountList: y,
                                    switchAccount: A,
                                    isVirtual: !0,
                                    activeLoginId: null == a ? void 0 : a.loginid,
                                    client: m
                                })
                            })]
                        })
                    }))
                });
            var e4 = n(53262),
                e3 = n(4998),
                e9 = n(35962);
            let e5 = e => {
                let {
                    buttonText: t,
                    onClick: n
                } = e, {
                    isDesktop: i
                } = (0, d.Y)();
                return (0, l.jsxs)("button", {
                    className: "flex items-center w-full pt-8 p-[3.2rem]",
                    onClick: n,
                    children: [(0, l.jsx)(e9.A, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    }), (0, l.jsx)(e_.E, {
                        className: "ml-[1.6rem]",
                        size: i ? "md" : "lg",
                        weight: "bold",
                        children: t
                    })]
                })
            };
            var te = n(2091),
                tt = n(1156),
                tn = n(81129),
                tl = n(32989),
                ti = n(79018),
                ta = n(20972),
                tr = n(32290);
            let to = [{
                active: !1,
                buttonIcon: (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(ti.A, {
                        iconSize: "xs"
                    }), (0, l.jsx)("h1", {
                        children: "Manual Trading"
                    })]
                }),
                description: (0, T.kg)("A whole new trading experience on a powerful yet easy to use platform."),
                href: "https://defentraders.site",
                icon: (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(ti.A, {
                        iconSize: "xs"
                    }), (0, l.jsx)("h1", {
                        children: "Manual Trading"
                    })]
                }),
                showInEU: !0
            }, {
                active: !0,
                buttonIcon: (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(ta.A, {
                        iconSize: "xs"
                    }), (0, l.jsx)("h1", {
                        children: "Prof Auto Trading"
                    })]
                }),
                description: (0, T.kg)("Automated trading at your fingertips. No coding needed."),
                href: "https://defentraders.site",
                icon: (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(ta.A, {
                        iconSize: "xs"
                    }), (0, l.jsx)("h1", {
                        children: "Prof Auto Trading"
                    })]
                }),
                showInEU: !1
            }];
            h.fv.traders_hub, tr.A, h.fv.reports, ti.A, (0, T.kg)("Reports"), h.fv.cashier, ta.A, (0, T.kg)("Cashier");
            let ts = (0, O.PA)(() => {
                let {
                    localize: e
                } = (0, T.c3)(), {
                    has_wallet: t = !1
                } = (0, eO.A)() || {}, n = (0, ep.Pj)(), i = new URLSearchParams(window.location.search).get("account"), a = (null == n ? void 0 : n.client) ? ? {}, r = a.is_virtual || "demo" === i || !1, o = (0, e$.y5)("cfds", t, r) || h.fv.traders_hub, s = o;
                try {
                    let e = new URL(o);
                    r ? e.searchParams.set("account", "demo") : a.currency && e.searchParams.set("account", a.currency), s = e.toString()
                } catch (e) {
                    console.error("Error parsing redirect URL:", e)
                }
                return (0, l.jsx)(tn.f, {
                    buttonProps: {
                        icon: to["1"].buttonIcon
                    },
                    bottomLinkProps: {
                        href: s
                    },
                    children: to.map(t => {
                        let {
                            active: n,
                            description: i,
                            href: a,
                            icon: r
                        } = t;
                        return (0, l.jsx)(tl.W, {
                            active: n,
                            className: "platform-switcher",
                            description: e("{{description}}", {
                                description: i
                            }),
                            href: window.location.search ? `${a}/${window.location.search}` : a,
                            icon: r
                        }, i)
                    })
                })
            });
            var tc = n(51699),
                td = n(14568);
            let tu = (0, O.PA)(e => {
                    let {
                        onOpenSubmenu: t
                    } = e, {
                        isDesktop: n
                    } = (0, d.Y)(), {
                        client: i
                    } = (0, ep.Pj)(), r = n ? "sm" : "md", {
                        config: o
                    } = (e => {
                        let {
                            localize: t
                        } = (0, T.c3)(), {
                            is_dark_mode_on: n,
                            toggleTheme: i
                        } = (0, G.A)(), {
                            oAuthLogout: a
                        } = (0, ek.$)({
                            handleLogout: async () => null == e ? void 0 : e.logout(),
                            client: e
                        });
                        return {
                            config: [
                                [{
                                    as: "button",
                                    label: t("Dark theme"),
                                    LeftComponent: tc.A,
                                    RightComponent: (0, l.jsx)(td.j, {
                                        value: n,
                                        onChange: i
                                    })
                                }].filter(Boolean), (null == e ? void 0 : e.is_logged_in) ? [{
                                    as: "button",
                                    label: t("Log out"),
                                    LeftComponent: eB.A,
                                    onClick: a,
                                    removeBorderBottom: !0
                                }] : []
                            ]
                        }
                    })(i);
                    return (0, l.jsxs)("div", {
                        className: "mobile-menu__content",
                        children: [(0, l.jsx)("div", {
                            className: "mobile-menu__content__platform",
                            children: (0, l.jsx)(ts, {})
                        }), (0, l.jsx)("div", {
                            className: "mobile-menu__content__items",
                            children: o.map((e, n) => {
                                let i = e.find(e => {
                                    let {
                                        removeBorderBottom: t
                                    } = e;
                                    return t
                                });
                                return (0, l.jsx)("div", {
                                    className: (0, a.A)("mobile-menu__content__items--padding", {
                                        "mobile-menu__content__items--bottom-border": !i
                                    }),
                                    "data-testid": "dt_menu_item",
                                    children: e.map(e => {
                                        let {
                                            LeftComponent: n,
                                            RightComponent: i,
                                            as: o,
                                            href: s,
                                            label: c,
                                            onClick: d,
                                            submenu: u,
                                            target: h,
                                            isActive: m
                                        } = e, g = "Deriv.com" === c;
                                        return "a" === o ? (0, l.jsx)(tt.D, {
                                            as: "a",
                                            className: (0, a.A)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !g,
                                                "mobile-menu__content__items__item--active": m
                                            }),
                                            disableHover: !0,
                                            href: s,
                                            leftComponent: (0, l.jsx)(n, {
                                                className: "mobile-menu__content__items--right-margin",
                                                height: 16,
                                                width: 16
                                            }),
                                            target: h,
                                            children: (0, l.jsx)(e_.E, {
                                                size: r,
                                                children: c
                                            })
                                        }, c) : (0, l.jsx)(tt.D, {
                                            as: "button",
                                            className: (0, a.A)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !g,
                                                "mobile-menu__content__items__item--active": m
                                            }),
                                            disableHover: !0,
                                            leftComponent: (0, l.jsx)(n, {
                                                className: "mobile-menu__content__items--right-margin",
                                                iconSize: "xs"
                                            }),
                                            onClick: () => {
                                                u && t ? t(u) : d && d()
                                            },
                                            rightComponent: u ? (0, l.jsx)(te.A, {
                                                className: "mobile-menu__content__items--chevron",
                                                iconSize: "xs"
                                            }) : i,
                                            children: (0, l.jsx)(e_.E, {
                                                size: r,
                                                children: c
                                            })
                                        }, c)
                                    })
                                }, n)
                            })
                        })]
                    })
                }),
                th = e => {
                    let {
                        hideLanguageSetting: t,
                        openLanguageSetting: n
                    } = e, {
                        currentLang: a,
                        localize: r
                    } = (0, T.c3)(), {
                        isDesktop: o
                    } = (0, d.Y)(), s = (0, i.useMemo)(() => {
                        var e;
                        return null == (e = U.find(e => {
                            let {
                                code: t
                            } = e;
                            return t === a
                        })) ? void 0 : e.placeholderIconInMobile
                    }, [a]);
                    return (0, l.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0, l.jsx)(e_.E, {
                            size: o ? "md" : "lg",
                            weight: "bold",
                            children: r("Menu")
                        }), !t && (0, l.jsxs)("button", {
                            className: "mobile-menu__header__language items-center",
                            onClick: n,
                            children: [s, (0, l.jsx)(e_.E, {
                                className: "ml-[0.4rem]",
                                size: o ? "xs" : "sm",
                                weight: "bold",
                                children: a
                            })]
                        })]
                    })
                };
            var tm = n(60880),
                tg = n(87435),
                tp = n(16176);
            let tv = () => {
                let {
                    localize: e
                } = (0, T.c3)(), t = [{
                    icon: tm.A,
                    label: e("Open positions"),
                    href: h.fv.positions
                }, {
                    icon: tg.A,
                    label: e("Trade table"),
                    href: h.fv.profit
                }, {
                    icon: tp.A,
                    label: e("Statement"),
                    href: h.fv.statement
                }];
                return (0, l.jsx)("div", {
                    className: "mobile-menu__content__items",
                    children: (0, l.jsx)("div", {
                        className: "mobile-menu__content__items--padding",
                        children: t.map(e => {
                            let {
                                icon: t,
                                label: n,
                                href: i
                            } = e;
                            return (0, l.jsx)(tt.D, {
                                as: "a",
                                className: "mobile-menu__content__items__item mobile-menu__content__items__icons",
                                disableHover: !0,
                                href: i,
                                leftComponent: (0, l.jsx)(t, {
                                    className: "mobile-menu__content__items--right-margin",
                                    iconSize: "xs"
                                }),
                                children: (0, l.jsx)(e_.E, {
                                    size: "sm",
                                    children: n
                                })
                            }, n)
                        })
                    })
                })
            };
            var t_ = n(21014);
            let tx = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsx)("button", {
                        onClick: t,
                        children: (0, l.jsx)(t_.A, {
                            iconSize: "xs",
                            fill: "var(--text-general)"
                        })
                    })
                },
                tf = () => {
                    let [e, t] = (0, i.useState)(!1), [n, a] = (0, i.useState)(null), {
                        currentLang: r = "EN",
                        localize: o,
                        switchLanguage: s
                    } = (0, T.c3)(), {
                        hideModal: c,
                        isModalOpenFor: u,
                        showModal: h
                    } = v(), {
                        isDesktop: m
                    } = (0, d.Y)(), g = () => {
                        t(!1), a(null)
                    }, p = !!u("MobileLanguagesDrawer");
                    return m ? null : (0, l.jsxs)("div", {
                        className: "mobile-menu",
                        children: [(0, l.jsx)("div", {
                            className: "mobile-menu__toggle",
                            children: (0, l.jsx)(tx, {
                                onClick: () => t(!0)
                            })
                        }), (0, l.jsxs)(e4._, {
                            isOpen: e,
                            onCloseDrawer: g,
                            width: "29.5rem",
                            children: [(0, l.jsx)(e4._.Header, {
                                onCloseDrawer: g,
                                children: (0, l.jsx)(th, {
                                    hideLanguageSetting: p,
                                    openLanguageSetting: () => h("MobileLanguagesDrawer")
                                })
                            }), (0, l.jsx)(e4._.Content, {
                                children: p ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, l.jsx)(e5, {
                                            buttonText: o("Language"),
                                            onClick: c
                                        })
                                    }), (0, l.jsx)(e3.R, {
                                        isOpen: !0,
                                        languages: U,
                                        onClose: c,
                                        onLanguageSwitch: e => {
                                            s(e), window.location.replace(_()), window.location.reload()
                                        },
                                        selectedLanguage: r,
                                        wrapperClassName: "mobile-menu__language-drawer"
                                    })]
                                }) : "reports" === n ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, l.jsx)(e5, {
                                            buttonText: o("Reports"),
                                            onClick: () => a(null)
                                        })
                                    }), (0, l.jsx)(tv, {})]
                                }) : (0, l.jsx)(tu, {
                                    onOpenSubmenu: e => a(e)
                                })
                            }), (0, l.jsxs)(e4._.Footer, {
                                className: "mobile-menu__footer",
                                children: [(0, l.jsx)(ex, {}), (0, l.jsx)(ed, {})]
                            })]
                        })]
                    })
                };
            var tj = n(70619);
            let tb = n.p + "static/image/reload.60731af4.png",
                tw = n.p + "static/image/social.bff312e3.png",
                ty = (0, O.PA)(() => {
                    let [e, t] = (0, i.useState)(!1), n = (0, i.useRef)(null), r = () => t(e => !e);
                    (0, i.useEffect)(() => {
                        let e = e => {
                            n.current && !n.current.contains(e.target) && t(!1)
                        };
                        return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
                            document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
                        }
                    }, []);
                    let {
                        isDesktop: o
                    } = (0, d.Y)(), {
                        isAuthorizing: s,
                        activeLoginid: c
                    } = (0, eI.d)(), {
                        client: u
                    } = (0, ep.Pj)() ? ? {}, {
                        data: m
                    } = (e => {
                        var t;
                        let {
                            allBalanceData: n
                        } = e, {
                            accountList: a,
                            activeLoginid: r
                        } = (0, eI.d)(), o = (0, i.useMemo)(() => null == a ? void 0 : a.find(e => e.loginid === r), [r, a]), s = null == n || null == (t = n.accounts) ? void 0 : t[(null == o ? void 0 : o.loginid) ? ? ""];
                        return {
                            data: (0, i.useMemo)(() => {
                                var e, t;
                                return o ? { ...o,
                                    balance: (0, h.nmX)(null == s || null == (e = s.balance) ? void 0 : e.toFixed((0, h.QWi)(s.currency))) ? ? "0",
                                    currencyLabel: (null == o ? void 0 : o.is_virtual) ? (0, T.kg)("Demo") : null == o ? void 0 : o.currency,
                                    icon: (0, l.jsx)(eA, {
                                        currency: null == o || null == (t = o.currency) ? void 0 : t.toLowerCase(),
                                        isVirtual: !!(null == o ? void 0 : o.is_virtual)
                                    }),
                                    isVirtual: !!(null == o ? void 0 : o.is_virtual),
                                    isActive: (null == o ? void 0 : o.loginid) === r
                                } : void 0
                            }, [o, r, n])
                        }
                    })({
                        allBalanceData: null == u ? void 0 : u.all_accounts_balance
                    }), {
                        getCurrency: g
                    } = u ? ? {}, p = null == g ? void 0 : g(), {
                        isSingleLoggingIn: v
                    } = (0, ek.$)(), _ = [{
                        name: "TikTok",
                        icon: (0, l.jsx)(tj.kkU, {
                            className: "icon tiktok"
                        }),
                        url: "https://www.tiktok.com/@defentraders.site?_t=zm-8wla8mlnd1u&_r=1"
                    }, {
                        name: "YouTube",
                        icon: (0, l.jsx)(tj.Vk6, {
                            className: "icon youtube"
                        }),
                        url: "https://www.youtube.com/@defentraders"
                    }, {
                        name: "Telegram",
                        icon: (0, l.jsx)(tj.zyo, {
                            className: "icon telegram"
                        }),
                        url: "https://t.me/defentraders"
                    }, {
                        name: "WhatsApp",
                        icon: (0, l.jsx)(tj.EcP, {
                            className: "icon whatsapp"
                        }),
                        url: "https://www.whatsapp.com/channel/0029VbB3ZrULSmbURGCkzw3h"
                    }, {
                        name: "Open Deriv Affiliate",
                        icon: (0, l.jsx)(tj.s9F, {
                            className: "icon whatsapp"
                        }),
                        url: "https://partners.deriv.com/rx?sidi=73D8C1FF-0543-46D6-B3D5-E604FEE77C53"
                    }, {
                        name: "Install Our App",
                        icon: (0, l.jsx)(tj.DGu, {
                            className: "icon whatsapp"
                        }),
                        url: "https://partners.deriv.com/rx?sidi=73D8C1FF-0543-46D6-B3D5-E604FEE77C53"
                    }];
                    return (0, l.jsxs)(eC.Y, {
                        className: (0, a.A)("app-header", {
                            "app-header--desktop": o,
                            "app-header--mobile": !o
                        }),
                        children: [(0, l.jsxs)(eN.m, {
                            style: {
                                cursor: "pointer"
                            },
                            variant: "left",
                            children: [(0, l.jsx)(eS, {}), (0, l.jsx)(tf, {}), (0, l.jsxs)("h1", {
                                className: "brands",
                                onClick: () => {
                                    window.location.href = "https://defentraders.site"
                                },
                                children: ["Defen", (0, l.jsx)("span", {
                                    children: "Traders"
                                })]
                            }), (0, l.jsx)("div", {
                                onClick: () => {
                                    window.location.href = "https://defentraders.site"
                                },
                                children: (0, l.jsx)("img", {
                                    className: "whatsapp1",
                                    src: tb,
                                    alt: "Refresh"
                                })
                            }), o && (0, l.jsxs)("div", {
                                className: "dropdown-container",
                                ref: n,
                                style: {
                                    marginLeft: 10
                                },
                                children: [(0, l.jsx)("div", {
                                    onClick: r,
                                    className: "dropdown-button",
                                    children: (0, l.jsx)("img", {
                                        className: "whatsapp1",
                                        src: tw,
                                        alt: "Social"
                                    })
                                }), e && (0, l.jsx)("div", {
                                    className: "dropdown-menu",
                                    children: (0, l.jsx)("ul", {
                                        children: _.map(e => (0, l.jsx)("li", {
                                            children: "Install Our App" === e.name ? (0, l.jsxs)("a", {
                                                rel: "noopener noreferrer",
                                                onClick: () => {
                                                    window.open("/app/defen-traders.apk"), t(!1)
                                                },
                                                children: [e.icon, (0, l.jsx)("span", {
                                                    children: e.name
                                                })]
                                            }) : (0, l.jsxs)("a", {
                                                href: e.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                onClick: () => t(!1),
                                                children: [e.icon, (0, l.jsx)("span", {
                                                    children: e.name
                                                })]
                                            })
                                        }, e.name))
                                    })
                                })]
                            })]
                        }), (0, l.jsx)(eN.m, {
                            variant: "right",
                            children: (() => {
                                let i, a;
                                if (s || v) return (0, l.jsx)(eM, {
                                    isLoggedIn: !0,
                                    isMobile: !o,
                                    speed: 3
                                });
                                if (!c) return (0, l.jsxs)("div", {
                                    className: "auth-actions",
                                    children: [!o && (0, l.jsxs)("div", {
                                        className: "dropdown-container",
                                        ref: n,
                                        children: [(0, l.jsx)("div", {
                                            onClick: r,
                                            className: "dropdown-button",
                                            children: (0, l.jsx)("img", {
                                                className: "whatsapp1",
                                                src: tw,
                                                alt: "Social"
                                            })
                                        }), e && (0, l.jsx)("div", {
                                            className: "dropdown-menu",
                                            children: (0, l.jsx)("ul", {
                                                children: _.map(e => (0, l.jsx)("li", {
                                                    children: "Install Our App" === e.name ? (0, l.jsxs)("a", {
                                                        rel: "noopener noreferrer",
                                                        onClick: () => {
                                                            window.open("/app/defen-traders.apk"), t(!1)
                                                        },
                                                        children: [e.icon, (0, l.jsx)("span", {
                                                            children: e.name
                                                        })]
                                                    }) : (0, l.jsxs)("a", {
                                                        href: e.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        onClick: () => t(!1),
                                                        children: [e.icon, (0, l.jsx)("span", {
                                                            children: e.name
                                                        })]
                                                    })
                                                }, e.name))
                                            })
                                        })]
                                    }), (0, l.jsx)(ew.A, {
                                        tertiary: !0,
                                        onClick: async () => {
                                            window.location.href = "https://oauth.deriv.com/oauth2/authorize?app_id=74892"
                                        },
                                        children: (0, l.jsx)(T.we, {
                                            i18n_default_text: "Login"
                                        })
                                    }), (0, l.jsx)(ew.A, {
                                        className: "signup",
                                        primary: !0,
                                        onClick: () => {
                                            window.location.href = "https://track.deriv.com/_Jq3B8Gf_TMdMjdsyM5hasGNd7ZgqdRLk/1/"
                                        },
                                        children: (0, l.jsx)(T.we, {
                                            i18n_default_text: "Signup"
                                        })
                                    })]
                                });
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [o && (i = new URL(h.fv.account_settings), a = new URLSearchParams(window.location.search).get("account"), void((null == u ? void 0 : u.is_virtual) || "demo" === a ? i.searchParams.set("account", "demo") : p && i.searchParams.set("account", p))), !o && (0, l.jsxs)("div", {
                                        className: "dropdown-container",
                                        ref: n,
                                        children: [(0, l.jsx)("div", {
                                            onClick: r,
                                            className: "dropdown-button",
                                            children: (0, l.jsx)("img", {
                                                className: "whatsapp1",
                                                src: tw,
                                                alt: "Social"
                                            })
                                        }), e && (0, l.jsx)("div", {
                                            className: "dropdown-menu",
                                            children: (0, l.jsx)("ul", {
                                                children: _.map(e => (0, l.jsx)("li", {
                                                    children: "Install Our App" === e.name ? (0, l.jsxs)("a", {
                                                        rel: "noopener noreferrer",
                                                        onClick: () => {
                                                            window.open("/app/defen-traders.apk"), t(!1)
                                                        },
                                                        children: [e.icon, (0, l.jsx)("span", {
                                                            children: e.name
                                                        })]
                                                    }) : (0, l.jsxs)("a", {
                                                        href: e.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        onClick: () => t(!1),
                                                        children: [e.icon, (0, l.jsx)("span", {
                                                            children: e.name
                                                        })]
                                                    })
                                                }, e.name))
                                            })
                                        })]
                                    }), (0, l.jsx)(e6, {
                                        activeAccount: m
                                    })]
                                })
                            })()
                        })]
                    })
                }),
                tA = e => {
                    let {
                        children: t
                    } = e, n = localStorage.getItem("theme") ? ? "light", {
                        ui: a
                    } = (0, ep.Pj)() ? ? {
                        ui: {
                            setDevice: () => {}
                        }
                    }, {
                        setDevice: r
                    } = a, {
                        isDesktop: o,
                        isMobile: s,
                        isTablet: c
                    } = (0, d.Y)();
                    return (0, i.useEffect)(() => {
                        let e = document.querySelector("body");
                        e && ("light" === n ? (e.classList.remove("theme--dark"), e.classList.add("theme--light")) : (e.classList.remove("theme--light"), e.classList.add("theme--dark")))
                    }, [n]), (0, i.useEffect)(() => {
                        s ? r("mobile") : c ? r("tablet") : r("desktop")
                    }, [o, s, c, r]), (0, l.jsx)("div", {
                        className: "main-body",
                        children: t
                    })
                },
                tI = () => {
                    var e;
                    let t, {
                            isDesktop: n
                        } = (0, d.Y)(),
                        m = "/callback" === window.location.pathname,
                        g = "true" === r.A.get("logged_state"),
                        p = window.location.pathname.includes("endpoint"),
                        v = JSON.parse(localStorage.getItem("clientAccounts") ? ? "{}"),
                        _ = new URLSearchParams(window.location.search),
                        x = _.get("account") ? ? "",
                        f = JSON.parse(localStorage.getItem("accountsList") ? ? "{}"),
                        j = Object.keys(f).length > 0,
                        b = Object.values(v).some(e => e.currency === x) || "demo" === x || "" === x,
                        [w, y] = (0, i.useState)(b);
                    (0, i.useEffect)(() => (window.setClientHasCurrency = y, () => {
                        delete window.setClientHasCurrency
                    }), []);
                    let A = [...h.lpQ, ...h.qIf],
                        I = null == (e = _.get("account") ? ? "") ? void 0 : e.toUpperCase(),
                        k = A.includes(I),
                        C = [],
                        N = e => {
                            let {
                                data: n
                            } = e;
                            if ("authorize" === n.msg_type) {
                                var l;
                                let e = ((null == n || null == (l = n.authorize) ? void 0 : l.account_list) || []).filter(e => 0 === e.is_disabled);
                                C.push(e || []);
                                let i = new Set(Object.values(v).map(e => e.currency)),
                                    a = C.flat().some(e => i.has(e.currency) ? (e.currency, !1) : (console.log("Missing currency:", e.currency), sessionStorage.setItem("query_param_currency", e.currency), !0)),
                                    r = !1,
                                    o = "";
                                for (let t of e)
                                    if (t.loginid && !f[t.loginid]) {
                                        r = !0, (o = t.currency || "") && sessionStorage.setItem("query_param_currency", o);
                                        break
                                    }
                                if (a || r) y(!1);
                                else {
                                    let t = (null == e ? void 0 : e.find(e => e.currency === x)) || (null == e ? void 0 : e[0]),
                                        n = sessionStorage.getItem("query_param_currency") || (null == t ? void 0 : t.currency) || "USD";
                                    n = `account=${n}`, y(!0), new URLSearchParams(window.location.search).has("account") || window.history.pushState({}, "", `${window.location.pathname}?${n}`), y(!0)
                                }
                                t && (null == t || t.unsubscribe())
                            }
                        };
                    return (0, i.useEffect)(() => {
                        k && s.api_base.api && x && A.includes(x.toUpperCase()) && (t = s.api_base.api.onMessage().subscribe(N))
                    }, []), (0, i.useEffect)(() => {
                        x && sessionStorage.setItem("query_param_currency", x);
                        let e = !p && !m && !w;
                        if ((0, u.C)() && g && !j && !p && !m || e) {
                            let e = sessionStorage.getItem("query_param_currency") || x || "USD";
                            e && sessionStorage.setItem("query_param_currency", e);
                            try {
                                (0, c.ZF)({
                                    redirectCallbackUri: `${window.location.origin}/callback`,
                                    ...e ? {
                                        state: {
                                            account: e
                                        }
                                    } : {}
                                }).catch(e => {
                                    console.error(e)
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }, [g, j, p, m, w]), (0, l.jsxs)("div", {
                        className: (0, a.A)("layout", {
                            responsive: n
                        }),
                        children: [!m && (0, l.jsx)(ty, {}), (0, l.jsx)(tA, {
                            children: (0, l.jsx)(o.sv, {})
                        }), !m && n && (0, l.jsx)(eb, {})]
                    })
                }
        },
        80576(e, t, n) {
            n.d(t, {
                A: () => g
            });
            var l = n(74848),
                i = n(96540),
                a = n(46942),
                r = n.n(a),
                o = n(5143),
                s = n(15394),
                c = n(27197),
                d = n(89013),
                u = n(70537),
                h = n(9230),
                m = n(57667);
            let g = e => {
                let {
                    alignment: t,
                    children: n,
                    className: a,
                    classNameBubble: g,
                    classNameTarget: p,
                    classNameTargetIcon: v,
                    counter: _,
                    disable_message_icon: x,
                    disable_target_icon: f,
                    has_error: j,
                    icon: b,
                    id: w,
                    is_open: y,
                    is_bubble_hover_enabled: A,
                    margin: I = 0,
                    message: k,
                    onBubbleClose: C,
                    onBubbleOpen: N,
                    onClick: L = () => void 0,
                    relative_render: S = !1,
                    should_disable_pointer_events: z = !1,
                    should_show_cursor: E,
                    zIndex: M = "1",
                    data_testid: D,
                    arrow_styles: R
                } = e, P = i.useRef(), [F, U] = i.useState(void 0), [T, W] = i.useState(!1), {
                    isDesktop: O
                } = (0, h.Y)(), [$, B] = (0, s.M)(null, !0), [V, q] = (0, s.v)(), H = i.useMemo(() => !O && void 0 === y, [O, y]);
                i.useEffect(() => {
                    P.current && U(P.current)
                }, [j]), i.useEffect(() => {
                    !B && H && W(!1)
                }, [B, H]);
                let Y = () => {
                        N && N()
                    },
                    G = () => {
                        C && C()
                    },
                    X = r()(v, b),
                    Z = B && k && (!H || T);
                return (0, l.jsxs)("div", {
                    ref: $,
                    className: r()({
                        "dc-popover__wrapper": S
                    }),
                    onClick: e => {
                        L(e), H && W(!T)
                    },
                    "data-testid": "dt_popover_wrapper",
                    children: [S && (0, l.jsx)("div", {
                        className: "dc-popover__container",
                        style: {
                            zIndex: M
                        },
                        children: (0, l.jsx)("div", {
                            ref: P,
                            className: "dc-popover__container-relative",
                            "data-testid": "dt_popover_relative_container"
                        })
                    }), (F || !S) && (0, l.jsx)(o.Popover, {
                        isOpen: y ? ? (Z || A && q),
                        positions: [t],
                        padding: I + 8,
                        containerClassName: r()({
                            "react-tiny-popover-container--disabled-pointer-event": z,
                            "react-tiny-popover-cursor-option": E
                        }),
                        ...S ? {
                            parentElement: F,
                            contentLocation: e => {
                                let {
                                    childRect: n,
                                    popoverRect: l,
                                    nudgedLeft: i
                                } = e, a = document.body.clientWidth, r = n.right + (l.width - n.width / 2), o = 0, s = 0;
                                switch (t) {
                                    case "left":
                                        s = -1 * Math.abs((l.height > l.width ? i : l.width) + I), o = n.height > l.height ? (n.height - l.height) / 2 : -((l.height - n.height) / 2 * 1);
                                        break;
                                    case "right":
                                        s = l.width + I, o = n.height > l.height ? (n.height - l.height) / 2 : -((l.height - n.height) / 2 * 1);
                                        break;
                                    case "top":
                                        s = r > a ? -1 * Math.abs(r - a) : 0, o = -1 * Math.abs(l.height + I);
                                        break;
                                    case "bottom":
                                        s = r > a ? -1 * Math.abs(r - a) : 0, o = n.height + I
                                }
                                return {
                                    top: o,
                                    left: s
                                }
                            }
                        } : {
                            containerStyle: {
                                zIndex: M
                            }
                        },
                        content: e => {
                            let {
                                position: t,
                                childRect: n,
                                popoverRect: i
                            } = e;
                            return (0, l.jsx)(o.ArrowContainer, {
                                position: t,
                                childRect: n,
                                popoverRect: i,
                                arrowColor: j ? "var(--status-danger)" : "var(--general-active)",
                                arrowSize: 5,
                                arrowStyle: S ? {
                                    borderTop: "10px solid transparent",
                                    borderLeft: "10px solid transparent",
                                    borderRight: `10px solid ${j?"var(--status-danger)":"var(--general-active)"}`,
                                    transform: "rotate(315deg)",
                                    right: "0px",
                                    top: "5px",
                                    height: "10px",
                                    margin: "auto",
                                    bottom: "0px"
                                } : { ...R
                                },
                                children: (0, l.jsxs)("div", {
                                    id: w,
                                    onMouseEnter: Y,
                                    onMouseLeave: G,
                                    className: r()(g, "dc-popover__bubble", {
                                        "dc-popover__bubble--error": j
                                    }),
                                    ref: V,
                                    children: [!x && "info" === b && (0, l.jsx)("i", {
                                        className: "dc-popover__bubble__icon",
                                        children: (0, l.jsx)(c.A, {})
                                    }), j && (0, l.jsx)(m.A, {
                                        size: "xxs",
                                        color: "colored-background",
                                        children: k
                                    }) || (0, l.jsx)(m.A, {
                                        lineHeight: "md",
                                        size: "xxs",
                                        className: "dc-popover__bubble__text",
                                        children: k
                                    })]
                                })
                            })
                        },
                        children: (0, l.jsx)("div", {
                            "data-testid": D,
                            className: r()("dc-popover", a),
                            id: w,
                            children: (0, l.jsxs)("div", {
                                className: r()(p, "dc-popover__target"),
                                children: [!f && (0, l.jsxs)("i", {
                                    className: k ? "dc-popover__target__icon" : "dc-popover__target__icon--disabled",
                                    children: ["info" === b && (0, l.jsx)(c.A, {
                                        className: X
                                    }), "question" === b && (0, l.jsx)(u.A, {
                                        className: X
                                    }), "dot" === b && (0, l.jsx)(d.A, {
                                        className: X
                                    }), "counter" === b && (0, l.jsx)("span", {
                                        className: X,
                                        children: _
                                    })]
                                }), n]
                            })
                        })
                    })]
                })
            }
        },
        4255(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var l = n(96540),
                i = n(13599),
                a = JSON.parse('{"cs_chat_livechat":true,"cs_chat_whatsapp":true,"marketing_growthbook":true,"passkeys":true,"tracking_GTM":true,"tracking_datadog":true,"tracking_hotjar":true,"tracking_rudderstack":true}');
            let r = async function() {
                    let e = await fetch("https://app-config-prod.firebaseio.com/remote_config/deriv-app.json");
                    if (!e.ok) throw Error("Remote Config Server is out of reach!");
                    return e.json()
                },
                o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        [t, n] = (0, l.useState)(a);
                    return (0, l.useEffect)(() => {
                        e && r().then(async e => {
                            await i.BF.hashObject(e) !== await i.BF.hashObject(t) && n(e)
                        }).catch(e => {
                            console.error("Remote Config error: ", e)
                        })
                    }, [e]), {
                        data: t
                    }
                }
        },
        15394(e, t, n) {
            n.d(t, {
                M: () => i,
                v: () => a
            });
            var l = n(96540);
            let i = (e, t) => {
                    let [n, i] = l.useState(!1), a = l.useRef(null), r = e || a, o = () => i(!0), s = () => i(!1);
                    return l.useEffect(() => {
                        let e = r.current;
                        if (e) return t ? (e.addEventListener("mouseenter", o), e.addEventListener("mouseleave", s)) : (e.addEventListener("mouseover", o), e.addEventListener("mouseout", s)), () => {
                            t ? (e.removeEventListener("mouseenter", o), e.removeEventListener("mouseleave", s)) : (e.removeEventListener("mouseover", o), e.removeEventListener("mouseout", s))
                        }
                    }, [r, t]), [r, n]
                },
                a = () => {
                    let [e, t] = l.useState(!1), n = l.useCallback(() => t(!0), []), i = l.useCallback(() => t(!1), []), a = l.useRef(null);
                    return [l.useCallback(e => {
                        a.current && (a.current.removeEventListener("mouseover", n), a.current.removeEventListener("mouseout", i)), a.current = e, a.current && (a.current.addEventListener("mouseover", n), a.current.addEventListener("mouseout", i))
                    }, [n, i]), e]
                }
        },
        11139(e, t, n) {
            n.d(t, {
                Ay: () => s,
                GZ: () => o
            });
            var l = n(96540),
                i = n(88486),
                a = n(52782),
                r = n(4255);
            let o = () => {
                    let [e, t] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        let e = Date.now(),
                            n = setInterval(() => {
                                "function" == typeof window.Intercom ? (t(!0), clearInterval(n)) : Date.now() - e >= 5e3 && clearInterval(n)
                            }, 100);
                        return () => clearInterval(n)
                    }, []), e
                },
                s = e => {
                    let {
                        featureFlagValue: t
                    } = (e => {
                        let {
                            featureFlag: t,
                            defaultValue: n
                        } = e, o = void 0 !== n && n, [s, c] = (0, l.useState)((null === a.Analytics || void 0 === a.Analytics ? void 0 : a.Analytics.getFeatureValue(t, o)) ? ? o), {
                            isGBLoaded: d
                        } = (() => {
                            let [e, t] = (0, l.useState)(!1), {
                                data: n
                            } = (0, r.A)(!0), [i, o] = (0, l.useState)(!0);
                            return (0, l.useEffect)(() => {
                                let e;
                                if (null == n ? void 0 : n.marketing_growthbook) {
                                    let n = 0;
                                    e = setInterval(() => {
                                        var l;
                                        if (n > 20) {
                                            clearInterval(e), o(!1);
                                            return
                                        }
                                        n += 1, (null === a.Analytics || void 0 === a.Analytics || null == (l = a.Analytics.getInstances()) ? void 0 : l.ab) && (t(!0), clearInterval(e))
                                    }, 500)
                                } else o(!1);
                                return () => {
                                    clearInterval(e)
                                }
                            }, [n.marketing_growthbook]), {
                                isGBLoaded: e,
                                isGBAvailable: i
                            }
                        })(), u = (0, i.aq)();
                        return "undefined" != typeof window && (window.Analytics = a.Analytics), (0, l.useEffect)(() => {
                            if (d) {
                                var e, n, l, i;
                                if (null === a.Analytics || void 0 === a.Analytics || null == (e = a.Analytics.getInstances()) ? void 0 : e.ab) {
                                    let e = () => {
                                        let e = null === a.Analytics || void 0 === a.Analytics ? void 0 : a.Analytics.getFeatureValue(t, o);
                                        u() && c(e)
                                    };
                                    e(), null === a.Analytics || void 0 === a.Analytics || null == (i = a.Analytics.getInstances()) || null == (l = i.ab) || null == (n = l.GrowthBook) || n.setRenderer(() => {
                                        e()
                                    })
                                }
                            }
                        }, [d, o, t, u]), {
                            featureFlagValue: s,
                            isGBLoaded: d
                        }
                    })({
                        featureFlag: "enable_intercom_dbot"
                    }), n = (0, i.nW)(t ? "https://static.deriv.com/scripts/intercom/v1.0.2.js" : null);
                    (0, l.useEffect)(() => {
                        var l;
                        let i;
                        if (t && "ready" === n && (null == (l = window) ? void 0 : l.DerivInterCom)) return window.DerivInterCom.initialize({
                            hideLauncher: !0,
                            token: e
                        }), i = setInterval(() => {
                            var e;
                            (null == (e = window) ? void 0 : e.Intercom) && clearInterval(i)
                        }, 500), () => {
                            clearInterval(i)
                        }
                    }, [t, n, e])
                }
        },
        85004(e, t, n) {
            n.d(t, {
                A: () => r
            });
            var l = n(96540),
                i = n(33718);
            let a = {
                    Demo: {
                        dark: "IcWalletDerivDemoDark",
                        light: "IcWalletDerivDemoLight"
                    },
                    USD: {
                        dark: "IcWalletCurrencyUsd",
                        light: "IcWalletCurrencyUsd"
                    },
                    EUR: {
                        dark: "IcWalletCurrencyEur",
                        light: "IcWalletCurrencyEur"
                    },
                    AUD: {
                        dark: "IcWalletCurrencyAud",
                        light: "IcWalletCurrencyAud"
                    },
                    GBP: {
                        dark: "IcWalletCurrencyGbp",
                        light: "IcWalletCurrencyGbp"
                    },
                    BTC: {
                        dark: "IcWalletBitcoinDark",
                        light: "IcWalletBitcoinLight"
                    },
                    ETH: {
                        dark: "IcWalletEthereumDark",
                        light: "IcWalletEthereumLight"
                    },
                    USDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    eUSDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    tUSDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    UST: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    LTC: {
                        dark: "IcWalletLiteCoinDark",
                        light: "IcWalletLiteCoinLight"
                    },
                    USDC: {
                        dark: "IcWalletUsdCoinDark",
                        light: "IcWalletUsdCoinLight"
                    },
                    XRP: {
                        dark: "IcWalletXrpDark",
                        light: "IcWalletXrpLight"
                    }
                },
                r = () => {
                    let e = (0, i.Pj)(),
                        {
                            accounts: t,
                            all_accounts_balance: n
                        } = (null == e ? void 0 : e.client) || {
                            accounts: {},
                            all_accounts_balance: {
                                accounts: {}
                            }
                        },
                        r = (0, l.useMemo)(() => {
                            var l, i;
                            return e && (null == (i = Object.keys(t)) || null == (l = i.filter(e => (null == t ? void 0 : t[e].account_category) === "wallet")) ? void 0 : l.map(e => {
                                var l, i, r, o, s, c;
                                let d = null == t ? void 0 : t[e],
                                    u = d.currency,
                                    h = !!d.is_disabled,
                                    m = !!d.is_virtual,
                                    g = null == (l = d.landing_company_name) ? void 0 : l.replace("maltainvest", "malta"),
                                    p = null == d || null == (r = d.linked_to) || null == (i = r.find(e => (null == e ? void 0 : e.platform) === "dtrade")) ? void 0 : i.loginid,
                                    v = null == n || null == (s = n.accounts) || null == (o = s[p ? ? ""]) ? void 0 : o.balance,
                                    _ = !!(null == t || null == (c = t[p ? ? ""]) ? void 0 : c.is_disabled),
                                    x = m ? "Demo" : u || "",
                                    f = a[x],
                                    j = {
                                        header: {
                                            dark: `wallet-header__${x.toLowerCase()}-bg--dark`,
                                            light: `wallet-header__${x.toLowerCase()}-bg`
                                        },
                                        card: {
                                            dark: `wallet-card__${x.toLowerCase()}-bg--dark`,
                                            light: `wallet-card__${x.toLowerCase()}-bg`
                                        }
                                    };
                                return { ...d,
                                    dtrade_loginid: p,
                                    dtrade_balance: v,
                                    icons: f,
                                    icon_type: m && "demo",
                                    is_disabled: h,
                                    is_virtual: m,
                                    is_malta_wallet: "malta" === g,
                                    landing_company_name: g,
                                    loginid: e,
                                    gradients: j,
                                    is_dtrader_account_disabled: _
                                }
                            })) || []
                        }, [e, t, null == n ? void 0 : n.accounts]),
                        o = (0, l.useMemo)(() => r && 0 !== r.length ? [...r].sort((e, t) => e.is_virtual !== t.is_virtual ? e.is_virtual ? 1 : -1 : (e.currency || "USD").localeCompare(t.currency || "USD")) : [], [r]);
                    return {
                        data: o,
                        has_wallet: o && o.length > 0
                    }
                }
        },
        18130(e, t, n) {
            n.d(t, {
                A: () => a
            });
            var l = n(96540),
                i = n(33718);
            let a = () => {
                let {
                    ui: e
                } = (0, i.Pj)() ? ? {
                    ui: {
                        setDarkMode: () => {},
                        is_dark_mode_on: !1
                    }
                }, {
                    setDarkMode: t,
                    is_dark_mode_on: n
                } = e;
                return {
                    toggleTheme: (0, l.useCallback)(() => {
                        let e = document.querySelector("body");
                        e && (e.classList.contains("theme--dark") ? (localStorage.setItem("theme", "light"), e.classList.remove("theme--dark"), e.classList.add("theme--light"), t(!1)) : (localStorage.setItem("theme", "dark"), e.classList.remove("theme--light"), e.classList.add("theme--dark"), t(!0)))
                    }, [t]),
                    is_dark_mode_on: n,
                    setDarkMode: t
                }
            }
        },
        42436(e, t, n) {
            n.d(t, {
                RX: () => r,
                S9: () => a,
                y5: () => o
            });
            var l = n(28176),
                i = n(52782);
            let a = () => {
                    let e = window.location.hostname,
                        t = "deriv.com",
                        n = e.includes("staging"),
                        l = e.includes("localhost") || e.includes("test") || /^\d+\.\d+\.\d+\.\d+$/.test(e);
                    return n || l ? `https://staging-hub.${t}` : `https://hub.${t}`
                },
                r = () => {
                    let e = a(),
                        t = `${e}/tradershub/redirect?action=redirect_to&redirect_to=wallet`,
                        n = new URLSearchParams(window.location.search).get("account"),
                        l = "demo" === n ? "demo" : n;
                    return l ? `${t}&account=${l}` : t
                },
                o = function(e, t) {
                    let n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (n = !!(null === i.Analytics || void 0 === i.Analytics ? void 0 : i.Analytics.getFeatureValue("hub_enabled_country_list", {})), t && n) {
                        let t, n, l, i, r;
                        return t = a(), n = "home", "cfds" === e ? n = "cfds" : "reports" === e ? n = "reports" : "cashier" === e && (n = "cashier"), l = `${t}/tradershub/redirect?action=redirect_to&redirect_to=${n}`, (r = "demo" === (i = new URLSearchParams(window.location.search).get("account")) ? "demo" : i) ? `${l}&account=${r}` : l
                    }
                    let o = l.fv.traders_hub;
                    if (r) {
                        let e = new URL(o);
                        return e.searchParams.set("account", "demo"), e.toString()
                    }
                    return o
                }
        }
    }
]);