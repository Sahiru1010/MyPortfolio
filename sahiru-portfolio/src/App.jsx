import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCommentDots, FaTimes, 
  FaChevronRight, FaChevronLeft, FaAward, FaBriefcase, FaGraduationCap, FaCode, 
  FaTerminal, FaUser, FaPaperPlane, FaStar, FaTools, FaUsers, 
  FaPhoneAlt, FaMapMarkerAlt, FaFacebookF
} from 'react-icons/fa';

import { FaHotel, FaCar, FaHospital } from 'react-icons/fa';

// ... your other imports ...

import LiquidEther from './LiquidEther'; // <-- Add this import

import profilePic from './assets/profilePic.png';

// ADD YOUR NEW IMAGE IMPORTS HERE:
import hotelImg1 from './assets/hotel-1.png';
import hotelImg2 from './assets/hotel-2.png';
import hotelImg3 from './assets/hotel-3.png';

import VehicleImg1 from './assets/VR - 1.png';
import VehicleImg2 from './assets/VR - 2.png';
import VehicleImg3 from './assets/VR - 3.png';
import VehicleImg4 from './assets/VR - 4.png';

import HospitalImg from './assets/JavaLogo.png';
import SpringImg from './assets/SpringLogo.png';
import MySQLImg from './assets/MySQLLogo.png';



