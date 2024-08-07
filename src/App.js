import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/banner/About";
import Admin from "./components/banner/Admin";
import Banner from "./components/banner/Banner";

import Contact from "./components/banner/Contact";
import Register from "./components/banner/Register";
import Navbar2 from "./components/navbar/Navbar2";
import Footer from "./components/banner/Footer";
//import Faculty from './components/banner/Faculty';
import FooterBottom from "./components/banner/FooterBottom";
import Login from "./components/banner/Login";
import Register2 from './components/banner/Register2';
import ApplicationPage from "./components/banner/ApplicationPage";
import { useLocation } from "react-router-dom";
import { GeneralInstructions } from "./components/banner/GeneralInstructions";

function App() {
  return (
    <div className="w-full h-auto bg-black text-white">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Router>
          <AppContent />
        </Router>
      </div>
    </div>
  );
}
const AppContent = () => {
  const location = useLocation();

  // List of paths where the navbar should be hidden
  const hideNavbarPaths = ["/application/maghandi/college","/general-instructions/maghandi/college"];
  //const hideFooterPaths = ["/application/maghandi/college"];
  //const hideFoouterBottomPaths = ["/application/maghandi/college"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar2 />}

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about/maghandi/college" element={<About />} />
        <Route path="/contact/maghandi/college" element={<Contact />} />
        <Route path="/sign_up/maghandi/college" element={<Login />} />
        <Route path="/admin/maghandi/college" element={<Admin />} />
        <Route path="/register/maghandi/college" element={<Register2 />} />
        <Route path="/general-instructions/maghandi/college" element={<GeneralInstructions/>} />
        <Route
          path="/application/maghandi/college"
          element={<ApplicationPage />}
        />
      </Routes>

      {!hideNavbarPaths.includes(location.pathname) && <Footer />}
      {!hideNavbarPaths.includes(location.pathname) && <FooterBottom />}
    </>
  );
};

export default App;
