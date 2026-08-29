import "./App.css";
import photo from "./assets/photo.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFolder,
  FaDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function App() {
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
              </div>{" "}
              Resume
            </div>
          </a>
        </nav>
      </header>
      <main className="main">
        <p className="opp">
          🟢 Open to full-time opportunities and internships
        </p>
        <section id="home">
          <div className="intro">
            <p className="greeting">Hello, I'm 👋</p>
            <h1>Arpit Tyagi</h1>
            <h2>Java Full Stack Developer</h2>
            <p className="me">
              <p>
                Building scalable applications with{" "}
                <span className="highlight">
                  Java, Spring Boot & Microservices
                </span>
                . Skilled in{" "}
                <span className="highlight">
                  Kafka, Redis, REST APIs & JWT Security
                </span>
                . Experienced with{" "}
                <span className="highlight">React.js, PostgreSQL & Docker</span>
                . Strong in{" "}
                <span className="highlight">
                  DSA, problem-solving & full-stack development
                </span>
                . Passionate about writing{" "}
                <span className="highlight">clean, maintainable code</span> and
                building reliable systems.
              </p>
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
          </div>
          <div className="profile-pic">
            <img src={photo} alt="Arpit Tyagi" className="profile-pic" />
          </div>
        </section>
        <section id="about">
          <h3>About</h3>
          <p>
            I'm the kind of developer who wants to know why something works, not
            just that it does. That curiosity shows up in how I build —
            designing microservices with Spring Boot and Kafka that don't just
            function but scale, and solving 450+ algorithmic problems on
            LeetCode because strong fundamentals make better engineers. I care
            about clean architecture, secure APIs, and systems that hold up
            under real load.
          </p>
        </section>

        <section id="education">
          <h3>Education</h3>
          <div>
            <p>Course : B.Tech in Computer Science & Engineering</p>
            <p>College : Meerut Institute of Engineering and Technology</p>
            <p>Duration: 2023 - 2027</p>
            <p>CGPA : 7.96/10</p>
          </div>
        </section>

        <section id="skills">
          <h3>Tech Skills</h3>
          <div className="skill">
            <div className="lang">
              <h4>Coding languages</h4>
              <ul>
                <li>Java</li>
                <li>Java Scipt</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="lang">
              <h4>Frontend</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="lang">
              <h4>Backend</h4>
              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>MicroServices</li>
                <li>Spring Security</li>
                <li>Spring AI</li>
                <li>JPA / Hibernate</li>
                <li>Redis</li>
                <li>Kafka</li>
              </ul>
            </div>
            <div className="lang">
              <h4>Devops/Tools</h4>
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
              <h4>Cloud & AI</h4>
              <ul>
                <li>
                  AWS Cloud (EC2 , IAM , CloudWatch , S3 , IaC, Cloud migration)
                </li>
                <li>Prompt Engineering</li>
                <li>Basic Understanding of LLM Models</li>
                <li>Basic Understanding of RAG</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="soft">
          <h3>Soft Skill</h3>
          <div className="soft-skill">
            <p> • Strong DSA problem-solving mindset (450+ LeetCode)</p>
            <p>
              • Comfortable owning a feature end-to-end (backend + frontend)
            </p>
            <p>
              • Clear technical communication — documents APIs and system design
              decisions
            </p>
          </div>
        </section>
        <section id="project">
          <h3>Projects</h3>
          <div className="project">
            <h4>PulseStreamAI</h4>
            <p>
              AI-Powered Real-Time Event Monitoring System built with Spring
              Boot, Apache Kafka, Redis, Spring AI, Spring Security (JWT),
              Microservices, PostgreSQL, React.js, and Docker.
            </p>
            <ul>
              <li>
                Event-driven microservices system using Apache Kafka, processing
                1000+ real-time events per second with sub-second latency.
              </li>
              <li>
                Redis + PostgreSQL query service cutting query latency by 70%
                through distributed caching with TTL-based invalidation.
              </li>
              <li>
                JWT-based authentication service with a Spring Cloud API Gateway
                enforcing centralized security across microservices.
              </li>
              <li>
                AI service built with Spring AI to auto-summarize platform
                activity and generate live insights.
              </li>
              <li>
                Responsive React.js dashboard with real-time data polling and
                event analytics visualization.
              </li>
              <li>
                Fully containerized (6 microservices + Kafka + PostgreSQL +
                Redis) with Docker Compose for single-command deployment.
              </li>
            </ul>
            <a
              href="https://github.com/ArpitTyagi0001/pulsestream-ai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <h4>Hospital Management System</h4>
            <p>
              Secure backend system built with Spring Boot, Spring Security
              (JWT), JPA/Hibernate, PostgreSQL, REST APIs, and Maven.
            </p>
            <ul>
              <li>
                Modeled around five core entities — Patient, Doctor, Insurance,
                Appointment, and Department.
              </li>
              <li>
                JWT-based authentication with 20+ RESTful API endpoints and full
                CRUD operations across all entities.
              </li>
              <li>
                DTO pattern with ModelMapper to keep the API layer clean and
                secure.
              </li>
              <li>
                Optimized PostgreSQL performance through query indexing and
                JPA/Hibernate lazy loading.
              </li>
            </ul>
            <a
              href="https://github.com/ArpitTyagi0001/hospital-management-system-backend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
        <section className="cert">
          <h3>Certifications & Achievements</h3>
          <ul>
            <li>
              NPTEL Elite — Programming in Java (IIT Kharagpur) Certificate ID:
              NPTEL25CS57S1152000387
            </li>
            <li>
              450+ problems solved on LeetCode (Arrays, Strings, Trees, DP,
              Graphs)
            </li>
            <li>
              Active participant in coding contests on LeetCode & HackerRank
            </li>
          </ul>
        </section>
        <section id="contact">
          <h3>Contact Me</h3>
          <p>Have an opportunity or just want to say hi? Fill this out.</p>
          <form
            action="https://formspree.io/f/xkjwlwkb"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="name">
              <label htmlFor="name">Name : </label>
              <input type="text" id="name" name="name" required />
            </div>
            <br></br>
            <div className="email">
              <label htmlFor="email">Email : </label>
              <input type="email" id="email" name="email" required />
            </div>
            <br></br>
            <div className="msg">
              <label htmlFor="msg">Message : </label>
              <textarea id="msg" name="msg" required />
            </div>
            <br></br>
            <div className="attachment">
              <label htmlFor="attachment">Attachment (optional) :</label>
              <input type="file" id="attachment" name="attachment" />
            </div>
            <button type="submit" className="button">
              Send
            </button>
          </form>
        </section>
        <section id="github">
          <div className="text">
            <div>OPEN SOURCE</div>
            <div>GitHub Portfolio</div>
            <p>
              My GitHub portfolio is a collection of my projects, code, and
              hands-on work in Java, Spring Boot, and React. Explore my
              repositories to see backend systems, full-stack applications,
              APIs, and real-world development projects.
            </p>
          </div>
          <div className="logo">
            <FaGithub />
            <div className="github-profile">
              <div>ArpitTyagi0001</div>
              <div>Java Full Stack Developer</div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-title">Let's build something together 🚀</p>
        <p className="footer-link">
          <a href="mailto:arpittyagi389@gmail.com">Email Me</a>

          <a
            href="https://www.linkedin.com/in/arpit-tyagi0001/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ArpitTyagi0001"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Arpit Tyagi. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
