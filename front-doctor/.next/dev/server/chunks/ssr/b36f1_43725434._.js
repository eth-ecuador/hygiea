module.exports = [
"[project]/hygiea/front-doctor/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/hygiea/front-doctor/node_modules/@vercel/analytics/dist/next/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.5.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return ("TURBOPACK compile-time value", "undefined") !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? "TURBOPACK unreachable" : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return `${props.basePath}/insights/script.js`;
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
    const src = undefined;
    const script = undefined;
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (props.beforeSend) {
            (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
        }
    }, [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inject({
            framework: props.framework || "react",
            basePath: props.basePath ?? getBasePath(),
            ...props.route !== void 0 && {
                disableAutoTrack: true
            },
            ...props
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (props.route && props.path) {
            pageview({
                route: props.route,
                path: props.path
            });
        }
    }, [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return {
            route: null,
            path
        };
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return {
        route: computeRoute(path, finalParams),
        path
    };
};
function getBasePath2() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        basePath: getBasePath2(),
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reconnect",
    ()=>reconnect
]);
let isReconnecting = false;
async function reconnect(config, parameters = {}) {
    // If already reconnecting, do nothing
    if (isReconnecting) return [];
    isReconnecting = true;
    config.setState((x)=>({
            ...x,
            status: x.current ? 'reconnecting' : 'connecting'
        }));
    const connectors = [];
    if (parameters.connectors?.length) {
        for (const connector_ of parameters.connectors){
            let connector;
            // "Register" connector if not already created
            if (typeof connector_ === 'function') connector = config._internal.connectors.setup(connector_);
            else connector = connector_;
            connectors.push(connector);
        }
    } else connectors.push(...config.connectors);
    // Try recently-used connectors first
    let recentConnectorId;
    try {
        recentConnectorId = await config.storage?.getItem('recentConnectorId');
    } catch  {}
    const scores = {};
    for (const [, connection] of config.state.connections){
        scores[connection.connector.id] = 1;
    }
    if (recentConnectorId) scores[recentConnectorId] = 0;
    const sorted = Object.keys(scores).length > 0 ? [
        ...connectors
    ].sort((a, b)=>(scores[a.id] ?? 10) - (scores[b.id] ?? 10)) : connectors;
    // Iterate through each connector and try to connect
    let connected = false;
    const connections = [];
    const providers = [];
    for (const connector of sorted){
        const provider = await connector.getProvider().catch(()=>undefined);
        if (!provider) continue;
        // If we already have an instance of this connector's provider,
        // then we have already checked it (ie. injected connectors can
        // share the same `window.ethereum` instance, so we don't want to
        // connect to it again).
        if (providers.some((x)=>x === provider)) continue;
        const isAuthorized = await connector.isAuthorized();
        if (!isAuthorized) continue;
        const data = await connector.connect({
            isReconnecting: true
        }).catch(()=>null);
        if (!data) continue;
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        config.setState((x)=>{
            const connections = new Map(connected ? x.connections : new Map()).set(connector.uid, {
                accounts: data.accounts,
                chainId: data.chainId,
                connector
            });
            return {
                ...x,
                current: connected ? x.current : connector.uid,
                connections
            };
        });
        connections.push({
            accounts: data.accounts,
            chainId: data.chainId,
            connector
        });
        providers.push(provider);
        connected = true;
    }
    // Prevent overwriting connected status from race condition
    if (config.state.status === 'reconnecting' || config.state.status === 'connecting') {
        // If connecting didn't succeed, set to disconnected
        if (!connected) config.setState((x)=>({
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            }));
        else config.setState((x)=>({
                ...x,
                status: 'connected'
            }));
    }
    isReconnecting = false;
    return connections;
} //# sourceMappingURL=reconnect.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/hydrate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hydrate",
    ()=>hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-ssr] (ecmascript)");
;
function hydrate(config, parameters) {
    const { initialState, reconnectOnMount } = parameters;
    if (initialState && !config._internal.store.persist.hasHydrated()) config.setState({
        ...initialState,
        chainId: config.chains.some((x)=>x.id === initialState.chainId) ? initialState.chainId : config.chains[0].id,
        connections: reconnectOnMount ? initialState.connections : new Map(),
        status: reconnectOnMount ? 'reconnecting' : 'disconnected'
    });
    return {
        async onMount () {
            if (config._internal.ssr) {
                await config._internal.store.persist.rehydrate();
                if (config._internal.mipd) {
                    config._internal.connectors.setState((connectors)=>{
                        const rdnsSet = new Set();
                        for (const connector of connectors ?? []){
                            if (connector.rdns) {
                                const rdnsValues = Array.isArray(connector.rdns) ? connector.rdns : [
                                    connector.rdns
                                ];
                                for (const rdns of rdnsValues){
                                    rdnsSet.add(rdns);
                                }
                            }
                        }
                        const mipdConnectors = [];
                        const providers = config._internal.mipd?.getProviders() ?? [];
                        for (const provider of providers){
                            if (rdnsSet.has(provider.info.rdns)) continue;
                            const connectorFn = config._internal.connectors.providerDetailToConnector(provider);
                            const connector = config._internal.connectors.setup(connectorFn);
                            mipdConnectors.push(connector);
                        }
                        return [
                            ...connectors,
                            ...mipdConnectors
                        ];
                    });
                }
            }
            if (reconnectOnMount) (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reconnect"])(config);
            else if (config.storage) // Reset connections that may have been hydrated from storage.
            config.setState((x)=>({
                    ...x,
                    connections: new Map()
                }));
        }
    };
} //# sourceMappingURL=hydrate.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.22.1'; //# sourceMappingURL=version.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/version.js [app-ssr] (ecmascript)");
;
const getVersion = ()=>`@wagmi/core@${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/errors/base.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-ssr] (ecmascript)");
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseError_instances, _BaseError_walk;
;
class BaseError extends Error {
    get docsBaseUrl() {
        return 'https://wagmi.sh/core';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVersion"])();
    }
    constructor(shortMessage, options = {}){
        super();
        _BaseError_instances.add(this);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiCoreError'
        });
        const details = options.cause instanceof BaseError ? options.cause.details : options.cause?.message ? options.cause.message : options.details;
        const docsPath = options.cause instanceof BaseError ? options.cause.docsPath || options.docsPath : options.docsPath;
        this.message = [
            shortMessage || 'An error occurred.',
            '',
            ...options.metaMessages ? [
                ...options.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: ${this.docsBaseUrl}${docsPath}.html${options.docsSlug ? `#${options.docsSlug}` : ''}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: ${this.version}`
        ].join('\n');
        if (options.cause) this.cause = options.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = options.metaMessages;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, this, fn);
    }
}
_BaseError_instances = new WeakSet(), _BaseError_walk = function _BaseError_walk(err, fn) {
    if (fn?.(err)) return err;
    if (err.cause) return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, err.cause, fn);
    return err;
}; //# sourceMappingURL=base.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/errors/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChainNotConfiguredError",
    ()=>ChainNotConfiguredError,
    "ConnectorAccountNotFoundError",
    ()=>ConnectorAccountNotFoundError,
    "ConnectorAlreadyConnectedError",
    ()=>ConnectorAlreadyConnectedError,
    "ConnectorChainMismatchError",
    ()=>ConnectorChainMismatchError,
    "ConnectorNotConnectedError",
    ()=>ConnectorNotConnectedError,
    "ConnectorNotFoundError",
    ()=>ConnectorNotFoundError,
    "ConnectorUnavailableReconnectingError",
    ()=>ConnectorUnavailableReconnectingError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/errors/base.js [app-ssr] (ecmascript)");
;
class ChainNotConfiguredError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Chain not configured.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainNotConfiguredError'
        });
    }
}
class ConnectorAlreadyConnectedError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector already connected.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorAlreadyConnectedError'
        });
    }
}
class ConnectorNotConnectedError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector not connected.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorNotConnectedError'
        });
    }
}
class ConnectorNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector not found.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorNotFoundError'
        });
    }
}
class ConnectorAccountNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address, connector }){
        super(`Account "${address}" not found for connector "${connector.name}".`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorAccountNotFoundError'
        });
    }
}
class ConnectorChainMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connectionChainId, connectorChainId }){
        super(`The current chain of the connector (id: ${connectorChainId}) does not match the connection's chain (id: ${connectionChainId}).`, {
            metaMessages: [
                `Current Chain ID:  ${connectorChainId}`,
                `Expected Chain ID: ${connectionChainId}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorChainMismatchError'
        });
    }
}
class ConnectorUnavailableReconnectingError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connector }){
        super(`Connector "${connector.name}" unavailable while reconnecting.`, {
            details: [
                'During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.',
                'All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.',
                'This error commonly occurs for connectors that asynchronously inject after reconnection has already started.'
            ].join(' ')
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorUnavailableReconnectingError'
        });
    }
} //# sourceMappingURL=config.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProviderNotFoundError",
    ()=>ProviderNotFoundError,
    "SwitchChainNotSupportedError",
    ()=>SwitchChainNotSupportedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/errors/base.js [app-ssr] (ecmascript)");
;
class ProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Provider not found.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderNotFoundError'
        });
    }
}
class SwitchChainNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connector }){
        super(`"${connector.name}" does not support programmatic chain switching.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SwitchChainNotSupportedError'
        });
    }
} //# sourceMappingURL=connector.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createConnector",
    ()=>createConnector
]);
function createConnector(createConnectorFn) {
    return createConnectorFn;
} //# sourceMappingURL=createConnector.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injected",
    ()=>injected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/utils/promise/withRetry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/utils/promise/withTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/errors/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-ssr] (ecmascript)");
;
;
;
;
injected.type = 'injected';
function injected(parameters = {}) {
    const { shimDisconnect = true, unstable_shimAsyncInject } = parameters;
    function getTarget() {
        const target = parameters.target;
        if (typeof target === 'function') {
            const result = target();
            if (result) return result;
        }
        if (typeof target === 'object') return target;
        if (typeof target === 'string') return {
            ...targetMap[target] ?? {
                id: target,
                name: `${target[0].toUpperCase()}${target.slice(1)}`,
                provider: `is${target[0].toUpperCase()}${target.slice(1)}`
            }
        };
        return {
            id: 'injected',
            name: 'Injected',
            provider (window) {
                return window?.ethereum;
            }
        };
    }
    let accountsChanged;
    let chainChanged;
    let connect;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            get icon () {
                return getTarget().icon;
            },
            get id () {
                return getTarget().id;
            },
            get name () {
                return getTarget().name;
            },
            /** @deprecated */ get supportsSimulation () {
                return true;
            },
            type: injected.type,
            async setup () {
                const provider = await this.getProvider();
                // Only start listening for events if `target` is set, otherwise `injected()` will also receive events
                if (provider?.on && parameters.target) {
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                    // We shouldn't need to listen for `'accountsChanged'` here since the `'connect'` event should suffice (and wallet shouldn't be connected yet).
                    // Some wallets, like MetaMask, do not implement the `'connect'` event and overload `'accountsChanged'` instead.
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                }
            },
            async connect ({ chainId, isReconnecting, withCapabilities } = {}) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                let accounts = [];
                if (isReconnecting) accounts = await this.getAccounts().catch(()=>[]);
                else if (shimDisconnect) {
                    // Attempt to show another prompt for selecting account if `shimDisconnect` flag is enabled
                    try {
                        const permissions = await provider.request({
                            method: 'wallet_requestPermissions',
                            params: [
                                {
                                    eth_accounts: {}
                                }
                            ]
                        });
                        accounts = permissions[0]?.caveats?.[0]?.value?.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x));
                        // `'wallet_requestPermissions'` can return a different order of accounts than `'eth_accounts'`
                        // switch to `'eth_accounts'` ordering if more than one account is connected
                        // https://github.com/wevm/wagmi/issues/4140
                        if (accounts.length > 0) {
                            const sortedAccounts = await this.getAccounts();
                            accounts = sortedAccounts;
                        }
                    } catch (err) {
                        const error = err;
                        // Not all injected providers support `wallet_requestPermissions` (e.g. MetaMask iOS).
                        // Only bubble up error if user rejects request
                        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        // Or prompt is already open
                        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw error;
                    }
                }
                try {
                    if (!accounts?.length && !isReconnecting) {
                        const requestedAccounts = await provider.request({
                            method: 'eth_requestAccounts'
                        });
                        accounts = requestedAccounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x));
                    }
                    // Manage EIP-1193 event listeners
                    // https://eips.ethereum.org/EIPS/eip-1193#events
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                    // Switch to chain if provided
                    let currentChainId = await this.getChainId();
                    if (chainId && currentChainId !== chainId) {
                        const chain = await this.switchChain({
                            chainId
                        }).catch((error)=>{
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw error;
                            return {
                                id: currentChainId
                            };
                        });
                        currentChainId = chain?.id ?? currentChainId;
                    }
                    // Remove disconnected shim if it exists
                    if (shimDisconnect) await config.storage?.removeItem(`${this.id}.disconnected`);
                    // Add connected shim if no target exists
                    if (!parameters.target) await config.storage?.setItem('injected.connected', true);
                    return {
                        accounts: withCapabilities ? accounts.map((address)=>({
                                address,
                                capabilities: {}
                            })) : accounts,
                        chainId: currentChainId
                    };
                } catch (err) {
                    const error = err;
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error);
                    throw error;
                }
            },
            async disconnect () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                // Manage EIP-1193 event listeners
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
                // Experimental support for MetaMask disconnect
                // https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md
                try {
                    // Adding timeout as not all wallets support this method and can hang
                    // https://github.com/wevm/wagmi/issues/4064
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withTimeout"])(()=>// TODO: Remove explicit type for viem@3
                        provider.request({
                            // `'wallet_revokePermissions'` added in `viem@2.10.3`
                            method: 'wallet_revokePermissions',
                            params: [
                                {
                                    eth_accounts: {}
                                }
                            ]
                        }), {
                        timeout: 100
                    });
                } catch  {}
                // Add shim signalling connector is disconnected
                if (shimDisconnect) {
                    await config.storage?.setItem(`${this.id}.disconnected`, true);
                }
                if (!parameters.target) await config.storage?.removeItem('injected.connected');
            },
            async getAccounts () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const accounts = await provider.request({
                    method: 'eth_accounts'
                });
                return accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getChainId () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const hexChainId = await provider.request({
                    method: 'eth_chainId'
                });
                return Number(hexChainId);
            },
            async getProvider () {
                if ("TURBOPACK compile-time truthy", 1) return undefined;
                //TURBOPACK unreachable
                ;
                let provider;
                const target = undefined;
            },
            async isAuthorized () {
                try {
                    const isDisconnected = shimDisconnect && await config.storage?.getItem(`${this.id}.disconnected`);
                    if (isDisconnected) return false;
                    // Don't allow injected connector to connect if no target is set and it hasn't already connected
                    // (e.g. flag in storage is not set). This prevents a targetless injected connector from connecting
                    // automatically whenever there is a targeted connector configured.
                    if (!parameters.target) {
                        const connected = await config.storage?.getItem('injected.connected');
                        if (!connected) return false;
                    }
                    const provider = await this.getProvider();
                    if (!provider) {
                        if (unstable_shimAsyncInject !== undefined && unstable_shimAsyncInject !== false) {
                            // If no provider is found, check for async injection
                            // https://github.com/wevm/references/issues/167
                            // https://github.com/MetaMask/detect-provider
                            const handleEthereum = async ()=>{
                                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                ;
                                const provider = await this.getProvider();
                                return !!provider;
                            };
                            const timeout = typeof unstable_shimAsyncInject === 'number' ? unstable_shimAsyncInject : 1_000;
                            const res = await Promise.race([
                                ...("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [],
                                new Promise((resolve)=>setTimeout(()=>resolve(handleEthereum()), timeout))
                            ]);
                            if (res) return true;
                        }
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                    }
                    // Use retry strategy as some injected wallets (e.g. MetaMask) fail to
                    // immediately resolve JSON-RPC requests on page load.
                    const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRetry"])(()=>this.getAccounts());
                    return !!accounts.length;
                } catch  {
                    return false;
                }
            },
            async switchChain ({ addEthereumChainParameter, chainId }) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const chain = config.chains.find((x)=>x.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                const promise = new Promise((resolve)=>{
                    const listener = (data)=>{
                        if ('chainId' in data && data.chainId === chainId) {
                            config.emitter.off('change', listener);
                            resolve();
                        }
                    };
                    config.emitter.on('change', listener);
                });
                try {
                    await Promise.all([
                        provider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                                }
                            ]
                        })// During `'wallet_switchEthereumChain'`, MetaMask makes a `'net_version'` RPC call to the target chain.
                        // If this request fails, MetaMask does not emit the `'chainChanged'` event, but will still switch the chain.
                        // To counter this behavior, we request and emit the current chain ID to confirm the chain switch either via
                        // this callback or an externally emitted `'chainChanged'` event.
                        // https://github.com/MetaMask/metamask-extension/issues/24247
                        .then(async ()=>{
                            const currentChainId = await this.getChainId();
                            if (currentChainId === chainId) config.emitter.emit('change', {
                                chainId
                            });
                        }),
                        promise
                    ]);
                    return chain;
                } catch (err) {
                    const error = err;
                    // Indicates chain is not added to provider
                    if (error.code === 4902 || // Unwrapping for MetaMask Mobile
                    // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
                    error?.data?.originalError?.code === 4902) {
                        try {
                            const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
                            let blockExplorerUrls;
                            if (addEthereumChainParameter?.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
                            else if (blockExplorer) blockExplorerUrls = [
                                blockExplorer.url,
                                ...Object.values(blockExplorers).map((x)=>x.url)
                            ];
                            let rpcUrls;
                            if (addEthereumChainParameter?.rpcUrls?.length) rpcUrls = addEthereumChainParameter.rpcUrls;
                            else rpcUrls = [
                                chain.rpcUrls.default?.http[0] ?? ''
                            ];
                            const addEthereumChain = {
                                blockExplorerUrls,
                                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                                chainName: addEthereumChainParameter?.chainName ?? chain.name,
                                iconUrls: addEthereumChainParameter?.iconUrls,
                                nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                                rpcUrls
                            };
                            await Promise.all([
                                provider.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [
                                        addEthereumChain
                                    ]
                                }).then(async ()=>{
                                    const currentChainId = await this.getChainId();
                                    if (currentChainId === chainId) config.emitter.emit('change', {
                                        chainId
                                    });
                                    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('User rejected switch after adding network.'));
                                }),
                                promise
                            ]);
                            return chain;
                        } catch (error) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        }
                    }
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                }
            },
            async onAccountsChanged (accounts) {
                // Disconnect if there are no accounts
                if (accounts.length === 0) this.onDisconnect();
                else if (config.emitter.listenerCount('connect')) {
                    const chainId = (await this.getChainId()).toString();
                    this.onConnect({
                        chainId
                    });
                    // Remove disconnected shim if it exists
                    if (shimDisconnect) await config.storage?.removeItem(`${this.id}.disconnected`);
                } else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onConnect (connectInfo) {
                const accounts = await this.getAccounts();
                if (accounts.length === 0) return;
                const chainId = Number(connectInfo.chainId);
                config.emitter.emit('connect', {
                    accounts,
                    chainId
                });
                // Manage EIP-1193 event listeners
                const provider = await this.getProvider();
                if (provider) {
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                }
            },
            async onDisconnect (error) {
                const provider = await this.getProvider();
                // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
                // https://github.com/MetaMask/providers/pull/120
                if (error && error.code === 1013) {
                    if (provider && !!(await this.getAccounts()).length) return;
                }
                // No need to remove `${this.id}.disconnected` from storage because `onDisconnect` is typically
                // only called when the wallet is disconnected through the wallet's interface, meaning the wallet
                // actually disconnected and we don't need to simulate it.
                config.emitter.emit('disconnect');
                // Manage EIP-1193 event listeners
                if (provider) {
                    if (chainChanged) {
                        provider.removeListener('chainChanged', chainChanged);
                        chainChanged = undefined;
                    }
                    if (disconnect) {
                        provider.removeListener('disconnect', disconnect);
                        disconnect = undefined;
                    }
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                }
            }
        }));
}
const targetMap = {
    coinbaseWallet: {
        id: 'coinbaseWallet',
        name: 'Coinbase Wallet',
        provider (window) {
            if (window?.coinbaseWalletExtension) return window.coinbaseWalletExtension;
            return findProvider(window, 'isCoinbaseWallet');
        }
    },
    metaMask: {
        id: 'metaMask',
        name: 'MetaMask',
        provider (window) {
            return findProvider(window, (provider)=>{
                if (!provider.isMetaMask) return false;
                // Brave tries to make itself look like MetaMask
                // Could also try RPC `web3_clientVersion` if following is unreliable
                if (provider.isBraveWallet && !provider._events && !provider._state) return false;
                // Other wallets that try to look like MetaMask
                const flags = [
                    'isApexWallet',
                    'isAvalanche',
                    'isBitKeep',
                    'isBlockWallet',
                    'isKuCoinWallet',
                    'isMathWallet',
                    'isOkxWallet',
                    'isOKExWallet',
                    'isOneInchIOSWallet',
                    'isOneInchAndroidWallet',
                    'isOpera',
                    'isPhantom',
                    'isPortal',
                    'isRabby',
                    'isTokenPocket',
                    'isTokenary',
                    'isUniswapWallet',
                    'isZerion'
                ];
                for (const flag of flags)if (provider[flag]) return false;
                return true;
            });
        }
    },
    phantom: {
        id: 'phantom',
        name: 'Phantom',
        provider (window) {
            if (window?.phantom?.ethereum) return window.phantom?.ethereum;
            return findProvider(window, 'isPhantom');
        }
    }
};
function findProvider(window, select) {
    function isProvider(provider) {
        if (typeof select === 'function') return select(provider);
        if (typeof select === 'string') return provider[select];
        return true;
    }
    const ethereum = window.ethereum;
    if (ethereum?.providers) return ethereum.providers.find((provider)=>isProvider(provider));
    if (ethereum && isProvider(ethereum)) return ethereum;
    return undefined;
} //# sourceMappingURL=injected.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/createEmitter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Emitter",
    ()=>Emitter,
    "createEmitter",
    ()=>createEmitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/node_modules/eventemitter3/index.js [app-ssr] (ecmascript) <export default as EventEmitter>");
