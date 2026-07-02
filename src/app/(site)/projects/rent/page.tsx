import React from "react";
import { CiGlobe } from "react-icons/ci";
import { LuArrowUpRight, LuCalendar, LuUser, LuTag, LuEye, LuBrush, LuPalette, LuShoppingBag } from "react-icons/lu";

export default function PosterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-6 pt-38">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* LEFT - Square Poster */}
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 flex items-center justify-center">
         
             <img src="/r2.webp" alt="" className="h-full w-full" />
        
          </div>
          
          {/* RIGHT - Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs text-gray-600 font-medium">Brand Identity Project</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Rent My Thing
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-blue-600 mt-1">
              Logo Design
            </h2>
            
            <p className="text-gray-600 mt-4 leading-relaxed">
              A modern and memorable logo designed for "Rent My Thing" — a peer-to-peer 
              rental platform that connects people looking to rent items with those who 
              have things to share. The logo captures the essence of sharing economy 
              with a friendly, approachable, and trustworthy visual identity.
            </p>
            
            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                  <LuCalendar className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Year</p>
                  <p className="font-medium text-gray-800">2024</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <LuUser className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Client</p>
                  <p className="font-medium text-gray-800">Rent My Thing</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center">
                  <LuTag className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Category</p>
                  <p className="font-medium text-gray-800">Brand Identity</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                  <LuEye className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Status</p>
                  <p className="font-medium text-green-600">Approved</p>
                </div>
              </div>
            </div>
            
            {/* Logo Variants */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Logo Variants</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">Primary Logo</span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">Horizontal Version</span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">Icon Only</span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">Monochrome</span>
              </div>
            </div>
            
            {/* Tools Used */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Tools Used</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg flex items-center gap-1">
                  <LuBrush className="text-sm" /> Adobe Illustrator
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg flex items-center gap-1">
                  <LuPalette className="text-sm" /> Adobe Photoshop
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg">Figma</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-white px-6 py-3 rounded-xl shadow-lg"
            >
              <CiGlobe className="text-xl" />
              View Full Project
              <LuArrowUpRight className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}