import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Steps from "../ui/Steps";
import Image from "next/image";

const stages = [
	{
		number: "01",
		phase: "Business",
		title: "Business Analysis",
		description:
			"Understand your business objectives, operational challenges, existing workflows, and process requirements to identify opportunities for ERP-driven improvement.",
		position: "lg:left-[14.5%] lg:top-[16.3%]",
	},
	{
		number: "02",
		phase: "Strategy",
		title: "Solution Design",
		description:
			"Create a clear Odoo ERP roadmap that aligns business processes, technology requirements, implementation priorities, and long-term objectives.",
		position: "lg:left-[34.7%] lg:top-[16.3%]",
	},
	{
		number: "03",
		phase: "Technology",
		title: "ERP Configuration",
		description:
			"Configure the required Odoo applications, workflows, access controls, and business processes according to your operational requirements.",
		position: "lg:left-[59.7%] lg:top-[16.3%]",
	},
	{
		number: "04",
		phase: "Technology",
		title: "Custom Development",
		description:
			"Develop custom modules, workflows, reports, dashboards, and integrations when your business requires capabilities beyond standard Odoo functionality.",
		position: "lg:left-[84.7%] lg:top-[16.3%]",
	},
	{
		number: "05",
		phase: "Data",
		title: "Data Migration",
		description:
			"Perform secure and structured migration of historical and operational business data, with a focus on accuracy, integrity, and continuity.",
		position: "lg:left-[84.7%] lg:top-[70.7%]",
	},
	{
		number: "06",
		phase: "People",
		title: "User Training",
		description:
			"Prepare employees for successful ERP adoption through practical training, role-based guidance, and process familiarization.",
		position: "lg:left-[59.7%] lg:top-[70.7%]",
	},
	{
		number: "07",
		phase: "Deployment",
		title: "Go-Live",
		description:
			"Deploy the ERP system through a controlled transition designed for smooth adoption and minimal disruption to ongoing business operations.",
		position: "lg:left-[34.7%] lg:top-[70.7%]",
	},
	{
		number: "08",
		phase: "Growth",
		title: "Continuous Support",
		description:
			"Provide ongoing Odoo support, system optimization, enhancements, troubleshooting, and technical assistance as your business and ERP requirements evolve.",
		position: "lg:left-[14.5%] lg:top-[70.7%]",
	},
];

const transitions = [
	"Business",
	"Strategy",
	"Technology",
	"Data",
	"People",
	"Deployment",
	"Growth",
];

const journeyPath =
	"M 70 150 H 1230 C 1330 150 1410 210 1410 320 L 1410 480 C 1410 590 1330 650 1230 650 L 209 650";
const loopBackPath = "M 209 650 C 130 650 40 628 40 540 L 40 300";
const directionChevrons = [
	"M 313 143 L 322 150 L 313 157",
	"M 673 143 L 682 150 L 673 157",
	"M 1033 143 L 1042 150 L 1033 157",
	"M 1403 393 L 1410 401 L 1417 393",
	"M 327 643 L 318 650 L 327 657",
	"M 687 643 L 678 650 L 687 657",
	"M 1047 643 L 1038 650 L 1047 657",
];

