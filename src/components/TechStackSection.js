import React, { useEffect } from "react";
import "../css/TechStackSection.css";
import { techStacks } from "../data/techStacks";

function TechStackSection() {
  useEffect(() => {
    const items = document.querySelectorAll(".techStackItem");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible", "scaleIn");
          } else {
            entry.target.classList.remove("visible", "scaleIn");
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
    <div id="techstack" className="techStackSection">
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
