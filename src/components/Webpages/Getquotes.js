import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { FaEnvelopeOpenText, FaPenFancy, FaPaperPlane, FaLightbulb, FaUser, FaPhone, FaComments } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Getquotes = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null });
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const topic = query.get("topic");
  const formRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    if (topic && formData.message === "") {
      setFormData((prev) => ({ ...prev, message: `I'm interested in: ${topic}` }));
    }
    return () => setIsVisible(false);
  }, [topic, formData.message]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Z][a-zA-Z\s]*$/.test(formData.name)) newErrors.name = "Name must start with uppercase and use only letters/spaces";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Contact number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Must be 10 digits starting with 6-9";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (!/^[A-Za-z\s.,'!?()"-]+$/.test(formData.message)) newErrors.message = "Only text and punctuation allowed";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      // Shake animation for errors
      const errorKeys = Object.keys(validationErrors);
      errorKeys.forEach(key => {
        const element = document.querySelector(`[name="${key}"]`);
        if (element) {
          element.parentElement.classList.add('animate-shake');
          setTimeout(() => {
            element.parentElement.classList.remove('animate-shake');
          }, 500);
        }
      });
      
      return;
    }

    setStatus({ sending: true, success: null });

    emailjs
      .send("service_5p6bb6j", "template_jepqzkk", formData, "ZDcUw7Mx4T6teZ1bG")
      .then(() => {
        setStatus({ sending: false, success: true });
        setErrors({});
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => setStatus({ sending: false, success: false }));
  };

  return (
    <>
      <Header />
      <div ref={formRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-6 py-12 relative overflow-hidden text-white">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Floating orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <motion.path
              d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
              className="stroke-cyan-500/30 fill-none stroke-[2]"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M100,300 C250,400 450,200 600,300 L600,00 L100,0 Z"
              className="stroke-purple-500/30 fill-none stroke-[2]"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
            />
          </svg>
        </div>

        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 z-10">
          {/* Left Section - Enhanced with more visual elements */}
          <motion.div 
            className="md:w-2/5 text-center md:text-left relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Floating elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            />
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Let's Build <br />Something Amazing
              <motion.span 
                className="absolute -right-6 -top-4 text-cyan-400 text-3xl"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-4 text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Share your vision with us and we'll craft a tailored solution that exceeds your expectations.
            </motion.p>
            
            <motion.div 
              className="flex flex-col space-y-6 mb-10"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {[
                { icon: <FaUser className="text-cyan-400" />, text: "Personalized approach" },
                { icon: <FaComments className="text-purple-400" />, text: "24h response time" },
                { icon: <FaLightbulb className="text-yellow-400" />, text: "Innovative solutions" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className="text-xl p-2 rounded-lg bg-black/20"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Animated decorative element */}
            <motion.div 
              className="hidden md:block mt-12 relative h-40"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <motion.path
                  d="M40,100 C40,60 80,40 100,40 C120,40 160,60 160,100 C160,140 120,160 100,160 C80,160 40,140 40,100 Z"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                
                <motion.circle
                  cx="100"
                  cy="100"
                  r="5"
                  fill="#06b6d4"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Form Section - Enhanced with more animations */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:w-3/5 w-full bg-gradient-to-br from-gray-800/30 to-blue-900/30 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-cyan-500/30 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Form background elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
            
            <motion.h2 
              className="text-2xl font-bold text-cyan-400 mb-2 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Request Your Custom Quote
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-center mb-8"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Let's start a conversation about your project
            </motion.p>
            
            <div className="grid grid-cols-1 gap-5 relative z-10">
              {[
                { name: "name", label: "Full Name", icon: <FaUser className="text-cyan-400" /> },
                { name: "email", label: "Email Address", type: "email", icon: <FaEnvelopeOpenText className="text-cyan-400" /> },
                { name: "phone", label: "Contact Number", icon: <FaPhone className="text-cyan-400" /> },
              ].map(({ name, label, type = "text", icon }) => (
                <motion.div
                  key={name}
                  className={`relative rounded-lg transition-all duration-300 ${errors[name] ? 'bg-red-500/10' : 'bg-gray-900/30'} ${activeField === name ? 'ring-2 ring-cyan-500/50' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + (0.1 * ['name', 'email', 'phone'].indexOf(name)) }}
                  onFocus={() => setActiveField(name)}
                  onBlur={() => setActiveField(null)}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {icon}
                  </div>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder-gray-400"
                    placeholder={label}
                  />
                  {errors[name] && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-400 mt-1 px-3"
                    >
                      {errors[name]}
                    </motion.p>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                className="relative rounded-lg bg-gray-900/30"
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
                onFocus={() => setActiveField('message')}
                onBlur={() => setActiveField(null)}
              >
                <div className="absolute top-3 left-3 text-cyan-400">
                  <FaComments />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe your project needs, goals, and any specific requirements..."
                  className="w-full pl-10 pr-4 py-3 bg-transparent border-none focus:outline-none focus:ring-0 resize-none text-white placeholder-gray-400"
                />
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-400 mt-1 px-3"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <motion.button
                type="submit"
                disabled={status.sending}
                whileHover={{ scale: status.sending ? 1 : 1.05 }}
                whileTap={{ scale: status.sending ? 1 : 0.95 }}
                className={`px-8 py-4 text-white text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg transition-all flex items-center justify-center gap-2 mx-auto ${
                  status.sending ? "opacity-70 cursor-not-allowed" : "hover:shadow-cyan-500/40"
                }`}
              >
                {status.sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Send Request
                    </motion.span>
                    <motion.span
                      initial={{ x: 5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <FaPaperPlane />
                    </motion.span>
                  </>
                )}
              </motion.button>
              
              <AnimatePresence>
                {status.success !== null && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-6 p-4 rounded-lg ${status.success ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}
                  >
                    <p className={`text-sm ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                      {status.success 
                        ? "✅ Your quote request has been sent! We'll contact you within 24 hours." 
                        : "❌ Failed to send your request. Please try again or contact us directly."}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.form>
        </div>

        {/* Animation Styles */}
        <style>
          {`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
              20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
            .animate-shake {
              animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Getquotes;