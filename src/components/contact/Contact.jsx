import React from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_552efb7', 'template_llm3vp4',form.current,'GwfE9-3QMuM90cXaz')
    e.target.reset();
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hiteshprajapati2094@gmail.com</h5>
            <a href="mailto:hiteshprajapati2094@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>_hitesh_421</h5>
            <a href="https://www.instagram.com/_hitesh_421/" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917567270120</h5>
            <a href="https://api.whatsapp.com/send?phone=+917567270120" target='_blank'>Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messageg</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
