import React, { useState } from "react";
import geminiImg from '../assets/Gemini.png';

const projects = [
  {
    title: "Gemini Clone",
    shortDescription:
      "Gemini Clone is a minimalist replica of Google's Gemini AI interface...",
    fullDescription:
      "A sleek and responsive web app mimicking Google's Gemini AI UI. Built with React and Tailwind, it showcases a clean conversational layout and responsive design. Features include theming, modern layout, and responsive components.",
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    image: geminiImg,
    codeLink: "https://github.com/HarshiJain20/Gemini-Clone",
    liveLink: "https://gemini-ai-chat-app.netlify.app/"
  }
];

const ProjectCard = ({ project, onClick }) => (
  <div
    onClick={() => onClick(project)}
    className="border-4 border-neutral-800 p-4 rounded-2xl shadow-lg text-white max-w-sm w-full cursor-pointer hover:scale-105 transition-transform"
  >
    <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full" />
    <h2 className="text-xl font-bold mb-2 text-center">{project.title}</h2>
    <p className="text-sm mb-4 text-gray-300 text-center">{project.shortDescription}</p>
    <div className="flex flex-wrap justify-center gap-2">
      {project.tags.map((tag, idx) => (
        <span
          key={idx}
          className="text-xs bg-purple-800 text-white px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4 py-8">
    <div className="relative w-full max-w-[95%] sm:max-w-lg md:max-w-xl bg-white/10 backdrop-blur-md border border-white/30 p-4 sm:p-6 rounded-2xl shadow-xl text-white">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white text-2xl"
      >
        &times;
      </button>

      <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full" />

      <h2 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h2>

      <p className="text-sm sm:text-base text-gray-300 mb-4">{project.fullDescription}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-purple-800 text-white px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

    
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-md text-center"
        >
          View Code
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 hover:bg-gray-200 text-black px-5 py-2 rounded-md text-center"
        >
          View Live
        </a>
      </div>
    </div>
  </div>
);


export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="border-b border-neutral-800 pb-24 pt-7" id="projects">
      <h1 className="mt-20 text-center text-4xl text-white">Projects</h1>
      <p className="text-gray-400 text-center mt-4 mb-20">
        Showcasing some of the projects I've worked on using modern tech stacks
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={setSelectedProject} />
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}