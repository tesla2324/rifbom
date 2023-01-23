import { useState } from "react";
import axios from "axios";

import "./styles.css";

const Register = () => {
  const [values, setValues] = useState({});

  const handleValues = (event) => {
    const clave = event.target.name;
    const valore = event.target.value;
    setValues({ ...values, [clave]: valore });
  };

  const sendData = () => {
    axios
      .post(
        "https://rif-server.vercel.app/api/auth/new",
        { ...values, role: "USER_ROLE" },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="background">
      <div className="registerContainer">
        <div className="register">
          <p>Register</p>
        </div>
        <input
          className="text"
          name="name"
          placeholder="Name"
          onChange={handleValues}
        />
        <input
          className="text"
          name="email"
          placeholder="Email"
          onChange={handleValues}
        />
        <input
          className="text"
          placeholder="Password"
          name="password"
          onChange={handleValues}
        />
        <input
          className="text"
          placeholder="Confirm Password"
          name="repeatPassword"
          onChange={handleValues}
        />
        <input
          className="text"
          placeholder="Telephone"
          name="phone"
          onChange={handleValues}
        />

        <button className="btnregister" onClick={() => sendData()}>
          Registrarme
        </button>
        <div className="question">
          <div className="lastContainer">
            <p>¿Ya tienes un acuenta?</p>
            <button className="login">Inicia</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
