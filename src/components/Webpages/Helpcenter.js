import React from 'react';
import { FaQuestionCircle, FaEnvelope, FaComments, FaBook, FaPhone, FaVideo } from 'react-icons/fa';
import Footer from './Footer';
import Header from './Header';

export default function Helpcenter() {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6 sm:p-12'>
        {/* Header */}
        <header className='w-full max-w-7xl text-center mb-12'>
          <p className='text-gray-500 mb-2'>All Services Customer &rarr;</p>
          <h1 className='text-4xl sm:text-5xl font-bold mb-4'>Poeage Technology Help Center</h1>
          <p className='text-gray-500 mb-6 text-sm sm:text-base'>
            Poeage Technology Help Center is your one-stop hub for guides, tutorials, FAQs, live support, and resources
            to maximize your experience with our products and services.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <button className='bg-black text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-800 transition'>
              <FaComments /> Live Chat
            </button>
            <button className='px-6 py-3 border rounded hover:bg-gray-200 transition'>Request a Message</button>
          </div>
        </header>

        {/* Help Sections */}
        <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

          {/* User Guide */}
          <div className='bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col'>
            <FaBook className='text-3xl mb-4 text-red-400' />
            <h2 className='font-semibold text-xl mb-2'>User Guide</h2>
            <p className='text-gray-500 text-sm mb-4 flex-1'>
              Step-by-step documentation for beginners and advanced users to get started and master Poeage Technology services.
            </p>
            <a href='#' className='text-blue-600 font-medium flex items-center gap-1'>Explore Guides &rarr;</a>
          </div>

          {/* FAQs */}
          <div className='bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col'>
            <FaQuestionCircle className='text-3xl mb-4 text-yellow-400' />
            <h2 className='font-semibold text-xl mb-2'>FAQs</h2>
            <p className='text-gray-500 text-sm mb-4 flex-1'>
              Find answers to common questions about products, services, payments, and account management.
            </p>
            <a href='#' className='text-blue-600 font-medium flex items-center gap-1'>View FAQs &rarr;</a>
          </div>

          {/* Contact Us */}
          <div className='bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col'>
            <FaEnvelope className='text-3xl mb-4 text-green-400' />
            <h2 className='font-semibold text-xl mb-2'>Contact Us</h2>
            <p className='text-gray-500 text-sm mb-4 flex-1'>
              Get in touch with our support team for inquiries, troubleshooting, or personalized guidance on Poeage products.
            </p>
            <a href='#' className='text-blue-600 font-medium flex items-center gap-1'>Contact Support &rarr;</a>
          </div>

          {/* Live Chat */}
          <div className='bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col'>
            <FaComments className='text-3xl mb-4 text-blue-400' />
            <h2 className='font-semibold text-xl mb-2'>Live Chat</h2>
            <p className='text-gray-500 text-sm mb-4 flex-1'>
              Connect instantly with our agents for real-time support and quick solutions to your concerns.
            </p>
            <a href='#' className='text-blue-600 font-medium flex items-center gap-1'>Start Chat &rarr;</a>
          </div>

          {/* Phone Support */}
          <div className='bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col'>
            <FaPhone className='text-3xl mb-4 text-purple-400' />
            <h2 className='font-semibold text-xl mb-2'>Phone Support</h2>
            <p className='text-gray-500 text-sm mb-4 flex-1'>
              Speak directly with our support representatives for assistance over the phone.
            </p>
            <a href='#' className='text-blue-600 font-medium flex items-center gap-1'>Call Now &rarr;</a>
          </div>

          {/* Video Tutorials */}
          <div className='bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col'>
            <FaVideo className='text-3xl mb-4 text-pink-400' />
            <h2 className='font-semibold text-xl mb-2'>Video Tutorials</h2>
            <p className='text-gray-500 text-sm mb-4 flex-1'>
              Watch step-by-step video tutorials to understand features, setup, and usage of Poeage Technology solutions.
            </p>
            <a href='#' className='text-blue-600 font-medium flex items-center gap-1'>Watch Videos &rarr;</a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
