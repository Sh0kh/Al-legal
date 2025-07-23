'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Briefcase, Star, ScrollText } from 'lucide-react';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen bg-[#f9f9f9] flex items-center justify-center px-4 py-20 overflow-hidden">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 text-center w-full z-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Join Us at{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
            AllLegal
          </span>
        </h1>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 z-10">
        {[Briefcase, Star, ScrollText].map((Icon, idx) => (
          <motion.div
            key={idx}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 + idx }}
            className="bg-white shadow-md p-3 rounded-full border border-gray-200"
          >
            <Icon className="text-yellow-500" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 w-full max-w-2xl z-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all hover:scale-[1.01]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border my-[20px] border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all hover:scale-[1.01]"
        />

        <textarea
          name="message"
          placeholder="Description..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg h-28 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all hover:scale-[1.01]"
        />

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-md transition"
        >
          <Send size={20} />
          Send
        </motion.button>
      </motion.div>
    </section>
  );
}
