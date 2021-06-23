import React  from 'react';
import { socialItems } from '../../constants/links';

const Product = ({ member }) => {
  const { name, title, image } = member;

  return (
    <aside className="team__item">
      <div className="team__item--content">
        <img
          className="team__item--img"
          src={image}
          loading="lazy"
          alt={`Team Member - ${name}`}
        />
        {name && <h2>{name}</h2>}
        {title && <p>{title}</p>}
      </div>

      <div className="social__menu">
        <ul>
          {socialItems.map((item, index) => {
            return (
              member[item.sizeKey] !== '' &&
              member[item.sizeKey] != null && (
                <li key={index}>
                  <a
                    href={member[item.sizeKey]}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    aria-label={`Link to ${item.sizeKey} - ${name}`}
                  >
                    {item.icon}
                  </a>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Product;
