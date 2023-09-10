import React from "react";
import { SiNextDotJs } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiCodeship } from "react-icons/si";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider divider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have been working with a range of technologies in the web development
			world in order to deliver the best solution to solve business problems.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="4rem" />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						HTML, CSS, JavaScript and ReactJS
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<SiNextDotJs size="3rem" />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						NodeJS, ExpressJS, API's, SQL and MongoDB
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<SiCodeship size="3rem" />
				<ListContainer>
					<ListTitle>Various</ListTitle>
					<ListParagraph>
						Experience with <br />
						Linux, Bash, Git, Cloud, Jira, Docker, Agile, Scrum
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
