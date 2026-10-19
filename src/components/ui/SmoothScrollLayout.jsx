"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

function SmoothScrollLayout() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 0.8,
			smoothWheel: true,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return null;
}

export default SmoothScrollLayout;
