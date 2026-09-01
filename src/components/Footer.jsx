import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3D] text-slate-300 border-t border-slate-800 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <Link to="/" className="text-lg font-extrabold text-white tracking-wide flex items-center gap-2">
            <span className="text-[#28A745]">NAHDASEED</span> TECHNOLOGIES
          </Link>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            RC NO. 9637393. Empowering minds, transforming futures through advanced technology solutions, capacity building, and digital innovation.
          </p>
          <p className="text-xs italic text-[#28A745]">"From Collective Action to Lasting Impact."</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#28A745] transition-colors">Home</Link></li>
            <li><Link to="/projects" className="hover:text-[#28A745] transition-colors">Projects Portfolio</Link></li>
            <li><Link to="/services/coretech" className="hover:text-[#28A745] transition-colors">NahdaSeed CoreTech</Link></li>
            <li><Link to="/services/academy" className="hover:text-[#28A745] transition-colors">NahdaSeed Academy</Link></li>
            <li><Link to="/services/cyber-center" className="hover:text-[#28A745] transition-colors">Cyber & Business Center</Link></li>
            <li><Link to="/about" className="hover:text-[#28A745] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#28A745] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Division Hotlines */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Division Hotlines</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-center gap-2">
              <MessageSquare size={16} className="text-[#28A745] shrink-0" />
              <span><strong>CoreTech WhatsApp:</strong> <a href="https://wa.me/2348022234489" className="hover:text-[#28A745]">08022234489</a></span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare size={16} className="text-[#28A745] shrink-0" />
              <span><strong>Academy WhatsApp:</strong> <a href="https://wa.me/2347037962690" className="hover:text-[#28A745]">07037962690</a></span>
            </li>
          </ul>
        </div>

        {/* Column 4: Location & Email */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Contact & Location</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#28A745] shrink-0 mt-0.5" />
              <span>Ari Avenue, Fagge C., Kano, Nigeria</span>
            </li>
             <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#28A745] shrink-0" />
              <span><strong>General Line (Call & WhatsApp):</strong> <a href="tel:08111113205" className="hover:text-[#28A745]">08111113205</a></span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#28A745] shrink-0" />
              <a href="mailto:nahdaseed@gmail.com" className="hover:text-[#28A745]">nahdaseed@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} NahdaSeed Technologies Ltd. All rights reserved.</p>
        <p className="mt-2 sm:mt-0"> Designed for Impact.</p>
      </div>
    </footer>
  );
}