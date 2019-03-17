import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/tag";
import { styled } from "styletron-react";

import globalStyles from "./global-styles.js";
import Link from "./Link";
import mdxComponents from "./DOM.js";

const Header = styled("header", {
  fontFamily: "soleil, sans-serif",
  fontStyle: "normal",
  fontSize: "20px",
  "-webkit-font-smoothing": "subpixel-antialiased",
});

const H1 = styled("h1", {
  display: "inline",
  fontWeight: 600,
  fontSize: "20px",
});

const PlainLink = styled(Link, {
  color: "#222",
  textDecoration: "none",
});

const FancyLink = styled(Link, {
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

const Container = styled("div", {
  font: "20px/1.5 freight-text-pro, serif",
  color: "#222",
  maxWidth: "62ch",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "12px 52px",
  marginTop: "30vmin",
  marginBottom: "8vmin",
  "-webkit-font-smoothing": "antialiased",
});

const Nav = styled("nav", {
  display: "inline",
  ":before": {
    content: '" / "',
  },
});

const BlogTitle = styled("h2", {
  display: "inline",
  fontSize: "inherit",
  fontWeight: "inherit",
});

export default ({ site, frontmatter = {}, children, isBlogIndex }) => {
  const { title, description: siteDescription } = site.siteMetadata;

  const { description: frontmatterDescription } = frontmatter;

  const description = frontmatterDescription || siteDescription;

  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[
          description && { name: "description", content: description },
        ].filter(Boolean)}
      >
        <html lang="en" />
        <style>{globalStyles}</style>
        <link rel="stylesheet" href="https://use.typekit.net/oxy1tfg.css" />
      </Helmet>

      <MDXProvider components={mdxComponents}>
        <Container>
          <Header>
            <H1>
              <PlainLink to="/">Ryan Tsao</PlainLink>
            </H1>
            <Nav>
              {isBlogIndex ? (
                <BlogTitle>
                  <PlainLink to="/blog">Blog</PlainLink>
                </BlogTitle>
              ) : (
                <FancyLink to="/blog">Blog</FancyLink>
              )}
            </Nav>
          </Header>

          {children}
        </Container>
      </MDXProvider>
    </Fragment>
  );
};

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
    }
  }
`;
