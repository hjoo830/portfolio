import React from "react";
import "../css/TechStackSection.css";
import { techStacks } from "../data/techStacks";

function TechStackSection() {
  return (
    <div className="techStackSection">
      <div className="sectionTitle">Tech Stacks</div>
      <div className="techStackContainer">
        {techStacks.map((techStack, index) => (
          <div key={index} className="techStackItem">
            <ul className="techStackContent">
              <h2 className="techStackTitle">{techStack.name}</h2>
              {techStack.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStackSection;
