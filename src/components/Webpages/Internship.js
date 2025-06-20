// your imports remain unchanged
import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

// Enhanced Domain Button with glow and ripple
const DomainButton = React.memo(({ language, selected, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-md shadow-md
      ${selected
        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
        : "bg-white/60 text-blue-900 border-blue-200 hover:border-cyan-500"
      }`}
  >
    {language}
    {selected && (
      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-cyan-400 opacity-20 animate-ping"></span>
    )}
  </motion.button>
));

const InternshipPage = () => {
  const domains = [
    "MEAN Stack", "MERN Stack", "Java", "Python",
    "MongoDB", "Networks", "IoT", "UI/UX"
  ];

  const [selectedDomain, setSelectedDomain] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", contactNumber: "", message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.email.trim()) {
      err.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      err.email = "Invalid email format";
    }
    if (!formData.contactNumber.trim()) {
      err.contactNumber = "Contact number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.contactNumber)) {
      err.contactNumber = "Must be 10 digits starting with 6-9";
    }
    if (!formData.message.trim()) err.message = "Message is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ sending: true, success: null });

    emailjs
      .send(
        "service_v64n5p6",
        "template_abgnxru",
        { ...formData, domain: selectedDomain },
        "woqdTWdPjegdzu3os"
      )
      .then(() => {
        setFormData({ name: "", email: "", contactNumber: "", message: "" });
        setSelectedDomain("");
        setStatus({ sending: false, success: true });
      })
      .catch(() => setStatus({ sending: false, success: false }));
  };

  return (
    <>
      <Header />

      {/* Soft Cyan/Blue Grid Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-blue-50 to-white" />

      <main className="relative z-10 min-h-screen py-16 px-6 bg-white/60 backdrop-blur-lg">
        {/* Heading */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Internship Opportunities at Poeage
          </h1>
          <p className="mt-4 text-gray-600 text-base max-w-xl mx-auto">
            Work on real-time projects, gain industry experience, and get certified by an ISO-verified company.
          </p>
        </motion.section>

        {/* Domains */}
        <section className="mb-12 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-blue-800 mb-6">
            Choose Your Preferred Domain
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {domains.map((domain, index) => (
              <DomainButton
                key={index}
                language={domain}
                selected={selectedDomain === domain}
                onClick={() => setSelectedDomain(domain)}
              />
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="max-w-3xl mx-auto bg-white/90 border border-blue-100 shadow-lg rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-blue-600">Apply Now</h3>
            <p className="text-gray-500 text-sm">Our team will reach out shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            {[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "contactNumber", label: "Contact Number" },
            ].map(({ name, label, type = "text" }) => (
              <div key={name}>
                <label className="block mb-1 text-sm font-medium text-blue-700">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors[name]
                      ? "border-red-500 focus:ring-red-400"
                      : "border-blue-200 focus:ring-cyan-400"
                  }`}
                />
                {errors[name] && (
                  <p className="text-red-600 text-xs mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            {/* Message Field */}
            <div>
              <label className="block mb-1 text-sm font-medium text-blue-700">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your interest..."
                className={`w-full px-4 py-3 rounded-xl border resize-none transition-all duration-200 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "border-blue-200 focus:ring-cyan-400"
                }`}
              />
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* CTA */}
            <motion.button
              type="submit"
              disabled={status.sending}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-full text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-purple-500 shadow-lg transition-all duration-300 ${
                status.sending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status.sending ? "Sending..." : "Submit Application"}
            </motion.button>

            {status.success !== null && (
              <motion.p
                className={`text-center text-sm mt-3 font-medium ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {status.success
                  ? "✅ Application sent successfully!"
                  : "❌ Failed to send. Please try again later."}
              </motion.p>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default InternshipPage;
