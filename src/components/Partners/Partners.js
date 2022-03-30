import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Partner from "./Partner"
import { PartnersStyles } from "./PartnersStyles"

const getPartners = graphql`
  query Partners {
    site {
      siteMetadata {
        partners {
          title
          avatar
          image
          subtitle
          descriptions
          social {
            www
            demo
          }
        }
      }
    }
  }
`

const Partners = () => {
  const response = useStaticQuery(getPartners)

  return (
    <PartnersStyles>
      <h1>Our partners</h1>
      <div className="partners__container">
        <div className="partners__container--scroll">
          {response.site.siteMetadata.partners.map((el) => {
            return <Partner key={el.title} partner={el} />
          })}
        </div>
      </div>
    </PartnersStyles>
  )
}

export default Partners
