import { React, useEffect } from "react";
import "./CursosContent.css";
import Casco from "../../assets/brutal-helm-1.svg";
import PurpleCheck from "../../assets/purplecheck.svg";
import { LearnData } from "./LearnData";
import { FaCreditCard } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

const CursosContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);
  const { user } = useContext(UserContext) || {};
  const { isUserLoggedIn } = useContext(UserContext);
  console.log(isUserLoggedIn);
  return (
    <div className="hero-container-learn">
      <div className="hero-learn">
        <div className="aside-component-learn">
          <div className="user-container-learn">
            <h1 className="user-welcome-learn">Hola {user.username}</h1>
            <img
              src={Casco}
              alt="logo"
              style={{ width: "128px", height: "121px" }}
            />
            <p className="user-level-learn">Nivel 1</p>
            <h1 className="curso-title-learn">Aprende a Jugar</h1>
            <div className="progress-bar-learn">
              <div className="progress-width-learn"></div>
              <p
                style={{
                  color: "var(--light-grey)",
                  zIndex: "10",
                  margin: "auto",
                }}
              >
                Progreso 30%
              </p>
            </div>
          </div>
        </div>
        <div className="cursos-container-learn">
          <div className="curso-info-learn">
            <h1 className="curso-title-learn">Piezas de Ajedrez</h1>

            <p className="curso-description-learn">
              Descripcion de los tipos de pieza etc
            </p>

            {LearnData.map(({ title, description, image }) => {
              return (
                <div
                  className="curso-item-learn"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  <img src={image} alt={title} />
                  <div className="curso-item-left-learn">
                    <h1 className="curso-item-title-learn">{title}</h1>
                    <p className="curso-item-description-learn">
                      {description}
                    </p>
                  </div>
                  <div className="curso-item-right-learn">
                    <img
                      src={PurpleCheck}
                      alt="logo"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="curso-info-learn">
            <h1 className="curso-title-learn">Piezas de Ajedrez</h1>
            <p className="curso-description-learn">
              Descripcion de los tipos de pieza etc
            </p>
            {LearnData.map(({ title, description, image }) => {
              return (
                <div
                  className="curso-item-learn"
                  style={{ backgroundColor: "var(--secondary)" }}
                >
                  <img src={image} alt={title} />
                  <div className="curso-item-left-learn">
                    <h1 className="curso-item-title-learn">{title}</h1>
                    <p className="curso-item-description-learn">
                      {description}
                    </p>
                  </div>
                  <div className="curso-item-right-learn">
                    <img
                      src={PurpleCheck}
                      alt="logo"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="curso-info-learn">
            <h1 className="curso-title-learn">Piezas de Ajedrez</h1>
            <p className="curso-description-learn">
              Descripcion de los tipos de pieza etc
            </p>
            {LearnData.map(({ title, description, image }) => {
              return (
                <div
                  className="curso-item-learn"
                  style={{ backgroundColor: "var(--secondary)" }}
                >
                  <img src={image} alt={title} />
                  <div className="curso-item-left-learn">
                    <h1 className="curso-item-title-learn">{title}</h1>
                    <p className="curso-item-description-learn">
                      {description}
                    </p>
                  </div>
                  <div className="curso-item-right-learn">
                    <img
                      src={PurpleCheck}
                      alt="logo"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ended" style={{ padding: "1rem" }}>
            <h1 className="curso-title-ended">Ya sabes Jugar Ajedrez</h1>
            <p className="curso-description-ended">
              En esta seccion aprendiste a como mover las piezas y todos los
              fundamentos
            </p>
          </div>
          <div className="buttons">
            <a href="/" style={{ color: "var(--dark-black)" }}>
              <div className="button--game">
                <p className="personalized-game"> Ir a Modos de Juego</p>
              </div>
            </a>

            <a href="/" style={{ color: "var(--dark-black)" }}>
              <div className="button--game">
                <p className="personalized-game"> Ir a Cursos Disponibles</p>
              </div>
            </a>
            <div className="button--game">
              <FaCreditCard />
              <p className="personalized-game">-Realizar Donacion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursosContent;
