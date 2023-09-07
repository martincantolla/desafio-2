import React from "react";
import { useState } from "react";
import Alert from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");
  const [email, setEmail] = useState("");

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [success, setSuccess] = useState(false);

  const clearErrors = () => {
    setError1(false);
    setError2(false);
    setError3(false);
  };

  const validarDatos = (e) => {
    e.preventDefault();

    if (!nombre || !contraseña || !contraseña2 || !email) {
      setError3(true);
      setTimeout(clearErrors, 3000);
      return;
    }

    setError3(false);

    if (contraseña !== contraseña2) {
      setError1(true);
      setTimeout(clearErrors, 3000);
      return;
    }

    setError1(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError2(true);
      setTimeout(clearErrors, 3000);
      return;
    }

    setError2(false);

    if (!error1 && !error2 && !error3) {
      console.log("success");
      setSuccess(true);
      setNombre("");
      setContraseña("");
      setContraseña2("");
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
      return;
    }

    setSuccess(false);
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-container">
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              className="form-control"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setContraseña(e.target.value)}
              value={contraseña}
              placeholder="Contraseña"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              onChange={(e) => setContraseña2(e.target.value)}
              value={contraseña2}
              placeholder="Repita su contraseña"
            />
          </div>
          <button
            type="submit"
            className="btn
btn-success"
          >
            Registrarse
          </button>
        </div>
        <Alert
          error1={error1}
          error2={error2}
          error3={error3}
          success={success}
        />
      </form>
    </>
  );
};

export default Formulario;
