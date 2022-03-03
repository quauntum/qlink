import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import mobileMedia from '../../utils/mobileMedia';
import getLandingLink from '../../utils/getLandingLink';

const COPYRIGHT = [
  {
    title: 'Terms of Service',
    href: `${getLandingLink()}/legal/terms`
  },
  {
    title: 'Privacy Policy',
    href: `${getLandingLink()}/legal/privacy`
  }
];

const scrollToTop = () => {
  window.scroll(0, 0);
};

const Footer = ({ className }: { className?: string }) => {
  return (
    <FooterRoot className={className}>
      <FooterLeft>
        Copyright © {new Date().getFullYear()} Luka, Inc. All rights reserved.
      </FooterLeft>
      <FooterRight>
        {COPYRIGHT.map(item =>
          item.href.indexOf('http') !== 0 ? (
            <StyledLink key={item.title} to={item.href} onClick={scrollToTop}>
              {item.title}
            </StyledLink>
          ) : (
            <StyledA
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={scrollToTop}
            >
              {item.title}
            </StyledA>
          )
        )}
      </FooterRight>
    </FooterRoot>
  );
};

export default Footer;

const FooterRoot = styled.footer`
  font-weight: 400;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: ${p => p.theme.fgColor};
  ${mobileMedia`
    font-size: 14px;
    flex-direction: column;
  `};
`;

const StyledA = styled.a`
  color: inherit;
  opacity: 0.5;
  transition: opacity 0.3s ease-in;
  line-height: 2.5em;
  line-height: 1em;
  text-decoration: underline;

  ${mobileMedia`
    text-align: center;
  `};

  &:hover {
    opacity: 1;
  }

  & + & {
    margin-left: 20px;
  }
`;

// see https://github.com/styled-components/styled-components/pull/1739
const StyledLink = StyledA.withComponent(Link);

const FooterLeft = styled.div`
  opacity: 0.5;
  ${mobileMedia`
    text-align: center;
    margin-bottom: 20px;
  `};
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  ${mobileMedia`
    justify-content: center;
  `};
`;