;
class Emitter {
    constructor(uid){
        Object.defineProperty(this, "uid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: uid
        });
        Object.defineProperty(this, "_emitter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]()
        });
    }
    on(eventName, fn) {
        this._emitter.on(eventName, fn);
    }
    once(eventName, fn) {
        this._emitter.once(eventName, fn);
    }
    off(eventName, fn) {
        this._emitter.off(eventName, fn);
    }
    emit(eventName, ...params) {
        const data = params[0];
        this._emitter.emit(eventName, {
            uid: this.uid,
            ...data
        });
    }
    listenerCount(eventName) {
        return this._emitter.listenerCount(eventName);
    }
}
function createEmitter(uid) {
    return new Emitter(uid);
} //# sourceMappingURL=createEmitter.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deserialize",
    ()=>deserialize
]);
function deserialize(value, reviver) {
    return JSON.parse(value, (key, value_)=>{
        let value = value_;
        if (value?.__type === 'bigint') value = BigInt(value.value);
        if (value?.__type === 'Map') value = new Map(value.value);
        return reviver?.(key, value) ?? value;
    });
} //# sourceMappingURL=deserialize.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the reference key for the circular value
 *
 * @param keys the keys to build the reference key from
 * @param cutoff the maximum number of keys to include
 * @returns the reference key
 */ __turbopack_context__.s([
    "serialize",
    ()=>serialize
]);
function getReferenceKey(keys, cutoff) {
    return keys.slice(0, cutoff).join('.') || '.';
}
/**
 * Faster `Array.prototype.indexOf` implementation build for slicing / splicing
 *
 * @param array the array to match the value in
 * @param value the value to match
 * @returns the matching index, or -1
 */ function getCutoff(array, value) {
    const { length } = array;
    for(let index = 0; index < length; ++index){
        if (array[index] === value) {
            return index + 1;
        }
    }
    return 0;
}
/**
 * Create a replacer method that handles circular values
 *
 * @param [replacer] a custom replacer to use for non-circular values
 * @param [circularReplacer] a custom replacer to use for circular methods
 * @returns the value to stringify
 */ function createReplacer(replacer, circularReplacer) {
    const hasReplacer = typeof replacer === 'function';
    const hasCircularReplacer = typeof circularReplacer === 'function';
    const cache = [];
    const keys = [];
    return function replace(key, value) {
        if (typeof value === 'object') {
            if (cache.length) {
                const thisCutoff = getCutoff(cache, this);
                if (thisCutoff === 0) {
                    cache[cache.length] = this;
                } else {
                    cache.splice(thisCutoff);
                    keys.splice(thisCutoff);
                }
                keys[keys.length] = key;
                const valueCutoff = getCutoff(cache, value);
                if (valueCutoff !== 0) {
                    return hasCircularReplacer ? circularReplacer.call(this, key, value, getReferenceKey(keys, valueCutoff)) : `[ref=${getReferenceKey(keys, valueCutoff)}]`;
                }
            } else {
                cache[0] = value;
                keys[0] = key;
            }
        }
        return hasReplacer ? replacer.call(this, key, value) : value;
    };
}
function serialize(value, replacer, indent, circularReplacer) {
    return JSON.stringify(value, createReplacer((key, value_)=>{
        let value = value_;
        if (typeof value === 'bigint') value = {
            __type: 'bigint',
            value: value_.toString()
        };
        if (value instanceof Map) value = {
            __type: 'Map',
            value: Array.from(value_.entries())
        };
        return replacer?.(key, value) ?? value;
    }, circularReplacer), indent ?? undefined);
} //# sourceMappingURL=serialize.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/createStorage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStorage",
    ()=>createStorage,
    "getDefaultStorage",
    ()=>getDefaultStorage,
    "noopStorage",
    ()=>noopStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-ssr] (ecmascript)");
;
;
function createStorage(parameters) {
    const { deserialize = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"], key: prefix = 'wagmi', serialize = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"], storage = noopStorage } = parameters;
    function unwrap(value) {
        if (value instanceof Promise) return value.then((x)=>x).catch(()=>null);
        return value;
    }
    return {
        ...storage,
        key: prefix,
        async getItem (key, defaultValue) {
            const value = storage.getItem(`${prefix}.${key}`);
            const unwrapped = await unwrap(value);
            if (unwrapped) return deserialize(unwrapped) ?? null;
            return defaultValue ?? null;
        },
        async setItem (key, value) {
            const storageKey = `${prefix}.${key}`;
            if (value === null) await unwrap(storage.removeItem(storageKey));
            else await unwrap(storage.setItem(storageKey, serialize(value)));
        },
        async removeItem (key) {
            await unwrap(storage.removeItem(`${prefix}.${key}`));
        }
    };
}
const noopStorage = {
    getItem: ()=>null,
    setItem: ()=>{},
    removeItem: ()=>{}
};
function getDefaultStorage() {
    const storage = (()=>{
        // biome-ignore lint/complexity/useOptionalChain: _
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return noopStorage;
    })();
    return {
        getItem (key) {
            return storage.getItem(key);
        },
        removeItem (key) {
            storage.removeItem(key);
        },
        setItem (key, value) {
            try {
                storage.setItem(key, value);
            // silence errors by default (QuotaExceededError, SecurityError, etc.)
            } catch  {}
        }
    };
} //# sourceMappingURL=createStorage.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/utils/uid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uid",
    ()=>uid
]);
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for(let i = 0; i < size; i++){
            buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
} //# sourceMappingURL=uid.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/createConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createConfig",
    ()=>createConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/clients/createClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/createEmitter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/createStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/errors/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$uid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/utils/uid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/version.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function createConfig(parameters) {
    const { multiInjectedProviderDiscovery = true, storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStorage"])({
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultStorage"])()
    }), syncConnectedChain = true, ssr = false, ...rest } = parameters;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Set up connectors, clients, etc.
    /////////////////////////////////////////////////////////////////////////////////////////////////
    const mipd = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    const chains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(()=>rest.chains);
    const connectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(()=>{
        const collection = [];
        const rdnsSet = new Set();
        for (const connectorFns of rest.connectors ?? []){
            const connector = setup(connectorFns);
            collection.push(connector);
            if (!ssr && connector.rdns) {
                const rdnsValues = typeof connector.rdns === 'string' ? [
                    connector.rdns
                ] : connector.rdns;
                for (const rdns of rdnsValues){
                    rdnsSet.add(rdns);
                }
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return collection;
    });
    function setup(connectorFn) {
        // Set up emitter with uid and add to connector so they are "linked" together.
        const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEmitter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$uid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])());
        const connector = {
            ...connectorFn({
                emitter,
                chains: chains.getState(),
                storage,
                transports: rest.transports
            }),
            emitter,
            uid: emitter.uid
        };
        // Start listening for `connect` events on connector setup
        // This allows connectors to "connect" themselves without user interaction (e.g. MetaMask's "Manually connect to current site")
        emitter.on('connect', connect);
        connector.setup?.();
        return connector;
    }
    function providerDetailToConnector(providerDetail) {
        const { info } = providerDetail;
        const provider = providerDetail.provider;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injected"])({
            target: {
                ...info,
                id: info.rdns,
                provider
            }
        });
    }
    const clients = new Map();
    function getClient(config = {}) {
        const chainId = config.chainId ?? store.getState().chainId;
        const chain = chains.getState().find((x)=>x.id === chainId);
        // chainId specified and not configured
        if (config.chainId && !chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
        {
            const client = clients.get(store.getState().chainId);
            if (client && !chain) return client;
            if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
        }
        // If a memoized client exists for a chain id, use that.
        {
            const client = clients.get(chainId);
            if (client) return client;
        }
        let client;
        if (rest.client) client = rest.client({
            chain
        });
        else {
            const chainId = chain.id;
            const chainIds = chains.getState().map((x)=>x.id);
            // Grab all properties off `rest` and resolve for use in `createClient`
            const properties = {};
            const entries = Object.entries(rest);
            for (const [key, value] of entries){
                if (key === 'chains' || key === 'client' || key === 'connectors' || key === 'transports') continue;
                if (typeof value === 'object') {
                    // check if value is chainId-specific since some values can be objects
                    // e.g. { batch: { multicall: { batchSize: 1024 } } }
                    if (chainId in value) properties[key] = value[chainId];
                    else {
                        // check if value is chainId-specific, but does not have value for current chainId
                        const hasChainSpecificValue = chainIds.some((x)=>x in value);
                        if (hasChainSpecificValue) continue;
                        properties[key] = value;
                    }
                } else properties[key] = value;
            }
            client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])({
                ...properties,
                chain,
                batch: properties.batch ?? {
                    multicall: true
                },
                transport: (parameters)=>rest.transports[chainId]({
                        ...parameters,
                        connectors
                    })
            });
        }
        clients.set(chainId, client);
        return client;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Create store
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function getInitialState() {
        return {
            chainId: chains.getState()[0].id,
            connections: new Map(),
            current: null,
            status: 'disconnected'
        };
    }
    let currentVersion;
    const prefix = '0.0.0-canary-';
    if (__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"].startsWith(prefix)) currentVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"].replace(prefix, ''), 10);
    else currentVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"].split('.')[0] ?? '0', 10);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeWithSelector"])(// only use persist middleware if storage exists
    storage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])(getInitialState, {
        migrate (persistedState, version) {
            if (version === currentVersion) return persistedState;
            const initialState = getInitialState();
            const chainId = validatePersistedChainId(persistedState, initialState.chainId);
            return {
                ...initialState,
                chainId
            };
        },
        name: 'store',
        partialize (state) {
            // Only persist "critical" store properties to preserve storage size.
            return {
                connections: {
                    __type: 'Map',
                    value: Array.from(state.connections.entries()).map(([key, connection])=>{
                        const { id, name, type, uid } = connection.connector;
                        const connector = {
                            id,
                            name,
                            type,
                            uid
                        };
                        return [
                            key,
                            {
                                ...connection,
                                connector
                            }
                        ];
                    })
                },
                chainId: state.chainId,
                current: state.current
            };
        },
        merge (persistedState, currentState) {
            // `status` should not be persisted as it messes with reconnection
            if (typeof persistedState === 'object' && persistedState && 'status' in persistedState) delete persistedState.status;
            // Make sure persisted `chainId` is valid
            const chainId = validatePersistedChainId(persistedState, currentState.chainId);
            return {
                ...currentState,
                ...persistedState,
                chainId
            };
        },
        skipHydration: ssr,
        storage: storage,
        version: currentVersion
    }) : getInitialState));
    store.setState(getInitialState());
    function validatePersistedChainId(persistedState, defaultChainId) {
        return persistedState && typeof persistedState === 'object' && 'chainId' in persistedState && typeof persistedState.chainId === 'number' && chains.getState().some((x)=>x.id === persistedState.chainId) ? persistedState.chainId : defaultChainId;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Subscribe to changes
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Update default chain when connector chain changes
    if (syncConnectedChain) store.subscribe(({ connections, current })=>current ? connections.get(current)?.chainId : undefined, (chainId)=>{
        // If chain is not configured, then don't switch over to it.
        const isChainConfigured = chains.getState().some((x)=>x.id === chainId);
        if (!isChainConfigured) return;
        return store.setState((x)=>({
                ...x,
                chainId: chainId ?? x.chainId
            }));
    });
    // EIP-6963 subscribe for new wallet providers
    mipd?.subscribe((providerDetails)=>{
        const connectorIdSet = new Set();
        const connectorRdnsSet = new Set();
        for (const connector of connectors.getState()){
            connectorIdSet.add(connector.id);
            if (connector.rdns) {
                const rdnsValues = typeof connector.rdns === 'string' ? [
                    connector.rdns
                ] : connector.rdns;
                for (const rdns of rdnsValues){
                    connectorRdnsSet.add(rdns);
                }
            }
        }
        const newConnectors = [];
        for (const providerDetail of providerDetails){
            if (connectorRdnsSet.has(providerDetail.info.rdns)) continue;
            const connector = setup(providerDetailToConnector(providerDetail));
            if (connectorIdSet.has(connector.id)) continue;
            newConnectors.push(connector);
        }
        if (storage && !store.persist.hasHydrated()) return;
        connectors.setState((x)=>[
                ...x,
                ...newConnectors
            ], true);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Emitter listeners
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function change(data) {
        store.setState((x)=>{
            const connection = x.connections.get(data.uid);
            if (!connection) return x;
            return {
                ...x,
                connections: new Map(x.connections).set(data.uid, {
                    accounts: data.accounts ?? connection.accounts,
                    chainId: data.chainId ?? connection.chainId,
                    connector: connection.connector
                })
            };
        });
    }
    function connect(data) {
        // Disable handling if reconnecting/connecting
        if (store.getState().status === 'connecting' || store.getState().status === 'reconnecting') return;
        store.setState((x)=>{
            const connector = connectors.getState().find((x)=>x.uid === data.uid);
            if (!connector) return x;
            if (connector.emitter.listenerCount('connect')) connector.emitter.off('connect', change);
            if (!connector.emitter.listenerCount('change')) connector.emitter.on('change', change);
            if (!connector.emitter.listenerCount('disconnect')) connector.emitter.on('disconnect', disconnect);
            return {
                ...x,
                connections: new Map(x.connections).set(data.uid, {
                    accounts: data.accounts,
                    chainId: data.chainId,
                    connector: connector
                }),
                current: data.uid,
                status: 'connected'
            };
        });
    }
    function disconnect(data) {
        store.setState((x)=>{
            const connection = x.connections.get(data.uid);
            if (connection) {
                const connector = connection.connector;
                if (connector.emitter.listenerCount('change')) connection.connector.emitter.off('change', change);
                if (connector.emitter.listenerCount('disconnect')) connection.connector.emitter.off('disconnect', disconnect);
                if (!connector.emitter.listenerCount('connect')) connection.connector.emitter.on('connect', connect);
            }
            x.connections.delete(data.uid);
            if (x.connections.size === 0) return {
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            };
            const nextConnection = x.connections.values().next().value;
            return {
                ...x,
                connections: new Map(x.connections),
                current: nextConnection.connector.uid
            };
        });
    }
    return {
        get chains () {
            return chains.getState();
        },
        get connectors () {
            return connectors.getState();
        },
        storage,
        getClient,
        get state () {
            return store.getState();
        },
        setState (value) {
            let newState;
            if (typeof value === 'function') newState = value(store.getState());
            else newState = value;
            // Reset state if it got set to something not matching the base state
            const initialState = getInitialState();
            if (typeof newState !== 'object') newState = initialState;
            const isCorrupt = Object.keys(initialState).some((x)=>!(x in newState));
            if (isCorrupt) newState = initialState;
            store.setState(newState, true);
        },
        subscribe (selector, listener, options) {
            return store.subscribe(selector, listener, options ? {
                ...options,
                fireImmediately: options.emitImmediately
            } : undefined);
        },
        _internal: {
            mipd,
            async revalidate () {
                // Check connections to see if they are still active
                const state = store.getState();
                const connections = state.connections;
                let current = state.current;
                for (const [, connection] of connections){
                    const connector = connection.connector;
                    // check if `connect.isAuthorized` exists
                    // partial connectors in storage do not have it
                    const isAuthorized = connector.isAuthorized ? await connector.isAuthorized() : false;
                    if (isAuthorized) continue;
                    // Remove stale connection
                    connections.delete(connector.uid);
                    if (current === connector.uid) current = null;
                }
                // set connections
                store.setState((x)=>({
                        ...x,
                        connections,
                        current
                    }));
            },
            store,
            ssr: Boolean(ssr),
            syncConnectedChain,
            transports: rest.transports,
            chains: {
                setState (value) {
                    const nextChains = typeof value === 'function' ? value(chains.getState()) : value;
                    if (nextChains.length === 0) return;
                    return chains.setState(nextChains, true);
                },
                subscribe (listener) {
                    return chains.subscribe(listener);
                }
            },
            connectors: {
                providerDetailToConnector,
                setup: setup,
                setState (value) {
                    return connectors.setState(typeof value === 'function' ? value(connectors.getState()) : value, true);
                },
                subscribe (listener) {
                    return connectors.subscribe(listener);
                }
            },
            events: {
                change,
                connect,
                disconnect
            }
        }
    };
} //# sourceMappingURL=createConfig.js.map
}),
"[project]/hygiea/front-doctor/node_modules/wagmi/dist/esm/hydrate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hydrate",
    ()=>Hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/hydrate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Hydrate(parameters) {
    const { children, config, initialState, reconnectOnMount = true } = parameters;
    const { onMount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hydrate"])(config, {
        initialState,
        reconnectOnMount
    });
    // Hydrate for non-SSR
    if (!config._internal.ssr) onMount();
    // Hydrate for SSR
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active.current) return;
        if (!config._internal.ssr) return;
        onMount();
        return ()=>{
            active.current = false;
        };
    }, []);
    return children;
} //# sourceMappingURL=hydrate.js.map
}),
"[project]/hygiea/front-doctor/node_modules/wagmi/dist/esm/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WagmiContext",
    ()=>WagmiContext,
    "WagmiProvider",
    ()=>WagmiProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/wagmi/dist/esm/hydrate.js [app-ssr] (ecmascript)");
'use client';
;
;
const WagmiContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WagmiProvider(parameters) {
    const { children, config } = parameters;
    const props = {
        value: config
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hydrate"], parameters, (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WagmiContext.Provider, props, children));
} //# sourceMappingURL=context.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/timeoutManager.ts
__turbopack_context__.s([
    "TimeoutManager",
    ()=>TimeoutManager,
    "defaultTimeoutProvider",
    ()=>defaultTimeoutProvider,
    "systemSetTimeoutZero",
    ()=>systemSetTimeoutZero,
    "timeoutManager",
    ()=>timeoutManager
]);
var defaultTimeoutProvider = {
    // We need the wrapper function syntax below instead of direct references to
    // global setTimeout etc.
    //
    // BAD: `setTimeout: setTimeout`
    // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
    //
    // If we use direct references here, then anything that wants to spy on or
    // replace the global setTimeout (like tests) won't work since we'll already
    // have a hard reference to the original implementation at the time when this
    // file was imported.
    setTimeout: (callback, delay)=>setTimeout(callback, delay),
    clearTimeout: (timeoutId)=>clearTimeout(timeoutId),
    setInterval: (callback, delay)=>setInterval(callback, delay),
    clearInterval: (intervalId)=>clearInterval(intervalId)
};
var TimeoutManager = class {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support ReturnType<typeof setTimeout>, which is infeasible.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    #provider = defaultTimeoutProvider;
    #providerCalled = false;
    setTimeoutProvider(provider) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.#providerCalled && provider !== this.#provider) {
                console.error(`[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`, {
                    previous: this.#provider,
                    provider
                });
            }
        }
        this.#provider = provider;
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = false;
        }
    }
    setTimeout(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setTimeout(callback, delay);
    }
    clearTimeout(timeoutId) {
        this.#provider.clearTimeout(timeoutId);
    }
    setInterval(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setInterval(callback, delay);
    }
    clearInterval(intervalId) {
        this.#provider.clearInterval(intervalId);
    }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
    setTimeout(callback, 0);
}
;
 //# sourceMappingURL=timeoutManager.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.ts
__turbopack_context__.s([
    "addToEnd",
    ()=>addToEnd,
    "addToStart",
    ()=>addToStart,
    "ensureQueryFn",
    ()=>ensureQueryFn,
    "functionalUpdate",
    ()=>functionalUpdate,
    "hashKey",
    ()=>hashKey,
    "hashQueryKeyByOptions",
    ()=>hashQueryKeyByOptions,
    "isPlainArray",
    ()=>isPlainArray,
    "isPlainObject",
    ()=>isPlainObject,
    "isServer",
    ()=>isServer,
    "isValidTimeout",
    ()=>isValidTimeout,
    "keepPreviousData",
    ()=>keepPreviousData,
    "matchMutation",
    ()=>matchMutation,
    "matchQuery",
    ()=>matchQuery,
    "noop",
    ()=>noop,
    "partialMatchKey",
    ()=>partialMatchKey,
    "replaceData",
    ()=>replaceData,
    "replaceEqualDeep",
    ()=>replaceEqualDeep,
    "resolveEnabled",
    ()=>resolveEnabled,
    "resolveStaleTime",
    ()=>resolveStaleTime,
    "shallowEqualObjects",
    ()=>shallowEqualObjects,
    "shouldThrowError",
    ()=>shouldThrowError,
    "skipToken",
    ()=>skipToken,
    "sleep",
    ()=>sleep,
    "timeUntilStale",
    ()=>timeUntilStale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
var isServer = ("TURBOPACK compile-time value", "undefined") === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return Object.keys(b).every((key)=>partialMatchKey(a[key], b[key]));
    }
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b) {
    if (a === b) {
        return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? new Array(bSize) : {};
    let equalItems = 0;
    for(let i = 0; i < bSize; i++){
        const key = array ? i : bItems[i];
        const aItem = a[key];
        const bItem = b[key];
        if (aItem === bItem) {
            copy[key] = aItem;
            if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
            continue;
        }
        if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
            copy[key] = bItem;
            continue;
        }
        const v = replaceEqualDeep(aItem, bItem);
        copy[key] = v;
        if (v === aItem) equalItems++;
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
                throw error;
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
        }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") {
        return throwOnError(...params);
    }
    return !!throwOnError;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/notifyManager.ts
