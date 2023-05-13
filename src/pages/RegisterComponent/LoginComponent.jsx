import React from "react";
import "./LoginComponent.css";
import RegisterContent from "../../components/RegisterContent/LoginContent";
import Footer from "../../components/Footer/Footer";

const LoginComponent = () => {
  return (
    <div className="Main-login">
      <div className="login-main-container">
        <RegisterContent />
      </div>
      <Footer />
    </div>
  );
};

export default LoginComponent;
