import React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { MdArrowDownward as Arrow } from "react-icons/md"
import Button from "../Button/Button"
import { menuItems } from "../../constants/links"

const BannerModule = ({ children, title, subTitle, price, enquire, demo, image, compressed }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  const demoLink = menuItems.find(el => el.text === 'demo').path;

  return (
    <>
      <BannerModuleStyles compressed={compressed}>
        {children ? (
          children
        ) : (
          image
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                ${price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            {enquire && <Button text="Enquire Now" as={Link} to="/contact" />}
            {demo && <Button text="Lunch Demo" as={Link} to={demoLink} />}
            <button onClick={scrollToArea} aria-label="scroll down">
              <Arrow />
            </button>
          </div>
        </div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
