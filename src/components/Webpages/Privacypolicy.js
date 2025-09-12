import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Privacypolicy() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-12 md:py-16 text-center relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Privacy & Policy</h1>
          <p className="mt-2 text-sm sm:text-base">Last updated: September 13, 2025</p>
          <div className="absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-gray-50 rounded-t-[50%]"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10">
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4 md:mb-6 text-gray-700 text-sm md:text-base">
              Poeage Technology Private Limited ("we", "our", "us") values your privacy and is committed to protecting your
              personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
              website and applications.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4 md:mb-6 text-gray-700 text-sm md:text-base">
              We may collect personal details such as your name, email address, contact information, and usage data when you
              interact with our services.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside mb-4 md:mb-6 text-gray-700 text-sm md:text-base">
              <li>To provide and improve our services</li>
              <li>To communicate with you regarding updates or support</li>
              <li>To comply with legal obligations</li>
              <li>To enhance user experience and personalization</li>
            </ul>

            <h2 className="text-lg md:text-xl font-semibold mb-4">Data Protection</h2>
            <p className="mb-4 md:mb-6 text-gray-700 text-sm md:text-base">
              We implement industry-standard security measures to protect your personal data against unauthorized access,
              alteration, or disclosure.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4 md:mb-6 text-gray-700 text-sm md:text-base">
              You have the right to access, update, or delete your personal information. If you wish to exercise these rights,
              please contact us at <strong>info@poeage.com</strong>.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-4 md:mb-6 text-gray-700 text-sm md:text-base">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 text-sm md:text-base">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-1 font-medium text-sm md:text-base">Poeage Technology Private Limited</p>
            <p className="mb-1 text-sm md:text-base">36A, Main Road, Kavundhapadi, Erode</p>
            <p className="mb-1 text-sm md:text-base">Email: <strong>info@poeage.com</strong></p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-100 py-8 md:py-10 text-center">
          <h2 className="text-base md:text-lg font-semibold mb-4">Stay in the know</h2>
          <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white px-5 py-2 rounded-md hover:bg-cyan-600 text-sm md:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="bg-white py-6 md:py-8 text-center text-sm md:text-base text-gray-500 border-t">
          <p>© {new Date().getFullYear()} Poeage Technology Private Limited. All rights reserved.</p>
        </footer>
      </div>
      <Footer />
    </>
  );
}