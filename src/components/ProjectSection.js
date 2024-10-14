import React, { useEffect } from "react";
import "../css/ProjectSection.css";
import { projects } from "../data/projects";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function ProjectSection() {
  useEffect(() => {
    const items = document.querySelectorAll(".projectItem");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    // 클린업
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <div className="projectSection">
      <div className="sectionTitle">Projects</div>
      <div className="projectContainer">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`projectItem ${
              index % 2 === 0 ? "oddProject" : "evenProject"
            }`}
          >
            <h2 className="projectName">{project.name}</h2>
            <p className="projectDate">{project.date}</p>
            <div className="techStack">
              {project.techStack.map((tech, techIdx) => (
                <span key={techIdx} className="techBadge">
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="projectTitle">{project.title}</h3>
            <ul className="projectContent">
              {project.content.map((func, idx) => (
                <li key={idx}>
                  <strong>{func.function}</strong>
                  <ul>
                    {func.descriptions.map((description, descIdx) => (
                      <li key={descIdx}>{description}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
