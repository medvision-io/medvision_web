import React from 'react';
import Seo from '../components/SEO';
import { UseSiteMetadata } from '../hooks/useSiteMetadata';
import MediaLogos from "../components/MediaLogos/MediaLogos"

const media = () => {
  const {
    mediaPage: { title },
  } = UseSiteMetadata();
  return (
    <>
      <Seo title={title} />
      <MediaLogos>
        <h2>{title}</h2>
      </MediaLogos>
    </>
  );
};

export default media;
