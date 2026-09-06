import React from 'react'
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function OurServices() {
  return (
		<Container className="h-[100vh] bg-red-100 section-stack">
			<SectionHeading as="h6" title={"our services"} />
		</Container>
  );
}

export default OurServices