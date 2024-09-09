(() => {
    var e = {
            6815: function (e, r) {
                var s, n;
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    (s = function (e) {
                        "use strict";
                        if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension.");
                        if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id) e.exports = globalThis.browser;
                        else {
                            const r = "The message port closed before a response was received.",
                                s = (e) => {
                                    const s = {
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
                                    if (0 === Object.keys(s).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                                    class n extends WeakMap {
                                        constructor(e, r = void 0) {
                                            super(r), (this.createItem = e);
                                        }
                                        get(e) {
                                            return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                                        }
                                    }
                                    const g = (r, s) => (...n) => {
                                            e.runtime.lastError ? r.reject(new Error(e.runtime.lastError.message)) : s.singleCallbackArg || (n.length <= 1 && !1 !== s.singleCallbackArg) ? r.resolve(n[0]) : r.resolve(n);
                                        },
                                        a = (e) => (1 == e ? "argument" : "arguments"),
                                        t = (e, r, s) => new Proxy(r, { apply: (r, n, g) => s.call(n, e, ...g) });
                                    let m = Function.call.bind(Object.prototype.hasOwnProperty);
                                    const i = (e, r = {}, s = {}) => {
                                            let n = Object.create(null),
                                                o = {
                                                    has: (r, s) => s in e || s in n,
                                                    get(o, A, l) {
                                                        if (A in n) return n[A];
                                                        if (!(A in e)) return;
                                                        let c = e[A];
                                                        if ("function" == typeof c)
                                                            if ("function" == typeof r[A]) c = t(e, e[A], r[A]);
                                                            else if (m(s, A)) {
                                                                let r = ((e, r) =>
                                                                    function (s, ...n) {
                                                                        if (n.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${n.length}`);
                                                                        if (n.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${n.length}`);
                                                                        return new Promise((a, t) => {
                                                                            if (r.fallbackToNoCallback)
                                                                                try {
                                                                                    s[e](...n, g({ resolve: a, reject: t }, r));
                                                                                } catch (g) {
                                                                                    console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, g),
                                                                                        s[e](...n),
                                                                                        (r.fallbackToNoCallback = !1),
                                                                                        (r.noCallback = !0),
                                                                                        a();
                                                                                }
                                                                            else r.noCallback ? (s[e](...n), a()) : s[e](...n, g({ resolve: a, reject: t }, r));
                                                                        });
                                                                    })(A, s[A]);
                                                                c = t(e, e[A], r);
                                                            } else c = c.bind(e);
                                                        else if ("object" == typeof c && null !== c && (m(r, A) || m(s, A))) c = i(c, r[A], s[A]);
                                                        else {
                                                            if (!m(s, "*"))
                                                                return (
                                                                    Object.defineProperty(n, A, {
                                                                        configurable: !0,
                                                                        enumerable: !0,
                                                                        get: () => e[A],
                                                                        set(r) {
                                                                            e[A] = r;
                                                                        },
                                                                    }),
                                                                    c
                                                                );
                                                            c = i(c, r[A], s["*"]);
                                                        }
                                                        return (n[A] = c), c;
                                                    },
                                                    set: (r, s, g, a) => (s in n ? (n[s] = g) : (e[s] = g), !0),
                                                    defineProperty: (e, r, s) => Reflect.defineProperty(n, r, s),
                                                    deleteProperty: (e, r) => Reflect.deleteProperty(n, r),
                                                },
                                                A = Object.create(e);
                                            return new Proxy(A, o);
                                        },
                                        o = (e) => ({
                                            addListener(r, s, ...n) {
                                                r.addListener(e.get(s), ...n);
                                            },
                                            hasListener: (r, s) => r.hasListener(e.get(s)),
                                            removeListener(r, s) {
                                                r.removeListener(e.get(s));
                                            },
                                        }),
                                        A = new n((e) =>
                                            "function" != typeof e
                                                ? e
                                                : function (r) {
                                                      const s = i(r, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                                                      e(s);
                                                  }
                                        ),
                                        l = new n((e) =>
                                            "function" != typeof e
                                                ? e
                                                : function (r, s, n) {
                                                      let g,
                                                          a,
                                                          t = !1,
                                                          m = new Promise((e) => {
                                                              g = function (r) {
                                                                  (t = !0), e(r);
                                                              };
                                                          });
                                                      try {
                                                          a = e(r, s, g);
                                                      } catch (e) {
                                                          a = Promise.reject(e);
                                                      }
                                                      const i = !0 !== a && (o = a) && "object" == typeof o && "function" == typeof o.then;
                                                      var o;
                                                      if (!0 !== a && !i && !t) return !1;
                                                      return (
                                                          (i ? a : m)
                                                              .then(
                                                                  (e) => {
                                                                      n(e);
                                                                  },
                                                                  (e) => {
                                                                      let r;
                                                                      (r = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"), n({ __mozWebExtensionPolyfillReject__: !0, message: r });
                                                                  }
                                                              )
                                                              .catch((e) => {
                                                                  console.error("Failed to send onMessage rejected reply", e);
                                                              }),
                                                          !0
                                                      );
                                                  }
                                        ),
                                        c = ({ reject: s, resolve: n }, g) => {
                                            e.runtime.lastError ? (e.runtime.lastError.message === r ? n() : s(new Error(e.runtime.lastError.message))) : g && g.__mozWebExtensionPolyfillReject__ ? s(new Error(g.message)) : n(g);
                                        },
                                        x = (e, r, s, ...n) => {
                                            if (n.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${n.length}`);
                                            if (n.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${n.length}`);
                                            return new Promise((e, r) => {
                                                const g = c.bind(null, { resolve: e, reject: r });
                                                n.push(g), s.sendMessage(...n);
                                            });
                                        },
                                        d = {
                                            devtools: { network: { onRequestFinished: o(A) } },
                                            runtime: { onMessage: o(l), onMessageExternal: o(l), sendMessage: x.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                            tabs: { sendMessage: x.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                        },
                                        u = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                    return (s.privacy = { network: { "*": u }, services: { "*": u }, websites: { "*": u } }), i(e, d, s);
                                };
                            e.exports = s(chrome);
                        }
                    }),
                    void 0 === (n = s.apply(r, [e])) || (e.exports = n);
            },
        },
        r = {};
    function s(n) {
        var g = r[n];
        if (void 0 !== g) return g.exports;
        var a = (r[n] = { exports: {} });
        return e[n].call(a.exports, a, a.exports, s), a.exports;
    }
    (s.n = (e) => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return s.d(r, { a: r }), r;
    }),
        (s.d = (e, r) => {
            for (var n in r) s.o(r, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }),
        (s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (() => {
            "use strict";
            var e,
                r = s(6815),
                n = s.n(r);
            ((e = document.createElement("script")).textContent =
                "\n    const getOidcUser = () => {\n      const app = [...document.querySelectorAll('*')].find((el) => el.__vue_app__);\n      const { access_token, refresh_token, expires_at, user } =\n        app?.__vue_app__?.config?.globalProperties?.$store?.state?.oidc ?? {};\n\n      if (access_token && expires_at && user) {\n        return { access_token, refresh_token, expires_at, profile: { ...user } };\n      }\n    };\n\n    document.addEventListener('RequestState', () => {\n      const oidcUser = getOidcUser();\n\n      if (oidcUser) {\n        document.dispatchEvent(new CustomEvent('SendState', { detail: { oidcUser }}));\n      }\n    });\n  "),
                (document.head || document.documentElement).appendChild(e),
                e.remove(),
                document.addEventListener("SendState", function (e) {
                    var r = e.detail.oidcUser;
                    n().runtime.sendMessage({ oidcUser: r });
                }),
                n().runtime.onMessage.addListener(function (e, r) {
                    return (
                        "getState" === e &&
                        new Promise(function (e) {
                            document.addEventListener("SendState", function r(s) {
                                document.removeEventListener("SendState", r), e(s.detail);
                            }),
                                document.dispatchEvent(new Event("RequestState"));
                        })
                    );
                });
        })();
})();
