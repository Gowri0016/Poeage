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

  const googleFormBaseURL =
    "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform";
  const googleFormURL = selectedLanguage
    ? `${googleFormBaseURL}?usp=pp_url&entry.123456789=${selectedLanguage}`
    : googleFormBaseURL;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 py-16 px-6 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-cyan-300 to-blue-400 opacity-20 blur-3xl rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-bl from-pink-300 to-purple-400 opacity-20 blur-3xl rounded-full -z-10 animate-pulse delay-1000"></div>

        {/* Intro Section */}
        <section className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 drop-shadow-lg tracking-tight">
            Kickstart Your Career with Poeage Internships
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
            Unlock hands-on learning across top tech domains. Select your interest and apply now for a transformative journey!
          </p>
        </section>

        {/* Main Content Card */}
        <main className="max-w-6xl mx-auto bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/30 relative z-10">
          {/* Internship Domain Selection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
              💡 Choose Your Internship Track
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {languages.map((language, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLanguage(language)}
                  className={`group relative py-4 px-6 rounded-2xl font-semibold text-white text-sm sm:text-base shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-105 ${
                    selectedLanguage === language
                      ? "bg-gradient-to-r from-blue-700 to-cyan-500 shadow-xl"
                      : "bg-cyan-600 hover:bg-cyan-700"
                  }`}
                >
                  {language}
                  <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 rounded-2xl blur-sm z-0 transition duration-300"></span>
                </button>
              ))}
            </div>
          </section>

          {/* Feature Highlights */}
          <section className="grid sm:grid-cols-3 gap-6 text-center mb-12">
            {[
              { title: "Real Projects", icon: "💻" },
              { title: "Mentor Support", icon: "👨‍🏫" },
              { title: "Certificate & Guidance", icon: "📜" },
            ].map((item, i) => (
              <div key={i} className="bg-white/60 rounded-xl p-6 shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-blue-700 text-lg">{item.title}</h3>
              </div>
            ))}
          </section>

          {/* Application Form */}
          <section className="relative mt-16 max-w-2xl mx-auto bg-white/60 backdrop-blur-xl border border-blue-200 rounded-3xl shadow-lg p-8 sm:p-10 text-center overflow-hidden">
            {/* Floating Decorative Element */}
            <div className="absolute top-0 -left-20 w-60 h-60 bg-gradient-to-tr from-cyan-300 to-blue-500 opacity-30 blur-2xl rounded-full -z-10 animate-spin-slow"></div>
            <div className="absolute bottom-0 -right-20 w-80 h-80 bg-gradient-to-bl from-pink-400 to-purple-500 opacity-20 blur-3xl rounded-full -z-10 animate-pulse"></div>

            {/* Heading */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 mb-6">
              🚀 Apply Now and Start Your Journey
            </h3>
            <p className="text-gray-700 text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us your preferred domain and start your internship with live projects, mentorship, and a certificate upon completion.
            </p>

            {/* Internmail form */}
            <div className="relative z-10">
              <Internmail selectedDomain={selectedLanguage} />
            </div>

            {/* Footer Note */}
            <p className="mt-6 text-sm text-gray-500 italic">
              📩 Expect a confirmation email within 48 hours after your application.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default InternshipPage;
