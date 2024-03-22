import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import './contact.css';

const contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
     
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will contact you as soon as possible.");
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
    e.target.reset()
};

  return (
    <section className='contact'>
      <h2 className="heading">Contact Me</h2>
      <div className='contact-container'>
        <div className="contact-options">
          <article className='contact-option'>
            <MdOutlineMailOutline className='contact-option-icon' />
            <h4>E-mail</h4>
            <h5>abdalzobair27@gmail.com</h5>
            <h4>Send a message</h4>
          </article>
          <article className='contact-option'>
            <BsWhatsapp className='contact-option-icon' />
            <h4>Whatsapp</h4>
            <h5>01855864435</h5>
            <h4>Send a message</h4>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" 
            name='name' placeholder="What's your good name?" required />
          <input type='email' name='email' placeholder="What's your E-mail?" required />
          <input name='message' rows="7" placeholder='What you want to say?' required />
          <button type='submit' className='btn'>{loading ? "Sending..." : "Send"}</button>
        </form>
      </div>
    </section>
  )
}

export default contact