import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import NavigationBar from "../../components/NavigationBar"
import karolinaImg from "../../images/profile-karolina.png"
import aniaImg from "../../images/profile-ania.png"
import joeImg from "../../images/profile-joe.png"

import "./style.scss"

const TeamMemberCard = ({ imageUrl, ctaUrl, name, role }) => (
  <div className="teamCard">
    <img src={imageUrl} alt={name} />
    <h2 className="name">{name}</h2>
    <h3 className="role">{role}</h3>
  </div>
)

const About = () => (
  <Layout>
    <SEO title="Our Team" />
    <div className="ourTeamPageContainer">
      <NavigationBar />
      <div className="banner">
        <div className="container">
          <h1>Our Team</h1>
        </div>
      </div>
      <div className="mainContent">
        <div className="container">
          <div className="team">
            <div className="topRow">
              <div className="teamMember">
                <TeamMemberCard
                  name="Karolina Sega - Fajecka"
                  role="Owner &amp; Founder"
                  imageUrl={karolinaImg}
                />

                <p>
                  Karolina, the founder of Sega fitness and mother of two
                  beautiful boys, turned to fitness after feeling breathless,
                  out of shape and insecure after the birth of her second child.
                </p>
                <p>
                  The thought of going to the gym made her feel nervous and
                  uncomfortable. She powered through and lost 16kg of unwanted
                  weight but admitted the journey wasn’t pleasant nor easy for
                  her to get back into shape in her mid thirties.
                </p>
                <p>
                  Her mission is to prevent others from going through the same
                  struggles she did, instead by offering a supportive network
                  where people can work out safely whilst having fun and without
                  feeling overwhelmed.
                </p>
                <p>
                  In 2019 Karolina finally took the leap to launch Sega Fitness
                  with the aim to provide fun and varied programmes, where every
                  single client feels 100% supported in all areas to be the best
                  versions of themselves within a supportive community of
                  like-minded individuals.
                </p>
                <p>
                  "I understand that starting something new can be scary, but I
                  too have gone through the same journey as you are about too.
                  Although I am a qualified fitness professional, I am a normal
                  person who lives a normal life just like you. I don’t want you
                  to miss out on this next stage of our exciting new adventure.
                  If you’re committed to bringing out the best in yourself in
                  the next 365 days whilst having fun, and socialising with
                  people of the same fitness levels as yourselves, then I can’t
                  wait to see you on the other side."
                </p>
              </div>
            </div>

            <div className="bottomRow">
              <div className="teamMember">
                <TeamMemberCard
                  name="Ania Hampelska"
                  role="Personal Trainer"
                  imageUrl={aniaImg}
                />
                <p>
                  In 2011, I qualified as a Fitness Instructor and started
                  working with a few fitness clubs.
                </p>
                <p>
                  I was awarded a Scholarship in Dance for my achievements in
                  2008 and 2009. However, I began my adventure with dancing when
                  I was nine years old.
                </p>
                <p>
                  In 2008-2010, I qualified as a dance Instructor and my
                  speciality was Jazz Dance, in which I have achieved a Level 3.
                </p>
                <p>
                  For almost seven years, I was working for Dance Theatre in
                  Poland as a soloist and group dancer. My life has changed
                  directions over the years but fitness is a big part of my life
                  and I am very passionate about it
                </p>
                <p>
                  I am very happy to be part of the Sega Fitness family. Let’s
                  get to work!
                </p>
              </div>

              <div className="teamMember">
                <TeamMemberCard
                  name="Joe Kelly"
                  role="Personal Trainer"
                  imageUrl={joeImg}
                />
                <p>
                  Certificates in Gym based Boxing, Studio cycling and Metabolic
                  Circuits.
                </p>
                <p>
                  I'm a PT with a passion for helping others feel good about how
                  they look and improving their fitness levels.
                </p>
                <p>
                  I believe that you can use exercise to help create and sustain
                  a positive mindset, battling those negative thoughts we all
                  get.
                </p>
                <p>
                  By keeping nutrition nice and simple and making exercise fun,
                  you can achieve any fitness goals you want to!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
