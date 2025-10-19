/*! For license information please see serviceWorker.js.LICENSE.txt */
(() => {
    var e = {
            61: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n,
                    s = (n = r(8128)) && n.__esModule ? n : { default: n };
                t.default = (0, s.default)("sync");
            },
            140: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.DIFF_STATUS_UPDATED = t.DIFF_STATUS_REMOVED = t.DIFF_STATUS_KEYS_UPDATED = t.DIFF_STATUS_ARRAY_UPDATED = void 0),
                    (t.DIFF_STATUS_UPDATED = "updated"),
                    (t.DIFF_STATUS_REMOVED = "removed"),
                    (t.DIFF_STATUS_KEYS_UPDATED = "updated_keys"),
                    (t.DIFF_STATUS_ARRAY_UPDATED = "updated_array");
            },
            368: (e) => {
                var t = 9007199254740991,
                    r = /^(?:0|[1-9]\d*)$/,
                    n = Object.prototype,
                    s = n.hasOwnProperty,
                    i = n.toString,
                    o = n.propertyIsEnumerable,
                    a = Math.max;
                function c(e, t, r) {
                    var n = e[t];
                    (s.call(e, t) && l(n, r) && (void 0 !== r || t in e)) || (e[t] = r);
                }
                function u(e, n) {
                    return !!(n = null == n ? t : n) && ("number" == typeof e || r.test(e)) && e > -1 && e % 1 == 0 && e < n;
                }
                function l(e, t) {
                    return e === t || (e != e && t != t);
                }
                var d = Array.isArray;
                function g(e) {
                    return (
                        null != e &&
                        (function (e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= t;
                        })(e.length) &&
                        !(function (e) {
                            var t = h(e) ? i.call(e) : "";
                            return "[object Function]" == t || "[object GeneratorFunction]" == t;
                        })(e)
                    );
                }
                function h(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                var p,
                    f,
                    _,
                    m =
                        ((p = function (e, t) {
                            !(function (e, t, r) {
                                r || (r = {});
                                for (var n = -1, s = t.length; ++n < s; ) {
                                    var i = t[n];
                                    c(r, i, e[i]);
                                }
                            })(
                                t,
                                (function (e) {
                                    return g(e)
                                        ? (function (e, t) {
                                              var r =
                                                      d(e) ||
                                                      (function (e) {
                                                          return (
                                                              (function (e) {
                                                                  return (
                                                                      (function (e) {
                                                                          return !!e && "object" == typeof e;
                                                                      })(e) && g(e)
                                                                  );
                                                              })(e) &&
                                                              s.call(e, "callee") &&
                                                              (!o.call(e, "callee") || "[object Arguments]" == i.call(e))
                                                          );
                                                      })(e)
                                                          ? (function (e, t) {
                                                                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                                                                return n;
                                                            })(e.length, String)
                                                          : [],
                                                  n = r.length,
                                                  a = !!n;
                                              for (var c in e) (!t && !s.call(e, c)) || (a && ("length" == c || u(c, n))) || r.push(c);
                                              return r;
                                          })(e, !0)
                                        : (function (e) {
                                              if (!h(e))
                                                  return (function (e) {
                                                      var t = [];
                                                      if (null != e) for (var r in Object(e)) t.push(r);
                                                      return t;
                                                  })(e);
                                              var t,
                                                  r,
                                                  i = ((r = (t = e) && t.constructor), t === (("function" == typeof r && r.prototype) || n)),
                                                  o = [];
                                              for (var a in e) ("constructor" != a || (!i && s.call(e, a))) && o.push(a);
                                              return o;
                                          })(e);
                                })(t),
                                e
                            );
                        }),
                        (f = function (e, t) {
                            var r = -1,
                                n = t.length,
                                s = n > 1 ? t[n - 1] : void 0,
                                i = n > 2 ? t[2] : void 0;
                            for (
                                s = p.length > 3 && "function" == typeof s ? (n--, s) : void 0,
                                    i &&
                                        (function (e, t, r) {
                                            if (!h(r)) return !1;
                                            var n = typeof t;
                                            return !!("number" == n ? g(r) && u(t, r.length) : "string" == n && (t in r)) && l(r[t], e);
                                        })(t[0], t[1], i) &&
                                        ((s = n < 3 ? void 0 : s), (n = 1)),
                                    e = Object(e);
                                ++r < n;

                            ) {
                                var o = t[r];
                                o && p(e, o);
                            }
                            return e;
                        }),
                        (_ = a(void 0 === _ ? f.length - 1 : _, 0)),
                        function () {
                            for (var e = arguments, t = -1, r = a(e.length - _, 0), n = Array(r); ++t < r; ) n[t] = e[_ + t];
                            t = -1;
                            for (var s = Array(_ + 1); ++t < _; ) s[t] = e[t];
                            return (
                                (s[_] = n),
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
                                })(f, this, s)
                            );
                        });
                e.exports = m;
            },
            579: (e, t, r) => {
                var n = r(3738).default;
                (e.exports = function (e) {
                    if (null != e) {
                        var t = e[("function" == typeof Symbol && Symbol.iterator) || "@@iterator"],
                            r = 0;
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length))
                            return {
                                next: function () {
                                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                                },
                            };
                    }
                    throw new TypeError(n(e) + " is not iterable");
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports);
            },
            887: (e, t, r) => {
                var n = r(6993),
                    s = r(1791);
                (e.exports = function (e, t, r, i, o) {
                    return new s(n().w(e, t, r, i), o || Promise);
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports);
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
                function l(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, d(n.key), n);
                    }
                }
                function d(e) {
                    var t = (function (e) {
                        if ("object" != u(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != u(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(e);
                    })(e);
                    return "symbol" == u(t) ? t : t + "";
                }
                var g = "\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n",
                    h = { channelName: s.DEFAULT_CHANNEL_NAME, state: {}, serializer: i.noop, deserializer: i.noop, patchStrategy: o.default },
                    p = (function () {
                        return (
                            (e = function e() {
                                var t = this,
                                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                                    n = r.channelName,
                                    o = void 0 === n ? h.channelName : n,
                                    c = r.state,
                                    u = void 0 === c ? h.state : c,
                                    l = r.serializer,
                                    d = void 0 === l ? h.serializer : l,
                                    g = r.deserializer,
                                    p = void 0 === g ? h.deserializer : g,
                                    f = r.patchStrategy,
                                    _ = void 0 === f ? h.patchStrategy : f;
                                if (
                                    ((function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, e),
                                    !o)
                                )
                                    throw new Error("channelName is required in options");
                                if ("function" != typeof d) throw new Error("serializer must be a function");
                                if ("function" != typeof p) throw new Error("deserializer must be a function");
                                if ("function" != typeof _) throw new Error("patchStrategy must be one of the included patching strategies or a custom patching function");
                                (this.channelName = o),
                                    (this.readyResolved = !1),
                                    (this.readyPromise = new Promise(function (e) {
                                        return (t.readyResolve = e);
                                    })),
                                    (this.browserAPI = (0, a.getBrowserAPI)()),
                                    (this.initializeStore = this.initializeStore.bind(this)),
                                    this.browserAPI.runtime.sendMessage({ type: s.FETCH_STATE_TYPE, channelName: o }, void 0, this.initializeStore),
                                    (this.deserializer = p),
                                    (this.serializedPortListener = (0, i.withDeserializer)(p)(function () {
                                        var e;
                                        return (e = t.browserAPI.runtime.onMessage).addListener.apply(e, arguments);
                                    })),
                                    (this.serializedMessageSender = (0, i.withSerializer)(d)(function () {
                                        var e;
                                        return (e = t.browserAPI.runtime).sendMessage.apply(e, arguments);
                                    })),
                                    (this.listeners = []),
                                    (this.state = u),
                                    (this.patchStrategy = _),
                                    this.serializedPortListener(
                                        function (e) {
                                            if (e && e.channelName === t.channelName)
                                                switch (e.type) {
                                                    case s.STATE_TYPE:
                                                        t.replaceState(e.payload), t.readyResolved || ((t.readyResolved = !0), t.readyResolve());
                                                        break;
                                                    case s.PATCH_STATE_TYPE:
                                                        t.patchState(e.payload);
                                                }
                                        },
                                        function (e) {
                                            return Boolean(e) && "string" == typeof e.type && e.channelName === t.channelName;
                                        }
                                    ),
                                    (this.dispatch = this.dispatch.bind(this)),
                                    (this.getState = this.getState.bind(this)),
                                    (this.subscribe = this.subscribe.bind(this));
                            }),
                            (t = [
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
                                            t.serializedMessageSender({ type: s.DISPATCH_TYPE, channelName: t.channelName, payload: e }, null, function (e) {
                                                if (e) {
                                                    var s = e.error,
                                                        o = e.value;
                                                    if (s) {
                                                        var a = new Error("".concat(g).concat(s));
                                                        i((0, n.default)(a, s));
                                                    } else r(o && o.payload);
                                                } else {
                                                    var c = t.browserAPI.runtime.lastError,
                                                        u = new Error("".concat(g).concat(c));
                                                    i((0, n.default)(u, c));
                                                }
                                            });
                                        });
                                    },
                                },
                                {
                                    key: "initializeStore",
                                    value: function (e) {
                                        e && e.type === s.FETCH_STATE_TYPE && (this.replaceState(e.payload), this.readyResolved || ((this.readyResolved = !0), this.readyResolve()));
                                    },
                                },
                            ]),
                            t && l(e.prototype, t),
                            Object.defineProperty(e, "prototype", { writable: !1 }),
                            e
                        );
                        var e, t;
                    })();
                t.default = p;
            },
            1791: (e, t, r) => {
                var n = r(5172),
                    s = r(5546);
                (e.exports = function e(t, r) {
                    function i(e, s, o, a) {
                        try {
                            var c = t[e](s),
                                u = c.value;
                            return u instanceof n
                                ? r.resolve(u.v).then(
                                      function (e) {
                                          i("next", e, o, a);
                                      },
                                      function (e) {
                                          i("throw", e, o, a);
                                      }
                                  )
                                : r.resolve(u).then(
                                      function (e) {
                                          (c.value = e), o(c);
                                      },
                                      function (e) {
                                          return i("throw", e, o, a);
                                      }
                                  );
                        } catch (e) {
                            a(e);
                        }
                    }
                    var o;
                    this.next ||
                        (s(e.prototype),
                        s(e.prototype, ("function" == typeof Symbol && Symbol.asyncIterator) || "@asyncIterator", function () {
                            return this;
                        })),
                        s(
                            this,
                            "_invoke",
                            function (e, t, n) {
                                function s() {
                                    return new r(function (t, r) {
                                        i(e, n, t, r);
                                    });
                                }
                                return (o = o ? o.then(s, s) : s());
                            },
                            !0
                        );
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports);
            },
            3207: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "Iq", {
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
            3513: (e, t, r) => {
                "use strict";
                var n = i(r(5157)),
                    s = i(r(61));
                function i(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                e.exports = { localStorage: n.default, syncStorage: s.default };
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
            4373: (e) => {
                (e.exports = function (e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.unshift(n);
                    return function e() {
                        for (; r.length; ) if ((n = r.pop()) in t) return (e.value = n), (e.done = !1), e;
                        return (e.done = !0), e;
                    };
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports);
            },
            4633: (e, t, r) => {
                var n = r(5172),
                    s = r(6993),
                    i = r(5869),
                    o = r(887),
                    a = r(1791),
                    c = r(4373),
                    u = r(579);
                function l() {
                    "use strict";
                    var t = s(),
                        r = t.m(l),
                        d = (Object.getPrototypeOf ? Object.getPrototypeOf(r) : r.__proto__).constructor;
                    function g(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
                    }
                    var h = { throw: 1, return: 2, break: 3, continue: 3 };
                    function p(e) {
                        var t, r;
                        return function (n) {
                            t ||
                                ((t = {
                                    stop: function () {
                                        return r(n.a, 2);
                                    },
                                    catch: function () {
                                        return n.v;
                                    },
                                    abrupt: function (e, t) {
                                        return r(n.a, h[e], t);
                                    },
                                    delegateYield: function (e, s, i) {
                                        return (t.resultName = s), r(n.d, u(e), i);
                                    },
                                    finish: function (e) {
                                        return r(n.f, e);
                                    },
                                }),
                                (r = function (e, r, s) {
                                    (n.p = t.prev), (n.n = t.next);
                                    try {
                                        return e(r, s);
                                    } finally {
                                        t.next = n.n;
                                    }
                                })),
                                t.resultName && ((t[t.resultName] = n.v), (t.resultName = void 0)),
                                (t.sent = n.v),
                                (t.next = n.n);
                            try {
                                return e.call(this, t);
                            } finally {
                                (n.p = t.prev), (n.n = t.next);
                            }
                        };
                    }
                    return ((e.exports = l = function () {
                        return {
                            wrap: function (e, r, n, s) {
                                return t.w(p(e), r, n, s && s.reverse());
                            },
                            isGeneratorFunction: g,
                            mark: t.m,
                            awrap: function (e, t) {
                                return new n(e, t);
                            },
                            AsyncIterator: a,
                            async: function (e, t, r, n, s) {
                                return (g(t) ? o : i)(p(e), t, r, n, s);
                            },
                            keys: c,
                            values: u,
                        };
                    }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports))();
                }
                (e.exports = l), (e.exports.__esModule = !0), (e.exports.default = e.exports);
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
            5157: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n,
                    s = (n = r(8128)) && n.__esModule ? n : { default: n };
                t.default = (0, s.default)("local");
            },
            5172: (e) => {
                (e.exports = function (e, t) {
                    (this.v = e), (this.k = t);
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports);
            },
            5546: (e) => {
                function t(r, n, s, i) {
                    var o = Object.defineProperty;
                    try {
                        o({}, "", {});
                    } catch (r) {
                        o = 0;
                    }
                    (e.exports = t = function (e, r, n, s) {
                        function i(r, n) {
                            t(e, r, function (e) {
                                return this._invoke(r, n, e);
                            });
                        }
                        r ? (o ? o(e, r, { value: n, enumerable: !s, configurable: !s, writable: !s }) : (e[r] = n)) : (i("next", 0), i("throw", 1), i("return", 2));
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports),
                        t(r, n, s, i);
                }
                (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
            },
            5869: (e, t, r) => {
                var n = r(887);
                (e.exports = function (e, t, r, s, i) {
                    var o = n(e, t, r, s, i);
                    return o.next().then(function (e) {
                        return e.done ? e.value : o.next();
                    });
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports);
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
                    c = r(8571);
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                var l = {
                    channelName: s.DEFAULT_CHANNEL_NAME,
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
                t.default = function () {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l).channelName,
                        t = void 0 === e ? l.channelName : e,
                        r = (0, o.getBrowserAPI)(),
                        n = function (e) {
                            return e.type === s.DISPATCH_TYPE && e.channelName === t;
                        },
                        a = (0, c.createDeferredListener)(function (e) {
                            return e.type === s.FETCH_STATE_TYPE && e.channelName === t;
                        }),
                        d = (0, c.createDeferredListener)(n);
                    return (
                        r.runtime.onMessage.addListener(a.listener),
                        r.runtime.onMessage.addListener(d.listener),
                        function (e) {
                            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                                c = o.dispatchResponder,
                                g = void 0 === c ? l.dispatchResponder : c,
                                h = o.serializer,
                                p = void 0 === h ? l.serializer : h,
                                f = o.deserializer,
                                _ = void 0 === f ? l.deserializer : f,
                                m = o.diffStrategy,
                                y = void 0 === m ? l.diffStrategy : m;
                            if ("function" != typeof p) throw new Error("serializer must be a function");
                            if ("function" != typeof _) throw new Error("deserializer must be a function");
                            if ("function" != typeof y) throw new Error("diffStrategy must be one of the included diffing strategies or a custom diff function");
                            var w = (0, i.withSerializer)(p)(function () {
                                    for (var e, t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                                    var i = function () {
                                        r.runtime.lastError;
                                    };
                                    return (
                                        (e = r.runtime).sendMessage.apply(e, n.concat([i])),
                                        r.tabs.query({}, function (e) {
                                            var t,
                                                s = (function (e, t) {
                                                    var r = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                                    if (!r) {
                                                        if (
                                                            Array.isArray(e) ||
                                                            (r = (function (e, t) {
                                                                if (e) {
                                                                    if ("string" == typeof e) return u(e, t);
                                                                    var r = {}.toString.call(e).slice(8, -1);
                                                                    return (
                                                                        "Object" === r && e.constructor && (r = e.constructor.name),
                                                                        "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && "number" == typeof e.length)
                                                        ) {
                                                            r && (e = r);
                                                            var n = 0,
                                                                s = function () {};
                                                            return {
                                                                s,
                                                                n: function () {
                                                                    return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                                                },
                                                                e: function (e) {
                                                                    throw e;
                                                                },
                                                                f: s,
                                                            };
                                                        }
                                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                    }
                                                    var i,
                                                        o = !0,
                                                        a = !1;
                                                    return {
                                                        s: function () {
                                                            r = r.call(e);
                                                        },
                                                        n: function () {
                                                            var e = r.next();
                                                            return (o = e.done), e;
                                                        },
                                                        e: function (e) {
                                                            (a = !0), (i = e);
                                                        },
                                                        f: function () {
                                                            try {
                                                                o || null == r.return || r.return();
                                                            } finally {
                                                                if (a) throw i;
                                                            }
                                                        },
                                                    };
                                                })(e);
                                            try {
                                                for (s.s(); !(t = s.n()).done; ) {
                                                    var o,
                                                        a = t.value;
                                                    (o = r.tabs).sendMessage.apply(o, [a.id].concat(n, [i]));
                                                }
                                            } catch (e) {
                                                s.e(e);
                                            } finally {
                                                s.f();
                                            }
                                        })
                                    );
                                }),
                                v = e.getState();
                            e.subscribe(function () {
                                var r = e.getState(),
                                    n = y(v, r);
                                n.length && ((v = r), w({ type: s.PATCH_STATE_TYPE, payload: n, channelName: t }));
                            }),
                                w({ type: s.STATE_TYPE, payload: v, channelName: t }),
                                a.setListener(function (t, r, n) {
                                    var i = e.getState();
                                    n({ type: s.FETCH_STATE_TYPE, payload: i });
                                }),
                                (0, i.withDeserializer)(_)(d.setListener)(function (t, r, n) {
                                    var s = Object.assign({}, t.payload, { _sender: r }),
                                        i = null;
                                    try {
                                        i = e.dispatch(s);
                                    } catch (e) {
                                        (i = Promise.reject(e.message)), console.error(e);
                                    }
                                    g(i, n);
                                }, n);
                        }
                    );
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
            6993: (e, t, r) => {
                var n = r(5546);
                function s() {
                    var t,
                        r,
                        i = "function" == typeof Symbol ? Symbol : {},
                        o = i.iterator || "@@iterator",
                        a = i.toStringTag || "@@toStringTag";
                    function c(e, s, i, o) {
                        var a = s && s.prototype instanceof l ? s : l,
                            c = Object.create(a.prototype);
                        return (
                            n(
                                c,
                                "_invoke",
                                (function (e, n, s) {
                                    var i,
                                        o,
                                        a,
                                        c = 0,
                                        l = s || [],
                                        d = !1,
                                        g = {
                                            p: 0,
                                            n: 0,
                                            v: t,
                                            a: h,
                                            f: h.bind(t, 4),
                                            d: function (e, r) {
                                                return (i = e), (o = 0), (a = t), (g.n = r), u;
                                            },
                                        };
                                    function h(e, n) {
                                        for (o = e, a = n, r = 0; !d && c && !s && r < l.length; r++) {
                                            var s,
                                                i = l[r],
                                                h = g.p,
                                                p = i[2];
                                            e > 3
                                                ? (s = p === n) && ((a = i[(o = i[4]) ? 5 : ((o = 3), 3)]), (i[4] = i[5] = t))
                                                : i[0] <= h && ((s = e < 2 && h < i[1]) ? ((o = 0), (g.v = n), (g.n = i[1])) : h < p && (s = e < 3 || i[0] > n || n > p) && ((i[4] = e), (i[5] = n), (g.n = p), (o = 0)));
                                        }
                                        if (s || e > 1) return u;
                                        throw ((d = !0), n);
                                    }
                                    return function (s, l, p) {
                                        if (c > 1) throw TypeError("Generator is already running");
                                        for (d && 1 === l && h(l, p), o = l, a = p; (r = o < 2 ? t : a) || !d; ) {
                                            i || (o ? (o < 3 ? (o > 1 && (g.n = -1), h(o, a)) : (g.n = a)) : (g.v = a));
                                            try {
                                                if (((c = 2), i)) {
                                                    if ((o || (s = "next"), (r = i[s]))) {
                                                        if (!(r = r.call(i, a))) throw TypeError("iterator result is not an object");
                                                        if (!r.done) return r;
                                                        (a = r.value), o < 2 && (o = 0);
                                                    } else 1 === o && (r = i.return) && r.call(i), o < 2 && ((a = TypeError("The iterator does not provide a '" + s + "' method")), (o = 1));
                                                    i = t;
                                                } else if ((r = (d = g.n < 0) ? a : e.call(n, g)) !== u) break;
                                            } catch (e) {
                                                (i = t), (o = 1), (a = e);
                                            } finally {
                                                c = 1;
                                            }
                                        }
                                        return { value: r, done: d };
                                    };
                                })(e, i, o),
                                !0
                            ),
                            c
                        );
                    }
                    var u = {};
                    function l() {}
                    function d() {}
                    function g() {}
                    r = Object.getPrototypeOf;
                    var h = [][o]
                            ? r(r([][o]()))
                            : (n((r = {}), o, function () {
                                  return this;
                              }),
                              r),
                        p = (g.prototype = l.prototype = Object.create(h));
                    function f(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : ((e.__proto__ = g), n(e, a, "GeneratorFunction")), (e.prototype = Object.create(p)), e;
                    }
                    return (
                        (d.prototype = g),
                        n(p, "constructor", g),
                        n(g, "constructor", d),
                        (d.displayName = "GeneratorFunction"),
                        n(g, a, "GeneratorFunction"),
                        n(p),
                        n(p, a, "Generator"),
                        n(p, o, function () {
                            return this;
                        }),
                        n(p, "toString", function () {
                            return "[object Generator]";
                        }),
                        ((e.exports = s = function () {
                            return { w: c, m: f };
                        }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports))()
                    );
                }
                (e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);
            },
            7575: (e, t) => {
                "use strict";
                function r(e) {
                    return (
                        (r =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  }),
                        r(e)
                    );
                }
                function n(e, t) {
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
                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? n(Object(r), !0).forEach(function (t) {
                                  i(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                            : n(Object(r)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                              });
                    }
                    return e;
                }
                function i(e, t, n) {
                    return (
                        (t = (function (e) {
                            var t = (function (e) {
                                if ("object" != r(e) || !e) return e;
                                var t = e[Symbol.toPrimitive];
                                if (void 0 !== t) {
                                    var n = t.call(e, "string");
                                    if ("object" != r(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return String(e);
                            })(e);
                            return "symbol" == r(t) ? t : t + "";
                        })(t)) in e
                            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                            : (e[t] = n),
                        e
                    );
                }
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.withSerializer = t.withDeserializer = t.noop = void 0);
                var o = (t.noop = function (e) {
                        return e;
                    }),
                    a = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                        return s(s({}, e), e.payload ? { payload: t(e.payload) } : {});
                    };
                (t.withDeserializer = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
                    return function (t) {
                        return function (r, n) {
                            return t(
                                (function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                                        r = arguments.length > 2 ? arguments[2] : void 0;
                                    return r
                                        ? function (n) {
                                              for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) i[o - 1] = arguments[o];
                                              return r.apply(void 0, [n].concat(i)) ? e.apply(void 0, [a(n, t)].concat(i)) : e.apply(void 0, [n].concat(i));
                                          }
                                        : function (r) {
                                              for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) s[i - 1] = arguments[i];
                                              return e.apply(void 0, [a(r, t)].concat(s));
                                          };
                                })(r, e, n)
                            );
                        };
                    };
                }),
                    (t.withSerializer = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
                        return function (t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return function () {
                                for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++) s[i] = arguments[i];
                                if (s.length <= r) throw new Error("Message in request could not be serialized. " + "Expected message in position ".concat(r, " but only received ").concat(s.length, " args."));
                                return (s[r] = a(s[r], e)), t.apply(void 0, s);
                            };
                        };
                    });
            },
            8128: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function (e) {
                        return {
                            getItem: function (t) {
                                return new Promise(function (r, n) {
                                    chrome.storage[e].get(t, function (e) {
                                        null == chrome.runtime.lastError ? r(e[t]) : n();
                                    });
                                });
                            },
                            removeItem: function (t) {
                                return new Promise(function (r, n) {
                                    chrome.storage[e].remove(t, function () {
                                        null == chrome.runtime.lastError ? r() : n();
                                    });
                                });
                            },
                            setItem: function (t, r) {
                                return new Promise(function (n, s) {
                                    chrome.storage[e].set(
                                        (function (e, t, r) {
                                            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                                        })({}, t, r),
                                        function () {
                                            null == chrome.runtime.lastError ? n() : s();
                                        }
                                    );
                                });
                            },
                        };
                    });
            },
            8571: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.createDeferredListener = void 0),
                    (t.createDeferredListener = function (e) {
                        var t = function () {},
                            r = new Promise(function (e) {
                                return (t = e);
                            });
                        return {
                            setListener: t,
                            listener: function (t, n, s) {
                                if (e(t, n, s))
                                    return (
                                        r.then(function (e) {
                                            e(t, n, s);
                                        }),
                                        !0
                                    );
                            },
                        };
                    });
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
                        var t = void 0 === e ? "undefined" : x(e);
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
                                if ("object" === (void 0 === n ? "undefined" : x(n))) {
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
                        var _ = void 0 === e ? "undefined" : x(e),
                            m = void 0 === t ? "undefined" : x(t),
                            y = "undefined" !== _ || (h && h[h.length - 1].lhs && h[h.length - 1].lhs.hasOwnProperty(g)),
                            w = "undefined" !== m || (h && h[h.length - 1].rhs && h[h.length - 1].rhs.hasOwnProperty(g));
                        if (!y && w) r(new i(p, t));
                        else if (!w && y) r(new o(p, e));
                        else if (u(e) !== u(t)) r(new s(p, e, t));
                        else if ("date" === u(e) && e - t !== 0) r(new s(p, e, t));
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
                        switch (void 0 === e ? "undefined" : x(e)) {
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
                                k =
                                    "function" == typeof o
                                        ? o(
                                              function () {
                                                  return v;
                                              },
                                              p,
                                              s
                                          )
                                        : o,
                                x = A(h),
                                E = a.title ? "color: " + a.title(S) + ";" : "",
                                P = ["color: gray; font-weight: lighter;"];
                            P.push(E), t.timestamp && P.push("color: gray; font-weight: lighter;"), t.duration && P.push("color: gray; font-weight: lighter;");
                            var T = i(S, x, w);
                            try {
                                k ? (a.title && l ? r.groupCollapsed.apply(r, ["%c " + T].concat(P)) : r.groupCollapsed(T)) : a.title && l ? r.group.apply(r, ["%c " + T].concat(P)) : r.group(T);
                            } catch (e) {
                                r.log(T);
                            }
                            var O = m(c, S, [f], "prevState"),
                                I = m(c, S, [S], "action"),
                                j = m(c, S, [y, f], "error"),
                                C = m(c, S, [v], "nextState");
                            if (O)
                                if (a.prevState) {
                                    var R = "color: " + a.prevState(f) + "; font-weight: bold";
                                    r[O]("%c prev state", R, f);
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
                            if (C)
                                if (a.nextState) {
                                    var M = "color: " + a.nextState(v) + "; font-weight: bold";
                                    r[C]("%c next state", M, v);
                                } else r[C]("next state", v);
                            u && _(f, v, r, k);
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
                                    c.push(l), (l.started = k.now()), (l.startedTime = new Date()), (l.prevState = n(r())), (l.action = u);
                                    var d = void 0;
                                    if (o)
                                        try {
                                            d = e(u);
                                        } catch (e) {
                                            l.error = s(e);
                                        }
                                    else d = e(u);
                                    (l.took = k.now() - l.started), (l.nextState = n(r()));
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
                        k = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
                        x =
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
                    (v = "object" === (void 0 === r.g ? "undefined" : x(r.g)) && r.g ? r.g : "undefined" != typeof window ? window : {}),
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
            9449: (e, t) => {
                "use strict";
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                function n() {
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
                        for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) s[i - 1] = arguments[i];
                        var o,
                            a = function () {
                                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                            },
                            c = {
                                getState: e.getState.bind(e),
                                dispatch: function () {
                                    return a.apply(void 0, arguments);
                                },
                            };
                        return (
                            (s = (s || []).map(function (e) {
                                return e(c);
                            })),
                            (a = n.apply(
                                void 0,
                                (function (e) {
                                    if (Array.isArray(e)) return r(e);
                                })((o = s)) ||
                                    (function (e) {
                                        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                    })(o) ||
                                    (function (e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return r(e, t);
                                            var n = {}.toString.call(e).slice(8, -1);
                                            return (
                                                "Object" === n && e.constructor && (n = e.constructor.name),
                                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                                            );
                                        }
                                    })(o) ||
                                    (function () {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    })()
                            )(e.dispatch)),
                            (e.dispatch = a),
                            e
                        );
                    });
            },
            9529: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.STATE_TYPE = t.PATCH_STATE_TYPE = t.FETCH_STATE_TYPE = t.DISPATCH_TYPE = t.DEFAULT_CHANNEL_NAME = void 0),
                    (t.DISPATCH_TYPE = "webext.dispatch"),
                    (t.FETCH_STATE_TYPE = "webext.fetch_state"),
                    (t.STATE_TYPE = "webext.state"),
                    (t.PATCH_STATE_TYPE = "webext.patch_state"),
                    (t.DEFAULT_CHANNEL_NAME = "webext.channel");
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
            if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
                var n = t.getElementsByTagName("script");
                if (n.length) for (var s = n.length - 1; s > -1 && (!e || !/^http(s?):/.test(e)); ) e = n[s--].src;
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            (e = e
                .replace(/^blob:/, "")
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
                a = "https://auth.prolific.com",
                c = "prolific-main-alarm";
            const u = (function () {
                var e = t(
                    s().mark(function e(t) {
                        var r, n, i;
                        return s().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = { Authorization: "Bearer ".concat(t), "x-legacy-auth": "false", "x-client-version": "prolific-assistant/".concat("5.18.0") }),
                                            (e.next = 1),
                                            fetch("".concat("https://api.prolific.com", "/api/v1/participant/studies/?is_assistant=1"), { credentials: "omit", headers: r })
                                        );
                                    case 1:
                                        return (n = e.sent), (e.next = 2), n.json();
                                    case 2:
                                        return (i = e.sent), e.abrupt("return", i);
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
            })();
            function l(e) {
                return (
                    (l =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    l(e)
                );
            }
            function d(e) {
                var t = (function (e) {
                    if ("object" != l(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, "string");
                        if ("object" != l(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == l(t) ? t : t + "";
            }
            function g(e, t, r) {
                return (t = d(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function h(e, t) {
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
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? h(Object(r), !0).forEach(function (t) {
                              g(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : h(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function f(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
            }
            var _ = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
                m = function () {
                    return Math.random().toString(36).substring(7).split("").join(".");
                },
                y = {
                    INIT: "@@redux/INIT" + m(),
                    REPLACE: "@@redux/REPLACE" + m(),
                    PROBE_UNKNOWN_ACTION: function () {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + m();
                    },
                };
            function w(e, t, r) {
                var n;
                if (("function" == typeof t && "function" == typeof r) || ("function" == typeof r && "function" == typeof arguments[3])) throw new Error(f(0));
                if (("function" == typeof t && void 0 === r && ((r = t), (t = void 0)), void 0 !== r)) {
                    if ("function" != typeof r) throw new Error(f(1));
                    return r(w)(e, t);
                }
                if ("function" != typeof e) throw new Error(f(2));
                var s = e,
                    i = t,
                    o = [],
                    a = o,
                    c = !1;
                function u() {
                    a === o && (a = o.slice());
                }
                function l() {
                    if (c) throw new Error(f(3));
                    return i;
                }
                function d(e) {
                    if ("function" != typeof e) throw new Error(f(4));
                    if (c) throw new Error(f(5));
                    var t = !0;
                    return (
                        u(),
                        a.push(e),
                        function () {
                            if (t) {
                                if (c) throw new Error(f(6));
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
                        throw new Error(f(7));
                    if (void 0 === e.type) throw new Error(f(8));
                    if (c) throw new Error(f(9));
                    try {
                        (c = !0), (i = s(i, e));
                    } finally {
                        c = !1;
                    }
                    for (var t = (o = a), r = 0; r < t.length; r++) (0, t[r])();
                    return e;
                }
                return (
                    g({ type: y.INIT }),
                    ((n = {
                        dispatch: g,
                        subscribe: d,
                        getState: l,
                        replaceReducer: function (e) {
                            if ("function" != typeof e) throw new Error(f(10));
                            (s = e), g({ type: y.REPLACE });
                        },
                    })[_] = function () {
                        var e,
                            t = d;
                        return (
                            ((e = {
                                subscribe: function (e) {
                                    if ("object" != typeof e || null === e) throw new Error(f(11));
                                    function r() {
                                        e.next && e.next(l());
                                    }
                                    return r(), { unsubscribe: t(r) };
                                },
                            })[_] = function () {
                                return this;
                            }),
                            e
                        );
                    }),
                    n
                );
            }
            function v() {
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
            function b() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function (e) {
                    return function () {
                        var r = e.apply(void 0, arguments),
                            n = function () {
                                throw new Error(f(15));
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
                        return (n = v.apply(void 0, i)(r.dispatch)), p(p({}, r), {}, { dispatch: n });
                    };
                };
            }
            var S = r(9448),
                A = "persist:",
                k = "persist/FLUSH",
                x = "persist/REHYDRATE",
                E = "persist/PAUSE",
                P = "persist/PERSIST",
                T = "persist/PURGE",
                O = "persist/REGISTER",
                I =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          },
                j =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    };
            function C(e, t, r, n) {
                n.debug;
                var s = j({}, r);
                return (
                    e &&
                        "object" === (void 0 === e ? "undefined" : I(e)) &&
                        Object.keys(e).forEach(function (n) {
                            "_persist" !== n && t[n] === r[n] && (s[n] = e[n]);
                        }),
                    s
                );
            }
            function R(e) {
                return JSON.stringify(e);
            }
            function U(e) {
                var t = e.transforms || [],
                    r = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : A) + e.key,
                    n = e.storage,
                    s =
                        (e.debug,
                        !1 === e.serialize
                            ? function (e) {
                                  return e;
                              }
                            : N);
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
            function N(e) {
                return JSON.parse(e);
            }
            function M(e) {}
            var D =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                    }
                    return e;
                };
            "function" == typeof Symbol && Symbol.iterator, Object.assign;
            var q =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                    }
                    return e;
                };
            function F(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r;
                }
                return Array.from(e);
            }
            var H = { registry: [], bootstrapped: !1 },
                z = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
                        t = arguments[1];
                    switch (t.type) {
                        case O:
                            return q({}, e, { registry: [].concat(F(e.registry), [t.key]) });
                        case x:
                            var r = e.registry.indexOf(t.key),
                                n = [].concat(F(e.registry));
                            return n.splice(r, 1), q({}, e, { registry: n, bootstrapped: 0 === n.length });
                        default:
                            return e;
                    }
                },
                L = r(3513),
                $ = r(3207),
                W = Symbol.for("immer-nothing"),
                K = Symbol.for("immer-draftable"),
                B = Symbol.for("immer-state");
            function J(e, ...t) {
                throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
            }
            var Y = Object.getPrototypeOf;
            function G(e) {
                return !!e && !!e[B];
            }
            function V(e) {
                return !!e && (Z(e) || Array.isArray(e) || !!e[K] || !!e.constructor?.[K] || ne(e) || se(e));
            }
            var Q = Object.prototype.constructor.toString();
            function Z(e) {
                if (!e || "object" != typeof e) return !1;
                const t = Y(e);
                if (null === t) return !0;
                const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return r === Object || ("function" == typeof r && Function.toString.call(r) === Q);
            }
            function X(e, t) {
                0 === ee(e)
                    ? Reflect.ownKeys(e).forEach((r) => {
                          t(r, e[r], e);
                      })
                    : e.forEach((r, n) => t(n, r, e));
            }
            function ee(e) {
                const t = e[B];
                return t ? t.type_ : Array.isArray(e) ? 1 : ne(e) ? 2 : se(e) ? 3 : 0;
            }
            function te(e, t) {
                return 2 === ee(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
            }
            function re(e, t, r) {
                const n = ee(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
            }
            function ne(e) {
                return e instanceof Map;
            }
            function se(e) {
                return e instanceof Set;
            }
            function ie(e) {
                return e.copy_ || e.base_;
            }
            function oe(e, t) {
                if (ne(e)) return new Map(e);
                if (se(e)) return new Set(e);
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                const r = Z(e);
                if (!0 === t || ("class_only" === t && !r)) {
                    const t = Object.getOwnPropertyDescriptors(e);
                    delete t[B];
                    let r = Reflect.ownKeys(t);
                    for (let n = 0; n < r.length; n++) {
                        const s = r[n],
                            i = t[s];
                        !1 === i.writable && ((i.writable = !0), (i.configurable = !0)), (i.get || i.set) && (t[s] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[s] });
                    }
                    return Object.create(Y(e), t);
                }
                {
                    const t = Y(e);
                    if (null !== t && r) return { ...e };
                    const n = Object.create(t);
                    return Object.assign(n, e);
                }
            }
            function ae(e, t = !1) {
                return (
                    ue(e) ||
                        G(e) ||
                        !V(e) ||
                        (ee(e) > 1 && Object.defineProperties(e, { set: { value: ce }, add: { value: ce }, clear: { value: ce }, delete: { value: ce } }), Object.freeze(e), t && Object.values(e).forEach((e) => ae(e, !0))),
                    e
                );
            }
            function ce() {
                J(2);
            }
            function ue(e) {
                return Object.isFrozen(e);
            }
            var le,
                de = {};
            function ge(e) {
                const t = de[e];
                return t || J(0), t;
            }
            function he() {
                return le;
            }
            function pe(e, t) {
                t && (ge("Patches"), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
            }
            function fe(e) {
                _e(e), e.drafts_.forEach(ye), (e.drafts_ = null);
            }
            function _e(e) {
                e === le && (le = e.parent_);
            }
            function me(e) {
                return (le = { drafts_: [], parent_: le, immer_: e, canAutoFreeze_: !0, unfinalizedDrafts_: 0 });
            }
            function ye(e) {
                const t = e[B];
                0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
            }
            function we(e, t) {
                t.unfinalizedDrafts_ = t.drafts_.length;
                const r = t.drafts_[0];
                return (
                    void 0 !== e && e !== r
                        ? (r[B].modified_ && (fe(t), J(4)), V(e) && ((e = ve(t, e)), t.parent_ || Se(t, e)), t.patches_ && ge("Patches").generateReplacementPatches_(r[B].base_, e, t.patches_, t.inversePatches_))
                        : (e = ve(t, r, [])),
                    fe(t),
                    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
                    e !== W ? e : void 0
                );
            }
            function ve(e, t, r) {
                if (ue(t)) return t;
                const n = t[B];
                if (!n) return X(t, (s, i) => be(e, n, t, s, i, r)), t;
                if (n.scope_ !== e) return t;
                if (!n.modified_) return Se(e, n.base_, !0), n.base_;
                if (!n.finalized_) {
                    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
                    const t = n.copy_;
                    let s = t,
                        i = !1;
                    3 === n.type_ && ((s = new Set(t)), t.clear(), (i = !0)), X(s, (s, o) => be(e, n, t, s, o, r, i)), Se(e, t, !1), r && e.patches_ && ge("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
                }
                return n.copy_;
            }
            function be(e, t, r, n, s, i, o) {
                if (G(s)) {
                    const o = ve(e, s, i && t && 3 !== t.type_ && !te(t.assigned_, n) ? i.concat(n) : void 0);
                    if ((re(r, n, o), !G(o))) return;
                    e.canAutoFreeze_ = !1;
                } else o && r.add(s);
                if (V(s) && !ue(s)) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                    ve(e, s), (t && t.scope_.parent_) || "symbol" == typeof n || !(ne(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) || Se(e, s);
                }
            }
            function Se(e, t, r = !1) {
                !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ae(t, r);
            }
            var Ae = {
                    get(e, t) {
                        if (t === B) return e;
                        const r = ie(e);
                        if (!te(r, t))
                            return (function (e, t, r) {
                                const n = Ee(t, r);
                                return n ? ("value" in n ? n.value : n.get?.call(e.draft_)) : void 0;
                            })(e, r, t);
                        const n = r[t];
                        return e.finalized_ || !V(n) ? n : n === xe(e.base_, t) ? (Te(e), (e.copy_[t] = Oe(n, e))) : n;
                    },
                    has: (e, t) => t in ie(e),
                    ownKeys: (e) => Reflect.ownKeys(ie(e)),
                    set(e, t, r) {
                        const n = Ee(ie(e), t);
                        if (n?.set) return n.set.call(e.draft_, r), !0;
                        if (!e.modified_) {
                            const n = xe(ie(e), t),
                                o = n?.[B];
                            if (o && o.base_ === r) return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
                            if (((s = r) === (i = n) ? 0 !== s || 1 / s == 1 / i : s != s && i != i) && (void 0 !== r || te(e.base_, t))) return !0;
                            Te(e), Pe(e);
                        }
                        var s, i;
                        return (e.copy_[t] === r && (void 0 !== r || t in e.copy_)) || (Number.isNaN(r) && Number.isNaN(e.copy_[t])) || ((e.copy_[t] = r), (e.assigned_[t] = !0)), !0;
                    },
                    deleteProperty: (e, t) => (void 0 !== xe(e.base_, t) || t in e.base_ ? ((e.assigned_[t] = !1), Te(e), Pe(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                    getOwnPropertyDescriptor(e, t) {
                        const r = ie(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return n ? { writable: !0, configurable: 1 !== e.type_ || "length" !== t, enumerable: n.enumerable, value: r[t] } : n;
                    },
                    defineProperty() {
                        J(11);
                    },
                    getPrototypeOf: (e) => Y(e.base_),
                    setPrototypeOf() {
                        J(12);
                    },
                },
                ke = {};
            function xe(e, t) {
                const r = e[B];
                return (r ? ie(r) : e)[t];
            }
            function Ee(e, t) {
                if (!(t in e)) return;
                let r = Y(e);
                for (; r; ) {
                    const e = Object.getOwnPropertyDescriptor(r, t);
                    if (e) return e;
                    r = Y(r);
                }
            }
            function Pe(e) {
                e.modified_ || ((e.modified_ = !0), e.parent_ && Pe(e.parent_));
            }
            function Te(e) {
                e.copy_ || (e.copy_ = oe(e.base_, e.scope_.immer_.useStrictShallowCopy_));
            }
            function Oe(e, t) {
                const r = ne(e)
                    ? ge("MapSet").proxyMap_(e, t)
                    : se(e)
                    ? ge("MapSet").proxySet_(e, t)
                    : (function (e, t) {
                          const r = Array.isArray(e),
                              n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : he(), modified_: !1, finalized_: !1, assigned_: {}, parent_: t, base_: e, draft_: null, copy_: null, revoke_: null, isManual_: !1 };
                          let s = n,
                              i = Ae;
                          r && ((s = [n]), (i = ke));
                          const { revoke: o, proxy: a } = Proxy.revocable(s, i);
                          return (n.draft_ = a), (n.revoke_ = o), a;
                      })(e, t);
                return (t ? t.scope_ : he()).drafts_.push(r), r;
            }
            function Ie(e) {
                if (!V(e) || ue(e)) return e;
                const t = e[B];
                let r;
                if (t) {
                    if (!t.modified_) return t.base_;
                    (t.finalized_ = !0), (r = oe(e, t.scope_.immer_.useStrictShallowCopy_));
                } else r = oe(e, !0);
                return (
                    X(r, (e, t) => {
                        re(r, e, Ie(t));
                    }),
                    t && (t.finalized_ = !1),
                    r
                );
            }
            X(Ae, (e, t) => {
                ke[e] = function () {
                    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
                };
            }),
                (ke.deleteProperty = function (e, t) {
                    return ke.set.call(this, e, t, void 0);
                }),
                (ke.set = function (e, t, r) {
                    return Ae.set.call(this, e[0], t, r, e[0]);
                });
            var je = new (class {
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
                                if (("function" != typeof t && J(6), void 0 !== r && "function" != typeof r && J(7), V(e))) {
                                    const s = me(this),
                                        i = Oe(e, void 0);
                                    let o = !0;
                                    try {
                                        (n = t(i)), (o = !1);
                                    } finally {
                                        o ? fe(s) : _e(s);
                                    }
                                    return pe(s, r), we(n, s);
                                }
                                if (!e || "object" != typeof e) {
                                    if (((n = t(e)), void 0 === n && (n = e), n === W && (n = void 0), this.autoFreeze_ && ae(n, !0), r)) {
                                        const t = [],
                                            s = [];
                                        ge("Patches").generateReplacementPatches_(e, n, t, s), r(t, s);
                                    }
                                    return n;
                                }
                                J(1);
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
                        V(e) || J(8), G(e) && (G((t = e)) || J(10), (e = Ie(t)));
                        const r = me(this),
                            n = Oe(e, void 0);
                        return (n[B].isManual_ = !0), _e(r), n;
                    }
                    finishDraft(e, t) {
                        const r = e && e[B];
                        (r && r.isManual_) || J(9);
                        const { scope_: n } = r;
                        return pe(n, t), we(void 0, n);
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
                        const n = ge("Patches").applyPatches_;
                        return G(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
                    }
                })(),
                Ce = je.produce,
                Re = "PROLIFIC_STUDIES_UPDATE",
                Ue = { studies: null },
                Ne = "SET_SESSION_LAST_CHECKED",
                Me = { last_checked: 0 },
                De = "SETTING_ALERT_SOUND",
                qe = { alert_sound: "sweet-alert-2", alert_volume: 50, desktop_notifications: true, reserve_studies: true, open_page: true };
            function Fe(e) {
                return new Intl.NumberFormat("en-US", { style: "currency", currency: "GBP" }).format(0.01 * e);
            }
            function He(e) {
                var t = e.source,
                    r = e.volume,
                    n = new Audio(t);
                (n.volume = r), n.play();
            }
            function ze(e) {
                return Le.apply(this, arguments);
            }
            function Le() {
                return (Le = t(
                    s().mark(function e(t) {
                        var r, n;
                        return s().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (r = t.source), (n = t.volume), (e.next = 1), $e();
                                    case 1:
                                        return (e.next = 2), chrome.runtime.sendMessage({ play: { source: r, volume: n } });
                                    case 2:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function $e() {
                return We.apply(this, arguments);
            }
            function We() {
                return (We = t(
                    s().mark(function e() {
                        return s().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (e.next = 1), chrome.offscreen.hasDocument();
                                    case 1:
                                        if (!e.sent) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return (e.next = 3), chrome.offscreen.createDocument({ url: "../pages/offscreen.html", reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK], justification: "Audio notification" });
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            var Ke = {
                "sweet-alert-1": r.p + "assets/audio/sweet-alert-1.wav",
                "sweet-alert-2": r.p + "assets/audio/sweet-alert-2.wav",
                "sweet-alert-3": r.p + "assets/audio/sweet-alert-3.wav",
                "sweet-alert-4": r.p + "assets/audio/sweet-alert-4.wav",
                "sweet-alert-5": r.p + "assets/audio/sweet-alert-5.wav",
                voice: r.p + "assets/audio/voice.wav",
            };
            function Be(e) {
                return Je.apply(this, arguments);
            }
            function Je() {
                return (Je = t(
                    s().mark(function e(t) {
                        var r, n;
                        return s().wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        (r = Ke[t.settings.alert_sound]) && ((n = t.settings.alert_volume / 100), "undefined" != typeof browser ? He({ source: r, volume: n }) : ze({ source: r, volume: n }));
                                    case 1:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            var Ye = new Set();
            function Ge(e, t) {
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
            function Ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Ge(Object(r), !0).forEach(function (t) {
                              g(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : Ge(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            var Qe,
                Ze = (0, S.createLogger)(),
                Xe = {
                    2: function (e) {
                        return Ve(Ve({}, e), {}, { settings: Ve(Ve({}, e.settings), {}, { desktop_notifications: !0 }) });
                    },
                },
                et = (function (e, t) {
                    var r = void 0 !== e.version ? e.version : -1,
                        n = void 0 === e.stateReconciler ? C : e.stateReconciler,
                        s = e.getStoredState || U,
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
                        if (d.type === P) {
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
                                            i = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : A) + e.key,
                                            o = e.storage,
                                            a =
                                                !1 === e.serialize
                                                    ? function (e) {
                                                          return e;
                                                      }
                                                    : R,
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
                                D({}, t(p, d), { _persist: { version: r, rehydrated: !1 } })
                            );
                        }
                        if (d.type === T)
                            return (
                                (a = !0),
                                d.result(
                                    (function (e) {
                                        var t = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : A) + e.key;
                                        return e.storage.removeItem(t, M);
                                    })(e)
                                ),
                                D({}, t(p, d), { _persist: h })
                            );
                        if (d.type === k) return d.result(o && o.flush()), D({}, t(p, d), { _persist: h });
                        if (d.type === E) c = !0;
                        else if (d.type === x) {
                            if (a) return D({}, p, { _persist: D({}, h, { rehydrated: !0 }) });
                            if (d.key === e.key) {
                                var m = t(p, d),
                                    y = d.payload,
                                    w = !1 !== n && void 0 !== y ? n(y, l, m, e) : m,
                                    v = D({}, w, { _persist: D({}, h, { rehydrated: !0 }) });
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
                        storage: L.localStorage,
                        migrate:
                            ((Qe = Xe),
                            function (e, t) {
                                if (!e) return Promise.resolve(void 0);
                                var r = e._persist && void 0 !== e._persist.version ? e._persist.version : -1;
                                if (r === t) return Promise.resolve(e);
                                if (r > t) return Promise.resolve(e);
                                var n = Object.keys(Qe)
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
                                        return Qe[t](e);
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
                                    if (void 0 === r(void 0, { type: y.INIT })) throw new Error(f(12));
                                    if (void 0 === r(void 0, { type: y.PROBE_UNKNOWN_ACTION() })) throw new Error(f(13));
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
                                if (void 0 === d) throw (t && t.type, new Error(f(14)));
                                (s[c] = d), (n = n || d !== l);
                            }
                            return (n = n || o.length !== Object.keys(e).length) ? s : e;
                        };
                    })({
                        prolific: function () {
                            var e = arguments.length > 1 ? arguments[1] : void 0;
                            return Ce(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue, function (t) {
                                e.type === Re && (t.studies = e.payload);
                            });
                        },
                        session: function () {
                            var e = arguments.length > 1 ? arguments[1] : void 0;
                            return Ce(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me, function (t) {
                                e.type === Ne && (t.last_checked = e.payload);
                            });
                        },
                        settings: function () {
                            var e = arguments.length > 1 ? arguments[1] : void 0;
                            return Ce(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe, function (t) {
                                switch (e.type) {
                                    case De:
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
                ),
                tt = (0, $.Iq)();
            const rt = (function () {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n = w(et, b.apply(void 0, t.concat([Ze])));
                return (
                    (function (e) {
                        var t = !1,
                            r = w(z, H, void 0),
                            n = function (e) {
                                r.dispatch({ type: O, key: e });
                            },
                            s = function (n, s, o) {
                                var a = { type: x, payload: s, err: o, key: n };
                                e.dispatch(a), r.dispatch(a), t && i.getState().bootstrapped && (t(), (t = !1));
                            },
                            i = q({}, r, {
                                purge: function () {
                                    var t = [];
                                    return (
                                        e.dispatch({
                                            type: T,
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
                                            type: k,
                                            result: function (e) {
                                                t.push(e);
                                            },
                                        }),
                                        Promise.all(t)
                                    );
                                },
                                pause: function () {
                                    e.dispatch({ type: E });
                                },
                                persist: function () {
                                    e.dispatch({ type: P, register: n, rehydrate: s });
                                },
                            });
                        i.persist();
                    })(n),
                    tt(n),
                    n
                );
            })(
                function (e) {
                    return function (t) {
                        return function (r) {
                            var n = t(r);
                            if (r.type === Re) {
                                var s = e.getState(),
                                    i = r.payload,
                                    a =
                                        null == i
                                            ? void 0
                                            : i.filter(function (e) {
                                                  return !Ye.has(e.id) && (Ye.add(e.id), !0);
                                              });
                                null != a &&
                                    a.length &&
                                    (s.settings.reserve_studies &&
                                        a.forEach(function (e) {
                                            fetch("https://internal-api.prolific.com/api/v1/submissions/reserve/", {
                                                headers: {
                                                    accept: "application/json, text/plain, */*",
                                                    "accept-language": "en,en-US;q=0.9,pt;q=0.8",
                                                    authorization: "Bearer " + data.access_token,
                                                    "content-type": "application/json",
                                                    "x-prolific-id": data.profile.externalUserId,
                                                },
                                                referrer: "https://app.prolific.com/",
                                                referrerPolicy: "strict-origin-when-cross-origin",
                                                body: JSON.stringify({
                                                    "study_id": e.id,
                                                    "participant_id": data.profile.externalUserId,
                                                    fingerprint: currentFingerprint,
                                                    time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone
                                                }),
                                                method: "POST",
                                                mode: "cors",
                                                credentials: "include",
                                            });
                                        }),
                                    s.settings.open_page &&
                                        a.forEach(function (e) {
                                            chrome.tabs.create({ url: "https://app.prolific.com/studies/" + e.id });
                                        }),
                                    s.settings.desktop_notifications &&
                                        a.forEach(function (e) {
                                            o().notifications.create(e.id, {
                                                type: "list",
                                                title: e.name,
                                                message: "",
                                                iconUrl: "../images/icon128.png",
                                                items: [
                                                    { title: "Hosted By", message: e.researcher.name },
                                                    { title: "Reward", message: "".concat((e.average_reward_per_hour && Fe(e.average_reward_per_hour)) || Fe(e.reward)) },
                                                    { title: "Places", message: "".concat(e.total_available_places - e.places_taken) },
                                                ],
                                            });
                                        }),
                                    Be(s));
                            }
                            return n;
                        };
                    };
                },
                function (e) {
                    return function (t) {
                        return function (r) {
                            var n = t(r);
                            return r.type === De && Be(e.getState()), n;
                        };
                    };
                }
            );
            var nt = function (e) {
                rt.dispatch({ type: Re, payload: e }), rt.dispatch({ type: Ne, payload: Date.now() }), o().action.setBadgeText({ text: null != e && e.length ? e.length.toString() : "" });
            };
            function st(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function it(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, d(n.key), n);
                }
            }
            function ot(e, t, r) {
                return t && it(e.prototype, t), r && it(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            }
            class at extends Error {}
            at.prototype.name = "InvalidTokenError";
            var ct,
                ut,
                lt,
                dt = { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
                gt = ((e) => ((e[(e.NONE = 0)] = "NONE"), (e[(e.ERROR = 1)] = "ERROR"), (e[(e.WARN = 2)] = "WARN"), (e[(e.INFO = 3)] = "INFO"), (e[(e.DEBUG = 4)] = "DEBUG"), e))(gt || {});
            ((lt = gt || (gt = {})).reset = function () {
                (ct = 3), (ut = dt);
            }),
                (lt.setLevel = function (e) {
                    if (!(0 <= e && e <= 4)) throw new Error("Invalid log level");
                    ct = e;
                }),
                (lt.setLogger = function (e) {
                    ut = e;
                });
            var ht = class e {
                constructor(e) {
                    this._name = e;
                }
                debug(...t) {
                    ct >= 4 && ut.debug(e._format(this._name, this._method), ...t);
                }
                info(...t) {
                    ct >= 3 && ut.info(e._format(this._name, this._method), ...t);
                }
                warn(...t) {
                    ct >= 2 && ut.warn(e._format(this._name, this._method), ...t);
                }
                error(...t) {
                    ct >= 1 && ut.error(e._format(this._name, this._method), ...t);
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
                    ct >= 4 && ut.debug(e._format(t), ...r);
                }
                static info(t, ...r) {
                    ct >= 3 && ut.info(e._format(t), ...r);
                }
                static warn(t, ...r) {
                    ct >= 2 && ut.warn(e._format(t), ...r);
                }
                static error(t, ...r) {
                    ct >= 1 && ut.error(e._format(t), ...r);
                }
            };
            gt.reset();
            var pt = class {
                    static decode(e) {
                        try {
                            return (function (e, t) {
                                if ("string" != typeof e) throw new at("Invalid token specified: must be a string");
                                t || (t = {});
                                const r = !0 === t.header ? 0 : 1,
                                    n = e.split(".")[r];
                                if ("string" != typeof n) throw new at(`Invalid token specified: missing part #${r + 1}`);
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
                                    throw new at(`Invalid token specified: invalid base64 for part #${r + 1} (${e.message})`);
                                }
                                try {
                                    return JSON.parse(s);
                                } catch (e) {
                                    throw new at(`Invalid token specified: invalid json for part #${r + 1} (${e.message})`);
                                }
                            })(e);
                        } catch (e) {
                            throw (ht.error("JwtUtils.decode", e), e);
                        }
                    }
                    static async generateSignedJwt(e, t, r) {
                        const n = `${mt.encodeBase64Url(new TextEncoder().encode(JSON.stringify(e)))}.${mt.encodeBase64Url(new TextEncoder().encode(JSON.stringify(t)))}`,
                            s = await window.crypto.subtle.sign({ name: "ECDSA", hash: { name: "SHA-256" } }, r, new TextEncoder().encode(n));
                        return `${n}.${mt.encodeBase64Url(new Uint8Array(s))}`;
                    }
                },
                ft = (e) => btoa([...new Uint8Array(e)].map((e) => String.fromCharCode(e)).join("")),
                _t = class e {
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
                            return ft(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                        } catch (e) {
                            throw (ht.error("CryptoUtils.generateCodeChallenge", e), e);
                        }
                    }
                    static generateBasicAuth(e, t) {
                        const r = new TextEncoder().encode([e, t].join(":"));
                        return ft(r);
                    }
                    static async hash(e, t) {
                        const r = new TextEncoder().encode(t),
                            n = await crypto.subtle.digest(e, r);
                        return new Uint8Array(n);
                    }
                    static async customCalculateJwkThumbprint(t) {
                        let r;
                        switch (t.kty) {
                            case "RSA":
                                r = { e: t.e, kty: t.kty, n: t.n };
                                break;
                            case "EC":
                                r = { crv: t.crv, kty: t.kty, x: t.x, y: t.y };
                                break;
                            case "OKP":
                                r = { crv: t.crv, kty: t.kty, x: t.x };
                                break;
                            case "oct":
                                r = { crv: t.k, kty: t.kty };
                                break;
                            default:
                                throw new Error("Unknown jwk type");
                        }
                        const n = await e.hash("SHA-256", JSON.stringify(r));
                        return e.encodeBase64Url(n);
                    }
                    static async generateDPoPProof({ url: t, accessToken: r, httpMethod: n, keyPair: s, nonce: i }) {
                        let o, a;
                        const c = { jti: window.crypto.randomUUID(), htm: null != n ? n : "GET", htu: t, iat: Math.floor(Date.now() / 1e3) };
                        r && ((o = await e.hash("SHA-256", r)), (a = e.encodeBase64Url(o)), (c.ath = a)), i && (c.nonce = i);
                        try {
                            const e = await crypto.subtle.exportKey("jwk", s.publicKey),
                                t = { alg: "ES256", typ: "dpop+jwt", jwk: { crv: e.crv, kty: e.kty, x: e.x, y: e.y } };
                            return await pt.generateSignedJwt(t, c, s.privateKey);
                        } catch (e) {
                            throw e instanceof TypeError ? new Error(`Error exporting dpop public key: ${e.message}`) : e;
                        }
                    }
                    static async generateDPoPJkt(t) {
                        try {
                            const r = await crypto.subtle.exportKey("jwk", t.publicKey);
                            return await e.customCalculateJwkThumbprint(r);
                        } catch (e) {
                            throw e instanceof TypeError ? new Error(`Could not retrieve dpop keys from storage: ${e.message}`) : e;
                        }
                    }
                    static async generateDPoPKeys() {
                        return await window.crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, !1, ["sign", "verify"]);
                    }
                };
            _t.encodeBase64Url = (e) => ft(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
            var mt = _t,
                yt = class {
                    constructor(e) {
                        (this._name = e), (this._callbacks = []), (this._logger = new ht(`Event('${this._name}')`));
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
                wt = class {
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
                vt = class e extends yt {
                    constructor() {
                        super(...arguments),
                            (this._logger = new ht(`Timer('${this._name}')`)),
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
                bt = class {
                    static readParams(e, t = "query") {
                        if (!e) throw new TypeError("Invalid URL");
                        const r = new URL(e, "http://127.0.0.1")["fragment" === t ? "hash" : "search"];
                        return new URLSearchParams(r.slice(1));
                    }
                },
                St = ";",
                At = class extends Error {
                    constructor(e, t) {
                        var r, n, s;
                        if ((super(e.error_description || e.error || ""), (this.form = t), (this.name = "ErrorResponse"), !e.error)) throw (ht.error("ErrorResponse", "No error passed"), new Error("No error passed"));
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
                xt = class {
                    constructor(e) {
                        (this._logger = new ht("AccessTokenEvents")),
                            (this._expiringTimer = new vt("Access token expiring")),
                            (this._expiredTimer = new vt("Access token expired")),
                            (this._expiringNotificationTimeInSeconds = e.expiringNotificationTimeInSeconds);
                    }
                    async load(e) {
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
                    async unload() {
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
                Et = class {
                    constructor(e, t, r, n, s) {
                        (this._callback = e),
                            (this._client_id = t),
                            (this._intervalInSeconds = n),
                            (this._stopOnError = s),
                            (this._logger = new ht("CheckSessionIFrame")),
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
                Pt = class {
                    constructor() {
                        (this._logger = new ht("InMemoryWebStorage")), (this._data = {});
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
                Tt = class extends Error {
                    constructor(e, t) {
                        super(t), (this.name = "ErrorDPoPNonce"), (this.nonce = e);
                    }
                },
                Ot = class {
                    constructor(e = [], t = null, r = {}) {
                        (this._jwtHandler = t), (this._extraHeaders = r), (this._logger = new ht("JsonService")), (this._contentTypes = []), this._contentTypes.push(...e, "application/json"), t && this._contentTypes.push("application/jwt");
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
                    async getJson(e, { token: t, credentials: r, timeoutInSeconds: n } = {}) {
                        const s = this._logger.create("getJson"),
                            i = { Accept: this._contentTypes.join(", ") };
                        let o;
                        t && (s.debug("token passed, setting Authorization header"), (i.Authorization = "Bearer " + t)), this._appendExtraHeaders(i);
                        try {
                            s.debug("url:", e), (o = await this.fetchWithTimeout(e, { method: "GET", headers: i, timeoutInSeconds: n, credentials: r }));
                        } catch (e) {
                            throw (s.error("Network Error"), e);
                        }
                        s.debug("HTTP response received, status", o.status);
                        const a = o.headers.get("Content-Type");
                        if (
                            (a && !this._contentTypes.find((e) => a.startsWith(e)) && s.throw(new Error(`Invalid response Content-Type: ${null != a ? a : "undefined"}, from URL: ${e}`)),
                            o.ok && this._jwtHandler && (null == a ? void 0 : a.startsWith("application/jwt")))
                        )
                            return await this._jwtHandler(await o.text());
                        let c;
                        try {
                            c = await o.json();
                        } catch (e) {
                            if ((s.error("Error parsing JSON response", e), o.ok)) throw e;
                            throw new Error(`${o.statusText} (${o.status})`);
                        }
                        if (!o.ok) {
                            if ((s.error("Error from server:", c), c.error)) throw new At(c);
                            throw new Error(`${o.statusText} (${o.status}): ${JSON.stringify(c)}`);
                        }
                        return c;
                    }
                    async postForm(e, { body: t, basicAuth: r, timeoutInSeconds: n, initCredentials: s, extraHeaders: i }) {
                        const o = this._logger.create("postForm"),
                            a = { Accept: this._contentTypes.join(", "), "Content-Type": "application/x-www-form-urlencoded", ...i };
                        let c;
                        void 0 !== r && (a.Authorization = "Basic " + r), this._appendExtraHeaders(a);
                        try {
                            o.debug("url:", e), (c = await this.fetchWithTimeout(e, { method: "POST", headers: a, body: t, timeoutInSeconds: n, credentials: s }));
                        } catch (e) {
                            throw (o.error("Network error"), e);
                        }
                        o.debug("HTTP response received, status", c.status);
                        const u = c.headers.get("Content-Type");
                        if (u && !this._contentTypes.find((e) => u.startsWith(e))) throw new Error(`Invalid response Content-Type: ${null != u ? u : "undefined"}, from URL: ${e}`);
                        const l = await c.text();
                        let d = {};
                        if (l)
                            try {
                                d = JSON.parse(l);
                            } catch (e) {
                                if ((o.error("Error parsing JSON response", e), c.ok)) throw e;
                                throw new Error(`${c.statusText} (${c.status})`);
                            }
                        if (!c.ok) {
                            if ((o.error("Error from server:", d), c.headers.has("dpop-nonce"))) {
                                const e = c.headers.get("dpop-nonce");
                                throw new Tt(e, `${JSON.stringify(d)}`);
                            }
                            if (d.error) throw new At(d, t);
                            throw new Error(`${c.statusText} (${c.status}): ${JSON.stringify(d)}`);
                        }
                        return d;
                    }
                    _appendExtraHeaders(e) {
                        const t = this._logger.create("appendExtraHeaders"),
                            r = Object.keys(this._extraHeaders),
                            n = ["accept", "content-type"],
                            s = ["authorization"];
                        0 !== r.length &&
                            r.forEach((r) => {
                                if (n.includes(r.toLocaleLowerCase())) return void t.warn("Protected header could not be set", r, n);
                                if (s.includes(r.toLocaleLowerCase()) && Object.keys(e).includes(r)) return void t.warn("Header could not be overridden", r, s);
                                const i = "function" == typeof this._extraHeaders[r] ? this._extraHeaders[r]() : this._extraHeaders[r];
                                i && "" !== i && (e[r] = i);
                            });
                    }
                },
                It = class {
                    constructor(e) {
                        (this._settings = e),
                            (this._logger = new ht("MetadataService")),
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
                        const t = await this._jsonService.getJson(this._metadataUrl, { credentials: this._fetchRequestCredentials, timeoutInSeconds: this._settings.requestTimeoutInSeconds });
                        return e.debug("merging remote JSON with seed metadata"), (this._metadata = Object.assign({}, t, this._settings.metadataSeed)), this._metadata;
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
                        const r = await this._jsonService.getJson(t, { timeoutInSeconds: this._settings.requestTimeoutInSeconds });
                        if ((e.debug("got key set", r), !Array.isArray(r.keys))) throw (e.throw(new Error("Missing keys on keyset")), null);
                        return (this._signingKeys = r.keys), this._signingKeys;
                    }
                },
                jt = class {
                    constructor({ prefix: e = "oidc.", store: t = localStorage } = {}) {
                        (this._logger = new ht("WebStorageStateStore")), (this._store = t), (this._prefix = e);
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
                Ct = class {
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
                        requestTimeoutInSeconds: b,
                        staleStateAgeInSeconds: S = 900,
                        mergeClaimsStrategy: A = { array: "replace" },
                        disablePKCE: k = !1,
                        stateStore: x,
                        revokeTokenAdditionalContentTypes: E,
                        fetchRequestCredentials: P,
                        refreshTokenAllowedScope: T,
                        extraQueryParams: O = {},
                        extraTokenParams: I = {},
                        extraHeaders: j = {},
                        dpop: C,
                        omitScopeWhenRequesting: R = !1,
                    }) {
                        var U;
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
                            (this.staleStateAgeInSeconds = S),
                            (this.mergeClaimsStrategy = A),
                            (this.omitScopeWhenRequesting = R),
                            (this.disablePKCE = !!k),
                            (this.revokeTokenAdditionalContentTypes = E),
                            (this.fetchRequestCredentials = P || "same-origin"),
                            (this.requestTimeoutInSeconds = b),
                            x)
                        )
                            this.stateStore = x;
                        else {
                            const e = "undefined" != typeof window ? window.localStorage : new Pt();
                            this.stateStore = new jt({ store: e });
                        }
                        if (((this.refreshTokenAllowedScope = T), (this.extraQueryParams = O), (this.extraTokenParams = I), (this.extraHeaders = j), (this.dpop = C), this.dpop && !(null == (U = this.dpop) ? void 0 : U.store)))
                            throw new Error("A DPoPStore is required when dpop is enabled");
                    }
                },
                Rt = class {
                    constructor(e, t) {
                        (this._settings = e),
                            (this._metadataService = t),
                            (this._logger = new ht("UserInfoService")),
                            (this._getClaimsFromJwt = async (e) => {
                                const t = this._logger.create("_getClaimsFromJwt");
                                try {
                                    const r = pt.decode(e);
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
                        const n = await this._jsonService.getJson(r, { token: e, credentials: this._settings.fetchRequestCredentials, timeoutInSeconds: this._settings.requestTimeoutInSeconds });
                        return t.debug("got claims", n), n;
                    }
                },
                Ut = class {
                    constructor(e, t) {
                        (this._settings = e), (this._metadataService = t), (this._logger = new ht("TokenClient")), (this._jsonService = new Ot(this._settings.revokeTokenAdditionalContentTypes, null, this._settings.extraHeaders));
                    }
                    async exchangeCode({
                        grant_type: e = "authorization_code",
                        redirect_uri: t = this._settings.redirect_uri,
                        client_id: r = this._settings.client_id,
                        client_secret: n = this._settings.client_secret,
                        extraHeaders: s,
                        ...i
                    }) {
                        const o = this._logger.create("exchangeCode");
                        r || o.throw(new Error("A client_id is required")), t || o.throw(new Error("A redirect_uri is required")), i.code || o.throw(new Error("A code is required"));
                        const a = new URLSearchParams({ grant_type: e, redirect_uri: t });
                        for (const [e, t] of Object.entries(i)) null != t && a.set(e, t);
                        let c;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (null == n) throw (o.throw(new Error("A client_secret is required")), null);
                                c = mt.generateBasicAuth(r, n);
                                break;
                            case "client_secret_post":
                                a.append("client_id", r), n && a.append("client_secret", n);
                        }
                        const u = await this._metadataService.getTokenEndpoint(!1);
                        o.debug("got token endpoint");
                        const l = await this._jsonService.postForm(u, { body: a, basicAuth: c, timeoutInSeconds: this._settings.requestTimeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials, extraHeaders: s });
                        return o.debug("got response"), l;
                    }
                    async exchangeCredentials({ grant_type: e = "password", client_id: t = this._settings.client_id, client_secret: r = this._settings.client_secret, scope: n = this._settings.scope, ...s }) {
                        const i = this._logger.create("exchangeCredentials");
                        t || i.throw(new Error("A client_id is required"));
                        const o = new URLSearchParams({ grant_type: e });
                        this._settings.omitScopeWhenRequesting || o.set("scope", n);
                        for (const [e, t] of Object.entries(s)) null != t && o.set(e, t);
                        let a;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (null == r) throw (i.throw(new Error("A client_secret is required")), null);
                                a = mt.generateBasicAuth(t, r);
                                break;
                            case "client_secret_post":
                                o.append("client_id", t), r && o.append("client_secret", r);
                        }
                        const c = await this._metadataService.getTokenEndpoint(!1);
                        i.debug("got token endpoint");
                        const u = await this._jsonService.postForm(c, { body: o, basicAuth: a, timeoutInSeconds: this._settings.requestTimeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials });
                        return i.debug("got response"), u;
                    }
                    async exchangeRefreshToken({ grant_type: e = "refresh_token", client_id: t = this._settings.client_id, client_secret: r = this._settings.client_secret, timeoutInSeconds: n, extraHeaders: s, ...i }) {
                        const o = this._logger.create("exchangeRefreshToken");
                        t || o.throw(new Error("A client_id is required")), i.refresh_token || o.throw(new Error("A refresh_token is required"));
                        const a = new URLSearchParams({ grant_type: e });
                        for (const [e, t] of Object.entries(i)) Array.isArray(t) ? t.forEach((t) => a.append(e, t)) : null != t && a.set(e, t);
                        let c;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (null == r) throw (o.throw(new Error("A client_secret is required")), null);
                                c = mt.generateBasicAuth(t, r);
                                break;
                            case "client_secret_post":
                                a.append("client_id", t), r && a.append("client_secret", r);
                        }
                        const u = await this._metadataService.getTokenEndpoint(!1);
                        o.debug("got token endpoint");
                        const l = await this._jsonService.postForm(u, { body: a, basicAuth: c, timeoutInSeconds: n, initCredentials: this._settings.fetchRequestCredentials, extraHeaders: s });
                        return o.debug("got response"), l;
                    }
                    async revoke(e) {
                        var t;
                        const r = this._logger.create("revoke");
                        e.token || r.throw(new Error("A token is required"));
                        const n = await this._metadataService.getRevocationEndpoint(!1);
                        r.debug(`got revocation endpoint, revoking ${null != (t = e.token_type_hint) ? t : "default token type"}`);
                        const s = new URLSearchParams();
                        for (const [t, r] of Object.entries(e)) null != r && s.set(t, r);
                        s.set("client_id", this._settings.client_id),
                            this._settings.client_secret && s.set("client_secret", this._settings.client_secret),
                            await this._jsonService.postForm(n, { body: s, timeoutInSeconds: this._settings.requestTimeoutInSeconds }),
                            r.debug("got response");
                    }
                },
                Nt = class {
                    constructor(e, t, r) {
                        (this._settings = e),
                            (this._metadataService = t),
                            (this._claimsService = r),
                            (this._logger = new ht("ResponseValidator")),
                            (this._userInfoService = new Rt(this._settings, this._metadataService)),
                            (this._tokenClient = new Ut(this._settings, this._metadataService));
                    }
                    async validateSigninResponse(e, t, r) {
                        const n = this._logger.create("validateSigninResponse");
                        this._processSigninState(e, t),
                            n.debug("state processed"),
                            await this._processCode(e, t, r),
                            n.debug("code processed"),
                            e.isOpenId && this._validateIdTokenAttributes(e),
                            n.debug("tokens validated"),
                            await this._processClaims(e, null == t ? void 0 : t.skipUserInfo, e.isOpenId),
                            n.debug("claims processed");
                    }
                    async validateCredentialsResponse(e, t) {
                        const r = this._logger.create("validateCredentialsResponse"),
                            n = e.isOpenId && !!e.id_token;
                        n && this._validateIdTokenAttributes(e), r.debug("tokens validated"), await this._processClaims(e, t, n), r.debug("claims processed");
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
                        if ((t.id !== e.state && r.throw(new Error("State does not match")), r.debug("state validated"), (e.userState = t.data), e.error)) throw (r.warn("Response was error", e.error), new At(e));
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
                            throw (r.warn("Response was error", e.error), new At(e));
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
                    async _processCode(e, t, r) {
                        const n = this._logger.create("_processCode");
                        if (e.code) {
                            n.debug("Validating code");
                            const s = await this._tokenClient.exchangeCode({
                                client_id: t.client_id,
                                client_secret: t.client_secret,
                                code: e.code,
                                redirect_uri: t.redirect_uri,
                                code_verifier: t.code_verifier,
                                extraHeaders: r,
                                ...t.extraTokenParams,
                            });
                            Object.assign(e, s);
                        } else n.debug("No code to process");
                    }
                    _validateIdTokenAttributes(e, t) {
                        var r;
                        const n = this._logger.create("_validateIdTokenAttributes");
                        n.debug("decoding ID Token JWT");
                        const s = pt.decode(null != (r = e.id_token) ? r : "");
                        if ((s.sub || n.throw(new Error("ID Token is missing a subject claim")), t)) {
                            const e = pt.decode(t);
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
                        (this.id = e.id || mt.generateUUIDv4()),
                            (this.data = e.data),
                            e.created && e.created > 0 ? (this.created = e.created) : (this.created = vt.getEpochTime()),
                            (this.request_type = e.request_type),
                            (this.url_state = e.url_state);
                    }
                    toStorageString() {
                        return new ht("State").create("toStorageString"), JSON.stringify({ id: this.id, data: this.data, created: this.created, request_type: this.request_type, url_state: this.url_state });
                    }
                    static fromStorageString(t) {
                        return ht.createStatic("State", "fromStorageString"), Promise.resolve(new e(JSON.parse(t)));
                    }
                    static async clearStaleState(t, r) {
                        const n = ht.createStatic("State", "clearStaleState"),
                            s = vt.getEpochTime() - r,
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
                        const r = !0 === t.code_verifier ? mt.generateCodeVerifier() : t.code_verifier || void 0,
                            n = r ? await mt.generateCodeChallenge(r) : void 0;
                        return new e({ ...t, code_verifier: r, code_challenge: n });
                    }
                    toStorageString() {
                        return (
                            new ht("SigninState").create("toStorageString"),
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
                        ht.createStatic("SigninState", "fromStorageString");
                        const r = JSON.parse(t);
                        return e.create(r);
                    }
                },
                qt = class e {
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
                        dpopJkt: y,
                        omitScopeWhenRequesting: w,
                        ...v
                    }) {
                        if (!t) throw (this._logger.error("create: No url passed"), new Error("url"));
                        if (!n) throw (this._logger.error("create: No client_id passed"), new Error("client_id"));
                        if (!s) throw (this._logger.error("create: No redirect_uri passed"), new Error("redirect_uri"));
                        if (!i) throw (this._logger.error("create: No response_type passed"), new Error("response_type"));
                        if (!o) throw (this._logger.error("create: No scope passed"), new Error("scope"));
                        if (!r) throw (this._logger.error("create: No authority passed"), new Error("authority"));
                        const b = await Dt.create({
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
                            S = new URL(t);
                        S.searchParams.append("client_id", n),
                            S.searchParams.append("redirect_uri", s),
                            S.searchParams.append("response_type", i),
                            w || S.searchParams.append("scope", o),
                            d && S.searchParams.append("nonce", d),
                            y && S.searchParams.append("dpop_jkt", y);
                        let A = b.id;
                        g && (A = `${A}${St}${g}`),
                            S.searchParams.append("state", A),
                            b.code_challenge && (S.searchParams.append("code_challenge", b.code_challenge), S.searchParams.append("code_challenge_method", "S256")),
                            h && (Array.isArray(h) ? h : [h]).forEach((e) => S.searchParams.append("resource", e));
                        for (const [e, t] of Object.entries({ response_mode: c, ...v, ...f })) null != t && S.searchParams.append(e, t.toString());
                        return new e({ url: S.href, state: b });
                    }
                };
            qt._logger = new ht("SigninRequest");
            var Ft = qt,
                Ht = class {
                    constructor(e) {
                        if (((this.access_token = ""), (this.token_type = ""), (this.profile = {}), (this.state = e.get("state")), (this.session_state = e.get("session_state")), this.state)) {
                            const e = decodeURIComponent(this.state).split(St);
                            (this.state = e[0]), e.length > 1 && (this.url_state = e.slice(1).join(St));
                        }
                        (this.error = e.get("error")), (this.error_description = e.get("error_description")), (this.error_uri = e.get("error_uri")), (this.code = e.get("code"));
                    }
                    get expires_in() {
                        if (void 0 !== this.expires_at) return this.expires_at - vt.getEpochTime();
                    }
                    set expires_in(e) {
                        "string" == typeof e && (e = Number(e)), void 0 !== e && e >= 0 && (this.expires_at = Math.floor(e) + vt.getEpochTime());
                    }
                    get isOpenId() {
                        var e;
                        return (null == (e = this.scope) ? void 0 : e.split(" ").includes("openid")) || !!this.id_token;
                    }
                },
                zt = class {
                    constructor({ url: e, state_data: t, id_token_hint: r, post_logout_redirect_uri: n, extraQueryParams: s, request_type: i, client_id: o, url_state: a }) {
                        if (((this._logger = new ht("SignoutRequest")), !e)) throw (this._logger.error("ctor: No url passed"), new Error("url"));
                        const c = new URL(e);
                        if ((r && c.searchParams.append("id_token_hint", r), o && c.searchParams.append("client_id", o), n && (c.searchParams.append("post_logout_redirect_uri", n), t || a))) {
                            this.state = new Mt({ data: t, request_type: i, url_state: a });
                            let e = this.state.id;
                            a && (e = `${e}${St}${a}`), c.searchParams.append("state", e);
                        }
                        for (const [e, t] of Object.entries({ ...s })) null != t && c.searchParams.append(e, t.toString());
                        this.url = c.href;
                    }
                },
                Lt = class {
                    constructor(e) {
                        if (((this.state = e.get("state")), this.state)) {
                            const e = decodeURIComponent(this.state).split(St);
                            (this.state = e[0]), e.length > 1 && (this.url_state = e.slice(1).join(St));
                        }
                        (this.error = e.get("error")), (this.error_description = e.get("error_description")), (this.error_uri = e.get("error_uri"));
                    }
                },
                $t = ["nbf", "jti", "auth_time", "nonce", "acr", "amr", "azp", "at_hash"],
                Wt = ["sub", "iss", "aud", "exp", "iat"],
                Kt = class {
                    constructor(e) {
                        (this._settings = e), (this._logger = new ht("ClaimsService"));
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
                        (this.keys = e), (this.nonce = t);
                    }
                },
                Jt = class {
                    constructor(e, t) {
                        (this._logger = new ht("OidcClient")),
                            (this.settings = e instanceof Ct ? e : new Ct(e)),
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
                        dpopJkt: b,
                        omitScopeWhenRequesting: S = this.settings.omitScopeWhenRequesting,
                    }) {
                        const A = this._logger.create("createSigninRequest");
                        if ("code" !== u) throw new Error("Only the Authorization Code flow (with PKCE) is supported");
                        const k = await this.metadataService.getAuthorizationEndpoint();
                        A.debug("Received authorization endpoint", k);
                        const x = await Ft.create({
                            url: k,
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
                            dpopJkt: b,
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
                            omitScopeWhenRequesting: S,
                        });
                        await this.clearStaleState();
                        const E = x.state;
                        return await this.settings.stateStore.set(E.id, E.toStorageString()), x;
                    }
                    async readSigninResponseState(e, t = !1) {
                        const r = this._logger.create("readSigninResponseState"),
                            n = new Ht(bt.readParams(e, this.settings.response_mode));
                        if (!n.state) throw (r.throw(new Error("No state in response")), null);
                        const s = await this.settings.stateStore[t ? "remove" : "get"](n.state);
                        if (!s) throw (r.throw(new Error("No matching state found in storage")), null);
                        return { state: await Dt.fromStorageString(s), response: n };
                    }
                    async processSigninResponse(e, t, r = !0) {
                        const n = this._logger.create("processSigninResponse"),
                            { state: s, response: i } = await this.readSigninResponseState(e, r);
                        if ((n.debug("received state from storage; validating response"), this.settings.dpop && this.settings.dpop.store)) {
                            const e = await this.getDpopProof(this.settings.dpop.store);
                            t = { ...t, DPoP: e };
                        }
                        try {
                            await this._validator.validateSigninResponse(i, s, t);
                        } catch (e) {
                            if (!(e instanceof Tt && this.settings.dpop)) throw e;
                            {
                                const r = await this.getDpopProof(this.settings.dpop.store, e.nonce);
                                (t.DPoP = r), await this._validator.validateSigninResponse(i, s, t);
                            }
                        }
                        return i;
                    }
                    async getDpopProof(e, t) {
                        let r, n;
                        return (
                            (await e.getAllKeys()).includes(this.settings.client_id)
                                ? ((n = await e.get(this.settings.client_id)), n.nonce !== t && t && ((n.nonce = t), await e.set(this.settings.client_id, n)))
                                : ((r = await mt.generateDPoPKeys()), (n = new Bt(r, t)), await e.set(this.settings.client_id, n)),
                            await mt.generateDPoPProof({ url: await this.metadataService.getTokenEndpoint(!1), httpMethod: "POST", keyPair: n.keys, nonce: n.nonce })
                        );
                    }
                    async processResourceOwnerPasswordCredentials({ username: e, password: t, skipUserInfo: r = !1, extraTokenParams: n = {} }) {
                        const s = await this._tokenClient.exchangeCredentials({ username: e, password: t, ...n }),
                            i = new Ht(new URLSearchParams());
                        return Object.assign(i, s), await this._validator.validateCredentialsResponse(i, r), i;
                    }
                    async useRefreshToken({ state: e, redirect_uri: t, resource: r, timeoutInSeconds: n, extraHeaders: s, extraTokenParams: i }) {
                        var o;
                        const a = this._logger.create("useRefreshToken");
                        let c, u;
                        if (void 0 === this.settings.refreshTokenAllowedScope) c = e.scope;
                        else {
                            const t = this.settings.refreshTokenAllowedScope.split(" ");
                            c = ((null == (o = e.scope) ? void 0 : o.split(" ")) || []).filter((e) => t.includes(e)).join(" ");
                        }
                        if (this.settings.dpop && this.settings.dpop.store) {
                            const e = await this.getDpopProof(this.settings.dpop.store);
                            s = { ...s, DPoP: e };
                        }
                        try {
                            u = await this._tokenClient.exchangeRefreshToken({ refresh_token: e.refresh_token, scope: c, redirect_uri: t, resource: r, timeoutInSeconds: n, extraHeaders: s, ...i });
                        } catch (o) {
                            if (!(o instanceof Tt && this.settings.dpop)) throw o;
                            (s.DPoP = await this.getDpopProof(this.settings.dpop.store, o.nonce)),
                                (u = await this._tokenClient.exchangeRefreshToken({ refresh_token: e.refresh_token, scope: c, redirect_uri: t, resource: r, timeoutInSeconds: n, extraHeaders: s, ...i }));
                        }
                        const l = new Ht(new URLSearchParams());
                        return Object.assign(l, u), a.debug("validating response", l), await this._validator.validateRefreshResponse(l, { ...e, scope: c }), l;
                    }
                    async createSignoutRequest({
                        state: e,
                        id_token_hint: t,
                        client_id: r,
                        request_type: n,
                        url_state: s,
                        post_logout_redirect_uri: i = this.settings.post_logout_redirect_uri,
                        extraQueryParams: o = this.settings.extraQueryParams,
                    } = {}) {
                        const a = this._logger.create("createSignoutRequest"),
                            c = await this.metadataService.getEndSessionEndpoint();
                        if (!c) throw (a.throw(new Error("No end session endpoint")), null);
                        a.debug("Received end session endpoint", c), r || !i || t || (r = this.settings.client_id);
                        const u = new zt({ url: c, id_token_hint: t, client_id: r, post_logout_redirect_uri: i, state_data: e, extraQueryParams: o, request_type: n, url_state: s });
                        await this.clearStaleState();
                        const l = u.state;
                        return l && (a.debug("Signout request has state to persist"), await this.settings.stateStore.set(l.id, l.toStorageString())), u;
                    }
                    async readSignoutResponseState(e, t = !1) {
                        const r = this._logger.create("readSignoutResponseState"),
                            n = new Lt(bt.readParams(e, this.settings.response_mode));
                        if (!n.state) {
                            if ((r.debug("No state in response"), n.error)) throw (r.warn("Response was error:", n.error), new At(n));
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
                Yt = class {
                    constructor(e) {
                        (this._userManager = e),
                            (this._logger = new ht("SessionMonitor")),
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
                                                o = new Et(this._callback, n, e, s, i);
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
                Gt = class e {
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
                        if (void 0 !== this.expires_at) return this.expires_at - vt.getEpochTime();
                    }
                    set expires_in(e) {
                        void 0 !== e && (this.expires_at = Math.floor(e) + vt.getEpochTime());
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
                            new ht("User").create("toStorageString"),
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
                        return ht.createStatic("User", "fromStorageString"), new e(JSON.parse(t));
                    }
                },
                Vt = "oidc-client",
                Qt = class {
                    constructor() {
                        (this._abort = new yt("Window navigation aborted")), (this._disposeHandlers = new Set()), (this._window = null);
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
                                if (s.origin === a && (null == o ? void 0 : o.source) === Vt) {
                                    try {
                                        const r = bt.readParams(o.url, e.response_mode).get("state");
                                        if ((r || t.warn("no state found in response url"), s.source !== this._window && r !== e.state)) return;
                                    } catch {
                                        this._dispose(), n(new Error("Invalid response from window"));
                                    }
                                    r(o);
                                }
                            };
                            window.addEventListener("message", s, !1), this._disposeHandlers.add(() => window.removeEventListener("message", s, !1));
                            const i = new BroadcastChannel(`oidc-client-popup-${e.state}`);
                            i.addEventListener("message", s, !1),
                                this._disposeHandlers.add(() => i.close()),
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
                        const s = { source: Vt, url: t, keepOpen: r },
                            i = new ht("_notifyParent");
                        if (e) i.debug("With parent. Using parent.postMessage."), e.postMessage(s, n);
                        else {
                            i.debug("No parent. Using BroadcastChannel.");
                            const e = new URL(t).searchParams.get("state");
                            if (!e) throw new Error("No parent and no state in URL. Can't complete notification.");
                            const r = new BroadcastChannel(`oidc-client-popup-${e}`);
                            r.postMessage(s), r.close();
                        }
                    }
                },
                Zt = { location: !1, toolbar: !1, height: 640, closePopupWindowAfterInSeconds: -1 },
                Xt = "_blank",
                er = 60,
                tr = 2,
                rr = class extends Ct {
                    constructor(e) {
                        const {
                            popup_redirect_uri: t = e.redirect_uri,
                            popup_post_logout_redirect_uri: r = e.post_logout_redirect_uri,
                            popupWindowFeatures: n = Zt,
                            popupWindowTarget: s = Xt,
                            redirectMethod: i = "assign",
                            redirectTarget: o = "self",
                            iframeNotifyParentOrigin: a = e.iframeNotifyParentOrigin,
                            iframeScriptOrigin: c = e.iframeScriptOrigin,
                            requestTimeoutInSeconds: u,
                            silent_redirect_uri: l = e.redirect_uri,
                            silentRequestTimeoutInSeconds: d,
                            automaticSilentRenew: g = !0,
                            validateSubOnSilentRenew: h = !0,
                            includeIdTokenInSilentRenew: p = !1,
                            monitorSession: f = !1,
                            monitorAnonymousSession: _ = !1,
                            checkSessionIntervalInSeconds: m = tr,
                            query_status_response_type: y = "code",
                            stopCheckSessionOnError: w = !0,
                            revokeTokenTypes: v = ["access_token", "refresh_token"],
                            revokeTokensOnSignout: b = !1,
                            includeIdTokenInSilentSignout: S = !1,
                            accessTokenExpiringNotificationTimeInSeconds: A = er,
                            userStore: k,
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
                            (this.silent_redirect_uri = l),
                            (this.silentRequestTimeoutInSeconds = d || u || 10),
                            (this.automaticSilentRenew = g),
                            (this.validateSubOnSilentRenew = h),
                            (this.includeIdTokenInSilentRenew = p),
                            (this.monitorSession = f),
                            (this.monitorAnonymousSession = _),
                            (this.checkSessionIntervalInSeconds = m),
                            (this.stopCheckSessionOnError = w),
                            (this.query_status_response_type = y),
                            (this.revokeTokenTypes = v),
                            (this.revokeTokensOnSignout = b),
                            (this.includeIdTokenInSilentSignout = S),
                            (this.accessTokenExpiringNotificationTimeInSeconds = A),
                            k)
                        )
                            this.userStore = k;
                        else {
                            const e = "undefined" != typeof window ? window.sessionStorage : new Pt();
                            this.userStore = new jt({ store: e });
                        }
                    }
                },
                nr = class e extends Qt {
                    constructor({ silentRequestTimeoutInSeconds: t = 10 }) {
                        super(), (this._logger = new ht("IFrameWindow")), (this._timeoutInSeconds = t), (this._frame = e.createHiddenIframe()), (this._window = this._frame.contentWindow);
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
                        (this._settings = e), (this._logger = new ht("IFrameNavigator"));
                    }
                    async prepare({ silentRequestTimeoutInSeconds: e = this._settings.silentRequestTimeoutInSeconds }) {
                        return new nr({ silentRequestTimeoutInSeconds: e });
                    }
                    async callback(e) {
                        this._logger.create("callback"), nr.notifyParent(e, this._settings.iframeNotifyParentOrigin);
                    }
                },
                ir = class extends Qt {
                    constructor({ popupWindowTarget: e = Xt, popupWindowFeatures: t = {}, popupSignal: r }) {
                        super(), (this._logger = new ht("PopupWindow"));
                        const n = wt.center({ ...Zt, ...t });
                        (this._window = window.open(void 0, e, wt.serialize(n))),
                            r &&
                                r.addEventListener("abort", () => {
                                    var e;
                                    this._abort.raise(new Error(null != (e = r.reason) ? e : "Popup aborted"));
                                }),
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
                                (this._window && !this._window.closed) || (this._logger.debug("Popup closed by user or isolated by redirect"), n(), this._disposeHandlers.delete(n));
                            }, 500),
                            n = () => clearInterval(r);
                        return this._disposeHandlers.add(n), await super.navigate(e);
                    }
                    close() {
                        this._window && (this._window.closed || (this._window.close(), this._abort.raise(new Error("Popup closed")))), (this._window = null);
                    }
                    static notifyOpener(e, t) {
                        super._notifyParent(window.opener, e, t), t || window.opener || window.close();
                    }
                },
                or = class {
                    constructor(e) {
                        (this._settings = e), (this._logger = new ht("PopupNavigator"));
                    }
                    async prepare({ popupWindowFeatures: e = this._settings.popupWindowFeatures, popupWindowTarget: t = this._settings.popupWindowTarget, popupSignal: r }) {
                        return new ir({ popupWindowFeatures: e, popupWindowTarget: t, popupSignal: r });
                    }
                    async callback(e, { keepOpen: t = !1 }) {
                        this._logger.create("callback"), ir.notifyOpener(e, t);
                    }
                },
                ar = class {
                    constructor(e) {
                        (this._settings = e), (this._logger = new ht("RedirectNavigator"));
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
                cr = class extends xt {
                    constructor(e) {
                        super({ expiringNotificationTimeInSeconds: e.accessTokenExpiringNotificationTimeInSeconds }),
                            (this._logger = new ht("UserManagerEvents")),
                            (this._userLoaded = new yt("User loaded")),
                            (this._userUnloaded = new yt("User unloaded")),
                            (this._silentRenewError = new yt("Silent renew error")),
                            (this._userSignedIn = new yt("User signed in")),
                            (this._userSignedOut = new yt("User signed out")),
                            (this._userSessionChanged = new yt("User session changed"));
                    }
                    async load(e, t = !0) {
                        await super.load(e), t && (await this._userLoaded.raise(e));
                    }
                    async unload() {
                        await super.unload(), await this._userUnloaded.raise();
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
                            (this._logger = new ht("SilentRenewService")),
                            (this._isStarted = !1),
                            (this._retryTimer = new vt("Retry Silent Renew")),
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
                },
                dr = class {
                    constructor(e, t, r, n) {
                        (this._logger = new ht("UserManager")),
                            (this.settings = new rr(e)),
                            (this._client = new Jt(e)),
                            (this._redirectNavigator = null != t ? t : new ar(this.settings)),
                            (this._popupNavigator = null != r ? r : new or(this.settings)),
                            (this._iframeNavigator = null != n ? n : new sr(this.settings)),
                            (this._events = new cr(this.settings)),
                            (this._silentRenewService = new ur(this)),
                            this.settings.automaticSilentRenew && this.startSilentRenew(),
                            (this._sessionMonitor = null),
                            this.settings.monitorSession && (this._sessionMonitor = new Yt(this));
                    }
                    get events() {
                        return this._events;
                    }
                    get metadataService() {
                        return this._client.metadataService;
                    }
                    async getUser(e = !1) {
                        const t = this._logger.create("getUser"),
                            r = await this._loadUser();
                        return r ? (t.info("user loaded"), await this._events.load(r, e), r) : (t.info("user not found in storage"), null);
                    }
                    async removeUser() {
                        const e = this._logger.create("removeUser");
                        await this.storeUser(null), e.info("user removed from storage"), await this._events.unload();
                    }
                    async signinRedirect(e = {}) {
                        var t;
                        this._logger.create("signinRedirect");
                        const { redirectMethod: r, ...n } = e;
                        let s;
                        (null == (t = this.settings.dpop) ? void 0 : t.bind_authorization_code) && (s = await this.generateDPoPJkt(this.settings.dpop));
                        const i = await this._redirectNavigator.prepare({ redirectMethod: r });
                        await this._signinStart({ request_type: "si:r", dpopJkt: s, ...n }, i);
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
                        var t;
                        const r = this._logger.create("signinPopup");
                        let n;
                        (null == (t = this.settings.dpop) ? void 0 : t.bind_authorization_code) && (n = await this.generateDPoPJkt(this.settings.dpop));
                        const { popupWindowFeatures: s, popupWindowTarget: i, popupSignal: o, ...a } = e,
                            c = this.settings.popup_redirect_uri;
                        c || r.throw(new Error("No popup_redirect_uri configured"));
                        const u = await this._popupNavigator.prepare({ popupWindowFeatures: s, popupWindowTarget: i, popupSignal: o }),
                            l = await this._signin({ request_type: "si:p", redirect_uri: c, display: "popup", dpopJkt: n, ...a }, u);
                        return l && (l.profile && l.profile.sub ? r.info("success, signed in subject", l.profile.sub) : r.info("no subject")), l;
                    }
                    async signinPopupCallback(e = window.location.href, t = !1) {
                        const r = this._logger.create("signinPopupCallback");
                        await this._popupNavigator.callback(e, { keepOpen: t }), r.info("success");
                    }
                    async signinSilent(e = {}) {
                        var t, r;
                        const n = this._logger.create("signinSilent"),
                            { silentRequestTimeoutInSeconds: s, ...i } = e;
                        let o,
                            a = await this._loadUser();
                        if (null == a ? void 0 : a.refresh_token) {
                            n.debug("using refresh token");
                            const e = new lr(a);
                            return await this._useRefreshToken({ state: e, redirect_uri: i.redirect_uri, resource: i.resource, extraTokenParams: i.extraTokenParams, timeoutInSeconds: s });
                        }
                        (null == (t = this.settings.dpop) ? void 0 : t.bind_authorization_code) && (o = await this.generateDPoPJkt(this.settings.dpop));
                        const c = this.settings.silent_redirect_uri;
                        let u;
                        c || n.throw(new Error("No silent_redirect_uri configured")), a && this.settings.validateSubOnSilentRenew && (n.debug("subject prior to silent renew:", a.profile.sub), (u = a.profile.sub));
                        const l = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: s });
                        return (
                            (a = await this._signin({ request_type: "si:s", redirect_uri: c, prompt: "none", id_token_hint: this.settings.includeIdTokenInSilentRenew ? (null == a ? void 0 : a.id_token) : void 0, dpopJkt: o, ...i }, l, u)),
                            a && ((null == (r = a.profile) ? void 0 : r.sub) ? n.info("success, signed in subject", a.profile.sub) : n.info("no subject")),
                            a
                        );
                    }
                    async _useRefreshToken(e) {
                        const t = await this._client.useRefreshToken({ timeoutInSeconds: this.settings.silentRequestTimeoutInSeconds, ...e }),
                            r = new Gt({ ...e.state, ...t });
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
                                await this.signinPopupCallback(e);
                                break;
                            case "si:s":
                                await this.signinSilentCallback(e);
                                break;
                            default:
                                throw new Error("invalid response_type in state");
                        }
                    }
                    async signoutCallback(e = window.location.href, t = !1) {
                        const { state: r } = await this._client.readSignoutResponseState(e);
                        if (r)
                            switch (r.request_type) {
                                case "so:r":
                                    return await this.signoutRedirectCallback(e);
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
                            const e = {},
                                r = await this._client.processSigninResponse(a.url, e);
                            return (
                                t.debug("got signin response"),
                                r.session_state && r.profile.sub ? (t.info("success for subject", r.profile.sub), { session_state: r.session_state, sub: r.profile.sub }) : (t.info("success, user not authenticated"), null)
                            );
                        } catch (e) {
                            if (this.settings.monitorAnonymousSession && e instanceof At)
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
                            n = await this._client.processSigninResponse(e, {});
                        return r.debug("got signin response"), await this._buildUser(n, t);
                    }
                    async _buildUser(e, t) {
                        const r = this._logger.create("_buildUser"),
                            n = new Gt(e);
                        if (t) {
                            if (t !== n.profile.sub) throw (r.debug("current user does not match user returned from signin. sub from signin:", n.profile.sub), new At({ ...e, error: "login_required" }));
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
                            { popupWindowFeatures: r, popupWindowTarget: n, popupSignal: s, ...i } = e,
                            o = this.settings.popup_post_logout_redirect_uri,
                            a = await this._popupNavigator.prepare({ popupWindowFeatures: r, popupWindowTarget: n, popupSignal: s });
                        await this._signout({ request_type: "so:p", post_logout_redirect_uri: o, state: null == o ? void 0 : {}, ...i }, a), t.info("success");
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
                        return t ? (e.debug("user storageString loaded"), Gt.fromStorageString(t)) : (e.debug("no user storageString"), null);
                    }
                    async storeUser(e) {
                        const t = this._logger.create("storeUser");
                        if (e) {
                            t.debug("storing user");
                            const r = e.toStorageString();
                            await this.settings.userStore.set(this._userStoreKey, r);
                        } else this._logger.debug("removing user"), await this.settings.userStore.remove(this._userStoreKey), this.settings.dpop && (await this.settings.dpop.store.remove(this.settings.client_id));
                    }
                    async clearStaleState() {
                        await this._client.clearStaleState();
                    }
                    async dpopProof(e, t, r, n) {
                        var s, i;
                        const o = await (null == (i = null == (s = this.settings.dpop) ? void 0 : s.store) ? void 0 : i.get(this.settings.client_id));
                        if (o) return await mt.generateDPoPProof({ url: e, accessToken: null == t ? void 0 : t.access_token, httpMethod: r, keyPair: o.keys, nonce: n });
                    }
                    async generateDPoPJkt(e) {
                        let t = await e.store.get(this.settings.client_id);
                        if (!t) {
                            const r = await mt.generateDPoPKeys();
                            (t = new Bt(r)), await e.store.set(this.settings.client_id, t);
                        }
                        return await mt.generateDPoPJkt(t.keys);
                    }
                },
                gr = (function () {
                    return ot(
                        function e(t) {
                            st(this, e), (this.userManager = t), (this.oidcClient = this.userManager._client);
                        },
                        [
                            {
                                key: "getUser",
                                value: (function () {
                                    var e = t(
                                        s().mark(function e() {
                                            return s().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.userManager.getUser());
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "refreshTokenSilently",
                                value:
                                    ((n = t(
                                        s().mark(function e() {
                                            return s().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.userManager.signinSilent());
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return n.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "signIn",
                                value:
                                    ((r = t(
                                        s().mark(function e() {
                                            var t, r, n, i, a;
                                            return s().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.next = 1), this.oidcClient.createSigninRequest({});
                                                            case 1:
                                                                return (t = e.sent), (r = t.url), (e.next = 2), o().identity.launchWebAuthFlow({ interactive: !0, url: r });
                                                            case 2:
                                                                return (n = e.sent), (e.next = 3), this.oidcClient.processSigninResponse(n);
                                                            case 3:
                                                                return (i = e.sent), (a = new Gt(i)), (e.next = 4), this.userManager.storeUser(a);
                                                            case 4:
                                                                return o().alarms.create(c, { when: Date.now() }), e.abrupt("return", a);
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return r.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "signOut",
                                value:
                                    ((e = t(
                                        s().mark(function e() {
                                            var t, r, n;
                                            return s().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.next = 1), this.oidcClient.createSignoutRequest({});
                                                            case 1:
                                                                return (t = e.sent), (r = t.url), (e.next = 2), o().identity.launchWebAuthFlow({ interactive: !0, url: r });
                                                            case 2:
                                                                return (n = e.sent), (e.next = 3), this.oidcClient.processSignoutResponse(n);
                                                            case 3:
                                                                return (e.next = 4), this.userManager.removeUser();
                                                            case 4:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return e.apply(this, arguments);
                                    }),
                            },
                        ]
                    );
                    var e, r, n;
                })();
            const hr = gr;
            function pr(e) {
                return (
                    (pr = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    pr(e)
                );
            }
            function fr(e, t) {
                return (
                    (fr = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    fr(e, t)
                );
            }
            const _r = (function () {
                return ot(
                    function e() {
                        st(this, e);
                    },
                    [
                        {
                            key: "setItem",
                            value:
                                ((a = t(
                                    s().mark(function e(t, r) {
                                        return s().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 1), o().storage.local.set(g({}, t, r));
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e, t) {
                                    return a.apply(this, arguments);
                                }),
                        },
                        {
                            key: "getItem",
                            value:
                                ((i = t(
                                    s().mark(function e(t) {
                                        return s().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return e.abrupt(
                                                            "return",
                                                            o()
                                                                .storage.local.get(t)
                                                                .then(function (e) {
                                                                    return e[t] || null;
                                                                })
                                                        );
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e) {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: "removeItem",
                            value:
                                ((n = t(
                                    s().mark(function e(t) {
                                        return s().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 1), o().storage.local.remove([t]);
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e) {
                                    return n.apply(this, arguments);
                                }),
                        },
                        {
                            key: "clear",
                            value:
                                ((r = t(
                                    s().mark(function e() {
                                        return s().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 1), o().storage.local.clear();
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function () {
                                    return r.apply(this, arguments);
                                }),
                        },
                        {
                            key: "length",
                            get: function () {
                                return o()
                                    .storage.local.get(null)
                                    .then(function (e) {
                                        return Object.keys(e).length;
                                    });
                            },
                        },
                        {
                            key: "key",
                            value:
                                ((e = t(
                                    s().mark(function e(t) {
                                        var r, n;
                                        return s().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 1), o().storage.local.get(null);
                                                    case 1:
                                                        return (r = e.sent), (n = Object.keys(r)), e.abrupt("return", n[t] || null);
                                                    case 2:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (t) {
                                    return e.apply(this, arguments);
                                }),
                        },
                    ]
                );
                var e, r, n, i, a;
            })();
            function mr() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (mr = function () {
                    return !!e;
                })();
            }
            var yr = (function (e) {
                    function t() {
                        st(this, t);
                        var e,
                            r,
                            n,
                            s = o().identity.getRedirectURL();
                        return (
                            (e = this),
                            (n = [
                                {
                                    redirect_uri: s,
                                    silent_redirect_uri: s,
                                    post_logout_redirect_uri: s,
                                    automaticSilentRenew: !0,
                                    response_type: "code",
                                    scope: "offline_access openid profile email",
                                    authority: a,
                                    client_id: "WUV1TJGfvbemvJCP8d35v0KQn5eXWq0t",
                                    extraQueryParams: { returnPath: s, audience: "https://internal-api.prolific.com" },
                                    metadata: {
                                        authorization_endpoint: "".concat(a, "/authorize"),
                                        userinfo_endpoint: "".concat(a, "/userinfo"),
                                        issuer: "".concat(a, "/"),
                                        jwks_uri: "".concat(a, "/.well-known/jwks.json"),
                                        end_session_endpoint: "".concat(a, "/v2/logout?&returnTo=").concat(s),
                                        token_endpoint: "".concat(a, "/oauth/token"),
                                    },
                                    userStore: new jt({ store: new _r() }),
                                },
                            ]),
                            (r = pr((r = t))),
                            (function (e, t) {
                                if (t && ("object" == l(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(e);
                            })(e, mr() ? Reflect.construct(r, n || [], pr(e).constructor) : r.apply(e, n))
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && fr(e, t);
                        })(t, e),
                        ot(t)
                    );
                })(dr),
                wr = new hr(new yr()),
                vr = function (e, t, r) {
                    e && rt.dispatch(e), o().action.setBadgeText({ text: t }), o().action.setBadgeBackgroundColor({ color: r });
                };
            function br() {
                return Sr.apply(this, arguments);
            }
            function Sr() {
                return (Sr = t(
                    s().mark(function e() {
                        var t;
                        return s().wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.prev = 0), (e.next = 1), wr.getUser();
                                        case 1:
                                            return (t = e.sent), e.abrupt("return", t);
                                        case 2:
                                            (e.prev = 2), e.catch(0), vr(null, "!", "red");
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[0, 2]]
                        );
                    })
                )).apply(this, arguments);
            }
            var Ar = (function () {
                var e = t(
                    s().mark(function e() {
                        var t, r, n, i, a;
                        return s().wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return o().alarms.clear(c), (e.next = 1), br();
                                        case 1:
                                            if ((t = e.sent)) {
                                                e.next = 2;
                                                break;
                                            }
                                            return vr(null, "!", "red"), e.abrupt("return");
                                        case 2:
                                            return (r = t.access_token), (e.prev = 3), (e.next = 4), u(r);
                                        case 4:
                                            if (((n = e.sent), (i = n.results), (a = n.error), !i)) {
                                                e.next = 5;
                                                break;
                                            }
                                            nt(i), o().action.setBadgeBackgroundColor({ color: "#003eab" }), (e.next = 6);
                                            break;
                                        case 5:
                                            if (!a || ![401, 403, 404].includes(a.status)) {
                                                e.next = 6;
                                                break;
                                            }
                                            return vr(null, "!", "red"), (e.next = 6), wr.signOut();
                                        case 6:
                                            e.next = 8;
                                            break;
                                        case 7:
                                            (e.prev = 7), e.catch(3), vr(null, "ERR", "black");
                                        case 8:
                                            o().alarms.create(c, { delayInMinutes: 10 / 60 });
                                        case 9:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[3, 7]]
                        );
                    })
                );
                return function () {
                    return e.apply(this, arguments);
                };
            })();
            o().alarms.onAlarm.addListener(
                (function () {
                    var e = t(
                        s().mark(function e(t) {
                            return s().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (t.name !== c) {
                                                e.next = 1;
                                                break;
                                            }
                                            return (e.next = 1), Ar();
                                        case 1:
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
                o().notifications.onClicked.addListener(function (e) {
                    var t;
                    o().notifications.clear(e), (t = e), o().tabs.create({ url: "".concat("https://app.prolific.com", "/studies/").concat(t, "?source=pa") });
                });
            var kr = function () {
                return setInterval(o().runtime.getPlatformInfo, 2e4);
            };
            o().runtime.onStartup.addListener(kr), kr(), Ar();
        })();
})();















// Fingerprint.js

/**
 * FingerprintJS v3.3.6 - Copyright (c) FingerprintJS, Inc, 2022 (https://fingerprint.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */

import { __awaiter, __generator, __assign, __spreadArrays } from 'tslib';

var version = "3.3.6";

function wait(durationMs, resolveWith) {
    return new Promise(function (resolve) { return setTimeout(resolve, durationMs, resolveWith); });
}
function requestIdleCallbackIfAvailable(fallbackTimeout, deadlineTimeout) {
    if (deadlineTimeout === void 0) { deadlineTimeout = Infinity; }
    var requestIdleCallback = window.requestIdleCallback;
    if (requestIdleCallback) {
        // The function `requestIdleCallback` loses the binding to `window` here.
        // `globalThis` isn't always equal `window` (see https://github.com/fingerprintjs/fingerprintjs/issues/683).
        // Therefore, an error can occur. `call(window,` prevents the error.
        return new Promise(function (resolve) { return requestIdleCallback.call(window, function () { return resolve(); }, { timeout: deadlineTimeout }); });
    }
    else {
        return wait(Math.min(fallbackTimeout, deadlineTimeout));
    }
}
function isPromise(value) {
    return value && typeof value.then === 'function';
}
/**
 * Calls a maybe asynchronous function without creating microtasks when the function is synchronous.
 * Catches errors in both cases.
 *
 * If just you run a code like this:
 * ```
 * console.time('Action duration')
 * await action()
 * console.timeEnd('Action duration')
 * ```
 * The synchronous function time can be measured incorrectly because another microtask may run before the `await`
 * returns the control back to the code.
 */
function awaitIfAsync(action, callback) {
    try {
        var returnedValue = action();
        if (isPromise(returnedValue)) {
            returnedValue.then(function (result) { return callback(true, result); }, function (error) { return callback(false, error); });
        }
        else {
            callback(true, returnedValue);
        }
    }
    catch (error) {
        callback(false, error);
    }
}
/**
 * If you run many synchronous tasks without using this function, the JS main loop will be busy and asynchronous tasks
 * (e.g. completing a network request, rendering the page) won't be able to happen.
 * This function allows running many synchronous tasks such way that asynchronous tasks can run too in background.
 */
function forEachWithBreaks(items, callback, loopReleaseInterval) {
    if (loopReleaseInterval === void 0) { loopReleaseInterval = 16; }
    return __awaiter(this, void 0, void 0, function () {
        var lastLoopReleaseTime, i, now;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lastLoopReleaseTime = Date.now();
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < items.length)) return [3 /*break*/, 4];
                    callback(items[i], i);
                    now = Date.now();
                    if (!(now >= lastLoopReleaseTime + loopReleaseInterval)) return [3 /*break*/, 3];
                    lastLoopReleaseTime = now;
                    // Allows asynchronous actions and microtasks to happen
                    return [4 /*yield*/, wait(0)];
                case 2:
                    // Allows asynchronous actions and microtasks to happen
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++i;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Makes the given promise never emit an unhandled promise rejection console warning.
 * The promise will still pass errors to the next promises.
 *
 * Otherwise, promise emits a console warning unless it has a `catch` listener.
 */
function suppressUnhandledRejectionWarning(promise) {
    promise.then(undefined, function () { return undefined; });
}

/*
 * Taken from https://github.com/karanlyons/murmurHash3.js/blob/a33d0723127e2e5415056c455f8aed2451ace208/murmurHash3.js
 */
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// added together as a 64bit int (as an array of two 32bit ints).
//
function x64Add(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// multiplied together as a 64bit int (as an array of two 32bit ints).
//
function x64Multiply(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
//
// Given a 64bit int (as an array of two 32bit ints) and an int
// representing a number of bit positions, returns the 64bit int (as an
// array of two 32bit ints) rotated left by that number of positions.
//
function x64Rotl(m, n) {
    n %= 64;
    if (n === 32) {
        return [m[1], m[0]];
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
    }
    else {
        n -= 32;
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
    }
}
//
// Given a 64bit int (as an array of two 32bit ints) and an int
// representing a number of bit positions, returns the 64bit int (as an
// array of two 32bit ints) shifted left by that number of positions.
//
function x64LeftShift(m, n) {
    n %= 64;
    if (n === 0) {
        return m;
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
    }
    else {
        return [m[1] << (n - 32), 0];
    }
}
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// xored together as a 64bit int (as an array of two 32bit ints).
//
function x64Xor(m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]];
}
//
// Given a block, returns murmurHash3's final x64 mix of that block.
// (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
// only place where we need to right shift 64bit ints.)
//
function x64Fmix(h) {
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    return h;
}
//
// Given a string and an optional seed as an int, returns a 128 bit
// hash using the x64 flavor of MurmurHash3, as an unsigned hex.
//
function x64hash128(key, seed) {
    key = key || '';
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];
    var i;
    for (i = 0; i < bytes; i = i + 16) {
        k1 = [
            (key.charCodeAt(i + 4) & 0xff) |
            ((key.charCodeAt(i + 5) & 0xff) << 8) |
            ((key.charCodeAt(i + 6) & 0xff) << 16) |
            ((key.charCodeAt(i + 7) & 0xff) << 24),
            (key.charCodeAt(i) & 0xff) |
            ((key.charCodeAt(i + 1) & 0xff) << 8) |
            ((key.charCodeAt(i + 2) & 0xff) << 16) |
            ((key.charCodeAt(i + 3) & 0xff) << 24),
        ];
        k2 = [
            (key.charCodeAt(i + 12) & 0xff) |
            ((key.charCodeAt(i + 13) & 0xff) << 8) |
            ((key.charCodeAt(i + 14) & 0xff) << 16) |
            ((key.charCodeAt(i + 15) & 0xff) << 24),
            (key.charCodeAt(i + 8) & 0xff) |
            ((key.charCodeAt(i + 9) & 0xff) << 8) |
            ((key.charCodeAt(i + 10) & 0xff) << 16) |
            ((key.charCodeAt(i + 11) & 0xff) << 24),
        ];
        k1 = x64Multiply(k1, c1);
        k1 = x64Rotl(k1, 31);
        k1 = x64Multiply(k1, c2);
        h1 = x64Xor(h1, k1);
        h1 = x64Rotl(h1, 27);
        h1 = x64Add(h1, h2);
        h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
        k2 = x64Multiply(k2, c2);
        k2 = x64Rotl(k2, 33);
        k2 = x64Multiply(k2, c1);
        h2 = x64Xor(h2, k2);
        h2 = x64Rotl(h2, 31);
        h2 = x64Add(h2, h1);
        h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
    }
    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
        case 15:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
        // fallthrough
        case 14:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
        // fallthrough
        case 13:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
        // fallthrough
        case 12:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
        // fallthrough
        case 11:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
        // fallthrough
        case 10:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
        // fallthrough
        case 9:
            k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
            k2 = x64Multiply(k2, c2);
            k2 = x64Rotl(k2, 33);
            k2 = x64Multiply(k2, c1);
            h2 = x64Xor(h2, k2);
        // fallthrough
        case 8:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
        // fallthrough
        case 7:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
        // fallthrough
        case 6:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
        // fallthrough
        case 5:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
        // fallthrough
        case 4:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
        // fallthrough
        case 3:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
        // fallthrough
        case 2:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
        // fallthrough
        case 1:
            k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
            k1 = x64Multiply(k1, c1);
            k1 = x64Rotl(k1, 31);
            k1 = x64Multiply(k1, c2);
            h1 = x64Xor(h1, k1);
        // fallthrough
    }
    h1 = x64Xor(h1, [0, key.length]);
    h2 = x64Xor(h2, [0, key.length]);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    h1 = x64Fmix(h1);
    h2 = x64Fmix(h2);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    return (('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8));
}

/**
 * Converts an error object to a plain object that can be used with `JSON.stringify`.
 * If you just run `JSON.stringify(error)`, you'll get `'{}'`.
 */
function errorToObject(error) {
    var _a;
    return __assign({ name: error.name, message: error.message, stack: (_a = error.stack) === null || _a === void 0 ? void 0 : _a.split('\n') }, error);
}

/*
 * This file contains functions to work with pure data only (no browser features, DOM, side effects, etc).
 */
/**
 * Does the same as Array.prototype.includes but has better typing
 */
function includes(haystack, needle) {
    for (var i = 0, l = haystack.length; i < l; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
/**
 * Like `!includes()` but with proper typing
 */
function excludes(haystack, needle) {
    return !includes(haystack, needle);
}
/**
 * Be careful, NaN can return
 */
function toInt(value) {
    return parseInt(value);
}
/**
 * Be careful, NaN can return
 */
function toFloat(value) {
    return parseFloat(value);
}
function replaceNaN(value, replacement) {
    return typeof value === 'number' && isNaN(value) ? replacement : value;
}
function countTruthy(values) {
    return values.reduce(function (sum, value) { return sum + (value ? 1 : 0); }, 0);
}
function round(value, base) {
    if (base === void 0) { base = 1; }
    if (Math.abs(base) >= 1) {
        return Math.round(value / base) * base;
    }
    else {
        // Sometimes when a number is multiplied by a small number, precision is lost,
        // for example 1234 * 0.0001 === 0.12340000000000001, and it's more precise divide: 1234 / (1 / 0.0001) === 0.1234.
        var counterBase = 1 / base;
        return Math.round(value * counterBase) / counterBase;
    }
}
/**
 * Parses a CSS selector into tag name with HTML attributes.
 * Only single element selector are supported (without operators like space, +, >, etc).
 *
 * Multiple values can be returned for each attribute. You decide how to handle them.
 */
function parseSimpleCssSelector(selector) {
    var _a, _b;
    var errorMessage = "Unexpected syntax '" + selector + "'";
    var tagMatch = /^\s*([a-z-]*)(.*)$/i.exec(selector);
    var tag = tagMatch[1] || undefined;
    var attributes = {};
    var partsRegex = /([.:#][\w-]+|\[.+?\])/gi;
    var addAttribute = function (name, value) {
        attributes[name] = attributes[name] || [];
        attributes[name].push(value);
    };
    for (; ;) {
        var match = partsRegex.exec(tagMatch[2]);
        if (!match) {
            break;
        }
        var part = match[0];
        switch (part[0]) {
            case '.':
                addAttribute('class', part.slice(1));
                break;
            case '#':
                addAttribute('id', part.slice(1));
                break;
            case '[': {
                var attributeMatch = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(part);
                if (attributeMatch) {
                    addAttribute(attributeMatch[1], (_b = (_a = attributeMatch[4]) !== null && _a !== void 0 ? _a : attributeMatch[5]) !== null && _b !== void 0 ? _b : '');
                }
                else {
                    throw new Error(errorMessage);
                }
                break;
            }
            default:
                throw new Error(errorMessage);
        }
    }
    return [tag, attributes];
}

function ensureErrorWithMessage(error) {
    return error && typeof error === 'object' && 'message' in error ? error : { message: error };
}
function isFinalResultLoaded(loadResult) {
    return typeof loadResult !== 'function';
}
/**
 * Loads the given entropy source. Returns a function that gets an entropy component from the source.
 *
 * The result is returned synchronously to prevent `loadSources` from
 * waiting for one source to load before getting the components from the other sources.
 */
function loadSource(source, sourceOptions) {
    var sourceLoadPromise = new Promise(function (resolveLoad) {
        var loadStartTime = Date.now();
        // `awaitIfAsync` is used instead of just `await` in order to measure the duration of synchronous sources
        // correctly (other microtasks won't affect the duration).
        awaitIfAsync(source.bind(null, sourceOptions), function () {
            var loadArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                loadArgs[_i] = arguments[_i];
            }
            var loadDuration = Date.now() - loadStartTime;
            // Source loading failed
            if (!loadArgs[0]) {
                return resolveLoad(function () { return ({ error: ensureErrorWithMessage(loadArgs[1]), duration: loadDuration }); });
            }
            var loadResult = loadArgs[1];
            // Source loaded with the final result
            if (isFinalResultLoaded(loadResult)) {
                return resolveLoad(function () { return ({ value: loadResult, duration: loadDuration }); });
            }
            // Source loaded with "get" stage
            resolveLoad(function () {
                return new Promise(function (resolveGet) {
                    var getStartTime = Date.now();
                    awaitIfAsync(loadResult, function () {
                        var getArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            getArgs[_i] = arguments[_i];
                        }
                        var duration = loadDuration + Date.now() - getStartTime;
                        // Source getting failed
                        if (!getArgs[0]) {
                            return resolveGet({ error: ensureErrorWithMessage(getArgs[1]), duration: duration });
                        }
                        // Source getting succeeded
                        resolveGet({ value: getArgs[1], duration: duration });
                    });
                });
            });
        });
    });
    suppressUnhandledRejectionWarning(sourceLoadPromise);
    return function getComponent() {
        return sourceLoadPromise.then(function (finalizeSource) { return finalizeSource(); });
    };
}
/**
 * Loads the given entropy sources. Returns a function that collects the entropy components.
 *
 * The result is returned synchronously in order to allow start getting the components
 * before the sources are loaded completely.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function loadSources(sources, sourceOptions, excludeSources) {
    var includedSources = Object.keys(sources).filter(function (sourceKey) { return excludes(excludeSources, sourceKey); });
    var sourceGetters = Array(includedSources.length);
    // Using `forEachWithBreaks` allows asynchronous sources to complete between synchronous sources
    // and measure the duration correctly
    forEachWithBreaks(includedSources, function (sourceKey, index) {
        sourceGetters[index] = loadSource(sources[sourceKey], sourceOptions);
    });
    return function getComponents() {
        return __awaiter(this, void 0, void 0, function () {
            var components, _i, includedSources_1, sourceKey, componentPromises, _loop_1, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        components = {};
                        for (_i = 0, includedSources_1 = includedSources; _i < includedSources_1.length; _i++) {
                            sourceKey = includedSources_1[_i];
                            components[sourceKey] = undefined;
                        }
                        componentPromises = Array(includedSources.length);
                        _loop_1 = function () {
                            var hasAllComponentPromises;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        hasAllComponentPromises = true;
                                        return [4 /*yield*/, forEachWithBreaks(includedSources, function (sourceKey, index) {
                                            if (!componentPromises[index]) {
                                                // `sourceGetters` may be incomplete at this point of execution because `forEachWithBreaks` is asynchronous
                                                if (sourceGetters[index]) {
                                                    var componentPromise = sourceGetters[index]().then(function (component) { return (components[sourceKey] = component); });
                                                    suppressUnhandledRejectionWarning(componentPromise);
                                                    componentPromises[index] = componentPromise;
                                                }
                                                else {
                                                    hasAllComponentPromises = false;
                                                }
                                            }
                                        })];
                                    case 1:
                                        _a.sent();
                                        if (hasAllComponentPromises) {
                                            return [2 /*return*/, "break"];
                                        }
                                        return [4 /*yield*/, wait(1)]; // Lets the source load loop continue
                                    case 2:
                                        _a.sent(); // Lets the source load loop continue
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _a.label = 1;
                    case 1: return [5 /*yield**/, _loop_1()];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, Promise.all(componentPromises)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, components];
                }
            });
        });
    };
}
/**
 * Modifies an entropy source by transforming its returned value with the given function.
 * Keeps the source properties: sync/async, 1/2 stages.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function transformSource(source, transformValue) {
    var transformLoadResult = function (loadResult) {
        if (isFinalResultLoaded(loadResult)) {
            return transformValue(loadResult);
        }
        return function () {
            var getResult = loadResult();
            if (isPromise(getResult)) {
                return getResult.then(transformValue);
            }
            return transformValue(getResult);
        };
    };
    return function (options) {
        var loadResult = source(options);
        if (isPromise(loadResult)) {
            return loadResult.then(transformLoadResult);
        }
        return transformLoadResult(loadResult);
    };
}

/*
 * Functions to help with features that vary through browsers
 */
/**
 * Checks whether the browser is based on Trident (the Internet Explorer engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isTrident() {
    var w = window;
    var n = navigator;
    // The properties are checked to be in IE 10, IE 11 and not to be in other browsers in October 2020
    return (countTruthy([
        'MSCSSMatrix' in w,
        'msSetImmediate' in w,
        'msIndexedDB' in w,
        'msMaxTouchPoints' in n,
        'msPointerEnabled' in n,
    ]) >= 4);
}
/**
 * Checks whether the browser is based on EdgeHTML (the pre-Chromium Edge engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isEdgeHTML() {
    // Based on research in October 2020
    var w = window;
    var n = navigator;
    return (countTruthy(['msWriteProfilerMark' in w, 'MSStream' in w, 'msLaunchUri' in n, 'msSaveBlob' in n]) >= 3 &&
        !isTrident());
}
/**
 * Checks whether the browser is based on Chromium without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isChromium() {
    // Based on research in October 2020. Tested to detect Chromium 42-86.
    var w = window;
    var n = navigator;
    return (countTruthy([
        'webkitPersistentStorage' in n,
        'webkitTemporaryStorage' in n,
        n.vendor.indexOf('Google') === 0,
        'webkitResolveLocalFileSystemURL' in w,
        'BatteryManager' in w,
        'webkitMediaStream' in w,
        'webkitSpeechGrammar' in w,
    ]) >= 5);
}
/**
 * Checks whether the browser is based on mobile or desktop Safari without using user-agent.
 * All iOS browsers use WebKit (the Safari engine).
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isWebKit() {
    // Based on research in September 2020
    var w = window;
    var n = navigator;
    return (countTruthy([
        'ApplePayError' in w,
        'CSSPrimitiveValue' in w,
        'Counter' in w,
        n.vendor.indexOf('Apple') === 0,
        'getStorageUpdates' in n,
        'WebKitMediaKeys' in w,
    ]) >= 4);
}
/**
 * Checks whether the WebKit browser is a desktop Safari.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isDesktopSafari() {
    var w = window;
    return (countTruthy([
        'safari' in w,
        !('DeviceMotionEvent' in w),
        !('ongestureend' in w),
        !('standalone' in navigator),
    ]) >= 3);
}
/**
 * Checks whether the browser is based on Gecko (Firefox engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isGecko() {
    var _a, _b;
    var w = window;
    // Based on research in September 2020
    return (countTruthy([
        'buildID' in navigator,
        'MozAppearance' in ((_b = (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.style) !== null && _b !== void 0 ? _b : {}),
        'onmozfullscreenchange' in w,
        'mozInnerScreenX' in w,
        'CSSMozDocumentRule' in w,
        'CanvasCaptureMediaStream' in w,
    ]) >= 4);
}
/**
 * Checks whether the browser is based on Chromium version ≥86 without using user-agent.
 * It doesn't check that the browser is based on Chromium, there is a separate function for this.
 */
function isChromium86OrNewer() {
    // Checked in Chrome 85 vs Chrome 86 both on desktop and Android
    var w = window;
    return (countTruthy([
        !('MediaSettingsRange' in w),
        'RTCEncodedAudioFrame' in w,
        '' + w.Intl === '[object Intl]',
        '' + w.Reflect === '[object Reflect]',
    ]) >= 3);
}
/**
 * Checks whether the browser is based on WebKit version ≥606 (Safari ≥12) without using user-agent.
 * It doesn't check that the browser is based on WebKit, there is a separate function for this.
 *
 * @link https://en.wikipedia.org/wiki/Safari_version_history#Release_history Safari-WebKit versions map
 */
function isWebKit606OrNewer() {
    // Checked in Safari 9–14
    var w = window;
    return (countTruthy([
        'DOMRectList' in w,
        'RTCPeerConnectionIceEvent' in w,
        'SVGGeometryElement' in w,
        'ontransitioncancel' in w,
    ]) >= 3);
}
/**
 * Checks whether the device is an iPad.
 * It doesn't check that the engine is WebKit and that the WebKit isn't desktop.
 */
function isIPad() {
    // Checked on:
    // Safari on iPadOS (both mobile and desktop modes): 8, 11, 12, 13, 14
    // Chrome on iPadOS (both mobile and desktop modes): 11, 12, 13, 14
    // Safari on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
    // Chrome on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
    // Before iOS 13. Safari tampers the value in "request desktop site" mode since iOS 13.
    if (navigator.platform === 'iPad') {
        return true;
    }
    var s = screen;
    var screenRatio = s.width / s.height;
    return (countTruthy([
        'MediaSource' in window,
        !!Element.prototype.webkitRequestFullscreen,
        // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
        screenRatio > 0.65 && screenRatio < 1.53,
    ]) >= 2);
}
/**
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function getFullscreenElement() {
    var d = document;
    return d.fullscreenElement || d.msFullscreenElement || d.mozFullScreenElement || d.webkitFullscreenElement || null;
}
function exitFullscreen() {
    var d = document;
    // `call` is required because the function throws an error without a proper "this" context
    return (d.exitFullscreen || d.msExitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen).call(d);
}
/**
 * Checks whether the device runs on Android without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isAndroid() {
    var isItChromium = isChromium();
    var isItGecko = isGecko();
    // Only 2 browser engines are presented on Android.
    // Actually, there is also Android 4.1 browser, but it's not worth detecting it at the moment.
    if (!isItChromium && !isItGecko) {
        return false;
    }
    var w = window;
    // Chrome removes all words "Android" from `navigator` when desktop version is requested
    // Firefox keeps "Android" in `navigator.appVersion` when desktop version is requested
    return (countTruthy([
        'onorientationchange' in w,
        'orientation' in w,
        isItChromium && !('SharedWorker' in w),
        isItGecko && /android/i.test(navigator.appVersion),
    ]) >= 2);
}

/**
 * A deep description: https://fingerprint.com/blog/audio-fingerprinting/
 * Inspired by and based on https://github.com/cozylife/audio-fingerprint
 */
function getAudioFingerprint() {
    var w = window;
    var AudioContext = w.OfflineAudioContext || w.webkitOfflineAudioContext;
    if (!AudioContext) {
        return -2 /* NotSupported */;
    }
    // In some browsers, audio context always stays suspended unless the context is started in response to a user action
    // (e.g. a click or a tap). It prevents audio fingerprint from being taken at an arbitrary moment of time.
    // Such browsers are old and unpopular, so the audio fingerprinting is just skipped in them.
    // See a similar case explanation at https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
    if (doesCurrentBrowserSuspendAudioContext()) {
        return -1 /* KnownToSuspend */;
    }
    var hashFromIndex = 4500;
    var hashToIndex = 5000;
    var context = new AudioContext(1, hashToIndex, 44100);
    var oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.value = 10000;
    var compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;
    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start(0);
    var _a = startRenderingAudio(context), renderPromise = _a[0], finishRendering = _a[1];
    var fingerprintPromise = renderPromise.then(function (buffer) { return getHash(buffer.getChannelData(0).subarray(hashFromIndex)); }, function (error) {
        if (error.name === "timeout" /* Timeout */ || error.name === "suspended" /* Suspended */) {
            return -3 /* Timeout */;
        }
        throw error;
    });
    // Suppresses the console error message in case when the fingerprint fails before requested
    suppressUnhandledRejectionWarning(fingerprintPromise);
    return function () {
        finishRendering();
        return fingerprintPromise;
    };
}
/**
 * Checks if the current browser is known to always suspend audio context
 */
function doesCurrentBrowserSuspendAudioContext() {
    return isWebKit() && !isDesktopSafari() && !isWebKit606OrNewer();
}
/**
 * Starts rendering the audio context.
 * When the returned function is called, the render process starts finishing.
 */
function startRenderingAudio(context) {
    var renderTryMaxCount = 3;
    var renderRetryDelay = 500;
    var runningMaxAwaitTime = 500;
    var runningSufficientTime = 5000;
    var finalize = function () { return undefined; };
    var resultPromise = new Promise(function (resolve, reject) {
        var isFinalized = false;
        var renderTryCount = 0;
        var startedRunningAt = 0;
        context.oncomplete = function (event) { return resolve(event.renderedBuffer); };
        var startRunningTimeout = function () {
            setTimeout(function () { return reject(makeInnerError("timeout" /* Timeout */)); }, Math.min(runningMaxAwaitTime, startedRunningAt + runningSufficientTime - Date.now()));
        };
        var tryRender = function () {
            try {
                context.startRendering();
                switch (context.state) {
                    case 'running':
                        startedRunningAt = Date.now();
                        if (isFinalized) {
                            startRunningTimeout();
                        }
                        break;
                    // Sometimes the audio context doesn't start after calling `startRendering` (in addition to the cases where
                    // audio context doesn't start at all). A known case is starting an audio context when the browser tab is in
                    // background on iPhone. Retries usually help in this case.
                    case 'suspended':
                        // The audio context can reject starting until the tab is in foreground. Long fingerprint duration
                        // in background isn't a problem, therefore the retry attempts don't count in background. It can lead to
                        // a situation when a fingerprint takes very long time and finishes successfully. FYI, the audio context
                        // can be suspended when `document.hidden === false` and start running after a retry.
                        if (!document.hidden) {
                            renderTryCount++;
                        }
                        if (isFinalized && renderTryCount >= renderTryMaxCount) {
                            reject(makeInnerError("suspended" /* Suspended */));
                        }
                        else {
                            setTimeout(tryRender, renderRetryDelay);
                        }
                        break;
                }
            }
            catch (error) {
                reject(error);
            }
        };
        tryRender();
        finalize = function () {
            if (!isFinalized) {
                isFinalized = true;
                if (startedRunningAt > 0) {
                    startRunningTimeout();
                }
            }
        };
    });
    return [resultPromise, finalize];
}
function getHash(signal) {
    var hash = 0;
    for (var i = 0; i < signal.length; ++i) {
        hash += Math.abs(signal[i]);
    }
    return hash;
}
function makeInnerError(name) {
    var error = new Error(name);
    error.name = name;
    return error;
}

/**
 * Creates and keeps an invisible iframe while the given function runs.
 * The given function is called when the iframe is loaded and has a body.
 * The iframe allows to measure DOM sizes inside itself.
 *
 * Notice: passing an initial HTML code doesn't work in IE.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function withIframe(action, initialHtml, domPollInterval) {
    var _a, _b, _c;
    if (domPollInterval === void 0) { domPollInterval = 50; }
    return __awaiter(this, void 0, void 0, function () {
        var d, iframe;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    d = document;
                    _d.label = 1;
                case 1:
                    if (!!d.body) return [3 /*break*/, 3];
                    return [4 /*yield*/, wait(domPollInterval)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 1];
                case 3:
                    iframe = d.createElement('iframe');
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, , 10, 11]);
                    return [4 /*yield*/, new Promise(function (_resolve, _reject) {
                        var isComplete = false;
                        var resolve = function () {
                            isComplete = true;
                            _resolve();
                        };
                        var reject = function (error) {
                            isComplete = true;
                            _reject(error);
                        };
                        iframe.onload = resolve;
                        iframe.onerror = reject;
                        var style = iframe.style;
                        style.setProperty('display', 'block', 'important'); // Required for browsers to calculate the layout
                        style.position = 'absolute';
                        style.top = '0';
                        style.left = '0';
                        style.visibility = 'hidden';
                        if (initialHtml && 'srcdoc' in iframe) {
                            iframe.srcdoc = initialHtml;
                        }
                        else {
                            iframe.src = 'about:blank';
                        }
                        d.body.appendChild(iframe);
                        // WebKit in WeChat doesn't fire the iframe's `onload` for some reason.
                        // This code checks for the loading state manually.
                        // See https://github.com/fingerprintjs/fingerprintjs/issues/645
                        var checkReadyState = function () {
                            var _a, _b;
                            // The ready state may never become 'complete' in Firefox despite the 'load' event being fired.
                            // So an infinite setTimeout loop can happen without this check.
                            // See https://github.com/fingerprintjs/fingerprintjs/pull/716#issuecomment-986898796
                            if (isComplete) {
                                return;
                            }
                            // Make sure iframe.contentWindow and iframe.contentWindow.document are both loaded
                            // The contentWindow.document can miss in JSDOM (https://github.com/jsdom/jsdom).
                            if (((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.readyState) === 'complete') {
                                resolve();
                            }
                            else {
                                setTimeout(checkReadyState, 10);
                            }
                        };
                        checkReadyState();
                    })];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    if (!!((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body)) return [3 /*break*/, 8];
                    return [4 /*yield*/, wait(domPollInterval)];
                case 7:
                    _d.sent();
                    return [3 /*break*/, 6];
                case 8: return [4 /*yield*/, action(iframe, iframe.contentWindow)];
                case 9: return [2 /*return*/, _d.sent()];
                case 10:
                    (_c = iframe.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(iframe);
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
/**
 * Creates a DOM element that matches the given selector.
 * Only single element selector are supported (without operators like space, +, >, etc).
 */
function selectorToElement(selector) {
    var _a = parseSimpleCssSelector(selector), tag = _a[0], attributes = _a[1];
    var element = document.createElement(tag !== null && tag !== void 0 ? tag : 'div');
    for (var _i = 0, _b = Object.keys(attributes); _i < _b.length; _i++) {
        var name_1 = _b[_i];
        var value = attributes[name_1].join(' ');
        // Changing the `style` attribute can cause a CSP error, therefore we change the `style.cssText` property.
        // https://github.com/fingerprintjs/fingerprintjs/issues/733
        if (name_1 === 'style') {
            addStyleString(element.style, value);
        }
        else {
            element.setAttribute(name_1, value);
        }
    }
    return element;
}
/**
 * Adds CSS styles from a string in such a way that doesn't trigger a CSP warning (unsafe-inline or unsafe-eval)
 */
function addStyleString(style, source) {
    // We don't use `style.cssText` because browsers must block it when no `unsafe-eval` CSP is presented: https://csplite.com/csp145/#w3c_note
    // Even though the browsers ignore this standard, we don't use `cssText` just in case.
    for (var _i = 0, _a = source.split(';'); _i < _a.length; _i++) {
        var property = _a[_i];
        var match = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(property);
        if (match) {
            var name_2 = match[1], value = match[2], priority = match[4];
            style.setProperty(name_2, value, priority || ''); // The last argument can't be undefined in IE11
        }
    }
}

// We use m or w because these two characters take up the maximum width.
// And we use a LLi so that the same matching fonts can get separated.
var testString = 'mmMwWLliI0O&1';
// We test using 48px font size, we may use any size. I guess larger the better.
var textSize = '48px';
// A font will be compared against all the three default fonts.
// And if for any default fonts it doesn't match, then that font is available.
var baseFonts = ['monospace', 'sans-serif', 'serif'];
var fontList = [
    // This is android-specific font from "Roboto" family
    'sans-serif-thin',
    'ARNO PRO',
    'Agency FB',
    'Arabic Typesetting',
    'Arial Unicode MS',
    'AvantGarde Bk BT',
    'BankGothic Md BT',
    'Batang',
    'Bitstream Vera Sans Mono',
    'Calibri',
    'Century',
    'Century Gothic',
    'Clarendon',
    'EUROSTILE',
    'Franklin Gothic',
    'Futura Bk BT',
    'Futura Md BT',
    'GOTHAM',
    'Gill Sans',
    'HELV',
    'Haettenschweiler',
    'Helvetica Neue',
    'Humanst521 BT',
    'Leelawadee',
    'Letter Gothic',
    'Levenim MT',
    'Lucida Bright',
    'Lucida Sans',
    'Menlo',
    'MS Mincho',
    'MS Outlook',
    'MS Reference Specialty',
    'MS UI Gothic',
    'MT Extra',
    'MYRIAD PRO',
    'Marlett',
    'Meiryo UI',
    'Microsoft Uighur',
    'Minion Pro',
    'Monotype Corsiva',
    'PMingLiU',
    'Pristina',
    'SCRIPTINA',
    'Segoe UI Light',
    'Serifa',
    'SimHei',
    'Small Fonts',
    'Staccato222 BT',
    'TRAJAN PRO',
    'Univers CE 55 Medium',
    'Vrinda',
    'ZWAdobeF',
];
// kudos to http://www.lalit.org/lab/javascript-css-font-detect/
function getFonts() {
    // Running the script in an iframe makes it not affect the page look and not be affected by the page CSS. See:
    // https://github.com/fingerprintjs/fingerprintjs/issues/592
    // https://github.com/fingerprintjs/fingerprintjs/issues/628
    return withIframe(function (_, _a) {
        var document = _a.document;
        var holder = document.body;
        holder.style.fontSize = textSize;
        // div to load spans for the default fonts and the fonts to detect
        var spansContainer = document.createElement('div');
        var defaultWidth = {};
        var defaultHeight = {};
        // creates a span where the fonts will be loaded
        var createSpan = function (fontFamily) {
            var span = document.createElement('span');
            var style = span.style;
            style.position = 'absolute';
            style.top = '0';
            style.left = '0';
            style.fontFamily = fontFamily;
            span.textContent = testString;
            spansContainer.appendChild(span);
            return span;
        };
        // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function (fontToDetect, baseFont) {
            return createSpan("'" + fontToDetect + "'," + baseFont);
        };
        // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function () {
            return baseFonts.map(createSpan);
        };
        // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function () {
            // Stores {fontName : [spans for that font]}
            var spans = {};
            var _loop_1 = function (font) {
                spans[font] = baseFonts.map(function (baseFont) { return createSpanWithFonts(font, baseFont); });
            };
            for (var _i = 0, fontList_1 = fontList; _i < fontList_1.length; _i++) {
                var font = fontList_1[_i];
                _loop_1(font);
            }
            return spans;
        };
        // checks if a font is available
        var isFontAvailable = function (fontSpans) {
            return baseFonts.some(function (baseFont, baseFontIndex) {
                return fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont] ||
                    fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont];
            });
        };
        // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans();
        // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans();
        // add all the spans to the DOM
        holder.appendChild(spansContainer);
        // get the default width for the three base fonts
        for (var index = 0; index < baseFonts.length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
        }
        // check available fonts
        return fontList.filter(function (font) { return isFontAvailable(fontsSpans[font]); });
    });
}

function getPlugins() {
    var rawPlugins = navigator.plugins;
    if (!rawPlugins) {
        return undefined;
    }
    var plugins = [];
    // Safari 10 doesn't support iterating navigator.plugins with for...of
    for (var i = 0; i < rawPlugins.length; ++i) {
        var plugin = rawPlugins[i];
        if (!plugin) {
            continue;
        }
        var mimeTypes = [];
        for (var j = 0; j < plugin.length; ++j) {
            var mimeType = plugin[j];
            mimeTypes.push({
                type: mimeType.type,
                suffixes: mimeType.suffixes,
            });
        }
        plugins.push({
            name: plugin.name,
            description: plugin.description,
            mimeTypes: mimeTypes,
        });
    }
    return plugins;
}

// https://www.browserleaks.com/canvas#how-does-it-work
function getCanvasFingerprint() {
    var winding = false;
    var geometry;
    var text;
    var _a = makeCanvasContext(), canvas = _a[0], context = _a[1];
    if (!isSupported(canvas, context)) {
        geometry = text = ''; // The value will be 'unsupported' in v3.4
    }
    else {
        winding = doesSupportWinding(context);
        renderTextImage(canvas, context);
        var textImage1 = canvasToString(canvas);
        var textImage2 = canvasToString(canvas); // It's slightly faster to double-encode the text image
        // Some browsers add a noise to the canvas: https://github.com/fingerprintjs/fingerprintjs/issues/791
        // The canvas is excluded from the fingerprint in this case
        if (textImage1 !== textImage2) {
            geometry = text = 'unstable';
        }
        else {
            text = textImage1;
            // Text is unstable:
            // https://github.com/fingerprintjs/fingerprintjs/issues/583
            // https://github.com/fingerprintjs/fingerprintjs/issues/103
            // Therefore it's extracted into a separate image.
            renderGeometryImage(canvas, context);
            geometry = canvasToString(canvas);
        }
    }
    return { winding: winding, geometry: geometry, text: text };
}
function makeCanvasContext() {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return [canvas, canvas.getContext('2d')];
}
function isSupported(canvas, context) {
    return !!(context && canvas.toDataURL);
}
function doesSupportWinding(context) {
    // https://web.archive.org/web/20170825024655/http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    context.rect(0, 0, 10, 10);
    context.rect(2, 2, 6, 6);
    return !context.isPointInPath(5, 5, 'evenodd');
}
function renderTextImage(canvas, context) {
    // Resizing the canvas cleans it
    canvas.width = 240;
    canvas.height = 60;
    context.textBaseline = 'alphabetic';
    context.fillStyle = '#f60';
    context.fillRect(100, 1, 62, 20);
    context.fillStyle = '#069';
    // It's important to use explicit built-in fonts in order to exclude the affect of font preferences
    // (there is a separate entropy source for them).
    context.font = '11pt "Times New Roman"';
    // The choice of emojis has a gigantic impact on rendering performance (especially in FF).
    // Some newer emojis cause it to slow down 50-200 times.
    // There must be no text to the right of the emoji, see https://github.com/fingerprintjs/fingerprintjs/issues/574
    // A bare emoji shouldn't be used because the canvas will change depending on the script encoding:
    // https://github.com/fingerprintjs/fingerprintjs/issues/66
    // Escape sequence shouldn't be used too because Terser will turn it into a bare unicode.
    var printedText = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835) /* 😃 */;
    context.fillText(printedText, 2, 15);
    context.fillStyle = 'rgba(102, 204, 0, 0.2)';
    context.font = '18pt Arial';
    context.fillText(printedText, 4, 45);
}
function renderGeometryImage(canvas, context) {
    // Resizing the canvas cleans it
    canvas.width = 122;
    canvas.height = 110;
    // Canvas blending
    // https://web.archive.org/web/20170826194121/http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    context.globalCompositeOperation = 'multiply';
    for (var _i = 0, _a = [
        ['#f2f', 40, 40],
        ['#2ff', 80, 40],
        ['#ff2', 60, 80],
    ]; _i < _a.length; _i++) {
        var _b = _a[_i], color = _b[0], x = _b[1], y = _b[2];
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, 40, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
    // Canvas winding
    // https://web.archive.org/web/20130913061632/http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    context.fillStyle = '#f9c';
    context.arc(60, 60, 60, 0, Math.PI * 2, true);
    context.arc(60, 60, 20, 0, Math.PI * 2, true);
    context.fill('evenodd');
}
function canvasToString(canvas) {
    return canvas.toDataURL();
}

/**
 * This is a crude and primitive touch screen detection. It's not possible to currently reliably detect the availability
 * of a touch screen with a JS, without actually subscribing to a touch event.
 *
 * @see http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
 * @see https://github.com/Modernizr/Modernizr/issues/548
 */
function getTouchSupport() {
    var n = navigator;
    var maxTouchPoints = 0;
    var touchEvent;
    if (n.maxTouchPoints !== undefined) {
        maxTouchPoints = toInt(n.maxTouchPoints);
    }
    else if (n.msMaxTouchPoints !== undefined) {
        maxTouchPoints = n.msMaxTouchPoints;
    }
    try {
        document.createEvent('TouchEvent');
        touchEvent = true;
    }
    catch (_a) {
        touchEvent = false;
    }
    var touchStart = 'ontouchstart' in window;
    return {
        maxTouchPoints: maxTouchPoints,
        touchEvent: touchEvent,
        touchStart: touchStart,
    };
}

function getOsCpu() {
    return navigator.oscpu;
}

function getLanguages() {
    var n = navigator;
    var result = [];
    var language = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
    if (language !== undefined) {
        result.push([language]);
    }
    if (Array.isArray(n.languages)) {
        // Starting from Chromium 86, there is only a single value in `navigator.language` in Incognito mode:
        // the value of `navigator.language`. Therefore the value is ignored in this browser.
        if (!(isChromium() && isChromium86OrNewer())) {
            result.push(n.languages);
        }
    }
    else if (typeof n.languages === 'string') {
        var languages = n.languages;
        if (languages) {
            result.push(languages.split(','));
        }
    }
    return result;
}

function getColorDepth() {
    return window.screen.colorDepth;
}

function getDeviceMemory() {
    // `navigator.deviceMemory` is a string containing a number in some unidentified cases
    return replaceNaN(toFloat(navigator.deviceMemory), undefined);
}

function getScreenResolution() {
    var s = screen;
    // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
    // Some browsers even return  screen resolution as not numbers.
    var parseDimension = function (value) { return replaceNaN(toInt(value), null); };
    var dimensions = [parseDimension(s.width), parseDimension(s.height)];
    dimensions.sort().reverse();
    return dimensions;
}

var screenFrameCheckInterval = 2500;
var roundingPrecision = 10;
// The type is readonly to protect from unwanted mutations
var screenFrameBackup;
var screenFrameSizeTimeoutId;
/**
 * Starts watching the screen frame size. When a non-zero size appears, the size is saved and the watch is stopped.
 * Later, when `getScreenFrame` runs, it will return the saved non-zero size if the current size is null.
 *
 * This trick is required to mitigate the fact that the screen frame turns null in some cases.
 * See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
 */
function watchScreenFrame() {
    if (screenFrameSizeTimeoutId !== undefined) {
        return;
    }
    var checkScreenFrame = function () {
        var frameSize = getCurrentScreenFrame();
        if (isFrameSizeNull(frameSize)) {
            screenFrameSizeTimeoutId = setTimeout(checkScreenFrame, screenFrameCheckInterval);
        }
        else {
            screenFrameBackup = frameSize;
            screenFrameSizeTimeoutId = undefined;
        }
    };
    checkScreenFrame();
}
function getScreenFrame() {
    var _this = this;
    watchScreenFrame();
    return function () {
        return __awaiter(_this, void 0, void 0, function () {
            var frameSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frameSize = getCurrentScreenFrame();
                        if (!isFrameSizeNull(frameSize)) return [3 /*break*/, 2];
                        if (screenFrameBackup) {
                            return [2 /*return*/, __spreadArrays(screenFrameBackup)];
                        }
                        if (!getFullscreenElement()) return [3 /*break*/, 2];
                        // Some browsers set the screen frame to zero when programmatic fullscreen is on.
                        // There is a chance of getting a non-zero frame after exiting the fullscreen.
                        // See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
                        return [4 /*yield*/, exitFullscreen()];
                    case 1:
                        // Some browsers set the screen frame to zero when programmatic fullscreen is on.
                        // There is a chance of getting a non-zero frame after exiting the fullscreen.
                        // See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
                        _a.sent();
                        frameSize = getCurrentScreenFrame();
                        _a.label = 2;
                    case 2:
                        if (!isFrameSizeNull(frameSize)) {
                            screenFrameBackup = frameSize;
                        }
                        return [2 /*return*/, frameSize];
                }
            });
        });
    };
}
/**
 * Sometimes the available screen resolution changes a bit, e.g. 1900x1440 → 1900x1439. A possible reason: macOS Dock
 * shrinks to fit more icons when there is too little space. The rounding is used to mitigate the difference.
 */
function getRoundedScreenFrame() {
    var _this = this;
    var screenFrameGetter = getScreenFrame();
    return function () {
        return __awaiter(_this, void 0, void 0, function () {
            var frameSize, processSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screenFrameGetter()];
                    case 1:
                        frameSize = _a.sent();
                        processSize = function (sideSize) { return (sideSize === null ? null : round(sideSize, roundingPrecision)); };
                        // It might look like I don't know about `for` and `map`.
                        // In fact, such code is used to avoid TypeScript issues without using `as`.
                        return [2 /*return*/, [processSize(frameSize[0]), processSize(frameSize[1]), processSize(frameSize[2]), processSize(frameSize[3])]];
                }
            });
        });
    };
}
function getCurrentScreenFrame() {
    var s = screen;
    // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
    //
    // Some browsers (IE, Edge ≤18) don't provide `screen.availLeft` and `screen.availTop`. The property values are
    // replaced with 0 in such cases to not lose the entropy from `screen.availWidth` and `screen.availHeight`.
    return [
        replaceNaN(toFloat(s.availTop), null),
        replaceNaN(toFloat(s.width) - toFloat(s.availWidth) - replaceNaN(toFloat(s.availLeft), 0), null),
        replaceNaN(toFloat(s.height) - toFloat(s.availHeight) - replaceNaN(toFloat(s.availTop), 0), null),
        replaceNaN(toFloat(s.availLeft), null),
    ];
}
function isFrameSizeNull(frameSize) {
    for (var i = 0; i < 4; ++i) {
        if (frameSize[i]) {
            return false;
        }
    }
    return true;
}

function getHardwareConcurrency() {
    // sometimes hardware concurrency is a string
    return replaceNaN(toInt(navigator.hardwareConcurrency), undefined);
}

function getTimezone() {
    var _a;
    var DateTimeFormat = (_a = window.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat;
    if (DateTimeFormat) {
        var timezone = new DateTimeFormat().resolvedOptions().timeZone;
        if (timezone) {
            return timezone;
        }
    }
    // For browsers that don't support timezone names
    // The minus is intentional because the JS offset is opposite to the real offset
    var offset = -getTimezoneOffset();
    return "UTC" + (offset >= 0 ? '+' : '') + Math.abs(offset);
}
function getTimezoneOffset() {
    var currentYear = new Date().getFullYear();
    // The timezone offset may change over time due to daylight saving time (DST) shifts.
    // The non-DST timezone offset is used as the result timezone offset.
    // Since the DST season differs in the northern and the southern hemispheres,
    // both January and July timezones offsets are considered.
    return Math.max(
        // `getTimezoneOffset` returns a number as a string in some unidentified cases
        toFloat(new Date(currentYear, 0, 1).getTimezoneOffset()), toFloat(new Date(currentYear, 6, 1).getTimezoneOffset()));
}

function getSessionStorage() {
    try {
        return !!window.sessionStorage;
    }
    catch (error) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

// https://bugzilla.mozilla.org/show_bug.cgi?id=781447
function getLocalStorage() {
    try {
        return !!window.localStorage;
    }
    catch (e) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

function getIndexedDB() {
    // IE and Edge don't allow accessing indexedDB in private mode, therefore IE and Edge will have different
    // visitor identifier in normal and private modes.
    if (isTrident() || isEdgeHTML()) {
        return undefined;
    }
    try {
        return !!window.indexedDB;
    }
    catch (e) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

function getOpenDatabase() {
    return !!window.openDatabase;
}

function getCpuClass() {
    return navigator.cpuClass;
}

function getPlatform() {
    // Android Chrome 86 and 87 and Android Firefox 80 and 84 don't mock the platform value when desktop mode is requested
    var platform = navigator.platform;
    // iOS mocks the platform value when desktop version is requested: https://github.com/fingerprintjs/fingerprintjs/issues/514
    // iPad uses desktop mode by default since iOS 13
    // The value is 'MacIntel' on M1 Macs
    // The value is 'iPhone' on iPod Touch
    if (platform === 'MacIntel') {
        if (isWebKit() && !isDesktopSafari()) {
            return isIPad() ? 'iPad' : 'iPhone';
        }
    }
    return platform;
}

function getVendor() {
    return navigator.vendor || '';
}

/**
 * Checks for browser-specific (not engine specific) global variables to tell browsers with the same engine apart.
 * Only somewhat popular browsers are considered.
 */
function getVendorFlavors() {
    var flavors = [];
    for (var _i = 0, _a = [
        // Blink and some browsers on iOS
        'chrome',
        // Safari on macOS
        'safari',
        // Chrome on iOS (checked in 85 on 13 and 87 on 14)
        '__crWeb',
        '__gCrWeb',
        // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
        'yandex',
        // Yandex Browser on iOS (checked in 21.2 on 14)
        '__yb',
        '__ybro',
        // Firefox on iOS (checked in 32 on 14)
        '__firefox__',
        // Edge on iOS (checked in 46 on 14)
        '__edgeTrackingPreventionStatistics',
        'webkit',
        // Opera Touch on iOS (checked in 2.6 on 14)
        'oprt',
        // Samsung Internet on Android (checked in 11.1)
        'samsungAr',
        // UC Browser on Android (checked in 12.10 and 13.0)
        'ucweb',
        'UCShellJava',
        // Puffin on Android (checked in 9.0)
        'puffinDevice',
    ]; _i < _a.length; _i++) {
        var key = _a[_i];
        var value = window[key];
        if (value && typeof value === 'object') {
            flavors.push(key);
        }
    }
    return flavors.sort();
}

/**
 * navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
 * cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past with
 * site-specific exceptions. Don't rely on it.
 *
 * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js Taken from here
 */
function areCookiesEnabled() {
    var d = document;
    // Taken from here: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js
    // navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
    // cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past
    // with site-specific exceptions. Don't rely on it.
    // try..catch because some in situations `document.cookie` is exposed but throws a
    // SecurityError if you try to access it; e.g. documents created from data URIs
    // or in sandboxed iframes (depending on flags/context)
    try {
        // Create cookie
        d.cookie = 'cookietest=1; SameSite=Strict;';
        var result = d.cookie.indexOf('cookietest=') !== -1;
        // Delete cookie
        d.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT';
        return result;
    }
    catch (e) {
        return false;
    }
}

/**
 * Only single element selector are supported (no operators like space, +, >, etc).
 * `embed` and `position: fixed;` will be considered as blocked anyway because it always has no offsetParent.
 * Avoid `iframe` and anything with `[src=]` because they produce excess HTTP requests.
 *
 * The "inappropriate" selectors are obfuscated. See https://github.com/fingerprintjs/fingerprintjs/issues/734.
 * A function is used instead of a plain object to help tree-shaking.
 *
 * The function code is generated automatically. See docs/content_blockers.md to learn how to make the list.
 */
function getFilters() {
    var fromB64 = atob; // Just for better minification
    return {
        abpIndo: [
            '#Iklan-Melayang',
            '#Kolom-Iklan-728',
            '#SidebarIklan-wrapper',
            fromB64('YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld'),
            '[title="ALIENBOLA" i]',
        ],
        abpvn: [
            '#quangcaomb',
            fromB64('Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ='),
            '.quangcao',
            fromB64('W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=='),
            fromB64('W2hyZWZePSJodHRwczovL3piZXQudm4vIl0='),
        ],
        adBlockFinland: [
            '.mainostila',
            fromB64('LnNwb25zb3JpdA=='),
            '.ylamainos',
            fromB64('YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd'),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd'),
        ],
        adBlockPersian: ['#navbar_notice_50', '.kadr', 'TABLE[width="140px"]', '#divAgahi', fromB64('I2FkMl9pbmxpbmU=')],
        adBlockWarningRemoval: [
            '#adblock-honeypot',
            '.adblocker-root',
            '.wp_adblock_detect',
            fromB64('LmhlYWRlci1ibG9ja2VkLWFk'),
            fromB64('I2FkX2Jsb2NrZXI='),
        ],
        adGuardAnnoyances: [
            'amp-embed[type="zen"]',
            '.hs-sosyal',
            '#cookieconsentdiv',
            'div[class^="app_gdpr"]',
            '.as-oil',
        ],
        adGuardBase: [
            '.BetterJsPopOverlay',
            fromB64('I2FkXzMwMFgyNTA='),
            fromB64('I2Jhbm5lcmZsb2F0MjI='),
            fromB64('I2FkLWJhbm5lcg=='),
            fromB64('I2NhbXBhaWduLWJhbm5lcg=='),
        ],
        adGuardChinese: [
            fromB64('LlppX2FkX2FfSA=='),
            fromB64('YVtocmVmKj0iL29kMDA1LmNvbSJd'),
            fromB64('YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd'),
            '.qq_nr_lad',
            '#widget-quan',
        ],
        adGuardFrench: [
            fromB64('I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr'),
            '#pavePub',
            fromB64('LmFkLWRlc2t0b3AtcmVjdGFuZ2xl'),
            '.mobile_adhesion',
            '.widgetadv',
        ],
        adGuardGerman: [
            fromB64('LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=='),
            fromB64('LmJveHN0YXJ0d2VyYnVuZw=='),
            fromB64('LndlcmJ1bmcz'),
            fromB64('YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0='),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0='),
        ],
        adGuardJapanese: [
            '#kauli_yad_1',
            fromB64('YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0='),
            fromB64('Ll9wb3BJbl9pbmZpbml0ZV9hZA=='),
            fromB64('LmFkZ29vZ2xl'),
            fromB64('LmFkX3JlZ3VsYXIz'),
        ],
        adGuardMobile: [
            fromB64('YW1wLWF1dG8tYWRz'),
            fromB64('LmFtcF9hZA=='),
            'amp-embed[type="24smi"]',
            '#mgid_iframe1',
            fromB64('I2FkX2ludmlld19hcmVh'),
        ],
        adGuardRussian: [
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0='),
            fromB64('LnJlY2xhbWE='),
            'div[id^="smi2adblock"]',
            fromB64('ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd'),
            fromB64('I2FkX3NxdWFyZQ=='),
        ],
        adGuardSocial: [
            fromB64('YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0='),
            fromB64('YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0='),
            '.etsy-tweet',
            '#inlineShare',
            '.popup-social',
        ],
        adGuardSpanishPortuguese: [
            '#barraPublicidade',
            '#Publicidade',
            '#publiEspecial',
            '#queTooltip',
            fromB64('W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0='),
        ],
        adGuardTrackingProtection: [
            '#qoo-counter',
            fromB64('YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=='),
            fromB64('YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0='),
            fromB64('YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=='),
            '#top100counter',
        ],
        adGuardTurkish: [
            '#backkapat',
            fromB64('I3Jla2xhbWk='),
            fromB64('YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0='),
            fromB64('YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd'),
            fromB64('YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ=='),
        ],
        bulgarian: [
            fromB64('dGQjZnJlZW5ldF90YWJsZV9hZHM='),
            '#ea_intext_div',
            '.lapni-pop-over',
            '#xenium_hot_offers',
            fromB64('I25ld0Fk'),
        ],
        easyList: [
            fromB64('I0FEX0NPTlRST0xfMjg='),
            fromB64('LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy'),
            '.universalboxADVBOX03',
            fromB64('LmFkdmVydGlzZW1lbnQtNzI4eDkw'),
            fromB64('LnNxdWFyZV9hZHM='),
        ],
        easyListChina: [
            fromB64('YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0='),
            fromB64('LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=='),
            fromB64('LmZyb250cGFnZUFkdk0='),
            '#taotaole',
            '#aafoot.top_box',
        ],
        easyListCookie: [
            '#AdaCompliance.app-notice',
            '.text-center.rgpd',
            '.panel--cookie',
            '.js-cookies-andromeda',
            '.elxtr-consent',
        ],
        easyListCzechSlovak: [
            '#onlajny-stickers',
            fromB64('I3Jla2xhbW5pLWJveA=='),
            fromB64('LnJla2xhbWEtbWVnYWJvYXJk'),
            '.sklik',
            fromB64('W2lkXj0ic2tsaWtSZWtsYW1hIl0='),
        ],
        easyListDutch: [
            fromB64('I2FkdmVydGVudGll'),
            fromB64('I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=='),
            '.adstekst',
            fromB64('YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0='),
            '#semilo-lrectangle',
        ],
        easyListGermany: [
            fromB64('I0FkX1dpbjJkYXk='),
            fromB64('I3dlcmJ1bmdzYm94MzAw'),
            fromB64('YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd'),
            fromB64('I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu'),
            fromB64('YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0='),
        ],
        easyListItaly: [
            fromB64('LmJveF9hZHZfYW5udW5jaQ=='),
            '.sb-box-pubbliredazionale',
            fromB64('YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd'),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd'),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=='),
        ],
        easyListLithuania: [
            fromB64('LnJla2xhbW9zX3RhcnBhcw=='),
            fromB64('LnJla2xhbW9zX251b3JvZG9z'),
            fromB64('aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd'),
            fromB64('aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd'),
            fromB64('aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd'),
        ],
        estonian: [fromB64('QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==')],
        fanboyAnnoyances: [
            '#feedback-tab',
            '#taboola-below-article',
            '.feedburnerFeedBlock',
            '.widget-feedburner-counter',
            '[title="Subscribe to our blog"]',
        ],
        fanboyAntiFacebook: ['.util-bar-module-firefly-visible'],
        fanboyEnhancedTrackers: [
            '.open.pushModal',
            '#issuem-leaky-paywall-articles-zero-remaining-nag',
            '#sovrn_container',
            'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
            '.BlockNag__Card',
        ],
        fanboySocial: [
            '.td-tags-and-social-wrapper-box',
            '.twitterContainer',
            '.youtube-social',
            'a[title^="Like us on Facebook"]',
            'img[alt^="Share on Digg"]',
        ],
        frellwitSwedish: [
            fromB64('YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=='),
            fromB64('YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=='),
            'article.category-samarbete',
            fromB64('ZGl2LmhvbGlkQWRz'),
            'ul.adsmodern',
        ],
        greekAdBlock: [
            fromB64('QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd'),
            fromB64('QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=='),
            fromB64('QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd'),
            'DIV.agores300',
            'TABLE.advright',
        ],
        hungarian: [
            '#cemp_doboz',
            '.optimonk-iframe-container',
            fromB64('LmFkX19tYWlu'),
            fromB64('W2NsYXNzKj0iR29vZ2xlQWRzIl0='),
            '#hirdetesek_box',
        ],
        iDontCareAboutCookies: [
            '.alert-info[data-block-track*="CookieNotice"]',
            '.ModuleTemplateCookieIndicator',
            '.o--cookies--container',
            '.cookie-msg-info-container',
            '#cookies-policy-sticky',
        ],
        icelandicAbp: [fromB64('QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==')],
        latvian: [
            fromB64('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0O' +
                'iA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0='),
            fromB64('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6I' +
                'DMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=='),
        ],
        listKr: [
            fromB64('YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0='),
            fromB64('I2xpdmVyZUFkV3JhcHBlcg=='),
            fromB64('YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=='),
            fromB64('aW5zLmZhc3R2aWV3LWFk'),
            '.revenue_unit_item.dable',
        ],
        listeAr: [
            fromB64('LmdlbWluaUxCMUFk'),
            '.right-and-left-sponsers',
            fromB64('YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=='),
            fromB64('YVtocmVmKj0iYm9vcmFxLm9yZyJd'),
            fromB64('YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd'),
        ],
        listeFr: [
            fromB64('YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=='),
            fromB64('I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=='),
            fromB64('YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0='),
            '.site-pub-interstitiel',
            'div[id^="crt-"][data-criteo-id]',
        ],
        officialPolish: [
            '#ceneo-placeholder-ceneo-12',
            fromB64('W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd'),
            fromB64('YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=='),
            fromB64('YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=='),
            fromB64('ZGl2I3NrYXBpZWNfYWQ='),
        ],
        ro: [
            fromB64('YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd'),
            'a[href^="/magazin/"]',
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd'),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0='),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd'),
        ],
        ruAd: [
            fromB64('YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd'),
            fromB64('YVtocmVmKj0iLy91dGltZy5ydS8iXQ=='),
            fromB64('YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0='),
            '#pgeldiz',
            '.yandex-rtb-block',
        ],
        thaiAds: [
            'a[href*=macau-uta-popup]',
            fromB64('I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=='),
            fromB64('LmFkczMwMHM='),
            '.bumq',
            '.img-kosana',
        ],
        webAnnoyancesUltralist: [
            '#mod-social-share-2',
            '#social-tools',
            fromB64('LmN0cGwtZnVsbGJhbm5lcg=='),
            '.zergnet-recommend',
            '.yt.btn-link.btn-md.btn',
        ],
    };
}
/**
 * The order of the returned array means nothing (it's always sorted alphabetically).
 *
 * Notice that the source is slightly unstable.
 * Safari provides a 2-taps way to disable all content blockers on a page temporarily.
 * Also content blockers can be disabled permanently for a domain, but it requires 4 taps.
 * So empty array shouldn't be treated as "no blockers", it should be treated as "no signal".
 * If you are a website owner, don't make your visitors want to disable content blockers.
 */
function getDomBlockers(_a) {
    var debug = (_a === void 0 ? {} : _a).debug;
    return __awaiter(this, void 0, void 0, function () {
        var filters, filterNames, allSelectors, blockedSelectors, activeBlockers;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!isApplicable()) {
                        return [2 /*return*/, undefined];
                    }
                    filters = getFilters();
                    filterNames = Object.keys(filters);
                    allSelectors = (_b = []).concat.apply(_b, filterNames.map(function (filterName) { return filters[filterName]; }));
                    return [4 /*yield*/, getBlockedSelectors(allSelectors)];
                case 1:
                    blockedSelectors = _c.sent();
                    if (debug) {
                        printDebug(filters, blockedSelectors);
                    }
                    activeBlockers = filterNames.filter(function (filterName) {
                        var selectors = filters[filterName];
                        var blockedCount = countTruthy(selectors.map(function (selector) { return blockedSelectors[selector]; }));
                        return blockedCount > selectors.length * 0.6;
                    });
                    activeBlockers.sort();
                    return [2 /*return*/, activeBlockers];
            }
        });
    });
}
function isApplicable() {
    // Safari (desktop and mobile) and all Android browsers keep content blockers in both regular and private mode
    return isWebKit() || isAndroid();
}
function getBlockedSelectors(selectors) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var d, root, elements, blockedSelectors, i, element, holder, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    d = document;
                    root = d.createElement('div');
                    elements = new Array(selectors.length);
                    blockedSelectors = {} // Set() isn't used just in case somebody need older browser support
                        ;
                    forceShow(root);
                    // First create all elements that can be blocked. If the DOM steps below are done in a single cycle,
                    // browser will alternate tree modification and layout reading, that is very slow.
                    for (i = 0; i < selectors.length; ++i) {
                        element = selectorToElement(selectors[i]);
                        holder = d.createElement('div') // Protects from unwanted effects of `+` and `~` selectors of filters
                            ;
                        forceShow(holder);
                        holder.appendChild(element);
                        root.appendChild(holder);
                        elements[i] = element;
                    }
                    _b.label = 1;
                case 1:
                    if (!!d.body) return [3 /*break*/, 3];
                    return [4 /*yield*/, wait(50)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 1];
                case 3:
                    d.body.appendChild(root);
                    try {
                        // Then check which of the elements are blocked
                        for (i = 0; i < selectors.length; ++i) {
                            if (!elements[i].offsetParent) {
                                blockedSelectors[selectors[i]] = true;
                            }
                        }
                    }
                    finally {
                        // Then remove the elements
                        (_a = root.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(root);
                    }
                    return [2 /*return*/, blockedSelectors];
            }
        });
    });
}
function forceShow(element) {
    element.style.setProperty('display', 'block', 'important');
}
function printDebug(filters, blockedSelectors) {
    var message = 'DOM blockers debug:\n```';
    for (var _i = 0, _a = Object.keys(filters); _i < _a.length; _i++) {
        var filterName = _a[_i];
        message += "\n" + filterName + ":";
        for (var _b = 0, _c = filters[filterName]; _b < _c.length; _b++) {
            var selector = _c[_b];
            message += "\n  " + (blockedSelectors[selector] ? '🚫' : '➡️') + " " + selector;
        }
    }
    // console.log is ok here because it's under a debug clause
    // eslint-disable-next-line no-console
    console.log(message + "\n```");
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut
 */
function getColorGamut() {
    // rec2020 includes p3 and p3 includes srgb
    for (var _i = 0, _a = ['rec2020', 'p3', 'srgb']; _i < _a.length; _i++) {
        var gamut = _a[_i];
        if (matchMedia("(color-gamut: " + gamut + ")").matches) {
            return gamut;
        }
    }
    return undefined;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors
 */
function areColorsInverted() {
    if (doesMatch$4('inverted')) {
        return true;
    }
    if (doesMatch$4('none')) {
        return false;
    }
    return undefined;
}
function doesMatch$4(value) {
    return matchMedia("(inverted-colors: " + value + ")").matches;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors
 */
function areColorsForced() {
    if (doesMatch$3('active')) {
        return true;
    }
    if (doesMatch$3('none')) {
        return false;
    }
    return undefined;
}
function doesMatch$3(value) {
    return matchMedia("(forced-colors: " + value + ")").matches;
}

var maxValueToCheck = 100;
/**
 * If the display is monochrome (e.g. black&white), the value will be ≥0 and will mean the number of bits per pixel.
 * If the display is not monochrome, the returned value will be 0.
 * If the browser doesn't support this feature, the returned value will be undefined.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome
 */
function getMonochromeDepth() {
    if (!matchMedia('(min-monochrome: 0)').matches) {
        // The media feature isn't supported by the browser
        return undefined;
    }
    // A variation of binary search algorithm can be used here.
    // But since expected values are very small (≤10), there is no sense in adding the complexity.
    for (var i = 0; i <= maxValueToCheck; ++i) {
        if (matchMedia("(max-monochrome: " + i + ")").matches) {
            return i;
        }
    }
    throw new Error('Too high value');
}

/**
 * @see https://www.w3.org/TR/mediaqueries-5/#prefers-contrast
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 */
function getContrastPreference() {
    if (doesMatch$2('no-preference')) {
        return 0 /* None */;
    }
    // The sources contradict on the keywords. Probably 'high' and 'low' will never be implemented.
    // Need to check it when all browsers implement the feature.
    if (doesMatch$2('high') || doesMatch$2('more')) {
        return 1 /* More */;
    }
    if (doesMatch$2('low') || doesMatch$2('less')) {
        return -1 /* Less */;
    }
    if (doesMatch$2('forced')) {
        return 10 /* ForcedColors */;
    }
    return undefined;
}
function doesMatch$2(value) {
    return matchMedia("(prefers-contrast: " + value + ")").matches;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
function isMotionReduced() {
    if (doesMatch$1('reduce')) {
        return true;
    }
    if (doesMatch$1('no-preference')) {
        return false;
    }
    return undefined;
}
function doesMatch$1(value) {
    return matchMedia("(prefers-reduced-motion: " + value + ")").matches;
}

/**
 * @see https://www.w3.org/TR/mediaqueries-5/#dynamic-range
 */
function isHDR() {
    if (doesMatch('high')) {
        return true;
    }
    if (doesMatch('standard')) {
        return false;
    }
    return undefined;
}
function doesMatch(value) {
    return matchMedia("(dynamic-range: " + value + ")").matches;
}

var M = Math; // To reduce the minified code size
var fallbackFn = function () { return 0; };
/**
 * @see https://gitlab.torproject.org/legacy/trac/-/issues/13018
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=531915
 */
function getMathFingerprint() {
    // Native operations
    var acos = M.acos || fallbackFn;
    var acosh = M.acosh || fallbackFn;
    var asin = M.asin || fallbackFn;
    var asinh = M.asinh || fallbackFn;
    var atanh = M.atanh || fallbackFn;
    var atan = M.atan || fallbackFn;
    var sin = M.sin || fallbackFn;
    var sinh = M.sinh || fallbackFn;
    var cos = M.cos || fallbackFn;
    var cosh = M.cosh || fallbackFn;
    var tan = M.tan || fallbackFn;
    var tanh = M.tanh || fallbackFn;
    var exp = M.exp || fallbackFn;
    var expm1 = M.expm1 || fallbackFn;
    var log1p = M.log1p || fallbackFn;
    // Operation polyfills
    var powPI = function (value) { return M.pow(M.PI, value); };
    var acoshPf = function (value) { return M.log(value + M.sqrt(value * value - 1)); };
    var asinhPf = function (value) { return M.log(value + M.sqrt(value * value + 1)); };
    var atanhPf = function (value) { return M.log((1 + value) / (1 - value)) / 2; };
    var sinhPf = function (value) { return M.exp(value) - 1 / M.exp(value) / 2; };
    var coshPf = function (value) { return (M.exp(value) + 1 / M.exp(value)) / 2; };
    var expm1Pf = function (value) { return M.exp(value) - 1; };
    var tanhPf = function (value) { return (M.exp(2 * value) - 1) / (M.exp(2 * value) + 1); };
    var log1pPf = function (value) { return M.log(1 + value); };
    // Note: constant values are empirical
    return {
        acos: acos(0.123124234234234242),
        acosh: acosh(1e308),
        acoshPf: acoshPf(1e154),
        asin: asin(0.123124234234234242),
        asinh: asinh(1),
        asinhPf: asinhPf(1),
        atanh: atanh(0.5),
        atanhPf: atanhPf(0.5),
        atan: atan(0.5),
        sin: sin(-1e300),
        sinh: sinh(1),
        sinhPf: sinhPf(1),
        cos: cos(10.000000000123),
        cosh: cosh(1),
        coshPf: coshPf(1),
        tan: tan(-1e300),
        tanh: tanh(1),
        tanhPf: tanhPf(1),
        exp: exp(1),
        expm1: expm1(1),
        expm1Pf: expm1Pf(1),
        log1p: log1p(10),
        log1pPf: log1pPf(10),
        powPI: powPI(-100),
    };
}

/**
 * We use m or w because these two characters take up the maximum width.
 * Also there are a couple of ligatures.
 */
var defaultText = 'mmMwWLliI0fiflO&1';
/**
 * Settings of text blocks to measure. The keys are random but persistent words.
 */
var presets = {
    /**
     * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
     * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
     */
    default: [],
    /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
    apple: [{ font: '-apple-system-body' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    serif: [{ fontFamily: 'serif' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    sans: [{ fontFamily: 'sans-serif' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    mono: [{ fontFamily: 'monospace' }],
    /**
     * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
     * The height can be 0 in Chrome on a retina display.
     */
    min: [{ fontSize: '1px' }],
    /** Tells one OS from another in desktop Chrome. */
    system: [{ fontFamily: 'system-ui' }],
};
/**
 * The result is a dictionary of the width of the text samples.
 * Heights aren't included because they give no extra entropy and are unstable.
 *
 * The result is very stable in IE 11, Edge 18 and Safari 14.
 * The result changes when the OS pixel density changes in Chromium 87. The real pixel density is required to solve,
 * but seems like it's impossible: https://stackoverflow.com/q/1713771/1118709.
 * The "min" and the "mono" (only on Windows) value may change when the page is zoomed in Firefox 87.
 */
function getFontPreferences() {
    return withNaturalFonts(function (document, container) {
        var elements = {};
        var sizes = {};
        // First create all elements to measure. If the DOM steps below are done in a single cycle,
        // browser will alternate tree modification and layout reading, that is very slow.
        for (var _i = 0, _a = Object.keys(presets); _i < _a.length; _i++) {
            var key = _a[_i];
            var _b = presets[key], _c = _b[0], style = _c === void 0 ? {} : _c, _d = _b[1], text = _d === void 0 ? defaultText : _d;
            var element = document.createElement('span');
            element.textContent = text;
            element.style.whiteSpace = 'nowrap';
            for (var _e = 0, _f = Object.keys(style); _e < _f.length; _e++) {
                var name_1 = _f[_e];
                var value = style[name_1];
                if (value !== undefined) {
                    element.style[name_1] = value;
                }
            }
            elements[key] = element;
            container.appendChild(document.createElement('br'));
            container.appendChild(element);
        }
        // Then measure the created elements
        for (var _g = 0, _h = Object.keys(presets); _g < _h.length; _g++) {
            var key = _h[_g];
            sizes[key] = elements[key].getBoundingClientRect().width;
        }
        return sizes;
    });
}
/**
 * Creates a DOM environment that provides the most natural font available, including Android OS font.
 * Measurements of the elements are zoom-independent.
 * Don't put a content to measure inside an absolutely positioned element.
 */
function withNaturalFonts(action, containerWidthPx) {
    if (containerWidthPx === void 0) { containerWidthPx = 4000; }
    /*
     * Requirements for Android Chrome to apply the system font size to a text inside an iframe:
     * - The iframe mustn't have a `display: none;` style;
     * - The text mustn't be positioned absolutely;
     * - The text block must be wide enough.
     *   2560px on some devices in portrait orientation for the biggest font size option (32px);
     * - There must be much enough text to form a few lines (I don't know the exact numbers);
     * - The text must have the `text-size-adjust: none` style. Otherwise the text will scale in "Desktop site" mode;
     *
     * Requirements for Android Firefox to apply the system font size to a text inside an iframe:
     * - The iframe document must have a header: `<meta name="viewport" content="width=device-width, initial-scale=1" />`.
     *   The only way to set it is to use the `srcdoc` attribute of the iframe;
     * - The iframe content must get loaded before adding extra content with JavaScript;
     *
     * https://example.com as the iframe target always inherits Android font settings so it can be used as a reference.
     *
     * Observations on how page zoom affects the measurements:
     * - macOS Safari 11.1, 12.1, 13.1, 14.0: zoom reset + offsetWidth = 100% reliable;
     * - macOS Safari 11.1, 12.1, 13.1, 14.0: zoom reset + getBoundingClientRect = 100% reliable;
     * - macOS Safari 14.0: offsetWidth = 5% fluctuation;
     * - macOS Safari 14.0: getBoundingClientRect = 5% fluctuation;
     * - iOS Safari 9, 10, 11.0, 12.0: haven't found a way to zoom a page (pinch doesn't change layout);
     * - iOS Safari 13.1, 14.0: zoom reset + offsetWidth = 100% reliable;
     * - iOS Safari 13.1, 14.0: zoom reset + getBoundingClientRect = 100% reliable;
     * - iOS Safari 14.0: offsetWidth = 100% reliable;
     * - iOS Safari 14.0: getBoundingClientRect = 100% reliable;
     * - Chrome 42, 65, 80, 87: zoom 1/devicePixelRatio + offsetWidth = 1px fluctuation;
     * - Chrome 42, 65, 80, 87: zoom 1/devicePixelRatio + getBoundingClientRect = 100% reliable;
     * - Chrome 87: offsetWidth = 1px fluctuation;
     * - Chrome 87: getBoundingClientRect = 0.7px fluctuation;
     * - Firefox 48, 51: offsetWidth = 10% fluctuation;
     * - Firefox 48, 51: getBoundingClientRect = 10% fluctuation;
     * - Firefox 52, 53, 57, 62, 66, 67, 68, 71, 75, 80, 84: offsetWidth = width 100% reliable, height 10% fluctuation;
     * - Firefox 52, 53, 57, 62, 66, 67, 68, 71, 75, 80, 84: getBoundingClientRect = width 100% reliable, height 10%
     *   fluctuation;
     * - Android Chrome 86: haven't found a way to zoom a page (pinch doesn't change layout);
     * - Android Firefox 84: font size in accessibility settings changes all the CSS sizes, but offsetWidth and
     *   getBoundingClientRect keep measuring with regular units, so the size reflects the font size setting and doesn't
     *   fluctuate;
     * - IE 11, Edge 18: zoom 1/devicePixelRatio + offsetWidth = 100% reliable;
     * - IE 11, Edge 18: zoom 1/devicePixelRatio + getBoundingClientRect = reflects the zoom level;
     * - IE 11, Edge 18: offsetWidth = 100% reliable;
     * - IE 11, Edge 18: getBoundingClientRect = 100% reliable;
     */
    return withIframe(function (_, iframeWindow) {
        var iframeDocument = iframeWindow.document;
        var iframeBody = iframeDocument.body;
        var bodyStyle = iframeBody.style;
        bodyStyle.width = containerWidthPx + "px";
        bodyStyle.webkitTextSizeAdjust = bodyStyle.textSizeAdjust = 'none';
        // See the big comment above
        if (isChromium()) {
            iframeBody.style.zoom = "" + 1 / iframeWindow.devicePixelRatio;
        }
        else if (isWebKit()) {
            iframeBody.style.zoom = 'reset';
        }
        // See the big comment above
        var linesOfText = iframeDocument.createElement('div');
        linesOfText.textContent = __spreadArrays(Array((containerWidthPx / 20) << 0)).map(function () { return 'word'; }).join(' ');
        iframeBody.appendChild(linesOfText);
        return action(iframeDocument, iframeBody);
    }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}

/**
 * The list of entropy sources used to make visitor identifiers.
 *
 * This value isn't restricted by Semantic Versioning, i.e. it may be changed without bumping minor or major version of
 * this package.
 *
 * Note: Rollup and Webpack are smart enough to remove unused properties of this object during tree-shaking, so there is
 * no need to export the sources individually.
 */
var sources = {
    // READ FIRST:
    // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
    // to learn how entropy source works and how to make your own.
    // The sources run in this exact order.
    // The asynchronous sources are at the start to run in parallel with other sources.
    fonts: getFonts,
    domBlockers: getDomBlockers,
    fontPreferences: getFontPreferences,
    audio: getAudioFingerprint,
    screenFrame: getRoundedScreenFrame,
    osCpu: getOsCpu,
    languages: getLanguages,
    colorDepth: getColorDepth,
    deviceMemory: getDeviceMemory,
    screenResolution: getScreenResolution,
    hardwareConcurrency: getHardwareConcurrency,
    timezone: getTimezone,
    sessionStorage: getSessionStorage,
    localStorage: getLocalStorage,
    indexedDB: getIndexedDB,
    openDatabase: getOpenDatabase,
    cpuClass: getCpuClass,
    platform: getPlatform,
    plugins: getPlugins,
    canvas: getCanvasFingerprint,
    touchSupport: getTouchSupport,
    vendor: getVendor,
    vendorFlavors: getVendorFlavors,
    cookiesEnabled: areCookiesEnabled,
    colorGamut: getColorGamut,
    invertedColors: areColorsInverted,
    forcedColors: areColorsForced,
    monochrome: getMonochromeDepth,
    contrast: getContrastPreference,
    reducedMotion: isMotionReduced,
    hdr: isHDR,
    math: getMathFingerprint,
};
/**
 * Loads the built-in entropy sources.
 * Returns a function that collects the entropy components to make the visitor identifier.
 */
function loadBuiltinSources(options) {
    return loadSources(sources, options, []);
}

var commentTemplate = '$ if upgrade to Pro: https://fpjs.dev/pro';
function getConfidence(components) {
    var openConfidenceScore = getOpenConfidenceScore(components);
    var proConfidenceScore = deriveProConfidenceScore(openConfidenceScore);
    return { score: openConfidenceScore, comment: commentTemplate.replace(/\$/g, "" + proConfidenceScore) };
}
function getOpenConfidenceScore(components) {
    // In order to calculate the true probability of the visitor identifier being correct, we need to know the number of
    // website visitors (the higher the number, the less the probability because the fingerprint entropy is limited).
    // JS agent doesn't know the number of visitors, so we can only do an approximate assessment.
    if (isAndroid()) {
        return 0.4;
    }
    // Safari (mobile and desktop)
    if (isWebKit()) {
        return isDesktopSafari() ? 0.5 : 0.3;
    }
    var platform = components.platform.value || '';
    // Windows
    if (/^Win/.test(platform)) {
        // The score is greater than on macOS because of the higher variety of devices running Windows.
        // Chrome provides more entropy than Firefox according too
        // https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22platform%22%3A%7B%22%24in%22%3A%5B%22Windows%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
        // So we assign the same score to them.
        return 0.6;
    }
    // macOS
    if (/^Mac/.test(platform)) {
        // Chrome provides more entropy than Safari and Safari provides more entropy than Firefox.
        // Chrome is more popular than Safari and Safari is more popular than Firefox according to
        // https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22platform%22%3A%7B%22%24in%22%3A%5B%22Mac%20OS%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
        // So we assign the same score to them.
        return 0.5;
    }
    // Another platform, e.g. a desktop Linux. It's rare, so it should be pretty unique.
    return 0.7;
}
function deriveProConfidenceScore(openConfidenceScore) {
    return round(0.99 + 0.01 * openConfidenceScore, 0.0001);
}

function componentsToCanonicalString(components) {
    var result = '';
    for (var _i = 0, _a = Object.keys(components).sort(); _i < _a.length; _i++) {
        var componentKey = _a[_i];
        var component = components[componentKey];
        var value = component.error ? 'error' : JSON.stringify(component.value);
        result += "" + (result ? '|' : '') + componentKey.replace(/([:|\\])/g, '\\$1') + ":" + value;
    }
    return result;
}
function componentsToDebugString(components) {
    return JSON.stringify(components, function (_key, value) {
        if (value instanceof Error) {
            return errorToObject(value);
        }
        return value;
    }, 2);
}
function hashComponents(components) {
    return x64hash128(componentsToCanonicalString(components));
}
/**
 * Makes a GetResult implementation that calculates the visitor id hash on demand.
 * Designed for optimisation.
 */
function makeLazyGetResult(components) {
    var visitorIdCache;
    // This function runs very fast, so there is no need to make it lazy
    var confidence = getConfidence(components);
    // A plain class isn't used because its getters and setters aren't enumerable.
    return {
        get visitorId() {
            if (visitorIdCache === undefined) {
                visitorIdCache = hashComponents(this.components);
            }
            return visitorIdCache;
        },
        set visitorId(visitorId) {
            visitorIdCache = visitorId;
        },
        confidence: confidence,
        components: components,
        version: version,
    };
}
/**
 * A delay is required to ensure consistent entropy components.
 * See https://github.com/fingerprintjs/fingerprintjs/issues/254
 * and https://github.com/fingerprintjs/fingerprintjs/issues/307
 * and https://github.com/fingerprintjs/fingerprintjs/commit/945633e7c5f67ae38eb0fea37349712f0e669b18
 */
function prepareForSources(delayFallback) {
    if (delayFallback === void 0) { delayFallback = 50; }
    // A proper deadline is unknown. Let it be twice the fallback timeout so that both cases have the same average time.
    return requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2);
}
/**
 * The function isn't exported from the index file to not allow to call it without `load()`.
 * The hiding gives more freedom for future non-breaking updates.
 *
 * A factory function is used instead of a class to shorten the attribute names in the minified code.
 * Native private class fields could've been used, but TypeScript doesn't allow them with `"target": "es5"`.
 */
function makeAgent(getComponents, debug) {
    var creationTime = Date.now();
    return {
        get: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var startTime, components, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            startTime = Date.now();
                            return [4 /*yield*/, getComponents()];
                        case 1:
                            components = _a.sent();
                            result = makeLazyGetResult(components);
                            if (debug || (options === null || options === void 0 ? void 0 : options.debug)) {
                                // console.log is ok here because it's under a debug clause
                                // eslint-disable-next-line no-console
                                console.log("Copy the text below to get the debug data:\n\n```\nversion: " + result.version + "\nuserAgent: " + navigator.userAgent + "\ntimeBetweenLoadAndGet: " + (startTime - creationTime) + "\nvisitorId: " + result.visitorId + "\ncomponents: " + componentsToDebugString(components) + "\n```");
                            }
                            return [2 /*return*/, result];
                    }
                });
            });
        },
    };
}
/**
 * Sends an unpersonalized AJAX request to collect installation statistics
 */
function monitor() {
    // The FingerprintJS CDN (https://github.com/fingerprintjs/cdn) replaces `window.__fpjs_d_m` with `true`
    if (window.__fpjs_d_m || Math.random() >= 0.001) {
        return;
    }
    try {
        var request = new XMLHttpRequest();
        request.open('get', "https://m1.openfpcdn.io/fingerprintjs/v" + version + "/npm-monitoring", true);
        request.send();
    }
    catch (error) {
        // console.error is ok here because it's an unexpected error handler
        // eslint-disable-next-line no-console
        console.error(error);
    }
}
/**
 * Builds an instance of Agent and waits a delay required for a proper operation.
 */
function load(_a) {
    var _b = _a === void 0 ? {} : _a, delayFallback = _b.delayFallback, debug = _b.debug, _c = _b.monitoring, monitoring = _c === void 0 ? true : _c;
    return __awaiter(this, void 0, void 0, function () {
        var getComponents;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (monitoring) {
                        monitor();
                    }
                    return [4 /*yield*/, prepareForSources(delayFallback)];
                case 1:
                    _d.sent();
                    getComponents = loadBuiltinSources({ debug: debug });
                    return [2 /*return*/, makeAgent(getComponents, debug)];
            }
        });
    });
}

// The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
// It should contain all the public exported values.
var index = { load: load, hashComponents: hashComponents, componentsToDebugString: componentsToDebugString };
// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
var murmurX64Hash128 = x64hash128;

// export { componentsToDebugString, index as default, getFullscreenElement, getScreenFrame, hashComponents, isAndroid, isChromium, isDesktopSafari, isEdgeHTML, isGecko, isTrident, isWebKit, load, loadSources, murmurX64Hash128, prepareForSources, sources, transformSource };

let currentFingerprint = null;
const getFingerprint = async () => {
    // eslint-disable-next-line import/no-named-as-default-member
    const fpPromise = load()
    const fp = await fpPromise
    const { visitorId, confidence, components } = await fp.get()

    const detail = Object.keys(components).reduce((acc, key) => {
        if (key !== 'canvas') {
            acc[key] = components[key].value
        }
        return acc
    }, {})

    detail['confidence'] = confidence.score

    return {
        vid: visitorId,
        detail: btoa(JSON.stringify(detail)),
    }
}
getFingerprint().then(fingerprint => currentFingerprint = fingerprint)
