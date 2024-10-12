import React from "react";
import "../css/ProjectSection.css";
import { projects } from "../data/projects";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function ProjectSection() {
  return (
    <div className="projectSection">
      <div className="sectionTitle">Projects</div>
      <div className="projectContainer">
        {projects.map((project, index) => (
          <div key={index} className="projectItem">
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
