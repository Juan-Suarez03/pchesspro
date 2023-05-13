import React, { useEffect, useState } from "react";
import "./Hero.css";
import Multiplayer from "../../assets/Vectormultiplayer.png";
import CreatePlay from "../../assets/Vectorcrearpartida.png";
import VsComp from "../../assets/Vectorvscomp.png";
import Streaming from "../../assets/Vectortransmition.png";
import TournamentFire from "../../assets/Vectortournamentfire.png";
import TournamentPuzzle from "../../assets/Vectortournamentpuzzle.png";
import Balanza from "../../assets/Vectorbalanza.png";
import Upgrading from "../../assets/Vectorupgrading.png";
import Cup from "../../assets/Vectorcup.png";
import Pencil from "../../assets/pencil.svg";
import "framer-motion";
import ChessTable from "../../assets/chesstable.png";
import CreditCard from "../../assets/credit-card.svg";
import { NoticeData } from "./NoticeData/NoticeData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Mb895EjyR4hcldPPWyylhK5TORtNe6xjeTcZMaX06TibxTwJv1YQRP1SDid6Jseotgs8kMGeaUZdctZVl5H3mQf00fuLb2KYe"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleDonate = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      // Envía el objeto de pago al servidor para procesarlo
    }
  };

  return (
    <form onSubmit={handleDonate} className="donate-card-container">
      <CardElement />
      <button type="submit" className="button-pay">
        Pagar
      </button>
    </form>
  );
};

