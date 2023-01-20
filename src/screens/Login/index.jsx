import "./styles.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = () => {
    console.log(email, password);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="background">
      <div className="formContainer">
        <div className="form">
          <p className="title">Login</p>
          <div className="inputContainer">
            <input
              className="input"
              placeholder="Email"
              onChange={handleChangeEmail}
            />
            <input
              className="input"
              placeholder="Password"
              onChange={handleChangePassword}
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
  );
};

export default Login;
