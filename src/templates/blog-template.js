import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/SEO';
import { UseSiteMetadata } from "../hooks/useSiteMetadata"
import Post from '../components/Blog/Post';

const Blog = ({ data: { markdownRemark } }) => {
  const { title: siteTitle} = UseSiteMetadata();
  const {
    frontmatter: { title: postTitle },
  } = markdownRemark;

  return (
    <>
      <Seo title={`${postTitle} - Blog`} />
      <Post post={markdownRemark} />
    </>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
        date
        title
        author
      }
      html
      htmlAst
    }
  }
`;

export default Blog;
