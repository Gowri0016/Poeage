import React, { useState } from "react";
import { motion } from 'framer-motion';
import Sql from '../../assests/MySql.png';
import Php from '../../assests/PHP.png';

const TechStackAndGroups = () => {
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
      { name: "Rails", logo: "https://cdn.worldvectorlogo.com/logos/rails-1.svg" },
      { name: "Golang", logo: "https://cdn.worldvectorlogo.com/logos/go-8.svg" },
      { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
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
      { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
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

 

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="flex flex-col gap-20 md:gap-32 px-4 md:px-10 mt-32 lg:px-20">
    

      {/* Tech Stack Section */}
      <section className="py-16 bg-white text-center rounded-xl shadow-lg">
        <div className="container mx-auto px-4 md:px-0">
          <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-2xl font-semibold text-gray-800 mb-2">
            Our
          </motion.h2>
          <motion.h3 initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-3xl font-bold text-gray-900 mb-8">
            Tech Stack
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {categories.map((cat, idx) => (
              <motion.button key={idx} onClick={() => setActive(cat)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`pb-1 text-sm md:text-base font-medium border-b-2 transition-colors ${active === cat ? "border-purple-600 text-purple-600" : "border-transparent text-gray-500 hover:text-purple-600"}`}>
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
            {techStacks[active].map((tech, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.1, y: -5 }} transition={{ type: 'spring', stiffness: 100 }} className="flex flex-col items-center space-y-2">
                <img src={tech.logo} alt={tech.name} className="h-12 md:h-14 object-contain" />
                <span className="text-sm md:text-base text-gray-700 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStackAndGroups;
