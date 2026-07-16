import { a as require_react, c as __toESM, t as require_jsx_runtime } from "../index.js";
import Image from "./image-BVjnQnKd.js";
import { n as ChevronLeft, t as ChevronRight } from "./chevron-right-f6l691xG.js";
//#region components/ProjectGallery.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProjectGallery({ images, descriptions = [], projectTitle }) {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const previous = () => {
		setCurrentIndex((current) => current === 0 ? images.length - 1 : current - 1);
	};
	const next = () => {
		setCurrentIndex((current) => current === images.length - 1 ? 0 : current + 1);
	};
	(0, import_react.useEffect)(() => {
		if (images.length < 2) return;
		const timer = window.setInterval(() => {
			setCurrentIndex((current) => current === images.length - 1 ? 0 : current + 1);
		}, 5e3);
		return () => window.clearInterval(timer);
	}, [images.length]);
	if (images.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[320px] w-full sm:h-[420px] md:h-[520px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					src: images[currentIndex],
					alt: descriptions[currentIndex] ?? `${projectTitle} screenshot ${currentIndex + 1}`,
					fill: true,
					sizes: "(max-width: 768px) 100vw, 1152px",
					className: "object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" }),
				images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: previous,
					className: "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur transition-colors hover:bg-cyan-400 hover:text-slate-950",
					"aria-label": `Previous ${projectTitle} image`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 22 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: next,
					className: "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur transition-colors hover:bg-cyan-400 hover:text-slate-950",
					"aria-label": `Next ${projectTitle} image`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 22 })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-0 left-0 right-0 p-5 md:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold text-cyan-400",
						children: [
							currentIndex + 1,
							" / ",
							images.length
						]
					}), descriptions[currentIndex] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-3xl text-sm leading-6 text-slate-200 md:text-base",
						children: descriptions[currentIndex]
					})]
				})
			]
		})
	});
}
//#endregion
export { ProjectGallery as default };
