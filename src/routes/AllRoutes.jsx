import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p>home</p>} />
      <Route path="/about" element={<p>about</p>} />
    </Routes>
  );
};
export default AllRoutes;
