import React from "react";
import { graphql } from "gatsby";
import { styled } from "styletron-react";

import Layout from "../components/Layout";
import { a as Anchor } from "../components/DOM.js";

import { twitter, github } from "../components/icons.js";

const Icon = styled("svg", {
  width: "18px",
  verticalAlign: "middle",
  marginLeft: "-28px",
  color: "black",
  marginRight: "10px",
});

const List = styled("ul", {
  listStyleType: "none",
  padding: 0,
});

const ListItem = styled("li", {
  marginBottom: "12px",
});

export default function Index({ data: { site } }) {
  return (
    <Layout site={site}>
      <p>Hi, I'm a software engineer currently based in San Francisco.</p>
      <List>
        <ListItem>
          <Icon viewBox="2 4 60 60" name="twitter">
            {twitter}
          </Icon>
          <Anchor href="https://twitter.com/rtsao">@rtsao</Anchor>
        </ListItem>
        <ListItem>
          <Icon viewBox="-2 -2 68 68" name="github">
            {github}
          </Icon>
          <Anchor href="https://github.com/rtsao">github.com/rtsao</Anchor>
        </ListItem>
      </List>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
