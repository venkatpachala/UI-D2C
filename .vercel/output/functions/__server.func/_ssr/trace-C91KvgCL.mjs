import { i as __toESM } from "../_runtime.mjs";
import { a as cn } from "./data-DuUJBt1G.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trace-C91KvgCL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useCursor(length, ms = 780) {
	const [cursor, setCursor] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setCursor((c) => (c + 1) % (length + 3));
		}, ms);
		return () => window.clearInterval(id);
	}, [length, ms]);
	return Math.min(cursor, length - 1);
}
function Trace({ steps, cursor, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: cn("m-0 list-none p-0", className),
		children: steps.map((step, i) => {
			const on = i <= cursor;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[14px_1fr] gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1.5 size-1.5 rounded-full", on ? "bg-success" : "bg-line-strong", i === cursor && "pulse-dot") }), i < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("my-1 w-px flex-1", i < cursor ? "bg-success/50" : "bg-line") }) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 pb-3 text-sm", on ? "text-fg" : "text-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0",
						children: step.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-mono text-xs text-muted",
						children: step.meta
					})]
				})]
			}, step.id);
		})
	});
}
function WindowChrome({ title, right, children, className, bodyClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-lg border border-line-strong bg-bg-2 shadow-lift", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-11 items-center justify-between gap-3 border-b border-line px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-1.5 shrink-0 rounded-full bg-success pulse-dot",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 text-xs text-muted",
				children: right
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("p-4", bodyClassName),
			children
		})]
	});
}
//#endregion
export { WindowChrome as n, useCursor as r, Trace as t };
