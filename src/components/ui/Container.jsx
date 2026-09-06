const widthClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  full: "max-w-none",
};

const spacingClasses = {
  none: "",
  sm: "py-8 sm:py-10",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-28",
};

function Container({
  as: Component = "section",
  children,
  className = "",
  contentClassName = "",
  width = "lg",
  spacing = "md",
  ...props
}) {
  const widthClass = widthClasses[width] ?? widthClasses.lg;
  const spacingClass = spacingClasses[spacing] ?? spacingClasses.md;

  return (
    <Component className={["w-full", spacingClass, className].filter(Boolean).join(" ")} {...props}>
      <div
        className={[
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          widthClass,
          contentClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </Component>
  );
}

export default Container;
