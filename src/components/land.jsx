import React, { useState } from "react";
import "./land.css";

import LImage from "../images/Landimage.svg";

function Land() {
  // const [query, setQuery] = useState("");

  return (
    <React.Fragment>
      <body>
        <div className="container">
          <div className="my-heading1">
            <h1>
              Imagine if
              <br />
              <span id="snap">Snapchat </span>
              <br />
              had events
            </h1>
          </div>
          <div className="my-heading2">
            <p>
              Easily host and share events with your friends <br /> across any
              social media.
            </p>
          </div>
          <div className="icom">
            <img src={LImage} alt="LandImage" className="limage" />
          </div>
          <div className="intro-button">🎉 Create my event</div>
        </div>
      </body>
    </React.Fragment>
  );
}

export default Land;