__turbopack_context__.s([
    "createNotifyManager",
    ()=>createNotifyManager,
    "defaultScheduler",
    ()=>defaultScheduler,
    "notifyManager",
    ()=>notifyManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
var defaultScheduler = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["systemSetTimeoutZero"];
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/subscribable.ts
__turbopack_context__.s([
    "Subscribable",
    ()=>Subscribable
]);
var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};
;
 //# sourceMappingURL=subscribable.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/focusManager.ts
__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager,
    "focusManager",
    ()=>focusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    #focused;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        });
    }
    setFocused(focused) {
        const changed = this.#focused !== focused;
        if (changed) {
            this.#focused = focused;
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        if (typeof this.#focused === "boolean") {
            return this.#focused;
        }
        return globalThis.document?.visibilityState !== "hidden";
    }
};
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/onlineManager.ts
__turbopack_context__.s([
    "OnlineManager",
    ()=>OnlineManager,
    "onlineManager",
    ()=>onlineManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    #online = true;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
        const changed = this.#online !== online;
        if (changed) {
            this.#online = online;
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return this.#online;
    }
};
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/thenable.ts
__turbopack_context__.s([
    "pendingThenable",
    ()=>pendingThenable,
    "tryResolveSync",
    ()=>tryResolveSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
function tryResolveSync(promise) {
    let data;
    promise.then((result)=>{
        data = result;
        return result;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"])?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    if (data !== void 0) {
        return {
            data
        };
    }
    return void 0;
}
;
 //# sourceMappingURL=thenable.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/retryer.ts
__turbopack_context__.s([
    "CancelledError",
    ()=>CancelledError,
    "canFetch",
    ()=>canFetch,
    "createRetryer",
    ()=>createRetryer,
    "isCancelledError",
    ()=>isCancelledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options?.revert;
        this.silent = options?.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const isResolved = ()=>thenable.status !== "pending";
    const cancel = (cancelOptions)=>{
        if (!isResolved()) {
            const error = new CancelledError(cancelOptions);
            reject(error);
            config.onCancel?.(error);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            continueFn = (value)=>{
                if (isResolved() || canContinue()) {
                    continueResolve(value);
                }
            };
            config.onPause?.();
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved()) {
                config.onContinue?.();
            }
        });
    };
    const run = ()=>{
        if (isResolved()) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            if (isResolved()) {
                return;
            }
            const retry = config.retry ?? (__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            config.onFail?.(failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        status: ()=>thenable.status,
        cancel,
        continue: ()=>{
            continueFn?.();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/removable.ts
__turbopack_context__.s([
    "Removable",
    ()=>Removable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var Removable = class {
    #gcTimeout;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            this.#gcTimeout = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime);
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
        if (this.#gcTimeout) {
            __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#gcTimeout);
            this.#gcTimeout = void 0;
        }
    }
};
;
 //# sourceMappingURL=removable.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/query.ts
__turbopack_context__.s([
    "Query",
    ()=>Query,
    "fetchState",
    ()=>fetchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)");
;
;
;
;
var Query = class extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Removable"] {
    #initialState;
    #revertState;
    #cache;
    #client;
    #retryer;
    #defaultOptions;
    #abortSignalConsumed;
    constructor(config){
        super();
        this.#abortSignalConsumed = false;
        this.#defaultOptions = config.defaultOptions;
        this.setOptions(config.options);
        this.observers = [];
        this.#client = config.client;
        this.#cache = this.#client.getQueryCache();
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        this.#initialState = getDefaultState(this.options);
        this.state = config.state ?? this.#initialState;
        this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get promise() {
        return this.#retryer?.promise;
    }
    setOptions(options) {
        this.options = {
            ...this.#defaultOptions,
            ...options
        };
        this.updateGcTime(this.options.gcTime);
        if (this.state && this.state.data === void 0) {
            const defaultState = getDefaultState(this.options);
            if (defaultState.data !== void 0) {
                this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
                this.#initialState = defaultState;
            }
        }
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") {
            this.#cache.remove(this);
        }
    }
    setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        this.#dispatch({
            data,
            type: "success",
            dataUpdatedAt: options?.updatedAt,
            manual: options?.manual
        });
        return data;
    }
    setState(state, setStateOptions) {
        this.#dispatch({
            type: "setState",
            state,
            setStateOptions
        });
    }
    cancel(options) {
        const promise = this.#retryer?.promise;
        this.#retryer?.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    reset() {
        this.destroy();
        this.setState(this.#initialState);
    }
    isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) {
            return !this.isActive();
        }
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skipToken"] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(observer.options.staleTime, this) === "static");
        }
        return false;
    }
    isStale() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        }
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(staleTime = 0) {
        if (this.state.data === void 0) {
            return true;
        }
        if (staleTime === "static") {
            return false;
        }
        if (this.state.isInvalidated) {
            return true;
        }
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    onOnline() {
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            this.#cache.notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if (this.#retryer) {
                    if (this.#abortSignalConsumed) {
                        this.#retryer.cancel({
                            revert: true
                        });
                    } else {
                        this.#retryer.cancelRetry();
                    }
                }
                this.scheduleGc();
            }
            this.#cache.notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) {
            this.#dispatch({
                type: "invalidate"
            });
        }
    }
    async fetch(options, fetchOptions) {
        if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
        // re-start the fetch; there is a chance that the query is still in a
        // pending state when that happens
        this.#retryer?.status() !== "rejected") {
            if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                this.cancel({
                    silent: true
                });
            } else if (this.#retryer) {
                this.#retryer.continueRetry();
                return this.#retryer.promise;
            }
        }
        if (options) {
            this.setOptions(options);
        }
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) {
                this.setOptions(observer.options);
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) {
                console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
            }
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    this.#abortSignalConsumed = true;
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext2 = {
                    client: this.#client,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext2);
                return queryFnContext2;
            };
            const queryFnContext = createQueryFnContext();
            this.#abortSignalConsumed = false;
            if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
            }
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context2 = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#client,
                state: this.state,
                fetchFn
            };
            addSignalProperty(context2);
            return context2;
        };
        const context = createFetchContext();
        this.options.behavior?.onFetch(context, this);
        this.#revertState = this.state;
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
            this.#dispatch({
                type: "fetch",
                meta: context.fetchOptions?.meta
            });
        }
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions?.initialPromise,
            fn: context.fetchFn,
            onCancel: (error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancelledError"] && error.revert) {
                    this.setState({
                        ...this.#revertState,
                        fetchStatus: "idle"
                    });
                }
                abortController.abort();
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        });
        try {
            const data = await this.#retryer.start();
            if (data === void 0) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                }
                throw new Error(`${this.queryHash} data is undefined`);
            }
            this.setData(data);
            this.#cache.config.onSuccess?.(data, this);
            this.#cache.config.onSettled?.(data, this.state.error, this);
            return data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancelledError"]) {
                if (error.silent) {
                    return this.#retryer.promise;
                } else if (error.revert) {
                    if (this.state.data === void 0) {
                        throw error;
                    }
                    return this.state.data;
                }
            }
            this.#dispatch({
                type: "error",
                error
            });
            this.#cache.config.onError?.(error, this);
            this.#cache.config.onSettled?.(this.state.data, error, this);
            throw error;
        } finally{
            this.scheduleGc();
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        fetchFailureCount: action.failureCount,
                        fetchFailureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...state,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...state,
                        ...fetchState(state.data, this.options),
                        fetchMeta: action.meta ?? null
                    };
                case "success":
                    const newState = {
                        ...state,
                        ...successState(action.data, action.dataUpdatedAt),
                        dataUpdateCount: state.dataUpdateCount + 1,
                        ...!action.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    this.#revertState = action.manual ? newState : void 0;
                    return newState;
                case "error":
                    const error = action.error;
                    return {
                        ...state,
                        error,
                        errorUpdateCount: state.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: state.fetchFailureCount + 1,
                        fetchFailureReason: error,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return {
                        ...state,
                        isInvalidated: true
                    };
                case "setState":
                    return {
                        ...state,
                        ...action.state
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.observers.forEach((observer)=>{
                observer.onQueryUpdate();
            });
            this.#cache.notify({
                query: this,
                type: "updated",
                action
            });
        });
    }
};
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function successState(data, dataUpdatedAt) {
    return {
        data,
        dataUpdatedAt: dataUpdatedAt ?? Date.now(),
        error: null,
        isInvalidated: false,
        status: "success"
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
 //# sourceMappingURL=query.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryCache.ts
__turbopack_context__.s([
    "QueryCache",
    ()=>QueryCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
;
;
;
;
var QueryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#queries = /* @__PURE__ */ new Map();
    }
    #queries;
    build(client, options, state) {
        const queryKey = options.queryKey;
        const queryHash = options.queryHash ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Query"]({
                client,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    add(query) {
        if (!this.#queries.has(query.queryHash)) {
            this.#queries.set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    remove(query) {
        const queryInMap = this.#queries.get(query.queryHash);
        if (queryInMap) {
            query.destroy();
            if (queryInMap === query) {
                this.#queries.delete(query.queryHash);
            }
            this.notify({
                type: "removed",
                query
            });
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    get(queryHash) {
        return this.#queries.get(queryHash);
    }
    getAll() {
        return [
            ...this.#queries.values()
        ];
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchQuery"])(defaultedFilters, query));
    }
    findAll(filters = {}) {
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchQuery"])(filters, query)) : queries;
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    onFocus() {
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    onOnline() {
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
};
;
 //# sourceMappingURL=queryCache.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/mutation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutation.ts
__turbopack_context__.s([
    "Mutation",
    ()=>Mutation,
    "getDefaultState",
    ()=>getDefaultState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)");
;
;
;
var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Removable"] {
    #client;
    #observers;
    #mutationCache;
    #retryer;
    constructor(config){
        super();
        this.#client = config.client;
        this.mutationId = config.mutationId;
        this.#mutationCache = config.mutationCache;
        this.#observers = [];
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!this.#observers.includes(observer)) {
            this.#observers.push(observer);
            this.clearGcTimeout();
            this.#mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        this.#observers = this.#observers.filter((x)=>x !== observer);
        this.scheduleGc();
        this.#mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!this.#observers.length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                this.#mutationCache.remove(this);
            }
        }
    }
    continue() {
        return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        const onContinue = ()=>{
            this.#dispatch({
                type: "continue"
            });
        };
        const mutationFnContext = {
            client: this.#client,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables, mutationFnContext);
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#mutationCache.canRun(this)
        });
        const restored = this.state.status === "pending";
        const isPaused = !this.#retryer.canStart();
        try {
            if (restored) {
                onContinue();
            } else {
                this.#dispatch({
                    type: "pending",
                    variables,
                    isPaused
                });
                await this.#mutationCache.config.onMutate?.(variables, this, mutationFnContext);
                const context = await this.options.onMutate?.(variables, mutationFnContext);
                if (context !== this.state.context) {
                    this.#dispatch({
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await this.#retryer.start();
            await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
            await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
            await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
            await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
            this.#dispatch({
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
                await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
                await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
                await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
                throw error;
            } finally{
                this.#dispatch({
                    type: "error",
                    error
                });
            }
        } finally{
            this.#mutationCache.runNext(this);
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        failureCount: action.failureCount,
                        failureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        isPaused: true
                    };
                case "continue":
                    return {
                        ...state,
                        isPaused: false
                    };
                case "pending":
                    return {
                        ...state,
                        context: action.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: action.isPaused,
                        status: "pending",
                        variables: action.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: false
                    };
                case "error":
                    return {
                        ...state,
                        data: void 0,
                        error: action.error,
                        failureCount: state.failureCount + 1,
                        failureReason: action.error,
                        isPaused: false,
                        status: "error"
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#observers.forEach((observer)=>{
                observer.onMutationUpdate(action);
            });
            this.#mutationCache.notify({
                mutation: this,
                type: "updated",
                action
            });
        });
    }
};
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
 //# sourceMappingURL=mutation.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationCache.ts
__turbopack_context__.s([
    "MutationCache",
    ()=>MutationCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/mutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
;
;
;
;
var MutationCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#mutations = /* @__PURE__ */ new Set();
        this.#scopes = /* @__PURE__ */ new Map();
        this.#mutationId = 0;
    }
    #mutations;
    #scopes;
    #mutationId;
    build(client, options, state) {
        const mutation = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mutation"]({
            client,
            mutationCache: this,
            mutationId: ++this.#mutationId,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    add(mutation) {
        this.#mutations.add(mutation);
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const scopedMutations = this.#scopes.get(scope);
            if (scopedMutations) {
                scopedMutations.push(mutation);
            } else {
                this.#scopes.set(scope, [
                    mutation
                ]);
            }
        }
        this.notify({
            type: "added",
            mutation
        });
    }
    remove(mutation) {
        if (this.#mutations.delete(mutation)) {
            const scope = scopeFor(mutation);
            if (typeof scope === "string") {
                const scopedMutations = this.#scopes.get(scope);
                if (scopedMutations) {
                    if (scopedMutations.length > 1) {
                        const index = scopedMutations.indexOf(mutation);
                        if (index !== -1) {
                            scopedMutations.splice(index, 1);
                        }
                    } else if (scopedMutations[0] === mutation) {
                        this.#scopes.delete(scope);
                    }
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    canRun(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const mutationsWithSameScope = this.#scopes.get(scope);
            const firstPendingMutation = mutationsWithSameScope?.find((m)=>m.state.status === "pending");
            return !firstPendingMutation || firstPendingMutation === mutation;
        } else {
            return true;
        }
    }
    runNext(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const foundMutation = this.#scopes.get(scope)?.find((m)=>m !== mutation && m.state.isPaused);
            return foundMutation?.continue() ?? Promise.resolve();
        } else {
            return Promise.resolve();
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#mutations.forEach((mutation)=>{
                this.notify({
                    type: "removed",
                    mutation
                });
            });
            this.#mutations.clear();
            this.#scopes.clear();
        });
    }
    getAll() {
        return Array.from(this.#mutations);
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchMutation"])(defaultedFilters, mutation));
    }
    findAll(filters = {}) {
        return this.getAll().filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchMutation"])(filters, mutation));
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]))));
    }
};
function scopeFor(mutation) {
    return mutation.options.scope?.id;
}
;
 //# sourceMappingURL=mutationCache.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/infiniteQueryBehavior.ts
__turbopack_context__.s([
    "hasNextPage",
    ()=>hasNextPage,
    "hasPreviousPage",
    ()=>hasPreviousPage,
    "infiniteQueryBehavior",
    ()=>infiniteQueryBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            const options = context.options;
            const direction = context.fetchOptions?.meta?.fetchMore?.direction;
            const oldPages = context.state.data?.pages || [];
            const oldPageParams = context.state.data?.pageParams || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    Object.defineProperty(object, "signal", {
                        enumerable: true,
                        get: ()=>{
                            if (context.signal.aborted) {
                                cancelled = true;
                            } else {
                                context.signal.addEventListener("abort", ()=>{
                                    cancelled = true;
                                });
                            }
                            return context.signal;
                        }
                    });
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) {
                        return Promise.reject();
                    }
                    if (param == null && data.pages.length) {
                        return Promise.resolve(data);
                    }
                    const createQueryFnContext = ()=>{
                        const queryFnContext2 = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext2);
                        return queryFnContext2;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages ?? oldPages.length;
                    do {
                        const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) {
                            break;
                        }
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) {
                context.fetchFn = ()=>{
                    return context.options.persister?.(fetchFn, {
                        client: context.client,
                        queryKey: context.queryKey,
                        meta: context.options.meta,
                        signal: context.signal
                    }, query);
                };
            } else {
                context.fetchFn = fetchFn;
            }
        }
    };
}
function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
 //# sourceMappingURL=infiniteQueryBehavior.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryClient.ts
