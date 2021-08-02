import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TeamMembersStyles } from "./TeamMembersStyles"
import TeamMember from "./TeamMember"

const getProducts = graphql`
  query TeamMembers {
    site {
      siteMetadata {
        team {
          name
          title
          image
          email
          facebook
          github
          instagram
          linkedin
          medium
          snapchat
          skype
          twitch
          twitter
          whatsapp
          www
          youtube
        }
      }
    }
  }
`

const TeamMembers = () => {
  const response = useStaticQuery(getProducts)

  return (
    <TeamMembersStyles>
      <h1>Meat The Team</h1>
      <div className="team__container">
        <div className="team__container--scroll">
          {response.site.siteMetadata.team.map((tm) => {
            return <TeamMember key={tm.name} member={tm} />
          })}
        </div>
      </div>
    </TeamMembersStyles>
  )
}

export default TeamMembers
