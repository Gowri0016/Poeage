import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// React Icons
import { FaMobileAlt, FaCode, FaBug, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Mobile App Development",
    description:
      "We build high-performance, cross-platform mobile apps that scale with your business and engage users effectively.",
    icon: <FaMobileAlt className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Web Design & Development",
    description:
      "Crafting modern, responsive, and fast websites tailored to represent your brand and convert visitors into customers.",
    icon: <FaCode className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Software Testing Service",
    description:
      "Ensuring bug-free, secure, and efficient applications with our advanced software testing and QA solutions.",
    icon: <FaBug className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Custom Software Solutions",
    description:
      "Delivering tailor-made software solutions to optimize business workflows, enhance productivity, and ensure growth.",
    icon: <FaCogs className="w-10 h-10 text-pink-500" />,
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

export default function Services() {
  return (
    <>
      <section className="py-12 bg-[#fafafe] md:px-6 px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Services we offer
          </h2>
        </motion.div>


        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          centeredSlides={true}
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-5 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center text-center h-full ${isActive ? 'bg-white' : ''}`}
                >
                  <div className="mb-3">{service.icon}</div>
                  <h3 className={`text-lg md:text-xl font-semibold mb-2 ${isActive ? 'text-pink-600' : 'text-gray-800'}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">{service.description}</p>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Informational Sections with Zigzag Layout */}
      <section className="py-12 bg-white max-w-7xl mx-auto md:px-6 px-4">
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8 items-center mb-16"
          >
            {/* Left or Right Image Based on Index */}
            {index % 2 === 0 ? (
              <>
                {/* Image Left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative order-1 md:order-1"
                >
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
                  />
                </motion.div>

                {/* Text Right */}
                <div className="order-2 md:order-2">
                  <div className="h-1 w-10 bg-pink-600 mb-3"></div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {sec.title} <br />
                    <span className="text-gray-900 font-extrabold">
                      {sec.highlight}
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {sec.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-pink-600 font-medium hover:underline text-sm md:text-base"
                  >
                    {sec.link} <FaArrowRight />
                  </a>
                </div>
              </>
            ) : (
              <>
                {/* Text Left */}
                <div className="order-2 md:order-1">
                  <div className="h-1 w-10 bg-pink-600 mb-3"></div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {sec.title} <br />
                    <span className="text-gray-900 font-extrabold">
                      {sec.highlight}
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {sec.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-pink-600 font-medium hover:underline text-sm md:text-base"
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
                    className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
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
          className="flex justify-center md:justify-end gap-3 mt-6"
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