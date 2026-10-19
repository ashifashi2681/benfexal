"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { HiArrowLongRight } from "react-icons/hi2";

const industries = [
	{
		number: "01",
		name: "Manufacturing",
		description:
			"Optimize production planning, inventory control, procurement, and operational management with connected ERP workflows designed for manufacturing businesses.",
		capabilities: [
			"Production planning",
			"Inventory control",
			"Procurement workflows",
			"Operational management",
		],
	},
	{
		number: "02",
		name: "Trading & Distribution",
		description:
			"Streamline purchasing, supply chain management, warehousing, sales, and order fulfillment through integrated Odoo ERP processes.",
		capabilities: [
			"Purchasing",
			"Supply chain management",
			"Warehousing",
			"Order fulfillment",
		],
	},
	{
		number: "03",
		name: "Retail",
		description:
			"Connect Point of Sale, inventory management, customer engagement, sales, and business analytics for more efficient retail operations.",
		capabilities: [
			"POS operations",
			"Inventory management",
			"Customer engagement",
			"Retail analytics",
		],
	},
	{
		number: "04",
		name: "Fashion & Apparel",
		description:
			"Manage inventory, tailoring workflows, production planning, sales orders, and order management with ERP processes adapted to fashion and apparel businesses.",
		capabilities: [
			"Tailoring workflows",
			"Stock visibility",
			"Sales orders",
			"Production planning",
		],
	},
	{
		number: "05",
		name: "Construction",
		description:
			"Coordinate project management, procurement, resource planning, budgeting, and financial control through centralized ERP operations.",
		capabilities: [
			"Project management",
			"Resource planning",
			"Budgeting",
			"Financial control",
		],
	},
	{
		number: "06",
		name: "Rental Businesses",
		description:
			"Simplify booking management, asset tracking, rental returns, availability, and operational reporting with connected rental workflows.",
		capabilities: [
			"Booking management",
			"Asset tracking",
			"Rental returns",
			"Availability reporting",
		],
	},
	{
		number: "07",
		name: "Healthcare",
		description:
			"Improve operational efficiency through structured workflow management, inventory control, procurement, and business process automation.",
		capabilities: [
			"Workflow management",
			"Inventory control",
			"Procurement",
			"Process automation",
		],
	},
	{
		number: "08",
		name: "Service Industry",
		description:
			"Manage projects, customer service, resource allocation, timesheets, invoicing, and billing through an integrated Odoo ERP environment.",
		capabilities: [
			"Project delivery",
			"Customer service",
			"Timesheets",
			"Invoicing and billing",
		],
	},
];

function IndustriesWeServe() {
	const [activeIndustry, setActiveIndustry] = useState(industries[0]);

	return (
		<Container
			className="stack-wrapper overflow-hidden border-y border-border-light bg-background bg-[url(/background/sectionBgB.jpg)] bg-cover bg-center"
			contentClassName="relative">
			<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end lg:gap-16">
				<SectionHeading
					eyebrow="INDUSTRIES WE SERVE"
					title="Odoo ERP Solutions for Diverse Industries"
					highlight="Diverse Industries"
					titleClassName="max-w-4xl text-xxxl leading-[1.05]"
					highlightClassName="text-brand-gold"
				/>

				<div className="border-l border-border pl-5 sm:pl-7">
					<p className="text-base leading-relaxed text-foreground-muted">
						Every industry operates differently. Benfexal Infotech
						helps businesses configure and implement{" "}
						<strong className="font-semibold text-foreground">
							Odoo ERP solutions around their specific workflows,
							operational challenges, and growth requirements
						</strong>
						.
					</p>
					<p className="mt-4 text-sm leading-relaxed text-foreground-muted">
						From manufacturing and distribution to retail,
						construction, healthcare, and professional services, we
						connect core operations through a unified ERP platform.
					</p>
				</div>
			</div>

			<div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
				<div className="border border-border bg-surface rounded-md overflow-hidden">
					{industries.map((industry) => {
						const isActive = activeIndustry.name === industry.name;

						return (
							<button
								key={industry.number}
								type="button"
								onMouseEnter={() => setActiveIndustry(industry)}
								onFocus={() => setActiveIndustry(industry)}
								onClick={() => setActiveIndustry(industry)}
								className={[
									"group flex w-full items-center justify-between gap-5 border-b border-border px-5 py-5 text-left transition duration-300 last:border-b-0 sm:px-6",
									isActive
										? "bg-foreground text-white"
										: "bg-surface text-foreground hover:bg-surface-muted",
								]
									.filter(Boolean)
									.join(" ")}>
								<span className="flex min-w-0 items-center gap-4">
									<span
										className={[
											"font-mono text-sm font-semibold",
											isActive
												? "text-brand-gold"
												: "text-brand",
										]
											.filter(Boolean)
											.join(" ")}>
										{industry.number}
									</span>
									<span className="truncate text-lg font-semibold leading-tight sm:text-xl">
										{industry.name}
									</span>
								</span>
								<span
									className={[
										"shrink-0 transition duration-300 group-hover:translate-x-1",
										isActive
											? "text-brand-gold"
											: "text-brand",
									]
										.filter(Boolean)
										.join(" ")}
									aria-hidden="true">
									<HiArrowLongRight />
								</span>
							</button>
						);
					})}
				</div>

				<div className="relative min-h-152 overflow-hidden border border-border bg-foreground shadow-card rounded-md">
					<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[48px_48px] " />

					<div className="relative grid min-h-152 content-between gap-8 p-6 sm:p-8">
						<div className="grid gap-6 lg:grid-cols-[1fr_13rem]">
							<div>
								<p className="font-mono text-sm font-semibold text-brand-gold!">
									{activeIndustry.number}
								</p>
								<h3 className="mt-4 text-xxl font-semibold leading-tight text-surface-elevated!">
									{activeIndustry.name}
								</h3>
								<p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72!">
									{activeIndustry.description}
								</p>
							</div>

							<div className="min-h-44 border border-dashed border-white/25 bg-white/5 text-white">
								{/* img required */} image
							</div>
						</div>

						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45!">
								ERP capabilities
							</p>

							<div className="mt-5 grid gap-3 sm:grid-cols-2">
								{activeIndustry.capabilities.map(
									(capability) => (
										<div
											key={capability}
											className="flex items-center gap-3 border border-white/15 bg-white/5 px-4 py-3">
											<span
												className="h-2 w-2 rounded-full bg-brand-gold"
												aria-hidden="true"
											/>
											<span className="text-sm font-medium text-white/86">
												{capability}
											</span>
										</div>
									)
								)}
							</div>
						</div>

						<div className="border-t border-white/15 pt-5">
							<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<p className="max-w-xl text-sm font-medium text-white/70!">
									One ERP platform. Multiple industries.
									Business-specific workflows.
								</p>
								<div className="flex items-center gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
									<span className="h-px w-16 bg-white/20" />
									<span className="h-2.5 w-2.5 rounded-full bg-brand" />
									<span className="h-px w-16 bg-white/20" />
									<span className="h-2.5 w-2.5 rounded-full bg-white" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default IndustriesWeServe;
