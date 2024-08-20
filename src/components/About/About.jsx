import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
               <img src= {profile_img} alt="" /> 
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I specialize in developing and deploying efficient,
               scalable web and software applications. With a strong foundation in both frontend and
               backend technologies,</p> <p> I am committed to delivering high-quality solutions and continuously 
               learning to stay ahead in the tech industry.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"75%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Angular JS</p><hr style={{width:"40%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Laravel</p><hr style={{width:"55%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Python</p><hr style={{width:"55%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Wordpress</p><hr style={{width:"80%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
        </div>
    </div>
  )
}

export default About