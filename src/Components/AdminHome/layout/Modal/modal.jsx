import React from "react";
import { useState } from "react";
import "./modal.css";

const Modal = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpened(true)}> &#9998;</button>

      {isOpened && (
        <>
          <div className="super-awesome-shadow"></div>
          <div className="super-awesome-modal">
            <h1>{children}</h1>
            <button onClick={() => setIsOpened(false)}>Cerrar</button>
          </div>
        </>
      )}
    </div>
  );
};
export default Modal;