__turbopack_context__.s([
    "QueryClient",
    ()=>QueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var QueryClient = class {
    #queryCache;
    #mutationCache;
    #defaultOptions;
    #queryDefaults;
    #mutationDefaults;
    #mountCount;
    #unsubscribeFocus;
    #unsubscribeOnline;
    constructor(config = {}){
        this.#queryCache = config.queryCache || new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryCache"]();
        this.#mutationCache = config.mutationCache || new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MutationCache"]();
        this.#defaultOptions = config.defaultOptions || {};
        this.#queryDefaults = /* @__PURE__ */ new Map();
        this.#mutationDefaults = /* @__PURE__ */ new Map();
        this.#mountCount = 0;
    }
    mount() {
        this.#mountCount++;
        if (this.#mountCount !== 1) return;
        this.#unsubscribeFocus = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                this.#queryCache.onFocus();
            }
        });
        this.#unsubscribeOnline = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                this.#queryCache.onOnline();
            }
        });
    }
    unmount() {
        this.#mountCount--;
        if (this.#mountCount !== 0) return;
        this.#unsubscribeFocus?.();
        this.#unsubscribeFocus = void 0;
        this.#unsubscribeOnline?.();
        this.#unsubscribeOnline = void 0;
    }
    isFetching(filters) {
        return this.#queryCache.findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(filters) {
        return this.#mutationCache.findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */ getQueryData(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state.data;
    }
    ensureQueryData(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        const query = this.#queryCache.build(this, defaultedOptions);
        const cachedData = query.state.data;
        if (cachedData === void 0) {
            return this.fetchQuery(options);
        }
        if (options.revalidateIfStale && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query))) {
            void this.prefetchQuery(defaultedOptions);
        }
        return Promise.resolve(cachedData);
    }
    getQueriesData(filters) {
        return this.#queryCache.findAll(filters).map(({ queryKey, state })=>{
            const data = state.data;
            return [
                queryKey,
                data
            ];
        });
    }
    setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const query = this.#queryCache.get(defaultedOptions.queryHash);
        const prevData = query?.state.data;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionalUpdate"])(updater, prevData);
        if (data === void 0) {
            return void 0;
        }
        return this.#queryCache.build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    setQueriesData(filters, updater, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map(({ queryKey })=>[
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ]));
    }
    getQueryState(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state;
    }
    removeQueries(filters) {
        const queryCache = this.#queryCache;
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    resetQueries(filters, options) {
        const queryCache = this.#queryCache;
        return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries({
                type: "active",
                ...filters
            }, options);
        });
    }
    cancelQueries(filters, cancelOptions = {}) {
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    invalidateQueries(filters, options = {}) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#queryCache.findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if (filters?.refetchType === "none") {
                return Promise.resolve();
            }
            return this.refetchQueries({
                ...filters,
                type: filters?.refetchType ?? filters?.type ?? "active"
            }, options);
        });
    }
    refetchQueries(filters, options = {}) {
        const fetchOptions = {
            ...options,
            cancelRefetch: options.cancelRefetch ?? true
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).filter((query)=>!query.isDisabled() && !query.isStatic()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                    promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) {
            defaultedOptions.retry = false;
        }
        const query = this.#queryCache.build(this, defaultedOptions);
        return query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    prefetchQuery(options) {
        return this.fetchQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchInfiniteQuery(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.fetchQuery(options);
    }
    prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    ensureInfiniteQueryData(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.ensureQueryData(options);
    }
    resumePausedMutations() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) {
            return this.#mutationCache.resumePausedMutations();
        }
        return Promise.resolve();
    }
    getQueryCache() {
        return this.#queryCache;
    }
    getMutationCache() {
        return this.#mutationCache;
    }
    getDefaultOptions() {
        return this.#defaultOptions;
    }
    setDefaultOptions(options) {
        this.#defaultOptions = options;
    }
    setQueryDefaults(queryKey, options) {
        this.#queryDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    getQueryDefaults(queryKey) {
        const defaults = [
            ...this.#queryDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partialMatchKey"])(queryKey, queryDefault.queryKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    setMutationDefaults(mutationKey, options) {
        this.#mutationDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    getMutationDefaults(mutationKey) {
        const defaults = [
            ...this.#mutationDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partialMatchKey"])(mutationKey, queryDefault.mutationKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    defaultQueryOptions(options) {
        if (options._defaulted) {
            return options;
        }
        const defaultedOptions = {
            ...this.#defaultOptions.queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) {
            defaultedOptions.queryHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(defaultedOptions.queryKey, defaultedOptions);
        }
        if (defaultedOptions.refetchOnReconnect === void 0) {
            defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        }
        if (defaultedOptions.throwOnError === void 0) {
            defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        }
        if (!defaultedOptions.networkMode && defaultedOptions.persister) {
            defaultedOptions.networkMode = "offlineFirst";
        }
        if (defaultedOptions.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skipToken"]) {
            defaultedOptions.enabled = false;
        }
        return defaultedOptions;
    }
    defaultMutationOptions(options) {
        if (options?._defaulted) {
            return options;
        }
        return {
            ...this.#defaultOptions.mutations,
            ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    clear() {
        this.#queryCache.clear();
        this.#mutationCache.clear();
    }
};
;
 //# sourceMappingURL=queryClient.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/hygiea/front-doctor/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combine",
    ()=>combine,
    "createJSONStorage",
    ()=>createJSONStorage,
    "devtools",
    ()=>devtools,
    "persist",
    ()=>persist,
    "redux",
    ()=>redux,
    "subscribeWithSelector",
    ()=>subscribeWithSelector
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("hygiea/front-doctor/node_modules/zustand/esm/middleware.mjs")}`;
    }
};
const reduxImpl = (reducer, initial)=>(set, _get, api)=>{
        api.dispatch = (action)=>{
            set((state)=>reducer(state, action), false, action);
            return action;
        };
        api.dispatchFromDevtools = true;
        return {
            dispatch: (...a)=>api.dispatch(...a),
            ...initial
        };
    };
const redux = reduxImpl;
const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name)=>{
    const api = trackedConnections.get(name);
    if (!api) return {};
    return Object.fromEntries(Object.entries(api.stores).map(([key, api2])=>[
            key,
            api2.getState()
        ]));
};
const extractConnectionInformation = (store, extensionConnector, options)=>{
    if (store === void 0) {
        return {
            type: "untracked",
            connection: extensionConnector.connect(options)
        };
    }
    const existingConnection = trackedConnections.get(options.name);
    if (existingConnection) {
        return {
            type: "tracked",
            store,
            ...existingConnection
        };
    }
    const newConnection = {
        connection: extensionConnector.connect(options),
        stores: {}
    };
    trackedConnections.set(options.name, newConnection);
    return {
        type: "tracked",
        store,
        ...newConnection
    };
};
const devtoolsImpl = (fn, devtoolsOptions = {})=>(set, get, api)=>{
        const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
        let extensionConnector;
        try {
            extensionConnector = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (e) {}
        if (!extensionConnector) {
            return fn(set, get, api);
        }
        const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
        let isRecording = true;
        api.setState = (state, replace, nameOrAction)=>{
            const r = set(state, replace);
            if (!isRecording) return r;
            const action = nameOrAction === void 0 ? {
                type: anonymousActionType || "anonymous"
            } : typeof nameOrAction === "string" ? {
                type: nameOrAction
            } : nameOrAction;
            if (store === void 0) {
                connection == null ? void 0 : connection.send(action, get());
                return r;
            }
            connection == null ? void 0 : connection.send({
                ...action,
                type: `${store}/${action.type}`
            }, {
                ...getTrackedConnectionState(options.name),
                [store]: api.getState()
            });
            return r;
        };
        const setStateFromDevtools = (...a)=>{
            const originalIsRecording = isRecording;
            isRecording = false;
            set(...a);
            isRecording = originalIsRecording;
        };
        const initialState = fn(api.setState, get, api);
        if (connectionInformation.type === "untracked") {
            connection == null ? void 0 : connection.init(initialState);
        } else {
            connectionInformation.stores[connectionInformation.store] = api;
            connection == null ? void 0 : connection.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2])=>[
                    key,
                    key === connectionInformation.store ? initialState : store2.getState()
                ])));
        }
        if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
            let didWarnAboutReservedActionType = false;
            const originalDispatch = api.dispatch;
            api.dispatch = (...a)=>{
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && a[0].type === "__setState" && !didWarnAboutReservedActionType) {
                    console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.');
                    didWarnAboutReservedActionType = true;
                }
                originalDispatch(...a);
            };
        }
        connection.subscribe((message)=>{
            var _a;
            switch(message.type){
                case "ACTION":
                    if (typeof message.payload !== "string") {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return;
                    }
                    return parseJsonThen(message.payload, (action)=>{
                        if (action.type === "__setState") {
                            if (store === void 0) {
                                setStateFromDevtools(action.state);
                                return;
                            }
                            if (Object.keys(action.state).length !== 1) {
                                console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                            }
                            const stateFromDevtools = action.state[store];
                            if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                                return;
                            }
                            if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                                setStateFromDevtools(stateFromDevtools);
                            }
                            return;
                        }
                        if (!api.dispatchFromDevtools) return;
                        if (typeof api.dispatch !== "function") return;
                        api.dispatch(action);
                    });
                case "DISPATCH":
                    switch(message.payload.type){
                        case "RESET":
                            setStateFromDevtools(initialState);
                            if (store === void 0) {
                                return connection == null ? void 0 : connection.init(api.getState());
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "COMMIT":
                            if (store === void 0) {
                                connection == null ? void 0 : connection.init(api.getState());
                                return;
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "ROLLBACK":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    connection == null ? void 0 : connection.init(api.getState());
                                    return;
                                }
                                setStateFromDevtools(state[store]);
                                connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    return;
                                }
                                if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                                    setStateFromDevtools(state[store]);
                                }
                            });
                        case "IMPORT_STATE":
                            {
                                const { nextLiftedState } = message.payload;
                                const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
                                if (!lastComputedState) return;
                                if (store === void 0) {
                                    setStateFromDevtools(lastComputedState);
                                } else {
                                    setStateFromDevtools(lastComputedState[store]);
                                }
                                connection == null ? void 0 : connection.send(null, // FIXME no-any
                                nextLiftedState);
                                return;
                            }
                        case "PAUSE_RECORDING":
                            return isRecording = !isRecording;
                    }
                    return;
            }
        });
        return initialState;
    };
const devtools = devtoolsImpl;
const parseJsonThen = (stringified, f)=>{
    let parsed;
    try {
        parsed = JSON.parse(stringified);
    } catch (e) {
        console.error("[zustand devtools middleware] Could not parse the received json", e);
    }
    if (parsed !== void 0) f(parsed);
};
const subscribeWithSelectorImpl = (fn)=>(set, get, api)=>{
        const origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options)=>{
            let listener = selector;
            if (optListener) {
                const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
                let currentSlice = selector(api.getState());
                listener = (state)=>{
                    const nextSlice = selector(state);
                    if (!equalityFn(currentSlice, nextSlice)) {
                        const previousSlice = currentSlice;
                        optListener(currentSlice = nextSlice, previousSlice);
                    }
                };
                if (options == null ? void 0 : options.fireImmediately) {
                    optListener(currentSlice, currentSlice);
                }
            }
            return origSubscribe(listener);
        };
        const initialState = fn(set, get, api);
        return initialState;
    };
const subscribeWithSelector = subscribeWithSelectorImpl;
const combine = (initialState, create)=>(...a)=>Object.assign({}, initialState, create(...a));
function createJSONStorage(getStorage, options) {
    let storage;
    try {
        storage = getStorage();
    } catch (e) {
        return;
    }
    const persistStorage = {
        getItem: (name)=>{
            var _a;
            const parse = (str2)=>{
                if (str2 === null) {
                    return null;
                }
                return JSON.parse(str2, options == null ? void 0 : options.reviver);
            };
            const str = (_a = storage.getItem(name)) != null ? _a : null;
            if (str instanceof Promise) {
                return str.then(parse);
            }
            return parse(str);
        },
        setItem: (name, newValue)=>storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
        removeItem: (name)=>storage.removeItem(name)
    };
    return persistStorage;
}
const toThenable = (fn)=>(input)=>{
        try {
            const result = fn(input);
            if (result instanceof Promise) {
                return result;
            }
            return {
                then (onFulfilled) {
                    return toThenable(onFulfilled)(result);
                },
                catch (_onRejected) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then (_onFulfilled) {
                    return this;
                },
                catch (onRejected) {
                    return toThenable(onRejected)(e);
                }
            };
        }
    };
const persistImpl = (config, baseOptions)=>(set, get, api)=>{
        let options = {
            storage: createJSONStorage(()=>localStorage),
            partialize: (state)=>state,
            version: 0,
            merge: (persistedState, currentState)=>({
                    ...currentState,
                    ...persistedState
                }),
            ...baseOptions
        };
        let hasHydrated = false;
        const hydrationListeners = /* @__PURE__ */ new Set();
        const finishHydrationListeners = /* @__PURE__ */ new Set();
        let storage = options.storage;
        if (!storage) {
            return config((...args)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
                set(...args);
            }, get, api);
        }
        const setItem = ()=>{
            const state = options.partialize({
                ...get()
            });
            return storage.setItem(options.name, {
                state,
                version: options.version
            });
        };
        const savedSetState = api.setState;
        api.setState = (state, replace)=>{
            savedSetState(state, replace);
            void setItem();
        };
        const configResult = config((...args)=>{
            set(...args);
            void setItem();
        }, get, api);
        api.getInitialState = ()=>configResult;
        let stateFromStorage;
        const hydrate = ()=>{
            var _a, _b;
            if (!storage) return;
            hasHydrated = false;
            hydrationListeners.forEach((cb)=>{
                var _a2;
                return cb((_a2 = get()) != null ? _a2 : configResult);
            });
            const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
            return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue)=>{
                if (deserializedStorageValue) {
                    if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                        if (options.migrate) {
                            return [
                                true,
                                options.migrate(deserializedStorageValue.state, deserializedStorageValue.version)
                            ];
                        }
                        console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
                    } else {
                        return [
                            false,
                            deserializedStorageValue.state
                        ];
                    }
                }
                return [
                    false,
                    void 0
                ];
            }).then((migrationResult)=>{
                var _a2;
                const [migrated, migratedState] = migrationResult;
                stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
                set(stateFromStorage, true);
                if (migrated) {
                    return setItem();
                }
            }).then(()=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
                stateFromStorage = get();
                hasHydrated = true;
                finishHydrationListeners.forEach((cb)=>cb(stateFromStorage));
            }).catch((e)=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
            });
        };
        api.persist = {
            setOptions: (newOptions)=>{
                options = {
                    ...options,
                    ...newOptions
                };
                if (newOptions.storage) {
                    storage = newOptions.storage;
                }
            },
            clearStorage: ()=>{
                storage == null ? void 0 : storage.removeItem(options.name);
            },
            getOptions: ()=>options,
            rehydrate: ()=>hydrate(),
            hasHydrated: ()=>hasHydrated,
            onHydrate: (cb)=>{
                hydrationListeners.add(cb);
                return ()=>{
                    hydrationListeners.delete(cb);
                };
            },
            onFinishHydration: (cb)=>{
                finishHydrationListeners.add(cb);
                return ()=>{
                    finishHydrationListeners.delete(cb);
                };
            }
        };
        if (!options.skipHydration) {
            hydrate();
        }
        return stateFromStorage || configResult;
    };
const persist = persistImpl;
;
}),
"[project]/hygiea/front-doctor/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events){
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++){
        ee[i] = handlers[i].fn;
    }
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++){
            args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++){
                        args[j - 1] = arguments[j];
                    }
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
        }
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++){
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
            }
        }
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = EventEmitter;
}
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/hygiea/front-doctor/node_modules/@wagmi/core/node_modules/eventemitter3/index.js [app-ssr] (ecmascript) <export default as EventEmitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventEmitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)");
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/ethersutils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SPDX-License-Identifier: MIT
// https://github.com/ethers-io/ethers.js/blob/main/LICENSE.md
// This file avoids importing the Ethers library
/**
 *  Returns true if %%value%% is a valid [[HexString]].
 *
 *  If %%length%% is ``true`` or a //number//, it also checks that
 *  %%value%% is a valid [[DataHexString]] of %%length%% (if a //number//)
 *  bytes of data (e.g. ``0x1234`` is 2 bytes).
 */ __turbopack_context__.s([
    "fromQuantity",
    ()=>fromQuantity,
    "getBytes",
    ()=>getBytes,
    "hexlify",
    ()=>hexlify,
    "isBytesLike",
    ()=>isBytesLike,
    "isHexString",
    ()=>isHexString
]);
function isHexString(value, length) {
    if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (typeof length === 'number' && value.length !== 2 + 2 * length) {
        return false;
    }
    if (length === true && value.length % 2 !== 0) {
        return false;
    }
    return true;
}
function isBytesLike(value) {
    return isHexString(value, true) || value instanceof Uint8Array;
}
function getBytes(value, name, copy) {
    if (value instanceof Uint8Array) {
        if (copy) {
            return new Uint8Array(value);
        }
        return value;
    }
    if (typeof value === 'string' && value.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
        const result = new Uint8Array((value.length - 2) / 2);
        let offset = 2;
        for(let i = 0; i < result.length; i++){
            result[i] = parseInt(value.substring(offset, offset + 2), 16);
            offset += 2;
        }
        return result;
    }
    throw new Error(`invalid BytesLike value ${name !== null && name !== void 0 ? name : ''}`);
}
const HexCharacters = '0123456789abcdef';
function hexlify(data) {
    const bytes = getBytes(data);
    let result = '0x';
    for(let i = 0; i < bytes.length; i++){
        const v = bytes[i];
        result += HexCharacters[(v & 0xf0) >> 4] + HexCharacters[v & 0x0f];
    }
    return result;
}
function fromQuantity(quantity) {
    if (typeof quantity === 'string') {
        if (quantity.startsWith('0x')) {
            return parseInt(quantity, 16);
        }
        return parseInt(quantity); // Assumed to be base 10
    }
    return quantity;
} //# sourceMappingURL=ethersutils.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "CALLDATAPUBLICKEY_CALLDATA",
    ()=>CALLDATAPUBLICKEY_CALLDATA,
    "SUBCALL_ADDR",
    ()=>SUBCALL_ADDR
]);
const SUBCALL_ADDR = '0x0100000000000000000000000000000000000103';
const CALLDATAPUBLICKEY_CALLDATA = '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000016636f72652e43616c6c446174615075626c69634b6579000000000000000000000000000000000000000000000000000000000000000000000000000000000001f600000000000000000000000000000000000000000000000000000000000000'; //# sourceMappingURL=constants.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/munacl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SPDX-License-Identifier: Unlicense
// Minimum necessary functions extracted and made TypeScript compatible from:
// https://github.com/dchest/tweetnacl-js/blob/fecde6ecf0eb81e31d54ca0509531ab1b825f490/nacl-fast.js
__turbopack_context__.s([
    "MuNaclError",
    ()=>MuNaclError,
    "boxKeyPairFromSecretKey",
    ()=>boxKeyPairFromSecretKey,
    "crypto_box_PUBLICKEYBYTES",
    ()=>crypto_box_PUBLICKEYBYTES,
    "crypto_box_SECRETKEYBYTES",
    ()=>crypto_box_SECRETKEYBYTES,
    "crypto_scalarmult_BYTES",
    ()=>crypto_scalarmult_BYTES,
    "crypto_scalarmult_SCALARBYTES",
    ()=>crypto_scalarmult_SCALARBYTES,
    "naclScalarMult",
    ()=>naclScalarMult,
    "naclScalarMultBase",
    ()=>naclScalarMultBase
]);
function gf(init) {
    const r = new Float64Array(16);
    if (init) {
        for(let i = 0; i < init.length; i++)r[i] = init[i];
    }
    return r;
}
const crypto_box_SECRETKEYBYTES = 32;
const crypto_box_PUBLICKEYBYTES = 32;
const crypto_scalarmult_BYTES = 32;
const crypto_scalarmult_SCALARBYTES = 32;
const _9 = new Uint8Array(32);
_9[0] = 9;
const _121665 = gf([
    0xdb41,
    1
]);
function sel25519(p, q, b) {
    let t;
    const c = ~(b - 1);
    for(let i = 0; i < 16; i++){
        t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function inv25519(o, i) {
    const c = gf();
    let a;
    for(a = 0; a < 16; a++)c[a] = i[a];
    for(a = 253; a >= 0; a--){
        S(c, c);
        if (a !== 2 && a !== 4) M(c, c, i);
    }
    for(a = 0; a < 16; a++)o[a] = c[a];
}
function car25519(o) {
    let v, c = 1;
    for(let i = 0; i < 16; i++){
        v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function unpack25519(o, n) {
    for(let i = 0; i < 16; i++)o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    o[15] &= 0x7fff;
}
function pack25519(o, n) {
    let i, j, b;
    const m = gf(), t = gf();
    for(i = 0; i < 16; i++)t[i] = n[i];
    car25519(t);
    car25519(t);
    car25519(t);
    for(j = 0; j < 2; j++){
        m[0] = t[0] - 0xffed;
        for(i = 1; i < 15; i++){
            m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
        b = m[15] >> 16 & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
    }
    for(i = 0; i < 16; i++){
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function A(o, a, b) {
    for(let i = 0; i < 16; i++)o[i] = a[i] + b[i];
}
function Z(o, a, b) {
    for(let i = 0; i < 16; i++)o[i] = a[i] - b[i];
}
function M(o, a, b) {
    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0;
    const b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function S(o, a) {
    M(o, a, a);
}
function crypto_scalarmult(q, n, p) {
    const z = new Uint8Array(32);
    const x = new Float64Array(80);
    let r, i;
    const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
    for(i = 0; i < 31; i++)z[i] = n[i];
    z[31] = n[31] & 127 | 64;
    z[0] &= 248;
    unpack25519(x, p);
    for(i = 0; i < 16; i++){
        b[i] = x[i];
        d[i] = a[i] = c[i] = 0;
    }
    a[0] = d[0] = 1;
    for(i = 254; i >= 0; --i){
        r = z[i >>> 3] >>> (i & 7) & 1;
        sel25519(a, b, r);
        sel25519(c, d, r);
        A(e, a, c);
        Z(a, a, c);
        A(c, b, d);
        Z(b, b, d);
        S(d, e);
        S(f, a);
        M(a, c, a);
        M(c, b, e);
        A(e, a, c);
        Z(a, a, c);
        S(b, a);
        Z(c, d, f);
        M(a, c, _121665);
        A(a, a, d);
        M(c, c, a);
        M(a, d, f);
        M(d, b, x);
        S(b, e);
        sel25519(a, b, r);
        sel25519(c, d, r);
    }
    for(i = 0; i < 16; i++){
        x[i + 16] = a[i];
        x[i + 32] = c[i];
        x[i + 48] = b[i];
        x[i + 64] = d[i];
    }
    const x32 = x.subarray(32);
    const x16 = x.subarray(16);
    inv25519(x32, x32);
    M(x16, x16, x32);
    pack25519(q, x16);
    return q;
}
function crypto_scalarmult_base(q, n) {
    return crypto_scalarmult(q, n, _9);
}
class MuNaclError extends Error {
}
function naclScalarMult(n, p) {
    if (n.length !== crypto_scalarmult_SCALARBYTES) {
        throw new MuNaclError('bad n size');
    }
    if (p.length !== crypto_scalarmult_BYTES) {
        throw new MuNaclError('bad p size');
    }
    return crypto_scalarmult(new Uint8Array(crypto_scalarmult_BYTES), n, p);
}
function naclScalarMultBase(n) {
    return naclScalarMult(n, _9);
}
function boxKeyPairFromSecretKey(secretKey) {
    if (secretKey.length !== crypto_box_SECRETKEYBYTES) {
        throw new MuNaclError('bad secret key size');
    }
    return {
        publicKey: crypto_scalarmult_base(new Uint8Array(crypto_box_PUBLICKEYBYTES), secretKey),
        secretKey: new Uint8Array(secretKey)
    };
} //# sourceMappingURL=munacl.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/cipher.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "Cipher",
    ()=>Cipher,
    "CipherKind",
    ()=>CipherKind,
    "EnvelopeError",
    ()=>EnvelopeError,
    "X25519DeoxysII",
    ()=>X25519DeoxysII,
    "isCalldataEnveloped",
    ()=>isCalldataEnveloped
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$cborg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/cborg.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/decode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/encode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$deoxysii$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/deoxysii/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha512$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@noble/hashes/esm/sha512.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@noble/hashes/esm/hmac.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$munacl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/munacl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/ethersutils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Some Ethereum libraries are picky about hex encoding vs Uint8Array
 *
 * The ethers BytesLike type can be either, if the request came as a hex encoded
 * string we should return hex encoded string, if request came as Uint8Array we
 * should return one.
 *
 * Notably hardhat-ignition doesn't work well with Uint8Array responses
 *
 * @param example Some example data, where we should return the same type
 * @param output Output data
 * @returns Output data, as either hex encoded 0x-prefixed string, or Uint8Array
 */ function asBytesLike(example, output) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytesLike"])(example) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytesLike"])(output)) {
        throw new Error('Not byteslike data!');
    }
    if (typeof example === 'string') {
        if (typeof output === 'string') {
            return output;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexlify"])(output);
    }
    if (typeof output === 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexlify"])(output);
    }
    return output;
}
var CipherKind;
(function(CipherKind) {
    CipherKind[CipherKind["X25519DeoxysII"] = 1] = "X25519DeoxysII";
})(CipherKind || (CipherKind = {}));
function formatFailure(fail) {
    if (fail.message) return fail.message;
    return `Call failed in module '${fail.module}' with code '${fail.code}'`;
}
class Cipher {
    /** Encrypts the plaintext and encodes it for sending. */ encryptCall(calldata, nonce) {
        // Txs without data are just balance transfers, and all data in those is public.
        if (calldata === undefined || calldata === null || calldata.length === 0) return '';
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytesLike"])(calldata)) {
            throw new Error('Attempted to sign tx having non-byteslike data.');
        }
        const innerEnvelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])({
            body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(calldata)
        });
        let ciphertext;
        ({ ciphertext, nonce } = this.encrypt(innerEnvelope, nonce));
        const envelope = {
            format: this.kind,
            body: {
                pk: this.publicKey,
                nonce,
                data: ciphertext,
                epoch: this.epoch
            }
        };
        return asBytesLike(calldata, (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(envelope));
    }
    decryptCall(envelopeBytes) {
        const envelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(envelopeBytes));
        if (!isEnvelopeFormatOk(envelope)) //TURBOPACK unreachable
        ;
        const result = this.decrypt(envelope.body.nonce, envelope.body.data);
        const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(result);
        return asBytesLike(envelopeBytes, inner.body);
    }
    encryptResult(ok, innerFail, outerFail) {
        if (ok || innerFail) {
            if (ok && innerFail || outerFail) {
                throw new EnvelopeError('Conflicting result envelope', {
                    ok,
                    innerFail,
                    outerFail
                });
            }
            // Inner envelope is encrypted
            const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(innerFail ? {
                fail: innerFail
            } : {
                ok
            });
            const { nonce, ciphertext: data } = this.encrypt(inner);
            // Outer envelope is plaintext
            const envelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])({
                ok: {
                    nonce,
                    data
                }
            });
            return envelope;
        }
        if (outerFail) {
            // Outer failures are returned in plaintext
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])({
                fail: outerFail
            });
        }
        throw new EnvelopeError('Cannot encrypt result with no data or failures!', {
            ok,
            innerFail,
            outerFail
        });
    }
    /** Decrypts the data contained within a hex-encoded serialized envelope. */ decryptResult(callResult) {
        var _a;
        const envelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(callResult));
        if (envelope.fail) {
            throw new EnvelopeError(formatFailure(envelope.fail), envelope.fail);
        }
        // Unencrypted results will have `ok` as bytes, not a struct
        if (envelope.ok && (typeof envelope.ok === 'string' || envelope.ok instanceof Uint8Array)) {
            throw new EnvelopeError('Received unencrypted envelope', envelope);
        }
        // Encrypted result will have `ok` as a CBOR encoded struct
        const { nonce, data } = (_a = envelope.ok) !== null && _a !== void 0 ? _a : envelope.unknown;
        const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(this.decrypt(nonce, data));
        if (inner.ok) {
            return asBytesLike(callResult, (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(inner.ok));
        }
        if (inner.fail) {
            throw new EnvelopeError(formatFailure(inner.fail), inner.fail);
        }
        throw new EnvelopeError(`Unexpected inner call result: ${JSON.stringify(inner)}`, inner);
    }
}
class X25519DeoxysII extends Cipher {
    /** Creates a new cipher using an ephemeral keypair stored in memory. */ static ephemeral(peerPublicKey, epoch) {
        const keypair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$munacl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boxKeyPairFromSecretKey"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomBytes"])(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$munacl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto_box_SECRETKEYBYTES"]));
        return new X25519DeoxysII(keypair, (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(peerPublicKey), epoch);
    }
    static fromSecretKey(secretKey, peerPublicKey, epoch) {
        const keypair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$munacl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boxKeyPairFromSecretKey"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(secretKey));
        return new X25519DeoxysII(keypair, (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(peerPublicKey), epoch);
    }
    constructor(keypair, peerPublicKey, epoch){
        super();
        this.kind = CipherKind.X25519DeoxysII;
        this.publicKey = keypair.publicKey;
        this.ephemeralKey = keypair.secretKey;
        this.epoch = epoch;
        // Derive a shared secret using X25519 (followed by hashing to remove ECDH bias).
        const keyBytes = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hmac"].create(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha512$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha512_256"], new TextEncoder().encode('MRAE_Box_Deoxys-II-256-128')).update((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$munacl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["naclScalarMult"])(keypair.secretKey, peerPublicKey)).digest().buffer;
        this.secretKey = new Uint8Array(keyBytes);
        this.cipher = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$deoxysii$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].AEAD(new Uint8Array(this.secretKey)); // deoxysii owns the input
    }
    encrypt(plaintext, nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomBytes"])(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$deoxysii$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].NonceSize)) {
        const ciphertext = this.cipher.encrypt(nonce, plaintext);
        return {
            nonce,
            ciphertext
        };
    }
    decrypt(nonce, ciphertext) {
        return this.cipher.decrypt(nonce, ciphertext);
    }
}
class EnvelopeError extends Error {
    constructor(message, response){
        super(message);
        this.response = response;
    }
}
function isEnvelopeFormatOk(envelope) {
    const { format, body } = envelope;
    if (!body || !format) {
        throw new EnvelopeError('No body or format specified', envelope);
    }
    if (format !== CipherKind.X25519DeoxysII) {
        throw new EnvelopeError('Not encrypted format', envelope);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytesLike"])(body)) throw new EnvelopeError('Requires struct body', envelope);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytesLike"])(body.data)) throw new EnvelopeError('No body data', envelope);
    return true;
}
function isCalldataEnveloped(calldata) {
    if (calldata === undefined) {
        return false;
    }
    try {
        const envelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(calldata));
        if (!isEnvelopeFormatOk(envelope)) //TURBOPACK unreachable
        ;
        return true;
    } catch (e) {
        if (e instanceof EnvelopeError) throw e;
    }
    return false;
} //# sourceMappingURL=cipher.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/calldatapublickey.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "FetchError",
    ()=>FetchError,
    "KeyFetcher",
    ()=>KeyFetcher,
    "fetchRuntimePublicKey",
    ()=>fetchRuntimePublicKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$cborg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/cborg.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/decode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/ethersutils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$cipher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/cipher.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
/**
 * calldata public keys are cached for this amount of time
 * This prevents frequent unnecessary re-fetches
 * This time is in milliseconds
 */ const DEFAULT_PUBKEY_CACHE_EXPIRATION_MS = 60 * 5 * 1000;
class FetchError extends Error {
    constructor(message, response){
        super(message);
        this.response = response;
    }
}
function parseBigIntFromByteArray(bytes) {
    const eight = BigInt(8);
    return bytes.reduce((acc, byte)=>acc << eight | BigInt(byte), BigInt(0));
}
class AbiDecodeError extends Error {
}
/// Manual ABI-parsing of ['uint', 'bytes']
function parseAbiEncodedUintBytes(bytes) {
    if (bytes.length < 32 * 3) {
        throw new AbiDecodeError('too short');
    }
    const status = parseBigIntFromByteArray(bytes.slice(0, 32));
    const offset = Number(parseBigIntFromByteArray(bytes.slice(32, 64)));
    if (bytes.length < offset + 32) {
        throw new AbiDecodeError('too short, offset');
    }
    const data_length = Number(parseBigIntFromByteArray(bytes.slice(offset, offset + 32)));
    if (bytes.length < offset + 32 + data_length) {
        throw new AbiDecodeError('too short, data');
    }
    const data = bytes.slice(offset + 32, offset + 32 + data_length);
    return [
        status,
        data
    ];
}
function fetchRuntimePublicKey(args) {
    return __awaiter(this, void 0, void 0, function*() {
        let chainId = undefined;
        const { upstream } = args;
        chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromQuantity"])((yield upstream.request({
            method: 'eth_chainId'
        })));
        // NOTE: we hard-code the eth_call data, as it never changes
        //       It's equivalent to: // abi_encode(['string', 'bytes'], ['core.CallDataPublicKey', cborEncode(null)])
        const call_resp = yield upstream.request({
            method: 'eth_call',
            params: [
                {
                    to: __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUBCALL_ADDR"],
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALLDATAPUBLICKEY_CALLDATA"]
                },
                'latest'
            ]
        });
        if (call_resp === '0x') {
            throw new Error(`fetchRuntimePublicKey - invalid response: ${call_resp}`);
        }
        const resp_bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytes"])(call_resp);
        // NOTE: to avoid pulling-in a full ABI decoder dependency, slice it manually
        const [resp_status, resp_cbor] = parseAbiEncodedUintBytes(resp_bytes);
        if (resp_status !== BigInt(0)) {
            throw new Error(`fetchRuntimePublicKey - invalid status: ${resp_status}`);
        }
        const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(resp_cbor);
        return {
            key: response.public_key.key,
            checksum: response.public_key.checksum,
            signature: response.public_key.signature,
            epoch: response.epoch,
            chainId,
            fetched: new Date()
        };
    });
}
class KeyFetcher {
    constructor(timeoutMilliseconds = DEFAULT_PUBKEY_CACHE_EXPIRATION_MS){
        this.timeoutMilliseconds = timeoutMilliseconds;
    }
    /**
     * Retrieve cached key if possible, otherwise fetch a fresh one
     *
     * @param upstream Upstream ETH JSON-RPC provider
     * @returns calldata public key
     */ fetch(upstream) {
        return __awaiter(this, void 0, void 0, function*() {
            if (upstream === undefined) {
                throw new Error('fetch() Upstream must not be undefined!');
            }
            if (this.pubkey) {
                const pk = this.pubkey;
                const expiry = Date.now() - this.timeoutMilliseconds;
                if (pk.fetched && pk.fetched.valueOf() >= expiry) {
                    // XXX: if provider switch chain, may return cached key for wrong chain
                    return pk;
                }
            }
            return this.pubkey = yield fetchRuntimePublicKey({
                upstream
            });
        });
    }
    cipher(upstream) {
        return __awaiter(this, void 0, void 0, function*() {
            const { key, epoch } = yield this.fetch(upstream).catch((error)=>{
                // Log error to help debug: rainbowkit swallowed err if getChainId called this during connectToWallet
                console.error('KeyFetcher.cipher failed', error);
                throw error;
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$cipher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X25519DeoxysII"].ephemeral(key, epoch);
        });
    }
    cipherSync() {
        if (!this.pubkey) {
            throw new Error('No cached pubkey!');
        }
        const { key, epoch } = this.pubkey;
        return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$cipher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X25519DeoxysII"].ephemeral(key, epoch);
    }
} //# sourceMappingURL=calldatapublickey.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/provider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "detectSapphireSnap",
    ()=>detectSapphireSnap,
    "fillOptions",
    ()=>fillOptions,
    "isCallDataPublicKeyQuery",
    ()=>isCallDataPublicKeyQuery,
    "isEthereumProvider",
    ()=>isEthereumProvider,
    "isLegacyProvider",
    ()=>isLegacyProvider,
    "isWrappedEthereumProvider",
    ()=>isWrappedEthereumProvider,
    "isWrappedRequestFn",
    ()=>isWrappedRequestFn,
    "makeSapphireRequestFn",
    ()=>makeSapphireRequestFn,
    "makeTaggedProxyObject",
    ()=>makeTaggedProxyObject,
    "notifySapphireSnap",
    ()=>notifySapphireSnap,
    "wrapEthereumProvider",
    ()=>wrapEthereumProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/ethersutils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$calldatapublickey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/calldatapublickey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/constants.js [app-ssr] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
function isEthereumProvider(p) {
    return 'request' in p && typeof p.request === 'function';
}
function isLegacyProvider(p) {
    return 'send' in p && typeof p.send === 'function';
}
function fillOptions(options) {
    if (!options) {
        options = {};
    }
    if (!options.fetcher) {
        options.fetcher = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$calldatapublickey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyFetcher"]();
    }
    return options;
}
// -----------------------------------------------------------------------------
// Wrap an Ethereum compatible provider to expose a consistent request() iface
const SAPPHIRE_WRAPPED_ETHEREUMPROVIDER = '#SAPPHIRE_WRAPPED_ETHEREUMPROVIDER';
function isWrappedEthereumProvider(p) {
    return p && SAPPHIRE_WRAPPED_ETHEREUMPROVIDER in p;
}
function wrapEthereumProvider(upstream, options) {
    if (isWrappedEthereumProvider(upstream)) {
        return upstream;
    }
    if (!isEthereumProvider(upstream) && !isLegacyProvider(upstream)) {
        throw new Error('It is neither an Ethereum nor a Legacy provider');
    }
    const filled_options = fillOptions(options);
    // if upstream provides a send() function but not request function
    // then derive a request() function from the send() function
    // if we do this, don't then re-wrap the send() function
    // only wrap the send() function if there was a request() function
    const request = makeSapphireRequestFn(upstream, filled_options);
    const hooks = {
        request
    };
    // We prefer a request() method, but a provider may expose a send() method
    // Like Hardhat's LazyInitializationProviderAdapter, which is used with Ethers
    // So, everything gets sent through the Sapphire-wrapped request() function
    if ('send' in upstream) hooks.send = (method, params)=>{
        return request({
            method,
            params
        });
    };
    // sendAsync implementations vary too widely to be used as a standard
    if ('sendAsync' in upstream) hooks.sendAsync = ()=>{
        throw new Error('sendAsync not supported!');
    };
    return makeTaggedProxyObject(upstream, SAPPHIRE_WRAPPED_ETHEREUMPROVIDER, filled_options, hooks);
}
const SAPPHIRE_SNAP_ID = 'npm:@oasisprotocol/sapphire-snap';
function detectSapphireSnap(provider) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const installedSnaps = yield provider.request({
                method: 'wallet_getSnaps'
            });
            for (const snap of Object.values(installedSnaps)){
                if (snap.id === SAPPHIRE_SNAP_ID) {
                    return snap.id;
                }
            }
        } catch (e) {
            return undefined;
        }
    });
}
function notifySapphireSnap(snapId, cipher, transactionData, options, provider) {
    return __awaiter(this, void 0, void 0, function*() {
        if (cipher.ephemeralKey) {
            const peerPublicKey = yield options.fetcher.fetch(provider);
            yield provider.request({
                method: 'wallet_invokeSnap',
                params: {
                    snapId: snapId,
                    request: {
                        method: 'setTransactionDecryptKeys',
                        params: {
                            id: transactionData,
                            ephemeralSecretKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexlify"])(cipher.ephemeralKey),
                            peerPublicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$ethersutils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexlify"])(peerPublicKey.key),
                            peerPublicKeyEpoch: peerPublicKey.epoch
                        }
                    }
                }
            });
        }
    });
}
const SAPPHIRE_EIP1193_REQUESTFN = '#SAPPHIRE_EIP1193_REQUESTFN';
function isWrappedRequestFn(p) {
    return p && SAPPHIRE_EIP1193_REQUESTFN in p;
}
function isCallDataPublicKeyQuery(params) {
    return params && Array.isArray(params) && params.length > 0 && params[0].to === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUBCALL_ADDR"] && params[0].data === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALLDATAPUBLICKEY_CALLDATA"];
}
function makeSapphireRequestFn(provider, options) {
    if (isWrappedRequestFn(provider.request)) {
        return provider.request;
    }
    const filled_options = fillOptions(options);
    const f = (args)=>__awaiter(this, void 0, void 0, function*() {
            const snapId = filled_options.enableSapphireSnap ? yield detectSapphireSnap(provider) : undefined;
            const { method, params } = args;
            let transactionData = undefined;
            // Encrypt requests which can be encrypted
            if (params && Array.isArray(params) && /^eth_((send|sign)Transaction|call|estimateGas)$/.test(method) && params[0].data // Ignore balance transfers without calldata
            ) {
                // TODO: should we attempt to detect `if (not sapphire) throw` instead of
                // failing to fetch public key in the next line?
                const cipher = yield filled_options.fetcher.cipher(provider);
                transactionData = params[0].data = cipher.encryptCall(params[0].data);
                if (snapId !== undefined && transactionData !== undefined) {
                    // Run in background so as to not delay results
                    notifySapphireSnap(snapId, cipher, transactionData, filled_options, provider);
                }
                const res = yield provider.request({
                    method,
                    params: params !== null && params !== void 0 ? params : []
                });
                // Decrypt responses which return encrypted data
                if (method === 'eth_call') {
                    // If it's an unencrypted core.CallDataPublicKey query, don't attempt to decrypt the response
                    if (!isCallDataPublicKeyQuery(params)) {
                        return cipher.decryptResult(res);
                    }
                }
                return res;
            } else {
                const res = yield provider.request({
                    method,
                    params: params !== null && params !== void 0 ? params : []
                });
                return res;
            }
        });
    return makeTaggedProxyObject(f, SAPPHIRE_EIP1193_REQUESTFN, filled_options);
}
function makeTaggedProxyObject(upstream, propname, options, hooks) {
    return new Proxy(upstream, {
        has (target, p) {
            if (p === propname) return true;
            return Reflect.has(target, p);
        },
        get (upstream, prop) {
            var _a;
            if (prop === propname) return options;
            if (hooks && prop in hooks) return Reflect.get(hooks, prop);
            const value = Reflect.get(upstream, prop);
            // Brave wallet web3provider properties are read only and throw typeerror
            // https://github.com/brave/brave-core/blob/74bf470a0291ea3719f1a75af066ee10b7057dbd/components/brave_wallet/resources/ethereum_provider.js#L13-L27
            // https://github.com/wevm/wagmi/blob/86c42248c2f34260a52ee85183c607315ae63ce8/packages/core/src/connectors/injected.ts#L327-L335
            const propWritable = ((_a = Object.getOwnPropertyDescriptor(upstream, prop)) === null || _a === void 0 ? void 0 : _a.writable) !== false;
            if (typeof value === 'function' && propWritable) {
                return value.bind(upstream);
            }
            return value;
        }
    });
} //# sourceMappingURL=provider.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/networks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NETWORKS",
    ()=>NETWORKS,
    "SAPPHIRE_LOCALNET_HTTP_PROXY_HOST",
    ()=>SAPPHIRE_LOCALNET_HTTP_PROXY_HOST,
    "SAPPHIRE_LOCALNET_HTTP_PROXY_PORT",
    ()=>SAPPHIRE_LOCALNET_HTTP_PROXY_PORT
]);
var _a, _b, _c, _d;
const SAPPHIRE_LOCALNET_HTTP_PROXY_PORT = ((_b = (_a = globalThis.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.SAPPHIRE_LOCALNET_HTTP_PROXY_PORT) ? Number(process.env.SAPPHIRE_LOCALNET_HTTP_PROXY_PORT) : 8545;
const SAPPHIRE_LOCALNET_HTTP_PROXY_HOST = ((_d = (_c = globalThis.process) === null || _c === void 0 ? void 0 : _c.env) === null || _d === void 0 ? void 0 : _d.SAPPHIRE_LOCALNET_HTTP_PROXY_HOST) ? Number(process.env.SAPPHIRE_LOCALNET_HTTP_PROXY_HOST) : 'localhost';
const localnetParams = {
    chainName: 'Oasis Sapphire Localnet',
    chainId: 0x5afd,
    defaultGateway: `http://${SAPPHIRE_LOCALNET_HTTP_PROXY_HOST}:${SAPPHIRE_LOCALNET_HTTP_PROXY_PORT}`,
    rpcUrls: [
        `http://${SAPPHIRE_LOCALNET_HTTP_PROXY_HOST}:${SAPPHIRE_LOCALNET_HTTP_PROXY_PORT}`
    ],
    nativeCurrency: {
        name: 'Oasis TEST',
        symbol: 'TEST',
        decimals: 18
    },
    blockExplorerUrls: [
        'http://localhost:8548/localnet/sapphire'
    ],
    runtimeId: '0x8000000000000000000000000000000000000000000000000000000000000000'
};
const mainnetParams = {
    chainName: 'Oasis Sapphire',
    chainId: 0x5afe,
    defaultGateway: 'https://sapphire.oasis.io/',
    rpcUrls: [
        'https://sapphire.oasis.io/'
    ],
    nativeCurrency: {
        name: 'Oasis ROSE',
        symbol: 'ROSE',
        decimals: 18
    },
    blockExplorerUrls: [
        'https://explorer.oasis.io/mainnet/sapphire'
    ],
    iconUrls: [
        'https://assets.oasis.io/logotypes/metamask-oasis-sapphire.png'
    ],
    runtimeId: '0x000000000000000000000000000000000000000000000000f80306c9858e7279'
};
const testnetParams = {
    chainName: 'Oasis Sapphire Testnet',
    chainId: 0x5aff,
    defaultGateway: 'https://testnet.sapphire.oasis.io/',
    rpcUrls: [
        'https://testnet.sapphire.oasis.io/'
    ],
    nativeCurrency: {
        name: 'Oasis TEST',
        symbol: 'TEST',
        decimals: 18
    },
    blockExplorerUrls: [
        'https://explorer.oasis.io/testnet/sapphire'
    ],
    iconUrls: [
        'https://assets.oasis.io/logotypes/metamask-oasis-sapphire-testnet.png'
    ],
    runtimeId: '0x000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c'
};
const NETWORKS = {
    mainnet: mainnetParams,
    testnet: testnetParams,
    localnet: localnetParams,
    [mainnetParams.chainId]: mainnetParams,
    [testnetParams.chainId]: testnetParams,
    [localnetParams.chainId]: localnetParams
}; //# sourceMappingURL=networks.js.map
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/is.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "is",
    ()=>is
]);
const typeofs = [
    'string',
    'number',
    'bigint',
    'symbol'
];
const objectTypeNames = [
    'Function',
    'Generator',
    'AsyncGenerator',
    'GeneratorFunction',
    'AsyncGeneratorFunction',
    'AsyncFunction',
    'Observable',
    'Array',
    'Buffer',
    'Object',
    'RegExp',
    'Date',
    'Error',
    'Map',
    'Set',
    'WeakMap',
    'WeakSet',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'DataView',
    'Promise',
    'URL',
    'HTMLElement',
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array'
];
function is(value) {
    if (value === null) {
        return 'null';
    }
    if (value === undefined) {
        return 'undefined';
    }
    if (value === true || value === false) {
        return 'boolean';
    }
    const typeOf = typeof value;
    if (typeofs.includes(typeOf)) {
        return typeOf;
    }
    if (typeOf === 'function') {
        return 'Function';
    }
    if (Array.isArray(value)) {
        return 'Array';
    }
    if (isBuffer(value)) {
        return 'Buffer';
    }
    const objectType = getObjectType(value);
    if (objectType) {
        return objectType;
    }
    return 'Object';
}
function isBuffer(value) {
    return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
}
function getObjectType(value) {
    const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
    if (objectTypeNames.includes(objectTypeName)) {
        return objectTypeName;
    }
    return undefined;
}
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Token",
    ()=>Token,
    "Type",
    ()=>Type
]);
class Type {
    constructor(major, name, terminal){
        this.major = major;
        this.majorEncoded = major << 5;
        this.name = name;
        this.terminal = terminal;
    }
    toString() {
        return `Type[${this.major}].${this.name}`;
    }
    compare(typ) {
        return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
    }
}
Type.uint = new Type(0, 'uint', true);
Type.negint = new Type(1, 'negint', true);
Type.bytes = new Type(2, 'bytes', true);
Type.string = new Type(3, 'string', true);
Type.array = new Type(4, 'array', false);
Type.map = new Type(5, 'map', false);
Type.tag = new Type(6, 'tag', false);
Type.float = new Type(7, 'float', true);
Type.false = new Type(7, 'false', true);
Type.true = new Type(7, 'true', true);
Type.null = new Type(7, 'null', true);
Type.undefined = new Type(7, 'undefined', true);
Type.break = new Type(7, 'break', true);
class Token {
    constructor(type, value, encodedLength){
        this.type = type;
        this.value = value;
        this.encodedLength = encodedLength;
        this.encodedBytes = undefined;
        this.byteValue = undefined;
    }
    toString() {
        return `Token[${this.type}].${this.value}`;
    }
}
;
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/byte-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "asU8A",
    ()=>asU8A,
    "compare",
    ()=>compare,
    "concat",
    ()=>concat,
    "decodeCodePointsArray",
    ()=>decodeCodePointsArray,
    "fromArray",
    ()=>fromArray,
    "fromHex",
    ()=>fromHex,
    "fromString",
    ()=>fromString,
    "slice",
    ()=>slice,
    "toHex",
    ()=>toHex,
    "toString",
    ()=>toString,
    "useBuffer",
    ()=>useBuffer
]);
const useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer === 'function';
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
function isBuffer(buf) {
    return useBuffer && globalThis.Buffer.isBuffer(buf);
}
function asU8A(buf) {
    if (!(buf instanceof Uint8Array)) {
        return Uint8Array.from(buf);
    }
    return isBuffer(buf) ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : buf;
}
const toString = useBuffer ? (bytes, start, end)=>{
    return end - start > 64 ? globalThis.Buffer.from(bytes.subarray(start, end)).toString('utf8') : utf8Slice(bytes, start, end);
} : (bytes, start, end)=>{
    return end - start > 64 ? textDecoder.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
};
const fromString = useBuffer ? (string)=>{
    return string.length > 64 ? globalThis.Buffer.from(string) : utf8ToBytes(string);
} : (string)=>{
    return string.length > 64 ? textEncoder.encode(string) : utf8ToBytes(string);
};
const fromArray = (arr)=>{
    return Uint8Array.from(arr);
};
const slice = useBuffer ? (bytes, start, end)=>{
    if (isBuffer(bytes)) {
        return new Uint8Array(bytes.subarray(start, end));
    }
    return bytes.slice(start, end);
} : (bytes, start, end)=>{
    return bytes.slice(start, end);
};
const concat = useBuffer ? (chunks, length)=>{
    chunks = chunks.map((c)=>c instanceof Uint8Array ? c : globalThis.Buffer.from(c));
    return asU8A(globalThis.Buffer.concat(chunks, length));
} : (chunks, length)=>{
    const out = new Uint8Array(length);
    let off = 0;
    for (let b of chunks){
        if (off + b.length > out.length) {
            b = b.subarray(0, out.length - off);
        }
        out.set(b, off);
        off += b.length;
    }
    return out;
};
const alloc = useBuffer ? (size)=>{
    return globalThis.Buffer.allocUnsafe(size);
} : (size)=>{
    return new Uint8Array(size);
};
const toHex = useBuffer ? (d)=>{
    if (typeof d === 'string') {
        return d;
    }
    return globalThis.Buffer.from(toBytes(d)).toString('hex');
} : (d)=>{
    if (typeof d === 'string') {
        return d;
    }
    return Array.prototype.reduce.call(toBytes(d), (p, c)=>`${p}${c.toString(16).padStart(2, '0')}`, '');
};
const fromHex = useBuffer ? (hex)=>{
    if (hex instanceof Uint8Array) {
        return hex;
    }
    return globalThis.Buffer.from(hex, 'hex');
} : (hex)=>{
    if (hex instanceof Uint8Array) {
        return hex;
    }
    if (!hex.length) {
        return new Uint8Array(0);
    }
    return new Uint8Array(hex.split('').map((c, i, d)=>i % 2 === 0 ? `0x${c}${d[i + 1]}` : '').filter(Boolean).map((e)=>parseInt(e, 16)));
};
function toBytes(obj) {
    if (obj instanceof Uint8Array && obj.constructor.name === 'Uint8Array') {
        return obj;
    }
    if (obj instanceof ArrayBuffer) {
        return new Uint8Array(obj);
    }
    if (ArrayBuffer.isView(obj)) {
        return new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength);
    }
    throw new Error('Unknown type, must be binary type');
}
function compare(b1, b2) {
    if (isBuffer(b1) && isBuffer(b2)) {
        return b1.compare(b2);
    }
    for(let i = 0; i < b1.length; i++){
        if (b1[i] === b2[i]) {
            continue;
        }
        return b1[i] < b2[i] ? -1 : 1;
    }
    return 0;
}
function utf8ToBytes(string, units = Infinity) {
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
                if (codePoint > 56319) {
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                leadSurrogate = codePoint;
                continue;
            }
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
            throw new Error('Invalid code point');
        }
    }
    return bytes;
}
function utf8Slice(buf, offset, end) {
    const res = [];
    while(offset < end){
        const firstByte = buf[offset];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (offset + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) {
                        codePoint = firstByte;
                    }
                    break;
                case 2:
                    secondByte = buf[offset + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 3:
                    secondByte = buf[offset + 1];
                    thirdByte = buf[offset + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 4:
                    secondByte = buf[offset + 1];
                    thirdByte = buf[offset + 2];
                    fourthByte = buf[offset + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                            codePoint = tempCodePoint;
                        }
                    }
            }
        }
        if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        offset += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
    }
    let res = '';
    let i = 0;
    while(i < len){
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
}
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/bl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bl",
    ()=>Bl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/byte-utils.js [app-ssr] (ecmascript)");
