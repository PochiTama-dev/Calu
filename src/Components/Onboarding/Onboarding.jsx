//CSS
import "./Onboarding.css";
import logoCalu from "../../images/logocalu.png";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <>
      <div className="onboarding">
        <div className="parrafo">
          <h1>TU AGENCIA DE MARKETING DIGITAL</h1>
          <p>Mejora la visibilidad de tu marca </p>
          <p>
            Te aydamos a hacer crecer tu genocio, llevarlo al siguiente nivel y
            sumarte al ecosistema digital.
          </p>
          <p>
            No dejes pasar la oportunidad, subite a la transformación digital.
          </p>
          <h2>¡QUE TU NEGOCIO DESPEGUE!</h2>
          <div className="contact-btn">
            <Link to={"/contact"}>Contactanos</Link>
          </div>
        </div>
        <img src={logoCalu} alt="logo calu" className="logoCalu" />
      </div>
      <div className="contactFlex"></div>
    </>
  );
};
export default Onboarding;
