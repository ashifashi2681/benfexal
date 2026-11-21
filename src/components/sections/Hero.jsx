import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { HiMiniStar } from "react-icons/hi2";
import Image from "next/image";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { GrSystem } from "react-icons/gr";

function Hero() {
	return (
		<Container
			as="main"
			spacing="lg"
			className="bg-[url(/background/herobg-mob1.webp)] md:bg-[url(/background/herobg-tab1.webp)] lg:bg-[url(/background/herobg-desk1.webp)] bg-cover bg-center stack-wrapper pt-40! h-full flex flex-col items-center justify-center "
			contentClassName="h-full"
			aria-labelledby="hero-title">
			<div className="">
				{/* Copy */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
					<div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/60 to-transparent -z-10" />

					<p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-background-muted/70!">
						<span
							aria-hidden="true"
							className="h-1.5 w-1.5 rounded-full bg-brand"
						/>
						ODOO ERP CONSULTING & IMPLEMENTATION
					</p>

					<h1
						id="hero-title"
						className="text-xxxl font-bold leading-[1.08] tracking-tight text-background-subtle!">
						Transforming Business Operations Through{" "}
						<span className="font-serif">Smarter ERP</span>
					</h1>

					<p className="max-w-xl text-base leading-relaxed text-white/80!">
						We help businesses streamline operations, automate
						workflows, and gain real-time visibility with tailored
						Odoo ERP solutions.
					</p>

					<div className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-2 ">
						<Button size="md" variant="">
							Get demo account
						</Button>

						{/* <div className="flex items-center gap-3">
							<div className="flex -space-x-3">
								<span className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-background">
									<Image
										src="/stock/user1.png"
										alt="Benfexal client"
										width={44}
										height={44}
										className="h-full w-full object-cover"
									/>
								</span>
								<span className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-background">
									<Image
										src="/stock/user2.png"
										alt="Benfexal client"
										width={44}
										height={44}
										className="h-full w-full object-cover"
									/>
								</span>
								<span className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-background">
									<Image
										src="/stock/user3.png"
										alt="Benfexal client"
										width={44}
										height={44}
										className="h-full w-full object-cover"
									/>
								</span>
							</div>

							<div className="text-sm leading-snug">
								<div className="flex items-center gap-2">
									<span
										className="flex items-center gap-1"
										aria-hidden="true">
										<span className="text-base text-brand-gold">
											<HiMiniStar />
										</span>
										<span className="text-base text-brand-gold">
											<HiMiniStar />
										</span>
										<span className="text-base text-brand-gold">
											<HiMiniStar />
										</span>
										<span className="text-base text-brand-gold">
											<HiMiniStar />
										</span>
										<span className="text-base text-brand-gold">
											<HiMiniStar />
										</span>
										<span />
									</span>
									<span className="font-semibold text-foreground">
										4.8
									</span>
								</div>
								<p className="mt-1 text-foreground-muted">
									from 500+{" "}
									<span className="font-medium text-foreground underline underline-offset-2">
										reviews
									</span>
								</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Hero;
