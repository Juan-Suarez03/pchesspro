import React, { useEffect } from "react";
import { useState } from "react";
import "./LoginContent.css";
import LogoMobile from "../../assets/logomobile.svg";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const [closeAlert, setCloseAlert] = useState(false);
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
  const { user, updateUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const navigate = useNavigate();
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      localStorage.setItem("isUserLoggedIn", JSON.stringify(isUserLoggedIn));
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/profile");
    }
  }, [isUserLoggedIn, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:9000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsUserLoggedIn(response.success);
        updateUser(response.user);
        if (response.success) {
          console.log(isUserLoggedIn);
        } else {
          console.log(response.message);
          setCloseAlert(false);
        }
        // Aquí puedes acceder a las variables actualizadas
        console.log(user);
        console.log(isUserLoggedIn);
      })
      .catch((error) => console.error(error));

    // Enviar los datos del formulario al backend
    setUsername("");
    setPassword("");
  };
  return (
    <div className="hero-container-login">
      <div className="hero-login">
        <div className="form-container">
          <form className="form-login" action="/" onSubmit={handleSubmit}>
            <img src={LogoMobile} alt="Logo" />
            <label className="label-login">
              Usuario:
              <input
                className="input-login"
                type="text"
                placeholder="Nombre de Usuario"
                value={username}
                onChange={handleUsernameChange}
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
              Iniciar sesión
            </button>
            {!data.success && data.send && !closeAlert ? (
              <div className="error-message">
                <p>{data.message}</p>
                <FaTimesCircle
                  style={{ cursor: "pointer" }}
                  onClick={() => setCloseAlert(true)}
                />
              </div>
            ) : undefined}
          </form>
          <a
            style={{ marginTop: "1rem", color: "var(--primary)" }}
            href="/register"
          >
            No tienes cuenta? crea una!
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
