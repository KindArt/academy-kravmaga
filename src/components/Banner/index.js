import React from "react"

const Banner = ({ title, subtitle, content, imageUrl, children }) => (
  <div className="banner">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p className="content">{content}</p>
    <div className="children">{children}</div>
  </div>
)

export default Banner
