import React from "react";
import "./HomeDescription.css";

function HomeDescription(props) {
  return (
    <div className="main__descritption">
      <div className="main__descritption-text">
        <a>{props.text}</a>
      </div>
    </div>
  );
}

export default HomeDescription;
