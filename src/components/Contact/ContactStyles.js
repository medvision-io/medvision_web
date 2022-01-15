import styled from "styled-components"

export const ContactStyles = styled.section`
  padding: var(--sectionPadding) var(--borderSpacing);
  max-width: 750px;
  box-sizing: content-box;
  margin: 0 auto;

  input {
    height: 50px;
  }
  
  .input-container {
    margin-bottom: 1.25rem;

    @media (min-width: 1200px) {
      margin-bottom: 1.875rem;
    }
  }
  
  .error-message {
    color: #cc0033;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 0 0 0 15px;
  }

  input,
  textarea {
    background-color: var(--background);
    color: var(--fontColor);
    border: none;
    border-bottom: 3px solid var(--inActive);
    width: 100%;
    font-size: 1rem;
    font-weight: 900;
    font-family: "Heebo", sans-serif;
    padding: 15px 15px 0;
    transition: border-bottom-color 0.3s;

    &:focus {
      border-bottom-color: var(--primary);
    }

    &::-webkit-input-placeholder {
      color: var(--inActive);
    }

    &::-moz-placeholder {
      color: var(--inActive);
    }

    &:-ms-input-placeholder {
      color: var(--inActive);
    }

    &:-moz-placeholder {
      color: var(--inActive);
    }
  }
`
