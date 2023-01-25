import { BrowserRouter } from "react-router-dom";

//Routes
import AllRoutes from "./routes/AllRoutes";
import OnBoarding from "./routes/OnBoarding";

function App() {
  const token = false;

  return (
    <BrowserRouter>{token ? <AllRoutes /> : <OnBoarding />}</BrowserRouter>
  );
}
export default App;
