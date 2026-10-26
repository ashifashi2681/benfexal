import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { HiArrowLongRight } from "react-icons/hi2";
import { TbSettingsStar } from "react-icons/tb";
import { FaHeadSideVirus } from "react-icons/fa";
import { VscDeveloperTools } from "react-icons/vsc";
import { SiGoogledataproc } from "react-icons/si";
import { GrDocumentUpdate, GrHostMaintenance } from "react-icons/gr";

const services = [
	{
		number: "01",
		title: "Odoo ERP Implementation",
		description:
			"Implement a complete Odoo ERP solution aligned with your business processes, departments, and operational goals.",
		detail:
			"We manage the journey from process analysis and configuration to deployment and user adoption.",
		outcome: "Streamline Operations",
		className: "lg:col-span-7",
		icon: "implementation",
	},
	{
		number: "02",
		title: "Odoo Custom Development",
		description:
			"Extend Odoo beyond its standard capabilities with custom modules, workflows, dashboards, reports, and integrations.",
		detail:
			"Build specific tools around the way your teams already operate.",
		outcome: "Extend Odoo",
		className: "lg:col-span-5",
		icon: "custom",
	},
	{
		number: "03",
		title: "Odoo Migration Services",
		description:
			"Move from legacy ERP platforms, spreadsheets, or disconnected applications to Odoo with a structured migration strategy.",
		detail:
			"Keep data accuracy, integrity, and business continuity at the center.",
		outcome: "Protect Data Integrity",
		className: "lg:col-span-4",
		icon: "migration",
	},
	{
		number: "04",
		title: "Odoo Version Upgrades",
		description:
			"Keep your ERP environment current with reliable Odoo version upgrades and customization reviews.",
		detail:
			"Maintain system stability, compatibility, and performance as your platform evolves.",
		outcome: "Improve Performance",
		className: "lg:col-span-4",
		icon: "upgrade",
	},
	{
		number: "05",
		title: "Annual Maintenance & Support",
		description:
			"Keep your Odoo ERP running efficiently with maintenance, troubleshooting, user assistance, and enhancements.",
		detail:
			"Get ongoing optimization and technical support tailored to changing business needs.",
		outcome: "Sustain Growth",
		className: "lg:col-span-4",
		icon: "support",
	},
];

const lifecycle = [
	"Implementation",
	"Customization",
	"Migration",
	"Upgrades",
	"Support",
];

function ServiceIcon({ type }) {
	const commonNodeClass = "absolute h-2.5 w-2.5 rounded-full bg-brand";

	if (type === "implementation") {
		return (
			<span className="text-brand-hover text-xxl">
				<FaHeadSideVirus />
			</span>
		);
	}

	if (type === "custom") {
		return (
			<span className="text-brand-gold-dark text-xxl">
				<VscDeveloperTools />
			</span>
		);
	}

	if (type === "migration") {
		return (
			<span className="text-brand-gold-dark text-xxl">
				<SiGoogledataproc />
			</span>
		);
	}

	if (type === "upgrade") {
		return (
			<span className="text-brand-blue-dark text-xxl">
				<GrDocumentUpdate />
			</span>
		);
	}

	return (
		<div className="text-brand-blue-dark text-xxl">
			<GrHostMaintenance />
		</div>
	);
}

function OurServices({id}) {
	return (
		<Container
		id={id}
			className="stack-wrapper overflow-hidden border-y border-border-light bg-[url(/background/sectionBgB.jpg)] bg-cover bg-center"
			contentClassName="relative">
			<div
				className="pointer-events-none absolute -right-24 top-24 hidden h-80 w-80 rounded-full border border-border lg:block"
				aria-hidden="true">
				<span className="absolute left-1/2 top-0 h-full w-px bg-border-light" />
				<span className="absolute left-0 top-1/2 h-px w-full bg-border-light" />
				<span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-brand/20 bg-brand-light" />
			</div>

			<div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end lg:gap-16">
				<SectionHeading
					eyebrow="OUR SERVICES"
					title="Odoo ERP Solutions Built for Real Business Needs"
					highlight="Real Business Needs"
					titleClassName="max-w-4xl text-xxxl leading-[1.05]"
					highlightClassName="text-brand-gold"
				/>

				<div className="border-l border-border pl-5 sm:pl-7">
					<p className="text-base leading-relaxed text-foreground-muted">
						From implementation and customization to migration,
						upgrades, and ongoing support, Benfexal Infotech
						provides end-to-end{" "}
						<strong className="font-semibold text-foreground">
							Odoo ERP services
						</strong>{" "}
						designed around your business processes, operational
						requirements, and growth objectives.
					</p>
					<p className="mt-4 text-sm leading-relaxed text-foreground-muted">
						We combine ERP expertise with a process-first approach
						to help businesses build connected, efficient, and
						scalable operations.
					</p>
				</div>
			</div>

			<div className="relative mt-12 grid gap-4 lg:grid-cols-12">
				{services.map((service) => (
					<Card
						key={service.number}
						className={service.className}>
						<div className="flex h-full flex-col justify-between gap-8">
							<div className="flex items-start justify-between gap-6">
								<div>
									<p className="font-mono text-sm font-semibold text-brand">
										{service.number}
									</p>
									<h3 className="mt-5 max-w-xl text-xl font-semibold leading-tight text-foreground">
										{service.title}
									</h3>
								</div>

								<ServiceIcon type={service.icon} />
							</div>

							<div>
								<p className="max-w-2xl text-sm leading-relaxed text-foreground-muted">
									{service.description}
								</p>
								<p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted">
									{service.detail}
								</p>

								<div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
									<span className="translate-y-2 text-sm font-semibold text-brand opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
										{service.outcome}
									</span>
									<Button
										variant="outline"
										className="group-hover:border-brand group-hover:bg-brand group-hover:text-white">
										<HiArrowLongRight />
									</Button>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>


			<p className="mt-5 max-w-2xl text-sm font-medium text-foreground-muted">
				One Odoo partner for your complete ERP lifecycle.
			</p>
		</Container>
	);
}

export default OurServices;
