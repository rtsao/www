import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { styled } from "styletron-react";

import Layout from "../components/Layout";
import Link from "../components/Link";

const Anchor = styled(Link, {
  textDecoration: "none",
  borderBottom: "2px solid #CFF3FF",
  boxShadow: "inset 0 -9px 0 #EEFBFF",
  transition: "box-shadow ease 160ms",
  color: "#222",
  ":hover": {
    boxShadow: "inset 0 -1.2em 0 #CFF3FF",
  },
  ":active": {
    boxShadow: "inset 0 -1.2em 0 #CFF3FF",
  },
});

const List = styled("ul", {
  listStyleType: "none",
  padding: 0,
});

const BlogEntry = styled("li", {
  paddingBottom: "22px",
});

const BlogTitle = styled("h2", {
  fontFamily: "soleil,sans-serif",
  "-webkit-font-smoothing": "subpixel-antialiased",
  fontSize: "26px",
  fontWeight: "normal",
  marginBottom: "12px",
  marginTop: "0px",
});

const Blog = ({ data: { site, allMdx } }) => {
  const posts = allMdx.edges;

  return (
    <Layout
      site={site}
      frontmatter={{ description: "Ryan Tsao's blog" }}
      isBlogIndex
    >
      <Helmet>
        <title>Ryan Tsao - Blog</title>
      </Helmet>
      <List>
        {posts.map(({ node: post }) => (
          <BlogEntry key={post.id}>
            <BlogTitle>
              <Anchor to={post.fields.slug}>{post.frontmatter.title}</Anchor>
            </BlogTitle>
            <em>{post.frontmatter.date}</em>
          </BlogEntry>
        ))}
      </List>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
