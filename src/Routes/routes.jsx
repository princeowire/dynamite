import { Routes, Route } from "react-router-dom";

// pages
import Home from "../Pages/Homepage/home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import SignUpPage from "../signup page/SignUpPage";

import Notfound from "../Pages/Notfoundpage/notfound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
      <Route path="/signup" element={<SignUpPage />} />

      {/* 404 */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRoutes;
