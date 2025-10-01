/*! For license information please see offscreen.js.LICENSE.txt */
(() => {
    var t = {
            579: (t, e, r) => {
                var n = r(3738).default;
                (t.exports = function (t) {
                    if (null != t) {
                        var e = t[("function" == typeof Symbol && Symbol.iterator) || "@@iterator"],
                            r = 0;
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length))
                            return {
                                next: function () {
                                    return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
                                },
                            };
                    }
                    throw new TypeError(n(t) + " is not iterable");
                }),
                    (t.exports.__esModule = !0),
                    (t.exports.default = t.exports);
            },
            887: (t, e, r) => {
                var n = r(6993),
                    o = r(1791);
                (t.exports = function (t, e, r, u, i) {
                    return new o(n().w(t, e, r, u), i || Promise);
                }),
                    (t.exports.__esModule = !0),
                    (t.exports.default = t.exports);
            },
            1791: (t, e, r) => {
                var n = r(5172),
                    o = r(5546);
                (t.exports = function t(e, r) {
                    function u(t, o, i, s) {
                        try {
                            var a = e[t](o),
                                c = a.value;
                            return c instanceof n
                                ? r.resolve(c.v).then(
                                      function (t) {
                                          u("next", t, i, s);
                                      },
                                      function (t) {
                                          u("throw", t, i, s);
                                      }
                                  )
                                : r.resolve(c).then(
                                      function (t) {
                                          (a.value = t), i(a);
                                      },
                                      function (t) {
                                          return u("throw", t, i, s);
                                      }
                                  );
                        } catch (t) {
                            s(t);
                        }
                    }
                    var i;
                    this.next ||
                        (o(t.prototype),
                        o(t.prototype, ("function" == typeof Symbol && Symbol.asyncIterator) || "@asyncIterator", function () {
                            return this;
                        })),
                        o(
                            this,
                            "_invoke",
                            function (t, e, n) {
                                function o() {
                                    return new r(function (e, r) {
                                        u(t, n, e, r);
                                    });
                                }
                                return (i = i ? i.then(o, o) : o());
                            },
                            !0
                        );
                }),
                    (t.exports.__esModule = !0),
                    (t.exports.default = t.exports);
            },
            3738: (t) => {
                function e(r) {
                    return (
                        (t.exports = e =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports),
                        e(r)
                    );
                }
                (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
            },
            4373: (t) => {
                (t.exports = function (t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.unshift(n);
                    return function t() {
                        for (; r.length; ) if ((n = r.pop()) in e) return (t.value = n), (t.done = !1), t;
                        return (t.done = !0), t;
                    };
                }),
                    (t.exports.__esModule = !0),
                    (t.exports.default = t.exports);
            },
            4633: (t, e, r) => {
                var n = r(5172),
                    o = r(6993),
                    u = r(5869),
                    i = r(887),
                    s = r(1791),
                    a = r(4373),
                    c = r(579);
                function f() {
                    "use strict";
                    var e = o(),
                        r = e.m(f),
                        p = (Object.getPrototypeOf ? Object.getPrototypeOf(r) : r.__proto__).constructor;
                    function l(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name));
                    }
                    var x = { throw: 1, return: 2, break: 3, continue: 3 };
                    function y(t) {
                        var e, r;
                        return function (n) {
                            e ||
                                ((e = {
                                    stop: function () {
                                        return r(n.a, 2);
                                    },
                                    catch: function () {
                                        return n.v;
                                    },
                                    abrupt: function (t, e) {
                                        return r(n.a, x[t], e);
                                    },
                                    delegateYield: function (t, o, u) {
                                        return (e.resultName = o), r(n.d, c(t), u);
                                    },
                                    finish: function (t) {
                                        return r(n.f, t);
                                    },
                                }),
                                (r = function (t, r, o) {
                                    (n.p = e.prev), (n.n = e.next);
                                    try {
                                        return t(r, o);
                                    } finally {
                                        e.next = n.n;
                                    }
                                })),
                                e.resultName && ((e[e.resultName] = n.v), (e.resultName = void 0)),
                                (e.sent = n.v),
                                (e.next = n.n);
                            try {
                                return t.call(this, e);
                            } finally {
                                (n.p = e.prev), (n.n = e.next);
                            }
                        };
                    }
                    return ((t.exports = f = function () {
                        return {
                            wrap: function (t, r, n, o) {
                                return e.w(y(t), r, n, o && o.reverse());
                            },
                            isGeneratorFunction: l,
                            mark: e.m,
                            awrap: function (t, e) {
                                return new n(t, e);
                            },
                            AsyncIterator: s,
                            async: function (t, e, r, n, o) {
                                return (l(e) ? i : u)(y(t), e, r, n, o);
                            },
                            keys: a,
                            values: c,
                        };
                    }),
                    (t.exports.__esModule = !0),
                    (t.exports.default = t.exports))();
                }
                (t.exports = f), (t.exports.__esModule = !0), (t.exports.default = t.exports);
            },
            4756: (t, e, r) => {
                var n = r(4633)();
                t.exports = n;
                try {
                    regeneratorRuntime = n;
                } catch (t) {
                    "object" == typeof globalThis ? (globalThis.regeneratorRuntime = n) : Function("r", "regeneratorRuntime = r")(n);
                }
            },
            5172: (t) => {
                (t.exports = function (t, e) {
                    (this.v = t), (this.k = e);
                }),
                    (t.exports.__esModule = !0),
                    (t.exports.default = t.exports);
            },
            5546: (t) => {
                function e(r, n, o, u) {
                    var i = Object.defineProperty;
                    try {
                        i({}, "", {});
                    } catch (r) {
                        i = 0;
                    }
                    (t.exports = e = function (t, r, n, o) {
                        function u(r, n) {
                            e(t, r, function (t) {
                                return this._invoke(r, n, t);
                            });
                        }
                        r ? (i ? i(t, r, { value: n, enumerable: !o, configurable: !o, writable: !o }) : (t[r] = n)) : (u("next", 0), u("throw", 1), u("return", 2));
                    }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports),
                        e(r, n, o, u);
                }
                (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
            },
            5869: (t, e, r) => {
                var n = r(887);
                (t.exports = function (t, e, r, o, u) {
                    var i = n(t, e, r, o, u);
                    return i.next().then(function (t) {
                        return t.done ? t.value : i.next();
                    });
                }),
                    (t.exports.__esModule = !0),
                    (t.exports.default = t.exports);
            },
            6993: (t, e, r) => {
                var n = r(5546);
                function o() {
                    var e,
                        r,
                        u = "function" == typeof Symbol ? Symbol : {},
                        i = u.iterator || "@@iterator",
                        s = u.toStringTag || "@@toStringTag";
                    function a(t, o, u, i) {
                        var s = o && o.prototype instanceof f ? o : f,
                            a = Object.create(s.prototype);
                        return (
                            n(
                                a,
                                "_invoke",
                                (function (t, n, o) {
                                    var u,
                                        i,
                                        s,
                                        a = 0,
                                        f = o || [],
                                        p = !1,
                                        l = {
                                            p: 0,
                                            n: 0,
                                            v: e,
                                            a: x,
                                            f: x.bind(e, 4),
                                            d: function (t, r) {
                                                return (u = t), (i = 0), (s = e), (l.n = r), c;
                                            },
                                        };
                                    function x(t, n) {
                                        for (i = t, s = n, r = 0; !p && a && !o && r < f.length; r++) {
                                            var o,
                                                u = f[r],
                                                x = l.p,
                                                y = u[2];
                                            t > 3
                                                ? (o = y === n) && ((s = u[(i = u[4]) ? 5 : ((i = 3), 3)]), (u[4] = u[5] = e))
                                                : u[0] <= x && ((o = t < 2 && x < u[1]) ? ((i = 0), (l.v = n), (l.n = u[1])) : x < y && (o = t < 3 || u[0] > n || n > y) && ((u[4] = t), (u[5] = n), (l.n = y), (i = 0)));
                                        }
                                        if (o || t > 1) return c;
                                        throw ((p = !0), n);
                                    }
                                    return function (o, f, y) {
                                        if (a > 1) throw TypeError("Generator is already running");
                                        for (p && 1 === f && x(f, y), i = f, s = y; (r = i < 2 ? e : s) || !p; ) {
                                            u || (i ? (i < 3 ? (i > 1 && (l.n = -1), x(i, s)) : (l.n = s)) : (l.v = s));
                                            try {
                                                if (((a = 2), u)) {
                                                    if ((i || (o = "next"), (r = u[o]))) {
                                                        if (!(r = r.call(u, s))) throw TypeError("iterator result is not an object");
                                                        if (!r.done) return r;
                                                        (s = r.value), i < 2 && (i = 0);
                                                    } else 1 === i && (r = u.return) && r.call(u), i < 2 && ((s = TypeError("The iterator does not provide a '" + o + "' method")), (i = 1));
                                                    u = e;
                                                } else if ((r = (p = l.n < 0) ? s : t.call(n, l)) !== c) break;
                                            } catch (t) {
                                                (u = e), (i = 1), (s = t);
                                            } finally {
                                                a = 1;
                                            }
                                        }
                                        return { value: r, done: p };
                                    };
                                })(t, u, i),
                                !0
                            ),
                            a
                        );
                    }
                    var c = {};
                    function f() {}
                    function p() {}
                    function l() {}
                    r = Object.getPrototypeOf;
                    var x = [][i]
                            ? r(r([][i]()))
                            : (n((r = {}), i, function () {
                                  return this;
                              }),
                              r),
                        y = (l.prototype = f.prototype = Object.create(x));
                    function v(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : ((t.__proto__ = l), n(t, s, "GeneratorFunction")), (t.prototype = Object.create(y)), t;
                    }
                    return (
                        (p.prototype = l),
                        n(y, "constructor", l),
                        n(l, "constructor", p),
                        (p.displayName = "GeneratorFunction"),
                        n(l, s, "GeneratorFunction"),
                        n(y),
                        n(y, s, "Generator"),
                        n(y, i, function () {
                            return this;
                        }),
                        n(y, "toString", function () {
                            return "[object Generator]";
                        }),
                        ((t.exports = o = function () {
                            return { w: a, m: v };
                        }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports))()
                    );
                }
                (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
            },
        },
        e = {};
    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var u = (e[n] = { exports: {} });
        return t[n](u, u.exports, r), u.exports;
    }
    (() => {
        "use strict";
        r(4756),
            chrome.runtime.onMessage.addListener(function (t) {
                var e, r, n, o;
                "play" in t && ((r = (e = t.play).source), (n = e.volume), ((o = new Audio(r)).volume = n), o.play());
            });
    })();
})();
