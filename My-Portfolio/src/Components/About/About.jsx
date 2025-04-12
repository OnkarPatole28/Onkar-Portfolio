import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am Onkar Patole, a Computer Science graduate student at Binghamton University (SUNY) with over 3 years of professional experience as a DevOps and Software Engineer.</p>
                <p>Currently, I am working as a Cloud DevOps Engineer Intern at Michigan Health Information Network Shared Services (MiHIN).</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>AWS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>React JS, Node JS & JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Docker, Kuberentes, Terraform, Jenkins & Argo CD</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Python, Java, SQL</p><hr style={{width:"90%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <a href="https://www.credly.com/users/onkar-patole.9a0b2ab9" target="_blank" rel="noopener noreferrer" className="achievement-link">
            <h1>3x</h1>
            <p>AWS CERTIFIED</p>
          </a>
        </div>
        <hr />
        <div className="about-achievement">
          <a href="https://www.credly.com/badges/6eed6b9a-6b8c-487d-b55c-704ffc5d2b89/public_url" target="_blank" rel="noopener noreferrer" className="achievement-link">
            <p>Certified Kubernetes Administrator (CKA)</p>
          </a>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
