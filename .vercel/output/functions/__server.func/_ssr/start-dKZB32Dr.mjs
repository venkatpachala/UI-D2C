import { i as __toESM } from "../_runtime.mjs";
import { a as cn } from "./data-DuUJBt1G.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as useKivo } from "./store-C4IbI_BN.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Button } from "./ui-DwlCNc4O.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Logo } from "./logo-bC0ZICfG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-dKZB32Dr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Create workspace",
	"Connect store",
	"Connect tools",
	"Add knowledge",
	"Configure agent",
	"Test agent",
	"Deploy"
];
function SignInPage() {
	const signIn = useKivo((s) => s.signIn);
	const done = useKivo((s) => s.done);
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("anika@auraskin.com");
	const [password, setPassword] = (0, import_react.useState)("auraskin");
	const go = (value) => {
		signIn(value);
		navigate({ to: done ? "/app" : "/start" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-bg px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 text-2xl font-medium tracking-tight",
					children: "Sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-secondary",
					children: "Use your work email. This demo opens the AuraSkin workspace."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-3",
					onSubmit: (e) => {
						e.preventDefault();
						go(email);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs text-muted",
							children: ["Work email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "mt-1 h-10 w-full rounded-md border border-line bg-card px-3 text-sm text-fg outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs text-muted",
							children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "mt-1 h-10 w-full rounded-md border border-line bg-card px-3 text-sm text-fg outline-none",
								autoComplete: "current-password"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Continue"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "mt-3 w-full text-center text-sm text-secondary hover:text-fg",
					onClick: () => go("anika@auraskin.com"),
					children: "Open the AuraSkin demo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 block text-sm text-muted hover:text-fg",
					children: "Back"
				})
			]
		})
	});
}
function Onboarding() {
	const step = useKivo((s) => s.step);
	const setStep = useKivo((s) => s.setStep);
	const finish = useKivo((s) => s.finish);
	const signIn = useKivo((s) => s.signIn);
	const navigate = useNavigate();
	const [shop, setShop] = (0, import_react.useState)(false);
	const [stripe, setStripe] = (0, import_react.useState)(false);
	const [gmail, setGmail] = (0, import_react.useState)(false);
	const [refund, setRefund] = (0, import_react.useState)("approval");
	const next = () => setStep(Math.min(step + 1, 6));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex h-14 items-center justify-between px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-secondary hover:text-fg",
				onClick: () => {
					signIn("anika@auraskin.com");
					finish();
					navigate({ to: "/app" });
				},
				children: "Skip to workspace"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-8 px-5 py-8 lg:grid-cols-[220px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium track-label text-muted uppercase",
					children: "Setup"
				}), steps.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: cn("flex w-full items-center gap-2 text-left text-sm", i === step ? "text-fg" : "text-muted"),
					onClick: () => setStep(i),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs",
						children: i < step ? "✓" : String(i + 1).padStart(2, "0")
					}), label]
				}) }, label))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg border border-line bg-card p-6",
				children: [
					step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Create workspace",
						text: "A workspace holds agents, knowledge, keys and the audit log for one brand.",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs text-muted",
							children: ["Workspace", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: "AuraSkin",
								className: "mt-1 h-10 w-full rounded-md border border-line bg-bg px-3 text-sm text-fg outline-none"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							onClick: next,
							children: "Continue"
						})]
					}) : null,
					step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Connect your store",
						text: "Orders and customers come from the store. Mutations still obey approval rules.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								name: "Shopify",
								action: shop ? "Connected" : "Connect",
								onClick: () => setShop(true),
								done: shop
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								name: "WooCommerce",
								action: "Coming soon",
								disabled: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								name: "Custom API",
								action: "Configure",
								onClick: () => toast("Custom API saved as a draft connector")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4",
								onClick: next,
								disabled: !shop,
								children: "Continue"
							})
						]
					}) : null,
					step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Connect tools",
						text: "Payments and email. Live refunds stay off until the release gate passes.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								name: "Stripe",
								action: stripe ? "Connected" : "Connect",
								onClick: () => setStripe(true),
								done: stripe
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								name: "Gmail",
								action: gmail ? "Connected" : "Connect",
								onClick: () => setGmail(true),
								done: gmail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4",
								onClick: next,
								disabled: !stripe || !gmail,
								children: "Continue"
							})
						]
					}) : null,
					step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Add knowledge",
						text: "The agent answers from these sources. It should not invent a policy.",
						children: [[
							"Return Policy.pdf",
							"Shipping Policy",
							"FAQ",
							"auraskin.com"
						].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-line py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-success",
								children: "Ready"
							})]
						}, name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							onClick: next,
							children: "Continue"
						})]
					}) : null,
					step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Meet your first AI agent",
						text: "Support Agent was drafted from what you connected.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1 text-sm",
								children: [
									"Order tracking",
									"Customer lookup",
									"Payment verification",
									"Policy Q&A"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✓ ", item] }, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-sm text-secondary",
								children: "Requires configuration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-2 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-sm",
									children: "Refund permissions"
								}), [
									["auto", "AI may execute under ₹1,000"],
									["approval", "Human approval from ₹1,000"],
									["block", "Block all refunds"]
								].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "refund",
										checked: refund === id,
										onChange: () => setRefund(id)
									}), label]
								}, id))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4",
								onClick: next,
								children: "Configure agent"
							})
						]
					}) : null,
					step === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Test agent",
						text: "A customer asks to cancel an unfulfilled order.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-line bg-bg p-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted",
										children: "Customer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I want to cancel order #3812." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 text-xs text-muted",
										children: "Agent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Order #3812 is unfulfilled and eligible. I can cancel it." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-mono text-xs text-success",
								children: "Verifier PASS · 1.82s"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4",
								onClick: next,
								children: "Continue"
							})
						]
					}) : null,
					step === 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Production readiness",
						text: "Sandbox tools are connected. Live charges remain off until you pass the gate on a real key.",
						children: [
							[
								["Shopify", "Connected"],
								["Stripe", "Connected"],
								["Knowledge", "Ready"],
								["Evaluation suite", "39 / 39 passed"],
								["Refund guardrail", "Active"],
								["Escalation", "Configured"],
								["API authentication", "Enabled"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b border-line py-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-secondary",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v })]
							}, k)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-sm text-success",
								children: "Ready to deploy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4",
								onClick: () => {
									signIn("anika@auraskin.com");
									finish();
									navigate({ to: "/app" });
								},
								children: "Deploy agent"
							})
						]
					}) : null
				]
			})]
		})]
	});
}
function Block({ title, text, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-medium tracking-tight",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-xl text-sm text-secondary",
			children: text
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5",
			children
		})
	] });
}
function Row({ name, action, onClick, done, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between border-b border-line py-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			variant: done ? "secondary" : "primary",
			disabled: disabled || done,
			onClick,
			children: action
		})]
	});
}
//#endregion
export { SignInPage as n, Onboarding as t };
