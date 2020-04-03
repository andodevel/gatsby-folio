import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme, Mixins } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled.header`
  ${Mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0 2rem;
  background-color: ${colors.headerBackground};
  transition: ${Theme.transition};
  z-index: 10;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: auto;
  min-height: 4rem;
  box-shadow: 0 0.3rem 0.5rem -0.3rem ${colors.headerBackground};
`;

const StyledNav = styled.nav`
  ${Mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.component};
  font-family: ${fonts.secondary};
  z-index: 10;
`;

const StyledLogo = styled.div`
  ${Mixins.flexCenter};
  a {
    font-weight: 600;
    display: block;
    color: ${colors.component};
    &:hover,
    &:focus {
      svg {
        fill: ${colors.component};
      }
    }
    svg {
      fill: none;
      transition: ${Theme.transition};
      user-select: none;
    }
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
  font-size: ${fontSizes.smish};
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

const Header = props => {
  const { siteTitle } = props;
  const timeout = 3000;
  const fadeClass = 'fade';
  const fadeDownClass = 'fadedown';

  return (
    <StyledContainer>
      <StyledNav>
        <TransitionGroup component={null}>
          <CSSTransition classNames={fadeClass} timeout={timeout}>
            <StyledLogo tabindex="-1">
              <a href="/" aria-label="home">
                {siteTitle}
              </a>
            </StyledLogo>
          </CSSTransition>
        </TransitionGroup>

        <StyledLink>
          <StyledList>
            <TransitionGroup component={null}>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                    <StyledListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                      <StyledListLink to={url}>{name}</StyledListLink>
                    </StyledListItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </StyledList>
        </StyledLink>
      </StyledNav>
    </StyledContainer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
