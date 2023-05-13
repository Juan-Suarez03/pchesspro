import React from "react";
import "./LoginComponent.css";
import LoginContent from "../../components/LoginContent/LoginContent";
import Footer from "../../components/Footer/Footer";

const LoginComponent = () => {
  return (
    <div className="Main-login">
      <div className="login-main-container">
        <LoginContent />
      </div>
      <Footer />
    </div>
  );
};

export default LoginComponent;
