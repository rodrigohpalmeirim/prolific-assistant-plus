/*! For license information please see offscreen.js.LICENSE.txt */
(() => {
    var t = {
            4633: (t, r, e) => {
                var n = e(3738).default;
                function o() {
                    "use strict";
                    (t.exports = o = function () {
                        return e;
                    }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports);
                    var r,
                        e = {},
                        i = Object.prototype,
                        a = i.hasOwnProperty,
                        u =
                            Object.defineProperty ||
                            function (t, r, e) {
                                t[r] = e.value;
                            },
                        c = "function" == typeof Symbol ? Symbol : {},
                        s = c.iterator || "@@iterator",
                        l = c.asyncIterator || "@@asyncIterator",
                        f = c.toStringTag || "@@toStringTag";
                    function h(t, r, e) {
                        return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
                    }
                    try {
                        h({}, "");
                    } catch (r) {
                        h = function (t, r, e) {
                            return (t[r] = e);
                        };
                    }
                    function p(t, r, e, n) {
                        var o = r && r.prototype instanceof w ? r : w,
                            i = Object.create(o.prototype),
                            a = new F(n || []);
                        return u(i, "_invoke", { value: G(t, e, a) }), i;
                    }
                    function y(t, r, e) {
                        try {
                            return { type: "normal", arg: t.call(r, e) };
                        } catch (t) {
                            return { type: "throw", arg: t };
                        }
                    }
                    e.wrap = p;
                    var v = "suspendedStart",
                        d = "suspendedYield",
                        g = "executing",
                        m = "completed",
                        x = {};
                    function w() {}
                    function b() {}
                    function L() {}
                    var E = {};
                    h(E, s, function () {
                        return this;
                    });
                    var _ = Object.getPrototypeOf,
                        j = _ && _(_(M([])));
                    j && j !== i && a.call(j, s) && (E = j);
                    var O = (L.prototype = w.prototype = Object.create(E));
                    function S(t) {
                        ["next", "throw", "return"].forEach(function (r) {
                            h(t, r, function (t) {
                                return this._invoke(r, t);
                            });
                        });
                    }
                    function k(t, r) {
                        function e(o, i, u, c) {
                            var s = y(t[o], t, i);
                            if ("throw" !== s.type) {
                                var l = s.arg,
                                    f = l.value;
                                return f && "object" == n(f) && a.call(f, "__await")
                                    ? r.resolve(f.__await).then(
                                          function (t) {
                                              e("next", t, u, c);
                                          },
                                          function (t) {
                                              e("throw", t, u, c);
                                          }
                                      )
                                    : r.resolve(f).then(
                                          function (t) {
                                              (l.value = t), u(l);
                                          },
                                          function (t) {
                                              return e("throw", t, u, c);
                                          }
                                      );
                            }
                            c(s.arg);
                        }
                        var o;
                        u(this, "_invoke", {
                            value: function (t, n) {
                                function i() {
                                    return new r(function (r, o) {
                                        e(t, n, r, o);
                                    });
                                }
                                return (o = o ? o.then(i, i) : i());
                            },
                        });
                    }
                    function G(t, e, n) {
                        var o = v;
                        return function (i, a) {
                            if (o === g) throw Error("Generator is already running");
                            if (o === m) {
                                if ("throw" === i) throw a;
                                return { value: r, done: !0 };
                            }
                            for (n.method = i, n.arg = a; ; ) {
                                var u = n.delegate;
                                if (u) {
                                    var c = N(u, n);
                                    if (c) {
                                        if (c === x) continue;
                                        return c;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (o === v) throw ((o = m), n.arg);
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = g;
                                var s = y(t, e, n);
                                if ("normal" === s.type) {
                                    if (((o = n.done ? m : d), s.arg === x)) continue;
                                    return { value: s.arg, done: n.done };
                                }
                                "throw" === s.type && ((o = m), (n.method = "throw"), (n.arg = s.arg));
                            }
                        };
                    }
                    function N(t, e) {
                        var n = e.method,
                            o = t.iterator[n];
                        if (o === r)
                            return (
                                (e.delegate = null),
                                ("throw" === n && t.iterator.return && ((e.method = "return"), (e.arg = r), N(t, e), "throw" === e.method)) ||
                                    ("return" !== n && ((e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                                x
                            );
                        var i = y(o, t.iterator, e.arg);
                        if ("throw" === i.type) return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), x;
                        var a = i.arg;
                        return a
                            ? a.done
                                ? ((e[t.resultName] = a.value), (e.next = t.nextLoc), "return" !== e.method && ((e.method = "next"), (e.arg = r)), (e.delegate = null), x)
                                : a
                            : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), x);
                    }
                    function T(t) {
                        var r = { tryLoc: t[0] };
                        1 in t && (r.catchLoc = t[1]), 2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])), this.tryEntries.push(r);
                    }
                    function P(t) {
                        var r = t.completion || {};
                        (r.type = "normal"), delete r.arg, (t.completion = r);
                    }
                    function F(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(T, this), this.reset(!0);
                    }
                    function M(t) {
                        if (t || "" === t) {
                            var e = t[s];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var o = -1,
                                    i = function e() {
                                        for (; ++o < t.length; ) if (a.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                                        return (e.value = r), (e.done = !0), e;
                                    };
                                return (i.next = i);
                            }
                        }
                        throw new TypeError(n(t) + " is not iterable");
                    }
                    return (
                        (b.prototype = L),
                        u(O, "constructor", { value: L, configurable: !0 }),
                        u(L, "constructor", { value: b, configurable: !0 }),
                        (b.displayName = h(L, f, "GeneratorFunction")),
                        (e.isGeneratorFunction = function (t) {
                            var r = "function" == typeof t && t.constructor;
                            return !!r && (r === b || "GeneratorFunction" === (r.displayName || r.name));
                        }),
                        (e.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, L) : ((t.__proto__ = L), h(t, f, "GeneratorFunction")), (t.prototype = Object.create(O)), t;
                        }),
                        (e.awrap = function (t) {
                            return { __await: t };
                        }),
                        S(k.prototype),
                        h(k.prototype, l, function () {
                            return this;
                        }),
                        (e.AsyncIterator = k),
                        (e.async = function (t, r, n, o, i) {
                            void 0 === i && (i = Promise);
                            var a = new k(p(t, r, n, o), i);
                            return e.isGeneratorFunction(r)
                                ? a
                                : a.next().then(function (t) {
                                      return t.done ? t.value : a.next();
                                  });
                        }),
                        S(O),
                        h(O, f, "Generator"),
                        h(O, s, function () {
                            return this;
                        }),
                        h(O, "toString", function () {
                            return "[object Generator]";
                        }),
                        (e.keys = function (t) {
                            var r = Object(t),
                                e = [];
                            for (var n in r) e.push(n);
                            return (
                                e.reverse(),
                                function t() {
                                    for (; e.length; ) {
                                        var n = e.pop();
                                        if (n in r) return (t.value = n), (t.done = !1), t;
                                    }
                                    return (t.done = !0), t;
                                }
                            );
                        }),
                        (e.values = M),
                        (F.prototype = {
                            constructor: F,
                            reset: function (t) {
                                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = r), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = r), this.tryEntries.forEach(P), !t))
                                    for (var e in this) "t" === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
                            },
                            stop: function () {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function (t) {
                                if (this.done) throw t;
                                var e = this;
                                function n(n, o) {
                                    return (u.type = "throw"), (u.arg = t), (e.next = n), o && ((e.method = "next"), (e.arg = r)), !!o;
                                }
                                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                    var i = this.tryEntries[o],
                                        u = i.completion;
                                    if ("root" === i.tryLoc) return n("end");
                                    if (i.tryLoc <= this.prev) {
                                        var c = a.call(i, "catchLoc"),
                                            s = a.call(i, "finallyLoc");
                                        if (c && s) {
                                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                            if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                        } else if (c) {
                                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                        } else {
                                            if (!s) throw Error("try statement without catch or finally");
                                            if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (t, r) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var o = n;
                                        break;
                                    }
                                }
                                o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
                                var i = o ? o.completion : {};
                                return (i.type = t), (i.arg = r), o ? ((this.method = "next"), (this.next = o.finallyLoc), x) : this.complete(i);
                            },
                            complete: function (t, r) {
                                if ("throw" === t.type) throw t.arg;
                                return (
                                    "break" === t.type || "continue" === t.type
                                        ? (this.next = t.arg)
                                        : "return" === t.type
                                        ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                        : "normal" === t.type && r && (this.next = r),
                                    x
                                );
                            },
                            finish: function (t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var e = this.tryEntries[r];
                                    if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), P(e), x;
                                }
                            },
                            catch: function (t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var e = this.tryEntries[r];
                                    if (e.tryLoc === t) {
                                        var n = e.completion;
                                        if ("throw" === n.type) {
                                            var o = n.arg;
                                            P(e);
                                        }
                                        return o;
                                    }
                                }
                                throw Error("illegal catch attempt");
                            },
                            delegateYield: function (t, e, n) {
                                return (this.delegate = { iterator: M(t), resultName: e, nextLoc: n }), "next" === this.method && (this.arg = r), x;
                            },
                        }),
                        e
                    );
                }
                (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
            },
            3738: (t) => {
                function r(e) {
                    return (
                        (t.exports = r =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports),
                        r(e)
                    );
                }
                (t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports);
            },
            4756: (t, r, e) => {
                var n = e(4633)();
                t.exports = n;
                try {
                    regeneratorRuntime = n;
                } catch (t) {
                    "object" == typeof globalThis ? (globalThis.regeneratorRuntime = n) : Function("r", "regeneratorRuntime = r")(n);
                }
            },
        },
        r = {};
    function e(n) {
        var o = r[n];
        if (void 0 !== o) return o.exports;
        var i = (r[n] = { exports: {} });
        return t[n](i, i.exports, e), i.exports;
    }
    (() => {
        "use strict";
        e(4756),
            chrome.runtime.onMessage.addListener(function (t) {
                var r, e, n, o;
                "play" in t && ((e = (r = t.play).source), (n = r.volume), ((o = new Audio(e)).volume = n), o.play());
            });
    })();
})();
