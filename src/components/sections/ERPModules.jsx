import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const modules = [
	{
		name: "Sales & CRM",
		shortName: "Sales",
		description:
			"Manage leads, opportunities, quotations, sales activities, and customer relationships through connected CRM workflows.",
		position: "lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
		line: "lg:left-1/2 lg:top-full lg:h-24 lg:w-px",
	},
	{
		name: "Accounting & Finance",
		shortName: "Finance",
		description:
			"Automate accounting operations, invoicing, payments, financial management, and reporting for better control.",
		position: "lg:right-20 lg:top-24 xl:right-28",
		line: "lg:right-full lg:top-1/2 lg:h-px lg:w-28 lg:-rotate-[28deg]",
	},
	{
		name: "Purchase Management",
		shortName: "Purchase",
		description:
			"Streamline procurement, purchase orders, vendor management, and supplier workflows with stronger purchasing control.",
		position: "lg:right-0 lg:top-1/2 lg:-translate-y-1/2",
		line: "lg:right-full lg:top-1/2 lg:h-px lg:w-32",
	},
	{
		name: "Inventory & Warehouse",
		shortName: "Inventory",
		description:
			"Gain real-time visibility into stock levels, inventory movements, warehouse operations, and product availability.",
		position: "lg:bottom-24 lg:right-20 xl:right-28",
		line: "lg:right-full lg:top-1/2 lg:h-px lg:w-28 lg:rotate-[28deg]",
	},
	{
		name: "Manufacturing",
		shortName: "Manufacturing",
		description:
			"Plan and manage production orders, work orders, manufacturing operations, and production performance.",
		position: "lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2",
		line: "lg:bottom-full lg:left-1/2 lg:h-24 lg:w-px",
	},
	{
		name: "Human Resources",
		shortName: "HR",
		description:
			"Simplify employee management, attendance, leave management, and HR operations with payroll-related integrations.",
		position: "lg:bottom-24 lg:left-20 xl:left-28",
		line: "lg:left-full lg:top-1/2 lg:h-px lg:w-28 lg:-rotate-[28deg]",
	},
	{
		name: "Project Management",
		shortName: "Projects",
		description:
			"Track projects, tasks, resources, timelines, progress, and profitability across project-driven operations.",
		position: "lg:left-0 lg:top-1/2 lg:-translate-y-1/2",
		line: "lg:left-full lg:top-1/2 lg:h-px lg:w-32",
	},
	{
		name: "Dashboards & Analytics",
		shortName: "Analytics",
		description:
			"Turn operational data into real-time reports, dashboards, KPIs, and analytics for informed decision-making.",
		position: "lg:left-20 lg:top-24 xl:left-28",
		line: "lg:left-full lg:top-1/2 lg:h-px lg:w-28 lg:rotate-[28deg]",
	},
];

const flow = ["Sales", "Finance", "Operations", "People", "Performance"];

function ERPModules() {
	return (
		<Container
			className="stack-wrapper overflow-hidden border-y border-border-light bg-background-muted bg-[url(/background/sectionBgB.jpg)] bg-cover bg-center"
			contentClassName="relative">
			<div className="mx-auto max-w-4xl text-center">
				<SectionHeading
					align="center"
					eyebrow="ERP MODULES"
					title="One Platform. Every Core Business Function."
					highlight="Every Core Business Function."
					titleClassName="text-xxxl leading-[1.05]"
					highlightClassName="text-brand-gold"
					description="Odoo brings essential business operations together within a unified ERP environment. Benfexal Infotech configures the right modules around your workflows, enabling connected data, automated processes, and better operational visibility."
					descriptionClassName="max-w-3xl"
				/>
			</div>

			<div className="relative mt-12 lg:min-h-192">
				<div
					className="pointer-events-none absolute left-1/2 top-1/2 hidden h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border lg:block"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute left-1/2 top-1/2 hidden h-160 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border-light lg:block"
					aria-hidden="true"
				/>

				<div className="relative grid gap-4 lg:absolute lg:inset-0 lg:block">
					{modules.map((module, index) => (
						<article
							key={module.name}
							className={[
								"group relative z-10 border border-border bg-surface p-5 shadow-card transition duration-300 hover:z-30 hover:border-brand/30 hover:shadow-card-hover lg:absolute lg:w-64 rounded-md",
								module.position,
							]
								.filter(Boolean)
								.join(" ")}>
							<div className="relative">
								<div className="">
									<p className="font-mono text-sm font-semibold text-brand">
										{String(index + 1).padStart(2, "0")}
									</p>
									<h3 className="mt-3 text-lg font-semibold leading-tight text-foreground">
										{module.name}
									</h3>
								</div>
								<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted text-xs font-semibold text-brand absolute top-0 right-0">
									{module.shortName.slice(0, 2)}
								</span>
							</div>

							<p className="mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-foreground-muted opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 lg:group-hover:mt-5">
								{module.description}
							</p>

							<span
								className={[
									"absolute hidden origin-center overflow-hidden bg-border-dark after:absolute after:inset-0 after:-translate-x-full after:bg-brand after:transition after:duration-700 group-hover:after:translate-x-0 lg:block ",
									module.line,
								]
									.filter(Boolean)
									.join(" ")}
								aria-hidden="true"
							/>
						</article>
					))}
				</div>

				<div className="relative z-20 mt-8 border border-brand/20 bg-background p-6 text-center shadow-card lg:absolute lg:left-1/2 lg:top-1/2 lg:mt-0 lg:w-80 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:p-8">
					<div
						className="absolute -inset-4 border border-brand/10"
						aria-hidden="true"
					/>
					<div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-brand/25 bg-brand-light">
						<span className="absolute h-20 w-20 rounded-full border border-brand/30 bg-surface" />
						<span className="absolute h-44 w-44 rounded-full border border-dashed border-brand/20" />
						<span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
							ERP
						</span>
					</div>

					<p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
						Unified Command Center
					</p>
					<h3 className="mt-3 text-xxl font-semibold leading-none tracking-tight text-foreground">
						ODOO ERP
					</h3>
					<p className="mt-4 text-sm leading-relaxed text-foreground-muted">
						Connected modules. Connected data. One unified business
						system.
					</p>
				</div>
			</div>

			{/* <div className="mt-10 border border-border bg-surface">
				<div className="flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
					{flow.map((step, index) => (
						<div
							key={step}
							className="flex flex-1 items-center justify-between gap-4 px-5 py-4">
							<span className="text-sm font-semibold text-foreground">
								{step}
							</span>
							{index < flow.length - 1 && (
								<span className="text-brand" aria-hidden="true">
									&rarr;
								</span>
							)}
						</div>
					))}
				</div>
			</div> */}
		</Container>
	);
}

export default ERPModules;
