import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import iconFacebook from "../../images/icon-facebook.svg"
import iconInstagram from "../../images/icon-instagram.svg"
import iconPhone from "../../images/icon-phone.svg"
import "./style.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query CompanyAddressQuery {
      site {
        siteMetadata {
          title
          fullTitle
          companyAddress
          facebookUrl
          instagramUrl
          contactNumber
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: {
        title,
        fullTitle,
        companyAddress,
        facebookUrl,
        instagramUrl,
        contactNumber,
      },
    },
  } = data

  return (
    <>
      <div className="outerHeader">
        <div className="contactBar">
          <div className="container">
            <div className="headerContent">
              <div className="socialMedia">
                <a href={facebookUrl} target="_blank" rel="noreferrer">
                  <img className="icon" src={iconFacebook} alt="Facebook" />
                </a>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  <img className="icon" src={iconInstagram} alt="Instagram" />
                </a>
              </div>
              <div className="contactNumber">
                <img className="icon" src={iconPhone} alt="Phone" />
                <p className="phoneNumber">Call Us: {contactNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header></header>

      <main>{children}</main>

      <footer>
        <div className="container">
          <div className="row">
            <div className="column navigation">
              <h3 className="title">Navigation</h3>
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
                <li>
                  <a href="mailto:peter@academy-kravmaga.co.uk">Contact</a>
                </li>
              </ul>
            </div>

            <div className="column facebookPosts">
              <h3 className="title">Like Us On Facebook</h3>
              <iframe
                title="Krav Maga Facebook Updates"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAcademyKravMaga%2F&tabs=timeline&width=225&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                width="225"
                height="400"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>

            <div className="column address">
              <h3 className="title">Contact Us</h3>
              <p className="companyName">{fullTitle}</p>

              <p className="lightWeight">{companyAddress}</p>

              <p className="lightWeight">{contactNumber}</p>

              <div className="socialMedia">
                <a href={facebookUrl} target="_blank" rel="noreferrer">
                  <img className="icon" src={iconFacebook} alt="Facebook" />
                </a>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  <img className="icon" src={iconInstagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column copyright">
              <small>
                © {new Date().getFullYear()} {title}
              </small>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
