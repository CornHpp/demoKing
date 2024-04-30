import { useEffect } from "react";
import "./index.css";

const TextHightLight = () => {
  useEffect(() => {
    let text = document.querySelectorAll("ul li a").forEach((link) => {
      let text = link.textContent as string;
      link.innerHTML = ""; // 清空原有内容

      for (let i = 0; i < text.length; i++) {
        let span = document.createElement("span");
        span.textContent = text[i];
        span.style.transitionDelay = `${i * 40}ms`;
        link.appendChild(span);
      }
    });

    var cursor = document.getElementById("cursor") as HTMLElement;
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  }, []);

  return (
    <div className="TextHightLightDiv">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Creative Menu Hover Effects</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <div id="cursor"></div>
      </ul>
    </div>
  );
};

export default TextHightLight;