;
const defaultChunkSize = 256;
class Bl {
    constructor(chunkSize = defaultChunkSize){
        this.chunkSize = chunkSize;
        this.cursor = 0;
        this.maxCursor = -1;
        this.chunks = [];
        this._initReuseChunk = null;
    }
    reset() {
        this.cursor = 0;
        this.maxCursor = -1;
        if (this.chunks.length) {
            this.chunks = [];
        }
        if (this._initReuseChunk !== null) {
            this.chunks.push(this._initReuseChunk);
            this.maxCursor = this._initReuseChunk.length - 1;
        }
    }
    push(bytes) {
        let topChunk = this.chunks[this.chunks.length - 1];
        const newMax = this.cursor + bytes.length;
        if (newMax <= this.maxCursor + 1) {
            const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
            topChunk.set(bytes, chunkPos);
        } else {
            if (topChunk) {
                const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
                if (chunkPos < topChunk.length) {
                    this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
                    this.maxCursor = this.cursor - 1;
                }
            }
            if (bytes.length < 64 && bytes.length < this.chunkSize) {
                topChunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alloc"])(this.chunkSize);
                this.chunks.push(topChunk);
                this.maxCursor += topChunk.length;
                if (this._initReuseChunk === null) {
                    this._initReuseChunk = topChunk;
                }
                topChunk.set(bytes, 0);
            } else {
                this.chunks.push(bytes);
                this.maxCursor += bytes.length;
            }
        }
        this.cursor += bytes.length;
    }
    toBytes(reset = false) {
        let byts;
        if (this.chunks.length === 1) {
            const chunk = this.chunks[0];
            if (reset && this.cursor > chunk.length / 2) {
                byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
                this._initReuseChunk = null;
                this.chunks = [];
            } else {
                byts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(chunk, 0, this.cursor);
            }
        } else {
            byts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(this.chunks, this.cursor);
        }
        if (reset) {
            this.reset();
        }
        return byts;
    }
}
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertEnoughData",
    ()=>assertEnoughData,
    "decodeErrPrefix",
    ()=>decodeErrPrefix,
    "encodeErrPrefix",
    ()=>encodeErrPrefix,
    "uintMinorPrefixBytes",
    ()=>uintMinorPrefixBytes
]);
const decodeErrPrefix = 'CBOR decode error:';
const encodeErrPrefix = 'CBOR encode error:';
const uintMinorPrefixBytes = [];
uintMinorPrefixBytes[23] = 1;
uintMinorPrefixBytes[24] = 2;
uintMinorPrefixBytes[25] = 3;
uintMinorPrefixBytes[26] = 5;
uintMinorPrefixBytes[27] = 9;
function assertEnoughData(data, pos, need) {
    if (data.length - pos < need) {
        throw new Error(`${decodeErrPrefix} not enough data for type`);
    }
}
;
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeUint16",
    ()=>decodeUint16,
    "decodeUint32",
    ()=>decodeUint32,
    "decodeUint64",
    ()=>decodeUint64,
    "decodeUint8",
    ()=>decodeUint8,
    "encodeUint",
    ()=>encodeUint,
    "encodeUintValue",
    ()=>encodeUintValue,
    "readUint16",
    ()=>readUint16,
    "readUint32",
    ()=>readUint32,
    "readUint64",
    ()=>readUint64,
    "readUint8",
    ()=>readUint8,
    "uintBoundaries",
    ()=>uintBoundaries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
;
;
const uintBoundaries = [
    24,
    256,
    65536,
    4294967296,
    BigInt('18446744073709551616')
];
function readUint8(data, offset, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEnoughData"])(data, offset, 1);
    const value = data[offset];
    if (options.strict === true && value < uintBoundaries[0]) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
}
function readUint16(data, offset, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEnoughData"])(data, offset, 2);
    const value = data[offset] << 8 | data[offset + 1];
    if (options.strict === true && value < uintBoundaries[1]) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
}
function readUint32(data, offset, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEnoughData"])(data, offset, 4);
    const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
    if (options.strict === true && value < uintBoundaries[2]) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
}
function readUint64(data, offset, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEnoughData"])(data, offset, 8);
    const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
    const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
    const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
    if (options.strict === true && value < uintBoundaries[3]) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} integer encoded in more bytes than necessary (strict decode)`);
    }
    if (value <= Number.MAX_SAFE_INTEGER) {
        return Number(value);
    }
    if (options.allowBigInt === true) {
        return value;
    }
    throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} integers outside of the safe integer range are not supported`);
}
function decodeUint8(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint, readUint8(data, pos + 1, options), 2);
}
function decodeUint16(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint, readUint16(data, pos + 1, options), 3);
}
function decodeUint32(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint, readUint32(data, pos + 1, options), 5);
}
function decodeUint64(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint, readUint64(data, pos + 1, options), 9);
}
function encodeUint(buf, token) {
    return encodeUintValue(buf, 0, token.value);
}
function encodeUintValue(buf, major, uint) {
    if (uint < uintBoundaries[0]) {
        const nuint = Number(uint);
        buf.push([
            major | nuint
        ]);
    } else if (uint < uintBoundaries[1]) {
        const nuint = Number(uint);
        buf.push([
            major | 24,
            nuint
        ]);
    } else if (uint < uintBoundaries[2]) {
        const nuint = Number(uint);
        buf.push([
            major | 25,
            nuint >>> 8,
            nuint & 255
        ]);
    } else if (uint < uintBoundaries[3]) {
        const nuint = Number(uint);
        buf.push([
            major | 26,
            nuint >>> 24 & 255,
            nuint >>> 16 & 255,
            nuint >>> 8 & 255,
            nuint & 255
        ]);
    } else {
        const buint = BigInt(uint);
        if (buint < uintBoundaries[4]) {
            const set = [
                major | 27,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            let lo = Number(buint & BigInt(4294967295));
            let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
            set[8] = lo & 255;
            lo = lo >> 8;
            set[7] = lo & 255;
            lo = lo >> 8;
            set[6] = lo & 255;
            lo = lo >> 8;
            set[5] = lo & 255;
            set[4] = hi & 255;
            hi = hi >> 8;
            set[3] = hi & 255;
            hi = hi >> 8;
            set[2] = hi & 255;
            hi = hi >> 8;
            set[1] = hi & 255;
            buf.push(set);
        } else {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} encountered BigInt larger than allowable range`);
        }
    }
}
encodeUint.encodedSize = function encodedSize(token) {
    return encodeUintValue.encodedSize(token.value);
};
encodeUintValue.encodedSize = function encodedSize(uint) {
    if (uint < uintBoundaries[0]) {
        return 1;
    }
    if (uint < uintBoundaries[1]) {
        return 2;
    }
    if (uint < uintBoundaries[2]) {
        return 3;
    }
    if (uint < uintBoundaries[3]) {
        return 5;
    }
    return 9;
};
encodeUint.compareTokens = function compareTokens(tok1, tok2) {
    return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : 0;
};
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/1negint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeNegint16",
    ()=>decodeNegint16,
    "decodeNegint32",
    ()=>decodeNegint32,
    "decodeNegint64",
    ()=>decodeNegint64,
    "decodeNegint8",
    ()=>decodeNegint8,
    "encodeNegint",
    ()=>encodeNegint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
;
;
;
function decodeNegint8(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint, -1 - __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint8"](data, pos + 1, options), 2);
}
function decodeNegint16(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint, -1 - __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint16"](data, pos + 1, options), 3);
}
function decodeNegint32(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint, -1 - __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint32"](data, pos + 1, options), 5);
}
const neg1b = BigInt(-1);
const pos1b = BigInt(1);
function decodeNegint64(data, pos, _minor, options) {
    const int = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint64"](data, pos + 1, options);
    if (typeof int !== 'bigint') {
        const value = -1 - int;
        if (value >= Number.MIN_SAFE_INTEGER) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint, value, 9);
        }
    }
    if (options.allowBigInt !== true) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} integers outside of the safe integer range are not supported`);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint, neg1b - BigInt(int), 9);
}
function encodeNegint(buf, token) {
    const negint = token.value;
    const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
    __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"](buf, token.type.majorEncoded, unsigned);
}
encodeNegint.encodedSize = function encodedSize(token) {
    const negint = token.value;
    const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
    if (unsigned < __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintBoundaries"][0]) {
        return 1;
    }
    if (unsigned < __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintBoundaries"][1]) {
        return 2;
    }
    if (unsigned < __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintBoundaries"][2]) {
        return 3;
    }
    if (unsigned < __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uintBoundaries"][3]) {
        return 5;
    }
    return 9;
};
encodeNegint.compareTokens = function compareTokens(tok1, tok2) {
    return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : 0;
};
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/2bytes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareBytes",
    ()=>compareBytes,
    "decodeBytes16",
    ()=>decodeBytes16,
    "decodeBytes32",
    ()=>decodeBytes32,
    "decodeBytes64",
    ()=>decodeBytes64,
    "decodeBytes8",
    ()=>decodeBytes8,
    "decodeBytesCompact",
    ()=>decodeBytesCompact,
    "encodeBytes",
    ()=>encodeBytes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/byte-utils.js [app-ssr] (ecmascript)");
