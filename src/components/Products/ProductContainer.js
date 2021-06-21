import React from "react"
import styled from "styled-components"

const ProductTemplateStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: var(--sectionPadding) var(--borderSpacing);
  background-color: var(--background);

  .column {
    flex: 0 0 100%;

    @media (min-width: 768px) {
      flex-basis: 50%;

      &:nth-child(1) {
        padding-right: 20px;
      }

      &:nth-child(2) {
        padding-left: 20px;
      }

      > * {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    > * {
      &:first-child {
        margin-top: 0;
      }
    }
  }
`

const ProductContainer = ({product}) => {
  const { html } = product;

  return (
    <ProductTemplateStyles>
      {/*<div className="column">{renderRichText(productDescription)}</div>*/}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/*<div className="column">*/}
      {/*  {faq.map((item, index) => {*/}
      {/*    return (*/}
      {/*      <Faq*/}
      {/*        key={index}*/}
      {/*        title={item.title}*/}
      {/*        description={item.description}*/}
      {/*      />*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</div>*/}
    </ProductTemplateStyles>
  )
}

export default ProductContainer