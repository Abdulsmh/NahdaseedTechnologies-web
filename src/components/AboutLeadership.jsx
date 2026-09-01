import React, { useState } from 'react';

const team = [
  {
    name: "Abdulmuhaimin Muhammad",
    role: "Chief Executive Officer (CEO)",
    quals: "ND, BSc, MSc",
    expertise: "Specializing as a data analyst, physicist, and computer engineer, steering technological development and systemic business automation.",
    image: "/AbdulMuhaimin Muhammad.jpg",
  },
  {
    name: "Abdussalam Muhammad Hassan",
    role: "Operating Manager",
    quals: "ND, BSc",
    expertise: "Computer Engineering Technician, Software Engineer, and Cybersecurity Enthusiast. Overseeing daily business operations and execution workflows.",
    image: "/Abdussalam Muhammad Hassan.jpg",
  },
  {
    name: "Mustapha Muhammad Hassan",
    role: "Head of Human Resources (HR)",
    quals: "Administration & Staffing",
    expertise: "Directing team synergy, operational workflows, and organizational growth to ensure world-class service delivery across all divisions.",
    image: "/Mustapha Muhammad.jpg",
  }
];

export default function AboutLeadership() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#28A745] font-bold text-sm uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
          Leadership & Governance
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B3D] mt-3">
          Meet the Minds Behind NahdaSeed
        </h2>
        <p className="text-slate-600 mt-3 text-base">
          Registered under RC NO. 9637393, driving tech innovation, data insights, and digital development from Fagge, Kano.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <div 
            key={idx} 
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group bg-[#0D1B3D] border border-slate-200 transition-all"
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          >
            {/* Leader Image */}
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            
            {/* Default Visible Name & Role Overlay at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3D]/95 via-transparent to-transparent flex items-end p-6">
              <div>
                <p className="text-[#28A745] font-semibold text-xs uppercase tracking-wider">{member.role}</p>
                <h3 className="text-white text-xl font-bold mt-0.5">{member.name}</h3>
              </div>
            </div>

            {/* Hidden Details Overlay - Appears on Hover or Click */}
            <div className={`absolute inset-0 bg-[#0D1B3D]/95 p-6 flex flex-col justify-center text-white transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <span className="text-[#28A745] font-semibold text-xs uppercase tracking-wider">{member.role}</span>
              <h3 className="text-2xl font-bold mt-1">{member.name}</h3>
              {member.quals && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="bg-slate-800 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-medium border border-slate-700">{member.quals}</span>
                </div>
              )}
              <p className="text-gray-300 text-sm mt-4 border-t border-slate-700 pt-4 leading-relaxed">{member.expertise}</p>
              <p className="text-[11px] text-gray-400 mt-6 italic">Hover or click outside to dismiss</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}