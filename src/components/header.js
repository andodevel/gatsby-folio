import React, { Component } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme, Mixins } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled.header`
  ${Mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.headerBackground};
  transition: ${Theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? Theme.navHeight : Theme.navScrollHeight)};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${Theme.navScrollHeight}` : '0px')}
  );
`;
const StyledNav = styled.nav`
  ${Mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.component};
  font-family: ${fonts.secondary};
  counter-reset: item 0;
  z-index: 12;
`;
const StyledLogo = styled.div`
  ${Mixins.flexCenter};
  a {
    display: block;
    color: ${colors.component};
    width: 42px;
    height: 42px;
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
const StyledHamburger = styled.div`
  ${Mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${Theme.hamburgerWidth}px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: ${colors.component};
  position: absolute;
  width: ${Theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${Theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.component};
    position: absolute;
    left: auto;
    right: 0;
    width: ${Theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? Theme.hamBeforeActive : Theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? Theme.hamAfterActive : Theme.hamAfter)};
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
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.smish};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${colors.component};
    font-size: ${fontSizes.xs};
  }
`;
const StyledListLink = styled(Link)`
  padding: 12px 10px;
`;
const StyledResumeButton = styled.a`
  ${Mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smish};
`;

const DELTA = 5;

const navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Experience',
    url: '/#jobs',
  },
  {
    name: 'Work',
    url: '/#projects',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
];

const navHeight = 100;

class Header extends Component {
  state = {
    isMounted: false,
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = e => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state;
    const { siteTitle } = this.props;
    const timeout = 3000;
    const fadeClass = 'fade';
    const fadeDownClass = 'fadedown';

    return (
      <StyledContainer scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? 'blur' : ''} />
        </Helmet>
        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledLogo tabindex="-1">
                  <a href="/" aria-label="home">
                    {siteTitle}
                  </a>
                </StyledLogo>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledHamburger onClick={this.toggleMenu}>
                  <StyledHamburgerBox>
                    <StyledHamburgerInner menuOpen={menuOpen} />
                  </StyledHamburgerBox>
                </StyledHamburger>
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledLink>
            <StyledList>
              <TransitionGroup component={null}>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                      <StyledListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                        <StyledListLink to={url}>{name}</StyledListLink>
                      </StyledListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </StyledList>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                  <div style={{ transitionDelay: `${navLinks.length * 100}ms` }}>
                    <StyledResumeButton
                      href="/resume.pdf"
                      target="_blank"
                      rel="nofollow noopener noreferrer">
                      Resume
                    </StyledResumeButton>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </StyledLink>
        </StyledNav>
      </StyledContainer>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