function ERPTransformationProcess() {
	return (
		<Container
			className="stack-wrapper overflow-hidden border-y border-border-light bg-background bg-[url(/background/sectionBgB.jpg)] bg-cover bg-center"
			contentClassName="relative">
			<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16">
				<SectionHeading
					eyebrow="OUR ERP TRANSFORMATION PROCESS"
					title="A Structured Path to ERP Success"
					highlight="ERP Success"
					titleClassName="max-w-4xl text-xxxl leading-[1.05]"
					highlightClassName="text-brand-gold"
				/>

				<div className="border-l border-border pl-5 sm:pl-7">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
						Implementation methodology
					</p>
					<p className="mt-5 text-base leading-relaxed text-foreground-muted">
						Every successful ERP project starts with understanding
						the business. Benfexal follows a structured{" "}
						<strong className="font-semibold text-foreground">
							Odoo ERP implementation process
						</strong>{" "}
						that connects{" "}
						<strong className="font-semibold text-foreground">
							business analysis, solution design, technology,
							data, people, and ongoing support
						</strong>
						.
					</p>
					<p className="mt-4 text-base leading-relaxed text-foreground-muted">
						Our methodology is designed to{" "}
						<strong className="font-semibold text-foreground">
							reduce implementation risks, support user adoption,
							minimize operational disruption
						</strong>
						, and create a{" "}
						<strong className="font-semibold text-foreground">
							scalable ERP foundation for long-term business
							growth
						</strong>
						.
					</p>
				</div>
			</div>

			<div
				className="mt-10 border border-dashed border-border bg-surface-muted rounded-md overflow-hidden shadow-xl">
				{/* img required — premium abstract visual: fragmented workflows → connected Odoo ERP → optimized operations */}
				<Image
					src="/assets/img3.png"
					alt="ERP transformation journey from fragmented workflows through connected Odoo ERP to optimized operations"
					width={1792}
					height={592}
					sizes="(max-width: 1280px) calc(100vw - 2rem), 1216px"
					className="block h-auto w-full"
				/>
			</div>

			{/* Mobile: vertical timeline */}
			<ol className="relative ml-2 mt-12 space-y-10 border-l border-border-dark pl-8 lg:hidden">
				{stages.map((stage) => (
					<li key={stage.number} className="group relative">
						<span
							className="absolute -left-8 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand bg-surface"
							aria-hidden="true"
						/>
						<p className="font-mono text-xxxl font-semibold leading-none tracking-tight text-foreground/10">
							{stage.number}
						</p>
						<p className="mt-2.5 text-xxs font-semibold uppercase tracking-[0.22em] text-brand-gold">
							{stage.phase}
						</p>
						<h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground">
							{stage.title}
						</h3>
						<p className="mt-2 max-h-40 overflow-hidden text-sm leading-relaxed text-foreground-muted">
							{stage.description}
						</p>
					</li>
				))}
				<li className="relative pt-2" aria-hidden="true">
					<span className="absolute -left-8 top-2.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-dashed border-brand-gold bg-surface" />
					<span className="inline-flex items-center gap-2 border border-dashed border-brand-gold/40 bg-brand-gold-light px-3 py-1.5 text-xxs font-semibold uppercase tracking-[0.18em] text-brand-gold-dark">
						↺ The cycle continues — back to 01
					</span>
				</li>
			</ol>

			{/* Desktop: ERP transformation journey along a serpentine path */}
			<div className="relative mt-14 hidden lg:block lg:aspect-1440/950 lg:min-h-216 xl:min-h-208">
				<div
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-size-[56px_56px] "
					aria-hidden="true"
				/>

				<svg
					className="pointer-events-none absolute inset-0 h-full w-full"
					viewBox="0 0 1440 920"
					preserveAspectRatio="none"
					aria-hidden="true">
					<defs>
						<linearGradient
							id="erp-journey-stroke"
							x1="0"
							y1="0"
							x2="1"
							y2="0">
							<stop offset="0%" stopColor="#0074ff" />
							<stop offset="55%" stopColor="#00a3ff" />
							<stop offset="100%" stopColor="#d99a32" />
						</linearGradient>
						<marker
							id="erp-journey-arrow"
							markerWidth="14"
							markerHeight="14"
							refX="10"
							refY="7"
							orient="auto"
							markerUnits="userSpaceOnUse">
							<path
								d="M 3 1.5 L 11 7 L 3 12.5 Z"
								fill="#d99a32"
							/>
						</marker>
					</defs>

					<path
						d={journeyPath}
						fill="none"
						stroke="#0074ff"
						strokeWidth="14"
						strokeLinecap="round"
						opacity="0.06"
						vectorEffect="non-scaling-stroke"
					/>
					<path
						d={journeyPath}
						fill="none"
						stroke="url(#erp-journey-stroke)"
						strokeWidth="2.5"
						strokeLinecap="round"
						vectorEffect="non-scaling-stroke"
					/>
					<circle
						cx="70"
						cy="150"
						r="5"
						fill="#0074ff"
						stroke="#ffffff"
						strokeWidth="2"
					/>
					<path
						d={loopBackPath}
						fill="none"
						stroke="#d99a32"
						strokeWidth="2"
						strokeDasharray="7 7"
						strokeLinecap="round"
						opacity="0.85"
						vectorEffect="non-scaling-stroke"
						markerEnd="url(#erp-journey-arrow)"
					/>
					{directionChevrons.map((d) => (
						<path
							key={d}
							d={d}
							fill="none"
							stroke="#d99a32"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							opacity="0.7"
							vectorEffect="non-scaling-stroke"
						/>
					))}
				</svg>
				<div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 ">
					<Steps arr={transitions} />
				</div>

				<ol className="relative h-full">
					{stages.map((stage) => (
						<li
							key={stage.number}
							tabIndex={0}
							className={[
								"group relative outline-none lg:absolute lg:w-48 lg:-translate-x-1/2 lg:rounded-lg lg:text-center lg:focus-visible:ring-2 lg:focus-visible:ring-brand/40 xl:w-60",
								stage.position,
							]
								.filter(Boolean)
								.join(" ")}>
							<span
								className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand bg-surface transition duration-300 group-hover:scale-125 group-hover:border-brand-gold group-hover:bg-brand-gold"
								aria-hidden="true"
							/>
							<span
								className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-gold/50 opacity-0 transition duration-300 group-hover:scale-110 group-hover:opacity-100"
								aria-hidden="true"
							/>
							<span
								className="absolute left-1/2 top-1.5 h-5 w-px -translate-x-1/2 bg-border-dark"
								aria-hidden="true"
							/>

							<p className="font-mono text-xxxl font-semibold leading-none tracking-tight text-foreground/10 transition-colors duration-300 group-hover:text-brand lg:mt-8">
								{stage.number}
							</p>
							<p className="mt-2.5 text-xxs font-semibold uppercase tracking-[0.22em] text-brand-gold">
								{stage.phase}
							</p>
							<h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground">
								{stage.title}
							</h3>
							<p className="mt-2 max-h-40 overflow-hidden text-sm leading-relaxed text-foreground-muted transition-all duration-300 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-focus-within:max-h-40 lg:group-focus-within:opacity-100">
								{stage.description}
							</p>
						</li>
					))}
				</ol>
			</div>

			<p className="mt-5 max-w-2xl text-sm font-medium text-foreground-muted">
				From initial planning to continuous improvement,{" "}
				<strong className="font-semibold text-foreground">
					every stage is built around your business
				</strong>
				.
			</p>
		</Container>
	);
}

export default ERPTransformationProcess;
