import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cloud as CloudIcon, Upload, Download, Database, Shield, Server, Globe, Zap, Lock } from "lucide-react";
import { Header } from "./Header"; // ✅ Import your Header
import Footer  from "../Webpages/Footer"; // ✅ Import your Footer

export default function CloudServices() {
  const [billing, setBilling] = useState("monthly");

  const storageFeatures = [
    { icon: <Upload className="w-6 h-6 text-sky-600" />, title: "Easy Upload", desc: "Upload files instantly with drag-and-drop." },
    { icon: <Download className="w-6 h-6 text-indigo-600" />, title: "Quick Download", desc: "Access and download your files in seconds." },
    { icon: <Database className="w-6 h-6 text-green-600" />, title: "Smart Database", desc: "Organize files efficiently with AI-driven indexing." },
    { icon: <Shield className="w-6 h-6 text-red-600" />, title: "Advanced Security", desc: "End-to-end encryption protects all your data." },
  ];

  const extraServices = [
    { icon: <Globe className="w-6 h-6 text-blue-600" />, title: "Global Access", desc: "Sync your files anywhere in the world with low latency." },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "High Performance", desc: "Experience super-fast file transfers and backups." },
    { icon: <Lock className="w-6 h-6 text-purple-600" />, title: "Zero Trust Security", desc: "Multi-layer security for businesses and enterprises." },
  ];

  const plans = [
    {
      name: "Starter",
      storage: "50GB",
      features: ["Secure Uploads", "Basic Support", "Single Device"],
      monthly: "$5",
      yearly: "$50",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Professional",
      storage: "200GB",
      features: ["Priority Support", "Multi-device Sync", "AI Indexing"],
      monthly: "$12",
      yearly: "$120",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Business",
      storage: "1TB",
      features: ["Team Accounts", "Advanced Security", "24/7 Support"],
      monthly: "$25",
      yearly: "$250",
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Enterprise",
      storage: "Unlimited",
      features: ["Custom Solutions", "Dedicated Manager", "SLA Guarantee"],
      monthly: "Custom",
      yearly: "Custom",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <>
      <Header />
      <motion.div
        className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-16 px-6 lg:px-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <CloudIcon className="w-16 h-16 text-blue-500 drop-shadow-md" />
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-blue-800">
            Poeage Cloud Services
          </h1>
          <p className="mt-2 text-blue-600 max-w-2xl">
            Secure, scalable, and lightning-fast cloud storage & services for modern businesses.
          </p>
        </div>

        {/* Core Features */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {storageFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow hover:shadow-lg transition border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.7 }}
            >
              {feature.icon}
              <h4 className="mt-3 text-lg font-semibold text-blue-800">
                {feature.title}
              </h4>
              <p className="text-sm text-blue-600 text-center mt-2">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra Services */}
        <div className="mt-20">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-blue-800 mb-8">
            More Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {extraServices.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow hover:shadow-md transition border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.7 }}
              >
                {service.icon}
                <h4 className="mt-3 text-lg font-semibold text-blue-800">
                  {service.title}
                </h4>
                <p className="text-sm text-blue-600 text-center mt-2">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Storage Usage */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative">
            <CloudIcon className="w-20 h-20 text-blue-500 drop-shadow-lg" />
            <Server className="w-8 h-8 text-white absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1.5 shadow" />
          </div>
          <div className="mt-5 text-center bg-white/80 px-6 py-3 rounded-xl shadow backdrop-blur-sm">
            <h3 className="font-semibold text-blue-800">Storage Status</h3>
            <div className="flex items-center mt-2">
              <div className="w-32 h-2 bg-blue-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
              </div>
              <span className="text-xs text-blue-700 ml-3">75% used</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4">
            Choose Your Plan
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full font-medium ${billing === "monthly" ? "bg-blue-600 text-white" : "bg-white border text-blue-600"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-2 rounded-full font-medium ${billing === "yearly" ? "bg-blue-600 text-white" : "bg-white border text-blue-600"}`}
            >
              Yearly
            </button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-md border-t-4 bg-gradient-to-br ${plan.color}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.3, duration: 0.7 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-white text-sm mb-4">{plan.storage} Storage</p>
                <p className="text-3xl font-bold text-white mb-6">
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                  <span className="text-base font-medium ml-1">/{billing}</span>
                </p>
                <ul className="text-white text-sm space-y-2 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <button className="w-full bg-white text-blue-700 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}