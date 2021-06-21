import React, { useContext } from "react"
import SiteContext, { THEMES } from "../SiteContext"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BannerModule from "./BannerModule"

const PageBannerComponent = ({lightImage, darkImage, title, subTitle, compressed=false, enquire=false}) => {
  const [theme] = useContext(SiteContext);
  if (lightImage.type === StaticImage) {
    return <BannerModule
      title={title}
      subTitle={subTitle}
      compressed={compressed}
      enquire={enquire}
      image={theme === THEMES.dark ? darkImage : lightImage}
    />
  } else {
    const image = getImage(theme === THEMES.dark ? darkImage : lightImage);
    return <BannerModule
      title={title}
      subTitle={subTitle}
      compressed={compressed}
      enquire={enquire}
      image={
        <GatsbyImage
          className="banner__image"
          image={image}
          alt="Product Image"
        />
      }
    />
  }
}

export default PageBannerComponent