;
;
;
;
function toToken(data, pos, prefix, length) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEnoughData"])(data, pos, prefix + length);
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(data, pos + prefix, pos + prefix + length);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].bytes, buf, prefix + length);
}
function decodeBytesCompact(data, pos, minor, _options) {
    return toToken(data, pos, 1, minor);
}
function decodeBytes8(data, pos, _minor, options) {
    return toToken(data, pos, 2, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint8"](data, pos + 1, options));
}
function decodeBytes16(data, pos, _minor, options) {
    return toToken(data, pos, 3, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint16"](data, pos + 1, options));
}
function decodeBytes32(data, pos, _minor, options) {
    return toToken(data, pos, 5, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint32"](data, pos + 1, options));
}
function decodeBytes64(data, pos, _minor, options) {
    const l = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint64"](data, pos + 1, options);
    if (typeof l === 'bigint') {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} 64-bit integer bytes lengths not supported`);
    }
    return toToken(data, pos, 9, l);
}
function tokenBytes(token) {
    if (token.encodedBytes === undefined) {
        token.encodedBytes = token.type === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].string ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(token.value) : token.value;
    }
    return token.encodedBytes;
}
function encodeBytes(buf, token) {
    const bytes = tokenBytes(token);
    __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"](buf, token.type.majorEncoded, bytes.length);
    buf.push(bytes);
}
encodeBytes.encodedSize = function encodedSize(token) {
    const bytes = tokenBytes(token);
    return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"].encodedSize(bytes.length) + bytes.length;
};
encodeBytes.compareTokens = function compareTokens(tok1, tok2) {
    return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
};
function compareBytes(b1, b2) {
    return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compare"])(b1, b2);
}
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/3string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeString16",
    ()=>decodeString16,
    "decodeString32",
    ()=>decodeString32,
    "decodeString64",
    ()=>decodeString64,
    "decodeString8",
    ()=>decodeString8,
    "decodeStringCompact",
    ()=>decodeStringCompact,
    "encodeString",
    ()=>encodeString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/2bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/byte-utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
function toToken(data, pos, prefix, length, options) {
    const totLength = prefix + length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEnoughData"])(data, pos, totLength);
    const tok = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].string, (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(data, pos + prefix, pos + totLength), totLength);
    if (options.retainStringBytes === true) {
        tok.byteValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(data, pos + prefix, pos + totLength);
    }
    return tok;
}
function decodeStringCompact(data, pos, minor, options) {
    return toToken(data, pos, 1, minor, options);
}
function decodeString8(data, pos, _minor, options) {
    return toToken(data, pos, 2, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint8"](data, pos + 1, options), options);
}
function decodeString16(data, pos, _minor, options) {
    return toToken(data, pos, 3, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint16"](data, pos + 1, options), options);
}
function decodeString32(data, pos, _minor, options) {
    return toToken(data, pos, 5, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint32"](data, pos + 1, options), options);
}
function decodeString64(data, pos, _minor, options) {
    const l = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint64"](data, pos + 1, options);
    if (typeof l === 'bigint') {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} 64-bit integer string lengths not supported`);
    }
    return toToken(data, pos, 9, l, options);
}
const encodeString = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBytes"];
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/4array.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeArray16",
    ()=>decodeArray16,
    "decodeArray32",
    ()=>decodeArray32,
    "decodeArray64",
    ()=>decodeArray64,
    "decodeArray8",
    ()=>decodeArray8,
    "decodeArrayCompact",
    ()=>decodeArrayCompact,
    "decodeArrayIndefinite",
    ()=>decodeArrayIndefinite,
    "encodeArray",
    ()=>encodeArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
;
;
;
function toToken(_data, _pos, prefix, length) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array, length, prefix);
}
function decodeArrayCompact(data, pos, minor, _options) {
    return toToken(data, pos, 1, minor);
}
function decodeArray8(data, pos, _minor, options) {
    return toToken(data, pos, 2, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint8"](data, pos + 1, options));
}
function decodeArray16(data, pos, _minor, options) {
    return toToken(data, pos, 3, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint16"](data, pos + 1, options));
}
function decodeArray32(data, pos, _minor, options) {
    return toToken(data, pos, 5, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint32"](data, pos + 1, options));
}
function decodeArray64(data, pos, _minor, options) {
    const l = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint64"](data, pos + 1, options);
    if (typeof l === 'bigint') {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} 64-bit integer array lengths not supported`);
    }
    return toToken(data, pos, 9, l);
}
function decodeArrayIndefinite(data, pos, _minor, options) {
    if (options.allowIndefinite === false) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} indefinite length items not allowed`);
    }
    return toToken(data, pos, 1, Infinity);
}
function encodeArray(buf, token) {
    __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"](buf, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array.majorEncoded, token.value);
}
encodeArray.compareTokens = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUint"].compareTokens;
encodeArray.encodedSize = function encodedSize(token) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"].encodedSize(token.value);
};
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/5map.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeMap16",
    ()=>decodeMap16,
    "decodeMap32",
    ()=>decodeMap32,
    "decodeMap64",
    ()=>decodeMap64,
    "decodeMap8",
    ()=>decodeMap8,
    "decodeMapCompact",
    ()=>decodeMapCompact,
    "decodeMapIndefinite",
    ()=>decodeMapIndefinite,
    "encodeMap",
    ()=>encodeMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
;
;
;
function toToken(_data, _pos, prefix, length) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map, length, prefix);
}
function decodeMapCompact(data, pos, minor, _options) {
    return toToken(data, pos, 1, minor);
}
function decodeMap8(data, pos, _minor, options) {
    return toToken(data, pos, 2, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint8"](data, pos + 1, options));
}
function decodeMap16(data, pos, _minor, options) {
    return toToken(data, pos, 3, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint16"](data, pos + 1, options));
}
function decodeMap32(data, pos, _minor, options) {
    return toToken(data, pos, 5, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint32"](data, pos + 1, options));
}
function decodeMap64(data, pos, _minor, options) {
    const l = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint64"](data, pos + 1, options);
    if (typeof l === 'bigint') {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} 64-bit integer map lengths not supported`);
    }
    return toToken(data, pos, 9, l);
}
function decodeMapIndefinite(data, pos, _minor, options) {
    if (options.allowIndefinite === false) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} indefinite length items not allowed`);
    }
    return toToken(data, pos, 1, Infinity);
}
function encodeMap(buf, token) {
    __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"](buf, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map.majorEncoded, token.value);
}
encodeMap.compareTokens = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUint"].compareTokens;
encodeMap.encodedSize = function encodedSize(token) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"].encodedSize(token.value);
};
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/6tag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeTag16",
    ()=>decodeTag16,
    "decodeTag32",
    ()=>decodeTag32,
    "decodeTag64",
    ()=>decodeTag64,
    "decodeTag8",
    ()=>decodeTag8,
    "decodeTagCompact",
    ()=>decodeTagCompact,
    "encodeTag",
    ()=>encodeTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
;
;
function decodeTagCompact(_data, _pos, minor, _options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].tag, minor, 1);
}
function decodeTag8(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].tag, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint8"](data, pos + 1, options), 2);
}
function decodeTag16(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].tag, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint16"](data, pos + 1, options), 3);
}
function decodeTag32(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].tag, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint32"](data, pos + 1, options), 5);
}
function decodeTag64(data, pos, _minor, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].tag, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readUint64"](data, pos + 1, options), 9);
}
function encodeTag(buf, token) {
    __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"](buf, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].tag.majorEncoded, token.value);
}
encodeTag.compareTokens = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUint"].compareTokens;
encodeTag.encodedSize = function encodedSize(token) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUintValue"].encodedSize(token.value);
};
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/7float.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeBreak",
    ()=>decodeBreak,
    "decodeFloat16",
    ()=>decodeFloat16,
    "decodeFloat32",
    ()=>decodeFloat32,
    "decodeFloat64",
    ()=>decodeFloat64,
    "decodeUndefined",
    ()=>decodeUndefined,
    "encodeFloat",
    ()=>encodeFloat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
