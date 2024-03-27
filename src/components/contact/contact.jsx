import React, { useRef, useState, useContext } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { ThemeContext } from '../../context';

export const Contact = () => {
  const formRef = useRef();
  const[done,setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  const handleSubmit = (e) => {
    e.preventDefault(); 
    //send data to my email address
    emailjs
      .sendForm(
        'service_8jz2rs2', 
        'template_0vkwhur', 
        formRef.current, {
        publicKey: 'f-XZy2xtp7N0hesg9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <div className="c-left-wrapper">
              <div className="c-title">
                Let's Talk
              </div>
              <div className="c-info">
              <div className="c-info-item">
                  <i class="fa-brands fa-square-x-twitter"></i>
                  @elonmusk
                </div>
                <div className="c-info-item">
                  <i class="fa-solid fa-phone"></i>
                  +1-893-113509132
                </div>
                <div className="c-info-item">
                  <i class="fa-solid fa-envelope"></i>
                  elonmusk@x.com
                </div>
                <div className="c-info-item">
                  <i class="fa-solid fa-location-dot"></i>
                  1 Tesla Road, Austin, TX 78725
                </div>
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Have any inquiry, feedback, suggestion or comments?</b> feel free to reach us out via email
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" name="user_name" placeholder='Name' />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" name="user_subject" placeholder='Subject' />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" name="user_email" placeholder='Email' />
              <textarea style={{backgroundColor: darkMode && "#333"}} name="message" rows="5" placeholder='Message'></textarea>
              <button>Submit</button><br />
              {done && <p className='c-sent'>Sent!</p>}
            </form>
          </div>
        </div>
    </div>
  )
}
