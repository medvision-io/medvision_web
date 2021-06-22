import React from 'react';
import { Link } from 'gatsby';
import { menuItems, socialItems } from '../../constants/links';
import { FooterStyles } from './FooterStyles';
import { UseSiteMetadata } from '../../hooks/useSiteMetadata';

const Footer = () => {
  const siteData = UseSiteMetadata();
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__menu">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social__menu">
          <ul>
            {socialItems.map((item, index) => {
              return (
                siteData[item.sizeKey] !== '' &&
                siteData[item.sizeKey] != null && (
                  <li key={index}>
                    <a
                      href={siteData[item.sizeKey]}
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                    >
                      {item.icon}
                    </a>
                  </li>
                )
              );
            })}
          </ul>
        </div>
        <div className="copyright">
          <p>{siteData.copyright}</p>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
