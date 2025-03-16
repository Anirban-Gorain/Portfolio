import "./slider.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useRef } from "react";
import Image from "../Image/Image";

export default function Slider({ images }) {
  const sliderContainerRef = useRef();
  let imgIndex = 0;
  const totalNoOfImages = images.length;
  let scrollValue = 0;

  function leftBtnHandler() {
    if (imgIndex == 0) return;

    const element = sliderContainerRef.current;
    const width = element.offsetWidth;

    imgIndex--;
    scrollValue = imgIndex * width;

    element.scroll({ left: scrollValue, behavior: "smooth" });
  }

  function rightBtnHandler() {
    if (imgIndex + 1 == totalNoOfImages) return;

    const element = sliderContainerRef.current;
    const width = element.offsetWidth;

    imgIndex++;
    scrollValue = imgIndex * width;

    element.scroll({ left: scrollValue, behavior: "smooth" });

    console.log(scrollValue);
  }

  return (
    <div className="slider-container">
      <div className="images" ref={sliderContainerRef}>
        {images.map((img, ind) => (
          <Image src={img.url} key={img.url} />
        ))}
      </div>

      <div className="controls">
        <button className="slider-button left" onClick={leftBtnHandler}>
          <CiCircleChevLeft />
        </button>

        <button className="slider-button right" onClick={rightBtnHandler}>
          <CiCircleChevRight />
        </button>
      </div>
    </div>
  );
}
