const images = [
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/72d07e3b-40ad-4e90-a6d6-6012ecc661b2",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/f33792b1-3133-4b03-a406-4d0685c85a7b",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/aa64f03f-613e-4520-aea6-23899a01b329",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/aa64f03f-613e-4520-aea6-23899a01b329",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/56a941da-d9d6-45c7-955f-5edb0f228f9b",
  },
  {
    url: "https://www.upwork.com/att/download/portfolio/persons/uid/1768829026863312896/profile/projects/files/5d244241-f618-4d55-927e-5f9437dab0db",
  },
];
const skills = ["React", , "React's eco-system", , "Data fetching"];
const features = [
  "Attractive and optimized UI",
  "Fetched Recommended, Trending, Popular and Top-rated movies from third party API provider",
  "Movie searching feature",
  "Advance filters with multiple parameters",
  "In-place pop up trailer",
  "Faster image loading with lazy loading",
];

import Project from "../../components/Project/Project";

export default function glamourGalaxy() {
  return (
    <Project
      role={"Thinking, Developing and Deploying"}
      projectName={"Filmify"}
      projectDescription={"is a movie encyclopedia"}
      features={features}
      liveLink={"https://filmify-roan.vercel.app"}
      skills={skills}
      images={images}
    />
  );
}
