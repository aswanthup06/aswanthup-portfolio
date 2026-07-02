// pages/FullStackDeveloper.tsx or app/FullStackDeveloper/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function FullStackDeveloper() {
  const techStack = [
    "React Full stack", "HTML and CSS", "Redux Toolkit", "Basics of JS",
    "Testing", "React Fundamentals", "Deployment", "Custom Hooks",
    "Node Fundamentals", "Styling with CSS in JS", "Express Js",
    "Tailwind and Bootstrap", "Integration"
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
                  src="/p2.webp"
                  alt="Full Stack Developer Poster"
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
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                  Education
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  Course Poster
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                Become a <span className="text-orange-600">Full Stack</span>
                <br />Developer
              </h1>
              <p className="text-gray-500 text-lg">React Full Stack Course</p>
            </div>

            {/* Description */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
              <h2 className="text-gray-900 font-semibold text-lg mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Course Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A comprehensive Full Stack Development course poster designed to attract aspiring 
                developers. The poster highlights the complete curriculum covering frontend and 
                backend technologies.
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 0v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
                </svg>
                Curriculum Highlights
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Contact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Location</p>
                <p className="text-gray-900 font-semibold mt-1">Kinfra, Kakkanche</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Contact</p>
                <p className="text-orange-600 font-semibold mt-1">+91 8281195520</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <button className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enquiry Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}