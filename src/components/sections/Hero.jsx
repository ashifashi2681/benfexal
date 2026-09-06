import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
	return (
		<Container
			spacing="lg"
			className="bg-[url(/background/heroBG.png)] bg-cover bg-center sticky top-0 z-10">
			<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				{/* Copy */}
				<div className="flex flex-col items-start gap-6">
					<p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
						<span
							aria-hidden="true"
							className="h-0.5 w-8 rounded-full bg-brand"
						/>
						Try it now!
					</p>

					<h1 className="text-xxxxl font-semibold leading-[1.08] tracking-tight">
						Instant Payment with{" "}
						<span className="font-mono italic">Open Banking</span>
					</h1>

					<p className="max-w-xl text-base leading-relaxed">
						Our advanced technology and secure systems provide a
						safe and reliable way to transfer funds, allowing you to
						improved efficiency.
					</p>

					<div className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-2">
						<Button size="lg">Get demo account</Button>

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
										<span className="h-4 w-4 rounded-[3px] bg-brand-gold" />
										<span className="h-4 w-4 rounded-[3px] bg-brand-gold" />
										<span className="h-4 w-4 rounded-[3px] bg-brand-gold" />
										<span className="h-4 w-4 rounded-[3px] bg-brand-gold" />
										<span className="h-4 w-4 rounded-[3px] bg-brand-gold" />
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
						<div className="col-span-7 h-52 overflow-hidden rounded-3xl bg-background-subtle sm:h-64 lg:h-72">
							{/* Image */}
						</div>

						<div className="col-span-5 flex h-52 flex-col items-center justify-center gap-3 rounded-3xl bg-brand-gold-light px-6 py-8 text-center sm:h-64 lg:h-72">
							<span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface shadow-card">
								{/* Icon */}
							</span>
							<p className="text-lg font-semibold text-foreground">
								Successful Transaction
							</p>
							<p className="text-sm text-foreground-subtle">
								Date: Mar 20, 2024
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
									$25,000
								</p>
								<p className="mt-1 text-sm text-white/70">
									Sent to Jack
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
