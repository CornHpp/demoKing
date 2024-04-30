import { useEffect } from "react";
import "./index.css";

const PixelImg = () => {
  useEffect(() => {
    let w = 5;
    let h = 5;
    const pixel = () => {
      for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
          let span = document.createElement("span");
          const dom = document.getElementById("pixel") as HTMLDivElement;
          // document.getElementById("pixel").appendChild(span);
        }
      }
    };
  }, []);
  return (
    <div className="PixelImgDiv">
      <div className="box">
        <div id="pixel"></div>
      </div>
    </div>
  );
};

export default PixelImg;
