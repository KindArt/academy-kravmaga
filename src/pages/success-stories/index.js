import React from "react"

import SEO from "../../components/Seo"
import Layout from "../../components/Layout"
import NavigationBar from "../../components/NavigationBar"
import neilVideoSsImg from "../../images/neil-video-ss.png"
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
            <div className="video">
              <a
                href="https://segafitness.wistia.com/medias/hguf5u68in"
                target="_blank"
                rel="noreferrer"
              >
                <img src={neilVideoSsImg} alt="Neil Success Story" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SuccessStories
