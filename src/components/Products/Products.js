import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProductsStyles } from "./ProductsStyles"
import Product from "./Product"

const getProducts = graphql`
  query Products {
    allMarkdownRemark(
      filter: {
        frontmatter: { draft: { eq: false }, template: { eq: "product" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
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
  const products = response.allMarkdownRemark.edges

  return (
    <ProductsStyles>
      <div className="features__container">
        <div className="features__container--scroll">
          {products.map(({ node }) => {
            return <Product key={node.frontmatter.title} product={node.frontmatter} slug={node.fields.slug} />
          })}
        </div>
      </div>
    </ProductsStyles>
  )
}

export default Features
