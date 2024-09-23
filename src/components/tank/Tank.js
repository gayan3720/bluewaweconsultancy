import React from "react";
import "./style.css";

const Tank = () => {
  return (
    <div className="fish-tank">
      {/* Fish Images */}
      <div className="fish fish1"></div>
      <div className="fish fish1"></div>
      <div className="fish fish3"></div>
      <div className="fish fish4"></div>
      <div className="fish fish5"></div>
      <div className="fish fish6"></div>

      {/* Water Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
    </div>
  );
};

export default Tank;
