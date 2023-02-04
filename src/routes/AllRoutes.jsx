import { Routes, Route } from "react-router-dom";

//screens
import Home from "../screens/Home";

//components
import Layout from "../components/Layout";

const AllRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<p>about</p>} />
      </Routes>
    </Layout>
  );
};
export default AllRoutes;
