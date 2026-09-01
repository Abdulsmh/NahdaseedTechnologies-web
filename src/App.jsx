import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 
import Home from './pages/Home';
import CoreTech from './pages/CoreTech';
import Academy from './pages/Academy';
import CyberCenter from './pages/CyberCenter';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects'; // Import Projects page

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen flex flex-col justify-between bg-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/coretech" element={<CoreTech />} />
            <Route path="/services/academy" element={<Academy />} />
            <Route path="/services/cyber-center" element={<CyberCenter />} />
            <Route path="/projects" element={<Projects />} /> {/* Added route */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}