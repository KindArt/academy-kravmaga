import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import NavigationBar from "../../components/NavigationBar"
import phoneIcon from "../../images/phoneIcon.png"
import peopleIcon from "../../images/peopleIcon.png"
import pointIcon from "../../images/pointIcon.png"
import testimonialIanImg from "../../images/testimonial-ian.png"
import testimonialKirstieImg from "../../images/testimonial-kirstie.png"
import testimonialLeeImg from "../../images/testimonial-lee.png"
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
                title="Sega Fitness Appointment Calendar"
                src="//www.appointmentcore.com/app/freeslots/uuPAhxDuj?iframe-view=SlotsV2"
                style={{ width: "100%", height: "900px", border: "0px none" }}
                frameBorder="0"
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
              <img src={testimonialIanImg} alt="Testimonial - Ian" />
              <p className="text">
                "If you want to get fit and healthy, I can highly recommend Sega
                Fitness. I've been training 3 to 4 times a week for about 3
                weeks with them so far and I already feel the benefits."
              </p>
              <p className="name">Ian 51, Rochester</p>
            </div>
            <div className="testimonial">
              <img src={testimonialKirstieImg} alt="Testimonial - Ian" />
              <p className="text">
                "I have been training with Sega Fitness since the beginning of
                this year and have really seen an improvement in my weight (lost
                over 15kg so far), plus my body shape and general fitness."
              </p>
              <p className="name">Kirstie 37, Medway</p>
            </div>
            <div className="testimonial">
              <img src={testimonialLeeImg} alt="Testimonial - Ian" />
              <p className="bold">
                "This has helped me so much... Karolina is an excellent coach,
                who pushes us to our limits and beyond. I'd thoroughly recommend
                it to people of all fitness levels."
              </p>
              <p className="name">Lee 50, Medway</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default GetStarted
