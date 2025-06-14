import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";

// Domain selection button (memoized for performance)
const DomainButton = React.memo(({ language, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`py-2 px-3 text-xs sm:text-sm rounded-lg font-medium shadow-sm transition-all ${
      selected
        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border border-blue-700 scale-105"
        : "bg-white text-gray-800 border border-gray-300 hover:border-blue-400"
    }`}
  >
    {language}
  </button>
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
        setStatus({ sending: false, success: true });
      })
      .catch(() => setStatus({ sending: false, success: false }));
  };

  return (
    <>
      <Header />

       {/* Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Decorative Balls */}
        <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0 hidden md:block" />
        <div className="absolute w-72 h-72 bg-red-200 opacity-30 rounded-full blur-2xl top-[60%] left-[70%] animate-bounce z-0 hidden md:block" />
        <div className="absolute w-60 h-60 bg-cyan-300 opacity-30 rounded-full blur-2xl bottom-20 right-10 animate-ping z-0 hidden md:block" />


      <main className="relative min-h-screen bg-transparent py-10 px-4 sm:px-6 md:px-10">

        {/* Intro */}
        <section className="text-center mb-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Internship Opportunities at Poeage
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Work on live projects, gain industry exposure, and earn a certificate from an ISO-certified company.
          </p>
        </section>

        {/* Domain Selection */}
        <div className="max-w-xl mx-auto mb-12">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
            Choose Your Preferred Domain
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {domains.map((domain, index) => (
              <DomainButton
                key={index}
                language={domain}
                selected={selectedDomain === domain}
                onClick={() => setSelectedDomain(domain)}
              />
            ))}
          </div>
        </div>

        {/* Form */}
        <section className="max-w-xl mx-auto bg-white border border-blue-200 rounded-lg p-5 sm:p-8 shadow-xl">
          <div className="text-center mb-5">
            <h3 className="text-xl font-semibold">Apply Now</h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Submit your details to join the internship program.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            {[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "contactNumber", label: "Contact Number" },
            ].map(({ name, label, type = "text" }) => (
              <div key={name}>
                <label className="text-sm font-medium">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className={`w-full mt-1 px-4 py-2 rounded-md border ${
                    errors[name] ? "border-red-500" : "border-blue-300"
                  } focus:outline-none focus:ring-2 ${
                    errors[name] ? "focus:ring-red-400" : "focus:ring-blue-400"
                  } transition`}
                />
                {errors[name] && (
                  <p className="text-red-600 text-xs mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className={`w-full mt-1 px-4 py-2 rounded-md border ${
                  errors.message ? "border-red-500" : "border-blue-300"
                } focus:outline-none focus:ring-2 ${
                  errors.message ? "focus:ring-red-400" : "focus:ring-blue-400"
                } resize-none transition`}
              />
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status.sending}
              className={`w-full py-2.5 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition ${
                status.sending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status.sending ? "Sending..." : "Send Request"}
            </button>

            {status.success !== null && (
              <p
                className={`text-center text-sm ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.success
                  ? "✅ Your application has been sent!"
                  : "❌ Failed to send. Try again later."}
              </p>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default InternshipPage;
