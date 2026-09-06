import React from 'react'
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function Contact() {
  return (
		<Container className="h-[100vh] bg-orange-100 section-stack">
			<SectionHeading as="h6" title={"Contact"} />
		</Container>
  );
}

export default Contact