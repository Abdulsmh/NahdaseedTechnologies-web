import React, { useState } from 'react';
import { Printer, FileText, Camera, Edit3, Scan, Image as ImageIcon, ArrowRight, CheckCircle, X, Sparkles } from 'lucide-react';

export default function CyberCenter() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    email: '',
    service: '',
    instructions: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const cyberServices = [
    {
      title: "Printing & Photocopying",
      description: "High-speed document printing, colored/monochrome copying, and professional binding services for individuals and corporate offices.",
      fullDetails: "Equipped with high-output printers for crisp, clean monochrome or full-color documents. We handle bulk printing, thesis binding, spiral binding, and document collation with rapid turnaround times.",
      icon: <Printer size={24} />
    },
    {
      title: "Online Registrations & Applications",
      description: "Seamless processing for university admissions, government portals, recruitment forms, and digital submissions.",
      fullDetails: "Avoid portal errors and delays. Our expert staff manage JAMB, university admissions, NYSC portals, visa applications, scholarship forms, and government digital clearances accurately.",
      icon: <FileText size={24} />
    },
    {
      title: "Passport Photographs",
      description: "Professional studio capture, digital background adjustment, and instant high-quality passport photo printing.",
      fullDetails: "Get crisp, compliant passport photographs meeting international standards. Includes instant digital touch-ups, background formatting, and cut-to-size delivery within minutes.",
      icon: <Camera size={24} />
    },
    {
      title: "Typesetting & Project Handling",
      description: "Professional document typing, formatting, and structural preparation for academic research, thesis projects, and business proposals.",
      fullDetails: "From raw handwritten notes or rough drafts to impeccably formatted academic research, project reports, and corporate proposals following strict APA, MLA, or institutional style guides.",
      icon: <Edit3 size={24} />
    },
    {
      title: "Scanning Services",
      description: "High-resolution document and image scanning to secure digital formats for easy electronic archiving and transmission.",
      fullDetails: "Convert physical archives, certificates, books, and records into crystal-clear PDF or image formats optimized for cloud storage, email transmission, or digital applications.",
      icon: <Scan size={24} />
    },
    {
      title: "Creative Design (Flyers, Banners & Logos)",
      description: "Eye-catching graphic design for invitation cards, marketing flyers, large-format banners, and custom corporate brand logos.",
      fullDetails: "Elevate your brand or event with stunning visual assets. We design high-impact flyers, flex banners, wedding invitation cards, corporate logos, and social media promotional graphics.",
      icon: <ImageIcon size={24} />
    }
  ];

  const handleOpenRequest = (serviceTitle = '') => {
    setFormData({ ...formData, service: serviceTitle || cyberServices[0].title });
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen relative">
      {/* Header Banner */}
      <div className="bg-[#0D1B3D] border-b border-slate-800 text-white py-16 sm:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#28A745]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-emerald-950 text-[#28A745] border border-emerald-800/50 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
            Division 03
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Cyber & Business Center
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Your trusted neighborhood digital hub for fast administrative processes, professional printing, and creative design services in Fagge, Kano.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Everyday Digital & Business Services
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Click any service to view complete details or submit a direct processing request online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {cyberServices.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-[#0D1B3D]/60 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:border-[#28A745]/50 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#28A745] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#28A745] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                <span className="text-[#28A745] flex items-center gap-1.5">
                  <CheckCircle size={14} className="shrink-0" /> View Specifications
                </span>
                <span className="text-slate-400 group-hover:text-white transition-colors underline">Request Service</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#0D1B3D] border border-slate-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Need a document processed, printed, or designed right away?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl">
              Visit our physical center at Ari Avenue, Fagge C, Kano or send your digital requests online.
            </p>
          </div>
          <button 
            onClick={() => handleOpenRequest()}
            className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 text-sm sm:text-base shrink-0 cursor-pointer"
          >
            Request Service Online <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D1B3D] border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center mb-4">
              {selectedService.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedService.title}</h3>
            <p className="text-slate-300 text-sm mt-4 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
              {selectedService.fullDetails}
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button 
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  const serviceTitle = selectedService.title;
                  setSelectedService(null);
                  handleOpenRequest(serviceTitle);
                }}
                className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                Book This Service <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Online Service Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D1B3D] border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white">Cyber Center Service Request</h3>
            <p className="text-slate-300 text-xs mt-1">Submit your request details and our desk team will process or prepare it for you.</p>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-800/50 p-6 rounded-2xl text-center mt-6">
                <CheckCircle size={40} className="text-[#28A745] mx-auto mb-3" />
                <h4 className="font-bold text-lg text-white">Request Logged Successfully!</h4>
                <p className="text-xs text-slate-300 mt-2">
                  Thank you, <strong className="text-white">{formData.clientName}</strong>. Your request for <strong className="text-emerald-400">{formData.service}</strong> has been noted. We will reach out or await your arrival at the center.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="mt-5 bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-xl text-xs transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (WhatsApp)</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="080XXXXXXXX"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="yourname@gmail.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Select Required Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  >
                    {cyberServices.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Specific Instructions / Details</label>
                  <textarea 
                    rows="3"
                    required
                    value={formData.instructions}
                    onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                    placeholder="Provide details about your printing pages, design text, or registration form type..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745] resize-none"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-[#28A745] hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Submit Service Request <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}