const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('technical');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: "Hi! I'm Sahiru's virtual assistant. Ask me anything about his skills, projects, or CV!" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificatesData = [
    { 
      id: 1, 
      title: 'AWS Foundations: Machine Learning Basics', 
      issuer: 'AWS Training & Certification', 
      year: '2026',
      file: 'ML_spec_AWS.pdf' // <-- Removed the "/" and replaced spaces with "_"
    },
    { 
      id: 2, 
      title: 'Programming in Python - Python for Beginners',
      issuer: 'University of Moratuwa',
      year: '2026', 
      file: 'Python_for_Beginners_E-Certificate.pdf' // <-- Removed the "/"
    },

  ];
    
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 350; 
      galleryRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const projectsData = [
    {
      id: 'hotel',
      title: 'Hotel Management System',
      icon: <FaHotel className="text-indigo-400 text-2xl"/>,
      themeColor: 'text-indigo-400',
      btnColor: 'bg-indigo-600 hover:bg-indigo-500',
      gradient: 'from-blue-500 to-indigo-500',
      tags: ['Python', 'Tkinter'],
      shortDesc: 'A light weight desktop based Graphical User Interface (GUI) application to help in booking hotels and manage guest data efficiently. The project is written entirely in Python and demonstrates practical skills in state management, input validation and file handling.',
features: [
        'Designed and implemented a lightweight, responsive desktop Graphical User Interface (GUI) leveraging Python\'s Tkinter library',
        'Engineered robust custom file handling and data structure management modules to securely process and persist guest records',
        'Developed rigorous input validation and application state management protocols to ensure high data integrity during booking workflows',
        'Programmed core algorithmic logic to automate and optimize room allocation, ongoing guest tracking, and billing calculations'
      ],
      gallery: [
        hotelImg1,
        hotelImg2,
        hotelImg3,
      ],
      githubLink: 'https://github.com/Sahiru1010/Hotel-Management-System.git',
      reportLink: 'HotelM.pdf',
    },
    {
      id: 'vehicle',
      title: 'Vehicle Rental Platform',
      icon: <FaCar className="text-purple-400 text-2xl" />,
      themeColor: 'text-purple-400',
      btnColor: 'bg-purple-600 hover:bg-purple-500',
      gradient: 'from-purple-500 to-pink-500',
      tags: ['TypeScript', 'JavaScript', 'CSS'],
      shortDesc: 'A modern web application scalable and designed to simplify the operations of vehicle fleet management and vehicle rentals. The platform is hosted on Vercel, ensuring high-performance hosting and delivering a seamless and responsive user experience for browsing, filtering, and interacting with dynamic vehicle inventories.',
features: [
        'Developed a scalable frontend architecture utilizing TypeScript and JavaScript to manage complex state for vehicle fleet inventories',
        'Engineered a highly responsive, custom-styled user interface with pure CSS to optimize the browsing and filtering experience',
        'Deployed via Vercel to leverage edge networks, ensuring high-performance hosting and minimal latency for end-users',
        'Designed comprehensive system documentation and dynamic filtering algorithms tailored for enterprise-level rental constraints'
      ],
      gallery: [
        VehicleImg1,
        VehicleImg2,
        VehicleImg3,
        VehicleImg4
      ],
      githubLink: 'https://github.com/OpenStag/project-15.git'
    },
    {
      id: 'content',
      title: 'Ongoing Hospital Management System',
      icon: <FaHospital className="text-pink-400 text-2xl" />,
      themeColor: 'text-pink-400',
      btnColor: 'bg-pink-600 hover:bg-pink-500',
      gradient: 'from-pink-500 to-rose-500',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Spring Data JPA/Hibernate'],
      shortDesc: 'A complete enterprise backend system for hospital operations, providing RESTful APIs with security. The application is built 100% in Java and Spring Boot and provides seamless integration of complex relational databases with a strong object-oriented software architecture.',
features: [
        'Engineered a robust RESTful API architecture using Java and Spring Boot to streamline hospital operations',
        'Implemented efficient relational data mapping and advanced querying using Spring Data JPA, Hibernate, and MySQL',
        'Designed scalable core domain modules for patient registration, appointment scheduling, and digital medical records',
        'Developing secure role-based access control (RBAC) protocols to ensure strict medical data privacy and system integrity'
      ],
gallery: [
        // 1. Represents the overall system design (Layered Architecture)
        HospitalImg,
        SpringImg,
        MySQLImg,
      ],
      githubLink: 'https://github.com/Sahiru1010/Hospital-Management-System.git'
    }
  ];

  // --- ADD THIS NEW FUNCTION ---
  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return "Hello! I'm Sahiru's AI assistant. Ask me about his skills, education, projects, or how to contact him!";
    } 
    else if (input.includes('skill') || input.includes('tech') || input.includes('tools')) {
      return "Sahiru specializes in Python, Java, Spring Boot, React, and MySQL. He's also highly focused on Data Science and Machine Learning!";
    } 
    else if (input.includes('project') || input.includes('portfolio') || input.includes('work')) {
      return "Sahiru has developed great projects like a Hotel Management System (Python), a Vehicle Rental Platform (TypeScript/React), and an ongoing Hospital Management System (Java/Spring Boot).";
    } 
    else if (input.includes('education') || input.includes('degree') || input.includes('sltc') || input.includes('ucsc')) {
      return "He is pursuing a dual degree! A BSc (Hons) in Data Science at SLTC, and a Bachelor of Information Technology (BIT) at UCSC.";
    } 
    else if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('hire')) {
      return "You can reach Sahiru directly at sahirusandeepa52@gmail.com or call him at +94 70 213 2649.";
    } 
    else if (input.includes('cv') || input.includes('resume')) {
      return "You can easily download his full CV using the 'Access CV' button in the About section at the top of the page!";
    } 
    else {
      // Default fallback answer
      return "That's an interesting question! I'm a simple demo assistant, but you can find most details by exploring the portfolio sections above or downloading his CV.";
    }
  };
const handleSendMessage = (e) => {
    e.preventDefault();
    const currentInput = chatInput.trim();
    if (!currentInput) return;

    // 1. Add the user's message immediately
    setChatMessages(prev => [...prev, { sender: 'user', text: currentInput }]);
    setChatInput('');
    setIsTyping(true);

    // 2. Generate the AI response based on the input
    const aiResponse = generateAIResponse(currentInput);

    // 3. Delay the response to simulate "typing"
    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, { 
        sender: 'ai', 
        text: aiResponse 
      }]);
    }, 1500);
  };

