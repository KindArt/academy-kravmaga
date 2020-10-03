import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import NavigationBar from "../../components/NavigationBar"
import phoneIcon from "../../images/phoneIcon.png"
import peopleIcon from "../../images/peopleIcon.png"
import pointIcon from "../../images/pointIcon.png"
import testimonialKevinImg from "../../images/testimonial-kevin.png"
import testimonialNeilImg from "../../images/testimonial-neil.png"
import testimonialGrahamImg from "../../images/testimonial-graham.png"
import "./style.scss"

const GetStarted = () => (
  <Layout>
    <SEO title="Get Started" />
    <div className="getStartedPageContainer">
      <NavigationBar />
      <div className="banner">
        <div className="container">
          <h1>Your journey starts here</h1>
        </div>
      </div>
      <div className="appointmentWrapper">
        <div className="container">
          <div className="appointment">
            <div className="column">
              <div className="content">
                <div className="iconCard">
                  <div className="icon">
                    <img src={phoneIcon} alt="phone icon" />
                  </div>
                  <div className="iconImageContent">
                    <h3>
                      Step 1: <span className="greenBranding">Book a Call</span>
                    </h3>
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
                    <h3>
                      Step 2:{" "}
                      <span className="greenBranding">
                        Come In For a Meeting
                      </span>
                    </h3>
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
                    <h3>
                      Step 3:{" "}
                      <span className="greenBranding">
                        Choose the Programme for You
                      </span>
                    </h3>
                    <p>
                      We will work with you to find the right program for you
                      and your goals to set you up for success from the very
                      beginning. We will work with you to find the right
                      programme for you and your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column calendar">
              <iframe
                title="Krav Maga Appointment Calendar"
                src="//www.appointmentcore.com/app/freeslots/P2viRiMT?iframe-view=SlotsV2"
                style={{ width: "100%", height: "900px", border: "0px none" }}
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="ctaWrapper">
        <div className="container">
          <div className="content">
            <h2>
              Take the first step and book a call. We'll take it from there.
            </h2>
            {/* <Button success>Change your body & change your life</Button> */}
          </div>
        </div>
      </div>
      <div className="testimonialsWrapper">
        <div className="container">
          <div className="testimonials">
            <div className="testimonial">
              <img src={testimonialKevinImg} alt="Testimonial - Ian" />
              <p className="text">
                "The Atmosphere in the academy is just terrific. Everybody
                really, really wants to support each other."
              </p>
              <p className="name">Kevin 56, Hoo</p>
            </div>
            <div className="testimonial">
              <img src={testimonialNeilImg} alt="Testimonial - Ian" />
              <p className="text">
                "Before Krav Maga I was overweight, unhealthy... I used to get
                home from work and have a couple of beers.. Since starting I've
                lost over 2 stone in weight. Everything about my life has just
                got better!"
              </p>
              <p className="name">Neil 45, Rochester</p>
            </div>
            <div className="testimonial">
              <img src={testimonialGrahamImg} alt="Testimonial - Ian" />
              <p className="bold">
                "My fitness levels were pretty much non existent... It was a
                good place to come to and for the first time in my life,
                couldn't wait to come back to do more fitness! It is just
                great!"
              </p>
              <p className="name">Graham 51, Medway</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default GetStarted
