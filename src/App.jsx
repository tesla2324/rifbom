import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Routes
import AllRoutes from "./routes/AllRoutes";
import OnBoarding from "./routes/OnBoarding";

//Actions
import { editToken } from "./globals/features/auth";

function App() {
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = () => {
    const currentToken = localStorage.getItem("token");
    if (currentToken) {
      dispatch(editToken(currentToken));
    }
  };

  return (
    <BrowserRouter>
      {token != "" ? <AllRoutes /> : <OnBoarding />}
    </BrowserRouter>
  );
}
export default App;
