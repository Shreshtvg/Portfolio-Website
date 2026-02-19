// import React, { useEffect, useState } from "react";
// import axios from "axios";
import { motion } from "framer-motion";
import "./styles/global.css"; // Global styles

export default function App() {
  // const [setRepos] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.github.com/users/${process.env.REACT_APP_GITHUB_USERNAME}/repos?sort=updated`
  //     )
  //     .then((res) => setRepos(res.data.slice(0, 3)))
  //     .catch((err) => console.error(err));
  // }, []);

  const projects = [
    {
      id: 1,
      title: "Hospital Front Desk System",
      description:
        "Full-stack hospital management system for patient records, appointments, and doctor profiles with a streamlined front-desk workflow.",
      techStack: "React, Node.js, Express, MySQL",
      image: "/images/pic1.webp",
      link: "https://hospital-front-desk-system.vercel.app/",
    },
    {
      id: 2,
      title: "GitHub Issue Analyser",
      description:
        "AI-powered tool that uses LLMs to summarize and classify GitHub issues. Streamlit UI with a FastAPI backend.",
      techStack: "LLM, Streamlit, FastAPI",
      image: "/images/pic3.png",
      link: "https://github.com/Shreshtvg/Github_Issue_Analyser/",
    },
    {
      id: 3,
      title: "ClearScan",
      description:
        "Document scanner that uses OCR to extract personal details from PDFs and images for faster data entry.",
      techStack: "React, Node.js, Express, SQLite, Tesseract.js",
      image: "/images/pic2.png",
      link: "https://clearscanproject.vercel.app/",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "Express",
    "Go",
    "PostgreSQL",
    "Docker",
    "MongoDB",
  ];

  return (
    <div className="main-container">
      {/* Hero Section with Intro and Animation */}
      <section className="intro-section">
        <motion.div
          className="intro-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="animated-name"
          >
            Turning <span className="gradient-text">Ideas</span>
            <br />
            Into Real Life
            <br />
            <span className="gradient-text">Products</span>
            <br />
          </motion.h1>
          <a href="#projects" className="view-projects">
            View my Work
          </a>
        </motion.div>

        <motion.div
          className="intro-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="emoji-container"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👋
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="about-description">
          <strong>Hi, I'm Shresht V G.</strong> I build web apps and backend systems from zero to launch. <span className="about-highlight">Clean code</span>, <span className="about-highlight">scalable architecture</span>, and <span className="about-highlight">ideas that ship</span>.
        </p>
      </motion.section>

      {/* Social Links Section */}
      <motion.section
        className="social-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="social-item">
            <a
              href="https://github.com/shreshtvg"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/60/ffffff/github.png"
                alt="GitHub"
              />
            </a>
            <span>GH</span>
          </div>

          <div className="social-item">
            <a
              href="https://www.linkedin.com/in/shresht-vg-506465241/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
            </a>
            <span>LD</span>
          </div>

          <div className="social-item">
            <a
              href="https://drive.google.com/file/d/1rvJBue1JgI10ngjfmIDlyXPil0XgEUC7/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              title="Resume 💼"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/resume.png"
                alt="Resume"
              />
            </a>
            <span>RE</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="projects-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="projects-heading">My Work</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-tech">{project.techStack}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="skills-section"
        initial={{ opacity: 0 ,y: 30 }}
        whileInView={{ opacity: 1 ,y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <div className="skills-slider">
          <motion.div
            className="skills-track"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear", repeatType: "loop" }}
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Shresht V G. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
