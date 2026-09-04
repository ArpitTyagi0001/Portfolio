import { useState } from "react";
import "./App.css";
import photo from "./assets/photo.png";
import developer from "./assets/developer.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFolder,
  FaDownload,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaSchool,
  FaJava,
  FaReact,
  FaDatabase,
  FaTools,
  FaCloud,
  FaCode,
  FaBriefcase,
  FaWhatsapp,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="temp">
          <div className="header-logo">AT</div>

          <div className="header-info">
            <div className="header-name">Arpit Tyagi</div>
            <div className="header-profile">JAVA DEVELOPER</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-link">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#project">Projects</a>
          <a href="#github">GitHub</a>

          <a href="#contact" className="contact">
            Contact
          </a>

          <a
            href="https://drive.google.com/file/d/1MY0lbLKFHBJHDKX5iJdyZV_Ib3zrsED8/view"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <div className="both">
              <div>
                <FaDownload />
              </div>
              Resume
            </div>
          </a>
        </nav>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>

            <a href="#project" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#github" onClick={() => setMenuOpen(false)}>
              GitHub
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="https://drive.google.com/file/d/1MY0lbLKFHBJHDKX5iJdyZV_Ib3zrsED8/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-resume"
              onClick={() => setMenuOpen(false)}
            >
              <FaDownload />
              &nbsp; Resume
            </a>
          </nav>
        )}
      </header>
      <main className="main">
        <p className="opp">
          🟢 Open to full-time opportunities and internships
        </p>
        <section id="home">
          <div className="intro">
            <p className="greeting">Hello, I'm 👋</p>
            <h1>
              Arpit <span>Tyagi</span>
            </h1>
            <h2>Java Full Stack Developer</h2>
            <p className="me">
              Building scalable applications with{" "}
              <span className="highlight">
                Java, Spring Boot & Microservices
              </span>
              . Skilled in{" "}
              <span className="highlight">
                Kafka, Redis, REST APIs & JWT Security
              </span>
              . Experienced with{" "}
              <span className="highlight">React.js, PostgreSQL & Docker</span>.
              Strong in{" "}
              <span className="highlight">
                DSA, problem-solving & full-stack development
              </span>
              . Passionate about writing{" "}
              <span className="highlight">clean, maintainable code</span> and
              building reliable systems.
            </p>

            <div className="home-link">
              <a
                href="https://drive.google.com/file/d/1MY0lbLKFHBJHDKX5iJdyZV_Ib3zrsED8/view"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-bt"
              >
                <div className="home-both-1">
                  <div>
                    <FaDownload />
                  </div>
                  Download Resume
                </div>
              </a>
              <a href="#project">
                <div className="home-both-2">
                  <div>
                    <FaFolder />
                  </div>
                  View Projects
                </div>
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/arpit-tyagi0001/"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/ArpitTyagi0001"
                target="_blank"
                rel="noreferrer"
                className="github"
              >
                <FaGithub />
              </a>

              <a
                href="https://leetcode.com/u/ArpitTyagi123/"
                target="_blank"
                rel="noreferrer"
                className="leetcode"
              >
                <SiLeetcode />
              </a>

              <a href="mailto:arpittyagi389@gmail.com" className="email-link">
                <FaEnvelope />
              </a>
            </div>
            <div className="some-key">
              <div className="stat-box">
                <p className="stat-number">3</p>
                <p className="stat-label">Projects Built</p>
              </div>

              <div className="stat-box">
                <p className="stat-number">450+</p>
                <p className="stat-label">DSA Solved</p>
              </div>

              <div className="stat-box">
                <p className="stat-number">10+</p>
                <p className="stat-label">Technologies</p>
              </div>
            </div>
          </div>
          <div className="ring">
            <div className="border-black">
              <img src={photo} className="profile-pic" alt="Arpit Tyagi" />
            </div>
          </div>
        </section>
        <section id="about">
          <h3>About Me</h3>
          <div className="about">
            <div className="developer-box">
              <img
                src={developer}
                alt="Arpit Tyagi"
                className="developer-photo"
              />
            </div>
            <div className="about-content">
              <p className="greet">👋 WHO I AM</p>

              <p className="profile">Java Full Stack Developer</p>
              <div className="location">
                <div>
                  <FaMapMarkerAlt />
                </div>
                Meerut , India
              </div>
              <p className="about-description">
                I'm the kind of developer who wants to know why something works,
                not just that it does. That curiosity shows up in how I build —
                designing microservices with Spring Boot and Kafka that don't
                just function but scale, and solving 450+ algorithmic problems
                on LeetCode because strong fundamentals make better engineers. I
                care about clean architecture, secure APIs, and systems that
                hold up under real load.
              </p>
              <div className="some-key-1">
                <div className="stat-box-1">
                  <p className="stat-number-1">
                    <FaGraduationCap className="stat-icon-1" />
                    Education
                  </p>
                  <p className="stat-label-1">B.Tech CSE</p>
                </div>

                <div className="stat-box-1">
                  <p className="stat-number-1">
                    <FaFolder className="stat-icon-1" />
                    Projects
                  </p>
                  <p className="stat-label-1">3+ Real Projects</p>
                </div>
              </div>

              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Spring Security</li>
                <li>Spring AI</li>
                <li>Jpa</li>
                <li>Hibernate</li>
                <li>Microservices</li>
                <li>Kafka</li>
                <li>Redis</li>
                <li>React.js</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education">
          <h3>
            <div className="education-heading">
              <FaGraduationCap /> Education
            </div>
          </h3>

          <div className="education-card">
            <div className="education-yr">
              <span>🟢 2023-2027</span>
            </div>
            <div className="education-content">
              <p className="education-degree">
                <div className="cap">
                  <FaGraduationCap />
                </div>
                B.Tech in Computer Science & Engineering
              </p>

              <p className="education-college">
                <div className="school">
                  <FaSchool />
                </div>
                Meerut Institute of Engineering and Technology
              </p>
              <p className="education-about">
                Built a strong foundation in programming, databases,
                object-oriented programming, software engineering and web
                development
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <h5>TECHNOLOGIES I WORK WITH</h5>
          <h3>Tech Stack</h3>
          <div className="skill">
            <div className="lang">
              <span className="sign">
                <FaJava />
              </span>
              <h4>Backend</h4>
              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>MicroServices</li>
                <li>Spring Security</li>
                <li>Spring AI</li>
                <li>JPA & Hibernate</li>
                <li>Apache Kafka</li>
              </ul>
            </div>
            <div className="lang">
              <span className="sign">
                <FaReact />
              </span>
              <h4>Frontend</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="lang">
              <span className="sign">
                <FaDatabase />
              </span>
              <h4>DataBase</h4>
              <ul>
                <li>MySql</li>
                <li>PostgreSql</li>
                <li>Mongo DB</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="lang">
              <span className="sign">
                <FaTools />
              </span>
              <h4>Devops & Tools</h4>
              <ul>
                <li>Docker</li>
                <li>Git & GitHub</li>
                <li>CI/CD (basic)</li>
                <li>Postman</li>
                <li>IntelliJ IDEA</li>
                <li>Eclipse</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div className="lang">
              <span className="sign">
                <FaCloud />
              </span>
              <h4>Cloud & AI</h4>
              <ul>
                <li>AWS Cloud</li>
                <li>Prompt Engineering</li>
                <li>LLM Models</li>
                <li>RAG Basics</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="project">
          <h5>SELECTED WORK</h5>
          <h3>Engineering Projects</h3>
          <div className="project">
            <div className="project-card">
              <div className="p-logo">
                <span className="p-logo-1">
                  <FaCode />
                </span>
                <h4>PulseStreamAI</h4>
              </div>
              <p>
                Real-time platform for tracking and analyzing location events as
                they happen, with live dashboard statistics and fast data
                access. Generates AI-powered summaries to provide clear insights
                into current activity.
              </p>
              <ul>
                <li>Java</li>
                <li>Spring-Boot</li>
                <li>React</li>
                <li>Redis</li>
                <li>Kafka</li>
                <li>Spring AI</li>
                <li>Spring Security</li>
                <li>postgresql</li>
              </ul>
              <div className="g-logo">
                <a
                  href="https://github.com/ArpitTyagi0001/pulsestream-ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="p-logo">
                <span className="p-logo-1">
                  <FaCode />
                </span>
                <h4>Hospital Management System</h4>
              </div>
              <p>
                System for managing patients, doctors, appointments, insurance,
                and departments. Provides secure authentication and role-based
                access while simplifying everyday hospital operations.
              </p>
              <ul>
                <li>Java</li>
                <li>Spring-Boot</li>
                <li>React</li>
                <li>Spring Security</li>
                <li>postgresql</li>
              </ul>
              <div className="g-logo">
                <a
                  href="https://github.com/ArpitTyagi0001/hospital-management-system-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="p-logo">
                <span className="p-logo-1">
                  <FaCode />
                </span>
                <h4>Employee Management System</h4>
              </div>
              <p>
                System for managing employee profiles, departments, roles, and
                company records. Supports efficient employee data management
                through centralized creation, updating, viewing, and removal of
                records.
              </p>
              <ul>
                <li>Java</li>
                <li>Spring-Boot</li>
                <li>Spring Security</li>
                <li>postgresql</li>
              </ul>
              <div className="g-logo">
                <a
                  href="https://github.com/ArpitTyagi0001/Employee-Mangement"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="github">
          <div className="github-heading">
            <h5>OPEN SOURCE</h5>
            <h3>GitHub Portfolio</h3>
          </div>
          <p>
            My GitHub portfolio is a collection of my projects, code, and
            hands-on work in Java, Spring Boot, and React. Explore my
            repositories to see backend systems, full-stack applications, APIs,
            and real-world development projects.
          </p>
          <div className="github-logo">
            <div className="s-logo">
              <FaGithub />
            </div>
            <div>
              <div className="github-profile">ArpitTyagi0001</div>
              <div className="github-profile-1">
                <div>Java Full Stack Developer</div>
              </div>
            </div>
            <div>
              <div className="github-logo-1">
                <a
                  href="https://github.com/ArpitTyagi0001"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  Visit Profile
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="contact-heading">
            <h5>Get In Touch</h5>
            <h3> Let's Connect</h3>
          </div>
          <p className="connect-about">
            I'm currently looking for Java Full Stack Developer opportunities.
            Whether it's a job opportunity, collaboration or just a friendly
            conversation, I'd love to hear from you.
          </p>
          <div className="connect-info">
            <div className="connect-info-1">
              <div className="connect-email">
                <span className="connect-logo">
                  <FaEnvelope />
                </span>
                <p className="connect-name">Email</p>
                <a
                  href="mailto:arpittyagi389@gmail.com"
                  className="connect-email-link"
                >
                  arpittyagi389@gmail.com
                </a>
              </div>
              <div className="connect-linkedin">
                <span className="connect-logo">
                  <FaLinkedin />
                </span>
                <p className="connect-name">Linkedin</p>
                <a
                  href="https://www.linkedin.com/in/arpit-tyagi0001/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin"
                >
                  View Profile
                </a>
              </div>
            </div>

            <div className="connect-info-2">
              <div className="connect-location">
                <span className="connect-logo">
                  <FaMapMarkerAlt />
                </span>
                <p className="connect-name">Location</p>
                <p className="connect-location-1">Meerut , India</p>
              </div>
              <div className="connect-stay">
                <span className="connect-logo">
                  <FaBriefcase />
                </span>
                <p className="connect-name">Status</p>
                <p className="connect-stay-name-1">Open To Work</p>
              </div>
            </div>
            <a
              href="https://wa.me/918445970389"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp />
              Let's Connect on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-contant">
          <div className="left-side">
            <div className="footer-side">
              <div className="footer-logo">AT</div>
              <div className="footer-info">
                <div className="footer-name">Arpit Tyagi</div>
                <div className="footer-profile">JAVA DEVELOPER</div>
              </div>
            </div>
            <div className="footer-about">
              <p>
                I’m passionate about Java Full Stack Development and enjoy
                building scalable, user-friendly applications. I focus on
                writing clean, maintainable code and continuously improving my
                technical skills.
              </p>
            </div>
            <div className="footer-link">
              <div className="footer-social-links">
                <a
                  href="https://www.linkedin.com/in/arpit-tyagi0001/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-linkedin-link"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/ArpitTyagi0001"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-github-link"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://leetcode.com/u/ArpitTyagi123/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-leetcode-link"
                >
                  <SiLeetcode />
                </a>

                <a
                  href="mailto:arpittyagi389@gmail.com"
                  className="footer-email-link"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="nav"> QUICK LINKS</div>
            <nav className="footer-link-1">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#project">Projects</a>
              <a href="#github">GitHub</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="footer-right">
            <div className="footer-right-title">LET'S CONNECT</div>

            <p className="footer-right-text">
              Open to opportunities, collaborations, and interesting projects.
            </p>

            <a href="#contact" className="footer-cnt">
              Get in touch <span>↗</span>
            </a>

            <div className="footer-status">
              <span className="status-dot"></span>
              🟢 Available for opportunities
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          © 2026 Arpit Tyagi · Think. Build. Evolve.
        </div>
      </footer>
    </>
  );
}

export default App;
