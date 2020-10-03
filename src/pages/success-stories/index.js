import React from "react"

import SEO from "../../components/Seo"
import Layout from "../../components/Layout"
import NavigationBar from "../../components/NavigationBar"
import eddieThumb from "../../images/eddies-story-thumbnail.png"
import kevinThumb from "../../images/kevin-story-thumbnail.jpg"
import karolinaThumb from "../../images/karolina-story-thumbnail.jpg"
// import tristanThumb from "../../images/tristan-story-thumbnail.png"
import glennThumb from "../../images/glenns-story-thumbnail.png"
import grahamThumb from "../../images/grahams-story-thumbnail.jpg"
import neilThumb from "../../images/neil-story-thumbnail.jpg"
import brendaThumb from "../../images/brendas-story-thumbnail.png"
import "./style.scss"

const SuccessStories = () => (
  <Layout>
    <SEO title="Success Stories" />
    <div className="successStoriesContainer">
      <NavigationBar />
      <div className="banner">
        <div className="container">
          <h1>Success Stories</h1>
          <p className="summary">Real people. Real results.</p>
        </div>
      </div>
      <div className="mainContent">
        <div className="container">
          <div className="videos">
            <div className="row">
              <div className="video">
                <a
                  href="https://vimeo.com/342706621"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={eddieThumb} alt="Eddie's Success Story" />
                </a>
              </div>
              <div className="video">
                <a
                  href="https://vimeo.com/391206525"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={kevinThumb} alt="Kevin's Success Story" />
                </a>
              </div>
              <div className="video">
                <a
                  href="https://vimeo.com/345411963"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={karolinaThumb} alt="Karolina's Success Story" />
                </a>
              </div>
            </div>

            <div className="row">
              {/* <div className="video">
                <a href="" target="_blank" rel="noreferrer">
                  <img src={tristanThumb} alt="Tristan's Success Story" />
                </a>
              </div> */}
              <div className="video">
                <a
                  href="https://vimeo.com/392157150"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={glennThumb} alt="Glenn's Success Story" />
                </a>
              </div>
              <div className="video">
                <a
                  href="https://vimeo.com/371359801"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={grahamThumb} alt="Graham's Success Story" />
                </a>
              </div>

              <div className="video">
                <a
                  href="https://vimeo.com/344514135"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={neilThumb} alt="Neil's Success Story" />
                </a>
              </div>
            </div>

            <div className="row">
              <div className="video">
                <a
                  href="https://vimeo.com/366245366"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={brendaThumb} alt="Brenda's Success Story" />
                </a>
              </div>
              <div className="video hidden"></div>
              <div className="video hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SuccessStories
