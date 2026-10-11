"use client";

import { useEffect } from "react";

/**
 * Enables the stacked-sections scroll effect (see `.stack-wrapper` in
 * globals.css). Sections shorter than the viewport pin at the top while the
 * next one slides over them. Sections taller than the viewport must scroll
 * fully first, so their sticky top is pulled up to
 * `min(0px, viewportHeight - sectionHeight)` — that way they only pin once
 * their bottom edge reaches the bottom of the viewport.
 */
function updateStackTop(section) {
	const top = Math.min(0, window.innerHeight - section.offsetHeight);
	section.style.setProperty("--stack-top", `${top}px`);
}

function StackScroll() {
	useEffect(() => {
		const sections = Array.from(document.querySelectorAll(".stack-wrapper"));
		if (sections.length === 0) return;

		const updateAll = () => sections.forEach(updateStackTop);

		updateAll();

		const observer =
			typeof ResizeObserver !== "undefined"
				? new ResizeObserver(updateAll)
				: null;
		if (observer) {
			sections.forEach((section) => observer.observe(section));
		}

		window.addEventListener("resize", updateAll);

		return () => {
			if (observer) observer.disconnect();
			window.removeEventListener("resize", updateAll);
		};
	}, []);

	return null;
}

export default StackScroll;
