import React from 'react';
import { socialItems } from '../../constants/links';

const Partner = ({ partner }) => {
  const { subtitle, title, descriptions, avatar, image, social } = partner;

  return (
    <aside className="partners__item">
      <div className="partners__item--avatar">
        <img src={avatar} loading="lazy" alt={`Partner - ${title}`} />
      </div>
      <div className="partners__item--container">
        <div className="partners__item--content">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
          {descriptions && descriptions.map(el => <span style={{fontStyle: el.charAt(0) === '"' && el.charAt(el.length - 1) === '"' ? 'italic' : 'inherit'}}>{el}</span>)}
        </div>

        <div className="social__menu">
          <ul>
            {socialItems.map((item, index) => {
              return (
                social[item.sizeKey] !== '' &&
                social[item.sizeKey] != null && (
                  <li key={index}>
                    <a
                      href={
                        item.sizeKey === 'email'
                          ? `mailto:${social[item.sizeKey]}`
                          : social[item.sizeKey]
                      }
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                      title={`${item.sizeKey.toUpperCase()} - ${title}`}
                      aria-label={`Link to ${item.sizeKey} - ${title}`}
                    >
                      {item.icon}
                    </a>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
      {image && (
        <div className="partners__item--image" style={{backgroundImage: `url(${image})`}}>
        </div>
      )}
    </aside>
  );
};

export default Partner;
