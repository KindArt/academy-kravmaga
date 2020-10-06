import React, { useState } from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import NavigationBar from "../../components/NavigationBar"
import Modal from "../../components/Modal"
import profilePete from "../../images/profile-pete.png"
import profileKarolina from "../../images/profile-karolina.png"
import profileDan from "../../images/profile-dan.png"
import profileKirstie from "../../images/profile-kirstie.png"
import profileRichard from "../../images/profile-richard.png"
import profileJustin from "../../images/profile-justin.png"
import profileAmber from "../../images/profile-amber.png"
import profileKerry from "../../images/profile-kerry.png"

import "./style.scss"

const TeamMemberCard = ({ imageUrl, ctaUrl, name, role, children }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      {show && (
        <Modal
          title={name}
          body={children}
          handleClose={() => setShow(false)}
        />
      )}
      <div className="teamCard">
        <img src={imageUrl} alt={name} />
        <h2 className="name">{name}</h2>
        <h3 className="role">{role}</h3>
        <button className="button cta" onClick={() => setShow(true)}>
          Learn More
        </button>
      </div>
    </>
  )
}

const About = () => {
  return (
    <Layout>
      <SEO title="Our Team" />
      <div className="ourTeamPageContainer">
        <NavigationBar />
        <div className="banner">
          <div className="container">
            <h1>Our Team</h1>
            <p className="summary">Not all superheroes need to wear masks.</p>
          </div>
        </div>
        <div className="mainContent">
          <div className="container">
            <div className="team">
              <div className="row">
                <div className="teamMember">
                  <TeamMemberCard
                    name="Piotr Fajecki"
                    role="Founder &amp; Director of Training"
                    imageUrl={profilePete}
                  >
                    <p>
                      The man who started it all - Piotr began training Krav
                      Maga in 2008.
                    </p>
                    <p>
                      Throughout his journey, he has trained in the greatest
                      Krav Maga Organisations across the globe and has been
                      taught by the world's elite including Eyal Yanilov,
                      Andrzej Marczak &amp; Tomasz Adamczyk, to name a few.
                    </p>
                    <p>
                      After founding the Krav Maga Academy in 2013, he’s been
                      living and breathing Krav Maga everyday teaching
                      civilians, military, special forces law enforcement units
                      and corporate clients worldwide.
                    </p>
                    <p>Qualifications:</p>
                    <ul>
                      <li>Krav Maga Instructor: Expert Level 2</li>
                      <li>Combat Firearms Instructor</li>
                      <li>Close Protection Operative</li>
                      <li>Krav Maga Kids and Teen Instructor</li>
                      <li>BTEC Level 3 Advanced Award in Conﬂict Management</li>
                      <li>
                        BTEC Level 3 Advanced Award in Self Defence Instruction
                      </li>
                      <li>Member of European Security Centre</li>
                    </ul>
                  </TeamMemberCard>
                </div>

                <div className="teamMember">
                  <TeamMemberCard
                    name="Karolina Sega Fajecka"
                    role="Academy Co-Founder"
                    imageUrl={profileKarolina}
                  >
                    <p>
                      The brains behind the business, Karolina makes things
                      happen.
                    </p>
                    <p>
                      In 2019 Karolina finally took the leap to launch Sega
                      Fitness with the aim to provide fun and varied programmes,
                      where every single client feels 100% supported in all
                      areas to be the best versions of themselves within a
                      supportive community of like-minded individuals.
                    </p>
                    <p>Qualifications:</p>
                    <ul>
                      <li>Krav Maga Kids Instructor</li>
                      <li>Krav Maga Practitioner 1 BTEC</li>
                      <li>
                        Level 3 Advanced Award in Self Defence Instruction
                      </li>
                      <li>QA Level 3 Award in Paediatric First Aid (QCF)</li>
                      <li>Level 2 Fitness Instructor</li>
                      <li>Level 3 Personal Trainer</li>
                    </ul>
                  </TeamMemberCard>
                </div>

                <div className="teamMember">
                  <TeamMemberCard
                    name="Dan Maloney"
                    role="Instructor"
                    imageUrl={profileDan}
                  >
                    <p>
                      In 2016 Dan arranged for him and his partner to attend a
                      trial class and from that first session he was hooked.
                      That first session at Academy was a real eye opener. He
                      fell in love with Krav Maga for its simplicity and
                      effectiveness.
                    </p>
                    <p>
                      It wouldn't be long until Dan progressed through Academy
                      ranks and been selected on Instructor Development program
                      he successfully completed in late 2018.
                    </p>
                    <p>Qualifications:</p>
                    <ul>
                      <li>Krav Maga Instructor, Graduate Level 3</li>
                      <li>Krav Maga Kids Instructor</li>
                    </ul>
                  </TeamMemberCard>
                </div>
              </div>

              <div className="row">
                <div className="teamMember">
                  <TeamMemberCard
                    name="Kirstie Loft"
                    role="Instructor"
                    imageUrl={profileKirstie}
                  >
                    <p>
                      Kirstie plays a vital role in the Academy, joining us in
                      January 2019 to teach Kids Martial Arts classes and
                      provide support to the Medway HQ.
                    </p>
                    <p>
                      She started training in Krav Maga in early 2018 but brings
                      years of Martial Arts experience including competing at a
                      national level and instructing kids classes in Taekwondo.
                    </p>
                    <p>Qualifications:</p>
                    <ul>
                      <li>Krav Maga Practitioner Level 2</li>
                      <li>2nd Dan black belt in Taekwondo</li>
                      <li>2nd Dan black belt in Kaizendo</li>
                      <li>Krav Maga Kids Instructor</li>
                      <li>Martial Arts Instructor</li>
                    </ul>
                  </TeamMemberCard>
                </div>

                <div className="teamMember">
                  <TeamMemberCard
                    name="Richard McCort"
                    role="Instructor"
                    imageUrl={profileRichard}
                  >
                    <p>
                      Richard always enjoyed keeping fit and sports, having
                      dabbled in several martial arts including Krav Maga. We're
                      honoured that he has continued his journey with us and
                      joined the Academy Team teaching adults in 2017.
                    </p>
                    <p>Qualifications:</p>
                    <ul>
                      <li>Krav Maga Instructor, Graduate Level 3</li>
                      <li>
                        BTEC Level 3 Advanced Award in Self Defence Instruction
                      </li>
                      <li>Tactical Shooting Course Level 1</li>
                    </ul>
                  </TeamMemberCard>
                </div>

                <div className="teamMember">
                  <TeamMemberCard
                    name="Justin Bailey"
                    role="Instructor"
                    imageUrl={profileJustin}
                  >
                    <p>
                      Justin began training in Krav Maga with the Academy in
                      2015, seeking the skills necessary to protect himself and
                      his family should the need arise. He was also motivated by
                      the fitness aspect of the training.
                    </p>
                    <p>
                      Justin holds qualifications allowing him to work with our
                      youngest students, teens &amp; adults. He has previously
                      trained in Karate and Kickboxing and is an avid gym-goer.
                    </p>
                    <p>Qualifications:</p>
                    <ul>
                      <li>Krav Maga Instructor, Graduate Level 2</li>
                      <li>Krav Maga Kids &amp; Teens Instructor</li>
                      <li>Martial Arts Instructor</li>
                      <li>Tactical Shooting Course Level 1</li>
                    </ul>
                  </TeamMemberCard>
                </div>
              </div>

              <div className="row">
                <div className="teamMember">
                  <TeamMemberCard
                    name="Amber"
                    role="Academy Supervisor"
                    imageUrl={profileAmber}
                  >
                    <p>
                      Amber joins the team as Academy Supervisor. Her
                      responsibilities include managing the day-to-day operation
                      of the Academy, welcoming students and their families to
                      the venue and ensuring a pleasing experience.
                    </p>
                    <p>
                      Amber has been a wrestling fanatic since 2014; she is
                      currently being trained as a Martial Arts instructor and
                      will join Kirstie in teaching our young students.
                    </p>
                  </TeamMemberCard>
                </div>

                <div className="teamMember">
                  <TeamMemberCard
                    name="Kerry"
                    role="Programme Director"
                    imageUrl={profileKerry}
                  >
                    <p>
                      Kerry joins the Academy as Programme Director. She is
                      responsible for holding initial consultations, upgrading
                      existing members, as well as assisting with student
                      onboarding and providing a stress-free joining process.
                    </p>
                  </TeamMemberCard>
                </div>
                <div className="teamMember hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
