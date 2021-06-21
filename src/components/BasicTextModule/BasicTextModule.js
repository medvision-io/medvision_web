import React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = ({ title, description }) => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          {title}
        </h2>
        <p style={{ marginBottom: "60px" }}>
          {description}
        </p>
        <Button text="View Products" as={Link} to="/products" />
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
