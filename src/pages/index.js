import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, my name is</h1>
    <p>An Do</p>
    <p>A full-stack Java developer with passion of building thing</p>
    <div style={{ maxWidth: `30rem`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Next page</Link>
  </Layout>
);

export default IndexPage;
