import { useEffect } from "react";
import "./index.css";

const DynamicMouse = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor") as HTMLElement;
    let body = document.body;
    document.addEventListener("mousemove", (e) => {
      // move cursor
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";

      // animate background
      body.style.backgroundPositionX = e.pageX / 4 + "px";
      body.style.backgroundPositionY = e.pageY / 4 + "px";

      // add elements to body
      let elements = document.createElement("div");
      elements.className = "element";
      body.prepend(elements);

      // move elements randomly across the x and y axis
      elements.style.left = cursor.getBoundingClientRect().x + "px";
      elements.style.top = cursor.getBoundingClientRect().y - 10 + "px";

      setTimeout(() => {
        let text = document.querySelectorAll(".element")[0] as HTMLElement;
        let directionX = Math.random() < 0.5 ? -1 : 1;
        let directionY = Math.random() < 0.5 ? -1 : 1;

        text.style.left =
          parseInt(text.style.left) - directionX * (Math.random() * 200) + "px";
        text.style.top =
          parseInt(text.style.top) - directionY * (Math.random() * 200) + "px";

        text.style.opacity = "0";
        text.style.transform = "scale(0.25)";
        text.innerHTML = "🌟";

        setTimeout(() => {
          elements.remove();
        }, 1000);
      }, 10);
    });
  }, []);
  return (
    <div className="DynamicMouseBox">
      <div id="cursor"></div>
    </div>
  );
};

export default DynamicMouse;
