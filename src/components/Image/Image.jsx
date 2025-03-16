import "./image.css";
import { useState } from "react";

export default function Image({ src }) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      <img
        src={src}
        onLoad={() => setIsImageLoading(false)}
        className={`${isImageLoading ? "invisible" : "visible"}`}
      />
      {isImageLoading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}
