import "./experience-card.css";
import SkillLabel from "../SkillLabel/SkillLabel";

export default function ExperienceCard({
  duration,
  logo_url,
  company_name,
  role,
  impact,
  tech_stacks,
}) {
  return (
    <div className="experience-card-container">
      <div className="line"></div>

      <div className="experience-card-content">
        <div className="duration">{duration}</div>
        <br />

        <div className="company">
          <div className="logo">
            <img src={logo_url} />
          </div>
          <div className="company-name">{company_name}</div>
        </div>
        <div className="my-role">
          <span className="heading">Role:</span> <span>{role}</span>
        </div>
        <div className="impact">
          <ul>
            {impact.map((imp, ind) => (
              <li key={ind} dangerouslySetInnerHTML={{ __html: imp }}></li>
            ))}
          </ul>
        </div>
        <div className="tech-stack">
          <span className="heading">Teach Stack: </span>
          {tech_stacks.map((tech_stack) => (
            <SkillLabel name={tech_stack} key={tech_stack} />
          ))}
        </div>
      </div>
    </div>
  );
}
