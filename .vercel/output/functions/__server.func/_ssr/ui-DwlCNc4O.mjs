import { a as cn } from "./data-DuUJBt1G.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-DwlCNc4O.js
var import_jsx_runtime = require_jsx_runtime();
function Button({ variant = "primary", size = "md", className, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn("inline-flex items-center justify-center gap-2 rounded-md font-medium transition-transform duration-150 ease-out", "active:not-disabled:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-40", size === "md" ? "h-10 px-3.5 text-sm" : "h-8 px-2.5 text-xs", variant === "primary" && "bg-accent text-bg hover:bg-accent-2", variant === "secondary" && "bg-elevated text-fg hairline hover:bg-card", variant === "ghost" && "bg-transparent text-secondary hover:bg-elevated hover:text-fg", variant === "danger" && "bg-danger-dim text-danger hairline", className),
		...props
	});
}
function Badge({ children, tone = "neutral", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium tracking-wide uppercase", tone === "neutral" && "bg-elevated text-secondary hairline", tone === "live" && "bg-success-dim text-success", tone === "warn" && "bg-warning-dim text-warning", tone === "danger" && "bg-danger-dim text-danger", tone === "accent" && "bg-elevated text-fg hairline", className),
		children
	});
}
function StatusDot({ tone = "live" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("size-1.5 rounded-full", tone === "live" && "bg-success pulse-dot", tone === "warn" && "bg-warning", tone === "danger" && "bg-danger", tone === "muted" && "bg-muted"),
		"aria-hidden": "true"
	});
}
function Metric({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-2xl font-medium tracking-tight tabular",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-xs text-secondary",
				children: hint
			}) : null
		]
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs font-medium track-label text-muted uppercase",
		children
	});
}
//#endregion
export { StatusDot as a, SectionLabel as i, Button as n, Metric as r, Badge as t };
