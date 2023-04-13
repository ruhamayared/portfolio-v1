import React from 'react';
import './projects.css'
import SS5 from '../assets/healing-pages.png'
import SS4 from '../assets/the-spice-app.png'
import SS3 from '../assets/road-trip-buddy.png'
import SS2 from '../assets/polynomials-app.png'
import SS1 from '../assets/whats-there-to-drink.png'

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-div">
        <div className="project-img">
          <img src={SS5} alt="Healing Pages landing page." />
        </div>
        <div className="project-description">
          <h2 className="subtitle">Healing Pages</h2>
          <p>The site allows users to create an account and start journaling. Users can create, read, update, and delete journal entries, as well as view past entries by date. The app/site is built using the Go programming language and Echo web framework for the backend API, and React and TypeScript for the frontend.</p>
          <p>Go | Echo | TypeScript | React | Postgres </p>
          <p>Project is deployed <a href="https://main--magenta-genie-2c7a89.netlify.app/" rel="noopener noreferrer" target="_blank">here</a>. </p>
          <p>Github repo for <em>Healing Pages</em> can be viewed <a href="https://github.com/ruhamayared/Healing-Pages-frontend" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS4} alt="The Spice App landing page." />
        </div>
        <div className="project-description">
          <h2 className="subtitle">The Spice App</h2>
          <p>Built using Python and Django for the backend, and TypeScript and React for the frontend, this app provides users with the ability to add spice names, descriptions, and images, and manage them with all CRUD functionality.</p>
          <p>Django | TypeScript | React | Postgres | Tailwind CSS </p>
          <p>Project is deployed <a href="https://visionary-biscotti-9f36e0.netlify.app/" rel="noopener noreferrer" target="_blank">here</a>. </p>
          <p>Github repo for <em>The Spice App</em> can be viewed <a href="https://github.com/ruhamayared/The-Spice-App-React" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS3} alt="Road Trip Buddy Lake of Ozarks show page." />
        </div>
        <div className="project-description">
          <h2 className="subtitle">Road Trip Buddy</h2>
          <p>Full-stack application that allows users to easily add, view, and manage destinations as they embark on a road trip. Users can create detailed entries with names, links, addresses, and notes for each location on their journeys. Users can also check off each destination as they visit them and even update or delete them as needed.</p>
          <p>React | Express | MongoDB | Mongoose | Node.js | CSS3 </p>
          <p>Project is deployed <a href="https://heartfelt-dasik-3376da.netlify.app/" rel="noopener noreferrer" target="_blank">here</a>. </p>
          <p>GitHub repo for <em>Road Trip Buddy</em> can be viewed <a href="https://github.com/ruhamayared/Road-trip-buddy-frontend" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS2} alt="Polynomials App page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">Polynomials App</h2>
          <p>Full-stack application that allows users to view, create, read, and update polynomials as well as user comments.</p>
          <p>Express | MongoDB | Mongoose | Node.js | EJS | CSS3 | HTML5</p>
          <p>Project is deployed <a href="https://unit-2-project-ll26.onrender.com/" rel="noopener noreferrer" target="_blank">here</a>.</p>
          <p>GitHub repo for <em>Polynomials App</em> can be viewed <a href="https://github.com/ruhamayared/Polynomials-App" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS1} alt="What's there to Drink? page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">What's there to Drink?</h2>
          <p>A web application that displays cocktail information for a fun night using The Cocktail DB API.</p>
          <p>JavaScript | jQuery | CSS3 | HTML5</p>
          <p>Project is deployed <a href="https://unit1project.vercel.app/" rel="noopener noreferrer" target="_blank">here</a>.</p>
          <p>GitHub repo for <em>What's there to Drink?</em> can be viewed <a href="https://github.com/ruhamayared/Whats-there-to-Drink" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;