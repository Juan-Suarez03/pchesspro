import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./LoginContent.css";
import LogoMobile from "../../assets/logomobile.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const LoginContent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
  const { user, updateUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/profile");
    }
  }, [isUserLoggedIn, navigate]);

  const handleSubmit = (event) => {
    fetch("http://localhost:9000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    })
      .then((res) => {
        setData(res);
        setTimeout(function () {
          console.log(res);
          if (res.status === 200) {
            window.location.href = "/learn";
            alert("Usuario Creado Correctamente");
            navigate("/login");
          } else if (res.status === 404) {
            alert("Usuario no ha podido ser creado intente nuevamente");
          }
          console.log(data.status);
          setData({});
        }, 500);
      })
      .catch((error) => console.error(error));
    event.preventDefault();

    // Enviar los datos del formulario al backend

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="hero-container-login">
      <div className="hero-login">
        <div className="form-container">
          <form className="form-login" method="POST" onSubmit={handleSubmit}>
            <img src={LogoMobile} alt="Logo" />
            <label className="label-login">
              Usuario:
              <input
                autoFocus
                className="input-login"
                type="text"
                placeholder="Nombre de Usuario"
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
            <label className="label-login">
              Email:
              <input
                className="input-login"
                type="email"
                placeholder="Correo Electronico"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label className="label-login">
              Contraseña:
              <input
                placeholder="Contrasenia"
                className="input-login"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <button className="form-button" type="submit">
              Crear Cuenta
            </button>
          </form>
          <a
            href="/login"
            style={{ marginTop: "1rem", color: "var(--primary)" }}
          >
            Ya tienes cuenta? Inicia Sesion!
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
