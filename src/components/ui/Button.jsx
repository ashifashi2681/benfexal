import React from "react";

const baseClasses =
	"group relative isolate inline-flex items-stretch justify-center overflow-hidden rounded-full border font-medium capitalize tracking-[0.08em] whitespace-nowrap cursor-pointer transition-all duration-300 ease-out select-none " +
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
	"disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none active:scale-[0.98]";

const sizeClasses = {
	sm: "h-9 px-4 text-xs",
	md: "h-11 px-6 text-sm",
	lg: "h-13 px-8 text-base",
	xl: "h-14 px-10 text-md",
};

// Shared by both label layers — `top` transitions for 0.5s like the reference.
const textLayerClasses =
	"z-10 flex items-center justify-center gap-2 whitespace-nowrap transition-[top] duration-500 ease-out";

const variantClasses = {
	// Vertical gradient, darkest at the bottom and lightest at the top.
	primary:
		"border-transparent bg-linear-to-t from-brand-blue-dark via-brand to-brand-blue text-white shadow-button",
	secondary:
		"border-transparent bg-linear-to-t from-brand-gold-dark via-brand-gold to-brand-gold text-white shadow-button",
	outline:
		"border border-border-dark bg-transparent text-brand hover:text-white hover:shadow-button " +
		"before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-linear-to-t before:from-brand-blue-dark before:via-brand before:to-brand-blue before:opacity-0 before:transition-all before:duration-500 before:ease-out " +
		"hover:before:opacity-100",
};

const Button = React.forwardRef(function Button(
	{
		as: Component = "button",
		children,
		variant = "primary",
		size = "md",
		fullWidth = false,
		disabled = false,
		type = "button",
		className = "",
		...props
	},
	ref
) {
	const variantClass = variantClasses[variant] ?? variantClasses.primary;
	const sizeClass = sizeClasses[size] ?? sizeClasses.md;
	const isButtonEl = Component === "button";

	return (
		<Component
			ref={ref}
			type={isButtonEl ? type : undefined}
			disabled={isButtonEl ? disabled : undefined}
			aria-disabled={!isButtonEl && disabled ? true : undefined}
			className={[
				baseClasses,
				sizeClass,
				variantClass,
				fullWidth && "w-full",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{/* Label — sizes the button and rolls up out of view on hover */}
			<span
				className={`${textLayerClasses} relative top-1/2 -translate-y-1/2 group-hover:top-[-100%]`}
			>
				{children}
			</span>
			{/* Duplicate label — waits below and slides into view on hover */}
			<span
				aria-hidden="true"
				className={`${textLayerClasses} absolute inset-x-0 top-[150%] -translate-y-1/2 group-hover:top-1/2`}
			>
				{children}
			</span>
		</Component>
	);
});

Button.displayName = "Button";

export default Button;