import React, { useState } from 'react';
import { GraduationCap, BookOpen, Terminal, Monitor, Cpu, Palette, ArrowRight, CheckCircle, Brain, Users, X } from 'lucide-react';

export default function Academy() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const courses = [
    {
      title: "Web Development Training",
      desc: "Master front-end and back-end web technologies including HTML, CSS, JavaScript, React, and modern deployment pipelines.",
      fullDetails: "This comprehensive track covers modern web architectures. You will learn HTML5, CSS3, modern JavaScript (ES6+), responsive design, React.js framework, version control with Git/GitHub, and backend integration fundamentals to build dynamic applications.",
      icon: <Terminal size={24} />
    },
    {
      title: "Core Programming Languages",
      desc: "Build a rock-solid programming foundation covering foundational and advanced logic in C, C++, and Python.",
      fullDetails: "Master procedural and object-oriented programming paradigms. Understand memory management, algorithms, data structures, and syntax logic across industry-standard languages: C, C++, and Python.",
      icon: <BookOpen size={24} />
    },
    {
      title: "Graphic Design",
      desc: "Unlock your creative potential with hands-on training in visual communication, branding, typography, and professional design software.",
      fullDetails: "Learn the core principles of visual arts, color theory, grid systems, and brand identity creation. Master industry-standard software suites for layout design, vector illustration, and digital asset production.",
      icon: <Palette size={24} />
    },
    {
      title: "Basic Computer & Utility Skills",
      desc: "Essential digital literacy training, file management, internet navigation, and Microsoft Office (Word, Excel, PowerPoint) utility skills.",
      fullDetails: "Designed for beginners and professionals looking to solidify office productivity. Covers operating system navigation, file organization, secure internet browsing, and professional mastery of Microsoft Word, Excel, and PowerPoint.",
      icon: <Monitor size={24} />
    },
    {
      title: "EduTech & IT Consultancy",
      desc: "Comprehensive training and digital transformation strategies tailored for modern educational institutions and businesses.",
      fullDetails: "Bridging the gap between education and technology. Learn how to implement institutional digital tools, manage learning management systems (LMS), and design technology integration blueprints for schools and corporate bodies.",
      icon: <GraduationCap size={24} />
    },
    {
      title: "Teacher Capacity Building",
      desc: "Equipping educators with digital literacy tools, modern teaching methodologies, and tech-driven classroom management skills.",
      fullDetails: "Empowering teachers to thrive in digital classrooms. Covers collaborative online tools, interactive e-learning design, digital student assessment metrics, and modern instructional delivery systems.",
      icon: <Users size={24} />
    },
    {
      title: "Software Development Bootcamps",
      desc: "Intensive, mentor-led practical training taking students from beginner coders to confident, job-ready software developers.",
      fullDetails: "An immersive, project-focused bootcamp experience. Work in collaborative teams, build production-grade software applications, solve real-world problems under senior mentorship, and prepare for tech careers.",
      icon: <GraduationCap size={24} />
    }
  ];

  const handleOpenEnroll = (courseTitle = '') => {
    setFormData({ ...formData, course: courseTitle || courses[0].title });
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
        alert('There was a problem submitting your registration. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen relative">
      {/* Header Banner */}
      <div className="bg-[#0D1B3D] border-b border-slate-800 text-white py-16 sm:py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-emerald-950 text-[#28A745] border border-emerald-800/50 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block">
            Division 02
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            NahdaSeed Academy
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Empowering the next generation of tech talent and educators through rigorous training in software development, AI, data science, and practical digital literacy.
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Our Training Programs & Detailed Curriculums
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Click on any course to explore detailed modules and register your desired course online instantly.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className="bg-[#0D1B3D]/60 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:border-[#28A745]/50 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <div>
                <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#28A745] group-hover:text-white transition-all duration-300">
                  {course.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#28A745] transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {course.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                <span className="text-[#28A745] flex items-center gap-1.5">
                  <CheckCircle size={14} className="shrink-0" /> View Curriculum
                </span>
                <span className="text-slate-400 group-hover:text-white transition-colors underline">Details & Register</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#0D1B3D] border border-slate-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Ready to enroll in our upcoming cohort?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl">
              Take control of your future with world-class tech education right here in Kano, Nigeria.
            </p>
          </div>
          <button 
            onClick={() => handleOpenEnroll()}
            className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 text-sm sm:text-base shrink-0 cursor-pointer"
          >
            Enroll Online Now <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D1B3D] border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="w-12 h-12 bg-emerald-950/80 text-[#28A745] border border-emerald-800/30 rounded-xl flex items-center justify-center mb-4">
              {selectedCourse.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedCourse.title}</h3>
            <p className="text-slate-300 text-sm mt-4 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
              {selectedCourse.fullDetails}
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button 
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  const courseTitle = selectedCourse.title;
                  setSelectedCourse(null);
                  handleOpenEnroll(courseTitle);
                }}
                className="bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                Register For This Course <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Online Registration Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0D1B3D] border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white">Academy Course Registration</h3>
            <p className="text-slate-300 text-xs mt-1">Fill out the form below to secure your spot in our upcoming cohort.</p>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-800/50 p-6 rounded-2xl text-center mt-6">
                <CheckCircle size={40} className="text-[#28A745] mx-auto mb-3" />
                <h4 className="font-bold text-lg text-white">Registration Successful!</h4>
                <p className="text-xs text-slate-300 mt-2">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We have received your application for <strong className="text-emerald-400">{formData.course}</strong> and sent it to our team. We will contact you shortly.
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
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="yourname@gmail.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (WhatsApp preferred)</label>
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
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Select Desired Course</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#28A745]"
                  >
                    {courses.map((c, i) => (
                      <option key={i} value={c.title}>{c.title}</option>
                    ))}
                  </select>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#28A745] hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? 'Submitting...' : 'Submit Registration'} <ArrowRight size={16} />
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