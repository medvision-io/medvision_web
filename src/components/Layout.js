import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import SiteContext, { THEMES } from './SiteContext';
import '@fontsource/heebo';

const GlobalStyle = createGlobalStyle`
:root {
  --background: ${props => (props.theme === THEMES.dark ? '#000' : '#fff')};
  --backgroundColorNONE: ${props =>
    props.theme === THEMES.dark
      ? 'rgba(0, 0, 0, 0)'
      : 'rgba(255, 255, 255, 0)'};
  --backgroundColorFULL: ${props =>
    props.theme === THEMES.dark
      ? 'rgba(0, 0, 0, 1)'
      : 'rgba(255, 255, 255, 1)'};
  --fontColor: ${props => (props.theme === THEMES.dark ? '#fff' : '#000')};
  --fontColorSecondary: ${props =>
    props.theme === THEMES.dark ? '#aaa' : '#999'};
  --disabled: ${props => (props.theme === THEMES.dark ? '#aaa' : '#999')};
  --lightFontColor: #fff;
  --darkFontColor: #000;
  --primary: ${props => (props.theme === THEMES.dark ? '#ffc400' : '#fb8500')};
  --bannerTitle: 34px;
  --bannerSubTitle: 20px;
  --borderSpacing: 30px;
  --menuWidth: 100vw;
  --sectionPadding: 70px;
  --h1: 27px;
  --h2: 20px;
  --h3: 18px;
  --p: 15px;
  --body: 12px;
  --blockquote: 20px;
  --paperBackground: ${props =>
    props.theme === THEMES.dark ? 'rgb(28, 28, 28)' : 'rgba(255, 255, 255)'};
  --elevation2: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
  --elevation3: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);

  @media(min-width:375px) {
    --bannerTitle: 42px;
    --bannerSubTitle: 22px;
    --sectionPadding: 80px;
    --h1: 30px;
    --h2: 22px;
    --h3: 20px;
    --p: 16px;
    --body: 13px;
  }

  @media(min-width:414px) {
    --bannerTitle: 50px;
    --bannerSubTitle: 27px;
    --h1: 35px;
    --h2: 27px;
    --h3: 25px;
    --p: 18px;
    --body: 14px;
  }

  @media(min-width:768px) {
    --bannerTitle: 60px;
    --bannerSubTitle: 30px;
    --h1: 38px;
    --h2: 30px;
    --h3: 27px;
    --p: 19px;
    --body: 15px;
    --blockquote: 26px;
  }

  @media(min-width:1024px) {
    --borderSpacing: 75px;
    --h1: 41px;
    --h2: 36px;
    --p: 20px;
    --body: 16px;
  }

  @media(min-width:1152px) {
    --bannerTitle: 50px;
    --bannerSubTitle: 26px;
    --h1: 34px;
    --h2: 26px;
    --h3: 24px;
    --p: 18px;
    --body: 14px;
  }

  @media(min-width:1440px) {
    --borderSpacing: 105px;
    --h1: 38px;
    --h2: 28px;
    --h3: 25px;
    --p: 19px;
    --body: 15px;
  }
}
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}  


body {
    font-family: 'Heebo', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--fontColor);
    overflow-x: hidden;
    font-size: var(--p);
    
  }

h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.25em;

  @media(min-width: 1200px) {
    margin-bottom: 1.5rem;
  }
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--h1);
  font-weight: 900;
}

h2 {
  font-size: var(--h2);
  font-weight: 700;
}

a {
  color: var(--primary);

  &:hover,
  &:focus {
    text-decoration: none;
  }
}

blockquote {
  font-size: var(--blockquote);
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  margin: var(--borderSpacing);
}

a.btn,
button.btn {
    color: var(--fontColor);
    background-color: transparent;
    font-family: 'Heebo', sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 8px;
      background-color: var(--primary);
    }

    &:focus {
      color: var(--primary);
    }

    &:disabled {
      color: var(--disabled);
      &::after {
        background-color: var(--disabled);
      }
    }

    @media(hover: hover) {
      cursor: pointer;
    }
  }

  @media (min-width: 1200px) {
      font-size: var(--menuItem);
    }

  @media (hover: hover) {
    a:hover {
      color: var(--primary);
    }
  }

  .container {
    margin-left: auto;
    margin-right: auto;
  }

  .section-padding {
    padding: var(--paddingStd) var(--paddingBorder);
  }
  
  .section-padding--large {
    padding: var(--paddingLarge) var(--paddingBorder);
  }
`;

const Layout = ({ children }) => {
  const [theme] = useContext(SiteContext);
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  );
};

export default Layout;
