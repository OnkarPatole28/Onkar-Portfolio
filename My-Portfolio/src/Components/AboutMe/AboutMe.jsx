import React from 'react'
import './AboutMe.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const AboutMe = () => {
  return (
    <div className='aboutme'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe