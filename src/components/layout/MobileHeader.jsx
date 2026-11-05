"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Button from "../ui/Button";

function MobileHeader({ navigation }) {
	const [isOpen, setIsOpen] = useState(false);
	const menuId = useId();

	useEffect(() => {
		if (!isOpen) return undefined;

		const handleKeyDown = (event) => {
			if (event.key === "Escape") setIsOpen(false);
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	return (
		<div className="lg:hidden">
			<button
				type="button"
				aria-expanded={isOpen}
				aria-controls={menuId}
				aria-label={
					isOpen ? "Close navigation menu" : "Open navigation menu"
				}
				onClick={() => setIsOpen((open) => !open)}
				className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
				{isOpen ? (
					<HiXMark className="h-6 w-6" />
				) : (
					<HiBars3 className="h-6 w-6" />
				)}
			</button>

			<div
				id={menuId}
				className={`absolute inset-x-0 top-full border-b border-border bg-white backdrop-blur-sm px-4 shadow-xl transition-all duration-200 sm:px-6 ${
					isOpen
						? "visible translate-y-0 opacity-100"
						: "invisible -translate-y-2 opacity-0"
				}`}>
				<nav
					aria-label="Mobile navigation"
					className="mx-auto flex max-w-7xl flex-col py-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className="rounded-lg px-4 py-3 text-base font-medium text-foreground-secondary transition-colors hover:bg-brand-light hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
							{item.label}
						</Link>
					))}
					<Link
						href="#contact"
						onClick={() => setIsOpen(false)}
						className="">
						<Button size="md" variant="secondary" fullWidth={true}>
							Talk to an expert
						</Button>
					</Link>
				</nav>
			</div>
		</div>
	);
}

export default MobileHeader;
