import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const values = [
	{
		short: "Cost",
		full: "Lower Implementation Costs",
		description:
			"Reduce unnecessary development and avoid avoidable customization expenses.",
		descAlign: "lg:left-0",
	},
	{
		short: "Complexity",
		full: "Less Complexity",
		description:
			"Keep the ERP environment streamlined, easier to understand, and simpler to manage.",
		descAlign: "lg:left-1/2 lg:-translate-x-1/2",
	},
	{
		short: "Maintainability",
		full: "Better Maintainability",
		description:
			"Minimize dependency on excessive custom code and make future upgrades easier to manage.",
		descAlign: "lg:left-1/2 lg:-translate-x-1/2",
	},
	{
		short: "Adoption",
		full: "Faster User Adoption",
		description:
			"Leverage familiar Odoo workflows and keep processes practical for end users.",
		descAlign: "lg:left-1/2 lg:-translate-x-1/2",
	},
	{
		short: "Long-Term Value",
		full: "Long-Term ERP Value",
		description:
			"Build a scalable and maintainable Odoo environment that continues to deliver value as your business grows.",
		descAlign: "lg:left-auto lg:right-0",
	},
];

function ImplementationPhilosophy({ id }) {
	// const spectrumRef = useRef(null);
	// const [isVisible, setIsVisible] = useState(false);

	// useEffect(() => {
	// 	const node = spectrumRef.current;
	// 	if (!node) return;

	// 	const observer = new IntersectionObserver(
	// 		([entry]) => {
	// 			if (entry.isIntersecting) {
	// 				setIsVisible(true);
	// 				observer.unobserve(entry.target);
	// 			}
	// 		},
	// 		{ threshold: 0.3 }
	// 	);

	// 	observer.observe(node);

	// 	return () => observer.disconnect();
	// }, []);
	const isVisible = true;
	return (
		<Container
			id={id}
			spacing="lg"
			className="stack-wrapper overflow-hidden border-y border-border-light bg-background-muted bg-[url(/background/sectionBgB.jpg)] bg-cover bg-center"
			contentClassName="relative">
			<div className="mx-auto max-w-5xl text-center">
				<SectionHeading
					align="center"
					eyebrow="OUR IMPLEMENTATION PHILOSOPHY"
					title="Simplify First. Customize With Purpose."
					highlight="Simplify First."
					titleClassName="text-xxxxl leading-[1.02]"
					highlightClassName="text-brand-gold"
				/>

				<p className="mx-auto mt-10 max-w-3xl text-md leading-relaxed text-foreground-muted">
					At Benfexal Infotech, we believe an effective Odoo ERP
					implementation should be{" "}
					<strong className="font-semibold text-foreground">
						powerful without becoming unnecessarily complex
					</strong>
					.
				</p>
				<p className="mx-auto mt-5 max-w-3xl text-md leading-relaxed text-foreground-muted">
					We prioritize{" "}
					<strong className="font-semibold text-foreground">
						standard Odoo functionality
					</strong>{" "}
					wherever it can effectively support your business processes.
					Custom development is introduced only when a genuine
					business requirement cannot be addressed effectively through
					standard capabilities.
				</p>
			</div>

			{/* Value spectrum — five typographic labels on an animated balance line */}
			<div
				// ref={spectrumRef}
				className="mt-24 hidden lg:block sm:mt-32">
				<div
					className={`flex items-center justify-between gap-4 transition-opacity duration-700 ${
						isVisible ? "opacity-100" : "opacity-0"
					}`}>
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand">
						Standard Odoo
					</span>
					<span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
						Purposeful Customization
					</span>
				</div>

				<div className="relative mt-8">
					<div
						className="absolute left-0 right-0 top-1.75 h-px bg-border"
						aria-hidden="true"
					/>
					<div
						className={`absolute left-0 right-0 top-1.75 h-0.5 origin-left -translate-y-1/2 bg-linear-to-r from-brand via-brand-blue to-brand-gold transition-transform duration-1400 ease-out ${
							isVisible ? "scale-x-100" : "scale-x-0"
						}`}
						aria-hidden="true"
					/>

					<ol className="relative flex items-start justify-between">
						{values.map((value, index) => (
							<li
								key={value.short}
								tabIndex={0}
								style={{
									transitionDelay: isVisible
										? `${200 + index * 140}ms`
										: "0ms",
								}}
								className={[
									"group relative flex flex-col items-center text-center outline-none transition-all duration-500",
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-2 opacity-0",
								]
									.filter(Boolean)
									.join(" ")}>
								<span
									className="h-3.5 w-3.5 rounded-full border-2 border-brand bg-surface transition duration-300 group-hover:scale-125 group-hover:border-brand-gold"
									aria-hidden="true"
								/>
								<span className="mt-5 whitespace-nowrap text-lg font-semibold tracking-tight text-foreground xl:text-xl">
									{value.short}
								</span>
								<div
									className={[
										"absolute top-full w-64 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-44 group-hover:opacity-100 group-focus-within:max-h-44 group-focus-within:opacity-100",
										value.descAlign,
									]
										.filter(Boolean)
										.join(" ")}>
									<div className="pt-4 text-left">
										<p className="text-xxs font-semibold uppercase tracking-[0.2em] text-brand-gold">
											{value.full}
										</p>
										<p className="mt-2 text-sm leading-relaxed text-foreground-muted">
											{value.description}
										</p>
									</div>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>

			{/* Value spectrum — mobile */}
			<div className="mt-16 lg:hidden">
				<p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand">
					Standard Odoo
				</p>
				<ol className="relative ml-2 mt-6 space-y-8 border-l border-border-dark pl-8">
					{values.map((value) => (
						<li key={value.short} className="relative">
							<span
								className="absolute -left-8 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand bg-surface"
								aria-hidden="true"
							/>
							<p className="text-xl font-semibold tracking-tight text-foreground">
								{value.short}
							</p>
							<p className="mt-1 text-xxs font-semibold uppercase tracking-[0.18em] text-brand-gold">
								{value.full}
							</p>
							<p className="mt-2 text-sm leading-relaxed text-foreground-muted">
								{value.description}
							</p>
						</li>
					))}
				</ol>
				<p className="mt-6 text-right font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
					Purposeful Customization
				</p>
			</div>

			<div className="mx-auto mt-24 max-w-5xl sm:mt-28 rounded-md overflow-hidden shadow">
				<div className="border border-dashed border-border bg-surface-muted">
					{/* img required — ERP architecture blueprint: standard Odoo foundation transitioning into a few highlighted custom components */}
					<Image
						src="/assets/img.png"
						alt="Odoo ERP architecture showing a standard foundation with purposeful custom components"
						width={750}
						height={200}
						sizes="(max-width: 1024px) calc(100vw - 2rem), 1024px"
						className="block h-auto w-full"
					/>
				</div>
			</div>

			{/* Our principle */}
			<div className="mx-auto mt-24 max-w-4xl text-center sm:mt-28">
				<SectionHeading
					as="h4"
					eyebrow={"Our Principle"}
					align="center"
					title={
						"Standardize where it makes sense. Customize where it creates real value."
					}
					highlight={"Customize where it creates real value."}
				/>

				<p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-foreground-muted">
					The goal is not to customize everything. It is to build the{" "}
					<strong className="font-semibold text-foreground">
						right ERP solution for your business
					</strong>
					.
				</p>
			</div>
		</Container>
	);
}

export default ImplementationPhilosophy;
