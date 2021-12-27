import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = (props) => (
    <Section row noPadding>
        <LeftSection>
            <SectionTitle main center>
                Hi.<br/>
                My name is Ahmet Cigil!
            </SectionTitle>
            <SectionText>
                I build great websites with the latest techologies...<br/>
                I optimize websites for user-firendly mobile and tablet experience...<br/>
                I use the latest technologies such as HTML, CSS, JavaScript, ReactJS, NextJS and much more...
            </SectionText>
            <a href="#projects"><Button>Learn more</Button></a>
        </LeftSection>
    </Section>
);

export default Hero;