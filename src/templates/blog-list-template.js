import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Seo from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import BlogItem from "../components/Blog/BlogItem"
import BlogItems from "../components/Blog/BlogItems"
import { UseSiteMetadata } from "../hooks/useSiteMetadata"
import BannerModule from "../components/BannerModule/BannerModule"
import SiteContext, {THEMES} from "../components/SiteContext"

const Pagination = styled.aside`
  display: flex;
  margin: 0 auto;
  justify-content: center;

  .btn {
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }

    &.btn-active {
      color: var(--primary);

      &:after {
        display: none;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

const Blog = ({data, pageContext}) => {
  const {
    blogPage: { title, subTitle },
  } = UseSiteMetadata();
  const [theme] = useContext(SiteContext);
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`
  const { edges } = data.allMarkdownRemark;
  return (
    <>
      <Seo title="Blogs" />
      <BannerModule title={title} subTitle={subTitle} image={
        theme === THEMES.dark ? <StaticImage
          className="banner__image"
          imgClassName="banner__image--content"
          src="../../images/blog.jpg"
          alt="Hero image"
        /> : <StaticImage
          className="banner__image"
          imgClassName="banner__image--content"
          src="../../images/blog-light.jpg"
          alt="Hero image"
        />} compressed={true}/>
      <BlogItems>
        {edges.map(({ node }) => {
          return <BlogItem key={node.fields.slug} post={node.frontmatter} slug={node.fields.slug} />
        })}
      </BlogItems>
      {numPages > 1 && (
        <Pagination>
          {!isFirst && (
            <Link className="btn" to={prevPage}>
              Prev
            </Link>
          )}

          {Array.from({ length: numPages }, (_, i) => {
            return (
              <Link
                key={i}
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                className={i + 1 === currentPage ? "btn btn-active" : "btn"}
              >
                {i + 1}
              </Link>
            )
          })}
          {!isLast && (
            <Link className="btn" to={nextPage}>
              Next
            </Link>
          )}
        </Pagination>
      )}
    </>
  )
}

export const query = graphql`
  query IndexTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: { draft: { eq: false }, template: { eq: "post" } }
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
                   width: 600
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
export default Blog
