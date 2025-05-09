import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Internmail } from "./Internmail";

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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-200 py-16 px-4">
        {/* Intro Section */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mt-8 tracking-tight">
            🚀 Internship Opportunities at Poeage
          </h1>
          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            Join us for a chance to work on real-world projects in the most exciting domains. Learn from industry experts and accelerate your career.
          </p>
        </section>

        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-16 max-w-xl mx-auto" />

        {/* Domain Selection */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
            🎯 Select Your Preferred Domain
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {languages.map((language, index) => (
              <button
                key={index}
                onClick={() => setSelectedLanguage(language)}
                className={`transition-all duration-200 transform py-4 px-8 rounded-2xl text-sm font-medium shadow-lg hover:scale-105 ${
                  selectedLanguage === language
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white scale-105 border-2 border-blue-700"
                    : "bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-16 max-w-xl mx-auto" />

        {/* Application Form */}
        <section className="max-w-4xl mx-auto bg-white border border-blue-200 shadow-lg rounded-xl p-10">
          <h3 className="text-3xl font-semibold text-center text-blue-800 mb-6">
            ✍️ Apply Now
          </h3>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Fill in your details and submit your application to join our internship program.
          </p>
          <Internmail selectedDomain={selectedLanguage} />
          <p className="mt-8 text-center text-sm text-gray-500 italic">
            You’ll hear from us within 48 hours after submission.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InternshipPage;
