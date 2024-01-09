// Skills.jsx
import React from "react";
import "../Skills.css";

const Skills = () => {
  const skillsData = [
    { label: "Java", iconClass: "devicon-java-plain-wordmark colored" },
    { label: "C++", iconClass: "devicon-cplusplus-plain-wordmark colored" },
    { label: "C#", iconClass: "devicon-csharp-plain-wordmark colored" },
    { label: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { label: "HTML", iconClass: "devicon-html5-plain colored" },
    { label: "CSS", iconClass: "devicon-css3-plain colored" },
    { label: "Python", iconClass: "devicon-python-plain-wordmark colored" },
    { label: "SQL", iconClass: "devicon-mysql-plain colored" },
    { label: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
  ];

  const frameworksData = [
    { label: "React", iconClass: "devicon-react-original colored" },
    { label: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { label: "Django", iconClass: "devicon-django-plain colored" },
    { label: "Spring", iconClass: "devicon-spring-plain colored" },
    { label: "Express", iconClass: "devicon-express-original colored" },
    { label: "Bootstrap", iconClass: "devicon-bootstrap-plain colored" },
    { label: "Material", iconClass: "devicon-materialui-plain colored" },
    { label: "jQuery", iconClass: "devicon-jquery-plain colored" },
    { label: "Android", iconClass: "devicon-android-plain colored" },
  ];

  const toolsData = [
    { label: "Git", iconClass: "devicon-git-plain colored" },
    { label: "GitHub", iconClass: "devicon-github-original" },
    { label: "VS Code", iconClass: "devicon-vscode-plain colored" },
    { label: "Webpack", iconClass: "devicon-webpack-plain colored" },
    { label: "Heroku", iconClass: "devicon-heroku-plain colored" },
    { label: "Unreal", iconClass: "devicon-unrealengine-original" },
    { label: "VS", iconClass: "devicon-visualstudio-plain colored" },
    { label: "IntelliJ", iconClass: "devicon-intellij-plain colored" },
    { label: "Android", iconClass: "devicon-androidstudio-plain colored" },
    // Add more entries as needed
  ];

  const renderList = (data) => {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <i className={item.iconClass}></i>
            {item.label}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="skills-section" id="skills">
      <h2 style={{ textAlign: "center" }} className="large">
        My Skills
      </h2>

      <div className="skills-categories">
        <div className="skills-category">
          <h3>LANGUAGES</h3>
          {renderList(skillsData)}
        </div>

        <div className="skills-category">
          <h3>FRAMEWORKS</h3>
          {renderList(frameworksData)}
        </div>

        <div className="skills-category">
          <h3>TOOLS</h3>
          {renderList(toolsData)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
