import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";

export default ({ data: { site } }) => (
  <Layout site={site}>
    <p>Page not found.</p>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
