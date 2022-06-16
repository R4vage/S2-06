import { Route, Routes } from "react-router-dom";
//import Navbar from "../components/Navbar";
import PrivateHome from "../pages/Private/PrivateHome";
import PrivateProfile from "../pages/Private/PrivateProfile";
import Footer from "../components/Footer";

function PrivateRouter() {
  return (
    <>
      <Routes>
        <Route exact match path="/" element={<PrivateHome />} />
        <Route exact match path="profile" element={<PrivateProfile />} />
      </Routes>
    </>
  );
}

export default PrivateRouter;
