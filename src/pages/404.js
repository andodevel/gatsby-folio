import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, SEO } from '@components';
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

const NotFoundPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout location={location}>
      <SEO title="404: Not found" />
      {isMounted && (
        <StyledMainContainer className="fillHeight">
          <StyledTitle>404</StyledTitle>
          <StyledSubtitle>Page Not Found</StyledSubtitle>
          <StyledHomeButton to="/">Go Home</StyledHomeButton>
        </StyledMainContainer>
      )}
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
