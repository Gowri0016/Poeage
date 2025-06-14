import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import {
  FaRocket,
  FaBullseye,
  FaLightbulb,
  FaSmile,
  FaCubes,
  FaStarHalfAlt,
  FaHandsHelping,
} from "react-icons/fa";

// Balloon Animation replacement (CSS only)
const Balloon = ({ left, color }) => (
  <div
    className={`absolute bottom-0 animate-bounce-slow pointer-events-none`}
    style={{ left }}
  >
    <div className={`w-6 h-8 rounded-full ${color} shadow-lg opacity-70`}></div>
  </div>
);

export default function Aboutus() {
  const principles = [
    {
      icon: <FaRocket className="text-4xl mx-auto mb-2 text-pink-400" />,
      title: "Innovation",
      desc: "We constantly push boundaries to bring fresh and effective tech ideas.",
    },
    {
      icon: <FaBullseye className="text-4xl mx-auto mb-2 text-yellow-400" />,
      title: "Precision",
      desc: "Focused execution for tailored, high-performance solutions.",
    },
    {
      icon: <FaLightbulb className="text-4xl mx-auto mb-2 text-cyan-400" />,
      title: "Creativity",
      desc: "Breaking conventions to deliver impactful digital experiences.",
    },
  ];

  const metrics = [
    {
      icon: <FaSmile className="mx-auto text-4xl" />,
      label: "Satisfied Clients",
      value: "10+",
    },
    {
      icon: <FaCubes className="mx-auto text-4xl" />,
      label: "Projects Delivered",
      value: "20+",
    },
    {
      icon: <FaStarHalfAlt className="mx-auto text-4xl" />,
      label: "Average Rating",
      value: "4.8★",
    },
    {
      icon: <FaHandsHelping className="mx-auto text-4xl" />,
      label: "Support Availability",
      value: "24/7",
    },
  ];

  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-white text-black">
        {/* Background grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* COLOR BALLS */}
        <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0" />
        <div className="absolute w-72 h-72 bg-red-200 opacity-30 rounded-full blur-2xl top-[60%] left-[70%] animate-bounce z-0" />
        <div className="absolute w-60 h-60 bg-cyan-300 opacity-30 rounded-full blur-2xl bottom-20 right-10 animate-ping z-0" />

        {/* Balloons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[10, 30, 50, 70, 85].map((pos, idx) => (
            <Balloon
              key={idx}
              left={`${pos}%`}
              color={`bg-pink-${300 + idx * 100}`}
            />
          ))}
        </div>

        {/* Foreground Content */}
        <main className="relative z-10 min-h-screen pt-28 pb-20 px-6 lg:px-20">
          {/* Hero */}
          <section className="text-center max-w-4xl mx-auto mb-24">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">
              Step Into Tomorrow with <span className="text-black">Poeage</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Harnessing cutting-edge tech and visionary design to empower businesses
              for a smarter, sustainable future.
            </p>
          </section>

          {/* Core Principles */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            {principles.map((val, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-3xl p-8 shadow-md text-center hover:scale-105 transition-transform"
              >
                {val.icon}
                <h3 className="text-2xl font-semibold mb-2">{val.title}</h3>
                <p className="text-gray-700 text-sm">{val.desc}</p>
              </div>
            ))}
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center mb-20">
            {metrics.map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-2xl shadow-md"
              >
                {item.icon}
                <h4 className="text-xl font-semibold mt-2">{item.label}</h4>
                <p className="text-2xl font-bold mt-1">{item.value}</p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section className="bg-blue-600 text-white rounded-3xl shadow-xl p-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Transform?</h2>
              <p>
                Join hands with Poeage and shape your digital success story.
              </p>
            </div>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
