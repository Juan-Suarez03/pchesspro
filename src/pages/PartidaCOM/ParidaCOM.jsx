import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PartidaCOM from "../../components/PartidaCOM/PartidaCOM";

const ParidaCOM = () => {
  return (
    <div className="playcontainer" style={{ marginTop: "6rem" }}>
      <div style={{ height: "100vh" }}>
        <PartidaCOM style={{ height: "20vh" }} />
      </div>
      <Footer />
    </div>
  );
};

export default ParidaCOM;