useEffect(() => {
    // Only scroll to the bottom if the chat is actually open!
    if (chatEndRef.current && isChatOpen) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping, isChatOpen]);

  useEffect(() => {
    // 1. Force the browser to scroll to the absolute top on load/refresh
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // 2. Silently remove the #hash from the URL so the browser doesn't try to jump down
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <>


<div className="fixed inset-0 z-[-2]">
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous
    viscous={20}
    iterationsViscous={8}
    iterationsPoisson={8}
    resolution={0.25}
    isBounce={false}
    autoDemo
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
    color0="#13083e"
    color1="#052aff"
    color2="#01021a"
/>
</div>
      <style>{`
        body { background-color: #020617; color: #f8fafc; }
        .glass { 
          background: rgba(30, 41, 59, 0.3); 
          backdrop-filter: blur(12px); 
          border: 1px solid rgba(255, 255, 255, 0.08);
          will-change: transform, backdrop-filter;
        }
        .glass-card:hover {
          background: rgba(30, 41, 59, 0.6);
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);
        }
        .text-gradient {
          background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .blob {
          position: fixed; filter: blur(90px); z-index: -1; opacity: 0.4;
          border-radius: 50%; animation: float 10s infinite ease-in-out alternate;
          will-change: transform, filter;
          transform: translateZ(0);
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.1); }
        }
        .typing-dot { animation: typing 1.4s infinite ease-in-out both; }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }

        /* ADD THESE NEW ANIMATIONS */
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop-in {
          animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
          
      `}</style>


      <div className="blob bg-blue-600/30 w-96 h-96 top-[-10%] left-[-10%]"></div>
      <div className="blob bg-purple-600/20 w-[30rem] h-[30rem] bottom-[-10%] right-[-10%]" style={{animationDelay: '-5s'}}></div>

      <div className="min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        
        <nav className="fixed w-full top-0 z-50 p-4 flex justify-center pointer-events-none">
          <div className="glass pointer-events-auto rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-black/50 transition-all">
            <span className="font-bold text-lg text-white tracking-wider flex items-center gap-2">
               Sahiru Sandeepa
            </span>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <a href="#about" className="hover:text-white transition-all">About Me</a>
              <a href="#education" className="hover:text-white transition-all">Education</a>
              <a href="#projects" className="hover:text-white transition-all">Projects</a>
              <a href="#contact" className="hover:text-white transition-all">Connect</a>
            </div>
          </div>
        </nav>

        <section id="about" className="relative pt-40 pb-20 px-6 lg:pt-48 lg:pb-32 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 z-10">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border-2 border-indigo-500/50 shadow-[0_4px_0_rgba(99,102,241,0.2)] transition-transform hover:-translate-y-1 hover:shadow-[0_6px_0_rgba(99,102,241,0.3)] cursor-default">
                <FaTerminal size={14} /> Hello!!! Welcome to my Portfolio 👋
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Designing Data.<br />
                <span className="text-gradient">Building the Future.</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl border-l-2 border-indigo-500/50 pl-6">
                <strong>I'm Sahiru Sandeepa</strong> an undergraduate pursuing dual degrees in Data Science and Software Engineering. With a strong focus on Artificial Intelligence, Machine Learning, complex data analysis and Full Stack Development.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400} className="flex flex-wrap gap-5 pt-4">
              <div className="flex flex-wrap items-center gap-6 pt-6">
                
                {/* Primary Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] flex items-center gap-2 group">
                    Get in Touch <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="MyCV.pdf" download className="px-8 py-4 rounded-xl bg-slate-900 border border-white/10 hover:bg-slate-800 text-white font-bold transition-all hover:scale-105 flex items-center gap-2">
                    <FaDownload /> Access CV
                  </a>
                </div>

                {/* Subtle Divider (Hides on very small screens) */}
                <div className="hidden sm:block w-px h-12 bg-white/10 rounded-full"></div>
                
                {/* Floating Neon Social Icons */}
                <div className="flex gap-5 mt-8 lg:mt-0">
                  
                  
                  {/* GitHub - Neon Indigo Glow */}
                  <div className="animate-floating" style={{ animationDelay: '0s' }}>
                    <a href="https://github.com/Sahiru1010" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900/80 border-2 border-indigo-500/60 shadow-[0_0_12px_rgba(99,102,241,0.5)] flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.9)] transition-all duration-300">
                      <FaGithub size={20} />
                    </a>
                  </div>

                  {/* LinkedIn - Neon Blue Glow */}
                  <div className="animate-floating" style={{ animationDelay: '0.2s' }}>
                    <a href="https://www.linkedin.com/in/sahiru-sandeepa-9b1914267/" target="_blank" rel="noopener noreferrer"className="w-12 h-12 rounded-xl bg-slate-900/80 border-2 border-blue-500/60 shadow-[0_0_12px_rgba(59,130,246,0.5)] flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] transition-all duration-300">
                      <FaLinkedin size={20} />
                    </a>
                  </div>

                  {/* Email - Neon Emerald Glow */}
                  <div className="animate-floating" style={{ animationDelay: '0.4s' }}>
                    <a href="mailto:sahirusandeepa52@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900/80 border-2 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.5)] flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.9)] transition-all duration-300">
                      <FaEnvelope size={20} />
                    </a>
                  </div>

                </div>

              </div>
            </RevealOnScroll>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end z-10">
            <RevealOnScroll delay={300}>
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 translate-y-10 -translate-x-10"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'blur(2px)' }}></div>
                
                <div className="relative group mt-8 md:mt-0">
                  <div className="relative w-64 h-64 lg:w-[350px] lg:h-[350px] rounded-3xl overflow-hidden bg-slate-900 border border-white/10 z-10 shadow-2xl">
                    <img 
                      src={profilePic}
                      alt="Sahiru Sandeepa" 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                  </div>

