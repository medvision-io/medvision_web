import styled from "styled-components"

export const MediaLogosStyles = styled.section`
  padding: var(--sectionPadding) var(--borderSpacing);
  max-width: 1050px;
  box-sizing: content-box;
  margin: 0 auto;


  .logos {
    display: grid;
    grid-template-columns: auto auto;
    gap: 12px 12px;
    
    h3 {
      grid-column: 1;
      grid-column-end: 3;
    }
    
    .logos-item {
      display: flex;
      flex-direction: row;
      align-content: center;
      position: relative;
      min-width: 100%;
      max-width: 100%;
      height: 200px;
      margin-bottom: 24px;
      transition: transform 0.3s ease;
      background-color: white;
      box-shadow: var(--elevation2);
      grid-column: span 2;
      
      @media (min-width: 414px) {
        min-width: 434px;
      }

      @media (min-width: 768px) {
        min-width: 350px;
        grid-column: span 1;
      }

      @media (min-width: 1024px) {
        min-width: 400px;
      }

      @media (min-width: 1152px) {
        min-width: 500px;
      }
      
      span {
        //position: absolute;
        font-weight: bold;
        color: transparent;
        text-align: center;
        font-size: var(--h3);
        z-index: 1;
      }
      a {
        display: none;
        margin-top: 8px;
        text-align: center;
      }
      
      .logos-item-overlay {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      
      &:hover,
      &:focus {
        h2,
        span {
          color: var(--lightFontColor);
        }
        a {
          display: block;
        }

        .logos-item-overlay {
          background-color: rgba(0,0,0,0.6);
        }
        
      }
      img {
        position: absolute;
        max-height: 100%;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
        max-width: 100%;
      }
      
      &__dark {
        background-color: black;
        &:hover,
        &:focus {
          h2,
          span {
            color: var(--lightFontColor);
          }

        }
      }
    }
  }
`
