import React from 'react';
import {AiFillGithub, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';

import {SocialIcons} from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Location</LinkTitle>
                    <LinkItem href="address: The Hague, Netherlands">The Hague, The Netherlands</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:ahmetcgl@gmail.com">ahmetcgl@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan> Empowering people with the web!</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/ahmet-cigil">
                        <AiFillGithub size="3rem"/>
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/ahmet-cigil">
                        <AiFillLinkedin size="3rem"/>
                    </SocialIcons>
                    <SocialIcons href="https://twitter.com/ahimichal">
                        <AiOutlineTwitter size="3rem"/>
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
