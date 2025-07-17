import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export const Internmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    course: "",
    collegeName: "",
    gender: "",
    online: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wiicwjt",
        "template_0d57wo5",
        formData,
        "8F9ua55d2Ogw-Dtj4"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          course: "",
          collegeName: "",
          gender: "",
          online: "",
        });
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  const inputFields = [
    { label: "Full Name", name: "name" },
    { label: "Email Address", name: "email", type: "email" },
    { label: "Contact Number", name: "contactNumber" },
    { label: "Course", name: "course" },
    { label: "College Name", name: "collegeName" },
  ];

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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center"
    >
      <motion.div
        className="bg-white/90 p-4 rounded-3xl shadow-2xl w-full max-w-2xl md:max-w-5xl border border-blue-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl font-bold text-blue-800 text-center mb-8 tracking-tight drop-shadow"
          variants={itemVariants}
        >
          Internship Application
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {inputFields.map(({ label, name, type = "text" }) => (
            <motion.div key={name} className="relative" variants={itemVariants}>
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                required
                className="peer w-full px-4 pt-6 pb-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                placeholder={label}
              />
              <label
                htmlFor={name}
                className="absolute left-4 top-2 text-sm text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                {label}
              </label>
            </motion.div>
          ))}

          {/* Gender */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Gender
            </label>
            <div className="flex flex-wrap gap-4 md:flex-row">
              {["Male", "Female"].map((g) => (
                <motion.button
                  key={g}
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    handleChange({ target: { name: "gender", value: g } })
                  }
                  className={`px-4 py-2 rounded-full border font-medium transition ${
                    formData.gender === g
                      ? "bg-blue-600 text-white border-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {g}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Mode */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mode
            </label>
            <div className="flex flex-wrap gap-4 md:flex-row">
              {["Online", "Offline"].map((mode) => (
                <motion.button
                  key={mode}
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    handleChange({ target: { name: "online", value: mode } })
                  }
                  className={`px-4 py-2 rounded-full border font-medium transition ${
                    formData.online === mode
                      ? "bg-blue-600 text-white border-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {mode}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Submit */}
          <motion.div
            className="md:col-span-2 text-center mt-8"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-10 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-200"
            >
              Submit Application
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};
