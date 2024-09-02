import React from 'react'
import './Self.css'
import profile_img from '../../assets/profile_img.svg'
const Self = () => {
  return (
    <div className='Self'>
     <img src={profile_img} alt="" />
     <h1><span>Hello, I'm Onkar,</span> Cloud Software Developer based in USA.</h1>
     <p>A software developer with overall 3 years of IT experience. Have Experties in AWS cloud. Profecient in programming languages like Python, Java and C</p>
     <div className="Self-action">
        <div className="Self-connect"> Connect with me</div>
        <div className="Self-resume">My resume</div>
     </div>
    </div>
  )
}

export default Self