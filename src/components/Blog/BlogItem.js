import React, { useContext } from "react"
import { Link } from 'gatsby';
import { BlogItemStyles } from './BlogStyles';
import dayjs from 'dayjs';
import Button from '../Button/Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SiteContext, { THEMES } from "../SiteContext"

const BlogItem = ({ post, slug }) => {
  const [theme] = useContext(SiteContext);
  const { title, date, description, featuredImage, featuredImageDark } = post;
  const image = getImage(theme === THEMES.dark ? featuredImageDark : featuredImage);

  return (
    <BlogItemStyles>
      <h2>
        <Link to={'/posts/' + slug}>{title}</Link>
      </h2>
      <GatsbyImage
        className="features__item--img"
        image={image}
        alt="Product Image"
      />
      <p>{description}</p>
      <div className="blogitem__meta">
        <Button text="Read More" as={Link} to={'/posts/' + slug} />
        <p>{dayjs(date).format('MMM D, YYYY')}</p>
      </div>
    </BlogItemStyles>
  );
};

export default BlogItem;
