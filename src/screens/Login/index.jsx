import "./stylesLogin.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//externasl
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({});

  const handleChangeValues = (event) => {
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
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
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
              <Link className="textBtnToRegister" to={"register"}>
                Registrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
