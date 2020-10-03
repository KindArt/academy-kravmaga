import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import NavigationBar from "../../components/NavigationBar"
import whoWeAreImg from "../../images/who-we-are.png"
import whoWeHelpImg from "../../images/who-we-help.png"
import myStoryImg from "../../images/my-story.png"
import "./style.scss"

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="About us" />
      <div className="aboutUsPageContainer">
        <NavigationBar />
        <div className="banner">
          <div className="container">
            <h1>About Us</h1>
            <p className="summary">Who we are and what we do</p>
          </div>
        </div>
        <div className="headline">
          <div className="container">
            <div className="content">
              <p>
                We help you achieve and maintain your health and fitness goals
                through enjoyable training experience in a community of
                likeminded people who are looking to stay active, in both mind
                and body.
              </p>
              <p>
                Nutrition education and mindset coaching are woven into the
                fabric of every member’s journey led by supportive and
                knowledgeable coaches, in a non-intimidating environment with an
                amazing support network around you.
              </p>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="container">
            {/* Who we are */}
            <div className="row">
              <div className="column">
                <div className="content">
                  <h2>Who we are</h2>
                  <p>
                    This is not a gym, it’s the most effective self defence
                    &amp; fitness like never before! That’s the promise of owner
                    Piotr who’s range of broad experience within the Krav Maga
                    &amp; fitness industry offers a refreshing yet dynamic
                    approach to the world of training.
                  </p>
                  <p>
                    I wanted to create a welcoming and engaging community that
                    thrives off of helping each other succeed in your own
                    individual journeys. I don’t want our members to feel like
                    just another number in another overcrowded gym, but an im-
                    portant part of this new and exciting tribe; an opportunity
                    to connect with other like minded people and most
                    importantly to enjoy yourselves in a non intimidating and
                    friendly environment with no egos! My commitment and passion
                    for helping others is why we do this.
                  </p>
                </div>
              </div>
              <div className="column">
                <img src={whoWeAreImg} alt="Who we are" />
              </div>
            </div>

            {/* Who we help */}
            <div className="row">
              <div className="column">
                <img src={whoWeHelpImg} alt="Who we help" />
              </div>
              <div className="column">
                <div className="content">
                  <h2>Who we help</h2>
                  <p>
                    We are not a big intimidating gym with lots of weird
                    machines. You do not train amongst "strangers". The
                    instructors are not intimidating personalities &amp; other
                    members aren't super fit elite athletes.
                  </p>
                  <p>
                    We could give you an endless list of reasons to join our
                    community. Instead, let's start with what brought you to
                    this vey moment, visiting our website. Curiosity? Bored of
                    the gym? Are you busy everyday person? Trying to balance
                    work, social and home life? Perhaps you haven't worked out
                    for 20 years and feel breathless just walking up the stairs?
                  </p>
                </div>
              </div>
            </div>

            {/* My Story */}
            <div className="row">
              <div className="column">
                <div className="content">
                  <h2>My story</h2>
                  <p>
                    I began training Krav Maga in 2008. Throughout my journey, I
                    trained in the greatest Krav Maga Organisations across the
                    globe and have been taught by the world's elite including
                    Eyal Yanilov, Andrzej Marczak, and Tomasz Adamczyk, to name
                    a few.
                  </p>
                  <p>
                    After founding the Krav Maga Academy in 2013, I have been
                    living and breathing Krav Maga everyday teaching civilians,
                    military, special forces law enforcement units and corporate
                    clients worldwide.
                  </p>
                  <p>
                    I understand that starting something new can be scary, but I
                    too have gone through the same journey as you are about too.
                    I don't want you to miss out on this next stage of our
                    exciting new adventure.
                  </p>
                  <p>
                    If you're committed to bringing out the best in yourself in
                    the next 365 days whilst having fun, and socialising with
                    people then I can’t wait to see you on the other side.
                  </p>
                </div>
              </div>
              <div className="column">
                <img src={myStoryImg} alt="My story" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
