import { n as agents, u as knowledgeSeed } from "./data-DuUJBt1G.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-C4IbI_BN.js
var seedReviews = [
	{
		id: "r1",
		title: "Refund request",
		amount: "₹12,400",
		risk: "HIGH",
		customer: "Ananya Rao",
		order: "#1938",
		policy: "Manual approval required above ₹5,000",
		recommendation: "Approve after return inspection.",
		status: "open"
	},
	{
		id: "r2",
		title: "Cancellation after pack",
		amount: "₹2,150",
		risk: "MEDIUM",
		customer: "Neel Kapoor",
		order: "#6620",
		policy: "Packed orders need a person before cancel",
		recommendation: "Reject cancel. Offer a return label.",
		status: "open"
	},
	{
		id: "r3",
		title: "Goodwill refund",
		amount: "₹3,200",
		risk: "MEDIUM",
		customer: "Sara Qureshi",
		order: "#7741",
		policy: "Between ₹1,000 and ₹5,000 needs approval",
		recommendation: "Approve partial refund of ₹1,600.",
		status: "open"
	}
];
var useKivo = create()(persist((set) => ({
	workspaceId: "auraskin",
	setWorkspace: (workspaceId) => set({ workspaceId }),
	signedIn: false,
	email: "",
	signIn: (email) => set({
		signedIn: true,
		email
	}),
	step: 0,
	setStep: (step) => set({ step }),
	done: false,
	finish: () => set({
		done: true,
		step: 6
	}),
	revealed: false,
	setRevealed: (revealed) => set({ revealed }),
	keyTail: "9f3c",
	rotateKey: () => set({
		keyTail: Math.random().toString(16).slice(2, 6),
		revealed: true,
		revoked: false
	}),
	revoked: false,
	revokeKey: () => set({
		revoked: true,
		revealed: false
	}),
	reviews: seedReviews,
	decide: (id, status) => set((s) => ({ reviews: s.reviews.map((r) => r.id === id ? {
		...r,
		status
	} : r) })),
	sources: knowledgeSeed,
	addSource: (source) => set((s) => ({ sources: [source, ...s.sources] })),
	agents,
	addAgent: (agent) => set((s) => ({ agents: [agent, ...s.agents] })),
	navOpen: false,
	setNavOpen: (navOpen) => set({ navOpen })
}), {
	name: "kivo-workspace",
	partialize: (s) => ({
		workspaceId: s.workspaceId,
		signedIn: s.signedIn,
		email: s.email,
		step: s.step,
		done: s.done,
		keyTail: s.keyTail,
		revoked: s.revoked,
		reviews: s.reviews,
		sources: s.sources,
		agents: s.agents
	})
}));
var workspaces = {
	auraskin: {
		name: "AuraSkin",
		plan: "Production",
		resolution: "72.4%",
		conversations: "2,841",
		escalations: "18.1%"
	},
	northstar: {
		name: "Northstar Home",
		plan: "Sandbox",
		resolution: "41.0%",
		conversations: "186",
		escalations: "33.4%"
	}
};
//#endregion
export { workspaces as n, useKivo as t };
