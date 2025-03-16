import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGit,
  SiGithub,
  SiMongoose,
  SiPostman,
  SiPuppeteer,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiBootstrap,
  SiHibernate,
  SiSpring,
  SiApachemaven,
  SiJunit5,
  SiEclipseide,
  SiCodesandbox,
  SiSpringboot,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbSettingsAutomation } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";

const filters = [
  { filter: "all" },
  { filter: "language" },
  { filter: "libraries/framework" },
  { filter: "tool" },
  { filter: "database" },
  { filter: "testing framework" },
  { filter: "IDEs & code editor" },
];

const skills = [
  // Languages
  { name: "C", category: "language", icon: SiC, color: "#A8B9CC" },
  { name: "C++", category: "language", icon: SiCplusplus, color: "#00599C" },
  {
    name: "JavaScript",
    category: "language",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  { name: "Java", category: "language", icon: FaJava, color: "#007396" },

  // Libraries & Frameworks
  {
    name: "React",
    category: "libraries/framework",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Mongoose",
    category: "libraries/framework",
    icon: SiMongoose,
    color: "#880000",
  },
  {
    name: "Tailwind",
    category: "libraries/framework",
    icon: SiTailwindcss,
    color: "#38B2AC",
  },
  {
    name: "Bootstrap",
    category: "libraries/framework",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "Hibernate",
    category: "libraries/framework",
    icon: SiHibernate,
    color: "#59666C",
  },
  {
    name: "Spring",
    category: "libraries/framework",
    icon: SiSpring,
    color: "#6DB33F",
  },
  {
    name: "Servlet",
    category: "libraries/framework",
    icon: SiSpringboot,
    color: "#6DB33F",
  },
  {
    name: "MVC",
    category: "libraries/framework",
    icon: SiSpring,
    color: "#6DB33F",
  },
  {
    name: "Axios",
    category: "libraries/framework",
    icon: SiNodedotjs,
    color: "#339933",
  },

  // Databases
  { name: "MongoDB", category: "database", icon: SiMongodb, color: "#47A248" },
  { name: "SQL", category: "database", icon: SiMysql, color: "#4479A1" },

  // Tools
  { name: "Git", category: "tool", icon: SiGit, color: "#F05032" },
  { name: "GitHub", category: "tool", icon: SiGithub, color: "#181717" },
  { name: "Postman", category: "tool", icon: SiPostman, color: "#FF6C37" },
  { name: "Node.js", category: "tool", icon: SiNodedotjs, color: "#339933" },
  { name: "Maven", category: "tool", icon: SiApachemaven, color: "#C71A36" },

  // Testing Frameworks
  {
    name: "JUnit",
    category: "testing framework",
    icon: SiJunit5,
    color: "#25A162",
  },
  {
    name: "Playwright",
    category: "testing framework",
    icon: TbSettingsAutomation,
    color: "#2EAD33",
  },
  {
    name: "Puppeteer",
    category: "testing framework",
    icon: SiPuppeteer,
    color: "#40B5A4",
  },

  // IDEs & Code Editors
  {
    name: "VS Code",
    category: "IDEs & code editor",
    icon: DiVisualstudio,
    color: "#007ACC",
  },
  {
    name: "Eclipse",
    category: "IDEs & code editor",
    icon: SiEclipseide,
    color: "#2C2255",
  },
  {
    name: "CodeSandbox",
    category: "IDEs & code editor",
    icon: SiCodesandbox,
    color: "#151515",
  },
  {
    name: "Spring Tool Suite",
    category: "IDEs & code editor",
    icon: SiSpring,
    color: "#6DB33F",
  },
];

const skillsLength = skills.length;

export { filters, skills, skillsLength };
