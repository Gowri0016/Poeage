import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Notfound() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      setCursor({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const leds = useMemo(
    () => Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      pulseDelay: Math.random() * 2,
      colorSet: Math.random() > 0.5 ? ['#4ade80', '#22d3ee', '#f472b6'] : ['#facc15', '#fb7185', '#38bdf8']
    })),
    []
  );

  return (
    <div className="h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden flex items-center justify-center relative">
      {/* Rotating concentric circles for sci-fi feel */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-green-400/10"
          style={{ width: `${200 + i * 150}px`, height: `${200 + i * 150}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30 - i * 4, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Floating LEDs */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {leds.map((led, i) => {
          const dx = cursor.x - led.x;
          const dy = cursor.y - led.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pull = dist < 25 ? 0.3 : 0;
          return (
            <motion.circle
              key={i}
              cx={`${led.x + dx * pull}%`}
              cy={`${led.y + dy * pull}%`}
              r="4"
              fill={led.colorSet[0]}
              animate={{
                fill: led.colorSet,
                r: [4, 7, 4],
                filter: [
                  'drop-shadow(0 0 5px currentColor)',
                  'drop-shadow(0 0 15px currentColor)',
                  'drop-shadow(0 0 5px currentColor)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 2,
                ease: 'easeInOut',
                delay: led.pulseDelay
              }}
            />
          );
        })}
      </svg>

      {/* Lines between LEDs */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {leds.map((a, i) =>
          leds.map((b, j) => {
            if (i < j && Math.hypot(a.x - b.x, a.y - b.y) < 20) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke={`url(#grad-${i % 2})`}
                  strokeWidth="1.2"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: [0.1, 0.7, 0.1] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: (i + j) * 0.1
                  }}
                />
              );
            }
            return null;
          })
        )}
        <defs>
          <linearGradient id="grad-0" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-8xl sm:text-9xl font-extrabold bg-white bg-clip-text text-transparent drop-shadow-lg select-none"
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 5px #4ade80',
                '0 0 20px #22d3ee',
                '0 0 5px #f472b6',
                '0 0 20px #facc15'
              ],
              skewX: [0, 8, -8, 0]
            }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            404
          </motion.span>
        </motion.h1>
        <p className="text-gray-300 mt-4 text-lg">
          The network seems broken. Let's reconnect you to the right page.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="relative px-6 py-3 rounded-full overflow-hidden group border border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.6)] hover:shadow-[0_0_40px_rgba(74,222,128,0.9)] transition-shadow"
          >
            <span className="relative z-10 text-green-200 group-hover:text-white transition-colors">
              Back Home
            </span>
            <span className="absolute inset-0 bg-green-500 opacity-20 group-hover:opacity-40 transition"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
