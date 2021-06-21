import React from 'react';
import Contact from '../components/Contact/Contact';
import Seo from '../components/SEO';
import { UseSiteMetadata } from '../hooks/useSiteMetadata';
import { StaticImage } from 'gatsby-plugin-image';
import PageBannerComponent from "../components/BannerModule/PageBanner"

const contact = () => {
  const {
    contactPage: { title, subTitle },
  } = UseSiteMetadata();
  return (
    <>
      <Seo title={title} />
      <PageBannerComponent
        lightImage={
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/contact-light.jpg"
            alt="Hero image"
          />
        }
        darkImage={
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/contact.jpg"
            alt="Hero image"
          />
        }
        title={title}
        subTitle={subTitle}
      />
      <Contact />
    </>
  );
};

export default contact;
