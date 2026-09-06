import React from "react";

const alignClasses = {
  left: "items-start text-left",
  center: "items-center text-center",
};

const headingSizeClasses = {
  h1: "text-xxxxl",
  h2: "text-xxxl",
  h3: "text-xxl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-md",
};

function SectionHeading({
  as: Heading = "h2",
  eyebrow,
  title,
  description,
  highlight = [],
  align = "left",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  highlightClassName = "text-brand-gold",
  ...props
}) {
  const highlightWords = Array.isArray(highlight) ? highlight : [highlight];

  const renderTitle = () => {
    if (typeof title !== "string" || highlightWords.length === 0) return title;

    const escaped = highlightWords.map((word) =>
      word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const pattern = new RegExp(`(${escaped.join("|")})`, "gi");

    return title.split(pattern).map((part, index) => {
      const isHighlight = highlightWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      );

      return isHighlight ? (
        <span
          key={index}
          className={["font-mono", highlightClassName]
            .filter(Boolean)
            .join(" ")}
        >
          {part}
        </span>
      ) : (
        part
      );
    });
  };

  return (
    <div
      className={[
        "flex flex-col gap-4",
        alignClasses[align] ?? alignClasses.left,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {eyebrow && (
        <span
          className={[
            "inline-flex w-fit items-center gap-2 rounded-full border border-border-light bg-surface-muted px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground-secondary",
            eyebrowClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-brand"
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      )}

      <Heading
        className={[
          "font-semibold tracking-tight",
          headingSizeClasses[Heading] ?? headingSizeClasses.h2,
          titleClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {renderTitle()}
      </Heading>

      {description && (
        <p
          className={[
            "max-w-2xl text-base leading-relaxed",
            align === "center" && "mx-auto",
            descriptionClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;