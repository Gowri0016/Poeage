import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Leg from '../../assests/Legenadary.png';
import Herito from '../../assests/Herito.png';
import ASE from '../../assests/ASE protact.png';
import Sabari from '../../assests/Screenshot 2025-10-08 at 2.33.19 PM.png';

export default function Case() {
  const steps = [
    {
      id: 1,
      title: "Research & Discovery",
      desc: "We begin by understanding client needs, user expectations, and the business context to align design goals.",
      image: Leg,
      link: "https://legendaryone.in/",
    },
    {
      id: 2,
      title: "Design & Prototyping",
      desc: "Our UI/UX experts craft prototypes and wireframes, ensuring intuitive navigation and modern aesthetics.",
      image: Herito,
      link: "https://heritowellness.com",
    },
    {
      id: 3,
      title: "Development & Integration",
      desc: "We develop scalable platforms with dynamic components, smooth transitions, and performance-focused coding.",
      image: ASE,
      link: "https://aseprotact.com",
    },
    {
      id: 4,
      title: "Testing & Delivery",
      desc: "Our team performs rigorous testing, ensuring responsiveness, accessibility, and flawless functionality before launch.",
      image: Sabari,
      link: "https://sabaricars.com",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Header />
      <div className="bg-[#f9fbff] py-16 px-6 md:px-12 lg:px-20">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="text-sm uppercase tracking-wide text-pink-600 mb-2">
            How We Work
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Poeage Technology Process
          </h1>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-0 left-1/2 w-1 bg-pink-200 h-full -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full md:w-1/2 h-64 overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 font-semibold hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="text-pink-600 font-bold hover:underline text-lg"
          >
            Discover More Projects →
          </a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}