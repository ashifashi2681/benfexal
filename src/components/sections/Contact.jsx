"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import {
	HiArrowLongRight,
	HiOutlineEnvelope,
	HiOutlineGlobeAlt,
	HiOutlineMapPin,
	HiOutlinePhone,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/*  Contact details — keep crawlable as plain HTML text (SEO).        */
/*  NOTE: verify the "Official Odoo Partner" designation and all      */
/*  contact details before publication.                               */
/* ------------------------------------------------------------------ */

const EMAIL = "benfexalinfotech@gmail.com";
const PHONE_DISPLAY = "+91 8714 061 222";
const PHONE_HREF = "tel:+918714061222";
const WHATSAPP_URL = "https://wa.me/918714061222";
const WEBSITE_URL = "https://www.benfexal.com";
const WEBSITE_DISPLAY = "www.benfexal.com";

// No inquiry form exists yet — the primary CTA opens a prefilled email
// so every click leads to a genuine inquiry flow, not a dead button.
const PRIMARY_CTA_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent(
	"Let's Discuss Your ERP Needs"
)}&body=${encodeURIComponent(
	"Hi Benfexal team,\n\nWe'd like to discuss our ERP needs.\n\nCompany:\nRequirements:\n\nThanks,"
)}`;

const contactChannels = [
	{
		label: "Email Us",
		value: EMAIL,
		href: `mailto:${EMAIL}`,
		icon: HiOutlineEnvelope,
	},
	{
		label: "Call or WhatsApp",
		value: PHONE_DISPLAY,
		href: PHONE_HREF,
		icon: HiOutlinePhone,
	},
	{
		label: "Visit Our Website",
		value: WEBSITE_DISPLAY,
		href: WEBSITE_URL,
		external: true,
		icon: HiOutlineGlobeAlt,
	},
];

/* Entrance stagger (ms) — headline lines first, then copy, CTAs and
   contact details follow in sequence. */
const DELAYS = {
	eyebrow: 0,
	line1: 120,
	line2: 240,
	copy: 420,
	ctas: 560,
	contactEyebrow: 150,
	contactTitle: 280,
	contactCopy: 400,
	channel1: 300,
	channel2: 400,
	channel3: 500,
	office: 420,
	regions: 520,
	brand: 600,
};

/* Shared entrance transition — fade + rise, masked reveals use
   translate-y-full instead. */
const fadeUp = (visible, delay) => ({
	className: [
		"transition duration-700 ease-out",
		visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
	].join(" "),
	style: { transitionDelay: `${delay}ms` },
});

/* Masked line reveal for the oversized headline. */
const revealLine = (visible, delay) => ({
	className: [
		"block overflow-hidden",
		visible ? "translate-y-0" : "translate-y-full",
		"transition-transform duration-700 ease-out",
	].join(" "),
	style: { transitionDelay: `${delay}ms` },
});

/* Magnetic wrapper — pulls the CTA gently toward the cursor.
   Disabled for reduced-motion users. */
function MagneticCTA({ children }) {
	const wrapperRef = useRef(null);
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event) => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}
		const wrapper = wrapperRef.current;
		if (!wrapper) return;

		const rect = wrapper.getBoundingClientRect();
		const strength = 0.25;
		setOffset({
			x: (event.clientX - (rect.left + rect.width / 2)) * strength,
			y: (event.clientY - (rect.top + rect.height / 2)) * strength,
		});
	};

	const resetOffset = () => setOffset({ x: 0, y: 0 });

	return (
		<div
			ref={wrapperRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={resetOffset}
			className="inline-block"
		>
			<span
				className="block transition-transform duration-300 ease-out"
				style={{
					transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
				}}
			>
				{children}
			</span>
		</div>
	);
}

function Contact() {
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
			{ threshold: 0.15 }
		);

		observer.observe(section);

		return () => observer.disconnect();
	}, []);

	return (
		<Container
			ref={sectionRef}
			as="section"
			id="contact"
			spacing="lg"
			aria-labelledby="contact-title"
			className="stack-wrapper relative overflow-hidden bg-foreground"
			contentClassName="relative"
		>
			{/* Subtle brand glows */}
			<div aria-hidden="true" className="pointer-events-none absolute inset-0">
				<div className="absolute -top-44 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[130px]" />
				<div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-brand-gold/10 blur-[110px]" />
			</div>

			{/* Geographic connection motif — restrained dotted grid fading out
			    from the top right, suggesting the India–GCC reach. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
			/>

			{/* Upper portion — conversion message */}
			<div className="relative flex flex-col items-start">
				<p
					{...fadeUp(isVisible, DELAYS.eyebrow)}
					className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70"
				>
					<span
						aria-hidden="true"
						className="h-1.5 w-1.5 rounded-full bg-brand"
					/>
					LET&apos;S CONNECT
				</p>

				<h2
					id="contact-title"
					className="mt-6 text-xxxl font-semibold leading-[1.05] tracking-tight text-white sm:text-xxxxl"
				>
					<span className="block pb-1">
						<span {...revealLine(isVisible, DELAYS.line1)}>
							Ready to Transform
						</span>
					</span>
					<span className="block pb-2">
						<span {...revealLine(isVisible, DELAYS.line2)}>
							<span className="bg-linear-to-r from-brand-blue via-brand to-brand-gold bg-clip-text text-transparent">
								Your Business?
							</span>
						</span>
					</span>
				</h2>

				<div {...fadeUp(isVisible, DELAYS.copy)} className="max-w-2xl">
					<p className="text-lg leading-relaxed text-white/80">
						Take the next step toward smarter operations, connected
						workflows, and sustainable business growth.
					</p>
					<p className="mt-4 text-base leading-relaxed text-white/60">
						At{" "}
						<strong className="font-semibold text-white">
							Benfexal Infotech
						</strong>
						, we help organizations across India and the GCC implement,
						customize, and optimize{" "}
						<strong className="font-semibold text-white">
							Odoo ERP solutions
						</strong>{" "}
						that align with their business goals.
					</p>
					<p className="mt-4 text-base leading-relaxed text-white/60">
						Whether you&apos;re planning your first ERP implementation,
						upgrading an existing system, or looking for a reliable Odoo
						consulting partner, our team is ready to help you move
						forward.
					</p>
				</div>

				<div
					{...fadeUp(isVisible, DELAYS.ctas)}
					className="mt-10 flex flex-wrap items-center gap-5"
				>
					<MagneticCTA>
						<Button
							as="a"
							variant="primary"
							size="lg"
							href={PRIMARY_CTA_HREF}
						>
							Let&apos;s Discuss Your ERP Needs
							<span
								aria-hidden="true"
								className="transition-transform duration-300 group-hover:translate-x-1.5"
							>
								<HiArrowLongRight />
							</span>
						</Button>
					</MagneticCTA>

					<Button
						as="a"
						variant="outline"
						size="lg"
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="text-base">
							<FaWhatsapp />
						</span>
						Chat on WhatsApp
					</Button>
				</div>
			</div>

			{/* Lower portion — contact information & office details */}
			<div className="relative mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
				<div className="flex flex-col items-start lg:col-span-5">
					<p
						{...fadeUp(isVisible, DELAYS.contactEyebrow)}
						className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70"
					>
						<span
							aria-hidden="true"
							className="h-1.5 w-1.5 rounded-full bg-brand-gold"
						/>
						GET IN TOUCH
					</p>

					<h3
						{...fadeUp(isVisible, DELAYS.contactTitle)}
						className="mt-5 text-xl font-semibold leading-tight tracking-tight text-white sm:text-xxl"
					>
						Let&apos;s Build Something{" "}
						<span className="font-mono italic text-brand-gold">
							Better Together.
						</span>
					</h3>

					<p
						{...fadeUp(isVisible, DELAYS.contactCopy)}
						className="mt-5 max-w-md text-base leading-relaxed text-white/60"
					>
						Connect with our ERP consultants to explore the right Odoo
						solutions for your business.
					</p>

					{/* Office + service regions */}
					<div className="mt-10 grid w-full gap-8 sm:grid-cols-2">
						<div {...fadeUp(isVisible, DELAYS.office)}>
							<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
								<HiOutlineMapPin
									aria-hidden="true"
									className="h-4 w-4 text-brand"
								/>
								Our Office
							</p>
							<address className="mt-3 not-italic text-sm leading-relaxed text-white/70">
								3rd Floor, Neospace II Building,
								<br />
								Kinfra Techno Industrial Park,
								<br />
								Malappuram, Kerala, India – 673635
							</address>
						</div>

						<div {...fadeUp(isVisible, DELAYS.regions)}>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
								Our Service Regions
							</p>
							<p className="mt-3 text-sm leading-relaxed text-white/70">
								India • UAE • Saudi Arabia • GCC Region
							</p>
						</div>
					</div>
				</div>

				{/* Contact channels — full-width rows, easy to tap on mobile */}
				<div
					{...fadeUp(isVisible, DELAYS.contactEyebrow)}
					className="lg:col-span-7"
				>
					<div className="divide-y divide-white/10 border-y border-white/10">
						{contactChannels.map((channel, index) => {
							const Icon = channel.icon;
							const delay = [
								DELAYS.channel1,
								DELAYS.channel2,
								DELAYS.channel3,
							][index];

							return (
								<a
									key={channel.label}
									href={channel.href}
									{...(channel.external
										? { target: "_blank", rel: "noopener noreferrer" }
										: {})}
									className="group flex items-center gap-5 px-2 py-6 transition-colors duration-300 hover:bg-white/[0.04] sm:gap-6 sm:px-4"
								>
									<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
										<Icon aria-hidden="true" className="h-5 w-5" />
									</span>

									<span className="min-w-0">
										<span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
											{channel.label}
										</span>
										<span className="relative mt-1 block truncate text-lg font-semibold text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 group-hover:after:scale-x-100">
											{channel.value}
										</span>
									</span>

									<HiArrowLongRight
										aria-hidden="true"
										className="ml-auto h-5 w-5 shrink-0 text-white/30 transition duration-300 group-hover:translate-x-1.5 group-hover:text-brand"
									/>
								</a>
							);
						})}
					</div>

					<p className="mt-6 text-sm leading-relaxed text-white/50">
						Prefer a quick conversation? WhatsApp and email are both
						monitored during business hours.
					</p>
				</div>
			</div>

			{/* Brand strip — final sign-off */}
			<div
				{...fadeUp(isVisible, DELAYS.brand)}
				className="relative mt-20 border-t border-white/10 pt-10 text-center"
			>
				<p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
					Benfexal Infotech
				</p>

				{/* Display only if partnership status is verified. */}
				<span className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
					<span
						aria-hidden="true"
						className="h-1.5 w-1.5 rounded-full bg-brand-blue"
					/>
					Official Odoo Partner
				</span>

				<p className="mx-auto mt-5 max-w-xl text-lg italic text-white/80">
					Empowering Businesses Through Intelligent ERP Solutions.
				</p>
				<p className="mx-auto mt-2 max-w-xl font-mono text-sm text-brand-gold">
					Your Business. Our ERP Expertise. One Smarter Future.
				</p>
			</div>
		</Container>
	);
}

export default Contact;
