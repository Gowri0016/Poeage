import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";

export default function Hire() {
  return (
    <>
    <Header />
    <div className="bg-[#f9fbff] py-16 px-6 md:px-12 lg:px-20">
    
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-sm uppercase tracking-wide text-pink-600 mb-2">
          Careers
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Current Vacancies
        </h1>
      </motion.div>

      {/* Vacancy Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            id: 1,
            role: "Software Developer",
            qualification: "B.E/B.Tech in CSE/IT or equivalent with 1+ years experience.",
            description: "Build scalable applications, write clean code, and collaborate with cross-functional teams.",
            email: "mailto:hr@poeage.com",
          },
          {
            id: 2,
            role: "AI Developer",
            qualification: "Experience in Machine Learning, Deep Learning, and Python frameworks.",
            description: "Design and deploy AI-driven solutions for real-world business problems.",
            email: "mailto:hr@poeage.com",
          },
          {
            id: 3,
            role: "Data Analyst",
            qualification: "Bachelor’s/Master’s in Statistics, Data Science, or related field.",
            description: "Analyze business data, generate insights, and support decision-making.",
            email: "mailto:poeagetechnology@gmail.com",
          },
        ].map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.role}</h3>
            <p className="text-sm text-gray-600 mb-3">{job.qualification}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <a
              href={job.email}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition-all"
            >
              Apply & Upload Resume
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-pink-50 border border-pink-200 rounded-2xl p-10 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          Hire the best developers and designers around!
        </h2>
        <a
          href="mailto:hr@poeage.com"
          className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-all"
        >
          Hire Top Developers
        </a>
      </motion.div>
      
    </div>
    <Footer />
    </>
  );
}