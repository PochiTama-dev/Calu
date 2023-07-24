import "./Onboarding.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../../../firebase-config";
import logoCalu from "../../../../images/logocalu.png";
import Modal from "../Modal/modal";

const Onboarding = () => {
  const [onboardinginfo, setOnboardinginfo] = useState([]);
  /* setDoc(doc(db, "home", "Onboarding"), {
    title: "TU AGENCIA DE MARKETING DIGITAL",
    t1: "Mejora la visibilidad de tu marca ",
    t2: "Te aydamos a hacer crecer tu genocio, llevarlo al siguiente nivel y sumarte al ecosistema digital.",
    t3: " No dejes pasar la oportunidad, subite a la transformación digital.",
    t4: "  ¡QUE TU NEGOCIO DESPEGUE!",
  });*/
  ///////////////////////////////////////////

  /////////////////////////////////
  const [title, setTitle] = useState("");
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");
  const [t4, setT4] = useState("");

  const updateTitle = async () => {
    const onboarding_info = doc(db, "home", "Onboarding");
    await updateDoc(onboarding_info, {
      title: title,
    });
  };
  const updateT1 = async () => {
    const onboarding_info = doc(db, "home", "Onboarding");
    await updateDoc(onboarding_info, {
      t1: t1,
    });
  };
  const updateT2 = async () => {
    const onboarding_info = doc(db, "home", "Onboarding");
    await updateDoc(onboarding_info, {
      t2: t2,
    });
  };
  const updateT3 = async () => {
    const onboarding_info = doc(db, "home", "Onboarding");
    await updateDoc(onboarding_info, {
      t3: t3,
    });
  };
  const updateT4 = async () => {
    const onboarding_info = doc(db, "home", "Onboarding");
    await updateDoc(onboarding_info, {
      t4: t4,
    });
  };

  ///////////////////////

  useEffect(() => {
    const getOnboarding = async () => {
      const OnboardingDoc = doc(db, "home", "Onboarding");
      const docSnapshot = await getDoc(OnboardingDoc);
      if (docSnapshot.exists()) {
        setOnboardinginfo(docSnapshot.data());
      }
    };
    getOnboarding();
  }, []);

  return (
    <div>
      <div className="onboarding">
        <div className="parrafo">
          <div className="edit">
            <h1>{onboardinginfo.title}</h1>
            <Modal>
              <input
                style={{ width: "300px", height: "30px" }}
                type="text"
                placeholder="Ingrese titulo"
                onChange={(e) => setTitle(e.target.value)}
              />
              <button onClick={() => updateTitle()}>GUARDAR</button>
            </Modal>
          </div>
          <div className="edit">
            <p>{onboardinginfo.t1}</p>
            <Modal>
              <input
                style={{ width: "300px", height: "30px" }}
                type="text"
                placeholder="Ingrese texto 1"
                onChange={(e) => setT1(e.target.value)}
              />
              <button onClick={() => updateT1()}>GUARDAR</button>
            </Modal>
          </div>

          <div className="edit">
            <p>{onboardinginfo.t2}</p>
            <Modal>
              <input
                style={{ width: "300px", height: "30px" }}
                type="text"
                placeholder="Ingrese texto 2"
                onChange={(e) => setT2(e.target.value)}
              />
              <button onClick={() => updateT2()}>GUARDAR</button>
            </Modal>
          </div>

          <div className="edit">
            <p>{onboardinginfo.t3}</p>
            <Modal>
              <input
                style={{ width: "300px", height: "30px" }}
                type="text"
                placeholder="Ingrese texto 2"
                onChange={(e) => setT3(e.target.value)}
              />
              <button onClick={() => updateT3()}>GUARDAR</button>
            </Modal>
          </div>
          <div className="edit">
            <h2>{onboardinginfo.t4}</h2>
            <Modal>
              <input
                style={{ width: "300px", height: "30px" }}
                type="text"
                placeholder="Ingrese texto 3"
                onChange={(e) => setT4(e.target.value)}
              />
              <button onClick={() => updateT4()}>GUARDAR</button>
            </Modal>
          </div>

          <div className="contact-btn">
            <Link to={"/contact"}>¡Contáctanos!</Link>
          </div>
        </div>

        <div className="logo_ctn">
          <img className="logoOnboard" src={logoCalu} alt="logo calu" />
        </div>
      </div>

      <div className="contactFlex"></div>
    </div>
  );
};
export default Onboarding;
