import "./animated-counter.css";
import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({ subject, givenCount }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= givenCount) return;

    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 10);

    console.log("Use effect is firing");

    return () => {
      clearInterval(intervalId);
      console.log("Clean up is firing...");
    };
  }, [count]);

  return (
    <div className="counter-container">
      <span className="count">{count}</span>
      <span className="subject">{subject}</span>
    </div>
  );
}
