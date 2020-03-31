import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { Theme, Mixins, Main } from '@styles';
const { colors, fonts } = Theme;

const StyledMainContainer = styled(Main)`
  ${Mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: ${colors.component};
  font-family: ${fonts.secondary};
  font-size: 12vw;
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  ${Mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = ({ location }) => (
  <Layout seoTitle="404: Not found" location={location}>
    <StyledMainContainer className="fillHeight">
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page Not Found</StyledSubtitle>
      <StyledHomeButton to="/">Go Home</StyledHomeButton>
    </StyledMainContainer>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
