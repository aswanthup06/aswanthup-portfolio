// pages/ChavieSolutionsServices.tsx or app/ChavieSolutionsServices/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function ChavieSolutionsServices() {
  const services = [
    "Custom Web Application Development",
    "Digital Transformation Consultation",
    "Mobile Application Development"
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-8 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Square Poster */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative w-full h-full">
                <Image
                  src="/p3.webp"
                  alt="Chavie Solutions Services Poster"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-6">
            {/* Title Section */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                  Services
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                  Consultation
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                Chavie <span className="text-indigo-600">Solutions</span>
              </h1>
              <p className="text-gray-500 text-lg italic">Helping you make your smart moves</p>
            </div>

            {/* Services List */}
            <div className="bg-gradient-to-r from-indigo-50 to-teal-50 rounded-xl p-6 border border-indigo-200">
              <h2 className="text-gray-900 font-semibold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Our Services
              </h2>
              <div className="space-y-3">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-indigo-100">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <p className="text-gray-800 font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <p className="text-gray-600 leading-relaxed text-sm">
                A professional service poster designed for Chavie Solutions, showcasing their core 
                offerings in web development, digital transformation, and mobile applications. The 
                design emphasizes clarity and professionalism with a bright, approachable aesthetic.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">Email</p>
                  <p className="text-indigo-600 font-semibold">Contact@chaviesolutions.com</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">Phone</p>
                  <p className="text-teal-600 font-semibold">+91 808 673 0010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}