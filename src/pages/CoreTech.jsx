import React, { useState } from 'react';
import { Code, Server, Cpu, Layers, ArrowRight, CheckCircle, X, Sparkles } from 'lucide-react';

export default function CoreTech() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const coreTechServices = [
    {
      title: "IT Consultation & Strategy",
      desc: "Expert advisory services to help businesses scale their technological infrastructure, align IT investments with goals, and optimize digital workflows.",
      fullDetails: "Our IT consultancy service delivers comprehensive technical audits, infrastructure roadmap planning, cloud migration strategies, and technology risk assessments tailored to modernizing your organizational workflow.",
      icon: <Server size={24} />
    },
    {
      title: "Web Development",
      desc: "Custom, high-performance, responsive websites and web applications built using modern frameworks to establish an authoritative digital presence.",
      fullDetails: "We engineer lightning-fast, secure, and fully responsive web apps using React, Next.js, and modern tailwind architectures. From corporate portals to scalable web platforms, we build for high conversion and optimal performance.",
      icon: <Code size={24} />
    },
    {
      title: "Software Development",
      desc: "End-to-end custom software solutions tailored specifically to solve unique operational hurdles, streamline processes, and drive productivity.",
      fullDetails: "Custom software built from the ground up to match your exact business specifications. We handle database architecture, API integrations, secure backend systems, and user-friendly desktop or mobile applications.",
      icon: <Cpu size={24} />
    },
    {
      title: "Business Automation Systems",
      desc: "Automating repetitive workflows, customer management, data pipelines, and internal tracking systems to minimize manual errors and save valuable time.",
      fullDetails: "Eliminate repetitive tasks through intelligent software automation. We integrate custom CRM systems, automated invoicing, inventory trackers, and streamlined data processing engines to accelerate your operational velocity.",
      icon: <Layers size={24} />
    }
  ];

  const handleOpenIntake = (serviceTitle = '') => {
    setFormData({ ...formData, service: serviceTitle || coreTechServices[0].title });
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
            Division 01
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            NahdaSeed CoreTech
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Advanced technology solutions, high-performance software engineering, and enterprise business automation systems designed for scalable impact.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineering & Advisory Services
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Click on any service card to view complete specifications or submit your project requirements online.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {coreTechServices.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-[#0D1B3D]/60 border border-slate-800 p-8 rounded-2xl shadow-lg hover:border-[#28A745]/50 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#28A745] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#28A745] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                <span className="text-[#28A745] flex items-center gap-1.5">
                  <CheckCircle size={14} className="shrink-0" /> View Scope Details
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
              Ready to automate or scale your software infrastructure?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl">
              Let our engineering team build custom digital assets and automated pipelines for your organization.
            </p>
          </div>
          <button 
            onClick={() => handleOpenIntake()}
            className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 text-sm sm:text-base shrink-0 cursor-pointer"
          >
            Start Project Consultation <ArrowRight size={18} />
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
                  handleOpenIntake(serviceTitle);
                }}
                className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                Hire CoreTech Team <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Client Project Intake Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D1B3D] border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white">Client Project Consultation</h3>
            <p className="text-slate-300 text-xs mt-1">Submit your specifications and our engineering division will get back to you promptly.</p>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-800/50 p-6 rounded-2xl text-center mt-6">
                <CheckCircle size={40} className="text-[#28A745] mx-auto mb-3" />
                <h4 className="font-bold text-lg text-white">Request Received Successfully!</h4>
                <p className="text-xs text-slate-300 mt-2">
                  Thank you, <strong className="text-white">{formData.clientName}</strong>. We have logged your project inquiry for <strong className="text-emerald-400">{formData.service}</strong>. Our core technology team will review your specifications and contact you via phone or email.
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name / Contact Person</label>
                  <input 
                    type="text" 
                    name="clientName"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Organization / Business Name (Optional)</label>
                  <input 
                    type="text" 
                    name="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    placeholder="Your Company Ltd"
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
                      placeholder="client@company.com"
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Select Core Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  >
                    {coreTechServices.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project Overview / Requirements</label>
                  <textarea 
                    rows="3"
                    name="projectDetails"
                    required
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                    placeholder="Briefly describe what you want to build or automate..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745] resize-none"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#28A745] hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? 'Submitting...' : 'Submit Project Request'} <ArrowRight size={16} />
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