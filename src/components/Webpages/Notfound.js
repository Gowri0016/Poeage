import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Notfound() {
  return (
    <div className="h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center justify-center relative">

      {/* Animated Background Lights */}
      <motion.div
        className="absolute w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700/20 via-blue-500/10 to-transparent blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      />

      {/* Top Glow Circle */}
      <div className="absolute w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-60 h-60 bg-cyan-400 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-ping" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h1
          initial={{ scale: 0.8, rotateX: 15, opacity: 0 }}
          animate={{ scale: 1, rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-br from-pink-500 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl font-medium mt-4 text-white/90"
        >
          Lost in Space
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 mt-4 mb-10 text-base sm:text-lg"
        >
          The page you’re looking for has drifted away into the void. Let’s get you back to safety.
        </motion.p>

        {/* Button Group */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 1 },
            },
          }}
        >
          {[
            {
              text: "Back to Home",
              to: "/",
              style: "bg-gradient-to-r from-blue-600 to-indigo-600",
              hover: "hover:scale-105 hover:shadow-blue-400",
            },
            {
              text: "Explore Services",
              to: "/services",
              style: "bg-transparent border-2 border-pink-500 text-pink-400",
              hover: "hover:bg-pink-500 hover:text-white",
            },
            {
              text: "Contact Support",
              to: "/contact",
              style: "bg-transparent border-2 border-cyan-500 text-cyan-400",
              hover: "hover:bg-cyan-500 hover:text-white",
            },
          ].map((btn, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative"
            >
              <Link
                to={btn.to}
                className={`relative px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${btn.style} ${btn.hover}`}
              >
                {btn.text}
                {/* Inner Pulse Glow */}
                <motion.span
                  className="absolute inset-0 rounded-full opacity-20 blur-md group-hover:opacity-40 transition"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Notfound;
