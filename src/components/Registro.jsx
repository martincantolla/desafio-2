import React from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Registro = () => {
  return (
    <div className="registro">
      <h1>Crea una cuenta</h1>
      <SocialButton prop1="facebook" prop2="instagram" prop3="twitter" />
      <p>O usa tu email para registrarte</p>
      <Formulario />
    </div>
  );
};

export default Registro;
