import { a as cn } from "./data-DuUJBt1G.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-bC0ZICfG.js
var import_jsx_runtime = require_jsx_runtime();
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-5", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "3",
			width: "4.2",
			height: "18",
			rx: "1",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M9.2 12.2 19.5 4.2c.5-.4 1.2 0 1.1.6L18.2 12l2.4 7.2c.2.6-.6 1-1.1.6L9.2 12.2Z",
			fill: "currentColor"
		})]
	});
}
function Logo({ to = "/", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("inline-flex items-center gap-2 text-fg", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-7 place-items-center rounded-md bg-fg text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "display text-sm track-brand",
			children: "KIVO"
		})]
	});
}
//#endregion
export { Logo as t };
