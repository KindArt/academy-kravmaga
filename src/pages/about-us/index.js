import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import NavigationBar from "../../components/NavigationBar"
import whoWeAreImg from "../../images/who-we-are.jpeg"
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
                and body. Nutrition education and mindset coaching are woven
                into the fabric of every member’s journey led by supportive and
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
                    This is not a gym, it’s health & Fitness like never before!
                  </p>
                  <p>
                    That's the promise of owner Karolina who's range of broad
                    experience within the health industry offers a refreshing
                    yet dynamic approach to the world of fitness.
                  </p>
                  <p>
                    I wanted to create a welcoming and engaging community that
                    thrives off of helping each other succeed in their own
                    individual weight loss journeys.
                  </p>
                  <p>
                    I don’t want our members to feel like just another number in
                    another overcrowded gym, but an important part of this new
                    and exciting tribe; an opportunity to connect with other
                    like minded people and most importantly to enjoy yourselves
                    in a non intimidating and friendly environment with no egos!
                  </p>
                  <p>
                    My commitment and passion for helping others is why we do
                    this. It’s clear to see this in the results we have
                    delivered for our past clients. Their success stories have
                    leapfrogged their perso- nal growth and progression to more
                    than just obtaining the figure of their dreams.
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
                    We are not a big gym with lots of weird machines. You do not
                    train amongst "strangers". The instructors are not
                    intimidating body builders & other members aren’t super fit
                    elite athletes. We could give you an endless list of reasons
                    to join our community.
                  </p>
                  <p>
                    Instead, let's start with what brought you to this vey
                    moment, visiting our website.
                  </p>
                  <p>
                    Are you a busy person everyday? Trying to balance work,
                    social and home life? Bored of gym? Perhaps you haven't
                    worked out for 20 years and feel breathless just walking up
                    the stairs?
                  </p>
                  <p>
                    We get it. This is why Sega Fitness is the place for you.
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
                    In 2018 I was 33 years old and just gave birth to my second
                    beautiful boy - Freddie, I felt out of shape, breathless and
                    insecure. The thought of going to the gym made me feel
                    nervous and uncomfortable.
                  </p>
                  <p>
                    I turned to fitness, powered through and lost 16kg of
                    unwanted weight with the love and support of my husband but
                    have to admit that the journey wasn't pleasant nor easy to
                    get back into shape in mid thirties.
                  </p>
                  <p>
                    In 2019 I finally took the leap to launch Sega Fitness with
                    the aim to provide fun and varied programmes, where every
                    single client feels 100% supported in all areas to be the
                    best versions of themselves within a supportive community of
                    like-minded individuals.
                  </p>
                  <p>
                    I understand that starting something new can be scary, but I
                    too have gone through the same journey as you are about to.
                    Although I am a qualified fitness professional, I am a
                    normal person who lives a normal life just like you.
                  </p>
                  <p>
                    I don't want you to miss out on this next stage of our
                    exciting new adventure. If you’re committed to bringing out
                    the best in yourself in the next 365 days whilst having fun,
                    and socialising with people of the same fitness levels as
                    yourself, then I can't wait to see you on the other side.
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
