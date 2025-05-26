import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { motion, useAnimation, useInView } from "framer-motion";

const Getquotes = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null });

  const controls = useAnimation();
  const formRef = useRef(null);
  const inView = useInView(formRef, { once: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = "Name must start with uppercase and use only letters/spaces";
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
    } else if (!/^[A-Za-z\s.,'!?()"-]+$/.test(formData.message)) {
      newErrors.message = "Only text and punctuation allowed";
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
      .send("service_v64n5p6", "template_abgnxru", formData, "woqdTWdPjegdzu3os")
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

  return (
    <div
      className="bg-transparent flex items-center justify-center sm:px-6 py-10 mt-20"
      ref={formRef}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="relative w-full max-w-lg sm:max-w-xl md:max-w-3xl bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-br-full z-0" />
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tl from-blue-100 to-transparent rounded-tl-full z-0" />

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-cyan-500 mb-6 sm:mb-8 relative z-10"
          variants={fadeInUp}
          custom={0}
        >
          Request a Quote
        </motion.h1>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-blue-900"
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
                className={`w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-lg border ${
                  errors[name]
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
              className={`w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base rounded-lg border ${
                errors.message
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
              className={`w-full sm:w-auto px-10 md:px-12 py-3 md:py-3.5 text-white text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600  hover:from-blue-700 hover:to-cyan-600 rounded-full shadow-md transition ${
                status.sending ? "opacity-50 cursor-not-allowed" : ""
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
              className={`md:col-span-2 text-center mt-4 ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.success
                ? "✅ Your quote has been sent!"
                : "❌ Failed to send. Try again later."}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Getquotes;