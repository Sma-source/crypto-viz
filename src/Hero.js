import React from "react";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="col-sm-6 coindata text-center">
          <h2 className="titre">Info, Graphique et Prix des Cryptomonnaies</h2>
          <h3>Rester informé du cours de vos crypto préférés</h3>
          <Link to="#" className="bouton">
            Commencer maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
