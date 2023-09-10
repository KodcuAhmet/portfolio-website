import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row noPadding>
		<LeftSection>
			<SectionTitle main center>
				Hello.
				<br />
				My name is Ahmet Cigil!
			</SectionTitle>
			<SectionText>
				I'm passionate about building websites with the latest technology.
				<br />
				I optimize websites for best mobile and tablet experience.
				<br />I work with a wide range of technologies, including HTML, CSS,
				JavaScript, ReactJS and more.
			</SectionText>
			<a href="#projects">
				<Button>Learn more</Button>
			</a>
		</LeftSection>
	</Section>
);

export default Hero;
