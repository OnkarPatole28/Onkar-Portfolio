import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
     <img src={profile_img} alt="" />
     <h1>Hello, I'm Onkar, Cloud Software Developer based in USA.</h1>
     <p>A software developer with overall 3 years of IT experience. Have Experties in AWS cloud. Profecient in programming languages like Python, Java and C</p>
     <div className="hero-action">
        <div className="hero-connect"> Connect with me</div>
        <div className="hero-resume">My resume</div>
     </div>
    </div>
  )
}

export default Hero