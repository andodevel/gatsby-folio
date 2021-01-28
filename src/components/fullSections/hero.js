import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Theme, Mixins, Section } from '@styles';
const { colors, fonts, width } = Theme;

const StyledContainer = styled(Section)`
  ${Mixins.centerScreen};
`;

const StyledOverline = styled.p`
  margin: 0 0 1rem 0.3rem;
  font-family: ${fonts.secondary};
  font-weight: normal;
`;
const StyledTitle = styled.h1`
  line-height: ${Theme.contentLineHeight};
  margin: 0;
`;
const StyledSubtitle = styled.h4`
  line-height: ${Theme.headerLineHeight};
  color: ${colors.primaryComponent};
`;
const StyledDescription = styled.div`
  margin: 3rem 0 0 2rem;
  width: ${width.fullDescription};
  max-width: ${width.maxFullDescription};
  a {
    ${Mixins.link};
  }
`;

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
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
