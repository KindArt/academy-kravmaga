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
import eddieTestimonial from "../../images/eddie-testimonial.png"
import brendaTestimonial from "../../images/brenda-testimonial.png"
import glennTestimonial from "../../images/glenn-testimonial.png"

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
      {show && <EbookModal handleClose={handleClose} />}
      <div className="homePageWrapper">
        <NavigationBar />
        <div className="banner">
          <div className="container">
            <h1>Grow in Fitness, Confidence &amp; Skills</h1>
            <p className="summary">
              It's time to invest in yourself and focus on nurturing your own
              development. We promise to teach you everything we know about self
              defence to protect yourself and your loved ones. In return, your
              time and commitment are your most important pieces of equipment
              and we ask that you bring them to every session. Have fun, meet
              new people and change your life in a positive way.
            </p>
            <p className="caption">Build a Powerful You</p>
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
                <h1>Want to see what success looks like?</h1>
                <p>
                  Check out 4 inspirational people who transformed their bodies
                  and changed their lives. If they can do it then why can't you?
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
                <h2>Why Krav Maga Academy Is The Right Fit for You?</h2>
                <p>
                  You are, no doubt, a high achiever in many respects.
                  Hardworking and professionally driven, you provide and care
                  for those around you. However, your success in these areas has
                  required maximum output from you in ways that have been costly
                  to both your health and your identity.
                </p>
                <p>
                  Staying active to a degree is one thing but, in truth, you
                  don't know how to achieve the results you desire, the results
                  you deserve. There is no blame or shame to be dealt, you're no
                  different to any academy member that has walked through our
                  doors. You’ve devoted everything to building the foundations
                  of a happy life: this might be your family, your career or
                  your home.
                </p>
                <p>
                  Imagine if you turned that same love and attention to
                  yourself: that's YOU. It's by prioritising yourself, the maker
                  of your own life, that you create a masterpiece.
                </p>
                <p>
                  Investing in yourself is the new goal and it would be a
                  privilege for us to walk beside you on this journey.
                </p>
                <p>
                  Take control and get ready to greet your true self, empowered
                  and fuelled to live a life without limits.
                </p>
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
                      comfortable and meet the team and the other members. You
                      will be learning in a safe, friendly and passionate
                      environment.
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
        <div className="testimonialsWrapper">
          <div className="container">
            <div className="testimonials">
              <div className="testimonial">
                <img src={eddieTestimonial} alt="Testimonial - Eddie" />
                <p className="text">
                  "I neglected myself... I dedicated 10 years of my life to my
                  career at the detriment of my health. I started to look in the
                  mirror and not recognise the person I was seeing."
                </p>
                <p className="name">Eddie 50, Medway</p>
              </div>
              <div className="testimonial">
                <img src={brendaTestimonial} alt="Testimonial - Brenda" />
                <p className="text">
                  "I was concerned I wouldn't be good enough or strong enough...
                  I was hooked straight away, absolutely loved it... as a female
                  walking in, you don't have to worry about the egos of alpha
                  males. It’s a very friendly, welcoming environment."
                </p>
                <p className="name">Brenda 43, Medway</p>
              </div>
              <div className="testimonial">
                <img src={glennTestimonial} alt="Testimonial - Glenn" />
                <p className="bold">
                  "The biggest thing that I did notice after going to other
                  clubs, is there was no egos. You know, there're big guys,
                  there're small guys, there're women. They were here to train
                  well and also help everyone else out so you felt part of a
                  club."
                </p>
                <p className="name">Glenn 45, Boxley</p>
              </div>
            </div>
          </div>
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
