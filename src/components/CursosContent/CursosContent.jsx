import React from "react";
import "./CursosContent.css";
import Corona from "../../assets/Corona.png";
import PurpleCheck from "../../assets/purplecheck.svg";
import { CursosData } from "./CursosData";
import { bestStudents } from "./CursosData";
import Stars from "../../assets/stars.png";
import { FaCreditCard } from "react-icons/fa";
import Elipse from "../../assets/Ellipse 1.png";

function CursosContent() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="aside-component">
          <div className="user-container">
            <h1 className="user-welcome">Hola Pedro</h1>
            <h1 className="user-welcome">Seccion Cursos</h1>
            <div className="corona">
              <img src={Corona} alt="Stars" />
              <h1 className="number">1</h1>
            </div>
            <img src={Stars} alt="Stars" />
            <p className="user-levelup">Nivel Basico</p>
            <h1 className="curso-title">Aprende a Jugar Ajedrez</h1>
            <div className="progress-bar">
              <div className="progress-width"></div>
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
            <div className="previus-know">
              <h1 className="curso-title-know">Conocimiento Previo</h1>
              <div className="elipse">
                <img
                  src={Elipse}
                  alt="elipse"
                  style={{ width: "12px", height: "12px" }}
                />
                <p className="curso-description-know">
                  No se requiere conocimiento previo
                </p>
              </div>
            </div>
            <div className="best-student-container">
              <h1 className="curso-title">Mejores Estudiantes</h1>
              <div className="qualification-list">
                <table className="qualification-title">
                  <td>Jugador</td>
                  <td>Puntuacion</td>
                  <td>Posiciones</td>
                </table>
                {bestStudents.map(({ user, points, position }) => {
                  return (
                    <table className="qualification-user">
                      <td>
                        <img
                          src={PurpleCheck}
                          alt="Balance"
                          className="qualification-icon"
                        />
                        {user}
                      </td>
                      <td>
                        <img
                          src={PurpleCheck}
                          alt="fire"
                          className="qualification-icon"
                        />
                        {points}
                      </td>
                      <td>
                        <img
                          src={PurpleCheck}
                          className="qualification-icon"
                          alt="up"
                        />
                        {position}
                      </td>
                    </table>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN-0--------------------------------- */}
        <div className="cursos-container">
          <div className="curso-title-h1">Cursos Disponibles</div>
          <div className="curso-info">
            <h1 className="curso-title">Nivel 1 del Curso</h1>

            <p className="curso-description">
              Descripcion de los tipos de pieza etc
            </p>

            {CursosData.map(({ title, description, image }) => {
              return (
                <div
                  className="curso-item"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  <img className="curso-item-img" src={image} alt={title} />
                  <div className="curso-item-left">
                    <h1 className="curso-item-title">{title}</h1>
                    <p className="curso-item-description">{description}</p>
                  </div>
                  <div className="curso-item-right">
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
          <div className="curso-info">
            <h1 className="curso-title">Nivel 2 del Curso</h1>
            <p className="curso-description">
              Descripcion de los tipos de pieza etc
            </p>
            {CursosData.map(({ title, description, image }) => {
              return (
                <div
                  className="curso-item"
                  style={{ backgroundColor: "var(--secondary)" }}
                >
                  <img src={image} alt={title} />
                  <div className="curso-item-left">
                    <h1 className="curso-item-title">{title}</h1>
                    <p className="curso-item-description">{description}</p>
                  </div>
                  <div className="curso-item-right">
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
          <div className="curso-info">
            <h1 className="curso-title">Nivel 3 de Curso</h1>
            <p className="curso-description">
              Descripcion de los tipos de pieza etc
            </p>
            {CursosData.map(({ title, description, image }) => {
              return (
                <div
                  className="curso-item"
                  style={{ backgroundColor: "var(--secondary)" }}
                >
                  <img src={image} alt={title} />
                  <div className="curso-item-left">
                    <h1 className="curso-item-title">{title}</h1>
                    <p className="curso-item-description">{description}</p>
                  </div>
                  <div className="curso-item-right">
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
}

export default CursosContent;
