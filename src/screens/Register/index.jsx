import { useState } from "react";
import axios from "axios";
import "./stylesRegister.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({});

  const handleValues = (event) => {
    const clave = event.target.name;
    const valor = event.target.value;
    setValues({ ...values, [clave]: valor });
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
      .then((error) => {
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
          className="inputRegister"
          name="name"
          placeholder="Name"
          onChange={handleValues}
        />
        <input
          className="inputRegister"
          name="email"
          placeholder="Email"
          onChange={handleValues}
        />
        <input
          className="inputRegister"
          placeholder="Password"
          name="password"
          onChange={handleValues}
        />
        <input
          className="inputRegister"
          placeholder="Confirm Password"
          name="repeatPassword"
          onChange={handleValues}
        />
        <input
          className="inputRegister"
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
            <Link className="login" to={"/"}>
              Inicia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
