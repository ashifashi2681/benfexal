"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const proofPoints = [
	{
		number: "01",
		title: "Official Odoo Partner",
		description:
			"Work with an experienced Odoo ERP partner with access to proven implementation methodologies, established best practices, and specialized ERP consulting expertise.",
		position:
			"lg:left-0 lg:top-10 lg:max-w-[15rem] lg:text-left xl:max-w-[18rem]",
		line: "lg:left-full lg:top-1/2 lg:h-px lg:w-24",
	},
	{
		number: "02",
		title: "Business-First Approach",
		description:
			"We begin with your business processes and objectives, then align Odoo ERP capabilities to create practical solutions that improve efficiency, productivity, and return on investment.",
		position:
			"lg:right-0 lg:top-10 lg:max-w-[15rem] lg:text-left xl:max-w-[18rem]",
		line: "lg:right-full lg:top-1/2 lg:h-px lg:w-24",
	},
	{
		number: "03",
		title: "Industry Expertise",
		description:
			"Our ERP experience spans manufacturing, trading, distribution, retail, rental, and service businesses, allowing us to design solutions around industry-specific operational requirements.",
		position:
			"lg:bottom-12 lg:left-8 lg:max-w-[14rem] lg:text-left xl:max-w-[19rem]",
		line: "lg:left-full lg:top-1/2 lg:h-px lg:w-28 lg:-rotate-[20deg]",
	},
	{
		number: "04",
		title: "Scalable ERP Solutions",
		description:
			"Build an ERP foundation that grows alongside your organization. Our Odoo solutions are designed to adapt to changing processes, increasing users, expanding operations, and evolving business requirements.",
		position:
			"lg:bottom-12 lg:right-8 lg:max-w-[14rem] lg:text-left xl:max-w-[19rem]",
		line: "lg:right-full lg:top-1/2 lg:h-px lg:w-28 lg:rotate-[20deg]",
	},
	{
		number: "05",
		title: "Long-Term Support",
		description:
			"Our relationship continues beyond implementation. Dedicated Odoo support and Annual Maintenance Contract (AMC) services help maintain system performance, resolve issues, implement enhancements, and support continuous improvement.",
		position:
			"lg:bottom-0 lg:left-1/2 lg:max-w-[21rem] lg:-translate-x-1/2 lg:text-center",
		line: "lg:bottom-full lg:left-1/2 lg:h-20 lg:w-px lg:-translate-x-1/2",
		vertical: true,
	},
];

const ecosystemNodes = [
	"Finance",
	"Sales",
	"Inventory",
	"Manufacturing",
	"HR",
	"CRM",
];

function WhyBenfexal() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.22 }
		);

		observer.observe(section);

		return () => observer.disconnect();
	}, []);

	return (
		<Container
			ref={sectionRef}
			className="stack-wrapper overflow-hidden border-y border-border-light bg-surface"
			contentClassName="relative">
			<div className="mx-auto max-w-4xl text-center">
				<SectionHeading
					align="center"
					eyebrow="WHY BENFEXAL"
					title="Why Businesses Choose Benfexal"
					highlight="Benfexal"
					titleClassName="text-xxxl leading-[1.05]"
					highlightClassName="text-brand-gold"
					description="Choosing the right ERP partner is about more than implementing software. It requires a clear understanding of your business, the right technical expertise, and dependable support throughout the ERP lifecycle."
					descriptionClassName="max-w-3xl"
				/>

				<p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground-muted">
					Benfexal Infotech combines{" "}
					<strong className="font-semibold text-foreground">
						Odoo expertise, industry knowledge, and a business-first
						approach
					</strong>{" "}
					to help organizations build efficient, scalable, and
					future-ready operations.
				</p>
			</div>

			{/* ERP ecosystem centerpiece with orbiting proof points */}
			<div className="relative mt-14 lg:min-h-[54rem]">
				<div
					className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border lg:block"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-full max-w-5xl -translate-x-1/2 bg-border-light lg:block"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[38rem] w-px -translate-x-1/2 -translate-y-1/2 bg-border-light lg:block"
					aria-hidden="true"
				/>

				<div className="relative z-20 mx-auto w-full max-w-[28rem] lg:absolute lg:left-1/2 lg:top-1/2 lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
					<div className="relative border border-border bg-background px-6 py-8 text-center shadow-card sm:px-8 sm:py-10">
						<div
							className="absolute -inset-4 border border-brand/10"
							aria-hidden="true"
						/>

						<div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-brand/20 bg-brand-light">
							<span className="absolute h-16 w-16 rounded-full border border-brand/30 bg-surface" />
							<span className="relative h-5 w-5 rounded-full bg-brand" />
						</div>

						<p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
							ERP Partnership Ecosystem
						</p>
						<h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-xxl">
							BENFEXAL <span className="text-brand-gold">×</span>{" "}
							ODOO
						</h3>

						<div
							className="mt-6 h-20 border border-dashed border-border bg-surface-muted"
							aria-hidden="true">
							{/* img required — premium abstract ERP ecosystem visual: interconnected business functions (finance, sales, inventory, manufacturing, HR, CRM) */}
						</div>

						<div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
							{ecosystemNodes.map((node) => (
								<span
									key={node}
									className="border border-border bg-surface-muted px-3 py-2 text-xs font-semibold text-foreground-secondary">
									{node}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="mt-10 grid gap-4 lg:mt-0 lg:block">
					{proofPoints.map((point, index) => (
						<article
							key={point.number}
							style={{
								transitionDelay: isVisible
									? `${index * 120}ms`
									: "0ms",
							}}
							className={[
								"group relative border border-border bg-background/95 p-5 shadow-card transition duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover lg:absolute",
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-6 opacity-0",
								point.position,
							]
								.filter(Boolean)
								.join(" ")}>
							<div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-4">
								<span className="font-mono text-sm font-semibold text-brand">
									{point.number}
								</span>
								<span
									className="h-2.5 w-2.5 rounded-full bg-brand-gold transition duration-300 group-hover:scale-150"
									aria-hidden="true"
								/>
							</div>
							<h3 className="text-lg font-semibold leading-tight text-foreground">
								{point.title}
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-foreground-muted">
								{point.description}
							</p>
							<span
								className={[
									"absolute hidden origin-center overflow-hidden bg-border-dark after:absolute after:inset-0 after:bg-brand after:transition after:duration-700 lg:block",
									point.vertical
										? "after:-translate-y-full group-hover:after:translate-y-0"
										: "after:-translate-x-full group-hover:after:translate-x-0",
									point.line,
								]
									.filter(Boolean)
									.join(" ")}
								aria-hidden="true"
							/>
						</article>
					))}
				</div>
			</div>

			<div className="mt-8 border border-border bg-foreground px-5 py-5 text-center sm:px-8">
				<p className="text-lg font-semibold text-white">
					Expertise. Alignment. Scalability. Support.
				</p>
				<p className="mt-2 text-sm text-white/70">
					A long-term ERP approach built around your business.
				</p>
			</div>
		</Container>
	);
}

export default WhyBenfexal;
