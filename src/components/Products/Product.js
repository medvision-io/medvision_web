import React, { useContext } from "react"
import { Link } from 'gatsby';
import Button from '../Button/Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SiteContext, { THEMES } from "../SiteContext"

const Product = ({ product, slug }) => {
  const [theme] = useContext(SiteContext);
  const { title, description, featuredImage, featuredImageDark } = product;
  const image = getImage(theme === THEMES.dark ? featuredImageDark : featuredImage);

  return (
    <aside className="features__item">
      <Link to={`/products/${slug}`}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt={`Product Image - ${title}`}
        />
        <div className="features__item--content">
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          <Button text="Read More" as="span" />
        </div>
      </Link>
    </aside>
  );
};

export default Product;
