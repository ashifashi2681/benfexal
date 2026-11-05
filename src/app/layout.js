import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollLayout from "@/components/ui/SmoothScrollLayout";

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL || "https://www.benfexal.com";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Benfexal Infotech | Odoo ERP Consulting & Implementation",
		template: "%s | Benfexal Infotech",
	},
	description:
		"Benfexal Infotech delivers Odoo ERP consulting, implementation, customization, integration, and support for growing businesses across India and the GCC.",
	applicationName: "Benfexal Infotech",
	keywords: [
		"Odoo ERP consulting",
		"Odoo implementation",
		"ERP consulting company",
		"ERP implementation India",
		"Odoo customization",
		"Odoo integration",
		"business process automation",
		"ERP support GCC",
	],
	authors: [{ name: "Benfexal Infotech" }],
	creator: "Benfexal Infotech",
	publisher: "Benfexal Infotech",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "/",
		siteName: "Benfexal Infotech",
		title: "Benfexal Infotech | Odoo ERP Consulting & Implementation",
		description:
			"Streamline operations, automate workflows, and gain real-time visibility with tailored Odoo ERP solutions.",
		images: [
			{
				url: "/background/heroBG.png",
				width: 1200,
				height: 630,
				alt: "Benfexal Infotech Odoo ERP consulting and implementation",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Benfexal Infotech | Odoo ERP Consulting & Implementation",
		description:
			"Tailored Odoo ERP consulting, implementation, customization, integration, and support for growing businesses.",
		images: ["/background/heroBG.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}>
			<body className="min-h-full flex flex-col bg-blue-100!">
				<Header />
				{children}
				<Footer />
			</body>
			<SmoothScrollLayout />
		</html>
	);
}

