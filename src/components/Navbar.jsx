import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Shresht V G</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a
          href="https://drive.google.com/file/d/1rvJBue1JgI10ngjfmIDlyXPil0XgEUC7/view"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}