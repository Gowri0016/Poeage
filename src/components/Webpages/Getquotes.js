import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { FaEnvelopeOpenText, FaPenFancy } from "react-icons/fa";

const Getquotes = () => {
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
      <div ref={formRef} className="min-h-screen bg-transparent flex flex-col md:flex-row items-center justify-center px-6 md:px-16  py-12 relative overflow-hidden text-white">
        

        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left z-10   md:mb-0">
          <h1 className="text-4xl md:text-5xl font-light bg-clip-text text-black text-transparent bg-white">
            Let's Get You a Quote
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Tell us your needs — Our AI-powered assistant will respond with a tailored solution.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4 text-white text-4xl">
            <FaEnvelopeOpenText className="animate-bounce" />
            <FaPenFancy className="animate-spin-slow" />
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full bg-white backdrop-blur-lg rounded-3xl shadow-2xl z-10 p-8 md:p-12 border border-blue-600"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Contact Number" },
            ].map(({ name, label, type = "text" }) => (
              <div key={name}>
                <label className="block font-medium text-black mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors[name] ? "border-red-500" : "border-blue-400/30"} focus:outline-none focus:ring-2 focus:ring-blue-600 transition bg-white text-black`}
                  placeholder={label}
                />
                {errors[name] && <p className="text-sm text-red-400 mt-1">{errors[name]}</p>}
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block font-medium text-black mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your need"
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-blue-600"} focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none transition bg-white text-black`}
              />
              {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message}</p>}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={status.sending}
              className={`px-10 py-3 text-white text-lg font-semibold rounded-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-blue-500 hover:to-sky-500 shadow-lg transition transform hover:scale-105 active:scale-95 ${
                status.sending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status.sending ? "Sending..." : "Send Request"}
            </button>
            {status.success !== null && (
              <p role="alert" className={`mt-4 text-sm ${status.success ? "text-green-400" : "text-red-400"}`}>
                {status.success ? "✅ Your quote has been sent!" : "❌ Failed to send. Try again later."}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 30s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default Getquotes;
