import styled from "styled-components";

export const TeamMembersStyles = styled.section`
  padding: 0 var(--borderSpacing);
  color: var(--fontColor);
  background-color: var(--background);
  transform: translateY(-20px);
  
  > h1 {
    text-align: center;
  }

  .team__container {
    width: calc(100% + 60px);
    transform: translateX(-30px);
    /* max-width: 1230px; */
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1024px) {
      width: calc(100% + 150px);
      transform: translateX(-75px);
    }

    @media (min-width: 1152px) {
      width: 100%;
      transform: translateX(0);
    }

    &--scroll {
      overflow-x: scroll;
      display: flex;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        width: 14px;
        height: 14px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 0px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: var(--primary);
      }
      &::-webkit-scrollbar-track {
        background: #505050;
        border-radius: 0px;
      }

      @media (min-width: 1152px) {
        overflow-x: visible;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    }
  }

  .team__item {
    flex: 0 0 80%;
    height: 308px;
    background-color: var(--background);
    margin-right: 8px;
    margin-left: 8px;
    //overflow: hidden;
    scroll-snap-align: start;
    scroll-margin-left: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 414px) {
      height: 334px;
    }

    @media (min-width: 768px) {
      height: 400px;
    }

    @media (min-width: 1024px) {
      height: 400px;
    }


    .social__menu {
      margin-bottom: 40px;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;

        li {
          font-size: 25px;
          margin-right: 8px;

          @media (min-width: 768px) {
            margin-left: 5px;
            margin-right: 5px;
          }

          a {
            color: var(--primary);
            transition: color 0.3s ease;
          }

          &:hover,
          &:focus {
            a {
              color: var(--fontColor);
            }
          }
        }
      }
    }

    &--content {
      width: 100%;
      height: calc(100% - 60px);
      position: relative;
      z-index: 2;
      display: flex;
      min-width: 200px;
      flex-direction: column;
      margin-bottom: 20px;
      align-items: center;

      @media (min-width: 414px) {
        margin-bottom: 20px;
      }

      @media (min-width: 768px) {
        //padding-bottom: 20px;
        margin-bottom: 10px;
      }

      @media (min-width: 1024px) {
        margin-bottom: 25px;
      }
      
      @media (min-width: 1152px) {
        margin-bottom: 10px;
      }

      > img {
        height: 70%;
        max-height: 100%;
        transition: transform 0.3s ease;
        border: 7px solid rgba(0,0,0,.1);
        border-radius: 50%!important;
      }

      > h2 {
        color: var(--fontColor);
        font-size: var(--h2);
        margin-bottom: 0px;
      }

      > p {
        color: var(--fontColorSecondary);
        font-size: var(--p);
        margin-bottom: 0px;
      }
    }

    @media (min-width: 768px) {
      flex-basis: 65%;
      margin-left: 15px;
      margin-right: 15px;
    }

    @media (min-width: 1024px) {
      flex-basis: 60%;
      margin-left: 20px;
      margin-right: 20px;
    }

    @media (min-width: 1152px) {
      flex: 0 0 calc((100% / 4) - 40px);
      margin-bottom: 40px;
      scroll-margin-left: 0;

      &:nth-of-type(3n + 0) {
        margin-right: 0;
      }
    }

    &:nth-child(1) {
      margin-left: 30px;

      @media (min-width: 1024px) {
        margin-left: 75px;
      }

      @media (min-width: 1152px) {
        margin-left: 0;
      }
    }

    &:last-child {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: transparent;
        right: -30px;
        bottom: 0;

        @media (min-width: 1024px) {
          right: -75px;
          width: 75px;
        }

        @media (min-width: 1152px) {
          display: none;
        }
      }
    }
  }
`
