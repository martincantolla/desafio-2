import React from "react";

const Alert = (prop) => {
  return (
    <>
      {prop.error3 ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
      {prop.error1 ? (
        <p className="error">Las contraseñas deben ser iguales</p>
      ) : null}
      {prop.error2 ? (
        <p className="error">El email debe tener un formato válido</p>
      ) : null}
      {prop.success ? <p className="success">Registro Exitoso</p> : null}
    </>
  );
};

export default Alert;
