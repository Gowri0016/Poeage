import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What services does Poeage Technology provide?", answer: "We specialize in software development, AI solutions, data analytics, cloud architecture, web design, and scalable digital products." },
    { question: "How can I apply for an internship at Poeage?", answer: "You can apply directly through our Careers page by filling the internship application form and uploading your resume." },
    { question: "Does Poeage offer AI-driven solutions?", answer: "Yes, we provide AI development services including machine learning models, NLP solutions, predictive analytics, and AI-powered automation." },
    { question: "Where is Poeage Technology located?", answer: "Our headquarters is in Tamil Nadu, India, with clients and projects served globally." },
    { question: "How do I hire Poeage developers for my project?", answer: "You can get in touch via our Contact page or use the 'Hire Developers' form to book a consultation call." },
    { question: "Does Poeage provide end-to-end product development?", answer: "Yes, we cover product discovery, UI/UX design, development, testing, deployment, and ongoing support." },
    { question: "Can Poeage handle enterprise-scale projects?", answer: "Absolutely. We build scalable, secure, and high-performance applications tailored for enterprise-level clients." },
    { question: "What industries does Poeage work with?", answer: "We work across industries including healthcare, education, e-commerce, finance, manufacturing, and real estate." },
    { question: "What technologies does Poeage use for development?", answer: "We use the latest tech stack including MERN (MongoDB, Express, React, Node.js), Python, TensorFlow, AWS, Azure, Docker, and Kubernetes." },
    { question: "How does Poeage ensure data security?", answer: "We follow industry best practices including encryption, secure APIs, GDPR compliance, and cloud-native security solutions." },
    { question: "Does Poeage provide post-launch support?", answer: "Yes, we provide ongoing maintenance, updates, and monitoring to ensure your product stays reliable and secure." },
    { question: "What is the typical project timeline at Poeage?", answer: "Timelines vary depending on project size, but we follow agile methodology with clear milestones and weekly updates." },
    { question: "Does Poeage help with cloud migration?", answer: "Yes, we offer seamless migration of applications and databases to AWS, Azure, or GCP with minimal downtime." },
    { question: "Can Poeage integrate AI into existing systems?", answer: "Definitely. We specialize in embedding AI/ML models into existing workflows, CRMs, ERPs, and enterprise systems." },
    { question: "How does Poeage manage client communication?", answer: "We provide dedicated account managers, weekly demos, and transparent progress reports to keep you informed." }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24 min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-gray-800 font-medium">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 text-gray-600"
                  >
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Ask Question Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center h-fit"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 p-6 rounded-full">
                <FaQuestionCircle className="text-5xl text-cyan-600" />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Any Question?</h2>
            <p className="text-gray-600 text-sm mb-6">
              You can ask anything you want to know. We value your feedback.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Let us know"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}