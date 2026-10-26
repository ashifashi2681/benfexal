import React from "react";
import Link from "next/link";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import Container from "../ui/Container";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const brandName = "Benfexal";

const aboutText =
  "Benfexal helps businesses streamline operations with modern ERP solutions built for efficiency, scale, and long-term growth.";

const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about-us" },
      { label: "Why Benfexal", href: "#why-benfexal" },
      { label: "Industries We Serve", href: "#industries-we-serve" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Our Services", href: "#our-services" },
      { label: "ERP Modules", href: "#erp-modules" },
      { label: "ERP Transformation", href: "#erp-transformation-process" },
      { label: "Implementation Philosophy", href: "#implementation-philosophy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];

const socialLinks = [
	{
		icon: SiInstagram,
		name: "Instagram",
		link: "https://www.instagram.com/benfexal.infotech/",
	},
	{
		icon: SiFacebook,
		name: "Facebook",
		link: "https://www.facebook.com/benfexalinfotech/",
	},
	{
		icon: FaLinkedinIn,
		name: "LinkedIn",
		link: "https://www.linkedin.com/company/benfexal/",
	},
	{
		icon: SiYoutube,
		name: "YouTube",
		link: "https://www.youtube.com/@BenfexalInfotech",
	},
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
		<Container
			as="footer"
			spacing="none"
			className="relative mt-auto overflow-hidden bg-foreground z-10">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/50 to-transparent"
			/>

			<div className="py-14 lg:py-16">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
					{/* Brand */}
					<div className="flex flex-col items-start gap-6 lg:col-span-5 lg:pr-12">
						<Link
							href="/"
							aria-label={`${brandName} — home`}
							className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold">
							<span className="relative h-16 w-44 overflow-hidden rounded-md  shadow-card sm:h-18 sm:w-48">
								{/* Logo */}
								<Image
									src="/assets/brand.png"
									alt="Benfexal Infotech logo"
									fill
									// sizes="(max-width: 640px) 176px, 192px"
									className="scale-[2.5] object-contain"
								/>
							</span>
						</Link>

						<p className="max-w-sm text-sm leading-relaxed text-white/60!">
							{aboutText}
						</p>

						{/* Social */}
						<ul className="flex items-center gap-3">
							{socialLinks.map(({ icon: Icon, name, link }) => (
								<li key={name}>
									<a
										href={link}
										target="_blank"
										rel="noreferrer"
										aria-label={`${name} (opens in a new tab)`}
										className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white">
										<Icon
											aria-hidden="true"
											className="h-4 w-4"
										/>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Links */}
					<nav
						aria-label="Footer"
						className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
						{footerNav.map((group) => (
							<div
								key={group.title}
								className="flex flex-col gap-5">
								<h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
									{group.title}
								</h3>
								<ul className="flex flex-col gap-3">
									{group.links.map((link) => (
										<li key={link.label}>
											<a
												href={link.href}
												className="text-sm text-white/60 transition-colors duration-300 hover:text-white">
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>

				{/* Bottom bar */}
				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row lg:mt-16">
					<p className="text-sm text-white/50">
						© {year} {brandName}. All rights reserved.
					</p>

					{/* <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul> */}
				</div>
			</div>
		</Container>
  );
}

export default Footer;
