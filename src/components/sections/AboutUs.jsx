import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Steps from "../ui/Steps";

const metrics = [
	{
		value: "40+",
		label: "ERP Consultants & Developers",
	},
	{
		value: "India + GCC",
		label: "Regional ERP Expertise",
	},
	{
		value: "Odoo",
		label: "Consulting & Implementation",
	},
];

const processSteps = ["Business First", "Process", "Technology", "Growth"];

function AboutUs() {
	return (
		<Container
			className="stack-wrapper overflow-hidden border-y border-border-light bg-[url(/background/sectionBgB.jpg)] bg-cover bg-center"
			contentClassName="relative">
			<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
				<div className="flex flex-col gap-8">
					<SectionHeading
						eyebrow="ABOUT US"
						title="ERP Expertise That Drives Business Growth"
						highlight="Business Growth"
						titleClassName="max-w-4xl text-xxxl leading-[1.05]"
						highlightClassName="text-brand-gold"
					/>

					<div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-end">
						<div className="space-y-5 border-l border-border pl-5 sm:pl-7">
							<p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
								Benfexal Infotech is an{" "}
								<strong className="font-semibold text-foreground">
									ERP consulting and implementation company
								</strong>{" "}
								specializing in Odoo-based business
								transformation. We help organizations simplify
								complex operations, automate workflows, improve
								business visibility, and build more efficient
								processes through tailored ERP solutions.
							</p>

							<p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
								With a team of{" "}
								<strong className="font-semibold text-foreground">
									40+ ERP consultants and developers
								</strong>
								, we deliver scalable and reliable Odoo ERP
								solutions for businesses across diverse
								industries in{" "}
								<strong className="font-semibold text-foreground">
									India and the GCC region
								</strong>
								.
							</p>

							<p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
								Our approach begins with understanding how your
								business works. We then align the right ERP
								strategy, processes, and technology to create
								measurable improvements in{" "}
								<strong className="font-semibold text-foreground">
									operational efficiency, productivity,
									visibility, and long-term business growth
								</strong>
								.
							</p>
						</div>

						<div className="min-h-56 border border-dashed border-border bg-surface-muted">
							image
						</div>
					</div>
				</div>

				<aside className="grid gap-3 self-start">
					{metrics.map((metric) => (
						<div
							key={metric.value}
							className="group rounded-md border border-border bg-surface px-5 py-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover">
							<p className="text-xxl font-semibold leading-none tracking-tight text-foreground transition duration-300 group-hover:text-brand">
								{metric.value}
							</p>
							<p className="mt-3 max-w-44 text-sm font-medium leading-snug text-foreground-muted">
								{metric.label}
							</p>
						</div>
					))}

					<div className="border rounded-md border-brand/20 bg-brand-light px-5 py-6">
						<p className="text-lg font-semibold leading-tight text-foreground">
							Business First
						</p>
						<p className="mt-3 text-sm leading-relaxed text-foreground-muted">
							Process-led transformation before software
							configuration.
						</p>
					</div>
				</aside>
			</div>

			<div className="mt-16 flex justify-center">
				<Steps arr={processSteps} />
			</div>
		
		</Container>
	);
}

export default AboutUs;
