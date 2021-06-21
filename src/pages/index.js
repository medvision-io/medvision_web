import React, { useContext } from "react"
import Seo from '../components/SEO';
import BannerModule from '../components/BannerModule/BannerModule';
import BasicTextModule from '../components/BasicTextModule/BasicTextModule';
import PerksModule from '../components/PerksModule/PerksModule';
import Perk from '../components/PerksModule/Perk';
import Features from '../components/Features/Features';
import { UseSiteMetadata } from '../hooks/useSiteMetadata';
import { StaticImage } from 'gatsby-plugin-image';
import SiteContext, { THEMES } from "../components/SiteContext"

const Index = () => {
  const {
    home: { title, subTitle, perks, productsTitle, productsDesc },
  } = UseSiteMetadata();
  const [theme] = useContext(SiteContext);
  return (
    <>
      <Seo title="Home" />
      <BannerModule
        title={title}
        subTitle={subTitle}
        image={
          theme === THEMES.dark ? <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/hero-image.jpg"
            alt="Hero image"
          /> : <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/hero-image-light.jpg"
            alt="Hero image"
          />
        }
      />
      <BasicTextModule title={productsTitle} description={productsDesc} />
      <PerksModule perks={perks}>
        <Perk title="The Title" content="The content" />
      </PerksModule>
      <Features />
    </>
  );
};

export default Index;
