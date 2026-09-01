import React from 'react';
import { Target, ShieldCheck, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const values = [
    {
      title: "Trust & Reliability",
      desc: "Built on high professional standards and integrity, reflecting our corporate identity (RC No. 9637393).",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Innovation & Growth",
      desc: "Constantly pushing technological boundaries through digital solutions, AI, and advanced software engineering.",
      icon: <Target size={24} />
    },
    {
      title: "Collective Impact",
      desc: "Empowering individuals, students, and businesses to achieve sustainable long-term success.",
      icon: <Users size={24} />
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#0D1B3D] border-b border-slate-800 text-white py-16 sm:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#28A745]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-emerald-950 text-[#28A745] border border-emerald-800/50 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
            Corporate Profile
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            About NahdaSeed Technologies Ltd
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed italic">
            "From Collective Action to Lasting Impact"          </p>
        </div>
      </div>

      {/* Main Story & Leadership Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Who We Are
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              NahdaSeed Technologies Ltd (RC No. 9637393) is a multi-faceted technology, education, and digital services hub located in Fagge, Kano, Nigeria. We bridge the digital divide by equipping individuals with world-class tech training, delivering custom enterprise software solutions, and providing streamlined everyday business services.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Our operations span across three dedicated divisions: <strong className="text-white">NahdaSeed CoreTech</strong> (software and automation), <strong className="text-white">NahdaSeed Academy</strong> (IT training and capacity building), and our <strong className="text-white">Cyber & Business Center</strong>.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <CheckCircle size={18} className="text-[#28A745] shrink-0" /> Registered Corporate Entity (RC 9637393)
              </div>
              <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <CheckCircle size={18} className="text-[#28A745] shrink-0" /> Expert-led Technical Bootcamps & Consultancy
              </div>
              <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                <CheckCircle size={18} className="text-[#28A745] shrink-0" /> Centrally Located in Fagge, Kano
              </div>
            </div>
          </div>

          <div className="bg-[#0D1B3D]/80 border border-slate-800 p-8 rounded-3xl shadow-xl relative">
            <div className="absolute top-0 right-0 bg-[#28A745] text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl">
              Leadership
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Management & HR Team</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Driving operational excellence, talent management, and student mentorship.
            </p>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white">Mustapha Muhammad Hassan</h4>
              <p className="text-[#28A745] text-xs font-semibold mt-1">Human Resources (HR) Lead</p>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                Spearheading staff capacity development, recruitment pipelines, and institutional alignment across all NahdaSeed divisions.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Our Core Values</h2>
          <p className="text-slate-400 mt-2 text-sm">The principles that guide our technology development and educational frameworks.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {values.map((val, idx) => (
            <div key={idx} className="bg-[#0D1B3D]/60 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{val.title}</h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-[#0D1B3D] border border-slate-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Want to partner with us or join our programs?</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">Get in touch with our team today and let's build a sustainable digital future together.</p>
          </div>
          <Link 
            to="/contact" 
            className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 text-sm sm:text-base shrink-0"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}