import React from "react";
import "./CursosComponent.css";
import Footer from "../../components/Footer/Footer";
import CursosContent from "../../components/CursosContent/CursosContent";

const CursosComponent = () => {
  return (
    <div className="Main">
      <div className="Main-container">
        <CursosContent />
      </div>
      <Footer />
    </div>
  );
};

export default CursosComponent;
