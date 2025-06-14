import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";

const InternshipPage = () => {
  const languages = [
    "MEAN Stack",
    "MERN Stack",
    "Java",
    "Python",
    "MongoDB",
    "Networks",
    "IoT",
    "UI/UX",
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Must be 10 digits starting with 6-9";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
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
      .send(
        "service_v64n5p6",
        "template_abgnxru",
        { ...formData, domain: selectedLanguage },
        "woqdTWdPjegdzu3os"
      )
      .then(() => {
        setStatus({ sending: false, success: true });
        setFormData({ name: "", email: "", contactNumber: "", message: "" });
      })
      .catch(() => {
        setStatus({ sending: false, success: false });
      });
  };

  return (
    <>
      <Header />

      {/* Decorative Background */}
      <div className="absolute  inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl top-10 left-5 animate-pulse z-0" />
      <div className="absolute w-56 h-56 bg-red-200 opacity-30 rounded-full blur-2xl top-[65%] left-[60%] animate-bounce z-0" />
      <div className="absolute w-44 h-44 bg-cyan-300 opacity-30 rounded-full blur-2xl bottom-10 right-6 animate-ping z-0" />

      <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-2xl  pt-10 sm:text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r to-blue-500 from-cyan-500 bg-clip-text">
            Internship Opportunities at Poeage
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg px-2">
            Join us for a chance to work on real-world projects in exciting domains. Learn from industry experts and earn a certificate from an ISO-certified organization.
          </p>
        </section>

        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-12 max-w-md mx-auto" />

        <section className="max-w-5xl mx-auto mb-16 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-gray-800 mb-6 font-medium">
            Select Your Preferred Domain
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {languages.map((language, index) => (
              <button
                key={index}
                onClick={() => setSelectedLanguage(language)}
                className={`py-3 px-4 text-xs sm:text-sm rounded-xl font-medium shadow-md text-center transition-all ${
                  selectedLanguage === language
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white scale-105 border-2 border-blue-700"
                    : "bg-white text-gray-800 border border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </section>

        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-12 max-w-md mx-auto" />

        <section className="max-w-3xl mx-auto bg-white border border-blue-200 rounded-xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold">Apply Now</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Fill in your details and submit your application to join our internship program.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900"
          >
            {[{ name: "name", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "contactNumber", label: "Contact Number" }].map(({ name, label, type = "text" }) => (
              <div key={name}>
                <label className="block text-sm font-medium mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors[name]
                      ? "border-red-500"
                      : "border-blue-300 focus:ring-blue-400"
                  } focus:outline-none focus:ring-2 transition duration-150`}
                  placeholder={label}
                />
                {errors[name] && <p className="text-red-600 text-sm mt-1">{errors[name]}</p>}
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.message
                    ? "border-red-500"
                    : "border-blue-300 focus:ring-blue-400"
                } focus:outline-none focus:ring-2 resize-none transition duration-150`}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={status.sending}
                className={`w-full sm:w-auto px-6 py-2.5 sm:px-10 text-white text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full shadow-md transition ${
                  status.sending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status.sending ? "Sending..." : "Send Request"}
              </button>
            </div>

            {status.success !== null && (
              <p className={`md:col-span-2 text-center mt-4 text-sm ${
                status.success ? "text-green-600" : "text-red-600"
              }`}>
                {status.success
                  ? "✅ Your application has been sent!"
                  : "❌ Failed to send. Try again later."}
              </p>
            )}
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default InternshipPage;
