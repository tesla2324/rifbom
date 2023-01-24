import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./screens/Register";
import Login from "./screens/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
