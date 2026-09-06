import AboutUs from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";
import ERPModules from "@/components/sections/ERPModules";
import ERPTransformationProcess from "@/components/sections/ERPTransformationProcess";
import Hero from "@/components/sections/Hero";
import ImplementationPhilosophy from "@/components/sections/ImplementationPhilosophy";
import IndustriesWeServe from "@/components/sections/IndustriesWeServe";
import OurServices from "@/components/sections/OurServices";
import WhyBenfexal from "@/components/sections/WhyBenfexal";

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<OurServices />
			<WhyBenfexal />
			<IndustriesWeServe />
			<ERPModules />
			<ERPTransformationProcess />
			<ImplementationPhilosophy />
			<Contact />
		</>
	);
}
