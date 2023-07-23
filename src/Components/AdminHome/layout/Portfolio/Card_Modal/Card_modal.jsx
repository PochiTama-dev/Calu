import React from "react";
import { useState } from "react";
import "./card_modal.css";

const Card_modal = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpened(true)}>AGREGAR TARJETA &#9998;</button>

      {isOpened && (
        <>
          <div className="super-awesome-shadow"></div>
          <div className="super-awesome-modal">
            <h1>{children}</h1>

            <div>
              <button onClick={() => setIsOpened(false)}>Cerrar</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Card_modal;
