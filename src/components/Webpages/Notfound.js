import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Notfound() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [time, setTime] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      setCursor({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    let animationFrameId;
    const updateTime = () => {
      setTime(prev => prev + 0.01);
      animationFrameId = requestAnimationFrame(updateTime);
    };
    
    animationFrameId = requestAnimationFrame(updateTime);
    window.addEventListener('mousemove', handleMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Create a grid of nodes with unique properties
  const nodes = useMemo(
    () => Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 0.5 + 0.2,
      color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`,
      orbitRadius: Math.random() * 10 + 5,
      angle: Math.random() * Math.PI * 2,
    })),
    []
  );

  // Hexagon grid for background
  const hexagons = useMemo(
    () => Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      rotation: Math.random() * 360,
    })),
    []
  );

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full bg-gradient-to-b from-indigo-950 via-slate-900 to-black text-white overflow-hidden flex items-center justify-center relative"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-t border-l border-cyan-500/20"
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: `${50 + i * 10}px ${50 + i * 10}px`,
              backgroundImage: 'linear-gradient(to right, rgba(102, 126, 234, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(102, 126, 234, 0.1) 1px, transparent 1px)',
            }}
            animate={{
              backgroundPosition: [`${i * 5}px ${i * 5}px`, `${i * 10}px ${i * 10}px`],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating hexagons */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        {hexagons.map((hex) => {
          const dx = cursor.x - hex.x;
          const dy = cursor.y - hex.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const scale = dist < 15 ? 1.2 : 1;
          
          return (
            <motion.polygon
              key={hex.id}
              points={getHexagonPoints(hex.x, hex.y, hex.size)}
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="0.5"
              initial={{ 
                opacity: 0,
                scale: 0 
              }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale,
                rotate: hex.rotation + time * 5
              }}
              transition={{
                opacity: {
                  duration: 4 + hex.id * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                },
                scale: {
                  duration: 0.5,
                  ease: 'easeOut'
                },
                rotate: {
                  duration: 20 + hex.id,
                  repeat: Infinity,
                  ease: 'linear'
                }
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated nodes */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {nodes.map((node) => {
          // Calculate orbit position
          const orbitX = node.x + Math.cos(time * node.speed + node.angle) * node.orbitRadius;
          const orbitY = node.y + Math.sin(time * node.speed + node.angle) * node.orbitRadius;
          
          // Mouse interaction
          const dx = cursor.x - orbitX;
          const dy = cursor.y - orbitY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pull = dist < 30 ? (30 - dist) / 30 * 0.5 : 0;
          
          return (
            <motion.circle
              key={node.id}
              cx={`${orbitX + dx * pull}%`}
              cy={`${orbitY + dy * pull}%`}
              r={node.size}
              fill={node.color}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                opacity: {
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                },
                scale: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }
              }}
            />
          );
        })}
      </svg>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {nodes.map((a, i) =>
          nodes.map((b, j) => {
            if (i >= j) return null;
            
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 20) {
              return (
                <motion.line
                  key={`${a.id}-${b.id}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.3, 0],
                    strokeDashoffset: [100, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      delay: (i + j) * 0.05,
                    },
                    strokeDashoffset: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }
                  }}
                  strokeDasharray="5 5"
                />
              );
            }
            return null;
          })
        )}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Scanning effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent)',
        }}
        animate={{
          left: ['0%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <motion.h1
            className="text-8xl sm:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-2xl select-none"
            animate={{
              textShadow: [
                '0 0 5px rgba(34, 211, 238, 0.5)',
                '0 0 20px rgba(168, 85, 247, 0.5)',
                '0 0 5px rgba(34, 211, 238, 0.5)',
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              ease: 'easeInOut'
            }}
          >
            404
          </motion.h1>
          <motion.div
            className="h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <motion.p 
          className="text-gray-300 mt-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Signal lost in the digital void. Let's navigate back to familiar territory.
        </motion.p>

        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <Link
            to="/"
            className="relative px-8 py-4 rounded-full overflow-hidden group border-2 border-cyan-400/30 hover:border-cyan-400/80 transition-all duration-500"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 group-hover:from-cyan-400/20 group-hover:to-purple-500/20"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <span className="relative z-10 text-cyan-300 group-hover:text-white transition-colors flex items-center">
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="mr-2"
              >
                ⟵
              </motion.span>
              Return to Home Base
            </span>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

// Helper function to generate hexagon points
function getHexagonPoints(x, y, size) {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    points.push(`${px},${py}`);
  }
  return points.join(' ');
}

export default Notfound;