const kebabCase = require('just-kebab-case');
const dayjs = require('dayjs');

const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug,
      });
    } else {
      createNodeField({
        node,
        name: 'slug',
        value: `${dayjs(node.frontmatter.date).format('YYYY/MM')}/${kebabCase(
          node.frontmatter.title
        )}`,
      });
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tag/${kebabCase(tag)}/`
      );
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }
  }
};

module.exports = onCreateNode;
