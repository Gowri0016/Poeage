import React, { useState } from "react";
import { motion } from "framer-motion";
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
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      <motion.div
        className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-200 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.section
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl text-gradient bg-gradient-to-r to-blue-500 from-cyan-500 bg-clip-text text-transparent mt-8 tracking-tight">
            Internship Opportunities at Poeage
          </h1>
          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            Join us for a chance to work on real-world projects in the most exciting domains.
            Learn from industry experts and accelerate your career. Upon successful completion,
            interns will receive a certificate from a verified ISO-certified organization,
            recognized for maintaining international quality standards.
          </p>

        </motion.section>

        <motion.div
          className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-16 max-w-xl mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        <motion.section
          className="max-w-5xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl text-center text-gray-800 mb-8">
            Select Your Preferred Domain
          </h2>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {languages.map((language, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedLanguage(language)}
                variants={itemVariants}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-200 transform py-4 px-8 rounded-2xl text-sm font-medium shadow-lg ${selectedLanguage === language
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white scale-105 border-2 border-blue-700"
                    : "bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                  }`}
              >
                {language}
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        <motion.div
          className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-16 max-w-xl mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.section
          className="max-w-max mx-auto border border-blue-200 rounded-xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className=" text-center">
            <h1 className="text-3xl py-3">Apply Now </h1>
            <p className="py-3 p-5">Fill in your details and submit your application to join our internship program.</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-blue-900"
          >
            {[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "contactNumber", label: "Contact Number" },
            ].map(({ name, label, type = "text" }, index) => (
              <motion.div key={name} className="w-full" variants={fadeInUp} custom={index + 1}>
                <label className="block text-sm md:text-base font-medium mb-2">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-lg border ${errors[name]
                      ? "border-red-500"
                      : "border-blue-300 focus:ring-blue-400"
                    } focus:outline-none focus:ring-2 transition duration-150`}
                  placeholder={label}
                />
                {errors[name] && <p className="text-red-600 text-sm mt-1">{errors[name]}</p>}
              </motion.div>
            ))}

            <motion.div className="md:col-span-2" variants={fadeInUp} custom={4}>
              <label className="block text-sm md:text-base font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className={`w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-lg border ${errors.message
                    ? "border-red-500"
                    : "border-blue-300 focus:ring-blue-400"
                  } focus:outline-none focus:ring-2 resize-none transition duration-150`}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </motion.div>

            <motion.div className="md:col-span-2 flex justify-center mt-6" variants={fadeInUp} custom={5}>
              <motion.button
                type="submit"
                disabled={status.sending}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full sm:w-auto px-10 md:px-12 py-3 md:py-3.5 text-white text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full shadow-md transition ${status.sending ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {status.sending ? "Sending..." : "Send Request"}
              </motion.button>
            </motion.div>

            {status.success !== null && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`md:col-span-2 text-center mt-4 ${status.success ? "text-green-600" : "text-red-600"
                  }`}
              >
                {status.success
                  ? "✅ Your application has been sent!"
                  : "❌ Failed to send. Try again later."}
              </motion.p>
            )}
          </form>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default InternshipPage;