;
;
;
const MINOR_FALSE = 20;
const MINOR_TRUE = 21;
const MINOR_NULL = 22;
const MINOR_UNDEFINED = 23;
function decodeUndefined(_data, _pos, _minor, options) {
    if (options.allowUndefined === false) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} undefined values are not supported`);
    } else if (options.coerceUndefinedToNull === true) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].null, null, 1);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].undefined, undefined, 1);
}
function decodeBreak(_data, _pos, _minor, options) {
    if (options.allowIndefinite === false) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} indefinite length items not allowed`);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].break, undefined, 1);
}
function createToken(value, bytes, options) {
    if (options) {
        if (options.allowNaN === false && Number.isNaN(value)) {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} NaN values are not supported`);
        }
        if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} Infinity values are not supported`);
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].float, value, bytes);
}
function decodeFloat16(data, pos, _minor, options) {
    return createToken(readFloat16(data, pos + 1), 3, options);
}
function decodeFloat32(data, pos, _minor, options) {
    return createToken(readFloat32(data, pos + 1), 5, options);
}
function decodeFloat64(data, pos, _minor, options) {
    return createToken(readFloat64(data, pos + 1), 9, options);
}
function encodeFloat(buf, token, options) {
    const float = token.value;
    if (float === false) {
        buf.push([
            __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].float.majorEncoded | MINOR_FALSE
        ]);
    } else if (float === true) {
        buf.push([
            __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].float.majorEncoded | MINOR_TRUE
        ]);
    } else if (float === null) {
        buf.push([
            __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].float.majorEncoded | MINOR_NULL
        ]);
    } else if (float === undefined) {
        buf.push([
            __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].float.majorEncoded | MINOR_UNDEFINED
        ]);
    } else {
        let decoded;
        let success = false;
        if (!options || options.float64 !== true) {
            encodeFloat16(float);
            decoded = readFloat16(ui8a, 1);
            if (float === decoded || Number.isNaN(float)) {
                ui8a[0] = 249;
                buf.push(ui8a.slice(0, 3));
                success = true;
            } else {
                encodeFloat32(float);
                decoded = readFloat32(ui8a, 1);
                if (float === decoded) {
                    ui8a[0] = 250;
                    buf.push(ui8a.slice(0, 5));
                    success = true;
                }
            }
        }
        if (!success) {
            encodeFloat64(float);
            decoded = readFloat64(ui8a, 1);
            ui8a[0] = 251;
            buf.push(ui8a.slice(0, 9));
        }
    }
}
encodeFloat.encodedSize = function encodedSize(token, options) {
    const float = token.value;
    if (float === false || float === true || float === null || float === undefined) {
        return 1;
    }
    if (!options || options.float64 !== true) {
        encodeFloat16(float);
        let decoded = readFloat16(ui8a, 1);
        if (float === decoded || Number.isNaN(float)) {
            return 3;
        }
        encodeFloat32(float);
        decoded = readFloat32(ui8a, 1);
        if (float === decoded) {
            return 5;
        }
    }
    return 9;
};
const buffer = new ArrayBuffer(9);
const dataView = new DataView(buffer, 1);
const ui8a = new Uint8Array(buffer, 0);
function encodeFloat16(inp) {
    if (inp === Infinity) {
        dataView.setUint16(0, 31744, false);
    } else if (inp === -Infinity) {
        dataView.setUint16(0, 64512, false);
    } else if (Number.isNaN(inp)) {
        dataView.setUint16(0, 32256, false);
    } else {
        dataView.setFloat32(0, inp);
        const valu32 = dataView.getUint32(0);
        const exponent = (valu32 & 2139095040) >> 23;
        const mantissa = valu32 & 8388607;
        if (exponent === 255) {
            dataView.setUint16(0, 31744, false);
        } else if (exponent === 0) {
            dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
        } else {
            const logicalExponent = exponent - 127;
            if (logicalExponent < -24) {
                dataView.setUint16(0, 0);
            } else if (logicalExponent < -14) {
                dataView.setUint16(0, (valu32 & 2147483648) >> 16 | 1 << 24 + logicalExponent, false);
            } else {
                dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
            }
        }
    }
}
function readFloat16(ui8a, pos) {
    if (ui8a.length - pos < 2) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} not enough data for float16`);
    }
    const half = (ui8a[pos] << 8) + ui8a[pos + 1];
    if (half === 31744) {
        return Infinity;
    }
    if (half === 64512) {
        return -Infinity;
    }
    if (half === 32256) {
        return NaN;
    }
    const exp = half >> 10 & 31;
    const mant = half & 1023;
    let val;
    if (exp === 0) {
        val = mant * 2 ** -24;
    } else if (exp !== 31) {
        val = (mant + 1024) * 2 ** (exp - 25);
    } else {
        val = mant === 0 ? Infinity : NaN;
    }
    return half & 32768 ? -val : val;
}
function encodeFloat32(inp) {
    dataView.setFloat32(0, inp, false);
}
function readFloat32(ui8a, pos) {
    if (ui8a.length - pos < 4) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} not enough data for float32`);
    }
    const offset = (ui8a.byteOffset || 0) + pos;
    return new DataView(ui8a.buffer, offset, 4).getFloat32(0, false);
}
function encodeFloat64(inp) {
    dataView.setFloat64(0, inp, false);
}
function readFloat64(ui8a, pos) {
    if (ui8a.length - pos < 8) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} not enough data for float64`);
    }
    const offset = (ui8a.byteOffset || 0) + pos;
    return new DataView(ui8a.buffer, offset, 8).getFloat64(0, false);
}
encodeFloat.compareTokens = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUint"].compareTokens;
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/jump.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jump",
    ()=>jump,
    "quick",
    ()=>quick,
    "quickEncodeToken",
    ()=>quickEncodeToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$1negint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/1negint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/2bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$3string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/3string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/4array.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/5map.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$6tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/6tag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$7float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/7float.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/byte-utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function invalidMinor(data, pos, minor) {
    throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} encountered invalid minor (${minor}) for major ${data[pos] >>> 5}`);
}
function errorer(msg) {
    return ()=>{
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} ${msg}`);
    };
}
const jump = [];
for(let i = 0; i <= 23; i++){
    jump[i] = invalidMinor;
}
jump[24] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeUint8"];
jump[25] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeUint16"];
jump[26] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeUint32"];
jump[27] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeUint64"];
jump[28] = invalidMinor;
jump[29] = invalidMinor;
jump[30] = invalidMinor;
jump[31] = invalidMinor;
for(let i = 32; i <= 55; i++){
    jump[i] = invalidMinor;
}
jump[56] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$1negint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNegint8"];
jump[57] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$1negint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNegint16"];
jump[58] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$1negint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNegint32"];
jump[59] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$1negint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNegint64"];
jump[60] = invalidMinor;
jump[61] = invalidMinor;
jump[62] = invalidMinor;
jump[63] = invalidMinor;
for(let i = 64; i <= 87; i++){
    jump[i] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBytesCompact"];
}
jump[88] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBytes8"];
jump[89] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBytes16"];
jump[90] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBytes32"];
jump[91] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBytes64"];
jump[92] = invalidMinor;
jump[93] = invalidMinor;
jump[94] = invalidMinor;
jump[95] = errorer('indefinite length bytes/strings are not supported');
for(let i = 96; i <= 119; i++){
    jump[i] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$3string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeStringCompact"];
}
jump[120] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$3string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeString8"];
jump[121] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$3string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeString16"];
jump[122] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$3string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeString32"];
jump[123] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$3string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeString64"];
jump[124] = invalidMinor;
jump[125] = invalidMinor;
jump[126] = invalidMinor;
jump[127] = errorer('indefinite length bytes/strings are not supported');
for(let i = 128; i <= 151; i++){
    jump[i] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeArrayCompact"];
}
jump[152] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeArray8"];
jump[153] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeArray16"];
jump[154] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeArray32"];
jump[155] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeArray64"];
jump[156] = invalidMinor;
jump[157] = invalidMinor;
jump[158] = invalidMinor;
jump[159] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeArrayIndefinite"];
for(let i = 160; i <= 183; i++){
    jump[i] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeMapCompact"];
}
jump[184] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeMap8"];
jump[185] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeMap16"];
jump[186] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeMap32"];
jump[187] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeMap64"];
jump[188] = invalidMinor;
jump[189] = invalidMinor;
jump[190] = invalidMinor;
jump[191] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeMapIndefinite"];
for(let i = 192; i <= 215; i++){
    jump[i] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$6tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTagCompact"];
}
jump[216] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$6tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTag8"];
jump[217] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$6tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTag16"];
jump[218] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$6tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTag32"];
jump[219] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$6tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTag64"];
jump[220] = invalidMinor;
jump[221] = invalidMinor;
jump[222] = invalidMinor;
jump[223] = invalidMinor;
for(let i = 224; i <= 243; i++){
    jump[i] = errorer('simple values are not supported');
}
jump[244] = invalidMinor;
jump[245] = invalidMinor;
jump[246] = invalidMinor;
jump[247] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$7float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeUndefined"];
jump[248] = errorer('simple values are not supported');
jump[249] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$7float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeFloat16"];
jump[250] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$7float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeFloat32"];
jump[251] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$7float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeFloat64"];
jump[252] = invalidMinor;
jump[253] = invalidMinor;
jump[254] = invalidMinor;
jump[255] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$7float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBreak"];
const quick = [];
for(let i = 0; i < 24; i++){
    quick[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint, i, 1);
}
for(let i = -1; i >= -24; i--){
    quick[31 - i] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint, i, 1);
}
quick[64] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].bytes, new Uint8Array(0), 1);
quick[96] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].string, '', 1);
quick[128] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array, 0, 1);
quick[160] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map, 0, 1);
quick[244] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].false, false, 1);
quick[245] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].true, true, 1);
quick[246] = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].null, null, 1);
function quickEncodeToken(token) {
    switch(token.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].false:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                244
            ]);
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].true:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                245
            ]);
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].null:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                246
            ]);
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].bytes:
            if (!token.value.length) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                    64
                ]);
            }
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].string:
            if (token.value === '') {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                    96
                ]);
            }
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array:
            if (token.value === 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                    128
                ]);
            }
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map:
            if (token.value === 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                    160
                ]);
            }
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint:
            if (token.value < 24) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                    Number(token.value)
                ]);
            }
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint:
            if (token.value >= -24) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromArray"])([
                    31 - Number(token.value)
                ]);
            }
    }
}
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/encode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ref",
    ()=>Ref,
    "encode",
    ()=>encode,
    "encodeCustom",
    ()=>encodeCustom,
    "makeCborEncoders",
    ()=>makeCborEncoders,
    "objectToTokens",
    ()=>objectToTokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$bl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/bl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$jump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/jump.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/byte-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/0uint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$1negint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/1negint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/2bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$3string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/3string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/4array.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/5map.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$6tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/6tag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$7float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/7float.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultEncodeOptions = {
    float64: false,
    mapSorter,
    quickEncodeToken: __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$jump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quickEncodeToken"]
};
function makeCborEncoders() {
    const encoders = [];
    encoders[__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint.major] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$0uint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeUint"];
    encoders[__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint.major] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$1negint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeNegint"];
    encoders[__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].bytes.major] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$2bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBytes"];
    encoders[__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].string.major] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$3string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeString"];
    encoders[__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array.major] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$4array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeArray"];
    encoders[__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map.major] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$5map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeMap"];
    encoders[__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].tag.major] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$6tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeTag"];
    encoders[__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].float.major] = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$7float$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFloat"];
    return encoders;
}
const cborEncoders = makeCborEncoders();
const buf = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$bl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bl"]();
class Ref {
    constructor(obj, parent){
        this.obj = obj;
        this.parent = parent;
    }
    includes(obj) {
        let p = this;
        do {
            if (p.obj === obj) {
                return true;
            }
        }while (p = p.parent)
        return false;
    }
    static createCheck(stack, obj) {
        if (stack && stack.includes(obj)) {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeErrPrefix"]} object contains circular references`);
        }
        return new Ref(obj, stack);
    }
}
const simpleTokens = {
    null: new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].null, null),
    undefined: new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].undefined, undefined),
    true: new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].true, true),
    false: new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].false, false),
    emptyArray: new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array, 0),
    emptyMap: new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map, 0)
};
const typeEncoders = {
    number (obj, _typ, _options, _refStack) {
        if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].float, obj);
        } else if (obj >= 0) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint, obj);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint, obj);
        }
    },
    bigint (obj, _typ, _options, _refStack) {
        if (obj >= BigInt(0)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].uint, obj);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].negint, obj);
        }
    },
    Uint8Array (obj, _typ, _options, _refStack) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].bytes, obj);
    },
    string (obj, _typ, _options, _refStack) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].string, obj);
    },
    boolean (obj, _typ, _options, _refStack) {
        return obj ? simpleTokens.true : simpleTokens.false;
    },
    null (_obj, _typ, _options, _refStack) {
        return simpleTokens.null;
    },
    undefined (_obj, _typ, _options, _refStack) {
        return simpleTokens.undefined;
    },
    ArrayBuffer (obj, _typ, _options, _refStack) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].bytes, new Uint8Array(obj));
    },
    DataView (obj, _typ, _options, _refStack) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
    },
    Array (obj, _typ, options, refStack) {
        if (!obj.length) {
            if (options.addBreakTokens === true) {
                return [
                    simpleTokens.emptyArray,
                    new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].break)
                ];
            }
            return simpleTokens.emptyArray;
        }
        refStack = Ref.createCheck(refStack, obj);
        const entries = [];
        let i = 0;
        for (const e of obj){
            entries[i++] = objectToTokens(e, options, refStack);
        }
        if (options.addBreakTokens) {
            return [
                new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array, obj.length),
                entries,
                new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].break)
            ];
        }
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array, obj.length),
            entries
        ];
    },
    Object (obj, typ, options, refStack) {
        const isMap = typ !== 'Object';
        const keys = isMap ? obj.keys() : Object.keys(obj);
        const length = isMap ? obj.size : keys.length;
        if (!length) {
            if (options.addBreakTokens === true) {
                return [
                    simpleTokens.emptyMap,
                    new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].break)
                ];
            }
            return simpleTokens.emptyMap;
        }
        refStack = Ref.createCheck(refStack, obj);
        const entries = [];
        let i = 0;
        for (const key of keys){
            entries[i++] = [
                objectToTokens(key, options, refStack),
                objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)
            ];
        }
        sortMapEntries(entries, options);
        if (options.addBreakTokens) {
            return [
                new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map, length),
                entries,
                new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].break)
            ];
        }
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map, length),
            entries
        ];
    }
};
typeEncoders.Map = typeEncoders.Object;
typeEncoders.Buffer = typeEncoders.Uint8Array;
for (const typ of 'Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64'.split(' ')){
    typeEncoders[`${typ}Array`] = typeEncoders.DataView;
}
function objectToTokens(obj, options = {}, refStack) {
    const typ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["is"])(obj);
    const customTypeEncoder = options && options.typeEncoders && options.typeEncoders[typ] || typeEncoders[typ];
    if (typeof customTypeEncoder === 'function') {
        const tokens = customTypeEncoder(obj, typ, options, refStack);
        if (tokens != null) {
            return tokens;
        }
    }
    const typeEncoder = typeEncoders[typ];
    if (!typeEncoder) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeErrPrefix"]} unsupported type: ${typ}`);
    }
    return typeEncoder(obj, typ, options, refStack);
}
function sortMapEntries(entries, options) {
    if (options.mapSorter) {
        entries.sort(options.mapSorter);
    }
}
function mapSorter(e1, e2) {
    const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
    const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];
    if (keyToken1.type !== keyToken2.type) {
        return keyToken1.type.compare(keyToken2.type);
    }
    const major = keyToken1.type.major;
    const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
    if (tcmp === 0) {
        console.warn('WARNING: complex key types used, CBOR key sorting guarantees are gone');
    }
    return tcmp;
}
function tokensToEncoded(buf, tokens, encoders, options) {
    if (Array.isArray(tokens)) {
        for (const token of tokens){
            tokensToEncoded(buf, token, encoders, options);
        }
    } else {
        encoders[tokens.type.major](buf, tokens, options);
    }
}
function encodeCustom(data, encoders, options) {
    const tokens = objectToTokens(data, options);
    if (!Array.isArray(tokens) && options.quickEncodeToken) {
        const quickBytes = options.quickEncodeToken(tokens);
        if (quickBytes) {
            return quickBytes;
        }
        const encoder = encoders[tokens.type.major];
        if (encoder.encodedSize) {
            const size = encoder.encodedSize(tokens, options);
            const buf = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$bl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bl"](size);
            encoder(buf, tokens, options);
            if (buf.chunks.length !== 1) {
                throw new Error(`Unexpected error: pre-calculated length for ${tokens} was wrong`);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$byte$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asU8A"])(buf.chunks[0]);
        }
    }
    buf.reset();
    tokensToEncoded(buf, tokens, encoders, options);
    return buf.toBytes(true);
}
function encode(data, options) {
    options = Object.assign({}, defaultEncodeOptions, options);
    return encodeCustom(data, cborEncoders, options);
}
;
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/decode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tokeniser",
    ()=>Tokeniser,
    "decode",
    ()=>decode,
    "tokensToObject",
    ()=>tokensToObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$jump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/jump.js [app-ssr] (ecmascript)");
;
;
;
const defaultDecodeOptions = {
    strict: false,
    allowIndefinite: true,
    allowUndefined: true,
    allowBigInt: true
};
class Tokeniser {
    constructor(data, options = {}){
        this.pos = 0;
        this.data = data;
        this.options = options;
    }
    done() {
        return this.pos >= this.data.length;
    }
    next() {
        const byt = this.data[this.pos];
        let token = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$jump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quick"][byt];
        if (token === undefined) {
            const decoder = __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$jump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jump"][byt];
            if (!decoder) {
                throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} no decoder for major type ${byt >>> 5} (byte 0x${byt.toString(16).padStart(2, '0')})`);
            }
            const minor = byt & 31;
            token = decoder(this.data, this.pos, minor, this.options);
        }
        this.pos += token.encodedLength;
        return token;
    }
}
const DONE = Symbol.for('DONE');
const BREAK = Symbol.for('BREAK');
function tokenToArray(token, tokeniser, options) {
    const arr = [];
    for(let i = 0; i < token.value; i++){
        const value = tokensToObject(tokeniser, options);
        if (value === BREAK) {
            if (token.value === Infinity) {
                break;
            }
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} got unexpected break to lengthed array`);
        }
        if (value === DONE) {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} found array but not enough entries (got ${i}, expected ${token.value})`);
        }
        arr[i] = value;
    }
    return arr;
}
function tokenToMap(token, tokeniser, options) {
    const useMaps = options.useMaps === true;
    const obj = useMaps ? undefined : {};
    const m = useMaps ? new Map() : undefined;
    for(let i = 0; i < token.value; i++){
        const key = tokensToObject(tokeniser, options);
        if (key === BREAK) {
            if (token.value === Infinity) {
                break;
            }
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} got unexpected break to lengthed map`);
        }
        if (key === DONE) {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} found map but not enough entries (got ${i} [no key], expected ${token.value})`);
        }
        if (useMaps !== true && typeof key !== 'string') {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} non-string keys not supported (got ${typeof key})`);
        }
        if (options.rejectDuplicateMapKeys === true) {
            if (useMaps && m.has(key) || !useMaps && key in obj) {
                throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} found repeat map key "${key}"`);
            }
        }
        const value = tokensToObject(tokeniser, options);
        if (value === DONE) {
            throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} found map but not enough entries (got ${i} [no value], expected ${token.value})`);
        }
        if (useMaps) {
            m.set(key, value);
        } else {
            obj[key] = value;
        }
    }
    return useMaps ? m : obj;
}
function tokensToObject(tokeniser, options) {
    if (tokeniser.done()) {
        return DONE;
    }
    const token = tokeniser.next();
    if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].break) {
        return BREAK;
    }
    if (token.type.terminal) {
        return token.value;
    }
    if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].array) {
        return tokenToArray(token, tokeniser, options);
    }
    if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].map) {
        return tokenToMap(token, tokeniser, options);
    }
    if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Type"].tag) {
        if (options.tags && typeof options.tags[token.value] === 'function') {
            const tagged = tokensToObject(tokeniser, options);
            return options.tags[token.value](tagged);
        }
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} tag not supported (${token.value})`);
    }
    throw new Error('unsupported');
}
function decode(data, options) {
    if (!(data instanceof Uint8Array)) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} data to decode must be a Uint8Array`);
    }
    options = Object.assign({}, defaultDecodeOptions, options);
    const tokeniser = options.tokenizer || new Tokeniser(data, options);
    const decoded = tokensToObject(tokeniser, options);
    if (decoded === DONE) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} did not find any content to decode`);
    }
    if (decoded === BREAK) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} got unexpected break`);
    }
    if (!tokeniser.done()) {
        throw new Error(`${__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrPrefix"]} too many terminals, data makes no sense`);
    }
    return decoded;
}
;
}),
"[project]/hygiea/front-doctor/node_modules/cborg/esm/cborg.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$encode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/encode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/decode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$cborg$2f$esm$2f$lib$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/cborg/esm/lib/token.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/deoxysii/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AEAD",
    ()=>AEAD,
    "ErrKeySize",
    ()=>ErrKeySize,
    "ErrNonceSize",
    ()=>ErrNonceSize,
    "ErrOpen",
    ()=>ErrOpen,
    "KeySize",
    ()=>KeySize,
    "NonceSize",
    ()=>NonceSize,
    "TagSize",
    ()=>TagSize,
    "default",
    ()=>src_default
]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
// src/deoxysii.ts
var deoxysii_exports = {};
__export(deoxysii_exports, {
    AEAD: ()=>AEAD,
    ErrKeySize: ()=>ErrKeySize,
    ErrNonceSize: ()=>ErrNonceSize,
    ErrOpen: ()=>ErrOpen,
    KeySize: ()=>KeySize,
    NonceSize: ()=>NonceSize,
    TagSize: ()=>TagSize
});
// src/uint32.ts
function uint32_fromBytesBigEndian(highByte, secondHighByte, thirdHighByte, lowByte) {
    return (highByte << 24 | secondHighByte << 16 | thirdHighByte << 8 | lowByte) >>> 0;
}
function uint32_or(uint32val0, ...argv) {
    let result = uint32val0;
    for (const x of argv){
        result = result | x;
    }
    return result >>> 0;
}
function uint32_and(uint32val0, ...argv) {
    let result = uint32val0;
    for (const x of argv){
        result = result & x;
    }
    return result >>> 0;
}
function uint32_xor3(a, b, c) {
    return (a ^ b ^ c) >>> 0;
}
function uint32_xor2(a, b) {
    return (a ^ b) >>> 0;
}
function uint32_xor(uint32val0, ...argv) {
    let result = uint32val0;
    for (const x of argv){
        result = result ^ x;
    }
    return result >>> 0;
}
function uint32_not(uint32val) {
    return ~uint32val >>> 0;
}
function uint32_shiftLeft(uint32val, numBits) {
    return uint32val << numBits >>> 0;
}
function uint32_shiftRight(uint32val, numBits) {
    return uint32val >>> numBits;
}
function uint32_rotateRight(uint32val, numBits) {
    return (uint32val >>> numBits | uint32val << 32 - numBits >>> 0) >>> 0;
}
// src/aes.ts
var oddsMask = uint32_fromBytesBigEndian(85, 85, 85, 85);
var evensMask = uint32_fromBytesBigEndian(170, 170, 170, 170);
var cl4 = uint32_fromBytesBigEndian(51, 51, 51, 51);
var ch4 = uint32_fromBytesBigEndian(204, 204, 204, 204);
var cl8 = uint32_fromBytesBigEndian(15, 15, 15, 15);
var ch8 = uint32_fromBytesBigEndian(240, 240, 240, 240);
var shiftRowsMask0 = uint32_fromBytesBigEndian(0, 0, 0, 255);
var shiftRowsMask1 = uint32_fromBytesBigEndian(0, 0, 252, 0);
var shiftRowsMask2 = uint32_fromBytesBigEndian(0, 0, 3, 0);
var shiftRowsMask3 = uint32_fromBytesBigEndian(0, 240, 0, 0);
var shiftRowsMask4 = uint32_fromBytesBigEndian(0, 15, 0, 0);
var shiftRowsMask5 = uint32_fromBytesBigEndian(192, 0, 0, 0);
var shiftRowsMask6 = uint32_fromBytesBigEndian(63, 0, 0, 0);
function newQ() {
    return new Uint32Array(8);
}
function addRoundKey(q, sk) {
    q[0] = uint32_xor2(q[0], sk[0]);
    q[1] = uint32_xor2(q[1], sk[1]);
    q[2] = uint32_xor2(q[2], sk[2]);
    q[3] = uint32_xor2(q[3], sk[3]);
    q[4] = uint32_xor2(q[4], sk[4]);
    q[5] = uint32_xor2(q[5], sk[5]);
    q[6] = uint32_xor2(q[6], sk[6]);
    q[7] = uint32_xor2(q[7], sk[7]);
}
function subBytes(q) {
    const x0 = q[7];
    const x1 = q[6];
    const x2 = q[5];
    const x3 = q[4];
    const x4 = q[3];
    const x5 = q[2];
    const x6 = q[1];
    const x7 = q[0];
    const y14 = uint32_xor2(x3, x5);
    const y13 = uint32_xor2(x0, x6);
    const y9 = uint32_xor2(x0, x3);
    const y8 = uint32_xor2(x0, x5);
    const t0 = uint32_xor2(x1, x2);
    const y1 = uint32_xor2(t0, x7);
    const y4 = uint32_xor2(y1, x3);
    const y12 = uint32_xor2(y13, y14);
    const y2 = uint32_xor2(y1, x0);
    const y5 = uint32_xor2(y1, x6);
    const y3 = uint32_xor2(y5, y8);
    const t1 = uint32_xor2(x4, y12);
    const y15 = uint32_xor2(t1, x5);
    const y20 = uint32_xor2(t1, x1);
    const y6 = uint32_xor2(y15, x7);
    const y10 = uint32_xor2(y15, t0);
    const y11 = uint32_xor2(y20, y9);
    const y7 = uint32_xor2(x7, y11);
    const y17 = uint32_xor2(y10, y11);
    const y19 = uint32_xor2(y10, y8);
    const y16 = uint32_xor2(t0, y11);
    const y21 = uint32_xor2(y13, y16);
    const y18 = uint32_xor2(x0, y16);
    const t2 = uint32_and(y12, y15);
    const t3 = uint32_and(y3, y6);
    const t4 = uint32_xor2(t3, t2);
    const t5 = uint32_and(y4, x7);
    const t6 = uint32_xor2(t5, t2);
    const t7 = uint32_and(y13, y16);
    const t8 = uint32_and(y5, y1);
    const t9 = uint32_xor2(t8, t7);
    const t10 = uint32_and(y2, y7);
    const t11 = uint32_xor2(t10, t7);
    const t12 = uint32_and(y9, y11);
    const t13 = uint32_and(y14, y17);
    const t14 = uint32_xor2(t13, t12);
    const t15 = uint32_and(y8, y10);
    const t16 = uint32_xor2(t15, t12);
    const t17 = uint32_xor2(t4, t14);
    const t18 = uint32_xor2(t6, t16);
    const t19 = uint32_xor2(t9, t14);
    const t20 = uint32_xor2(t11, t16);
    const t21 = uint32_xor2(t17, y20);
    const t22 = uint32_xor2(t18, y19);
    const t23 = uint32_xor2(t19, y21);
    const t24 = uint32_xor2(t20, y18);
    const t25 = uint32_xor2(t21, t22);
    const t26 = uint32_and(t21, t23);
    const t27 = uint32_xor2(t24, t26);
    const t28 = uint32_and(t25, t27);
    const t29 = uint32_xor2(t28, t22);
    const t30 = uint32_xor2(t23, t24);
    const t31 = uint32_xor2(t22, t26);
    const t32 = uint32_and(t31, t30);
    const t33 = uint32_xor2(t32, t24);
    const t34 = uint32_xor2(t23, t33);
    const t35 = uint32_xor2(t27, t33);
    const t36 = uint32_and(t24, t35);
    const t37 = uint32_xor2(t36, t34);
    const t38 = uint32_xor2(t27, t36);
    const t39 = uint32_and(t29, t38);
    const t40 = uint32_xor2(t25, t39);
    const t41 = uint32_xor2(t40, t37);
    const t42 = uint32_xor2(t29, t33);
    const t43 = uint32_xor2(t29, t40);
    const t44 = uint32_xor2(t33, t37);
    const t45 = uint32_xor2(t42, t41);
    const z0 = uint32_and(t44, y15);
    const z1 = uint32_and(t37, y6);
    const z2 = uint32_and(t33, x7);
    const z3 = uint32_and(t43, y16);
    const z4 = uint32_and(t40, y1);
    const z5 = uint32_and(t29, y7);
    const z6 = uint32_and(t42, y11);
    const z7 = uint32_and(t45, y17);
    const z8 = uint32_and(t41, y10);
    const z9 = uint32_and(t44, y12);
    const z10 = uint32_and(t37, y3);
    const z11 = uint32_and(t33, y4);
    const z12 = uint32_and(t43, y13);
    const z13 = uint32_and(t40, y5);
    const z14 = uint32_and(t29, y2);
    const z15 = uint32_and(t42, y9);
    const z16 = uint32_and(t45, y14);
    const z17 = uint32_and(t41, y8);
    const t46 = uint32_xor2(z15, z16);
    const t47 = uint32_xor2(z10, z11);
    const t48 = uint32_xor2(z5, z13);
    const t49 = uint32_xor2(z9, z10);
    const t50 = uint32_xor2(z2, z12);
    const t51 = uint32_xor2(z2, z5);
    const t52 = uint32_xor2(z7, z8);
    const t53 = uint32_xor2(z0, z3);
    const t54 = uint32_xor2(z6, z7);
    const t55 = uint32_xor2(z16, z17);
    const t56 = uint32_xor2(z12, t48);
    const t57 = uint32_xor2(t50, t53);
    const t58 = uint32_xor2(z4, t46);
    const t59 = uint32_xor2(z3, t54);
    const t60 = uint32_xor2(t46, t57);
    const t61 = uint32_xor2(z14, t57);
    const t62 = uint32_xor2(t52, t58);
    const t63 = uint32_xor2(t49, t58);
    const t64 = uint32_xor2(z4, t59);
    const t65 = uint32_xor2(t61, t62);
    const t66 = uint32_xor2(z1, t63);
    const s0 = uint32_xor2(t59, t63);
    const s6 = uint32_xor2(t56, uint32_not(t62));
    const s7 = uint32_xor2(t48, uint32_not(t60));
    const t67 = uint32_xor2(t64, t65);
    const s3 = uint32_xor2(t53, t66);
    const s4 = uint32_xor2(t51, t66);
    const s5 = uint32_xor2(t47, t65);
    const s1 = uint32_xor2(t64, uint32_not(s3));
    const s2 = uint32_xor2(t55, uint32_not(t67));
    q[7] = s0;
    q[6] = s1;
    q[5] = s2;
    q[4] = s3;
    q[3] = s4;
    q[2] = s5;
    q[1] = s6;
    q[0] = s7;
}
function shiftRows(q) {
    for(let i = 0; i < 8; i++){
        const x = q[i];
        q[i] = uint32_or(uint32_and(x, shiftRowsMask0), uint32_shiftRight(uint32_and(x, shiftRowsMask1), 2), uint32_shiftLeft(uint32_and(x, shiftRowsMask2), 6), uint32_shiftRight(uint32_and(x, shiftRowsMask3), 4), uint32_shiftLeft(uint32_and(x, shiftRowsMask4), 4), uint32_shiftRight(uint32_and(x, shiftRowsMask5), 6), uint32_shiftLeft(uint32_and(x, shiftRowsMask6), 2));
    }
}
function mixColumns(q) {
    const q0 = q[0];
    const q1 = q[1];
    const q2 = q[2];
    const q3 = q[3];
    const q4 = q[4];
    const q5 = q[5];
    const q6 = q[6];
    const q7 = q[7];
    const r0 = uint32_or(uint32_shiftRight(q0, 8), uint32_shiftLeft(q0, 24));
    const r1 = uint32_or(uint32_shiftRight(q1, 8), uint32_shiftLeft(q1, 24));
    const r2 = uint32_or(uint32_shiftRight(q2, 8), uint32_shiftLeft(q2, 24));
    const r3 = uint32_or(uint32_shiftRight(q3, 8), uint32_shiftLeft(q3, 24));
    const r4 = uint32_or(uint32_shiftRight(q4, 8), uint32_shiftLeft(q4, 24));
    const r5 = uint32_or(uint32_shiftRight(q5, 8), uint32_shiftLeft(q5, 24));
    const r6 = uint32_or(uint32_shiftRight(q6, 8), uint32_shiftLeft(q6, 24));
    const r7 = uint32_or(uint32_shiftRight(q7, 8), uint32_shiftLeft(q7, 24));
    q[0] = uint32_xor(q7, r7, r0, uint32_rotateRight(uint32_xor2(q0, r0), 16));
    q[1] = uint32_xor(q0, r0, q7, r7, r1, uint32_rotateRight(uint32_xor2(q1, r1), 16));
    q[2] = uint32_xor(q1, r1, r2, uint32_rotateRight(uint32_xor2(q2, r2), 16));
    q[3] = uint32_xor(q2, r2, q7, r7, r3, uint32_rotateRight(uint32_xor2(q3, r3), 16));
    q[4] = uint32_xor(q3, r3, q7, r7, r4, uint32_rotateRight(uint32_xor2(q4, r4), 16));
    q[5] = uint32_xor(q4, r4, r5, uint32_rotateRight(uint32_xor2(q5, r5), 16));
    q[6] = uint32_xor(q5, r5, r6, uint32_rotateRight(uint32_xor2(q6, r6), 16));
    q[7] = uint32_xor(q6, r6, r7, uint32_rotateRight(uint32_xor2(q7, r7), 16));
}
function load4xU32(q, src) {
    const srcView = new DataView(src.buffer);
    q[0] = srcView.getUint32(0 + src.byteOffset, true);
    q[2] = srcView.getUint32(4 + src.byteOffset, true);
    q[4] = srcView.getUint32(8 + src.byteOffset, true);
    q[6] = srcView.getUint32(12 + src.byteOffset, true);
    q[1] = 0;
    q[3] = 0;
    q[5] = 0;
    q[7] = 0;
    ortho(q);
}
function load8xU32(q, src0, src1) {
    const src0View = new DataView(src0.buffer);
    const src1View = new DataView(src1.buffer);
    q[0] = src0View.getUint32(0 + src0.byteOffset, true);
    q[2] = src0View.getUint32(4 + src0.byteOffset, true);
    q[4] = src0View.getUint32(8 + src0.byteOffset, true);
    q[6] = src0View.getUint32(12 + src0.byteOffset, true);
    q[1] = src1View.getUint32(0 + src1.byteOffset, true);
    q[3] = src1View.getUint32(4 + src1.byteOffset, true);
    q[5] = src1View.getUint32(8 + src1.byteOffset, true);
    q[7] = src1View.getUint32(12 + src1.byteOffset, true);
    ortho(q);
}
function store4xU32(dst, q) {
    ortho(q);
    const dstView = new DataView(dst.buffer);
    dstView.setUint32(0 + dst.byteOffset, q[0], true);
    dstView.setUint32(4 + dst.byteOffset, q[2], true);
    dstView.setUint32(8 + dst.byteOffset, q[4], true);
    dstView.setUint32(12 + dst.byteOffset, q[6], true);
}
function store8xU32(dst0, dst1, q) {
    ortho(q);
    const dst0View = new DataView(dst0.buffer);
    const dst1View = new DataView(dst1.buffer);
    dst0View.setUint32(0 + dst0.byteOffset, q[0], true);
    dst0View.setUint32(4 + dst0.byteOffset, q[2], true);
    dst0View.setUint32(8 + dst0.byteOffset, q[4], true);
    dst0View.setUint32(12 + dst0.byteOffset, q[6], true);
    dst1View.setUint32(0 + dst1.byteOffset, q[1], true);
    dst1View.setUint32(4 + dst1.byteOffset, q[3], true);
    dst1View.setUint32(8 + dst1.byteOffset, q[5], true);
    dst1View.setUint32(12 + dst1.byteOffset, q[7], true);
}
function ortho(q) {
    for(let i = 0; i < 8; i += 2){
        const q0 = q[i];
        const q1 = q[i + 1];
        q[i] = uint32_or(uint32_and(q0, oddsMask), uint32_shiftLeft(uint32_and(q1, oddsMask), 1));
        q[i + 1] = uint32_or(uint32_shiftRight(uint32_and(q0, evensMask), 1), uint32_and(q1, evensMask));
    }
    for(let i = 0; i < 8; i += 4){
        const q0 = q[i];
        const q1 = q[i + 1];
        const q2 = q[i + 2];
        const q3 = q[i + 3];
        q[i] = uint32_or(uint32_and(q0, cl4), uint32_shiftLeft(uint32_and(q2, cl4), 2));
        q[i + 2] = uint32_or(uint32_shiftRight(uint32_and(q0, ch4), 2), uint32_and(q2, ch4));
        q[i + 1] = uint32_or(uint32_and(q1, cl4), uint32_shiftLeft(uint32_and(q3, cl4), 2));
        q[i + 3] = uint32_or(uint32_shiftRight(uint32_and(q1, ch4), 2), uint32_and(q3, ch4));
    }
    for(let i = 0; i < 4; i++){
        const q0 = q[i];
        const q4 = q[i + 4];
        q[i] = uint32_or(uint32_and(q0, cl8), uint32_shiftLeft(uint32_and(q4, cl8), 4));
        q[i + 4] = uint32_or(uint32_shiftRight(uint32_and(q0, ch8), 4), uint32_and(q4, ch8));
    }
}
function rkeyOrtho(q, key) {
    const keyView = new DataView(key.buffer);
    for(let i = 0; i < 4; i++){
        const x = keyView.getUint32(i * 4 + key.byteOffset, true);
        q[i * 2] = x;
        q[i * 2 + 1] = x;
    }
    ortho(q);
    for(let i = 0, j = 0; i < 4; i = i + 1, j = j + 2){
        let x = uint32_or(uint32_and(q[j + 0], oddsMask), uint32_and(q[j + 1], evensMask));
        let y = x;
        x = uint32_and(x, oddsMask);
        q[j] = uint32_or(x, uint32_shiftLeft(x, 1));
        y = uint32_and(y, evensMask);
        q[j + 1] = uint32_or(y, uint32_shiftRight(y, 1));
    }
}
// src/deoxysii.ts
var KeySize = 32;
var NonceSize = 15;
var TagSize = 16;
var stkSize = 16;
var rounds = 16;
var blockSize = 16;
var tweakSize = 16;
var prefixADBlock = 2;
var prefixADFinal = 6;
var prefixMsgBlock = 0;
var prefixMsgFinal = 4;
var prefixTag = 1;
var prefixShift = 4;
function xorBytes(dst, a, b, n) {
    for(let i = 0; i < n; i++){
        dst[i] = a[i] ^ b[i];
    }
}
var rcons = new Uint8Array([
    47,
    94,
    188,
    99,
    198,
    151,
    53,
    106,
    212,
    179,
    125,
    250,
    239,
    197,
    145,
    57,
    114
]);
function h(t) {
    t.set(new Uint8Array([
        t[1],
        t[6],
        t[11],
        t[12],
        t[5],
        t[10],
        t[15],
        t[0],
        t[9],
        t[14],
        t[3],
        t[4],
        t[13],
        t[2],
        t[7],
        t[8]
    ]));
}
function lfsr2(t) {
    for(let i = 0; i < stkSize; i++){
        const x = t[i];
        const x7 = x >> 7;
        const x5 = x >> 5 & 1;
        t[i] = x << 1 | x7 ^ x5;
    }
}
function lfsr3(t) {
    for(let i = 0; i < stkSize; i++){
        const x = t[i];
        const x0 = x & 1;
        const x6 = x >> 6 & 1;
        t[i] = x >> 1 | (x0 ^ x6) << 7;
    }
}
function xorRC(t, i) {
    t[0] ^= 1;
    t[1] ^= 2;
    t[2] ^= 4;
    t[3] ^= 8;
    t[4] ^= rcons[i];
    t[5] ^= rcons[i];
    t[6] ^= rcons[i];
    t[7] ^= rcons[i];
}
function stkDeriveK(key, derivedKs) {
    const tk2 = key.subarray(16, 32);
    const tk3 = key.subarray(0, 16);
    xorBytes(derivedKs[0], tk2, tk3, stkSize);
    xorRC(derivedKs[0], 0);
    for(let i = 1; i <= rounds; i++){
        lfsr2(tk2);
        h(tk2);
        lfsr3(tk3);
        h(tk3);
        xorBytes(derivedKs[i], tk2, tk3, stkSize);
        xorRC(derivedKs[i], i);
    }
}
function deriveSubTweakKeys(stks, derivedKs, tweak) {
    const tk1 = new Uint8Array(tweak);
    xorBytes(stks[0], derivedKs[0], tk1, stkSize);
    for(let i = 1; i <= rounds; i++){
        h(tk1);
        xorBytes(stks[i], derivedKs[i], tk1, stkSize);
    }
}
function newStks() {
    const stks = [];
    for(let i = 0; i <= rounds; i++){
        stks.push(new Uint8Array(16));
    }
    return stks;
}
function ct32_bcEncrypt(ciphertext, derivedKs, tweak, plaintext) {
    const stks = newStks();
    deriveSubTweakKeys(stks, derivedKs, tweak);
    const q = newQ();
    const stk = newQ();
    load4xU32(q, plaintext);
    load4xU32(stk, stks[0]);
    addRoundKey(q, stk);
    for(let i = 1; i <= rounds; i++){
        subBytes(q);
        shiftRows(q);
        mixColumns(q);
        load4xU32(stk, stks[i]);
        addRoundKey(q, stk);
    }
    store4xU32(ciphertext, q);
}
function ct32_bcKeystreamx2(ciphertext, derivedKs, tweaks, nonce) {
    const stks = [
        newStks(),
        newStks()
    ];
    for(let i = 0; i < 2; i++){
        deriveSubTweakKeys(stks[i], derivedKs, tweaks[i]);
    }
    const q = newQ();
    const stk = newQ();
    rkeyOrtho(q, nonce);
    load8xU32(stk, stks[0][0], stks[1][0]);
    addRoundKey(q, stk);
    for(let i = 1; i <= rounds; i++){
        subBytes(q);
        shiftRows(q);
        mixColumns(q);
        load8xU32(stk, stks[0][i], stks[1][i]);
        addRoundKey(q, stk);
    }
    store8xU32(ciphertext.subarray(0, 16), ciphertext.subarray(16, 32), q);
}
function ct32_bcTagx1(tag, derivedKs, tweak, plaintext) {
    const stks = newStks();
    deriveSubTweakKeys(stks, derivedKs, tweak);
    const q = newQ();
    const stk = newQ();
    load4xU32(q, plaintext);
    load4xU32(stk, stks[0]);
    addRoundKey(q, stk);
    for(let i = 1; i <= rounds; i++){
        subBytes(q);
        shiftRows(q);
        mixColumns(q);
        load4xU32(stk, stks[i]);
        addRoundKey(q, stk);
    }
    const tagView = new DataView(tag.buffer);
    let tag0 = tagView.getUint32(0, true);
    let tag1 = tagView.getUint32(4, true);
    let tag2 = tagView.getUint32(8, true);
    let tag3 = tagView.getUint32(12, true);
    ortho(q);
    tag0 = uint32_xor2(tag0, q[0]);
    tag1 = uint32_xor2(tag1, q[2]);
    tag2 = uint32_xor2(tag2, q[4]);
    tag3 = uint32_xor2(tag3, q[6]);
    tagView.setUint32(0, tag0, true);
    tagView.setUint32(4, tag1, true);
    tagView.setUint32(8, tag2, true);
    tagView.setUint32(12, tag3, true);
}
function ct32_bcTagx2(tag, derivedKs, tweaks, plaintext) {
    const stks = [
        newStks(),
        newStks()
    ];
    for(let i = 0; i < 2; i++){
        deriveSubTweakKeys(stks[i], derivedKs, tweaks[i]);
    }
    const q = newQ();
    const stk = newQ();
    load8xU32(q, plaintext.subarray(0, 16), plaintext.subarray(16, 32));
    load8xU32(stk, stks[0][0], stks[1][0]);
    addRoundKey(q, stk);
    for(let i = 1; i <= rounds; i++){
        subBytes(q);
        shiftRows(q);
        mixColumns(q);
        load8xU32(stk, stks[0][i], stks[1][i]);
        addRoundKey(q, stk);
    }
    const tagView = new DataView(tag.buffer);
    let tag0 = tagView.getUint32(0, true);
    let tag1 = tagView.getUint32(4, true);
    let tag2 = tagView.getUint32(8, true);
    let tag3 = tagView.getUint32(12, true);
    ortho(q);
    tag0 = uint32_xor3(tag0, q[0], q[1]);
    tag1 = uint32_xor3(tag1, q[2], q[3]);
    tag2 = uint32_xor3(tag2, q[4], q[5]);
    tag3 = uint32_xor3(tag3, q[6], q[7]);
    tagView.setUint32(0, tag0, true);
    tagView.setUint32(4, tag1, true);
    tagView.setUint32(8, tag2, true);
    tagView.setUint32(12, tag3, true);
}
function encodeTagTweak(out, prefix, blockNr) {
    out.set(new Uint8Array(12));
    new DataView(out.buffer).setUint32(12 + out.byteOffset, blockNr, false);
    out[0] = prefix << prefixShift;
}
function encodeEncTweak(out, tag, blockNr) {
    const tmp = new Uint8Array(4);
    new DataView(tmp.buffer).setUint32(0, blockNr, false);
    out.set(tag);
    out[0] |= 128;
    xorBytes(out.subarray(12, 16), out.subarray(12, 16), tmp, 4);
}
function newTweaks() {
    return [
        new Uint8Array(tweakSize),
        new Uint8Array(tweakSize)
    ];
}
function e(derivedKs, nonce, dst, ad, msg) {
    const tweaks = newTweaks();
    let i = 0;
    let j = 0;
    let adLen = ad.length;
    const auth = new Uint8Array(TagSize);
    for(i = 0; adLen >= 2 * blockSize; i += 2){
        encodeTagTweak(tweaks[0], prefixADBlock, i);
        encodeTagTweak(tweaks[1], prefixADBlock, i + 1);
        ct32_bcTagx2(auth, derivedKs, tweaks, ad.subarray(i * blockSize, (i + 2) * blockSize));
        adLen -= 2 * blockSize;
    }
    for(; adLen >= blockSize; i++){
        encodeTagTweak(tweaks[0], prefixADBlock, i);
        ct32_bcTagx1(auth, derivedKs, tweaks[0], ad.subarray(i * blockSize, (i + 1) * blockSize));
        adLen -= blockSize;
    }
    if (adLen > 0) {
        encodeTagTweak(tweaks[0], prefixADFinal, i);
        const aStar = new Uint8Array(blockSize);
        aStar.set(ad.subarray(ad.length - adLen));
        aStar[adLen] = 128;
        ct32_bcTagx1(auth, derivedKs, tweaks[0], aStar);
    }
    let msgLen = msg.length;
    for(j = 0; msgLen >= 2 * blockSize; j += 2){
        encodeTagTweak(tweaks[0], prefixMsgBlock, j);
        encodeTagTweak(tweaks[1], prefixMsgBlock, j + 1);
        ct32_bcTagx2(auth, derivedKs, tweaks, msg.subarray(j * blockSize, (j + 2) * blockSize));
        msgLen -= 2 * blockSize;
    }
    for(; msgLen >= blockSize; j++){
        encodeTagTweak(tweaks[0], prefixMsgBlock, j);
        ct32_bcTagx1(auth, derivedKs, tweaks[0], msg.subarray(j * blockSize, (j + 1) * blockSize));
        msgLen -= blockSize;
    }
    if (msgLen > 0) {
        encodeTagTweak(tweaks[0], prefixMsgFinal, j);
        const mStar = new Uint8Array(blockSize);
        mStar.set(msg.subarray(msg.length - msgLen));
        mStar[msgLen] = 128;
        ct32_bcTagx1(auth, derivedKs, tweaks[0], mStar);
    }
    const encNonce = new Uint8Array(blockSize);
    encNonce.set(nonce, 1);
    encNonce[0] = prefixTag << prefixShift;
    ct32_bcEncrypt(auth, derivedKs, encNonce, auth);
    encNonce[0] = 0;
    msgLen = msg.length;
    const encBlks = new Uint8Array(2 * blockSize);
    for(j = 0; msgLen >= 2 * blockSize; j += 2){
        encodeEncTweak(tweaks[0], auth, j);
        encodeEncTweak(tweaks[1], auth, j + 1);
        ct32_bcKeystreamx2(encBlks, derivedKs, tweaks, encNonce);
        xorBytes(dst.subarray(j * blockSize, (j + 2) * blockSize), msg.subarray(j * blockSize, (j + 2) * blockSize), encBlks, 2 * blockSize);
        msgLen -= 2 * blockSize;
    }
    for(; msgLen >= blockSize; j++){
        encodeEncTweak(tweaks[0], auth, j);
        ct32_bcEncrypt(encBlks, derivedKs, tweaks[0], encNonce);
        xorBytes(dst.subarray(j * blockSize, (j + 1) * blockSize), msg.subarray(j * blockSize, (j + 1) * blockSize), encBlks, blockSize);
        msgLen -= blockSize;
    }
    if (msgLen > 0) {
        encodeEncTweak(tweaks[0], auth, j);
        ct32_bcEncrypt(encBlks, derivedKs, tweaks[0], encNonce);
        xorBytes(dst.subarray(j * blockSize, msg.length), msg.subarray(j * blockSize), encBlks, msgLen);
    }
    dst.set(auth, msg.length);
}
function d(derivedKs, nonce, dst, ad, ct) {
    let ctLen = ct.length - TagSize;
    const ciphertext = ct.subarray(0, ctLen);
    const tag = ct.subarray(ctLen);
    let j = 0;
    const decTweaks = newTweaks();
    const decNonce = new Uint8Array(blockSize);
    decNonce.set(nonce, 1);
    const decBlks = new Uint8Array(2 * blockSize);
    for(j = 0; ctLen >= 2 * blockSize; j += 2){
        encodeEncTweak(decTweaks[0], tag, j);
        encodeEncTweak(decTweaks[1], tag, j + 1);
        ct32_bcKeystreamx2(decBlks, derivedKs, decTweaks, decNonce);
        xorBytes(dst.subarray(j * blockSize, (j + 2) * blockSize), ciphertext.subarray(j * blockSize, (j + 2) * blockSize), decBlks, 2 * blockSize);
        ctLen -= 2 * blockSize;
    }
    for(; ctLen >= blockSize; j++){
        encodeEncTweak(decTweaks[0], tag, j);
        ct32_bcEncrypt(decBlks, derivedKs, decTweaks[0], decNonce);
        xorBytes(dst.subarray(j * blockSize, (j + 1) * blockSize), ciphertext.subarray(j * blockSize, (j + 1) * blockSize), decBlks, blockSize);
        ctLen -= blockSize;
    }
    if (ctLen > 0) {
        encodeEncTweak(decTweaks[0], tag, j);
        ct32_bcEncrypt(decBlks, derivedKs, decTweaks[0], decNonce);
        xorBytes(dst.subarray(j * blockSize), ciphertext.subarray(j * blockSize), decBlks, ctLen);
    }
    let i = 0;
    let adLen = ad.length;
    const tweaks = newTweaks();
    const auth = new Uint8Array(TagSize);
    for(i = 0; adLen >= 2 * blockSize; i += 2){
        encodeTagTweak(tweaks[0], prefixADBlock, i);
        encodeTagTweak(tweaks[1], prefixADBlock, i + 1);
        ct32_bcTagx2(auth, derivedKs, tweaks, ad.subarray(i * blockSize, (i + 2) * blockSize));
        adLen -= 2 * blockSize;
    }
    for(; adLen >= blockSize; i++){
        encodeTagTweak(tweaks[0], prefixADBlock, i);
        ct32_bcTagx1(auth, derivedKs, tweaks[0], ad.subarray(i * blockSize, (i + 1) * blockSize));
        adLen -= blockSize;
    }
    if (adLen > 0) {
        encodeTagTweak(tweaks[0], prefixADFinal, i);
        const aStar = new Uint8Array(blockSize);
        aStar.set(ad.subarray(ad.length - adLen));
        aStar[adLen] = 128;
        ct32_bcTagx1(auth, derivedKs, tweaks[0], aStar);
    }
    let msgLen = dst.length;
    for(j = 0; msgLen >= 2 * blockSize; j += 2){
        encodeTagTweak(tweaks[0], prefixMsgBlock, j);
        encodeTagTweak(tweaks[1], prefixMsgBlock, j + 1);
        ct32_bcTagx2(auth, derivedKs, tweaks, dst.subarray(j * blockSize, (j + 2) * blockSize));
        msgLen -= 2 * blockSize;
    }
    for(; msgLen >= blockSize; j++){
        encodeTagTweak(tweaks[0], prefixMsgBlock, j);
        ct32_bcTagx1(auth, derivedKs, tweaks[0], dst.subarray(j * blockSize, (j + 1) * blockSize));
        msgLen -= blockSize;
    }
    if (msgLen > 0) {
        encodeTagTweak(tweaks[0], prefixMsgFinal, j);
        const mStar = new Uint8Array(blockSize);
        mStar.set(dst.subarray(dst.length - msgLen));
        mStar[msgLen] = 128;
        ct32_bcTagx1(auth, derivedKs, tweaks[0], mStar);
    }
    decNonce[0] = prefixTag << prefixShift;
    ct32_bcEncrypt(auth, derivedKs, decNonce, auth);
    if (auth.length !== tag.length) {
        return false;
    }
    let eql = true;
    for(i = 0; i < auth.length; i++){
        eql &= !(auth[i] ^ tag[i]);
    }
    return eql;
}
var AEAD = class {
    constructor(key){
        __publicField(this, "derivedKs");
        if (key.length !== KeySize) {
            throw ErrKeySize;
        }
        this.derivedKs = newStks();
        stkDeriveK(key, this.derivedKs);
    }
    encrypt(nonce, plaintext = null, associatedData = null) {
        if (nonce.length !== NonceSize) {
            throw ErrNonceSize;
        }
        if (plaintext == null) {
            plaintext = zeroBuffer;
        }
        if (associatedData == null) {
            associatedData = zeroBuffer;
        }
        const dst = new Uint8Array(plaintext.length + TagSize);
        e(this.derivedKs, nonce, dst, associatedData, plaintext);
        return dst;
    }
    decrypt(nonce, ciphertext, associatedData = null) {
        if (nonce.length !== NonceSize) {
            throw ErrNonceSize;
        }
        if (ciphertext.length < TagSize) {
            throw ErrOpen;
        }
        if (associatedData == null) {
            associatedData = zeroBuffer;
        }
        const dst = new Uint8Array(ciphertext.length - TagSize);
        if (!d(this.derivedKs, nonce, dst, associatedData, ciphertext)) {
            dst.set(new Uint8Array(dst.length));
            throw ErrOpen;
        }
        return dst;
    }
};
var zeroBuffer = new Uint8Array(0);
var ErrKeySize = "deoxysii: invalid key size";
var ErrNonceSize = "deoxysii: invalid nonce size";
var ErrOpen = "deoxysii: message authentication failure";
// src/index.ts
var src_default = deoxysii_exports;
;
 /**
 * @license (c) Franz X Antesberger 2013
 */ }),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-wagmi-v2/dist/_esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @license Apache-2.0
 */ __turbopack_context__.s([
    "createSapphireConfig",
    ()=>createSapphireConfig,
    "injectedWithSapphire",
    ()=>injectedWithSapphire
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/createConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-ssr] (ecmascript)");
;
;
;
;
const cachedProviders = new Map();
function injectedWithSapphire(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injected"])({
        target: ()=>{
            return {
                id: "injected-sapphire",
                name: "Injected (Sapphire)",
                provider (window) {
                    if (window?.ethereum) {
                        // Note: providers are cached as connectors are frequently retrieved
                        //       it prevents sapphire wrapper being called multiple times
                        //       which spams the RPC with oasis_callDataPublicKey requests
                        if (!cachedProviders.has(window.ethereum)) {
                            const wp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapEthereumProvider"])(window.ethereum, options);
                            cachedProviders.set(window.ethereum, wp);
                            return wp;
                        }
                        return cachedProviders.get(window.ethereum);
                    }
                    return undefined;
                }
            };
        }
    });
}
function createSapphireConfig(parameters) {
    const { sapphireConfig, ...restParameters } = parameters;
    const { replaceProviders = false, wrappedProvidersFilter = ()=>true, wrap: wrapOptions } = sapphireConfig;
    // SSR check
    const _dispatchEvent = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfig"])({
        ...restParameters
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-viem-v2/dist/_esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "SAPPHIRE_WRAPPED_VIEM_SERIALIZER",
    ()=>SAPPHIRE_WRAPPED_VIEM_SERIALIZER,
    "SAPPHIRE_WRAPPED_VIEM_TRANSPORT",
    ()=>SAPPHIRE_WRAPPED_VIEM_TRANSPORT,
    "createSapphireSerializer",
    ()=>createSapphireSerializer,
    "sapphireHttpTransport",
    ()=>sapphireHttpTransport,
    "sapphireLocalnet",
    ()=>sapphireLocalnet,
    "wrapWalletClient",
    ()=>wrapWalletClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$calldatapublickey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/calldatapublickey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$networks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/networks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-paratime/lib/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/utils/chain/defineChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
;
;
const sapphireLocalnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineChain"])({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$networks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORKS"].localnet.chainId,
    name: "Oasis Sapphire Localnet",
    network: "sapphire-localnet",
    nativeCurrency: {
        name: "Sapphire Local Rose",
        symbol: "TEST",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$networks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NETWORKS"].localnet.defaultGateway
            ]
        }
    },
    testnet: true
});
const SAPPHIRE_WRAPPED_VIEM_TRANSPORT = Symbol("#SAPPHIRE_WRAPPED_VIEM_TRANSPORT");
function sapphireHttpTransport(sapphireConfig, overrideUrl, httpConfig) {
    const cachedProviders = {};
    return (params)=>{
        const defaultUrl = params.chain?.rpcUrls.default.http[0];
        const url = overrideUrl || defaultUrl;
        if (!url) {
            throw new Error("sapphireHttpTransport() needs a chain.rpcUrls.default.http[0] to be set or explicit url");
        }
        if (!(url in cachedProviders)) {
            const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapEthereumProvider"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(url, httpConfig)(params), sapphireConfig);
            Reflect.set(x, SAPPHIRE_WRAPPED_VIEM_TRANSPORT, true);
            cachedProviders[url] = x;
        }
        return cachedProviders[url];
    };
}
async function createSapphireSerializer(client, originalSerializer) {
    // Don't double-wrap serializer
    if (originalSerializer && Reflect.has(originalSerializer, SAPPHIRE_WRAPPED_VIEM_SERIALIZER)) {
        return originalSerializer;
    }
    // As the serializer is synchronous, fetching keys while running
    const fetcher = new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$paratime$2f$lib$2f$esm$2f$calldatapublickey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyFetcher"]();
    const provider = client;
    await fetcher.fetch(provider);
    // The fetcher runs in the background, routinely fetching the keys
    // This means when the serializer requests a calldata public key one will
    // have been retrieved pre-emptively.
    const intervalId = setInterval(async ()=>{
        await fetcher.fetch(provider);
    }, fetcher.timeoutMilliseconds);
    // The interval ID is unreferenced to prevent Node from hanging at exit
    // See discussion on https://github.com/oasisprotocol/sapphire-paratime/pull/379
    // This is only available in NodeJS, and not in browsers
    if (typeof intervalId.unref === "function") {
        intervalId.unref();
    }
    const wrappedSerializer = (tx, sig)=>{
        if (!sig) {
            const cipher = fetcher.cipherSync();
            const encryptedData = cipher.encryptCall(tx.data);
            tx.data = encryptedData;
        }
        if (originalSerializer) {
            return originalSerializer(tx, sig);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(tx, sig);
    };
    Reflect.set(wrappedSerializer, SAPPHIRE_WRAPPED_VIEM_SERIALIZER, true);
    return wrappedSerializer;
}
const SAPPHIRE_WRAPPED_VIEM_SERIALIZER = Symbol("#SAPPHIRE_WRAPPED_VIEM_SERIALIZER");
async function wrapWalletClient(client) {
    if (!client.chain) {
        throw new Error("No chain defined in client");
    }
    const originalSerializer = client.chain?.serializers?.transaction;
    // Override any existing transaction serializer, or create a new one
    // With one that auto-encrypts transactions before they're signed
    if (!originalSerializer || !Reflect.get(originalSerializer, SAPPHIRE_WRAPPED_VIEM_SERIALIZER)) {
        if (!client.chain.serializers) {
            client.chain.serializers = {};
        }
        client.chain.serializers.transaction = await createSapphireSerializer(client, originalSerializer);
    }
    return client;
} //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=b36f1_43725434._.js.map