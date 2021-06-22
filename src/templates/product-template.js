import React from "react"
import { graphql } from 'gatsby';
import Seo from '../components/SEO';
import PageBannerComponent from '../components/BannerModule/PageBanner';
import ProductContainer from '../components/Products/ProductContainer';
import { UseSiteMetadata } from '../hooks/useSiteMetadata';

const productTemplate = ({ data }) => {
  const { title: siteTitle } = UseSiteMetadata();
  const {
    frontmatter: { title, featuredImage, featuredImageDark },
  } = data.markdownRemark;

  return (
    <>
      <Seo title={`${title}`} />
      <PageBannerComponent lightImage={featuredImage} darkImage={featuredImageDark} title={title} enquire={true} />
      <ProductContainer product={data.markdownRemark} />
    </>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
        title
        featuredImage {
          childImageSharp {
             gatsbyImageData(
               width: 1920
               placeholder: BLURRED
               formats: [AUTO, WEBP, AVIF]
             )
          }
        }
        featuredImageDark {
          childImageSharp {
             gatsbyImageData(
               width: 1920
               placeholder: BLURRED
               formats: [AUTO, WEBP, AVIF]
             )
          }
        }
      }
      html
    }
  }
`;

export default productTemplate;
