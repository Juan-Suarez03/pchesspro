import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="footer-container">
      {mobile === false ? (
        <div className="footer">
          <div className="footer-left">
            <img src={Logo} alt="Pchess-logo" />
            <p className="footer-description">
              Pequenia descripcion de la pagina
            </p>
          </div>
          <div className="footer-right">
            <div className="social-media">
              <a href="/">
                <div className="social-icon">
                  <FaFacebook
                    style={{ fontSize: "25px", color: "var(--dark-black)" }}
                  />
                </div>
              </a>
              <a href="/">
                <div className="social-icon">
                  <FaInstagram
                    style={{ fontSize: "25px", color: "var(--dark-black)" }}
                  />
                </div>
              </a>
              <a href="/">
                <div className="social-icon">
                  <FaTwitter
                    style={{ fontSize: "25px", color: "var(--dark-black)" }}
                  />
                </div>
              </a>
            </div>
            <div className="footer-right-ul">
              <div>
                <li className="list-footer-item">Enlace</li>
                <li className="list-footer-item">Enlace</li>
                <li className="list-footer-item">Enlace</li>
              </div>
              <div>
                <li className="list-footer-item">Enlace</li>
                <li className="list-footer-item">Enlace</li>
                <li className="list-footer-item">Enlace</li>
              </div>
              <div>
                <li className="list-footer-item">Enlace</li>
                <li className="list-footer-item">Enlace</li>
                <li className="list-footer-item">Enlace</li>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer">
          <div className="footer-logo">
            <img src={Logo} alt="Pchess-logo" />
          </div>
          <div className="footer-ul">
            <div className="footer-list">
              <li className="list-footer-mobile">Enlace</li>
              <li className="list-footer-mobile">Enlace</li>
              <li className="list-footer-mobile">Enlace</li>
            </div>
            <div className="footer-list">
              <li className="list-footer-mobile">Enlace</li>
              <li className="list-footer-mobile">Enlace</li>
              <li className="list-footer-mobile">Enlace</li>
            </div>
          </div>
          <div className="footer-icons">
            <div className="social-media">
              <a href="/">
                <div className="social-icon">
                  <FaFacebook
                    style={{ fontSize: "25px", color: "var(--dark-black)" }}
                  />
                </div>
              </a>
              <a href="/">
                <div className="social-icon">
                  <FaInstagram
                    style={{ fontSize: "25px", color: "var(--dark-black)" }}
                  />
                </div>
              </a>
              <a href="/">
                <div className="social-icon">
                  <FaTwitter
                    style={{ fontSize: "25px", color: "var(--dark-black)" }}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="footer-description-mobile">
            <p>Descripcion de la pagina</p>
          </div>
        </div>
      )}
      <div className="copy">
        <p>CopyRight2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
