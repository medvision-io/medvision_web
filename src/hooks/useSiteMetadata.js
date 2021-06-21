import { useStaticQuery, graphql } from 'gatsby';

const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            copyright
            author
            twitter
            github
            linkedin
            facebook
            instagram
            siteUrl
            blogPage {
              title
              subTitle
            }
            productsPage {
              title
              subTitle
            }
            contactPage {
              title
              subTitle
            }
            home {
              title
              subTitle
              productsTitle
              productsDesc
              perks {
                title
                description
                image
              }
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export { UseSiteMetadata };
