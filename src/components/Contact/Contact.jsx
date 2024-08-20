import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4a654d01-38cc-450d-a333-a9aa8a9b46a3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
               <h1>Let's talk</h1>
               <p>I'm currently available to take on new projects</p> 
               <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>Thamidun998@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+9477-2140348</p>
                    </div>

                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Anuradhapura,North Central,Srilanka</p>
                    </div>
               </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name </label>
                <input type='text' placeholder='Enter Your Name' name='name'></input>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" placeholder='Enter Your message' rows='5'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact