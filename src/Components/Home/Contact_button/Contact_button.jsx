import icono_contacto from "./icono_contacto.png";
import "./contact_button.css";
import { Link } from "react-router-dom";
const Contact_button = () => {
  return (
    <div className="contact_button_ctn">
      <div className="contact_button">
        <Link to={"/contact"}>
          <img className="contact_logo" src={icono_contacto} />
        </Link>
      </div>
    </div>
  );
};

export default Contact_button;
