import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Global, Theme } from '@styles';
const { colors, fontSizes, fonts } = Theme;
import Header from './header';
import Footer from './footer';
import LeftBreadcumb from './leftBreadcumb';
import SEO from './seo';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:hover {
    background-color: ${colors.background};
  }
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.component};
    background-color: ${colors.headerBackground};
    border-radius: ${Theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.secondary};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${Theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ seoTitle, children }) => {
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
      <SkipToContent href="#content">Skip to Content</SkipToContent>
      <StyledContent>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LeftBreadcumb />
        <div id="content">
          {children}
          <Footer />
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
