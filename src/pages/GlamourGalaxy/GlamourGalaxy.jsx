const images = [
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/435f98c8-83da-4561-971d-b61e43610f4d",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/9f297258-988e-4337-b868-c507094b4f94",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/668638cc-e5c3-4f11-8b27-ba711966d81b",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/e3f9f0cf-554b-4044-822e-c156bbd54d71",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/0e3d87d1-4c8f-4b2b-82a7-4ea171bbd7b8",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/8419a534-c47a-4a59-a60e-3addf260428e",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/bf55c8c2-899f-4c42-907e-e60af25803bd",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/8bf38f2e-e1c4-4e7a-add1-b167b02d2973",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/66c4ffe7-c9e5-47d2-832e-bb67f2de83d7",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/c81c8822-f605-412a-80f5-6b9e5ecdcae4",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/29873bae-5a2b-4aa3-80e9-0daf5603a1b3",
  },
];
const skills = ["React", "MongoDB", "Express.js", "Node.js"];
const features = [
  "Login & Signup",
  "Product Catalog",
  "Order Tracking",
  "Payments integration",
  "Responsive Design",
  "Ratings & Reviews",
  "Cart & Checkout",
];

import Project from "../../components/Project/Project";

export default function glamourGalaxy() {
  return (
    <Project
      role={"Thinking, Designing, Developing and Deploying"}
      projectName={"Glamour - Galaxy"}
      projectDescription={"is a fully functional e-commerce platform."}
      features={features}
      liveLink={"https://glamour-galaxy-app.onrender.com"}
      skills={skills}
      images={images}
    />
  );
}
