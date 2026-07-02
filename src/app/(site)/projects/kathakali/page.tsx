import React from "react";
import { CiGlobe } from "react-icons/ci";
import {
  LuArrowUpRight,
  LuCalendar,
  LuUser,
  LuTag,
  LuEye,
  LuBrush,
  LuPalette,
  LuShirt,
} from "react-icons/lu";

export default function PosterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white py-16 px-6 pt-38">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT - Square Poster */}
          <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50">
            <img
              src="/kadha.webp"
              alt="Kathakali T-Shirt Design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT - Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-xs text-gray-600 font-medium">
                T-Shirt Printing Collection
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Kathakali & Theyyam
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-orange-600 mt-1">
              Digital Art for Apparel
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              A striking collection of digital illustrations featuring Kathakali
              and Theyyam art forms, specially designed for t-shirt printing.
              These high-contrast, bold designs capture the dramatic expressions
              and intricate details of traditional Kerala performing arts,
              perfect for streetwear and cultural apparel.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center">
                  <LuCalendar className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Year</p>
                  <p className="font-medium text-gray-800">2024</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center">
                  <LuShirt className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Print Type</p>
                  <p className="font-medium text-gray-800">
                    DTG / Screen Print
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center">
                  <LuTag className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Format</p>
                  <p className="font-medium text-gray-800">Vector / PNG</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center">
                  <LuEye className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Collection</p>
                  <p className="font-medium text-orange-600">15+ Designs</p>
                </div>
              </div>
            </div>

            {/* Art Forms */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Design Themes
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                  Kathakali Faces
                </span>
                <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                  Theyyam Headgear
                </span>
                <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                  Traditional Vesham
                </span>
                <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                  Dramatic Expressions
                </span>
              </div>
            </div>

            {/* Tools Used */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Tools Used
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg flex items-center gap-1">
                  <LuPalette className="text-sm" /> Adobe Illustrator
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg">
                  Photoshop
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
