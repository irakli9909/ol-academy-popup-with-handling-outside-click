import React, { useEffect, useRef } from "react";

import { AiOutlineClose } from "react-icons/ai";
import "./App.css";

function PopUp(props) {
  const popup = useRef(null);

  const handleClick = (e) => {
      if (!popup.current.contains(e.target)) {
        props.closePopUp();
      }
    
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return function cleanUp() {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="body">
      <div className="popup" ref={popup}>
        <button className="close-btn" onClick={() => props.closePopUp()}>
          <AiOutlineClose />
        </button>

        <br></br>
        <p>
          This is popup
        </p>
        <article></article>
      </div>
    </div>
  );
}

export default PopUp;
