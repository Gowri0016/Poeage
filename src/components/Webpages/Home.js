import React, { useEffect, useState } from "react";
import HeroImg from "../../assests/hero.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft, FaGlobe, FaCode, FaRobot, FaCloud } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "AI-Powered Automation",
    description:
      "Integrating intelligent automation with AI to revolutionize workflows and boost operational efficiency.",
    icon: <FaRobot className="w-10 h-10 text-cyan-400 drop-shadow-lg" />,
  },
  {
    title: "Modern Web Experiences",
    description:
      "Building sleek, high-performance websites that tell your brand story and engage global audiences.",
    icon: <FaGlobe className="w-10 h-10 text-cyan-400 drop-shadow-lg" />,
  },
  {
    title: "Custom Cloud Architecture",
    description:
      "Designing scalable cloud infrastructure to ensure seamless integration and top-tier reliability.",
    icon: <FaCloud className="w-10 h-10 text-cyan-400 drop-shadow-lg" />,
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Delivering robust, end-to-end solutions across web, mobile, and enterprise environments.",
    icon: <FaCode className="w-10 h-10 text-cyan-400 drop-shadow-lg" />,
  },
];

const sections = [
  {
    title: "Innovate with Poeage",
    highlight: "Turning Ideas into Reality",
    description:
      "We fuse creativity, technology, and strategy to help brands build future-proof digital ecosystems.",
    link: "Explore Our Vision",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Collaborate Globally",
    highlight: "Empowering Teams Worldwide",
    description:
      "From startups to enterprises, Poeage partners with organizations across continents to scale innovation.",
    link: "Join Our Network",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Beyond Technology",
    highlight: "Creating Meaningful Impact",
    description:
      "We don’t just build solutions — we shape digital experiences that drive transformation.",
    link: "See How We Work",
    image:
      "https://media.gettyimages.com/id/1556389414/video/man-using-a-laptop-double-exposure-with-business-data-analytics-dashboard.jpg?s=640x640&k=20&c=dG7--W8MQuUsuVTaYg7kplrnAkNUoeH6u02Nn_SCwfE=",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HomeServicesUnique() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-100 via-white to-blue-100 min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-[120px] opacity-30 animate-pulse"
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-[100px] opacity-25 animate-pulse"
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-snug">
              Transform <span className="text-cyan-600">Ideas</span> into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Digital Reality
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              Poeage Technology crafts intelligent digital solutions that empower businesses to innovate and thrive globally.
            </p>
            <motion.button
              onClick={() => navigate("/quotes")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={HeroImg}
              alt="Hero"
              className="w-full max-w-lg drop-shadow-3xl hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-cyan-600">Expertise</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We deliver world-class software solutions crafted with innovation, scalability, and precision.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="max-w-6xl mx-auto"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 border border-cyan-100 rounded-3xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center backdrop-blur-md"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Zigzag Parallax Info Section */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50 px-6 md:px-10">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="rounded-2xl w-full h-72 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </motion.div>

            <div className="space-y-5">
              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                {sec.title} <br />
                <span className="text-cyan-600">{sec.highlight}</span>
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {sec.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:gap-3 transition-all duration-300"
              >
                {sec.link} <FaArrowRight />
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}