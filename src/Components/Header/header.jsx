import React, { useState, useEffect } from "react";
import "./header.css";
import miImagen from "../../images/logocalu.png";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");
  }, [location]);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      window.location.pathname = "/Admin-login";
    });
  };

  const [showLinks, setShowLinks] = useState(true);

  const handleAdminMenu = () => {
    setShowAdminMenu(!showAdminMenu);
  };

  const handleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className="navBar">
      <div className="header_items">
        {!isAuth ? (
          <Link to="/Admin-login"></Link>
        ) : (
          <>
            <div className="admin-menu">
              <button className="admin-btn" onClick={handleAdminMenu}>
                Admin
              </button>
              {showAdminMenu && (
                <div className="admin-dropdown">
                  <Link to="/product-form">Create Product</Link>
                  <Link to="/create-post">Create Post</Link>
                  <button onClick={signUserOut}>Log Out</button>
                </div>
              )}
            </div>
          </>
        )}

        <nav>
          <Link to={"/"}>
            <img className="logoCalu" src={miImagen} alt="Logo Calu" />
          </Link>
          <nav className={showLinks ? "links " : "link show "}>
            <div className="links_ctn">
              <Link to={"/"}> HOME </Link>
              <div className="line"></div>
              <Link to={"/services"}> SERVICIOS </Link>
              <div className="line"></div>
              <Link to={"/blog"}> BLOG </Link>
              <div className="line"></div>
              <Link to={"/Contact"}>CONTACTO </Link>
            </div>
          </nav>
          <span
            onClick={handleLinks}
            className={`btn ${showLinks ? "bar" : "cross"}`}
          >
            <div>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </span>
        </nav>
      </div>
    </header>
  );
};
