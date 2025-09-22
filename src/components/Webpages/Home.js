import React, { useEffect, useState } from "react";
import HeroImg from "../../assests/hero.png"; // replace with your illustration image
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft, FaMobileAlt, FaCode, FaBug, FaCogs } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Mobile App Development",
    description:
      "We build high-performance, cross-platform mobile apps that scale with your business and engage users effectively.",
    icon: <FaMobileAlt className="w-8 h-8 md:w-12 md:h-12 text-pink-500" />,
  },
  {
    title: "Web Design & Development",
    description:
      "Crafting modern, responsive, and fast websites tailored to represent your brand and convert visitors into customers.",
    icon: <FaCode className="w-8 h-8 md:w-12 md:h-12 text-pink-500" />,
  },
  {
    title: "Software Testing Service",
    description:
      "Ensuring bug-free, secure, and efficient applications with our advanced software testing and QA solutions.",
    icon: <FaBug className="w-8 h-8 md:w-12 md:h-12 text-pink-500" />,
  },
  {
    title: "Custom Software Solutions",
    description:
      "Delivering tailor-made software solutions to optimize business workflows, enhance productivity, and ensure growth.",
    icon: <FaCogs className="w-8 h-8 md:w-12 md:h-12 text-pink-500" />,
  },
];

const sections = [
  {
    title: "Trusted by Leading Companies",
    highlight: "to build future-ready software",
    description:
      "At Poeage Technology, we empower businesses by extending their development capacity, ensuring innovation and quality across every project lifecycle.",
    link: "Discover More",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Meet the People",
    highlight: "We Collaborate With",
    description:
      "Our team works closely with global clients, building partnerships that drive innovation, efficiency, and business growth.",
    link: "Meet Our Team",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Innovative Solutions",
    highlight: "That Scale Globally",
    description:
      "We design solutions that adapt and scale seamlessly, helping startups and enterprises stay ahead in the digital era.",
    link: "Explore Solutions",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Your Success, Our Goal",
    highlight: "Partner With Poeage",
    description:
      "We are committed to shaping your long-term success by delivering cutting-edge IT solutions tailored for your business.",
    link: "Get Started Today",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HomeServicesMerged() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Great <span className="text-cyan-600">Product</span> is <br />
              <span className="font-extrabold">
                built by great <span className="text-cyan-600">teams</span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              We help build and manage a team of world-class developers to bring your vision to life.
            </p>
            <motion.button
              onClick={() => navigate("/quotes")}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md font-medium shadow-md hover:opacity-90 transition"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s get started!
            </motion.button>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={HeroImg} alt="Team working illustration" className="w-full max-w-md md:max-w-xl" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-white px-5 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Services we offer</h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          centeredSlides={false}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center text-center h-full ${
                    isActive ? "bg-white border border-pink-200" : "bg-gray-50"
                  }`}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3
                    className={`text-lg md:text-2xl font-semibold mb-3 ${
                      isActive ? "text-pink-600" : "text-gray-800"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Informational Sections with Zigzag Layout */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-5 md:px-10">
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-10 items-center mb-16"
          >
            {index % 2 === 0 ? (
              <>
                {/* Image Left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative order-1"
                >
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="rounded-xl shadow-lg w-full h-64 md:h-96 object-cover"
                  />
                </motion.div>

                {/* Text Right */}
                <div className="order-2">
                  <div className="h-1 w-12 bg-pink-600 mb-4"></div>
                  <h2 className="text-xl md:text-4xl font-bold mb-4">
                    {sec.title} <br />
                    <span className="text-gray-900 font-extrabold">
                      {sec.highlight}
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-5 text-sm md:text-lg leading-relaxed">
                    {sec.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-pink-600 font-medium hover:underline text-sm md:text-lg"
                  >
                    {sec.link} <FaArrowRight />
                  </a>
                </div>
              </>
            ) : (
              <>
                {/* Text Left */}
                <div className="order-2 md:order-1">
                  <div className="h-1 w-12 bg-pink-600 mb-4"></div>
                  <h2 className="text-xl md:text-4xl font-bold mb-4">
                    {sec.title} <br />
                    <span className="text-gray-900 font-extrabold">
                      {sec.highlight}
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-5 text-sm md:text-lg leading-relaxed">
                    {sec.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-pink-600 font-medium hover:underline text-sm md:text-lg"
                  >
                    {sec.link} <FaArrowRight />
                  </a>
                </div>

                {/* Image Right */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative order-1 md:order-2"
                >
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="rounded-xl shadow-lg w-full h-64 md:h-96 object-cover"
                  />
                </motion.div>
              </>
            )}
          </motion.div>
        ))}

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end gap-4 mt-8"
        >
          <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition">
            <FaArrowLeft />
          </button>
          <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition">
            <FaArrowRight />
          </button>
        </motion.div>
      </section>
    </>
  );
}