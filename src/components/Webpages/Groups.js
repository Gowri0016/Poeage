import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Sql from '../../assests/MySql.png';
import Php from '../../assests/PHP.png';

const TechStackUnique = () => {
  const categories = ["Backend", "Frontend", "Databases", "CMS", "Cloud/Testing", "DevOps"];
  const [active, setActive] = useState("Backend");

  const techStacks = {
    Backend: [
      { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
      { name: "PHP", logo: Php },
      { name: "MySQL", logo: Sql },
      { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
      { name: ".NET", logo: "https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg" },
      { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    ],
    Frontend: [
      { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Angular", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
      { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
    ],
    Databases: [
      { name: "MySQL", logo: Sql },
      { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "Redis", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
    ],
    CMS: [
      { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
      { name: "Drupal", logo: "https://cdn.worldvectorlogo.com/logos/drupal.svg" },
    ],
    "Cloud/Testing": [
      { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
      { name: "Jest", logo: "https://cdn.worldvectorlogo.com/logos/jest-2.svg" },
    ],
    DevOps: [
      { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { name: "Jenkins", logo: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg" },
    ],
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative py-20 px-6 md:px-20 bg-white overflow-hidden">

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4"
        >
          Explore Our Tech Stack
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the technologies powering our innovative solutions, across frontend, backend, and DevOps systems.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full font-medium shadow-sm transition-all duration-300 ${
              active === cat
                ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Animated Tech Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
        >
          {techStacks[active].map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="group w-36 h-36 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center z-10">
                <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="mt-3 text-sm font-semibold text-gray-700 z-10 group-hover:text-indigo-600 transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TechStackUnique;