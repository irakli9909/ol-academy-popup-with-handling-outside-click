import React, { useState } from "react";
import "../App.css";

import PopUp from "./PopUp";

function OpenPopUp() {
  const [showPopUp, setShowPopUp] = useState(false);

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className={OpenPopUp ? "popup" : "popup"}>
      <h1 className="text">
        My react Popup
      </h1>

      <button onClick={() => setShowPopUp(true)}>
        open
      </button>
      {showPopUp && <PopUp closePopUp={closePopUp} />}
    </div>
  );
}

export default OpenPopUp;
