import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProductsStyles } from "../Products/ProductsStyles"
import Product from "../Products/Product"

const getProducts = graphql`
  query Features {
    featuredProducts: allMarkdownRemark(
      filter: {
        frontmatter: { features: { eq: true }, draft: { eq: false }, template: { eq: "product" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            description
            title
            featuredImage {
              childImageSharp {
                 gatsbyImageData(
                   width: 500
                   placeholder: BLURRED
                   formats: [AUTO, WEBP, AVIF]
                 )
              }
            }
            featuredImageDark {
              childImageSharp {
                 gatsbyImageData(
                   width: 500
                   placeholder: BLURRED
                   formats: [AUTO, WEBP, AVIF]
                 )
              }
            }
          }
        }
      }
    }
  }
`

const Features = () => {
  const response = useStaticQuery(getProducts)
  const products = response.featuredProducts.edges

  return (
    <ProductsStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {products.map(({ node }) => {
            return <Product key={node.fields.slug} product={node.frontmatter} slug={node.fields.slug} />
          })}
        </div>
      </div>
    </ProductsStyles>
  )
}

export default Features
