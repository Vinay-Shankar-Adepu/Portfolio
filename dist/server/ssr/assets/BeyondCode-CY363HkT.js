import { a as require_react, c as __toESM, t as require_jsx_runtime } from "../index.js";
import Image from "./image-BVjnQnKd.js";
import { n as ChevronLeft, t as ChevronRight } from "./chevron-right-f6l691xG.js";
//#region components/BeyondCode.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var images = [
	{
		src: "/images/personal/skydiving.JPG",
		title: "15,000 ft Tandem Skydive",
		description: "Completed a 15,000 ft tandem skydive in the U.S.—a personal milestone that taught me to embrace challenges, trust the process, and step confidently outside my comfort zone."
	},
	{
		src: "/images/personal/kayking.jpg",
		title: "Kayaking",
		description: "I enjoy outdoor experiences and exploring new places."
	},
	{
		src: "/images/personal/abudhabi.jpg",
		title: "Abu Dhabi",
		description: "Travel helps me experience new cultures and perspectives."
	},
	{
		src: "/images/personal/newyork.jpg",
		title: "New York",
		description: "Exploring cities, people, and ideas beyond work."
	}
];
function BeyondCode() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const previous = () => {
		setCurrentIndex((current) => current === 0 ? images.length - 1 : current - 1);
	};
	const next = () => {
		setCurrentIndex((current) => current === images.length - 1 ? 0 : current + 1);
	};
	(0, import_react.useEffect)(() => {
		const timer = setInterval(next, 5e3);
		return () => clearInterval(timer);
	}, []);
	const currentImage = images[currentIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "beyond-code",
		className: "mx-auto max-w-6xl px-6 py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400",
				children: "Beyond Code"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl font-bold",
				children: "Curious, consistent, and always learning."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl text-slate-400",
				children: "Outside of software development, I enjoy fitness, travel, outdoor activities, and taking on experiences that push me outside my comfort zone."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[520px] w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: currentImage.src,
							alt: currentImage.title,
							fill: true,
							priority: currentIndex === 0,
							className: "object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: previous,
							className: "absolute left-4 top-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur hover:bg-cyan-400 hover:text-slate-950",
							"aria-label": "Previous image",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: next,
							className: "absolute right-4 top-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur hover:bg-cyan-400 hover:text-slate-950",
							"aria-label": "Next image",
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
										images.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-3xl font-bold",
									children: currentImage.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl text-slate-300",
									children: currentImage.description
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex justify-center gap-2",
				children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrentIndex(index),
					className: `h-2.5 rounded-full transition-all ${currentIndex === index ? "w-8 bg-cyan-400" : "w-2.5 bg-slate-700 hover:bg-slate-500"}`,
					"aria-label": `Go to image ${index + 1}`
				}, image.src))
			})
		]
	});
}
//#endregion
export { BeyondCode as default };
