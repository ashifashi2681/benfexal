import React from "react";

const baseClasses =
  "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-[600] tracking-tight transition-all duration-300 ease-out select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none active:scale-[0.98]";

const sizeClasses = {
  sm: "h-9 rounded-full px-4 text-sm",
  md: "h-11 rounded-full px-6 text-base",
  lg: "h-13 rounded-full px-8 text-md",
  xl: "h-14 rounded-full px-10 text-md",
};

const variantClasses = {
  primary:
    "border border-transparent bg-gradient-to-r from-brand via-brand-blue to-brand bg-[length:200%_100%] bg-left text-white shadow-card hover:bg-right hover:shadow-card-hover",
  secondary:
    "border border-transparent bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold bg-[length:200%_100%] bg-left text-white shadow-card hover:bg-right hover:shadow-card-hover",
  outline:
    "border border-border-dark bg-transparent text-brand hover:border-transparent hover:text-white " +
    "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-r before:from-brand before:via-brand-blue before:to-brand before:bg-[length:200%_100%] before:bg-left before:opacity-0 before:transition-all before:duration-500 before:ease-out " +
    "hover:before:bg-right hover:before:opacity-100",
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
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
});

Button.displayName = "Button";

export default Button;