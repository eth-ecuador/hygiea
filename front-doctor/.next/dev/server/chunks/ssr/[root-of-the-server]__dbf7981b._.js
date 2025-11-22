module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/hygiea/front-doctor/config/wagmi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "contractAddress",
    ()=>contractAddress,
    "networkConfig",
    ()=>networkConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@wagmi/core/dist/esm/createConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sapphireTestnet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/viem/_esm/chains/definitions/sapphireTestnet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$wagmi$2d$v2$2f$dist$2f$_esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-wagmi-v2/dist/_esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$viem$2d$v2$2f$dist$2f$_esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@oasisprotocol/sapphire-viem-v2/dist/_esm/index.js [app-ssr] (ecmascript)");
;
;
;
// Determine network based on ENV
const isTestnet = ("TURBOPACK compile-time value", "testnet") === 'testnet' || true;
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfig"])({
    chains: ("TURBOPACK compile-time truthy", 1) ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sapphireTestnet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sapphireTestnet"]
    ] : "TURBOPACK unreachable",
    connectors: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$wagmi$2d$v2$2f$dist$2f$_esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["injectedWithSapphire"])()
    ],
    transports: ("TURBOPACK compile-time truthy", 1) ? {
        [__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sapphireTestnet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sapphireTestnet"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$oasisprotocol$2f$sapphire$2d$viem$2d$v2$2f$dist$2f$_esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sapphireHttpTransport"])()
    } : "TURBOPACK unreachable"
});
const contractAddress = ("TURBOPACK compile-time value", "0x82F79A62A06f620DD0b7B396D0C19F0b3a5Cf8F5") || '0x...';
const networkConfig = ("TURBOPACK compile-time truthy", 1) ? {
    name: 'Sapphire Testnet',
    chainId: 0x5aff,
    explorer: 'https://explorer.oasis.io/testnet/sapphire',
    rpc: 'https://testnet.sapphire.oasis.io'
} : "TURBOPACK unreachable";
}),
"[project]/hygiea/front-doctor/components/Providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/wagmi/dist/esm/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$config$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/config/wagmi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hygiea/front-doctor/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Providers({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WagmiProvider"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$config$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hygiea$2f$front$2d$doctor$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/hygiea/front-doctor/components/Providers.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hygiea/front-doctor/components/Providers.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dbf7981b._.js.map