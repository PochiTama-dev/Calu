import "./Onboarding.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import logoCalu from "../../images/icono_calu.svg";

const Onboarding = () => {
  const [onboardinginfo, setOnboardinginfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOnboarding = async () => {
      try {
        const OnboardingDoc = doc(db, "home", "Onboarding");
        const docSnapshot = await getDoc(OnboardingDoc);
        if (docSnapshot.exists()) {
          setOnboardinginfo(docSnapshot.data());
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getOnboarding();
  }, []);

  useLayoutEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    };

    window.addEventListener("resize", documentHeight);
    documentHeight();

    return () => {
      window.removeEventListener("resize", documentHeight);
    };
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos.</p>;
  }

  return (
    <div className="onboarding">
      <div className="onb_items">
        <div className="parrafo">
          <h1>{onboardinginfo.title}</h1>
          <p>{onboardinginfo.t1}</p>
          <p>{onboardinginfo.t2}</p>
          <p>{onboardinginfo.t3}</p>
          <h2>{onboardinginfo.t4}</h2>
          <div className="contact-btn">
            <Link
              to={"/contact"}
              onClick={() => {
                window.scroll({
                  top: 0,
                });
              }}
            >
              ¡Contáctanos!
            </Link>
          </div>
        </div>
        <img className="logoOnboard" src={logoCalu} alt="logo calu" />
      </div>

      <div className="contactFlex"></div>
    </div>
  );
};

export default Onboarding;
