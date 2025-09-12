import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";

// Updated daily blog posts with relevant images & article text
const blogPosts = [
  {
    id: 1,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    content:
      "Scaling to a million users requires a robust architecture. AWS offers EC2, S3, RDS, and load balancers that can handle massive traffic while keeping costs optimized.",
  },
  {
    id: 2,
    title: "5 Key Tech Practices for Modern Startups",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=60",
    content:
      "Agility, CI/CD pipelines, strong code reviews, cloud-native infrastructure, and adopting AI tools are essential practices for modern startups to thrive.",
  },
  {
    id: 3,
    title: "Why Code Reviews Improve Team Productivity",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    content:
      "Code reviews encourage knowledge sharing, reduce bugs, and improve code quality. Teams become more efficient and collaborative when feedback loops are shorter.",
  },
  {
    id: 4,
    title: "The Importance of Weekly Demos in Agile Teams",
    image: "https://tryscrumlive.vervebot.io/wp-content/uploads/2022/03/sprint-reviews-01.png",
    content:
      "Weekly demos keep stakeholders updated, align developers with business goals, and provide early feedback to avoid costly pivots later in the project.",
  },
  {
    id: 5,
    title: "Trends in Cloud Computing for 2025",
    image: "data:image/jpeg;base64,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",
    content:
      "Cloud-native development, serverless functions, AI-driven scaling, and multi-cloud strategies are shaping the way businesses leverage cloud in 2025.",
  },
  {
    id: 6,
    title: "AI Integration: How Businesses Gain Competitive Advantage",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=60",
    content:
      "From predictive analytics to chatbots and workflow automation, AI integration enables businesses to optimize operations and stay ahead of competition.",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
    <Header />
    <div className="bg-[#f9fbff] py-16 px-6 md:px-12 lg:px-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-sm uppercase tracking-wide text-pink-600 mb-2">
          Daily Updates
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Poeage Technology Blog
        </h1>
      </motion.div>

      {/* Blog Cards or Selected Article */}
      {selectedPost ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8"
        >
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="rounded-xl mb-6 w-full h-72 object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedPost.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {selectedPost.content}
          </p>
          <button
            onClick={() => setSelectedPost(null)}
            className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-all"
          >
            ← Back to Blog
          </button>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.content}
                </p>
                <span className="text-pink-600 font-semibold hover:underline">
                  Read More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}