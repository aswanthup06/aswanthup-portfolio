import React from "react";

export default function Nvocc() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* HERO SECTION - Modern Split Layout with Overlay */}
      <div className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="Container ship ocean freight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="flex gap-3 mb-8">
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20">Case Study</span>
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20">2024</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              NVOCC Platform
            </h1>
            <p className="text-xl text-gray-200 mt-4">Non-Vessel Operating Common Carrier</p>
            
            <div className="flex flex-wrap gap-6 mt-10 pt-6">
              <div>
                <p className="text-sm text-gray-300 uppercase tracking-wide">Duration</p>
                <p className="text-xl font-medium text-white mt-1">4 Months</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-sm text-gray-300 uppercase tracking-wide">My Role</p>
                <p className="text-xl font-medium text-white mt-1">UI Development</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-sm text-gray-300 uppercase tracking-wide">Tech Stack</p>
                <p className="text-xl font-medium text-white mt-1">Next.js, Tailwind CSS</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-sm text-gray-300 uppercase tracking-wide">Screens</p>
                <p className="text-xl font-medium text-white mt-1">50+ Pages</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERVIEW SECTION - Floating Card Style */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Overview</h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  The NVOCC platform was contracted to our company by 6solve IT Services, 
                  involving the development of three core modules for a full-stack web application.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  With cloud-based data access, historical records, and analytics, the system 
                  enhances operational efficiency, reduces costs, and ensures compliance. The 
                  intuitive interface supports quick decision-making while maintaining security 
                  and scalability for global shipping operations.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-3xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-500 mt-1">Pages Developed</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-3xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-500 mt-1">Core Modules</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-3xl font-bold text-gray-900">90%</p>
                  <p className="text-sm text-gray-500 mt-1">Figma Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE SECTION - With Gradient Background */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">My Role</h2>
            <div className="w-16 h-1 bg-gray-900 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              End-to-end UI development of the NVOCC platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Figma to Code", desc: "Converted 50+ pages with 90% accuracy" },
              { icon: "M4 7v10c0 2 1.5 4 4 4h8c2.5 0 4-2 4-4V7M4 7h16M12 12a3 3 0 100-6 3 3 0 000 6z", title: "SVG Optimization", desc: "Reusable React components" },
              { icon: "M12 18v-5m0 0V8m0 5h5m-5 0H7M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707", title: "Responsive Design", desc: "Mobile, tablet & desktop" }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE MODULES - With Image Pairs for Each Module */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Core Modules</h2>
            <div className="w-16 h-1 bg-gray-900 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-500">The platform consists of three main modules</p>
          </div>
          
          <div className="space-y-24 mt-16">
            {/* Module 1 - Export */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Module 01</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Export Module</h3>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Manages export-bound containers, ensuring efficient size and type selection, 
                  optimal stuffing, and data storage for logistics tracking from allocation to documentation.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Container allocation and tracking</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Size and type optimization</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Documentation management</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <img src="/exp1.png" alt="Export module screen 1" className="rounded-xl shadow-lg w-full h-48 object-cover" />
                  <img src="/exp2.png" alt="Export module screen 2" className="rounded-xl shadow-lg w-full h-48 object-cover mt-6" />
                </div>
              </div>
            </div>

            {/* Module 2 - Import */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Module 02</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Import Module</h3>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Handles imported containers arriving at ports, managing all steps from receipt 
                  until destuffing, including routing empty containers to maintenance.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Port arrival management</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Destuffing workflow</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Empty container routing</li>
                </ul>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/imp1.png" alt="Import module screen 1" className="rounded-xl shadow-lg w-full h-48 object-cover" />
                  <img src="/imp2.png" alt="Import module screen 2" className="rounded-xl shadow-lg w-full h-48 object-cover mt-6" />
                </div>
              </div>
            </div>

            {/* Module 3 - Maintenance & Repair */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">Module 03</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Maintenance & Repair</h3>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Manages container maintenance and repair, documenting all details including 
                  damage assessment and sound condition status.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>Damage assessment tracking</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>Repair workflow management</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>Condition status monitoring</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <img src="/mr1.png" alt="Maintenance and repair module screen 1" className="rounded-xl shadow-lg w-full h-48 object-cover" />
                  <img src="/mr2.png" alt="Maintenance and repair module screen 2" className="rounded-xl shadow-lg w-full h-48 object-cover mt-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY RESPONSIBILITY DETAIL - Split Layout with Overlapping Images */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">My Responsibility</h2>
                <div className="w-12 h-1 bg-gray-900 mt-4 mb-6"></div>
                <p className="text-gray-600 leading-relaxed">
                  As part of my role, I successfully converted a Figma design into a high-performance 
                  Next.js application using Tailwind CSS, meticulously translating 50+ pages with 
                  90% accuracy to match the original design specifications.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To optimize performance, I converted all SVG assets into reusable React components, 
                  reducing load times and improving maintainability. Additionally, I ensured the 
                  application was fully responsive across all devices, rigorously testing layouts on 
                  mobile, tablet, and desktop screens.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  By leveraging Next.js features and Tailwind's utility-first approach, I delivered 
                  a scalable, efficient, and visually consistent web application that aligns perfectly 
                  with the design vision.
                </p>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-200 rounded-full -z-0"></div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
                    alt="Development work" 
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" 
                    alt="Code and design" 
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gray-900 rounded-full -z-0 opacity-5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS - Split Stats with Brand Accent */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white tracking-tight">The Results</h2>
            <div className="w-16 h-1 bg-white/30 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <p className="text-5xl font-bold text-white">50+</p>
              <p className="text-gray-400 mt-2">Pages Developed</p>
              <div className="w-12 h-0.5 bg-white/20 mx-auto mt-4"></div>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <p className="text-5xl font-bold text-white">90%</p>
              <p className="text-gray-400 mt-2">Figma Accuracy</p>
              <div className="w-12 h-0.5 bg-white/20 mx-auto mt-4"></div>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <p className="text-5xl font-bold text-white">100%</p>
              <p className="text-gray-400 mt-2">Responsive Coverage</p>
              <div className="w-12 h-0.5 bg-white/20 mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK - Pills with Icons */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Tech Stack</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto mt-4 mb-8"></div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Sequelize ORM", "AWS"].map((tech, idx) => (
              <span key={idx} className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}