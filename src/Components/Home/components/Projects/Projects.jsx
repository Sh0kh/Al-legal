import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Plane, Home, ShoppingCart, ExternalLink } from 'lucide-react';

export default function ProjectsHome() {
  const projects = [
    {
      image: "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
      title: "Technological Breakthrough: Dutch Resident of Cyber Park",
      description: "PraeLegal Uzbekistan provided full legal support to the Dutch company Soteryan B.V. (created in Amsterdam) during their establishment in Uzbekistan's Cyber Park, handling all regulatory compliance and intellectual property protections.",
      icon: <Globe className="w-5 h-5" />,
      category: "Technology",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-500",
      textColor: "text-white",
      overlay: "bg-pink-400/60"
    },
    {
      image: "https://www.itcsa.es/wp-content/uploads/airport-terminal-building.jpg",
      title: "Qatar Airways: Conquering New Skies",
      description: "Facilitated Qatar Airways' expansion into Uzbekistan, navigating complex bilateral air service agreements and regulatory frameworks for new routes.",
      icon: <Plane className="w-5 h-5" />,
      category: "Aviation",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-500",
      textColor: "text-white",
      overlay: "bg-pink-400/60"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
      title: "EPCM: Legal Support for Residential Complex Project",
      description: "Served as legal partner for Tashkent's innovative residential development, ensuring compliance with urban planning laws and construction standards.",
      icon: <Home className="w-5 h-5" />,
      category: "Construction",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500",
      textColor: "text-white",
      overlay: "bg-orange-500/60"
    },
    {
      image: "https://estatematee.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-23-at-5.01.34-PM-1024x682.jpeg",
      title: "A New Era of Shopping Malls : in Uzbekistan",
      description: "Legal support for Uzbekistan's first international-scale shopping mall, handling lease agreements, vendor contracts, and regulatory approvals.",
      icon: <ShoppingCart className="w-5 h-5" />,
      category: "Retail",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-500",
      textColor: "text-white",
      overlay: "bg-orange-500/60"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-start mb-20">
          <div className="inline-block">
            <h1 className="text-6xl font-black bg-amber-600 bg-clip-text text-transparent mb-4">
              Our Projects
            </h1>
            <div className="flex justify-start">
              <div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[1px] bg-white rounded-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${project.overlay} transition-opacity duration-300 group-hover:opacity-0`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center space-x-2 ${project.bgColor} rounded-full px-3 py-1`}>
                      <div className={`${project.textColor}`}>
                        {project.icon}
                      </div>
                      <span className={`text-xs font-semibold ${project.textColor}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {project.title.split(':')[0]}:
                    <span className="text-amber-600 ml-1">
                      {project.title.split(':')[1]}
                    </span>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <button className="flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                    Read case study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="group relative px-10 py-4 bg-amber-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              View All Case Studies
              <div className="ml-3 w-6 h-6 border-2 border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-3 h-3" />
              </div>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
