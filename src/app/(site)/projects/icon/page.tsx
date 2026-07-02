import React from "react";
import { 
  LuCalendar, 
  LuClock, 
  LuUsers, 
  LuVideo, 
  LuMessageSquare,
  LuFileText,
  LuActivity,
  LuShield,
  LuStar,
  LuAward
} from "react-icons/lu";

export default function DoctorIconShowcase() {

  return (
    <div className="min-h-screen bg-white py-12 px-6 pt-38">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* LEFT - Image */}
          <div className="sticky top-12">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="/Pharmacy.webp"
                alt="Doctor Platform App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* RIGHT - Icon Details */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-xs text-blue-600 font-medium">Icon Design System</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Doctor Platform
              </h1>
              <h2 className="text-xl text-gray-500 mt-1 font-normal">
                Professional Icons for Healthcare App
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                A complete set of custom icons designed specifically for doctor 
                platforms and telemedicine applications. Clean, intuitive, and 
                medically-focused visual language.
              </p>
            </div>

        
     

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <LuStar className="text-amber-500" />
                  <span className="text-sm text-gray-600">12 Icons Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuAward className="text-blue-500" />
                  <span className="text-sm text-gray-600">Professional Use</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}