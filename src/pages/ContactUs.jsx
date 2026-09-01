import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        form.reset();
      } else {
        alert('There was a problem sending your message. Please try again.');
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
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Contact NahdaSeed
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Have inquiries about our academy courses, software services, or cyber center? Reach out to us directly or visit our office.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                We’d Love to Hear From You
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you are a prospective student, business client, or tech partner, our doors and lines are open.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-[#0D1B3D]/60 border border-slate-800 p-5 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Office Address</h3>
                  <p className="text-slate-300 text-sm mt-1">Ari Avenue, Fagge C., Kano, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#0D1B3D]/60 border border-slate-800 p-5 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Phone Numbers</h3>
                  <p className="text-slate-300 text-sm mt-1">+234 - 81-1111-3205<br />+234 - 80-2223-4489</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#0D1B3D]/60 border border-slate-800 p-5 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Email Address</h3>
                  <p className="text-slate-300 text-sm mt-1">nahdaseed@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#0D1B3D]/60 border border-slate-800 p-5 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Working Hours</h3>
                  <p className="text-slate-300 text-sm mt-1">Our Team is always ready to receive and respond to your request <strong>: 24/7</strong></p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#0D1B3D]/60 border border-slate-800 p-5 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Office Hours</h3>
                  <p className="text-slate-300 text-sm mt-1">Monday - Saturday : 10:00am to 10:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0D1B3D] border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-xl relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send Us a Message</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">Fill out the form below and we will respond promptly.</p>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-800/50 p-8 rounded-2xl text-center my-8">
                <CheckCircle size={48} className="text-[#28A745] mx-auto mb-4" />
                <h4 className="font-bold text-xl text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-300 mt-2">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We have received your inquiry and will reach out to you shortly.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-6 bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#28A745]"
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
                      placeholder="name@example.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#28A745]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="080XXXXXXXX"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#28A745]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="e.g., Academy Enrollment Inquiry"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                  <textarea 
                    name="message" 
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Type your message or project details here..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#28A745] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#28A745] hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? 'Sending...' : 'Send Message'} <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}