import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

//Routes
import AllRoutes from "./routes/AllRoutes";
import OnBoarding from "./routes/OnBoarding";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <BrowserRouter>
      {token != "" ? <AllRoutes /> : <OnBoarding />}
    </BrowserRouter>
  );
}
export default App;
