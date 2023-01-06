import { useState } from "react";

import "./styles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const handleChangeContrasena = (event) => {
    setContrasena(event.target.value);
  };

  const handle = (event) => {
    setConfirmarContrasena(event.target.value);
  };

  const cualquierTelefono = (event) => {
    setTelefono(event.target.value);
  };

  const sendData = () => {
    console.log(name, correo, contrasena, confirmarContrasena, telefono);
  };

  return (
    <div className="background">
      <div className="containerRegister">
        <div className="register">
          <p>Register</p>
        </div>

        <input
          className="input"
          placeholder="Nombre"
          onChange={handleChangeName}
        />

        <input
          className="input"
          placeholder="Correo"
          onChange={handleChangeCorreo}
        />

        <input
          className="input"
          placeholder="Contrasena"
          onChange={handleChangeContrasena}
        />

        <input
          className="input"
          placeholder="Confirmar Contrasena"
          onChange={handle}
        />

        <input
          className="input"
          placeholder="Telefono"
          onChange={cualquierTelefono}
        />

        <button className="btnRegister" onClick={() => sendData()}>
          Registrarme
        </button>
        <div className="indication">
          <p>¿Ya tienes una cuenta?</p>
          <button className="btnLogin">Inicia</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
