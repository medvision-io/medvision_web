import { BlogSingleStyles } from './BlogStyles';
import Button from '../Button/Button';
import { Link } from 'gatsby';
import React from 'react';
import dayjs from 'dayjs';
import Content from './Content';

const Post = ({ post }) => {
  const { html } = post;
  const {
    frontmatter: { title, date, author },
  } = post;

  return (
    <section>
      <BlogSingleStyles>
        <h1 className="blogsingle__title">{title}</h1>
        <p className="blogsingle__date">
          Published at {dayjs(date).format('MMM D, YYYY')} - {author}
        </p>
        <article className="blogsingle__content">
          <Content body={html} title={title} date={date} />
          <div className="blogsingle__back">
            <Button to="/posts" text="Back to news" as={Link} />
          </div>
        </article>
      </BlogSingleStyles>
    </section>
  );
};

export default Post;
