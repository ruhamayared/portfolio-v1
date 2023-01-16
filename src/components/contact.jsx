import React from 'react';
import './contact.css'
import linkedin from '../assets/linkedin-logo.png'
import github from '../assets/Octocat.png'
import email from '../assets/email.png'

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <div className="links">
      <a href="mailto:ruhamayared1@gmail.com" target="_blank" rel="noopener noreferrer"><img className="icon" src={email} alt="email icon"/></a>
        <a href="https://www.linkedin.com/in/ruhama-yared/" rel="noopener noreferrer" target="_blank"><img className="icon" src={linkedin} alt="linkedIn logo" /></a>
        <a href="https://github.com/ruhamayared" rel="noopener noreferrer" target="_blank"><img className="icon github" src={github} alt="github logo" /></a>
      </div>
    </section>  
  );
}

export default Contact;