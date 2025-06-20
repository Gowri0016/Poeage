import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";

const DomainButton = React.memo(({ language, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 text-sm sm:text-base rounded-full font-medium shadow-md transition-all duration-300 transform focus:outline-none ${
      selected
        ? "bg-gradient-to-r from-cyan-600 to-blue-500 text-white scale-105"
        : "bg-white text-gray-800 border border-gray-300 hover:border-purple-400 hover:scale-105"
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
        setSelectedDomain("");
        setStatus({ sending: false, success: true });
      })
      .catch(() => setStatus({ sending: false, success: false }));
  };

  return (
    <>
      <Header />

      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(200,200,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />


      <main className="relative z-10 py-16 px-4 sm:px-6 md:px-10 bg-transparent min-h-screen">
        <section className="text-center mb-10 max-w-2xl mx-auto">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">
            Internship Opportunities at Poeage
          </h1>
          <p className="mt-4 text-gray-700">
            Work on live projects, gain industry exposure, and earn a certificate from an ISO-certified company.
          </p>
        </section>

        <section className="max-w-2xl mx-auto mb-12">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
            Choose Your Preferred Domain
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
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

        <section className="max-w-2xl mx-auto bg-white border border-purple-200 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-cyan-600">Apply Now</h3>
            <p className="text-gray-500 mt-1 text-sm">
              Fill out your details and our team will get in touch soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            {[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "contactNumber", label: "Contact Number" },
            ].map(({ name, label, type = "text" }) => (
              <div key={name}>
                <label className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors[name] ? "border-red-500" : "border-purple-300"
                  } focus:outline-none focus:ring-2 ${
                    errors[name] ? "focus:ring-red-400" : "focus:ring-purple-400"
                  } transition`}
                />
                {errors[name] && (
                  <p className="text-red-600 text-xs mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-purple-300"
                } focus:outline-none focus:ring-2 ${
                  errors.message ? "focus:ring-red-400" : "focus:ring-purple-400"
                } resize-none transition`}
              />
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status.sending}
              className={`w-full py-3 text-white font-semibold rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-pink-600 hover:to-purple-600 transition ${
                status.sending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status.sending ? "Sending..." : "Submit Application"}
            </button>

            {status.success !== null && (
              <p
                className={`text-center text-sm mt-2 ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.success
                  ? "✅ Your application has been sent!"
                  : "❌ Failed to send. Please try again later."}
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