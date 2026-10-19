import React from "react";

const baseClasses =
	"overflow-hidden rounded-md border border-border bg-surface-muted shadow-card transition duration-300";

const interactiveClasses =
	"group hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-card-hover";

const paddingClasses = {
	none: "",
	sm: "p-4 sm:p-5",
	md: "p-6",
	lg: "p-8",
};

const minHeightClasses = {
	none: "",
	sm: "min-h-40",
	md: "min-h-80",
	lg: "min-h-96",
};

function Card({
	as: Component = "article",
	children,
	className = "",
	padding = "md",
	minHeight = "md",
	interactive = true,
	...props
}) {
	const paddingClass = paddingClasses[padding] ?? paddingClasses.md;
	const minHeightClass = minHeightClasses[minHeight] ?? minHeightClasses.md;

	return (
		<Component
			className={[
				baseClasses,
				minHeightClass,
				paddingClass,
				interactive && interactiveClasses,
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{children}
		</Component>
	);
}

export default Card;
