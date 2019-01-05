import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { styled } from "styletron-react";

import { h1 as H1, a as Anchor } from "../components/DOM.js";
import Layout from "../components/Layout";
import { github, twitter } from "../components/icons.js";

const Icon = styled("svg", {
  width: "18px",
  verticalAlign: "middle",
});

const Footer = styled("footer", {
  paddingTop: "60px",
  margin: "0 auto",
  maxWidth: "180px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export default function Post({ data: { site, mdx } }) {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <H1>{mdx.frontmatter.title}</H1>
      <em>{mdx.frontmatter.date}</em>

      <MDXRenderer>{mdx.code.body}</MDXRenderer>

      <Footer>
        <span>
          <Icon viewBox="2 4 60 60" name="twitter">
            {twitter}
          </Icon>{" "}
          <Anchor href="https://twitter.com/rtsao">@rtsao</Anchor>
        </span>
        <span>
          <Icon viewBox="-2 -2 68 68" name="github">
            {github}
          </Icon>{" "}
          <Anchor href="https://github.com/rtsao">@rtsao</Anchor>
        </span>
      </Footer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`;
