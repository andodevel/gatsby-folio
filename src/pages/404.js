import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { Theme, Mixins, Main } from '@styles';
const { colors } = Theme;

const StyledMainContainer = styled(Main)`
  ${Mixins.centerScreen};
  color: ${colors.errPage};
`;

const StyledTitle = styled.h1`
  color: ${colors.errPage};
`;

const StyledSubtitle = styled.h2`
  color: ${colors.errPage};
`;

const StyledHomeButton = styled(Link)`
  ${Mixins.button};
  margin-top: 4rem;
`;

const NotFoundPage = ({ location }) => (
  <Layout seoTitle="404: Not found" location={location}>
    <StyledMainContainer>
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page Not Found</StyledSubtitle>
      <StyledHomeButton to="/">Sweet Home</StyledHomeButton>
    </StyledMainContainer>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
