const path = require('path');
const createPostsPages = require('./create-post-pages');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data
  } = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              template
            }
          }
        }
      }
    }
  `);

  const { allMarkdownRemark } = data

  allMarkdownRemark.edges.forEach(({node}) => {
    const { frontmatter: { template }, fields: { slug }} = node
    if (node == null) {
      return false;
    }
    if (template === 'product') {
      createPage({
        path: `products/${slug}`,
        component: path.resolve('src/templates/product-template.js'),
        context: {
          slug: slug,
        },
      });
    }
    if (template === 'post') {
      createPage({
        path: `posts/${slug}`,
        component: path.resolve('src/templates/blog-template.js'),
        context: {
          slug: slug,
        },
      });
    }

    if (template == null) {
      console.warn(`Markdown edge ${node} has no "template" attribution`);
    }
  });

  await createPostsPages(graphql, actions);
};

module.exports = createPages;
