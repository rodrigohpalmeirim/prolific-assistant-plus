/*! For license information please see background.js.LICENSE.txt */
(() => {
    var e = {
            368: (e) => {
                var t = 9007199254740991,
                    r = "[object Function]",
                    n = "[object GeneratorFunction]",
                    s = /^(?:0|[1-9]\d*)$/,
                    i = Object.prototype,
                    o = i.hasOwnProperty,
                    a = i.toString,
                    c = i.propertyIsEnumerable,
                    u = Math.max;
                function l(e, t, r) {
                    var n = e[t];
                    (o.call(e, t) && g(n, r) && (void 0 !== r || t in e)) || (e[t] = r);
                }
                function d(e, r) {
                    return !!(r = null == r ? t : r) && ("number" == typeof e || s.test(e)) && e > -1 && e % 1 == 0 && e < r;
                }
                function g(e, t) {
                    return e === t || (e != e && t != t);
                }
                var h = Array.isArray;
                function p(e) {
                    return (
                        null != e &&
                        (function (e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= t;
                        })(e.length) &&
                        !(function (e) {
                            var t = f(e) ? a.call(e) : "";
                            return t == r || t == n;
                        })(e)
                    );
                }
                function f(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                var _,
                    m,
                    y,
                    w =
                        ((_ = function (e, t) {
                            !(function (e, t, r, n) {
                                r || (r = {});
                                for (var s = -1, i = t.length; ++s < i; ) {
                                    var o = t[s];
                                    l(r, o, e[o]);
                                }
                            })(
                                t,
                                (function (e) {
                                    return p(e)
                                        ? (function (e, t) {
                                              var r =
                                                      h(e) ||
                                                      (function (e) {
                                                          return (
                                                              (function (e) {
                                                                  return (
                                                                      (function (e) {
                                                                          return !!e && "object" == typeof e;
                                                                      })(e) && p(e)
                                                                  );
                                                              })(e) &&
                                                              o.call(e, "callee") &&
                                                              (!c.call(e, "callee") || "[object Arguments]" == a.call(e))
                                                          );
                                                      })(e)
                                                          ? (function (e, t) {
                                                                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                                                                return n;
                                                            })(e.length, String)
                                                          : [],
                                                  n = r.length,
                                                  s = !!n;
                                              for (var i in e) (!t && !o.call(e, i)) || (s && ("length" == i || d(i, n))) || r.push(i);
                                              return r;
                                          })(e, !0)
                                        : (function (e) {
                                              if (!f(e))
                                                  return (function (e) {
                                                      var t = [];
                                                      if (null != e) for (var r in Object(e)) t.push(r);
                                                      return t;
                                                  })(e);
                                              var t,
                                                  r,
                                                  n = ((r = (t = e) && t.constructor), t === (("function" == typeof r && r.prototype) || i)),
                                                  s = [];
                                              for (var a in e) ("constructor" != a || (!n && o.call(e, a))) && s.push(a);
                                              return s;
                                          })(e);
                                })(t),
                                e
                            );
                        }),
                        (m = function (e, t) {
                            var r = -1,
                                n = t.length,
                                s = n > 1 ? t[n - 1] : void 0,
                                i = n > 2 ? t[2] : void 0;
                            for (
                                s = _.length > 3 && "function" == typeof s ? (n--, s) : void 0,
                                    i &&
                                        (function (e, t, r) {
                                            if (!f(r)) return !1;
                                            var n = typeof t;
                                            return !!("number" == n ? p(r) && d(t, r.length) : "string" == n && (t in r)) && g(r[t], e);
                                        })(t[0], t[1], i) &&
                                        ((s = n < 3 ? void 0 : s), (n = 1)),
                                    e = Object(e);
                                ++r < n;

                            ) {
                                var o = t[r];
                                o && _(e, o);
                            }
                            return e;
                        }),
                        (y = u(void 0 === y ? m.length - 1 : y, 0)),
                        function () {
                            for (var e = arguments, t = -1, r = u(e.length - y, 0), n = Array(r); ++t < r; ) n[t] = e[y + t];
                            t = -1;
                            for (var s = Array(y + 1); ++t < y; ) s[t] = e[t];
                            return (
                                (s[y] = n),
                                (function (e, t, r) {
                                    switch (r.length) {
                                        case 0:
                                            return e.call(t);
                                        case 1:
                                            return e.call(t, r[0]);
                                        case 2:
                                            return e.call(t, r[0], r[1]);
                                        case 3:
                                            return e.call(t, r[0], r[1], r[2]);
                                    }
                                    return e.apply(t, r);
                                })(m, this, s)
                            );
                        });
                e.exports = w;
            },
            9448: function (e, t, r) {
                !(function (e) {
                    "use strict";
                    function t(e, t) {
                        (e.super_ = t), (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }));
                    }
                    function n(e, t) {
                        Object.defineProperty(this, "kind", { value: e, enumerable: !0 }), t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: !0 });
                    }
                    function s(e, t, r) {
                        s.super_.call(this, "E", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: r, enumerable: !0 });
                    }
                    function i(e, t) {
                        i.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
                    }
                    function o(e, t) {
                        o.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
                    }
                    function a(e, t, r) {
                        a.super_.call(this, "A", e), Object.defineProperty(this, "index", { value: t, enumerable: !0 }), Object.defineProperty(this, "item", { value: r, enumerable: !0 });
                    }
                    function c(e, t, r) {
                        var n = e.slice((r || t) + 1 || e.length);
                        return (e.length = t < 0 ? e.length + t : t), e.push.apply(e, n), e;
                    }
                    function u(e) {
                        var t = void 0 === e ? "undefined" : k(e);
                        return "object" !== t
                            ? t
                            : e === Math
                            ? "math"
                            : null === e
                            ? "null"
                            : Array.isArray(e)
                            ? "array"
                            : "[object Date]" === Object.prototype.toString.call(e)
                            ? "date"
                            : "function" == typeof e.toString && /^\/.*\//.test(e.toString())
                            ? "regexp"
                            : "object";
                    }
                    function l(e, t, r, n, d, g, h) {
                        h = h || [];
                        var p = (d = d || []).slice(0);
                        if (void 0 !== g) {
                            if (n) {
                                if ("function" == typeof n && n(p, g)) return;
                                if ("object" === (void 0 === n ? "undefined" : k(n))) {
                                    if (n.prefilter && n.prefilter(p, g)) return;
                                    if (n.normalize) {
                                        var f = n.normalize(p, g, e, t);
                                        f && ((e = f[0]), (t = f[1]));
                                    }
                                }
                            }
                            p.push(g);
                        }
                        "regexp" === u(e) && "regexp" === u(t) && ((e = e.toString()), (t = t.toString()));
                        var _ = void 0 === e ? "undefined" : k(e),
                            m = void 0 === t ? "undefined" : k(t),
                            y = "undefined" !== _ || (h && h[h.length - 1].lhs && h[h.length - 1].lhs.hasOwnProperty(g)),
                            w = "undefined" !== m || (h && h[h.length - 1].rhs && h[h.length - 1].rhs.hasOwnProperty(g));
                        if (!y && w) r(new i(p, t));
                        else if (!w && y) r(new o(p, e));
                        else if (u(e) !== u(t)) r(new s(p, e, t));
                        else if ("date" === u(e) && e - t != 0) r(new s(p, e, t));
                        else if ("object" === _ && null !== e && null !== t)
                            if (
                                h.filter(function (t) {
                                    return t.lhs === e;
                                }).length
                            )
                                e !== t && r(new s(p, e, t));
                            else {
                                if ((h.push({ lhs: e, rhs: t }), Array.isArray(e))) {
                                    var v;
                                    for (e.length, v = 0; v < e.length; v++) v >= t.length ? r(new a(p, v, new o(void 0, e[v]))) : l(e[v], t[v], r, n, p, v, h);
                                    for (; v < t.length; ) r(new a(p, v, new i(void 0, t[v++])));
                                } else {
                                    var b = Object.keys(e),
                                        S = Object.keys(t);
                                    b.forEach(function (s, i) {
                                        var o = S.indexOf(s);
                                        o >= 0 ? (l(e[s], t[s], r, n, p, s, h), (S = c(S, o))) : l(e[s], void 0, r, n, p, s, h);
                                    }),
                                        S.forEach(function (e) {
                                            l(void 0, t[e], r, n, p, e, h);
                                        });
                                }
                                h.length = h.length - 1;
                            }
                        else e !== t && (("number" === _ && isNaN(e) && isNaN(t)) || r(new s(p, e, t)));
                    }
                    function d(e, t, r, n) {
                        return (
                            (n = n || []),
                            l(
                                e,
                                t,
                                function (e) {
                                    e && n.push(e);
                                },
                                r
                            ),
                            n.length ? n : void 0
                        );
                    }
                    function g(e, t, r) {
                        if (r.path && r.path.length) {
                            var n,
                                s = e[t],
                                i = r.path.length - 1;
                            for (n = 0; n < i; n++) s = s[r.path[n]];
                            switch (r.kind) {
                                case "A":
                                    g(s[r.path[n]], r.index, r.item);
                                    break;
                                case "D":
                                    delete s[r.path[n]];
                                    break;
                                case "E":
                                case "N":
                                    s[r.path[n]] = r.rhs;
                            }
                        } else
                            switch (r.kind) {
                                case "A":
                                    g(e[t], r.index, r.item);
                                    break;
                                case "D":
                                    e = c(e, t);
                                    break;
                                case "E":
                                case "N":
                                    e[t] = r.rhs;
                            }
                        return e;
                    }
                    function h(e, t, r) {
                        if (e && t && r && r.kind) {
                            for (var n = e, s = -1, i = r.path ? r.path.length - 1 : 0; ++s < i; ) void 0 === n[r.path[s]] && (n[r.path[s]] = "number" == typeof r.path[s] ? [] : {}), (n = n[r.path[s]]);
                            switch (r.kind) {
                                case "A":
                                    g(r.path ? n[r.path[s]] : n, r.index, r.item);
                                    break;
                                case "D":
                                    delete n[r.path[s]];
                                    break;
                                case "E":
                                case "N":
                                    n[r.path[s]] = r.rhs;
                            }
                        }
                    }
                    function p(e, t, r) {
                        if (r.path && r.path.length) {
                            var n,
                                s = e[t],
                                i = r.path.length - 1;
                            for (n = 0; n < i; n++) s = s[r.path[n]];
                            switch (r.kind) {
                                case "A":
                                    p(s[r.path[n]], r.index, r.item);
                                    break;
                                case "D":
                                case "E":
                                    s[r.path[n]] = r.lhs;
                                    break;
                                case "N":
                                    delete s[r.path[n]];
                            }
                        } else
                            switch (r.kind) {
                                case "A":
                                    p(e[t], r.index, r.item);
                                    break;
                                case "D":
                                case "E":
                                    e[t] = r.lhs;
                                    break;
                                case "N":
                                    e = c(e, t);
                            }
                        return e;
                    }
                    function f(e) {
                        return "color: " + T[e].color + "; font-weight: bold";
                    }
                    function _(e, t, r, n) {
                        var s = d(e, t);
                        try {
                            n ? r.groupCollapsed("diff") : r.group("diff");
                        } catch (e) {
                            r.log("diff");
                        }
                        s
                            ? s.forEach(function (e) {
                                  var t = e.kind,
                                      n = (function (e) {
                                          var t = e.kind,
                                              r = e.path,
                                              n = e.lhs,
                                              s = e.rhs,
                                              i = e.index,
                                              o = e.item;
                                          switch (t) {
                                              case "E":
                                                  return [r.join("."), n, "→", s];
                                              case "N":
                                                  return [r.join("."), s];
                                              case "D":
                                                  return [r.join(".")];
                                              case "A":
                                                  return [r.join(".") + "[" + i + "]", o];
                                              default:
                                                  return [];
                                          }
                                      })(e);
                                  r.log.apply(r, ["%c " + T[t].text, f(t)].concat(E(n)));
                              })
                            : r.log("—— no diff ——");
                        try {
                            r.groupEnd();
                        } catch (e) {
                            r.log("—— diff end —— ");
                        }
                    }
                    function m(e, t, r, n) {
                        switch (void 0 === e ? "undefined" : k(e)) {
                            case "object":
                                return "function" == typeof e[n] ? e[n].apply(e, E(r)) : e[n];
                            case "function":
                                return e(t);
                            default:
                                return e;
                        }
                    }
                    function y(e, t) {
                        var r = t.logger,
                            n = t.actionTransformer,
                            s = t.titleFormatter,
                            i =
                                void 0 === s
                                    ? (function (e) {
                                          var t = e.timestamp,
                                              r = e.duration;
                                          return function (e, n, s) {
                                              var i = ["action"];
                                              return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + s.toFixed(2) + " ms)"), i.join(" ");
                                          };
                                      })(t)
                                    : s,
                            o = t.collapsed,
                            a = t.colors,
                            c = t.level,
                            u = t.diff,
                            l = void 0 === t.titleFormatter;
                        e.forEach(function (s, d) {
                            var g = s.started,
                                h = s.startedTime,
                                p = s.action,
                                f = s.prevState,
                                y = s.error,
                                w = s.took,
                                v = s.nextState,
                                b = e[d + 1];
                            b && ((v = b.prevState), (w = b.started - g));
                            var S = n(p),
                                x =
                                    "function" == typeof o
                                        ? o(
                                              function () {
                                                  return v;
                                              },
                                              p,
                                              s
                                          )
                                        : o,
                                k = A(h),
                                E = a.title ? "color: " + a.title(S) + ";" : "",
                                P = ["color: gray; font-weight: lighter;"];
                            P.push(E), t.timestamp && P.push("color: gray; font-weight: lighter;"), t.duration && P.push("color: gray; font-weight: lighter;");
                            var T = i(S, k, w);
                            try {
                                x ? (a.title && l ? r.groupCollapsed.apply(r, ["%c " + T].concat(P)) : r.groupCollapsed(T)) : a.title && l ? r.group.apply(r, ["%c " + T].concat(P)) : r.group(T);
                            } catch (e) {
                                r.log(T);
                            }
                            var O = m(c, S, [f], "prevState"),
                                I = m(c, S, [S], "action"),
                                j = m(c, S, [y, f], "error"),
                                R = m(c, S, [v], "nextState");
                            if (O)
                                if (a.prevState) {
                                    var C = "color: " + a.prevState(f) + "; font-weight: bold";
                                    r[O]("%c prev state", C, f);
                                } else r[O]("prev state", f);
                            if (I)
                                if (a.action) {
                                    var U = "color: " + a.action(S) + "; font-weight: bold";
                                    r[I]("%c action    ", U, S);
                                } else r[I]("action    ", S);
                            if (y && j)
                                if (a.error) {
                                    var N = "color: " + a.error(y, f) + "; font-weight: bold;";
                                    r[j]("%c error     ", N, y);
                                } else r[j]("error     ", y);
                            if (R)
                                if (a.nextState) {
                                    var M = "color: " + a.nextState(v) + "; font-weight: bold";
                                    r[R]("%c next state", M, v);
                                } else r[R]("next state", v);
                            u && _(f, v, r, x);
                            try {
                                r.groupEnd();
                            } catch (e) {
                                r.log("—— log end ——");
                            }
                        });
                    }
                    function w() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = Object.assign({}, O, e),
                            r = t.logger,
                            n = t.stateTransformer,
                            s = t.errorTransformer,
                            i = t.predicate,
                            o = t.logErrors,
                            a = t.diffPredicate;
                        if (void 0 === r)
                            return function () {
                                return function (e) {
                                    return function (t) {
                                        return e(t);
                                    };
                                };
                            };
                        if (e.getState && e.dispatch)
                            return (
                                console.error(
                                    "[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"
                                ),
                                function () {
                                    return function (e) {
                                        return function (t) {
                                            return e(t);
                                        };
                                    };
                                }
                            );
                        var c = [];
                        return function (e) {
                            var r = e.getState;
                            return function (e) {
                                return function (u) {
                                    if ("function" == typeof i && !i(r, u)) return e(u);
                                    var l = {};
                                    c.push(l), (l.started = x.now()), (l.startedTime = new Date()), (l.prevState = n(r())), (l.action = u);
                                    var d = void 0;
                                    if (o)
                                        try {
                                            d = e(u);
                                        } catch (e) {
                                            l.error = s(e);
                                        }
                                    else d = e(u);
                                    (l.took = x.now() - l.started), (l.nextState = n(r()));
                                    var g = t.diff && "function" == typeof a ? a(r, u) : t.diff;
                                    if ((y(c, Object.assign({}, t, { diff: g })), (c.length = 0), l.error)) throw l.error;
                                    return d;
                                };
                            };
                        };
                    }
                    var v,
                        b,
                        S = function (e, t) {
                            return (
                                (function (e, t) {
                                    return new Array(t + 1).join(e);
                                })("0", t - e.toString().length) + e
                            );
                        },
                        A = function (e) {
                            return S(e.getHours(), 2) + ":" + S(e.getMinutes(), 2) + ":" + S(e.getSeconds(), 2) + "." + S(e.getMilliseconds(), 3);
                        },
                        x = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
                        k =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  },
                        E = function (e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r;
                            }
                            return Array.from(e);
                        },
                        P = [];
                    (v = "object" === (void 0 === r.g ? "undefined" : k(r.g)) && r.g ? r.g : "undefined" != typeof window ? window : {}),
                        (b = v.DeepDiff) &&
                            P.push(function () {
                                void 0 !== b && v.DeepDiff === d && ((v.DeepDiff = b), (b = void 0));
                            }),
                        t(s, n),
                        t(i, n),
                        t(o, n),
                        t(a, n),
                        Object.defineProperties(d, {
                            diff: { value: d, enumerable: !0 },
                            observableDiff: { value: l, enumerable: !0 },
                            applyDiff: {
                                value: function (e, t, r) {
                                    e &&
                                        t &&
                                        l(e, t, function (n) {
                                            (r && !r(e, t, n)) || h(e, t, n);
                                        });
                                },
                                enumerable: !0,
                            },
                            applyChange: { value: h, enumerable: !0 },
                            revertChange: {
                                value: function (e, t, r) {
                                    if (e && t && r && r.kind) {
                                        var n,
                                            s,
                                            i = e;
                                        for (s = r.path.length - 1, n = 0; n < s; n++) void 0 === i[r.path[n]] && (i[r.path[n]] = {}), (i = i[r.path[n]]);
                                        switch (r.kind) {
                                            case "A":
                                                p(i[r.path[n]], r.index, r.item);
                                                break;
                                            case "D":
                                            case "E":
                                                i[r.path[n]] = r.lhs;
                                                break;
                                            case "N":
                                                delete i[r.path[n]];
                                        }
                                    }
                                },
                                enumerable: !0,
                            },
                            isConflict: {
                                value: function () {
                                    return void 0 !== b;
                                },
                                enumerable: !0,
                            },
                            noConflict: {
                                value: function () {
                                    return (
                                        P &&
                                            (P.forEach(function (e) {
                                                e();
                                            }),
                                            (P = null)),
                                        d
                                    );
                                },
                                enumerable: !0,
                            },
                        });
                    var T = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } },
                        O = {
                            level: "log",
                            logger: console,
                            logErrors: !0,
                            collapsed: void 0,
                            predicate: void 0,
                            duration: !1,
                            timestamp: !0,
                            stateTransformer: function (e) {
                                return e;
                            },
                            actionTransformer: function (e) {
                                return e;
                            },
                            errorTransformer: function (e) {
                                return e;
                            },
                            colors: {
                                title: function () {
                                    return "inherit";
                                },
                                prevState: function () {
                                    return "#9E9E9E";
                                },
                                action: function () {
                                    return "#03A9F4";
                                },
                                nextState: function () {
                                    return "#4CAF50";
                                },
                                error: function () {
                                    return "#F20404";
                                },
                            },
                            diff: !1,
                            diffPredicate: void 0,
                            transformer: void 0,
                        },
                        I = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.dispatch,
                                r = e.getState;
                            return "function" == typeof t || "function" == typeof r
                                ? w()({ dispatch: t, getState: r })
                                : void console.error(
                                      "\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n"
                                  );
                        };
                    (e.defaults = O), (e.createLogger = w), (e.logger = I), (e.default = I), Object.defineProperty(e, "__esModule", { value: !0 });
                })(t);
            },
            1215: (e, t, r) => {
                "use strict";
                (t.__esModule = !0),
                    (t.default = function (e) {
                        var t = (0, s.default)(e);
                        return {
                            getItem: function (e) {
                                return new Promise(function (r, n) {
                                    r(t.getItem(e));
                                });
                            },
                            setItem: function (e, r) {
                                return new Promise(function (n, s) {
                                    n(t.setItem(e, r));
                                });
                            },
                            removeItem: function (e) {
                                return new Promise(function (r, n) {
                                    r(t.removeItem(e));
                                });
                            },
                        };
                    });
                var n,
                    s = (n = r(449)) && n.__esModule ? n : { default: n };
            },
            449: (e, t) => {
                "use strict";
                t.__esModule = !0;
                var r =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          };
                function n() {}
                t.default = function (e) {
                    var t = e + "Storage";
                    return (function (e) {
                        if ("object" !== ("undefined" == typeof self ? "undefined" : r(self)) || !(e in self)) return !1;
                        try {
                            var t = self[e],
                                n = "redux-persist " + e + " test";
                            t.setItem(n, "test"), t.getItem(n), t.removeItem(n);
                        } catch (e) {
                            return !1;
                        }
                        return !0;
                    })(t)
                        ? self[t]
                        : s;
                };
                var s = { getItem: n, setItem: n, removeItem: n };
            },
            9282: (e, t, r) => {
                "use strict";
                var n,
                    s = (n = r(1215)) && n.__esModule ? n : { default: n };
                t.A = (0, s.default)("local");
            },
            3988: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = void 0),
                    (t.default = function (e) {
                        return function () {
                            return function (t) {
                                return function (r) {
                                    var n = e[r.type];
                                    return t(n ? n(r) : r);
                                };
                            };
                        };
                    });
            },
            9529: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.DEFAULT_PORT_NAME = t.PATCH_STATE_TYPE = t.STATE_TYPE = t.DISPATCH_TYPE = void 0),
                    (t.DISPATCH_TYPE = "chromex.dispatch"),
                    (t.STATE_TYPE = "chromex.state"),
                    (t.PATCH_STATE_TYPE = "chromex.patch_state"),
                    (t.DEFAULT_PORT_NAME = "chromex.port_name");
            },
            3207: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "ME", {
                    enumerable: !0,
                    get: function () {
                        return n.default;
                    },
                });
                s(r(1732)), s(r(9449));
                var n = s(r(6745));
                s(r(3988));
                function s(e) {
                    return e && e.__esModule ? e : { default: e };
                }
            },
            7575: (e, t) => {
                "use strict";
                function r(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                }
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.withSerializer = t.withDeserializer = t.noop = void 0);
                var n = function (e) {
                    return e;
                };
                t.noop = n;
                var s = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                    return (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                s = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (s = s.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                s.forEach(function (t) {
                                    r(e, t, n[t]);
                                });
                        }
                        return e;
                    })({}, e, e.payload ? { payload: t(e.payload) } : {});
                };
                (t.withDeserializer = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
                    return function (t) {
                        return function (r, i) {
                            return t(
                                (function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                                        r = arguments.length > 2 ? arguments[2] : void 0;
                                    return r
                                        ? function (n) {
                                              for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                                              return r.apply(void 0, [n].concat(o)) ? e.apply(void 0, [s(n, t)].concat(o)) : e.apply(void 0, [n].concat(o));
                                          }
                                        : function (r) {
                                              for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                              return e.apply(void 0, [s(r, t)].concat(i));
                                          };
                                })(r, e, i)
                            );
                        };
                    };
                }),
                    (t.withSerializer = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
                        return function (t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return function () {
                                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                                if (i.length <= r) throw new Error("Message in request could not be serialized. " + "Expected message in position ".concat(r, " but only received ").concat(i.length, " args."));
                                return (i[r] = s(i[r], e)), t.apply(void 0, i);
                            };
                        };
                    });
            },
            1732: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var n = c(r(368)),
                    s = r(9529),
                    i = r(7575),
                    o = c(r(3807)),
                    a = r(6183);
                function c(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                var l = "\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n",
                    d = { portName: s.DEFAULT_PORT_NAME, state: {}, extensionId: null, serializer: i.noop, deserializer: i.noop, patchStrategy: o.default },
                    g = (function () {
                        function e() {
                            var t = this,
                                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                n = r.portName,
                                o = void 0 === n ? d.portName : n,
                                c = r.state,
                                u = void 0 === c ? d.state : c,
                                l = r.extensionId,
                                g = void 0 === l ? d.extensionId : l,
                                h = r.serializer,
                                p = void 0 === h ? d.serializer : h,
                                f = r.deserializer,
                                _ = void 0 === f ? d.deserializer : f,
                                m = r.patchStrategy,
                                y = void 0 === m ? d.patchStrategy : m;
                            if (
                                ((function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, e),
                                !o)
                            )
                                throw new Error("portName is required in options");
                            if ("function" != typeof p) throw new Error("serializer must be a function");
                            if ("function" != typeof _) throw new Error("deserializer must be a function");
                            if ("function" != typeof y) throw new Error("patchStrategy must be one of the included patching strategies or a custom patching function");
                            (this.portName = o),
                                (this.readyResolved = !1),
                                (this.readyPromise = new Promise(function (e) {
                                    return (t.readyResolve = e);
                                })),
                                (this.browserAPI = (0, a.getBrowserAPI)()),
                                (this.extensionId = g),
                                (this.port = this.browserAPI.runtime.connect(this.extensionId, { name: o })),
                                (this.safetyHandler = this.safetyHandler.bind(this)),
                                this.browserAPI.runtime.onMessage && (this.safetyMessage = this.browserAPI.runtime.onMessage.addListener(this.safetyHandler)),
                                (this.serializedPortListener = (0, i.withDeserializer)(_)(function () {
                                    var e;
                                    return (e = t.port.onMessage).addListener.apply(e, arguments);
                                })),
                                (this.serializedMessageSender = (0, i.withSerializer)(p)(function () {
                                    var e;
                                    return (e = t.browserAPI.runtime).sendMessage.apply(e, arguments);
                                }, 1)),
                                (this.listeners = []),
                                (this.state = u),
                                (this.patchStrategy = y),
                                this.serializedPortListener(function (e) {
                                    switch (e.type) {
                                        case s.STATE_TYPE:
                                            t.replaceState(e.payload), t.readyResolved || ((t.readyResolved = !0), t.readyResolve());
                                            break;
                                        case s.PATCH_STATE_TYPE:
                                            t.patchState(e.payload);
                                    }
                                }),
                                (this.dispatch = this.dispatch.bind(this));
                        }
                        var t, r;
                        return (
                            (t = e),
                            (r = [
                                {
                                    key: "ready",
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                        return null !== e ? this.readyPromise.then(e) : this.readyPromise;
                                    },
                                },
                                {
                                    key: "subscribe",
                                    value: function (e) {
                                        var t = this;
                                        return (
                                            this.listeners.push(e),
                                            function () {
                                                t.listeners = t.listeners.filter(function (t) {
                                                    return t !== e;
                                                });
                                            }
                                        );
                                    },
                                },
                                {
                                    key: "patchState",
                                    value: function (e) {
                                        (this.state = this.patchStrategy(this.state, e)),
                                            this.listeners.forEach(function (e) {
                                                return e();
                                            });
                                    },
                                },
                                {
                                    key: "replaceState",
                                    value: function (e) {
                                        (this.state = e),
                                            this.listeners.forEach(function (e) {
                                                return e();
                                            });
                                    },
                                },
                                {
                                    key: "getState",
                                    value: function () {
                                        return this.state;
                                    },
                                },
                                { key: "replaceReducer", value: function () {} },
                                {
                                    key: "dispatch",
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (r, i) {
                                            t.serializedMessageSender(t.extensionId, { type: s.DISPATCH_TYPE, portName: t.portName, payload: e }, null, function (e) {
                                                if (e) {
                                                    var s = e.error,
                                                        o = e.value;
                                                    if (s) {
                                                        var a = new Error("".concat(l).concat(s));
                                                        i((0, n.default)(a, s));
                                                    } else r(o && o.payload);
                                                } else {
                                                    var c = t.browserAPI.runtime.lastError,
                                                        u = new Error("".concat(l).concat(c));
                                                    i((0, n.default)(u, c));
                                                }
                                            });
                                        });
                                    },
                                },
                                {
                                    key: "safetyHandler",
                                    value: function (e) {
                                        "storeReady" === e.action &&
                                            e.portName === this.portName &&
                                            (this.browserAPI.runtime.onMessage.removeListener(this.safetyHandler), this.readyResolved || ((this.readyResolved = !0), this.readyResolve()));
                                    },
                                },
                            ]),
                            r && u(t.prototype, r),
                            e
                        );
                    })();
                t.default = g;
            },
            9449: (e, t) => {
                "use strict";
                function r() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return 0 === t.length
                        ? function (e) {
                              return e;
                          }
                        : 1 === t.length
                        ? t[0]
                        : t.reduce(function (e, t) {
                              return function () {
                                  return e(t.apply(void 0, arguments));
                              };
                          });
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
                        var i,
                            o = function () {
                                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                            },
                            a = {
                                getState: e.getState.bind(e),
                                dispatch: function () {
                                    return o.apply(void 0, arguments);
                                },
                            };
                        return (
                            (n = (n || []).map(function (e) {
                                return e(a);
                            })),
                            (o = r.apply(
                                void 0,
                                (function (e) {
                                    if (Array.isArray(e)) {
                                        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                                        return r;
                                    }
                                })((i = n)) ||
                                    (function (e) {
                                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                                    })(i) ||
                                    (function () {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance");
                                    })()
                            )(e.dispatch)),
                            (e.dispatch = o),
                            e
                        );
                    });
            },
            140: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.DIFF_STATUS_ARRAY_UPDATED = t.DIFF_STATUS_KEYS_UPDATED = t.DIFF_STATUS_REMOVED = t.DIFF_STATUS_UPDATED = void 0),
                    (t.DIFF_STATUS_UPDATED = "updated"),
                    (t.DIFF_STATUS_REMOVED = "removed"),
                    (t.DIFF_STATUS_KEYS_UPDATED = "updated_keys"),
                    (t.DIFF_STATUS_ARRAY_UPDATED = "updated_array");
            },
            8642: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function (e, t) {
                        var r = [];
                        return (
                            Object.keys(t).forEach(function (s) {
                                e[s] !== t[s] && r.push({ key: s, value: t[s], change: n.DIFF_STATUS_UPDATED });
                            }),
                            Object.keys(e).forEach(function (e) {
                                t.hasOwnProperty(e) || r.push({ key: e, change: n.DIFF_STATUS_REMOVED });
                            }),
                            r
                        );
                    });
                var n = r(140);
            },
            3807: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function (e, t) {
                        var r = Object.assign({}, e);
                        return (
                            t.forEach(function (e) {
                                var t = e.change,
                                    s = e.key,
                                    i = e.value;
                                switch (t) {
                                    case n.DIFF_STATUS_UPDATED:
                                        r[s] = i;
                                        break;
                                    case n.DIFF_STATUS_REMOVED:
                                        Reflect.deleteProperty(r, s);
                                }
                            }),
                            r
                        );
                    });
                var n = r(140);
            },
            6183: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.getBrowserAPI = function () {
                        var e;
                        try {
                            e = self.chrome || self.browser || browser;
                        } catch (t) {
                            e = browser;
                        }
                        if (!e) throw new Error("Browser API is not present");
                        return e;
                    });
            },
            6745: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var n,
                    s = r(9529),
                    i = r(7575),
                    o = r(6183),
                    a = (n = r(8642)) && n.__esModule ? n : { default: n },
                    c = {
                        portName: s.DEFAULT_PORT_NAME,
                        dispatchResponder: function (e, t) {
                            Promise.resolve(e)
                                .then(function (e) {
                                    t({ error: null, value: e });
                                })
                                .catch(function (e) {
                                    console.error("error dispatching result:", e), t({ error: e.message, value: null });
                                });
                        },
                        serializer: i.noop,
                        deserializer: i.noop,
                        diffStrategy: a.default,
                    };
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                        r = t.portName,
                        n = void 0 === r ? c.portName : r,
                        a = t.dispatchResponder,
                        u = void 0 === a ? c.dispatchResponder : a,
                        l = t.serializer,
                        d = void 0 === l ? c.serializer : l,
                        g = t.deserializer,
                        h = void 0 === g ? c.deserializer : g,
                        p = t.diffStrategy,
                        f = void 0 === p ? c.diffStrategy : p;
                    if (!n) throw new Error("portName is required in options");
                    if ("function" != typeof d) throw new Error("serializer must be a function");
                    if ("function" != typeof h) throw new Error("deserializer must be a function");
                    if ("function" != typeof f) throw new Error("diffStrategy must be one of the included diffing strategies or a custom diff function");
                    var _ = (0, o.getBrowserAPI)(),
                        m = function (t, r, i) {
                            if (t.type === s.DISPATCH_TYPE && t.portName === n) {
                                var o = Object.assign({}, t.payload, { _sender: r }),
                                    a = null;
                                try {
                                    a = e.dispatch(o);
                                } catch (e) {
                                    (a = Promise.reject(e.message)), console.error(e);
                                }
                                return u(a, i), !0;
                            }
                        },
                        y = function (t) {
                            if (t.name === n) {
                                var r = (0, i.withSerializer)(d)(function () {
                                        return t.postMessage.apply(t, arguments);
                                    }),
                                    o = e.getState(),
                                    a = e.subscribe(function () {
                                        var t = e.getState(),
                                            n = f(o, t);
                                        n.length && ((o = t), r({ type: s.PATCH_STATE_TYPE, payload: n }));
                                    });
                                t.onDisconnect.addListener(a), r({ type: s.STATE_TYPE, payload: o });
                            }
                        },
                        w = (0, i.withDeserializer)(h),
                        v = function (e) {
                            return e.type === s.DISPATCH_TYPE && e.portName === n;
                        };
                    w(function () {
                        var e;
                        return (e = _.runtime.onMessage).addListener.apply(e, arguments);
                    })(m, v),
                        _.runtime.onMessageExternal
                            ? w(function () {
                                  var e;
                                  return (e = _.runtime.onMessageExternal).addListener.apply(e, arguments);
                              })(m, v)
                            : console.warn("runtime.onMessageExternal is not supported"),
                        _.runtime.onConnect.addListener(y),
                        _.runtime.onConnectExternal ? _.runtime.onConnectExternal.addListener(y) : console.warn("runtime.onConnectExternal is not supported"),
                        _.tabs.query({}, function (e) {
                            var t = !0,
                                r = !1,
                                s = void 0;
                            try {
                                for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var a = i.value;
                                    _.tabs.sendMessage(a.id, { action: "storeReady", portName: n }, function () {
                                        chrome.runtime.lastError;
                                    });
                                }
                            } catch (e) {
                                (r = !0), (s = e);
                            } finally {
                                try {
                                    t || null == o.return || o.return();
                                } finally {
                                    if (r) throw s;
                                }
                            }
                        });
                };
            },
            6815: function (e, t) {
                var r, n;
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    (r = function (e) {
                        "use strict";
                        if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension.");
                        if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id) e.exports = globalThis.browser;
                        else {
                            const t = "The message port closed before a response was received.",
                                r = (e) => {
                                    const r = {
                                        alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } },
                                        bookmarks: {
                                            create: { minArgs: 1, maxArgs: 1 },
                                            get: { minArgs: 1, maxArgs: 1 },
                                            getChildren: { minArgs: 1, maxArgs: 1 },
                                            getRecent: { minArgs: 1, maxArgs: 1 },
                                            getSubTree: { minArgs: 1, maxArgs: 1 },
                                            getTree: { minArgs: 0, maxArgs: 0 },
                                            move: { minArgs: 2, maxArgs: 2 },
                                            remove: { minArgs: 1, maxArgs: 1 },
                                            removeTree: { minArgs: 1, maxArgs: 1 },
                                            search: { minArgs: 1, maxArgs: 1 },
                                            update: { minArgs: 2, maxArgs: 2 },
                                        },
                                        browserAction: {
                                            disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                            enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                            getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                                            getBadgeText: { minArgs: 1, maxArgs: 1 },
                                            getPopup: { minArgs: 1, maxArgs: 1 },
                                            getTitle: { minArgs: 1, maxArgs: 1 },
                                            openPopup: { minArgs: 0, maxArgs: 0 },
                                            setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                            setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                            setIcon: { minArgs: 1, maxArgs: 1 },
                                            setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                            setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        },
                                        browsingData: {
                                            remove: { minArgs: 2, maxArgs: 2 },
                                            removeCache: { minArgs: 1, maxArgs: 1 },
                                            removeCookies: { minArgs: 1, maxArgs: 1 },
                                            removeDownloads: { minArgs: 1, maxArgs: 1 },
                                            removeFormData: { minArgs: 1, maxArgs: 1 },
                                            removeHistory: { minArgs: 1, maxArgs: 1 },
                                            removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                                            removePasswords: { minArgs: 1, maxArgs: 1 },
                                            removePluginData: { minArgs: 1, maxArgs: 1 },
                                            settings: { minArgs: 0, maxArgs: 0 },
                                        },
                                        commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                                        contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } },
                                        cookies: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 1, maxArgs: 1 }, getAllCookieStores: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                        devtools: {
                                            inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
                                            panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 }, elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } } },
                                        },
                                        downloads: {
                                            cancel: { minArgs: 1, maxArgs: 1 },
                                            download: { minArgs: 1, maxArgs: 1 },
                                            erase: { minArgs: 1, maxArgs: 1 },
                                            getFileIcon: { minArgs: 1, maxArgs: 2 },
                                            open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                            pause: { minArgs: 1, maxArgs: 1 },
                                            removeFile: { minArgs: 1, maxArgs: 1 },
                                            resume: { minArgs: 1, maxArgs: 1 },
                                            search: { minArgs: 1, maxArgs: 1 },
                                            show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        },
                                        extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } },
                                        history: {
                                            addUrl: { minArgs: 1, maxArgs: 1 },
                                            deleteAll: { minArgs: 0, maxArgs: 0 },
                                            deleteRange: { minArgs: 1, maxArgs: 1 },
                                            deleteUrl: { minArgs: 1, maxArgs: 1 },
                                            getVisits: { minArgs: 1, maxArgs: 1 },
                                            search: { minArgs: 1, maxArgs: 1 },
                                        },
                                        i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
                                        identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                                        idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                                        management: {
                                            get: { minArgs: 1, maxArgs: 1 },
                                            getAll: { minArgs: 0, maxArgs: 0 },
                                            getSelf: { minArgs: 0, maxArgs: 0 },
                                            setEnabled: { minArgs: 2, maxArgs: 2 },
                                            uninstallSelf: { minArgs: 0, maxArgs: 1 },
                                        },
                                        notifications: {
                                            clear: { minArgs: 1, maxArgs: 1 },
                                            create: { minArgs: 1, maxArgs: 2 },
                                            getAll: { minArgs: 0, maxArgs: 0 },
                                            getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                                            update: { minArgs: 2, maxArgs: 2 },
                                        },
                                        pageAction: {
                                            getPopup: { minArgs: 1, maxArgs: 1 },
                                            getTitle: { minArgs: 1, maxArgs: 1 },
                                            hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                            setIcon: { minArgs: 1, maxArgs: 1 },
                                            setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                            setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                            show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                        },
                                        permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } },
                                        runtime: {
                                            getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                                            getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                                            openOptionsPage: { minArgs: 0, maxArgs: 0 },
                                            requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                                            sendMessage: { minArgs: 1, maxArgs: 3 },
                                            sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                                            setUninstallURL: { minArgs: 1, maxArgs: 1 },
                                        },
                                        sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } },
                                        storage: {
                                            local: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                            managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                                            sync: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                                        },
                                        tabs: {
                                            captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                                            create: { minArgs: 1, maxArgs: 1 },
                                            detectLanguage: { minArgs: 0, maxArgs: 1 },
                                            discard: { minArgs: 0, maxArgs: 1 },
                                            duplicate: { minArgs: 1, maxArgs: 1 },
                                            executeScript: { minArgs: 1, maxArgs: 2 },
                                            get: { minArgs: 1, maxArgs: 1 },
                                            getCurrent: { minArgs: 0, maxArgs: 0 },
                                            getZoom: { minArgs: 0, maxArgs: 1 },
                                            getZoomSettings: { minArgs: 0, maxArgs: 1 },
                                            goBack: { minArgs: 0, maxArgs: 1 },
                                            goForward: { minArgs: 0, maxArgs: 1 },
                                            highlight: { minArgs: 1, maxArgs: 1 },
                                            insertCSS: { minArgs: 1, maxArgs: 2 },
                                            move: { minArgs: 2, maxArgs: 2 },
                                            query: { minArgs: 1, maxArgs: 1 },
                                            reload: { minArgs: 0, maxArgs: 2 },
                                            remove: { minArgs: 1, maxArgs: 1 },
                                            removeCSS: { minArgs: 1, maxArgs: 2 },
                                            sendMessage: { minArgs: 2, maxArgs: 3 },
                                            setZoom: { minArgs: 1, maxArgs: 2 },
                                            setZoomSettings: { minArgs: 1, maxArgs: 2 },
                                            update: { minArgs: 1, maxArgs: 2 },
                                        },
                                        topSites: { get: { minArgs: 0, maxArgs: 0 } },
                                        webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
                                        webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                                        windows: {
                                            create: { minArgs: 0, maxArgs: 1 },
                                            get: { minArgs: 1, maxArgs: 2 },
                                            getAll: { minArgs: 0, maxArgs: 1 },
                                            getCurrent: { minArgs: 0, maxArgs: 1 },
                                            getLastFocused: { minArgs: 0, maxArgs: 1 },
                                            remove: { minArgs: 1, maxArgs: 1 },
                                            update: { minArgs: 2, maxArgs: 2 },
                                        },
                                    };
                                    if (0 === Object.keys(r).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                                    class n extends WeakMap {
                                        constructor(e, t = void 0) {
                                            super(t), (this.createItem = e);
                                        }
                                        get(e) {
                                            return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                                        }
                                    }
                                    const s = (t, r) => (...n) => {
                                            e.runtime.lastError ? t.reject(new Error(e.runtime.lastError.message)) : r.singleCallbackArg || (n.length <= 1 && !1 !== r.singleCallbackArg) ? t.resolve(n[0]) : t.resolve(n);
                                        },
                                        i = (e) => (1 == e ? "argument" : "arguments"),
                                        o = (e, t, r) => new Proxy(t, { apply: (t, n, s) => r.call(n, e, ...s) });
                                    let a = Function.call.bind(Object.prototype.hasOwnProperty);
                                    const c = (e, t = {}, r = {}) => {
                                            let n = Object.create(null),
                                                u = {
                                                    has: (t, r) => r in e || r in n,
                                                    get(u, l, d) {
                                                        if (l in n) return n[l];
                                                        if (!(l in e)) return;
                                                        let g = e[l];
                                                        if ("function" == typeof g)
                                                            if ("function" == typeof t[l]) g = o(e, e[l], t[l]);
                                                            else if (a(r, l)) {
                                                                let t = ((e, t) =>
                                                                    function (r, ...n) {
                                                                        if (n.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${i(t.minArgs)} for ${e}(), got ${n.length}`);
                                                                        if (n.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${i(t.maxArgs)} for ${e}(), got ${n.length}`);
                                                                        return new Promise((i, o) => {
                                                                            if (t.fallbackToNoCallback)
                                                                                try {
                                                                                    r[e](...n, s({ resolve: i, reject: o }, t));
                                                                                } catch (s) {
                                                                                    console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, s),
                                                                                        r[e](...n),
                                                                                        (t.fallbackToNoCallback = !1),
                                                                                        (t.noCallback = !0),
                                                                                        i();
                                                                                }
                                                                            else t.noCallback ? (r[e](...n), i()) : r[e](...n, s({ resolve: i, reject: o }, t));
                                                                        });
                                                                    })(l, r[l]);
                                                                g = o(e, e[l], t);
                                                            } else g = g.bind(e);
                                                        else if ("object" == typeof g && null !== g && (a(t, l) || a(r, l))) g = c(g, t[l], r[l]);
                                                        else {
                                                            if (!a(r, "*"))
                                                                return (
                                                                    Object.defineProperty(n, l, {
                                                                        configurable: !0,
                                                                        enumerable: !0,
                                                                        get: () => e[l],
                                                                        set(t) {
                                                                            e[l] = t;
                                                                        },
                                                                    }),
                                                                    g
                                                                );
                                                            g = c(g, t[l], r["*"]);
                                                        }
                                                        return (n[l] = g), g;
                                                    },
                                                    set: (t, r, s, i) => (r in n ? (n[r] = s) : (e[r] = s), !0),
                                                    defineProperty: (e, t, r) => Reflect.defineProperty(n, t, r),
                                                    deleteProperty: (e, t) => Reflect.deleteProperty(n, t),
                                                },
                                                l = Object.create(e);
                                            return new Proxy(l, u);
                                        },
                                        u = (e) => ({
                                            addListener(t, r, ...n) {
                                                t.addListener(e.get(r), ...n);
                                            },
                                            hasListener: (t, r) => t.hasListener(e.get(r)),
                                            removeListener(t, r) {
                                                t.removeListener(e.get(r));
                                            },
                                        }),
                                        l = new n((e) =>
                                            "function" != typeof e
                                                ? e
                                                : function (t) {
                                                      const r = c(t, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                                                      e(r);
                                                  }
                                        ),
                                        d = new n((e) =>
                                            "function" != typeof e
                                                ? e
                                                : function (t, r, n) {
                                                      let s,
                                                          i,
                                                          o = !1,
                                                          a = new Promise((e) => {
                                                              s = function (t) {
                                                                  (o = !0), e(t);
                                                              };
                                                          });
                                                      try {
                                                          i = e(t, r, s);
                                                      } catch (e) {
                                                          i = Promise.reject(e);
                                                      }
                                                      const c = !0 !== i && (u = i) && "object" == typeof u && "function" == typeof u.then;
                                                      var u;
                                                      if (!0 !== i && !c && !o) return !1;
                                                      return (
                                                          (c ? i : a)
                                                              .then(
                                                                  (e) => {
                                                                      n(e);
                                                                  },
                                                                  (e) => {
                                                                      let t;
                                                                      (t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"), n({ __mozWebExtensionPolyfillReject__: !0, message: t });
                                                                  }
                                                              )
                                                              .catch((e) => {
                                                                  console.error("Failed to send onMessage rejected reply", e);
                                                              }),
                                                          !0
                                                      );
                                                  }
                                        ),
                                        g = ({ reject: r, resolve: n }, s) => {
                                            e.runtime.lastError ? (e.runtime.lastError.message === t ? n() : r(new Error(e.runtime.lastError.message))) : s && s.__mozWebExtensionPolyfillReject__ ? r(new Error(s.message)) : n(s);
                                        },
                                        h = (e, t, r, ...n) => {
                                            if (n.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${i(t.minArgs)} for ${e}(), got ${n.length}`);
                                            if (n.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${i(t.maxArgs)} for ${e}(), got ${n.length}`);
                                            return new Promise((e, t) => {
                                                const s = g.bind(null, { resolve: e, reject: t });
                                                n.push(s), r.sendMessage(...n);
                                            });
                                        },
                                        p = {
                                            devtools: { network: { onRequestFinished: u(l) } },
                                            runtime: { onMessage: u(d), onMessageExternal: u(d), sendMessage: h.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                            tabs: { sendMessage: h.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                        },
                                        f = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                    return (r.privacy = { network: { "*": f }, services: { "*": f }, websites: { "*": f } }), c(e, p, r);
                                };
                            e.exports = r(chrome);
                        }
                    }),
                    void 0 === (n = r.apply(t, [e])) || (e.exports = n);
            },
            4633: (e, t, r) => {
                var n = r(3738).default;
                function s() {
                    "use strict";
                    (e.exports = s = function () {
                        return r;
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                    var t,
                        r = {},
                        i = Object.prototype,
                        o = i.hasOwnProperty,
                        a =
                            Object.defineProperty ||
                            function (e, t, r) {
                                e[t] = r.value;
                            },
                        c = "function" == typeof Symbol ? Symbol : {},
                        u = c.iterator || "@@iterator",
                        l = c.asyncIterator || "@@asyncIterator",
                        d = c.toStringTag || "@@toStringTag";
                    function g(e, t, r) {
                        return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t];
                    }
                    try {
                        g({}, "");
                    } catch (t) {
                        g = function (e, t, r) {
                            return (e[t] = r);
                        };
                    }
                    function h(e, t, r, n) {
                        var s = t && t.prototype instanceof v ? t : v,
                            i = Object.create(s.prototype),
                            o = new C(n || []);
                        return a(i, "_invoke", { value: O(e, r, o) }), i;
                    }
                    function p(e, t, r) {
                        try {
                            return { type: "normal", arg: e.call(t, r) };
                        } catch (e) {
                            return { type: "throw", arg: e };
                        }
                    }
                    r.wrap = h;
                    var f = "suspendedStart",
                        _ = "suspendedYield",
                        m = "executing",
                        y = "completed",
                        w = {};
                    function v() {}
                    function b() {}
                    function S() {}
                    var A = {};
                    g(A, u, function () {
                        return this;
                    });
                    var x = Object.getPrototypeOf,
                        k = x && x(x(U([])));
                    k && k !== i && o.call(k, u) && (A = k);
                    var E = (S.prototype = v.prototype = Object.create(A));
                    function P(e) {
                        ["next", "throw", "return"].forEach(function (t) {
                            g(e, t, function (e) {
                                return this._invoke(t, e);
                            });
                        });
                    }
                    function T(e, t) {
                        function r(s, i, a, c) {
                            var u = p(e[s], e, i);
                            if ("throw" !== u.type) {
                                var l = u.arg,
                                    d = l.value;
                                return d && "object" == n(d) && o.call(d, "__await")
                                    ? t.resolve(d.__await).then(
                                          function (e) {
                                              r("next", e, a, c);
                                          },
                                          function (e) {
                                              r("throw", e, a, c);
                                          }
                                      )
                                    : t.resolve(d).then(
                                          function (e) {
                                              (l.value = e), a(l);
                                          },
                                          function (e) {
                                              return r("throw", e, a, c);
                                          }
                                      );
                            }
                            c(u.arg);
                        }
                        var s;
                        a(this, "_invoke", {
                            value: function (e, n) {
                                function i() {
                                    return new t(function (t, s) {
                                        r(e, n, t, s);
                                    });
                                }
                                return (s = s ? s.then(i, i) : i());
                            },
                        });
                    }
                    function O(e, r, n) {
                        var s = f;
                        return function (i, o) {
                            if (s === m) throw Error("Generator is already running");
                            if (s === y) {
                                if ("throw" === i) throw o;
                                return { value: t, done: !0 };
                            }
                            for (n.method = i, n.arg = o; ; ) {
                                var a = n.delegate;
                                if (a) {
                                    var c = I(a, n);
                                    if (c) {
                                        if (c === w) continue;
                                        return c;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (s === f) throw ((s = y), n.arg);
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                s = m;
                                var u = p(e, r, n);
                                if ("normal" === u.type) {
                                    if (((s = n.done ? y : _), u.arg === w)) continue;
                                    return { value: u.arg, done: n.done };
                                }
                                "throw" === u.type && ((s = y), (n.method = "throw"), (n.arg = u.arg));
                            }
                        };
                    }
                    function I(e, r) {
                        var n = r.method,
                            s = e.iterator[n];
                        if (s === t)
                            return (
                                (r.delegate = null),
                                ("throw" === n && e.iterator.return && ((r.method = "return"), (r.arg = t), I(e, r), "throw" === r.method)) ||
                                    ("return" !== n && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                                w
                            );
                        var i = p(s, e.iterator, r.arg);
                        if ("throw" === i.type) return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), w;
                        var o = i.arg;
                        return o
                            ? o.done
                                ? ((r[e.resultName] = o.value), (r.next = e.nextLoc), "return" !== r.method && ((r.method = "next"), (r.arg = t)), (r.delegate = null), w)
                                : o
                            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), w);
                    }
                    function j(e) {
                        var t = { tryLoc: e[0] };
                        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
                    }
                    function R(e) {
                        var t = e.completion || {};
                        (t.type = "normal"), delete t.arg, (e.completion = t);
                    }
                    function C(e) {
                        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(j, this), this.reset(!0);
                    }
                    function U(e) {
                        if (e || "" === e) {
                            var r = e[u];
                            if (r) return r.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var s = -1,
                                    i = function r() {
                                        for (; ++s < e.length; ) if (o.call(e, s)) return (r.value = e[s]), (r.done = !1), r;
                                        return (r.value = t), (r.done = !0), r;
                                    };
                                return (i.next = i);
                            }
                        }
                        throw new TypeError(n(e) + " is not iterable");
                    }
                    return (
                        (b.prototype = S),
                        a(E, "constructor", { value: S, configurable: !0 }),
                        a(S, "constructor", { value: b, configurable: !0 }),
                        (b.displayName = g(S, d, "GeneratorFunction")),
                        (r.isGeneratorFunction = function (e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
                        }),
                        (r.mark = function (e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : ((e.__proto__ = S), g(e, d, "GeneratorFunction")), (e.prototype = Object.create(E)), e;
                        }),
                        (r.awrap = function (e) {
                            return { __await: e };
                        }),
                        P(T.prototype),
                        g(T.prototype, l, function () {
                            return this;
                        }),
                        (r.AsyncIterator = T),
                        (r.async = function (e, t, n, s, i) {
                            void 0 === i && (i = Promise);
                            var o = new T(h(e, t, n, s), i);
                            return r.isGeneratorFunction(t)
                                ? o
                                : o.next().then(function (e) {
                                      return e.done ? e.value : o.next();
                                  });
                        }),
                        P(E),
                        g(E, d, "Generator"),
                        g(E, u, function () {
                            return this;
                        }),
                        g(E, "toString", function () {
                            return "[object Generator]";
                        }),
                        (r.keys = function (e) {
                            var t = Object(e),
                                r = [];
                            for (var n in t) r.push(n);
                            return (
                                r.reverse(),
                                function e() {
                                    for (; r.length; ) {
                                        var n = r.pop();
                                        if (n in t) return (e.value = n), (e.done = !1), e;
                                    }
                                    return (e.done = !0), e;
                                }
                            );
                        }),
                        (r.values = U),
                        (C.prototype = {
                            constructor: C,
                            reset: function (e) {
                                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(R), !e))
                                    for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                            },
                            stop: function () {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval;
                            },
                            dispatchException: function (e) {
                                if (this.done) throw e;
                                var r = this;
                                function n(n, s) {
                                    return (a.type = "throw"), (a.arg = e), (r.next = n), s && ((r.method = "next"), (r.arg = t)), !!s;
                                }
                                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                    var i = this.tryEntries[s],
                                        a = i.completion;
                                    if ("root" === i.tryLoc) return n("end");
                                    if (i.tryLoc <= this.prev) {
                                        var c = o.call(i, "catchLoc"),
                                            u = o.call(i, "finallyLoc");
                                        if (c && u) {
                                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                            if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                        } else if (c) {
                                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                        } else {
                                            if (!u) throw Error("try statement without catch or finally");
                                            if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var s = n;
                                        break;
                                    }
                                }
                                s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                                var i = s ? s.completion : {};
                                return (i.type = e), (i.arg = t), s ? ((this.method = "next"), (this.next = s.finallyLoc), w) : this.complete(i);
                            },
                            complete: function (e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return (
                                    "break" === e.type || "continue" === e.type
                                        ? (this.next = e.arg)
                                        : "return" === e.type
                                        ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                        : "normal" === e.type && t && (this.next = t),
                                    w
                                );
                            },
                            finish: function (e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), R(r), w;
                                }
                            },
                            catch: function (e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.tryLoc === e) {
                                        var n = r.completion;
                                        if ("throw" === n.type) {
                                            var s = n.arg;
                                            R(r);
                                        }
                                        return s;
                                    }
                                }
                                throw Error("illegal catch attempt");
                            },
                            delegateYield: function (e, r, n) {
                                return (this.delegate = { iterator: U(e), resultName: r, nextLoc: n }), "next" === this.method && (this.arg = t), w;
                            },
                        }),
                        r
                    );
                }
                (e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);
            },
            3738: (e) => {
                function t(r) {
                    return (
                        (e.exports = t =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports),
                        t(r)
                    );
                }
                (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
            },
            4756: (e, t, r) => {
                var n = r(4633)();
                e.exports = n;
                try {
                    regeneratorRuntime = n;
                } catch (e) {
                    "object" == typeof globalThis ? (globalThis.regeneratorRuntime = n) : Function("r", "regeneratorRuntime = r")(n);
                }
            },
        },
        t = {};
    function r(n) {
        var s = t[n];
        if (void 0 !== s) return s.exports;
        var i = (t[n] = { exports: {} });
        return e[n].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, { a: t }), t;
    }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            var e;
            r.g.importScripts && (e = r.g.location + "");
            var t = r.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var n = t.getElementsByTagName("script");
                if (n.length) for (var s = n.length - 1; s > -1 && (!e || !/^http(s?):/.test(e)); ) e = n[s--].src;
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            (e = e
                .replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/, "/")),
                (r.p = e + "../");
        })(),
        (() => {
            "use strict";
            function e(e, t, r, n, s, i, o) {
                try {
                    var a = e[i](o),
                        c = a.value;
                } catch (e) {
                    return void r(e);
                }
                a.done ? t(c) : Promise.resolve(c).then(n, s);
            }
            function t(t) {
                return function () {
                    var r = this,
                        n = arguments;
                    return new Promise(function (s, i) {
                        var o = t.apply(r, n);
                        function a(t) {
                            e(o, s, i, a, c, "next", t);
                        }
                        function c(t) {
                            e(o, s, i, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var n = r(4756),
                s = r.n(n),
                i = r(6815),
                o = r.n(i),
                a = "Prolific-Poll-Interval",
                c = 6e5;
            function u(e) {
                return (
                    (u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    u(e)
                );
            }
            function l(e, t, r) {
                return (
                    (n = (function (e, t) {
                        if ("object" != u(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, "string");
                            if ("object" != u(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(e);
                    })(t)),
                    (t = "symbol" == u(n) ? n : n + "") in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
                    e
                );
                var n;
            }
            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? d(Object(r), !0).forEach(function (t) {
                              l(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : d(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function h(e, t) {
                return p.apply(this, arguments);
            }
            function p() {
                return (
                    (p = t(
                        s().mark(function e(t, r) {
                            var n,
                                i,
                                o,
                                a,
                                u = arguments;
                            return s().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = u.length > 2 && void 0 !== u[2] ? u[2] : c),
                                                (i = new AbortController()),
                                                (o = setTimeout(function () {
                                                    return i.abort();
                                                }, n)),
                                                (e.next = 5),
                                                fetch(t, g(g({}, r), {}, { signal: i.signal }))
                                            );
                                        case 5:
                                            return (a = e.sent), clearTimeout(o), e.abrupt("return", a);
                                        case 8:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    p.apply(this, arguments)
                );
            }
            const f = (function () {
                var e = t(
                    s().mark(function e(t) {
                        var r, n, i, o;
                        return s().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = { Authorization: "Bearer ".concat(t), "x-legacy-auth": "false" }), (e.next = 3), h("https://api.prolific.com/api/v1/participant/studies/?is_assistant=1", { credentials: "omit", headers: r })
                                        );
                                    case 3:
                                        return (n = e.sent), (e.next = 6), n.json();
                                    case 6:
                                        return (i = e.sent), (o = parseInt(n.headers.get(a.toLowerCase()) || n.headers.get(a))) && (i.prolific_poll_interval = o), e.abrupt("return", i);
                                    case 10:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                );
                return function (t) {
                    return e.apply(this, arguments);
                };
            })();
            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? _(Object(r), !0).forEach(function (t) {
                              l(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : _(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function y(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
            }
            var w = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
                v = function () {
                    return Math.random().toString(36).substring(7).split("").join(".");
                },
                b = {
                    INIT: "@@redux/INIT" + v(),
                    REPLACE: "@@redux/REPLACE" + v(),
                    PROBE_UNKNOWN_ACTION: function () {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + v();
                    },
                };
            function S(e, t, r) {
                var n;
                if (("function" == typeof t && "function" == typeof r) || ("function" == typeof r && "function" == typeof arguments[3])) throw new Error(y(0));
                if (("function" == typeof t && void 0 === r && ((r = t), (t = void 0)), void 0 !== r)) {
                    if ("function" != typeof r) throw new Error(y(1));
                    return r(S)(e, t);
                }
                if ("function" != typeof e) throw new Error(y(2));
                var s = e,
                    i = t,
                    o = [],
                    a = o,
                    c = !1;
                function u() {
                    a === o && (a = o.slice());
                }
                function l() {
                    if (c) throw new Error(y(3));
                    return i;
                }
                function d(e) {
                    if ("function" != typeof e) throw new Error(y(4));
                    if (c) throw new Error(y(5));
                    var t = !0;
                    return (
                        u(),
                        a.push(e),
                        function () {
                            if (t) {
                                if (c) throw new Error(y(6));
                                (t = !1), u();
                                var r = a.indexOf(e);
                                a.splice(r, 1), (o = null);
                            }
                        }
                    );
                }
                function g(e) {
                    if (
                        !(function (e) {
                            if ("object" != typeof e || null === e) return !1;
                            for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                            return Object.getPrototypeOf(e) === t;
                        })(e)
                    )
                        throw new Error(y(7));
                    if (void 0 === e.type) throw new Error(y(8));
                    if (c) throw new Error(y(9));
                    try {
                        (c = !0), (i = s(i, e));
                    } finally {
                        c = !1;
                    }
                    for (var t = (o = a), r = 0; r < t.length; r++) (0, t[r])();
                    return e;
                }
                return (
                    g({ type: b.INIT }),
                    ((n = {
                        dispatch: g,
                        subscribe: d,
                        getState: l,
                        replaceReducer: function (e) {
                            if ("function" != typeof e) throw new Error(y(10));
                            (s = e), g({ type: b.REPLACE });
                        },
                    })[w] = function () {
                        var e,
                            t = d;
                        return (
                            ((e = {
                                subscribe: function (e) {
                                    if ("object" != typeof e || null === e) throw new Error(y(11));
                                    function r() {
                                        e.next && e.next(l());
                                    }
                                    return r(), { unsubscribe: t(r) };
                                },
                            })[w] = function () {
                                return this;
                            }),
                            e
                        );
                    }),
                    n
                );
            }
            function A() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return 0 === t.length
                    ? function (e) {
                          return e;
                      }
                    : 1 === t.length
                    ? t[0]
                    : t.reduce(function (e, t) {
                          return function () {
                              return e(t.apply(void 0, arguments));
                          };
                      });
            }
            function x() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function (e) {
                    return function () {
                        var r = e.apply(void 0, arguments),
                            n = function () {
                                throw new Error(y(15));
                            },
                            s = {
                                getState: r.getState,
                                dispatch: function () {
                                    return n.apply(void 0, arguments);
                                },
                            },
                            i = t.map(function (e) {
                                return e(s);
                            });
                        return (n = A.apply(void 0, i)(r.dispatch)), m(m({}, r), {}, { dispatch: n });
                    };
                };
            }
            var k = r(9448),
                E = "persist:",
                P = "persist/FLUSH",
                T = "persist/REHYDRATE",
                O = "persist/PAUSE",
                I = "persist/PERSIST",
                j = "persist/PURGE",
                R = "persist/REGISTER",
                C =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          },
                U =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    };
            function N(e, t, r, n) {
                n.debug;
                var s = U({}, r);
                return (
                    e &&
                        "object" === (void 0 === e ? "undefined" : C(e)) &&
                        Object.keys(e).forEach(function (n) {
                            "_persist" !== n && t[n] === r[n] && (s[n] = e[n]);
                        }),
                    s
                );
            }
            function M(e) {
                return JSON.stringify(e);
            }
            function D(e) {
                var t = e.transforms || [],
                    r = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : E) + e.key,
                    n = e.storage,
                    s =
                        (e.debug,
                        !1 === e.serialize
                            ? function (e) {
                                  return e;
                              }
                            : F);
                return n.getItem(r).then(function (e) {
                    if (e)
                        try {
                            var r = {},
                                n = s(e);
                            return (
                                Object.keys(n).forEach(function (e) {
                                    r[e] = t.reduceRight(function (t, r) {
                                        return r.out(t, e, n);
                                    }, s(n[e]));
                                }),
                                r
                            );
                        } catch (e) {
                            throw e;
                        }
                });
            }
            function F(e) {
                return JSON.parse(e);
            }
            function L(e) {}
            var q =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                    }
                    return e;
                };
            "function" == typeof Symbol && Symbol.iterator, Object.assign;
            var z =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                    }
                    return e;
                };
            function H(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r;
                }
                return Array.from(e);
            }
            var $ = { registry: [], bootstrapped: !1 },
                W = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
                        t = arguments[1];
                    switch (t.type) {
                        case R:
                            return z({}, e, { registry: [].concat(H(e.registry), [t.key]) });
                        case T:
                            var r = e.registry.indexOf(t.key),
                                n = [].concat(H(e.registry));
                            return n.splice(r, 1), z({}, e, { registry: n, bootstrapped: 0 === n.length });
                        default:
                            return e;
                    }
                },
                K = r(9282),
                B = r(3207),
                J = Symbol.for("immer-nothing"),
                Y = Symbol.for("immer-draftable"),
                G = Symbol.for("immer-state");
            function Q(e, ...t) {
                throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
            }
            var V = Object.getPrototypeOf;
            function Z(e) {
                return !!e && !!e[G];
            }
            function X(e) {
                return !!e && (te(e) || Array.isArray(e) || !!e[Y] || !!e.constructor?.[Y] || oe(e) || ae(e));
            }
            var ee = Object.prototype.constructor.toString();
            function te(e) {
                if (!e || "object" != typeof e) return !1;
                const t = V(e);
                if (null === t) return !0;
                const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return r === Object || ("function" == typeof r && Function.toString.call(r) === ee);
            }
            function re(e, t) {
                0 === ne(e)
                    ? Object.entries(e).forEach(([r, n]) => {
                          t(r, n, e);
                      })
                    : e.forEach((r, n) => t(n, r, e));
            }
            function ne(e) {
                const t = e[G];
                return t ? t.type_ : Array.isArray(e) ? 1 : oe(e) ? 2 : ae(e) ? 3 : 0;
            }
            function se(e, t) {
                return 2 === ne(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
            }
            function ie(e, t, r) {
                const n = ne(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
            }
            function oe(e) {
                return e instanceof Map;
            }
            function ae(e) {
                return e instanceof Set;
            }
            function ce(e) {
                return e.copy_ || e.base_;
            }
            function ue(e, t) {
                if (oe(e)) return new Map(e);
                if (ae(e)) return new Set(e);
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                if (!t && te(e)) {
                    if (!V(e)) {
                        const t = Object.create(null);
                        return Object.assign(t, e);
                    }
                    return { ...e };
                }
                const r = Object.getOwnPropertyDescriptors(e);
                delete r[G];
                let n = Reflect.ownKeys(r);
                for (let t = 0; t < n.length; t++) {
                    const s = n[t],
                        i = r[s];
                    !1 === i.writable && ((i.writable = !0), (i.configurable = !0)), (i.get || i.set) && (r[s] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[s] });
                }
                return Object.create(V(e), r);
            }
            function le(e, t = !1) {
                return ge(e) || Z(e) || !X(e) || (ne(e) > 1 && (e.set = e.add = e.clear = e.delete = de), Object.freeze(e), t && re(e, (e, t) => le(t, !0))), e;
            }
            function de() {
                Q(2);
            }
            function ge(e) {
                return Object.isFrozen(e);
            }
            var he,
                pe = {};
            function fe(e) {
                const t = pe[e];
                return t || Q(0), t;
            }
            function _e() {
                return he;
            }
            function me(e, t) {
                t && (fe("Patches"), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
            }
            function ye(e) {
                we(e), e.drafts_.forEach(be), (e.drafts_ = null);
            }
            function we(e) {
                e === he && (he = e.parent_);
            }
            function ve(e) {
                return (he = { drafts_: [], parent_: he, immer_: e, canAutoFreeze_: !0, unfinalizedDrafts_: 0 });
            }
            function be(e) {
                const t = e[G];
                0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
            }
            function Se(e, t) {
                t.unfinalizedDrafts_ = t.drafts_.length;
                const r = t.drafts_[0];
                return (
                    void 0 !== e && e !== r
                        ? (r[G].modified_ && (ye(t), Q(4)), X(e) && ((e = Ae(t, e)), t.parent_ || ke(t, e)), t.patches_ && fe("Patches").generateReplacementPatches_(r[G].base_, e, t.patches_, t.inversePatches_))
                        : (e = Ae(t, r, [])),
                    ye(t),
                    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
                    e !== J ? e : void 0
                );
            }
            function Ae(e, t, r) {
                if (ge(t)) return t;
                const n = t[G];
                if (!n) return re(t, (s, i) => xe(e, n, t, s, i, r)), t;
                if (n.scope_ !== e) return t;
                if (!n.modified_) return ke(e, n.base_, !0), n.base_;
                if (!n.finalized_) {
                    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
                    const t = n.copy_;
                    let s = t,
                        i = !1;
                    3 === n.type_ && ((s = new Set(t)), t.clear(), (i = !0)), re(s, (s, o) => xe(e, n, t, s, o, r, i)), ke(e, t, !1), r && e.patches_ && fe("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
                }
                return n.copy_;
            }
            function xe(e, t, r, n, s, i, o) {
                if (Z(s)) {
                    const o = Ae(e, s, i && t && 3 !== t.type_ && !se(t.assigned_, n) ? i.concat(n) : void 0);
                    if ((ie(r, n, o), !Z(o))) return;
                    e.canAutoFreeze_ = !1;
                } else o && r.add(s);
                if (X(s) && !ge(s)) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                    Ae(e, s), (t && t.scope_.parent_) || ke(e, s);
                }
            }
            function ke(e, t, r = !1) {
                !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && le(t, r);
            }
            var Ee = {
                    get(e, t) {
                        if (t === G) return e;
                        const r = ce(e);
                        if (!se(r, t))
                            return (function (e, t, r) {
                                const n = Oe(t, r);
                                return n ? ("value" in n ? n.value : n.get?.call(e.draft_)) : void 0;
                            })(e, r, t);
                        const n = r[t];
                        return e.finalized_ || !X(n) ? n : n === Te(e.base_, t) ? (je(e), (e.copy_[t] = Re(n, e))) : n;
                    },
                    has: (e, t) => t in ce(e),
                    ownKeys: (e) => Reflect.ownKeys(ce(e)),
                    set(e, t, r) {
                        const n = Oe(ce(e), t);
                        if (n?.set) return n.set.call(e.draft_, r), !0;
                        if (!e.modified_) {
                            const n = Te(ce(e), t),
                                o = n?.[G];
                            if (o && o.base_ === r) return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
                            if (((s = r) === (i = n) ? 0 !== s || 1 / s == 1 / i : s != s && i != i) && (void 0 !== r || se(e.base_, t))) return !0;
                            je(e), Ie(e);
                        }
                        var s, i;
                        return (e.copy_[t] === r && (void 0 !== r || t in e.copy_)) || (Number.isNaN(r) && Number.isNaN(e.copy_[t])) || ((e.copy_[t] = r), (e.assigned_[t] = !0)), !0;
                    },
                    deleteProperty: (e, t) => (void 0 !== Te(e.base_, t) || t in e.base_ ? ((e.assigned_[t] = !1), je(e), Ie(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                    getOwnPropertyDescriptor(e, t) {
                        const r = ce(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return n ? { writable: !0, configurable: 1 !== e.type_ || "length" !== t, enumerable: n.enumerable, value: r[t] } : n;
                    },
                    defineProperty() {
                        Q(11);
                    },
                    getPrototypeOf: (e) => V(e.base_),
                    setPrototypeOf() {
                        Q(12);
                    },
                },
                Pe = {};
            function Te(e, t) {
                const r = e[G];
                return (r ? ce(r) : e)[t];
            }
            function Oe(e, t) {
                if (!(t in e)) return;
                let r = V(e);
                for (; r; ) {
                    const e = Object.getOwnPropertyDescriptor(r, t);
                    if (e) return e;
                    r = V(r);
                }
            }
            function Ie(e) {
                e.modified_ || ((e.modified_ = !0), e.parent_ && Ie(e.parent_));
            }
            function je(e) {
                e.copy_ || (e.copy_ = ue(e.base_, e.scope_.immer_.useStrictShallowCopy_));
            }
            function Re(e, t) {
                const r = oe(e)
                    ? fe("MapSet").proxyMap_(e, t)
                    : ae(e)
                    ? fe("MapSet").proxySet_(e, t)
                    : (function (e, t) {
                          const r = Array.isArray(e),
                              n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : _e(), modified_: !1, finalized_: !1, assigned_: {}, parent_: t, base_: e, draft_: null, copy_: null, revoke_: null, isManual_: !1 };
                          let s = n,
                              i = Ee;
                          r && ((s = [n]), (i = Pe));
                          const { revoke: o, proxy: a } = Proxy.revocable(s, i);
                          return (n.draft_ = a), (n.revoke_ = o), a;
                      })(e, t);
                return (t ? t.scope_ : _e()).drafts_.push(r), r;
            }
            function Ce(e) {
                if (!X(e) || ge(e)) return e;
                const t = e[G];
                let r;
                if (t) {
                    if (!t.modified_) return t.base_;
                    (t.finalized_ = !0), (r = ue(e, t.scope_.immer_.useStrictShallowCopy_));
                } else r = ue(e, !0);
                return (
                    re(r, (e, t) => {
                        ie(r, e, Ce(t));
                    }),
                    t && (t.finalized_ = !1),
                    r
                );
            }
            re(Ee, (e, t) => {
                Pe[e] = function () {
                    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
                };
            }),
                (Pe.deleteProperty = function (e, t) {
                    return Pe.set.call(this, e, t, void 0);
                }),
                (Pe.set = function (e, t, r) {
                    return Ee.set.call(this, e[0], t, r, e[0]);
                });
            var Ue = new (class {
                    constructor(e) {
                        (this.autoFreeze_ = !0),
                            (this.useStrictShallowCopy_ = !1),
                            (this.produce = (e, t, r) => {
                                if ("function" == typeof e && "function" != typeof t) {
                                    const r = t;
                                    t = e;
                                    const n = this;
                                    return function (e = r, ...s) {
                                        return n.produce(e, (e) => t.call(this, e, ...s));
                                    };
                                }
                                let n;
                                if (("function" != typeof t && Q(6), void 0 !== r && "function" != typeof r && Q(7), X(e))) {
                                    const s = ve(this),
                                        i = Re(e, void 0);
                                    let o = !0;
                                    try {
                                        (n = t(i)), (o = !1);
                                    } finally {
                                        o ? ye(s) : we(s);
                                    }
                                    return me(s, r), Se(n, s);
                                }
                                if (!e || "object" != typeof e) {
                                    if (((n = t(e)), void 0 === n && (n = e), n === J && (n = void 0), this.autoFreeze_ && le(n, !0), r)) {
                                        const t = [],
                                            s = [];
                                        fe("Patches").generateReplacementPatches_(e, n, t, s), r(t, s);
                                    }
                                    return n;
                                }
                                Q(1);
                            }),
                            (this.produceWithPatches = (e, t) => {
                                if ("function" == typeof e) return (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r));
                                let r, n;
                                return [
                                    this.produce(e, t, (e, t) => {
                                        (r = e), (n = t);
                                    }),
                                    r,
                                    n,
                                ];
                            }),
                            "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze),
                            "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
                    }
                    createDraft(e) {
                        var t;
                        X(e) || Q(8), Z(e) && (Z((t = e)) || Q(10), (e = Ce(t)));
                        const r = ve(this),
                            n = Re(e, void 0);
                        return (n[G].isManual_ = !0), we(r), n;
                    }
                    finishDraft(e, t) {
                        const r = e && e[G];
                        (r && r.isManual_) || Q(9);
                        const { scope_: n } = r;
                        return me(n, t), Se(void 0, n);
                    }
                    setAutoFreeze(e) {
                        this.autoFreeze_ = e;
                    }
                    setUseStrictShallowCopy(e) {
                        this.useStrictShallowCopy_ = e;
                    }
                    applyPatches(e, t) {
                        let r;
                        for (r = t.length - 1; r >= 0; r--) {
                            const n = t[r];
                            if (0 === n.path.length && "replace" === n.op) {
                                e = n.value;
                                break;
                            }
                        }
                        r > -1 && (t = t.slice(r + 1));
                        const n = fe("Patches").applyPatches_;
                        return Z(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
                    }
                })(),
                Ne = Ue.produce;
            Ue.produceWithPatches.bind(Ue), Ue.setAutoFreeze.bind(Ue), Ue.setUseStrictShallowCopy.bind(Ue), Ue.applyPatches.bind(Ue), Ue.createDraft.bind(Ue), Ue.finishDraft.bind(Ue);
            var Me = "PROLIFIC_ERROR_UPDATE",
                De = "PROLIFIC_STUDIES_UPDATE",
                Fe = { error: 401, studies: [] },
                Le = "SESSION_LAST_CHECKED",
                qe = { last_checked: 0 },
                ze = "SETTING_ALERT_SOUND",
                He = { alert_sound: "sweet-alert-2", alert_volume: 50, desktop_notifications: true, reserve_studies: true, open_page: true };
            function $e(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function We(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? $e(Object(r), !0).forEach(function (t) {
                              l(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : $e(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            var Ke,
                Be = (0, k.createLogger)(),
                Je = {
                    2: function (e) {
                        return We(We({}, e), {}, { settings: We(We({}, e.settings), {}, { desktop_notifications: !0 }) });
                    },
                },
                Ye = (function (e, t) {
                    var r = void 0 !== e.version ? e.version : -1,
                        n = void 0 === e.stateReconciler ? N : e.stateReconciler,
                        s = e.getStoredState || D,
                        i = void 0 !== e.timeout ? e.timeout : 5e3,
                        o = null,
                        a = !1,
                        c = !0,
                        u = function (e) {
                            return e._persist.rehydrated && o && !c && o.update(e), e;
                        };
                    return function (l, d) {
                        var g = l || {},
                            h = g._persist,
                            p = (function (e, t) {
                                var r = {};
                                for (var n in e) t.indexOf(n) >= 0 || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
                                return r;
                            })(g, ["_persist"]);
                        if (d.type === I) {
                            var f = !1,
                                _ = function (t, r) {
                                    f || (d.rehydrate(e.key, t, r), (f = !0));
                                };
                            if (
                                (i &&
                                    setTimeout(function () {
                                        !f && _(void 0, new Error('redux-persist: persist timed out for persist key "' + e.key + '"'));
                                    }, i),
                                (c = !1),
                                o ||
                                    (o = (function (e) {
                                        var t = e.blacklist || null,
                                            r = e.whitelist || null,
                                            n = e.transforms || [],
                                            s = e.throttle || 0,
                                            i = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : E) + e.key,
                                            o = e.storage,
                                            a =
                                                !1 === e.serialize
                                                    ? function (e) {
                                                          return e;
                                                      }
                                                    : M,
                                            c = {},
                                            u = {},
                                            l = [],
                                            d = null,
                                            g = null;
                                        function h() {
                                            if (0 === l.length) return d && clearInterval(d), void (d = null);
                                            var e = l.shift(),
                                                t = n.reduce(function (t, r) {
                                                    return r.in(t, e, c);
                                                }, c[e]);
                                            if (void 0 !== t)
                                                try {
                                                    u[e] = a(t);
                                                } catch (e) {
                                                    console.error("redux-persist/createPersistoid: error serializing state", e);
                                                }
                                            else delete u[e];
                                            0 === l.length &&
                                                (Object.keys(u).forEach(function (e) {
                                                    void 0 === c[e] && delete u[e];
                                                }),
                                                (g = o.setItem(i, a(u)).catch(p)));
                                        }
                                        function p(e) {}
                                        return {
                                            update: function (e) {
                                                Object.keys(e).forEach(function (n) {
                                                    (function (e) {
                                                        return !((r && -1 === r.indexOf(e) && "_persist" !== e) || (t && -1 !== t.indexOf(e)));
                                                    })(n) &&
                                                        c[n] !== e[n] &&
                                                        -1 === l.indexOf(n) &&
                                                        l.push(n);
                                                }),
                                                    Object.keys(c).forEach(function (t) {
                                                        void 0 === e[t] && l.push(t);
                                                    }),
                                                    null === d && (d = setInterval(h, s)),
                                                    (c = e);
                                            },
                                            flush: function () {
                                                for (; 0 !== l.length; ) h();
                                                return g || Promise.resolve();
                                            },
                                        };
                                    })(e)),
                                h)
                            )
                                return l;
                            if ("function" != typeof d.rehydrate || "function" != typeof d.register)
                                throw new Error(
                                    "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution."
                                );
                            return (
                                d.register(e.key),
                                s(e).then(
                                    function (t) {
                                        (
                                            e.migrate ||
                                            function (e, t) {
                                                return Promise.resolve(e);
                                            }
                                        )(t, r).then(
                                            function (e) {
                                                _(e);
                                            },
                                            function (e) {
                                                _(void 0, e);
                                            }
                                        );
                                    },
                                    function (e) {
                                        _(void 0, e);
                                    }
                                ),
                                q({}, t(p, d), { _persist: { version: r, rehydrated: !1 } })
                            );
                        }
                        if (d.type === j)
                            return (
                                (a = !0),
                                d.result(
                                    (function (e) {
                                        var t = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : E) + e.key;
                                        return e.storage.removeItem(t, L);
                                    })(e)
                                ),
                                q({}, t(p, d), { _persist: h })
                            );
                        if (d.type === P) return d.result(o && o.flush()), q({}, t(p, d), { _persist: h });
                        if (d.type === O) c = !0;
                        else if (d.type === T) {
                            if (a) return q({}, p, { _persist: q({}, h, { rehydrated: !0 }) });
                            if (d.key === e.key) {
                                var m = t(p, d),
                                    y = d.payload,
                                    w = !1 !== n && void 0 !== y ? n(y, l, m, e) : m,
                                    v = q({}, w, { _persist: q({}, h, { rehydrated: !0 }) });
                                return u(v);
                            }
                        }
                        if (!h) return t(l, d);
                        var b = t(p, d);
                        return b === p ? l : ((b._persist = h), u(b));
                    };
                })(
                    {
                        key: "settings",
                        storage: K.A,
                        migrate:
                            ((Ke = Je),
                            function (e, t) {
                                if (!e) return Promise.resolve(void 0);
                                var r = e._persist && void 0 !== e._persist.version ? e._persist.version : -1;
                                if (r === t) return Promise.resolve(e);
                                if (r > t) return Promise.resolve(e);
                                var n = Object.keys(Ke)
                                    .map(function (e) {
                                        return parseInt(e);
                                    })
                                    .filter(function (e) {
                                        return t >= e && e > r;
                                    })
                                    .sort(function (e, t) {
                                        return e - t;
                                    });
                                try {
                                    var s = n.reduce(function (e, t) {
                                        return Ke[t](e);
                                    }, e);
                                    return Promise.resolve(s);
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                        whitelist: ["settings"],
                        version: 2,
                    },
                    (function (e) {
                        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                            var s = t[n];
                            "function" == typeof e[s] && (r[s] = e[s]);
                        }
                        var i,
                            o = Object.keys(r);
                        try {
                            !(function (e) {
                                Object.keys(e).forEach(function (t) {
                                    var r = e[t];
                                    if (void 0 === r(void 0, { type: b.INIT })) throw new Error(y(12));
                                    if (void 0 === r(void 0, { type: b.PROBE_UNKNOWN_ACTION() })) throw new Error(y(13));
                                });
                            })(r);
                        } catch (e) {
                            i = e;
                        }
                        return function (e, t) {
                            if ((void 0 === e && (e = {}), i)) throw i;
                            for (var n = !1, s = {}, a = 0; a < o.length; a++) {
                                var c = o[a],
                                    u = r[c],
                                    l = e[c],
                                    d = u(l, t);
                                if (void 0 === d) throw (t && t.type, new Error(y(14)));
                                (s[c] = d), (n = n || d !== l);
                            }
                            return (n = n || o.length !== Object.keys(e).length) ? s : e;
                        };
                    })({
                        prolific: function () {
                            var e = arguments.length > 1 ? arguments[1] : void 0;
                            return Ne(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe, function (t) {
                                switch (e.type) {
                                    case Me:
                                        (t.error = e.payload), (t.studies = []);
                                        break;
                                    case De:
                                        (t.error = void 0), (t.studies = e.payload);
                                }
                            });
                        },
                        session: function () {
                            var e = arguments.length > 1 ? arguments[1] : void 0;
                            return Ne(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe, function (t) {
                                e.type === Le && (t.last_checked = e.payload);
                            });
                        },
                        settings: function () {
                            var e = arguments.length > 1 ? arguments[1] : void 0;
                            return Ne(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He, function (t) {
                                switch (e.type) {
                                    case ze:
                                        t.alert_sound = e.payload;
                                        break;
                                    case "SETTING_ALERT_VOLUME":
                                        t.alert_volume = e.payload;
                                        break;
                                    case "SETTING_DESKTOP_NOTIFICATIONS":
                                        t.desktop_notifications = e.payload;
                                        break;
                                    case "SETTING_RESERVE_STUDIES":
                                        t.reserve_studies = e.payload;
                                        break;
                                    case "SETTING_OPEN_PAGE":
                                        t.open_page = e.payload;
                                }
                            });
                        },
                    })
                );
            function Ge(e) {
                return { type: Me, payload: e };
            }
            function Qe(e) {
                return { type: De, payload: e };
            }
            function Ve(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function Ze(e) {
                return new Intl.NumberFormat("en-US", { style: "currency", currency: "GBP" }).format(0.01 * e);
            }
            const Xe = r.p + "assets/audio/sweet-alert-1.wav",
                et = r.p + "assets/audio/sweet-alert-2.wav",
                tt = r.p + "assets/audio/sweet-alert-3.wav",
                rt = r.p + "assets/audio/sweet-alert-4.wav",
                nt = r.p + "assets/audio/sweet-alert-5.wav";
            function st(e, t) {
                var r = new Audio(e);
                (r.volume = t / 100), r.play();
            }
            function it(e) {
                switch (e.settings.alert_sound) {
                    case "none":
                        break;
                    case "sweet-alert-1":
                        st(Xe, e.settings.alert_volume);
                        break;
                    case "sweet-alert-2":
                        st(et, e.settings.alert_volume);
                        break;
                    case "sweet-alert-3":
                        st(tt, e.settings.alert_volume);
                        break;
                    case "sweet-alert-4":
                        st(rt, e.settings.alert_volume);
                        break;
                    case "sweet-alert-5":
                        st(nt, e.settings.alert_volume);
                        break;
                    case "voice":
                        var t = new SpeechSynthesisUtterance("New studies available on Prolific.");
                        (t.volume = e.settings.alert_volume / 100), speechSynthesis.speak(t);
                }
            }
            var ot = [],
                at = function (e, t) {
                    t.dispatch(Qe(e)), t.dispatch({ type: Le, payload: Date.now() }), o().browserAction.setBadgeText({ text: e.length ? e.length.toString() : "" });
                },
                ct = (function () {
                    var e = t(
                        s().mark(function e(t) {
                            return s().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            at([], t), t.dispatch(Ge(401));
                                        case 2:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })();
            const ut = ct;
            class lt extends Error {}
            lt.prototype.name = "InvalidTokenError";
            var dt,
                gt,
                ht,
                pt = { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
                ft = ((e) => ((e[(e.NONE = 0)] = "NONE"), (e[(e.ERROR = 1)] = "ERROR"), (e[(e.WARN = 2)] = "WARN"), (e[(e.INFO = 3)] = "INFO"), (e[(e.DEBUG = 4)] = "DEBUG"), e))(ft || {});
            ((ht = ft || (ft = {})).reset = function () {
                (dt = 3), (gt = pt);
            }),
                (ht.setLevel = function (e) {
                    if (!(0 <= e && e <= 4)) throw new Error("Invalid log level");
                    dt = e;
                }),
                (ht.setLogger = function (e) {
                    gt = e;
                });
            var _t = class e {
                constructor(e) {
                    this._name = e;
                }
                debug(...t) {
                    dt >= 4 && gt.debug(e._format(this._name, this._method), ...t);
                }
                info(...t) {
                    dt >= 3 && gt.info(e._format(this._name, this._method), ...t);
                }
                warn(...t) {
                    dt >= 2 && gt.warn(e._format(this._name, this._method), ...t);
                }
                error(...t) {
                    dt >= 1 && gt.error(e._format(this._name, this._method), ...t);
                }
                throw(e) {
                    throw (this.error(e), e);
                }
                create(e) {
                    const t = Object.create(this);
                    return (t._method = e), t.debug("begin"), t;
                }
                static createStatic(t, r) {
                    const n = new e(`${t}.${r}`);
                    return n.debug("begin"), n;
                }
                static _format(e, t) {
                    const r = `[${e}]`;
                    return t ? `${r} ${t}:` : r;
                }
                static debug(t, ...r) {
                    dt >= 4 && gt.debug(e._format(t), ...r);
                }
                static info(t, ...r) {
                    dt >= 3 && gt.info(e._format(t), ...r);
                }
                static warn(t, ...r) {
                    dt >= 2 && gt.warn(e._format(t), ...r);
                }
                static error(t, ...r) {
                    dt >= 1 && gt.error(e._format(t), ...r);
                }
            };
            ft.reset();
            var mt = (e) => btoa([...new Uint8Array(e)].map((e) => String.fromCharCode(e)).join("")),
                yt = class e {
                    static _randomWord() {
                        const e = new Uint32Array(1);
                        return crypto.getRandomValues(e), e[0];
                    }
                    static generateUUIDv4() {
                        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (t) => (+t ^ (e._randomWord() & (15 >> (+t / 4)))).toString(16)).replace(/-/g, "");
                    }
                    static generateCodeVerifier() {
                        return e.generateUUIDv4() + e.generateUUIDv4() + e.generateUUIDv4();
                    }
                    static async generateCodeChallenge(e) {
                        if (!crypto.subtle) throw new Error("Crypto.subtle is available only in secure contexts (HTTPS).");
                        try {
                            const t = new TextEncoder().encode(e),
                                r = await crypto.subtle.digest("SHA-256", t);
                            return mt(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                        } catch (e) {
                            throw (_t.error("CryptoUtils.generateCodeChallenge", e), e);
                        }
                    }
                    static generateBasicAuth(e, t) {
                        const r = new TextEncoder().encode([e, t].join(":"));
                        return mt(r);
                    }
                },
                wt = class {
                    constructor(e) {
                        (this._name = e), (this._logger = new _t(`Event('${this._name}')`)), (this._callbacks = []);
                    }
                    addHandler(e) {
                        return this._callbacks.push(e), () => this.removeHandler(e);
                    }
                    removeHandler(e) {
                        const t = this._callbacks.lastIndexOf(e);
                        t >= 0 && this._callbacks.splice(t, 1);
                    }
                    async raise(...e) {
                        this._logger.debug("raise:", ...e);
                        for (const t of this._callbacks) await t(...e);
                    }
                },
                vt = class {
                    static decode(e) {
                        try {
                            return (function (e, t) {
                                if ("string" != typeof e) throw new lt("Invalid token specified: must be a string");
                                t || (t = {});
                                const r = !0 === t.header ? 0 : 1,
                                    n = e.split(".")[r];
                                if ("string" != typeof n) throw new lt(`Invalid token specified: missing part #${r + 1}`);
                                let s;
                                try {
                                    s = (function (e) {
                                        let t = e.replace(/-/g, "+").replace(/_/g, "/");
                                        switch (t.length % 4) {
                                            case 0:
                                                break;
                                            case 2:
                                                t += "==";
                                                break;
                                            case 3:
                                                t += "=";
                                                break;
                                            default:
                                                throw new Error("base64 string is not of the correct length");
                                        }
                                        try {
                                            return (function (e) {
                                                return decodeURIComponent(
                                                    atob(e).replace(/(.)/g, (e, t) => {
                                                        let r = t.charCodeAt(0).toString(16).toUpperCase();
                                                        return r.length < 2 && (r = "0" + r), "%" + r;
                                                    })
                                                );
                                            })(t);
                                        } catch (e) {
                                            return atob(t);
                                        }
                                    })(n);
                                } catch (e) {
                                    throw new lt(`Invalid token specified: invalid base64 for part #${r + 1} (${e.message})`);
                                }
                                try {
                                    return JSON.parse(s);
                                } catch (e) {
                                    throw new lt(`Invalid token specified: invalid json for part #${r + 1} (${e.message})`);
                                }
                            })(e);
                        } catch (e) {
                            throw (_t.error("JwtUtils.decode", e), e);
                        }
                    }
                },
                bt = class {
                    static center({ ...e }) {
                        var t;
                        return (
                            null == e.width && (e.width = null != (t = [800, 720, 600, 480].find((e) => e <= window.outerWidth / 1.618)) ? t : 360),
                            null != e.left || (e.left = Math.max(0, Math.round(window.screenX + (window.outerWidth - e.width) / 2))),
                            null != e.height && (null != e.top || (e.top = Math.max(0, Math.round(window.screenY + (window.outerHeight - e.height) / 2)))),
                            e
                        );
                    }
                    static serialize(e) {
                        return Object.entries(e)
                            .filter(([, e]) => null != e)
                            .map(([e, t]) => `${e}=${"boolean" != typeof t ? t : t ? "yes" : "no"}`)
                            .join(",");
                    }
                },
                St = class e extends wt {
                    constructor() {
                        super(...arguments),
                            (this._logger = new _t(`Timer('${this._name}')`)),
                            (this._timerHandle = null),
                            (this._expiration = 0),
                            (this._callback = () => {
                                const t = this._expiration - e.getEpochTime();
                                this._logger.debug("timer completes in", t), this._expiration <= e.getEpochTime() && (this.cancel(), super.raise());
                            });
                    }
                    static getEpochTime() {
                        return Math.floor(Date.now() / 1e3);
                    }
                    init(t) {
                        const r = this._logger.create("init");
                        t = Math.max(Math.floor(t), 1);
                        const n = e.getEpochTime() + t;
                        if (this.expiration === n && this._timerHandle) return void r.debug("skipping since already initialized for expiration at", this.expiration);
                        this.cancel(), r.debug("using duration", t), (this._expiration = n);
                        const s = Math.min(t, 5);
                        this._timerHandle = setInterval(this._callback, 1e3 * s);
                    }
                    get expiration() {
                        return this._expiration;
                    }
                    cancel() {
                        this._logger.create("cancel"), this._timerHandle && (clearInterval(this._timerHandle), (this._timerHandle = null));
                    }
                },
                At = class {
                    static readParams(e, t = "query") {
                        if (!e) throw new TypeError("Invalid URL");
                        const r = new URL(e, "http://127.0.0.1")["fragment" === t ? "hash" : "search"];
                        return new URLSearchParams(r.slice(1));
                    }
                },
                xt = class extends Error {
                    constructor(e, t) {
                        var r, n, s;
                        if ((super(e.error_description || e.error || ""), (this.form = t), (this.name = "ErrorResponse"), !e.error)) throw (_t.error("ErrorResponse", "No error passed"), new Error("No error passed"));
                        (this.error = e.error),
                            (this.error_description = null != (r = e.error_description) ? r : null),
                            (this.error_uri = null != (n = e.error_uri) ? n : null),
                            (this.state = e.userState),
                            (this.session_state = null != (s = e.session_state) ? s : null),
                            (this.url_state = e.url_state);
                    }
                },
                kt = class extends Error {
                    constructor(e) {
                        super(e), (this.name = "ErrorTimeout");
                    }
                },
                Et = class {
                    constructor(e) {
                        (this._logger = new _t("AccessTokenEvents")),
                            (this._expiringTimer = new St("Access token expiring")),
                            (this._expiredTimer = new St("Access token expired")),
                            (this._expiringNotificationTimeInSeconds = e.expiringNotificationTimeInSeconds);
                    }
                    load(e) {
                        const t = this._logger.create("load");
                        if (e.access_token && void 0 !== e.expires_in) {
                            const r = e.expires_in;
                            if ((t.debug("access token present, remaining duration:", r), r > 0)) {
                                let e = r - this._expiringNotificationTimeInSeconds;
                                e <= 0 && (e = 1), t.debug("registering expiring timer, raising in", e, "seconds"), this._expiringTimer.init(e);
                            } else t.debug("canceling existing expiring timer because we're past expiration."), this._expiringTimer.cancel();
                            const n = r + 1;
                            t.debug("registering expired timer, raising in", n, "seconds"), this._expiredTimer.init(n);
                        } else this._expiringTimer.cancel(), this._expiredTimer.cancel();
                    }
                    unload() {
                        this._logger.debug("unload: canceling existing access token timers"), this._expiringTimer.cancel(), this._expiredTimer.cancel();
                    }
                    addAccessTokenExpiring(e) {
                        return this._expiringTimer.addHandler(e);
                    }
                    removeAccessTokenExpiring(e) {
                        this._expiringTimer.removeHandler(e);
                    }
                    addAccessTokenExpired(e) {
                        return this._expiredTimer.addHandler(e);
                    }
                    removeAccessTokenExpired(e) {
                        this._expiredTimer.removeHandler(e);
                    }
                },
                Pt = class {
                    constructor(e, t, r, n, s) {
                        (this._callback = e),
                            (this._client_id = t),
                            (this._intervalInSeconds = n),
                            (this._stopOnError = s),
                            (this._logger = new _t("CheckSessionIFrame")),
                            (this._timer = null),
                            (this._session_state = null),
                            (this._message = (e) => {
                                e.origin === this._frame_origin &&
                                    e.source === this._frame.contentWindow &&
                                    ("error" === e.data
                                        ? (this._logger.error("error message from check session op iframe"), this._stopOnError && this.stop())
                                        : "changed" === e.data
                                        ? (this._logger.debug("changed message from check session op iframe"), this.stop(), this._callback())
                                        : this._logger.debug(e.data + " message from check session op iframe"));
                            });
                        const i = new URL(r);
                        (this._frame_origin = i.origin),
                            (this._frame = window.document.createElement("iframe")),
                            (this._frame.style.visibility = "hidden"),
                            (this._frame.style.position = "fixed"),
                            (this._frame.style.left = "-1000px"),
                            (this._frame.style.top = "0"),
                            (this._frame.width = "0"),
                            (this._frame.height = "0"),
                            (this._frame.src = i.href);
                    }
                    load() {
                        return new Promise((e) => {
                            (this._frame.onload = () => {
                                e();
                            }),
                                window.document.body.appendChild(this._frame),
                                window.addEventListener("message", this._message, !1);
                        });
                    }
                    start(e) {
                        if (this._session_state === e) return;
                        this._logger.create("start"), this.stop(), (this._session_state = e);
                        const t = () => {
                            this._frame.contentWindow && this._session_state && this._frame.contentWindow.postMessage(this._client_id + " " + this._session_state, this._frame_origin);
                        };
                        t(), (this._timer = setInterval(t, 1e3 * this._intervalInSeconds));
                    }
                    stop() {
                        this._logger.create("stop"), (this._session_state = null), this._timer && (clearInterval(this._timer), (this._timer = null));
                    }
                },
                Tt = class {
                    constructor() {
                        (this._logger = new _t("InMemoryWebStorage")), (this._data = {});
                    }
                    clear() {
                        this._logger.create("clear"), (this._data = {});
                    }
                    getItem(e) {
                        return this._logger.create(`getItem('${e}')`), this._data[e];
                    }
                    setItem(e, t) {
                        this._logger.create(`setItem('${e}')`), (this._data[e] = t);
                    }
                    removeItem(e) {
                        this._logger.create(`removeItem('${e}')`), delete this._data[e];
                    }
                    get length() {
                        return Object.getOwnPropertyNames(this._data).length;
                    }
                    key(e) {
                        return Object.getOwnPropertyNames(this._data)[e];
                    }
                },
                Ot = class {
                    constructor(e = [], t = null, r = {}) {
                        (this._jwtHandler = t), (this._extraHeaders = r), (this._logger = new _t("JsonService")), (this._contentTypes = []), this._contentTypes.push(...e, "application/json"), t && this._contentTypes.push("application/jwt");
                    }
                    async fetchWithTimeout(e, t = {}) {
                        const { timeoutInSeconds: r, ...n } = t;
                        if (!r) return await fetch(e, n);
                        const s = new AbortController(),
                            i = setTimeout(() => s.abort(), 1e3 * r);
                        try {
                            return await fetch(e, { ...t, signal: s.signal });
                        } catch (e) {
                            if (e instanceof DOMException && "AbortError" === e.name) throw new kt("Network timed out");
                            throw e;
                        } finally {
                            clearTimeout(i);
                        }
                    }
                    async getJson(e, { token: t, credentials: r } = {}) {
                        const n = this._logger.create("getJson"),
                            s = { Accept: this._contentTypes.join(", ") };
                        let i;
                        t && (n.debug("token passed, setting Authorization header"), (s.Authorization = "Bearer " + t)), this.appendExtraHeaders(s);
                        try {
                            n.debug("url:", e), (i = await this.fetchWithTimeout(e, { method: "GET", headers: s, credentials: r }));
                        } catch (e) {
                            throw (n.error("Network Error"), e);
                        }
                        n.debug("HTTP response received, status", i.status);
                        const o = i.headers.get("Content-Type");
                        if (
                            (o && !this._contentTypes.find((e) => o.startsWith(e)) && n.throw(new Error(`Invalid response Content-Type: ${null != o ? o : "undefined"}, from URL: ${e}`)),
                            i.ok && this._jwtHandler && (null == o ? void 0 : o.startsWith("application/jwt")))
                        )
                            return await this._jwtHandler(await i.text());
                        let a;
                        try {
                            a = await i.json();
                        } catch (e) {
                            if ((n.error("Error parsing JSON response", e), i.ok)) throw e;
                            throw new Error(`${i.statusText} (${i.status})`);
                        }
                        if (!i.ok) {
                            if ((n.error("Error from server:", a), a.error)) throw new xt(a);
                            throw new Error(`${i.statusText} (${i.status}): ${JSON.stringify(a)}`);
                        }
                        return a;
                    }
                    async postForm(e, { body: t, basicAuth: r, timeoutInSeconds: n, initCredentials: s }) {
                        const i = this._logger.create("postForm"),
                            o = { Accept: this._contentTypes.join(", "), "Content-Type": "application/x-www-form-urlencoded" };
                        let a;
                        void 0 !== r && (o.Authorization = "Basic " + r), this.appendExtraHeaders(o);
                        try {
                            i.debug("url:", e), (a = await this.fetchWithTimeout(e, { method: "POST", headers: o, body: t, timeoutInSeconds: n, credentials: s }));
                        } catch (e) {
                            throw (i.error("Network error"), e);
                        }
                        i.debug("HTTP response received, status", a.status);
                        const c = a.headers.get("Content-Type");
                        if (c && !this._contentTypes.find((e) => c.startsWith(e))) throw new Error(`Invalid response Content-Type: ${null != c ? c : "undefined"}, from URL: ${e}`);
                        const u = await a.text();
                        let l = {};
                        if (u)
                            try {
                                l = JSON.parse(u);
                            } catch (e) {
                                if ((i.error("Error parsing JSON response", e), a.ok)) throw e;
                                throw new Error(`${a.statusText} (${a.status})`);
                            }
                        if (!a.ok) {
                            if ((i.error("Error from server:", l), l.error)) throw new xt(l, t);
                            throw new Error(`${a.statusText} (${a.status}): ${JSON.stringify(l)}`);
                        }
                        return l;
                    }
                    appendExtraHeaders(e) {
                        const t = this._logger.create("appendExtraHeaders"),
                            r = Object.keys(this._extraHeaders),
                            n = ["authorization", "accept", "content-type"];
                        0 !== r.length &&
                            r.forEach((r) => {
                                if (n.includes(r.toLocaleLowerCase())) return void t.warn("Protected header could not be overridden", r, n);
                                const s = "function" == typeof this._extraHeaders[r] ? this._extraHeaders[r]() : this._extraHeaders[r];
                                s && "" !== s && (e[r] = s);
                            });
                    }
                },
                It = class {
                    constructor(e) {
                        (this._settings = e),
                            (this._logger = new _t("MetadataService")),
                            (this._signingKeys = null),
                            (this._metadata = null),
                            (this._metadataUrl = this._settings.metadataUrl),
                            (this._jsonService = new Ot(["application/jwk-set+json"], null, this._settings.extraHeaders)),
                            this._settings.signingKeys && (this._logger.debug("using signingKeys from settings"), (this._signingKeys = this._settings.signingKeys)),
                            this._settings.metadata && (this._logger.debug("using metadata from settings"), (this._metadata = this._settings.metadata)),
                            this._settings.fetchRequestCredentials && (this._logger.debug("using fetchRequestCredentials from settings"), (this._fetchRequestCredentials = this._settings.fetchRequestCredentials));
                    }
                    resetSigningKeys() {
                        this._signingKeys = null;
                    }
                    async getMetadata() {
                        const e = this._logger.create("getMetadata");
                        if (this._metadata) return e.debug("using cached values"), this._metadata;
                        if (!this._metadataUrl) throw (e.throw(new Error("No authority or metadataUrl configured on settings")), null);
                        e.debug("getting metadata from", this._metadataUrl);
                        const t = await this._jsonService.getJson(this._metadataUrl, { credentials: this._fetchRequestCredentials });
                        return e.debug("merging remote JSON with seed metadata"), (this._metadata = Object.assign({}, this._settings.metadataSeed, t)), this._metadata;
                    }
                    getIssuer() {
                        return this._getMetadataProperty("issuer");
                    }
                    getAuthorizationEndpoint() {
                        return this._getMetadataProperty("authorization_endpoint");
                    }
                    getUserInfoEndpoint() {
                        return this._getMetadataProperty("userinfo_endpoint");
                    }
                    getTokenEndpoint(e = !0) {
                        return this._getMetadataProperty("token_endpoint", e);
                    }
                    getCheckSessionIframe() {
                        return this._getMetadataProperty("check_session_iframe", !0);
                    }
                    getEndSessionEndpoint() {
                        return this._getMetadataProperty("end_session_endpoint", !0);
                    }
                    getRevocationEndpoint(e = !0) {
                        return this._getMetadataProperty("revocation_endpoint", e);
                    }
                    getKeysEndpoint(e = !0) {
                        return this._getMetadataProperty("jwks_uri", e);
                    }
                    async _getMetadataProperty(e, t = !1) {
                        const r = this._logger.create(`_getMetadataProperty('${e}')`),
                            n = await this.getMetadata();
                        if ((r.debug("resolved"), void 0 === n[e])) {
                            if (!0 === t) return void r.warn("Metadata does not contain optional property");
                            r.throw(new Error("Metadata does not contain property " + e));
                        }
                        return n[e];
                    }
                    async getSigningKeys() {
                        const e = this._logger.create("getSigningKeys");
                        if (this._signingKeys) return e.debug("returning signingKeys from cache"), this._signingKeys;
                        const t = await this.getKeysEndpoint(!1);
                        e.debug("got jwks_uri", t);
                        const r = await this._jsonService.getJson(t);
                        if ((e.debug("got key set", r), !Array.isArray(r.keys))) throw (e.throw(new Error("Missing keys on keyset")), null);
                        return (this._signingKeys = r.keys), this._signingKeys;
                    }
                },
                jt = class {
                    constructor({ prefix: e = "oidc.", store: t = localStorage } = {}) {
                        (this._logger = new _t("WebStorageStateStore")), (this._store = t), (this._prefix = e);
                    }
                    async set(e, t) {
                        this._logger.create(`set('${e}')`), (e = this._prefix + e), await this._store.setItem(e, t);
                    }
                    async get(e) {
                        return this._logger.create(`get('${e}')`), (e = this._prefix + e), await this._store.getItem(e);
                    }
                    async remove(e) {
                        this._logger.create(`remove('${e}')`), (e = this._prefix + e);
                        const t = await this._store.getItem(e);
                        return await this._store.removeItem(e), t;
                    }
                    async getAllKeys() {
                        this._logger.create("getAllKeys");
                        const e = await this._store.length,
                            t = [];
                        for (let r = 0; r < e; r++) {
                            const e = await this._store.key(r);
                            e && 0 === e.indexOf(this._prefix) && t.push(e.substr(this._prefix.length));
                        }
                        return t;
                    }
                },
                Rt = class {
                    constructor({
                        authority: e,
                        metadataUrl: t,
                        metadata: r,
                        signingKeys: n,
                        metadataSeed: s,
                        client_id: i,
                        client_secret: o,
                        response_type: a = "code",
                        scope: c = "openid",
                        redirect_uri: u,
                        post_logout_redirect_uri: l,
                        client_authentication: d = "client_secret_post",
                        prompt: g,
                        display: h,
                        max_age: p,
                        ui_locales: f,
                        acr_values: _,
                        resource: m,
                        response_mode: y,
                        filterProtocolClaims: w = !0,
                        loadUserInfo: v = !1,
                        staleStateAgeInSeconds: b = 900,
                        mergeClaimsStrategy: S = { array: "replace" },
                        disablePKCE: A = !1,
                        stateStore: x,
                        revokeTokenAdditionalContentTypes: k,
                        fetchRequestCredentials: E,
                        refreshTokenAllowedScope: P,
                        extraQueryParams: T = {},
                        extraTokenParams: O = {},
                        extraHeaders: I = {},
                    }) {
                        if (
                            ((this.authority = e),
                            t ? (this.metadataUrl = t) : ((this.metadataUrl = e), e && (this.metadataUrl.endsWith("/") || (this.metadataUrl += "/"), (this.metadataUrl += ".well-known/openid-configuration"))),
                            (this.metadata = r),
                            (this.metadataSeed = s),
                            (this.signingKeys = n),
                            (this.client_id = i),
                            (this.client_secret = o),
                            (this.response_type = a),
                            (this.scope = c),
                            (this.redirect_uri = u),
                            (this.post_logout_redirect_uri = l),
                            (this.client_authentication = d),
                            (this.prompt = g),
                            (this.display = h),
                            (this.max_age = p),
                            (this.ui_locales = f),
                            (this.acr_values = _),
                            (this.resource = m),
                            (this.response_mode = y),
                            (this.filterProtocolClaims = null == w || w),
                            (this.loadUserInfo = !!v),
                            (this.staleStateAgeInSeconds = b),
                            (this.mergeClaimsStrategy = S),
                            (this.disablePKCE = !!A),
                            (this.revokeTokenAdditionalContentTypes = k),
                            (this.fetchRequestCredentials = E || "same-origin"),
                            x)
                        )
                            this.stateStore = x;
                        else {
                            const e = "undefined" != typeof window ? window.localStorage : new Tt();
                            this.stateStore = new jt({ store: e });
                        }
                        (this.refreshTokenAllowedScope = P), (this.extraQueryParams = T), (this.extraTokenParams = O), (this.extraHeaders = I);
                    }
                },
                Ct = class {
                    constructor(e, t) {
                        (this._settings = e),
                            (this._metadataService = t),
                            (this._logger = new _t("UserInfoService")),
                            (this._getClaimsFromJwt = async (e) => {
                                const t = this._logger.create("_getClaimsFromJwt");
                                try {
                                    const r = vt.decode(e);
                                    return t.debug("JWT decoding successful"), r;
                                } catch (e) {
                                    throw (t.error("Error parsing JWT response"), e);
                                }
                            }),
                            (this._jsonService = new Ot(void 0, this._getClaimsFromJwt, this._settings.extraHeaders));
                    }
                    async getClaims(e) {
                        const t = this._logger.create("getClaims");
                        e || this._logger.throw(new Error("No token passed"));
                        const r = await this._metadataService.getUserInfoEndpoint();
                        t.debug("got userinfo url", r);
                        const n = await this._jsonService.getJson(r, { token: e, credentials: this._settings.fetchRequestCredentials });
                        return t.debug("got claims", n), n;
                    }
                },
                Ut = class {
                    constructor(e, t) {
                        (this._settings = e), (this._metadataService = t), (this._logger = new _t("TokenClient")), (this._jsonService = new Ot(this._settings.revokeTokenAdditionalContentTypes, null, this._settings.extraHeaders));
                    }
                    async exchangeCode({ grant_type: e = "authorization_code", redirect_uri: t = this._settings.redirect_uri, client_id: r = this._settings.client_id, client_secret: n = this._settings.client_secret, ...s }) {
                        const i = this._logger.create("exchangeCode");
                        r || i.throw(new Error("A client_id is required")), t || i.throw(new Error("A redirect_uri is required")), s.code || i.throw(new Error("A code is required"));
                        const o = new URLSearchParams({ grant_type: e, redirect_uri: t });
                        for (const [e, t] of Object.entries(s)) null != t && o.set(e, t);
                        let a;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (!n) throw (i.throw(new Error("A client_secret is required")), null);
                                a = yt.generateBasicAuth(r, n);
                                break;
                            case "client_secret_post":
                                o.append("client_id", r), n && o.append("client_secret", n);
                        }
                        const c = await this._metadataService.getTokenEndpoint(!1);
                        i.debug("got token endpoint");
                        const u = await this._jsonService.postForm(c, { body: o, basicAuth: a, initCredentials: this._settings.fetchRequestCredentials });
                        return i.debug("got response"), u;
                    }
                    async exchangeCredentials({ grant_type: e = "password", client_id: t = this._settings.client_id, client_secret: r = this._settings.client_secret, scope: n = this._settings.scope, ...s }) {
                        const i = this._logger.create("exchangeCredentials");
                        t || i.throw(new Error("A client_id is required"));
                        const o = new URLSearchParams({ grant_type: e, scope: n });
                        for (const [e, t] of Object.entries(s)) null != t && o.set(e, t);
                        let a;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (!r) throw (i.throw(new Error("A client_secret is required")), null);
                                a = yt.generateBasicAuth(t, r);
                                break;
                            case "client_secret_post":
                                o.append("client_id", t), r && o.append("client_secret", r);
                        }
                        const c = await this._metadataService.getTokenEndpoint(!1);
                        i.debug("got token endpoint");
                        const u = await this._jsonService.postForm(c, { body: o, basicAuth: a, initCredentials: this._settings.fetchRequestCredentials });
                        return i.debug("got response"), u;
                    }
                    async exchangeRefreshToken({ grant_type: e = "refresh_token", client_id: t = this._settings.client_id, client_secret: r = this._settings.client_secret, timeoutInSeconds: n, ...s }) {
                        const i = this._logger.create("exchangeRefreshToken");
                        t || i.throw(new Error("A client_id is required")), s.refresh_token || i.throw(new Error("A refresh_token is required"));
                        const o = new URLSearchParams({ grant_type: e });
                        for (const [e, t] of Object.entries(s)) Array.isArray(t) ? t.forEach((t) => o.append(e, t)) : null != t && o.set(e, t);
                        let a;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (!r) throw (i.throw(new Error("A client_secret is required")), null);
                                a = yt.generateBasicAuth(t, r);
                                break;
                            case "client_secret_post":
                                o.append("client_id", t), r && o.append("client_secret", r);
                        }
                        const c = await this._metadataService.getTokenEndpoint(!1);
                        i.debug("got token endpoint");
                        const u = await this._jsonService.postForm(c, { body: o, basicAuth: a, timeoutInSeconds: n, initCredentials: this._settings.fetchRequestCredentials });
                        return i.debug("got response"), u;
                    }
                    async revoke(e) {
                        var t;
                        const r = this._logger.create("revoke");
                        e.token || r.throw(new Error("A token is required"));
                        const n = await this._metadataService.getRevocationEndpoint(!1);
                        r.debug(`got revocation endpoint, revoking ${null != (t = e.token_type_hint) ? t : "default token type"}`);
                        const s = new URLSearchParams();
                        for (const [t, r] of Object.entries(e)) null != r && s.set(t, r);
                        s.set("client_id", this._settings.client_id), this._settings.client_secret && s.set("client_secret", this._settings.client_secret), await this._jsonService.postForm(n, { body: s }), r.debug("got response");
                    }
                },
                Nt = class {
                    constructor(e, t, r) {
                        (this._settings = e),
                            (this._metadataService = t),
                            (this._claimsService = r),
                            (this._logger = new _t("ResponseValidator")),
                            (this._userInfoService = new Ct(this._settings, this._metadataService)),
                            (this._tokenClient = new Ut(this._settings, this._metadataService));
                    }
                    async validateSigninResponse(e, t) {
                        const r = this._logger.create("validateSigninResponse");
                        this._processSigninState(e, t),
                            r.debug("state processed"),
                            await this._processCode(e, t),
                            r.debug("code processed"),
                            e.isOpenId && this._validateIdTokenAttributes(e),
                            r.debug("tokens validated"),
                            await this._processClaims(e, null == t ? void 0 : t.skipUserInfo, e.isOpenId),
                            r.debug("claims processed");
                    }
                    async validateCredentialsResponse(e, t) {
                        const r = this._logger.create("validateCredentialsResponse");
                        e.isOpenId && e.id_token && this._validateIdTokenAttributes(e), r.debug("tokens validated"), await this._processClaims(e, t, e.isOpenId), r.debug("claims processed");
                    }
                    async validateRefreshResponse(e, t) {
                        const r = this._logger.create("validateRefreshResponse");
                        (e.userState = t.data),
                            null != e.session_state || (e.session_state = t.session_state),
                            null != e.scope || (e.scope = t.scope),
                            e.isOpenId && e.id_token && (this._validateIdTokenAttributes(e, t.id_token), r.debug("ID Token validated")),
                            e.id_token || ((e.id_token = t.id_token), (e.profile = t.profile));
                        const n = e.isOpenId && !!e.id_token;
                        await this._processClaims(e, !1, n), r.debug("claims processed");
                    }
                    validateSignoutResponse(e, t) {
                        const r = this._logger.create("validateSignoutResponse");
                        if ((t.id !== e.state && r.throw(new Error("State does not match")), r.debug("state validated"), (e.userState = t.data), e.error)) throw (r.warn("Response was error", e.error), new xt(e));
                    }
                    _processSigninState(e, t) {
                        const r = this._logger.create("_processSigninState");
                        if (
                            (t.id !== e.state && r.throw(new Error("State does not match")),
                            t.client_id || r.throw(new Error("No client_id on state")),
                            t.authority || r.throw(new Error("No authority on state")),
                            this._settings.authority !== t.authority && r.throw(new Error("authority mismatch on settings vs. signin state")),
                            this._settings.client_id && this._settings.client_id !== t.client_id && r.throw(new Error("client_id mismatch on settings vs. signin state")),
                            r.debug("state validated"),
                            (e.userState = t.data),
                            (e.url_state = t.url_state),
                            null != e.scope || (e.scope = t.scope),
                            e.error)
                        )
                            throw (r.warn("Response was error", e.error), new xt(e));
                        t.code_verifier && !e.code && r.throw(new Error("Expected code in response"));
                    }
                    async _processClaims(e, t = !1, r = !0) {
                        const n = this._logger.create("_processClaims");
                        if (((e.profile = this._claimsService.filterProtocolClaims(e.profile)), t || !this._settings.loadUserInfo || !e.access_token)) return void n.debug("not loading user info");
                        n.debug("loading user info");
                        const s = await this._userInfoService.getClaims(e.access_token);
                        n.debug("user info claims received from user info endpoint"),
                            r && s.sub !== e.profile.sub && n.throw(new Error("subject from UserInfo response does not match subject in ID Token")),
                            (e.profile = this._claimsService.mergeClaims(e.profile, this._claimsService.filterProtocolClaims(s))),
                            n.debug("user info claims received, updated profile:", e.profile);
                    }
                    async _processCode(e, t) {
                        const r = this._logger.create("_processCode");
                        if (e.code) {
                            r.debug("Validating code");
                            const n = await this._tokenClient.exchangeCode({ client_id: t.client_id, client_secret: t.client_secret, code: e.code, redirect_uri: t.redirect_uri, code_verifier: t.code_verifier, ...t.extraTokenParams });
                            Object.assign(e, n);
                        } else r.debug("No code to process");
                    }
                    _validateIdTokenAttributes(e, t) {
                        var r;
                        const n = this._logger.create("_validateIdTokenAttributes");
                        n.debug("decoding ID Token JWT");
                        const s = vt.decode(null != (r = e.id_token) ? r : "");
                        if ((s.sub || n.throw(new Error("ID Token is missing a subject claim")), t)) {
                            const e = vt.decode(t);
                            s.sub !== e.sub && n.throw(new Error("sub in id_token does not match current sub")),
                                s.auth_time && s.auth_time !== e.auth_time && n.throw(new Error("auth_time in id_token does not match original auth_time")),
                                s.azp && s.azp !== e.azp && n.throw(new Error("azp in id_token does not match original azp")),
                                !s.azp && e.azp && n.throw(new Error("azp not in id_token, but present in original id_token"));
                        }
                        e.profile = s;
                    }
                },
                Mt = class e {
                    constructor(e) {
                        (this.id = e.id || yt.generateUUIDv4()),
                            (this.data = e.data),
                            e.created && e.created > 0 ? (this.created = e.created) : (this.created = St.getEpochTime()),
                            (this.request_type = e.request_type),
                            (this.url_state = e.url_state);
                    }
                    toStorageString() {
                        return new _t("State").create("toStorageString"), JSON.stringify({ id: this.id, data: this.data, created: this.created, request_type: this.request_type, url_state: this.url_state });
                    }
                    static fromStorageString(t) {
                        return _t.createStatic("State", "fromStorageString"), Promise.resolve(new e(JSON.parse(t)));
                    }
                    static async clearStaleState(t, r) {
                        const n = _t.createStatic("State", "clearStaleState"),
                            s = St.getEpochTime() - r,
                            i = await t.getAllKeys();
                        n.debug("got keys", i);
                        for (let r = 0; r < i.length; r++) {
                            const o = i[r],
                                a = await t.get(o);
                            let c = !1;
                            if (a)
                                try {
                                    const t = await e.fromStorageString(a);
                                    n.debug("got item from key:", o, t.created), t.created <= s && (c = !0);
                                } catch (e) {
                                    n.error("Error parsing state for key:", o, e), (c = !0);
                                }
                            else n.debug("no item in storage for key:", o), (c = !0);
                            c && (n.debug("removed item for key:", o), t.remove(o));
                        }
                    }
                },
                Dt = class e extends Mt {
                    constructor(e) {
                        super(e),
                            (this.code_verifier = e.code_verifier),
                            (this.code_challenge = e.code_challenge),
                            (this.authority = e.authority),
                            (this.client_id = e.client_id),
                            (this.redirect_uri = e.redirect_uri),
                            (this.scope = e.scope),
                            (this.client_secret = e.client_secret),
                            (this.extraTokenParams = e.extraTokenParams),
                            (this.response_mode = e.response_mode),
                            (this.skipUserInfo = e.skipUserInfo);
                    }
                    static async create(t) {
                        const r = !0 === t.code_verifier ? yt.generateCodeVerifier() : t.code_verifier || void 0,
                            n = r ? await yt.generateCodeChallenge(r) : void 0;
                        return new e({ ...t, code_verifier: r, code_challenge: n });
                    }
                    toStorageString() {
                        return (
                            new _t("SigninState").create("toStorageString"),
                            JSON.stringify({
                                id: this.id,
                                data: this.data,
                                created: this.created,
                                request_type: this.request_type,
                                url_state: this.url_state,
                                code_verifier: this.code_verifier,
                                authority: this.authority,
                                client_id: this.client_id,
                                redirect_uri: this.redirect_uri,
                                scope: this.scope,
                                client_secret: this.client_secret,
                                extraTokenParams: this.extraTokenParams,
                                response_mode: this.response_mode,
                                skipUserInfo: this.skipUserInfo,
                            })
                        );
                    }
                    static fromStorageString(t) {
                        _t.createStatic("SigninState", "fromStorageString");
                        const r = JSON.parse(t);
                        return e.create(r);
                    }
                },
                Ft = class e {
                    constructor(e) {
                        (this.url = e.url), (this.state = e.state);
                    }
                    static async create({
                        url: t,
                        authority: r,
                        client_id: n,
                        redirect_uri: s,
                        response_type: i,
                        scope: o,
                        state_data: a,
                        response_mode: c,
                        request_type: u,
                        client_secret: l,
                        nonce: d,
                        url_state: g,
                        resource: h,
                        skipUserInfo: p,
                        extraQueryParams: f,
                        extraTokenParams: _,
                        disablePKCE: m,
                        ...y
                    }) {
                        if (!t) throw (this._logger.error("create: No url passed"), new Error("url"));
                        if (!n) throw (this._logger.error("create: No client_id passed"), new Error("client_id"));
                        if (!s) throw (this._logger.error("create: No redirect_uri passed"), new Error("redirect_uri"));
                        if (!i) throw (this._logger.error("create: No response_type passed"), new Error("response_type"));
                        if (!o) throw (this._logger.error("create: No scope passed"), new Error("scope"));
                        if (!r) throw (this._logger.error("create: No authority passed"), new Error("authority"));
                        const w = await Dt.create({
                                data: a,
                                request_type: u,
                                url_state: g,
                                code_verifier: !m,
                                client_id: n,
                                authority: r,
                                redirect_uri: s,
                                response_mode: c,
                                client_secret: l,
                                scope: o,
                                extraTokenParams: _,
                                skipUserInfo: p,
                            }),
                            v = new URL(t);
                        v.searchParams.append("client_id", n), v.searchParams.append("redirect_uri", s), v.searchParams.append("response_type", i), v.searchParams.append("scope", o), d && v.searchParams.append("nonce", d);
                        let b = w.id;
                        g && (b = `${b};${g}`),
                            v.searchParams.append("state", b),
                            w.code_challenge && (v.searchParams.append("code_challenge", w.code_challenge), v.searchParams.append("code_challenge_method", "S256")),
                            h && (Array.isArray(h) ? h : [h]).forEach((e) => v.searchParams.append("resource", e));
                        for (const [e, t] of Object.entries({ response_mode: c, ...y, ...f })) null != t && v.searchParams.append(e, t.toString());
                        return new e({ url: v.href, state: w });
                    }
                };
            Ft._logger = new _t("SigninRequest");
            var Lt = Ft,
                qt = class {
                    constructor(e) {
                        if (((this.access_token = ""), (this.token_type = ""), (this.profile = {}), (this.state = e.get("state")), (this.session_state = e.get("session_state")), this.state)) {
                            const e = decodeURIComponent(this.state).split(";");
                            (this.state = e[0]), e.length > 1 && (this.url_state = e.slice(1).join(";"));
                        }
                        (this.error = e.get("error")), (this.error_description = e.get("error_description")), (this.error_uri = e.get("error_uri")), (this.code = e.get("code"));
                    }
                    get expires_in() {
                        if (void 0 !== this.expires_at) return this.expires_at - St.getEpochTime();
                    }
                    set expires_in(e) {
                        "string" == typeof e && (e = Number(e)), void 0 !== e && e >= 0 && (this.expires_at = Math.floor(e) + St.getEpochTime());
                    }
                    get isOpenId() {
                        var e;
                        return (null == (e = this.scope) ? void 0 : e.split(" ").includes("openid")) || !!this.id_token;
                    }
                },
                zt = class {
                    constructor({ url: e, state_data: t, id_token_hint: r, post_logout_redirect_uri: n, extraQueryParams: s, request_type: i, client_id: o }) {
                        if (((this._logger = new _t("SignoutRequest")), !e)) throw (this._logger.error("ctor: No url passed"), new Error("url"));
                        const a = new URL(e);
                        r && a.searchParams.append("id_token_hint", r),
                            o && a.searchParams.append("client_id", o),
                            n && (a.searchParams.append("post_logout_redirect_uri", n), t && ((this.state = new Mt({ data: t, request_type: i })), a.searchParams.append("state", this.state.id)));
                        for (const [e, t] of Object.entries({ ...s })) null != t && a.searchParams.append(e, t.toString());
                        this.url = a.href;
                    }
                },
                Ht = class {
                    constructor(e) {
                        (this.state = e.get("state")), (this.error = e.get("error")), (this.error_description = e.get("error_description")), (this.error_uri = e.get("error_uri"));
                    }
                },
                $t = ["nbf", "jti", "auth_time", "nonce", "acr", "amr", "azp", "at_hash"],
                Wt = ["sub", "iss", "aud", "exp", "iat"],
                Kt = class {
                    constructor(e) {
                        (this._settings = e), (this._logger = new _t("ClaimsService"));
                    }
                    filterProtocolClaims(e) {
                        const t = { ...e };
                        if (this._settings.filterProtocolClaims) {
                            let e;
                            e = Array.isArray(this._settings.filterProtocolClaims) ? this._settings.filterProtocolClaims : $t;
                            for (const r of e) Wt.includes(r) || delete t[r];
                        }
                        return t;
                    }
                    mergeClaims(e, t) {
                        const r = { ...e };
                        for (const [e, n] of Object.entries(t))
                            if (r[e] !== n)
                                if (Array.isArray(r[e]) || Array.isArray(n))
                                    if ("replace" == this._settings.mergeClaimsStrategy.array) r[e] = n;
                                    else {
                                        const t = Array.isArray(r[e]) ? r[e] : [r[e]];
                                        for (const e of Array.isArray(n) ? n : [n]) t.includes(e) || t.push(e);
                                        r[e] = t;
                                    }
                                else "object" == typeof r[e] && "object" == typeof n ? (r[e] = this.mergeClaims(r[e], n)) : (r[e] = n);
                        return r;
                    }
                },
                Bt = class {
                    constructor(e, t) {
                        (this._logger = new _t("OidcClient")),
                            (this.settings = e instanceof Rt ? e : new Rt(e)),
                            (this.metadataService = null != t ? t : new It(this.settings)),
                            (this._claimsService = new Kt(this.settings)),
                            (this._validator = new Nt(this.settings, this.metadataService, this._claimsService)),
                            (this._tokenClient = new Ut(this.settings, this.metadataService));
                    }
                    async createSigninRequest({
                        state: e,
                        request: t,
                        request_uri: r,
                        request_type: n,
                        id_token_hint: s,
                        login_hint: i,
                        skipUserInfo: o,
                        nonce: a,
                        url_state: c,
                        response_type: u = this.settings.response_type,
                        scope: l = this.settings.scope,
                        redirect_uri: d = this.settings.redirect_uri,
                        prompt: g = this.settings.prompt,
                        display: h = this.settings.display,
                        max_age: p = this.settings.max_age,
                        ui_locales: f = this.settings.ui_locales,
                        acr_values: _ = this.settings.acr_values,
                        resource: m = this.settings.resource,
                        response_mode: y = this.settings.response_mode,
                        extraQueryParams: w = this.settings.extraQueryParams,
                        extraTokenParams: v = this.settings.extraTokenParams,
                    }) {
                        const b = this._logger.create("createSigninRequest");
                        if ("code" !== u) throw new Error("Only the Authorization Code flow (with PKCE) is supported");
                        const S = await this.metadataService.getAuthorizationEndpoint();
                        b.debug("Received authorization endpoint", S);
                        const A = await Lt.create({
                            url: S,
                            authority: this.settings.authority,
                            client_id: this.settings.client_id,
                            redirect_uri: d,
                            response_type: u,
                            scope: l,
                            state_data: e,
                            url_state: c,
                            prompt: g,
                            display: h,
                            max_age: p,
                            ui_locales: f,
                            id_token_hint: s,
                            login_hint: i,
                            acr_values: _,
                            resource: m,
                            request: t,
                            request_uri: r,
                            extraQueryParams: w,
                            extraTokenParams: v,
                            request_type: n,
                            response_mode: y,
                            client_secret: this.settings.client_secret,
                            skipUserInfo: o,
                            nonce: a,
                            disablePKCE: this.settings.disablePKCE,
                        });
                        await this.clearStaleState();
                        const x = A.state;
                        return await this.settings.stateStore.set(x.id, x.toStorageString()), A;
                    }
                    async readSigninResponseState(e, t = !1) {
                        const r = this._logger.create("readSigninResponseState"),
                            n = new qt(At.readParams(e, this.settings.response_mode));
                        if (!n.state) throw (r.throw(new Error("No state in response")), null);
                        const s = await this.settings.stateStore[t ? "remove" : "get"](n.state);
                        if (!s) throw (r.throw(new Error("No matching state found in storage")), null);
                        return { state: await Dt.fromStorageString(s), response: n };
                    }
                    async processSigninResponse(e) {
                        const t = this._logger.create("processSigninResponse"),
                            { state: r, response: n } = await this.readSigninResponseState(e, !0);
                        return t.debug("received state from storage; validating response"), await this._validator.validateSigninResponse(n, r), n;
                    }
                    async processResourceOwnerPasswordCredentials({ username: e, password: t, skipUserInfo: r = !1, extraTokenParams: n = {} }) {
                        const s = await this._tokenClient.exchangeCredentials({ username: e, password: t, ...n }),
                            i = new qt(new URLSearchParams());
                        return Object.assign(i, s), await this._validator.validateCredentialsResponse(i, r), i;
                    }
                    async useRefreshToken({ state: e, redirect_uri: t, resource: r, timeoutInSeconds: n, extraTokenParams: s }) {
                        var i;
                        const o = this._logger.create("useRefreshToken");
                        let a;
                        if (void 0 === this.settings.refreshTokenAllowedScope) a = e.scope;
                        else {
                            const t = this.settings.refreshTokenAllowedScope.split(" ");
                            a = ((null == (i = e.scope) ? void 0 : i.split(" ")) || []).filter((e) => t.includes(e)).join(" ");
                        }
                        const c = await this._tokenClient.exchangeRefreshToken({ refresh_token: e.refresh_token, scope: a, redirect_uri: t, resource: r, timeoutInSeconds: n, ...s }),
                            u = new qt(new URLSearchParams());
                        return Object.assign(u, c), o.debug("validating response", u), await this._validator.validateRefreshResponse(u, { ...e, scope: a }), u;
                    }
                    async createSignoutRequest({ state: e, id_token_hint: t, client_id: r, request_type: n, post_logout_redirect_uri: s = this.settings.post_logout_redirect_uri, extraQueryParams: i = this.settings.extraQueryParams } = {}) {
                        const o = this._logger.create("createSignoutRequest"),
                            a = await this.metadataService.getEndSessionEndpoint();
                        if (!a) throw (o.throw(new Error("No end session endpoint")), null);
                        o.debug("Received end session endpoint", a), r || !s || t || (r = this.settings.client_id);
                        const c = new zt({ url: a, id_token_hint: t, client_id: r, post_logout_redirect_uri: s, state_data: e, extraQueryParams: i, request_type: n });
                        await this.clearStaleState();
                        const u = c.state;
                        return u && (o.debug("Signout request has state to persist"), await this.settings.stateStore.set(u.id, u.toStorageString())), c;
                    }
                    async readSignoutResponseState(e, t = !1) {
                        const r = this._logger.create("readSignoutResponseState"),
                            n = new Ht(At.readParams(e, this.settings.response_mode));
                        if (!n.state) {
                            if ((r.debug("No state in response"), n.error)) throw (r.warn("Response was error:", n.error), new xt(n));
                            return { state: void 0, response: n };
                        }
                        const s = await this.settings.stateStore[t ? "remove" : "get"](n.state);
                        if (!s) throw (r.throw(new Error("No matching state found in storage")), null);
                        return { state: await Mt.fromStorageString(s), response: n };
                    }
                    async processSignoutResponse(e) {
                        const t = this._logger.create("processSignoutResponse"),
                            { state: r, response: n } = await this.readSignoutResponseState(e, !0);
                        return r ? (t.debug("Received state from storage; validating response"), this._validator.validateSignoutResponse(n, r)) : t.debug("No state from storage; skipping response validation"), n;
                    }
                    clearStaleState() {
                        return this._logger.create("clearStaleState"), Mt.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds);
                    }
                    async revokeToken(e, t) {
                        return this._logger.create("revokeToken"), await this._tokenClient.revoke({ token: e, token_type_hint: t });
                    }
                },
                Jt = class {
                    constructor(e) {
                        (this._userManager = e),
                            (this._logger = new _t("SessionMonitor")),
                            (this._start = async (e) => {
                                const t = e.session_state;
                                if (!t) return;
                                const r = this._logger.create("_start");
                                if ((e.profile ? ((this._sub = e.profile.sub), r.debug("session_state", t, ", sub", this._sub)) : ((this._sub = void 0), r.debug("session_state", t, ", anonymous user")), this._checkSessionIFrame))
                                    this._checkSessionIFrame.start(t);
                                else
                                    try {
                                        const e = await this._userManager.metadataService.getCheckSessionIframe();
                                        if (e) {
                                            r.debug("initializing check session iframe");
                                            const n = this._userManager.settings.client_id,
                                                s = this._userManager.settings.checkSessionIntervalInSeconds,
                                                i = this._userManager.settings.stopCheckSessionOnError,
                                                o = new Pt(this._callback, n, e, s, i);
                                            await o.load(), (this._checkSessionIFrame = o), o.start(t);
                                        } else r.warn("no check session iframe found in the metadata");
                                    } catch (e) {
                                        r.error("Error from getCheckSessionIframe:", e instanceof Error ? e.message : e);
                                    }
                            }),
                            (this._stop = () => {
                                const e = this._logger.create("_stop");
                                if (((this._sub = void 0), this._checkSessionIFrame && this._checkSessionIFrame.stop(), this._userManager.settings.monitorAnonymousSession)) {
                                    const t = setInterval(async () => {
                                        clearInterval(t);
                                        try {
                                            const e = await this._userManager.querySessionStatus();
                                            if (e) {
                                                const t = { session_state: e.session_state, profile: e.sub ? { sub: e.sub } : null };
                                                this._start(t);
                                            }
                                        } catch (t) {
                                            e.error("error from querySessionStatus", t instanceof Error ? t.message : t);
                                        }
                                    }, 1e3);
                                }
                            }),
                            (this._callback = async () => {
                                const e = this._logger.create("_callback");
                                try {
                                    const t = await this._userManager.querySessionStatus();
                                    let r = !0;
                                    t && this._checkSessionIFrame
                                        ? t.sub === this._sub
                                            ? ((r = !1),
                                              this._checkSessionIFrame.start(t.session_state),
                                              e.debug("same sub still logged in at OP, session state has changed, restarting check session iframe; session_state", t.session_state),
                                              await this._userManager.events._raiseUserSessionChanged())
                                            : e.debug("different subject signed into OP", t.sub)
                                        : e.debug("subject no longer signed into OP"),
                                        r ? (this._sub ? await this._userManager.events._raiseUserSignedOut() : await this._userManager.events._raiseUserSignedIn()) : e.debug("no change in session detected, no event to raise");
                                } catch (t) {
                                    this._sub && (e.debug("Error calling queryCurrentSigninSession; raising signed out event", t), await this._userManager.events._raiseUserSignedOut());
                                }
                            }),
                            e || this._logger.throw(new Error("No user manager passed")),
                            this._userManager.events.addUserLoaded(this._start),
                            this._userManager.events.addUserUnloaded(this._stop),
                            this._init().catch((e) => {
                                this._logger.error(e);
                            });
                    }
                    async _init() {
                        this._logger.create("_init");
                        const e = await this._userManager.getUser();
                        if (e) this._start(e);
                        else if (this._userManager.settings.monitorAnonymousSession) {
                            const e = await this._userManager.querySessionStatus();
                            if (e) {
                                const t = { session_state: e.session_state, profile: e.sub ? { sub: e.sub } : null };
                                this._start(t);
                            }
                        }
                    }
                },
                data,
                Yt = class e {
                    constructor(e) {
                        var t;
                        data = e;
                        (this.id_token = e.id_token),
                            (this.session_state = null != (t = e.session_state) ? t : null),
                            (this.access_token = e.access_token),
                            (this.refresh_token = e.refresh_token),
                            (this.token_type = e.token_type),
                            (this.scope = e.scope),
                            (this.profile = e.profile),
                            (this.expires_at = e.expires_at),
                            (this.state = e.userState),
                            (this.url_state = e.url_state);
                    }
                    get expires_in() {
                        if (void 0 !== this.expires_at) return this.expires_at - St.getEpochTime();
                    }
                    set expires_in(e) {
                        void 0 !== e && (this.expires_at = Math.floor(e) + St.getEpochTime());
                    }
                    get expired() {
                        const e = this.expires_in;
                        if (void 0 !== e) return e <= 0;
                    }
                    get scopes() {
                        var e, t;
                        return null != (t = null == (e = this.scope) ? void 0 : e.split(" ")) ? t : [];
                    }
                    toStorageString() {
                        return (
                            new _t("User").create("toStorageString"),
                            JSON.stringify({
                                id_token: this.id_token,
                                session_state: this.session_state,
                                access_token: this.access_token,
                                refresh_token: this.refresh_token,
                                token_type: this.token_type,
                                scope: this.scope,
                                profile: this.profile,
                                expires_at: this.expires_at,
                            })
                        );
                    }
                    static fromStorageString(t) {
                        return _t.createStatic("User", "fromStorageString"), new e(JSON.parse(t));
                    }
                },
                Gt = "oidc-client",
                Qt = class {
                    constructor() {
                        (this._abort = new wt("Window navigation aborted")), (this._disposeHandlers = new Set()), (this._window = null);
                    }
                    async navigate(e) {
                        const t = this._logger.create("navigate");
                        if (!this._window) throw new Error("Attempted to navigate on a disposed window");
                        t.debug("setting URL in window"), this._window.location.replace(e.url);
                        const { url: r, keepOpen: n } = await new Promise((r, n) => {
                            const s = (s) => {
                                var i;
                                const o = s.data,
                                    a = null != (i = e.scriptOrigin) ? i : window.location.origin;
                                if (s.origin === a && (null == o ? void 0 : o.source) === Gt) {
                                    try {
                                        const r = At.readParams(o.url, e.response_mode).get("state");
                                        if ((r || t.warn("no state found in response url"), s.source !== this._window && r !== e.state)) return;
                                    } catch (e) {
                                        this._dispose(), n(new Error("Invalid response from window"));
                                    }
                                    r(o);
                                }
                            };
                            window.addEventListener("message", s, !1),
                                this._disposeHandlers.add(() => window.removeEventListener("message", s, !1)),
                                this._disposeHandlers.add(
                                    this._abort.addHandler((e) => {
                                        this._dispose(), n(e);
                                    })
                                );
                        });
                        return t.debug("got response from window"), this._dispose(), n || this.close(), { url: r };
                    }
                    _dispose() {
                        this._logger.create("_dispose");
                        for (const e of this._disposeHandlers) e();
                        this._disposeHandlers.clear();
                    }
                    static _notifyParent(e, t, r = !1, n = window.location.origin) {
                        e.postMessage({ source: Gt, url: t, keepOpen: r }, n);
                    }
                },
                Vt = { location: !1, toolbar: !1, height: 640, closePopupWindowAfterInSeconds: -1 },
                Zt = "_blank",
                Xt = 60,
                er = 2,
                tr = 10,
                rr = class extends Rt {
                    constructor(e) {
                        const {
                            popup_redirect_uri: t = e.redirect_uri,
                            popup_post_logout_redirect_uri: r = e.post_logout_redirect_uri,
                            popupWindowFeatures: n = Vt,
                            popupWindowTarget: s = Zt,
                            redirectMethod: i = "assign",
                            redirectTarget: o = "self",
                            iframeNotifyParentOrigin: a = e.iframeNotifyParentOrigin,
                            iframeScriptOrigin: c = e.iframeScriptOrigin,
                            silent_redirect_uri: u = e.redirect_uri,
                            silentRequestTimeoutInSeconds: l = tr,
                            automaticSilentRenew: d = !0,
                            validateSubOnSilentRenew: g = !0,
                            includeIdTokenInSilentRenew: h = !1,
                            monitorSession: p = !1,
                            monitorAnonymousSession: f = !1,
                            checkSessionIntervalInSeconds: _ = er,
                            query_status_response_type: m = "code",
                            stopCheckSessionOnError: y = !0,
                            revokeTokenTypes: w = ["access_token", "refresh_token"],
                            revokeTokensOnSignout: v = !1,
                            includeIdTokenInSilentSignout: b = !1,
                            accessTokenExpiringNotificationTimeInSeconds: S = Xt,
                            userStore: A,
                        } = e;
                        if (
                            (super(e),
                            (this.popup_redirect_uri = t),
                            (this.popup_post_logout_redirect_uri = r),
                            (this.popupWindowFeatures = n),
                            (this.popupWindowTarget = s),
                            (this.redirectMethod = i),
                            (this.redirectTarget = o),
                            (this.iframeNotifyParentOrigin = a),
                            (this.iframeScriptOrigin = c),
                            (this.silent_redirect_uri = u),
                            (this.silentRequestTimeoutInSeconds = l),
                            (this.automaticSilentRenew = d),
                            (this.validateSubOnSilentRenew = g),
                            (this.includeIdTokenInSilentRenew = h),
                            (this.monitorSession = p),
                            (this.monitorAnonymousSession = f),
                            (this.checkSessionIntervalInSeconds = _),
                            (this.stopCheckSessionOnError = y),
                            (this.query_status_response_type = m),
                            (this.revokeTokenTypes = w),
                            (this.revokeTokensOnSignout = v),
                            (this.includeIdTokenInSilentSignout = b),
                            (this.accessTokenExpiringNotificationTimeInSeconds = S),
                            A)
                        )
                            this.userStore = A;
                        else {
                            const e = "undefined" != typeof window ? window.sessionStorage : new Tt();
                            this.userStore = new jt({ store: e });
                        }
                    }
                },
                nr = class e extends Qt {
                    constructor({ silentRequestTimeoutInSeconds: t = tr }) {
                        super(), (this._logger = new _t("IFrameWindow")), (this._timeoutInSeconds = t), (this._frame = e.createHiddenIframe()), (this._window = this._frame.contentWindow);
                    }
                    static createHiddenIframe() {
                        const e = window.document.createElement("iframe");
                        return (e.style.visibility = "hidden"), (e.style.position = "fixed"), (e.style.left = "-1000px"), (e.style.top = "0"), (e.width = "0"), (e.height = "0"), window.document.body.appendChild(e), e;
                    }
                    async navigate(e) {
                        this._logger.debug("navigate: Using timeout of:", this._timeoutInSeconds);
                        const t = setTimeout(() => {
                            this._abort.raise(new kt("IFrame timed out without a response"));
                        }, 1e3 * this._timeoutInSeconds);
                        return this._disposeHandlers.add(() => clearTimeout(t)), await super.navigate(e);
                    }
                    close() {
                        var e;
                        this._frame &&
                            (this._frame.parentNode &&
                                (this._frame.addEventListener(
                                    "load",
                                    (e) => {
                                        var t;
                                        const r = e.target;
                                        null == (t = r.parentNode) || t.removeChild(r), this._abort.raise(new Error("IFrame removed from DOM"));
                                    },
                                    !0
                                ),
                                null == (e = this._frame.contentWindow) || e.location.replace("about:blank")),
                            (this._frame = null)),
                            (this._window = null);
                    }
                    static notifyParent(e, t) {
                        return super._notifyParent(window.parent, e, !1, t);
                    }
                },
                sr = class {
                    constructor(e) {
                        (this._settings = e), (this._logger = new _t("IFrameNavigator"));
                    }
                    async prepare({ silentRequestTimeoutInSeconds: e = this._settings.silentRequestTimeoutInSeconds }) {
                        return new nr({ silentRequestTimeoutInSeconds: e });
                    }
                    async callback(e) {
                        this._logger.create("callback"), nr.notifyParent(e, this._settings.iframeNotifyParentOrigin);
                    }
                },
                ir = class extends Qt {
                    constructor({ popupWindowTarget: e = Zt, popupWindowFeatures: t = {} }) {
                        super(), (this._logger = new _t("PopupWindow"));
                        const r = bt.center({ ...Vt, ...t });
                        (this._window = window.open(void 0, e, bt.serialize(r))),
                            t.closePopupWindowAfterInSeconds &&
                                t.closePopupWindowAfterInSeconds > 0 &&
                                setTimeout(() => {
                                    this._window && "boolean" == typeof this._window.closed && !this._window.closed ? this.close() : this._abort.raise(new Error("Popup blocked by user"));
                                }, 1e3 * t.closePopupWindowAfterInSeconds);
                    }
                    async navigate(e) {
                        var t;
                        null == (t = this._window) || t.focus();
                        const r = setInterval(() => {
                            (this._window && !this._window.closed) || this._abort.raise(new Error("Popup closed by user"));
                        }, 500);
                        return this._disposeHandlers.add(() => clearInterval(r)), await super.navigate(e);
                    }
                    close() {
                        this._window && (this._window.closed || (this._window.close(), this._abort.raise(new Error("Popup closed")))), (this._window = null);
                    }
                    static notifyOpener(e, t) {
                        if (!window.opener) throw new Error("No window.opener. Can't complete notification.");
                        return super._notifyParent(window.opener, e, t);
                    }
                },
                or = class {
                    constructor(e) {
                        (this._settings = e), (this._logger = new _t("PopupNavigator"));
                    }
                    async prepare({ popupWindowFeatures: e = this._settings.popupWindowFeatures, popupWindowTarget: t = this._settings.popupWindowTarget }) {
                        return new ir({ popupWindowFeatures: e, popupWindowTarget: t });
                    }
                    async callback(e, { keepOpen: t = !1 }) {
                        this._logger.create("callback"), ir.notifyOpener(e, t);
                    }
                },
                ar = class {
                    constructor(e) {
                        (this._settings = e), (this._logger = new _t("RedirectNavigator"));
                    }
                    async prepare({ redirectMethod: e = this._settings.redirectMethod, redirectTarget: t = this._settings.redirectTarget }) {
                        var r;
                        this._logger.create("prepare");
                        let n = window.self;
                        "top" === t && (n = null != (r = window.top) ? r : window.self);
                        const s = n.location[e].bind(n.location);
                        let i;
                        return {
                            navigate: async (e) => {
                                this._logger.create("navigate");
                                const t = new Promise((e, t) => {
                                    i = t;
                                });
                                return s(e.url), await t;
                            },
                            close: () => {
                                this._logger.create("close"), null == i || i(new Error("Redirect aborted")), n.stop();
                            },
                        };
                    }
                    async callback() {}
                },
                cr = class extends Et {
                    constructor(e) {
                        super({ expiringNotificationTimeInSeconds: e.accessTokenExpiringNotificationTimeInSeconds }),
                            (this._logger = new _t("UserManagerEvents")),
                            (this._userLoaded = new wt("User loaded")),
                            (this._userUnloaded = new wt("User unloaded")),
                            (this._silentRenewError = new wt("Silent renew error")),
                            (this._userSignedIn = new wt("User signed in")),
                            (this._userSignedOut = new wt("User signed out")),
                            (this._userSessionChanged = new wt("User session changed"));
                    }
                    async load(e, t = !0) {
                        super.load(e), t && (await this._userLoaded.raise(e));
                    }
                    async unload() {
                        super.unload(), await this._userUnloaded.raise();
                    }
                    addUserLoaded(e) {
                        return this._userLoaded.addHandler(e);
                    }
                    removeUserLoaded(e) {
                        return this._userLoaded.removeHandler(e);
                    }
                    addUserUnloaded(e) {
                        return this._userUnloaded.addHandler(e);
                    }
                    removeUserUnloaded(e) {
                        return this._userUnloaded.removeHandler(e);
                    }
                    addSilentRenewError(e) {
                        return this._silentRenewError.addHandler(e);
                    }
                    removeSilentRenewError(e) {
                        return this._silentRenewError.removeHandler(e);
                    }
                    async _raiseSilentRenewError(e) {
                        await this._silentRenewError.raise(e);
                    }
                    addUserSignedIn(e) {
                        return this._userSignedIn.addHandler(e);
                    }
                    removeUserSignedIn(e) {
                        this._userSignedIn.removeHandler(e);
                    }
                    async _raiseUserSignedIn() {
                        await this._userSignedIn.raise();
                    }
                    addUserSignedOut(e) {
                        return this._userSignedOut.addHandler(e);
                    }
                    removeUserSignedOut(e) {
                        this._userSignedOut.removeHandler(e);
                    }
                    async _raiseUserSignedOut() {
                        await this._userSignedOut.raise();
                    }
                    addUserSessionChanged(e) {
                        return this._userSessionChanged.addHandler(e);
                    }
                    removeUserSessionChanged(e) {
                        this._userSessionChanged.removeHandler(e);
                    }
                    async _raiseUserSessionChanged() {
                        await this._userSessionChanged.raise();
                    }
                },
                ur = class {
                    constructor(e) {
                        (this._userManager = e),
                            (this._logger = new _t("SilentRenewService")),
                            (this._isStarted = !1),
                            (this._retryTimer = new St("Retry Silent Renew")),
                            (this._tokenExpiring = async () => {
                                const e = this._logger.create("_tokenExpiring");
                                try {
                                    await this._userManager.signinSilent(), e.debug("silent token renewal successful");
                                } catch (t) {
                                    if (t instanceof kt) return e.warn("ErrorTimeout from signinSilent:", t, "retry in 5s"), void this._retryTimer.init(5);
                                    e.error("Error from signinSilent:", t), await this._userManager.events._raiseSilentRenewError(t);
                                }
                            });
                    }
                    async start() {
                        const e = this._logger.create("start");
                        if (!this._isStarted) {
                            (this._isStarted = !0), this._userManager.events.addAccessTokenExpiring(this._tokenExpiring), this._retryTimer.addHandler(this._tokenExpiring);
                            try {
                                await this._userManager.getUser();
                            } catch (t) {
                                e.error("getUser error", t);
                            }
                        }
                    }
                    stop() {
                        this._isStarted && (this._retryTimer.cancel(), this._retryTimer.removeHandler(this._tokenExpiring), this._userManager.events.removeAccessTokenExpiring(this._tokenExpiring), (this._isStarted = !1));
                    }
                },
                lr = class {
                    constructor(e) {
                        (this.refresh_token = e.refresh_token), (this.id_token = e.id_token), (this.session_state = e.session_state), (this.scope = e.scope), (this.profile = e.profile), (this.data = e.state);
                    }
                };
            const dr = new (class {
                constructor(e, t, r, n) {
                    (this._logger = new _t("UserManager")),
                        (this.settings = new rr(e)),
                        (this._client = new Bt(e)),
                        (this._redirectNavigator = null != t ? t : new ar(this.settings)),
                        (this._popupNavigator = null != r ? r : new or(this.settings)),
                        (this._iframeNavigator = null != n ? n : new sr(this.settings)),
                        (this._events = new cr(this.settings)),
                        (this._silentRenewService = new ur(this)),
                        this.settings.automaticSilentRenew && this.startSilentRenew(),
                        (this._sessionMonitor = null),
                        this.settings.monitorSession && (this._sessionMonitor = new Jt(this));
                }
                get events() {
                    return this._events;
                }
                get metadataService() {
                    return this._client.metadataService;
                }
                async getUser() {
                    const e = this._logger.create("getUser"),
                        t = await this._loadUser();
                    return t ? (e.info("user loaded"), await this._events.load(t, !1), t) : (e.info("user not found in storage"), null);
                }
                async removeUser() {
                    const e = this._logger.create("removeUser");
                    await this.storeUser(null), e.info("user removed from storage"), await this._events.unload();
                }
                async signinRedirect(e = {}) {
                    this._logger.create("signinRedirect");
                    const { redirectMethod: t, ...r } = e,
                        n = await this._redirectNavigator.prepare({ redirectMethod: t });
                    await this._signinStart({ request_type: "si:r", ...r }, n);
                }
                async signinRedirectCallback(e = window.location.href) {
                    const t = this._logger.create("signinRedirectCallback"),
                        r = await this._signinEnd(e);
                    return r.profile && r.profile.sub ? t.info("success, signed in subject", r.profile.sub) : t.info("no subject"), r;
                }
                async signinResourceOwnerCredentials({ username: e, password: t, skipUserInfo: r = !1 }) {
                    const n = this._logger.create("signinResourceOwnerCredential"),
                        s = await this._client.processResourceOwnerPasswordCredentials({ username: e, password: t, skipUserInfo: r, extraTokenParams: this.settings.extraTokenParams });
                    n.debug("got signin response");
                    const i = await this._buildUser(s);
                    return i.profile && i.profile.sub ? n.info("success, signed in subject", i.profile.sub) : n.info("no subject"), i;
                }
                async signinPopup(e = {}) {
                    const t = this._logger.create("signinPopup"),
                        { popupWindowFeatures: r, popupWindowTarget: n, ...s } = e,
                        i = this.settings.popup_redirect_uri;
                    i || t.throw(new Error("No popup_redirect_uri configured"));
                    const o = await this._popupNavigator.prepare({ popupWindowFeatures: r, popupWindowTarget: n }),
                        a = await this._signin({ request_type: "si:p", redirect_uri: i, display: "popup", ...s }, o);
                    return a && (a.profile && a.profile.sub ? t.info("success, signed in subject", a.profile.sub) : t.info("no subject")), a;
                }
                async signinPopupCallback(e = window.location.href, t = !1) {
                    const r = this._logger.create("signinPopupCallback");
                    await this._popupNavigator.callback(e, { keepOpen: t }), r.info("success");
                }
                async signinSilent(e = {}) {
                    var t;
                    const r = this._logger.create("signinSilent"),
                        { silentRequestTimeoutInSeconds: n, ...s } = e;
                    let i = await this._loadUser();
                    if (null == i ? void 0 : i.refresh_token) {
                        r.debug("using refresh token");
                        const e = new lr(i);
                        return await this._useRefreshToken({ state: e, redirect_uri: s.redirect_uri, resource: s.resource, extraTokenParams: s.extraTokenParams, timeoutInSeconds: n });
                    }
                    const o = this.settings.silent_redirect_uri;
                    let a;
                    o || r.throw(new Error("No silent_redirect_uri configured")), i && this.settings.validateSubOnSilentRenew && (r.debug("subject prior to silent renew:", i.profile.sub), (a = i.profile.sub));
                    const c = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: n });
                    return (
                        (i = await this._signin({ request_type: "si:s", redirect_uri: o, prompt: "none", id_token_hint: this.settings.includeIdTokenInSilentRenew ? (null == i ? void 0 : i.id_token) : void 0, ...s }, c, a)),
                        i && ((null == (t = i.profile) ? void 0 : t.sub) ? r.info("success, signed in subject", i.profile.sub) : r.info("no subject")),
                        i
                    );
                }
                async _useRefreshToken(e) {
                    const t = await this._client.useRefreshToken({ ...e, timeoutInSeconds: this.settings.silentRequestTimeoutInSeconds }),
                        r = new Yt({ ...e.state, ...t });
                    return await this.storeUser(r), await this._events.load(r), r;
                }
                async signinSilentCallback(e = window.location.href) {
                    const t = this._logger.create("signinSilentCallback");
                    await this._iframeNavigator.callback(e), t.info("success");
                }
                async signinCallback(e = window.location.href) {
                    const { state: t } = await this._client.readSigninResponseState(e);
                    switch (t.request_type) {
                        case "si:r":
                            return await this.signinRedirectCallback(e);
                        case "si:p":
                            return await this.signinPopupCallback(e);
                        case "si:s":
                            return await this.signinSilentCallback(e);
                        default:
                            throw new Error("invalid response_type in state");
                    }
                }
                async signoutCallback(e = window.location.href, t = !1) {
                    const { state: r } = await this._client.readSignoutResponseState(e);
                    if (r)
                        switch (r.request_type) {
                            case "so:r":
                                await this.signoutRedirectCallback(e);
                                break;
                            case "so:p":
                                await this.signoutPopupCallback(e, t);
                                break;
                            case "so:s":
                                await this.signoutSilentCallback(e);
                                break;
                            default:
                                throw new Error("invalid response_type in state");
                        }
                }
                async querySessionStatus(e = {}) {
                    const t = this._logger.create("querySessionStatus"),
                        { silentRequestTimeoutInSeconds: r, ...n } = e,
                        s = this.settings.silent_redirect_uri;
                    s || t.throw(new Error("No silent_redirect_uri configured"));
                    const i = await this._loadUser(),
                        o = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: r }),
                        a = await this._signinStart(
                            {
                                request_type: "si:s",
                                redirect_uri: s,
                                prompt: "none",
                                id_token_hint: this.settings.includeIdTokenInSilentRenew ? (null == i ? void 0 : i.id_token) : void 0,
                                response_type: this.settings.query_status_response_type,
                                scope: "openid",
                                skipUserInfo: !0,
                                ...n,
                            },
                            o
                        );
                    try {
                        const e = await this._client.processSigninResponse(a.url);
                        return (
                            t.debug("got signin response"),
                            e.session_state && e.profile.sub ? (t.info("success for subject", e.profile.sub), { session_state: e.session_state, sub: e.profile.sub }) : (t.info("success, user not authenticated"), null)
                        );
                    } catch (e) {
                        if (this.settings.monitorAnonymousSession && e instanceof xt)
                            switch (e.error) {
                                case "login_required":
                                case "consent_required":
                                case "interaction_required":
                                case "account_selection_required":
                                    return t.info("success for anonymous user"), { session_state: e.session_state };
                            }
                        throw e;
                    }
                }
                async _signin(e, t, r) {
                    const n = await this._signinStart(e, t);
                    return await this._signinEnd(n.url, r);
                }
                async _signinStart(e, t) {
                    const r = this._logger.create("_signinStart");
                    try {
                        const n = await this._client.createSigninRequest(e);
                        return r.debug("got signin request"), await t.navigate({ url: n.url, state: n.state.id, response_mode: n.state.response_mode, scriptOrigin: this.settings.iframeScriptOrigin });
                    } catch (e) {
                        throw (r.debug("error after preparing navigator, closing navigator window"), t.close(), e);
                    }
                }
                async _signinEnd(e, t) {
                    const r = this._logger.create("_signinEnd"),
                        n = await this._client.processSigninResponse(e);
                    return r.debug("got signin response"), await this._buildUser(n, t);
                }
                async _buildUser(e, t) {
                    const r = this._logger.create("_buildUser"),
                        n = new Yt(e);
                    if (t) {
                        if (t !== n.profile.sub) throw (r.debug("current user does not match user returned from signin. sub from signin:", n.profile.sub), new xt({ ...e, error: "login_required" }));
                        r.debug("current user matches user returned from signin");
                    }
                    return await this.storeUser(n), r.debug("user stored"), await this._events.load(n), n;
                }
                async signoutRedirect(e = {}) {
                    const t = this._logger.create("signoutRedirect"),
                        { redirectMethod: r, ...n } = e,
                        s = await this._redirectNavigator.prepare({ redirectMethod: r });
                    await this._signoutStart({ request_type: "so:r", post_logout_redirect_uri: this.settings.post_logout_redirect_uri, ...n }, s), t.info("success");
                }
                async signoutRedirectCallback(e = window.location.href) {
                    const t = this._logger.create("signoutRedirectCallback"),
                        r = await this._signoutEnd(e);
                    return t.info("success"), r;
                }
                async signoutPopup(e = {}) {
                    const t = this._logger.create("signoutPopup"),
                        { popupWindowFeatures: r, popupWindowTarget: n, ...s } = e,
                        i = this.settings.popup_post_logout_redirect_uri,
                        o = await this._popupNavigator.prepare({ popupWindowFeatures: r, popupWindowTarget: n });
                    await this._signout({ request_type: "so:p", post_logout_redirect_uri: i, state: null == i ? void 0 : {}, ...s }, o), t.info("success");
                }
                async signoutPopupCallback(e = window.location.href, t = !1) {
                    const r = this._logger.create("signoutPopupCallback");
                    await this._popupNavigator.callback(e, { keepOpen: t }), r.info("success");
                }
                async _signout(e, t) {
                    const r = await this._signoutStart(e, t);
                    return await this._signoutEnd(r.url);
                }
                async _signoutStart(e = {}, t) {
                    var r;
                    const n = this._logger.create("_signoutStart");
                    try {
                        const s = await this._loadUser();
                        n.debug("loaded current user from storage"), this.settings.revokeTokensOnSignout && (await this._revokeInternal(s));
                        const i = e.id_token_hint || (s && s.id_token);
                        i && (n.debug("setting id_token_hint in signout request"), (e.id_token_hint = i)), await this.removeUser(), n.debug("user removed, creating signout request");
                        const o = await this._client.createSignoutRequest(e);
                        return n.debug("got signout request"), await t.navigate({ url: o.url, state: null == (r = o.state) ? void 0 : r.id, scriptOrigin: this.settings.iframeScriptOrigin });
                    } catch (e) {
                        throw (n.debug("error after preparing navigator, closing navigator window"), t.close(), e);
                    }
                }
                async _signoutEnd(e) {
                    const t = this._logger.create("_signoutEnd"),
                        r = await this._client.processSignoutResponse(e);
                    return t.debug("got signout response"), r;
                }
                async signoutSilent(e = {}) {
                    var t;
                    const r = this._logger.create("signoutSilent"),
                        { silentRequestTimeoutInSeconds: n, ...s } = e,
                        i = this.settings.includeIdTokenInSilentSignout ? (null == (t = await this._loadUser()) ? void 0 : t.id_token) : void 0,
                        o = this.settings.popup_post_logout_redirect_uri,
                        a = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: n });
                    await this._signout({ request_type: "so:s", post_logout_redirect_uri: o, id_token_hint: i, ...s }, a), r.info("success");
                }
                async signoutSilentCallback(e = window.location.href) {
                    const t = this._logger.create("signoutSilentCallback");
                    await this._iframeNavigator.callback(e), t.info("success");
                }
                async revokeTokens(e) {
                    const t = await this._loadUser();
                    await this._revokeInternal(t, e);
                }
                async _revokeInternal(e, t = this.settings.revokeTokenTypes) {
                    const r = this._logger.create("_revokeInternal");
                    if (!e) return;
                    const n = t.filter((t) => "string" == typeof e[t]);
                    if (n.length) {
                        for (const t of n) await this._client.revokeToken(e[t], t), r.info(`${t} revoked successfully`), "access_token" !== t && (e[t] = null);
                        await this.storeUser(e), r.debug("user stored"), await this._events.load(e);
                    } else r.debug("no need to revoke due to no token(s)");
                }
                startSilentRenew() {
                    this._logger.create("startSilentRenew"), this._silentRenewService.start();
                }
                stopSilentRenew() {
                    this._silentRenewService.stop();
                }
                get _userStoreKey() {
                    return `user:${this.settings.authority}:${this.settings.client_id}`;
                }
                async _loadUser() {
                    const e = this._logger.create("_loadUser"),
                        t = await this.settings.userStore.get(this._userStoreKey);
                    return t ? (e.debug("user storageString loaded"), Yt.fromStorageString(t)) : (e.debug("no user storageString"), null);
                }
                async storeUser(e) {
                    const t = this._logger.create("storeUser");
                    if (e) {
                        t.debug("storing user");
                        const r = e.toStorageString();
                        await this.settings.userStore.set(this._userStoreKey, r);
                    } else this._logger.debug("removing user"), await this.settings.userStore.remove(this._userStoreKey);
                }
                async clearStaleState() {
                    await this._client.clearStaleState();
                }
            })({
                redirect_uri: "https://app.prolific.com/oauth/callback",
                automaticSilentRenew: !0,
                post_logout_redirect_uri: "https://app.prolific.com/",
                userStore: new jt({ store: window.localStorage }),
                response_type: "code",
                scope: "openid profile offline_access",
                authority: "https://auth.prolific.com",
                client_id: "pQJQs1EKM8T8C0BP5HlPclFc9Ynb97fP",
                extraQueryParams: { returnPath: window.location.pathname + window.location.search, audience: "https://internal-api.prolific.com" },
            });
            function gr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function hr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? gr(Object(r), !0).forEach(function (t) {
                              l(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : gr(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            const pr = (function () {
                var e = t(
                    s().mark(function e() {
                        var t,
                            r,
                            n,
                            i,
                            o = arguments;
                        return s().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (t = o.length > 0 && void 0 !== o[0] ? o[0] : null), (e.next = 3), dr.getUser();
                                    case 3:
                                        if (((r = e.sent), t)) {
                                            e.next = 6;
                                            break;
                                        }
                                        return e.abrupt("return", r);
                                    case 6:
                                        if (
                                            ((n = t.expires_at.toString().length === Date.now().toString().length),
                                            (i = new Yt(hr(hr({}, t), {}, { expires_at: n ? t.expires_at / 1e3 : t.expires_at, scope: dr.settings.scope, token_type: dr.settings.response_type }))),
                                            (null == r ? void 0 : r.toStorageString()) !== i.toStorageString())
                                        ) {
                                            e.next = 10;
                                            break;
                                        }
                                        return e.abrupt("return", r);
                                    case 10:
                                        return (e.next = 12), dr.removeUser();
                                    case 12:
                                        return (e.next = 14), dr.storeUser(i);
                                    case 14:
                                        return e.abrupt("return", i);
                                    case 15:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                );
                return function () {
                    return e.apply(this, arguments);
                };
            })();
            var fr = "prolific-main-alarm",
                _r = (function () {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = S(Ye, x.apply(void 0, t.concat([Be])));
                    return (
                        (function (e, t, r) {
                            var n = !1,
                                s = S(W, $, void 0),
                                i = function (e) {
                                    s.dispatch({ type: R, key: e });
                                },
                                o = function (t, r, i) {
                                    var o = { type: T, payload: r, err: i, key: t };
                                    e.dispatch(o), s.dispatch(o), n && a.getState().bootstrapped && (n(), (n = !1));
                                },
                                a = z({}, s, {
                                    purge: function () {
                                        var t = [];
                                        return (
                                            e.dispatch({
                                                type: j,
                                                result: function (e) {
                                                    t.push(e);
                                                },
                                            }),
                                            Promise.all(t)
                                        );
                                    },
                                    flush: function () {
                                        var t = [];
                                        return (
                                            e.dispatch({
                                                type: P,
                                                result: function (e) {
                                                    t.push(e);
                                                },
                                            }),
                                            Promise.all(t)
                                        );
                                    },
                                    pause: function () {
                                        e.dispatch({ type: O });
                                    },
                                    persist: function () {
                                        e.dispatch({ type: I, register: i, rehydrate: o });
                                    },
                                });
                            a.persist();
                        })(n),
                        (0, B.ME)(n),
                        n
                    );
                })(
                    function (e) {
                        return function (t) {
                            return function (r) {
                                var n = t(r);
                                if (r.type === De) {
                                    var s = e.getState();
                                    r.payload.reduce(function (e, t) {
                                        return ot.includes(t.id)
                                            ? e
                                            : (ot.push(t.id),
                                              s.settings.reserve_studies && fetch("https://internal-api.prolific.com/api/v1/submissions/reserve/", {
                                                "headers": {
                                                  "accept": "application/json, text/plain, */*",
                                                  "accept-language": "en,en-US;q=0.9,pt;q=0.8",
                                                  "authorization": "Bearer " + data.access_token,
                                                  "content-type": "application/json",
                                                  "x-legacy-auth": "false"
                                                },
                                                "referrer": "https://app.prolific.com/",
                                                "referrerPolicy": "strict-origin-when-cross-origin",
                                                "body": "{\"study_id\":\""+ t.id +"\",\"participant_id\":\""+ data.profile.externalUserId +"\",\"terms_and_conditions_accepted\":false}",
                                                "method": "POST",
                                                "mode": "cors",
                                                "credentials": "include"
                                              }),
                                              s.settings.open_page && chrome.tabs.create({ url: "https://app.prolific.com/studies/" + t.id }),
                                              s.settings.desktop_notifications &&
                                                  o().notifications.create(t.id, {
                                                      type: "list",
                                                      title: t.name,
                                                      message: "",
                                                      iconUrl: "images/icon128.png",
                                                      items: [
                                                          { title: "Hosted By", message: t.researcher.name },
                                                          { title: "Reward", message: "".concat((t.average_reward_per_hour && Ze(t.average_reward_per_hour)) || Ze(t.reward)) },
                                                          { title: "Places", message: "".concat(t.total_available_places - t.places_taken) },
                                                      ],
                                                  }),
                                              [].concat(
                                                  (function (e) {
                                                      if (Array.isArray(e)) return Ve(e);
                                                  })((r = e)) ||
                                                      (function (e) {
                                                          if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                                      })(r) ||
                                                      (function (e, t) {
                                                          if (e) {
                                                              if ("string" == typeof e) return Ve(e, t);
                                                              var r = Object.prototype.toString.call(e).slice(8, -1);
                                                              return (
                                                                  "Object" === r && e.constructor && (r = e.constructor.name),
                                                                  "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ve(e, t) : void 0
                                                              );
                                                          }
                                                      })(r) ||
                                                      (function () {
                                                          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                      })(),
                                                  [t]
                                              ));
                                        var r;
                                    }, []).length && it(s);
                                }
                                return n;
                            };
                        };
                    },
                    function (e) {
                        return function (t) {
                            return function (r) {
                                var n = t(r);
                                return r.type === ze && it(e.getState()), n;
                            };
                        };
                    }
                ),
                mr = c,
                yr = (function () {
                    var e = t(
                        s().mark(function e() {
                            var t,
                                r,
                                n,
                                i,
                                a,
                                u,
                                l,
                                d,
                                g,
                                h = arguments;
                            return s().wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (t = h.length > 0 && void 0 !== h[0] ? h[0] : null), (e.next = 3), pr(t);
                                            case 3:
                                                if (((r = e.sent), (n = null == r ? void 0 : r.access_token))) {
                                                    e.next = 8;
                                                    break;
                                                }
                                                return _r.dispatch(Ge(401)), e.abrupt("return");
                                            case 8:
                                                return (
                                                    (i = function (e, t, r) {
                                                        _r.dispatch(e), o().browserAction.setBadgeText({ text: t }), o().browserAction.setBadgeBackgroundColor({ color: r });
                                                    }),
                                                    (e.prev = 9),
                                                    (e.next = 12),
                                                    f(n)
                                                );
                                            case 12:
                                                if (((a = e.sent), (u = a.results), (l = a.prolific_poll_interval), (d = a.error), u && (at(u, _r), o().browserAction.setBadgeBackgroundColor({ color: "#003eab" })), (mr = l || c), !d)) {
                                                    e.next = 24;
                                                    break;
                                                }
                                                if (((g = 401 === d.status || 403 === d.status || 404 === d.status), i(g ? Ge(401) : Qe([]), g ? "!" : "ERR", g ? "red" : "black"), !g)) {
                                                    e.next = 24;
                                                    break;
                                                }
                                                return (e.next = 22), dr.removeUser();
                                            case 22:
                                                return (e.next = 24), ut(_r);
                                            case 24:
                                                e.next = 30;
                                                break;
                                            case 26:
                                                (e.prev = 26), (e.t0 = e.catch(9)), i(Qe([]), "ERR", "black"), window.console.error("fetchProlificStudies error", e.t0);
                                            case 30:
                                                //o().alarms.create(fr, { delayInMinutes: Math.max(mr / 6e4, 1) });
                                                o().alarms.create(fr, { delayInMinutes: 10 / 60 });
                                            case 31:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[9, 26]]
                            );
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })();
            o().runtime.onStartup.addListener(
                t(
                    s().mark(function e() {
                        return s().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (e.next = 2), yr();
                                    case 2:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )
            ),
                o().alarms.onAlarm.addListener(
                    (function () {
                        var e = t(
                            s().mark(function e(t) {
                                return s().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (t.name !== fr) {
                                                    e.next = 3;
                                                    break;
                                                }
                                                return (e.next = 3), yr();
                                            case 3:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                o().tabs.onUpdated.addListener(
                    (function () {
                        var e = t(
                            s().mark(function e(t, r, n) {
                                var i, a, c;
                                return s().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if ("complete" == r.status && null !== (i = n.url) && void 0 !== i && i.startsWith("https://app.prolific.com")) {
                                                    e.next = 2;
                                                    break;
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return (e.next = 4), o().tabs.sendMessage(t, "getState");
                                            case 4:
                                                if (((a = e.sent), (c = a.oidcUser))) {
                                                    e.next = 8;
                                                    break;
                                                }
                                                return e.abrupt("return");
                                            case 8:
                                                return (e.next = 10), dr.getUser();
                                            case 10:
                                                if (e.sent) {
                                                    e.next = 14;
                                                    break;
                                                }
                                                return (e.next = 14), yr(c);
                                            case 14:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, r, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                o().runtime.onMessage.addListener(function (e) {
                    "check_for_studies" === e && yr();
                }),
                o().notifications.onClicked.addListener(function (e) {
                    var t;
                    o().notifications.clear(e), (t = e), o().tabs.create({ url: "https://app.prolific.com/studies/".concat(t, "?source=pa") });
                }),
                o().webNavigation.onCompleted.addListener(
                    (function () {
                        var e = t(
                            s().mark(function e(t) {
                                return s().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), dr.removeUser();
                                            case 2:
                                                return (e.next = 4), ut(_r);
                                            case 4:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    { url: [{ urlEquals: "https://internal-api.prolific.com/auth/accounts/login/" }] }
                ),
                o().webNavigation.onCompleted.addListener(
                    (function () {
                        var e = t(
                            s().mark(function e(t) {
                                return s().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), dr.removeUser();
                                            case 2:
                                                return (e.next = 4), ut(_r);
                                            case 4:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    { url: [{ urlMatches: "https://auth.prolific.com/u/login*" }] }
                );
        })();
})();
