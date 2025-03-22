import { Route, Routes } from "react-router-dom";
import MainStructure from "../main-structure/MainStructure";
import Skills from "../pages/Skills/Skills";
import Introduction from "../pages/Introduction/Introduction";
import Resume from "../pages/Resume/Resume";
import Education from "../pages/Education/Education";
import GlamourGalaxy from "../pages/GlamourGalaxy/GlamourGalaxy";
import Filmify from "../pages/Filmify/Filmify";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/anirban-gorain" element={<MainStructure />}>
        <Route path="introduction.anirban" element={<Introduction />}></Route>
        <Route path="resume/resume.anirban.pdf" element={<Resume />}></Route>
        {/* <Route path="about/about.anirban" element={<div>About</div>}></Route> */}
        <Route
          path="education/education.anirban"
          element={<Education />}
        ></Route>
        <Route
          path="achievements/achievements.anirban"
          element={<div>Achievements</div>}
        ></Route>
        <Route
          path="experience/experience.anirban"
          element={<div>Experience</div>}
        ></Route>
        <Route
          path="project/glamour-galaxy.project.anirban"
          element={<GlamourGalaxy />}
        ></Route>
        <Route
          path="project/ex-can.project.anirban"
          element={<div>Project: Ex-Can</div>}
        ></Route>
        <Route
          path="project/filmify.project.anirban"
          element={<Filmify />}
        ></Route>
        <Route path="skills/skills.anirban" element={<Skills />}></Route>
        <Route path="contact/contact.anirban" element={<Contact />}></Route>
        <Route
          path="testimonials/testimonials.anirban"
          element={<div>Testimonials</div>}
        ></Route>
      </Route>
    </Routes>
  );
}
