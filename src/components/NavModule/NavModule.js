import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import MenuContext from '../MenuContext';
import SiteContext, { THEMES } from "../SiteContext"
import { NavModuleStyles } from './NavModuleStyles';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { menuItems } from './NavConstants';
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
} from './NavAnim';
import { UseSiteMetadata } from '../../hooks/useSiteMetadata';

import logoLight from './medvision_light_logo.svg';
import logo from './medvision_logo.svg';

const NavModule = () => {
  const [isOpen, setNav] = useContext(MenuContext);
  const [theme, setTheme] = useContext(SiteContext);
  const [logoSmall, setLogoSmall] = useState(false);

  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  };
  const toggleMode = () => {
    setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y < -200 && !logoSmall) {
        setLogoSmall(true);
      }
      if (currPos.y > -200 && logoSmall) {
        setLogoSmall(false);
      }
    },
    [logoSmall]
  );

  const { title } = UseSiteMetadata();

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <motion.button
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            onClick={toggleNav}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            className={`hamburger${isOpen ? ' open' : ''}`}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </motion.button>

          {title && (
            <div className={logoSmall ? 'logo logo--small' : 'logo'}>
              <img src={theme === THEMES.light ? logo : logoLight} alt="logo" />
              <Link to="/">
                {title}
                <span>.</span>
              </Link>
            </div>
          )}
          <div className="container-placeholder" />
          <div className="theme-button-container">
            <button
              className="theme-button"
              aria-label="Toggle color mode"
              onClick={toggleMode}
              title="Toggle color mode"
            >
              <div className={`sun ${theme === THEMES.light ? 'visible' : ''}`} />
              <div className={`moon ${theme === THEMES.dark ? 'visible' : ''}`}>
                <div className="star" />
                <div className="star small" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuList}
        transition={{ type: 'ease', stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                key={index}
                to={item.path}
                activeClassName="menu__item--active"
              >
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </NavModuleStyles>
  );
};

export default NavModule;
