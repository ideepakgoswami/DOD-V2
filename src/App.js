import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import Home from "./pages/Home";
import Academy from "./pages/Academy";
import ProServices from "./pages/ProServices";
import Story from "./pages/Story";
import Connect from "./pages/Connect";
import Gallery from "./pages/Gallery";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/pro-services" element={<ProServices />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/story" element={<Story />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-charcoal text-ivory">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
