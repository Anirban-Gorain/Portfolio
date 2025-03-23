import "./experience.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const experiences = [
  {
    duration: "Jan-2024 to Jan-2024",
    logo_url:
      "https://media.collegedekho.com/media/img/institute/logo/LOGO_SNAL.jpeg",
    company_name: "Sanaka Educational Trust",
    role: "Frontend developer",
    impact: [
      "Developed and maintained student and hospital management portals using <strong>React, JavaScript, and Redux.</strong>",
      "Improved <strong>page load performance by 40%</strong> through optimized API integration with <strong>Axios</strong> and frontend <strong>Caching strategies.</strong>",
      "Designed and implemented <strong>responsive UI components</strong> using <strong>SCSS</strong> and <strong>CSS</strong>, improving user experience across different devices.",
      "Worked with <strong>Git</strong> and <strong>GitHub</strong> for version control and collaboration with team members.",
    ],
    tech_stacks: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "REST API",
      "Axios",
      "JWT Authentication",
      "Mongoose",
      "Postman",
      "Git",
      "GitHub",
      "Webpack",
      "Vite",
    ],
  },
];

export default function Experience() {
  return (
    <div className="experience-container">
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.company_name}
          duration={exp.duration}
          logo_url={exp.logo_url}
          company_name={exp.company_name}
          role={exp.role}
          tech_stacks={exp.tech_stacks}
          impact={exp.impact}
        />
      ))}
    </div>
  );
}
