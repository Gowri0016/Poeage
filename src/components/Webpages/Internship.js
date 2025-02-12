import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Internmail } from "./Internmail";


const InternshipPage = () => {
  const languages = ['MEAN Stack','MERN Stack','Java','Python', 'My SQL', 'LINIX', 'Data Science', 'C++', 'C Programming', 'C#', 'Net Works', 'IOT'];
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Track selected language

  // Google Form base URL
  const googleFormBaseURL = "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform";
  
  // Dynamic query parameter to pass the selected language
  const googleFormURL = selectedLanguage
    ? `${googleFormBaseURL}?usp=pp_url&entry.123456789=${selectedLanguage}`
    : googleFormBaseURL;

  return (
    <>
     <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 p-4 relative top-16">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-md">
          Internship Opportunities 🌟
        </h1>
        <p className="text-gray-700 mt-2 text-lg">
          Select your preferred internship program and apply below!
        </p>
      </header>

      <main className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Internship Language Selection */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-cyan-900 mb-4">Choose Your Internship</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {languages.map((language, index) => (
              <button
                key={index}
                onClick={() => setSelectedLanguage(language)}
                className={`py-3 px-6 rounded-lg shadow-lg text-lg font-medium transition-all ${
                  selectedLanguage === language
                    ? "bg-cyan-600 text-white scale-105"
                    : "bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </section>

        {/* Google Form */}
      <div>
        <Internmail/>
      </div>
      </main>
      
    </div>
    <div className=" relative top-14">
    <Footer/>
    </div>
    </>
  );
};

export default InternshipPage;

