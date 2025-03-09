import { Route, Routes } from "react-router-dom";
import MainStructure from "../main-structure/MainStructure";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/anirban-gorain" element={<MainStructure />}>
        <Route path="instruction.txt" element={<div>Instruction</div>}></Route>
        <Route
          path="resume/resume.anirban.pdf"
          element={<div>Resume</div>}
        ></Route>
        <Route path="about/about.anirban" element={<div>About</div>}></Route>
        <Route
          path="education/education.anirban"
          element={<div>Education</div>}
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
          element={<div>Project: Glamour-Galaxy</div>}
        ></Route>
        <Route
          path="project/ex-can.project.anirban"
          element={<div>Project: Ex-Can</div>}
        ></Route>
        <Route
          path="project/filmify.project.anirban"
          element={<div>Project: Filmify</div>}
        ></Route>
        <Route path="skills/skills.anirban" element={<div>Skills</div>}></Route>
        <Route
          path="contact/contact.anirban"
          element={<div>Contact</div>}
        ></Route>
        <Route
          path="testimonials/testimonials.anirban"
          element={<div>Testimonials</div>}
        ></Route>
      </Route>
    </Routes>
  );
}
