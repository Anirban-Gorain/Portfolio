import "./project.css";
import Slider from "../Slider/Slider";
import SkillLabel from "../SkillLabel/SkillLabel";

export default function Project({
  role,
  features,
  projectDescription,
  projectName,
  liveLink,
  skills,
  images,
}) {
  return (
    <div className="project-container">
      <div className="left">
        <div className="my-role-section">
          <span className="left-heading role">My role: </span> {role}
        </div>

        <div className="project-description">
          <span className="left-heading about">About the project</span>
          <br />

          <ul>
            <li>
              <strong>{projectName}</strong> {projectDescription}
            </li>
            <li className="left-heading">
              <strong>Key features:</strong>
              <ul>
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="skills-section">
          <span>Skills I have applied</span>

          <div className="skills">
            {skills.map((name) => (
              <SkillLabel name={name} key={name} />
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <h1 className="project-name">Project: {projectName}</h1>
        <h5 className="project-link">
          Link:{" "}
          <a href={liveLink} target="_blank">
            {projectName.toLowerCase()}
          </a>
        </h5>
        <Slider images={images} />
      </div>
    </div>
  );
}
