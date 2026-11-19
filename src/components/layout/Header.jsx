import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import MobileHeader from "./MobileHeader";
import Button from "../ui/Button";

const navigation = [
	{ label: "About", href: "#about-us" },
	{ label: "Services", href: "#our-services" },
	{ label: "Industries", href: "#industries-we-serve" },
	{ label: "ERP Modules", href: "#erp-modules" },
];

function Brand() {
	return (
		<Link
			href="/"
			aria-label="Benfexal Infotech home"
			className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
			<Image
				src="/assets/brand.png"
				alt="Benfexal Infotech"
				width={154}
				height={44}
				priority
				className="scale-[1.9] object-contain"
			/>
		</Link>
	);
}

function Header() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 border-b border-border-light/80 bg-transparent backdrop-blur-sm">
			<Container
				as="div"
				spacing="none"
				contentClassName=" flex h-[var(--header-height)] items-center justify-between ">
				<Brand />

				<nav
					aria-label="Primary navigation"
					className="hidden items-center gap-1 lg:flex">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="rounded-full px-4 py-2 text-sm font-medium text-background! transition-colors duration-200 hover:text-brand! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand!">
							{item.label}
						</Link>
					))}
				</nav>

				<Link href="#contact" className="hidden lg:block">
					<Button size="sm" variant="secondary">
						Talk to an expert
					</Button>
				</Link>

				<MobileHeader navigation={navigation} />
			</Container>
		</header>
	);
}

export default Header;
