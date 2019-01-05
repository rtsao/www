const path = require("path");
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    createPage({
      path: node.fields.slug,
      component: componentWithMDXScope(
        path.resolve(`./src/templates/post.js`),
        node.code.scope,
        __dirname,
      ),
      context: {
        id: node.id,
      },
    });
  });
};

const createBlog = (createPage, edges) => {
  edges.forEach((page, index) => {
    createPage({
      path: index > 0 ? `/blog/${index}` : `/blog`,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        page: page,
      },
    });
  });
};

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              title
              slug
            }
            code {
              scope
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors);
    }

    const { edges } = data.allMdx;

    createBlog(actions.createPage, edges);
    createPosts(actions.createPage, edges);
  });

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        $components: path.resolve(__dirname, "src/components"),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    createNodeField({
      name: "id",
      node,
      value: node.id,
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title,
    });

    createNodeField({
      name: "description",
      node,
      value: node.frontmatter.description,
    });

    const slug =
      "/" +
      path.relative(
        path.join(__dirname, "src/"),
        node.fileAbsolutePath.replace(/\/index\.(md|js)$/, ""),
      );

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });

    createNodeField({
      name: "date",
      node,
      value: node.frontmatter.date || "",
    });
  }
};
