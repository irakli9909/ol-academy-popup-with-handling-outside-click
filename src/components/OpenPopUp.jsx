import React, { useState } from "react";
import "./App.css";

import PopUp from "./PopUp";
import "./App.css";

function OpenPopUp() {
  const [showPopUp, setShowPopUp] = useState(false);

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className={OpenPopUp ? "popup-box" : "popup"}>
      <h1 className="text">
        My react Popup{" "}
      </h1>

      <button className="open-btn" onClick={() => setShowPopUp(true)}>
        open
      </button>
      {showPopUp && <PopUp closePopUp={closePopUp} />}
    </div>
  );
}

export default OpenPopUp;
