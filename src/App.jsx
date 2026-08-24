import "./App.css";
import photo from "./assets/photo.png";

function App() {
  return (
    <>
      <header>
        <div>
          <h1>Hi 👋, I'm Arpit Tyagi</h1>
          <p>Java Full Stack Developer</p>
        </div>
        <img src={photo} alt="Arpit Tyagi" className="profile-pic" />
      </header>

      <main>
        <section>
          <h3>Contact Details</h3>
          <div>
            <p>Email : arpittyagi389@gmail.com</p>
            <p>Phone : +91 8445970389</p>
            <p>Location : Meerut, Uttar Pradesh, India</p>
            <p className="social-links">
              <a
                href="https://www.linkedin.com/in/arpit-tyagi0001/"
                target="_blank"
              >
                LinkedIn
              </a>

              <a href="https://github.com/ArpitTyagi0001" target="_blank">
                GitHub
              </a>

              <a href="https://leetcode.com/u/ArpitTyagi123/" target="_blank">
                LeetCode
              </a>
            </p>
          </div>
        </section>
        <section>
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

        <section>
          <h3>Education</h3>
          <div>
            <p>Course : B.Tech in Computer Science & Engineering</p>
            <p>College : Meerut Institute of Engineering and Technology</p>
            <p>Duration: 2023 - 2027</p>
            <p>CGPA : 7.96/10</p>
          </div>
        </section>

        <section>
          <h3>Tech Skills</h3>
          <div>
            <h4>Frontend</h4>
            <ul>
              <li>Html5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
            <h4>Backend</h4>
            <ul>
              <li>Java</li>
              <li>SpringBoot</li>
              <li>MicroServices</li>
              <li>Spring Security</li>
              <li>Spring Ai</li>
              <li>Jpa/hibernate , Jdbc</li>
              <li>Redis</li>
              <li>Kafka</li>
            </ul>
            <h4>Devops/Tools</h4>
            <ul>
              <li>Docker</li>
              <li>Git & GitHub</li>
              <li>CI/CD (basic)</li>
              <li>PostMan</li>
              <li>Intellij Idea</li>
              <li>Eclips</li>
              <li>Vs Code</li>
            </ul>
            <h4>Coding languages :</h4>
            <ul>
              <li>Java</li>
              <li>Java Scipt</li>
              <li>Python</li>
            </ul>
            <h4>Cloud Computing</h4>
            <p>
              AWS Cloud (EC2 , IAM , Cloud Watch , S3 , Iac , Cloud migration)
            </p>
            <h4>AI</h4>
            <ul>
              <li>Promt Engineering</li>
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
        <section>
          <h3>Resume</h3>
          <a
            href="https://drive.google.com/file/d/1MY0lbLKFHBJHDKX5iJdyZV_Ib3zrsED8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </section>
        <section>
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
          </div>
          <div>
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
      </main>
      <footer>
        <p>Let's build something together 🚀</p>
        <p>
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
        <p className="copyright">
          © {new Date().getFullYear()} Arpit Tyagi. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