<div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 bg-slate-800/80 backdrop-blur-xl px-5 py-2.5 rounded-2xl flex items-center gap-3 border border-white/5 shadow-2xl animate-floating whitespace-nowrap">
    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
    <span className="text-1xl font-bold text-slate-200 tracking-wide">Data Science and AI Enthusiast</span>
  </div>


                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section id="education" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
                  <RevealOnScroll>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-indigo-500/50"></div>
              <h2 className="text-4xl font-bold tracking-tight"><span className="text-gradient">Journey</span> and Milestones</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-indigo-500/50"></div>
            </div>
          </RevealOnScroll>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">
            
            <RevealOnScroll delay={100} className="relative pl-8 md:pl-12 group">
              <div className="absolute w-10 h-10 bg-slate-900 border border-indigo-500/50 rounded-full flex items-center justify-center -left-5 top-0 group-hover:border-indigo-400 transition-all">
                <FaGraduationCap size={20} className="text-indigo-400" />
              </div>
              <div className="glass glass-card p-8 rounded-2xl transition-all duration-300">
                <span className="text-indigo-400 text-lg font-bold tracking-wider mb-2 block uppercase">Education Details</span>
                <br></br>
                <h3 className="text-2xl font-bold text-white mb-2">BSc (Hons) in Data Science</h3>
                <h4 className="text-lg text-slate-300 mb-4 font-medium">Sri Lanka Technological Campus (SLTC)</h4>
                <p className="text-slate-400 leading-relaxed font-semibold">
                  Currently pursuing a degree with strong academic focus on Artificial Intelligence, Machine Learning, Big Data Analytics, and complex statistical modelling.
                </p>
                <br></br>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Information Technology (BIT)</h3>
                <h4 className="text-lg text-slate-300 mb-4 font-medium">University of Colombo School Of Computing (UCSC)</h4>
                <p className="text-slate-400 leading-relaxed font-semibold">
                  This external degree program specially focus on Software Engineering, Full-Stack Development and complex systems architecture.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="relative pl-8 md:pl-12 group">
              <div className="absolute w-10 h-10 bg-slate-900 border border-purple-500/50 rounded-full flex items-center justify-center -left-5 top-0 group-hover:border-purple-400 transition-all">
                <FaCode size={20} className="text-purple-400" />
              </div>
              <div className="glass glass-card p-8 rounded-2xl transition-all duration-300">
                <span className="text-purple-400 text-lg font-bold tracking-wider mb-2 block uppercase">Skills</span>
                <br></br>

                <div className="bg-[#1a202c]/80 border border-white/5 rounded-xl p-2 flex flex-wrap gap-2 mb-4 shadow-inner">
                  <button 
                    onClick={() => setActiveTab('technical')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'technical' ? 'bg-slate-700 text-cyan-400 shadow-md' : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50'}`}
                  >
                    <FaCode size={14} /> Technical
                  </button>
                  <button 
                    onClick={() => setActiveTab('tools')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'tools' ? 'bg-slate-700 text-cyan-400 shadow-md' : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50'}`}
                  >
                    <FaTools size={14} /> Tools
                  </button>
                  <button 
                    onClick={() => setActiveTab('soft')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'soft' ? 'bg-slate-700 text-cyan-400 shadow-md' : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/50'}`}
                  >
                    <FaUsers size={14} /> Soft Skills
                  </button>
                </div>

                <div className="bg-[#1a202c]/60 border border-white/5 rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-white mb-5">
                    {activeTab === 'technical' && 'Technical Skills'}
                    {activeTab === 'tools' && 'Design & Development Tools'}
                    {activeTab === 'soft' && 'Interpersonal Skills'}
                  </h4>
                  
                  <div className="flex flex-wrap gap-3">
                    {activeTab === 'technical' && (
                      <>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Java</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Java Springboot</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Python</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">JavaScript</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">React</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">HTML/CSS</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">My SQL</span>
                      </>
                    )}
                    {activeTab === 'tools' && (
                      <>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">IntelliJ IDEA</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">VS Code</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Figma</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">GitHub</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">MongoDB</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Postman</span>
                      </>
                    )}
                    {activeTab === 'soft' && (
                      <>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Analytical & Critical Thinking</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Communication</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Problem Solving</span>
                        <span className="px-4 py-2 bg-[#1e293b] border border-white/5 text-cyan-400 text-sm font-medium rounded-full cursor-default hover:bg-slate-700 transition-colors">Leadership</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

<RevealOnScroll delay={300} className="relative pl-8 md:pl-12 group">
              <div className="absolute w-10 h-10 bg-slate-900 border border-pink-500/50 rounded-full flex items-center justify-center -left-5 top-0 group-hover:border-pink-400 transition-all shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <FaAward size={20} className="text-pink-400" />
              </div>
              
              <div className="glass glass-card p-8 rounded-2xl transition-all duration-300">
                <span className="text-pink-400 text-lg font-bold tracking-wider mb-4 block uppercase">Achievements & Certifications</span>
                
                {/* --- Your Current Achievement --- */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Professional Certificates</h3>
                  <p className="text-slate-400 leading-relaxed text-1xl font-semibold">
                   I earned some professional certificates in Data Science, Machine Learning, and Software Development. These certifications validate my expertise, as well as my commitment to lifelong learning in an ever-evolving tech landscape.
                  </p>
                </div>

                {/* --- Glowing Divider --- */}
                <div className="w-full h-px bg-gradient-to-r from-pink-500/50 via-purple-500/30 to-transparent mb-6"></div>

                
                
<ul className="space-y-3">
                  {certificatesData.map((cert) => (
                    <li key={cert.id} className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-slate-800/40 border border-transparent hover:border-white/5 transition-all group/cert">
                      <div className="flex items-start gap-3">
                        <span className="text-pink-500 mt-1 group-hover/cert:translate-x-1 transition-transform">
                          <FaChevronRight size={14} />
                        </span>
                        <div>
                          <h5 className="text-white font-semibold text-1xl">{cert.title}</h5>
                          <p className="text-slate-400 text-1xl mt-1 font-semibold">{cert.issuer} • {cert.year}</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setSelectedCertificate(cert)}
                        className="text-xs font-bold px-4 py-2 bg-blue-500/10 text-white-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors border border-blue-500/20 whitespace-nowrap shadow-sm hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                      >
                        View Certificate
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-2">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-slate-400">A comprehensive showcase of deployed systems, ongoing research, and completed technical works.</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <RevealOnScroll key={project.id} delay={(index + 1) * 100} className="h-full">
                <div className="glass glass-card p-8 rounded-3xl h-full flex flex-col transition-all duration-500 group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  
                  <div className="bg-slate-800/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                    {project.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs font-mono text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-400 mb-8 flex-1">{project.shortDesc}</p>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className={`flex items-center gap-2 ${project.themeColor} font-semibold mt-auto group-hover:brightness-125 transition-all text-left`}
                  >
                    Inspect System <FaChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

      
        {/* --- SINGLE PROJECT POP-UP MODAL --- */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* 1. Added 'animate-fade-in' to the backdrop */}
            <div 
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl animate-fade-in cursor-pointer"
              onClick={() => setSelectedProject(null)}
            ></div>
            
            {/* 2. Replaced the old animate classes with 'animate-pop-in' */}
            <div className="relative glass bg-slate-900/95 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl animate-pop-in">
              
              {/* ... rest of your modal code stays exactly the same ... */}
              
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  {selectedProject.icon} {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">System Gallery</h4>
                
                <div className="relative mb-8 group">
                  <button 
                    onClick={() => scrollGallery('left')} 
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-slate-900/80 hover:bg-slate-800 border border-white/10 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all shadow-lg backdrop-blur-sm"
                  >
                    <FaChevronLeft size={16} />
                  </button>

                  <div 
                    ref={galleryRef} 
                    className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth pb-4 custom-scrollbar"
                  >
                    {selectedProject.gallery.map((img, i) => (
                      <img 
                        key={i} 
                        src={img} 
                        className="snap-center shrink-0 rounded-xl border border-white/10 w-[90%] sm:w-[75%] md:w-[60%] h-56 md:h-72 object-cover shadow-lg" 
                        alt={`${selectedProject.title} screenshot ${i + 1}`} 
                      />
                    ))}
                  </div>

                  <button 
                    onClick={() => scrollGallery('right')} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-slate-900/80 hover:bg-slate-800 border border-white/10 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all shadow-lg backdrop-blur-sm"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">Architecture & Features</h4>
                <div className="bg-slate-950/50 rounded-xl p-5 border border-white/5">
                  <ul className="space-y-4">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <span className={`${selectedProject.themeColor} mt-1`}><FaChevronRight size={14} /></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-8 p-6 border-t border-white/10 bg-slate-950/50 flex justify-end rounded-b-3xl">
                {/* Conditionally render the report button ONLY if a reportLink exists */}
                {selectedProject.reportLink && (
                  <a 
                    href={selectedProject.reportLink} 
                    download
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-white/10 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <FaDownload size={18} className="text-slate-300" /> Download Report
                  </a>
                )}
                
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`px-6 py-3 ${selectedProject.btnColor} text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg`}
                >
                  <FaGithub size={20} /> Access Source Code
                </a>
              </div>
            </div>
          </div>
        )}
{/* --- CERTIFICATE PDF POP-UP MODAL --- */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl animate-fade-in cursor-pointer"
              onClick={() => setSelectedCertificate(null)}
            ></div>
            
            {/* Modal Container */}
            <div className="relative glass bg-slate-900/95 border border-white/10 rounded-3xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl animate-pop-in">
              
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <FaAward className="text-pink-400" size={24} /> {selectedCertificate.title}
                </h3>
                <button 
                  onClick={() => setSelectedCertificate(null)} 
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              
              {/* PDF Viewer */}
              <div className="flex-1 w-full bg-slate-950/50 p-2 sm:p-6 rounded-b-3xl">
                <iframe 
                  src={`${selectedCertificate.file}#toolbar=0&navpanes=0`}
                  className="w-full h-full rounded-xl border border-white/10 bg-slate-800"
                  title={selectedCertificate.title}
                />
              </div>

            </div>
          </div>
        )}
        
        
{/* --- ENHANCED 4-COLUMN FOOTER --- */}
        <footer id="contact" className="relative mt-32 bg-[#020617] overflow-hidden border-t border-white/10">
          
          {/* Top Edge Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent"></div>
          
          {/* Background Ambient Blur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">

              {/* Column 1: Brand & Bio (Aligns Left) */}
              <div className="col-span-1">
                <RevealOnScroll delay={100} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                      <FaCode className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">Sahiru Sandeepa<span className="text-indigo-400"></span></h3>
                      <p className="text-xs text-slate-400 font-mono">Data Science | Software Engineering</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pr-4">
                    Architecting intelligent systems and crafting visually compelling digital branding for modern networks.
                  </p>
                  
                  {/* Social Icons with Neon Floating Effect */}
                  <div className="flex gap-4 pt-2">
                    <div className="animate-floating" style={{ animationDelay: '0s' }}>
                      <a href="https://github.com/Sahiru1010" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900/80 border-2 border-indigo-500/60 shadow-[0_0_12px_rgba(99,102,241,0.5)] flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.9)] transition-all duration-300">
                        <FaGithub size={18} />
                      </a>
                    </div>
                    <div className="animate-floating" style={{ animationDelay: '0.4s' }}>
                      <a href="https://www.linkedin.com/in/sahiru-sandeepa-9b1914267/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900/80 border-2 border-blue-500/60 shadow-[0_0_12px_rgba(59,130,246,0.5)] flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] transition-all duration-300">
                        <FaLinkedin size={18} />
                      </a>
                    </div>
                    <div className="animate-floating" style={{ animationDelay: '0.8s' }}>
                      <a href="mailto:sahirusandeepa52@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900/80 border-2 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.5)] flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.9)] transition-all duration-300">
                        <FaEnvelope size={18} />
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Column 2: Quick Links (Aligns perfectly Center) */}
              <div className="col-span-1 flex md:justify-center">
                <div className="w-fit">
                  <RevealOnScroll delay={200} className="space-y-6">
                    <h4 className="text-lg font-bold text-white tracking-wide">Quick Links</h4>
                    <ul className="space-y-3">
                      {['About', 'Education', 'Portfolio', 'Services', 'Contact'].map((link) => (
                        <li key={link}>
                          <a href={`#${link.toLowerCase()}`} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors flex items-center gap-2 group w-fit">
                            <FaChevronRight size={10} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo-500" />
                            <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </RevealOnScroll>
                </div>
              </div>

              {/* Column 3: Get In Touch (Aligns perfectly Right) */}
              <div className="col-span-1 flex md:justify-end">
                <div className="w-fit">
                  <RevealOnScroll delay={300} className="space-y-6">
                    <h4 className="text-lg font-bold text-white tracking-wide">Get In Touch</h4>
                    <ul className="space-y-5">
                      <li>
                        <a href="mailto:sahirusandeepa52@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                          <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-800/50 border border-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300">
                            <FaEnvelope className="text-indigo-400 group-hover:scale-110 transition-transform" />
                          </div>
                          <span className="text-sm truncate">sahirusandeepa52@gmail.com</span>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+94 70 213 2649" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                          <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-800/50 border border-white/5 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300">
                            <FaPhoneAlt className="text-purple-400 group-hover:scale-110 transition-transform" />
                          </div>
                          <span className="text-sm">+94 70 213 2649</span>
                        </a>
                      </li>
                      <li>
                        <div className="flex items-center gap-4 text-slate-400 group cursor-default">
                          <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-800/50 border border-white/5 flex items-center justify-center group-hover:bg-pink-500/20 group-hover:border-pink-500/30 transition-all duration-300">
                            <FaMapMarkerAlt className="text-pink-400 group-hover:animate-bounce" />
                          </div>
                          <span className="text-sm">Colombo, Sri Lanka</span>
                        </div>
                      </li>
                    </ul>
                  </RevealOnScroll>
                </div>
              </div>

            </div>

            {/* Bottom Legal Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                &copy; 2026 Sahiru Sandeepa. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm font-medium text-slate-500">
                <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>

        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          <div className={`mb-4 w-[350px] glass bg-slate-900/90 rounded-2xl border border-indigo-500/30 shadow-2xl overflow-hidden transition-all duration-500 origin-bottom-right ${isChatOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none absolute'}`}>
            <div className="bg-indigo-600/20 border-b border-indigo-500/20 p-4 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                    <FaStar size={16} className="text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Ask Me</h4>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <FaTimes size={20} />
              </button>
            </div>

            <div className="h-72 p-4 overflow-y-auto flex flex-col gap-4">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-md ${
                    msg.sender === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-sm' 
                    : 'glass border border-white/5 text-slate-200 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass border border-white/5 rounded-2xl rounded-bl-sm p-4 shadow-md flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-slate-950/50 flex gap-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about my projects..." 
                className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-500 outline-none"
              />
              <button 
                type="submit"
                disabled={!chatInput.trim() || isTyping}
                className="bg-indigo-600 text-white p-2 rounded-xl flex items-center justify-center w-10"
              >
                <FaPaperPlane size={16} />
              </button>
            </form>
          </div>

          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-900/50 transition-all duration-300 border border-indigo-400/30 ${
              isChatOpen ? 'bg-slate-800 scale-90 rotate-90' : 'bg-indigo-600 hover:bg-indigo-500 hover:scale-110'
            }`}
          >
            {isChatOpen ? <FaTimes size={24} className="-rotate-90" /> : <FaCommentDots size={24} />}
          </button>
        </div>

      </div>
    </>
  );
}