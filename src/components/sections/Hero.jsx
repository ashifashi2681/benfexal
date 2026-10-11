import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { HiMiniStar } from "react-icons/hi2";
import Image from "next/image";

function Hero() {
	return (
		<Container
			as="main"
			spacing="lg"
			className="bg-[url(/background/heroBG.png)] bg-cover bg-center stack-wrapper"
			contentClassName=""
			aria-labelledby="hero-title">
			<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				{/* Copy */}
				<div className="flex flex-col items-start gap-6">
					<p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
						<span
							aria-hidden="true"
							className="h-1.5 w-1.5 rounded-full bg-brand"
						/>
						ODOO ERP CONSULTING & IMPLEMENTATION
					</p>

					<h1
						id="hero-title"
						className="text-xxxl font-semibold leading-[1.08] tracking-tight">
						Transforming Business Operations Through{" "}
						<span className="font-mono italic">Smarter ERP</span>
					</h1>

					<p className="max-w-xl text-base leading-relaxed">
						We help businesses streamline operations, automate
						workflows, and gain real-time visibility with tailored
						Odoo ERP solutions.
					</p>

					<div className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-2 ">
						<Button size="md" variant="">
							Get demo account
						</Button>

						<div className="flex items-center gap-3">
							{/* Avatars */}
							<div className="flex -space-x-3">
								<span className="h-11 w-11 rounded-full border-2 border-background bg-surface-elevated" />
								<span className="h-11 w-11 rounded-full border-2 border-background bg-surface-elevated" />
								<span className="h-11 w-11 rounded-full border-2 border-background bg-surface-elevated" />
							</div>

							<div className="text-sm leading-snug">
								<div className="flex items-center gap-2">
									{/* Stars */}
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
						</div>
					</div>
				</div>

				{/* Collage */}
				<div className="grid gap-4 sm:gap-5">
					{/* Row 1 */}
					<div className="grid grid-cols-12 gap-4 sm:gap-5">
						<div className="relative col-span-7 h-52 overflow-hidden rounded-3xl bg-background-subtle sm:h-64 lg:h-72">
							<Image
								src="https://img.magnific.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149383351.jpg?semt=ais_hybrid&w=740&q=80"
								alt="Illustration of ERP dashboards connecting finance, operations, inventory, and team workflows"
								fill
								priority
								sizes="(min-width: 1024px) 37rem, (min-width: 640px) 58vw, 58vw"
								className="object-cover"
							/>
						</div>

						<div className="col-span-5 flex h-52 flex-col items-center justify-center gap-3 rounded-3xl bg-brand-gold-light px-6 py-8 text-center sm:h-64 lg:h-72">
							<span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface shadow-card">
								{/* Icon */}
							</span>
							<p className="text-lg font-semibold text-foreground">
								40+ ERP experts.
							</p>
							<p className="text-sm text-foreground-subtle">
								India & GCC.
							</p>
						</div>
					</div>

					{/* Row 2 */}
					<div className="grid grid-cols-12 gap-4 sm:gap-5">
						<div className="col-span-5 flex h-44 flex-col items-center justify-between rounded-full bg-foreground px-6 py-7 text-center sm:h-56 lg:h-64">
							<span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
								{/* Icon */}
							</span>

							<div>
								<p className="text-2xl font-semibold italic text-white">
									India + GCC
								</p>
								<p className="mt-1 text-sm text-white/70">
									ERP Expertise
								</p>
							</div>

							<span className="h-11 w-11 rounded-full bg-white/20 ring-2 ring-white/30">
								{/* Avatar */}
							</span>
						</div>

						<div className="col-span-7 h-44 overflow-hidden rounded-3xl bg-background-subtle sm:h-56 lg:h-64">
							{/* Image */}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Hero;
