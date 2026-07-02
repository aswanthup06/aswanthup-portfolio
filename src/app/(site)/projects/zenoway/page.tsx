import React from "react";
import { CiGlobe } from "react-icons/ci";
import {
  LuArrowUpRight,
  LuBriefcase,
  LuLayoutDashboard,
  LuMail,
  LuUsers,
  LuChartBar,
  LuClock,
  LuCircleCheck,

} from "react-icons/lu";

export default function Zenoway() {
  const userScreens = [
    { id: 1, src: "/assets/zenoway/zenoway1.webp", title: "Job Discovery", desc: "Browse opportunities" },
    { id: 2, src: "/assets/zenoway/zenoway3.webp", title: "Application Flow", desc: "Direct HR contact" },
    { id: 3, src: "/assets/zenoway/zenoway2.webp", title: "Career Portal", desc: "Simple navigation" },
  ];

  const adminScreens = [
    { id: 1, src: "/zenad1.png", title: "Dashboard Analytics", desc: "Track platform activity" },
    { id: 2, src: "/zenad2.png", title: "Content Management", desc: "Update job listings" },
    { id: 3, src: "/zenad3.png", title: "Update & Add", desc: "Job Update" },
  ];

  const features = [
    { icon: LuMail, title: "Direct HR Contact", desc: "Email-based applications, no login required", color: "orange" },
    { icon: LuBriefcase, title: "Easy Applications", desc: "Quick job discovery and apply flow", color: "blue" },
    { icon: LuLayoutDashboard, title: "Modern Interface", desc: "Clean, responsive design system", color: "green" },
    { icon: LuUsers, title: "User First", desc: "Minimal onboarding process", color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-50 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-600">Personal Project • 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
              Simple Career Portal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                For Modern Hiring
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
              Zenoway is a lightweight career platform designed to make job discovery 
              fast and straightforward. Users can directly connect with HR through 
              email-based applications without complex onboarding.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="https://www.zenoway.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-500 transition-all duration-300 text-white px-6 py-3 rounded-xl shadow-lg"
              >
                <CiGlobe className="text-xl" />
                Visit Website
                <LuArrowUpRight className="text-lg" />
              </a>
              
              <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-gray-600">First Phase Live</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className=" rounded-xl"></div>
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582079767878-082f4300d386?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Zenoway Dashboard"
                className="w-full h-100 object-cover"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-6 left-6 md:left-12 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="bg-orange-100 p-2 rounded-full">
                <LuMail className="text-orange-500 text-lg" />
              </div>
              <div>
                <p className="font-semibold text-sm">Direct HR Contact</p>
                <p className="text-xs text-gray-400">No login required</p>
              </div>
            </div>
            
            <div className="absolute -top-6 right-6 md:right-12 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="bg-blue-100 p-2 rounded-full">
                <LuBriefcase className="text-blue-500 text-lg" />
              </div>
              <div>
                <p className="font-semibold text-sm">Easy Applications</p>
                <p className="text-xs text-gray-400">Fast career discovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">0</p>
              <p className="text-sm text-gray-500 mt-1">Login Required</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">1-Click</p>
              <p className="text-sm text-gray-500 mt-1">Application Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500 mt-1">HR Direct Connect</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">Modern</p>
              <p className="text-sm text-gray-500 mt-1">Responsive UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <LuClock className="text-2xl text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">The Problem</h3>
              <p className="text-gray-300 leading-relaxed">
                Most career platforms force users through lengthy onboarding flows, 
                complex login systems, and frustrating application processes before 
                they can even apply for a single job.
              </p>
            </div>
            
            <div className="bg-orange-500 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <LuCircleCheck className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">The Solution</h3>
              <p className="text-orange-50 leading-relaxed">
                Zenoway removes unnecessary barriers. Users discover opportunities instantly 
                and connect with recruiters through direct HR email integration — no 
                accounts, no passwords, no friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">Why Zenoway</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Designed for simplicity</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Every feature is built around one core principle — making job discovery fast and effortless
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === 'orange' ? 'bg-orange-100 text-orange-500' :
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-500' :
                  feature.color === 'green' ? 'bg-green-100 text-green-500' :
                  'bg-purple-100 text-purple-500'
                }`}>
                  <feature.icon className="text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Screens */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">User Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Platform interface showcase</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Clean layouts, modern typography, and intuitive navigation for a smooth browsing experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userScreens.map((item) => (
              <div key={item.id} className="group">
                <div className="bg-gray-100  overflow-hidden border-gray-200 border">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full  object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Dashboard */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">Admin Dashboard</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Simple management system</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Clean admin experience for managing opportunities and monitoring platform activity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {adminScreens.map((item) => (
              <div key={item.id} className=" overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-60 object-cover border-gray-200 border"
                />
                <div className="mt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <LuChartBar className="text-gray-400 text-sm" />
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to simplify hiring?</h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Zenoway is currently in first phase. Visit the website to see the live platform.
            </p>
            <a
              href="https://www.zenoway.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded-xl font-medium"
            >
              <CiGlobe className="text-xl" />
              Visit Zenoway
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}