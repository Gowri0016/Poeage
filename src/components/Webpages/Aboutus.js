import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Founder from "../../assests/Founder.png";
import {
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaUserTie,
  FaFlagCheckered,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Aboutus() {
  const timeline = [
    {
      year: "2023",
      icon: <FaCode className="text-white" />,
      title: "Journey Begins",
      desc: "We started with Web Development & App Development services.",
      image:
        "https://media.bitcot.com/wp-content/uploads/2024/01/web-and-mobile-app-development.webp",
    },
    {
      year: "2024",
      icon: <FaRobot className="text-white" />,
      title: "Expanding Horizons",
      desc: "We introduced AI Development, Customized Web & Application solutions.",
      image:
        "https://www.binaryfolks.com/media/blog/AI%20in%20Mobile%20App%20Development/Header%20Image%20750X500.png",
    },
    {
      year: "2025",
      icon: <FaLaptopCode className="text-white" />,
      title: "Software & Products",
      desc: "Started full-scale Software Development and launched our own product: Poeage Hub (E-commerce Platform).",
      image:
        "https://www.appstudio.ca/blog/wp-content/uploads/2020/09/Modern-Software-Development.jpg",
    },
  ];

  const founder = {
    name: "Mr. Gowrishankar",
    role: "Founder & Visionary Entrepreneur",
    tagline: "Building ecosystems across technology, education, AI, and lifestyle",
    journey: [
      {
        year: "2023",
        milestone: "Founded Poeage Technology Private Limited",
        focus:
          "Full-stack IT solutions, product innovation, and enterprise services",
      },
      {
        year: "2024",
        milestone: "Introduced Poeage Hub & IT Solutions",
        focus: "Education, upskilling, and accessible IT services for startups",
      },
      {
        year: "2025",
        milestone: "Launched Poeage Builders",
        focus:
          "Redefining smart infrastructure, real estate, and construction technology",
      },
      {
        year: "2025",
        milestone: "Expanded with Poeage Web Services & Poeage Nexus",
        focus: "AI-driven platforms, web automation, and digital ecosystems",
      },
    ],
    vision:
      "Transforming industries by blending innovation, technology, and sustainability—empowering businesses and individuals to thrive in a digital-first world.",
    image: Founder,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.7 },
    }),
  };

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-12 lg:px-20">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-sm text-black  md:text-sm ">
            Our career
          </p>
          <h2 className="text-3xl md:text-4xl text-cyan-600 tracking-wide font-semibold">
            Way OF Building
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <motion.div
                variants={zoomIn}
                className="flex-1 h-60 md:h-80 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 w-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={fadeUp}
                className="flex-1 space-y-3 md:space-y-4 bg-white/80 backdrop-blur-lg p-4 md:p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl md:text-4xl bg-cyan-600 p-3 md:p-4 rounded-full shadow-lg text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {item.year} – {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Founder Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-3xl  mx-auto mt-20 md:mt-32 space-y-12"
        >
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-10 items-center">
            <motion.div
              variants={zoomIn}
              className="rounded-2xl bg-black overflow-hidden shadow-2xl h-72 md:h-96 hover:scale-105 transition-transform duration-500 w-full"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className=" max-h-full object-cover"
              />
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                <FaUserTie className="text-cyan-600" /> {founder.name}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wide">
                {founder.role}
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {founder.vision}
              </p>
            </div>
          </div>

          {/* Founder Journey Timeline */}
          <div className="space-y-10">
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <FaFlagCheckered className="text-purple-600" /> Founder’s Journey
            </h4>
            <div className="space-y-6">
              {founder.journey.map((step, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={timelineVariants}
                  className="p-4 md:p-6 bg-white/90 rounded-xl shadow-md border-l-4 border-cyan-600"
                >
                  <h5 className="text-lg md:text-xl font-bold text-gray-900">
                    {step.year} – {step.milestone}
                  </h5>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    {step.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
