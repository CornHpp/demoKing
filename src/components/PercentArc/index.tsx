import "./index.css";
import { CSSProperties } from "react";

// 假设这段代码位于 React 组件中
const style: CSSProperties = {
  // @ts-ignore
  "--i": "85%",
  "--clr": "#fd0a54",
};
const style1: CSSProperties = {
  // @ts-ignore
  "--i": "75%",
  "--clr": "#ffbc11",
};

const style2: CSSProperties = {
  // @ts-ignore
  "--i": "58%",
  "--clr": "#0de5ab",
};

const PercentArc = () => {
  return (
    <div className="PercentArcDiv">
      <div className="percentContainer">
        <div className="percentBox" style={style}>
          <div className="percentCircle">
            <h2>
              85<small>%</small>
            </h2>
          </div>
          <h3>Html</h3>
        </div>
        <div className="percentBox" style={style1}>
          <div className="percentCircle">
            <h2>
              75<small>%</small>
            </h2>
          </div>
          <h3>Html</h3>
        </div>
        <div className="percentBox" style={style2}>
          <div className="percentCircle">
            <h2>
              58<small>%</small>
            </h2>
          </div>
          <h3>Html</h3>
        </div>
      </div>
    </div>
  );
};

export default PercentArc;
