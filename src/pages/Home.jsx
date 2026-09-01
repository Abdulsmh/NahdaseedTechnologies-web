import React from 'react';
import Hero3D from '../components/Hero3D';
import AboutLeadership from '../components/AboutLeadership';
import { Link } from 'react-router-dom';
import { Code, GraduationCap, Laptop, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-100 text-slate-800 overflow-hidden">
      {/* Immersive Responsive 3D Hero Section */}
      <Hero3D />

      {/* Services Overview Section with Smooth Entrance Layout */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#28A745] font-bold text-xs sm:text-sm uppercase tracking-wider bg-emerald-100 px-4 py-1.5 rounded-full shadow-sm">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1B3D] mt-4 tracking-tight">
            Our Core Service Divisions
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base font-light leading-relaxed">
            Empowering individuals, businesses, and institutions through advanced technology solutions, capacity building, and digital innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: CoreTech */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-md smooth-card flex flex-col justify-between group hover:border-[#28A745]/60 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-[#28A745] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#28A745] group-hover:text-white transition-all duration-300 shadow-sm">
                <Code size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0D1B3D]">NahdaSeed CoreTech</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Advanced tech solutions, IT consultation, web & software development, and custom business automation systems.
              </p>
            </div>
            <Link to="/services/coretech" className="inline-flex items-center gap-2 text-[#28A745] font-semibold text-sm mt-8 group-hover:translate-x-1.5 transition-transform duration-200">
              Explore CoreTech <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2: Academy */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-md smooth-card flex flex-col justify-between group hover:border-[#28A745]/60 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-[#28A745] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#28A745] group-hover:text-white transition-all duration-300 shadow-sm">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0D1B3D]">NahdaSeed Academy</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Capacity building through training in web dev, data analysis, core programming languages (C, C++, Python), and graphic design.
              </p>
            </div>
            <Link to="/services/academy" className="inline-flex items-center gap-2 text-[#28A745] font-semibold text-sm mt-8 group-hover:translate-x-1.5 transition-transform duration-200">
              Explore Academy <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3: Cyber & Business Center */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-md smooth-card flex flex-col justify-between group hover:border-[#28A745]/60 hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1">
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-[#28A745] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#28A745] group-hover:text-white transition-all duration-300 shadow-sm">
                <Laptop size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0D1B3D]">Cyber & Business Center</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Everyday digital services including printing, online registrations, passport photographs, scanning, typesetting, and flyers.
              </p>
            </div>
            <Link to="/services/cyber-center" className="inline-flex items-center gap-2 text-[#28A745] font-semibold text-sm mt-8 group-hover:translate-x-1.5 transition-transform duration-200">
              Explore Cyber Center <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership & About Profile Section */}
      <AboutLeadership />
    </div>
  );
}