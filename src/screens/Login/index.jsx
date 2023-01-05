import "./styles.css";

const Login = () => {
  return (
    <div className="background">
      <div className="formContainer">
        <div className="form">
          <p className="title">Login</p>
          <div className="inputContainer">
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Password" />
          </div>
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
