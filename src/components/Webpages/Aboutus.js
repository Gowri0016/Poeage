import React, { useState, useEffect, useRef } from "react";
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

// Network Node Component
const NetworkNode = ({ x, y, size, color, pulseDelay }) => {
  return (
    <div
      className="absolute rounded-full animate-pulse"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        animationDelay: `${pulseDelay}s`,
      }}
    />
  );
};

// Connection Line Component
const ConnectionLine = ({ startX, startY, endX, endY, color }) => {
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  
  return (
    <div
      className="absolute origin-left animate-connection-pulse"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        width: `${length}%`,
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 0',
      }}
    />
  );
};

export default function Aboutus() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

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

  // Generate network nodes
  const generateNodes = () => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
      pulseDelay: Math.random() * 2,
      color: `hsl(${200 + Math.random() * 40}, 100%, 70%)`,
    }));
  };

  const [nodes, setNodes] = useState(generateNodes());
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Create connections between nearby nodes
    const newConnections = [];
    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (i < j && Math.hypot(a.x - b.x, a.y - b.y) < 20) {
          newConnections.push({
            id: `${i}-${j}`,
            startX: a.x,
            startY: a.y,
            endX: b.x,
            endY: b.y,
            color: `hsl(${200 + Math.random() * 40}, 100%, 70%)`,
          });
        }
      });
    });
    setConnections(newConnections);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [nodes]);

  // Update node positions based on mouse
  useEffect(() => {
    const updatedNodes = nodes.map(node => {
      const dx = mousePosition.x - node.x;
      const dy = mousePosition.y - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const pull = dist < 15 ? (15 - dist) / 15 * 0.5 : 0;
      
      return {
        ...node,
        x: node.x + dx * pull,
        y: node.y + dy * pull
      };
    });
    setNodes(updatedNodes);
  }, [mousePosition]);

  return (
    <>
      <Header />
      <div 
        ref={containerRef}
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen"
      >
        {/* Digital Network Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          {connections.map(conn => (
            <ConnectionLine
              key={conn.id}
              startX={conn.startX}
              startY={conn.startY}
              endX={conn.endX}
              endY={conn.endY}
              color={conn.color}
            />
          ))}
          
          {nodes.map(node => (
            <NetworkNode
              key={node.id}
              x={node.x}
              y={node.y}
              size={node.size}
              color={node.color}
              pulseDelay={node.pulseDelay}
            />
          ))}
        </div>

        {/* Content */}
        <main className="relative z-10 min-h-screen pt-28 pb-20 px-6 lg:px-20">
          {/* Hero Section */}
          <section className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="text-6xl font-light mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Where Innovation Meets Imagination
            </h1>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto">
              Crafting futuristic, scalable, and immersive digital solutions for your business evolution.
            </p>
          </section>

          {/* 3D Core Principles */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
            {principles.map((val, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl p-10 border border-cyan-500/30 bg-slate-800/50 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,255,255,0.2)] transform transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_10px_60px_rgba(0,255,255,0.3)] hover:border-cyan-400"
              >
                <div className="text-5xl text-cyan-400 mb-4 drop-shadow-2xl">{val.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{val.title}</h3>
                <p className="text-cyan-100 text-sm">{val.desc}</p>
                <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center mb-20">
            {metrics.map((item, i) => (
              <div
                key={i}
                className="bg-slate-800/50 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="text-4xl text-cyan-400 mb-3">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-1 text-white">{item.label}</h4>
                <p className="text-2xl font-extrabold text-cyan-400">{item.value}</p>
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section className="relative bg-gradient-to-r from-cyan-700 to-blue-700 rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.3)] p-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 transform hover:scale-[1.01] transition-all duration-500 backdrop-blur-sm">
            <div>
              <h2 className="text-4xl font-light text-white mb-3">Begin Your Journey with Us</h2>
              <p className="text-cyan-100">Seize futuristic possibilities — let's innovate together.</p>
            </div>
            <a
              href="/quotes"
              className="bg-white text-cyan-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
            {/* Light streak effect */}
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-cyan-400/20 pointer-events-none animate-pulse" />
          </section>
        </main>
      </div>
      <Footer />
      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
        .animate-pulse { 
          animation: pulse 4s ease-in-out infinite; 
        }

        @keyframes connection-pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.5; }
          100% { opacity: 0.1; }
        }
        .animate-connection-pulse { 
          animation: connection-pulse 3s ease-in-out infinite; 
        }
      `}</style>
    </>
  );
}