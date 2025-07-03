import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import AboutUsScreen from "./screens/AboutUsScreen";

import HeaderNavBar from "./components/HeaderNavBar";
import HomeScreen from "./screens/HomeScreen";
import { Settings } from "@mui/icons-material";
import ContactUsScreen from "./screens/ContactUsScreen";
import Footer from "./components/Footer";
import ServicesScreen from "./screens/ServicesScreen";

function App() {
  return (
    <>
      <HeaderNavBar />

      <div className="h-[300px] w-full">
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/ContactUsScreen" element={<ContactUsScreen />} />
          <Route path="/Services" element={<ServicesScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
