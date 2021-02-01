import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme, Mixins, Section, Media } from '@styles';
const { colors } = Theme;

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
  width: 70%;
  ${Media.phone`width: 80%;`}
  max-width: 80%;
  ${Media.phone`max-width: 90%;`}
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
      <StyledEmailLink href={`mailto:${email}`}>{contactText}</StyledEmailLink>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