const Hero = () => {
  const [Qualification, setQualification] = useState([]);
  const middle = NoticeData.length / 2;
  const mobile = window.innerWidth <= 768 ? true : false;

  useEffect(() => {
    const getQualification = () => {
      fetch("http://localhost:9000/api/best")
        .then((res) => res.json())
        .then((res) => setQualification(res));
    };
    getQualification();
  }, []);

  console.log(Qualification);
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="aside-component">
          {/* GAME MODES */}

          <div className="game-modes" style={{ width: "100%" }}>
            <h1 className="aside-title">Modos de Juego</h1>
            <div className="game-button-container">
              {/* <button className="game-button">
                <img className="button-img" src={VsOnline} alt="Online" /> 1vs
                Online
              </button> */}
              <button className="game-button">
                <img className="button-img" src={CreatePlay} alt="Online" />{" "}
                Crear Partida
              </button>
              <Link to="/partidacom" className="game-button">
                <img className="button-img" src={VsComp} alt="Online" /> 1 vs
                COMP
              </Link>
              <button className="game-button">
                <img className="button-img" src={Multiplayer} alt="Online" />
                Multijugador
              </button>
            </div>
          </div>

          {/* STREAMING */}

          <div className="streaming" style={{ width: "95%" }}>
            <h1 className="aside-title">Transmisiones</h1>
            <p className="transmision-p">
              <img src={Streaming} alt="" />
              <a
                href="https://www.twitch.tv/?lang=es"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--primary)" }}
              >
                Transmision Twitch
              </a>
              ◉ Internacional de educacion
            </p>
            <p className="transmision-p">
              <img src={Streaming} alt="" />
              <a
                href="https://www.twitch.tv/?lang=es"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--primary)" }}
              >
                Transmision Twitch
              </a>
              ◉ Internacional de educacion
            </p>
          </div>
          {/* TOURNAMENT */}
          <div className="tournament" style={{ width: "95%" }}>
            <h1 className="aside-title">Torneos Disponibles</h1>
            <div className="tournament-button-container">
              <button className="tournament-button">
                <img
                  src={TournamentFire}
                  alt="Fire"
                  className="tournament-img"
                />
                Torneo Chess 960 Diario <br />
                <span className="span">
                  176 jugadores ◉ Se esta jugando ahora
                </span>
              </button>
            </div>
            <div className="tournament-button-container">
              <button className="tournament-button">
                <img
                  className="tournament-img"
                  src={TournamentPuzzle}
                  alt="Puzzle"
                />
                Torneo Chess 960 Diario <br />
                <span className="span">
                  176 jugadores ◉ Se esta jugando ahora
                </span>
              </button>
            </div>
          </div>

          {/* QUALIFICATION */}
          <div className="qualification" style={{ width: "95%" }}>
            <h1 className="aside-subtitle">
              <img src={TournamentFire} alt="fire" className="subtitle-icon" />{" "}
              Clasificacion
            </h1>
            <div className="qualification-list">
              <table className="qualification-title">
                <td>Jugador</td>
                <td>Puntuacion</td>
                <td>Ranked</td>
              </table>
              {Qualification.map(({ id, user_id, score }, index) => {
                return (
                  <table className="qualification-user">
                    <td>
                      <img
                        src={Balanza}
                        alt="Balance"
                        className="qualification-icon"
                      />{" "}
                      {user_id}
                    </td>
                    <td>
                      <img
                        src={TournamentFire}
                        alt="fire"
                        className="qualification-icon"
                      />
                      {score}
                    </td>
                    <td>
                      <img
                        src={Upgrading}
                        className="qualification-icon"
                        alt="up"
                      />
                      {index + 1}
                    </td>
                  </table>
                );
              })}
            </div>
          </div>

          {/* WINNERS TOURNAMENTS */}

          <div className="qualification" style={{ width: "95%" }}>
            <h1 className="aside-subtitle">
              <img src={TournamentFire} alt="fire" className="subtitle-icon" />{" "}
              Ganadores de torneos
            </h1>
            <div className="qualification-list">
              <table className="qualification-title">
                <td>Jugador</td>
                <td>Puntuacion</td>
                <td>Posiciones</td>
              </table>
              {Qualification.map(({ id, user_id, score }, index) => {
                return (
                  <table className="qualification-user">
                    <td>
                      <img
                        src={Balanza}
                        alt="Balance"
                        className="qualification-icon"
                      />{" "}
                      {user_id}
                    </td>
                    <td>
                      <img
                        src={TournamentFire}
                        alt="fire"
                        className="qualification-icon"
                      />
                      {score}
                    </td>
                    <td>
                      <img
                        src={Upgrading}
                        className="qualification-icon"
                        alt="up"
                      />
                      {index + 1}
                    </td>
                  </table>
                );
              })}
            </div>
          </div>

          {/* OPENS TOURNAMENT */}

          <div className="qualification" style={{ width: "95%" }}>
            <h1 className="aside-subtitle">
              <img src={Cup} alt="cup" className="subtitle-icon" /> OPENS
              TOURNAMENT
            </h1>
            <div className="qualification-list">
              <table className="qualification-title">
                <td>Jugador</td>
                <td>Puntuacion</td>
                <td>Posiciones</td>
              </table>
              {Qualification.map(({ id, user_id, score }, index) => {
                return (
                  <table className="qualification-user">
                    <td>
                      <img
                        src={Balanza}
                        alt="Balance"
                        className="qualification-icon"
                      />{" "}
                      {user_id}
                    </td>
                    <td>
                      <img
                        src={TournamentFire}
                        alt="fire"
                        className="qualification-icon"
                      />
                      {score}
                    </td>
                    <td>
                      <img
                        src={Upgrading}
                        className="qualification-icon"
                        alt="up"
                      />
                      {index + 1}
                    </td>
                  </table>
                );
              })}
            </div>
          </div>
        </div>
        <div className="play-container">
          <div className="submenu">
            <div className="submenu-items-container">
              <a className="submenu-item" href="/">
                Emparejamiento
              </a>
            </div>
            <div className="submenu-items-container">
              <a className="submenu-item" href="/">
                Sala de Espera
              </a>
            </div>
            <div className="submenu-items-container">
              <a className="submenu-item" href="/">
                Correspondencia
              </a>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-element">
              <h1 className="game-title">1+0</h1>
              <div className="game-name-icon-container">
                <p className="game-subtitle">
                  {" "}
                  <img src={Balanza} alt="fire" /> Bullet
                </p>
              </div>
            </div>
            <div className="grid-element">
              <h1 className="game-title">1+0</h1>
              <div className="game-name-icon-container">
                <p className="game-subtitle">
                  {" "}
                  <img src={Balanza} alt="fire" /> Bullet
                </p>
              </div>
            </div>
            <div className="grid-element">
              <h1 className="game-title">1+0</h1>
              <div className="game-name-icon-container">
                <p className="game-subtitle">
                  {" "}
                  <img src={Balanza} alt="fire" /> Bullet
                </p>
              </div>
            </div>
            <div className="grid-element">
              <h1 className="game-title">1+0</h1>
              <div className="game-name-icon-container">
                <p className="game-subtitle">
                  {" "}
                  <img src={Balanza} alt="fire" /> Bullet
                </p>
              </div>
            </div>
            <div className="grid-element">
              <h1 className="game-title">1+0</h1>
              <div className="game-name-icon-container">
                <p className="game-subtitle">
                  {" "}
                  <img src={Balanza} alt="fire" /> Bullet
                </p>
              </div>
            </div>
            <div className="grid-element">
              <h1 className="game-title">1+0</h1>
              <div className="game-name-icon-container">
                <p className="game-subtitle">
                  {" "}
                  <img src={Balanza} alt="fire" /> Bullet
                </p>
              </div>
            </div>
          </div>
          <div className="button-game">
            <img src={Pencil} alt="" />
            <p className="personalized-game">Personalizado</p>
          </div>
          <div className="chess-container">
            <div className="chess-game-container">
              <div>
                <h1 className="aside-title">Partida en Linea</h1>
              </div>
              <div className="chess-subtitle">
                <p>
                  <span style={{ fontWeight: "800" }}>Jugador</span> 1.221Pts
                </p>
                <p style={{ fontWeight: "800" }}>00:32</p>
              </div>
              <div className="game-img">
                <img src={ChessTable} alt="" />
              </div>
              <div className="chess-subtitle">
                <p>
                  <span style={{ fontWeight: "800" }}>Jugador</span> 1.221Pts
                </p>
                <p style={{ fontWeight: "800" }}>00:32</p>
              </div>
            </div>
            <div className="chess-game-container">
              <div>
                <h1 className="aside-title">Partida en Linea</h1>
              </div>
              <div className="chess-subtitle">
                <p>
                  <span style={{ fontWeight: "800" }}>Jugador</span> 1.221Pts
                </p>
                <p style={{ fontWeight: "800" }}>00:32</p>
              </div>
              <div className="game-img">
                <img src={ChessTable} alt="" />
              </div>
              <div className="chess-subtitle">
                <p>
                  <span style={{ fontWeight: "800" }}>Jugador</span> 1.221Pts
                </p>
                <p style={{ fontWeight: "800" }}>00:32</p>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="notice-container">
            <div>
              <h1 className="aside-title">Articulos de interes</h1>
            </div>
            {mobile === false ? (
              <div className="notice-a-container">
                <Carousel>
                  {NoticeData.slice(0, middle).map(
                    ({ id, title, description, image }) => {
                      return (
                        <div className="notice-element-container" key={id}>
                          <div className="notice-element">
                            <div className="notice-img">
                              <img src={ChessTable} alt="" />
                            </div>
                            <div className="notice-name">
                              <p className="notice-title">{title}</p>
                              <p className="notice-description">
                                {description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </Carousel>
                <Carousel>
                  {NoticeData.slice(middle, NoticeData.length).map(
                    ({ id, title, description, image }) => {
                      return (
                        <div className="notice-element-container" key={id}>
                          <div className="notice-element">
                            <div className="notice-img">
                              <img src={ChessTable} alt="" />
                            </div>
                            <div className="notice-name">
                              <p className="notice-title">{title}</p>
                              <p className="notice-description">
                                {description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </Carousel>
              </div>
            ) : (
              <div className="notice-a-container">
                <Carousel>
                  {NoticeData.map(({ id, title, description, image }) => {
                    return (
                      <div className="notice-element-container" key={id}>
                        <div className="notice-element">
                          <div className="notice-img">
                            <img src={ChessTable} alt="" />
                          </div>
                          <div className="notice-name">
                            <p className="notice-title">{title}</p>
                            <p className="notice-description">{description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            )}
          </div>
          <div className="button-game">
            <img src={CreditCard} alt="CreditCard" />
            <p className="personalized-game">Realizar Donacion</p>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Hero;
