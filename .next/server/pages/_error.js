const CHUNK_PUBLIC_PATH = "server/pages/_error.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_9dd03a._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_fa_index_mjs_275a22._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_lib_6322da._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@swc_helpers_cjs_ac5ba3._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__425046._.js");
runtime.loadChunk("server/chunks/ssr/styles_globals_ff5908.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/node_modules/next/error.js [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/node_modules/next/document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.jsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
