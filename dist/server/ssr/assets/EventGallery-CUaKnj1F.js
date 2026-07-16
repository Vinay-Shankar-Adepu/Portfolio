import { a as require_react, c as __toESM, t as require_jsx_runtime } from "../index.js";
import Image from "./image-BVjnQnKd.js";
import { n as ChevronLeft, t as ChevronRight } from "./chevron-right-f6l691xG.js";
//#region components/EventGallery.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var eventImages = [
	"/images/events/aws-ai-newyork/1.jpeg",
	"/images/events/aws-ai-newyork/2.jpeg",
	"/images/events/aws-ai-newyork/3.jpeg",
	"/images/events/aws-ai-newyork/4.jpeg",
	"/images/events/aws-ai-newyork/5.jpeg",
	"/images/events/aws-ai-newyork/6.jpeg",
	"/images/events/aws-ai-newyork/7.jpeg",
	"/images/events/aws-ai-newyork/8.jpeg"
];
function EventGallery() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const previous = () => {
		setCurrentIndex((current) => current === 0 ? eventImages.length - 1 : current - 1);
	};
	const next = () => {
		setCurrentIndex((current) => current === eventImages.length - 1 ? 0 : current + 1);
	};
	(0, import_react.useEffect)(() => {
		const timer = setInterval(next, 5e3);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-6 py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400",
				children: "Events"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl font-bold",
				children: "AWS AI Event - New York"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl text-slate-400",
				children: "A glimpse into my continuous learning journey around cloud, AI, and modern technology communities."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[520px] w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: eventImages[currentIndex],
							alt: `AWS AI Event photo ${currentIndex + 1}`,
							fill: true,
							className: "object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: previous,
							className: "absolute left-4 top-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur hover:bg-cyan-400 hover:text-slate-950",
							"aria-label": "Previous event image",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: next,
							className: "absolute right-4 top-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur hover:bg-cyan-400 hover:text-slate-950",
							"aria-label": "Next event image",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 p-6 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-semibold text-cyan-400",
									children: [
										currentIndex + 1,
										" / ",
										eventImages.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-3xl font-bold",
									children: "AWS AI Event Experience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl text-slate-300",
									children: "Learning about AI, cloud, and modern application development."
								})
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { EventGallery as default };
