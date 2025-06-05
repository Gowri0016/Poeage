import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Notfound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 text-white overflow-hidden relative perspective-1000">

      {/* Animated Floating Gradient Backdrop */}
      <motion.div
        className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-blue-500/10 to-transparent blur-3xl z-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      />

      {/* 3D 404 Title */}
      <motion.h1
        className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10"
        initial={{ scale: 0.8, rotateX: 20, opacity: 0 }}
        animate={{ scale: 1.05, rotateX: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 90, damping: 10 }}
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-2xl sm:text-3xl font-medium mt-2 z-10 text-white/90"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-400 mt-4 mb-10 px-6 max-w-md z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        The page you're trying to reach doesn't exist or has been moved.
      </motion.p>

      {/* 3D-like Buttons */}
      <motion.div
        className="z-10 flex flex-col sm:flex-row items-center gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 1,
            },
          },
        }}
      >
        {[
          {
            text: "Go Back Home",
            to: "/",
            bg: "from-blue-600 via-indigo-600 to-purple-600",
            border: "",
            hover: "hover:scale-105 hover:shadow-blue-400",
          },
          {
            text: "Take Me Home",
            to: "/",
            bg: "bg-transparent",
            border: "border-2 border-blue-500",
            hover: "hover:bg-blue-500 hover:text-white",
          },
          {
            text: "Return to Safety",
            to: "/",
            bg: "bg-transparent",
            border: "border-2 border-pink-600 text-pink-500",
            hover: "hover:bg-pink-500 hover:text-white",
          },
        ].map((btn, i) => (
          <motion.div
            key={i}
            className="relative group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ rotateY: 5, rotateX: 5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Link
              to={btn.to}
              className={`relative px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 ${btn.bg} ${btn.border} ${btn.hover}`}
            >
              {btn.text}
              {/* Floating Glow */}
              <motion.span
                className="absolute inset-0 blur-xl opacity-20 rounded-full"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Notfound;
