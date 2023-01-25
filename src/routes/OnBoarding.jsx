import { Routes, Route } from "react-router-dom";

//screens
import Login from "../screens/Login";
import Register from "../screens/Register";

const OnBoarding = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default OnBoarding;
