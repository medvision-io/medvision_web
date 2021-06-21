import React from 'react';

const Content = ({ body, htmlAst, title, date, readTime }) => (
  <div
    dangerouslySetInnerHTML={{ __html: body }}
  />
);

export default Content;
