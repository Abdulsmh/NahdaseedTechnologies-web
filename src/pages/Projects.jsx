import React, { useState } from 'react';
import { ExternalLink, Code, Layers, Sparkles, X, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      title: "Kano Enterprise ERP System",
      category: "Software & Automation",
      description: "A comprehensive enterprise resource planning system built for inventory, payroll, and supply chain tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      highlights: [
        "Automated multi-branch inventory tracking",
        "Secure role-based user authentication",
        "Real-time financial analytics dashboard"
      ],
      liveUrl: "#",
      details: "This bespoke ERP platform replaced legacy manual filing systems for a major distributor in Kano, reducing administrative processing time by over 60%."
    },
    {
      title: "EdTech Student Portal & LMS",
      category: "Web Application",
      description: "An interactive learning management system designed for online course delivery, student tracking, and CBT exams.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      techStack: ["React", "Express", "MongoDB", "Socket.io"],
      highlights: [
        "Live virtual classroom integration",
        "Automated Computer-Based Testing (CBT)",
        "Comprehensive student grade reporting"
      ],
      liveUrl: "#",
      details: "Built to support hybrid learning environments, allowing seamless assignment submissions and real-time educator-student interactions."
    },
    {
      title: "Fagge Logistics & Tracking App",
      category: "Mobile & Web Solution",
      description: "A streamlined dispatch and package tracking application with real-time map routes and rider management.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      techStack: ["React Native", "Node.js", "Google Maps API"],
      highlights: [
        "Real-time package dispatch tracking",
        "Automated SMS/WhatsApp notifications",
        "Driver performance analytics"
      ],
      liveUrl: "#",
      details: "An agile mobile-first platform custom-tailored for regional delivery services to ensure prompt dispatch and delivery tracking."
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#0D1B3D] border-b border-slate-800 text-white py-16 sm:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#28A745]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-emerald-950 text-[#28A745] border border-emerald-800/50 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
            Portfolio Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Our Completed Projects
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Explore a selection of custom software, automation tools, and digital solutions engineered by NahdaSeed CoreTech.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsList.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-[#0D1B3D]/70 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-[#28A745]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative overflow-hidden h-48 bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-[#28A745] text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#28A745] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-slate-900 text-slate-300 border border-slate-800 text-[10px] px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#28A745] hover:text-emerald-400 flex items-center gap-1.5 cursor-pointer"
                >
                  <Layers size={14} /> View Case Study
                </button>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  Demo Ready <CheckCircle size={12} className="text-[#28A745]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Custom Links */}
        <div className="bg-[#0D1B3D] border border-slate-800 p-8 rounded-3xl text-center max-w-3xl mx-auto shadow-lg">
          <h3 className="text-lg font-bold text-white">Have a custom project in mind?</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 mb-6">
            We are ready to integrate your actual project links, production screenshots, and detailed specifications.
          </p>
          <Link 
            to="/contact" 
            className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md inline-block"
          >
            Submit Your Project Details
          </Link>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D1B3D] border border-slate-700 text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <span className="bg-emerald-950 text-[#28A745] border border-emerald-800/50 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              {selectedProject.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">{selectedProject.title}</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
              {selectedProject.details}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Highlights</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle size={14} className="text-[#28A745] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="bg-slate-900 text-[#28A745] border border-slate-700 text-xs px-3 py-1 rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link 
                to="/contact" 
                className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md inline-flex items-center gap-1.5"
              >
                Request Similar Project <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}