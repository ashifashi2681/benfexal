import AboutUs from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";
import ERPModules from "@/components/sections/ERPModules";
import ERPTransformationProcess from "@/components/sections/ERPTransformationProcess";
import Hero from "@/components/sections/Hero";
import ImplementationPhilosophy from "@/components/sections/ImplementationPhilosophy";
import IndustriesWeServe from "@/components/sections/IndustriesWeServe";
import OurServices from "@/components/sections/OurServices";
import StackScroll from "@/components/ui/StackScroll";
import WhyBenfexal from "@/components/sections/WhyBenfexal";

const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Benfexal Infotech",
	url: "https://www.benfexal.com",
	description:
		"Odoo ERP consulting and implementation company helping businesses streamline operations, automate workflows, and improve real-time visibility.",
	areaServed: ["India", "GCC"],
	knowsAbout: [
		"Odoo ERP consulting",
		"ERP implementation",
		"ERP customization",
		"Business process automation",
	],
};

const serviceJsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Odoo ERP Consulting and Implementation",
	provider: {
		"@type": "Organization",
		name: "Benfexal Infotech",
	},
	areaServed: ["India", "GCC"],
	serviceType: "ERP consulting, implementation, customization, and support",
	description:
		"Tailored Odoo ERP solutions for streamlining operations, automating workflows, integrating business systems, and improving operational visibility.",
};

export default function Home() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify([organizationJsonLd, serviceJsonLd]),
				}}
			/>
			<Hero />
			<AboutUs />
			<OurServices />
			<WhyBenfexal />
			<IndustriesWeServe />
			<ERPModules />
			<ERPTransformationProcess />
			<ImplementationPhilosophy />
			{/* <Contact /> */}
			<StackScroll />
		</>
	);
}
