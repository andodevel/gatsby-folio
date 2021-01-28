import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Theme, Mixins, Section } from '@styles';
const { colors, width } = Theme;

const StyledContainer = styled(Section)`
  ${Mixins.centerScreen};
`;

const StyledHeading = styled.h3`
  line-height: ${Theme.headerLineHeight};
  color: ${colors.primaryComponent};
`;

const StyledDescription = styled.div`
  line-height: ${Theme.contentLineHeight};
  margin: 3rem 0 0 2rem;
  width: ${width.fullDescription};
  max-width: ${width.maxFullDescription};
  a {
    ${Mixins.link};
  }
`;

const StyledEmailLink = styled.a`
  ${Mixins.button};
  margin-top: 5rem;
`;

const email = 'ando.devel@gmail.com';
const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, contactText } = frontmatter;

  return (
    <StyledContainer id="contact">
      <StyledHeading>{title}</StyledHeading>
      <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
      <TransitionGroup>
        <CSSTransition classNames="fadeup" timeout={3000}>
          <StyledEmailLink href={`mailto:${email}`}>{contactText}</StyledEmailLink>
        </CSSTransition>
      </TransitionGroup>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
