import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBookOpen,
  FaUsers,
  FaFlask,
  FaLightbulb,
  FaChalkboardTeacher,
  FaBuilding,
} from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

// Extended Key Characteristics & Applications
const casePoints = [
  {
    icon: <FaSearch className="text-pink-600 text-3xl" />,
    title: "Real-World Context",
    desc: "Case studies examine software engineering phenomena in their natural, complex environments, not labs.",
    image:
      "https://blog.tubikstudio.com/wp-content/uploads/2023/05/case-study-physica-magazine-tubik-design.jpg",
  },
  {
    icon: <FaBookOpen className="text-pink-600 text-3xl" />,
    title: "Empirical Inquiry",
    desc: "They rely on collecting and analyzing evidence from documents, interviews, and observations.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: <FaUsers className="text-pink-600 text-3xl" />,
    title: "Focus on Few Instances",
    desc: "A case study emphasizes a project, organization, or event rather than generalizing to a population.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: <FaFlask className="text-pink-600 text-3xl" />,
    title: "Exploratory & Explanatory",
    desc: "The goal is to explore complex issues and explain why outcomes occurred in context.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: <FaLightbulb className="text-pink-600 text-3xl" />,
    title: "Flexibility",
    desc: "Case studies are adaptable, allowing researchers or educators to refine their approach as new insights appear.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: <FaChalkboardTeacher className="text-pink-600 text-3xl" />,
    title: "Education",
    desc: "They provide students with realistic scenarios, human factors, and challenges for effective learning.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: <FaBuilding className="text-pink-600 text-3xl" />,
    title: "Organizational Improvement",
    desc: "Companies analyze past projects, find improvement areas, and share lessons learned for better software engineering.",
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=900&q=60",
  },
];

export default function Case() {
  return (
    <div className="bg-[#f9fbff] min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16 px-6 md:px-12 lg:px-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-sm uppercase tracking-wide text-pink-600 mb-2">
            Software Engineering
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Case Study Characteristics & Applications
          </h1>
        </motion.div>

        {/* Cards Feed */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {casePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  {point.icon}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}