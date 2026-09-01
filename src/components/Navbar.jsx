import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinkStyle = ({ isActive }) => 
    `text-sm font-medium transition-colors ${
      isActive ? 'text-[#28A745] font-semibold' : 'text-slate-300 hover:text-white'
    }`;

  const mobileNavLinkStyle = ({ isActive }) => 
    `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
      isActive ? 'bg-emerald-950/60 text-[#28A745] font-semibold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
    }`;

  return (
    <nav className="bg-[#0D1B3D] border-b border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img 
                src="/NahdaSeed_Logo_x_bg.png" 
                alt="NahdaSeed Technologies Logo" 
                className="w-10 h-10 rounded-xl object-contain shadow-md" 
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-white tracking-tight">NahdaSeed</span>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Technologies Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white focus:outline-none py-2 cursor-pointer"
              >
                Services <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>

              <div 
                onMouseLeave={() => setDropdownOpen(false)}
                className={`absolute top-full left-0 w-60 bg-[#0D1B3D] border border-slate-800 rounded-2xl shadow-2xl py-2 transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 visible translate-y-1' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <NavLink 
                  to="/services/coretech" 
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) => `block px-4 py-2.5 text-xs font-medium transition-colors ${isActive ? 'bg-emerald-950/80 text-[#28A745]' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                >
                  NahdaSeed CoreTech <span className="block text-[10px] text-slate-400">Software & Automation</span>
                </NavLink>
                <NavLink 
                  to="/services/academy" 
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) => `block px-4 py-2.5 text-xs font-medium transition-colors ${isActive ? 'bg-emerald-950/80 text-[#28A745]' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                >
                  NahdaSeed Academy <span className="block text-[10px] text-slate-400">IT Training & Skills</span>
                </NavLink>
                <NavLink 
                  to="/services/cyber-center" 
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) => `block px-4 py-2.5 text-xs font-medium transition-colors ${isActive ? 'bg-emerald-950/80 text-[#28A745]' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                >
                  Cyber & Business Center <span className="block text-[10px] text-slate-400">Digital Services & Printing</span>
                </NavLink>
              </div>
            </div>

            <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
            <NavLink to="/about" className={navLinkStyle}>About Us</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>Contact Us</NavLink>
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-[#28A745] hover:bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-slate-800/50 cursor-pointer"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1B3D] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>
            Home
          </NavLink>
          
          <div className="space-y-1 pl-3 border-l-2 border-slate-800 my-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-3">Divisions</span>
            <NavLink to="/services/coretech" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>
              CoreTech (Software)
            </NavLink>
            <NavLink to="/services/academy" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>
              Academy (Training)
            </NavLink>
            <NavLink to="/services/cyber-center" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>
              Cyber & Business Center
            </NavLink>
          </div>

          <NavLink to="/projects" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>
            Projects Portfolio
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>
            Contact Us
          </NavLink>

          <div className="pt-2">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#28A745] hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs block text-center transition-all shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}