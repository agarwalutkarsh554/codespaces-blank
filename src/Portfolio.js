import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

// Load JSON data dynamically
export default function Portfolio() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!info) return <p>Loading...</p>;

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Glassy Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-md flex justify-between items-center p-6 z-50">
        <div className="text-xl font-bold">{info.about.name}</div>
        <div className="hidden md:flex gap-6 text-lg text-gray-700">
          {["About", "Skills", "Projects", "Work", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-all">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="text-center py-40 px-6 md:px-16 mt-24">
        <h1 className="text-6xl font-semibold">{info.about.name}</h1>
        <p className="text-2xl mt-4 opacity-80">{info.about.title}</p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">{info.about.description}</p>
        <a href={info.about.resume} target="_blank" className="inline-block mt-4 text-blue-600 text-lg font-semibold hover:underline">
          View My Resume <FaFilePdf className="inline ml-2" />
        </a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-16 bg-gray-100">
        <h2 className="text-5xl font-semibold text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12 text-center text-xl font-medium">
          {info.skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white shadow-xl rounded-2xl">{skill}</div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-16">
        <h2 className="text-5xl font-semibold text-center">Projects</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {info.projects.map((project, index) => (
            <div key={index} className="p-8 bg-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.desc}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center mt-2 hover:underline">
                View on GitHub <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-24 px-6 md:px-16 bg-gray-100">
        <h2 className="text-5xl font-semibold text-center">Work Experience</h2>
        <div className="mt-12 space-y-8">
          {info.workExperience.map((job, index) => (
            <div key={index} className="p-8 bg-white shadow-xl rounded-2xl">
              <h3 className="text-2xl font-semibold">{job.company}</h3>
              <p className="text-gray-700 mt-2 font-medium">{job.role}</p>
              <ul className="list-disc text-gray-700 mt-4 ml-6 text-lg">
                {job.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-16">
        <h2 className="text-5xl font-semibold text-center">Contact Me</h2>
        <div className="mt-12 flex justify-center gap-6 text-3xl">
          <a href="mailto:utkarsh.govind.agarwal@gmail.com" className="text-gray-700 hover:text-black"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/agarwalutkarsh554/" className="text-gray-700 hover:text-black"><FaLinkedin /></a>
          <a href="https://github.com" className="text-gray-700 hover:text-black"><FaGithub /></a>
          <a href={info.about.resume} target="_blank" className="text-gray-700 hover:text-black"><FaFilePdf /></a>
        </div>
      </section>
    </div>
  );
}
