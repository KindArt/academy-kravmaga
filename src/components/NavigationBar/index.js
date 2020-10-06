import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import burgerMenu from "../../images/burger-menu.svg"
import "./style.scss"

const NavigationBar = () => {
  const [sidenavVisible, toggleSidenav] = useState(false)

  return (
    <div className="navigationBar">
      {sidenavVisible && (
        <div className="sidenav">
          <div className="header">
            <h1>Navigation</h1>
            <div
              role="button"
              onClick={() => toggleSidenav(!sidenavVisible)}
              className="close"
            ></div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/get-started">Get Started</Link>
              </li>
              <li>
                <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                <Link to="/success-stories">Success Stories</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="container">
        <div className="content">
          <img className="logo" src={logo} alt="Logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/get-started">Get Started</Link>
              </li>
              <li>
                <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                <Link to="/success-stories">Success Stories</Link>
              </li>
            </ul>
            {/* Burger Menu */}
            <img
              role="button"
              onClick={() => toggleSidenav(!sidenavVisible)}
              className="burgerMenu"
              src={burgerMenu}
              alt="Side Navigation"
            />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
