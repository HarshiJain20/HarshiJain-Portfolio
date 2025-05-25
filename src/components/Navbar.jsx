import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mb-20 fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-[#0b0b0d] via-[#0e0e15] to-[#13131ddf] text-white px-12 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and name */}
        <div className="flex flex-shrink-0 items-center gap-2 text-2xl">
          <img src={logo} alt="logo" className="size-12 rounded-2xl" />
          <a href="#hero" className="text-white">Harshi Jain</a>
        </div>

        <div className="hidden md:flex lg:pl-80 items-center gap-6 m-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/harshi-jain-b72903288" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/JainHarshi30" target="_blank"><FaGithub /></a>
          <a href="https://www.instagram.com/jainharshi_" target="_blank"><FaInstagram /></a>
        </div>

        <div className="md:hidden text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 text-lg">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#project" onClick={() => setMenuOpen(false)}>Project</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="flex gap-4 text-2xl pt-2">
            <a href="https://www.linkedin.com/in/harshi-jain-b72903288" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/JainHarshi30" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/jainharshi_" target="_blank"><FaInstagram /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
