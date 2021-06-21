import React  from 'react';
import Products from '../components/Products/Products';
import Seo from '../components/SEO';
import { StaticImage } from 'gatsby-plugin-image';
import { UseSiteMetadata } from '../hooks/useSiteMetadata';
import PageBannerComponent from '../components/BannerModule/PageBanner';

const products = () => {
  const {
    productsPage: { title, subTitle },
  } = UseSiteMetadata();
  return (
    <>
      <Seo title="Products" />

      <PageBannerComponent
        lightImage={
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/products-light.jpg"
            alt="Hero image"
          />
        }
        darkImage={
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/products.jpg"
            alt="Hero image"
          />
        }
        title={title}
        subTitle={subTitle}
        compressed={true}
      />
      <Products />
    </>
  );
};

export default products;
