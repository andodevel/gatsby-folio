import React, { Component } from 'react';
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
  padding: 0px 20px;
  background-color: ${colors.headerBackground};
  transition: ${Theme.transition};
  z-index: 10;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: auto;
  min-height: 40px;
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
    font-weight: 550;
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
  margin: 0 5px;
  position: relative;
  font-size: ${fontSizes.smish};
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

const navHeight = 100;

class Header extends Component {
  state = {
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  handleScroll = () => {
    const { scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!Math.abs(lastScrollTop - fromTop) <= DELTA) {
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

  render() {
    const { scrollDirection } = this.state;
    const { siteTitle } = this.props;
    const timeout = 3000;
    const fadeClass = 'fade';
    const fadeDownClass = 'fadedown';

    return (
      <StyledContainer scrollDirection={scrollDirection}>
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

            <TransitionGroup component={null}>
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div style={{ transitionDelay: `${navLinks.length * 100}ms` }}>
                  <StyledResumeButton
                    href="/resume.pdf"
                    target="_blank"
                    rel="nofollow noopener noreferrer">
                    Résumé
                  </StyledResumeButton>
                </div>
              </CSSTransition>
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
