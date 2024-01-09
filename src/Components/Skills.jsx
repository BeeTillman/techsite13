// Skills.jsx
import React from "react";
import "../Skills.css";

const Skills = () => {
  const codingLanguages = ["JavaScript", "Python", "Java", "HTML", "CSS"];
  const frameworks = ["React", "Node.js", "Django", "Spring Boot"];
  const tools = ["Git", "VS Code", "Webpack", "Postman"];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-categories">
        <div className="skills-category">
          <h3>Languages & Frameworks</h3>
          <ul>
            {[...codingLanguages, ...frameworks].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="skills-category">
          <h3>Tools</h3>
          <ul>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
