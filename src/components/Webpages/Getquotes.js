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
      <div ref={formRef} className="min-h-screen bg-gradient-to-br from-white to-sky-50 flex flex-col lg:flex-row items-center justify-center p-6 md:p-16 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -top-20 -left-20 animate-pulse z-0" />
        <div className="absolute w-72 h-72 bg-blue-100/40 rounded-full blur-2xl top-[70%] left-[80%] animate-ping z-0" />

        {/* Left Text */}
        <div className="lg:w-1/2 z-10 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
            Let's Get You a Quote
          </h1>
          <p className="mt-4 text-lg text-gray-600">Tell us what you’re looking for, and we’ll respond quickly with a personalized offer.</p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4 text-cyan-600 text-4xl">
            <FaEnvelopeOpenText className="animate-bounce" />
            <FaPenFancy className="animate-spin-slow" />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 w-full bg-white rounded-3xl shadow-xl z-10 p-6 md:p-10 border border-blue-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Contact Number" },
            ].map(({ name, label, type = "text" }) => (
              <div key={name}>
                <label className="block font-medium text-blue-900 mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors[name] ? "border-red-500" : "border-blue-200"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
                  placeholder={label}
                />
                {errors[name] && <p className="text-sm text-red-600 mt-1">{errors[name]}</p>}
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block font-medium text-blue-900 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your need"
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-blue-200"} focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition`}
              />
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={status.sending}
              className={`px-10 py-3 text-white text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 shadow-md transition transform hover:scale-105 active:scale-95 ${
                status.sending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status.sending ? "Sending..." : "Send Request"}
            </button>
            {status.success !== null && (
              <p role="alert" className={`mt-4 text-sm ${status.success ? "text-green-600" : "text-red-600"}`}>
                {status.success ? "✅ Your quote has been sent!" : "❌ Failed to send. Try again later."}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Getquotes;
