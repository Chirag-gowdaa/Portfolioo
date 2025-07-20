import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <div className="left-section">
          <img src="./Chirag.jpg" alt="Chirag S" className="profile-pic" />
          <h2 className="name">Chirag S</h2>
          <h3 className="title">CS & Business System Engineer</h3>
          <div className="res-btn">
            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="btn view">
              View Resume
            </a>
            <a href="./resume.pdf" download className="btn download">
              Download Resume
            </a>
          </div>

          <ul className="list">
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
          <div className="contact">
            Phone No. :+91 9036552272 <br />
            Email: Gowdachiru552@gmail.com
          </div>
        </div>

        <div className="rightpart">
          <section id="about">
            <h2 className="section-title">About me</h2>
            <div className="about">
              <p>
                Hey, I’m Chirag — a passionate coder, gym freak, and part-time content creator.
                I thrive on building things that live on the web. Whether it's crafting sleek UIs,
                solving tough problems with code, or bringing ideas to life through side projects,
                I’m always looking to learn and push boundaries.
              </p>
              <p>
                When I’m not in front of a screen, you’ll find me lifting heavy at the gym or
                creating content that reflects my journey — in tech, fitness, and beyond. I believe
                discipline, creativity, and consistency are the real secret weapons in life.
              </p>
              <p>Let’s build, lift, and grow.</p>
            </div>
          </section>

          <section id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            </div>
          </section>
          <section id="projects">
            <h2 className='section-title'>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Password Manager</h3>
                <p>A secure full-stack app to store and manage passwords. Users can add, view, and delete credentials with encryption.</p>
                <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB</p>
                <a href="https://password-manager-frontend-coral.vercel.app" target="_blank">Live Demo</a>
              </div>
              <div className="project-card">
                <h3>Mood Matrix</h3>
                <p>A mood-tracking web app that lets users log emotions daily with graphs & reflections. Built using React and localStorage.</p>
              </div>
              <div className="project-card">
                <h3>Todo App</h3>
                <p>A sleek, responsive Todo List app built with React. Includes animations, persistent storage, and CRUD operations.</p>
              </div>
              <div className="project-card">
                <h3>Spotify Clone</h3>
                <p>A fully functional Spotify clone built using React, Redux, and the Spotify Web API. Features real-time playback, playlists, and search.</p>
              </div>
              <div className="project-card">
                <h3>Free2Feed (Hackathon)</h3>
                <p>A platform created during a hackathon to connect surplus food donors with NGOs. Built using MERN stack and deployed on Render.</p>
              </div>
            </div>
          </section>
          <section id='#experience'>
            <h2 className="section-title">Experience</h2>
            <div className="exp">No experience yet...</div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;


