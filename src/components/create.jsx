import React, { useState } from "react";
import "./create.css";

//import LImage from "../images/Landimage.svg";

function Create() {
  // const [query, setQuery] = useState("");

  return (
    <React.Fragment>
      <body>
        <div className="container">
          <form>
            <div className="name">
              <div className="ename">
                <input
                  type="text"
                  className="event-name"
                  required
                  placeholder="Event name*"
                  name="event"
                />
              </div>
              <div className="hname">
                <input
                  type="text"
                  className="host-name"
                  required
                  placeholder="Host name*"
                  name="host"
                />
              </div>
            </div>
            <div className="dates">
              <label for="start">Start date:</label>
              <div className="sdate">
                <input type="date" id="start" name="event-start"></input>
              </div>
              <label for="end">End date:</label>
              <div className="edate">
                <input type="date" id="end" name="event-end"></input>
              </div>
            </div>
            <div className="contact-button">
              <input type="submit" value="Next" className="con" />
            </div>
          </form>
        </div>
      </body>
    </React.Fragment>
  );
}

export default Create;
