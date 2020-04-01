import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme, Mixins, Section } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled(Section)`
  ${Mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.p`
  margin: 0 0 20px 3px;
  color: ${colors.component};
  font-size: ${fontSizes.xl};
  font-family: ${fonts.secondary};
  font-weight: normal;
`;
const StyledTitle = styled.h1`
  color: ${colors.component4};
  font-size: 8rem;
  line-height: 1.5;
  margin: 0;

  &:before {
    color: ${colors.component};
    content: "I'm";
    font-family: ${fonts.secondary};
    font-weight: normal;
    font-size: ${fontSizes.xl};
    padding-right: 2rem;
  }
`;
const StyledSubtitle = styled.h2`
  font-size: 40px;
  line-height: 1.1;
  color: ${colors.component6};
`;
const StyledDescription = styled.div`
  margin-top: 30px;
  width: 50%;
  max-width: 600px;
  a {
    ${Mixins.inlineLink};
  }
`;
const StyledEmailLink = styled.a`
  ${Mixins.bigButton};
  margin-top: 50px;
`;

const email = 'ando.devel@gmail.com';

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        <CSSTransition classNames="fadeup" timeout={3000}>
          <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
        </CSSTransition>

        <CSSTransition classNames="fadeup" timeout={3000}>
          <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}</StyledTitle>
        </CSSTransition>

        <CSSTransition classNames="fadeup" timeout={3000}>
          <StyledSubtitle style={{ transitionDelay: '300ms' }}>
            {frontmatter.subtitle}
          </StyledSubtitle>
        </CSSTransition>

        <CSSTransition classNames="fadeup" timeout={3000}>
          <StyledDescription
            style={{ transitionDelay: '400ms' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </CSSTransition>
        <CSSTransition classNames="fadeup" timeout={3000}>
          <StyledEmailLink href={`mailto:${email}`}>{frontmatter.contactText}</StyledEmailLink>
        </CSSTransition>
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;