import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Thamindu Nipun,</span> Fullstack Engineer based in Srilanka.</h1>
            <p>A software engineer with one year of experience, currently working at Advirto, 
               a digital marketing company.</p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero