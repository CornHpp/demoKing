import React, { useEffect } from "react";
import styles from "./index.module.scss";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";

const imgs = [img1, img2, img3, img4, img5];

const WirelessParallaxScrolling = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const [curIndex, setCurIndex] = React.useState(0);

  const prevIndex = () => {
    return curIndex === 0 ? imgs.length - 1 : curIndex - 1;
  };

  const nextIndex = () => {
    return curIndex === imgs.length - 1 ? 0 : curIndex + 1;
  };

  const createImg = (index: number) => {
    const img = document.createElement("img");
    img.src = imgs[index];
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    const div = document.createElement("div");
    div.className = "item";
    div.appendChild(img);
    container.current?.appendChild(div);
    return div;
  };

  const resetElement = () => {
    if (container.current) {
      container.current.innerHTML = "";
    }
    const prev = prevIndex();
    const next = nextIndex();
    createImg(prev).classList.add("prev");
    createImg(curIndex).classList.add("cur");
    createImg(next).classList.add("next");
  };

  useEffect(() => {
    resetElement();

    window.addEventListener("wheel", (e) => {
      if (!e.deltaY) return;
      if (e.deltaY > 0) {
        if (container.current)
          container.current.className = "scroll-container scroll-down";
      } else {
        if (container.current)
          container.current.className = "scroll-container scroll-up";
      }
    });

    window.addEventListener("transitionend", () => {
      if (container.current) {
        if (container.current.classList.contains("scroll-down")) {
          setCurIndex(nextIndex());
        } else if (container.current.classList.contains("scroll-up")) {
          setCurIndex(prevIndex());
        }
        container.current.className = "scroll-container";
        resetElement();
      }
    });
  }, []);

  return <div ref={container} className="scroll-container"></div>;
};

export default WirelessParallaxScrolling;
