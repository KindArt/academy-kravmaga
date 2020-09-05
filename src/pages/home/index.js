import React, { useState } from "react"
import { navigate } from "gatsby"
import { GoogleApiWrapper, Map, Marker } from "google-maps-react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import NavigationBar from "../../components/NavigationBar"
import EbookModal from "../../components/EBookModal"

import eBookImage from "../../images/ebook.png"
import phoneIcon from "../../images/phoneIcon.png"
import peopleIcon from "../../images/peopleIcon.png"
import pointIcon from "../../images/pointIcon.png"
import kirstieSuccess from "../../images/kirstie-36-success-comparison.jpg"
import stephenSuccess from "../../images/stephen-30-success-comparison.jpg"
import neilSuccess from "../../images/neil-45-success-comparison.jpg"

import "./style.scss"

const isClient = typeof window !== "undefined"

const navigateTo = route => {
  navigate(route)
}

const IndexPage = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { google } = props

  return (
    <Layout>
      <SEO title="Home" />
      <EbookModal displayModal={show} handleClose={handleClose} />
      <div className="homePageWrapper">
        <NavigationBar />
        <div className="banner">
          <div className="container">
            <h1>Medway's Body Transformation Coach</h1>
            <p className="summary">
              Let us help you grow in fitness, confidence and wellbeing. It’s
              time to invest in yourself and change your body &amp; your life.
              We promise to help you to achieve &amp; maintain your best health
              in a non intimidating and friendly environment with no egos! Have
              fun, meet new people and change your life in a positive way.
            </p>
            <p className="caption">Become Limitless</p>
            <div
              className="button cta"
              role="button"
              tabIndex="0"
              onKeyDown={() => navigateTo("get-started")}
              onClick={() => navigateTo("get-started")}
            >
              Get started now
            </div>
          </div>
        </div>
        <div className="eBookWrapper">
          <div className="container">
            <div className="content">
              <div className="eBookImage">
                <img src={eBookImage} alt="eBook" />
              </div>
              <div className="eBookContent">
                <h1>You can be our next success story!</h1>
                <p>
                  You can count on us to guarantee your success and transform
                  your body faster than anything you have experienced before...
                  Check out our success stories so far!
                </p>
                <div
                  className="button cta"
                  role="button"
                  tabIndex="0"
                  onKeyDown={handleShow}
                  onClick={handleShow}
                >
                  Get your free copy
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainContentWrapper">
          <div className="container">
            <div className="content">
              <div className="column">
                <h2>Why Sega Fitness Is The Right Fit for You?</h2>
                <p>
                  You are, no doubt, a high achiever in many respects.
                  Hardworking and professionally driven, you provide and care
                  for those around you. However, your success in these areas has
                  required maximum output from you in ways that have been costly
                  to both your health and your identity.
                </p>
                <p>
                  Staying active to a degree is one thing but, in truth, you
                  don’t know how to achieve the results you desire, the results
                  you deserve. There is no blame or shame in that, you’re no
                  different to any other client that has walked through our
                  doors.
                </p>
                <p>
                  Loving yourself is the new goal and it would be a privilege
                  for us to walk beside you on this journey.
                </p>
                <p>
                  With the right tools and strategies, we can build better
                  habits into your life to help you go the distance and reach
                  your goal.
                </p>
                <p>
                  Our programmes are designed to keep you grounded and held
                  accountable to a personalised, tried and tested plan for
                  healthy results.
                </p>
                <p>
                  Take control and get ready to greet your true self, empowered
                  and fuelled to live a life without limits.
                </p>
                <p className="bold">Become limitless.</p>
              </div>
              <div className="column">
                <div className="iconCard">
                  <div className="icon">
                    <img src={phoneIcon} alt="phone icon" />
                  </div>
                  <div className="iconImageContent">
                    <h3>Book a Call</h3>
                    <p>
                      Let's get you started on your journey with a quick
                      consultation call by clicking “Get Started Now” below
                      &amp; scheduling a call at a time that is convenient to
                      you! to get to know you better and find out if we are a
                      great fit.
                    </p>
                  </div>
                </div>

                <div className="iconCard">
                  <div className="icon">
                    <img src={peopleIcon} alt="people icon" />
                  </div>
                  <div className="iconImageContent">
                    <h3>Come In For a Meeting</h3>
                    <p>
                      We want you to come and see our unique training space, get
                      comfortable, get to know you better and find out if we are
                      a great fit.
                    </p>
                  </div>
                </div>

                <div className="iconCard">
                  <div className="icon">
                    <img src={pointIcon} alt="point icon" />
                  </div>
                  <div className="iconImageContent">
                    <h3>Choose the Programme for You</h3>
                    <p>
                      No two journeys are the same, that's why we keep our
                      training packages flexible. You'll find the right one for
                      you but first, you need to book your call - no strings
                      attached.
                    </p>
                  </div>
                </div>

                <div
                  className="button cta"
                  role="button"
                  tabIndex="0"
                  onKeyDown={() => navigateTo("get-started")}
                  onClick={() => navigateTo("get-started")}
                >
                  Get started now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <img src={kirstieSuccess} alt="Kirstie's before and after photos" />
          <img src={stephenSuccess} alt="Stephen's before and after photos" />
          <img src={neilSuccess} alt="Neil's before and after photos" />
        </div>
        <div className="mapContainer">
          {isClient && (
            <Map
              google={google}
              containerStyle={{ position: "relative" }}
              initialCenter={{
                lat: 51.340312,
                lng: 0.557937,
              }}
              zoom={15}
            >
              <Marker
                title={"Sega Fitness"}
                position={{ lat: 51.340312, lng: 0.557937 }}
              />
            </Map>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUAYxlyMyuhcKaBXq1LMxBWUh4mqYgpik",
})(IndexPage)
