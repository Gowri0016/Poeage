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

// Animated Balloon
const Balloon = ({ left, color }) => (
  <div
    className="absolute bottom-0 animate-bounce-slow pointer-events-none"
    style={{ left }}
  >
    <div className={`w-6 h-8 rounded-full ${color} shadow-lg opacity-70`}></div>
  </div>
);

export default function Aboutus() {
  const principles = [
    {
      icon: <FaRocket className="text-4xl mx-auto mb-2 text-pink-500" />,
      title: "Innovation",
      desc: "We push boundaries to craft bold, future-ready solutions.",
    },
    {
      icon: <FaBullseye className="text-4xl mx-auto mb-2 text-yellow-400" />,
      title: "Precision",
      desc: "Accurate execution tailored to client goals and user needs.",
    },
    {
      icon: <FaLightbulb className="text-4xl mx-auto mb-2 text-cyan-500" />,
      title: "Creativity",
      desc: "Crafting beautiful, intuitive, and impactful digital experiences.",
    },
  ];

  const metrics = [
    {
      icon: <FaSmile className="mx-auto text-4xl text-blue-500" />,
      label: "Satisfied Clients",
      value: "10+",
    },
    {
      icon: <FaCubes className="mx-auto text-4xl text-purple-500" />,
      label: "Projects Delivered",
      value: "20+",
    },
    {
      icon: <FaStarHalfAlt className="mx-auto text-4xl text-yellow-500" />,
      label: "Avg. Rating",
      value: "4.8★",
    },
    {
      icon: <FaHandsHelping className="mx-auto text-4xl text-green-500" />,
      label: "Support",
      value: "24/7",
    },
  ];

  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-white text-black">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />

        {/* Glow Blobs */}
        <div className="absolute w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0" />
        <div className="absolute w-72 h-72 bg-pink-200 opacity-30 rounded-full blur-2xl top-[55%] left-[65%] animate-bounce z-0" />
        <div className="absolute w-60 h-60 bg-cyan-400 opacity-20 rounded-full blur-2xl bottom-24 right-16 animate-ping z-0" />

        {/* Balloons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[12, 28, 46, 68, 86].map((pos, idx) => (
            <Balloon key={idx} left={`${pos}%`} color={`bg-cyan-${300 + idx * 100}`} />
          ))}
        </div>

        {/* Content */}
        <main className="relative z-10 min-h-screen pt-28 pb-20 px-6 lg:px-20">
          {/* Hero Section */}
          <section className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500">
              Step Into Tomorrow with Poeage
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Empowering your business with creative solutions and cutting-edge technology — designed for the future.
            </p>
          </section>

          {/* Core Principles */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            {principles.map((val, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl text-center transition-transform hover:scale-105"
              >
                {val.icon}
                <h3 className="text-2xl font-semibold mb-2 text-blue-800">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center mb-20">
            {metrics.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                {item.icon}
                <h4 className="text-xl font-semibold mt-2 text-gray-800">{item.label}</h4>
                <p className="text-2xl font-bold text-blue-700 mt-1">{item.value}</p>
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.02] transition-all duration-300">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Transform?</h2>
              <p className="text-white/90">Partner with Poeage to craft your digital journey.</p>
            </div>
            <a
              href="/quotes"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-200 transition"
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
