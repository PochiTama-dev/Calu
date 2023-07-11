import icono_contacto from "./icono_contacto.png";
import "./contact_button.css";
import { Link } from "react-router-dom";
import arrow_L from "./icon_arrow_left.svg";
import { useState } from "react";

const Hover = () => {
  return (
    <div>
      <h2 className="text_hover">¡Contáctanos!</h2>
    </div>
  );
};

const Contact_button = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div className="contact_ctn">
        <button>
          <img className="arrow_up" src={arrow_L} />
        </button>

        <div className="contact_button_ctn">
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="contact_button"
          >
            <Link to={"/contact"}>
              <img className="contact_logo" src={icono_contacto} />
            </Link>
            {isHovering && <Hover />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_button;
