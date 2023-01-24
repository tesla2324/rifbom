import "./stylesLogin.css";
import { useState } from "react";

//externasl
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({});

  const handleChangeValues = (event) => {
    const clave = event.target.name;
    const val = event.target.value;
    setValues({ ...values, [clave]: val });
  };

  const sendData = () => {
    axios
      .post("https://rif-server.vercel.app/api/auth", values, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="background">
        <div className="formContainer">
          <div className="form">
            <p className="title">Login</p>
            <div className="inputContainer">
              <input
                className="input"
                placeholder="Email"
                onChange={handleChangeValues}
                name="email"
              />
              <input
                className="input"
                placeholder="Password"
                onChange={handleChangeValues}
                name="password"
              />
            </div>
            <button className="iniciar" onClick={() => sendData()}>
              Iniciar
            </button>
            <div className="indications">
              <p className="text">¿No tienes una cuenta?</p>
              <button className="textRegister">Registrate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
