import React from 'react'
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function AboutUs() {
  return (
		<Container className="h-[100vh] bg-green-100 section-stack">
			<SectionHeading as="h6" title={"about us"} />
		</Container>
  );
}

export default AboutUs