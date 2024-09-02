import React from 'react'
import './Self.css'
import profile_img from '../../assets/01.png'
const Self = () => {
  return (
    <div className='self'>
     <img src={profile_img} alt="" />
     <h1><span>Hello, I'm Onkar,</span> Cloud Software Developer based in USA.</h1>
     <p>A software developer with overall 3 years of IT experience. Have Experties in AWS cloud. Profecient in programming languages like Python, Java and C</p>
     <div className="self-action">
        <div className="self-connect"> Connect with me</div>
        <div className="self-resume">My resume</div>
     </div>
    </div>
  )
}

export default Self