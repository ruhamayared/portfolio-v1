import React from 'react';
import image from '../assets/profilepic.png';
import './bio.css'

function Bio() {

  return (
    <section id="bio">
      <h1 className="name">Ruhama Yared</h1>
      <h2 className="title">Software Engineer</h2>
      <div className="profile">
        <div className="pic">
          <img src={image} alt="profile img" />
        </div>
        <div className="bio-skills">
          <p>
          I am a software engineer with a strong background in education and public policy. I have experience with technologies such as JavaScript, React, HTML, CSS, and Python. I am highly motivated and dedicated to constantly improving my skills, and I am particularly interested in exploring the areas of cloud architecture, machine learning, and AI. With my strong background in math, I am particularly interested in applying my skills to these fields. I am currently a middle and high school math teacher and bring a unique perspective to the field of software engineering with my education background and real-world experience.
          </p>
          <p>
            <span>Skills: </span>JavaScript, HTML, CSS, React, Node, Express, EJS, SQL, Mongoose/MongoDB, Django, Python, Git, and GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;