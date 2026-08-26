import "./App.css";
import photo from "./assets/photo.png";

function App() {
  return (
    <>
      <header className="header">
        <div className="header-logo">Portfolio</div>
        <nav className="header-link">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skill</a>
          <a href="#education">Education</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>
      <main className="main">
        <section id="home">
          <div className="intro">
            <p className="greeting">Hi 👋, I'm</p>
            <h1>Arpit Tyagi</h1>
            <h2>Java Full Stack Developer</h2>
            <p>
              Building scalable backend systems and modern web applications.
              <br />
              Passionate about building scalable applications, writing clean and
              efficient code, and solving real-world problems with modern
              technologies.
            </p>
            <div className="contact-info">
              <span>
                <strong>✉</strong> arpittyagi389@gmail.com
              </span>

              <span>
                <strong>☎</strong> +91 8445970389
              </span>

              <span>
                <strong>📍</strong> Meerut, Uttar Pradesh, India
              </span>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/arpit-tyagi0001/"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/ArpitTyagi0001"
                target="_blank"
                rel="noreferrer"
                className="github"
              >
                GitHub ↗
              </a>

              <a
                href="https://leetcode.com/u/ArpitTyagi123/"
                target="_blank"
                rel="noreferrer"
                className="leetcode"
              >
                LeetCode ↗
              </a>
            </div>
          </div>
          <img src={photo} alt="Arpit Tyagi" className="profile-pic" />
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
          <div className="frontend" >
            <h4>Frontend</h4>
            <ul >
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
            </div>
            <div className="backend">
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
            <div className="devops">
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
            <div>
            <h4>Coding languages :</h4>
            <ul>
              <li>Java</li>
              <li>Java Scipt</li>
              <li>Python</li>
            </ul>
            </div>
            <div>
            <h4>Cloud Computing</h4>
            <p>
              AWS Cloud (EC2 , IAM , CloudWatch , S3 , IaC, Cloud migration)
            </p>
            </div>
            <div>
            <h4>AI</h4>
            <ul>
              <li>Prompt Engineering</li>
              <li>Basic Understanding of LLM Models</li>
              <li>Basic Understanding of RAG</li>
            </ul>
            </div>
        </section>
        <section>
          <h3>Soft Skill</h3>
          <p>Strong DSA problem-solving mindset (450+ LeetCode)</p>
          <p>Comfortable owning a feature end-to-end (backend + frontend)</p>
          <p>
            Clear technical communication — documents APIs and system design
            decisions
          </p>
        </section>
        <section id="resume">
          <h3>Resume</h3>
          <a
            href="https://drive.google.com/file/d/1MY0lbLKFHBJHDKX5iJdyZV_Ib3zrsED8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </section>
        <section id="project">
          <h3>Projects</h3>
          <div className="project">
            <h4>
              PulseStreamAI{" "}
              <a
                href="https://github.com/ArpitTyagi0001/pulsestream-ai"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </h4>
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
          </div>
          <div>
            <h4>
              Hospital Management System{" "}
              <a
                href="https://github.com/ArpitTyagi0001/hospital-management-system-backend"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </h4>
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
          </div>
        </section>
        <section>
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
            <div>
              <label htmlFor="name">Name : </label>
              <input type="text" id="name" name="name" required />
            </div>
            <br></br>
            <div>
              <label htmlFor="email">Email : </label>
              <input type="email" id="email" name="email" required />
            </div>
            <br></br>
            <div>
              <label htmlFor="msg">Message : </label>
              <textarea id="msg" name="msg" required />
            </div>
            <br></br>
            <div>
              <label htmlFor="attachment">Attachment (optional) :</label>
              <input type="file" id="attachment" name="attachment" />
            </div>
            <button type="submit">Send</button>
          </form>
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
