import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import Cursos from "../../assets/Vectorcursos.png";
import Logo from "../../assets/logo.svg";
import LogoMobile from "../../assets/logomobile.svg";
import Login from "../../assets/VectorLogin.png";
import HamburgerMenu from "../../assets/menuhamburguer.png";
import { motion } from "framer-motion";
import { FaTimesCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsUserLoggedIn(false);
    setUser({});
    setMenuOpened(false);
    navigate("/login");
    localStorage.clear();
  };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="navbar-container">
      <Link className="logo-container" to="/">
        <img
          className={mobile ? `logo-mobile` : `logo`}
          src={mobile ? LogoMobile : Logo}
          alt="Icon"
        />
      </Link>
      {mobile === false ? (
        <div className="navbar-menu-container">
          <Link className="cursos-button" to="/cursos">
            <img
              src={Cursos}
              alt=""
              style={{ width: "16px", height: "16px" }}
            />
            <p>Cursos</p>
          </Link>
          <ul className="navbar-menu">
            <li className="item-menu">
              <Link to="/" style={{ color: "var(--primary)" }}>
                Inicio
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/learn" style={{ color: "var(--primary)" }}>
                Aprendizaje
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/" style={{ color: "var(--primary)" }}>
                Contacto
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/" style={{ color: "var(--primary)" }}>
                Blog
              </Link>
            </li>
            {isUserLoggedIn ? (
              <li className="item-menu-mobile" onClick={() => handleLogOut()}>
                <Link to="/learn" style={{ color: "var(--primary)" }}>
                  Cerrar Sesion
                </Link>
              </li>
            ) : (
              <div style={{ display: "none" }}></div>
            )}
          </ul>
          <Link to="/login">
            <div className="login-container">
              <img
                className="login"
                src={Login}
                alt=""
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  marginRight: "2rem",
                }}
              />
            </div>
          </Link>
        </div>
      ) : (
        <div className="navbar-menu-container">
          <Link className="cursos-button" to="/cursos">
            <img
              src={Cursos}
              alt=""
              style={{ width: "12px", height: "12px" }}
            />
            <p>Cursos</p>
          </Link>
          {!isUserLoggedIn ? (
            <Link to="/login">
              <div className="login-container">
                <img
                  className="login"
                  src={Login}
                  alt=""
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                />
              </div>
            </Link>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          <div className="login-container">
            <img
              onClick={() => setMenuOpened(true)}
              className="login"
              src={HamburgerMenu}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem", marginRight: "2rem" }}
            />
          </div>
        </div>
      )}
      {menuOpened ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="mobile-menu"
        >
          <FaTimesCircle
            className="close-menu"
            onClick={() => setMenuOpened(false)}
          />
          <Link to="/">
            <img
              src={LogoMobile}
              alt="logomobile"
              style={{ width: "12rem", marginTop: "1rem" }}
            />
          </Link>
          <ul className="navbar-menu-mobile">
            <li
              className="item-menu-mobile"
              onClick={() => setMenuOpened(false)}
            >
              <Link to="/" style={{ color: "var(--primary)" }}>
                Inicio
              </Link>
            </li>
            <li
              className="item-menu-mobile"
              onClick={() => setMenuOpened(false)}
            >
              <Link to="/learn" style={{ color: "var(--primary)" }}>
                Aprendizaje
              </Link>
            </li>
            <li
              className="item-menu-mobile"
              onClick={() => setMenuOpened(false)}
            >
              <Link to="/" style={{ color: "var(--primary)" }}>
                Contacto
              </Link>
            </li>
            <li
              className="item-menu-mobile"
              onClick={() => setMenuOpened(false)}
            >
              <Link to="/" style={{ color: "var(--primary)" }}>
                Blog
              </Link>
            </li>
            {isUserLoggedIn ? (
              <li className="item-menu-mobile" onClick={() => handleLogOut()}>
                <Link to="/" style={{ color: "var(--primary)" }}>
                  Cerrar Sesion
                </Link>
              </li>
            ) : (
              <div style={{ display: "none" }}></div>
            )}
          </ul>
        </motion.div>
      ) : (
        <div style={{ display: "none" }}></div>
      )}
    </div>
  );
};

export default Navbar;
