import styled from 'styled-components';

export const NavModuleStyles = styled.nav`
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 20px var(--borderSpacing) 0 var(--borderSpacing);

    @media (min-width: 1024px) {
      padding-top: 50px;
    }

    @media (min-width: 1440px) {
      padding-top: 70px;
    }
  }

  .hamburger {
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }

    .bar {
      display: block;
      background-color: var(--primary);
      height: 4px;
      border-radius: 4px;

      &:nth-of-type(2) {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }

  .logo {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.5px;
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      color: var(--fontColor);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    @media (min-width: 600px) {
      font-size: 25px;
    }

    @media (min-width: 1024px) {
      font-size: 25px;
      flex-direction: column;
    }

    img {
      max-height: 50px;
      //margin-bottom: 20px;

      @media (min-width: 600px) {
        max-height: 80px;
        margin-right: 12px;
      }

      @media (min-width: 1024px) {
        max-height: 100px;
      }
    }


    span {
      color: var(--primary);
    }

    &:hover,
    &:focus {
      a {
        color: var(--primary);
      }
    }

    &--small {
      flex-direction: row;
      align-items: center;
      img {
        max-height: 50px;
        margin-bottom: 0;
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  
  .container-placeholder {
    display: block;
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .menu {
    background-color: var(--background);
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth) * -1));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px var(--borderSpacing);
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      text-transform: capitalize;
      letter-spacing: -0.5px;
      font-size: 28px;

      @media (min-width: 375px) {
        font-size: 36px;
      }

      @media (min-width: 414px) {
        font-size: 40px;
      }

      a {
        color: var(--fontColor);
        font-weight: 700;
        text-decoration: none;
      }

      span {
        color: var(--primary);
      }
    }
  }
  .theme-button-container {
    position: absolute;
    right: 12px;
    top: 12px;
    
    
    .theme-button {
      width: 46px;
      height: 46px;
      box-sizing: border-box;
      padding: 12px;
      background: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;

      &:focus {
        outline: 0;
      }

      .sun {
        width: 50%;
        height: 50%;
        position: absolute;
        pointer-events: none;
        opacity: 0;
        transform: scale(0.6) rotate(0deg);
        transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;

        /*  white transparent for Safari  */
        background: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, #fb8500 50%);
      }

      .sun:before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(
          circle,
          #fb8500 30%,
          rgba(0, 0, 0, 0) 30%,
          rgba(0, 0, 0, 0) 50%,
          #fb8500 50%
        );
        transform: rotate(45deg);
      }

      .sun.visible {
        pointer-events: auto;
        opacity: 1;
        transform: scale(1) rotate(180deg);
        transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
      }

      .moon {
        width: 50%;
        height: 50%;
        pointer-events: none;
        position: absolute;
        left: 12.5%;
        top: 18.75%;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 50%;
        box-shadow: 9px 3px 0px 0px #fff;
        opacity: 0;
        transform: scale(0.3) rotate(65deg);
        transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
      }

      .moon.visible {
        pointer-events: auto;
        opacity: 1;
        transform: scale(1) rotate(0deg);
        transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
      }

      .star {
        position: absolute;
        top: 25%;
        left: 5%;
        display: block;
        width: 0px;
        height: 0px;
        border-right: 7px solid rgba(0, 0, 0, 0);
        border-bottom: 5px solid #fff;
        border-left: 7px solid rgba(0, 0, 0, 0);
        transform: scale(0.55) rotate(35deg);
        opacity: 0;
        transition: all 0.2s ease-in 0.4s;
      }

      .star:before {
        border-bottom: 5px solid #fff;
        border-left: 3px solid rgba(0, 0, 0, 0);
        border-right: 3px solid rgba(0, 0, 0, 0);
        position: absolute;
        height: 0;
        width: 0;
        top: -3px;
        left: -5px;
        display: block;
        content: '';
        transform: rotate(-35deg);
      }

      .star:after {
        position: absolute;
        display: block;
        color: red;
        top: 0px;
        left: -7px;
        width: 0px;
        height: 0px;
        border-right: 7px solid rgba(0, 0, 0, 0);
        border-bottom: 5px solid #fff;
        border-left: 7px solid rgba(0, 0, 0, 0);
        transform: rotate(-70deg);
        content: '';
      }

      .moon.visible .star {
        opacity: 0.8;
        /*   transform: rotate(35deg); */
      }

      .star.small {
        transform: scale(0.35) rotate(35deg);
        position: relative;
        top: 50%;
        left: 37.5%;
        opacity: 0;
        transition: all 0.2s ease-in 0.45s;
      }

      .moon.visible .star.small {
        opacity: 0.7;
        transform: scale(0.45) rotate(35deg);
      }
    }
  }
`;
