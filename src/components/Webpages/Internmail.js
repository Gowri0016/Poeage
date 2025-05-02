import React, { useState } from "react";
import emailjs from "emailjs-com";

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
        "service_wiicwjt",            // Replace with your actual EmailJS service ID
        "template_0d57wo5",           // Replace with your actual template ID
        formData,
        "8F9ua55d2Ogw-Dtj4"           // Replace with your actual user/public key
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

  return (
    <div className="py-2 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-4xl md:max-w-6xl border border-blue-100">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-10 tracking-tight">
          Internship Application
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Full Name", name: "name" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Contact Number", name: "contactNumber" },
            { label: "Course", name: "course" },
            { label: "College Name", name: "collegeName" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>
          ))}

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Gender</label>
            <div className="flex gap-6">
              {["Male", "Female"].map((g) => (
                <label key={g} className="inline-flex items-center gap-2 text-gray-600 font-medium">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="accent-blue-600"
                    required
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Mode */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Mode</label>
            <div className="flex gap-6">
              {["Online", "Offline"].map((mode) => (
                <label key={mode} className="inline-flex items-center gap-2 text-gray-600 font-medium">
                  <input
                    type="radio"
                    name="online"
                    value={mode}
                    checked={formData.online === mode}
                    onChange={handleChange}
                    className="accent-blue-600"
                    required
                  />
                  {mode}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:scale-105 transition transform duration-200"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
