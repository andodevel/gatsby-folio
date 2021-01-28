import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme, Mixins, Header as StyledHeader } from '@styles';
const { fonts } = Theme;

const StyledContainer = styled(StyledHeader)``;

const StyledNav = styled.nav`
  ${Mixins.flexBetween};
  position: relative;
  width: 100%;
`;

const StyledLogo = styled.div`
  ${Mixins.flexCenter};
  font-family: ${fonts.primary};
  a {
    font-weight: 500;
    display: block;
  }
`;

const StyledLink = styled.div`
  display: flex;
  align-items: center;
`;

const StyledList = styled.ol`
  ${Mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  margin: 0 0.5rem;
  position: relative;
`;

const StyledListLink = styled(Link)`
  padding: 1.2rem 1rem;
`;

const navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Jobs',
    url: '/#jobs',
  },
  {
    name: 'Projects',
    url: '/#projects',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
];

const Header = ({ isHome }) => (
  <StyledContainer>
    <StyledNav>
      <StyledLogo tabindex="-1">
        <a href={isHome ? '/#' : '/'} aria-label="home">
          Home
        </a>
      </StyledLogo>

      <StyledLink>
        <StyledList>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <StyledListItem key={i}>
                <StyledListLink to={url}>{name}</StyledListLink>
              </StyledListItem>
            ))}
        </StyledList>
      </StyledLink>
    </StyledNav>
  </StyledContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  isHome: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  isHome: false,
};

export default Header;
