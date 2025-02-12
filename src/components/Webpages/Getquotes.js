
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Getquotes = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    country: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    message: "",
  });

  console.log("formdata",formData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_v64n5p6",
        "template_abgnxru",
        formData,
        "woqdTWdPjegdzu3os"
      )
      .then(
        (result) => {
          console.log("Result to emailjs",result)
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            contactNumber: "",
            country: "",
            state: "",
            district: "",
            address: "",
            pincode: "",
            message: "",
          });
        },
        (error) => {
          console.log("error to emailjs",error)
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="relative bg-white ">
      

      {/* Contact Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen ">
        <div className="bg-slate-200 p-8 rounded-lg shadow-xl max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 border rounded-lg"
              required
            />
            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border rounded-lg"
              required
            />
            {/* Contact Number */}
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="p-3 border rounded-lg"
              required
            />
            {/* Country */}
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="p-3 border rounded-lg"
              required
            />
            {/* State */}
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="p-3 border rounded-lg"
              required
            />
            {/* District */}
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="District"
              className="p-3 border rounded-lg"
              required
            />
            {/* Address */}
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="p-3 border rounded-lg col-span-1 md:col-span-2"
              required
            />
            {/* Pincode */}
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="p-3 border rounded-lg"
              required
            />
            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-3 border rounded-lg col-span-1 md:col-span-2"
              required
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 col-span-1 md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Getquotes;


