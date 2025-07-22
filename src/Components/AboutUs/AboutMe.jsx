'use client';

import { Users, Globe, Award, Target, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// FadeIn komponenti
function FadeInWhenVisible({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutMe() {
  const stats = [
    { number: "50+", label: "Successful Projects", icon: <Target className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "Expert Lawyers", icon: <Users className="w-6 h-6" /> },
    { number: "10+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <>
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50/30 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <FadeInWhenVisible>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative">
                  <div
                    className="rounded-3xl h-96 bg-cover bg-center shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: "url('https://e-advokat.uz/img/bg2.883eeae3.jpg')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>

                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-semibold text-gray-800">Legal Excellence</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-400/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="space-y-8">
                <div>
                  <div className="inline-block">
                    <h2 className="text-6xl font-black text-gray-900 mb-4">
                      About <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Us</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    <span className="font-bold text-amber-600 text-2xl">AllLegal Uzbekistan</span> stands as a premier legal advisor, providing exceptional and tailored legal services for businesses navigating complex international transactions, disputes, and engagements.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    With a team of ambitious, distinguished professionals, we leverage local knowledge and global experience to drive success. Our people are the foundation of our achievements, fostering a culture of{' '}
                    <span className="font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">excellence and collaboration</span>.
                  </p>
                </div>

                <div className="pt-4">
                  <button className="group flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.15}>
                <div className="group text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
      {/* OUR FIRM BO'LIMI */}
<div className="bg-white relative">
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      
      <FadeInWhenVisible delay={0.1}>
        <div className="lg:sticky lg:top-8 lg:self-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Firm</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100">
              <p className="text-gray-600 mb-2">
                <span className="block text-sm font-medium">Welcome to</span>
                <span className="block text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  AllLegal Uzbekistan
                </span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center space-x-3 text-amber-600 mb-2">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold">Office Hours</span>
              </div>
              <p className="text-gray-600 text-sm">
                Our office is open for you<br/>
                <span className="font-medium">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      <div className="lg:col-span-2 space-y-12">

        <FadeInWhenVisible delay={0.2}>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Local Expertise, Global Reach
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our firm thrives at the intersection of local insight and international perspective. We understand the 
              intricacies of local markets and regulations, while maintaining a global outlook that empowers our clients to 
              navigate cross-border challenges with ease.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl border border-amber-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Our Values and Approach
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              At AllLegal Uzbekistan, we are dedicated to providing legal services of the highest quality, rooted in 
              integrity, excellence, and client-focused solutions.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <div className="bg-gray-900 text-white p-8 rounded-3xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-gray-300">Let's discuss how we can help your business succeed.</p>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="group flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

      </div>
    </div>
  </div>
</div>

    </>
  );
}
