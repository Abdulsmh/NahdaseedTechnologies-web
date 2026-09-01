import React, { useState } from 'react';
import { Printer, Globe, Camera, FileText, Scan, Palette, ArrowRight, CheckCircle, X } from 'lucide-react';

export default function CyberCenter() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    service: '',
    serviceDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const cyberServices = [
    {
      title: "Printing & Photocopying",
      desc: "High-speed black & white and vibrant color printing, photocopying, and document binding services for individuals and corporate clients.",
      fullDetails: "Equipped with professional-grade printers for high-volume duplication, binding, laminating, and large-format document processing with crystal-clear output.",
      icon: <Printer size={24} />
    },
    {
      title: "Online Registrations & Applications",
      desc: "Seamless assistance for portal registrations, university admissions, NIN, international passports, JAMB, NYSC, and government portals.",
      fullDetails: "Expert guided processing for online applications, error-free data entry, secure document uploads, and instant printouts for all regional and national digital portals.",
      icon: <Globe size={24} />
    },
    {
      title: "Passport Photographs",
      desc: "Instant professional passport and visa photography with background correction, quick printing, and digital copies available on demand.",
      fullDetails: "Studio-quality passport photographs captured and formatted precisely to official international and national standard dimensions with instant printing.",
      icon: <Camera size={24} />
    },
    {
      title: "Typesetting & Project Handling",
      desc: "Professional typing, formatting, and structural editing for academic research papers, business proposals, CVs, and manuals.",
      fullDetails: "Comprehensive secretarial services including manuscript formatting, citation management, table creation, and complete project binding for students and professionals.",
      icon: <FileText size={24} />
    },
    {
      title: "Scanning Services",
      desc: "High-resolution digital scanning of physical documents, certificates, and photos converted into secure PDF, JPEG, or TIFF files.",
      fullDetails: "Preserve and digitize your physical paperwork securely. We convert bulky archives into clean, searchable digital files ready for email or cloud storage.",
      icon: <Scan size={24} />
    },
    {
      title: "Creative Design",
      desc: "Eye-catching flyers, business cards, branded letterheads, posters, and logo designs tailored to elevate your business identity.",
      fullDetails: "Professional graphic design services combining visual appeal with strong marketing layout to make your business or event stand out in the market.",
      icon: <Palette size={24} />
    }
  ];

  const handleOpenRequest = (serviceTitle = '') => {
    setFormData({ ...formData, service: serviceTitle || cyberServices[0].title });
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzebegwg', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was a problem submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#0D1B3D] border-b border-slate-800 text-white py-16 sm:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#28A745]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-emerald-950 text-[#28A745] border border-emerald-800/50 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
            Division 02
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            NahdaSeed Cyber & Business Center
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Your neighborhood hub for fast digital services, professional document processing, online registrations, and creative media printing in Fagge, Kano.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Digital & Secretarial Services
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Click any service card to view requirements or request assistance directly online.
          </p>
        </div>

        {/* Service Cards Grid */}
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
                  {service.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                <span className="text-[#28A745] flex items-center gap-1.5">
                  <CheckCircle size={14} className="shrink-0" /> View Details
                </span>
                <span className="text-slate-400 group-hover:text-white transition-colors underline">Book Service</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#0D1B3D] border border-slate-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Need urgent document processing or registration?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl">
              Send your request ahead of time or visit our center for prompt assistance.
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
                Proceed to Request <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Service Request Form Modal */}
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
            <p className="text-slate-300 text-xs mt-1">Provide your details and requirements below, and our desk will respond or prepare your task.</p>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-800/50 p-6 rounded-2xl text-center mt-6">
                <CheckCircle size={40} className="text-[#28A745] mx-auto mb-3" />
                <h4 className="font-bold text-lg text-white">Request Sent Successfully!</h4>
                <p className="text-xs text-slate-300 mt-2">
                  Thank you, <strong className="text-white">{formData.clientName}</strong>. Your request for <strong className="text-emerald-400">{formData.service}</strong> has been received at our desk. We will reach out via phone or email shortly.
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
                    name="clientName"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="client@mail.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (WhatsApp)</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="080XXXXXXXX"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Select Service</label>
                  <select 
                    name="service"
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Service Details / Instructions</label>
                  <textarea 
                    rows="3"
                    name="serviceDetails"
                    required
                    value={formData.serviceDetails}
                    onChange={(e) => setFormData({...formData, serviceDetails: e.target.value})}
                    placeholder="Provide details about what you need printed, typed, registered, or scanned..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745] resize-none"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#28A745] hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? 'Submitting...' : 'Submit Service Request'} <ArrowRight size={16} />
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