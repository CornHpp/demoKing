import React, { useEffect } from "react";
import "./index.css";

const TextRain = () => {
  const randomText = () => {
    var text = "abcdefghijklmnopqrstuvwxyz0123456789";
    let letter = text[Math.floor(Math.random() * text.length)];
    return letter;
  };

  const rain = () => {
    let cloud = document.querySelector(".TextCloud") as HTMLDivElement;
    let e = document.createElement("div");
    let left = Math.floor(Math.random() * 310);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;

    e.classList.add("text");
    cloud.appendChild(e);
    e.innerText = randomText();
    e.style.left = left + "px";
    e.style.fontSize = 0.5 + size + "em";
    e.style.animationDuration = 1 + duration + "s";

    setTimeout(function () {
      cloud.removeChild(e);
    }, 2000);
  };

  useEffect(() => {
    setInterval(function () {
      rain();
    }, 20);
  }, []);
  return (
    <div className="TextRainBox">
      <div className="TextRainContainer">
        <div className="TextCloud"></div>
      </div>
    </div>
  );
};

export default TextRain;
