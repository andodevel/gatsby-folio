import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme, Mixins, Section } from '@styles';
const { colors } = Theme;

const StyledContainer = styled(Section)`
  ${Mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
`;
const StyledHeading = styled.h2`
  font-size: 4rem;
  line-height: 1.1;
  color: ${colors.component6};
`;
const StyledDescription = styled.div`
  margin: 30px 0 0 20px;
  width: 70%;
  max-width: 1000px;
  a {
    ${Mixins.link};
  }
`;
const StyledEmailLink = styled.a`
  ${Mixins.bigButton};
  margin-top: 50px;
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
