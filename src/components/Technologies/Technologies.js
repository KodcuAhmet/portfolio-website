import React from 'react';
import { SiNextDotJs } from "react-icons/si";
import { DiReact, DiWordpress } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
        <SectionDivider divider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I have been working with a range of technologies in the web development world in order to deliver the best solution to solve business problems.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem"/>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        HTML, CSS, JavaScript and ReactJS
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <SiNextDotJs size="3rem"/>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        NextJS, NodeJS and ExpressJS
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiWordpress size="3rem"/>
                <ListContainer>
                    <ListTitle>CMS: Wordpress</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Wordpress and PHP
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
