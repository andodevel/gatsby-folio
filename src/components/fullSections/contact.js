import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme, Mixins, Section } from '@styles';
const { colors, width } = Theme;

const StyledContainer = styled(Section)`
  ${Mixins.fullScreen};
`;

const StyledHeading = styled.h3`
  line-height: 1.1;
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

const StyledEmailLink = styled.a`
  ${Mixins.button};
  margin-top: 5rem;
`;

const email = 'ando.devel@gmail.com';
const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;

  return (
    <StyledContainer id="contact">
      <StyledHeading>{title}</StyledHeading>
      <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
      <StyledEmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
        Contact
      </StyledEmailLink>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
