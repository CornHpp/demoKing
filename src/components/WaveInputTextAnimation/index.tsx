import { useEffect } from "react";
import "./index.css";

const WaveInputTextAnimation = () => {
  useEffect(() => {
    const labels = document.querySelector("label") as HTMLLabelElement;
    labels.innerHTML = labels.innerText
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 20}ms;filter:hue-rotate(${
            idx * 10
          }deg);" >${letter}</span>`
      )
      .join("");
  }, []);
  return (
    <div className="WaveInputTextAnimationDiv">
      <div className="waveInputBox">
        <input type="text" required />
        <label>Wavy&nbsp;Input&nbsp;Text&nbsp;Animation</label>
      </div>
    </div>
  );
};

export default WaveInputTextAnimation;
