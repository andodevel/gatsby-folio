import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Global } from '@styles';
import Header from './header';
import Footer from './footer';
import LeftBreadcumb from './leftBreadcumb';
import SEO from './seo';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ seoTitle, children }) => {
  const isHome = location.pathname === '/';

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const title = seoTitle ? seoTitle : data.site.siteMetadata.title;

  return (
    <div id="root">
      <SEO title={title} />
      <Global />
      <StyledContent>
        {isHome && (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <LeftBreadcumb />
          </>
        )}
        <div id="content">
          {children}
          {isHome && (
            <>
              <Footer />
            </>
          )}
        </div>
      </StyledContent>
    </div>
  );
};

Layout.propTypes = {
  seoTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
