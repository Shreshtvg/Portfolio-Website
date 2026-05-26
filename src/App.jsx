import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import "./styles/global.css";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Hospital Front Desk System",
      description:
        "Full-stack hospital management platform with appointments, doctor scheduling and patient management.",
      techStack: "React • Node.js • Express • MySQL",
      image: "/images/pic1.webp",
      link: "https://hospital-front-desk-system.vercel.app/",
    },
    {
      id: 2,
      title: "GitHub Issue Analyzer",
      description:
        "AI-powered issue classification and summarization using LLMs with FastAPI backend.",
      techStack: "FastAPI • Streamlit • LLM",
      image: "/images/pic3.png",
      link: "https://github.com/Shreshtvg/Github_Issue_Analyser/",
    },
    {
      id: 3,
      title: "ClearScan",
      description:
        "OCR-based document processing system extracting structured data from PDFs and images.",
      techStack: "React • Express • SQLite • OCR",
      image: "/images/pic2.png",
      link: "https://clearscanproject.vercel.app/",
    },
  ];

  return (
    <div className="main-container">
      <Navbar />

      <section className="intro-section">
        <div className="intro-left">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm
            <br />
            <span className="gradient-text">
              Shresht V G
            </span>
          </motion.h1>

          <h2 className="hero-role">
            Software Engineer
          </h2>

          <p className="hero-description">
            Building scalable backend systems,
            AI-powered applications and
            production-ready web experiences.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1rvJBue1JgI10ngjfmIDlyXPil0XgEUC7/view"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="intro-right">
          <div className="emoji-container">
            👋
          </div>
        </div>
      </section>

      <section
        id="about"
        className="about-section"
      >
        <h2>About Me</h2>

        <p className="about-description">
          I'm a Software Engineer passionate
          about building full-stack
          applications, scalable backend
          systems and AI-powered products.

          My primary stack includes Go,
          React, PostgreSQL and Docker.
        </p>
      </section>

      <section
        id="projects"
        className="projects-section"
      >
        <h2 className="projects-heading">
          Featured Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span>
                  {project.techStack}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="skills-section"
      >
        <h2 className="skills-heading">
          Skills
        </h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Go, Node.js, Express, FastAPI</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>PostgreSQL, MySQL, MongoDB</p>
          </div>

          <div className="skill-card">
            <h3>DevOps</h3>
            <p>Docker, Git, Linux, AWS</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()}
        {" "}Shresht V G
      </footer>
    </div>
  );
}