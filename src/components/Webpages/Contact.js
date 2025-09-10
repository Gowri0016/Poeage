import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { FaEnvelopeOpenText, FaPaperPlane, FaLightbulb, FaUser, FaPhone, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null });
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const topic = query.get("topic");
  const formRef = useRef(null);

  useEffect(() => {
    if (topic && formData.message === "") {
      setFormData((prev) => ({ ...prev, message: `I'm interested in: ${topic}` }));
    }
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
      <div ref={formRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4 md:px-6 py-10 md:py-12 relative overflow-hidden text-white">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
          {/* Left Section */}
          <motion.div 
            className="flex flex-col justify-center text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-5xl mt-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              Let's Build Something Amazing ✨
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-300 mb-6">
              Share your vision with us and we'll craft a tailored solution.
            </p>
            <div className="space-y-4">
              {[{ icon: <FaUser />, text: "Personalized approach" }, { icon: <FaComments />, text: "24h response time" }, { icon: <FaLightbulb />, text: "Innovative solutions" }].map((item, i) => (
                <motion.div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg" whileHover={{ x: 10 }}>
                  <span className="text-cyan-400">{item.icon}</span>
                  <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full bg-gradient-to-br from-gray-800/30 to-blue-900/30 backdrop-blur-md rounded-xl shadow-2xl p-5 md:p-8 border border-cyan-500/30"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2 text-center">Request Your Custom Quote</h2>
            <p className="text-gray-400 text-sm md:text-base text-center mb-6">Let's start a conversation about your project</p>

            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "name", label: "Full Name", type: "text", icon: <FaUser className="text-cyan-400" /> },
                { name: "email", label: "Email Address", type: "email", icon: <FaEnvelopeOpenText className="text-cyan-400" /> },
                { name: "phone", label: "Contact Number", type: "text", icon: <FaPhone className="text-cyan-400" /> },
              ].map(({ name, label, type, icon }) => (
                <div key={name} className={`relative flex items-center bg-gray-900/30 rounded-lg ${errors[name] ? 'ring-2 ring-red-500/40' : 'ring-1 ring-white/10'}`}>
                  <span className="absolute left-3">{icon}</span>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={label}
                    className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
              ))}
              <div className={`relative bg-gray-900/30 rounded-lg ${errors.message ? 'ring-2 ring-red-500/40' : 'ring-1 ring-white/10'}`}>
                <span className="absolute top-3 left-3 text-cyan-400"><FaComments /></span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your project..."
                  className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button type="submit" disabled={status.sending} className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 justify-center mx-auto hover:scale-105 transition">
                {status.sending ? "Sending..." : <>Send Request <FaPaperPlane /> </>}
              </button>
              {status.success !== null && (
                <p className={`mt-4 text-sm ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                  {status.success ? "✅ Your request has been sent!" : "❌ Failed to send. Try again."}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
}