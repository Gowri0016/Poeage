// Imports stay same
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

const Balloon = ({ left, color }) => (
  <div
    className="absolute bottom-0 animate-float pointer-events-none"
    style={{ left }}
  >
    <div className={`w-8 h-10 rounded-full ${color} shadow-xl opacity-70`}></div>
  </div>
);

export default function Aboutus() {
  const principles = [
    { icon: <FaRocket />, title: "Innovation", desc: "We push boundaries to craft bold, future-ready solutions." },
    { icon: <FaBullseye />, title: "Precision", desc: "Accurate execution tailored to client goals and user needs." },
    { icon: <FaLightbulb />, title: "Creativity", desc: "Crafting beautiful, intuitive, and impactful digital experiences." },
  ];

  const metrics = [
    { icon: <FaSmile />, label: "Satisfied Clients", value: "10+" },
    { icon: <FaCubes />, label: "Projects Delivered", value: "20+" },
    { icon: <FaStarHalfAlt />, label: "Avg. Rating", value: "4.8★" },
    { icon: <FaHandsHelping />, label: "Support", value: "24/7" },
  ];

  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-white text-black">
        <div className="absolute inset-0 z-0">

  
  {/* Aurora Overlay */}
  <div className="absolute inset-0 bg-transparent opacity-20 animate-aurora" />
</div>


        {/* Animated Blobs & Balloons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[15, 35, 55, 75, 90].map((pos, idx) => (
            <Balloon key={idx} left={`${pos}%`} color={`bg-cyan-${300 + idx * 100}`} />
          ))}
        </div>

        {/* Content */}
        <main className="relative z-10 min-h-screen pt-28 pb-20 px-6 lg:px-20">
          {/* Hero Section */}
          <section className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="text-6xl font-light mb-6 bg-white text-black bg-clip-text drop-shadow-lg">
              Where Innovation Meets Imagination
            </h1>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Crafting futuristic, scalable, and immersive digital solutions for your business evolution.
            </p>
          </section>

          {/* 3D Core Principles */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
            {principles.map((val, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl p-10 border-2 border-blue-500 bg-white backdrop-blur-xl shadow-[0_10px_60px_rgba(0,255,255,0.3)] transform transition hover:scale-[1.06] hover:-rotate-x-2 hover:rotate-y-2"
                style={{ perspective: "800px" }}
              >
                <div className="text-5xl text-blue-600 mb-4 drop-shadow-2xl">{val.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
                <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none" style={{ transform: 'translateZ(15px)' }}></div>
              </div>
            ))}
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center mb-20">
            {metrics.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/10 via-cyan-800/10 to-transparent border border-cyan-500 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className="text-4xl text-blue-600 mb-3">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-1">{item.label}</h4>
                <p className="text-2xl font-extrabold text-blue-600">{item.value}</p>
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section className="relative bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.5)] p-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 transform hover:scale-[1.02] transition-all">
            <div>
              <h2 className="text-4xl font-light text-white mb-3">Begin Your Journey with Poeage</h2>
              <p className="text-white/90">Seize futuristic possibilities — let's innovate together.</p>
            </div>
            <a
              href="/quotes"
              className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-200 transition"
            >
              Get in Touch
            </a>
            {/* Light streak effect */}
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-white/10 pointer-events-none animate-glow" />
          </section>
        </main>
      </div>
      <Footer />
      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-aurora { background-size: 200% 200%; animation: aurora 10s ease-in-out infinite; }

        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 60px rgba(255,255,255,0.3); }
          100% { box-shadow: 0 0 20px rgba(255,255,255,0.1); }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
      `}</style>
    </>
  );
}
