import "./introduction.css";
import AnimatedCounter from "../../components/AnimatedCounter/AnimatedCounter";
import { skillsLength } from "../Skills/skillsData";

export default function Introduction() {
  return (
    <div className="introduction-container">
      <div className="left ">
        <h1 className="">
          Hello there I am <span className="text-color">Anirban Gorain</span>, a
          Software Engineer from <span className="flag-text">India</span>
        </h1>
        <h4>
          Explore different directories to uncover my projects, technical
          expertise, and professional journey.
        </h4>

        <div className="attract-counters">
          <AnimatedCounter
            givenCount={3}
            subject={"Projects personal developed"}
          />
          <AnimatedCounter givenCount={1} subject={"Year of experience"} />
          <AnimatedCounter givenCount={450} subject={"DSA problems solved"} />
          <AnimatedCounter
            givenCount={skillsLength}
            subject={"Technologies mastered"}
          />
        </div>
      </div>
      <div className="right">
        <div className="image-frame">
          <img src="https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/485617334_1203984037780667_6975924463475032374_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yiLGpnr3UaAQ7kNvgGslILc&_nc_oc=AdkZoDUjX3CeZfolJkBlFS-smZfi0BPBu-p_BA-KNHd0bXPindEfeoffJJKhevOikgy_L9OzMM8B7loVj9R_qFIM&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=ncuqOAmTKna-rRJCuXBVYg&oh=00_AYFJscFeqwrS0cpW4COtK1aWNKHrREc914dfHdfBpdM1eg&oe=67E58137" />
        </div>
      </div>
    </div>
  );
}
